import * as T from 'three';

// Screen-relative quaternion rotation: no polar stops or Euler angle limits.
export function createViewControls(camera, canvas, root, changed, interacted) {
 const pointers=new Map(),axis=new T.Vector3(),q=new T.Quaternion();
 let radius=115,zoom=1;
 const direction=new T.Vector3(-105,290,180).normalize();
 function frame(){
  const v=T.MathUtils.degToRad(camera.fov)/2;
  const h=Math.atan(Math.tan(v)*camera.aspect);
  const distance=radius/Math.sin(Math.min(v,h))*1.13;
  camera.position.copy(direction).multiplyScalar(distance);
  camera.lookAt(0,0,0);camera.zoom=zoom;camera.updateProjectionMatrix();
  changed(zoom);
 }
 function scale(factor){zoom=T.MathUtils.clamp(zoom*factor,.4,5);frame();}
 function rotate(dx,dy){
  const length=Math.hypot(dx,dy);if(!length)return;
  axis.set(dy,dx,0).normalize().applyQuaternion(camera.quaternion);
  q.setFromAxisAngle(axis,length*2*Math.PI/Math.max(240,Math.min(canvas.clientWidth,canvas.clientHeight)));
  root.quaternion.premultiply(q).normalize();changed(zoom);
 }
 const pair=()=>{const p=[...pointers.values()];return p.length<2?null:Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y);};
 canvas.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0)return;
  interacted();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);canvas.classList.add('dragging');
 });
 canvas.addEventListener('pointermove',e=>{
  const before=pointers.get(e.pointerId);if(!before)return;
  const distance=pair(),dx=e.clientX-before.x,dy=e.clientY-before.y;
  pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pointers.size===1)rotate(dx,dy);else{const after=pair();if(distance>1&&after>1)scale(after/distance);}
 });
 const release=e=>{pointers.delete(e.pointerId);if(!pointers.size)canvas.classList.remove('dragging');};
 for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,release);
 canvas.addEventListener('wheel',e=>{e.preventDefault();interacted();const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?canvas.clientHeight:1);scale(Math.exp(-T.MathUtils.clamp(delta,-160,160)*.0025));},{passive:false});
 canvas.addEventListener('dblclick',()=>{interacted();zoom=1;frame();});
 canvas.addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','0','Home'].includes(e.key))return;
  e.preventDefault();interacted();
  if(e.key==='ArrowLeft')rotate(-15,0);else if(e.key==='ArrowRight')rotate(15,0);
  else if(e.key==='ArrowUp')rotate(0,-15);else if(e.key==='ArrowDown')rotate(0,15);
  else if(e.key==='+'||e.key==='=')scale(1.2);else if(e.key==='-')scale(1/1.2);
  else{zoom=1;frame();}
 });
 return {frame,scale,rotate,setRadius(r){radius=r;frame();},fit(){zoom=1;frame();},reset(){root.quaternion.identity();zoom=1;frame();},update(dt,auto){if(auto&&!pointers.size)rotate(dt*10,0);}};
}
