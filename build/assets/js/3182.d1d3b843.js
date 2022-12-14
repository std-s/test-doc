"use strict";
exports.id = 3182;
exports.ids = [3182];
exports.modules = {

/***/ 43182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_spotlight_indicator": () => (/* binding */ DyteSpotlightIndicator)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2190);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85294);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87406);





const dyteSpotlightIndicatorCss = ":host{font-size:12px}#sync-button{flex-direction:row;border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-1, 4px);display:flex;height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center;margin-bottom:var(--dyte-space-2, 8px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}#sync-button>dyte-icon{max-height:14px}#sync-button dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}#sync-button.active dyte-icon{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}div{align-content:center;line-height:2rem}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-8, 32px)}#sync-button.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity))}";

const DyteSpotlightIndicator = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_2__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting != null) {
      this.canSpotlight = meeting.self.permissions.canSpotlight;
      this.isSpotlighted = (_b = (_a = meeting.spotlight) === null || _a === void 0 ? void 0 : _a.spotlighted) !== null && _b !== void 0 ? _b : false;
    }
  }
  updateSpotlightState(spotlighted) {
    var _a;
    try {
      (_a = this.meeting.spotlight) === null || _a === void 0 ? void 0 : _a.setSpotlighted(spotlighted);
      this.isSpotlighted = spotlighted;
    }
    catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
  render() {
    if (!this.canSpotlight)
      return;
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { size: 'md', label: this.t('Any plugin or screenshare you switch to will sync the change across the meeting') }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "sync-button", class: {
        tab: true,
        active: this.isSpotlighted,
      }, onClick: () => this.updateSpotlightState(!this.isSpotlighted) }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, "Sync"), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", icon: this.isSpotlighted ? this.iconPack.checkmark : this.iconPack.warning, tabIndex: -1, "aria-hidden": true })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSpotlightIndicator.style = dyteSpotlightIndicatorCss;




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