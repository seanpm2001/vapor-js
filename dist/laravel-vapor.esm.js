function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var t=require("axios"),r=function(){try{return process.env.MIX_VAPOR_ASSET_URL?process.env.MIX_VAPOR_ASSET_URL:""}catch(e){throw console.error("Unable to automatically resolve the asset URL. Use Vapor.withBaseAssetUrl() to specify it manually."),e}};module.exports=new(function(){function n(){}var o=n.prototype;return o.asset=function(e){return r()+"/"+e},o.withBaseAssetUrl=function(e){r=function(){return e||""}},o.store=function(r,n){void 0===n&&(n={});try{return Promise.resolve(t.post(n.signedStorageUrl?n.signedStorageUrl:"/vapor/signed-storage-url",e({bucket:n.bucket||"",content_type:n.contentType||r.type,expires:n.expires||"",visibility:n.visibility||""},n.data),e({baseURL:n.baseURL||null,headers:n.headers||{}},n.options))).then(function(e){var o=e.data.headers;return"Host"in o&&delete o.Host,void 0===n.progress&&(n.progress=function(){}),Promise.resolve(t.put(e.data.url,r,{cancelToken:n.cancelToken||"",headers:o,onUploadProgress:function(e){n.progress(e.loaded/e.total)}})).then(function(){return e.data.extension=r.name.split(".").pop(),e.data})})}catch(e){return Promise.reject(e)}},n}());
//# sourceMappingURL=laravel-vapor.esm.js.map
