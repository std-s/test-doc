"use strict";
exports.id = 1684;
exports.ids = [1684];
exports.modules = {

/***/ 68626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ parseMessageForTarget)
/* harmony export */ });
const parseMessageForTarget = (message) => {
  let parsedMessage = null;
  try {
    const { target, message: m } = JSON.parse(message.message);
    parsedMessage = Object.assign(Object.assign({}, message), { target, message: m });
  }
  catch (error) {
    parsedMessage = message;
  }
  return parsedMessage;
};




/***/ }),

/***/ 43367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ RemoteUpdateType)
/* harmony export */ });
var RemoteUpdateType;
(function (RemoteUpdateType) {
  RemoteUpdateType["REQUEST_RECEIVED"] = "REQUEST_RECEIVED";
  RemoteUpdateType["REQUEST_SENT"] = "REQUEST_SENT";
  RemoteUpdateType["INCOMING_REQUEST_ACCEPTED"] = "INCOMING_REQUEST_ACCEPTED";
  RemoteUpdateType["OUTGOING_REQUEST_ACCEPTED"] = "OUTGOING_REQUEST_ACCEPTED";
  RemoteUpdateType["INCOMING_REQUEST_ENDED"] = "INCOMING_REQUEST_ENDED";
  RemoteUpdateType["OUTGOING_REQUEST_ENDED"] = "OUTGOING_REQUEST_ENDED";
})(RemoteUpdateType || (RemoteUpdateType = {}));




/***/ }),

/***/ 41684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_notifications": () => (/* binding */ DyteNotifications)
/* harmony export */ });
/* harmony import */ var _index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43367);
/* harmony import */ var _notification_59a3294f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11732);
/* harmony import */ var _string_703da00e_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67553);
/* harmony import */ var _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85294);
/* harmony import */ var _index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2190);
/* harmony import */ var _default_ui_config_98483031_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92309);
/* harmony import */ var _index_29271762_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17578);
/* harmony import */ var _chat_8d57245e_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68626);
/* harmony import */ var _logger_615a2f0c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63677);
/* harmony import */ var _default_language_932daa34_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87406);












const DEFAULT_NOTIFICATION_CONFIG = Object.freeze({
  notifications: {
    participant_joined: true,
    participant_left: true,
    participant_joined_waitlist: true,
    chat: true,
    polls: true,
    webinar: true,
  },
  notification_sounds: {
    participant_joined: true,
    participant_left: true,
    chat: true,
    polls: true,
    webinar: true,
  },
  participant_joined_sound_notification_limit: 10,
  participant_chat_message_sound_notification_limit: 10,
});
const DEFAULT_NOTIFICATION_DURATION = 2000;

const dyteNotificationsCss = ":host{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;z-index:10;display:flex;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);pointer-events:none}dyte-notification{margin-top:var(--dyte-space-2, 8px)}";

