(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0571"],{"2fe4":function(e,t,n){"use strict";var r=n("e2a9"),o=n.n(r);o.a},"6f9e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("basic-container",[n("avue-form",{attrs:{option:e.option},on:{submit:e.handleSubmit},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1),n("basic-container",[n("el-button",{staticStyle:{margin:"8px 0"},nativeOn:{click:function(t){return e.formate(t)}}},[e._v("格式化")]),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:15},placeholder:"请输入内容"},model:{value:e.formJson,callback:function(t){e.formJson=t},expression:"formJson"}})],1)],1)},o=[],a="https://avue.2bugs.cn/test/select",i={props:{label:"name",value:"code"},column:[{label:"省份",prop:"province",type:"select",cascader:["city","area"],cascaderFirst:!0,dicUrl:"".concat(a,"/getProvince"),dicData:"province",rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"城市",prop:"city",type:"select",dicFlag:!1,dicUrl:"".concat(a,"/getCity/{{key}}"),dicData:"city",rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{label:"地区",prop:"area",type:"select",dicFlag:!1,dicUrl:"".concat(a,"/getArea/{{key}}"),dicData:"area",rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]},c={data:function(){return{option:i,formJson:"",form:{province:"110000",city:"110100",area:"110101"}}},created:function(){this.formJson=JSON.stringify(this.option,null,2)},mounted:function(){},methods:{formate:function(){var e=this,t=new Promise(function(t,n){t(JSON.parse(e.formJson))});t.then(function(t){e.option=t,e.formJson=JSON.stringify(t,null,2),e.$notify({message:"数据加载成功",type:"success"})}).catch(function(t){e.$notify({center:!0,dangerouslyUseHTMLString:!0,message:"JSON格式错误<br >\n".concat(t),type:"error"})})},handleSubmit:function(e){this.form=e,this.$message({message:e,type:"success"})}}},s=c,l=(n("2fe4"),n("2877")),u=Object(l["a"])(s,r,o,!1,null,null,null);u.options.__file="index.vue";t["default"]=u.exports},e2a9:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0571.15f135a4.js.map