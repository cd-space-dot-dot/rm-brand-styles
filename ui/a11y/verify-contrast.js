/* Run in dev: window.RM_A11Y.verify() */
(function(){
  const getVar=(n)=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const hexToRgb=(hex)=>{const h=hex.replace('#','');const s=h.length===3?h.replace(/(.)/g,'$1$1'):h;const b=parseInt(s,16);return [(b>>16)&255,(b>>8)&255,b&255];};
  const relL=([r,g,b])=>{const s=[r,g,b].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*s[0]+.7152*s[1]+.0722*s[2];};
  const ratio=(fg,bg)=>{const L1=relL(hexToRgb(fg)),L2=relL(hexToRgb(bg));const [hi,lo]=[Math.max(L1,L2),Math.min(L1,L2)];return (hi+0.05)/(lo+0.05);};
  const asHex=(v)=>/#[0-9a-f]{3,6}/i.test(v)?v:(v.startsWith('rgb')?'#000000':v);
  function verify(){
    const checks=[
      {name:'Body text', fg:getVar('--text-primary'), bg:getVar('--bg-page'), min:4.5},
      {name:'Secondary text', fg:getVar('--text-secondary'), bg:getVar('--bg-page'), min:3},
      {name:'Link on bg', fg:getVar('--link'), bg:getVar('--bg-page'), min:4.5},
      {name:'Button primary', fg:getVar('--rm-moon'), bg:getVar('--rm-space'), min:4.5},
      {name:'Input border on surface', fg:getVar('--rm-space'), bg:getVar('--bg-surface'), min:3},
      {name:'Table header', fg:getVar('--text-primary'), bg:getVar('--rm-dust'), min:4.5},
    ];
    const rows=checks.map(c=>{const r=ratio(asHex(c.fg),asHex(c.bg));return {Name:c.name, Ratio:+r.toFixed(2), Min:c.min, Pass:r>=c.min};});
    console.table(rows);
    return rows;
  }
  window.RM_A11Y={verify};
})();
