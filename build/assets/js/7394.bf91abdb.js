"use strict";
exports.id = 7394;
exports.ids = [7394];
exports.modules = {

/***/ 57394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_polls": () => (/* binding */ DytePolls)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _default_ui_config_98483031_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92309);
/* harmony import */ var _index_29271762_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17578);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2190);
/* harmony import */ var _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63677);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82321);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87406);









const dytePollsCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);font-size:14px}*{box-sizing:border-box}.ctr{box-sizing:border-box;padding:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);display:flex;flex:1 1 0%;flex-direction:column}.polls-view{overflow-y:auto;flex:1 1 0%;flex-basis:0}";

const DytePolls = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Config */
    this.config = _default_ui_config_98483031_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_3__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    /** Create State */
    this.create = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    this.polls = [...meeting.polls.items];
    meeting.polls.on('pollsUpdate', (data) => {
      this.polls = [...data.polls];
    });
    this.onCreate = async (data) => {
      this.create = false;
      await meeting.polls.create(data.question, data.options, data.anonymous, data.hideVotes);
    };
    this.onVote = async (id, index) => {
      await meeting.polls.vote(id, index);
    };
  }
  toggleCreateState() {
    this.create = !this.create;
  }
  componentDidRender() {
    (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_7__.s)(this.pollEl);
  }
  render() {
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr", part: "container" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "polls-view scrollbar", ref: (el) => (this.pollEl = el), part: "polls" }, this.polls.map((item) => {
      var _a;
      return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-poll", { key: item.id, poll: item, onDyteVotePoll: (e) => {
          this.onVote(e.detail.id, e.detail.index);
        }, self: (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId }));
    }), this.create && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-poll-form", { part: "poll-form", onDyteCreatePoll: (e) => {
        this.onCreate(e.detail);
      } }))), this.meeting.self.permissions.polls.canCreate && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => this.toggleCreateState(), variant: this.create ? 'secondary' : 'primary', part: "button" }, this.create ? this.t('Cancel Poll Creation') : this.t('Create New Poll'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePolls.style = dytePollsCss;




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




/***/ }),

/***/ 82321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ smoothScrollToBottom)
/* harmony export */ });
/**
 * Scroll to bottom of an element.
 *
 * Works in all browsers - just that in Safari, the smooth scrolling doesn't work.
 * @param el The bottom of which element you want to scroll down to
 */
const smoothScrollToBottom = (el, smooth = true) => {
  if (el == null)
    return;
  el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
};




/***/ })

};
;