import{_ as a}from"./BreadCrumb.5246e396.js";import{f as n,s as r,c as _,b as l,a as s,t as d,o as p}from"./entry.206e4a11.js";import{u}from"./index.f1068c8c.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";const m={async setup(){const o=n().params.id,e=u(),{thisSocialResp:t}=r(e);return await e.getSocialResp(o),{thisSocialResp:t}}},v={class:"SocialArticleWrap"},h={class:"tiBox"},S={class:"ti fs-1"},B=["innerHTML"],R={class:"goBackBox"};function x(i,o,e,t,g,k){const c=a;return p(),_("div",null,[l(c,{"article-title":t.thisSocialResp.title},null,8,["article-title"]),s("section",v,[s("div",h,[s("div",S,d(t.thisSocialResp.title),1)]),s("div",{class:"cont fs-5",innerHTML:t.thisSocialResp.desc},null,8,B),s("div",R,[s("div",{class:"back fs-5",onClick:o[0]||(o[0]=y=>i.$router.go(-1))},"回到列表")])])])}const H=f(m,[["render",x],["__scopeId","data-v-44d99d39"]]);export{H as default};
