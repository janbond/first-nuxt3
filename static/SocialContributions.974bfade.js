import{u as i}from"./index.f1068c8c.js";import{K as _,L as p,r as d,o,c as a,a as t,F as m,m as u,b as f,w as v,t as S,p as h,e as g}from"./entry.206e4a11.js";import{_ as C}from"./_plugin-vue_export-helper.c27b6911.js";const k={data(){return{articleNum:6}},computed:{..._(i,["allSocialResp"])},methods:{...p(i,["getSocialResp"]),moreArticle(e){this.articleNum+=e}},created(){this.getSocialResp()}},y=e=>(h("data-v-c98e9049"),e=e(),g(),e),x={class:""},$=y(()=>t("div",{class:"tiBox"},[t("div",{class:"ti fs-1"},"社會貢獻"),t("span",{class:"enTi fs-4"},"CSR")],-1)),b={class:"socialContWrap"},N={class:"pic"},R=["src","alt"],w={class:"ti fs-4"};function B(e,c,I,A,l,n){const r=d("router-link");return o(),a("section",x,[$,t("div",b,[(o(!0),a(m,null,u(e.allSocialResp.slice(0,`${l.articleNum}`),s=>(o(),a("div",{class:"socialContList",key:s.id},[f(r,{to:`/social-article/${s.id}`,class:"link",title:s.title},{default:v(()=>[t("div",N,[t("img",{src:`./images/responsibility_${s.image}.jpg`,alt:s.title},null,8,R)]),t("div",w,S(s.title),1)]),_:2},1032,["to","title"])]))),128))]),t("button",{type:"button",class:"yellow fs-5",onClick:c[0]||(c[0]=s=>n.moreArticle(3))},"更多")])}const j=C(k,[["render",B],["__scopeId","data-v-c98e9049"]]);export{j as _};
