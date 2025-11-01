import{a as x,S,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const $="52797482-aafa905b189c4ff0c9ee358ec";async function y(r,t){const{data:s}=await x("https://pixabay.com/api/",{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return s}const h=document.querySelector(".gallery"),g=document.querySelector("span"),f=document.querySelector(".js-load-more"),B=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function m(r){h.insertAdjacentHTML("beforeEnd",r.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:o,comments:i,downloads:w})=>`<li class="gallery-list">
        
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
    </li>`).join("")),B.refresh()}function P(){h.textContent=""}function p(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}function v(){f.classList.replace("load-more-hidden","load-more")}function l(){f.classList.replace("load-more","load-more-hidden")}const b=document.querySelector(".form"),c=b.elements["search-text"],E=document.querySelector(".js-load-more"),L=document.querySelector(".gallery");b.addEventListener("submit",O);let d=1,q="";async function O(r){if(r.preventDefault(),d=1,!c.value.trim())return u(),l(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),c.value="";q=c.value;try{const t=await y(c.value,d);if(t&&t.hits.length>0)P(),p(),m(t.hits);else throw l(),new Error;L.children.length>=t.totalHits?(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"})):v()}catch{l(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{u()}r.target.reset()}E.addEventListener("click",R);async function R(){d++,l();try{p();const r=await y(q,d);r&&r.hits.length>0&&m(r.hits),L.children.length>=r.totalHits&&(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"}));const a=document.querySelector(".gallery-list").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{v(),u()}}
//# sourceMappingURL=index.js.map
