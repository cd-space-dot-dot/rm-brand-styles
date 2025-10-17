/* Modal focus trap + restore. Markup: <div id="m1" class="modal" role="dialog" aria-modal="true" aria-labelledby="m1-title" hidden> */
export function initModal(modal){
  const SELECT='a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
  const nodes=()=>[...modal.querySelectorAll(SELECT)].filter(el=>!el.disabled && el.offsetParent!==null);
  let opener=null;
  function trap(e){
    if(e.key!=='Tab') return;
    const f=nodes(); if(!f.length) return;
    const first=f[0], last=f[f.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
  function onKey(e){ if(e.key==='Escape') close(); }
  function open(){ opener=document.activeElement; modal.hidden=false; modal.addEventListener('keydown',trap); document.addEventListener('keydown',onKey); (nodes()[0]||modal).focus(); }
  function close(){ modal.hidden=true; modal.removeEventListener('keydown',trap); document.removeEventListener('keydown',onKey); opener&&opener.focus(); }
  return { open, close };
}
