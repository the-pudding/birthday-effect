import{a as Je,t as D,b as m,d as z}from"../chunks/BVCBb7fN.js";import{b as ye,h as b,d as te,a4 as w,aD as Pe,n as Ye,o as he,s as G,p as q,f as M,al as qe,t as pe,e as O,v as fe,aE as ie,ao as Se,I as V,aF as Le,aG as Ue,an as Ve,aH as Ke,k as ve,aI as Xe,aJ as Ze,g as Qe,a8 as $e,E as Ce,aK as Be,j as et,ah as tt,aL as at,aC as st,q as rt,aM as le,at as we,as as xe,aN as _e,w as ot,c as nt,aO as it,aA as x,aB as _,X as K,aP as lt,Z as L,_ as U,W as ge,Y as me,ab as $,aQ as ht,aR as ke}from"../chunks/ClX8asxz.js";import{d as dt,a as ct}from"../chunks/DAVryfCJ.js";import{i as ut,m as yt,s as Te}from"../chunks/CbY0mUQ6.js";import{s as T,a as pt}from"../chunks/Cez6FR21.js";import{p as B,c as Ae,s as Ie}from"../chunks/bWmt5JFN.js";import{h as de}from"../chunks/lC31phLd.js";import{i as ee}from"../chunks/mpN8yIUt.js";import{b as ft}from"../chunks/MDGf1pH2.js";function ce(i,e){return e}function vt(i,e,t,r){for(var o=[],l=e.length,c=0;c<l;c++)Ue(e[c].e,o,!0);var y=l>0&&o.length===0&&t!==null;if(y){var n=t.parentNode;Ve(n),n.append(t),r.clear(),C(i,e[0].prev,e[l-1].next)}Ke(o,()=>{for(var h=0;h<l;h++){var a=e[h];y||(r.delete(a.k),C(i,a.prev,a.next)),ve(a.e,!y)}})}function ue(i,e,t,r,o,l=null){var c=i,y={flags:e,items:new Map,first:null};b&&te();var n=null,h=!1,a=Pe(()=>{var d=t();return $e(d)?d:d==null?[]:Se(d)});ye(()=>{var d=w(a),s=d.length;if(h&&s===0)return;h=s===0;let f=!1;if(b){var p=c.data===Ye;p!==(s===0)&&(c=he(),G(c),q(!1),f=!0)}if(b){for(var k=null,v,u=0;u<s;u++){if(M.nodeType===8&&M.data===qe){c=M,f=!0,q(!1);break}var g=d[u],E=r(g,u);v=De(M,y,k,null,g,E,u,o,e,t),y.items.set(E,v),k=v}s>0&&G(he())}b||gt(d,y,c,o,e,r,t),l!==null&&(s===0?n?pe(n):n=O(()=>l(c)):n!==null&&fe(n,()=>{n=null})),f&&q(!0),w(a)}),b&&(c=M)}function gt(i,e,t,r,o,l,c){var y=i.length,n=e.items,h=e.first,a=h,d,s=null,f=[],p=[],k,v,u,g;for(g=0;g<y;g+=1){if(k=i[g],v=l(k,g),u=n.get(v),u===void 0){var E=a?a.e.nodes_start:t;s=De(E,e,s,s===null?e.first:s.next,k,v,g,r,o,c),n.set(v,s),f=[],p=[],a=s.next;continue}if(mt(u,k,g),(u.e.f&ie)!==0&&pe(u.e),u!==a){if(d!==void 0&&d.has(u)){if(f.length<p.length){var A=p[0],I;s=A.prev;var R=f[0],S=f[f.length-1];for(I=0;I<f.length;I+=1)Ee(f[I],A,t);for(I=0;I<p.length;I+=1)d.delete(p[I]);C(e,R.prev,S.next),C(e,s,R),C(e,S,A),a=A,s=S,g-=1,f=[],p=[]}else d.delete(u),Ee(u,a,t),C(e,u.prev,u.next),C(e,u,s===null?e.first:s.next),C(e,s,u),s=u;continue}for(f=[],p=[];a!==null&&a.k!==v;)(a.e.f&ie)===0&&(d??(d=new Set)).add(a),p.push(a),a=a.next;if(a===null)continue;u=a}f.push(u),s=u,a=u.next}if(a!==null||d!==void 0){for(var W=d===void 0?[]:Se(d);a!==null;)(a.e.f&ie)===0&&W.push(a),a=a.next;var X=W.length;if(X>0){var Z=null;vt(e,W,Z,n)}}V.first=e.first&&e.first.e,V.last=s&&s.e}function mt(i,e,t,r){ut(i.v,e),i.i=t}function De(i,e,t,r,o,l,c,y,n,h){var a=(n&Xe)!==0,d=(n&Ze)===0,s=a?d?yt(o):Te(o):o,f=(n&Le)===0?c:Te(c),p={i:f,v:s,k:l,a:null,e:null,prev:t,next:r};try{return p.e=O(()=>y(i,s,f,h),b),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function Ee(i,e,t){for(var r=i.next?i.next.e.nodes_start:t,o=e?e.e.nodes_start:t,l=i.e.nodes_start;l!==r;){var c=Qe(l);o.before(l),l=c}}function C(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ze(i,e,t,r,o,l){let c=b;b&&te();var y,n,h=null;b&&M.nodeType===1&&(h=M,te());var a=b?M:i,d;ye(()=>{const s=e()||null;var f=s==="svg"?Be:null;s!==y&&(d&&(s===null?fe(d,()=>{d=null,n=null}):s===n?pe(d):ve(d)),s&&s!==n&&(d=O(()=>{if(h=b?h:f?document.createElementNS(f,s):document.createElement(s),Je(h,h),r){b&&ft(s)&&h.append(document.createComment(""));var p=b?et(h):h.appendChild(tt());b&&(p===null?q(!1):G(p)),r(h,p)}V.nodes_end=h,a.before(h)})),y=s,y&&(n=y))},Ce),c&&(q(!0),G(a))}function Me(i,e){var t=V,r=ot,o=nt;we(i),xe(i),_e(i.ctx);try{e()}finally{we(t),xe(r),_e(o)}}function bt(i,e,t){var r=i,o;ye(()=>{var l=V,c=M,y=!1;l.fn=n=>{var h=e.onerror;let a=e.failed;if(!h&&!a||y)throw n;var d=()=>{fe(o),Me(l,()=>{y=!1,o=O(()=>t(r)),le()})};h==null||h(n,d),o?ve(o):b&&(G(c),st(),G(he())),a&&rt(()=>{Me(l,()=>{y=!0;try{o=O(()=>{a(r,()=>n,()=>d)})}catch(s){it(s,l,null,l.ctx)}le(),y=!1})})},b&&te(),o=O(()=>t(r)),le()},Ce|at),b&&(r=M)}var wt=D('<link rel="preload" as="font" type="font/woff2" crossorigin="">'),xt=D('<meta name="description"> <meta name="author" content="The Pudding"> <meta name="news_keywords"> <meta property="og:title"> <meta property="og:site_name" content="The Pudding"> <meta property="og:url"> <meta property="og:description"> <meta property="og:type" content="article"> <meta property="og:locale" content="en_US"> <meta property="og:image"> <meta property="og:image:type" content="image/jpeg"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="628"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="https://pudding.cool"> <meta name="twitter:creator" content="@puddingviz"> <meta name="twitter:title"> <meta name="twitter:description"> <meta name="twitter:image:src"> <meta name="robots" content="max-image-preview:large"> <link rel="canonical"> <!>',1);function _t(i,e){let t=B(e,"title",3,"Title TK"),r=B(e,"description",3,"Description TK"),o=B(e,"url",3,"https://pudding.cool"),l=B(e,"keywords",3,""),c=B(e,"preloadFont",19,()=>[]);dt(y=>{var n=xt(),h=x(n),a=_(h,4),d=_(a,2),s=_(d,4),f=_(s,2),p=_(f,6),k=_(p,14),v=_(k,2),u=_(v,2),g=_(u,4),E=_(g,2);ue(E,17,c,ce,(A,I)=>{var R=wt();K(()=>T(R,"href",w(I))),m(A,R)}),K(()=>{lt.title=t(),T(h,"content",r()),T(a,"content",l()),T(d,"content",t()),T(s,"content",o()),T(f,"content",r()),T(p,"content",`${o()??""}/assets/social-facebook.jpg`),T(k,"content",t()),T(v,"content",r()),T(u,"content",`${o()??""}/assets/social-twitter.jpg`),T(g,"href",`${o()??""}/`)}),m(y,n)})}var kt=D('<h1 class="svelte-f3a3kc"><span class="big svelte-f3a3kc"><!></span><br><span class="small svelte-f3a3kc"> </span></h1>');function Tt(i,e){var t=kt(),r=L(t),o=L(r);de(o,()=>e.big),U(r);var l=_(r,2),c=L(l,!0);U(l),U(t),K(()=>ct(c,e.small)),m(i,t)}var At=D("<p><!></p>"),It=D("<section><!></section>");function Et(i,e){ge(e,!0);let t=B(e,"components",19,()=>({})),r=B(e,"body",19,()=>[]);var o=z(),l=x(o);ue(l,17,r,ce,(c,y)=>{let n=()=>w(y).section,h=()=>w(y).content;var a=It();const d=$(()=>n().toLowerCase().replace(/[^a-z0-9]/g,"")),s=$(()=>t()[n()]);var f=L(a);{var p=v=>{var u=z(),g=x(u);Ae(g,()=>w(s),(E,A)=>{A(E,Ie(h))}),m(v,u)},k=v=>{var u=z(),g=x(u);ue(g,17,h,ce,(E,A,I,R)=>{let S=()=>w(A).type,W=()=>w(A).value;var X=z();const Z=$(()=>t()[S()]),Re=$(()=>typeof W()=="string");var Ne=x(X);{var je=N=>{var J=z(),ae=x(J);Ae(ae,()=>w(Z),(se,re)=>{re(se,Ie(W))}),m(N,J)},He=N=>{var J=z(),ae=x(J);{var se=j=>{var H=At(),oe=L(H);de(oe,W),U(H),m(j,H)},re=j=>{var H=z(),oe=x(H);{var Fe=F=>{var P=z(),ne=x(P);ze(ne,S,!1,(Q,be)=>{var Y=z(),Ge=x(Y);de(Ge,W),m(be,Y)}),m(F,P)},Oe=F=>{var P=z(),ne=x(P);ze(ne,S,!1,(Q,be)=>{let Y;K(()=>Y=pt(Q,Y,{...W()},void 0,Q.namespaceURI===Be,Q.nodeName.includes("-")))}),m(F,P)};ee(oe,F=>{w(Re)?F(Fe):F(Oe,!1)},!0)}m(j,H)};ee(ae,j=>{S()==="text"?j(se):j(re,!1)},!0)}m(N,J)};ee(Ne,N=>{w(Z)?N(je):N(He,!1)})}m(E,X)}),m(v,u)};ee(f,v=>{w(s)?v(p):v(k,!1)})}U(a),K(()=>T(a,"id",w(d))),m(c,a)}),m(i,o),me()}var zt=D("<!> <!>",1);function Mt(i,e){ge(e,!0);const t=ht("copy"),{body:r}=t,o={Hero:Tt};var l=zt(),c=x(l);Et(c,{body:r,components:o});var y=_(c,2);bt(y,{onerror:n=>console.error(n)},n=>{}),m(i,l),me()}const Wt={title:"Are you more likely to die on your birthday?",description:"Yes. We’ll run a study to show you how, and why."},St=JSON.parse(`[{"section":"intro","content":[{"type":"Hero","value":{"big":"You<br>will<br>die","small":"someday."}},{"type":"img","value":{"src":"assets/sketches/ghost.webp","alt":"drawing of a ghost","class":"emoji"}},{"type":"text","value":"<span class=center>Probably not today.</span>"},{"type":"text","value":"Would you believe me if I told you that you’re actually <strong>more likely to die on your birthday</strong> than on other days of the year?"},{"type":"text","value":"This statistical curiosity is called the <strong>birthday effect</strong>."},{"type":"text","value":"There have been a bunch of <a href=https://en.wikipedia.org/wiki/Birthday_effect target=_blank rel=noreferrer>studies</a> on different populations that have proven that it’s real."},{"type":"text","value":"But I was skeptical (maybe you are too?), so let’s run our own study to understand how–and if–it works."},{"type":"img","value":{"src":"assets/sketches/tube.webp","alt":"drawing of a test tube","class":"emoji"}}]},{"section":"basic","content":[{"type":"text","value":"<strong class=big>The question:</strong>"},{"type":"text","value":"<strong>Do more people die on their birthdays than expected?</strong>"},{"type":"text","value":"I live in Massachusetts, so I got data on the 57,010 people who died back in the year 2000."},{"type":"text","value":"The first thing we can do is count the number of days a person dies before or after their birthday on a circular calendar.*"},{"type":"text","value":"We’ll start with Gus (made up name), who was born on March 4th, and after 84 years, died on March 4th. <strong>That’s a 0 day difference.</strong>"},{"type":"text","value":"Two more examples: Gretchen, who was born on May 11th and died on May 2nd–a -9 day difference. And Randall who was also born on May 11th, but died on August 7th–an 87 day difference."},{"type":"img","value":{"src":"assets/sketches/explain.webp","alt":"A bar chart showing daily death counts before and after a reference point (marked with a birthday cake icon). The x-axis spans from -182 to 182 days. The y-axis shows values from 50 to 150. Gray vertical bars represent daily death counts averaging around 150, with minor fluctuations across the entire time period. The zero-day red bar is one of the shortest.","loading":"lazy"}},{"type":"text","value":"You get the picture. We arrange their relative death dates from -182 to 182 (days before and after birthday, respectively)."},{"type":"img","value":{"src":"assets/sketches/explain2.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"We do this for each person and count the number of times each difference occurs. If we expect death dates to be random relative to birthdays, this should look pretty flat. Instead, we can see variation."},{"type":"img","value":{"src":"assets/sketches/all-2000.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Interesting…But what we care about most is how many observations are on the zero day difference. Is there a spike? <strong>Enhance!</strong>"},{"type":"img","value":{"src":"assets/sketches/enhance.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"There are <strong>17% excess birthday deaths</strong> compared to the average day difference."},{"type":"text","value":"We did it, we found the birthday effect!"}]},{"section":"sample","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"Look at this. Did you notice that just 12 days after birthday deaths is nearly as high? Does that mean there is a “12-days-after-a-birthday effect,” too?"},{"type":"img","value":{"src":"assets/sketches/other.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Maybe. But this could be a <strong>sample size problem.</strong> It’s like trying to detect a rigged coin with just 10 flips. Getting six heads instead of the expected five wouldn’t prove much–you need more tests. The same applies to our data."},{"type":"text","value":"57,010 observations might seem like a lot, but not when you spread them over 365 days."},{"type":"text","value":"And there will always be some natural variation due to random chance since this is real life. So, <strong>is the zero day difference due to random chance or not?</strong> To answer this, we need to first know how much the data vary from the average. We start by figuring out how spread out the data is."},{"type":"text","value":"Here are all day differences sorted by magnitude. You can see that birthdays (day difference = 0) have one of the highest death frequencies."},{"type":"img","value":{"src":"assets/sketches/sorted.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"To see the broader trend, let’s group our day difference values into buckets of five. In the chart above, there are <strong>eight day differences with values between 180-185</strong>, including birthday deaths. That makes up one bucket. We tally up the count for all other buckets, and get the histogram below."},{"type":"img","value":{"src":"assets/sketches/histogram.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"You’ll notice a balanced-looking, slight bell shape–this is important. It is called a <strong>normal distribution</strong> or “bell curve.”"},{"type":"text","value":"If we measure the spread,  we find that many values–about 68%–fall within a certain range (+/- 13) of the average (156 deaths). This range (143-169) is what statisticians call <strong>one standard deviation.</strong>"},{"type":"text","value":"This 68% pattern is a key feature of bell curves–<a href=https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule target=_blank rel=noreferrer>a mathematical rule</a> that shows up everywhere in nature and statistics."},{"type":"img","value":{"src":"assets/sketches/stddev.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"We expect most (95%) values to fall within two standard deviations. That means anything from 130-182 is normal variation–expected random noise in our data. Birthday deaths a hair higher, at just over 2 standard deviations."},{"type":"text","value":"This normal variation in the data makes it hard to spot subtle patterns–like the birthday effect. We need a large enough sample to see if that birthday spike is truly meaningful or just random noise."},{"type":"text","value":"So I got data of every person who died in Massachusetts from 1990-2024. When we look at more years, we can see the noise factor play out more clearly. Some years, like 1999, will show a strong birthday effect."},{"type":"img","value":{"src":"assets/sketches/all-1999.webp","alt":"A bar chart showing daily death counts before and after a reference point (marked with a birthday cake icon). The x-axis spans from -182 to 182 days. The y-axis shows values from 50 to 150. Gray vertical bars represent daily death counts averaging around 150, with minor fluctuations across the entire time period. The zero-day red bar is one of the tallest.","loading":"lazy"}},{"type":"text","value":"While other years, like 2002, might show nothing at all."},{"type":"img","value":{"src":"assets/sketches/all-2002.webp","alt":"A bar chart showing daily death counts before and after a reference point (marked with a birthday cake icon). The x-axis spans from -182 to 182 days. The y-axis shows values from 50 to 150. Gray vertical bars represent daily death counts averaging around 150, with minor fluctuations across the entire time period. The zero-day red bar is one of the shortest.","loading":"lazy"}},{"type":"text","value":"But if we combine all 35 years I have (1990-2024), with nearly 2 million observations–5,358 per day difference–random fluctuations start to cancel out. This improves our ability to be more confident in our findings."},{"type":"img","value":{"src":"assets/sketches/all.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"For good measure, let’s enhance this too."},{"type":"img","value":{"src":"assets/sketches/enhance-all.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Now we see <strong>6.9% excess birthday deaths</strong>. This is more promising."}]},{"section":"significance","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"How confident can we be that our results are <strong>statistically significant,</strong> and how do we measure this?"},{"type":"text","value":"Z-Tests and p-values baby!"},{"type":"img","value":{"src":"assets/chalkboard.webp","loading":"lazy","alt":"screenshot from A Beautiful Mind of a person and a chalkboard"}},{"type":"text","value":"To test significance, we start with the <strong>null hypothesis</strong>–we assume there is nothing special happening here. In our case:"},{"type":"blockquote","value":"“There is no birthday effect. Deaths occur randomly throughout the year regardless of birthdays.”"},{"type":"text","value":"Then we ask ourselves, how likely would we see this birthday spike by pure chance alone if our null hypothesis were true?"},{"type":"text","value":"We just need three ingredients to calculate a z-score: observed deaths, expected deaths, and the standard deviation. Hey! We know all about that now, so we can put it to use."},{"type":"code","value":"(observed - expected) / std. dev. = z-score"},{"type":"text","value":"Plugging in the values from our 1,955,588 observations:"},{"type":"code","value":"(5,728 - 5,358) / 74 = 5"},{"type":"text","value":"Our <strong>z-score of 5</strong> is incredibly strong, which tells us this is well beyond normal variation."},{"type":"text","value":"Converting this to a <strong>p-value</strong> tells us the probability of seeing this extreme result, if the null hypothesis were true and there was no birthday effect."},{"type":"text","value":"Our p-value is ~0.000001, meaning there’s less than a 0.0001% chance we’d see this birthday effect if deaths were actually random."},{"type":"img","value":{"src":"assets/chance.webp","loading":"lazy","alt":"screenshot from Dumb and Dumber “you’re telling me there’s a chance”"}},{"type":"text","value":"Since that chance is so low, it is a near-certainty that this isn’t due to normal variation. Statisticians typically consider any p-value below 0.05 to be significant enough to reject the null hypothesis, and we’re <strong>way</strong> below that threshold."},{"type":"text","value":"Therefore, the birthday effect is real <strong>and</strong> statistically significant!"}]},{"section":"seasonality","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"(*sighs* coming from you)"},{"type":"text","value":"Births and deaths aren’t evenly spread throughout the year. Winter months see more deaths from flu and cold weather, while birth patterns have their own seasonal rhythm."},{"type":"img","value":{"src":"assets/sketches/months.webp","alt":"A bar chart showing births and deaths per month over a year, from January to December. Births (in teal) range from 160,802 to 165,570 per month, displayed as bars extending downward. Deaths (in red) range from 149,606 to 187,356 per month, displayed as bars extending upward. January and June are labeled on the x-axis. The chart shows more deaths than births in most months, with January having the highest death count at 187,356.","loading":"lazy"}},{"type":"text","value":"Take January in Massachusetts: 8.5% of people are born then, but 9.6% of all deaths happen in January. This means January-born people would naturally show <strong>13% more birthday deaths</strong> just because January is a high-mortality month–regardless of some birthday effect."},{"type":"code","value":"9.6% ÷ 8.5% = <strong>1.13</strong>"},{"type":"text","value":"To find a true birthday effect, we need to adjust for these seasonal patterns. Otherwise, we’re just measuring when people tend to die anyway."},{"type":"text","value":"One way to control for seasonality is to compare expected deaths to observed deaths on birthdays, <strong>after</strong> accounting for seasonal patterns. Here’s how it works:"},{"type":"text","value":"Imagine a tiny world of <strong>100 people and just three days a year</strong>: day A, day B, and day C. Here is how many people were born and died on each day:"},{"type":"img","value":{"src":"assets/sketches/world.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"Since we are using 100 people, these numbers also represent the percent of people who are born and die on each day. If birth dates and death dates were completely unrelated (our null hypothesis), what would we expect to see?"},{"type":"text","value":"For someone born on day A (40 people), there’s a 40% chance they’ll die on day A or day B, and a 20% chance they’ll die on day C. To calculate the chance someone is born and dies on a given day, we simply multiply them together:"},{"type":"code","value":"birth %  × death % = % of all people"},{"type":"text","value":"So for day A people, there is a 16% chance they die on their birthday."},{"type":"code","value":"40% × 40% = 16%"},{"type":"img","value":{"src":"assets/sketches/grid.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"We can calculate the expected percentage for each birth-death combination for all nine day possibilities, which represents 100% of all outcomes. What we’re most interested in is the diagonal of this grid–where birth day equals death day. These are our birthday deaths."},{"type":"img","value":{"src":"assets/sketches/diagonal.webp","alt":"Tk","loading":"lazy"}},{"type":"text","value":"The grid basically says: “Even though more people die on day A, we’re taking that into account for each specific birthday, so any excess deaths on birthdays must be due to something else.”"},{"type":"text","value":"Adding these up, without any birthday effect, we’d <strong>expect 34% of people</strong> to die on their birthday by pure chance in this tiny world. This gives us a baseline to compare against that accounts for seasonal effects."},{"type":"text","value":"Now let’s bring this back to the real world with 365 days and our Massachusetts data. We'll use the same approach, just with a much, much bigger grid (133,225 combinations). After plugging in the numbers, we get an expected value of 5,355 birthday deaths, and observation of 5,728 deaths."},{"type":"text","value":"<strong class=big>There are 7.0% excess birthday deaths in Massachusetts.</strong>"},{"type":"text","value":"This means we can <strong>definitively</strong> say there is still an effect that has nothing to do with seasonal factors, but rather, ✨something else. ✨"}]},{"section":"theories","content":[{"type":"text","value":"<strong class=big>But…</strong>"},{"type":"text","value":"Why is there a birthday effect at all?"},{"type":"text","value":"One popular idea centers on the psychological impact of death postponement versus anniversary reaction: Does the looming birthday cause people to postpone death until after they’ve celebrated their special day, or does the birthday itself somehow trigger mortality?"},{"type":"text","value":"Other studies have shown a significant spike in deaths on and near birthdays. Peña’s study of 25 million U.S. deaths (1998-2011) found a 6.7% excess of birthday deaths, while Ajdacic-Gross’s study of Swiss deaths (1969-2008) found a 13.8% excess."},{"type":"text","value":"Peña noted that “no evidence is found of dips in average excess death rates in a ±10 day neighborhood around birthdays that could offset the spikes on birthdays.” Like these other large studies, I didn't find any significance with a postponement effect."},{"type":"text","value":"These studies also stratify the data to examine differences across gender, age, or cause of death. Unlike Peña, who found that “younger people have greater average excess death rates on birthdays,” I actually found that the birthday effect was stronger in older versus younger people."},{"type":"text","value":"The only additional noteworthy finding after stratification was that accidental deaths showed 35% excess deaths on birthdays in Massachusetts, supporting a theory around celebratory behavior. As Ajdacic-Gross observed on deaths by accident and suicide, “the most plausible interpretation is related to the use of alcohol, which is a well-known risk factor in suicidal behavior.”"}]},{"section":"conclusion","content":[{"type":"text","value":"<strong class=big>So what have we learned?</strong>"},{"type":"text","value":"The birthday effect shows that mortality isn’t just about biology and random chance; it’s influenced by social constructs and personal significance. This research reminds us that data can reveal hidden patterns in human experience that we might otherwise miss."},{"type":"text","value":"The differing results across studies highlight how methodological choices—from sample selection to statistical analysis—can dramatically shape our findings. When studying something as basic as birthdays and death, how we approach the problem shapes what answers we find."}]},{"section":"method","content":[{"type":"text","value":"<strong>Data and methods</strong>"},{"type":"text","value":"Massachusetts death data was obtained via FOIA from the Registry of Vital Records and Statistics (RVRS). Data excludes deaths where the age is under one and half years old, birth or death dates on February 29, and missing birth or death dates. Additionally, dates were compared on a 365 day calendar and excluded leap years. These exclusions and approaches were standard across studies with no significant impact in order to simplify calculations."}]}]`),We={meta:Wt,body:St};function Ct(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 6.9.2"),console.log("build: 2025-03-24-19:25"),console.log("--- --- --- --- --- ---")}var Bt=D("<!> <!>",1);function Pt(i,e){ge(e,!0),Ct();const t=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"],{title:r,description:o,url:l,keywords:c}=We;ke("copy",We),ke("data",e.data);var y=Bt(),n=x(y);_t(n,{title:r,description:o,url:l,preloadFont:t,keywords:c});var h=_(n,2);Mt(h,{}),m(i,y),me()}export{Pt as component};
