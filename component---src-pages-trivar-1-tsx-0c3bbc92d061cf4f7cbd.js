(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[9],{1060:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(7294),a=n(979),i=a.ZP.div.withConfig({displayName:"cards__Container",componentId:"sc-134r6bf-0"})(["display:flex;flex-direction:column;border-radius:10px;background-color:lightgray;width:160px;margin:5px;padding:5px;"]),l=a.ZP.h3.withConfig({displayName:"cards__Title",componentId:"sc-134r6bf-1"})(["margin:0 0 10px 0;"]),c=a.ZP.p.withConfig({displayName:"cards__Text",componentId:"sc-134r6bf-2"})(["margin:0;"]),o=a.ZP.div.withConfig({displayName:"cards__Row",componentId:"sc-134r6bf-3"})(["display:flex;justify-content:space-between;"]);function s(t){var e=t.title,n=t.hcount,a=t.ccount,s=t.hrecent,u=t.crecent;return r.createElement(i,null,r.createElement(l,null,e),r.createElement(o,null,r.createElement(c,null,"# Hot Spots:")," ",r.createElement(c,null,n)),r.createElement(o,null,r.createElement(c,null,"# Cold Spots:"),r.createElement(c,null,a)),r.createElement(o,null,r.createElement(c,null,"Last Hot Spot:"),r.createElement(c,null,s)),r.createElement(o,null,r.createElement(c,null,"Last Cold Spot:"),r.createElement(c,null,u)))}},7115:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var r=n(7294),a=n(979),i=n(7329),l=n(6690),c=n(5743),o=n(1020),s=n(1060),u=n(1329),d=n(4863),p=a.ZP.div.withConfig({displayName:"map1__Container",componentId:"nzmcrv-0"})(["display:flex;flex-direction:column;align-items:center;margin:10px;"]),m=a.ZP.h3.withConfig({displayName:"map1__Title",componentId:"nzmcrv-1"})(["margin:0;"]),f=a.ZP.svg.withConfig({displayName:"map1__MapContainer",componentId:"nzmcrv-2"})(["g{background-color:light-gray;fill:red;}border:1px solid black;#c",".cboundary{stroke:black;stroke-width:0.25px;}.cboundary{stroke-width:0px;fill:#ffffff00;}.bubble{stroke-width:0;}border:1px solid ",";"],(function(t){return t.county}),(function(t){return t.border?"black":"white"})),y=function(t){return Number(String(t).slice(0,-3))},h=function(t){var e=t.title,n=t.MapSettings,a=t.countiesMap,c=t.highlightedState,o=t.highlightedCounty,s=t.addState,h=t.stateSelector,g=t.countySelector,x=t.data,w=t.time,v=t.colorScales,b=v[0],k=v[1],C=t.getRadius,_=n.width,E=n.height,S=n.translate,N=n.scale,Z=(0,r.useRef)(null),I=l.FWi().scale(N).translate(S),P=l.l49().projection(I);return(0,r.useEffect)((function(){var t=l.Ys(Z.current).attr("width",_).attr("height",E).append("g");s(new d.Z(P,t,_,E,c[0])),t.append("g").style("stroke","black").style("stroke-width","0.5px").style("fill","#ffffffff").selectAll("path").data(u.zL(a,a.objects.states).features).enter().append("path").attr("d",P).attr("stateFips",(function(t){var e=t.id;return Number(e)})),t.append("g").selectAll("path").data(u.zL(a,a.objects.counties).features).enter().append("path").attr("d",P).attr("stateName",(function(t){var e=t.id;return a.objects.states.geometries.filter((function(t){return y(e)===Number(t.id)}))[0].properties.name})).attr("id",(function(t){var e=t.id;return"c"+Number(e)})).attr("class","cboundary").on("mouseout",(function(){g([-1,""])})),t.selectAll("circle").data(x).enter().append("circle").attr("class","bubble").attr("countyName",(function(t){var e=t.fips;return a.objects.counties.geometries.filter((function(t){var n=t.id;return e===Number(n)}))[0].properties.name})).attr("stateName",(function(t){var e=t.fips;return a.objects.states.geometries.filter((function(t){var n=t.id;return y(e)===Number(n)}))[0].properties.name})).attr("transform",(function(t){var e=t.fips,n=l.Ys("#c"+e).datum();return"translate("+P.centroid(n)+")"})).on("mouseout",(function(){g([-1,""])}))}),[]),(0,r.useEffect)((function(){l.td_(".bubble").attr("r",C).style("fill",(function(t){var e=t.count.apply(t,(0,i.Z)(w));return e[0]>e[1]?b(1/t.changes.apply(t,(0,i.Z)(w))):k(1/t.changes.apply(t,(0,i.Z)(w)))}))}),[w]),(0,r.useEffect)((function(){l.td_(".cboundary").on("click",(function(t,e){var n=e.id;h([y(n),this.getAttribute("stateName")])})),l.td_(".cboundary").on("mouseover",(function(t,e){var n=e.id,r=e.properties.name;""!==c[1]&&g([Number(n),r])})),l.td_(".bubble").on("mouseover",(function(t,e){var n=e.fips;c&&""!==c[1]&&g([n,this.getAttribute("countyName")])})).on("click",(function(t,e){var n=e.fips;h([y(n),this.getAttribute("stateName")])})).style("fill-opacity",(function(t){var e=t.fips;return-1===c[0]||y(e)===c[0]?1:.2}))}),[c]),r.createElement(p,null,r.createElement(m,null,e),r.createElement(f,{ref:Z,county:o[0],border:-1!==c[0]}))},g=n(6169),x=a.ZP.div.withConfig({displayName:"mapView1__Container",componentId:"ydkntr-0"})(["display:flex;flex-direction:column;align-items:center;"]),w=a.ZP.div.withConfig({displayName:"mapView1__MapContainer",componentId:"ydkntr-1"})(["display:flex;flex-direction:row;justify-content:center;width:100%;flex-wrap:wrap;@media (max-width:770px){flex-wrap:wrap;}"]),v=a.ZP.div.withConfig({displayName:"mapView1__Row",componentId:"ydkntr-2"})(["display:flex;flex-direction:row;justify-content:space-evenly;width:100%;flex-wrap:wrap;"]),b=a.ZP.p.withConfig({displayName:"mapView1__Text",componentId:"ydkntr-3"})(["margin:0;width:100px;white-space:nowrap;"]),k=a.ZP.button.withConfig({displayName:"mapView1__Button",componentId:"ydkntr-4"})(["width:50px;"]),C=(a.ZP.div.withConfig({displayName:"mapView1__LegendContainer",componentId:"ydkntr-5"})(["width:800px;display:flex;height:auto;"]),a.ZP.div.withConfig({displayName:"mapView1__Legend",componentId:"ydkntr-6"})(["margin:10px;width:390px;display:flex;justify-content:center;align-items:center;"]),a.ZP.div.withConfig({displayName:"mapView1__Cards",componentId:"ydkntr-7"})(["display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;width:70%;"]));function _(t){var e=t.MapSettings,n=t.selectedCounty,a=t.setSelectedCounty,u=t.selectedState,d=t.setSelectedState,p=t.time,m=(t.setTime,(0,r.useContext)(g.z)),f=m.mapData,y=m.mapTitles,_=(0,r.useState)(Array(y.length)),E=_[0],S=_[1],N=(0,r.useState)(1),Z=N[0],I=N[1],P=function(t,e){var n,r=t[0],a=t[1];return void 0===e&&(e=!1),E.forEach((function(t){e||r===t.currId||-1===r?(t.reset(),I(1),n=!1):(I(t.select(r)),n=!0)})),n?(d([r,a]),!0):(d([-1,""]),!1)},A=function(t){var e=t[0],n=t[1];-1!==e&&Number(String(e).slice(0,-3))!==u[0]||a([e,n])},M=l.cJy(l.sY$).domain([-.5,1]),j=l.cJy(l.bc$).domain([-.5,1]),Y=function(t){var e=t instanceof o.Z?t.count.apply(t,(0,i.Z)(p)):[t],n=t instanceof o.Z?t.n:p[1];return(30+Math.max.apply(Math,(0,i.Z)(e)))/n},L=(0,r.useRef)(null),R=100,V=380,T=[20,20];(0,r.useEffect)((function(){var t=Math.min(V,100+10*Z)-2*T[0],e=Math.min(R,40+2*Z),n=[{x:1,r:1},{x:2,r:5},{x:3,r:10},{x:4,r:20},{x:5,r:52}];l.Ys(L.current).selectAll("*").remove();var r=l.Ys(L.current).style("width",t+3.5*T[0]).style("height",e+2*T[1]).append("g").attr("transform","translate("+T[0]+",0)"),a=l.BYU().domain([1,n[n.length-1].x]).range([0,t]),i=l.BYU().domain([0,1]).range([e,0]);r.append("g").attr("transform","translate(0,"+(3*T[1]/2+5*Z/2)+")").call(l.LLu(a).ticks(5).tickFormat((function(t){return String(n[t-1].r)}))),r.append("g").attr("transform","translate("+T[0]+",0)").call(l.y4O(i)).style("display","none"),r.selectAll("dot").remove().data(n).enter().append("circle").attr("class","point").attr("cx",(function(t){var e=t.x;return a(e)})).attr("cy",(function(){return i(.5)})).attr("r",(function(t){var e=t.r;return Y(e)*Z})).style("fill","black"),r.append("text").attr("text-anchor","end").attr("x",t/2+T[0]).attr("y",e+3*T[1]/2+Z/4).text("Count")}),[p,Z]);var z=(0,r.useRef)(null);return(0,r.useEffect)((function(){l.Ys(z.current).selectAll("*").remove();var t=l.Ys(z.current).style("width",V).style("height",R).append("g").attr("transform","translate("+(30+T[0])+",0)"),e=[1,5,10,15,20,25,30,40,46,52],n=(0,i.Z)(Array(2*e.length).keys()).map((function(t){return{x:t%e.length+1,w:e[t%e.length],c:t<e.length?1:2}})),r=l.BYU().domain([1,e.length]).range([0,V-2*T[0]-30]),a=l.BYU().domain([0,3]).range([R-2*T[1],0]);t.append("g").attr("transform","translate(0,"+(T[1]+500/12)+")").call(l.LLu(r).ticks(5).tickFormat((function(t){return String(n[t-1].w)}))),t.append("g").attr("transform","translate("+T[0]+",0)").call(l.y4O(a)).style("display","none"),t.selectAll("dot").remove().data(n).enter().append("circle").attr("class","point").attr("cx",(function(t){var e=t.x;return r(e)})).attr("cy",(function(t){var e=t.c;return a(e)})).attr("r",(function(){return 9})).style("fill",(function(t){var e=t.c,n=t.w;return 1===e?j(n):M(n)})),t.append("text").attr("text-anchor","end").attr("x",220).attr("y",95).text("Week Number"),t.append("text").attr("text-anchor","end").attr("x",-15).attr("y",45).text("Hot"),t.append("text").attr("text-anchor","end").attr("x",-15).attr("y",25).text("Cold")}),[p,Z]),r.createElement(x,null,r.createElement(b,null,"Selected State: ",u[1]),r.createElement(w,null,y.map((function(t,a){return r.createElement(h,{key:a,MapSettings:e,title:t,countiesMap:c,highlightedCounty:n,highlightedState:u,addState:function(t){return function(t,e){E[e]=t,S(E)}(t,a)},stateSelector:P,countySelector:A,time:p,data:f?f[a]:null,colorScales:[j,M],getRadius:Y})}))),r.createElement(b,null,n[1]?"Selected County: "+n[1]+" County":""),r.createElement(C,null,-1!==n[0]?[0,1,2,3].map((function(t){var e=!!f&&f[t].filter((function(t){return Number(t.fips)===Number(n[0])}))[0],a=e?e.count.apply(e,(0,i.Z)(p)):[0,0],l=a[0],c=a[1],o=e?e.recent.apply(e,(0,i.Z)(p)):[0,0],u=o[0],d=o[1];return r.createElement(s.Z,{key:t,title:y[t],hcount:l,ccount:c,hrecent:u,crecent:d})})):null),r.createElement(v,null,r.createElement(k,{onClick:function(){P([-1,""],!0)}},"Reset")))}var E=n(2650),S=a.ZP.div.withConfig({displayName:"trivar1__Container",componentId:"sc-1620dk1-0"})(["width:100%;display:flex;align-items:center;flex-direction:column;"]),N=function(){var t={width:380,height:250,translate:[190,125],scale:500},e=(0,r.useState)([-1,""]),n=e[0],a=e[1],i=(0,r.useState)([-1,""]),l=i[0],c=i[1],o=(0,r.useState)([0,52]),s=o[0],u=o[1];return r.createElement(E.Z,{selectedPage:"Static1"},r.createElement(S,null,r.createElement("p",null,"Darker color means fewer number of changes"),r.createElement("p",null,"Bigger Radius means more counts"),r.createElement(_,{MapSettings:t,selectedCounty:n,setSelectedCounty:a,selectedState:l,setSelectedState:c,time:s,setTime:u}),r.createElement("hr",{style:{width:"100%"}}),r.createElement("p",null,"I think this would end up having a triangular look with one side on yaxis and other vertex above positive x")))}}}]);
//# sourceMappingURL=component---src-pages-trivar-1-tsx-0c3bbc92d061cf4f7cbd.js.map