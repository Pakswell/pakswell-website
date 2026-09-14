import * as T from 'three';
import '../hinge-viewer/vendor/d3-delaunay.min.js';
import {createHinge,holes} from '../hinge-viewer/model.js?revision=tongue-clearance-v11';
import {EPAL_OUTLINES,IPPC_OUTLINES,EPAL_BOUNDS,IPPC_BOUNDS} from './mark-outlines.js';

// Millimetres. Nominal structure from the supplied drawings; collar timber
// thickness changed to 19 mm at the customer's explicit request.
export const SPEC = {pallet:{length:1200,width:800,height:144,boards:11,blocks:9,nails:78},collar:{height:195,thickness:19,outerLength:1195,outerWidth:795},lid:{length:1200,width:800,thickness:9,stripWidth:50,stripThickness:9,cornerCut:25}};
const cache=new Map();
function bevelBox(l,h,w,r=.8){
 const key=[l,h,w,r].join('/');if(cache.has(key))return cache.get(key);
 // Extrusion is along grain (local X); the tiny bevel catches a soft highlight.
 const s=new T.Shape(),a=w/2-r,b=h/2-r;
 s.moveTo(-a,-b);s.lineTo(a,-b);s.lineTo(a,b);s.lineTo(-a,b);s.closePath();
 const g=new T.ExtrudeGeometry(s,{depth:l-2*r,bevelEnabled:true,bevelThickness:r,bevelSize:r,bevelSegments:2,steps:1,curveSegments:1});
 g.translate(0,0,-(l-2*r)/2);g.rotateY(Math.PI/2);g.computeVertexNormals();cache.set(key,g);return g;
}
export function makeMaterials(texture){
 const makeWood=(i,matched=false)=>{
  const variation=matched?0:(i%3)*.006;
  const material=new T.MeshStandardMaterial({color:new T.Color().setRGB(.98+variation,.974+variation,.962+variation),roughness:.74,metalness:0});
  material.name=(matched?'collar-timber-':'timber-')+i;
  material.onBeforeCompile=s=>{
   s.uniforms.matchCollarTone={value:matched?1:0};
   s.uniforms.woodMap={value:texture};s.uniforms.grainOffset={value:new T.Vector2(i%3,Math.floor(i/3))};s.uniforms.faceWidth={value:i===12?840:210};
   s.vertexShader='varying vec3 timberPosition; varying vec3 timberNormal;\n'+s.vertexShader;
   s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntimberPosition=position;timberNormal=normal;');
   s.fragmentShader='uniform sampler2D woodMap; uniform vec2 grainOffset; uniform float faceWidth; uniform float matchCollarTone; varying vec3 timberPosition; varying vec3 timberNormal;\n'+s.fragmentShader;
   s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    vec3 n=abs(normalize(timberNormal));
    // Clean, newly planed faces from the supplied three-tier collar photo.
    // Deliberately exclude the dark knot-heavy boards used in revision 2.
    float u=clamp(timberPosition.x/1240.+.5,0.01,.99);
    if(mod(grainOffset.y,2.)>0.5)u=1.-u;
    float v=clamp((n.y>n.z?timberPosition.z:timberPosition.y)/faceWidth+.5,.04,.96);
    vec2 a,b,c,d;
    if(grainOffset.x<.5){a=vec2(692.,268.);b=vec2(1240.,271.);c=vec2(692.,396.);d=vec2(1240.,386.);}
    else if(grainOffset.x<1.5){a=vec2(700.,596.);b=vec2(1230.,554.);c=vec2(700.,711.);d=vec2(1230.,661.);}
    else {a=vec2(328.,270.);b=vec2(580.,276.);c=vec2(328.,385.);d=vec2(580.,399.);}
    if(grainOffset.y>3.5){a=vec2(720.,275.);b=vec2(1225.,279.);c=vec2(720.,305.);d=vec2(1225.,300.);}
    // Small continuous crops vary the boards without mirrored seams or
    // repeating a conspicuous knot across every pallet deck board.
    u=mix(.025*mod(grainOffset.y,3.),.94+.015*mod(grainOffset.y,3.),u);
    vec2 photo=mix(mix(c,d,u),mix(a,b,u),v)/vec2(1600.,900.);
    photo.y=1.-photo.y;
    vec3 grain=texture2D(woodMap,photo).rgb;
    if(matchCollarTone>.5){
     // These three real-photo crops have different illumination, not different
     // timber grades. Match their measured linear-light RGB means while keeping
     // each board's authentic grain. Do not change pallet or plywood materials.
     vec3 sourceMean=grainOffset.x<.5?vec3(.536069,.514371,.452977):(grainOffset.x<1.5?vec3(.521170,.514263,.479494):vec3(.373236,.353858,.295657));
     vec3 relativeGrain=grain/sourceMean;
     grain=vec3(.536069,.514371,.452977)*mix(vec3(1.),relativeGrain,.78);
    }
    // Balance photographic exposure while keeping fine authentic grain.
    // Pale cream, not orange; only very faint natural knot traces remain.
    grain=mix(grain*vec3(1.10,1.035,.93),vec3(.53,.435,.31),.20);
    grain=(grain-vec3(.43))*1.15+vec3(.43);
    float woodHeight=dot(grain,vec3(.2126,.7152,.0722));
    if(n.x>.8){float radius=length(timberPosition.yz-vec2(73.,55.));float rings=sin(radius*.72+sin(radius*.19));grain=mix(grain,vec3(.59,.52,.41)*(1.+rings*.025),.35);}
    diffuseColor.rgb=grain*diffuseColor.rgb;
   `);
   s.fragmentShader=s.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
    // Subtle planed-fibre relief in millimetres, not glossy varnish or a
    // heavily embossed wood normal map. Existing geometric edges are retained.
    vec3 woodDx=dFdx(-vViewPosition),woodDy=dFdy(-vViewPosition);
    vec3 woodR1=cross(woodDy,normal),woodR2=cross(normal,woodDx);
    float woodDet=dot(woodDx,woodR1);
    vec3 woodGrad=sign(woodDet)*(dFdx(woodHeight)*woodR1+dFdy(woodHeight)*woodR2)*.09;
    normal=normalize(abs(woodDet)*normal-woodGrad);
   `);
  };return material;
 };
 const woods=Array.from({length:13},(_,i)=>makeWood(i));
 const collarWoods=Array.from({length:12},(_,i)=>makeWood(i,true));
 // Match the calibrated rendered finishes in hinge-viewer/studio.js.
 // Layer order is bottom to top: natural zinc, black, mint green.
 const hingeFinishes=[
  ['zinc','#a9ada9',1,.4,.75],
  ['black','#101313',0,.3,.3],
  ['mint','#a7d7a0',0,.22,.3]
 ].map(([finish,color,metalness,roughness,envMapIntensity])=>{
  const m=new T.MeshStandardMaterial({color,metalness,roughness,envMapIntensity});
  m.name='hinge-'+finish;return m;
 });
 const steel=hingeFinishes[0];
 const nail=new T.MeshStandardMaterial({color:'#777c77',metalness:.8,roughness:.52});
 const block=new T.MeshStandardMaterial({color:'#ae9570',roughness:.96});
 block.onBeforeCompile=s=>{
  s.vertexShader='varying vec3 chipPosition; varying vec3 chipNormal;\n'+s.vertexShader;
  s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nchipPosition=position;chipNormal=normal;');
  s.fragmentShader=`varying vec3 chipPosition; varying vec3 chipNormal;
  vec2 chipHash(vec2 p){return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);}
  vec3 chips(vec2 p){vec2 ip=floor(p),fp=fract(p),win=vec2(0.);float closest=9.;for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){vec2 cell=vec2(float(i),float(j));vec2 r=cell+chipHash(ip+cell)-fp;float d=dot(r,r);if(d<closest){closest=d;win=ip+cell;}}vec2 h=chipHash(win+42.);float fiber=sin(dot(p,normalize(h-.5))*42.+h.x*27.);return vec3(mix(.59,1.22,h.x))*(1.+fiber*.048)*(1.-smoothstep(.3,.8,closest)*.13);}
  `+s.fragmentShader;
  s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec3 nn=abs(normalize(chipNormal));vec2 pp=nn.x>.6?chipPosition.yz:(nn.y>.6?chipPosition.xz:chipPosition.xy);
   diffuseColor.rgb*=mix(chips(pp/3.7),chips(pp/1.15+13.2),.28);
  `);
 };
 return {woods,collarWoods,steel,hingeFinishes,nail,block,epal:stampMaterial('epal'),palletHT:stampMaterial('ht-pallet'),ht:stampMaterial('ht-collar'),plyEdge:new T.MeshStandardMaterial({color:'#c6b08b',roughness:.87}),plyDark:new T.MeshStandardMaterial({color:'#a9906c',roughness:.87})};
}
function stampMaterial(kind){
 const canvas=document.createElement('canvas');canvas.width=832;canvas.height=kind==='epal'?508:(kind==='ht-pallet'?568:416);const c=canvas.getContext('2d');c.strokeStyle=c.fillStyle='#291d13';
 function outlines(paths,bounds,x,y,w,h){const scale=Math.min(w/bounds[2],h/bounds[3]);c.save();c.translate(x+(w-bounds[2]*scale)/2,y+(h-bounds[3]*scale)/2);c.scale(scale,scale);c.translate(-bounds[0],-bounds[1]);for(const path of paths)c.fill(new Path2D(path));c.restore();}
 if(kind==='epal')outlines(EPAL_OUTLINES,EPAL_BOUNDS,14,9,804,490);
 else {
  const h=canvas.height;c.lineWidth=9;c.strokeRect(14,14,804,h-28);c.beginPath();c.moveTo(220,14);c.lineTo(220,h-14);c.stroke();
  outlines(IPPC_OUTLINES,IPPC_BOUNDS,53,42,124,h-84);
  c.font='600 128px "Arial Narrow", "Helvetica Neue", Arial';c.textBaseline='alphabetic';
  if(kind==='ht-pallet'){c.fillText('CN-',260,176);c.fillText('23274',260,340,515);c.fillText('HT',260,504);}
  else {c.font='600 120px "Arial Narrow", "Helvetica Neue", Arial';c.fillText('CN-23274',256,173,534);c.fillText('HT',256,334);}
 }
 // Slight ink loss: the branding is burned/stamped into timber, not a label.
 const px=c.getImageData(0,0,canvas.width,canvas.height);let seed=42;for(let j=3;j<px.data.length;j+=4){seed=(seed*1664525+1013904223)>>>0;px.data[j]*=.88+(seed/4294967296)*.12;}c.putImageData(px,0,0);
 const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;
 const material=new T.MeshStandardMaterial({map,transparent:true,roughness:1,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2});material.name=kind;return material;
}
function stamp(parent,material,w,h,x,y,z,rotation=0){const m=new T.Mesh(new T.PlaneGeometry(w,h),material);m.position.set(x,y,z);m.rotation.y=rotation;m.name=material===undefined?'mark':'timber-mark';parent.add(m);return m;}
export function board(parent,l,h,w,x,y,z,material,r=.7){const m=new T.Mesh(bevelBox(l,h,w,r),material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
const nailGeo=new T.CylinderGeometry(3.1,3.1,.55,10);
function nail(parent,x,y,z,mat,bottom=false){const m=new T.Mesh(nailGeo,mat);m.position.set(x,y,z);if(bottom)m.rotation.x=Math.PI;parent.add(m);}
function clipPalletCorners(mesh){
 // Cut the four vertical 45-degree planes through every intersecting timber
 // component: deck, bearers, corner blocks and runners. A rounded bevel alone
 // is not the pallet's 17 mm plan-view corner cut.
 mesh.updateMatrix();const inverse=mesh.matrix.clone().invert();
 const src=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry;
 const a=src.attributes.position;let faces=[];
 for(let i=0;i<a.count;i+=3)faces.push([0,1,2].map(k=>new T.Vector3().fromBufferAttribute(a,i+k).applyMatrix4(mesh.matrix)));
 for(const sx of [-1,1])for(const sz of [-1,1]){
  const result=[],cut=[];const dist=p=>sx*p.x+sz*p.z-983;
  for(const poly of faces){const output=[];for(let i=0;i<poly.length;i++){const p=poly[i],q=poly[(i+1)%poly.length],dp=dist(p),dq=dist(q);if(dp<=1e-6)output.push(p);if((dp<0&&dq>0)||(dp>0&&dq<0)){const v=p.clone().lerp(q,dp/(dp-dq));output.push(v);cut.push(v);}}if(output.length>=3)result.push(output);}
  const unique=[];for(const v of cut)if(!unique.some(u=>u.distanceToSquared(v)<1e-7))unique.push(v);
  if(unique.length>=3){const center=unique.reduce((a,v)=>a.add(v),new T.Vector3()).multiplyScalar(1/unique.length),tangent=new T.Vector3(sz,0,-sx).normalize();unique.sort((a,b)=>Math.atan2(a.y-center.y,a.clone().sub(center).dot(tangent))-Math.atan2(b.y-center.y,b.clone().sub(center).dot(tangent)));const normal=unique[1].clone().sub(unique[0]).cross(unique[2].clone().sub(unique[0]));if(normal.dot(new T.Vector3(sx,0,sz))<0)unique.reverse();result.push(unique);}
  faces=result;
 }
 const vertices=[];for(const p of faces)for(let i=1;i<p.length-1;i++)for(const v of [p[0],p[i],p[i+1]])vertices.push(...v.clone().applyMatrix4(inverse).toArray());
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geo.computeVertexNormals();mesh.geometry=geo;
}
export function createPallet(mat){
 const g=new T.Group();g.name='epal-1';let n=0;
 // 3 bottom runners, 9 blocks, 3 transverse bearers and 5 deck boards.
 for(const [z,w]of [[-350,100],[0,145],[350,100]]){
  const runner=board(g,1200,22,w,0,11,z,mat.woods[n++%12]);runner.name='bottom-board';
  // Explicit cross-section preserves the full 22 mm centre thickness while
  // forming the two 17x45-degree fork-entry chamfers.
  const shape=new T.Shape();[[-w/2,-11],[w/2,-11],[w/2,-6],[w/2-17,11],[-w/2+17,11],[-w/2,-6]].forEach(([u,v],j)=>j?shape.lineTo(u,v):shape.moveTo(u,v));shape.closePath();
  const p=new T.ExtrudeGeometry(shape,{depth:1200,bevelEnabled:false,curveSegments:1});p.translate(0,0,-600);p.rotateY(Math.PI/2);runner.geometry=p;
  for(const x of [-527.5,0,527.5]){
   const b=board(g,145,78,w,x,61,z,mat.block,1);b.name='block';
   if(z!==0){const sign=Math.sign(z);stamp(g,x===0?mat.palletHT:mat.epal,x===0?82:90,x===0?56:55,x,61,z+sign*(w/2+.12),sign>0?0:Math.PI);}
   for(const d of [-29,0,29])nail(g,x+d,-.3,z+(d===0?17:-17),mat.nail,true);
  }
 }
 for(const x of [-527.5,0,527.5]){const b=board(g,800,22,145,x,111,0,mat.woods[n++%12]);b.rotation.y=Math.PI/2;b.name='cross-board';}
 for(const [z,w]of [[-327.5,145],[-163.75,100],[0,145],[163.75,100],[327.5,145]]){
  const b=board(g,1200,22,w,0,133,z,mat.woods[n++%12]);b.name='deck-board';
  if(Math.abs(z)>300){
   const shape=new T.Shape(),sign=Math.sign(z),outline=[[-600,-w/2],[600,-w/2],[600,w/2-17],[583,w/2],[-583,w/2],[-600,w/2-17]];
   outline.forEach(([x,zz],j)=>j?shape.lineTo(x,-zz*sign):shape.moveTo(x,-zz*sign));shape.closePath();
   const geo=new T.ExtrudeGeometry(shape,{depth:22,bevelEnabled:false,curveSegments:1});geo.rotateX(-Math.PI/2);geo.translate(0,-11,0);b.geometry=geo;
  }
  for(const x of [-527.5,0,527.5])for(const d of [-27,0,27])nail(g,x+d,144.4,z+(d===0?22:-22),mat.nail);
 }
 // Six bearer-to-block fasteners (covered by the deck).
 for(const x of [-527.5,0,527.5])for(const z of [-350,350])nail(g,x,122.1,z,mat.nail);
 for(const m of g.children)if(['deck-board','cross-board','block','bottom-board'].includes(m.name))clipPalletCorners(m);
 g.userData.spec=SPEC.pallet;g.userData.cornerCut=17;return g;
}
export function createCollar(mat,index=0){
 mat={...mat,steel:mat.hingeFinishes[0]};
 const group=new T.Group(),body=new T.Group();group.add(body);group.name='collar-'+index;
 group.userData.hingeFinish=mat.steel.name;
 // Pivot spacing accounts for the actual 22.6 mm formed hinge return.
 // Timber sits against the BACK of the 1.2 mm sheet (22.6 - 0.6 mm).
 const t=19,h=195,L=1151,W=751,outer=22,axisX=24.5;
 const lengths=[L,W,L,W];const parts=[];
 const rivetGeo=new T.SphereGeometry(3,8,5);
 for(let i=0;i<4;i++){
  const link=new T.Group();body.add(link);const len=lengths[i];
  // Board is outside the closed four-bar polygon; offsets prevent opposing
  // timber faces from crossing as the parallelogram collapses.
  const plank=board(link,len-11,h,t,len/2,h/2,-outer+t/2,mat.collarWoods[(index*4+i)%12],.7);plank.name='collar-board';
  if(i%2===0)stamp(link,mat.ht,105,52,len-155,107,-outer-.12,Math.PI);
  for(const end of [0,1]){
   // Reuse the site's photo-traced continuous formed sheet: ribs, bends,
   // open rolled knuckles, rounded perimeter and locating tongue are ONE mesh.
   const key='assembled-hinge-'+end;
   // Collar outside is 1195 x 795; pallet is 1200 x 800. The previous
   // 0.85 mm joggle buried the broad tongue shoulders in the 2.5 mm deck lip.
   // Add 2 mm relief: the tongue back clears the deck by 0.35 mm, with the
   // original 217 mm length, 39.4 mm face and 22 mm projection unchanged.
   if(!cache.has(key)){const sample=createHinge(1.2,mat.steel,globalThis.d3.Delaunay,{detail:1.8,secondLeaf:!!end,tongueRelief:2});cache.set(key,sample.children[0].geometry);}
   const leaf=new T.Mesh(cache.get(key),mat.steel);leaf.name='hinge-leaf';
   // Original sheet coordinates: +Z runs down its 217 mm length; -Y is outside.
   const sign=end?1:-1,origin=end?len-axisX:axisX;
   leaf.matrix.set(sign,0,0,origin, 0,0,-1,86.5, 0,1,0,-22.6, 0,0,0,1);
   leaf.matrixAutoUpdate=false;leaf.castShadow=true;leaf.receiveShadow=true;
   leaf.userData={continuousSheet:true,secondLeaf:!!end};link.add(leaf);
   for(const [u,z] of holes){const r=new T.Mesh(rivetGeo,mat.nail);r.name='hinge-rivet';r.scale.z=.35;r.position.set(origin+sign*(u-19.7),195-z,-23.5);link.add(r);}
  }
  parts.push(link);
 }
 const pivots=[];
 for(let i=0;i<4;i++){
  const hg=new T.Group();body.add(hg);hg.name='corner-hinge';
  // Pivot marker only: the actual interleaved rolls belong to the formed leaves.
  pivots.push(hg);
 }
 function fold(amount){
  // Full four-bar closure. Every edge length is constant throughout the move.
  const angle=T.MathUtils.lerp(Math.PI/2,.014,amount),a=W*Math.cos(angle),b=W*Math.sin(angle);
  const v=[[-(L+a)/2,-b/2],[(L-a)/2,-b/2],[(L+a)/2,b/2],[(-L+a)/2,b/2]];
  for(let i=0;i<4;i++){const p=v[i],q=v[(i+1)%4],dx=q[0]-p[0],dz=q[1]-p[1];parts[i].position.set(p[0],0,p[1]);parts[i].rotation.y=-Math.atan2(dz,dx);pivots[i].position.set(p[0],0,p[1]);}
  group.userData.fold=amount;group.userData.vertices=v;
 }
 fold(0);group.userData.spec=SPEC.collar;return {group,body,fold};
}
function lidShape(l,w,cut){const s=new T.Shape();const pts=[[-l/2+cut,-w/2],[l/2-cut,-w/2],[l/2,-w/2+cut],[l/2,w/2-cut],[l/2-cut,w/2],[-l/2+cut,w/2],[-l/2,w/2-cut],[-l/2,-w/2+cut]];pts.forEach(([x,z],i)=>i?s.lineTo(x,z):s.moveTo(x,z));s.closePath();return s;}
export function createLid(mat){
 const g=new T.Group();g.name='plywood-lid';
 // The panel underside is Y=0. Strips project down into the collar aperture.
 for(let i=0;i<7;i++){
  const geo=new T.ExtrudeGeometry(lidShape(1200,800,25),{depth:9/7,bevelEnabled:false,curveSegments:1});geo.rotateX(-Math.PI/2);geo.translate(0,i*9/7,0);
  const m=new T.Mesh(geo,i===6||i===0?mat.woods[12]:(i%2?mat.plyDark:mat.plyEdge));m.castShadow=true;m.receiveShadow=true;g.add(m);
 }
 // Preserve 25 mm inset, 50 mm width and 9 mm depth. Lengths reduced to 750
 // with the customer's panel reduction from 1220x820 to 1200x800.
 for(const x of [-550,550]){const b=board(g,750,9,50,x,-4.5,0,mat.woods[8]);b.rotation.y=Math.PI/2;b.name='lid-locating-strip';}
 for(const z of [-350,350]){const b=board(g,750,9,50,0,-4.5,z,mat.woods[8]);b.name='lid-locating-strip';}
 // 16 staples across the four locating strips.
 for(const side of [-1,1])for(const n of [-325,-110,110,325])for(const orient of [0,1]){
  const x=orient?n:side*550,z=orient?side*350:n;board(g,15,.6,1,x,-9.4,z,mat.nail,.15);
 }
 g.userData.spec=SPEC.lid;return g;
}

export function createStrap(axis,offset,index){
 // PET strapping: a thin solid ribbon, fine embossed surface and subdued sheen.
 const material=new T.MeshPhysicalMaterial({color:'#2e6548',roughness:.46,metalness:0,clearcoat:.12,clearcoatRoughness:.42,transparent:true,depthWrite:false});
 material.name='embossed-green-pet';
 material.onBeforeCompile=s=>{
  s.vertexShader='varying vec2 strapUV;\n'+s.vertexShader;
  s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nstrapUV=uv;');
  s.fragmentShader='varying vec2 strapUV;\n'+s.fragmentShader;
  s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   // Millimetre UVs: anti-aliased micro-embossing, not coarse cloth weaving.
   float frequency=6.2831853/0.8;
   float aa=1.-smoothstep(.12,.7,max(fwidth(strapUV.x),fwidth(strapUV.y)));
   float emboss=sin((strapUV.x+strapUV.y)*frequency)*sin((strapUV.x-strapUV.y)*frequency);
   diffuseColor.rgb*=1.+aa*emboss*.022;
  `);
  s.fragmentShader=s.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
   roughnessFactor+=aa*emboss*.035;
  `);
 };
 const geo=new T.BufferGeometry(),mesh=new T.Mesh(geo,material);
 // A restrained heat-welded overlap, not a metal buckle or disconnected end.
 const weldMaterial=material.clone();weldMaterial.color.set('#2d6045');weldMaterial.roughness=.55;
 const weld=new T.Mesh(new T.BoxGeometry(52,.45,15.8),weldMaterial);weld.name='heat-welded-overlap';
 if(axis==='z')weld.rotation.y=Math.PI/2;mesh.add(weld);
 // Tiny transparent bands do not cast a fully opaque shadow before appearing.
 mesh.castShadow=false;mesh.receiveShadow=true;mesh.name='packing-strap-'+index;
 let positions,uvs;
 function update(progress,tight){
  mesh.visible=progress>.0001;if(!mesh.visible)return;material.opacity=progress;
  const slack=1-tight,gap=18*slack,half=(axis==='x'?600:400)+1.4+gap;
  const bottom=(axis==='x'?99:121)-8*slack,top=738+1.4+(index>1?1:0)+10*slack,r=2.8;
  weld.material.opacity=progress;weld.position.set(axis==='x'?130:offset,top+.58,axis==='x'?offset:130);
  const path=new T.Shape();path.moveTo(0,top);path.lineTo(half-r,top);path.quadraticCurveTo(half,top,half,top-r);path.lineTo(half,bottom+r);path.quadraticCurveTo(half,bottom,half-r,bottom);path.lineTo(-half+r,bottom);path.quadraticCurveTo(-half,bottom,-half,bottom+r);path.lineTo(-half,top-r);path.quadraticCurveTo(-half,top,-half+r,top);path.lineTo(0,top);
  const points=path.getPoints(16),N=points.length-1;
  // Each section has four hard-edged faces, with curved longitudinal normals.
  if(!positions||positions.length!==points.length*24){
   positions=new Float32Array(points.length*24);uvs=new Float32Array(points.length*16);
   const indices=[];for(let i=0;i<N;i++)for(let face=0;face<4;face++){const k=i*8+face*2;indices.push(k,k+1,k+8,k+1,k+9,k+8);}
   geo.setAttribute('position',new T.BufferAttribute(positions,3));geo.setAttribute('uv',new T.BufferAttribute(uvs,2));geo.setIndex(indices);
  }
  let length=0;
  for(let i=0;i<=N;i++){
   if(i)length+=points[i].distanceTo(points[i-1]);
   const previous=points[(i-1+N)%N],next=points[(i+1)%N],tangent=next.clone().sub(previous).normalize();
   const normal=new T.Vector2(-tangent.y,tangent.x);
   // Cross section, CCW: 16 mm wide, 0.75 mm nominal band thickness.
   const section=[[-8,-.375],[-8,.375],[8,.375],[8,-.375]];
   for(let face=0;face<4;face++)for(let j=0;j<2;j++){
    const [across,depth]=section[(face+j)%4],p=points[i].clone().addScaledVector(normal,depth),k=i*8+face*2+j;
    positions[k*3]=axis==='x'?p.x:offset+across;positions[k*3+1]=p.y;positions[k*3+2]=axis==='x'?offset+across:p.x;
    uvs[k*2]=length;uvs[k*2+1]=across;
   }
  }
  geo.attributes.position.needsUpdate=true;geo.attributes.uv.needsUpdate=true;geo.computeVertexNormals();geo.computeBoundingSphere();
  mesh.userData={bottom,top,closed:true,axis,tight,segmentCount:N,thickness:.75,width:16};
 }
 update(0,0);return {mesh,update};
}
