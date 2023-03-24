const assetLoc="../assets/",black="hsla(0, 0%, 5%, 1.00)",blackt="hsla(0, 0%, 0%, 0.90)",bgColor="hsla(0, 0%, 0%, 0.65)",lazyLoadOptions={threshold:0,rootMargin:"0px 0px "+window.innerHeight+"px 0px"},assets=document.querySelectorAll("[data]"),assetObserver=new IntersectionObserver(((e,s)=>{e.forEach((e=>{if(!e.isIntersecting)return;const t=e.target,r=t.getAttribute("data");null!=r&&r.includes("svg")&&t.classList.add("sharp"),t.src=assetLoc+r,s.unobserve(e.target)}))}),lazyLoadOptions);assets.forEach((e=>{e.setAttribute("loading","lazy"),assetObserver.observe(e),e.onload=function(){e.classList.add("loaded")}}));const gradient="linear-gradient("+black+" 0%, "+bgColor+" 15%, "+bgColor+" 85%, "+black+" 100%), url("+assetLoc,backgrounds=document.querySelectorAll("[bg]"),bgObserver=new IntersectionObserver(((e,s)=>{e.forEach((e=>{if(!e.isIntersecting)return;const t=e.target,r="bg/"+t.getAttribute("bg");t.classList.add("sharp"),t.style.backgroundImage=gradient+r+")",s.unobserve(e.target)}))}),lazyLoadOptions);backgrounds.forEach((e=>{bgObserver.observe(e)}));