function parseConfig(config) {
  const permissions = Object.assign({}, DEFAULT_NOTIFICATION_CONFIG);
  if (config == null)
    return permissions;
  Object.assign(permissions.notification_sounds, config.notification_sounds);
  Object.assign(permissions.notifications, config.notifications);
  permissions.participant_chat_message_sound_notification_limit =
    config.participant_chat_message_sound_notification_limit;
  permissions.participant_joined_sound_notification_limit =
    config.participant_joined_sound_notification_limit;
  return permissions;
}
function getEnabledSounds(sounds) {
  return Object.keys(sounds).filter((key) => sounds[key]);
}
const DyteNotifications = class {
  constructor(hostRef) {
    (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.permissions = DEFAULT_NOTIFICATION_CONFIG;
    this.enabledSounds = getEnabledSounds(DEFAULT_NOTIFICATION_CONFIG.notification_sounds);
    /** Config object */
    this.config = _default_ui_config_98483031_js__WEBPACK_IMPORTED_MODULE_5__.d;
    /** Language */
    this.t = (0,_index_6a31a13a_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    /** Icon pack */
    this.iconPack = _default_icon_pack_fb869041_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.notifications = [];
    this.onRemoteUpdate = ({ payload, type }) => {
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.INCOMING_REQUEST_ACCEPTED) {
        let remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Granted remote control to ${remotePeer.name}`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.OUTGOING_REQUEST_ACCEPTED) {
        let hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `${hostPeer.name} has granted remote control.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.REQUEST_RECEIVED) {
        let remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `${remotePeer.name} has requested for remote control.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.INCOMING_REQUEST_ENDED ||
        type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.OUTGOING_REQUEST_ENDED) {
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Existing remote control has been terminated.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_1__.R.REQUEST_SENT) {
        let hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Sent remote control request to ${hostPeer.name}`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
    this.onDyteNotification = (e) => {
      this.add(e.detail);
      const playSound = e.detail.playSound;
      if (playSound != undefined)
        this.audio.play(playSound);
    };
    this.onRecordingUpdate = (recordingState) => {
      if (recordingState === 'RECORDING') {
        this.add({
          id: 'recording-started',
          icon: this.iconPack.recording,
          message: this.t('recording.started'),
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      else if (recordingState === 'STOPPING') {
        this.add({
          id: 'recording-stopped',
          icon: this.iconPack.stop_recording,
          message: this.t('recording.stopped'),
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
  }
  connectedCallback() {
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.addEventListener('dyteNotification', this.onDyteNotification);
    }
    this.meetingChanged(this.meeting);
    this.configChanged(this.config);
    this.statesChanged(this.states);
  }
  clearListeners(meeting) {
    this.participantJoinedListener &&
      meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
    this.participantLeftListener &&
      meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.chatUpdateListener && meeting.chat.removeListener('chatUpdate', this.chatUpdateListener);
    this.pollUpdateListener && meeting.polls.removeListener('pollsUpdate', this.pollUpdateListener);
    this.networkUpdateListener &&
      meeting.meta.removeListener('disconnected', this.networkUpdateListener);
    this.networkUpdateListener &&
      meeting.meta.removeListener('connected', this.networkUpdateListener);
    meeting.remote.removeListener('remoteUpdate', this.onRemoteUpdate);
    meeting.recording.removeListener('recordingUpdate', this.onRecordingUpdate);
    clearTimeout(this.disconnectTimeout);
  }
  disconnectedCallback() {
    var _a;
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.removeEventListener('dyteNotification', this.onDyteNotification);
    }
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
    this.participantJoinedListener &&
      this.meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.chatUpdateListener &&
      this.meeting.chat.removeListener('chatUpdate', this.chatUpdateListener);
    this.pollUpdateListener &&
      this.meeting.polls.removeListener('pollsUpdate', this.pollUpdateListener);
    this.networkUpdateListener &&
      this.meeting.meta.removeListener('disconnected', this.networkUpdateListener);
    this.networkUpdateListener &&
      this.meeting.meta.removeListener('connected', this.networkUpdateListener);
    this.meeting.remote.removeListener('remoteUpdate', this.onRemoteUpdate);
    this.spotlightTabUpdateListener &&
      ((_a = this.meeting.spotlight) === null || _a === void 0 ? void 0 : _a.removeListener('activeTabUpdate', this.spotlightTabUpdateListener));
    this.peerRequestToJoinStateListener &&
      this.meeting.participants.joined.removeListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    this.peerAcceptedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a;
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting != null) {
      this.audio = new _notification_59a3294f_js__WEBPACK_IMPORTED_MODULE_2__.D();
      this.participantJoinedListener = (participant) => {
        if (this.permissions.notifications.participant_joined) {
          this.add({
            id: `${participant.id}-joined`,
            message: `${(0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_9__.f)(participant.name)} just joined`,
            image: participant.picture,
            duration: 2100,
          });
        }
        if (this.permissions.notification_sounds.participant_joined &&
          this.canPlayParticipantJoinedSound()) {
          this.audio.play('joined');
        }
      };
      this.participantLeftListener = (participant) => {
        if (this.permissions.notifications.participant_left) {
          this.add({
            id: `${participant.id}-left`,
            message: `${(0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_9__.f)(participant.name)} left`,
            image: participant.picture,
            duration: 2100,
          });
        }
        if (this.permissions.notification_sounds.participant_left &&
          this.canPlayParticipantJoinedSound()) {
          this.audio.play('left');
        }
      };
      this.waitlistedParticipantJoinedListener = (participant) => {
        const id = `${participant.id}-joined-waitlist`;
        this.add({
          id,
          message: `${(0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_9__.f)(participant.name)} is requesting to join the meeting`,
          image: participant.picture,
          duration: DEFAULT_NOTIFICATION_DURATION * 2,
          button: {
            text: 'Accept',
            variant: 'secondary',
            onClick: async () => {
              await this.meeting.participants.acceptWaitingRoomRequest(participant.id);
              this.remove(id);
            },
          },
        });
      };
      this.chatUpdateListener = ({ message }) => {
        const parsedMessage = (0,_chat_8d57245e_js__WEBPACK_IMPORTED_MODULE_10__.p)(message);
        if (parsedMessage != null) {
          if (parsedMessage.userId === meeting.self.userId) {
            return;
          }
          if (parsedMessage.type === 'text') {
            if (this.permissions.notifications.chat) {
              this.add({
                id: `message-${Math.random().toString(36)}`,
                icon: this.iconPack.chat,
                message: `${parsedMessage.displayName}: ${(0,_string_703da00e_js__WEBPACK_IMPORTED_MODULE_9__.s)(parsedMessage.message, 20)}`,
                duration: DEFAULT_NOTIFICATION_DURATION,
              });
            }
            if (this.permissions.notification_sounds.chat && this.canPlayChatSound()) {
              this.audio.play('message');
            }
          }
        }
      };
      this.pollUpdateListener = ({ polls, newPoll }) => {
        if (newPoll === false)
          return;
        if (this.permissions.notifications.polls &&
          this.meeting.self.userId !== polls[polls.length - 1].createdByUserId) {
          this.add({
            id: `poll-${Math.random().toString(36)}`,
            icon: this.iconPack.poll,
            message: `New poll created by ${polls[polls.length - 1].createdBy}`,
            duration: DEFAULT_NOTIFICATION_DURATION,
          });
        }
        if (this.permissions.notification_sounds.polls &&
          this.meeting.self.userId !== polls[polls.length - 1].createdByUserId &&
          this.canPlayChatSound()) {
          this.audio.play('message');
        }
      };
      this.deviceUpdateListener = ({ device, preview }) => {
        if (preview)
          return;
        if (device.kind === 'audiooutput') {
          this.audio.setDevice(device.deviceId);
        }
      };
      this.networkUpdateListener = ({ event }) => {
        this.remove('network');
        let reconnectDuration;
        if (event === 'disconnected') {
          reconnectDuration = 20000;
          this.add({
            id: 'network',
            icon: this.iconPack.disconnected,
            message: this.t('Connection lost. Trying to reconnect...'),
            duration: reconnectDuration,
          });
          this.disconnectTimeout = setTimeout(() => {
            this.add({
              id: 'network-lost',
              icon: this.iconPack.disconnected,
              message: this.t('Taking too long to reconnect...'),
              button: {
                text: this.t('End Meeting'),
                variant: 'danger',
                onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
              },
            });
          }, reconnectDuration);
        }
        else if (event === 'connected') {
          this.remove('network-lost');
          reconnectDuration = 3000;
          this.add({
            id: `network`,
            icon: this.iconPack.wifi,
            message: this.t('Connection restored'),
            duration: reconnectDuration,
          });
          clearTimeout(this.disconnectTimeout);
        }
      };
      this.spotlightTabUpdateListener = (spotlightTab) => {
        switch (spotlightTab.type) {
          case 'plugin':
            const spotlightPlugin = meeting.plugins.active
              .toArray()
              .find((plugin) => plugin.id == spotlightTab.id);
            if (spotlightPlugin != undefined) {
              this.add({
                id: 'spotlight',
                message: `Plugin switched to ${spotlightPlugin.name}`,
                duration: DEFAULT_NOTIFICATION_DURATION,
              });
            }
            break;
          case 'screenshare':
            const screenShareParticipant = meeting.participants.joined
              .toArray()
              .filter((participant) => participant.screenShareEnabled)
              .find((participant) => participant.id == spotlightTab.id);
            if (screenShareParticipant != undefined) {
              this.add({
                id: 'spotlight',
                message: `Now watching ${screenShareParticipant.name}'s screen`,
                duration: DEFAULT_NOTIFICATION_DURATION,
              });
            }
            break;
        }
      };
      this.peerRequestToJoinStateListener = ({ id }) => {
        const participant = this.meeting.participants.joined.get(id);
        if (participant !== undefined) {
          this.add({
            id: `webinar-request-${id}`,
            message: `${participant.name} is requesting to be on stage`,
            duration: DEFAULT_NOTIFICATION_DURATION,
            button: {
              text: 'Accept',
              variant: 'primary',
              onClick: async () => {
                await this.meeting.participants.acceptAllRequestToJoinStageRequests([
                  {
                    id,
                    requestToJoinType: 'REQUEST_TO_PRESENT',
                  },
                ]);
                this.remove(`webinar-request-${id}`);
              },
            },
          });
          if (this.permissions.notifications.webinar) {
            this.audio.play('joined');
          }
        }
      };
      this.peerAcceptedToJoinStageListener = (request) => {
        const participant = this.meeting.participants.joined.get(request.id);
        if (participant !== undefined) {
          this.add({
            id: `webinar-accepted-${request.id}`,
            message: `Approved ${participant.name}'s request to join stage.`,
            duration: DEFAULT_NOTIFICATION_DURATION,
          });
          if (this.permissions.notifications.webinar) {
            this.audio.play('joined');
          }
        }
      };
      this.peerRejectedToJoinStageListener = (request) => {
        const participant = this.meeting.participants.joined.get(request.id);
        if (participant !== undefined) {
          this.add({
            id: `webinar-rejected-${request.id}`,
            message: `Rejected ${participant.name}'s request to join stage.`,
            duration: DEFAULT_NOTIFICATION_DURATION,
          });
        }
      };
      const currentDevices = meeting.self.getCurrentDevices();
      if (currentDevices.speaker != null) {
        this.audio.setDevice(currentDevices.speaker.deviceId);
      }
      meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
      meeting.participants.joined.addListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
      meeting.participants.joined.addListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
      meeting.participants.joined.addListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
      if (this.canAcceptWaitingRequests()) {
        meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
      }
      meeting.chat.addListener('chatUpdate', this.chatUpdateListener);
      meeting.polls.addListener('pollsUpdate', this.pollUpdateListener);
      meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
      meeting.meta.addListener('disconnected', () => this.networkUpdateListener({ event: 'disconnected' }));
      meeting.meta.addListener('connected', () => this.networkUpdateListener({ event: 'connected' }));
      meeting.remote.addListener('remoteUpdate', this.onRemoteUpdate);
      (_a = meeting.spotlight) === null || _a === void 0 ? void 0 : _a.addListener('activeTabUpdate', this.spotlightTabUpdateListener);
      meeting.recording.addListener('recordingUpdate', this.onRecordingUpdate);
    }
  }
  configChanged(config) {
    if (config != null) {
      if ((config === null || config === void 0 ? void 0 : config.config) != null) {
        this.permissions = parseConfig(config.config);
        this.enabledSounds = getEnabledSounds(this.permissions.notification_sounds);
      }
    }
  }
  statesChanged(states) {
    var _a;
    if (states != null) {
      const notificationSoundsEnabled = !((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.muteNotificationSounds);
      // toggle only the notification sounds values which were enabled in the first place
      for (const permission of this.enabledSounds) {
        if (permission in this.permissions.notification_sounds) {
          this.permissions.notification_sounds[permission] = notificationSoundsEnabled;
        }
      }
    }
  }
  add(notification) {
    // show notifications only if tab is in focus and a maximum of 5 at a time
    if (document.visibilityState === 'visible' && this.notifications.length < 5) {
      // adds new notification to start of array so they appear at the bottom
      this.notifications = [...this.notifications, notification];
    }
  }
  remove(id) {
    this.notifications = this.notifications.filter((notification) => notification.id !== id);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const id = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(id);
      });
    }, 400);
  }
  canPlayParticipantJoinedSound() {
    return (this.permissions.participant_chat_message_sound_notification_limit == undefined ||
      this.permissions.participant_chat_message_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_chat_message_sound_notification_limit);
  }
  canPlayChatSound() {
    return (this.permissions.participant_chat_message_sound_notification_limit == undefined ||
      this.permissions.participant_chat_message_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_chat_message_sound_notification_limit);
  }
  canAcceptWaitingRequests() {
    return (this.permissions.notifications.participant_joined_waitlist &&
      this.meeting.self.permissions.acceptWaitingRequests);
  }
  render() {
    return ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.notifications.map((notification) => ((0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notification", { size: this.size, key: notification.id, "data-id": notification.id, notification: notification, onDyteNotificationDismiss: (e) => this.handleDismiss(e) })))));
  }
  get host() { return (0,_index_60449c9e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "config": ["configChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteNotifications.style = dyteNotificationsCss;




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




/***/ })

};
;