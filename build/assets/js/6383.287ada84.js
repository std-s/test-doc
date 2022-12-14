"use strict";
exports.id = 6383;
exports.ids = [6383];
exports.modules = {

/***/ 56383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participant_tile": () => (/* binding */ DyteParticipantTile)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43541);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2190);
/* harmony import */ var _pipStore_094537d3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51839);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87406);







const dyteParticipantTileCss = ":host{position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--dyte-font-family, sans-serif);aspect-ratio:16 / 9;height:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));transition-property:var(--dyte-transition-property, all);transition-duration:150ms}@media (prefers-reduced-motion){:host{--dyte-transition-property:none}}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag){left:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}video{display:none;position:absolute;height:100%;width:100%;border-radius:var(--dyte-border-radius-lg, 12px)}video.contain{-o-object-fit:contain;object-fit:contain}video.cover{-o-object-fit:cover;object-fit:cover}video.visible{display:block}video::-webkit-media-controls{display:none !important}.pinned-icon{position:absolute;left:var(--dyte-space-3, 12px);top:var(--dyte-space-3, 12px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}video.mirror{transform:scaleX(-1)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}";

const DyteParticipantTile = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.isPinned = false;
    /** Position of name tag */
    this.nameTagPosition = 'bottom-left';
    /** Whether tile is used for preview */
    this.isPreview = false;
    /** Variant */
    this.variant = 'solid';
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_2__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.onVideoUpdate = (videoState) => {
      this.videoState = videoState;
      if (this.participant == null)
        return;
      if (videoState.videoEnabled) {
        _pipStore_094537d3_js__WEBPACK_IMPORTED_MODULE_4__.s.enableSource(this.participant.id);
      }
      else {
        _pipStore_094537d3_js__WEBPACK_IMPORTED_MODULE_4__.s.disableSource(this.participant.id);
      }
    };
    this.onPinned = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
  }
  onVideoRef(el) {
    this.videoEl = el;
    if (this.isPreview || this.participant == null) {
      return;
    }
    _pipStore_094537d3_js__WEBPACK_IMPORTED_MODULE_4__.s.addSource(this.participant.id, this.videoEl, this.participant.videoEnabled);
    if (this.participant.videoEnabled) {
      _pipStore_094537d3_js__WEBPACK_IMPORTED_MODULE_4__.s.enableSource(this.participant.id);
    }
  }
  connectedCallback() {
    // set videoState before initial render and initialize listeners
    this.participantsChanged(this.participant);
  }
  componentDidLoad() {
    // load videoState into video element after first render
    this.videoStateChanged(this.videoState);
  }
  disconnectedCallback() {
    if (this.participant == null)
      return;
    this.participant.removeListener('videoUpdate', this.onVideoUpdate);
    this.participant.removeListener('pinned', this.onPinned);
    this.participant.removeListener('unpinned', this.onPinned);
    _pipStore_094537d3_js__WEBPACK_IMPORTED_MODULE_4__.s.removeSource(this.participant.id);
  }
  participantsChanged(participant) {
    if (participant != null) {
      this.videoState = {
        videoEnabled: participant.videoEnabled,
        videoTrack: participant.videoTrack,
      };
      this.isPinned = participant.isPinned;
      participant.addListener('videoUpdate', this.onVideoUpdate);
      participant.addListener('pinned', this.onPinned);
      participant.addListener('unpinned', this.onPinned);
    }
  }
  videoStateChanged(videoState) {
    if (videoState != null && this.videoEl != null) {
      if (videoState.videoEnabled) {
        const stream = new MediaStream();
        if (videoState.videoTrack == null)
          return;
        stream.addTrack(videoState.videoTrack);
        this.videoEl.srcObject = stream;
      }
      else {
        this.videoEl.srcObject = undefined;
      }
    }
  }
  isMirrored() {
    var _a, _b;
    if (this.participant != null) {
      const isSelf = this.isPreview || this.participant.id === ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.id);
      if (isSelf) {
        const states = this.states || _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_1__.s;
        const mirrorVideo = (_b = states === null || states === void 0 ? void 0 : states.prefs) === null || _b === void 0 ? void 0 : _b.mirrorVideo;
        if (typeof mirrorVideo === 'boolean') {
          return mirrorVideo;
        }
      }
    }
    return false;
  }
  render() {
    var _a, _b, _c, _d;
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onVideoRef(el), class: {
        visible: (_a = this.videoState) === null || _a === void 0 ? void 0 : _a.videoEnabled,
        mirror: this.isMirrored(),
        [(_d = (_c = (_b = this.config) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.videoFit) !== null && _d !== void 0 ? _d : 'cover']: true,
      }, autoPlay: true, playsInline: true, muted: true }), this.isPinned && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "pinned-icon", icon: this.iconPack.pin, "aria-label": this.t('Pinned') })), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  static get watchers() { return {
    "participant": ["participantsChanged"],
    "videoState": ["videoStateChanged"]
  }; }
};
DyteParticipantTile.style = dyteParticipantTileCss;




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

