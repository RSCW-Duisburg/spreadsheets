define((function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="../dist/",r(r.s=80)}([function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(50))},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(8),i=r(9),o=r(16);t.exports=n?function(t,e,r){return i.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(0),i=r(34),o=r(3),a=r(35),s=r(39),u=r(63),c=i("wks"),l=n.Symbol,p=u?l:l&&l.withoutSetter||a;t.exports=function(t){return o(c,t)||(s&&o(l,t)?c[t]=l[t]:c[t]=p("Symbol."+t)),c[t]}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(2);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(8),i=r(29),o=r(1),a=r(28),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(o(t),e=a(e,!0),o(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(52),i=r(6);t.exports=function(t){return n(i(t))}},function(t,e,r){var n=r(0),i=r(4),o=r(3),a=r(18),s=r(31),u=r(33),c=u.get,l=u.enforce,p=String(String).split("String");(t.exports=function(t,e,r,s){var u=!!s&&!!s.unsafe,c=!!s&&!!s.enumerable,f=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof e||o(r,"name")||i(r,"name",e),l(r).source=p.join("string"==typeof e?e:"")),t!==n?(u?!f&&t[e]&&(c=!0):delete t[e],c?t[e]=r:i(t,e,r)):c?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},function(t,e,r){var n=r(13),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";var n,i,o=r(38),a=r(62),s=RegExp.prototype.exec,u=String.prototype.replace,c=s,l=(n=/a/,i=/b*/g,s.call(n,"a"),s.call(i,"a"),0!==n.lastIndex||0!==i.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(l||f||p)&&(c=function(t){var e,r,n,i,a=this,c=p&&a.sticky,d=o.call(a),h=a.source,v=0,g=t;return c&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),r=new RegExp("^(?:"+h+")",d)),f&&(r=new RegExp("^"+h+"$(?!\\s)",d)),l&&(e=a.lastIndex),n=s.call(c?r:a,g),c?n?(n.input=n.input.slice(v),n[0]=n[0].slice(v),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:l&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),f&&n&&n.length>1&&u.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),t.exports=c},function(t,e,r){"use strict";r(49);var n=r(11),i=r(2),o=r(5),a=r(14),s=r(4),u=o("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var d=o(t),h=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!h||!v||"replace"===t&&(!c||!l)||"split"===t&&!p){var g=/./[d],y=r(d,""[t],(function(t,e,r,n,i){return e.exec===a?h&&!i?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l}),x=y[0],b=y[1];n(String.prototype,t,x),n(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&s(RegExp.prototype[d],"sham",!0)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(0),i=r(4);t.exports=function(t,e){try{i(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(34),i=r(35),o=n("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){"use strict";var n=r(64).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},function(t,e,r){var n=r(17),i=r(14);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var o=r.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e){t.exports={}},function(t,e,r){var n=r(0),i=r(27).f,o=r(4),a=r(11),s=r(18),u=r(54),c=r(61);t.exports=function(t,e){var r,l,p,f,d,h=t.target,v=t.global,g=t.stat;if(r=v?n:g?n[h]||s(h,{}):(n[h]||{}).prototype)for(l in e){if(f=e[l],p=t.noTargetGet?(d=i(r,l))&&d.value:r[l],!c(v?l:h+(g?".":"#")+l,t.forced)&&void 0!==p){if(typeof f==typeof p)continue;u(f,p)}(t.sham||p&&p.sham)&&o(f,"sham",!0),a(r,l,f,t)}}},function(t,e,r){var n=r(8),i=r(51),o=r(16),a=r(10),s=r(28),u=r(3),c=r(29),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=s(e,!0),c)try{return l(t,e)}catch(t){}if(u(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e,r){var n=r(7);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(8),i=r(2),o=r(30);t.exports=!n&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(0),i=r(7),o=n.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,r){var n=r(32),i=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return i.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(0),i=r(18),o=n["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,r){var n,i,o,a=r(53),s=r(0),u=r(7),c=r(4),l=r(3),p=r(19),f=r(21),d=s.WeakMap;if(a){var h=new d,v=h.get,g=h.has,y=h.set;n=function(t,e){return y.call(h,t,e),e},i=function(t){return v.call(h,t)||{}},o=function(t){return g.call(h,t)}}else{var x=p("state");f[x]=!0,n=function(t,e){return c(t,x,e),e},i=function(t){return l(t,x)?t[x]:{}},o=function(t){return l(t,x)}}t.exports={set:n,get:i,has:o,enforce:function(t){return o(t)?i(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(20),i=r(32);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.2",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(56),i=r(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(n[t])||o(i[t]):n[t]&&n[t][e]||i[t]&&i[t][e]}},function(t,e,r){var n=r(3),i=r(10),o=r(58).indexOf,a=r(21);t.exports=function(t,e){var r,s=i(t),u=0,c=[];for(r in s)!n(a,r)&&n(s,r)&&c.push(r);for(;e.length>u;)n(s,r=e[u++])&&(~o(c,r)||c.push(r));return c}},function(t,e,r){"use strict";var n=r(1);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){var n=r(2);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){"use strict";var n=r(15),i=r(1),o=r(41),a=r(12),s=r(13),u=r(6),c=r(23),l=r(24),p=Math.max,f=Math.min,d=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;n("replace",2,(function(t,e,r,n){return[function(r,n){var i=u(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,o){if(n.REPLACE_KEEPS_$0||"string"==typeof o&&-1===o.indexOf("$0")){var u=r(e,t,this,o);if(u.done)return u.value}var d=i(t),h=String(this),v="function"==typeof o;v||(o=String(o));var y=d.global;if(y){var x=d.unicode;d.lastIndex=0}for(var b=[];;){var S=l(d,h);if(null===S)break;if(b.push(S),!y)break;""===String(S[0])&&(d.lastIndex=c(h,a(d.lastIndex),x))}for(var m,w="",E=0,O=0;O<b.length;O++){S=b[O];for(var I=String(S[0]),T=p(f(s(S.index),h.length),0),j=[],A=1;A<S.length;A++)j.push(void 0===(m=S[A])?m:String(m));var L=S.groups;if(v){var P=[I].concat(j,T,h);void 0!==L&&P.push(L);var R=String(o.apply(void 0,P))}else R=g(I,h,T,j,L,o);T>=E&&(w+=h.slice(E,T)+R,E=T+I.length)}return w+h.slice(E)}];function g(t,r,n,i,a,s){var u=n+t.length,c=i.length,l=v;return void 0!==a&&(a=o(a),l=h),e.call(s,l,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":s=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>c){var p=d(l/10);return 0===p?e:p<=c?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}s=i[l-1]}return void 0===s?"":s}))}}))},function(t,e,r){var n=r(6);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n=r(15),i=r(65),o=r(1),a=r(6),s=r(66),u=r(23),c=r(12),l=r(24),p=r(14),f=r(2),d=[].push,h=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),o=void 0===r?4294967295:r>>>0;if(0===o)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,o);for(var s,u,c,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,f+"g");(s=p.call(v,n))&&!((u=v.lastIndex)>h&&(l.push(n.slice(h,s.index)),s.length>1&&s.index<n.length&&d.apply(l,s.slice(1)),c=s[0].length,h=u,l.length>=o));)v.lastIndex===s.index&&v.lastIndex++;return h===n.length?!c&&v.test("")||l.push(""):l.push(n.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,r):n.call(String(i),e,r)},function(t,i){var a=r(n,t,this,i,n!==e);if(a.done)return a.value;var p=o(t),f=String(this),d=s(p,RegExp),g=p.unicode,y=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),x=new d(v?p:"^(?:"+p.source+")",y),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===f.length)return null===l(x,f)?[f]:[];for(var S=0,m=0,w=[];m<f.length;){x.lastIndex=v?m:0;var E,O=l(x,v?f:f.slice(m));if(null===O||(E=h(c(x.lastIndex+(v?0:m)),f.length))===S)m=u(f,m,g);else{if(w.push(f.slice(S,m)),w.length===b)return w;for(var I=1;I<=O.length-1;I++)if(w.push(O[I]),w.length===b)return w;m=S=E}}return w.push(f.slice(S)),w}]}),!v)},function(t,e,r){var n=r(0),i=r(68),o=r(69),a=r(4),s=r(5),u=s("iterator"),c=s("toStringTag"),l=o.values;for(var p in i){var f=n[p],d=f&&f.prototype;if(d){if(d[u]!==l)try{a(d,u,l)}catch(t){d[u]=l}if(d[c]||a(d,c,p),i[p])for(var h in o)if(d[h]!==o[h])try{a(d,h,o[h])}catch(t){d[h]=o[h]}}}},function(t,e,r){var n,i=r(1),o=r(71),a=r(22),s=r(21),u=r(73),c=r(30),l=r(19),p=l("IE_PROTO"),f=function(){},d=function(t){return"<script>"+t+"<\/script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;h=n?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=c("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete h.prototype[a[r]];return h()};s[p]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(f.prototype=i(t),r=new f,f.prototype=null,r[p]=t):r=h(),void 0===e?r:o(r,e)}},function(t,e,r){"use strict";var n,i,o,a=r(46),s=r(4),u=r(3),c=r(5),l=r(20),p=c("iterator"),f=!1;[].keys&&("next"in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(n=i):f=!0),null==n&&(n={}),l||u(n,p)||s(n,p,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:f}},function(t,e,r){var n=r(3),i=r(41),o=r(19),a=r(76),s=o("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=i(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,r){var n=r(9).f,i=r(3),o=r(5)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(15),i=r(1),o=r(12),a=r(6),s=r(23),u=r(24);n("match",1,(function(t,e,r){return[function(e){var r=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=i(t),c=String(this);if(!a.global)return u(a,c);var l=a.unicode;a.lastIndex=0;for(var p,f=[],d=0;null!==(p=u(a,c));){var h=String(p[0]);f[d]=h,""===h&&(a.lastIndex=s(c,o(a.lastIndex),l)),d++}return 0===d?null:f}]}))},function(t,e,r){"use strict";var n=r(26),i=r(14);n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!n.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(2),i=r(17),o="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e,r){var n=r(0),i=r(31),o=n.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},function(t,e,r){var n=r(3),i=r(55),o=r(27),a=r(9);t.exports=function(t,e){for(var r=i(e),s=a.f,u=o.f,c=0;c<r.length;c++){var l=r[c];n(t,l)||s(t,l,u(e,l))}}},function(t,e,r){var n=r(36),i=r(57),o=r(60),a=r(1);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=o.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(0);t.exports=n},function(t,e,r){var n=r(37),i=r(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},function(t,e,r){var n=r(10),i=r(12),o=r(59),a=function(t){return function(e,r,a){var s,u=n(e),c=i(u.length),l=o(a,c);if(t&&r!=r){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,r){var n=r(13),i=Math.max,o=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):o(r,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(2),i=/#|\.prototype\./,o=function(t,e){var r=s[a(t)];return r==c||r!=u&&("function"==typeof e?n(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=o.data={},u=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},function(t,e,r){"use strict";var n=r(2);function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,r){var n=r(39);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(13),i=r(6),o=function(t){return function(e,r){var o,a,s=String(i(e)),u=n(r),c=s.length;return u<0||u>=c?t?"":void 0:(o=s.charCodeAt(u))<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e,r){var n=r(7),i=r(17),o=r(5)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,r){var n=r(1),i=r(67),o=r(5)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[o])?e:i(r)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){"use strict";var n=r(10),i=r(70),o=r(25),a=r(33),s=r(74),u=a.set,c=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=c(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,r){var n=r(5),i=r(44),o=r(9),a=n("unscopables"),s=Array.prototype;null==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),t.exports=function(t){s[a][t]=!0}},function(t,e,r){var n=r(8),i=r(9),o=r(1),a=r(72);t.exports=n?Object.defineProperties:function(t,e){o(t);for(var r,n=a(e),s=n.length,u=0;s>u;)i.f(t,r=n[u++],e[r]);return t}},function(t,e,r){var n=r(37),i=r(22);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){var n=r(36);t.exports=n("document","documentElement")},function(t,e,r){"use strict";var n=r(26),i=r(75),o=r(46),a=r(77),s=r(47),u=r(4),c=r(11),l=r(5),p=r(20),f=r(25),d=r(45),h=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=l("iterator"),y=function(){return this};t.exports=function(t,e,r,l,d,x,b){i(r,e,l);var S,m,w,E=function(t){if(t===d&&A)return A;if(!v&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},O=e+" Iterator",I=!1,T=t.prototype,j=T[g]||T["@@iterator"]||d&&T[d],A=!v&&j||E(d),L="Array"==e&&T.entries||j;if(L&&(S=o(L.call(new t)),h!==Object.prototype&&S.next&&(p||o(S)===h||(a?a(S,h):"function"!=typeof S[g]&&u(S,g,y)),s(S,O,!0,!0),p&&(f[O]=y))),"values"==d&&j&&"values"!==j.name&&(I=!0,A=function(){return j.call(this)}),p&&!b||T[g]===A||u(T,g,A),f[e]=A,d)if(m={values:E("values"),keys:x?A:E("keys"),entries:E("entries")},b)for(w in m)!v&&!I&&w in T||c(T,w,m[w]);else n({target:e,proto:!0,forced:v||I},m);return m}},function(t,e,r){"use strict";var n=r(45).IteratorPrototype,i=r(44),o=r(16),a=r(47),s=r(25),u=function(){return this};t.exports=function(t,e,r){var c=e+" Iterator";return t.prototype=i(n,{next:o(1,r)}),a(t,c,!1,!0),s[c]=u,t}},function(t,e,r){var n=r(2);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(1),i=r(78);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,o){return n(r),i(o),e?t.call(r,o):r.__proto__=o,r}}():void 0)},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){"use strict";var n=r(11),i=r(1),o=r(2),a=r(38),s=RegExp.prototype,u=s.toString,c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&n(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in s)?a.call(t):r)}),{unsafe:!0})},function(t,e,r){"use strict";r.r(e);r(48),r(40);class n{constructor(t){const e=t.match(/^spreadsheet:\/\/(\d+)(?:\?(.+))?/);if(null===e)throw new Error('DSN class expects value to be of type string and format "spreadsheet://index=0..."');if(this.properties={},void 0===e[2])this.properties.fileUid=e[1];else{const t=JSON.parse('{"'+e[2].replace(/&/g,'","').replace(/=/g,'":"')+'"}',(function(t,e){return""===t?e:decodeURIComponent(e)}));this.properties.fileUid=e[1],this.properties.index=t.index||0,this.properties.range=t.range||"",this.properties.direction=t.direction||"horizontal"}}get fileUid(){return this.properties.fileUid}set fileUid(t){this.properties.fileUid=t}get index(){return this.properties.index}set index(t){this.properties.index=t}get range(){return this.properties.range}set range(t){this.properties.range=t}get direction(){return this.properties.direction}set direction(t){this.properties.direction=t}}r(42),r(43);class i{constructor(t){this.sheetWrapper=t,this.sheetWrapper.addEventListener("click",t=>{if("BUTTON"===t.target.tagName){for(let e of t.target.parentNode.childNodes)e.classList.replace("btn-primary","btn-default");t.target.classList.replace("btn-default","btn-primary"),this.sheetWrapper.dispatchEvent(new CustomEvent("changeIndex",{detail:{index:t.target.getAttribute("data-value")}}))}})}buildTabs(t,e){if(this.sheetWrapper.textContent="",t.getAllSheets().length<=0)this.sheetWrapper.style.display="none";else{for(let r=0;r<t.getAllSheets().length;r++){const n=document.createElement("button");n.setAttribute("type","button"),n.setAttribute("data-value",r),n.classList.add("btn",r===parseInt(e)?"btn-primary":"btn-default"),n.innerText=t.getSheetName(r),this.sheetWrapper.appendChild(n)}this.sheetWrapper.style.display="block"}}}r(79);class o{static getColHeader(t){const e=t.toString(24);let r="";for(let t=0;t<e.length;t++){let n=e[t],i=(1*n).toString()===n?n:n.charCodeAt(0)-97+10;0===t&&(i-=1),r+=String.fromCharCode(97+i)}return r.toUpperCase()}static switchObjectPropertiesValue(t,e,r){const n=t[e];return t[e]=t[r],t[r]=n,t}}class a{constructor(t){this.tableWrapper=t}buildTable(t){const e=Object.values(t.getSheetData()).map(t=>Object.values(t)),r=document.createElement("table");this.buildTableHeader(r,Math.max(...e.map(t=>t.length))),this.buildTableBody(r,e),this.tableWrapper.textContent="",this.tableWrapper.appendChild(r)}buildTableHeader(t,e){const r=t.createTHead().insertRow();for(let t=0;t<=e;t++)t>0?r.insertCell().innerText=o.getColHeader(t):r.insertCell()}buildTableBody(t,e){const r=t.createTBody();e.forEach((t,e)=>{const n=r.insertRow();n.insertCell().innerText=e+1,t.forEach(t=>{const e=n.insertCell();e.innerText=t.val,void 0!==t.css&&e.setAttribute("class",t.css.split("-").map(t=>"align-"+t).join(" ")),void 0!==t.row&&e.setAttribute("rowspan",t.row),void 0!==t.col&&e.setAttribute("colspan",t.col)})})}}class s{constructor(t,e){this.sheetBuilder=new i(t),this.tableBuilder=new a(e)}update(t,e){if(!(e instanceof n))throw new Error('Renderer class "update" method expects parameter to be type of a DSN class');this.sheetBuilder.buildTabs(t,e.index),this.tableBuilder.buildTable(t,e.range.split(":"))}}class u{constructor(t,e){if(!(t instanceof n))throw new Error("Spreadsheet class expects dsn parameter to be type of a DSN class");this.data=e,this.defaultFileUid=t.fileUid,this.defaultSheetIndex=t.index}set dsn(t){if(!(t instanceof n))throw new Error('Spreadsheet class setter "dsn" expects parameter to be type of a DSN class');this.defaultFileUid=t.fileUid,this.defaultSheetIndex=t.index}getAllSheets(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultFileUid;return this.data[t]||[]}getSheet(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultSheetIndex,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.defaultFileUid;return this.data[e][t]||[]}getSheetName(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultSheetIndex,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.defaultFileUid;return this.getSheet(t,e).name||""}getSheetData(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultSheetIndex,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.defaultFileUid;return this.getSheet(t,e).cells||[]}}class c{constructor(t){this.element=t,this.sheetWrapper=this.element.querySelector(".spreadsheet-sheets"),this.tableWrapper=this.element.querySelector(".spreadsheet-table"),this.fileInput=this.element.querySelector(".spreadsheet-file-select"),this.directionInput=this.element.querySelector(".spreadsheet-input-direction"),this.resetInput=this.element.querySelector(".spreadsheet-reset-button"),this.originalDataInput=this.element.querySelector("input.spreadsheet-input-original"),this.databaseDataInput=this.element.querySelector("input.spreadsheet-input-database"),this.formattedDataInput=this.element.querySelector("input.spreadsheet-input-formatted"),this.dsn=new n(this.databaseDataInput.getAttribute("value")),this.spreadsheet=new u(this.dsn,JSON.parse(this.element.getAttribute("data-spreadsheet"))),this.renderer=new s(this.sheetWrapper,this.tableWrapper),this.updateSpreadsheet(!0),this.initializeEvents()}initializeEvents(){this.sheetWrapper.addEventListener("changeIndex",t=>{this.dsn.index=t.detail.index,this.updateSpreadsheet(!0)}),this.tableWrapper.addEventListener("changeSelection",t=>{this.dsn.range=t.detail.start+":"+t.detail.end,this.updateSpreadsheet()}),this.fileInput.addEventListener("change",t=>{this.dsn.fileUid=t.currentTarget.value,this.dsn.index=0,this.dsn.range="",this.updateSpreadsheet(!0)}),this.directionInput.addEventListener("click",t=>{const e=t.currentTarget,r=e.parentNode;this.dsn.direction="horizontal"===(e.value||"horizontal")?"vertical":"horizontal",e.setAttribute("value",this.dsn.direction),"horizontal"!==this.dsn.direction?(r.querySelector(".direction-row").style.display="none",r.querySelector(".direction-column").style.display="block"):(r.querySelector(".direction-column").style.display="none",r.querySelector(".direction-row").style.display="block"),this.updateSpreadsheet()}),this.resetInput.addEventListener("click",()=>{this.dsn=new n(this.originalDataInput.getAttribute("value")),this.updateSpreadsheet(!0)})}updateSpreadsheet(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.spreadsheet.dsn=this.dsn,!0===t&&this.renderer.update(this.spreadsheet,this.dsn),this.fileInput.value=this.dsn.fileUid;let e=this.spreadsheet.getSheetName(),r="spreadsheet://"+this.dsn.fileUid+"?index="+this.dsn.index;void 0!==this.tableWrapper&&this.dsn.range.length>0&&(e+=" - "+this.dsn.range,r+="&range="+this.dsn.range),void 0!==this.directionInput&&(r+="&direction="+this.dsn.direction),this.formattedDataInput.setAttribute("value",e),this.databaseDataInput.setAttribute("value",r)}}document.querySelectorAll(".spreadsheet-input-wrap").forEach(t=>{new c(t)})}])}));