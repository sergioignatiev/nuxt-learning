import{r as d,g as A,o as i,h as f,w as v,i as _,a as l,E as T,v as g,j as a,T as w,c as h,x as p,b as r,t as y,F as b,d as B,_ as E,D as $}from"./CE7I0_MB.js";import"./LdPGR-Ic.js";const q={class:"the-game-button"},x={__name:"TheGameButton",props:["index"],setup(s){const e=d(!1);return A(()=>{e.value=!0}),(n,m)=>(i(),f(w,{name:"game"},{default:v(()=>[_(l("button",q,[T(n.$slots,"default")],512),[[g,a(e)]])]),_:3}))}},C={class:""},G={class:"game"},D={__name:"Unit",props:["game","tour","myTest"],setup(s){return(e,n)=>{const m=x;return i(!0),h(b,null,p(s.game,t=>_((i(),h("div",{key:t.id},[_(r(w,{name:"pge"},{default:v(()=>[l("div",C,[l("h1",null,y(t.questions),1),l("div",G,[(i(!0),h(b,null,p(t.variants,o=>(i(),f(m,{onClick:s.myTest,value:o.value,key:o.id},{default:v(()=>[B(y(o.name),1)]),_:2},1032,["onClick","value"]))),128))])])]),_:2},1536),[[g,s.tour==t.id-1]])])),[[g,s.tour==t.id-1]])),128)}}},u=d([{id:1,questions:"In whish country taliban rules",rightAnswer:"af",variants:[{name:"Afghanistan",id:"af",value:"af"},{name:"turkey",id:"tu",value:"tu"},{name:"bangladesh",id:"ba",value:"ba"},{name:"india",id:"in",value:"in"}]},{id:2,questions:"African Country",rightAnswer:"eg",variants:[{name:"Egipt",id:"eg",value:"eg"},{name:"turkey",id:"tu",value:"tu"},{name:"bangladesh",id:"ba",value:"ba"},{name:"india",id:"in",value:"in"}]},{id:3,questions:"South America",rightAnswer:"ch",variants:[{name:"Egipt",id:"eg",value:"eg"},{name:"Chile",id:"ch",value:"ch"},{name:"bangladesh",id:"ba",value:"ba"},{name:"india",id:"in",value:"in"}]},{id:4,questions:"Do you prefer Boys",rightAnswer:"yes",variants:[{name:"yes",id:"yes",value:"yes"},{name:"no",id:"no",value:"no"},{name:"do not try",id:"non",value:"non"}]}]),N={class:""},R={__name:"game",setup(s){const e=d(0);function n(t){t.target.value==u.value[e.value].rightAnswer?e.value<[u.value.length-1]?(e.value++,alert("YOU ARE RIGHT")):(alert("You Have Won The fucking game"),e.value=0):(alert("YOU ARE WRONG"),e.value=0)}const m=d(!0);return(t,o)=>{const c=D,k=$;return i(),f(k,null,{default:v(()=>[_(l("div",N,[r(c,{game:a(u),tour:a(e),"my-test":n},null,8,["game","tour"]),r(c,{game:a(u),tour:a(e),"my-test":n},null,8,["game","tour"]),r(c,{game:a(u),tour:a(e),"my-test":n},null,8,["game","tour"]),r(c,{game:a(u),tour:a(e),"my-test":n},null,8,["game","tour"])],512),[[g,a(m)]])]),_:1})}}},I=E(R,[["__scopeId","data-v-a1d1ab90"]]);export{I as default};