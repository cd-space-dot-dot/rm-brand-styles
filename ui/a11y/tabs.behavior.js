/* Tabs roving tabindex + aria-selected. Root = element with role="tablist". */
export function initTabs(root){
  const tabs=[...root.querySelectorAll('[role="tab"]')];
  const panels=tabs.map(t=>document.getElementById(t.getAttribute('aria-controls')));
  function activate(i){
    tabs.forEach((t,idx)=>{
      const sel=idx===i; t.setAttribute('aria-selected', sel); t.tabIndex=sel?0:-1; panels[idx].hidden=!sel;
    }); tabs[i].focus();
  }
  tabs.forEach((t,i)=>{
    t.addEventListener('click',()=>activate(i));
    t.addEventListener('keydown',e=>{
      const k=e.key; let idx=i;
      if(k==='ArrowRight'||k==='ArrowDown') idx=(i+1)%tabs.length;
      if(k==='ArrowLeft'||k==='ArrowUp') idx=(i-1+tabs.length)%tabs.length;
      if(idx!==i){ e.preventDefault(); activate(idx); }
    });
  });
  const current=Math.max(0, tabs.findIndex(t=>t.getAttribute('aria-selected')==='true'));
  activate(current);
}
