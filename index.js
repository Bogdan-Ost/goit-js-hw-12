import{a as x,S as q,i}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S="52797482-aafa905b189c4ff0c9ee358ec";async function h(o,t){const{data:a}=await x("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return a}const g=document.querySelector(".gallery"),f=document.querySelector("span"),m=document.querySelector(".js-load-more"),w=new q(".gallery-link",{captionsData:"alt",captionDelay:250});function p(o){g.insertAdjacentHTML("beforeEnd",o.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:r,comments:l,downloads:L})=>`<li class="galerry-list">
        
    <a class="gallery-link" href=${a}><img class="gallery-img" src=${t} alt=${n}></a>
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
      <p class="gallery-subtext">${L}</p>
      </div>
    </div>
    </li>`).join("")),w.refresh()}function $(){g.textContent=""}function P(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function E(){m.classList.replace("load-more-hidden","load-more")}function u(){m.classList.replace("load-more","load-more-hidden")}const b=document.querySelector(".form"),c=b.elements["search-text"],d=document.querySelector(".js-load-more");b.addEventListener("submit",O);let s=1,v="";function O(o){if(o.preventDefault(),$(),P(),s=1,!c.value.trim())return y(),u(),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),c.value="";v=c.value,h(c.value,s).then(t=>{if(t&&t.hits.length>0)console.log(t),p(t.hits),E();else throw u(),new Error(response.status);s===t.totalHits&&(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"}))}).catch(t=>i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})).finally(()=>{y()}),o.target.reset()}d.addEventListener("click",B);async function B(){s++,d.disabled=!0;try{const o=await h(v,s);p(o.hits),s>=o.totalHits&&(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"green"}))}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{d.disabled=!1}}
//# sourceMappingURL=index.js.map
