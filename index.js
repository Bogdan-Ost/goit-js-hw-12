import{a as g,S as h,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="52797482-aafa905b189c4ff0c9ee358ec";function m(s){return g("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const u=document.querySelector(".gallery"),d=document.querySelector("span"),b=new h(".gallery-link",{captionsData:"alt",captionDelay:250});function v(s){u.insertAdjacentHTML("beforeEnd",s.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:a,downloads:f})=>`<li class="galerry-list">
        
    <a class="gallery-link" href=${o}><img class="gallery-img" src=${r} alt=${l}></a>
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
      <p class="gallery-subtext">${a}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${f}</p>
      </div>
    </div>
    </li>`).join("")),b.refresh()}function x(){u.textContent=""}function L(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const y=document.querySelector(".form"),i=y.elements["search-text"];y.addEventListener("submit",S);function S(s){if(s.preventDefault(),x(),L(),!i.value.trim())return c(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),i.value="";m(i.value).then(r=>{if(r&&r.hits)v(r.hits);else throw new Error(response.status)}).catch(r=>n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})).finally(()=>c()),s.target.reset()}
//# sourceMappingURL=index.js.map
