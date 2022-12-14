"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 50597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participants_audio": () => (/* binding */ DyteParticipantsAudio)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63677);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2190);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87406);





/**
 * Handles audio from participants in a meeting
 */
class DyteAudio {
  constructor() {
    this.audio = document.createElement('audio');
    this.audio.autoplay = true;
    this.audioStream = new MediaStream();
    this.audio.srcObject = this.audioStream;
    this.audioTracks = [];
  }
  addTrack(id, track) {
    if (!this.audioTracks.some((a) => a.id === id)) {
      this.audioTracks.push({ id, track });
      this.audioStream.addTrack(track);
      this.play();
    }
  }
  removeTrack(id) {
    const track = this.audioTracks.find((a) => a.id === id);
    if (track != null) {
      this.audioStream.removeTrack(track.track);
      this.audioTracks = this.audioTracks.filter((a) => a.id !== id);
    }
  }
  async play() {
    var _a;
    this.audio.srcObject = this.audioStream;
    await ((_a = this.audio.play()) === null || _a === void 0 ? void 0 : _a.catch((err) => {
      if (err.name === 'NotAllowedError') {
        if (this._onError != null) {
          this._onError();
        }
      }
      else if (err.name !== 'AbortError') {
        _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_1__.l.error('[dyte-audio] play() error\n', err);
      }
    }));
  }
  async setDevice(id) {
    var _a, _b, _c;
    await ((_c = (_b = (_a = this.audio).setSinkId) === null || _b === void 0 ? void 0 : _b.call(_a, id)) === null || _c === void 0 ? void 0 : _c.catch((err) => {
      _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_1__.l.error('[dyte-audio] setSinkId() error\n', err);
    }));
  }
  onError(onError) {
    this._onError = onError;
  }
}

const dyteParticipantsAudioCss = ":host{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.modal{box-sizing:border-box;width:100%;max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.modal h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:24px;font-weight:500}.modal p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-6, 24px)}.modal dyte-button{width:100%}";

const DyteParticipantsAudio = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.showPlayDialog = false;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.audioUpdateListener &&
      this.meeting.participants.active.removeListener('audioUpdate', this.audioUpdateListener);
    this.screenShareUpdateListener &&
      this.meeting.participants.joined.removeListener('screenShareUpdate', this.screenShareUpdateListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.deviceUpdateListener &&
      this.meeting.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  async meetingChanged(meeting) {
    if (meeting != null) {
      this.audio = new DyteAudio();
      this.audio.onError(() => {
        this.showPlayDialog = true;
      });
      this.audio.play();
      const currentDevices = meeting.self.getCurrentDevices();
      if (currentDevices.speaker != null) {
        await this.audio.setDevice(currentDevices.speaker.deviceId);
      }
      this.audioUpdateListener = ({ id, audioEnabled, audioTrack }) => {
        const audioId = `audio-${id}`;
        if (audioEnabled && audioTrack != null) {
          this.audio.addTrack(audioId, audioTrack);
        }
        else {
          this.audio.removeTrack(audioId);
        }
      };
      {
        const participants = meeting.participants.joined.toArray();
        for (const participant of participants) {
          this.audioUpdateListener(participant);
        }
      }
      this.participantLeftListener = ({ id }) => {
        this.audio.removeTrack(`audio-${id}`);
        this.audio.removeTrack(`screenshare-${id}`);
      };
      this.screenShareUpdateListener = ({ id, screenShareEnabled, screenShareTracks }) => {
        const audioId = `screenshare-${id}`;
        if (screenShareEnabled && screenShareTracks.audio != null) {
          this.audio.addTrack(audioId, screenShareTracks.audio);
        }
        else {
          this.audio.removeTrack(audioId);
        }
      };
      this.deviceUpdateListener = ({ device, preview }) => {
        if (preview)
          return;
        if (device.kind === 'audiooutput') {
          this.audio.setDevice(device.deviceId);
        }
      };
      meeting.participants.joined.addListener('audioUpdate', this.audioUpdateListener);
      meeting.participants.joined.addListener('screenShareUpdate', this.screenShareUpdateListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
      meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
    }
  }
  render() {
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.showPlayDialog && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
        this.showPlayDialog = false;
      } }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('Allow Audio Playback')), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('In order to play audio properly on your device, click the button below')), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => {
        this.audio.play();
        this.showPlayDialog = false;
      }, title: this.t('Play Audio') }, this.t('Play Audio')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantsAudio.style = dyteParticipantsAudioCss;




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