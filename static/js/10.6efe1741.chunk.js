"use strict";(self.webpackChunkfashion_react_app=self.webpackChunkfashion_react_app||[]).push([[10],{6010:(s,e,t)=>{t.r(e),t.d(e,{default:()=>x});var a=t(2791),r=t(7689),c=t(1087),i=t(9085),l=(t(5462),t(6357)),d=t(3694),n=t(955),h=t(3209),o=t(184);const x=()=>{const s=(0,r.s0)(),e=(0,r.TH)(),x=new URLSearchParams(e.search).get("query"),[m,u]=(0,a.useState)([]),[w,p]=(0,a.useState)(!0),[j,g]=(0,a.useState)(null),{CurrentUser:f}=(0,a.useContext)(n.s);(0,a.useEffect)((()=>{(async()=>{try{const s=await fetch("http://localhost:2000/products");if(!s.ok)throw new Error("Network response was not ok");const e=await s.json();u(e),p(!1)}catch(j){g(j),p(!1)}})()}),[]);const{AddToCart:b}=(0,a.useContext)(l.A),{wishlist:v,addToWishlist:C,removeFromWishlist:N}=(0,a.useContext)(d.j),[k,z]=(0,a.useState)(Array(m.length).fill(!1)),A=m.filter((s=>s.title.toLowerCase().includes(x.toLowerCase()))),L=s=>{f?v.includes(s)?N(s):C(s):M()},M=()=>{i.Am.error("You must sign in first"),s("/User/signin")};return(0,o.jsxs)("div",{style:{marginTop:"7%"},children:[(0,o.jsxs)("h3",{className:"text-center mb-3",children:['Search Results for "',x,'"']}),w&&(0,o.jsx)("p",{children:"Loading..."}),j&&(0,o.jsxs)("p",{children:["Error: ",j.message]}),0===A.length?(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("img",{src:t(9297),alt:"No Results Found",width:"30%"})}):(0,o.jsx)("div",{className:"d-flex flex-wrap  gap-3 justify-content-center container",children:A.map(((s,e)=>(0,o.jsx)("div",{className:h.Z.card,children:(0,o.jsxs)("div",{className:"card h-100",children:[(0,o.jsx)(c.rU,{to:"/productDetails/".concat(s.id),children:(0,o.jsx)("img",{src:s.image,className:"card-img-top w-100",alt:"..",height:"330px"})}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h5",{className:"card-title",children:s.title}),(0,o.jsxs)("h6",{className:"card-text",children:["Price: $",s.price]}),f&&"admin"===f.role?(0,o.jsx)("div",{children:(0,o.jsx)(c.rU,{to:"/Admin/EditProduct/".concat(s.id),className:"btn btn-dark px-5 me-3 w-100",children:"Edit"})},s.id):(0,o.jsxs)(o.Fragment,{children:[k[e]?(0,o.jsxs)("button",{className:"btn btn-success px-5",disabled:!0,children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-cart-check",viewBox:"0 0 16 16",children:[(0,o.jsx)("path",{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}),(0,o.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})," Added to cart"]}):(0,o.jsxs)("button",{className:"btn btn-success px-5",onClick:()=>((s,e,t)=>{if(f){b(s,e);const a=[...k];a[t]=!0,z(a)}else M()})(s.id,s.price,e),children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-cart-check",viewBox:"0 0 16 16",children:[(0,o.jsx)("path",{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}),(0,o.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})," Add to Cart"]}),v.includes(s.id)?(0,o.jsx)("button",{className:"btn border-1 rounded-circle",onClick:()=>L(s.id),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})}):(0,o.jsx)("button",{className:"btn border-1 rounded-circle ms-4",onClick:()=>L(s.id),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})})]})]})]},s.id)})))})]})}},3209:(s,e,t)=>{t.d(e,{Z:()=>a});const a={card:"Products_card__eQFjE"}},9297:(s,e,t)=>{s.exports=t.p+"static/media/NoSearchResult.fcff17c47d6f0232dfae.jpeg"}}]);
//# sourceMappingURL=10.6efe1741.chunk.js.map