/***/ 51839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PiPEvents),
/* harmony export */   "s": () => (/* binding */ store)
/* harmony export */ });
const PIP_CANVAS_HEIGHT = 720;
const PIP_CANVAS_WIDTH = 1280;
const PIP_CANVAS_FILL = '#000000';
const calcGridElemSize = (gridSize) => {
  switch (gridSize) {
    case 0:
    case 1:
      return [PIP_CANVAS_WIDTH, PIP_CANVAS_HEIGHT];
    case 2:
      return [Math.floor(PIP_CANVAS_WIDTH / 2), PIP_CANVAS_HEIGHT];
    case 3:
    case 4:
      return [Math.floor(PIP_CANVAS_WIDTH / 2), Math.floor(PIP_CANVAS_HEIGHT / 2)];
    case 5:
    case 6:
      return [Math.floor(PIP_CANVAS_WIDTH / 3), Math.floor(PIP_CANVAS_HEIGHT / 2)];
    default:
      return [Math.floor(PIP_CANVAS_WIDTH / 3), Math.floor(PIP_CANVAS_HEIGHT / 2)];
  }
};
const calcImageCrop = (x, y, w, h, videoW, videoH) => {
  // default offset is center
  let offsetX = 0.5;
  let offsetY = 0.5;
  const iw = videoW;
  const ih = videoH;
  const r = Math.min(w / iw, h / ih);
  let nw = iw * r; // new prop. width
  let nh = ih * r; // new prop. height
  let cx;
  let cy;
  let cw;
  let ch;
  let ar = 1;
  // decide which gap to fill
  if (nw < w)
    ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h)
    ar = h / nh; // updated
  nw *= ar;
  nh *= ar;
  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;
  // make sure source rectangle is valid
  if (cx < 0)
    cx = 0;
  if (cy < 0)
    cy = 0;
  if (cw > iw)
    cw = iw;
  if (ch > ih)
    ch = ih;
  // fill image in dest. rectangle
  return [cx, cy, cw, ch, x, y, w, h];
};
var PiPEvents;
(function (PiPEvents) {
  PiPEvents["CAMERA"] = "CAMERA";
  PiPEvents["MIC"] = "MIC";
  PiPEvents["END"] = "END";
})(PiPEvents || (PiPEvents = {}));
class PipStore {
  constructor() {
    this.tracks = [];
    this.sources = [];
    this.enabled = false;
  }
  isSupported() {
    return !!window.chrome && document.pictureInPictureEnabled;
  }
  cleanup() {
    if (this.isSupported() &&
      document.exitPictureInPicture !== undefined &&
      document.pictureInPictureElement !== null) {
      document.exitPictureInPicture();
    }
    this.canvas = undefined;
    this.video = undefined;
    this.tracks = [];
    this.request = undefined;
  }
  createCanvas() {
    const c = document.createElement('canvas');
    c.height = PIP_CANVAS_HEIGHT;
    c.width = PIP_CANVAS_WIDTH;
    this.canvas = c;
  }
  setupEvents(onEvent) {
    if (navigator.mediaSession === undefined ||
      navigator.mediaSession.setCameraActive === undefined) {
      return;
    }
    navigator.mediaSession.setActionHandler('togglemicrophone', () => {
      onEvent(PiPEvents.MIC);
    });
    navigator.mediaSession.setActionHandler('togglecamera', () => {
      onEvent(PiPEvents.CAMERA);
    });
    navigator.mediaSession.setActionHandler('hangup', () => {
      onEvent(PiPEvents.END);
    });
  }
  drawGrid(gridW, gridH, gridSize) {
    if (this.canvas === undefined)
      return;
    const ctx = this.canvas.getContext('2d');
    // Reset the canvas
    ctx.fillStyle = PIP_CANVAS_FILL;
    ctx.fillRect(0, 0, PIP_CANVAS_WIDTH, PIP_CANVAS_HEIGHT);
    let pointerY = 0;
    let i = 0;
    while (pointerY < PIP_CANVAS_HEIGHT - 5) {
      let pointerX = 0;
      while (pointerX < PIP_CANVAS_WIDTH - 5 && i < gridSize) {
        const videoElem = this.tracks[i];
        const [cx, cy, cw, ch, x, y, w, h] = calcImageCrop(pointerX, pointerY, gridW, gridH, videoElem.videoWidth, videoElem.videoHeight);
        ctx.drawImage(videoElem, cx, cy, cw, ch, x, y, w, h);
        i += 1;
        pointerX += gridW;
      }
      pointerY += gridH;
    }
  }
  paintCanvas() {
    const gridSize = this.tracks.length;
    const [gridW, gridH] = calcGridElemSize(gridSize);
    this.drawGrid(gridW, gridH, gridSize);
  }
  animate() {
    if (this.tracks !== undefined) {
      this.paintCanvas();
    }
    if (this.request !== undefined) {
      this.request = requestAnimationFrame(() => this.animate());
    }
  }
  /**
   * Create a PiP store and prepare sources
   * @param onReady method to trigger when video stream is ready
   * @param onStop method to trigger when PiP is stopped
   * @param onEvent method to trigger on PiP media session
   */
  create(onReady, onStop, onEvent) {
    this.cleanup();
    this.createCanvas();
    this.setupEvents(onEvent);
    const target = document.createElement('video');
    target.height = PIP_CANVAS_HEIGHT;
    target.width = PIP_CANVAS_WIDTH;
    target.autoplay = true;
    target.srcObject = this.canvas.captureStream(24);
    this.video = target;
    this.video.onloadedmetadata = () => {
      try {
        onReady();
        this.video.onleavepictureinpicture = () => {
          onStop();
        };
      }
      catch (err) {
        onStop(err.getMessage());
      }
    };
    this.paintCanvas();
  }
  updateMediaSession(event, state) {
    if (navigator.mediaSession === undefined)
      return;
    if (event === PiPEvents.CAMERA &&
      navigator.mediaSession.setCameraActive !== undefined) {
      navigator.mediaSession.setCameraActive(state);
    }
    if (event === PiPEvents.MIC &&
      navigator.mediaSession.setMicrophoneActive !== undefined) {
      navigator.mediaSession.setMicrophoneActive(state);
    }
  }
  /**
   * Update the active streams to show on grid
   * @param sources list of participants to show on grid
   */
  updateVideoSources() {
    const enabledSources = Object.values(this.sources).filter((t) => t.enabled);
    const tracks = [];
    enabledSources.map((sou) => {
      tracks.push(sou.element);
    });
    this.tracks = tracks;
  }
  enableSource(source) {
    if (this.sources[source] !== undefined) {
      this.sources[source].enabled = true;
    }
    this.updateVideoSources();
  }
  disableSource(source) {
    if (this.sources[source] !== undefined) {
      this.sources[source].enabled = false;
    }
    this.updateVideoSources();
  }
  /**
   * Add a video source from the participant grid
   * @param id participant id to store the video against
   * @param element HTMLVideoElement for the video source
   */
  addSource(id, element, enabled) {
    this.sources[id] = { element, enabled };
  }
  /**
   * Remove the video source for the participant
   * @param id participant id
   */
  removeSource(id) {
    delete this.sources[id];
  }
  /**
   * Remove all sources
   */
  removeAllSource() {
    this.sources = [];
  }
  /**
   * Enable PiP
   */
  enable() {
    this.enabled = true;
    // Repaint canvas in loop
    this.request = requestAnimationFrame(() => this.animate());
    this.video.requestPictureInPicture();
  }
  /**
   * Enable PiP
   */
  disable() {
    this.enabled = false;
    cancelAnimationFrame(this.request);
    this.request = undefined;
    document.exitPictureInPicture();
  }
}
const store = new PipStore();




/***/ }),

/***/ 43541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ onChange),
/* harmony export */   "s": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;