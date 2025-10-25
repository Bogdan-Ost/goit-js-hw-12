import{a as g,S as p,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m="52797482-aafa905b189c4ff0c9ee358ec";async function h(s,r){const{data:a}=await g("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return a}const u=document.querySelector(".gallery"),d=document.querySelector("span"),b=document.querySelector(".js-load-more"),v=new p(".gallery-link",{captionsData:"alt",captionDelay:250});function L(s){u.insertAdjacentHTML("beforeEnd",s.map(({webformatURL:r,largeImageURL:a,tags:l,likes:e,views:t,comments:o,downloads:f})=>`<li class="galerry-list">
        
    <a class="gallery-link" href=${a}><img class="gallery-img" src=${r} alt=${l}></a>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${e}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${t}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${o}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${f}</p>
      </div>
    </div>
    </li>`).join("")),v.refresh()}function x(){u.textContent=""}function w(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}function S(){b.classList.replace("load-more-hidden","load-more")}const y=document.querySelector(".form"),i=y.elements["search-text"];y.addEventListener("submit",$);let q=1;function $(s){if(s.preventDefault(),x(),w(),!i.value.trim())return c(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),i.value="";h(i.value,q).then(r=>{if(r&&r.hits)L(r.hits),S();else throw new Error(response.status)}).catch(r=>n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})).finally(()=>c()),s.target.reset()}
//# sourceMappingURL=index.js.map
