"use strict";
exports.id = 6041;
exports.ids = [6041];
exports.modules = {

/***/ 96041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_logo": () => (/* binding */ DyteLogo)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2190);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87406);




const dyteLogoCss = ":host{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));height:100%;width:auto}svg,img{height:100%;width:auto}.brand-color{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";

const DyteLogo = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.configChanged(this.config);
    this.meetingChanged(this.meeting);
  }
  configChanged(config) {
    var _a;
    if (config != null) {
      const configLogo = (_a = config === null || config === void 0 ? void 0 : config.designTokens) === null || _a === void 0 ? void 0 : _a.logo;
      // NOTE(callmetarush): Only update logo if not passed via prop
      if (configLogo != null && this.logoUrl == null) {
        this.logoUrl = configLogo;
      }
    }
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting != null) {
      const meetingLogo = (_d = (_c = (_b = (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.logo;
      if (meetingLogo != null && this.logoUrl == null) {
        this.logoUrl = meetingLogo;
      }
    }
  }
  render() {
    const logo = this.logoUrl;
    const text = this.t('Logo');
    return (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, typeof logo === 'string' && (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: logo, alt: text }));
  }
  static get watchers() { return {
    "config": ["configChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DyteLogo.style = dyteLogoCss;




/***/ }),

/***/ 2190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getLangData),
/* harmony export */   "u": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87406);


// Replace with cdn base path in prod
const LANG_BASE_URL = 'http://localhost:5000';
const getLangData = async (lang) => {
  if (lang == null || lang === 'en' || lang.trim() === '') {
    return _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
  try {
    const res = await fetch(`${LANG_BASE_URL}/${lang}.json`);
    if (!res.ok) {
      return _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_0__.d;
    }
    // merge fetched language with defaultLanguage to avoid empty properties
    return Object.assign({}, _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_0__.d, await res.json());
  }
  catch (_) {
    return _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
};
/**
 * Creates an i18n instance from a language dictionary/object.
 * @param lang The language dictionary
 * @returns A function which handles i18n
 */
const useLanguage = (lang = _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_0__.d) => {
  return (key) => {
    var _a;
    return (_a = lang[key]) !== null && _a !== void 0 ? _a : key;
  };
};




/***/ })

};
;