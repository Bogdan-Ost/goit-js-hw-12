import{a as x,S,i as l}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="52797482-aafa905b189c4ff0c9ee358ec";async function g(r,t){const{data:s}=await x("https://pixabay.com/api/",{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return s}const h=document.querySelector(".gallery"),y=document.querySelector("span"),f=document.querySelector(".js-load-more"),$=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function m(r){h.insertAdjacentHTML("beforeEnd",r.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:o,comments:i,downloads:w})=>`<li class="gallery-list">
        
    <a class="gallery-link" href=${s}><img class="gallery-img" src=${t} alt=${a}></a>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${e}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${o}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${i}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${w}</p>
      </div>
    </div>
    </li>`).join("")),$.refresh()}function B(){h.textContent=""}function p(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function P(){f.classList.replace("load-more-hidden","load-more")}function n(){f.classList.replace("load-more","load-more-hidden")}const v=document.querySelector(".form"),c=v.elements["search-text"],R=document.querySelector(".js-load-more"),b=document.querySelector(".gallery");v.addEventListener("submit",O);let d=1,L="";async function O(r){if(r.preventDefault(),B(),d=1,!c.value.trim()){u(),n(),l.info({message:"Please enter a search term",position:"topRight",color:"green"}),c.value="";return}p(),L=c.value;try{const t=await g(c.value,d);if(t&&t.hits.length>0)m(t.hits);else{n(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}b.children.length>=t.totalHits?(n(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"})):P(),r.target.reset()}catch{n(),l.error({message:"Something went wrong. Try again",position:"topRight",color:"red"})}finally{u()}}R.addEventListener("click",E);async function E(){d++;try{p();const r=await g(L,d);r&&r.hits.length>0&&m(r.hits),b.children.length>=r.totalHits&&(n(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"}));const a=document.querySelector(".gallery-list").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{u()}}
//# sourceMappingURL=index.js.map
