import{a as x,S,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const $="52797482-aafa905b189c4ff0c9ee358ec";async function h(o,t){const{data:s}=await x("https://pixabay.com/api/",{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return s}const g=document.querySelector(".gallery"),f=document.querySelector("span"),m=document.querySelector(".js-load-more"),B=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function p(o){g.insertAdjacentHTML("beforeEnd",o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:l,downloads:w})=>`<li class="gallery-list">
        
    <a class="gallery-link" href=${s}><img class="gallery-img" src=${t} alt=${a}></a>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${e}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${r}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${l}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${w}</p>
      </div>
    </div>
    </li>`).join("")),B.refresh()}function P(){g.textContent=""}function b(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}function E(){m.classList.replace("load-more-hidden","load-more")}function i(){m.classList.replace("load-more","load-more-hidden")}const v=document.querySelector(".form"),d=v.elements["search-text"],y=document.querySelector(".js-load-more"),L=document.querySelector(".gallery");v.addEventListener("submit",O);let c=1,q="";async function O(o){o.preventDefault(),P(),b(),c=1,d.value.trim()||(u(),i(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})),q=d.value;try{const t=await h(d.value,c);if(t&&t.hits.length>0)p(t.hits);else throw i(),new Error;L.children.length>=t.totalHits?(i(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"})):E()}catch{i(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{u()}o.target.reset()}y.addEventListener("click",R);async function R(){c++,y.disabled=!0;try{b();const o=await h(q,c);p(o.hits),L.children.length>=o.totalHits&&(i(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"}));const a=document.querySelector(".gallery-list").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{y.disabled=!1,u()}}
//# sourceMappingURL=index.js.map
