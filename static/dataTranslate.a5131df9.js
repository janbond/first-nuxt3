import{_ as v}from"./client-only.d57bdc30.js";import{a0 as h,j as y,r as w,o as _,c as p,a as o,l as f,b as c,w as g,t as d,d as u,k as x,a1 as D,F as b,m as C}from"./entry.cebec49a.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";const A={props:["pages","currentPage"],setup(a,{emit:e}){let t=1;const{pages:n,currentPage:l}=h(a);return console.log("props pages",n,l),y(l,(r,i)=>{console.log("watch props",r,i),t=Number(r)}),{pages:n,index:t,currentPage:l,emitArrow:r=>{t+=r,t<1?t=1:t>n&&(t=n),e("emit-page",t)}}}},N={class:"pageCont"},P={id:"pageBox"},M={class:"pageCenter"},B={class:"fs-5",style:{"line-height":"100%"}},V={class:"fs-5"},F=["value"];function I(a,e,t,n,l,m){const r=w("font-awesome-icon"),i=v;return _(),p("div",N,[o("table",P,[o("tr",null,[o("th",null,[o("a",{href:"#",title:"",class:"pagePrev",onClick:e[0]||(e[0]=f(s=>n.emitArrow(-1),["prevent"]))},[c(i,null,{default:g(()=>[c(r,{icon:"fas fa-angle-left"})]),_:1})])]),o("td",M,[o("div",B,[o("span",null,d(n.currentPage),1),u(" / "+d(n.pages),1)]),o("div",V,[u(" 移至  "),x(o("select",{id:"tel",class:"form-select fs-5",onInput:e[1]||(e[1]=s=>a.$emit("emit-select-page",s.target.value)),"onUpdate:modelValue":e[2]||(e[2]=s=>n.currentPage=s)},[(_(!0),p(b,null,C(n.pages,s=>(_(),p("option",{key:s,value:s},d(s),9,F))),128))],544),[[D,n.currentPage]]),u("  頁 ")])]),o("th",null,[o("a",{href:"#",title:"",class:"pageNext",onClick:e[3]||(e[3]=f(s=>n.emitArrow(1),["prevent"]))},[c(i,null,{default:g(()=>[c(r,{icon:"fas fa-angle-right"})]),_:1})])])])])])}const j=k(A,[["render",I],["__scopeId","data-v-37acb37a"]]);function E(a){return a.split("/")[2].split(" ")[0]}function L(a){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=parseInt(a.substring(5,7));return e[t-1]}export{j as _,L as a,E as t};
