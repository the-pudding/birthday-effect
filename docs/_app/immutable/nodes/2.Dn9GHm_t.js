import{a as Le,t as B,b as m,d as A}from"../chunks/C_DYl3DK.js";import{b as fe,h as b,d as te,a4 as w,aC as Oe,n as Ge,o as ce,s as q,p as J,f as W,al as Je,t as pe,e as F,v as ye,aD as ie,ao as Me,I as U,aE as Pe,aF as Ke,an as Ue,aG as Ve,k as ve,aH as Xe,aI as Ze,g as Qe,a8 as $e,E as je,aJ as Se,j as et,ah as tt,aK as at,aL as st,q as nt,aM as le,at as we,as as xe,aN as _e,w as ot,c as rt,aO as it,aA as x,aB as _,X as V,aP as lt,Z as P,_ as K,W as ge,Y as me,ab as $,aQ as ct,aR as ke}from"../chunks/kVce9_WL.js";import{d as dt,a as ut}from"../chunks/CQLPV8LE.js";import{i as ht,m as ft,s as Te}from"../chunks/DufL9Zy8.js";import{s as T,a as pt}from"../chunks/2PH0qqTR.js";import{p as S,c as Ee,s as Ie}from"../chunks/BUfzo7RP.js";import{h as de}from"../chunks/CA3e_-P7.js";import{i as ee}from"../chunks/DrZANgMA.js";import{b as yt}from"../chunks/CX6udphu.js";function ue(i,e){return e}function vt(i,e,t,n){for(var o=[],l=e.length,u=0;u<l;u++)Ke(e[u].e,o,!0);var f=l>0&&o.length===0&&t!==null;if(f){var r=t.parentNode;Ue(r),r.append(t),n.clear(),j(i,e[0].prev,e[l-1].next)}Ve(o,()=>{for(var c=0;c<l;c++){var a=e[c];f||(n.delete(a.k),j(i,a.prev,a.next)),ve(a.e,!f)}})}function he(i,e,t,n,o,l=null){var u=i,f={flags:e,items:new Map,first:null};b&&te();var r=null,c=!1,a=Oe(()=>{var d=t();return $e(d)?d:d==null?[]:Me(d)});fe(()=>{var d=w(a),s=d.length;if(c&&s===0)return;c=s===0;let y=!1;if(b){var p=u.data===Ge;p!==(s===0)&&(u=ce(),q(u),J(!1),y=!0)}if(b){for(var k=null,v,h=0;h<s;h++){if(W.nodeType===8&&W.data===Je){u=W,y=!0,J(!1);break}var g=d[h],z=n(g,h);v=Be(W,f,k,null,g,z,h,o,e,t),f.items.set(z,v),k=v}s>0&&q(ce())}b||gt(d,f,u,o,e,n,t),l!==null&&(s===0?r?pe(r):r=F(()=>l(u)):r!==null&&ye(r,()=>{r=null})),y&&J(!0),w(a)}),b&&(u=W)}function gt(i,e,t,n,o,l,u){var f=i.length,r=e.items,c=e.first,a=c,d,s=null,y=[],p=[],k,v,h,g;for(g=0;g<f;g+=1){if(k=i[g],v=l(k,g),h=r.get(v),h===void 0){var z=a?a.e.nodes_start:t;s=Be(z,e,s,s===null?e.first:s.next,k,v,g,n,o,u),r.set(v,s),y=[],p=[],a=s.next;continue}if(mt(h,k,g),(h.e.f&ie)!==0&&pe(h.e),h!==a){if(d!==void 0&&d.has(h)){if(y.length<p.length){var E=p[0],I;s=E.prev;var D=y[0],M=y[y.length-1];for(I=0;I<y.length;I+=1)ze(y[I],E,t);for(I=0;I<p.length;I+=1)d.delete(p[I]);j(e,D.prev,M.next),j(e,s,D),j(e,M,E),a=E,s=M,g-=1,y=[],p=[]}else d.delete(h),ze(h,a,t),j(e,h.prev,h.next),j(e,h,s===null?e.first:s.next),j(e,s,h),s=h;continue}for(y=[],p=[];a!==null&&a.k!==v;)(a.e.f&ie)===0&&(d??(d=new Set)).add(a),p.push(a),a=a.next;if(a===null)continue;h=a}y.push(h),s=h,a=h.next}if(a!==null||d!==void 0){for(var C=d===void 0?[]:Me(d);a!==null;)(a.e.f&ie)===0&&C.push(a),a=a.next;var X=C.length;if(X>0){var Z=null;vt(e,C,Z,r)}}U.first=e.first&&e.first.e,U.last=s&&s.e}function mt(i,e,t,n){ht(i.v,e),i.i=t}function Be(i,e,t,n,o,l,u,f,r,c){var a=(r&Xe)!==0,d=(r&Ze)===0,s=a?d?ft(o):Te(o):o,y=(r&Pe)===0?u:Te(u),p={i:y,v:s,k:l,a:null,e:null,prev:t,next:n};try{return p.e=F(()=>f(i,s,y,c),b),p.e.prev=t&&t.e,p.e.next=n&&n.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function ze(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,o=e?e.e.nodes_start:t,l=i.e.nodes_start;l!==n;){var u=Qe(l);o.before(l),l=u}}function j(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ae(i,e,t,n,o,l){let u=b;b&&te();var f,r,c=null;b&&W.nodeType===1&&(c=W,te());var a=b?W:i,d;fe(()=>{const s=e()||null;var y=s==="svg"?Se:null;s!==f&&(d&&(s===null?ye(d,()=>{d=null,r=null}):s===r?pe(d):ve(d)),s&&s!==r&&(d=F(()=>{if(c=b?c:y?document.createElementNS(y,s):document.createElement(s),Le(c,c),n){b&&yt(s)&&c.append(document.createComment(""));var p=b?et(c):c.appendChild(tt());b&&(p===null?J(!1):q(p)),n(c,p)}U.nodes_end=c,a.before(c)})),f=s,f&&(r=f))},je),u&&(J(!0),q(a))}function We(i,e){var t=U,n=ot,o=rt;we(i),xe(i),_e(i.ctx);try{e()}finally{we(t),xe(n),_e(o)}}function bt(i,e,t){var n=i,o;fe(()=>{var l=U,u=W,f=!1;l.fn=r=>{var c=e.onerror;let a=e.failed;if(!c&&!a||f)throw r;var d=()=>{ye(o),We(l,()=>{f=!1,o=F(()=>t(n)),le()})};c==null||c(r,d),o?ve(o):b&&(q(u),st(),q(ce())),a&&nt(()=>{We(l,()=>{f=!0;try{o=F(()=>{a(n,()=>r,()=>d)})}catch(s){it(s,l,null,l.ctx)}le(),f=!1})})},b&&te(),o=F(()=>t(n)),le()},je|at),b&&(n=W)}var wt=B('<link rel="preload" as="font" type="font/woff2" crossorigin="">'),xt=B('<meta name="description"> <meta name="author" content="The Pudding"> <meta name="news_keywords"> <meta property="og:title"> <meta property="og:site_name" content="The Pudding"> <meta property="og:url"> <meta property="og:description"> <meta property="og:type" content="article"> <meta property="og:locale" content="en_US"> <meta property="og:image"> <meta property="og:image:type" content="image/jpeg"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="628"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="https://pudding.cool"> <meta name="twitter:creator" content="@puddingviz"> <meta name="twitter:title"> <meta name="twitter:description"> <meta name="twitter:image:src"> <meta name="robots" content="max-image-preview:large"> <link rel="canonical"> <!>',1);function _t(i,e){let t=S(e,"title",3,"Title TK"),n=S(e,"description",3,"Description TK"),o=S(e,"url",3,"https://pudding.cool"),l=S(e,"keywords",3,""),u=S(e,"preloadFont",19,()=>[]);dt(f=>{var r=xt(),c=x(r),a=_(c,4),d=_(a,2),s=_(d,4),y=_(s,2),p=_(y,6),k=_(p,14),v=_(k,2),h=_(v,2),g=_(h,4),z=_(g,2);he(z,17,u,ue,(E,I)=>{var D=wt();V(()=>T(D,"href",w(I))),m(E,D)}),V(()=>{lt.title=t(),T(c,"content",n()),T(a,"content",l()),T(d,"content",t()),T(s,"content",o()),T(y,"content",n()),T(p,"content",`${o()??""}/assets/social-facebook.jpg`),T(k,"content",t()),T(v,"content",n()),T(h,"content",`${o()??""}/assets/social-twitter.jpg`),T(g,"href",`${o()??""}/`)}),m(f,r)})}var kt=B('<h1 class="svelte-1jrntek"><span class="big svelte-1jrntek"><!></span><br><span class="small svelte-1jrntek"> </span></h1>');function Tt(i,e){var t=kt(),n=P(t),o=P(n);de(o,()=>e.big),K(n);var l=_(n,2),u=P(l,!0);K(l),K(t),V(()=>ut(u,e.small)),m(i,t)}var Et=B("<p><!></p>"),It=B("<section><!></section>");function zt(i,e){ge(e,!0);let t=S(e,"components",19,()=>({})),n=S(e,"body",19,()=>[]);var o=A(),l=x(o);he(l,17,n,ue,(u,f)=>{let r=()=>w(f).section,c=()=>w(f).content;var a=It();const d=$(()=>r().toLowerCase().replace(/[^a-z0-9]/g,"")),s=$(()=>t()[r()]);var y=P(a);{var p=v=>{var h=A(),g=x(h);Ee(g,()=>w(s),(z,E)=>{E(z,Ie(c))}),m(v,h)},k=v=>{var h=A(),g=x(h);he(g,17,c,ue,(z,E,I,D)=>{let M=()=>w(E).type,C=()=>w(E).value;var X=A();const Z=$(()=>t()[M()]),De=$(()=>typeof C()=="string");var Ne=x(X);{var Re=N=>{var L=A(),ae=x(L);Ee(ae,()=>w(Z),(se,ne)=>{ne(se,Ie(C))}),m(N,L)},He=N=>{var L=A(),ae=x(L);{var se=R=>{var H=Et(),oe=P(H);de(oe,C),K(H),m(R,H)},ne=R=>{var H=A(),oe=x(H);{var Ye=Y=>{var O=A(),re=x(O);Ae(re,M,!1,(Q,be)=>{var G=A(),qe=x(G);de(qe,C),m(be,G)}),m(Y,O)},Fe=Y=>{var O=A(),re=x(O);Ae(re,M,!1,(Q,be)=>{let G;V(()=>G=pt(Q,G,{...C()},void 0,Q.namespaceURI===Se,Q.nodeName.includes("-")))}),m(Y,O)};ee(oe,Y=>{w(De)?Y(Ye):Y(Fe,!1)},!0)}m(R,H)};ee(ae,R=>{M()==="text"?R(se):R(ne,!1)},!0)}m(N,L)};ee(Ne,N=>{w(Z)?N(Re):N(He,!1)})}m(z,X)}),m(v,h)};ee(y,v=>{w(s)?v(p):v(k,!1)})}K(a),V(()=>T(a,"id",w(d))),m(u,a)}),m(i,o),me()}var At=B("<!> <!>",1);function Wt(i,e){ge(e,!0);const t=ct("copy"),{body:n}=t,o={Hero:Tt};var l=At(),u=x(l);zt(u,{body:n,components:o});var f=_(u,2);bt(f,{onerror:r=>console.error(r)},r=>{}),m(i,l),me()}const Ct={title:"Are you more likely to die on your birthday?",description:"Yes. We’ll run a study to show you how, and why."},Mt=JSON.parse('[{"section":"intro","content":[{"type":"Hero","value":{"big":"You<br>will<br>die","small":"someday."}},{"type":"img","value":{"src":"assets/sketches/ghost@2x.png","alt":"tk","class":"emoji"}},{"type":"text","value":"<span class=center>Probably not today.</span>"},{"type":"text","value":"Would you believe me if I told you that you’re actually <strong>more likely to die on your birthday</strong> than on other days of the year?"},{"type":"text","value":"This statistical curiosity is called the <strong>birthday effect</strong>."},{"type":"text","value":"There have been a bunch of <a href=https://en.wikipedia.org/wiki/Birthday_effect target=_blank rel=noreferrer>studies</a> on different populations that have proven that it’s real."},{"type":"text","value":"But I was skeptical (maybe you are too?), so let’s run our own study to understand how–and if–it works."},{"type":"img","value":{"src":"assets/sketches/tube@2x.png","alt":"tk","class":"emoji"}}]},{"section":"basic","content":[{"type":"text","value":"<strong class=big>The question:</strong>"},{"type":"text","value":"<strong>Do more people die on their birthdays than expected?</strong>"},{"type":"text","value":"I live in Massachusetts, so I got data on the 57,010 people who died in 2020."},{"type":"text","value":"The first thing we can do is count the number of days a person dies before or after their birthday on a circular calendar."},{"type":"text","value":"We’ll start with Gus (made up name), who was born on March 4th, and after 84 years, died on March 4th. That’s a 0 day difference."},{"type":"text","value":"Two more examples: Gretchen, who was born on May 11th and died on May 2nd–a -9 day difference. And Randall who was also born on May 11th, but died on August 7th–an 87 day difference."},{"type":"img","value":{"src":"assets/sketches/explain@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"You get the picture. We arrange their relative death dates from -182 to 182 (days before and after birthday, respectively)."},{"type":"img","value":{"src":"assets/sketches/explain2@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"We do this for each person and count the number of times each difference occurs. If we expect death dates to be random relative to birthdays, this should look pretty flat. Instead, we can see some variation. Interesting…"},{"type":"img","value":{"src":"assets/sketches/all@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"But what we care about most is how many observations are on the zero day difference. Is it bigger? <strong>Enhance!</strong>"},{"type":"img","value":{"src":"assets/sketches/enhance@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"There are <strong>17% excess birthday deaths</strong> compared to the average day difference."},{"type":"text","value":"We did it, we found the birthday effect!"}]},{"section":"sample","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"Look at this. Did you notice that just 12 days after birthdays it is nearly as high? Does that mean there is an “12-days-after-a-birthday effect” too?"},{"type":"img","value":{"src":"assets/sketches/other@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Maybe. But this could be a sample size problem. It’s like trying to detect a rigged coin with just 10 flips. Getting six heads instead of the expected five wouldn’t prove much–you need more tests. The same applies to our data."},{"type":"text","value":"57,010 observations might seem like a lot right? But not when you spread them over 365 day differences. We’re trying to detect if just one specific value out of them is unusual."},{"type":"text","value":"And there will always be some natural variation due to random chance since this is real life. So is the zero day difference due to random chance or not? To answer this, we need to first know how much the data vary from the average. We start by figuring out how spread out the data is."},{"type":"text","value":"Knowing the shape of the data is important. Let’s bucket our day differences (e.g, 180-185 days is a bucket) and tally up the number of times they occur. You’ll notice a balanced-looking, slight bell shape. This is called a normal distribution."},{"type":"img","value":{"src":"assets/sketches/histogram@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"If we measure the spread,  we find that many values—about 68%—fall within a certain range (+/- 13) of the average. This range is what we statisticians call <strong>one standard deviation.</strong> We expect most (95%) of values to fall within two standard deviations, even if there’s no birthday effect at all. That means anything from 130-182 is normal variation–-expected random noise in our data."},{"type":"text","value":"Here is every day difference, now sorted by their count. You can see our zero-day difference is a hair above two standard deviations."},{"type":"img","value":{"src":"assets/sketches/sorted@2x.png","alt":"Tk","loading":"lazy"}},{"type":"text","value":"This normal variation in the data makes it hard to spot subtle patterns–like the birthday effect. We need a large enough sample to see if that birthday spike is truly meaningful or just random noise."},{"type":"text","value":"So I got data of every person who died in Massachusetts from 1990-2024. When we look at more years, we can see the noise factor play out more clearly. Some years, like 1999, will show a strong birthday effect."},{"type":"img","value":{"src":"assets/sketches/all.jpg","alt":"Tk","loading":"lazy"}},{"type":"text","value":"While other years, like 2002, might show nothing at all."},{"type":"img","value":{"src":"assets/sketches/all.jpg","alt":"Tk","loading":"lazy"}},{"type":"text","value":"But if we combine all 35 years I have (1990-2024), with nearly 2 million observations–5,358 per date–random fluctuations start to cancel out. This improves our ability to be more confident in our findings."},{"type":"img","value":{"src":"assets/sketches/zero.jpg","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Now we see 6.9% excess birthday deaths. This is more promising."}]},{"section":"significance","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"How confident can we be that our results are <strong>statistically significant,</strong> and how do we measure this?"},{"type":"text","value":"Z-Tests and p-values baby!"},{"type":"text","value":"To test significance, we start with the <strong>null hypothesis:</strong>"},{"type":"blockquote","value":"“There is no birthday effect. Deaths occur randomly throughout the year regardless of birthdays.”"},{"type":"text","value":"Then we ask ourselves, how likely would we see this birthday spike by pure chance alone if our null hypothesis were true?"},{"type":"text","value":"We calculate a z-score by taking the difference between observed and expected birthday deaths, then dividing by the standard deviation:"},{"type":"code","value":"z = (observed - expected) / standard deviation"},{"type":"text","value":"With 1,955,588 observations, we get a z-score of 5, which is extreme in the statistics world."},{"type":"text","value":"(to do visually explain this stuff more)"},{"type":"text","value":"Converting this to a <strong>p-value</strong> tells us the probability of seeing this pattern if the null hypothesis were true."},{"type":"text","value":"Our p-value is ~0.000001, meaning there’s less than a 0.0001% chance we’d see this birthday effect if deaths were truly random."},{"type":"img","value":{"src":"assets/chance.jpg","loading":"lazy","alt":"screenshot from Dumb and Dumber “you’re telling me there’s a chance”"}},{"type":"text","value":"Statisticians typically consider any p-value below 0.05 to be significant enough to reject the null hypothesis, and we’re <strong>way</strong> below that threshold."},{"type":"text","value":"Therefore, the birthday effect is real (and statistically significant)!"}]},{"section":"seasonality","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"(*sighs* coming from you)"},{"type":"text","value":"Births and deaths aren’t evenly spread throughout the year. Winter months see more deaths from flu and cold weather, while birth patterns have their own seasonal rhythm."},{"type":"text","value":"If we look at births and deaths by month, we see clear patterns:"},{"type":"img","value":{"src":"assets/sketches/season.jpg","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Take January in Massachusetts: 8.5% of people are born then, but 9.6% of all deaths happen in January. This means January-born people would naturally show <strong>13% more birthday deaths</strong> just because January is a high-mortality month—regardless of some birthday effect."},{"type":"code","value":"9.6% ÷ 8.5% = <strong>1.13</strong>"},{"type":"text","value":"To find a true birthday effect, we need to adjust for these seasonal patterns. Otherwise, we’re just measuring when people tend to die anyway."},{"type":"text","value":"(todo- way more here about the grid approach)"},{"type":"text","value":"This means we can definitively say there is <strong>still</strong> an effect that has nothing to do with seasonal factors, but rather, ✨something else. ✨"}]},{"section":"theories","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"(this is still being fleshed out, kind of a jumble)"},{"type":"text","value":"What does it all mean? Why <strong>is</strong> there a birthday effect?"},{"type":"text","value":"Some theories…"},{"type":"text","value":"behavior (alcohol consumption,risk-taking behaviors)"},{"type":"text","value":"psychological factors: (anticipatory effect, anniversary reaction)"},{"type":"text","value":"So we can go deeper…who is most affected?"}]},{"section":"more","content":[{"type":"text","value":"But that is just the birthday, if there is some reason around the day, maybe the precise day isn’t the only thing worth looking at …"},{"type":"text","value":"before/after effect (death postponement vs. anniversary reaction)"},{"type":"text","value":"Age differences: Show how effect size varies by age group"},{"type":"text","value":"Gender differences: Do men and women show different patterns?"},{"type":"text","value":"Maybe other stuff (weekday/weekend, cause of death)"}]},{"section":"comparison","content":[{"type":"text","value":"Comparison to other studies (or should happen inline?)"}]},{"section":"conclusion","content":[{"type":"text","value":"<strong class=big>So what have we learned?</strong>"},{"type":"text","value":"The birthday effect shows that mortality isn’t just about biology and random chance; it’s influenced by social constructs and personal significance."},{"type":"text","value":"In a broader sense, this research reminds us that data can reveal hidden patterns in human experience that we might otherwise miss."},{"type":"text","value":"Also, asking questions of data is part science, part art. How you ask the questions is just as important as what you ask."}]},{"section":"method","content":[{"type":"text","value":"Data excludes deaths with age under 1.5 and leap years on for both birthdays and in calculations."},{"type":"text","value":"Caveats…simplified a lot of things. Lot’s of different approaches."}]}]'),Ce={meta:Ct,body:Mt};function jt(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 6.9.2"),console.log("build: 2025-03-12-11:40"),console.log("--- --- --- --- --- ---")}var St=B("<!> <!>",1);function Ot(i,e){ge(e,!0),jt();const t=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"],{title:n,description:o,url:l,keywords:u}=Ce;ke("copy",Ce),ke("data",e.data);var f=St(),r=x(f);_t(r,{title:n,description:o,url:l,preloadFont:t,keywords:u});var c=_(r,2);Wt(c,{}),m(i,f),me()}export{Ot as component};
