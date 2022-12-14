"use strict";
exports.id = 8270;
exports.ids = [8270];
exports.modules = {

/***/ 18270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_screen_share_toggle": () => (/* binding */ DyteScreenShareToggle)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2190);
/* harmony import */ var _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63677);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87406);






const dyteScreenShareToggleCss = ":host{display:block;font-family:var(--dyte-font-family, sans-serif)}";

const deviceCanScreenShare = () => {
  return (typeof navigator !== 'undefined' &&
    typeof navigator.mediaDevices !== 'undefined' &&
    'getDisplayMedia' in navigator.mediaDevices);
};
const DyteScreenShareToggle = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Variant */
    this.variant = 'button';
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    /**
     * Maximum screen share count (value from preset)
     * -1 denotes there is no limit on maximum
     */
    this.maxScreenShareCount = -1;
    this.screenShareCount = 0;
    this.screenShareEnabled = false;
    this.canScreenShare = false;
    this.shareScreenPermission = 'NOT_REQUESTED';
    this.selfScreenShareListener = ({ screenShareEnabled }) => {
      this.screenShareEnabled = screenShareEnabled;
    };
    this.screenShareListener = ({ screenShareEnabled }) => {
      const currentCount = this.screenShareCount + (screenShareEnabled ? 1 : -1);
      this.screenShareCount = Math.max(currentCount, 0);
    };
    this.participantLeftListener = ({ screenShareEnabled }) => {
      if (screenShareEnabled) {
        // decrement count if participant who left had screenShareEnabled
        // and don't let it go below 0 (just a failsafe)
        this.screenShareCount = Math.max(this.screenShareCount - 1, 0);
      }
    };
    this.selfJoinStateListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.selfStageLeftListener = () => {
      this.canScreenShare = false;
    };
    this.selfJoinStateRejectedListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.mediaPermissionErrorListener = ({ kind, message }) => {
      if (kind === 'screenshare') {
        this.shareScreenPermission = message;
      }
    };
    this.reachedMaxScreenShares = () => {
      // checks if a limit exists, and if limit is reached
      return this.maxScreenShareCount > 0 && this.screenShareCount >= this.maxScreenShareCount;
    };
    this.toggleScreenShare = () => {
      var _a;
      const self = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self;
      if (self == null ||
        !this.canScreenShare ||
        this.reachedMaxScreenShares() ||
        this.hasPermissionError()) {
        return;
      }
      if (self.screenShareEnabled) {
        self.disableScreenShare();
      }
      else {
        self.enableScreenShare();
      }
    };
  }
  connectedCallback() {
    if (!deviceCanScreenShare()) {
      _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_3__.l.error('[dyte-screenshare-toggle] Device does not support screensharing.');
      return;
    }
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.joined.removeListener('screenShareUpdate', this.screenShareListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('screenShareUpdate', this.selfScreenShareListener);
    (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.removeListener('mediaPermissionError', this.mediaPermissionErrorListener);
    (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self.removeListener('joinStageRequestAccepted', this.selfJoinStateListener);
    (_f = this.meeting) === null || _f === void 0 ? void 0 : _f.self.removeListener('joinStageRequestRejected', this.selfJoinStateRejectedListener);
    (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.self.removeListener('stageJoined', this.selfJoinStateListener);
    (_h = this.meeting) === null || _h === void 0 ? void 0 : _h.self.removeListener('stageLeft', this.selfStageLeftListener);
    (_j = this.meeting) === null || _j === void 0 ? void 0 : _j.self.removeListener('removedFromStage', this.selfJoinStateListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const self = meeting.self;
      this.updateCanProduce(meeting);
      this.maxScreenShareCount = self.config.maxScreenShareCount;
      this.screenShareEnabled = self.screenShareEnabled;
      let screenShareCount = 0;
      for (const participant of meeting.participants.joined.toArray()) {
        if (participant.screenShareEnabled) {
          screenShareCount++;
        }
      }
      this.screenShareCount = screenShareCount;
      meeting.participants.joined.addListener('screenShareUpdate', this.screenShareListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
      self.addListener('screenShareUpdate', this.selfScreenShareListener);
      self.addListener('mediaPermissionError', this.mediaPermissionErrorListener);
      self.addListener('joinStageRequestAccepted', this.selfJoinStateListener);
      self.addListener('joinStageRequestRejected', this.selfJoinStateRejectedListener);
      self.addListener('stageJoined', this.selfJoinStateListener);
      self.addListener('stageLeft', this.selfStageLeftListener);
      self.addListener('removedFromStage', this.selfJoinStateListener);
    }
  }
  updateCanProduce(meeting) {
    const { self, meta } = meeting;
    const canProduceScreenshare = self.permissions.canProduceScreenshare === 'ALLOWED';
    const isWebinar = meta.viewType === 'WEBINAR';
    this.canScreenShare = false;
    if (canProduceScreenshare) {
      this.canScreenShare = true;
    }
    else if (isWebinar) {
      const canRequestScreenshare = self.permissions.canProduceScreenshare === 'CAN_REQUEST';
      // If the peer has approved request to present
      if (canRequestScreenshare &&
        (self.webinarStageStatus === 'ON_STAGE' ||
          self.webinarStageStatus === 'ACCEPTED_TO_JOIN_STAGE')) {
        this.canScreenShare = true;
      }
    }
  }
  hasPermissionError() {
    return (this.shareScreenPermission === 'SYSTEM_DENIED' ||
      this.shareScreenPermission === 'COULD_NOT_START');
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    const hasError = this.hasPermissionError();
    const limitReached = this.reachedMaxScreenShares();
    if (this.screenShareEnabled && !hasError) {
      label = this.t('share_screen_stop');
      icon = this.iconPack.share_screen_stop;
      classList['red-icon'] = true;
    }
    else {
      label = this.t('share_screen_start');
      icon = this.iconPack.share_screen_start;
    }
    if (this.shareScreenPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied');
      classList['red-icon'] = true;
    }
    else {
      tooltipLabel = label;
    }
    if (limitReached) {
      tooltipLabel = this.t('Maximum screen share limit reached');
    }
    return { tooltipLabel, label, icon, classList, showWarning: hasError || limitReached };
  }
  render() {
    if (!deviceCanScreenShare() || !this.canScreenShare) {
      return null;
    }
    const { tooltipLabel, label, icon, classList, showWarning } = this.getState();
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: tooltipLabel, delay: 600, part: "tooltip" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, variant: this.variant, label: label, icon: icon, class: classList, onClick: this.toggleScreenShare, disabled: showWarning, showWarning: showWarning }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteScreenShareToggle.style = dyteScreenShareToggleCss;




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