(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-38f02cf5"],{"3cee":function(e,t,n){"use strict";n("4437")},4437:function(e,t,n){},"9ed4":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=n("5530"),s=(n("d81d"),n("96cf"),n("dece")),c=n("2f62"),i=n("64ca");n("159b"),n("99af"),n("4279"),c={extends:i.a,components:{rightTemp:s.c,prizeBoxTemp:s.a},data:function(){return{currentCheck:null,modal:null,answerData:[],currentPage:0,checkValues:[],total:0,questionGroupId:null,rewardModalShow:!1}},computed:Object(a.a)({},Object(c.b)({qaTotal:function(e){return e.spring.answerTotal}})),methods:{handleRewardModalClose:function(){this.rewardModalShow=!1,this.$store.commit("setAnswerStatus","right"),this.$router.push("/spring/answerfinish")},handleCheck:function(e){this.currentCheck=e.itemKey,this.checkValues[this.currentPage]=e},showModal:function(e){"wrong"===e&&(this.$store.commit("setAnswerStatus","wrong"),this.$router.push("/spring/answerfinish")),this.modal=e},handleChoice:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"pre"===e?(0===t.currentPage&&t.$router.push("/spring/task"),t.funcPrePage()):"next"===e&&(r=t.checkValues[t.currentPage]||{},r=r.ifRight,1==(r=void 0===r?null:r)?t.showModal("right"):0==r&&t.showModal("wrong"));case 1:case"end":return n.stop()}}),n)})))()},funcPrePage:function(){var e,t;0<this.currentPage&&(e=--this.currentPage,t=(this.checkValues[e]||{}).itemKey,this.currentCheck=t,this.currentPage=e)},funcNextPage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.currentPage<e.total-1?e.currentPage+=1:(n=e.checkValues,n.map((function(e){return{id:e.questionId,answers:[e.itemKey]}})));case 1:case"end":return t.stop()}}),t)})))()},handleCloseModalFunc:function(){this.currentCheck=null,this.modal=null,this.funcNextPage()},initList:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},created:function(){this.handleCloseModal=this.d(this.handleCloseModalFunc),this.initCards(),this.answerData=[{name:"张三的小名叫什么",answers:[{itemKey:"A",itemContent:"李四"},{itemKey:"B",itemContent:"王五"}]}],this.currentCheck=null,this.checkValues=[],this.initList(),this.rewardModalShow=!1}},n("3cee"),n=n("2877"),c=Object(n.a)(c,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"spring-answer-container"},[t("div",{staticClass:"back",on:{click:function(t){return e.$router.push("/spring/task")}}}),t("div",{staticClass:"right-btn"},[t("span",[e._v("答题完成("+e._s(e.qaTotal)+"/1)次")])]),t("div",{staticClass:"answer-container"},[t("span",[e._v(e._s(e.answerData[e.currentPage].name))])]),t("div",{staticClass:"check-container"},[t("div",{class:[e.currentCheck===e.answerData[e.currentPage].answers[0].itemKey?"check":"uncheck"],on:{click:function(t){return e.handleCheck(e.answerData[e.currentPage].answers[0])}}},[e._v(" A:"+e._s(e.answerData[e.currentPage].answers[0].itemContent)+" ")]),t("div",{class:[e.currentCheck===e.answerData[e.currentPage].answers[1].itemKey?"check":"uncheck"],on:{click:function(t){return e.handleCheck(e.answerData[e.currentPage].answers[1])}}},[e._v(" B:"+e._s(e.answerData[e.currentPage].answers[1].itemContent)+" ")])]),t("div",{staticClass:"btn-container"},[e.currentCheck?t("div",{staticClass:"next",on:{click:function(t){return e.handleChoice("next")}}}):t("div",{staticClass:"unnext"})]),t("rightTemp",{directives:[{name:"show",rawName:"v-show",value:"right"===e.modal,expression:"modal === 'right'"}],on:{close:e.handleCloseModal}}),t("prizeBoxTemp",{directives:[{name:"show",rawName:"v-show",value:e.rewardModalShow,expression:"rewardModalShow"}],ref:"prizeBox",on:{close:e.handleRewardModalClose}})],1)}),[],!1,null,"d8ffefb8",null),t.default=c.exports},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map;r({target:"Array",proto:!0,forced:!n("1dde")("map")},{map:function(e){return a(this,e,1<arguments.length?arguments[1]:void 0)}})}}]);