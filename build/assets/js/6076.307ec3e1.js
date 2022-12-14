"use strict";
exports.id = 6076;
exports.ids = [6076];
exports.modules = {

/***/ 56076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participants_toggle": () => (/* binding */ DyteParticipantsToggle)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2190);
/* harmony import */ var _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43541);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87406);






const dyteParticipantsToggleCss = ":host{position:relative;display:block;font-family:var(--dyte-font-family, sans-serif)}.waiting-participants-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .waiting-participants-count{right:var(--dyte-space-4, 16px);top:auto}";

const DyteParticipantsToggle = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    /** Variant */
    this.variant = 'button';
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.participantsActive = false;
    this.waitlistedParticipants = [];
    this.stageRequestedParticipants = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.statesChanged(this.states);
    (0,_store_183b9cab_js__WEBPACK_IMPORTED_MODULE_3__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.waitlistedParticipantLeftListener &&
      this.meeting.participants.waitlisted.removeListener('participantLeft', this.waitlistedParticipantLeftListener);
    this.peerRequestToJoinStateListener &&
      this.meeting.participants.joined.removeListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    this.peerAcceptedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.joined.addListener('peerStoppedPresenting', this.peerRejectedToJoinStageListener);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    if (meeting.self.permissions.acceptWaitingRequests) {
      this.waitlistedParticipants = meeting.participants.waitlisted.toArray();
      this.waitlistedParticipantJoinedListener = (participant) => {
        if (!this.waitlistedParticipants.some((p) => p.id === participant.id)) {
          this.waitlistedParticipants = [...this.waitlistedParticipants, participant];
        }
      };
      this.waitlistedParticipantLeftListener = (participant) => {
        this.waitlistedParticipants = this.waitlistedParticipants.filter((p) => p.id !== participant.id);
      };
      meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
      meeting.participants.waitlisted.addListener('participantLeft', this.waitlistedParticipantLeftListener);
    }
    if (this.meeting.self.permissions.acceptPresentRequests) {
      this.peerRequestToJoinStateListener = ({ id }) => {
        // Dedupe
        this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != id);
        const participant = meeting.participants.joined.get(id);
        if (participant !== undefined)
          this.stageRequestedParticipants.push(participant);
      };
      this.peerAcceptedToJoinStageListener = ({ id }) => {
        this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != id);
      };
      this.peerRejectedToJoinStageListener = ({ id }) => {
        this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != id);
      };
      this.stageRequestedParticipants = this.meeting.participants.joined
        .toArray()
        .filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
      meeting.participants.joined.addListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
      meeting.participants.joined.addListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
      meeting.participants.joined.addListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
      meeting.participants.joined.addListener('peerStoppedPresenting', this.peerRejectedToJoinStageListener);
    }
  }
  statesChanged(s) {
    const states = s || _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      this.participantsActive = states.activeSidebar === true && states.sidebar === 'participants';
    }
  }
  toggleParticipantsTab() {
    const states = this.states || _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_3__.s;
    this.participantsActive = !((states === null || states === void 0 ? void 0 : states.activeSidebar) && (states === null || states === void 0 ? void 0 : states.sidebar) === 'participants');
    _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_3__.s.activeSidebar = this.participantsActive;
    _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_3__.s.sidebar = this.participantsActive ? 'participants' : 'none';
    this.stateUpdate.emit({
      activeSidebar: this.participantsActive,
      sidebar: this.participantsActive ? 'participants' : 'none',
    });
  }
  render() {
    var _a, _b, _c;
    const text = this.t('participants');
    const config = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.config;
    const badgeCount = this.waitlistedParticipants.length + this.stageRequestedParticipants.length;
    if (config && !((_c = (_b = config === null || config === void 0 ? void 0 : config.controlBar) === null || _b === void 0 ? void 0 : _b.elements) === null || _c === void 0 ? void 0 : _c.participants))
      return;
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: text }, badgeCount !== 0 && !this.participantsActive && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waiting-participants-count", part: "waiting-participants-count" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, badgeCount <= 100 ? badgeCount : '99+'))), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, class: { active: this.participantsActive }, onClick: () => this.toggleParticipantsTab(), icon: this.iconPack.participants, label: text, variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteParticipantsToggle.style = dyteParticipantsToggleCss;




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