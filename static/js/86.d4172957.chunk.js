(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1043:function(e,t,a){"use strict";var n=a(56),r=a.n(n),c="[E-COMMERCE APP] GET PRODUCTS",i="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function l(){var e=r.a.get("/api/e-commerce-app/products");return function(t){return e.then(function(e){return t({type:c,payload:e.data})})}}function o(e){return{type:i,searchText:e.target.value}}var u=a(11),d=a(34),s="[E-COMMERCE APP] GET PRODUCT",m="[E-COMMERCE APP] SAVE PRODUCT";function p(e){var t=r.a.get("/api/e-commerce-app/product",{params:e});return function(e){return t.then(function(t){return e({type:s,payload:t.data})})}}function f(e){var t=r.a.post("/api/e-commerce-app/product/save",e);return function(e){return t.then(function(t){return e(Object(d.H)({message:"Product Saved"})),e({type:m,payload:t.data})})}}function h(){var e={id:u.z.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:s,payload:e}}var g="[E-COMMERCE APP] GET ORDERS",E="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function b(){var e=r.a.get("/api/e-commerce-app/orders");return function(t){return e.then(function(e){return t({type:g,payload:e.data})})}}function v(e){return{type:E,searchText:e.target.value}}var x="[E-COMMERCE APP] GET ORDER",O="[E-COMMERCE APP] SAVE ORDER";function w(e){var t=r.a.get("/api/e-commerce-app/order",{params:e});return function(e){return t.then(function(t){return e({type:x,payload:t.data})})}}a.d(t,"d",function(){return c}),a.d(t,"h",function(){return i}),a.d(t,"l",function(){return l}),a.d(t,"p",function(){return o}),a.d(t,"c",function(){return s}),a.d(t,"f",function(){return m}),a.d(t,"k",function(){return p}),a.d(t,"n",function(){return f}),a.d(t,"m",function(){return h}),a.d(t,"b",function(){return g}),a.d(t,"g",function(){return E}),a.d(t,"j",function(){return b}),a.d(t,"o",function(){return v}),a.d(t,"a",function(){return x}),a.d(t,"e",function(){return O}),a.d(t,"i",function(){return w})},1156:function(e,t,a){"use strict";var n=a(51),r=a(8),c=a(1043),i={data:[],searchText:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.d:return Object(r.a)({},e,{data:t.payload});case c.h:return Object(r.a)({},e,{searchText:t.searchText});default:return e}},o={data:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:case c.f:return Object(r.a)({},e,{data:t.payload});default:return e}},d={data:[],searchText:""},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:return Object(r.a)({},e,{data:t.payload});case c.g:return Object(r.a)({},e,{searchText:t.searchText});default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:case c.e:return Object(r.a)({},t.payload);default:return e}},p=Object(n.d)({products:l,product:u,orders:s,order:m});t.a=p},2220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a(329),l=a(17),o=a(1099),u=a(1103),d=a(1101),s=a(1102),m=a(1014),p=a(990),f=a(1225),h=a(76),g=a(3),E=a(5),b=a(1100),v=a(508),x=a(338),O=a(511),w=a(991),y=a(1002),P=a(992),C=a(1003),j=a(1224),N=a(1028),S=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Category",sort:!0},{id:"priceTaxIncl",align:"right",disablePadding:!1,label:"Price",sort:!0},{id:"quantity",align:"right",disablePadding:!1,label:"Quantity",sort:!0},{id:"active",align:"right",disablePadding:!1,label:"Active",sort:!0}],T=Object(N.a)(function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}});var k=function(e){var t=T(e),a=Object(n.useState)(null),c=Object(l.a)(a,2),i=c[0],o=c[1];function u(){o(null)}return r.a.createElement(b.a,null,r.a.createElement(d.a,{className:"h-64"},r.a.createElement(s.a,{padding:"checkbox",className:"relative pl-4 sm:pl-12"},r.a.createElement(m.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&r.a.createElement("div",{className:Object(g.a)("flex items-center justify-center absolute w-64 top-0 left-0 ml-68 h-64 z-10",t.actionsButtonWrapper)},r.a.createElement(v.a,{"aria-owns":i?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(p.a,null,"more_horiz")),r.a.createElement(x.a,{id:"selectedProductsMenu",anchorEl:i,open:Boolean(i),onClose:u},r.a.createElement(O.a,null,r.a.createElement(w.a,{onClick:function(){u()}},r.a.createElement(y.a,{className:"min-w-40"},r.a.createElement(p.a,null,"delete")),r.a.createElement(P.a,{primary:"Remove"})))))),S.map(function(t){return r.a.createElement(s.a,{key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction},t.sort&&r.a.createElement(C.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(j.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)})},t.label)));var a},this)))},R=a(1043),A=a(7);var M=Object(h.h)(function(e){var t=Object(A.b)(),a=Object(A.c)(function(e){return e.eCommerceApp.products.data}),i=Object(A.c)(function(e){return e.eCommerceApp.products.searchText}),h=Object(n.useState)([]),b=Object(l.a)(h,2),v=b[0],x=b[1],O=Object(n.useState)(a),w=Object(l.a)(O,2),y=w[0],P=w[1],C=Object(n.useState)(0),j=Object(l.a)(C,2),N=j[0],S=j[1],T=Object(n.useState)(10),M=Object(l.a)(T,2),I=M[0],D=M[1],q=Object(n.useState)({direction:"asc",id:null}),B=Object(l.a)(q,2),U=B[0],G=B[1];return Object(n.useEffect)(function(){t(R.l())},[t]),Object(n.useEffect)(function(){P(0===i.length?a:E.a.filter(a,function(e){return e.name.toLowerCase().includes(i.toLowerCase())}))},[a,i]),r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(c.t,{className:"flex-grow overflow-x-auto"},r.a.createElement(o.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},r.a.createElement(k,{numSelected:v.length,order:U,onSelectAllClick:function(e){e.target.checked?x(y.map(function(e){return e.id})):x([])},onRequestSort:function(e,t){var a=t,n="desc";U.id===t&&"desc"===U.direction&&(n="asc"),G({direction:n,id:a})},rowCount:y.length}),r.a.createElement(u.a,null,E.a.orderBy(y,[function(e){switch(U.id){case"categories":return e.categories[0];default:return e[U.id]}}],[U.direction]).slice(N*I,N*I+I).map(function(t){var a=-1!==v.indexOf(t.id);return r.a.createElement(d.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a,onClick:function(a){return n=t,void e.history.push("/apps/e-commerce/products/"+n.id+"/"+n.handle);var n}},r.a.createElement(s.a,{className:"w-48 px-4 sm:px-12",padding:"checkbox"},r.a.createElement(m.a,{checked:a,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=v.indexOf(t),n=[];-1===a?n=n.concat(v,t):0===a?n=n.concat(v.slice(1)):a===v.length-1?n=n.concat(v.slice(0,-1)):a>0&&(n=n.concat(v.slice(0,a),v.slice(a+1))),x(n)}(0,t.id)}})),r.a.createElement(s.a,{className:"w-52",component:"th",scope:"row",padding:"none"},t.images.length>0&&t.featuredImageId?r.a.createElement("img",{className:"w-full block rounded",src:E.a.find(t.images,{id:t.featuredImageId}).url,alt:t.name}):r.a.createElement("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})),r.a.createElement(s.a,{component:"th",scope:"row"},t.name),r.a.createElement(s.a,{className:"truncate",component:"th",scope:"row"},t.categories.join(", ")),r.a.createElement(s.a,{component:"th",scope:"row",align:"right"},r.a.createElement("span",null,"$"),t.priceTaxIncl),r.a.createElement(s.a,{component:"th",scope:"row",align:"right"},t.quantity,r.a.createElement("i",{className:Object(g.a)("inline-block w-8 h-8 rounded ml-8",t.quantity<=5&&"bg-red",t.quantity>5&&t.quantity<=25&&"bg-orange",t.quantity>25&&"bg-green")})),r.a.createElement(s.a,{component:"th",scope:"row",align:"right"},t.active?r.a.createElement(p.a,{className:"text-green text-20"},"check_circle"):r.a.createElement(p.a,{className:"text-red text-20"},"remove_circle")))})))),r.a.createElement(f.a,{component:"div",count:y.length,rowsPerPage:I,page:N,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){D(e.target.value)}}))}),I=a(123),D=a(150),q=a(343),B=a(1008),U=a(1027),G=a(31);var _=function(e){var t=Object(A.b)(),a=Object(A.c)(function(e){return e.eCommerceApp.products.searchText}),n=Object(A.c)(function(e){return e.fuse.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.d,{animation:"transition.expandIn",delay:300},r.a.createElement(p.a,{className:"text-32 mr-0 sm:mr-12"},"shopping_basket")),r.a.createElement(c.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(I.a,{className:"hidden sm:flex",variant:"h6"},"Products"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(U.a,{theme:n},r.a.createElement(c.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(D.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(p.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(q.a,{placeholder:"Search",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(R.p(e))}}))))),r.a.createElement(c.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(B.a,{component:G.a,to:"/apps/e-commerce/products/new",className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Add New Product"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},z=a(1156);t.default=Object(i.a)("eCommerceApp",z.a)(function(){return r.a.createElement(c.r,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(_,null),content:r.a.createElement(M,null),innerScroll:!0})})}}]);