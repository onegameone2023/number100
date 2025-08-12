System.register("chunks:///_virtual/Kingdom", ['./KingdomAudioManager.ts', './KingdomController.ts', './KingdomPopupBonus.ts', './KingdomPopupGuide.ts', './KingdomPopupLSC.ts', './KingdomPopupLSH.ts', './KingdomPopupSelectLine.ts', './KingdomTrial.ts', './KingdomPayLines.ts', './KingdomSlotMachine.ts', './KingdomSlotSymbol.ts', './Toast.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/KingdomAudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioEngine.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, AudioSource, assetManager, AudioClip, sys, Component, AudioEngine, Configs;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      assetManager = module.assetManager;
      AudioClip = module.AudioClip;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      AudioEngine = module.AudioEngine;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "00835EMQntFT6TQZee++/Oz", "KingdomAudioManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AUDIO_CLIP = exports('AUDIO_CLIP', /*#__PURE__*/function (AUDIO_CLIP) {
        AUDIO_CLIP["BG"] = "music";
        AUDIO_CLIP["CLICK"] = "btn_click";
        AUDIO_CLIP["REEL_SPIN"] = "spin_action";
        AUDIO_CLIP["END_REEL_SPIN"] = "spin_done";
        AUDIO_CLIP["WIN"] = "spin_win";
        AUDIO_CLIP["JACKPOT"] = "jackpot";
        AUDIO_CLIP["FX_BONUS"] = "vq88_ping_bonus";
        AUDIO_CLIP["ENTER_BONUS"] = "start_bonus";
        AUDIO_CLIP["REWARD_BONUS"] = "popup_bonus";
        AUDIO_CLIP["FX_BIGWIN"] = "bigwin";
        AUDIO_CLIP["COUNTER"] = "countup";
        AUDIO_CLIP["BONUS_BONUS"] = "bonus_bonus";
        AUDIO_CLIP["BONUS_LOSE"] = "bonus_lose";
        return AUDIO_CLIP;
      }({}));
      var Key = {
        SOUND: Configs.InGameIds.Kingdom + "_sound_enabled",
        MUSIC: Configs.InGameIds.Kingdom + "_music_enabled"
      };
      var KingdomAudioManager = exports('KingdomAudioManager', (_dec = property(AudioSource), ccclass(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomAudioManager, _Component);
        function KingdomAudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgMusic", _descriptor, _assertThisInitialized(_this));
          _this._audioClipSet = {};
          _this._isMuteEffect = false;
          _this._isMuteMusic = false;
          _this._effectAudioIds = {};
          // Pause/Resume state tracking
          _this._isPaused = false;
          _this._pausedMusicState = false;
          _this._pausedEffectState = false;
          return _this;
        }
        var _proto = KingdomAudioManager.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          KingdomAudioManager.Instance = this;
          this._loadSettings();

          // Load audio clips from bundle
          assetManager.loadBundle('Kingdom', function (err, bundle) {
            if (err) {
              console.error(err);
              return;
            }
            bundle.loadDir('KingdomAsset/Sound', AudioClip, function (err, audioClips) {
              if (err) {
                console.error(err);
                return;
              }
              audioClips.forEach(function (audioClip) {
                _this2._audioClipSet[audioClip.name] = audioClip;
              });
            });
          });
        };
        _proto._loadSettings = function _loadSettings() {
          var musicValue = sys.localStorage.getItem(Key.MUSIC);
          var soundValue = sys.localStorage.getItem(Key.SOUND);
          var musicEnabled = musicValue !== null ? musicValue === "true" : true;
          var soundEnabled = soundValue !== null ? soundValue === "true" : true;
          this._isMuteMusic = !musicEnabled;
          this._isMuteEffect = !soundEnabled;
          this.bgMusic.volume = this._isMuteMusic ? 0 : 1;
          AudioEngine.getInstance().setEffectsVolume(this._isMuteEffect ? 0 : 1);
        };
        _proto.playEffect = function playEffect(name, loop) {
          if (loop === void 0) {
            loop = false;
          }
          if (this._isMuteEffect) return;
          var audioClip = this._audioClipSet[name];
          if (audioClip) {
            var audioId = AudioEngine.getInstance().playEffect(audioClip, loop, 1);
            if (!this._effectAudioIds[name]) {
              this._effectAudioIds[name] = [];
            }
            this._effectAudioIds[name].push(audioId);
          }
        };
        _proto.stopEffect = function stopEffect(name) {
          var ids = this._effectAudioIds[name];
          if (ids && ids.length > 0) {
            for (var _iterator = _createForOfIteratorHelperLoose(ids), _step; !(_step = _iterator()).done;) {
              var id = _step.value;
              AudioEngine.getInstance().stopEffect(id);
            }
            this._effectAudioIds[name] = [];
          }
        };
        _proto.stopAllEffect = function stopAllEffect() {
          AudioEngine.getInstance().stopAllEffects();
        };
        _proto.playMusic = function playMusic(name, loop) {
          if (loop === void 0) {
            loop = true;
          }
          if (this._isMuteMusic) return;
          var audioClip = this._audioClipSet[name];
          if (audioClip) {
            this.bgMusic.clip = audioClip;
            this.bgMusic.loop = loop;
            this.bgMusic.play();
          }
        };
        _proto.stopMusic = function stopMusic() {
          if (this._isMuteMusic) return;
          this.bgMusic.stop();
        };
        _proto.muteEffect = function muteEffect(isMute) {
          this._isMuteEffect = isMute;
          AudioEngine.getInstance().setEffectsVolume(isMute ? 0 : 1);
          sys.localStorage.setItem(Key.SOUND, !isMute);
        };
        _proto.muteMusic = function muteMusic(isMute) {
          this._isMuteMusic = isMute;
          this.bgMusic.volume = isMute ? 0 : 1;
          sys.localStorage.setItem(Key.MUSIC, !isMute);
        };
        _proto.onClick = function onClick() {
          this.playEffect(AUDIO_CLIP.CLICK);
        }

        /**
         * Pause all game audio (music and effects) while preserving user settings
         */;
        _proto.pauseAllAudio = function pauseAllAudio() {
          if (this._isPaused) return;
          this._isPaused = true;

          // Store current states
          this._pausedMusicState = this._isMuteMusic;
          this._pausedEffectState = this._isMuteEffect;

          // Pause music
          if (this.bgMusic.playing) {
            this.bgMusic.pause();
          }

          // Stop all effects
          this.stopAllEffect();

          // Temporarily mute both music and effects
          this._isMuteMusic = true;
          this._isMuteEffect = true;
          this.bgMusic.volume = 0;
          AudioEngine.getInstance().setEffectsVolume(0);
        }

        /**
         * Resume all game audio with original user settings
         */;
        _proto.resumeAllAudio = function resumeAllAudio() {
          if (!this._isPaused) return;
          this._isPaused = false;

          // Restore original states
          this._isMuteMusic = this._pausedMusicState;
          this._isMuteEffect = this._pausedEffectState;

          // Apply restored settings
          this.bgMusic.volume = this._isMuteMusic ? 0 : 1;
          AudioEngine.getInstance().setEffectsVolume(this._isMuteEffect ? 0 : 1);

          // Resume music if it was not muted originally
          if (!this._isMuteMusic && this.bgMusic.clip) {
            this.bgMusic.volume = 1;
            this.bgMusic.play();
          }
        }

        /**
         * Check if audio is currently paused
         */;
        _createClass(KingdomAudioManager, [{
          key: "isMuteEffect",
          get: function get() {
            return this._isMuteEffect;
          }
        }, {
          key: "isMuteMusic",
          get: function get() {
            return this._isMuteMusic;
          }
        }, {
          key: "isPaused",
          get: function get() {
            return this._isPaused;
          }
        }]);
        return KingdomAudioManager;
      }(Component), _class3.Instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './BroadcastListener.ts', './Config.ts', './Http.ts', './KingdomSignalRClient.ts', './InfoView.ts', './SlotConfig.ts', './Utils.ts', './KingdomAudioManager.ts', './KingdomPopupBonus.ts', './KingdomPopupGuide.ts', './KingdomPopupLSC.ts', './KingdomPopupLSH.ts', './KingdomPopupSelectLine.ts', './KingdomTrial.ts', './KingdomSlotMachine.ts', './Toast.ts', './EventIcon.ts', './TweenUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, Node, Label, Button, Toggle, Animation, log, Tween, tween, sp, v3, Component, App, BroadcastReceiver, Configs, Http, KingdomSignalRClient, InfoView, EnumEffect, Utils, KingdomAudioManager, AUDIO_CLIP, KingdomPopupBonus, KingdomPopupGuide, KingdomPopupLSC, KingdomPopupLSH, KingdomPopupSelectLine, KingdomTrial, KingdomSlotMachine, Toast, EventIcon, TweenUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Toggle = module.Toggle;
      Animation = module.Animation;
      log = module.log;
      Tween = module.Tween;
      tween = module.tween;
      sp = module.sp;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      KingdomSignalRClient = module.default;
    }, function (module) {
      InfoView = module.InfoView;
    }, function (module) {
      EnumEffect = module.EnumEffect;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      KingdomAudioManager = module.KingdomAudioManager;
      AUDIO_CLIP = module.AUDIO_CLIP;
    }, function (module) {
      KingdomPopupBonus = module.default;
    }, function (module) {
      KingdomPopupGuide = module.default;
    }, function (module) {
      KingdomPopupLSC = module.default;
    }, function (module) {
      KingdomPopupLSH = module.default;
    }, function (module) {
      KingdomPopupSelectLine = module.default;
    }, function (module) {
      KingdomTrial = module.default;
    }, function (module) {
      KingdomSlotMachine = module.default;
    }, function (module) {
      Toast = module.default;
    }, function (module) {
      EventIcon = module.EventIcon;
    }, function (module) {
      TweenUtils = module.TweenUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _class3;
      cclegacy._RF.push({}, "1712f6qVXxDmKwIsM/Y6xIO", "KingdomController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KingdomController = exports('default', (_dec = menu("Kingdom/Controller"), _dec2 = property(KingdomSlotMachine), _dec3 = property(Toast), _dec4 = property(KingdomPopupLSC), _dec5 = property(KingdomPopupLSH), _dec6 = property(KingdomPopupGuide), _dec7 = property(KingdomPopupBonus), _dec8 = property(KingdomPopupSelectLine), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Button), _dec29 = property(Button), _dec30 = property(Button), _dec31 = property(Toggle), _dec32 = property(Toggle), _dec33 = property(Toggle), _dec34 = property(Toggle), _dec35 = property(Label), _dec36 = property(Toggle), _dec37 = property(Toggle), _dec38 = property(Button), _dec39 = property(Button), _dec40 = property(Animation), _dec41 = property(Animation), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(InfoView), _dec45 = property(EventIcon), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomController, _Component);
        function KingdomController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.observers = {};
          _initializerDefineProperty(_this, "slotMachine", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toast", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupLSC", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupLSH", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuide", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupBonus", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupSelectLine", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainGame", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomHud", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonBackPopup", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "warningPopup", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBet", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpot", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblWinCash", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBet", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalSelectedLine", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalAutoSpin", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textAutoSpin", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFreeSpin", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotPrize", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotNum", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBigWinPrize", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblNormalPrize", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFreeSpinEffect", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblFreeTicket", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSpin", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSelectLine", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnStopAutoSpin", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleAutoSpin", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleSetting", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleTurbo", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleTrial", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTrialBalance", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleMusic", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleSound", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetUp", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetDown", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBigWin", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectJackpot", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectFreeSpin", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectBonus", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoPanel", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventIcon", _descriptor44, _assertThisInitialized(_this));
          _this._effectCreator = void 0;
          _this._isSpinning = false;
          _this._isTurbo = false;
          _this.totalFreeSpinPrize = 0;
          _this._totalFreeSpin = 0;
          _this._currentAutoSpin = 0;
          _this.kingdomPlayerResponse = null;
          _this.isTrial = false;
          _this._trialBalance = 0;
          _this._roomID = 1;
          _this._freeTicket = 0;
          return _this;
        }
        KingdomController.getInstance = function getInstance() {
          return this.sharedInstance || (this.sharedInstance = new this());
        };
        var _proto = KingdomController.prototype;
        _proto.addObserver = function addObserver(key, observer) {
          this.observers[key] = observer;
        };
        _proto.removeObserver = function removeObserver(key) {
          delete this.observers[key];
        };
        _proto.dispatch = /*#__PURE__*/function () {
          var _dispatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all(Object.keys(this.observers).map(function (key) {
                    return callback(_this2.observers[key]);
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function dispatch(_x) {
            return _dispatch.apply(this, arguments);
          }
          return dispatch;
        }();
        _proto.onLoad = function onLoad() {
          KingdomController.sharedInstance = this;
          this.initListeners();
          this.initEffects();
          this.initHubs();
          this.slotMachine.setTurbo(false);
          this.slotMachine.initializeReels();
        };
        _proto.start = function start() {
          this.currentAutoSpin = 0;
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          this.roomID = 1;
        };
        _proto.onEnable = function onEnable() {
          this.toggleMusic.isChecked = !KingdomAudioManager.Instance.isMuteMusic;
          this.toggleSound.isChecked = !KingdomAudioManager.Instance.isMuteEffect;

          // Resume audio if it was paused (when game becomes visible again)
          if (KingdomAudioManager.Instance.isPaused) {
            KingdomAudioManager.Instance.resumeAllAudio();
          }
        };
        _proto.initListeners = function initListeners() {
          var _this3 = this;
          this.btnSelectLine.node.on('click', this.showSelectLine.bind(this));
          this.toggleTurbo.node.on('click', function () {
            return _this3.isTurbo = !_this3.isTurbo;
          });
          [2000, 1000, 500, 100, 50, 20, 10].forEach(function (value, index) {
            _this3.toggleAutoSpin.checkMark.node.children[index].on('click', function () {
              KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.CLICK);
              _this3.toggleAutoSpin.isChecked = false;
              if (_this3.isTrial) {
                _this3.showWarningPopup(App.instance.getTextLang("me35"));
                return;
              }
              _this3.currentAutoSpin = value;
              _this3.onClickSpin();
            });
          });
          this.popupSelectLine.setOnSelectedChanged(function (selectedLines) {
            var lineCount = selectedLines.length;
            _this3.lblTotalSelectedLine.string = lineCount.toString();
            _this3.lblTotalBet.string = Utils.formatNumber(lineCount * _this3.kingdomPlayerResponse.BetValue);
          });
          BroadcastReceiver.register(BroadcastReceiver.USER_UPDATE_COIN, function () {
            _this3.infoPanel.setInfo(Configs.Login.Nickname, Configs.Login.Avatar, Configs.Login.GoldBalance);
          }, this);
        };
        _proto.initHubs = function initHubs() {
          var _this4 = this;
          KingdomSignalRClient.getInstance().receive("JoinGame", function (data) {
            log("JoinGame", data);
            _this4.kingdomPlayerResponse = data;
            _this4.lblSession.string = "";
            var lineCount = _this4.popupSelectLine.getSelectedLines().length;
            _this4.lblBet.string = Utils.formatNumber(data.BetValue);
            _this4.lblTotalBet.string = Utils.formatNumber(lineCount * data.BetValue);
            _this4.updateMultiplierIcon();
            _this4.checkFreeTicket();
            if (data.SlotInfo.FreeSpins > 0) {
              _this4.totalFreeSpin = data.SlotInfo.FreeSpins;
              _this4.lblFreeSpinEffect.string = data.SlotInfo.FreeSpins.toString();
              _this4._effectCreator[EnumEffect.FREESPIN].effect().then(function () {
                _this4.onClickSpin();
              });
            }
          });
          KingdomSignalRClient.getInstance().receive("ResultSpin", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  log("ResultSpin", data);
                  _this4.kingdomPlayerResponse = data;
                  _this4.lblSession.string = "#" + data.SpinData.SpinID;
                  _this4.resetSession();
                  _this4.updateGoldCoin(parseInt(data.Account.GoldBalance));
                  KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.REEL_SPIN);
                  _context2.next = 8;
                  return _this4.slotMachine.startSpin(data.SpinData.SlotsData);
                case 8:
                  _this4.onSpinComplete();
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
          KingdomSignalRClient.getInstance().receive("UpdateJackPot", function (data) {
            TweenUtils.numberTo(_this4.lblJackpot, data, 0.5);
          });
          KingdomSignalRClient.getInstance().receive("ResultBonusGame", function (data) {
            log("ResultBonusGame", data);
            _this4.updateGoldCoin(parseInt(data.Account.GoldBalance));
          });
          KingdomSignalRClient.getInstance().receive("MessageError", function (data) {
            _this4.showWarningPopup(App.instance.getTextLang("me" + data));
          });
        };
        _proto.initEffects = function initEffects() {
          var _this5 = this,
            _this$_effectCreator;
          this.effectBigWin.node.active = false;
          this.effectJackpot.node.active = false;
          this.effectFreeSpin.active = false;
          this.effectBonus.active = false;
          this._effectCreator = (_this$_effectCreator = {}, _this$_effectCreator[EnumEffect.BIGWIN] = {
            condition: function condition() {
              return _this5.getPayLinePrize() >= 85 * _this5.kingdomPlayerResponse.BetValue;
            },
            effect: function () {
              var _effect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var payLinePrize;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _this5.effectBigWin.node.active = true;
                      payLinePrize = _this5.getPayLinePrize();
                      _this5.effectBigWin.play("TextEffect");
                      _this5.showTextBigWin(payLinePrize, 6);
                      _context3.next = 6;
                      return new Promise(function (resolve) {
                        _this5.effectBigWin.on(Animation.EventType.FINISHED, function () {
                          _this5.scheduleOnce(function () {
                            _this5.effectBigWin.node.active = false;
                            resolve();
                          }, 8);
                        }, _this5);
                      });
                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              function effect() {
                return _effect.apply(this, arguments);
              }
              return effect;
            }()
          }, _this$_effectCreator[EnumEffect.JACKPOT] = {
            condition: function condition() {
              return _this5.kingdomPlayerResponse.SpinData.IsJackpot;
            },
            effect: function () {
              var _effect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var payLinePrize;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      payLinePrize = _this5.getPayLinePrize();
                      _this5.effectJackpot.node.active = true;
                      _this5.effectJackpot.play("TextEffect");
                      _this5.showTextJackpot(payLinePrize, 10);
                      _this5.lblJackpotNum.string = _this5.kingdomPlayerResponse.SpinData.JackpotNum.toString();
                      _context4.next = 7;
                      return new Promise(function (resolve) {
                        _this5.effectJackpot.on(Animation.EventType.FINISHED, function () {
                          _this5.scheduleOnce(function () {
                            _this5.effectJackpot.node.active = false;
                            resolve();
                          }, 15);
                        }, _this5);
                      });
                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              function effect() {
                return _effect2.apply(this, arguments);
              }
              return effect;
            }()
          }, _this$_effectCreator[EnumEffect.FREESPIN] = {
            condition: function condition() {
              return _this5.kingdomPlayerResponse.SpinData.IsFreeSpin;
            },
            effect: function () {
              var _effect3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _this5.effectFreeSpin.active = true;
                      _this5.effectFreeSpin.setScale(0, 0);
                      tween(_this5.effectFreeSpin).to(0.5, {
                        scale: v3(1, 1, 1)
                      }, {
                        easing: 'backOut'
                      }).start();
                      _context5.next = 5;
                      return new Promise(function (resolve) {
                        _this5.scheduleOnce(function () {
                          _this5.effectFreeSpin.active = false;
                          resolve();
                        }, 2);
                      });
                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              function effect() {
                return _effect3.apply(this, arguments);
              }
              return effect;
            }()
          }, _this$_effectCreator[EnumEffect.BONUS] = {
            condition: function condition() {
              return _this5.kingdomPlayerResponse.SpinData.BonusGameData !== "";
            },
            effect: function () {
              var _effect4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var anim;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _this5.effectBonus.active = true;
                      anim = _this5.effectBonus.getComponentInChildren(sp.Skeleton);
                      anim.setAnimation(0, "animation", false);
                      KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.FX_BONUS);
                      _context6.next = 6;
                      return new Promise(function (resolve) {
                        _this5.scheduleOnce(function () {
                          _this5.effectBonus.active = false;
                          resolve();
                        }, 3);
                      });
                    case 6:
                      _context6.next = 8;
                      return _this5.showBonusGame();
                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              function effect() {
                return _effect4.apply(this, arguments);
              }
              return effect;
            }()
          }, _this$_effectCreator);
        };
        _proto.onClickSpin = function onClickSpin() {
          var _this6 = this;
          this.isSpinning = true;
          if (this.isTrial) {
            this.lblSession.string = '';
            this.resetSession();
            var rIdx = Utils.randomRangeInt(0, KingdomTrial.Result.length);
            this.kingdomPlayerResponse.SpinData = KingdomTrial.Result[rIdx];
            this.trialBalance -= 2000;
            KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.REEL_SPIN);
            this.slotMachine.startSpin(this.kingdomPlayerResponse.SpinData.SlotsData).then(function () {
              _this6.onSpinComplete();
              _this6.trialBalance += _this6.getPayLinePrize();
            });
            return;
          }
          if (this.freeTicket > 0 && this.totalFreeSpin <= 0) {
            this._spinWithTicket();
          } else {
            this._spin();
          }
        };
        _proto._spin = function _spin() {
          var _this7 = this;
          KingdomSignalRClient.getInstance().send('Spin', [{
            "CurrencyID": Configs.Login.CurrencyID,
            "RoomID": this.roomID,
            "Lines": this.popupSelectLine.getSelectedLines().join(",")
          }], function (data) {
            if (data.c < 0) {
              _this7.currentAutoSpin = 0;
              _this7.isSpinning = false;
              _this7.showWarningPopup(App.instance.getTextLang("me" + data.c));
            }
          });
        };
        _proto._spinWithTicket = function _spinWithTicket() {
          var _this8 = this;
          KingdomSignalRClient.getInstance().send('SpinForTicket', [{
            "CurrencyID": Configs.Login.CurrencyID,
            "RoomID": this.roomID,
            "Lines": this.popupSelectLine.getSelectedLines().join(",")
          }], function (data) {
            if (data.c < 0) {
              _this8.currentAutoSpin = 0;
              _this8.isSpinning = false;
              _this8.showWarningPopup(App.instance.getTextLang("me" + data.c));
            }
          });
        };
        _proto.parsePositionData = function parsePositionData(positionData) {
          var payLines = positionData.split(";").map(function (row) {
            return row.split(",").map(Number);
          });
          var commonPayLines = Array.from(new Set(payLines.flat()));
          return {
            payLines: payLines,
            commonPayLines: commonPayLines
          };
        };
        _proto.parsePrizeData = function parsePrizeData(prizeData) {
          return prizeData.split(";");
        };
        _proto.onSpinComplete = function onSpinComplete() {
          var _this9 = this;
          KingdomAudioManager.Instance.stopEffect(AUDIO_CLIP.REEL_SPIN);
          var payLinePrize = this.getPayLinePrize();
          var isFreeSpinCompleted = false;
          this.lblWinCash.string = '0';
          if (this.totalFreeSpin > 0) {
            this.totalFreeSpinPrize += payLinePrize;
            this.totalFreeSpin--;
            if (this.totalFreeSpin === 0) {
              isFreeSpinCompleted = true;
            }
          } else {
            if (this.freeTicket > 0) {
              this.freeTicket--;
            }
            if (this.currentAutoSpin > 0) {
              this.currentAutoSpin--;
            }
          }
          var _this$parsePositionDa = this.parsePositionData(this.kingdomPlayerResponse.SpinData.PositionData),
            payLines = _this$parsePositionDa.payLines,
            commonPayLines = _this$parsePositionDa.commonPayLines;
          var prizeData = this.parsePrizeData(this.kingdomPlayerResponse.SpinData.PrizesData);
          var delay = 0.5;
          if (payLinePrize > 0) {
            delay = 1.5;
            this.showTextPayLine(payLinePrize);
            this.slotMachine.highlightItems(commonPayLines, prizeData).then();
            TweenUtils.numberTo(this.lblWinCash, payLinePrize, 0.5);
          }

          // Replace the runAction with tween system
          Tween.stopAllByTarget(this.node);
          tween(this.node).delay(delay).call(function () {
            _this9.showEffects( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var i;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _this9.isSpinning = false;
                    if (!(_this9.totalFreeSpin > 0)) {
                      _context7.next = 4;
                      break;
                    }
                    _this9.onClickSpin();
                    return _context7.abrupt("return");
                  case 4:
                    if (!isFreeSpinCompleted) {
                      _context7.next = 8;
                      break;
                    }
                    _context7.next = 7;
                    return _this9.toast.showFreeSpinReward(_this9.totalFreeSpinPrize);
                  case 7:
                    _this9.totalFreeSpinPrize = 0;
                  case 8:
                    if (!(_this9.currentAutoSpin > 0)) {
                      _context7.next = 11;
                      break;
                    }
                    _this9.onClickSpin();
                    return _context7.abrupt("return");
                  case 11:
                    if (!payLinePrize) {
                      _context7.next = 19;
                      break;
                    }
                    i = 0;
                  case 13:
                    if (!(i < payLines.length)) {
                      _context7.next = 19;
                      break;
                    }
                    _context7.next = 16;
                    return _this9.slotMachine.highlightItems(payLines[i], [prizeData[i]]);
                  case 16:
                    i++;
                    _context7.next = 13;
                    break;
                  case 19:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            })));
          }).start();
        };
        _proto.showEffects = function showEffects(finishCallback) {
          var awaitable = [];

          // Check and add big win or jackpot effect (mutually exclusive)
          if (this._effectCreator[EnumEffect.JACKPOT].condition()) {
            this.currentAutoSpin = 0;
            awaitable.push(this._effectCreator[EnumEffect.JACKPOT].effect);
          } else if (this._effectCreator[EnumEffect.BIGWIN].condition()) {
            awaitable.push(this._effectCreator[EnumEffect.BIGWIN].effect);
          }
          if (this._effectCreator[EnumEffect.BONUS].condition()) {
            awaitable.push(this._effectCreator[EnumEffect.BONUS].effect);
          }
          if (this._effectCreator[EnumEffect.FREESPIN].condition()) {
            var newFreeSpin = this.kingdomPlayerResponse.SpinData.TotalFreeSpin;
            if (this.totalFreeSpin <= 0) {
              this.lblFreeSpinEffect.string = newFreeSpin.toString();
              awaitable.push(this._effectCreator[EnumEffect.FREESPIN].effect);
            }
            this.totalFreeSpin += newFreeSpin;
          }

          // Execute all effects in sequence
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var _i, _awaitable, aw;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _i = 0, _awaitable = awaitable;
                case 1:
                  if (!(_i < _awaitable.length)) {
                    _context8.next = 8;
                    break;
                  }
                  aw = _awaitable[_i];
                  _context8.next = 5;
                  return aw();
                case 5:
                  _i++;
                  _context8.next = 1;
                  break;
                case 8:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }))().then(function () {
            finishCallback();
          });
        };
        _proto.updateGoldCoin = function updateGoldCoin(coin) {
          // if (coin <= 0) return;
          if (this.isTrial) return;
          if (coin < 0) return; // gold < 0, don't update balance
          Configs.Login.GoldBalance = coin;
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
        };
        _proto.getPayLinePrize = function getPayLinePrize() {
          var _this$kingdomPlayerRe;
          return (_this$kingdomPlayerRe = this.kingdomPlayerResponse.SpinData.PayLinePrizeValue) != null ? _this$kingdomPlayerRe : 0;
        };
        _proto.updateMultiplierIcon = function updateMultiplierIcon() {
          var _this10 = this;
          this.getRoomMultiplier(this.roomID).then(function (multiplier) {
            _this10.eventIcon.node.active = multiplier > 0;
            _this10.eventIcon.setIcon(multiplier, 0);
          });
        };
        _proto.checkFreeTicket = function checkFreeTicket() {
          var _this11 = this;
          Http.get(Configs.App.DOMAIN_CONFIG['GetAccountTicket'], {
            CurrencyID: Configs.Login.CurrencyID,
            GameID: Configs.InGameIds.Kingdom
          }, function (status, res) {
            if (status === 200) {
              var data = res.d.filter(function (item) {
                return item.roomID === _this11.roomID;
              });
              var count = data.reduce(function (sum, item) {
                return sum + item.balance;
              }, 0);
              _this11.freeTicket = count;
            }
          });
        };
        _proto.getRoomMultiplier = /*#__PURE__*/function () {
          var _getRoomMultiplier = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(roomID) {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  return _context9.abrupt("return", new Promise(function (resolve) {
                    Http.get(Configs.App.DOMAIN_CONFIG['GetListJackpot'], {
                      CurrencyID: Configs.Login.CurrencyID
                    }, function (status, res) {
                      if (status !== 200 || !(res != null && res.d)) {
                        resolve(0);
                        return;
                      }
                      var item = res.d.find(function (item) {
                        return item.gameID === Configs.InGameIds.Kingdom && item.roomID === roomID && item.nextJackpot === 0;
                      });
                      resolve(item ? item.multiplier : 0);
                    });
                  }));
                case 1:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
          function getRoomMultiplier(_x3) {
            return _getRoomMultiplier.apply(this, arguments);
          }
          return getRoomMultiplier;
        }();
        _proto.onClickRoomID = function onClickRoomID(button, roomID) {
          var ID = parseInt(roomID);
          this.roomID = ID;
          this.popupSelectLine.currentRoom = ID;
        };
        _proto.onChangeBetUp = function onChangeBetUp() {
          var roomID = this.roomID;
          roomID = roomID === 3 ? 1 : roomID + 1;
          this.roomID = roomID;
          this.popupSelectLine.currentRoom = roomID;
        };
        _proto.onChangeBetDown = function onChangeBetDown() {
          var roomID = this.roomID;
          roomID = roomID === 1 ? 3 : roomID - 1;
          this.roomID = roomID;
          this.popupSelectLine.currentRoom = roomID;
        };
        _proto.showBonusGame = /*#__PURE__*/function () {
          var _showBonusGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var _this12 = this;
            var bonusData, startBonus;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  bonusData = this.kingdomPlayerResponse.SpinData.BonusGameData;
                  startBonus = this.kingdomPlayerResponse.SpinData.StartBonus;
                  _context10.next = 4;
                  return new Promise(function (resolve) {
                    _this12.popupBonus.onFinished = function () {
                      _this12.onFinishBonusGame();
                      resolve();
                    };
                    KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.ENTER_BONUS);
                    _this12.popupBonus.showPopup(bonusData, startBonus);
                  });
                case 4:
                  KingdomAudioManager.Instance.stopEffect(AUDIO_CLIP.REWARD_BONUS);
                  _context10.next = 7;
                  return this.toast.showBonusReward(this.popupBonus.getFinishWin());
                case 7:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function showBonusGame() {
            return _showBonusGame.apply(this, arguments);
          }
          return showBonusGame;
        }();
        _proto.onFinishBonusGame = function onFinishBonusGame() {
          var _this13 = this;
          KingdomSignalRClient.getInstance().send('PlayBonusGame', [{
            "RoomID": this.roomID,
            "CurrencyID": Configs.Login.CurrencyID
          }], function (data) {
            if (data.c < 0) {
              _this13.showWarningPopup(App.instance.getTextLang("me" + data.c));
            }
          });
        };
        _proto.setButtonEnable = function setButtonEnable(enable) {
          this.btnSpin.interactable = enable;
          this.btnSelectLine.interactable = enable;
          this.toggleAutoSpin.isChecked = false;
          this.toggleAutoSpin.interactable = enable;
          this.toggleTrial.interactable = enable;
          this.btnBetUp.interactable = enable;
          this.btnBetDown.interactable = enable;
          this.btnStopAutoSpin.interactable = true;
        };
        _proto.resetAllEffect = function resetAllEffect() {
          this.effectBigWin.stop();
          this.effectJackpot.stop();
          Tween.stopAllByTarget(this.effectFreeSpin);
          this.effectBonus.getComponentInChildren(sp.Skeleton).clearTrack(0);
          this.effectBigWin.node.active = false;
          this.effectJackpot.node.active = false;
          this.effectFreeSpin.active = false;
          this.effectBonus.active = false;
        };
        _proto.showWarningPopup = function showWarningPopup(message) {
          var _this14 = this;
          this.warningPopup.active = true;
          this.warningPopup.getComponentInChildren(Label).string = message;
          // auto hide after 2s
          this.scheduleOnce(function () {
            _this14.warningPopup.active = false;
          }, 2);
        };
        _proto.showTextPayLine = function showTextPayLine(prize) {
          var _this15 = this;
          if (this._effectCreator[EnumEffect.BIGWIN].condition() || this._effectCreator[EnumEffect.JACKPOT].condition()) return;
          KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.WIN);
          this.lblNormalPrize.string = '';
          TweenUtils.numberTo(this.lblNormalPrize, prize, 0.5);
          this.lblNormalPrize.node.parent.active = true;
          this.scheduleOnce(function () {
            _this15.lblNormalPrize.node.parent.active = false;
          }, 1.5);
        };
        _proto.showTextJackpot = function showTextJackpot(prize, duration) {
          KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.JACKPOT);
          KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.COUNTER, true);
          this.scheduleOnce(function () {
            KingdomAudioManager.Instance.stopEffect(AUDIO_CLIP.COUNTER);
          }, duration);
          this.lblJackpotPrize.string = '';
          TweenUtils.numberTo(this.lblJackpotPrize, prize, duration);
        };
        _proto.showTextBigWin = function showTextBigWin(prize, duration) {
          KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.FX_BIGWIN);
          KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.COUNTER, true);
          this.scheduleOnce(function () {
            KingdomAudioManager.Instance.stopEffect(AUDIO_CLIP.COUNTER);
          }, duration);
          this.lblBigWinPrize.string = '';
          TweenUtils.numberTo(this.lblBigWinPrize, prize, duration);
        }

        // Show guide popup
        ;

        _proto.showGuide = function showGuide() {
          if (this.isSpinning) return;
          this.toggleSetting.isChecked = false;
          this.mainGame.active = false;
          this.bottomHud.active = false;
          this.buttonBackPopup.active = true;
          this.popupLSC.dismiss();
          this.popupLSH.dismiss();
          this.popupGuide.show();
          this.popupSelectLine.dismiss();
          this.popupGuide.onRoomChange(this.roomID);
        }

        // Show history popup
        ;

        _proto.showHistory = function showHistory() {
          if (this.isSpinning) return;
          this.toggleSetting.isChecked = false;
          this.mainGame.active = false;
          this.bottomHud.active = false;
          this.buttonBackPopup.active = true;
          this.popupLSC.show();
          this.popupLSH.dismiss();
          this.popupGuide.dismiss();
          this.popupSelectLine.dismiss();
        }

        // Show jackpot history popup
        ;

        _proto.showJackpotHistory = function showJackpotHistory() {
          if (this.isSpinning) return;
          this.toggleSetting.isChecked = false;
          this.mainGame.active = false;
          this.bottomHud.active = false;
          this.buttonBackPopup.active = true;
          this.popupLSC.dismiss();
          this.popupLSH.show();
          this.popupGuide.dismiss();
          this.popupSelectLine.dismiss();
        }

        // Show select line popup
        ;

        _proto.showSelectLine = function showSelectLine() {
          if (this.isTrial) {
            this.showWarningPopup(App.instance.getTextLang("me35"));
            return;
          }
          this.toggleSetting.isChecked = false;
          this.mainGame.active = false;
          this.bottomHud.active = false;
          this.buttonBackPopup.active = true;
          this.popupLSC.dismiss();
          this.popupLSH.dismiss();
          this.popupGuide.dismiss();
          this.popupSelectLine.show();
        };
        _proto.onClickSound = function onClickSound() {
          var isMute = KingdomAudioManager.Instance.isMuteEffect;
          KingdomAudioManager.Instance.muteEffect(!isMute);
        };
        _proto.onClickMusic = function onClickMusic() {
          var isMute = KingdomAudioManager.Instance.isMuteMusic;
          KingdomAudioManager.Instance.muteMusic(!isMute);
        };
        _proto.hidePopup = function hidePopup() {
          this.mainGame.active = true;
          this.bottomHud.active = true;
          this.buttonBackPopup.active = false;
          this.popupLSC.dismiss();
          this.popupLSH.dismiss();
          this.popupGuide.dismiss();
          this.popupSelectLine.dismiss();
        };
        _proto.showFeatureInDevelop = function showFeatureInDevelop() {
          App.instance.alertDialog.showMsg(App.instance.getTextLang("fish_pu5"));
        };
        _proto.backToLobby = function backToLobby() {
          KingdomSignalRClient.getInstance().dontReceive();
          App.instance.slotGame[Configs.InGameIds.Kingdom] = null;
          App.instance.gotoLobby();
        };
        _proto.actHidden = function actHidden() {
          var _this16 = this;
          this.toggleSetting.isChecked = false;
          if (this.currentAutoSpin > 0) {
            App.instance.confirmDialog.showMsg(App.instance.getTextLang("sl74"), function () {
              KingdomAudioManager.Instance.pauseAllAudio();
              _this16.node.parent.setPosition(v3(10000, 0, 0));
            });
          } else {
            App.instance.ShowAlertDialog(App.instance.getTextLang("sl90"));
          }
        };
        _proto.resetSession = function resetSession() {
          // this.lblJackpotPrize.string = '0';
          this.slotMachine.resetAllItems();
          Tween.stopAllByTarget(this.node);
          KingdomAudioManager.Instance.stopAllEffect();
        };
        _proto.onClickStopAutoSpin = function onClickStopAutoSpin() {
          this.currentAutoSpin = 0;
        };
        _proto.onToggleTrial = function onToggleTrial() {
          if (this.isSpinning) return;
          this.isTrial = this.toggleTrial.isChecked;
          if (this.isTrial) {
            this.lblBet.string = '100';
            this.lblTotalSelectedLine.string = '20';
            this.lblTotalBet.string = '2.000';
            this.trialBalance = 10000000;
          } else {
            var betValue = this.kingdomPlayerResponse.BetValue;
            var lineCount = this.popupSelectLine.getSelectedLines().length;
            this.lblBet.string = Utils.formatNumber(betValue);
            this.lblTotalSelectedLine.string = lineCount.toString();
            this.lblTotalBet.string = Utils.formatNumber(lineCount * betValue);
          }
          this.lblTrialBalance.node.parent.active = this.isTrial;
        };
        _createClass(KingdomController, [{
          key: "isSpinning",
          get: function get() {
            return this._isSpinning;
          },
          set: function set(value) {
            this._isSpinning = value;
            this.btnSpin.interactable = !value;
            this.btnSelectLine.interactable = !value;
            this.toggleAutoSpin.isChecked = false;
            this.toggleAutoSpin.interactable = !value;
            this.btnBetUp.interactable = !value;
            this.btnBetDown.interactable = !value;
            if (value) {
              this.resetAllEffect();
            }
          }
        }, {
          key: "isTurbo",
          get: function get() {
            return this._isTurbo;
          },
          set: function set(value) {
            this._isTurbo = value;
            this.slotMachine.setTurbo(value);
          }
        }, {
          key: "totalFreeSpin",
          get: function get() {
            return this._totalFreeSpin;
          },
          set: function set(freeSpin) {
            this._totalFreeSpin = freeSpin;
            this.lblFreeSpin.string = Utils.formatNumber(freeSpin);
            this.lblFreeSpin.node.parent.active = freeSpin > 0;
          }
        }, {
          key: "currentAutoSpin",
          get: function get() {
            return this._currentAutoSpin;
          },
          set: function set(value) {
            this._currentAutoSpin = value;
            this.textAutoSpin.active = value <= 0;
            this.lblTotalAutoSpin.string = Utils.formatNumber(value);
            this.btnStopAutoSpin.node.active = value > 0;
            this.lblTotalAutoSpin.node.active = value > 0;
          }
        }, {
          key: "trialBalance",
          get: function get() {
            return this._trialBalance;
          },
          set: function set(value) {
            this._trialBalance = value;
            this.lblTrialBalance.string = Utils.formatNumber(value);
          }
        }, {
          key: "roomID",
          get: function get() {
            return this._roomID;
          },
          set: function set(value) {
            var _this17 = this;
            this._roomID = value;
            this.dispatch( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(observer) {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    observer.onChangeRoom(_this17, value);
                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            })));
            KingdomSignalRClient.getInstance().send('PlayNow', [{
              "CurrencyID": Configs.Login.CurrencyID,
              "RoomID": value
            }], function (data) {});
          }
        }, {
          key: "freeTicket",
          get: function get() {
            return this._freeTicket;
          },
          set: function set(value) {
            this._freeTicket = value;
            this.lblFreeTicket.string = value.toString();
            this.lblFreeTicket.node.parent.active = value > 0;
          }
        }]);
        return KingdomController;
      }(Component), _class3.sharedInstance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slotMachine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popupLSC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "popupLSH", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "popupGuide", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "popupBonus", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "popupSelectLine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mainGame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bottomHud", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "buttonBackPopup", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "warningPopup", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblBet", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpot", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblWinCash", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalSelectedLine", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalAutoSpin", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "textAutoSpin", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lblFreeSpin", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotPrize", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotNum", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "lblBigWinPrize", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "lblNormalPrize", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "lblFreeSpinEffect", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "lblFreeTicket", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "btnSpin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "btnSelectLine", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "btnStopAutoSpin", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "toggleAutoSpin", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "toggleSetting", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "toggleTurbo", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "toggleTrial", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "lblTrialBalance", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "toggleMusic", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "toggleSound", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "btnBetUp", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "btnBetDown", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "effectBigWin", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "effectJackpot", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "effectFreeSpin", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "effectBonus", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "infoPanel", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "eventIcon", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomPayLines.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "1febbLwco9Ge7yv7Z8W9Kgb", "KingdomPayLines", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KingdomPayLines = exports('default', (_dec = ccclass("KingdomPayLines"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomPayLines, _Component);
        function KingdomPayLines() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = KingdomPayLines.prototype;
        _proto.onLoad = function onLoad() {
          this.node.children.forEach(function (child) {
            return child.active = false;
          });
        };
        _proto.showPayLinesAnimation = /*#__PURE__*/function () {
          var _showPayLinesAnimation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(prizeLines) {
            var activePayLines, _iterator, _step, p;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  activePayLines = [];
                  for (_iterator = _createForOfIteratorHelperLoose(prizeLines); !(_step = _iterator()).done;) {
                    p = _step.value;
                    if (p !== '') {
                      activePayLines.push(this.node.getChildByName("Line" + p.split(",")[0]));
                    }
                  }
                  activePayLines.forEach(function (line) {
                    line.active = true;
                  });
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showPayLinesAnimation(_x) {
            return _showPayLinesAnimation.apply(this, arguments);
          }
          return showPayLinesAnimation;
        }();
        _proto.resetAllPayLines = function resetAllPayLines() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node.children), _step2; !(_step2 = _iterator2()).done;) {
            var line = _step2.value;
            line.active = false;
          }
        };
        return KingdomPayLines;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomPopupBonus.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KingdomAudioManager.ts', './App.ts', './TweenUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, Button, Animation, Component, KingdomAudioManager, AUDIO_CLIP, App, TweenUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      KingdomAudioManager = module.KingdomAudioManager;
      AUDIO_CLIP = module.AUDIO_CLIP;
    }, function (module) {
      App = module.default;
    }, function (module) {
      TweenUtils = module.TweenUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "c2a33y1LtZMLKWlmTqyBwjT", "KingdomPopupBonus", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var eANIMATION = /*#__PURE__*/function (eANIMATION) {
        eANIMATION["FIRE"] = "fire";
        eANIMATION["SKULL"] = "skull";
        eANIMATION["DIAMOND"] = "diamond";
        eANIMATION["MEDAL"] = "medal";
        return eANIMATION;
      }(eANIMATION || {});
      var KingdomPopupBonus = exports('default', (_dec = menu("Kingdom/PopupBonus"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomPopupBonus, _Component);
        function KingdomPopupBonus() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "items", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTurn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPoint", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCountDownTime", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniGame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quickPlay", _descriptor7, _assertThisInitialized(_this));
          _this._countdownInterval = void 0;
          _this.bonusData = [];
          _this.onFinished = null;
          _this.totalTurn = void 0;
          _this.startBonus = void 0;
          _this.amulate = 0;
          _this.left = 0;
          _this.time = 0;
          return _this;
        }
        var _proto = KingdomPopupBonus.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          var _loop = function _loop() {
            var node = _this2.items.children[i];
            node["btn"] = node.getComponent(Button);
            node["label"] = node.getChildByName("Price").getComponent(Label);
            node["anim"] = node.getComponent(Animation);
            node["isOpen"] = false;
            node.on("click", function () {
              _this2.quickPlay.active = false;
              if (_this2._countdownInterval !== null) {
                clearInterval(_this2._countdownInterval);
                _this2._countdownInterval = null;
              }
              if (node["isOpen"] === false) {
                var _this2$bonusData = _this2.bonusData[_this2.bonusData.length - _this2.left],
                  step = _this2$bonusData[0],
                  rewardID = _this2$bonusData[1],
                  multiplier = _this2$bonusData[2],
                  price = _this2$bonusData[3];
                node["isOpen"] = true;
                switch (rewardID) {
                  case 201:
                  case 202:
                  case 203:
                    KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.BONUS_BONUS);
                    node["label"].string = "0";
                    node["label"].node.active = true;
                    // use tween utils
                    TweenUtils.numberTo(node["label"], price, 1);
                    // Tween.numberTo(node["label"], price, 1);
                    _this2.showMiniGame(price, function () {
                      _this2.left--;
                      _this2.totalTurn--;
                      _this2._updateUI();
                    });
                    node["anim"].play(eANIMATION.DIAMOND);
                    break;
                  case 210:
                    KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.BONUS_LOSE);
                    node["anim"].play(eANIMATION.SKULL);
                    _this2.left--;
                    _this2.amulate++;
                    _this2._updateUI();
                    break;
                  case 220:
                    KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.CLICK);
                    node["label"].string = "0";
                    node["label"].node.active = true;
                    TweenUtils.numberTo(node["label"], price, 0.3);
                    node["anim"].play(eANIMATION.MEDAL);
                    _this2.left--;
                    _this2.totalTurn--;
                    _this2._updateUI();
                    break;
                }
              }
            });
          };
          for (var i = 0; i < this.items.children.length; i++) {
            _loop();
          }
          for (var _i = 0; _i < this.items2.children.length; _i++) {
            var node = this.items2.children[_i];
            node["btn"] = node.getComponent(Button);
            node["label"] = node.getChildByName("Price").getComponent(Label);
            node["anim"] = node.getComponent(Animation);
            node["isOpen"] = false;
          }
        };
        _proto.showPopup = function showPopup(data, startBonus) {
          this.node.active = true;
          this.miniGame.active = false;
          for (var i = 0; i < this.items.children.length; i++) {
            var node = this.items.children[i];
            node["isOpen"] = false;
            node["btn"].interactable = true;
            node["label"].node.active = false;
            node["anim"].play(eANIMATION.FIRE);
          }
          this.bonusData = [];
          for (var _iterator = _createForOfIteratorHelperLoose(data.split(";")), _step; !(_step = _iterator()).done;) {
            var d = _step.value;
            this.bonusData.push(d.split(",").map(Number));
          }
          this.totalTurn = 10;
          this.amulate = 1;
          this.startBonus = startBonus;
          this.quickPlay.active = true;
          this.lblTurn.node.parent.active = true;
          this.lblPoint.node.parent.active = true;
          this.left = this.bonusData.length;
          this.startCountdown(15);
          this._updateUI();
        };
        _proto.completeGame = function completeGame() {
          clearInterval(this._countdownInterval);
          this.node.active = false;
          this.onFinished && this.onFinished();
        };
        _proto.showMiniGame = function showMiniGame(prizeValue, cb) {
          var _this3 = this;
          this.miniGame.active = true;
          var _loop2 = function _loop2() {
            var node = _this3.items2.children[i];
            node["btn"] = node.getComponent(Button);
            node["label"] = node.getChildByName("Price").getComponent(Label);
            node["anim"] = node.getComponent(Animation);
            node["btn"].interactable = true;
            node["label"].node.active = false;
            node["anim"].play(eANIMATION.DIAMOND);
            node["label"].string = "";
            node["isOpen"] = false;
            node.off("click");
            node.on("click", function () {
              if (node["isOpen"] === false) {
                KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.CLICK);
                node["isOpen"] = true;
                node["btn"].interactable = false;
                node["label"].node.active = true;
                TweenUtils.numberTo(node["label"], prizeValue, 0.5);
                node["anim"].play(eANIMATION.MEDAL);
                _this3.scheduleOnce(function () {
                  _this3.miniGame.active = false;
                  cb && cb();
                }, 1);
              }
            });
          };
          for (var i = 0; i < this.items2.children.length; i++) {
            _loop2();
          }
        };
        _proto.startCountdown = function startCountdown(seconds) {
          var _this4 = this;
          this.time = seconds;
          this.lblCountDownTime.string = this.getTimeString(seconds);
          this._countdownInterval = setInterval(function () {
            _this4.time--;
            _this4.lblCountDownTime.string = _this4.getTimeString(_this4.time);
            if (_this4.time <= 0) {
              clearInterval(_this4._countdownInterval);
              _this4.node.active = false;
              _this4.onFinished && _this4.onFinished();
            }
          }, 1000);
        };
        _proto.getTimeString = function getTimeString(remainTime) {
          var text = App.instance.getTextLang("sl78");
          return text.replace("15", remainTime.toString());
        };
        _proto._updateUI = function _updateUI() {
          var _this5 = this;
          this.lblTurn.string = this.totalTurn.toString();
          this.lblPoint.string = this.amulate.toString();

          // if turn = 0, then hide
          if (this.totalTurn <= 0) {
            clearInterval(this._countdownInterval);
            this.scheduleOnce(function () {
              _this5.node.active = false;
              _this5.onFinished && _this5.onFinished();
            }, 1);
          }
        };
        _proto.getFinishWin = function getFinishWin() {
          return this.bonusData.reduce(function (sum, item) {
            return sum + item[3];
          }, 0);
        };
        return KingdomPopupBonus;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "items2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTurn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblPoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblCountDownTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "miniGame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "quickPlay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomPopupGuide.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3944eOFZPlE8LLxgrx/zGtA", "KingdomPopupGuide", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KingdomPopupGuide = exports('default', (_dec = menu("Kingdom/PopupGuide"), _dec2 = property([SpriteFrame]), _dec3 = property(Sprite), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomPopupGuide, _Component);
        function KingdomPopupGuide() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "frames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = KingdomPopupGuide.prototype;
        _proto.onRoomChange = function onRoomChange(roomID) {
          this.content.spriteFrame = this.frames[roomID - 1];
        };
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.dismiss = function dismiss() {
          this.node.active = false;
        };
        return KingdomPopupGuide;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomPopupLSC.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, error, App, Configs, Http, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      error = module.error;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "30dd4nAamlJ+4e0ZuM4MzIq", "KingdomPopupLSC", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KingdomPopupLSC = exports('default', (_dec = menu("Kingdom/PopupLSC"), _dec2 = property(Node), _dec3 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomPopupLSC, _Component);
        function KingdomPopupLSC() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContainer", _descriptor2, _assertThisInitialized(_this));
          _this.currentPage = 1;
          _this.pageSize = 11;
          _this.isLoading = false;
          _this.hasMoreData = true;
          return _this;
        }
        var _proto = KingdomPopupLSC.prototype;
        _proto.show = function show() {
          this.node.active = true;
          this.itemContainer.removeAllChildren();
          this.resetPagination();
          this.loadData().then();
          this.getComponentInChildren(ScrollView).node.on('scroll-to-bottom', this.onScrollToBottom, this);
        };
        _proto.dismiss = function dismiss() {
          this.node.active = false;
          this.getComponentInChildren(ScrollView).node.off('scroll-to-bottom', this.onScrollToBottom, this);
        };
        _proto.resetPagination = function resetPagination() {
          this.currentPage = 1;
          this.hasMoreData = true;
          this.isLoading = false;
        };
        _proto.onScrollToBottom = function onScrollToBottom() {
          if (!this.isLoading && this.hasMoreData) {
            this.loadMoreData().then();
          }
        };
        _proto.loadData = /*#__PURE__*/function () {
          var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.isLoading = true;
                  App.instance.showLoading(true);
                  _context.prev = 2;
                  _context.next = 5;
                  return this.fetchHistory(this.currentPage);
                case 5:
                  result = _context.sent;
                  this.displayData(result);
                  // Check if we have more data
                  this.hasMoreData = result.length >= this.pageSize;
                  _context.next = 13;
                  break;
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  error("Error fetching History", _context.t0);
                case 13:
                  _context.prev = 13;
                  this.isLoading = false;
                  App.instance.showLoading(false);
                  return _context.finish(13);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 10, 13, 17]]);
          }));
          function loadData() {
            return _loadData.apply(this, arguments);
          }
          return loadData;
        }();
        _proto.loadMoreData = /*#__PURE__*/function () {
          var _loadMoreData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.isLoading || !this.hasMoreData)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this.isLoading = true;
                  App.instance.showLoading(true);
                  _context2.prev = 4;
                  this.currentPage++;
                  _context2.next = 8;
                  return this.fetchHistory(this.currentPage);
                case 8:
                  result = _context2.sent;
                  this.appendData(result);
                  // Check if we have more data
                  this.hasMoreData = result.length >= this.pageSize;
                  _context2.next = 17;
                  break;
                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](4);
                  this.currentPage--; // Rollback page increment if error occurs
                  error("Error fetching more History", _context2.t0);
                case 17:
                  _context2.prev = 17;
                  this.isLoading = false;
                  App.instance.showLoading(false);
                  return _context2.finish(17);
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[4, 13, 17, 21]]);
          }));
          function loadMoreData() {
            return _loadMoreData.apply(this, arguments);
          }
          return loadMoreData;
        }();
        _proto.fetchHistory = function fetchHistory(page) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            Http.get(Configs.App.DOMAIN_CONFIG['Kingdom_GetTransactionLog'], {
              "CurrencyID": Configs.Login.CurrencyID,
              "type": 1,
              "Page": page,
              "PageSize": _this2.pageSize
            }, function (status, response) {
              if (status === 200) {
                resolve(response["d"]);
              } else {
                reject(new Error("Error fetching History"));
              }
            });
          });
        };
        _proto.displayData = function displayData(result) {
          this.itemContainer.removeAllChildren();
          this.createItems(result);
        };
        _proto.appendData = function appendData(result) {
          this.createItems(result);
        };
        _proto.createItems = function createItems(result) {
          for (var i = 0; i < result.length; i++) {
            var itemRow = instantiate(this.itemTemplate);
            itemRow.active = true;
            this.itemContainer.addChild(itemRow);
            var winLineLength = result[i].prizeData ? result[i].prizeData.split(";").length : 0;
            // Populate the row with data
            itemRow.children[0].getComponent(Label).string = result[i].spinID;
            itemRow.children[1].getComponent(Label).string = Utils.formatDatetime(result[i].createTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[2].getComponent(Label).string = Utils.formatMoneyOnlyK(result[i].betValue);
            itemRow.children[3].getComponent(Label).string = Utils.formatNumber(result[i].totalBetValue);
            itemRow.children[4].getComponent(Label).string = winLineLength.toString() + " " + App.instance.getTextLang('oc7');
            itemRow.children[5].getComponent(Label).string = Utils.formatNumber(result[i].paylinePrizeValue);
          }
        };
        return KingdomPopupLSC;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomPopupLSH.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, error, App, Configs, Http, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      error = module.error;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "517c87qBvZDE72FC7R+vgmJ", "KingdomPopupLSH", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KingdomPopupLSH = exports('default', (_dec = menu("Kingdom/PopupLSH"), _dec2 = property(Node), _dec3 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomPopupLSH, _Component);
        function KingdomPopupLSH() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContainer", _descriptor2, _assertThisInitialized(_this));
          _this.ROOM_BET_VALUES = {
            1: 100,
            2: 1000,
            3: 10000
          };
          _this.currentPage = 1;
          _this.pageSize = 11;
          _this.isLoading = false;
          _this.hasMoreData = true;
          return _this;
        }
        var _proto = KingdomPopupLSH.prototype;
        _proto.show = function show() {
          this.node.active = true;
          this.itemContainer.removeAllChildren();
          this.resetPagination();
          this.loadData().then();

          // Add scroll event listener
          this.getComponentInChildren(ScrollView).node.on('scroll-to-bottom', this.onScrollToBottom, this);
        };
        _proto.dismiss = function dismiss() {
          this.node.active = false;
          // Remove scroll event listener
          this.getComponentInChildren(ScrollView).node.off('scroll-to-bottom', this.onScrollToBottom, this);
        };
        _proto.resetPagination = function resetPagination() {
          this.currentPage = 1;
          this.hasMoreData = true;
          this.isLoading = false;
        };
        _proto.onScrollToBottom = function onScrollToBottom() {
          if (!this.isLoading && this.hasMoreData) {
            this.loadMoreData().then();
          }
        };
        _proto.loadData = /*#__PURE__*/function () {
          var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.isLoading = true;
                  App.instance.showLoading(true);
                  _context.prev = 2;
                  _context.next = 5;
                  return this.fetchHistory(this.currentPage);
                case 5:
                  result = _context.sent;
                  this.displayData(result);
                  this.hasMoreData = result.length >= this.pageSize;
                  _context.next = 13;
                  break;
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  error("Error fetching Jackpot History", _context.t0);
                case 13:
                  _context.prev = 13;
                  this.isLoading = false;
                  App.instance.showLoading(false);
                  return _context.finish(13);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 10, 13, 17]]);
          }));
          function loadData() {
            return _loadData.apply(this, arguments);
          }
          return loadData;
        }();
        _proto.loadMoreData = /*#__PURE__*/function () {
          var _loadMoreData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.isLoading || !this.hasMoreData)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this.isLoading = true;
                  App.instance.showLoading(true);
                  _context2.prev = 4;
                  this.currentPage++;
                  _context2.next = 8;
                  return this.fetchHistory(this.currentPage);
                case 8:
                  result = _context2.sent;
                  this.appendData(result);
                  this.hasMoreData = result.length >= this.pageSize;
                  _context2.next = 17;
                  break;
                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](4);
                  this.currentPage--; // Rollback page increment if error ors
                  error("Error fetching more Jackpot History", _context2.t0);
                case 17:
                  _context2.prev = 17;
                  this.isLoading = false;
                  App.instance.showLoading(false);
                  return _context2.finish(17);
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[4, 13, 17, 21]]);
          }));
          function loadMoreData() {
            return _loadMoreData.apply(this, arguments);
          }
          return loadMoreData;
        }();
        _proto.fetchHistory = function fetchHistory(page) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            Http.get(Configs.App.DOMAIN_CONFIG['Kingdom_GetTransactionLog'], {
              "CurrencyID": Configs.Login.CurrencyID,
              "type": 2,
              // TYPE 2 for jackpot history. TYPE 1 for my history
              "Page": page,
              "PageSize": _this2.pageSize
            }, function (status, response) {
              if (status === 200) {
                resolve(response["d"]);
              } else {
                reject(new Error("Error fetching Jackpot History"));
              }
            });
          });
        };
        _proto.displayData = function displayData(result) {
          this.itemContainer.removeAllChildren();
          this.createItems(result);
        };
        _proto.appendData = function appendData(result) {
          this.createItems(result);
        };
        _proto.createItems = function createItems(result) {
          for (var i = 0; i < result.length; i++) {
            var itemRow = instantiate(this.itemTemplate);
            itemRow.active = true;
            this.itemContainer.addChild(itemRow);

            // Get bet value from room bet values map, default to 100 if not found
            var betValue = this.ROOM_BET_VALUES[result[i].roomID] || 100;

            // Populate the row with data based on mockup columns
            itemRow.children[0].getComponent(Label).string = Utils.formatDatetime(result[i].createTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[1].getComponent(Label).string = Utils.formatMoneyOnlyK(result[i].betValue);
            // Format player name with [PORTAL] prefix
            itemRow.children[2].getComponent(Label).string = "" + result[i].nickname;
            itemRow.children[3].getComponent(Label).string = "" + result[i].jackPotNum;
            // Set win amount
            itemRow.children[4].getComponent(Label).string = Utils.formatNumber(result[i].paylinePrizeValue);
          }
        };
        return KingdomPopupLSH;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomPopupSelectLine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Button, Sprite, Toggle, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      Sprite = module.Sprite;
      Toggle = module.Toggle;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "02d4ebQfEhPpKFybBeEcALg", "KingdomPopupSelectLine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KingdomPopupSelectLine = exports('default', (_dec = menu("Kingdom/PopupSelectLine"), _dec2 = property(Node), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KingdomPopupSelectLine, _Component);
        function KingdomPopupSelectLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonLines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pressedSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetRoom1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetRoom2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetRoom3", _descriptor6, _assertThisInitialized(_this));
          _this._currentRoom = 1;
          _this._onSelectedChanged = null;
          return _this;
        }
        var _proto = KingdomPopupSelectLine.prototype;
        _proto.updateButtonRoom = function updateButtonRoom() {
          this.btnBetRoom1.target.getComponent(Sprite).spriteFrame = this._currentRoom === 1 ? this.pressedSpriteFrame : this.normalSpriteFrame;
          this.btnBetRoom2.target.getComponent(Sprite).spriteFrame = this._currentRoom === 2 ? this.pressedSpriteFrame : this.normalSpriteFrame;
          this.btnBetRoom3.target.getComponent(Sprite).spriteFrame = this._currentRoom === 3 ? this.pressedSpriteFrame : this.normalSpriteFrame;
        };
        _proto.setOnSelectedChanged = function setOnSelectedChanged(fn) {
          this._onSelectedChanged = fn;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.buttonLines.children.forEach(function (btn, index) {
            btn.on("toggle", function () {
              _this2.updateSelectedLines();
            });
          });
          this.updateSelectedLines();
        };
        _proto.updateSelectedLines = function updateSelectedLines() {
          var _this$_onSelectedChan;
          var selectedLines = this.getSelectedLines();
          (_this$_onSelectedChan = this._onSelectedChanged) == null || _this$_onSelectedChan.call(this, selectedLines);
        };
        _proto.getSelectedLines = function getSelectedLines() {
          var selectedLines = [];
          this.buttonLines.children.forEach(function (btn, index) {
            if (btn.getComponent(Toggle).isChecked) {
              selectedLines.push(index + 1);
            }
          });
          return selectedLines;
        };
        _proto.toggleLines = function toggleLines(condition) {
          this.buttonLines.children.forEach(function (btn, index) {
            var lineNumber = index + 1;
            btn.getComponent(Toggle).isChecked = condition(lineNumber);
          });
          this.updateSelectedLines();
        };
        _proto.activeEvenLines = function activeEvenLines() {
          this.toggleLines(function (index) {
            return index % 2 === 0;
          });
        };
        _proto.activeOddLines = function activeOddLines() {
          this.toggleLines(function (index) {
            return index % 2 !== 0;
          });
        };
        _proto.activeAllLines = function activeAllLines() {
          this.toggleLines(function () {
            return true;
          });
        };
        _proto.deactiveAllLines = function deactiveAllLines() {
          this.toggleLines(function () {
            return false;
          });
        };
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.dismiss = function dismiss() {
          this.node.active = false;
        };
        _createClass(KingdomPopupSelectLine, [{
          key: "currentRoom",
          get: function get() {
            return this._currentRoom;
          },
          set: function set(value) {
            this._currentRoom = value;
            this.updateButtonRoom();
          }
        }]);
        return KingdomPopupSelectLine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonLines", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pressedSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnBetRoom1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnBetRoom2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnBetRoom3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomSlotMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KingdomAudioManager.ts', './KingdomPayLines.ts', './KingdomSlotSymbol.ts', './BaseSlotMachine.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, randomRangeInt, KingdomAudioManager, AUDIO_CLIP, KingdomPayLines, KingdomSlotSymbol, BaseSlotMachine;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      randomRangeInt = module.randomRangeInt;
    }, function (module) {
      KingdomAudioManager = module.KingdomAudioManager;
      AUDIO_CLIP = module.AUDIO_CLIP;
    }, function (module) {
      KingdomPayLines = module.default;
    }, function (module) {
      KingdomSlotSymbol = module.default;
    }, function (module) {
      BaseSlotMachine = module.BaseSlotMachine;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e0b29boe6VLwKqydQDslQ/X", "KingdomSlotMachine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TURBO_CONFIG = {
        elasticPercent: 30,
        symbolOffset: 24,
        spinDuration: 1.5,
        delayReel: 0.1,
        rowCount: 3
      };
      var NORMAL_CONFIG = {
        elasticPercent: 40,
        symbolOffset: 24,
        spinDuration: 2,
        delayReel: 0.3,
        rowCount: 3
      };
      var KingdomSlotMachine = exports('default', (_dec = ccclass("KingdomSlotMachine"), _dec2 = property(KingdomPayLines), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseSlotMachine) {
        _inheritsLoose(KingdomSlotMachine, _BaseSlotMachine);
        function KingdomSlotMachine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseSlotMachine.call.apply(_BaseSlotMachine, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "payLines", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = KingdomSlotMachine.prototype;
        _proto.onLoad = function onLoad() {
          this.listeners = {
            onReelCompleted: function onReelCompleted() {
              KingdomAudioManager.Instance.playEffect(AUDIO_CLIP.END_REEL_SPIN);
            }
          };
        };
        _proto.initializeSymbol = function initializeSymbol(symbolNode, isBlur) {
          var sID = "" + randomRangeInt(1, 8);
          symbolNode.getComponent(KingdomSlotSymbol).setIsBlur(isBlur).setId(sID).show();
        };
        _proto.highlightItems = /*#__PURE__*/function () {
          var _highlightItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(indexes, prizeLines) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.payLines.showPayLinesAnimation(prizeLines);
                case 2:
                  _context.next = 4;
                  return _BaseSlotMachine.prototype.highlightItems.call(this, indexes, prizeLines);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function highlightItems(_x, _x2) {
            return _highlightItems.apply(this, arguments);
          }
          return highlightItems;
        }();
        _proto.resetAllItems = /*#__PURE__*/function () {
          var _resetAllItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _BaseSlotMachine.prototype.resetAllItems.call(this);
                  this.payLines.resetAllPayLines();
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function resetAllItems() {
            return _resetAllItems.apply(this, arguments);
          }
          return resetAllItems;
        }();
        _proto.setTurbo = function setTurbo(isTurbo) {
          this.setConfig(isTurbo ? TURBO_CONFIG : NORMAL_CONFIG);
        };
        return KingdomSlotMachine;
      }(BaseSlotMachine), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "payLines", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomSlotSymbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KingdomController.ts', './BaseSlotSymbol.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SpriteAtlas, Sprite, Color, Animation, KingdomController, SymbolState, BaseSlotSymbol;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      Sprite = module.Sprite;
      Color = module.Color;
      Animation = module.Animation;
    }, function (module) {
      KingdomController = module.default;
    }, function (module) {
      SymbolState = module.SymbolState;
      BaseSlotSymbol = module.BaseSlotSymbol;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "071d8kZu+RAzb+re5U9FciB", "KingdomSlotSymbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KingdomSlotSymbol = exports('default', (_dec = ccclass("KingdomSlotSymbol"), _dec2 = property([SpriteAtlas]), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseSlotSymbol) {
        _inheritsLoose(KingdomSlotSymbol, _BaseSlotSymbol);
        function KingdomSlotSymbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseSlotSymbol.call.apply(_BaseSlotSymbol, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "atlasSet", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = KingdomSlotSymbol.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this,
            _this$setStateHandler;
          KingdomController.getInstance().addObserver(this.node.uuid, {
            onChangeRoom: function onChangeRoom(sender, roomID) {
              _this2.onRoomChange(roomID);
            }
          });
          this.setStateHandler((_this$setStateHandler = {}, _this$setStateHandler[SymbolState.INIT] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _this2.defaultAnimation.node.active = false;
                  _this2.symbol.node.getComponent(Sprite).color = Color.BLACK.fromHEX('#ffffff');
                  return _context.abrupt("return", Promise.resolve());
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), _this$setStateHandler[SymbolState.HIDE] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _this2.defaultAnimation.node.active = false;
                  _this2.symbol.node.getComponent(Sprite).color = Color.BLACK.fromHEX('#4c4c4c');
                  return _context2.abrupt("return", Promise.resolve());
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })), _this$setStateHandler[SymbolState.HIGHLIGHT] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _this2.defaultAnimation.node.active = true;
                  _this2.defaultAnimation.play("spark");
                  return _context3.abrupt("return", new Promise(function (resolve) {
                    _this2.defaultAnimation.once(Animation.EventType.FINISHED, function () {
                      resolve();
                    });
                  }));
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), _this$setStateHandler));
        };
        _proto.onRoomChange = function onRoomChange(roomID) {
          switch (roomID) {
            case 1:
              this.defaultAtlas = this.atlasSet[0];
              break;
            case 2:
              this.defaultAtlas = this.atlasSet[1];
              break;
            case 3:
              this.defaultAtlas = this.atlasSet[2];
              break;
          }
          _BaseSlotSymbol.prototype.show.call(this);
        };
        _proto.onDestroy = function onDestroy() {
          KingdomController.getInstance().removeObserver(this.node.uuid);
        };
        return KingdomSlotSymbol;
      }(BaseSlotSymbol), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "atlasSet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KingdomTrial.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a159b8F0blFlJP8bHAUz7ou", "KingdomTrial", undefined);
      var KingdomTrial = exports('default', function KingdomTrial() {});
      KingdomTrial.Result = [{
        "SpinID": 0,
        "SlotsData": "7,6,7,7,7,3,6,4,4,4,6,6,1,4,7",
        "PrizesData": "1,9,400;2,17,600;14,9,400",
        "PositionData": "8,9,10;1,3,4,5;8,10,14",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 632000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 1400,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "2,4,5,6,4,5,6,7,5,3,4,7,7,4,6",
        "PrizesData": "4,12,300",
        "PositionData": "3,6,9",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 634000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 300,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "7,6,5,7,6,4,2,5,4,4,7,3,5,7,5",
        "PrizesData": "1,9,400;4,9,400;5,9,400",
        "PositionData": "6,9,10;6,9,10;6,9,10",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 636000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 1200,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "6,1,6,6,4,3,7,6,3,2,5,4,6,6,5",
        "PrizesData": "2,15,200;6,15,200;8,15,200;20,15,200",
        "PositionData": "1,3,4;1,4,8;1,3,14;1,8,14",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 638000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 800,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "6,6,5,1,6,7,5,5,6,5,5,6,7,5,7",
        "PrizesData": "1,12,300;2,15,200;4,12,300;6,15,200;7,12,300;8,15,200;11,12,300;12,15,200;14,12,300;15,12,300;16,15,200",
        "PositionData": "7,8,10;1,2,5;3,7,10;1,2,5;8,11,14;1,5,12;3,7,11;1,5,9;8,10,14;7,8,11;1,5,9",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 500000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 2800,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "6,5,7,7,6,6,7,3,3,6,7,5,6,6,3",
        "PrizesData": "5,15,200;8,15,200;10,15,200;12,15,200;14,15,200;15,6,500;17,14,1000",
        "PositionData": "6,10,13;1,5,14;6,10,13;1,5,13;6,10,14;8,9,15;6,10,13,14",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 504000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 2500,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "5,3,5,6,7,1,7,6,3,7,4,7,7,6,3",
        "PrizesData": "",
        "PositionData": "",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 506000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 0,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "5,4,6,7,5,6,6,4,6,6,7,7,4,6,4",
        "PrizesData": "1,14,1000;4,13,7500;5,14,1000;9,9,400;11,15,200;14,15,200;17,15,200;18,15,200;20,9,400",
        "PositionData": "6,7,9,10;3,6,7,9,10;6,7,9,10;2,13,15;3,7,9;6,10,14;6,10,14;3,6,10;2,8,15",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 512000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 11100,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "3,4,2,6,4,6,6,2,7,7,7,7,6,5,7",
        "PrizesData": "5,15,200;10,15,200",
        "PositionData": "6,7,13;4,6,13",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 514000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 400,
        "TicketBalance": 0
      }, {
        "SpinID": 0,
        "SlotsData": "7,7,7,7,2,7,7,5,6,7,6,5,5,3,6",
        "PrizesData": "2,17,600;4,17,600;10,17,600;11,15,200;15,15,200;18,16,3000",
        "PositionData": "1,2,3,4;3,6,7,10;2,4,6,10;9,11,15;9,11,15;2,3,4,6,10",
        "TotalBetValue": 2000,
        "IsJackpot": false,
        "Jackpot": 518000,
        "JackpotNum": 0,
        "ResponseStatus": 0,
        "IsFreeSpin": false,
        "TotalFreeSpin": 0,
        "StartBonus": 0,
        "BonusGameData": "",
        "PayLinePrizeValue": 5200,
        "TicketBalance": 0
      }];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Toast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './Dialog.ts', './TweenUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, App, Dialog, TweenUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      TweenUtils = module.TweenUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4af24CI9dNIbLsgPeqm6C9O", "Toast", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Toast = exports('default', (_dec = menu("Kingdom/Toast"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(Toast, _Dialog);
        function Toast() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labelValue", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "text1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "text2", _descriptor3, _assertThisInitialized(_this));
          _this._resolve = null;
          return _this;
        }
        var _proto = Toast.prototype;
        _proto.showToast = function showToast(reward) {
          var _this2 = this;
          return new Promise(function (resolve) {
            _this2._resolve = resolve;
            _this2.labelValue.string = '';
            TweenUtils.numberTo(_this2.labelValue, reward, 0.3);
            _Dialog.prototype.show.call(_this2);
          });
        };
        _proto.showBonusReward = function showBonusReward(reward) {
          this.text1.string = App.instance.getTextLang("sl52"); // You won
          this.text2.string = App.instance.getTextLang("sl88"); // In Bonus game
          return this.showToast(reward);
        };
        _proto.showFreeSpinReward = function showFreeSpinReward(reward) {
          this.text1.string = App.instance.getTextLang("sl52"); // You won
          this.text2.string = App.instance.getTextLang("sl89");
          return this.showToast(reward);
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto._onShowed = function _onShowed() {
          var _this3 = this;
          _Dialog.prototype._onShowed.call(this);
          this.scheduleOnce(function () {
            _this3.dismiss();
          }, 2);
        };
        _proto._onDismissed = function _onDismissed() {
          _Dialog.prototype._onDismissed.call(this);
          if (this._resolve) {
            this._resolve();
            this._resolve = null;
          }
        };
        return Toast;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "text2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Kingdom', 'chunks:///_virtual/Kingdom'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});