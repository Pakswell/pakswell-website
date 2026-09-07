const menu=document.querySelector('.menu-button'),nav=document.querySelector('#navigation');
if(menu&&nav){const close=()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');};menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){close();menu.focus();}});document.addEventListener('click',e=>{if(!e.target.closest('.header'))close();});}
const form=document.querySelector('#quote-form');
if(form){
 const $=id=>document.getElementById(id),params=new URLSearchParams(location.search),status=$('quote-status'),send=$('send-enquiry');let prepared='',busy=false,lastAccepted='',reference='';
 const product=form.elements.product;
 if([...product.options].some(o=>o.value===params.get('product')))product.value=params.get('product');
 const requests={documents:'Please share the relevant certification and heat-treatment credentials for supplier qualification.',ppwr:'Please share the product-specific PPWR declaration of conformity and applicable SGS test reports.','export-documents':'Please advise on the phytosanitary, origin and heat-treatment documentation applicable to my product and destination.'};
 if(requests[params.get('request')]){form.elements.purpose.value='documents';form.elements.message.value=requests[params.get('request')];product.value=product.value||'Combined order / not sure yet';}
 function mode(){const docs=form.elements.purpose.value==='documents';$('form-title').textContent=docs?'Request documents':'Request a quote';$('form-intro').textContent=docs?'Tell us which product and documents you would like to review.':'A few details are enough to start.';$('quantity-field').hidden=docs;form.elements.quantity.required=!docs;form.elements.quantity.disabled=docs;form.elements.destination.required=!docs;form.querySelector('label[for="destination"]').innerHTML=docs?'Destination <span class="small">(optional)</span>':'Destination *';send.textContent=docs?'Request documents ↗':'Send enquiry ↗';}
 mode();form.elements.purpose.addEventListener('change',mode);
 function collect(){for(const el of [...form.querySelectorAll('input[required]')]){el.setCustomValidity(el.value.trim()?'':'Please complete this field.');}if(!form.reportValidity())return null;return Object.fromEntries([...new FormData(form)].map(([k,v])=>[k,String(v).trim()]));}
 function message(d){return `Hello Mark,\n\n${d.purpose==='documents'?'Please help with this documentation request.':'Please review this packaging enquiry.'}\n\nProduct: ${d.product}\nDimensions / model: ${d.size||'Please advise'}\n${d.purpose==='quote'?'Quantity: '+d.quantity+'\nShipment: '+d.shipment+'\n':''}Destination: ${d.destination||'Not specified'}\n\nRequirements:\n${d.message||'None specified'}\n\nContact: ${d.name}\nCompany: ${d.company||'Not provided'}\nEmail: ${d.email}\n\nThank you,\n${d.name}`;}
 function draft(){const d=collect();if(!d)return;prepared=message(d);$('enquiry-text').textContent=prepared;$('email-enquiry').href='mailto:mark.lee@pakswell.com?subject='+encodeURIComponent('PAKSWELL '+(d.purpose==='documents'?'document request':'packaging enquiry')+' — '+d.product)+'&body='+encodeURIComponent(prepared);$('review').hidden=false;$('review-title').focus({preventScroll:true});}
 form.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('');if(!busy){send.disabled=false;$('send-success').hidden=true;status.textContent='';$('review').hidden=true;}});
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(busy)return;const d=collect();if(!d)return;
  if(d.website){status.textContent='We could not accept this submission. Please email our team.';return;}
  const fingerprint=JSON.stringify(d);if(fingerprint===lastAccepted){status.textContent='This enquiry has already been accepted. Please contact us with your reference if you need to follow up.';return;}
  if(!form.dataset.accessKey){status.textContent='Online submission is not configured. Please use the email option below.';return;}
  reference='PW-'+new Date().toISOString().slice(0,10).replaceAll('-','')+'-'+crypto.randomUUID().slice(0,8).toUpperCase();
  const local=['127.0.0.1','localhost'].includes(location.hostname);
  const payload={access_key:form.dataset.accessKey,subject:(local?'[LOCAL WEBSITE PREVIEW] ':'')+(d.purpose==='documents'?'Document request':'Packaging enquiry')+' — '+d.product,from_name:'PAKSWELL website',name:d.name,email:d.email,replyto:d.email,product:d.product,request_type:d.purpose,reference,message:message(d),botcheck:false};
  try{const source=window.PakswellAttribution?.read?.();if(source){const keys=['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content','landing_page','referrer','first_seen_at'];const lines=keys.filter(k=>source[k]).map(k=>k+': '+String(source[k]).slice(0,1000));if(lines.length)payload.message+='\n\nEnquiry source:\n'+lines.join('\n');}}catch{}
  busy=true;send.disabled=true;send.textContent='Sending…';status.textContent='Sending your enquiry. Please keep this page open.';form.setAttribute('aria-busy','true');
  const controls=[...form.querySelectorAll('input,select,textarea')].map(el=>[el,el.disabled]);controls.forEach(([el])=>el.disabled=true);
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
  try{
   const response=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload),signal:controller.signal});
   const result=await response.json();if(!response.ok||result.success!==true){status.textContent=response.status===429?'Too many attempts. Please wait before retrying, or email our team. Your details are still here.':'The form service did not accept this enquiry. Your details are still here; please try later or use the email option below.';return;}
   lastAccepted=fingerprint;$('send-success').hidden=false;$('enquiry-reference').textContent='Reference: '+reference;status.textContent='Enquiry accepted by our form service.';$('send-success').focus({preventScroll:true});
   window.dispatchEvent(new CustomEvent('pakswell:enquiry-accepted',{detail:{purpose:d.purpose,product:d.product,reference}}));
  }catch{status.textContent='We could not confirm delivery. Your details are still here. Please contact us by email before resending to avoid a duplicate enquiry.';}
  finally{clearTimeout(timeout);busy=false;form.removeAttribute('aria-busy');controls.forEach(([el,disabled])=>el.disabled=disabled);send.disabled=fingerprint===lastAccepted;mode();if(send.disabled)send.textContent='Enquiry accepted';}
 });
 $('prepare-email').addEventListener('click',draft);
 $('copy-enquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('To: mark.lee@pakswell.com\n\n'+prepared);status.textContent='Copied. Paste into your email service and send to mark.lee@pakswell.com.';}catch{status.textContent='Copy is unavailable. Select the draft text, or save it as a text file.';}});
 $('download-enquiry').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob(['To: mark.lee@pakswell.com\n\n'+prepared],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='PAKSWELL-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 $('email-enquiry').addEventListener('click',()=>status.textContent='Press Send in your email app to send this draft.');
}
