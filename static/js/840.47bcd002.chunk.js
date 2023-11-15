"use strict";(self.webpackChunkfashion_react_app=self.webpackChunkfashion_react_app||[]).push([[840],{5840:(s,e,l)=>{l.r(e),l.d(e,{default:()=>m});var t=l(2791),a=l(7689),i=l(1087),r=l(9085),c=(l(5462),l(6303)),d=l(955),n=l(6357),h=l(3694),o=l(184);const x=s=>{let{rating:e,starSize:l}=s;if(!e||"number"!==typeof e.rate)return(0,o.jsx)("div",{children:"No rating available"});const t=Math.floor(e.rate),a=e.rate-t,i={fontSize:l||"24px"};return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"star-rating",style:i,children:(()=>{const s=[];for(let l=1;l<=t;l++)s.push((0,o.jsx)("span",{className:"star full-star pe-1",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"yellow",className:"bi bi-star-fill",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})},l));a>=.5&&s.push((0,o.jsx)("span",{className:"star half-star",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"yellow",className:"bi bi-star-half",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"})})},"half-star"));const e=5-s.length;for(let l=1;l<=e;l++)s.push((0,o.jsx)("span",{className:"star empty-star ps-1",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"yellow",className:"bi bi-star me-2",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})},l+t+1));return s})()}),"(",e.rate,") (",e.count,")"]})},m=()=>{const{id:s}=(0,a.UO)(),{getProductById:e,products:l}=(0,t.useContext)(c.Z),[m,w]=(0,t.useState)({}),{CurrentUser:u}=(0,t.useContext)(d.s),{AddToCart:g}=(0,t.useContext)(n.A),{wishlist:p,addToWishlist:j,removeFromWishlist:v}=(0,t.useContext)(h.j),[f,b]=(0,t.useState)(Array(l.length).fill(!1)),N=(0,a.s0)();if((0,t.useEffect)((()=>{e(s).then((s=>{console.log("Product Data:",s),w(s);const e=l.findIndex((e=>e.id===s.id));b((s=>{const l=[...s];return l[e]=!1,l}))})).catch((s=>{console.error("Error fetching product details:",s)}))}),[s,e,l]),!m)return(0,o.jsx)("div",{children:"Loading..."});const C=s=>{u?p.includes(s)?v(s):j(s):z()},z=()=>{r.Am.error("You must sign in first"),N("/User/signin")};return(0,o.jsx)("div",{className:"container",style:{width:"70%",marginTop:"7%"},children:(0,o.jsx)("div",{className:"card mb-3",children:(0,o.jsxs)("div",{className:"row g-0",children:[(0,o.jsx)("div",{className:"col-md-6 w-50",children:(0,o.jsx)("img",{src:m.image,className:"img-fluid rounded-start",alt:"...",width:"340px",height:""})}),(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h2",{className:"card-title",children:m.title}),(0,o.jsxs)("h5",{className:"card-text",children:["Price: $",m.price]}),(0,o.jsx)("p",{className:"card-text",children:m.description}),(0,o.jsxs)("h6",{className:"card-text d-flex ",children:["Category: ",m.category,(0,o.jsx)("span",{className:"ms-5 mb-3",children:(0,o.jsx)(x,{rating:m.rating,count:m.count})})]}),"admin"===(null===u||void 0===u?void 0:u.role)?(0,o.jsx)("div",{children:(0,o.jsx)(i.rU,{to:"/Admin/EditProduct/".concat(m.id),className:"btn btn-dark px-5 me-3 w-100",children:"Edit"})}):(0,o.jsxs)("div",{children:[f[l.findIndex((s=>s.id===m.id))]?(0,o.jsxs)("button",{className:"btn btn-success px-5 w-75",disabled:!0,children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-cart-check",viewBox:"0 0 16 16",children:[(0,o.jsx)("path",{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}),(0,o.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]}),"  Added to cart"]}):(0,o.jsxs)("button",{className:"btn btn-success px-5 w-75",onClick:()=>((s,e)=>{if(u){g(s,e);const t=l.findIndex((e=>e.id===s));b([...f.slice(0,t),!0,...f.slice(t+1)])}else z()})(m.id,m.price),children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-cart-check",viewBox:"0 0 16 16",children:[(0,o.jsx)("path",{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}),(0,o.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})," Add to Cart"]}),p.includes(m.id)?(0,o.jsx)("button",{className:"btn border-1 rounded-circle ms-3",onClick:()=>C(m.id),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})}):(0,o.jsx)("button",{className:"btn border-1 rounded-circle ms-3",onClick:()=>C(m.id),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.280 8.717 2.010L8 2.748zM8 15C-7.333 4.868 3.279-3.040 7.824 1.143c.060.055.119.112.176.171a3.120 3.120 0 0 1 .176-.170C12.720-3.042 23.333 4.867 8 15z"})})})]})]})})]},m.id)})})}}}]);
//# sourceMappingURL=840.47bcd002.chunk.js.map