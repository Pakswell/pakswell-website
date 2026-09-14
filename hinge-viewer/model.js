import * as T from 'three';
export const holes=[[7,20],[21,70],[21,120],[7,170]];
export const knuckles=[[0,30],[60,92],[122,154]];
const W=39.4,L=217;
// Traced from the black/grey sample views: a swept, changing-width shoulder,
// not a constant-width circular tube. Its lower tangent leads into the stem.
// 8E3D188D / 1D70CDA7: crossbar sits beside the end of the last knuckle,
// above the fourth hole. The stem is near mid-face, not beside the fold.
export const formedLayout={crossZ:155.5,stemU:19.5,stemHalfWidth:9.4,crossTipU:11.8};
function arcPoint(t){const s=1-t;return [s*s*s*43+3*s*s*t*30+3*s*t*t*19.5+t*t*t*19.5,s*s*s*124+3*s*s*t*129+3*s*t*t*139+t*t*t*155.5];}
function arcDistanceAt(x,z){
 // Continuous cubic nearest point: segment-based distances left rippled normals
 // along the swept highlight. Newton refinement gives a smooth stamped shoulder.
 let t=Math.max(0,Math.min(1,(z-124)/31.5));
 for(let i=0;i<8;i++){const s=1-t,[px,pz]=arcPoint(t),dx=3*s*s*(-13)+6*s*t*(-10.5),dz=3*s*s*5+6*s*t*10+3*t*t*16.5,ddx=6*s*2.5+6*t*10.5,ddz=6*s*5+6*t*6.5,den=dx*dx+dz*dz+(px-x)*ddx+(pz-z)*ddz;if(Math.abs(den)<1e-8)break;t=Math.max(0,Math.min(1,t-((px-x)*dx+(pz-z)*dz)/den));}
 const [px,pz]=arcPoint(t);return Math.hypot(x-px,z-pz)-(6.2+1.4*smooth(t));
}
const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*t*(t*(t*6-15)+10);};
const unionDistance=(a,b)=>{const k=5,h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
function seg(x,z,a,b,c,e){const vx=c-a,vz=e-b,t=Math.max(0,Math.min(1,((x-a)*vx+(z-b)*vz)/(vx*vx+vz*vz)));return Math.hypot(x-a-t*vx,z-b-t*vz);}
export function rib(x,z){
 // Bring the stamped surface tangentially into the bend; no normal jump at W.
 if(x>W-5&&x<=W){const t=(x-(W-5))/5;x=W-5+5*(t+t*t-t*t*t);}
 // Stamped lands have a flatter crown and a finite, rounded shoulder, not a
 // Gaussian mound extending across the whole plate. Heights remain estimates.
 const shoulder=(d,land,run,h)=>h*(1-smooth((d-land)/run)),r=[];
 for(const h of [35,95])r.push(shoulder(seg(x,z,10,h,44,h),.7,5.8,2.2));
 r.push(shoulder(seg(x,z,29,65,44,65),.5,5.2,1.6));
 const arcDistance=arcDistanceAt(x,z);
 const crossDistance=seg(x,z,formedLayout.crossTipU,formedLayout.crossZ,44,formedLayout.crossZ)-6.3;
 const stemDistance=Math.max(Math.abs(x-formedLayout.stemU)-formedLayout.stemHalfWidth,151-z);
 const formedDistance=unionDistance(unionDistance(arcDistance,crossDistance),stemDistance);
 // Rectangular terminal land with rounded side shoulders; the free tongue has
 // a transverse joggle seen in both the supplied grey and black photographs.
 const step=smooth((z-184)/9);
 // A SINGLE height field for the whole junction. Overlap changes the outline,
 // not its height; this removes the raised round node beside the fourth hole.
 // Broad flat crown, shallower height and a shorter rounded shoulder run:
 // this is an embossed web, not round tubing sitting on top of the sheet.
 r.push((2.1-.45*step)*smooth(-formedDistance/4.6));
 return 3.2*(1-r.reduce((product,h)=>product*(1-h/3.2),1))+.85*step;
}
export function createHinge(thickness,material,Delaunay,{detail=.6,secondLeaf=false,tongueRelief=0}={}){
 const group=new T.Group(),rad=2.2+thickness/2,bendRadius=Math.max(2,thickness*1.5),bendLength=bendRadius*Math.PI/2,wallLength=22.6-bendRadius;
 const gap=W+bendLength+16.6-bendRadius,rolled=W+bendLength+wallLength+rad*Math.PI*1.76;
 // One developed sheet outline; no independent flange or tube surfaces.
 const startR=8,endR=9;
 const polygon=secondLeaf
  ?[[startR,0],[gap,0],[gap,30.2],[rolled,30.2],[rolled,60],[gap,60],[gap,92.2],[rolled,92.2],[rolled,122],[gap,122],[gap,154.2],[rolled,154.2],[rolled,184],[gap,184]]
  :[[startR,0],[rolled,0],[rolled,30],[gap,30],[gap,60],[rolled,60],[rolled,92],[gap,92],[gap,122],[rolled,122],[rolled,154],[gap,154],[gap,180]];
 for(let i=1;i<=24;i++){const t=i/24;polygon.push([W+(gap-W)*(1-t)**2,(secondLeaf?184:180)+(secondLeaf?11:15)*t]);}
 polygon.push([W,L-endR]);
 for(let i=1;i<=24;i++){const a=i*Math.PI/48;polygon.push([W-endR+endR*Math.cos(a),L-endR+endR*Math.sin(a)]);}
 polygon.push([endR,L]);
 for(let i=1;i<=24;i++){const a=Math.PI/2+i*Math.PI/48;polygon.push([endR+endR*Math.cos(a),L-endR+endR*Math.sin(a)]);}
 polygon.push([0,startR]);
 for(let i=1;i<24;i++){const a=Math.PI+i*Math.PI/48;polygon.push([startR+startR*Math.cos(a),startR+startR*Math.sin(a)]);}
 function inside(u,z){let yes=false;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const a=polygon[i],b=polygon[j];if((a[1]>z)!==(b[1]>z)&&u<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])yes=!yes;}return yes;}
 let points=[];const keys=new Set();function add(u,z){const k=u.toFixed(6)+','+z.toFixed(6);if(!keys.has(k)){keys.add(k);points.push([u,z]);}}
 for(let i=0;i<polygon.length;i++){const a=polygon[i],b=polygon[(i+1)%polygon.length],steps=Math.max(1,Math.ceil(Math.hypot(a[0]-b[0],a[1]-b[1])/.5));for(let j=0;j<steps;j++)add(a[0]+(b[0]-a[0])*j/steps,a[1]+(b[1]-a[1])*j/steps);}
 for(const [hx,hz]of holes)for(let i=0;i<64;i++){const a=i*Math.PI/32;add(hx+2.8*Math.cos(a),hz+2.8*Math.sin(a));}
 for(let z=.31;z<L;z+=detail)for(let u=.31;u<rolled;u+=detail)if(inside(u,z)&&holes.every(([x,y])=>Math.hypot(u-x,z-y)>3))add(u,z);
 for(const u of [W,W+bendLength,W+bendLength+wallLength])for(let z=.27;z<195;z+=.5)if(inside(u,z))add(u,z);
 function surface(u,z){
  // Ribs project OUTSIDE the L-fold (negative Y), as the supplied outer-face photo.
  // Assembly clearance is a continuous transverse joggle, not a resized foot.
  // It is fixed in the geometry before animation; standalone samples stay unchanged.
  const relief=tongueRelief*smooth((z-184)/11);
  if(u<=W)return [u-W/2,-rib(u,z)-relief,z-L/2];
  const s=u-W,stamp=rib(W,z)+relief;
  if(s<=bendLength){const a=s/bendRadius;return [W/2+(bendRadius+stamp)*Math.sin(a),-stamp+bendRadius*(1-Math.cos(a)),z-L/2];}
  if(s<=bendLength+wallLength){const t=(s-bendLength)/wallLength,ease=t*t*(3-2*t);return [W/2+bendRadius+stamp*(1-ease),bendRadius-stamp+(wallLength+stamp)*t,z-L/2];}
  const a=Math.PI-(s-bendLength-wallLength)/rad;return [W/2+bendRadius+rad+rad*Math.cos(a),22.6+rad*Math.sin(a),z-L/2];
 }
 const triang=Delaunay.from(points).triangles,indices=[];
 for(let i=0;i<triang.length;i+=3){let [a,b,c]=triang.slice(i,i+3);const u=(points[a][0]+points[b][0]+points[c][0])/3,z=(points[a][1]+points[b][1]+points[c][1])/3;if(!inside(u,z)||holes.some(([x,y])=>Math.hypot(u-x,z-y)<2.79))continue;const cross=(points[b][0]-points[a][0])*(points[c][1]-points[a][1])-(points[b][1]-points[a][1])*(points[c][0]-points[a][0]);if(Math.abs(cross)<1e-10)continue;if(cross>0)[b,c]=[c,b];indices.push(a,b,c);}
 const used=[...new Set(indices)],lookup=new Map(used.map((id,i)=>[id,i]));points=used.map(i=>points[i]);for(let i=0;i<indices.length;i++)indices[i]=lookup.get(indices[i]);
 const mid=new T.BufferGeometry();mid.setAttribute('position',new T.Float32BufferAttribute(points.flatMap(([u,z])=>surface(u,z)),3));mid.setIndex(indices);
 const analyticNormals=[];for(const [u,z]of points){const du=new T.Vector3(...surface(u+.005,z)).sub(new T.Vector3(...surface(u-.005,z))),dz=new T.Vector3(...surface(u,z+.005)).sub(new T.Vector3(...surface(u,z-.005)));const n=dz.cross(du).normalize();analyticNormals.push(n.x,n.y,n.z);}mid.setAttribute('normal',new T.Float32BufferAttribute(analyticNormals,3));
 const p=mid.attributes.position,n=mid.attributes.normal,N=points.length,pos=[],normal=[],uv=[],index=[];
 for(const sign of [1,-1])for(let i=0;i<N;i++){pos.push(p.getX(i)+sign*n.getX(i)*thickness/2,p.getY(i)+sign*n.getY(i)*thickness/2,p.getZ(i)+sign*n.getZ(i)*thickness/2);normal.push(sign*n.getX(i),sign*n.getY(i),sign*n.getZ(i));uv.push(points[i][0]/65,points[i][1]/65);}
 const edges=new Map();
 for(let i=0;i<indices.length;i+=3){const [a,b,c]=indices.slice(i,i+3);index.push(a,b,c,a+N,c+N,b+N);for(const [x,y]of [[a,b],[b,c],[c,a]]){const k=Math.min(x,y)+','+Math.max(x,y);if(edges.has(k))edges.get(k).count++;else edges.set(k,{a:x,b:y,count:1});}}
 // Cap only physical perimeter and hole edges, never an internal division.
 let boundaryEdges=0;
 for(const {a,b,count}of edges.values())if(count===1){boundaryEdges++;const offset=pos.length/3,ids=[a,a+N,b+N,b];for(const j of ids){pos.push(pos[j*3],pos[j*3+1],pos[j*3+2]);uv.push(uv[j*2],uv[j*2+1]);}
  const va=new T.Vector3().fromArray(pos,offset*3),vb=new T.Vector3().fromArray(pos,(offset+1)*3),vc=new T.Vector3().fromArray(pos,(offset+2)*3),nn=vb.sub(va).cross(vc.sub(va)).normalize();for(let j=0;j<4;j++)normal.push(nn.x,nn.y,nn.z);index.push(offset,offset+1,offset+2,offset,offset+2,offset+3);
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('normal',new T.Float32BufferAttribute(normal,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(index);g.userData={midVertexCount:N,boundaryEdges};
 const mesh=new T.Mesh(g,material);mesh.name='single-continuous-sheet';group.add(mesh);mid.dispose();group.rotation.set(Math.PI,-.12,-.35);
 group.userData={thickness,holes:4,knuckles:3,nominalLength:L,nominalFaceWidth:W,raisedFace:'outside-fold-negative-Y',estimatedOutlineRadii:{start:startR,freeEnd:endR}};return group;
}
