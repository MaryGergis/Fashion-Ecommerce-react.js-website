"use strict";(self.webpackChunkfashion_react_app=self.webpackChunkfashion_react_app||[]).push([[553],{3553:(s,e,t)=>{t.r(e),t.d(e,{default:()=>m});var i=t(2791),a=t(7689),l=t(1087),c=t(9085),d=(t(5462),t(6303)),r=t(955),n=t(6357),h=t(3694),o=t(3209),x=t(184);const m=s=>{const e=(0,a.s0)(),{products:t,getProductsByType:m}=i.useContext(d.Z),u=m("menbottom"),{CurrentUser:w}=(0,i.useContext)(r.s),{AddToCart:p}=(0,i.useContext)(n.A),{wishlist:j,addToWishlist:b,removeFromWishlist:g}=(0,i.useContext)(h.j),[v,C]=(0,i.useState)(Array(t.length).fill(!1)),f=s=>{w?j.includes(s)?g(s):b(s):N()},N=()=>{c.Am.error("You must sign in first"),e("/User/signin")};return(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"d-flex flex-wrap gap-3 justify-content-center container",style:{marginTop:"7%"},children:null===u||void 0===u?void 0:u.map(((s,e)=>(0,x.jsx)("div",{className:o.Z.card,children:(0,x.jsxs)("div",{className:"card h-100",children:[(0,x.jsx)(l.rU,{to:"/productDetails/".concat(s.id),children:(0,x.jsx)("img",{src:s.image,className:"card-img-top w-100",alt:"..",height:"330px"})}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("h5",{className:"card-title",children:s.title}),(0,x.jsxs)("h6",{className:"card-text",children:["Price: $",s.price]}),"admin"===(null===w||void 0===w?void 0:w.role)?(0,x.jsx)("div",{children:(0,x.jsx)(l.rU,{to:"/Admin/EditProduct/".concat(s.id),className:"btn btn-dark px-5 me-3 w-100",children:"Edit"})}):(0,x.jsxs)("div",{children:[v[e]?(0,x.jsxs)("button",{className:"btn btn-success px-5 w-75",disabled:!0,children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-cart-check",viewBox:"0 0 16 16",children:[(0,x.jsx)("path",{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}),(0,x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]}),"  Added to cart"]}):(0,x.jsxs)("button",{className:"btn btn-success px-5 w-75",onClick:()=>((s,e,t)=>{if(w){p(s,e);const i=[...v];i[t]=!0,C(i)}else N()})(s.id,s.price,e),children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"currentColor",className:"bi bi-cart-check",viewBox:"0 0 16 16",children:[(0,x.jsx)("path",{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}),(0,x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})," Add to Cart"]}),j.includes(s.id)?(0,x.jsx)("button",{className:"btn border-1 rounded-circle  ms-3",onClick:()=>f(s.id),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:(0,x.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})}):(0,x.jsx)("button",{className:"btn border-1 rounded-circle ms-3",onClick:()=>f(s.id),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:(0,x.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})})]})]})]},s.id)})))})})}},3209:(s,e,t)=>{t.d(e,{Z:()=>i});const i={card:"Products_card__eQFjE"}}}]);
//# sourceMappingURL=553.ff393444.chunk.js.map