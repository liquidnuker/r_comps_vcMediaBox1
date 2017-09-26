webpackJsonp([4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {
    // console.log(".vue mounted");
  },
  methods: {}
});

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row vcmediabox101"
  }, [_vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "vcmediabox101_media-right"
  }, [_c('h3', {
    staticClass: "vcmediabox101_heading"
  }, [_vm._v("Media title 1")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n      tempor incididunt ut labore et dolore magna aliqua.")]), _vm._v(" "), _c('footer', {
    staticClass: "row vcmediabox101_extras"
  }, [_c('span', {
    staticClass: "btn btn1-01",
    attrs: {
      "tabindex": "0"
    }
  }, [_vm._v("\r\n          Read more\r\n          "), _c('svg', {
    staticClass: "vcmediabox101_btn_svg",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "btn btn1-01",
    attrs: {
      "tabindex": "0"
    }
  }, [_vm._v("\r\n          Read more\r\n          "), _c('svg', {
    staticClass: "vcmediabox101_btn_svg",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
    }
  })])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vcmediabox101_media-left"
  }, [_c('div', {
    staticClass: "vcmediabox101_img-holder"
  }, [_c('img', {
    attrs: {
      "src": "img.jpg",
      "alt": "img alt",
      "title": "img title"
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-63f817e5", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcMediaBox101_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63f817e5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcMediaBox101_vue__ = __webpack_require__(11);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcMediaBox101_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63f817e5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcMediaBox101_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcMediaBox101.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcMediaBox101.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63f817e5", Component.options)
  } else {
    hotAPI.reload("data-v-63f817e5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});