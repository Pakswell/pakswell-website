import * as T from 'three';
import {RoomEnvironment} from '../hinge-viewer/vendor/RoomEnvironment.js';
import {makeMaterials,createPallet,createCollar,createLid,createStrap,SPEC} from './model.js?revision=tongue-clearance-v11';

const $=s=>document.querySelector(s),stage=$('#stage'),canvas=$('#packaging-canvas');
const query=new URLSearchParams(location.search),hero=query.has('hero');
if(query.has('embed')||hero)document.body.classList.add('embedded');
if(hero)document.body.classList.add('hero-mode');
const duration=36.8,ease=t=>{t=T.MathUtils.clamp(t,0,1);return t*t*t*(t*(t*6-15)+10);};
// Speed up the entire existing sequence without changing its motion curves.
const playbackRate=1.25;
let renderer,scene,camera,materials,pallet,collars,lid,straps,time=0,playing=true,inView=true,lastPhase=-1,last=performance.now(),transitionReady=false;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const dissolve=document.createElement('canvas');dissolve.className='cycle-dissolve';dissolve.setAttribute('aria-hidden','true');stage.append(dissolve);
const dissolveContext=dissolve.getContext('2d');
// The assembly plays 25% faster than revision 7. Folding is an additional
// sequence, not a second pallet or a warehouse-stacking scene.
const assemblySpeed=1.25;
const phases=[
 [0,'01 / EPAL PALLET','A dependable foundation.','One EPAL 1 pallet supports the complete packaging system.','EPAL pallet'],
 [.35,'02 / FOLDED COLLAR','Compact before use.','The first collar arrives folded, with all four boards connected.','Folded collar'],
 [2.45,'02 / OPEN THE COLLAR','Open above the pallet.','The four hinged corners open into a rectangular frame before lowering.','Unfold the first collar'],
 [4.3,'02 / PLACE THE COLLAR','Open. Then lower.','Once fully open, the collar lowers squarely onto the pallet.','Place the first collar'],
 [5.6,'03 / SECOND COLLAR','Build the height.','Add a second layer without changing the footprint.','Second collar'],
 [11.6/assemblySpeed,'04 / THIRD COLLAR','Room for your goods.','Three collars provide 585 mm of stacked collar height.','Third collar'],
 [17.2/assemblySpeed,'05 / PLYWOOD LID','Fit the lid.','The lid rests on the upper collar, with locating strips inside.','Plywood lid'],
 [22.5/assemblySpeed,'06 / SECURE','Ready for the journey.','Four continuous straps tighten beneath the upper deck assembly.','Securing the package'],
 [22.4,'07 / ASSEMBLED','One complete system.','Pallet, collars and lid work together to protect your goods.','Assembly complete'],
 [23.4,'08 / RELEASE','Ready to use again.','Release the straps and lift the lid before removing a collar.','Release straps and lift lid'],
 [26.0,'09 / LIFT CLEAR','Lift before folding.','Lift the upper collar clear of the layer below.','Lift the upper collar'],
 [27.4,'10 / FOLD','Less space between trips.','Four hinged corners let the rigid wooden boards fold together.','Fold the collar'],
 [30.8,'11 / REOPEN','Open for the next order.','Unfold the collar, square the corners and place it back on the stack.','Unfold and replace'],
 [34.4,'12 / REUSE','Stack. Fold. Repeat.','The same collar is ready to be used again.','Ready to reuse']
];
function poseAt(t){
 const assemblyTime=t*assemblySpeed;
 // Keep waiting components above both the viewport and the key light.
 // Their visibility/shadow flags never toggle when a new step starts.
 const lift=u=>{u=T.MathUtils.clamp(u,0,1);return 6000*(1-u)**5*(1+5*u);};
 collars.forEach((c,i)=>{
  const start=.8+i*5.4,u=(assemblyTime-start)/5;
  c.fold(0);c.body.rotation.set(0,0,0);c.body.position.set(0,0,0);
  // Opaque parts arrive from above the frame. No opacity/shader/shadow switch.
  c.group.position.set(0,144+i*195+lift(u),0);c.group.visible=true;
 });
 // First collar only: arrive folded, pause fully in frame, open at a fixed
 // height, then lower. The other layers retain their existing fast sequence.
 const first=collars[0];
 first.fold(1-ease((t-2.45)/1.7));
 first.group.position.y=464+lift((t-.35)/1.7)-320*ease((t-4.3)/1.25);
 const u=(assemblyTime-17.2)/4.8;lid.position.set(0,729+lift(u),0);lid.rotation.set(0,0,0);lid.visible=true;
 straps.forEach((s,i)=>{const start=22.5+i*.8;s.update(ease((assemblyTime-start)/1.1)*(1-ease((t-23.4)/1.1)),ease((assemblyTime-start-.65)/2.35));});
 // The lid leaves the same fixed frame; opaque wood and lighting stay stable.
 if(t>=24.6)lid.position.y=729+6000*ease((t-24.6)/2.4);
 if(t>=26.0){
  const upper=collars[2],up=ease((t-26.0)/1.2),down=ease((t-33.2)/1.2);
  upper.group.position.y=534+200*up*(1-down);
  // Four-bar hinge motion: no scaling, detached boards or geometry morphing.
  upper.fold(ease((t-27.4)/2.4)*(1-ease((t-30.8)/2.2)));
 }
}
function setTime(t){
 time=((t%duration)+duration)%duration;
 if(time>=34.8){
  // Dissolve a flat final-frame snapshot, not 3D transparent wood layers.
  // Pallet and fixed lighting stay identical beneath it; no white flash on reset.
  if(!transitionReady){
   poseAt(34.8);renderer.render(scene,camera);
   dissolve.width=canvas.width;dissolve.height=canvas.height;
   dissolveContext.clearRect(0,0,dissolve.width,dissolve.height);dissolveContext.drawImage(canvas,0,0);
   transitionReady=true;
  }
  poseAt(0);dissolve.style.opacity=String(1-ease((time-34.8)/2));dissolve.hidden=false;
 }else{dissolve.hidden=true;transitionReady=false;poseAt(time);}
 let phase=0;phases.forEach((p,i)=>{if(time>=p[0])phase=i;});
 if(phase!==lastPhase){const p=phases[phase];$('#step-number').textContent=p[1];$('#stage-title').textContent=p[2];$('#stage-copy').textContent=p[3];$('#phase-label').textContent=p[4];lastPhase=phase;}
 $('#progress').style.transform=`scaleX(${time/duration})`;renderer.render(scene,camera);
}
function resize(){
 const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);transitionReady=false;
 // Fixed framing: fit the declared movement envelope only on viewport resize.
 // No frame-by-frame bounds, orbit, zoom or secondary storage scene.
 const target=new T.Vector3(0,460,0),dir=new T.Vector3(1.10,.88,1.60).normalize();
 camera.position.copy(target).addScaledVector(dir,9000);camera.lookAt(target);camera.updateMatrixWorld();
 const points=[];for(const x of[-650,650])for(const y of[-8,995])for(const z of[-450,450])points.push(new T.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse));
 const xs=points.map(p=>p.x),ys=points.map(p=>p.y),cx=(Math.min(...xs)+Math.max(...xs))/2,cy=(Math.min(...ys)+Math.max(...ys))/2;
 const aspect=w/h,height=Math.max((Math.max(...ys)-Math.min(...ys))/.85,(Math.max(...xs)-Math.min(...xs))/(.88*aspect))*(w<600?1.08:1),width=height*aspect;
 camera.left=cx-width/2;camera.right=cx+width/2;camera.top=cy+height/2;camera.bottom=cy-height/2;camera.updateProjectionMatrix();setTime(time);
}
function failure(e){console.error(e);stage.classList.add('unavailable');$('#load-state').hidden=false;$('#load-state').textContent='Static preview · Animation unavailable on this device';$('#fallback').hidden=false;$('#pause').disabled=true;$('#replay').disabled=true;}
try{
 renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
 scene=new T.Scene();camera=new T.OrthographicCamera(-2500,2500,1400,-1400,1,16000);
 const texture=await new T.TextureLoader().loadAsync('./images/collar-3tier-warehouse.jpg');texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
 materials=makeMaterials(texture);
 const pm=new T.PMREMGenerator(renderer),room=new RoomEnvironment();scene.environment=pm.fromScene(room,.04).texture;room.dispose();pm.dispose();scene.environmentIntensity=.42;
 // Give zinc a dedicated studio reflection rather than the timber's subdued
 // environment. Bare metal should not look like black powder coating.
 materials.hingeFinishes.forEach(m=>{m.envMap=scene.environment;m.envMapIntensity=m.name==='hinge-zinc'?.9:.3;});
 scene.add(new T.HemisphereLight(0xffffff,0xb1b5a6,.68));
 const key=new T.DirectionalLight(0xfff8ed,1.8);key.position.set(-1800,4800,1800);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-3600,right:3600,top:3200,bottom:-3200,near:100,far:8500});key.shadow.normalBias=.35;key.shadow.bias=-.00008;key.shadow.radius=4;scene.add(key);
 const fill=new T.DirectionalLight(0xe5eeff,.65);fill.position.set(2800,1900,-2400);scene.add(fill);
 const floor=new T.Mesh(new T.PlaneGeometry(18000,18000),new T.ShadowMaterial({opacity:.12}));floor.rotation.x=-Math.PI/2;floor.position.y=-1;floor.receiveShadow=true;scene.add(floor);
 pallet=createPallet(materials);scene.add(pallet);collars=Array.from({length:3},(_,i)=>createCollar(materials,i));collars.forEach(c=>scene.add(c.group));lid=createLid(materials);scene.add(lid);straps=[createStrap('x',-240,0),createStrap('x',240,1),createStrap('z',-350,2),createStrap('z',350,3)];straps.forEach(s=>scene.add(s.mesh));
 
 if(reduced.matches){playing=false;time=23;}
 new ResizeObserver(resize).observe(stage);resize();
 // Compile the opaque timber and detailed steel programs before autoplay.
 // This prevents the first arriving component from triggering a visible stall.
 await renderer.compileAsync(scene,camera);
 $('#load-state').hidden=true;$('#pause').disabled=false;$('#replay').disabled=false;
 function buttons(){$('#pause').textContent=playing?'Pause':'Play';$('#pause').setAttribute('aria-pressed',String(!playing));}
 buttons();$('#pause').onclick=()=>{playing=!playing;last=performance.now();buttons();};$('#replay').onclick=()=>{setTime(0);playing=true;last=performance.now();buttons();};
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;last=performance.now();},{threshold:.1}).observe(stage);
 document.addEventListener('visibilitychange',()=>{last=performance.now();});
 let rendered=0,pending=0;renderer.setAnimationLoop(now=>{const dt=Math.min((now-last)/1000,.1);last=now;if(!playing||!inView||document.hidden){pending=0;return;}pending+=dt*playbackRate;if(now-rendered<32)return;rendered=now;setTime(time+pending);pending=0;});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();playing=false;failure(new Error('WebGL context lost'));});
 // Read-only diagnostics + a deterministic time setter for visual/geometry QA.
 window.packagingDemo={seek(t){playing=false;buttons();setTime(t);},get time(){return time;},get playing(){return playing;},spec:SPEC,scene,collars,pallet,lid,straps,duration,playbackRate,cycleSeconds:duration/playbackRate,camera,renderer,resize};
}catch(e){failure(e);}
