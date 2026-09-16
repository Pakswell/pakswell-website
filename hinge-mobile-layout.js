// Reuse the original controls so selection state and event handlers stay intact.
(() => {
  const workspace = document.querySelector('.hinge-config .workspace');
  if (!workspace) return;
  const fieldset = workspace.querySelector('#finishes')?.closest('fieldset');
  const stage = workspace.querySelector('#stage');
  if (!fieldset || !stage) return;
  const marker = document.createComment('Original finish controls position');
  fieldset.before(marker);
  fieldset.classList.add('finish-controls');
  const mobile = window.matchMedia('(max-width: 820px)');
  const update = () => {
    if (mobile.matches) stage.after(fieldset);
    else marker.after(fieldset);
    workspace.classList.toggle('mobile-finish-inline', mobile.matches);
  };
  mobile.addEventListener('change', update);
  update();
})();
