function n(n,t){return Math.floor(n+Math.random()*(t-n))}function t(n,t){for(var r=[],i=n;t>i;i++)r.push(i);return r}function r(n){return n}function i(n,t){if(!t||"object"!=typeof n)return n;var r=void 0!==n.length?[]:{};return f(n,function(n,u){r[u]=i(n,t-1)}),r}function u(n,t,r){return t>n?t:n>r?r:n}function e(){return Date.now()}function o(n,t){return n.replace(/X/g,t)}function c(n,t){return[].slice.call(n).map(t)}function f(n,t){for(var r in n)t(n[r],r)}function a(n,r,i,u,e){c(t(n,i),function(n){c(t(r,u),e.bind(0,n))})}function s(n){return Cr.querySelector("#"+n)}function d(n,t,r){var i={c:"class",s:"style",i:"id"},u="<"+n+" ";for(var e in t)u+=(i[e]||e)+"='"+t[e]+"'";return u+=">"+(r||"")+"</"+n+">"}function l(n,t){n.style.transform=t,n.style["-webkit-transform"]=t}function v(n,t){n.onclick=t,n.addEventListener("touchstart",function(n){return n.preventDefault(),t(n)})}function p(n,t){s(n).style.display=t?"block":"none"}function h(n){p(n,0)}function m(n){p(n,1)}function b(n,t){t=t||r;var i,u=t(n[0]);return c(n,function(n){t(n)<=u&&(i=n,u=t(n))}),i}function g(n,t){return t=t||r,b(n,function(n){return-t(n)})}function y(n,t){var r=0;return c(n,function(n){r+=t(n)}),r}function T(n,t){return n&&n.indexOf(t)>=0}function w(n,t){var r=[];return c(n,function(i,u){c(n.slice(u+1),function(n){r.push(t(i,n))})}),r}function M(t){return c(t,function(r,i){var u=n(i,t.length),e=t[u];t[u]=t[i],t[i]=e}),t}function L(r){function i(t){var r=n(0,4);return r%2?t.w--:t.h--,2==r&&t.t++,3==r&&t.l++,t.w*t.h<9}function u(n){var t=!1;return a(n.l,n.t,n.l+n.w,n.t+n.h,function(n,r){t=t||s[n][r]}),t}function e(n,r){var i=r.l,u=r.t,e=r.w,f=r.h,d=[];c(t(0,e),function(n){d[n]=o(i+n,u),d[e+f+n]=o(i+e-n,u+f)}),c(t(0,f),function(n){d[e+n]=o(i+e,u+n),d[e+f+e+n]=o(i,u+f-n)});var l={i:n,p:d,d:[]};return a(r.l,r.t,r.l+r.w,r.t+r.h,function(n,t){s[n][t]=l}),l}function o(n,t){var r=6.28*kr(n*n*t*t*600+357*m),i=kr(n*t*600+211*m)/2;return[n+kr(r)*i,t+xr(r)*i]}function f(){a(1,1,Qt-1,Vt-1,function(n,t){var r=s[n][t];r&&(r.n||(r.n=[]),c([[-1,0],[1,0],[0,-1],[0,1]],function(i){var u=s[n+i[0]][t+i[1]];u&&u!=r&&-1==r.n.indexOf(u)&&r.n.push(u)}))})}var s,d,l,v,p=11-r,h=13+3*r,m=n(1e4,1e5);do for(s=t(0,Qt).map(function(){return[]}),d=[],l=0,v=2500;h>l&&--v>0;){var b={l:n(1,Qt-p+1),t:n(1,Vt-p+1),w:n(3,p),h:n(3,p)};if(!l||u(b))for(;!i(b);)if(!u(b)){d.push(e(l++,b));break}}while(!v);return f(),d}function k(n){var t=0,r=0,i=n.length;return c(n,function(n){t+=n[0],r+=n[1]}),[t/i,r/i]}function x(n,t,r,i,u){var e=k(n);return c(n,function(n){return[e[0]+(n[0]-e[0])*t+i,e[1]+(n[1]-e[1])*r+u]})}function H(n){var t=n[0]/Qt,r=n[1]/Vt,i=.4*t+.6;return r=r*i+.5*(1-i),[100*t,100*r]}function C(n,t){return d("stop",{offset:n+"%",s:"stop-color:"+t})}function A(n,t,r){return d("radialGradient",{i:n,cx:"-100%",cy:"50%",fx:"-100%",fy:"50%",r:"200%",gradientUnits:"userSpaceOnUse"},C(60,r)+C(100,t))}function j(n,t,r,i,u){i=i||"stroke:#000;stroke-width:0.25;",r=r?"url(#"+r+")":"transparent";var e={i:t,points:c(n,H).join(" "),s:"fill:"+r+";"+i+";"};return u&&(e["clip-path"]=u),d("polygon",e)}function S(n,t){function r(){return c(e,function(n,t){return d("clipPath",{i:"clip"+t},j(n.p,"cp"+t,"l",""))}).join("")}function i(n,t,r,i,u,o,f,a){return d("g",{},c(e,function(e,c){return j(x(e.p,r,i,u,o),n+c,t,f,a?"url(#"+a+c+")":"")}).join(""))}function u(){f(t.t,function(t,r){var i=t.r.c,u="tp"+r,e="left:"+(i[0]-1.5)+"%;top:"+(i[1]-4)+"%",o=Ar({i:u,c:"o",s:e},Ar({c:"i"},Ar({c:"i"},Ar({c:"i"},Ar({c:"i"})))));n.insertAdjacentHTML("beforeend",o),t.e=s(""+u),v(t.e,X.bind(0,t.r,"t"))})}var e=t.r,o=d("defs",{},r()+A("b","#88f","#113")+A("l","#fa6","#530")+A("lh","#fb7","#741")+A("d","#210","#000")+A("w","#55f","#003")+c(t.p,function(n,t){return A("p"+t,n.l,n.d)+A("p"+t+"h",n.h,n.hd)}).join("")),a=j([[0,0],[Qt,0],[Qt,Vt],[0,Vt]],"b","b"),l=i("r","l",1,1,0,0),p=i("d","d",1,1,.05,.05),h=i("w","w",1.05,1.05,.2,.2," "),m=i("hl","",1,1,0,0,"stroke:#fff;stroke-width:1.5;opacity:0.0;","clip");n.innerHTML=d("svg",{viewbox:"0 0 100 100",preserveAspectRatio:"none"},o+a+h+p+l+m),Xr={},c(e,function(n,t){n.e=s("r"+t),n.c=H(k(n.p)),n.hl=s("hl"+t),v(n.hl,X.bind(0,n,"c"))}),v(Cr.body,X.bind(0,null,"c")),u()}function z(n){var t=Ar({i:"tc",c:"sc"});t+=Ar({i:"pd",c:"sc un"},c(n.p,function(n){var t=n.i;return Ar({i:"pl"+t,c:"pl",style:"background: "+n.d},n.n+Ar({c:"ad",i:"pr"+t})+Ar({c:"ad",i:"pc"+t}))}).join("")),t+=Ar({c:"sc un ds",i:"in"}),s("d").innerHTML=t,c(["mv","und"],m)}function X(n,t,r){var i=jr[t];return i&&(Ft(Jr),i(n)),r.stopPropagation(),!1}function O(n,t,r){function u(){t.d=i(f,3),t.d.h=t.r.filter(gt.bind(0,t,n)),U(t)}function e(r){var i=Mt(t,r.r),u=c(ur,function(u){var e=r.u==u?r.l+1:u==or?t.m.h||0:0,c=u.c[e],f=o(u.n,er[e])+d("b",{}," ("+c+"&#9775;)"),a=o(u.d,u.x[e]),s=!1;return s=s||u==dr&&!r.u,s=s||r.u&&r.u!=u&&u!=or&&u!=dr,s=s||e>=u.c.length,s=s||e<kt(t,i,u),s=s||i!=n,{t:f,d:a,o:c>Lt(t,n),h:s}});return u.push({t:"Done"}),u}var f={b:[{t:"Cancel move",h:1},{t:"End turn"}]};jr.c=function(i){if(i&&t.d.t!=tr||u(),!t.d.s&&i)gt(t,n,i)&&(u(),t.d.t=nr,t.d.s=i,t.d.c=mt(t,i),t.d.b[0].h=0,t.d.h=i.n.concat(i));else if(i){var e=t.d;if(i==e.s)e.c=e.c%mt(t,i)+1;else{if(e.s.n.indexOf(i)>-1)return jr={},e.d=i,r(e);u()}}U(t)},jr.t=function(n){var r=t.t[n.i];t.d={t:tr,w:r,r:n,b:e(r)},U(t)},jr.s=function(n){var r=null;c(t.r,function(i){T(t.s[i.i],n)&&(r=i)}),r&&jr.c(r)},jr.b=function(i){t.d&&t.d.t==tr?i>=ur.length?u():(t.d.u=ur[i],t.d.u==or&&(Sr[n.i]=t.d.r),r(t.d)):1==i?(jr={},r({t:rr})):u()},jr.un=function(){St(t)},u(),Sr[n.i]&&(jr.t(Sr[n.i]),delete Sr[n.i])}function E(n,t){function r(){var n=zr[0];n.f(),setTimeout(function(){zr.shift(),zr.length&&r()},n.d)}zr.push({d:n,f:t}),1==zr.length&&r()}function I(n){function t(t){var r=Mt(n,t),i=r?"p"+r.i:"l",u=T(n.d&&n.d.h||[],t)||n.e&&r==n.e;u&&(i+="h");var e=.08+.003*t.c[0];n.e&&(e*=2),t.hl.style.opacity=u?e:0,t.hl.style.cursor=u?"pointer":"default",t.e.style.fill="url(#"+i+")"}function r(t){for(var r=t.e,i=t.u?t.l+3:2;r;)r.style.display=i>0?"block":"none",r.style.background=t.u?t.u.b:"#999",i--,r=r.firstChild;var u=Mt(n,t.r);t.e.style.cursor=Br==wr?u==wt(n)?"zoom-in":"help":"default";var e=n.d&&n.d.w==t;t.e.classList[e?"add":"remove"]("l")}function i(t,r,i){u.push(r.i);var e=Xr[r.i];if(!e){var o=Ar({c:"s",s:"display: none"}),c=s("m");c.insertAdjacentHTML("beforeEnd",o),e=Xr[r.i]=c.lastChild,e.onclick=X.bind(0,r,"s")}var f=t.c,a=mt(n,t),d=b([a,5]),l=i%5,v=Math.floor(i/5),p=-.6*d+1.2*l,h=.8*v,m=f[0]+p-.2*h-.3,g=f[1]+1.5+.2*p+h;if(r.a){var y=r.a.c;m=(m+y[0])/2,g=(g+y[1])/2}e.style.left=m+"%",e.style.top=g+"%",e.style.zIndex=20+5*v+l,e.style.display="block";var T=n.d||{};T.s==t&&i<T.c?e.classList.add("l"):e.classList.remove("l")}c(n.r,t),f(n.t,r);var u=[];f(n.s,function(t,r){c(t,i.bind(0,n.r[r]))}),f(Xr,function(n,t){u.indexOf(parseInt(t))<0&&(s("m").removeChild(n),delete Xr[t])})}function N(n){var t=n.m,r=n.d,i=r&&r.t==tr,u=r&&r.s,e=wt(n);if(i){var o=At(n,r.w);s("tc").innerHTML=Ar({},o.n)+Ar({c:"ds"},o.d)}else s("tc").innerHTML="Turn <b>"+n.m.t+"</b>"+(Ur.tc!=gr?" / "+Ur.tc:"");c(n.p,function(t,r){var i=yt(n,t),u=n.e;i?(s("pr"+r).innerHTML=yt(n,t)+"&#9733;",s("pc"+r).innerHTML=u?u==t?"&#9819;":"":n.c[t.i]+"&#9775;"):(s("pr"+r).innerHTML="&#9760;",s("pc"+r).innerHTML="")});var o;o=e.u==O?i?Mt(n,r.r)==e?d("p",{},"Choose an upgrade to build."):"":u?d("p",{},"Click on a target region to move your army.")+d("p",{},"Click on the source region to choose how many to move."):d("p",{},"Click on a region to move or attack with its army.")+d("p",{},"Click on a temple to buy soldiers or upgrades with &#9775;."):d("p",{},e.n+" is taking her turn."),s("in").innerHTML=o,s("in").style.background=e.d,s("pd").style.display=i?"none":"block",s("mc").innerHTML=t.l+d("span",{s:"font-size: 80%"},"&#10138;"),s("ft").innerHTML=n.c[e.i]+d("span",{s:"font-size: 80%"},"&#9775;"),D(r&&r.b),s("und").innerHTML=jt(n)?"&#x21b6;":""}function D(n){s("u").innerHTML="",c(n||[],function(n,t){if(!n.h){var r="b"+t,i=Ar({},n.t);n.d&&(i+=Ar({c:"ds"},n.d));var u=d("a",{href:"#",i:r,c:n.o?"off":""},i);s("u").insertAdjacentHTML("beforeend",u),n.o||v(s(r),X.bind(0,t,"b"))}})}function U(n){Or=n,I(n),N(n),n.sc&&(Ft(n.sc),n.sc=null)}function B(n,t,r){function i(n){return"translate3d(1.2em,"+n+"em,0) rotateY("+(10+2*n)+"deg)"}r=r||1,E(r,function(){var r="bn"+Er++;s("c").insertAdjacentHTML("beforeend",Ar({i:r,c:"bn"},t));var u=s(r),e=u.style;e.background=n,e.opacity=0,l(u,i(-1)),setTimeout(function(){e.opacity=1,l(u,i(1))},100),setTimeout(function(){e.opacity=1},600),setTimeout(function(){e.opacity=0},1100),setTimeout(function(){u.parentNode.removeChild(u)},1600)})}function P(){setTimeout(function(){var n=Hr.innerWidth,t=Hr.innerHeight,r=1.65,i="px";n/t>r?n=t*r:t=n/r;var u=s("c").style;u.width=n+i,u.height=t+i,u.fontSize=.025*t+i},1)}function R(r){function u(n,t){for(var r=[{r:n,d:0}],i=[n],u=-1,e=100;0>u;){var o=r.shift(),f=o.r,a=o.d;f==t?u=a:a>=e?u=e:(f.d[t.i]&&(e=b([e,f.d[t.i]+a])),c(f.n,function(n){T(i,n)||r.push({r:n,d:a+1})}),i.push(f))}return n.d[t.i]=t.d[n.i]=u,u}function e(n){return b(w(n,u))}function o(){return d[n(0,d.length)]}function f(){function n(n){return c(f,function(t,r){return d[r]+u(t,n)})}function r(t){if(T(v,t))return-100;var r=n(t),i=g(r)-b(r),u=e(v.concat(f).concat(t));return u||(u=-5),u-i}c(s,function(n,t){l.c[t]=l.l[t]=0});var i=c(t(0,1e3),function(){return c(l.p,o)}),f=g(i,e);c(s,function(n,t){var r=f[t];l.o[r.i]=n,a(r,3)});var d=c(f,function(){return 0}),v=[],p=[3,3,4][s.length-2];c(t(0,p),function(){var t=g(l.r,function(n){return r(n)});a(t,3),v.push(t),d=n(t)})}function a(n,t){var r=n.i;l.t[r]={r:n,i:r},at(l,n,t)}var s=[];c(r.p,function(t,r){if(t!=lr){var u=i(ir[r],1);u.u=t==vr?O:G,t==pr&&(u.p=i(Lr[n(0,Lr.length)],2)),u.i=s.length,s.push(u)}});var d=L(s.length),l={p:s,r:d,o:{},t:{},s:{},c:{},l:{},m:{t:1,p:0,m:nr,l:Zt}};return f(),l}function G(n,t,r){if(J(n,t)){var i=Y(n,t);return setTimeout(r.bind(0,i),$t)}var u=q(n,t);if(u)return setTimeout(r.bind(0,u),$t);var e=t.m.l||1;V(n,t,e,r)}function J(n,t){if(!Tt(t,n).length)return!1;var r=n.p.u.length?n.p.s:1,i=Ct(t)/t.c[n.i];if(i>1)return!1;var u=c(t.p,W.bind(0,t)),e=g(u)/W(t,n),o=e*r-i;return o>=0}function W(n,t){return 2*yt(n,t)+Ht(n,t)}function q(n,t){if(n.p.u.length){var r=n.p.u[0],i=kt(t,n,r);if(!(t.c[n.i]<r.c[i])){var u=Tt(t,n).filter(function(n){return!n.u&&!i||n.u==r});if(u.length){var e=b(u,F.bind(0,t));return n.p.u.shift(),{t:tr,u:r,w:e,r:e.r}}}}}function F(n,t){var r=Mt(n,t.r);return tt(n,r,t.r)+rt(n,r,t.r)}function Y(n,t){var r=g(Tt(t,n),F.bind(0,t));return{t:tr,u:or,w:r,r:r.r}}function K(n){if(0==n.d)return n.v=_(n.a,n.s),Q(n.p,n);var t=n.u.shift();if(t){var r=et(n.s,t);return{p:n,a:n.a,d:n.d-1,m:t,s:r,u:Z(r)}}return Q(n.p,n)}function Q(n,t){if(n){var r=n.s.p[n.s.m.p],i=r==n.a,u=!n.b||i&&t.v>n.v||!i&&t.v<n;u&&(n.b=t.m,n.v=t.v)}return n}function V(n,t,r,i){function u(){for(var n=a;n--;){f=K(f);var t=e()-s;if(t>_t&&(f=null),!f){var r=c.b;return r||(r={t:rr}),void setTimeout(i.bind(0,r),g([$t-t,1]))}}setTimeout(u,1)}var o=ot(t,n),c={p:null,a:n,s:o,d:r,u:Z(t)},f=c,a=100,s=e();setTimeout(u,1)}function Z(n){function t(t,u,e){Mt(n,u)!=i&&mt(n,u)>e||r.push({t:nr,s:t,d:u,c:e})}var r=[{t:rr}],i=wt(n);return n.m.l?(c(n.r,function(r){if(gt(n,i,r)){var u=mt(n,r);c(r.n,function(n){t(r,n,u),u>1&&t(r,n,Math.floor(u/2))})}}),M(r),r):r}function $(n,t,r,i){var u=(n.m.t-i)/(Ur.tc-i);return 0>u&&(u=0),t+(r-t)*u}function _(n,t){function r(r){var e=nt(t,r);return Ur.l!=hr&&(e+=(1-tt(t,n,r))*u*e+rt(t,n,r)*u),e+=mt(t,r)*i}var i=$(t,.33,0,10),u=$(t,1,0,10);return y(t.r,function(i){return Mt(t,i)==n?r(i):0})}function nt(n,t){var r=$(n,8,0,1);return 1+(n.t[t.i]?r:0)}function tt(n,t,r){var i=mt(n,r),e=y(r.n,function(r){var i=Mt(n,r);return i&&i!=t?mt(n,r):0});return u(.5*(e/(i+1e-4)-1),0,.9)}function rt(n,t,r){var i=mt(n,r);return i?y(r.n,function(r){if(Mt(n,r)!=t){var e=mt(n,r);return u(.5*(i/(e+.01)-.9),0,.5)*nt(n,r)}return 0}):0}function it(){c(Or.p,function(n,t){Or.c[t]+=500}),U(Or)}function ut(n,t,r){return yt(t,n)?void n.u(n,t,r):r({t:rr})}function et(n,t){n=ot(n);var r=t.t;return r==nr?st(n,t.s,t.d,t.c):r==tr?lt(n,t.r,t.u):r==rr&&vt(n),ft(n),n}function ot(n,t){return{r:n.r,p:n.p,a:n.a||t,m:i(n.m,1),o:i(n.o,1),t:i(n.t,2),s:i(n.s,3),c:i(n.c,1),l:i(n.l,1)}}function ct(n){Br=wr,E(150,function(){var t=wt(n);ut(t,n,function(r){t.u==G&&Ft(Jr);var i=et(n,r);return i.e?(E(150,U.bind(0,i)),void ht(i)):(Nr=ot(n),void setTimeout(ct.bind(0,i),1))}),U(n)})}function ft(n){c(n.p,function(t){var r=y(n.r,function(r){return Mt(n,r)==t?mt(n,r):0});!r&&yt(n,t)&&(f(n.o,function(r,i){t==r&&delete n.o[i]}),wt(n)==t&&(n.m.l=0),n.a||(E(150,U.bind(0,n)),B("#222",t.n+" has been eliminated!",900)))});var t=n.p.filter(yt.bind(0,n)).length>1;return t?void 0:void(n.e=pt(n))}function at(n,r,i){c(t(0,i),function(){Ir=Ir+1||0;var t=n.s[r.i];t||(t=n.s[r.i]=[]),t.push({i:Ir++})})}function st(r,i,u,e){function o(t){var i=120+y;return r.a?(t+3)*i/(g+5):n(.12*i,.88*i)}var f=r.s[i.i],a=r.s[u.i]||(r.s[u.i]=[]),s=Mt(r,i),d=Mt(r,u);if(s!=d){var l=a.length,v=b([e,xt(r,d,sr)]),p=xt(r,s,fr);if((v||l)&&(r.a||c(f.slice(0,e),function(n){n.a=u}),dt(r)),v&&(c(t(0,v),function(){f.shift(),e--}),dt(r)),l&&e){r.u=1;var h=e*(1+.01*xt(r,s,fr)),m=l*(1+.01*xt(r,d,sr)),g=b([e,l]),y=100*Math.pow(h/m,1.6);c(t(0,g),function(n){o(n)<=120?p--<=0&&(f.shift(),e--,dt(r,250,qr)):(a.shift(),d&&(r.c[d.i]+=4),dt(r,250,Wr))}),c(f,function(n){n.a=0}),a.length&&(e=0,r.sc=Yr)}}if(e>0&&(c(t(0,e),function(){a.push(f.shift())}),s!=d)){r.o[u.i]=s,r.m.z=(r.m.z||[]).concat(u);var T=r.t[u.i];T&&delete T.u,l&&(r.sc=Fr)}r.m.l--}function dt(n,t,r){if(!n.a){var i=ot(n);i.sc=r,E(t||500,U.bind(0,i))}}function lt(n,t,r){var i=n.t[t.i],u=Mt(n,t);return r==or?(n.m.h||(n.m.h=0),n.c[u.i]-=r.c[n.m.h++],at(n,t,1)):r==dr?void delete i.u:(i.u!=r?(i.u=r,i.l=0):i.l++,n.c[u.i]-=r.c[i.l],void(r==ar&&n.m.l++))}function vt(n){var t=wt(n);n.c[t.i]+=bt(n,t),f(n.t,function(r,i){n.o[i]==t&&at(n,r.r,1)});do{var r=n.p.length,i=(n.m.p+1)%r,u=n.p[i],e=n.m.t+(i?0:1);n.m={t:e,p:i,m:nr,l:Zt+xt(n,u,ar)}}while(!yt(n,u));return n.m.t>Ur.tc?(n.m.t=Ur.tc,void(n.e=pt(n))):void(n.a||B(wt(n).d,wt(n).n+"'s turn"))}function pt(n){var t=yt.bind(0,n),r=g(n.p,t),i=n.p.filter(function(n){return n!=r}),u=g(i,t);return t(r)!=t(u)?r:Mr}function ht(n){E(1,function(){var t=n.e;t!=Mr?B(t.d,t.n+" wins the game!"):B("#333","The game ends in a draw!"),U(n),s("tc").innerHTML="Game complete",s("in").innerHTML=d("p",{},"Click the button below to start a new game."),s("in").style.background="#555",s("mv").style.display="none",D([{t:"New game"}]),jr.b=Et})}function mt(n,t){var r=n.s[t.i];return r?r.length:0}function bt(n,t){var r=yt(n,t),i=y(Tt(n,t),function(t){return mt(n,t.r)}),u=1+.01*xt(n,t,cr);return t.u==G&&Ur.l==br&&(u+=.4),Math.ceil(u*(r+i))}function gt(n,t,r){return n.m.l>0&&Mt(n,r)==t&&mt(n,r)&&!T(n.m.z,r)}function yt(n,t){var r=0;return c(n.r,function(i){Mt(n,i)==t&&r++}),r}function Tt(n,t){var r=[];return f(n.t,function(i,u){n.o[u]==t&&r.push(i)}),r}function wt(n){return n.p[n.m.p]}function Mt(n,t){return n.o[t.i]}function Lt(n,t){return n.c[t.i]}function kt(n,t,r){return g(c(Tt(n,t),function(n){return n.u&&n.u==r?n.l+1:0}).concat(0))}function xt(n,t,r){return t?g(c(n.r,function(i){var u=n.t[i.i];return u?Mt(n,i)!=t?0:u.u==r?r.x[u.l]:0:0})):0}function Ht(n,t){return y(n.r,function(r){return Mt(n,r)==t?mt(n,r):0})}function Ct(n){return or.c[n.m.h||0]}function At(n,t){if(t.u){var r=t.u,i=t.l,u=o(r.d,r.x[i]);return{n:o(r.n,er[i]),d:u}}var e=Mt(n,t.r)?"Basic Temple":"Neutral Temple";return{n:e,d:"No upgrades."}}function jt(n){return Nr&&wt(Nr)==wt(n)&&!n.u&&wt(n).u==O}function St(n){if(jt(n)){jr={};var t=Nr;Nr=null,ct(t)}}function zt(){if(localStorage){var n=localStorage.getItem("s");if(n)return n=JSON.parse(n),f(Dr,function(t,r){void 0===n[r]&&(n[r]=t)}),n}return Dr}function Xt(n){localStorage&&localStorage.setItem("s",JSON.stringify(n))}function Ot(){function n(n,t,r,i){var u=c(r,function(n,i){var u=t+(r.length-1-i);return d("a",{i:u,c:"rt",href:"#",s:"font-size: 90%"},n)}).join(""),e={c:"sc ds",s:"padding-right: 0.5em"};return f(i,function(n,t){e[t]=n}),Ar(e,n+u)}var r=Ar({c:"sc ds"},"Player setup"),i=c(ir,function(t){var r=t.i;return n(t.n,"sb"+t.i,["AI","Human","Off"],{i:"pl"+r,c:"pl",s:"background: "+t.d})}).join("");r+=Ar({i:"pd",c:"sc un"},i),r+=n("AI level","ai",["Unfair","Tough","Easy"]),r+=n("Turn count","tc",["Unlimited","15","12"]),s("d").innerHTML=r,c(["mv","und"],h),a(0,0,ir.length,3,function(n,t){v(s("sb"+n+t),X.bind(0,{p:n,b:t},"sb"))}),c(t(0,3),function(n){v(s("ai"+n),X.bind(0,n,"ai")),v(s("tc"+n),X.bind(0,yr[n],"tc"))})}function Et(){function n(){var n=y(Ur.p,function(n){return n!=lr?1:0});return n>1}function r(){var t=!n();D([{t:"Change map",o:t},{t:"Start game",o:t}])}function i(){Xt(Ur),c(Ur.p,function(n,r){c(t(0,3),function(t){s("sb"+r+t).classList[n==t?"add":"remove"]("sl")})}),c(t(0,3),function(n){s("ai"+n).classList[n==Ur.l?"add":"remove"]("sl"),s("tc"+n).classList[yr[n]==Ur.tc?"add":"remove"]("sl")})}function u(){n()&&(e=R(Ur),S(s("m"),e),I(e))}Br=Tr;var e;u(),Ot(),r(),i(),jr.b=function(t){n()&&(0==t?u():(z(e),U(e),ct(e)))},jr.sb=function(n){Ur.p[n.p]=n.b,i(),r(),u()},jr.ai=function(n){Ur.l=n,i()},jr.tc=function(n){Ur.tc=n,i()}}function It(){c(["o","tub","snd"],function(n){p(n,1)}),v(s("cb"),Dt.bind(0,!1)),v(s("nxt"),Nt.bind(0,1)),v(s("prv"),Nt.bind(0,-1)),v(s("tub"),Dt.bind(0,!0)),v(s("snd"),Kt),v(s("und"),X.bind(0,0,"un")),Nt(0),setTimeout(Dt.bind(0,!0),10)}function Nt(n){Pr=u(Pr+n,0,Rr-1),l(s("tuc"),"translate3d("+100*-Pr/Rr+"%,0,0)"),p("prv",Pr>0),p("nxt",Rr-1>Pr)}function Dt(n){n&&(s("ts").style.display="block"),setTimeout(function(){s("ts").classList[n?"remove":"add"]("h")},50),n||setTimeout(function(){s("ts").style.display="none"},500)}function Ut(n,t,r){return n=u(n,0,1),r*n+t*(1-n)}function Bt(n,t,r,i,u,e){var o=0;return function(c){var f=e(c);return o+=c,n>o?Ut(o/n,0,1)*f:n+t>o?Ut((o-n)/t,1,u)*f:n+t+r>o?u*f:Ut((o-n-r-t)/i,u,0)*f}}function Pt(n){var t=0;return function(r){return t+=r,Math.sin(t*n*6.283)}}function Rt(n,t,r,i){var u=0;return function(e){u+=e;var o=e*Ut(u/r,n,t);return i(o)}}function Gt(n,t,r,i){var u=0;return function(e){return u+=e,i(u>r?e*t:e*n)}}function Jt(n){c(n,function(n){n.f=Bt(.01,.03,.03*n.d,.03*n.d,.7,Pt(n.p))});var t=0;return function(r){t+=r;var i=0;return c(n,function(n){t>=n.t&&(i+=n.f(r))}),i}}function Wt(n,t,r){for(var r=r||1,i=Gr.sampleRate,u=i*t,e=Gr.createBuffer(1,u,i),o=1/i,c=e.getChannelData(0),f=0;u>f;f++)c[f]=n(o)*r;return e}function qt(){Gr&&(Jr=Wt(Bt(.01,.03,.01,.01,.2,Pt(110)),.1),Wr=Wt(Bt(.01,.05,.05,.05,.5,Rt(1,.3,.1,Pt(300))),.2,.6),qr=Wt(Bt(.01,.05,.05,.05,.5,Rt(1,.3,.1,Pt(200))),.2,.6),Fr=Wt(Jt([{t:0,p:261,d:1},{t:0,p:329,d:2},{t:0,p:392,d:3},{t:.2,p:261,d:1},{t:.2,p:349,d:2},{t:.2,p:440,d:3}]),.6,.2),Yr=Wt(Jt([{t:0,p:392,d:3},{t:.15,p:329,d:2},{t:.3,p:261,d:1}]),.6,.2),Yt())}function Ft(n){if(n&&Ur.s){var t=Gr.createBufferSource();t.buffer=n,t.connect(Gr.destination),t.start()}}function Yt(){s("snd").innerHTML=Ur.s?"♪":" ",Xt(Ur)}function Kt(){Ur.s=!Ur.s,Yt()}var Qt=30,Vt=20,Zt=3,$t=1e3,_t=5e3,nr=1,tr=2,rr=3,ir=[{i:0,n:"Amber",l:"#fd8",d:"#960",h:"#fd8",hd:"#a80"},{i:1,n:"Crimson",l:"#f88",d:"#722",h:"#faa",hd:"#944"},{i:2,n:"Lavender",l:"#d9d",d:"#537",h:"#faf",hd:"#759"},{i:3,n:"Emerald",l:"#9d9",d:"#262",h:"#bfb",hd:"#484"}],ur=[{n:"Extra soldier",d:"",c:c(t(0,100),function(n){return 8+4*n}),x:[]},{n:"X of Water",d:"Income: X% more each turn.",c:[15,25],x:[20,40],b:"#66f"},{n:"X of Fire",d:"Attack: X invincible soldier(s).",c:[20,30],x:[1,2],b:"#f88"},{n:"X of Air",d:"Move: X extra move(s) per turn.",c:[25,35],x:[1,2],b:"#ffa"},{n:"X of Earth",d:"Defense: Always kill X invader(s).",c:[30,45],x:[1,2],b:"#696"},{n:"Rebuild temple",d:"Switch to a different upgrade.",c:[0],x:[]}],er=["Temple","Cathedral"],or=ur[0],cr=ur[1],fr=ur[2],ar=ur[3],sr=ur[4],dr=ur[5],lr=0,vr=1,pr=2,hr=0,mr=1,br=2,gr=1e6,yr=[12,15,gr],Tr=0,wr=1,Mr={},Lr=[{s:1,u:[]},{s:.2,u:[cr,sr]},{s:.25,u:[cr,fr,fr]},{s:.15,u:[cr,cr,sr,sr]},{s:.4,u:[cr]},{s:.3,u:[cr,cr]},{s:.25,u:[fr,fr]},{s:.2,u:[sr,sr]}],kr=Math.sin,xr=Math.cos,Hr=window,Cr=document,Ar=d.bind(0,"div"),jr={},Sr={},zr=[],Xr={},Or,Er=1,Ir,Nr=null,Dr={p:[vr,pr,pr,lr],l:hr,s:!0,tc:12},Ur=zt(),Br=0,Pr=0,Rr=5,Gr=window.AudioContext&&new AudioContext,Jr,Wr,qr,Fr,Yr;(Hr.onresize=P)(),window.onload=function(){setTimeout(function(){Ur=zt(),qt(),Et(),It()},500)};