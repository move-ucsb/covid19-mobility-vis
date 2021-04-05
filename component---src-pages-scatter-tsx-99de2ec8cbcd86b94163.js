(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[19],{194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7294),a=n(979),o=n(6690),i=a.ZP.div.withConfig({displayName:"scatterPlot__Container",componentId:"sc-4luvg1-0"})(["display:flex;flex-direction:column;align-items:center;margin:10px;"]),s=a.ZP.h3.withConfig({displayName:"scatterPlot__Title",componentId:"sc-4luvg1-1"})(["margin:0;"]),l=a.ZP.svg.withConfig({displayName:"scatterPlot__MapContainer",componentId:"sc-4luvg1-2"})(["height:330px;"]),p=function(e){return Number(String(e).slice(0,-3))};function c(e){var t=e.data,n=e.title,a=e.selectedState,c=380,d=[50,50],u=280,m=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=o.Ys(m.current),n=e.attr("width",c).attr("height",340).append("g").attr("scale",10).attr("transform","translate("+d[0]+", "+(d[1]-40)+")"),r=o.BYU().domain([0,52]).range([0,280]);n.append("g").attr("transform","translate(0,280)").call(o.LLu(r));var a=o.BYU().domain([0,52]).range([u,0]);n.append("g").call(o.y4O(a)),e.append("text").attr("text-anchor","end").attr("x",240).attr("y",325).text("Week Number"),e.append("text").attr("text-anchor","end").attr("x",-175).attr("y",10).attr("dy","0.75em").attr("transform","rotate(-90)").text("Count");var i=function(e){return Object.values(e.map((function(e){var t=e.count(),n=t[0],r=t[1];return{x:n>r?e.recent()[0]:e.recent()[1],y:n>r?n:r,hot:n>r,fips:e.fips}})).reduce((function(e,t){var n=t.x,r=t.y,a=t.fips,o=t.hot,i=n+","+r;return i in e?(e[i].fips.push(a),e[i].hot.push(o)):e[i]={x:n,y:r,fips:[a],hot:[o]},e}),{}))}(t),s=o.jvg().x((function(e){var t=e.x;return r(t)})).y((function(e){var t=e.y;return a(t)}));n.selectAll("myLines").data(t.map((function(e){var t=e.count(),n=t[0],r=t[1];return{data:n>r?e.sequential(1):e.sequential(2),hot:n>r,fips:e.fips}}))).enter().append("path").attr("class","seq").attr("stroke","none").attr("fill","none").attr("stroke-width",1.5).attr("stroke-opacity",.15).attr("d",(function(e){return s(e.data)})),n.selectAll("dot").data(i).enter().append("circle").attr("class","point").attr("cx",(function(e){var t=e.x;return r(t)})).attr("cy",(function(e){var t=e.y;return a(t)})).attr("r",2)}),[]),(0,r.useEffect)((function(){var e=o.sY$,t=o.bc$;o.Ys(m.current).selectAll(".point").style("fill-opacity",(function(e){var t=e.fips;return-1===a[0]||void 0!==t.find((function(e){return p(e)===a[0]}))?1:.1})).style("fill",(function(n){var r,o,i=n.hot,s=n.fips.map((function(e){return-1===a[0]||p(e)===a[0]})),l=(r=s,i.filter((function(e,t){return r[t]}))),c=(o=l.length?l:i).reduce((function(e,t){return e+t}))/o.length;return c>.5?t(c):e(1-c)})),o.Ys(m.current).selectAll(".seq").style("stroke",(function(e){var t=e.fips,n=e.hot;return p(t)===a[0]?n?"#FF0000":"#0000FF":"none"}))}),[a]),r.createElement(i,null,r.createElement(s,null,n),r.createElement(l,{ref:m}))}var d=n(6169),u=a.ZP.div.withConfig({displayName:"scatterView__Container",componentId:"sc-1j5pgsd-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;"]);function m(e){var t=e.selectedState,n=(0,r.useContext)(d.z),a=n.mapData,o=n.mapTitles;return r.createElement(u,null,o.map((function(e,n){return r.createElement(c,{key:n,title:e,selectedState:t,data:a?a[n]:null})})))}var y=n(2650),g=n(1329),f=n(4863),h=n(5743),P=a.ZP.div.withConfig({displayName:"stateSelection__Container",componentId:"sc-11880xa-0"})(["display:flex;flex-direction:column;align-items:center;margin:10px;"]),v=(a.ZP.h3.withConfig({displayName:"stateSelection__Title",componentId:"sc-11880xa-1"})(["margin:0;"]),a.ZP.svg.withConfig({displayName:"stateSelection__MapContainer",componentId:"sc-11880xa-2"})(["g{background-color:light-gray;fill:red;}border:1px solid black;"]));function w(e){var t=e.highlightedState,n=e.stateSelector,a=e.addState,i=[190,125],s=(0,r.useRef)(null),l=o.FWi().scale(500).translate(i),p=o.l49().projection(l);return(0,r.useEffect)((function(){var e=o.Ys(s.current).attr("width",380).attr("height",250).append("g");a(new f.Z(p,e,380,250,t[0])),e.append("g").style("stroke","black").style("stroke-width","0.5px").style("fill","#ffffffff").selectAll("path").data(g.zL(h,h.objects.states).features).enter().append("path").attr("d",p).attr("stateFips",(function(e){var t=e.id;return Number(t)})).attr("stateName",(function(e){return e.properties.name}))}),[]),(0,r.useEffect)((function(){o.Ys(s.current).selectAll("path").on("click",(function(){n([Number(this.getAttribute("stateFips")),this.getAttribute("stateName")])})).style("fill",(function(){return Number(this.getAttribute("stateFips"))===t[0]?"rgb(0,54,96)":"#ffffffff"}))}),[t]),r.createElement(P,null,r.createElement(v,{ref:s}))}var x=n(7329),C=JSON.parse('{"P1":{"$":{"x":[{"type":"MultiPolygon","arcs":[[[0]],[[1,2,3,4,5]]],"id":"01","properties":{"name":"Alabama"}},{"type":"MultiPolygon","arcs":[[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92]],[[93]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[114]],[[115]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141]],[[142]]],"id":"02","properties":{"name":"Alaska"}},{"type":"Polygon","arcs":[[143,144,145,146,147]],"id":"04","properties":{"name":"Arizona"}},{"type":"Polygon","arcs":[[148,149,150,151,152,153]],"id":"08","properties":{"name":"Colorado"}},{"type":"MultiPolygon","arcs":[[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[161]],[[162]],[[163,164,-4]]],"id":"12","properties":{"name":"Florida"}},{"type":"Polygon","arcs":[[165,166,167,168,-164,-3]],"id":"13","properties":{"name":"Georgia"}},{"type":"Polygon","arcs":[[169,170,171,172,173]],"id":"18","properties":{"name":"Indiana"}},{"type":"Polygon","arcs":[[174,175,176,-151]],"id":"20","properties":{"name":"Kansas"}},{"type":"MultiPolygon","arcs":[[[177]],[[178]],[[179]],[[180]],[[181]],[[182]],[[183]],[[184,185]]],"id":"23","properties":{"name":"Maine"}},{"type":"MultiPolygon","arcs":[[[186]],[[187]],[[188,189,190,191,192,193,194,195]]],"id":"25","properties":{"name":"Massachusetts"}},{"type":"Polygon","arcs":[[196,197,198,199,200]],"id":"27","properties":{"name":"Minnesota"}},{"type":"Polygon","arcs":[[201,202,203,204,205,206,207,208]],"id":"34","properties":{"name":"New Jersey"}},{"type":"MultiPolygon","arcs":[[[209]],[[210]],[[211,212,213,-167,214]]],"id":"37","properties":{"name":"North Carolina"}},{"type":"Polygon","arcs":[[215,-201,216,217]],"id":"38","properties":{"name":"North Dakota"}},{"type":"Polygon","arcs":[[-152,-177,218,219,220,221]],"id":"40","properties":{"name":"Oklahoma"}},{"type":"Polygon","arcs":[[222,223,-204,224,225,226,227]],"id":"42","properties":{"name":"Pennsylvania"}},{"type":"Polygon","arcs":[[228,-217,-200,229,230,231]],"id":"46","properties":{"name":"South Dakota"}},{"type":"Polygon","arcs":[[-221,232,233,234,235,236,237]],"id":"48","properties":{"name":"Texas"}},{"type":"Polygon","arcs":[[-232,238,-149,239,240,241]],"id":"56","properties":{"name":"Wyoming"}},{"type":"Polygon","arcs":[[-195,242,243,244]],"id":"09","properties":{"name":"Connecticut"}},{"type":"Polygon","arcs":[[245,246,247,248,249,250,251,-219,-176,252]],"id":"29","properties":{"name":"Missouri"}},{"type":"Polygon","arcs":[[253,-227,254,255,256]],"id":"54","properties":{"name":"West Virginia"}},{"type":"Polygon","arcs":[[257,258,259,-174,260,-247]],"id":"17","properties":{"name":"Illinois"}},{"type":"Polygon","arcs":[[-153,-222,-238,261,-147]],"id":"35","properties":{"name":"New Mexico"}},{"type":"Polygon","arcs":[[-252,262,263,264,-235,233,-233,-220]],"id":"05","properties":{"name":"Arkansas"}},{"type":"MultiPolygon","arcs":[[[265]],[[266]],[[267]],[[268]],[[269]],[[270]],[[271]],[[272]],[[273,274,275,-144,276]]],"id":"06","properties":{"name":"California"}},{"type":"MultiPolygon","arcs":[[[-209,277]],[[-225,-203,278,279]]],"id":"10","properties":{"name":"Delaware"}},{"type":"Polygon","arcs":[[280,281]],"id":"11","properties":{"name":"District of Columbia"}},{"type":"MultiPolygon","arcs":[[[282]],[[283]],[[284]],[[285]],[[286]],[[287]],[[288]],[[289]]],"id":"15","properties":{"name":"Hawaii"}},{"type":"Polygon","arcs":[[-199,290,-258,-246,291,-230]],"id":"19","properties":{"name":"Iowa"}},{"type":"MultiPolygon","arcs":[[[-261,-173,292,-257,293,294,-248]],[[295,-250]]],"id":"21","properties":{"name":"Kentucky"}},{"type":"MultiPolygon","arcs":[[[296,297]],[[298]],[[299]],[[-226,-280,300,301,302,303,-281,304,-255]]],"id":"24","properties":{"name":"Maryland"}},{"type":"MultiPolygon","arcs":[[[305]],[[306]],[[307]],[[308]],[[309]],[[310]],[[311]],[[312]],[[313]],[[314,315,-171]],[[316]],[[317,318,319,320,321,322]]],"id":"26","properties":{"name":"Michigan"}},{"type":"MultiPolygon","arcs":[[[323]],[[324]],[[325]],[[326]],[[-264,327,-6,328,329]]],"id":"28","properties":{"name":"Mississippi"}},{"type":"Polygon","arcs":[[330,-218,-229,-242,331]],"id":"30","properties":{"name":"Montana"}},{"type":"Polygon","arcs":[[332,-185,333,-190,334]],"id":"33","properties":{"name":"New Hampshire"}},{"type":"MultiPolygon","arcs":[[[335]],[[336]],[[337]],[[338,-207]],[[339]],[[340]],[[341,342,-196,-245,343,-205,-224]]],"id":"36","properties":{"name":"New York"}},{"type":"MultiPolygon","arcs":[[[344]],[[345]],[[-316,346,-228,-254,-293,-172]]],"id":"39","properties":{"name":"Ohio"}},{"type":"Polygon","arcs":[[347,348,349,274,-275,-274,350]],"id":"41","properties":{"name":"Oregon"}},{"type":"Polygon","arcs":[[-251,-296,-249,-295,351,-215,-166,-2,-328,-263]],"id":"47","properties":{"name":"Tennessee"}},{"type":"Polygon","arcs":[[352,-240,-154,-146,353]],"id":"49","properties":{"name":"Utah"}},{"type":"MultiPolygon","arcs":[[[354]],[[-302,355]],[[356,-297]],[[-256,-305,-282,-304,357,-212,-352,-294]]],"id":"51","properties":{"name":"Virginia"}},{"type":"MultiPolygon","arcs":[[[358]],[[359]],[[360]],[[361]],[[362]],[[363]],[[364]],[[365]],[[366]],[[367]],[[368,-348,369]]],"id":"53","properties":{"name":"Washington"}},{"type":"MultiPolygon","arcs":[[[370]],[[371]],[[372]],[[373]],[[374]],[[375]],[[376]],[[377]],[[378]],[[379]],[[380,-323,321,-321,319,-319,381,-259,-291,-198]]],"id":"55","properties":{"name":"Wisconsin"}},{"type":"MultiPolygon","arcs":[[[382]],[[383]],[[384]]],"id":"60","properties":{"name":"American Samoa"}},{"type":"MultiPolygon","arcs":[[[385]]],"id":"66","properties":{"name":"Guam"}},{"type":"MultiPolygon","arcs":[[[386]],[[387]],[[388]],[[389]],[[390]],[[391]],[[392]],[[393]]],"id":"69","properties":{"name":"Commonwealth of the Northern Mariana Islands"}},{"type":"Polygon","arcs":[[-231,-292,-253,-175,-150,-239]],"id":"31","properties":{"name":"Nebraska"}},{"type":"Polygon","arcs":[[-214,394,-168]],"id":"45","properties":{"name":"South Carolina"}},{"type":"MultiPolygon","arcs":[[[395]],[[396]],[[397]],[[398]],[[399]]],"id":"72","properties":{"name":"Puerto Rico"}},{"type":"MultiPolygon","arcs":[[[400]],[[401]],[[402]]],"id":"78","properties":{"name":"United States Virgin Islands"}},{"type":"Polygon","arcs":[[-369,403,-332,-241,-353,404,-349]],"id":"16","properties":{"name":"Idaho"}},{"type":"Polygon","arcs":[[-275,-350,-405,-354,-145,-276]],"id":"32","properties":{"name":"Nevada"}},{"type":"Polygon","arcs":[[405,-335,-189,-343]],"id":"50","properties":{"name":"Vermont"}},{"type":"MultiPolygon","arcs":[[[406]],[[407]],[[408]],[[409]],[[410]],[[411]],[[412]],[[-265,-330,413,-236]]],"id":"22","properties":{"name":"Louisiana"}},{"type":"MultiPolygon","arcs":[[[-192,414]],[[415]],[[416]],[[417]],[[-243,-194,418]]],"id":"44","properties":{"name":"Rhode Island"}}]}}}'),b=a.ZP.div.withConfig({displayName:"dropdown__DropDownContainer",componentId:"ggqled-0"})(["width:400px;padding:10px;"]),M=a.ZP.div.withConfig({displayName:"dropdown__ButtonContainer",componentId:"ggqled-1"})(["display:flex;justify-content:space-around;align-items:center;"]),E=a.ZP.button.withConfig({displayName:"dropdown__Button",componentId:"ggqled-2"})(["border-radius:10px;height:30px;width:60px;"]);function N(e){var t=e.stateSelector,n=e.selectedState,a=[].concat((0,x.Z)(C.P1.$.x.filter((function(e){var t=e.properties.name;return!["Alaska","Hawaii","Guam","Puerto Rico","American Samoa","United States Virgin Islands","Commonwealth of the Northern Mariana Islands","District of Columbia"].includes(t)}))),[{id:-1,properties:{name:"United States"}}]).sort((function(e,t){return-1===e.id?-1:-1===t.id?1:e.properties.name.localeCompare(t.properties.name)}));return r.createElement(b,null,r.createElement("p",null,"Select a state from the drop down or by clicking on the map."),r.createElement(M,null,r.createElement("div",null," ",r.createElement("label",{htmlFor:"states"},"Choose a State:"),"",r.createElement("select",{id:"states",onChange:function(e){var n=e.currentTarget.value,r=e.target.selectedOptions;t([Number(n),r[0].text])},value:n[0]},a.map((function(e){var t=e.id,n=e.properties.name;return r.createElement("option",{value:Number(t),key:t},n)})))),r.createElement(E,{onClick:function(){return t([-1,""])}},"Reset")),r.createElement("p",null,"Selecting a state will highlight that states' counties in the scatter plot below and show the cumulative trajectory over the year."))}var S=n(5444),_=a.ZP.div.withConfig({displayName:"scatter__Container",componentId:"sc-1854qe5-0"})(["width:100%;display:flex;align-items:center;flex-direction:column;"]),k=a.ZP.div.withConfig({displayName:"scatter__SelectionContainer",componentId:"sc-1854qe5-1"})(["display:flex;flex-wrap:wrap;justify-content:center;"]),I=a.ZP.div.withConfig({displayName:"scatter__TextContainer",componentId:"sc-1854qe5-2"})(["display:flex;flex-direction:column;justify-content:start;width:100%;& > h1{margin:5px 5px 0 5px;}"]),A=a.ZP.p.withConfig({displayName:"scatter__Text",componentId:"sc-1854qe5-3"})(["margin:5px;"]),Z=a.ZP.hr.withConfig({displayName:"scatter__Divider",componentId:"sc-1854qe5-4"})(["width:98%;height:1px;background-color:black;border-radius:1px;margin:5px 10px;"]);function j(){var e=(0,r.useState)([-1,""]),t=e[0],n=e[1],a=(0,r.useState)(Array(1)),o=a[0],i=a[1],s=function(e,t){var r=e[0],a=e[1];void 0===t&&(t=!1);var i=o[0];return t||r===i.currId||-1===r?(i.reset(),n([-1,""]),!1):(i.select(r),n([r,a]),!0)};return r.createElement(y.Z,{selectedPage:"Scatter"},r.createElement(_,null,r.createElement(I,null,r.createElement("h1",null,"Scatter Plots"),r.createElement(A,null,"This page provides an alternative view to"," ",r.createElement(S.rU,{to:"/static"},"the static choropleth plots page"),"."),r.createElement(A,null,"The scatter plots below show the number of times a county was a hot spot or cold spot vs the last week number it was a significant value. Each point on the scatter plot represents the counties at the specified count and week number. Since multiple counties can be at the same location, the point is color blue if the majority of the counties were cold spots and red if the majority were hot spots. A darker colored point shows a higher proportion of counties being hot or cold spots.")),r.createElement(Z,null),r.createElement(k,null,r.createElement(N,{stateSelector:s,selectedState:t}),r.createElement(w,{highlightedState:t,stateSelector:s,addState:function(e){o[0]=e,i(o)}})),r.createElement(Z,null),r.createElement(m,{selectedState:t}),r.createElement(Z,null),r.createElement(I,null,r.createElement(A,null))))}}}]);
//# sourceMappingURL=component---src-pages-scatter-tsx-99de2ec8cbcd86b94163.js.map