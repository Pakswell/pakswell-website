import * as T from 'three';
import {createViewControls} from './view-controls.js';
import {RoomEnvironment} from './vendor/RoomEnvironment.js';
import {createHinge} from './model.js?v=f-section-0911f';
const finishes=[['zinc','Natural galvanized steel','#aeb4b2','Zinc-coated steel · unpainted'],['black','Black','#202323','Powder-coated steel · fine satin finish'],['grey','Grey','#687e82','Powder-coated steel · soft gloss finish'],['ivory','Ivory white','#e7e4ce','Powder-coated steel · warm ivory finish'],['mint','Mint green','#a6d5a6','Powder-coated steel · pale mint finish']];
let finish='zinc',thickness=1.2,model,renderer,controls,scene,camera,material,inspectionMaterial,pivot,dirty=true,autorotate=false,surfaceCheck=false;
const $=s=>document.querySelector(s),canvas=$('#canvas'),stage=$('#stage'),state=$('#load-state');
const productPage=!!document.querySelector('[data-product-page]');
if(document.querySelector('.preview'))document.querySelector('.preview').textContent='LOCAL MATERIAL STUDY · SHAPE REVISION 0911-F · NOT PUBLISHED';
function selection(){const f=finishes.find(f=>f[0]===finish);$('#finish-name').textContent=f[1];$('#finish-description').textContent=f[3];$('#summary').textContent=`${f[1]} / ${thickness.toFixed(1)} mm`;$('#quote').href='mailto:mark.lee@pakswell.com?subject='+encodeURIComponent('Pallet collar hinge enquiry - '+f[1]+' / '+thickness.toFixed(1)+' mm')+'&body='+encodeURIComponent(`Please quote pallet collar hinges.\n\nFinish: ${f[1]}\nNominal steel thickness: ${thickness.toFixed(1)} mm\nQuantity: \nDestination: \n\nPlease confirm final dimensions, finish and availability.\n`);document.querySelectorAll('[data-finish]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.finish===finish)));document.querySelectorAll('[data-thickness]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.thickness===thickness)));}
const studioSelection=selection;
selection=function(){studioSelection();if(productPage){const params=new URLSearchParams({product:'Hinges & accessories',finish,thickness:thickness.toFixed(1)});$('#quote').href='/contact.html?'+params;document.querySelectorAll('.mobile-cta a[href^="/contact"],.header a.button[href^="/contact"]').forEach(a=>a.href=$('#quote').href);}};
for(const [key,name,colour]of finishes){const b=document.createElement('button');b.className='swatch';b.dataset.finish=key;b.setAttribute('aria-label',name);b.title=name;b.style.setProperty('--colour',colour);b.innerHTML='<i aria-hidden="true"></i>';b.onclick=()=>{finish=key;selection();if(material)applyMaterial();};$('#finishes').append(b);}for(const t of [1,1.2,1.5,2]){const b=document.createElement('button');b.dataset.thickness=t;b.textContent=t.toFixed(1)+' mm';b.onclick=()=>{thickness=t;selection();if(scene)rebuild();};$('#thicknesses').append(b);}selection();
// Deterministic multiscale zinc mottling. Subtle enough to read as surface finish,
// not a printed pattern; powder coating receives a different fine microtexture.
function texture(zinc){const n=512,data=new Uint8Array(n*n*4);let seed=9423;const rnd=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};const cells=Array.from({length:200},()=>[rnd()*n,rnd()*n,rnd()]);for(let y=0;y<n;y++)for(let x=0;x<n;x++){let v;if(zinc){let dist=1e9,val=0;for(const [cx,cy,c]of cells){let dx=Math.min(Math.abs(x-cx),n-Math.abs(x-cx)),dy=Math.min(Math.abs(y-cy),n-Math.abs(y-cy)),d=dx*dx+dy*dy;if(d<dist){dist=d;val=c;}}v=174+val*21+(rnd()-.5)*15+3*Math.sin(x*.9+y*.05);}else v=185+(rnd()-.5)*28;let k=(y*n+x)*4;data[k]=data[k+1]=data[k+2]=v;data[k+3]=255;}const tx=new T.DataTexture(data,n,n);tx.wrapS=tx.wrapT=T.RepeatWrapping;tx.magFilter=T.LinearFilter;tx.minFilter=T.LinearMipmapLinearFilter;tx.generateMipmaps=true;tx.needsUpdate=true;return tx;}
let zincTex,coatTex;
function applyMaterial(){const z=finish==='zinc';const calibrated={zinc:'#a9ada9',black:'#101313',grey:'#536b70',ivory:'#eeede0',mint:'#a7d7a0'};material.color.set(calibrated[finish]);material.metalness=z?1:0;material.roughness=z?.4:finish==='black'?.3:.22;material.clearcoat=0;material.map=null;material.bumpMap=z?null:coatTex;material.bumpScale=.004;material.roughnessMap=null;material.envMapIntensity=z?.75:.3;if(material.userData.zinc)material.userData.zinc.value=z?1:0;material.needsUpdate=true;dirty=true;}
function rebuild(){if(model){pivot.remove(model);model.traverse(m=>m.geometry?.dispose());}model=createHinge(thickness,surfaceCheck?inspectionMaterial:material,window.d3.Delaunay);const bounds=new T.Box3().setFromObject(model),center=bounds.getCenter(new T.Vector3());model.position.sub(center);pivot.add(model);controls.setRadius(bounds.getSize(new T.Vector3()).length()/2);dirty=true;}
function stopRotation(){autorotate=false;$('#rotate').setAttribute('aria-pressed','false');$('#rotate').textContent='Auto rotate';}
function reset(){stopRotation();controls.reset();dirty=true;}
try{
 renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;renderer.outputColorSpace=T.SRGBColorSpace;
 scene=new T.Scene();pivot=new T.Group();scene.add(pivot);camera=new T.PerspectiveCamera(36,1,.1,5000);controls=createViewControls(camera,canvas,pivot,z=>{dirty=true;$('#zoom-level').textContent=Math.round(z*100)+'%';},stopRotation);
 const room=new RoomEnvironment();const pm=new T.PMREMGenerator(renderer);scene.environment=pm.fromScene(room,.04).texture;room.dispose();pm.dispose();scene.add(new T.HemisphereLight(0xffffff,0x303030,.12));let key=new T.DirectionalLight(0xffffff,.55);key.position.set(-120,220,100);scene.add(key);let fill=new T.DirectionalLight(0xffffff,.08);fill.position.set(120,80,-100);scene.add(fill);
 coatTex=texture(false);material=new T.MeshPhysicalMaterial({side:T.DoubleSide,envMap:scene.environment});
 material.userData.zinc={value:1};
 material.onBeforeCompile=shader=>{
  shader.uniforms.uZinc=material.userData.zinc;
  shader.vertexShader='varying vec3 vSteelPosition;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSteelPosition=position;');
  shader.fragmentShader=`uniform float uZinc; varying vec3 vSteelPosition;
float steelHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float steelNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(steelHash(i),steelHash(i+vec3(1,0,0)),f.x),mix(steelHash(i+vec3(0,1,0)),steelHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(steelHash(i+vec3(0,0,1)),steelHash(i+vec3(1,0,1)),f.x),mix(steelHash(i+vec3(0,1,1)),steelHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
`+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
float steelGrain=steelNoise(vSteelPosition*5.);
float steelCloud=steelNoise(vSteelPosition*1.7);
diffuseColor.rgb*=mix(1.,.90+.07*steelGrain+.04*steelCloud,uZinc);`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
roughnessFactor+=uZinc*(.035*(steelCloud-.5)+.02*(steelGrain-.5));`);
 };
 inspectionMaterial=new T.MeshStandardMaterial({color:'#b9afa0',metalness:0,roughness:1,envMap:scene.environment,envMapIntensity:0,side:T.DoubleSide});
 applyMaterial();rebuild();
 const inspect=document.createElement('button');inspect.id='surface-check';inspect.textContent='Surface check';inspect.setAttribute('aria-pressed','false');$('#fit').after(inspect);
 inspect.hidden=productPage;
 inspect.onclick=()=>{surfaceCheck=!surfaceCheck;inspect.setAttribute('aria-pressed',String(surfaceCheck));$('#view-label').textContent=surfaceCheck?'Structure check · no finish texture':productPage?'Interactive 3D preview':'3D material study';model.traverse(m=>{if(m.isMesh)m.material=surfaceCheck?inspectionMaterial:material;});dirty=true;};
 const face=document.createElement('button');face.id='face-view';face.textContent='Face view';inspect.before(face);
 face.onclick=()=>{stopRotation();const q=new T.Quaternion().setFromEuler(new T.Euler(Math.PI/2,0,Math.PI));pivot.quaternion.copy(camera.quaternion).multiply(q).multiply(model.quaternion.clone().invert());controls.fit();dirty=true;};
 const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;controls.frame();dirty=true;};new ResizeObserver(resize).observe(stage);resize();state.hidden=true;
 const clock=new T.Clock();renderer.setAnimationLoop(()=>{const dt=Math.min(clock.getDelta(),.1);if(document.hidden)return;controls.update(dt,autorotate);if(dirty||autorotate){renderer.render(scene,camera);dirty=false;}});
 $('#reset').onclick=reset;$('#rotate').onclick=()=>{autorotate=!autorotate;$('#rotate').setAttribute('aria-pressed',String(autorotate));$('#rotate').textContent=autorotate?'Pause rotation':'Auto rotate';dirty=true;};
 $('#zoom-in').onclick=()=>{stopRotation();controls.scale(1.2);};$('#zoom-out').onclick=()=>{stopRotation();controls.scale(1/1.2);};$('#fit').onclick=()=>{stopRotation();controls.fit();};
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();state.hidden=false;state.textContent='The 3D view was interrupted. Reload this page to continue. Your enquiry options remain available.';});
}catch(error){console.error(error);state.hidden=false;state.textContent='The 3D view could not start on this device. You can still choose a finish and thickness and request a quote.';$('#rotate').disabled=$('#reset').disabled=true;}
