(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[746],{1060:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var a=n(7294),r=n(979),i=r.ZP.div.withConfig({displayName:"cards__Container",componentId:"sc-134r6bf-0"})(["display:flex;flex-direction:column;border-radius:10px;background-color:lightgray;width:160px;margin:5px;padding:5px;"]),l=r.ZP.h3.withConfig({displayName:"cards__Title",componentId:"sc-134r6bf-1"})(["margin:0 0 10px 0;"]),o=r.ZP.p.withConfig({displayName:"cards__Text",componentId:"sc-134r6bf-2"})(["margin:0;"]),c=r.ZP.div.withConfig({displayName:"cards__Row",componentId:"sc-134r6bf-3"})(["display:flex;justify-content:space-between;"]);function s(t){var e=t.title,n=t.hcount,r=t.ccount,s=t.hrecent,u=t.crecent;return a.createElement(i,null,a.createElement(l,null,e),a.createElement(c,null,a.createElement(o,null,"# Hot Spots:")," ",a.createElement(o,null,n)),a.createElement(c,null,a.createElement(o,null,"# Cold Spots:"),a.createElement(o,null,r)),a.createElement(c,null,a.createElement(o,null,"Last Hot Spot:"),a.createElement(o,null,s)),a.createElement(c,null,a.createElement(o,null,"Last Cold Spot:"),a.createElement(o,null,u)))}},1877:function(t,e,n){"use strict";n.d(e,{E:function(){return l},o:function(){return o}});var a=n(7294),r=n(1329),i=n(5743),l=(0,a.createContext)(null),o=function(t){var e=t.children,n=r.zL(i,i.objects.states).features,o=r.zL(i,i.objects.counties).features;return a.createElement(l.Provider,{value:{states:n,counties:o}},e)}},6991:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return R}});var a=n(7294),r=n(979),i=n(5444),l=n(7329),o=n(6690),c=n(5743),s=n(1020),u=n(1060),p=n(1329),d=n(4863),m=r.ZP.div.withConfig({displayName:"map__Container",componentId:"sc-1o8yluv-0"})(["display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;margin:10px 20px;@media (max-width:830px){}@media (max-width:700px){margin:0;}"]),f=r.ZP.h3.withConfig({displayName:"map__Title",componentId:"sc-1o8yluv-1"})(["margin:0;"]),h=r.ZP.svg.withConfig({displayName:"map__MapContainer",componentId:"sc-1o8yluv-2"})(["g{background-color:light-gray;fill:red;}#c",".cboundary{stroke:black;stroke-width:0.25px;}.cboundary{stroke-width:0px;fill:#ffffff00;}.bubble{stroke-width:0;}border:1px solid ",";"],(function(t){return t.county}),(function(t){return t.border?"black":"white"})),g=function(t){return Number(String(t).slice(0,-3))},y=function(t){var e=t.title,n=t.MapSettings,r=t.countiesMap,i=t.highlightedState,c=t.highlightedCounty,s=t.addState,u=t.stateSelector,y=t.countySelector,w=t.data,x=t.time,v=t.colorScales,b=v[0],E=v[1],C=t.getRadius,_=n.width,N=n.height,S=n.translate,Z=n.scale,k=(0,a.useRef)(null),j=o.FWi().scale(Z).translate(S),I=o.l49().projection(j);return(0,a.useEffect)((function(){var t=o.Ys(k.current).attr("width",_).attr("height",N).append("g");s(new d.Z(I,t,_,N,i[0])),t.append("g").style("stroke","black").style("stroke-width","0.5px").style("fill","#ffffffff").selectAll("path").data(p.zL(r,r.objects.states).features).enter().append("path").attr("d",I).attr("stateFips",(function(t){var e=t.id;return Number(e)})),t.append("g").selectAll("path").data(p.zL(r,r.objects.counties).features).enter().append("path").attr("d",I).attr("stateName",(function(t){var e=t.id;return r.objects.states.geometries.filter((function(t){return g(e)===Number(t.id)}))[0].properties.name})).attr("id",(function(t){var e=t.id;return"c"+Number(e)})).attr("class","cboundary").on("mouseout",(function(){y([-1,""])})),t.selectAll("circle").data(w).enter().append("circle").attr("class","bubble").attr("countyName",(function(t){var e=t.fips;return r.objects.counties.geometries.filter((function(t){var n=t.id;return e===Number(n)}))[0].properties.name})).attr("stateName",(function(t){var e=t.fips;return r.objects.states.geometries.filter((function(t){var n=t.id;return g(e)===Number(n)}))[0].properties.name})).attr("transform",(function(t){var e=t.fips,n=o.Ys("#c"+e).datum();return"translate("+I.centroid(n)+")"})).on("mouseout",(function(){y([-1,""])}))}),[]),(0,a.useEffect)((function(){o.td_(".bubble").attr("r",C).style("fill",(function(t){var e=t.recent.apply(t,(0,l.Z)(x)),n=e[0],a=e[1];return n>a?b(n):E(a)}))}),[x]),(0,a.useEffect)((function(){o.td_(".cboundary").on("click",(function(t,e){var n=e.id;u([g(n),this.getAttribute("stateName")])})),o.td_(".cboundary").on("mouseover",(function(t,e){var n=e.id,a=e.properties.name;""!==i[1]&&y([Number(n),a])})),o.td_(".bubble").on("mouseover",(function(t,e){var n=e.fips;i&&""!==i[1]&&y([n,this.getAttribute("countyName")])})).on("click",(function(t,e){var n=e.fips;u([g(n),this.getAttribute("stateName")])})).style("fill-opacity",(function(t){var e=t.fips;return-1===i[0]||g(e)===i[0]?1:.2}))}),[i]),a.createElement(m,null,a.createElement(f,null,e),a.createElement(h,{ref:k,county:c[0],border:-1!==i[0]}))},w=n(6169),x=n(1877),v=r.ZP.div.withConfig({displayName:"mapView__Container",componentId:"sc-1ogju75-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;"]),b=r.ZP.hr.withConfig({displayName:"mapView__Divider",componentId:"sc-1ogju75-1"})(["width:98%;height:1px;background-color:black;border-radius:1px;margin:5px 10px;"]),E=r.ZP.div.withConfig({displayName:"mapView__TextContainer",componentId:"sc-1ogju75-2"})(["width:98%;display:flex;flex-wrap:wrap;justify-content:space-between;"]),C=r.ZP.div.withConfig({displayName:"mapView__MapControls",componentId:"sc-1ogju75-3"})(["display:flex;flex-wrap:wrap;"]),_=r.ZP.div.withConfig({displayName:"mapView__MapContainer",componentId:"sc-1ogju75-4"})(["display:flex;flex-direction:row;justify-content:center;width:100%;flex-wrap:wrap;@media (max-width:770px){flex-wrap:wrap;}"]),N=r.ZP.button.withConfig({displayName:"mapView__Button",componentId:"sc-1ogju75-5"})(["border-radius:10px;height:30px;width:60px;"]),S=r.ZP.div.withConfig({displayName:"mapView__Row",componentId:"sc-1ogju75-6"})(["display:flex;justify-content:center;width:100%;flex-wrap:wrap;"]),Z=r.ZP.p.withConfig({displayName:"mapView__Text",componentId:"sc-1ogju75-7"})(["margin:0;width:100%;"]),k=r.ZP.h3.withConfig({displayName:"mapView__Title",componentId:"sc-1ogju75-8"})(["margin:0;white-space:nowrap;"]),j=r.ZP.div.withConfig({displayName:"mapView__LegendContainer",componentId:"sc-1ogju75-9"})(["display:flex;width:100%;justify-content:space-around;@media (max-width:770px){justify-content:center;flex-wrap:wrap;}"]),I=r.ZP.div.withConfig({displayName:"mapView__Legend",componentId:"sc-1ogju75-10"})(["margin:10px 0;width:380px;display:flex;justify-content:center;align-itms:center;"]),P=r.ZP.div.withConfig({displayName:"mapView__Cards",componentId:"sc-1ogju75-11"})(["display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;"]);function A(t){var e=t.MapSettings,n=t.selectedCounty,r=t.setSelectedCounty,i=t.selectedState,p=t.setSelectedState,d=t.time,m=(t.setTime,(0,a.useContext)(w.z)),f=m.mapData,h=m.mapTitles,g=(0,a.useState)(Array(h.length)),A=g[0],M=g[1],T=(0,a.useState)(1),L=T[0],V=T[1],Y=function(t,e){var n,a=t[0],r=t[1];return void 0===e&&(e=!1),A.forEach((function(t){e||a===t.currId||-1===a?(t.reset(),V(1),n=!1):(V(t.select(a)),n=!0)})),n?(p([a,r]),!0):(p([-1,""]),!1)},R=function(t){var e=t[0],n=t[1];-1!==e&&Number(String(e).slice(0,-3))!==i[0]||r([e,n])},z=o.bEe(o.sY$).domain((0,l.Z)(d)),B=o.bEe(o.bc$).domain((0,l.Z)(d)),U=function(t){var e=t instanceof s.Z?t.count.apply(t,(0,l.Z)(d)):[t],n=t instanceof s.Z?t.n:d[1];return(30+Math.max.apply(Math,(0,l.Z)(e)))/n},q=(0,a.useRef)(null),F=100,H=370,D=[20,20];(0,a.useEffect)((function(){var t=Math.min(H,100+10*L)-2*D[0],e=Math.min(F,40+2*L),n=[{x:1,r:1},{x:2,r:5},{x:3,r:10},{x:4,r:20},{x:5,r:52}];o.Ys(q.current).selectAll("*").remove();var a=o.Ys(q.current).style("width",t+3.5*D[0]).style("height",e+2*D[1]).append("g").attr("transform","translate("+D[0]+",0)"),r=o.BYU().domain([1,n[n.length-1].x]).range([0,t]),i=o.BYU().domain([0,1]).range([e,0]);a.append("g").attr("transform","translate(0,"+(3*D[1]/2+5*L/2)+")").call(o.LLu(r).ticks(5).tickFormat((function(t){return String(n[t-1].r)}))),a.append("g").attr("transform","translate("+D[0]+",0)").call(o.y4O(i)).style("display","none"),a.selectAll("dot").remove().data(n).enter().append("circle").attr("class","point").attr("cx",(function(t){var e=t.x;return r(e)})).attr("cy",(function(){return i(.5)})).attr("r",(function(t){var e=t.r;return U(e)*L})).style("fill","black"),a.append("text").attr("text-anchor","end").attr("x",t/2+D[0]).attr("y",e+3*D[1]/2+L/4).text("Count")}),[d,L]);var O=(0,a.useRef)(null);return(0,a.useEffect)((function(){o.Ys(O.current).selectAll("*").remove();var t=o.Ys(O.current).style("width",H).style("height",F).append("g").attr("transform","translate("+(30+D[0])+",0)"),e=[1,5,10,15,20,25,30,40,46,52],n=(0,l.Z)(Array(2*e.length).keys()).map((function(t){return{x:t%e.length+1,w:e[t%e.length],c:t<e.length?1:2}})),a=o.BYU().domain([1,e.length]).range([0,H-2*D[0]-30]),r=o.BYU().domain([0,3]).range([F-2*D[1],0]);t.append("g").attr("transform","translate(0,"+(D[1]+500/12)+")").call(o.LLu(a).ticks(5).tickFormat((function(t){return String(n[t-1].w)}))),t.append("g").attr("transform","translate("+D[0]+",0)").call(o.y4O(r)).style("display","none"),t.selectAll("dot").remove().data(n).enter().append("circle").attr("class","point").attr("cx",(function(t){var e=t.x;return a(e)})).attr("cy",(function(t){var e=t.c;return r(e)})).attr("r",(function(){return 9})).style("fill",(function(t){var e=t.c,n=t.w;return 1===e?B(n):z(n)})),t.append("text").attr("text-anchor","end").attr("x",215).attr("y",95).text("Week Number"),t.append("text").attr("text-anchor","end").attr("x",-15).attr("y",45).text("Hot"),t.append("text").attr("text-anchor","end").attr("x",-15).attr("y",25).text("Cold")}),[d,L]),a.createElement(v,null,a.createElement(E,null,-1!==i[0]?a.createElement(C,null,a.createElement(k,null,"Selected State: ",i[1]),a.createElement(Z,null,"Highlight over a county to read its specific values.")):a.createElement(Z,null,"Click a state on the map to zoom in and see county specific information."),-1!==i[0]?a.createElement(N,{onClick:function(){Y([-1,""],!0)}},"Reset"):null),a.createElement(b,null),a.createElement(x.o,null,a.createElement(_,null,h.map((function(t,r){return a.createElement(y,{key:r,MapSettings:e,title:t,countiesMap:c,highlightedCounty:n,highlightedState:i,addState:function(t){return function(t,e){A[e]=t,M(A)}(t,r)},stateSelector:Y,countySelector:R,time:d,data:f?f[r]:null,colorScales:[B,z],getRadius:U})})))),a.createElement(S,null,n[1]?a.createElement(k,null,"Selected County: ",n[1]," County"):null),a.createElement(P,null,-1!==n[0]?[0,2,1,3].map((function(t){var e=!!f&&f[t].filter((function(t){return Number(t.fips)===Number(n[0])}))[0],r=e?e.count.apply(e,(0,l.Z)(d)):[0,0],i=r[0],o=r[1],c=e?e.recent.apply(e,(0,l.Z)(d)):[0,0],s=c[0],p=c[1];return a.createElement(u.Z,{key:t,title:h[t],hcount:i,ccount:o,hrecent:s,crecent:p})})):null),a.createElement(j,null,a.createElement(I,null,a.createElement("svg",{ref:O})),a.createElement(I,null,a.createElement("svg",{ref:q}))))}var M=n(2650),T=r.ZP.div.withConfig({displayName:"static__Container",componentId:"sc-1qlywrp-0"})(["width:100%;display:flex;align-items:center;flex-direction:column;"]),L=r.ZP.div.withConfig({displayName:"static__TextContainer",componentId:"sc-1qlywrp-1"})(["display:flex;flex-direction:column;justify-content:start;width:100%;& > h1{margin:5px 5px 0 5px;}"]),V=r.ZP.hr.withConfig({displayName:"static__Divider",componentId:"sc-1qlywrp-2"})(["width:98%;height:1px;background-color:black;border-radius:1px;margin:5px 10px;"]),Y=r.ZP.p.withConfig({displayName:"static__Text",componentId:"sc-1qlywrp-3"})(["margin:5px;"]),R=function(){var t={width:370,height:250,translate:[185,125],scale:500},e=(0,a.useState)([-1,""]),n=e[0],r=e[1],l=(0,a.useState)([-1,""]),o=l[0],c=l[1],s=(0,a.useState)([0,52]),u=s[0],p=s[1];return a.createElement(M.Z,{selectedPage:"Static"},a.createElement(T,null,a.createElement(L,null,a.createElement("h1",null,"Static Choropleth Maps"),a.createElement(Y,null,"This page provides a static representation of the"," ",a.createElement(i.rU,{to:"/animated"},"animated choropleth maps")," by using symbols to show the temporal aspects in a single view. Counties that were either a hot spot or cold spot at least once in 2020 have a circle over them. If the circle is colored blue then the county was a cold spot at some point in time and if it is color red it was a hot spot. The radius of the circle shows the number of times that county was a hot or cold spot in the given period. A circle with a larger radius indicates that it was a hot spot or cold spot more times in the year. A darker color shows the last time the county was a hot spot or cold spot was later in the year while a lighter color means the last time the county was a hot spot or cold spot was earlier in the year.")),a.createElement(V,null),a.createElement(A,{MapSettings:t,selectedCounty:n,setSelectedCounty:r,selectedState:o,setSelectedState:c,time:u,setTime:p}),a.createElement(V,null)))}}}]);
//# sourceMappingURL=component---src-pages-static-tsx-8fbfd1aff8dc52cfa1a0.js.map