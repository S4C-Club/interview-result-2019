(window["webpackJsonpinterview-result-2019"]=window["webpackJsonpinterview-result-2019"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/loading.9b554eec.svg"},33:function(e,t,n){e.exports=n.p+"static/media/logo.3df3de97.png"},35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},41:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(30),r=n.n(c),i=n(5),s=n(12),o=(n(40),n(34)),h=(n(41),n(14)),u=n.n(h),m=n(7),b=n(8),g=n(10),d=n(9),p=n(11),v=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.searchValue,a=(e.searched,n.toLowerCase()),c=[];return t.length>0&&(c=t.filter(function(e){return Object.keys(e).some(function(t){if("name"===t||"email"===t||"number"===t)return e[t].toLowerCase().includes(a)})})),l.a.createElement("div",null,c.length>0?c.map(function(e){return l.a.createElement(i.b,{to:{pathname:"/result",state:{candidate:e}}},l.a.createElement("div",{className:"list-item",key:e.id},e.name," ","null"===e.email?"":e.email," -"," ",e.number))}):"")}}]),t}(a.Component),E=n(16),f=n.n(E),C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={isLoading:!1},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),setTimeout(function(){return e.setState({isLoading:!1})},3e3)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"letter"},l.a.createElement("div",{className:"letter-wrapper"},this.props.location.state.candidate.result?l.a.createElement("div",null,"M\u1eacT TH\u01af KH\u1ea8N",l.a.createElement("br",null),"Ch\xe0o b\u1ea1n,",l.a.createElement("br",null),"CLB Truy\u1ec1n th\xf4ng v\xe0 k\u1ef9 n\u0103ng m\u1ec1m S4C xin th\xf4ng b\xe1o \u0111\u1ebfn b\u1ea1n m\u1ed9t tin vui v\xe0 m\u1ed9t tin bu\u1ed3n.",l.a.createElement("br",null),"\u0110\u1ea7u ti\xean h\xe3y h\xedt m\u1ed9t h\u01a1i th\u1eadt s\xe2u v\xe0 h\xe9t l\xean th\u1eadt l\u1edbn khi \u0111\u1ecdc tin n\xe0y:",l.a.createElement("br",null),l.a.createElement("br",null),"CH\xdaC M\u1eeaNG B\u1ea0N \u0110\xc3 CH\xcdNH TH\u1ee8C TR\u1ede TH\xc0NH M\u1ed8T RED MAKER T\u1ea0I S4C",l.a.createElement("br",null),l.a.createElement("br",null)," Ti\u1ebfp \u0111\u1ebfn h\xe3y th\u1edf th\u1eadt \u0111\u1ec1u v\xec ch\xfang m\xecnh s\u1ebd th\xf4ng b\xe1o m\u1ed9t tin bu\u1ed3n l\xe0 kh\xf4ng c\xf3 tin vui th\u1ee9 hai.",l.a.createElement("br",null),l.a.createElement("br",null),"Vi\u1ec7c b\u1ea1n ch\xednh th\u1ee9c tr\u1edf th\xe0nh m\u1ed9t Red Maker \u0111\u1ed3ng ngh\u0129a v\u1edbi vi\u1ec7c b\u1ea1n s\u1ebd b\u01b0\u1edbc v\xe0o cu\u1ed9c h\xe0nh tr\xecnh vi\u1ebft n\xean b\u1ea3n nh\u1ea1c - Red Song c\u1ee7a ch\xednh m\xecnh t\u1ea1i V\xd2NG TRAINING c\u1ee7a S4C. Cu\u1ed9c phi\xeau l\u01b0u c\u1ee7a c\xe1c b\u1ea1n s\u1ebd b\u1eaft \u0111\u1ea7u:",l.a.createElement("br",null),"Th\u1eddi gian: 18h Th\u1ee9 3 ng\xe0y 17/9",l.a.createElement("br",null),"\u0110\u1ecba \u0111i\u1ec3m: Ph\xf2ng 602 Nh\xe0 A2",l.a.createElement("br",null),l.a.createElement("br",null),"M\u1ed9t l\u1ea7n n\u1eefa xin \u0111\u01b0\u1ee3c ch\xfac m\u1eebng b\u1ea1n v\xe0 h\u1eb9n g\u1eb7p l\u1ea1i b\u1ea1n v\xe0o bu\u1ed5i 1st meeting c\u1ee7a ch\xfang m\xecnh.",l.a.createElement("br",null),l.a.createElement("br",null),"Th\xe2n \xe1i,",l.a.createElement("br",null),"S4C"):this.props.location.state.candidate.result?l.a.createElement("img",{src:f.a}):l.a.createElement("div",null,"M\u1eacT TH\u01af KH\u1ea8N",l.a.createElement("br",null),"Ch\xe0o b\u1ea1n,",l.a.createElement("br",null),"CLB Truy\u1ec1n th\xf4ng v\xe0 K\u1ef9 n\u0103ng m\u1ec1m S4C xin th\xf4ng b\xe1o v\u1edbi b\u1ea1n m\u1ed9t tin quan tr\u1ecdng.",l.a.createElement("br",null),"\u0110\u1ea7u ti\xean h\xe3y h\xedt th\u1edf th\u1eadt s\xe2u v\xe0 b\xecnh t\u0129nh khi \u0111\u1ecdc th\xf4ng tin n\xe0y:",l.a.createElement("br",null),l.a.createElement("br",null),"CH\xdaNG M\xccNH R\u1ea4T TI\u1ebeC B\u1ea0N \u0110\xc3 KH\xd4NG V\u01af\u1ee2T QUA V\xd2NG PH\u1eceNG V\u1ea4N C\u1ee6A S4C",l.a.createElement("br",null),l.a.createElement("br",null),"Ch\xfang m\xecnh bi\u1ebft r\u1eb1ng b\u1ea1n l\xe0 m\u1ed9t nh\xe2n t\u1ed1 r\u1ea5t l\xe0 ti\u1ec1m n\u0103ng tuy nhi\xean c\xf3 l\u1ebd b\u1ea1n b\u1ea1n v\xe0 m\xecnh ch\u01b0a th\u1eadt s\u1ef1 c\xf3 duy\xean. Nh\u01b0ng ch\xfang m\xecnh tin r\u1eb1ng s\u1ebd c\xf3 nhi\u1ec1u c\u01a1 h\u1ed9i kh\xe1c s\u1ebd m\u1edf ra v\u1edbi b\u1ea1n, h\xe3y c\u1ed1 g\u1eafng ki\u1ebfm ti\u1ebfn v\u1ec1 ph\xeda tr\u01b0\u1edbc v\xe0 t\xecm ki\u1ebfm nh\u1eefng c\xe1nh c\u1eeda kh\xe1c d\xe0nh cho m\xecnh nh\xe9!",l.a.createElement("br",null),"M\u1ed9t l\u1ea7n n\u1eefa c\u1ea3m \u01a1n b\u1ea1n r\u1ea5t nhi\u1ec1u v\xec \u0111\xe3 d\u0169ng c\u1ea3m \u1ee9ng tuy\u1ec3n cho \u0111\u1ee3t tuy\u1ec3n th\xe0nh vi\xean th\u1ebf h\u1ec7 th\u1ee9 7 c\u1ee7a S4C.",l.a.createElement("br",null),"H\u1eb9n g\u1eb7p l\u1ea1i b\u1ea1n v\xe0o m\u1ed9t d\u1ecbp kh\xf4ng xa!",l.a.createElement("br",null),l.a.createElement("br",null),"Th\xe2n \xe1i,",l.a.createElement("br",null),"S4C"))))}}]),t}(l.a.Component),N=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={searchValue:"",searched:!1,isLoading:!1},n.handleChange=function(e){n.setState({searchValue:e.target.value,searched:!1})},n.onSubmit=function(e){n.setState({searched:!0,isLoading:!0}),setTimeout(function(){return n.setState({isLoading:!1})},3e3),e.preventDefault()},n.toggleSearch=function(e){n.setState({isLoading:e})},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return console.log(this.props.data),l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"\ud835\udc05\ud835\udc28\ud835\udc25\ud835\udc25\ud835\udc28\ud835\udc30 \ud835\udc2d\ud835\udc21\ud835\udc1e \ud835\udc11\ud835\udc04\ud835\udc03, \ud835\udc03\ud835\udc28 \ud835\udc32\ud835\udc28\ud835\udc2e\ud835\udc2b \ud835\udc01\ud835\udc1e\ud835\udc2c\ud835\udc2d!"),l.a.createElement("div",{className:"inner-form"},l.a.createElement("div",{className:"input-field"},l.a.createElement("div",{className:"choices"},l.a.createElement("div",{className:"choices__inner"},l.a.createElement("input",{value:this.searchValue,onChange:this.handleChange,className:"form-control choices__input",id:"choices-text-preset-values",type:"text",placeholder:"Nh\u1eadp t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ho\u1eb7c email.."}))),l.a.createElement("button",{className:"btn-search",type:"submit"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))))))),this.state.searched&&this.state.searchValue.length>0&&this.props.data&&!this.state.isLoading?l.a.createElement(v,{data:this.props.data,searchValue:this.state.searchValue}):this.state.isLoading?l.a.createElement("img",{src:f.a}):"")}}]),t}(l.a.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("legend",null,"B\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng t\u1edbi v\u1edbi k\u1ebft qu\u1ea3 \u0111\u1ee3t 2?"),l.a.createElement(i.c,{to:"/search",activeClassName:"active",className:"register-button"},"T\u1edbi lu\xf4n"))}}]),t}(l.a.Component),w=n(33),j=n.n(w);var O=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){u.a.get("https://spreadsheets.google.com/feeds/cells/1gyA4Frb9oZVNVc2ZKMCA7Cf-ybHVSicwe8Z8LHTOoCo/od6/public/values?alt=json").then(function(e){for(var t=e.data.feed.entry,n=[],a=5;a<=t.length-5;a+=5){var l="\u0110\u1eacU"===t[a+4].content.$t;n.push({id:t[a].content.$t,name:t[a+1].content.$t,email:t[a+2].content.$t,number:"0".concat(t[a+3].content.$t),result:l})}c(n)})},[]),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"s004"},l.a.createElement("div",null,l.a.createElement(i.b,{to:"/",className:"logo-link"},l.a.createElement("img",{src:j.a,alt:"logo",className:"logo"}))),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:y}),l.a.createElement(s.a,{path:"/search",component:function(){return l.a.createElement(N,{data:n})}}),l.a.createElement(s.a,{path:"/result",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(i.a,null,l.a.createElement(s.a,{path:"/",component:O})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.c1681bf4.chunk.js.map