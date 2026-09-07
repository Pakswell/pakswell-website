// Production-only integration with the existing Google Ads and consent setup.
(() => {
 if(!['www.pakswell.com','pakswell.com'].includes(location.hostname))return;
 const track=(name,data)=>{try{window.gtag?.('event',name,data);}catch{}};
 const counted=new Set();
 window.addEventListener('pakswell:enquiry-accepted',event=>{
  const {purpose,product,reference}=event.detail||{};
  if(!/^PW-\d{8}-[A-F0-9]{8}$/.test(reference||'')||counted.has(reference))return;
  counted.add(reference);
  track(purpose==='quote'?'lead_form_accepted':'document_request_accepted',{product,transaction_id:reference});
  if(purpose!=='quote')return;
  // Keep enhanced conversion data transient and gated by the existing consent choice.
  try{
   if(window.PakswellConsent?.allowsUserData()){
    const email=document.querySelector('#email')?.value.trim().toLowerCase();
    if(email)window.gtag?.('set','user_data',{email});
   }
   track('conversion',{send_to:'AW-18091479514/5nFFCKKxnZwcENqj2LJD',value:1,currency:'USD',transaction_id:reference});
   window.gtag?.('set','user_data',null);
  }catch{}
 });
 document.addEventListener('click',e=>{
  const choice=e.target.closest('[data-cookie-choice]');
  if(choice){window.PakswellConsent?.[choice.dataset.cookieChoice==='accepted'?'accept':'reject']();const status=document.querySelector('#cookie-choice-status');if(status)status.textContent=choice.dataset.cookieChoice==='accepted'?'Optional cookies accepted.':'Optional cookies rejected.';return;}
  const a=e.target.closest('a');if(!a)return;
  if(a.hostname==='wa.me'){track('click_whatsapp',{event_category:'engagement'});track('conversion',{send_to:'AW-18091479514/YtFFCPfIq6scENqj2LJD',value:1,currency:'USD'});}
  else if(a.protocol==='mailto:')track('click_email',{event_category:'engagement'});
  else if(a.protocol==='tel:')track('click_phone',{event_category:'engagement'});
 });
 // Existing home-page ad anchors continue to reach the relevant new page.
 if(location.pathname==='/'||location.pathname==='/index.html'){
  const targets={'#contact':'/contact.html','#about':'/about.html'};
  if(targets[location.hash])location.replace(targets[location.hash]+location.search);
 }
})();
