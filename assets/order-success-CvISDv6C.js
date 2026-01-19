import{f as C,s as D,_ as R}from"./app-BY73wLkG.js";function f(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(t){try{if(!t)return new Date;if(typeof t=="string"){const i=new Date(t);if(!isNaN(i.getTime()))return i;const r=Number(t);return isNaN(r)?new Date:new Date(r)}if(typeof t=="number")return t>1e12?new Date(t):t>1e9?new Date(t):new Date(t*1e3);if(t instanceof Date)return t;if(t&&typeof t.toDate=="function")try{return t.toDate()}catch{}const a=new Date(t);if(!isNaN(a.getTime()))return a}catch{}return new Date}function S(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function I(t,a=160){if(!t)return null;try{if(window.QRCode){const r=window.QRCode;if(typeof r.toDataURL=="function")return await new Promise((n,l)=>r.toDataURL(t,{width:a},(e,o)=>e?l(e):n(o)));if(typeof r.toCanvas=="function")return await new Promise((n,l)=>{try{const e=document.createElement("canvas");r.toCanvas(e,t,{width:a},o=>o?l(o):n(e.toDataURL("image/png")))}catch(e){l(e)}})}const i=await R(()=>import("./browser-rpPU-9HU.js").then(r=>r.b),[]).catch(()=>null);if(i){const r=i,n=r.toDataURL||r.default&&r.default.toDataURL;if(typeof n=="function")return await n(t,{width:a})}}catch(i){console.warn("[QR] génération échouée:",i)}return null}function N(t,a){const i=t.readableId||t.id||"N/A",n=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),l=Array.isArray(t.items)&&t.items.length?t.items.map(c=>{const h=c.quantity||1,b=c.title||c.id||"Produit",E=typeof c.price=="object"?Number(c.price?.amount||0):Number(c.price||0),x=typeof c.price=="object"?c.price?.currency||t.currency||"":t.currency||"",w=(E*h).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:14px;line-height:1.2">
                    <div style="max-width:65%;overflow-wrap:break-word">${f(`${h} × ${b}`)}</div>
                    <div style="white-space:nowrap">${f(w)} ${f(x)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:var(--text-muted-color, #6b7280)">Aucun item disponible</div>',e=(typeof t.total=="object"?Number(t.total?.amount||0):Number(t.total||0)).toFixed(2),o=(typeof t.total=="object"?t.total?.currency:t.currency)||"",d=t.store?.logoUrl||null,u=d&&S(d),m=t.store&&t.store.name&&String(t.store.name).trim().charAt(0)||"B",s=`
    :root{
      --bg-color: #ffffff;
      --text-color: #111827;
      --primary-color: #000000;
      --secondary-color: #6B7280;
      --card-bg-color: #ffffff;
      --card-border-color: #E5E7EB;
      --text-muted-color: #6B7280;
      --font-family: Inter, Arial, Helvetica, sans-serif;
    }
    html,body{margin:0;padding:0;font-family:var(--font-family);background:var(--bg-color);color:var(--text-color)}
    .receipt{box-sizing:border-box;width:600px;padding:28px;background:var(--card-bg-color);color:var(--text-color);border:1px solid var(--card-border-color);border-radius:8px}
    .header{text-align:center;margin-bottom:8px}
    .meta{display:flex;justify-content:space-between;margin:18px 0;color:var(--text-muted-color)}
    .items{margin-bottom:18px}
    .footer{display:flex;justify-content:space-between;align-items:center}
    .qrbox{width:140px;height:140px;display:flex;align-items:center;justify-content:center;border:1px solid var(--card-border-color);border-radius:8px;background:var(--card-bg-color)}
    .logo-sq{display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:8px;font-weight:700;color:var(--card-bg-color);background:var(--primary-color);font-size:22px;margin-bottom:4px}
    .logo-img{max-height:40px;object-fit:contain;margin-bottom:4px}
    .items .title{font-size:14px}
  `,p=`
    (function() {
      try {
        const vars = [
          '--bg-color',
          '--text-color',
          '--primary-color',
          '--secondary-color',
          '--card-bg-color',
          '--card-border-color',
          '--text-muted-color',
          '--font-family'
        ];
        const parentStyle = window.parent && window.parent.getComputedStyle
          ? window.parent.getComputedStyle(window.parent.document.documentElement)
          : null;
        if (!parentStyle) return;
        vars.forEach(k => {
          const v = parentStyle.getPropertyValue(k);
          if (v) document.documentElement.style.setProperty(k, v.trim());
        });
      } catch (e) {}
    })();
  `,y=u?`<img class="logo-img" src="${f(d)}" alt="${f(t.store?.name||"")}">`:`<div class="logo-sq" aria-hidden="true">${f(m)}</div>`,g=a?`<img src="${a}" alt="QR" style="width:120px;height:120px;object-fit:contain"/>`:'<div style="font-size:12px;color:var(--text-muted-color)">QR indisponible</div>',v=f(t.store?.name||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${p}<\/script>
  <style>${s}</style>
</head>
<body>
  <div class="receipt" id="receipt-root" role="document" aria-label="Récapitulatif de commande">
    <div class="header">
      ${y}
      <h2 style="margin:0 0 6px 0;font-size:20px">Récapitulatif de commande</h2>
      <div style="font-size:12px;color:var(--text-muted-color)">${v}</div>
    </div>

    <div class="meta">
      <div>
        <div style="font-size:12px;color:var(--text-muted-color)">Commande N°</div>
        <div style="font-weight:700">${i}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:var(--text-muted-color)">Date</div>
        <div>${f(n)}</div>
      </div>
    </div>

    <div class="items">${l}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:12px;color:var(--text-muted-color)">Total</div>
        <div style="font-weight:700;font-size:18px">${f(e)} ${f(o)}</div>
      </div>
      <div class="qrbox">${g}</div>
    </div>
  </div>
</body>
</html>`}async function U(t,a={}){const{timeoutMs:i=15e3,html2canvasCdn:r="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=a;return new Promise((n,l)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let o=!1;const d=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}o=!0},u=setTimeout(()=>{o||(d(),l(new Error("Timeout: génération du récapitulatif trop longue.")))},i),m=t.replace("</body>",`<script src="${r}"><\/script></body>`);e.srcdoc=m,e.onload=async()=>{if(!o)try{const s=e.contentWindow,p=e.contentDocument;if(!p)throw new Error("Iframe document inaccessible");const y=Date.now(),g=100;await new Promise((E,x)=>{const w=setInterval(()=>{if(o)return clearInterval(w),x(new Error("Aborted"));if(s.html2canvas)return clearInterval(w),E();if(Date.now()-y>Math.min(i,8e3))return clearInterval(w),x(new Error("html2canvas not loaded in iframe"))},g)});const c=p.getElementById("receipt-root")||p.body;if(!c)return d(),clearTimeout(u),l(new Error("No receipt node inside iframe"));const b=(await s.html2canvas(c,{backgroundColor:"#ffffff"})).toDataURL("image/png");d(),clearTimeout(u),n(b)}catch(s){d(),clearTimeout(u),l(s)}}})}function A(t,a){const i=t.readableId||t.id||"",r=document.getElementById("order-id");r&&(r.textContent=i);const n=document.getElementById("qrcode-container");n&&(n.innerHTML="",(async()=>{if(!t.id||!a){console.error("[QR] orderId ou storeId manquant pour la génération du QR code."),n.textContent="Erreur QR";return}const l=`zflex-order://${a}/${t.id}`,e=await I(l,160);if(e){const o=document.createElement("img");o.src=e,o.alt="QR Code de la commande",o.style.width="160px",o.style.height="160px",n.appendChild(o)}else{const o=document.createElement("span");o.textContent="QR indisponible",o.style.fontSize="12px",o.style.color="var(--text-muted-color, #6b7280)",n.appendChild(o)}})())}async function q(){const t=document.getElementById("loading-state"),a=document.getElementById("success-state"),i=document.getElementById("error-state"),r=document.getElementById("error-message");try{const l=new URLSearchParams(window.location.search).get("id");if(!l)throw new Error("ID de commande manquant dans l'URL.");const e=document.getElementById("zflex-data")||document.querySelector(".zflex-fragment-data");if(!e)throw new Error("Tunnel de data introuvable.");const d=JSON.parse(e.textContent||"{}").storeId;if(!d)throw new Error("ID du store introuvable dans les données de la page.");const u=await C(l,d);if(!u?.valid||!u?.order)throw new Error(u?.message||"Commande invalide ou déjà traitée.");const m=u.order;m.createdAt=$(m.createdAt),A(m,d);const s=document.getElementById("download-receipt-btn");s&&s.addEventListener("click",async()=>{s.disabled=!0,s.textContent="Génération...";try{const p=`zflex-order://${d}/${m.id}`,y=await I(p,300),g=N(m,y),v=await U(g),c=document.createElement("a");c.href=v;const h=m.readableId||m.id||"commande";c.download=`recap-commande-${h}.png`,document.body.appendChild(c),c.click(),c.remove()}catch(p){console.error("Erreur génération du récapitulatif:",p),D("Erreur",p?.message||"Impossible de générer le récapitulatif.",{variant:"error"})}finally{s.disabled=!1,s.textContent="Télécharger le récapitulatif"}}),t&&(t.style.display="none"),a&&a.classList.remove("hidden")}catch(n){console.error("[OrderSuccess] Erreur:",n),r&&(r.textContent=n?.message||"Impossible de récupérer la commande."),t&&(t.style.display="none"),i&&i.classList.remove("hidden"),D("Erreur de commande",n?.message||"Impossible de récupérer les détails.",{variant:"error"})}}export{q as initOrderSuccess};
