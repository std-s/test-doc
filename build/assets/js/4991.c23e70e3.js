"use strict";
exports.id = 4991;
exports.ids = [4991];
exports.modules = {

/***/ 72729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ differenceInMinutes),
/* harmony export */   "e": () => (/* binding */ elapsedDuration),
/* harmony export */   "f": () => (/* binding */ formatDateTime)
/* harmony export */ });
const differenceInMinutes = (oldDate, newDate) => {
  // difference in milliseconds
  const diff = newDate.getTime() - oldDate.getTime();
  return Math.round(Math.abs(diff / 1000 / 60));
};
const elapsedDuration = (oldDate, newDate) => {
  const minutes = differenceInMinutes(oldDate, newDate);
  if (minutes < 2) {
    return 'just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (minutes < 90) {
    return `about ${hours}h ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  const weeks = Math.round(days / 7);
  return `${weeks}w ago`;
};
const formatDateTime = (date) => {
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};




/***/ }),

/***/ 24991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_chat_scope_selector": () => (/* binding */ DyteChatScopeSelector),
/* harmony export */   "dyte_emoji_picker": () => (/* binding */ DyteEmojiPicker),
/* harmony export */   "dyte_file_message": () => (/* binding */ DyteFileMessage),
/* harmony export */   "dyte_image_message": () => (/* binding */ DyteImageMessage),
/* harmony export */   "dyte_text_message": () => (/* binding */ DyteTextMessage)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2190);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85114);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72729);
/* harmony import */ var _string_703da00e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67553);
/* harmony import */ var _file_6118772d_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25401);
/* harmony import */ var _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43541);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87406);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60804);











const dyteChatScopeSelectorCss = ":host{display:flex;font-family:var(--dyte-font-family, sans-serif)}.chat-scope-selector{position:relative;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));z-index:10}.chat-scope-selector button{position:absolute;top:var(--dyte-space-0, 0px);width:100%;border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-4, 16px);display:flex;align-items:center;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-family:var(--dyte-font-family, sans-serif);font-size:14px;cursor:pointer;height:50px}.chat-scope-selector button span{display:flex;align-items:center;justify-content:flex-start}.chat-scope-selector button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-scope-selector .search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-0, 0px)}.chat-scope-selector .search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.chat-scope-selector .search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.chat-scope-selector .search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .participants-container{position:absolute;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));top:50px;-webkit-animation:0.3s slide-down ease;animation:0.3s slide-down ease}@-webkit-keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}@keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}.chat-scope-selector .scope-list{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);list-style-type:none;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);overflow:auto;max-height:375px}.chat-scope-selector .scope-list .scope{display:flex;flex-direction:row;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px)}.chat-scope-selector .scope-list .scope:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.chat-scope-selector .scope-list .scope-special{margin-top:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-text-opacity))}.chat-scope-selector .scope-list .everyone-icon>dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat-scope-selector .scope-list .everyone-icon{display:flex;height:100%;width:100%;align-items:center;justify-content:center;margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px}.unread-count.selector{position:unset;margin-left:var(--dyte-space-2, 8px)}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}";

const DyteChatScopeSelector = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.chatScopeChanged = (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "chatScopeChanged", 7);
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.participants = [];
    this.showParticipantsPanel = false;
    this.selectedParticipant = null;
    this.searchText = '';
    this.unreadCountTotal = 0;
    this.unreadCountBuckets = {};
    this.onSearchInput = (e) => {
      this.searchText = e.target.value;
      if (this.searchText !== '') {
        this.participants = this.participants.filter((participant) => participant.name.toLowerCase().includes(this.searchText));
      }
      else if (this.searchText === '') {
        this.resetState();
      }
    };
    this.onScopeClick = (scope) => {
      if (typeof scope === 'string') {
        this.chatScopeChanged.emit(scope);
        this.selectedParticipant = null;
      }
      else {
        this.chatScopeChanged.emit(scope.userId);
        this.selectedParticipant = scope;
      }
      this.showParticipantsPanel = false;
      this.resetState();
      this.chatBucketChanged(this.chatBuckets);
    };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.chatBucketChanged(this.chatBuckets);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    const { participants } = this.meeting;
    this.participantJoinedListener &&
      participants.joined.removeListener('participantJoined', this.participantJoinedListener);
    this.participantLeftListener &&
      participants.joined.removeListener('participantLeft', this.participantLeftListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.participants = meeting.participants.joined.toArray();
      this.participantJoinedListener = (participant) => {
        if (!this.participants.some((p) => p.id === participant.id)) {
          this.participants = [...this.participants, participant];
        }
      };
      this.participantLeftListener = (participant) => {
        this.participants = this.participants.filter((p) => p.id !== participant.id);
      };
      meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    }
  }
  chatBucketChanged(chatBuckets) {
    var _a, _b;
    this.unreadCountTotal = 0;
    for (const key in chatBuckets) {
      const lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__.c[key]) !== null && _a !== void 0 ? _a : 0;
      this.unreadCountBuckets[key] = chatBuckets[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key === this.generateKey([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        this.unreadCountBuckets[key] = 0;
        _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__.c[key] = new Date();
      }
      else {
        this.unreadCountTotal += this.unreadCountBuckets[key];
      }
    }
  }
  resetState() {
    if (this.meeting != null) {
      this.participants = this.meeting.participants.joined.toArray();
      this.searchText = '';
    }
  }
  toggleParticipants() {
    this.showParticipantsPanel = !this.showParticipantsPanel;
  }
  generateKey(uuid) {
    return uuid.sort((a, b) => a.localeCompare(b)).join('_');
  }
  getUnreadForUser(userId) {
    var _a;
    return (_a = this.unreadCountBuckets[this.generateKey([this.meeting.self.userId, userId])]) !== null && _a !== void 0 ? _a : 0;
  }
  render() {
    const recipientLabel = this.selectedParticipant !== null ? this.selectedParticipant.name : this.t('everyone');
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-scope-selector" }, this.showParticipantsPanel && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-container" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search", part: "search" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, part: "search-icon" }), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: "Search", onInput: this.onSearchInput, part: "search-input" })), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "scope-list" }, this.searchText === '' && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "scope scope-special", onClick: () => this.onScopeClick('everyone') }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "everyone-icon" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.participants })), "Everyone", this.unreadCountBuckets['everyone'] > 0 && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadCountBuckets['everyone']))))), this.participants.map((participant) => {
      return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "scope", onClick: () => this.onScopeClick(participant) }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant", { role: "listitem", key: participant.id, participant: participant, view: "breakout-room-tile" }), this.getUnreadForUser(participant.userId) > 0 && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.getUnreadForUser(participant.userId))))));
    })))), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: () => this.toggleParticipants() }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, `${this.t('To')} ${recipientLabel}`, '  ', this.unreadCountTotal > 0 && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count selector" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadCountTotal)))), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.showParticipantsPanel ? this.iconPack.chevron_up : this.iconPack.chevron_down })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatBuckets": ["chatBucketChanged"]
  }; }
};
DyteChatScopeSelector.style = dyteChatScopeSelectorCss;

const EMOJI_ASSET_URL = 'https://cdn.dyte.in/assets/emojis-data.json';
/**
 * fetches the latest emoji list from CDN
 * @returns list of emojis
 */
const fetchEmojis = async () => {
  const emojis = await fetch(EMOJI_ASSET_URL);
  return emojis.json();
};

const dyteEmojiPickerCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-64, 256px);flex-direction:column;padding:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-0, 0px);font-family:var(--dyte-font-family, sans-serif);width:auto;min-width:var(--dyte-space-20, 80px);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#emoji-grid{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));padding-bottom:var(--dyte-space-12, 48px);font-family:var(--dyte-font-family, sans-serif);overflow-x:hidden;overflow-y:scroll;height:100%;grid-auto-rows:minmax(-webkit-min-content, -webkit-max-content);grid-auto-rows:minmax(min-content, max-content)}#loader{display:flex;height:100%;width:100%;align-items:center;justify-content:center}input{display:block;height:var(--dyte-space-8, 32px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-family:var(--dyte-font-family, sans-serif);font-size:14px;border-width:var(--dyte-border-width-none, 0);border-style:solid;border-style:none;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-ring-opacity));--tw-ring-opacity:0.3}.emoji{height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);font-size:20px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";

const DyteEmojiPicker = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.emojiClicked = (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEmojiClicked", 7);
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.filterVal = '';
    this.filteredEmojis = [];
  }
  componentWillLoad() {
    // Don't use async here as it will block the render
    fetchEmojis().then((e) => {
      this.emojiList = e;
      this.handleInputChange({ value: '' });
    });
  }
  handleInputChange(target) {
    this.filterVal = target.value;
    const regex = new RegExp(`([^,]*?${this.filterVal}[^,]*):(\\d+)`, 'g');
    this.filteredEmojis = Array.from(this.emojiList['search'].matchAll(regex)).map((m) => {
      return { name: m[1], emoji: this.emojiList['emojis'][m[2]] };
    });
  }
  handleEmojiClick(emoji) {
    this.emojiClicked.emit(emoji);
  }
  mapEmojiList() {
    var _a;
    if (((_a = this.emojiList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "loader" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", null)));
    }
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "emoji-grid", class: "scrollbar" }, this.filteredEmojis.map((e) => ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { key: `emoji-button-${e.name}`, class: "emoji", variant: "ghost", kind: "icon", title: e.name, onClick: () => this.handleEmojiClick(e.emoji) }, e.emoji)))));
  }
  render() {
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { value: this.filterVal, onInput: (event) => this.handleInputChange(event.target), placeholder: this.t('Search') }), this.mapEmojiList()));
  }
};
DyteEmojiPicker.style = dyteEmojiPickerCss;

const ChatHead = ({ name, time, now }) => {
  return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "head" },
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, (0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_7__.s)((0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_7__.f)(name), 20)),
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "time", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_8__.f)(time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_8__.e)(time, now))));
};

const DyteFileMessage = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Date object of now, to calculate distance between dates */
    this.now = new Date();
    /** Whether the message is continued by same user */
    this.isContinued = false;
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__.d;
  }
  render() {
    const link = (0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_7__.a)(this.message.link);
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(ChatHead, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", part: "body" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, this.message.name), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data-split" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ext" }, (0,_file_6118772d_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.message.name)), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "divider" }), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "size" }, (0,_file_6118772d_js__WEBPACK_IMPORTED_MODULE_9__.a)(this.message.size)))), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => (0,_file_6118772d_js__WEBPACK_IMPORTED_MODULE_9__.d)(link, { name: this.message.name, fallbackName: 'file' }), part: "button" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download }))))));
  }
};

const dyteImageMessageCss = ".image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";

const DyteImageMessage = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    /** Date object of now, to calculate distance between dates */
    this.now = new Date();
    /** Whether the message is continued by same user */
    this.isContinued = false;
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.status = 'loading';
  }
  render() {
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(ChatHead, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", part: "body" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { image: true, loaded: this.status === 'loaded' } }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: (0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_7__.a)(this.message.link), onLoad: () => {
        this.status = 'loaded';
      }, onError: () => {
        this.status = 'errored';
      }, onClick: () => {
        if (this.status === 'loaded') {
          this.stateUpdate.emit({ image: this.message });
          _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_4__.s.image = this.message;
        }
      } }), this.status === 'loading' && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-spinner", title: this.t('Loading image'), "aria-label": this.t('Loading image') }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", null))), this.status === 'errored' && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-errored", title: this.t('Image not found'), "aria-label": this.t('Image not found') }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image_off }))), this.status === 'loaded' && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => {
        this.stateUpdate.emit({ image: this.message });
        _store_183b9cab_js__WEBPACK_IMPORTED_MODULE_4__.s.image = this.message;
      } }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.full_screen_maximize })), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => (0,_file_6118772d_js__WEBPACK_IMPORTED_MODULE_9__.d)(this.message.link, { fallbackName: 'image' }) }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download }))))))));
  }
};
DyteImageMessage.style = dyteImageMessageCss;

const URLRegEx = /(https?:\/\/[^\s]+)/;
const formatMessage = (text) => {
  const words = text.split(' ');
  const lastIndex = words.length - 1;
  return words.map((word, index) => {
    if (URLRegEx.test(word)) {
      return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null,
        (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: word, target: "_blank", rel: "noopener noreferrer" }, word),
        index !== lastIndex ? ' ' : ''));
    }
    return `${word}${index !== lastIndex ? ' ' : ''}`;
  });
};
const TextMessageView = ({ message }) => {
  const lines = message.split('\n');
  return lines.map((line) => (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, formatMessage(line)));
};

const DyteTextMessage = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Date object of now, to calculate distance between dates */
    this.now = new Date();
    /** Whether the message is continued by same user */
    this.isContinued = false;
  }
  render() {
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(ChatHead, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", part: "body" }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, emoji: (0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_7__.h)(this.message.message) } }, (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(TextMessageView, { message: this.message.message })))));
  }
};




/***/ }),

/***/ 25401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getFileSize),
/* harmony export */   "d": () => (/* binding */ downloadFile),
/* harmony export */   "g": () => (/* binding */ getExtension)
/* harmony export */ });
/* harmony import */ var _string_703da00e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67553);


const getExtension = (name) => {
  return name.split('.').pop();
};
/**
 * Formats size in bytes to human readable formats
 * @param size Size in bytes
 * @returns Human readable file size
 */
const getFileSize = (size) => {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / 1024 ** i).toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
};
/**
 * Extracts the file name from a URL.
 * @param link The URL of the file
 * @param fallback Fallback filename
 * @returns File name
 */
const getFileName = (link, fallback = 'file') => {
  const url = new URL(link);
  const name = decodeURIComponent(url.pathname.split('/').pop());
  return name !== '/' ? name : fallback;
};
/**
 * Downloads file from a given URL without leaving the current page
 * @param link URL of the file to download
 * @param options Optional Options for file download - `name` and `fallbackName`
 */
const downloadFile = async (link, options) => {
  link = (0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_0__.a)(link);
  let name = options === null || options === void 0 ? void 0 : options.name;
  const res = await fetch(link);
  if (!res.ok) {
    // if unable to download file (CORS or some other error)
    // open the URL in new tab
    window.open(link, '_blank');
    return;
  }
  const blobURL = URL.createObjectURL(await res.blob());
  // Creates an anchor tag and simulates download
  const a = document.createElement('a');
  a.href = blobURL;
  a.download = name !== null && name !== void 0 ? name : getFileName(link, options === null || options === void 0 ? void 0 : options.fallbackName);
  a.click();
};




/***/ }),

/***/ 60804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ gracefulStorage$1)
/* harmony export */ });
const handler = {
  get: (target, name, receiver) => (...args) => {
    try {
      return Reflect.get(target, name, receiver).apply(target, args);
    }
    catch (_a) {
      return null;
    }
  },
};
let gracefulStorage;
try {
  gracefulStorage = new Proxy(localStorage, handler);
}
catch (_a) {
  gracefulStorage = new Proxy({}, handler);
}
const gracefulStorage$1 = gracefulStorage;




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




/***/ }),

/***/ 67553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ sanitizeLink),
/* harmony export */   "f": () => (/* binding */ formatName),
/* harmony export */   "h": () => (/* binding */ hasOnlyEmojis),
/* harmony export */   "s": () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};




/***/ }),

/***/ 85114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getPreference),
/* harmony export */   "c": () => (/* binding */ chatUnreadTimestamps),
/* harmony export */   "g": () => (/* binding */ getUserPreferences),
/* harmony export */   "s": () => (/* binding */ setPreference)
/* harmony export */ });
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60804);


const KEY = 'dyte-prefs';
const setPreference = (key, value) => {
  const data = JSON.parse(_graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_0__.g.getItem(KEY) || '{}');
  data[key] = JSON.stringify(value);
  _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_0__.g.setItem('dyte-prefs', JSON.stringify(data));
};
const getPreference = (key) => {
  const data = JSON.parse(_graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_0__.g.getItem(KEY) || '{}');
  return data[key];
};
const getUserPreferences = () => {
  const prefs = JSON.parse(_graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_0__.g.getItem(KEY) || '{}');
  const mirrorVideo = prefs['mirror-video'] ? prefs['mirror-video'] === 'true' : true;
  const muteNotificationSounds = prefs['mute-notification-sounds']
    ? prefs['mute-notification-sounds'] === 'true'
    : false;
  return { mirrorVideo, muteNotificationSounds };
};
const chatUnreadTimestamps = {};




/***/ })

};
;