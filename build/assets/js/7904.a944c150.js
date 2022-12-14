"use strict";
exports.id = 7904;
exports.ids = [7904];
exports.modules = {

/***/ 27904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_mute_all_button": () => (/* binding */ DyteMuteAllButton)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _index_29271762_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17578);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2190);
/* harmony import */ var _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63677);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87406);







const dyteMuteAllButtonCss = ":host{display:block}";

const DyteMuteAllButton = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    /** Variant */
    this.variant = 'button';
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_2__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.onMuteAll = () => {
      this.stateUpdate.emit({ activeMuteAllConfirmation: true });
    };
  }
  render() {
    var _a;
    if (!((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.canAllowParticipantAudio)) {
      return null;
    }
    const label = this.t('mute_all');
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: label, part: "tooltip" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", icon: this.iconPack.speaker_off, label: label, size: this.size, iconPack: this.iconPack, variant: this.variant, onClick: this.onMuteAll }))));
  }
};
DyteMuteAllButton.style = dyteMuteAllButtonCss;




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