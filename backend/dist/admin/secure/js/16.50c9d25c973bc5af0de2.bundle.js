(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{475:function(t,e,i){"use strict";i.r(e);var a=i(6),l=i(17),n=i(300);i(149),i(215),i(301);class s extends n.a{constructor(t,...e){const{defaultValue:i=(t.many?[]:null)}=t;super(Object(a.a)(Object(a.a)({},t),{},{defaultValue:i}),...e),Object(l.a)(this,"getQueryFragment",(t=this.path)=>`\n      ${t} {\n        id\n        _label_\n      }\n    `),Object(l.a)(this,"getFilterGraphQL",({type:t,value:e})=>"contains"===t?{[this.path+"_some"]:{id:e}}:"is"===t?{[""+this.path]:{id:e}}:void 0),Object(l.a)(this,"getFilterLabel",({label:t})=>`${this.label} ${t.toLowerCase()}`),Object(l.a)(this,"formatFilter",({label:t,value:e})=>`${this.getFilterLabel({label:t})}: "${e}"`),Object(l.a)(this,"serialize",t=>{const{path:e}=this,{many:i}=this.config;let a=t[e];if(i){let t=[];return Array.isArray(a)&&(t=a.map(t=>t.id)),{disconnectAll:!0,connect:t.map(t=>({id:t}))}}return a?{connect:{id:a.id}}:{disconnectAll:!0}}),Object(l.a)(this,"getFilterTypes",()=>{const{many:t}=this.config;return t?[{type:"contains",label:"Contains",getInitialValue:()=>null}]:[{type:"is",label:"Is",getInitialValue:()=>null}]})}getRefList(){return this.getListByKey(this.config.ref)}}e.default=s}}]);