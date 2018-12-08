(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),r=a.n(c),l=(a(74),a(11)),i=a(12),s=a(14),m=a(13),u=a(15),d=(a(76),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"title"},"Just Shoe Me")}}]),t}(n.Component)),p=(n.Component,a(126)),f=a(125),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderList",value:function(){return this.props.items.map(function(e){return o.a.createElement("div",{className:"product-container",key:e.name},o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{className:"image",src:e.image})),o.a.createElement("div",{className:"product-name"},e.name),o.a.createElement("div",{className:"product-occasion"},e.occasion),o.a.createElement("div",{className:"product-price"},"$",e.price))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"shoe-list"},this.renderList())}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onSearch=function(e){a.setState({search:e.target.value.toLowerCase()})},a.sortAscending=function(){a.props.items.sort(function(e,t){return e.price-t.price}),a.forceUpdate()},a.sortDescending=function(){a.props.items.sort(function(e,t){return t.price-e.price}),a.forceUpdate()},a.filterItem=function(e){return"All"===a.state.occasion&&"All"===a.state.material?-1!==e.name.toLowerCase().search(a.state.search):"All"===a.state.material?e.occasion===a.state.occasion&&-1!==e.name.toLowerCase().search(a.state.search):"All"===a.state.occasion?e.material===a.state.material&&-1!==e.name.toLowerCase().search(a.state.search):e.occasion===a.state.occasion&&e.material===a.state.material&&-1!==e.name.toLowerCase().search(a.state.search)},a.setFilterOccasionActive=function(){document.getElementById("occasionDropdown").style.backgroundColor="#888",document.getElementById("occasionDropdown").style.color="#fff"},a.setFilterOccasionInactive=function(){"All"==a.state.occasion?(document.getElementById("occasionDropdown").style.backgroundColor="#fff",document.getElementById("occasionDropdown").style.color="#333"):(document.getElementById("occasionDropdown").style.backgroundColor="#888",document.getElementById("occasionDropdown").style.color="#fff")},a.filterOccasion=function(e,t){console.log(e),a.setState({occasion:e}),"All"==e?(a.setState({occasionBtnTitle:"Occasion"}),document.getElementById("occasionDropdown").style.backgroundColor="#fff",document.getElementById("occasionDropdown").style.color="#333"):(a.setState({occasionBtnTitle:e}),document.getElementById("occasionDropdown").style.backgroundColor="#888",document.getElementById("occasionDropdown").style.color="#fff")},a.setFilterMaterialActive=function(){document.getElementById("materialDropdown").style.backgroundColor="#888",document.getElementById("materialDropdown").style.color="#fff"},a.setFilterMaterialInactive=function(){"All"==a.state.material?(document.getElementById("materialDropdown").style.backgroundColor="#fff",document.getElementById("materialDropdown").style.color="#333"):(document.getElementById("materialDropdown").style.backgroundColor="#888",document.getElementById("materialDropdown").style.color="#fff")},a.filterMaterial=function(e,t){console.log(e),a.setState({material:e}),"All"==e?(a.setState({materialBtnTitle:"Material"}),document.getElementById("materialDropdown").style.backgroundColor="#fff",document.getElementById("materialDropdown").style.color="#333"):(a.setState({materialBtnTitle:e}),document.getElementById("materialDropdown").style.backgroundColor="#888",document.getElementById("materialDropdown").style.color="#fff")},a.resetFilters=function(e,t){a.setState({occasion:"All"}),a.setState({occasionBtnTitle:"Occasion"}),document.getElementById("occasionDropdown").style.backgroundColor="#fff",document.getElementById("occasionDropdown").style.color="#333",a.setState({material:"All"}),a.setState({materialBtnTitle:"Material"}),document.getElementById("materialDropdown").style.backgroundColor="#fff",document.getElementById("materialDropdown").style.color="#333",console.log(a.state.occasion),console.log(a.state.material)},a.state={search:"",occasion:"All",occasionBtnTitle:"Occasion",material:"All",materialBtnTitle:"Material"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.sortAscending()}},{key:"render",value:function(){return o.a.createElement("div",{className:"filter-list"},o.a.createElement("div",{className:"search-container"},o.a.createElement("input",{className:"search",type:"text",placeholder:"Search",onChange:this.onSearch})),o.a.createElement("div",{className:"filter-container"},o.a.createElement("div",null,o.a.createElement(p.a,{className:"filter",id:"occasionDropdown",title:this.state.occasionBtnTitle,onMouseEnter:this.setFilterOccasionActive,onMouseLeave:this.setFilterOccasionInactive},o.a.createElement(f.a,{eventKey:"All",onSelect:this.filterOccasion},"All"),o.a.createElement(f.a,{eventKey:"Casual",onSelect:this.filterOccasion},"Casual"),o.a.createElement(f.a,{eventKey:"Sport Casual",onSelect:this.filterOccasion},"Sport Casual"),o.a.createElement(f.a,{eventKey:"Business Casual",onSelect:this.filterOccasion},"Business Casual"),o.a.createElement(f.a,{eventKey:"Dress",onSelect:this.filterOccasion},"Dress")),o.a.createElement(p.a,{className:"filter",id:"materialDropdown",title:this.state.materialBtnTitle,onMouseEnter:this.setFilterMaterialActive,onMouseLeave:this.setFilterMaterialInactive},o.a.createElement(f.a,{eventKey:"All",onSelect:this.filterMaterial},"All"),o.a.createElement(f.a,{eventKey:"Canvas",onSelect:this.filterMaterial},"Canvas"),o.a.createElement(f.a,{eventKey:"Leather",onSelect:this.filterMaterial},"Leather"),o.a.createElement(f.a,{eventKey:"Suede",onSelect:this.filterMaterial},"Suede"),o.a.createElement(f.a,{eventKey:"Velvet",onSelect:this.filterMaterial},"Velvet")),o.a.createElement("button",{className:"filter reset",onClick:this.resetFilters},"Reset Filters")),o.a.createElement("div",{className:"sort-container"},o.a.createElement(p.a,{className:"sort filter",id:"sortDropdown",title:"Sort"},o.a.createElement(f.a,{eventKey:"Ascending",onSelect:this.sortAscending},"Price, Low to High"),o.a.createElement(f.a,{eventKey:"Descending",onSelect:this.sortDescending},"Price, High to Low")))),o.a.createElement(g,{items:this.props.items.filter(this.filterItem)}))}}]),t}(n.Component),y=[{name:"Bean Boot",occasion:"Casual",material:"Canvas",image:"/beanboot.jpeg",price:149},{name:"Vans",occasion:"Casual",material:"Canvas",image:"/vans.jpeg",price:65},{name:"Jack Purcell",occasion:"Casual",material:"Leather",image:"/jackpurcell.jpeg",price:40},{name:"Boat Shoe",occasion:"Casual",material:"Leather",image:"/boatshoe.jpeg",price:95},{name:"Penny Loafer",occasion:"Sport Casual",material:"Leather",image:"/pennyloafer.jpeg",price:402},{name:"Chelsea Boot",occasion:"Sport Casual",material:"Leather",image:"/chelseaboot.jpeg",price:314},{name:"Tassel Loafer",occasion:"Business Casual",material:"Leather",image:"/tasselloafer.jpeg",price:425},{name:"Double Monk",occasion:"Business Casual",material:"Leather",image:"/monk.jpeg",price:282},{name:"Jodphur Boot",occasion:"Business Casual",material:"Suede",image:"/jodphurboot.jpeg",price:627},{name:"Wingtip Brogue",occasion:"Business Casual",material:"Leather",image:"/wingtip.jpeg",price:140},{name:"Wholecut Oxford",occasion:"Dress",material:"Leather",image:"/oxford.jpeg",price:80},{name:"Slipper",occasion:"Dress",material:"Velvet",image:"/slipper.jpeg",price:84}],E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement(h,{items:y}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a(123)},74:function(e,t,a){},76:function(e,t,a){}},[[69,2,1]]]);
//# sourceMappingURL=main.ce71bc91.chunk.js.map