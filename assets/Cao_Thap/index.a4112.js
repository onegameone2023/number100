System.register("chunks:///_virtual/BetButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, Component, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "d08a1md0tdECoWgbHbPT/t8", "BetButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BetButton = exports('BetButton', (_dec = ccclass('BetButton'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BetButton, _Component);
        function BetButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "checkMark", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBackground", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCheckMark", _descriptor3, _assertThisInitialized(_this));
          _this.isChecked = false;
          return _this;
        }
        var _proto = BetButton.prototype;
        _proto.setBetValue = function setBetValue(value) {
          this.lblBackground.string = Utils.formatMoney(value, true);
          this.lblCheckMark.string = Utils.formatMoney(value, true);
        };
        _proto.check = function check() {
          this.isChecked = true;
          this.updateDisplay();
        };
        _proto.uncheck = function uncheck() {
          this.isChecked = false;
          this.updateDisplay();
        };
        _proto.updateDisplay = function updateDisplay() {
          this.checkMark.active = this.isChecked;
        };
        _proto.setInteractable = function setInteractable(interactable) {
          this.node.getComponent(Button).interactable = interactable;
        };
        return BetButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checkMark", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblBackground", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblCheckMark", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cao_Thap", ['./BetButton.ts', './CaoThap.Controller.ts', './CaoThap.PopupGuide.ts', './CaoThap.PopupLSC.ts', './CaoThap.PopupLSH.ts', './CaoThap.PopupSanbai.ts', './DropdownCalendar.ts', './DropdownSelector.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CaoThap.Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './BroadcastListener.ts', './Config.ts', './MiniGame.ts', './MiniGameSignalRClient.ts', './TweenUtils.ts', './Utils.ts', './BetButton.ts', './CaoThap.PopupGuide.ts', './CaoThap.PopupLSC.ts', './CaoThap.PopupLSH.ts', './CaoThap.PopupSanbai.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, Prefab, Node, Label, Button, Sprite, SpriteAtlas, Animation, RichText, SpriteFrame, UIOpacity, instantiate, tween, App, BroadcastReceiver, Configs, MiniGame, MiniGameSignalRClient, TweenUtils, Utils, BetButton, CaoThapPopupGuide, CaoThapPopupLSC, CaoThapPopupLSH, CaoThapPopupSanbai;
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
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Sprite = module.Sprite;
      SpriteAtlas = module.SpriteAtlas;
      Animation = module.Animation;
      RichText = module.RichText;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      tween = module.tween;
    }, function (module) {
      App = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      MiniGameSignalRClient = module.default;
    }, function (module) {
      TweenUtils = module.TweenUtils;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BetButton = module.BetButton;
    }, function (module) {
      CaoThapPopupGuide = module.default;
    }, function (module) {
      CaoThapPopupLSC = module.CaoThapPopupLSC;
    }, function (module) {
      CaoThapPopupLSH = module.CaoThapPopupLSH;
    }, function (module) {
      CaoThapPopupSanbai = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;
      cclegacy._RF.push({}, "7e506sBZ2tDD5D7FBpxJbD/", "CaoThap.Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CaoThapController = exports('default', (_dec = ccclass('CaoThapController'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property([BetButton]), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property([Node]), _dec20 = property(Label), _dec21 = property(Sprite), _dec22 = property(SpriteAtlas), _dec23 = property(Node), _dec24 = property(Animation), _dec25 = property(RichText), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_MiniGame) {
        _inheritsLoose(CaoThapController, _MiniGame);
        function CaoThapController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MiniGame.call.apply(_MiniGame, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupLSCPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupLSHPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupSanbaiPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUp", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDown", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betButtons", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetHighGate", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBetLowGate", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnNewTurn", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnStart", _descriptor13, _assertThisInitialized(_this));
          // @property(Toggle)
          // private toggleChangeBetType: Toggle = null;
          _initializerDefineProperty(_this, "btnChangeBetTypeBig", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnChangeBetTypeSmall", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotValue", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSelectedBetValue", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atSlot", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTime", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprCard", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprCardAtlas", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardFloatUp", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotAnimation", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "informationTurn", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuIcon", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoIcon", _descriptor26, _assertThisInitialized(_this));
          _this.popupGuide = null;
          _this.popupLSC = null;
          _this.popupLSH = null;
          _this.popupSanbai = null;
          _this._betType = 1;
          _this._roomID = 1;
          _this._acesRevealedCount = 0;
          _this._currentTurnID = 0;
          _this._currentTime = 120;
          _this._isSpinning = false;
          _this.latestResultAccountInfo = null;
          _this.countDownIntervalID = void 0;
          return _this;
        }
        var _proto = CaoThapController.prototype;
        _proto.onLoad = function onLoad() {
          _MiniGame.prototype.onLoad.call(this);
          this.initHubs();
          this.initListeners();
        };
        _proto.start = function start() {
          this._betType = 1;
          this.roomID = 1;
          this.updateChangeBetType();
        };
        _proto.initHubs = function initHubs() {
          var _this2 = this;
          MiniGameSignalRClient.getInstance().receive("jackpotHiLo", function (data) {
            TweenUtils.numberTo(_this2.lblJackpotValue, data.JackpotFund, 0.25);
          });
          MiniGameSignalRClient.getInstance().receive("resultHiLoAccountInfo", function (data) {
            if (data.currentTurnId > 0) {
              _this2.disableBetButton();
              _this2.informationTurn.string = convertCardSymbols(data.currentCardData);
              _this2.lblSession.string = '#' + data.currentTurnId;
              _this2.currentTime = data.remainTime;
              _this2.acesRevealedCount = data.acesCount;
              _this2.rewardFloatUp.getComponent(Label).string = '';
              _this2.lblUp.string = _this2.getWinGatePrize(data.betRateUp, data.currentBetValue);
              _this2.lblDown.string = _this2.getWinGatePrize(data.betRateDown, data.currentBetValue);
              Utils.setInteractableWithGrayScale(_this2.btnBetHighGate, data.betRateUp > 0);
              Utils.setInteractableWithGrayScale(_this2.btnBetLowGate, data.betRateDown > 0);
              Utils.setInteractableWithGrayScale(_this2.btnNewTurn, true);
              _this2.sprCard.spriteFrame = _this2.sprCardAtlas.getSpriteFrame("card_" + _this2.getLastCardID(data.currentCardData));
              _this2.btnStart.node.active = false;
              _this2.lblSelectedBetValue.string = Utils.formatNumber(data.currentBetValue);
              _this2.countDownIntervalID = setInterval(function () {
                _this2.updateCountDown();
              }, 1000);
              if (data.currentStep == 1) {
                Utils.setInteractableWithGrayScale(_this2.btnNewTurn, false);
              }
            } else {
              _this2.initTable();
              _this2.acesRevealedCount = 0;
              _this2.btnStart.node.active = true;
            }
            _this2.invokeGetJackpotHiLo();
          });
          MiniGameSignalRClient.getInstance().receive("resultHiLoSetBet", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (_this2.countDownIntervalID) {
                    clearInterval(_this2.countDownIntervalID);
                  }
                  _this2.currentTime = 120;
                  _this2.latestResultAccountInfo = data;
                  _this2.lblSession.string = "#" + data.turnId;
                  if (!(data.cardId === 0 && data.balance === -1)) {
                    _context.next = 10;
                    break;
                  }
                  _this2.initTable();
                  _this2.showReward(data.prizeValue);
                  _this2.scheduleOnce(function () {
                    _this2.btnStart.node.active = true;
                    _this2.acesRevealedCount = 0;
                  }, 1.5);
                  _context.next = 16;
                  break;
                case 10:
                  _context.next = 12;
                  return _this2.spinCard_v2(data.cardId);
                case 12:
                  _this2.countDownIntervalID = setInterval(function () {
                    _this2.updateCountDown();
                  }, 1000);
                  _this2.updateBalance(data.balance);
                  _this2.acesRevealedCount = data.cardData.split(",").filter(function (num) {
                    return [12, 25, 38, 51].includes(parseInt(num));
                  }).length;
                  if (data.prizeValue > 0) {
                    // Choose correct
                    _this2.lblSelectedBetValue.string = Utils.formatNumber(data.prizeValue);
                    _this2.lblUp.string = _this2.getWinGatePrize(data.betRateUp, data.prizeValue);
                    _this2.lblDown.string = _this2.getWinGatePrize(data.betRateDown, data.prizeValue);
                    Utils.setInteractableWithGrayScale(_this2.btnBetHighGate, data.betRateUp > 0);
                    Utils.setInteractableWithGrayScale(_this2.btnBetLowGate, data.betRateDown > 0);
                    Utils.setInteractableWithGrayScale(_this2.btnNewTurn, true);
                    _this2.informationTurn.string = convertCardSymbols(data.cardData);
                    if (data.isJackpot) {
                      _this2.showJackpotHilo();
                    }
                  } else {
                    // Choose fail, end game
                    Utils.setInteractableWithGrayScale(_this2.btnBetHighGate, false);
                    Utils.setInteractableWithGrayScale(_this2.btnBetLowGate, false);
                    Utils.setInteractableWithGrayScale(_this2.btnNewTurn, false);
                    _this2.showReward(data.prizeValue);
                    _this2.scheduleOnce(function () {
                      _this2.initTable();
                      _this2.btnStart.node.active = true;
                      _this2.acesRevealedCount = 0;
                    }, 2.3);
                  }
                case 16:
                  // Step 1 ko cho kết thúc lượt chơi ngay
                  if (data.step == 1) {
                    Utils.setInteractableWithGrayScale(_this2.btnNewTurn, false);
                  }
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.initTable = function initTable() {
          this.enableBetButton();
          this.informationTurn.string = App.instance.getTextLang('hl2');
          this.rewardFloatUp.getComponent(UIOpacity).opacity = 0;
          this.lblSession.string = '#0';
          this.currentTime = 120;
          // this.acesRevealedCount = 0;

          this.lblUp.string = '';
          this.lblDown.string = '';
          Utils.setInteractableWithGrayScale(this.btnBetHighGate, false);
          Utils.setInteractableWithGrayScale(this.btnBetLowGate, false);
          Utils.setInteractableWithGrayScale(this.btnNewTurn, false);

          //this.sprCard.spriteFrame = this.sprCardAtlas.getSpriteFrame(`card_0`);

          //this.btnStart.node.active = true;

          this.lblSelectedBetValue.string = Utils.formatNumber(this.getBetValue(this.roomID));
          if (this.countDownIntervalID) {
            clearInterval(this.countDownIntervalID);
          }
        };
        _proto.updateBalance = function updateBalance(newBalance) {
          if (this.betType === 1) {
            Configs.Login.GoldBalance = newBalance;
          } else if (this.betType === 2) {
            Configs.Login.CoinBalance = newBalance;
          }
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
        };
        _proto.addBalance = function addBalance(amount) {
          if (this.betType === 1) {
            Configs.Login.GoldBalance += amount;
          } else if (this.betType === 2) {
            Configs.Login.CoinBalance += amount;
          }
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
        };
        _proto.enableBetButton = function enableBetButton() {
          for (var i = 0; i < this.betButtons.length; i++) {
            this.betButtons[i].setInteractable(true);
          }
          this.btnChangeBetTypeBig.interactable = true;
          this.btnChangeBetTypeSmall.interactable = true;
        };
        _proto.disableBetButton = function disableBetButton() {
          for (var i = 0; i < this.betButtons.length; i++) {
            this.betButtons[i].setInteractable(false);
          }
          this.btnChangeBetTypeBig.interactable = false;
          this.btnChangeBetTypeSmall.interactable = false;
        };
        _proto.getWinGatePrize = function getWinGatePrize(ratio, betValue) {
          if (ratio === 0) return "";
          return Utils.formatNumber(Math.floor(betValue * ratio));
        };
        _proto.getLastCardID = function getLastCardID(s) {
          var numbers = s.split(",").map(function (num) {
            return parseInt(num.trim(), 10);
          });
          return numbers.length ? numbers[numbers.length - 1] : null;
        };
        _proto.initListeners = function initListeners() {
          var _this3 = this;
          var _loop = function _loop(i) {
            _this3.betButtons[i].node.on("click", function () {
              _this3.roomID = i + 1;
              _this3.betButtons.forEach(function (btn, j) {
                btn.uncheck();
              });
              _this3.betButtons[i].check();
            });
          };
          for (var i = 0; i < this.betButtons.length; i++) {
            _loop(i);
          }
        };
        _proto.show = function show() {
          _MiniGame.prototype.show.call(this);
          this.invokeGetAccountInfo();
        };
        _proto.dismiss = function dismiss() {
          _MiniGame.prototype.dismiss.call(this);
          this.invokeHideHiLo();
          this.node.removeFromParent();

          // FIXME: TODO hide game
          // App.instance.hideGameMini("CaoThap")
        };

        _proto.updateCountDown = function updateCountDown() {
          if (this.currentTime > 0) {
            this.currentTime--;
          } else {
            if (this.countDownIntervalID) {
              clearInterval(this.countDownIntervalID);
            }
            // random actDown or actUp
            if (Math.random() > 0.5) {
              this.actUp();
            } else {
              this.actDown();
            }
          }
        };
        _proto.showReward = /*#__PURE__*/function () {
          var _showReward = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value) {
            var _this4 = this;
            var rewardFloatUpOpacity, originalPosition, delay, step, text;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  rewardFloatUpOpacity = this.rewardFloatUp.getComponent(UIOpacity);
                  this.rewardFloatUp.getComponent(Label).string = "+" + Utils.formatNumber(value);
                  originalPosition = this.rewardFloatUp.getPosition();
                  delay = 1.5;
                  if (value > 0) {
                    rewardFloatUpOpacity.opacity = 255;
                    step = this.latestResultAccountInfo.step;
                    text = "";
                    if (this.betType === 1) {
                      text = App.instance.getTextLang('hi54');
                    } else {
                      text = App.instance.getTextLang('hi55');
                    }
                    text = text.replace('{0}', Utils.formatNumber(value));
                    text = text.replace('{1}', step);
                    this.informationTurn.string = "<color=#ff0000>" + text + "</color>";
                  } else {
                    delay = 2.2;
                    rewardFloatUpOpacity.opacity = 0;
                    this.informationTurn.string = "<color=#ff0000>" + App.instance.getTextLang('me37') + "</color>";
                  }
                  return _context2.abrupt("return", new Promise(function (resolve) {
                    tween(_this4.rewardFloatUp).by(delay, {
                      y: 110
                    }).call(function () {
                      _this4.informationTurn.string = App.instance.getTextLang('hl2');
                      _this4.rewardFloatUp.setPosition(originalPosition);
                      rewardFloatUpOpacity.opacity = 0;
                      resolve();
                    }).start();
                  }));
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function showReward(_x2) {
            return _showReward.apply(this, arguments);
          }
          return showReward;
        }();
        _proto.showJackpotHilo = function showJackpotHilo() {
          var _this5 = this;
          this.jackpotAnimation.node.active = true;
          this.jackpotAnimation.play("jackpot");
          var duration = this.jackpotAnimation.getState('jackpot').duration;
          this.scheduleOnce(function () {
            _this5.invokeGetAccountInfo();
          }, duration);
          this.scheduleOnce(function () {
            _this5.jackpotAnimation.node.active = false;
          }, duration + 2);
        };
        _proto.getBetValue = function getBetValue(roomID) {
          if (this._betType === 1) {
            return [0, 1000, 10000, 50000, 100000, 500000][roomID];
          } else if (this._betType === 2) {
            return [0, 10000, 100000, 500000, 1000000, 5000000][roomID];
          }
        };
        _proto.updateBetButtons = function updateBetButtons() {
          var _this6 = this;
          this.betButtons.forEach(function (btn, index) {
            btn.setBetValue(_this6.getBetValue(index + 1));
            // const bg = btn.node.children[0];
            // const checkMark = btn.node.children[1];

            // let label1 = bg.getComponentInChildren(Label);
            // let label2 = checkMark.getComponentInChildren(Label);

            // let betValue  = Utils.formatMoney(this.getBetValue(index + 1),true);
            // label1.string = betValue;
            // label2.string = betValue;
          });
        };

        _proto.activePopupLSC = function activePopupLSC() {
          if (!this.popupLSC) {
            this.popupLSC = instantiate(this.popupLSCPrefab).getComponent(CaoThapPopupLSC);
            this.popupLSC.node.parent = this.popupContainer;
          }
          this.popupLSC.show();
        };
        _proto.activePopupLSH = function activePopupLSH() {
          if (!this.popupLSH) {
            this.popupLSH = instantiate(this.popupLSHPrefab).getComponent(CaoThapPopupLSH);
            this.popupLSH.node.parent = this.popupContainer;
          }
          this.popupLSH.show();
        };
        _proto.activePopupGuide = function activePopupGuide() {
          if (!this.popupGuide) {
            this.popupGuide = instantiate(this.popupGuidePrefab).getComponent(CaoThapPopupGuide);
            this.popupGuide.node.parent = this.popupContainer;
          }
          this.popupGuide.show();
        };
        _proto.activePopupSanbai = function activePopupSanbai() {
          if (!this.popupSanbai) {
            this.popupSanbai = instantiate(this.popupSanbaiPrefab).getComponent(CaoThapPopupSanbai);
            this.popupSanbai.node.parent = this.popupContainer;
          }
          this.popupSanbai.show();
        };
        _proto.invokeGetAccountInfo = function invokeGetAccountInfo() {
          MiniGameSignalRClient.getInstance().send('GetAccountInfoHiLo', [Configs.Login.CurrencyID], function (data) {});
        };
        _proto.invokeGetJackpotHiLo = function invokeGetJackpotHiLo() {
          MiniGameSignalRClient.getInstance().send('GetJackpotHiLo', [Configs.Login.CurrencyID, this.betType, this.roomID], function (data) {});
        };
        _proto.invokeHideHiLo = function invokeHideHiLo() {
          MiniGameSignalRClient.getInstance().send('HideHiLo', [], function (data) {});
        };
        _proto.actChangeBetType = function actChangeBetType() {
          this._betType = this._betType === 1 ? 2 : 1;
          this.updateChangeBetType();
        };
        _proto.updateChangeBetType = function updateChangeBetType() {
          this.invokeGetJackpotHiLo();
          var icon = null;
          if (this._betType === 1) {
            icon = this.tipzoIcon;
          } else {
            icon = this.xuIcon;
          }
          this.btnChangeBetTypeBig.node.getChildByName("Background").getComponent(Sprite).spriteFrame = icon;
          this.btnChangeBetTypeSmall.node.getChildByName("Background").getComponent(Sprite).spriteFrame = icon;
          this.updateBetButtons();
          this.lblSelectedBetValue.string = Utils.formatNumber(this.getBetValue(this.roomID));
        };
        _proto.actStart = function actStart() {
          var _this7 = this;
          MiniGameSignalRClient.getInstance().send('SetBetHiLo', [Configs.Login.CurrencyID, this.betType, 0, 1, this.roomID], function (data) {
            if (data >= 0) {
              _this7.btnStart.node.active = false;
              _this7.disableBetButton();
            } else {
              _this7.showError(data);
            }
          });
        };
        _proto.actStop = function actStop() {
          var _this8 = this;
          MiniGameSignalRClient.getInstance().send('SetBetHiLo', [Configs.Login.CurrencyID, this.betType, 2, 0, this.roomID], function (data) {
            if (data >= 0) {
              // this.btnNewTurn.interactable = false;
              Utils.setInteractableWithGrayScale(_this8.btnNewTurn, false);
            } else {
              _this8.showError(data);
            }
          });
        };
        _proto.actUp = function actUp() {
          var _this9 = this;
          MiniGameSignalRClient.getInstance().send('SetBetHiLo', [Configs.Login.CurrencyID, this.betType, 1, 1, this.roomID], function (data) {
            if (data >= 0) {
              Utils.setInteractableWithGrayScale(_this9.btnBetHighGate, false);
              Utils.setInteractableWithGrayScale(_this9.btnBetLowGate, false);
              Utils.setInteractableWithGrayScale(_this9.btnNewTurn, false);
            } else {
              _this9.showError(data);
            }
          });
        };
        _proto.actDown = function actDown() {
          var _this10 = this;
          MiniGameSignalRClient.getInstance().send('SetBetHiLo', [Configs.Login.CurrencyID, this.betType, 1, 0, this.roomID], function (data) {
            if (data >= 0) {
              Utils.setInteractableWithGrayScale(_this10.btnBetHighGate, false);
              Utils.setInteractableWithGrayScale(_this10.btnBetLowGate, false);
              Utils.setInteractableWithGrayScale(_this10.btnNewTurn, false);
            } else {
              _this10.showError(data);
            }
          });
        };
        _proto.spinCard_v2 = /*#__PURE__*/function () {
          var _spinCard_v = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
            var frameDelay, wait, i, randomId, frameName, spriteFrame, finalFrame;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  frameDelay = 70; // milliseconds between frames
                  wait = function wait(ms) {
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, ms);
                    });
                  };
                  i = 0;
                case 3:
                  if (!(i < 15)) {
                    _context3.next = 13;
                    break;
                  }
                  randomId = Math.floor(Math.random() * 52); // random from 0 to 51
                  frameName = "card_" + randomId;
                  spriteFrame = this.sprCardAtlas.getSpriteFrame(frameName);
                  if (spriteFrame) {
                    this.sprCard.spriteFrame = spriteFrame;
                  }
                  _context3.next = 10;
                  return wait(frameDelay);
                case 10:
                  i++;
                  _context3.next = 3;
                  break;
                case 13:
                  // Set final sprite
                  finalFrame = this.sprCardAtlas.getSpriteFrame("card_" + id);
                  if (finalFrame) {
                    this.sprCard.spriteFrame = finalFrame;
                  }
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function spinCard_v2(_x3) {
            return _spinCard_v.apply(this, arguments);
          }
          return spinCard_v2;
        }();
        _proto.showError = function showError(code) {
          App.instance.ShowAlertDialog(App.instance.getTextLang("me" + code));
        };
        _createClass(CaoThapController, [{
          key: "currentTurnID",
          set: function set(value) {
            this._currentTurnID = value;
            this.lblSession.string = "#" + value.toString();
          }
        }, {
          key: "currentTime",
          get: function get() {
            return this._currentTime;
          }

          /**
           * 1: Tipzo, 2: Xu
           */,
          set: function set(value) {
            this._currentTime = value;
            this.lblTime.string = formatTimer(value);
          }
        }, {
          key: "betType",
          get: function get() {
            return this._betType;
          }
        }, {
          key: "roomID",
          get: function get() {
            return this._roomID;
          },
          set: function set(value) {
            this._roomID = value;
            this.invokeGetJackpotHiLo();
            this.lblSelectedBetValue.string = Utils.formatNumber(this.getBetValue(this.roomID));
          }
        }, {
          key: "acesRevealedCount",
          set: function set(value) {
            this._acesRevealedCount = value;
            this.atSlot.forEach(function (slot, i) {
              slot.active = i < value;
            });
          }
        }]);
        return CaoThapController;
      }(MiniGame), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popupLSCPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popupLSHPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "popupSanbaiPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblUp", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblDown", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "betButtons", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnBetHighGate", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnBetLowGate", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnNewTurn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnStart", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnChangeBetTypeBig", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnChangeBetTypeSmall", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotValue", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lblSelectedBetValue", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "atSlot", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "lblTime", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "sprCard", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "sprCardAtlas", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "rewardFloatUp", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "jackpotAnimation", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "informationTurn", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "xuIcon", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "tipzoIcon", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      function formatTimer(seconds) {
        var minutes = Math.floor(seconds / 60);
        var secs = seconds % 60;
        var minStr = minutes.toString().padStart(2, "0");
        var secsStr = secs.toString().padStart(2, "0");
        return minStr + ":" + secsStr;
      }
      function convertCardSymbols(cardIds) {
        if (cardIds === "") return "";
        var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var suits = ["♠", "♣", "♦", "♥"]; // Spades, Clubs, Diamonds, Hearts

        return cardIds.replace(/\d+/g, function (match) {
          var cardId = parseInt(match);
          if (isNaN(cardId) || cardId < 0 || cardId > 51) return match; // Return original if invalid
          var suitIndex = Math.floor(cardId / 13);
          var rankIndex = cardId % 13;
          var suit = suits[suitIndex];
          var rank = ranks[rankIndex];

          // Apply color formatting for suits
          var color = suit === "♦" || suit === "♥" ? "#ff0000" : "#000000"; // Red for ♦♥, Black for ♠♣
          return rank + "<color=" + color + ">" + suit + "</color>";
        });
      }

      // Choi xu 100K : 1 2 0 1 2
      // Low: 1 2 1 0 2
      // High: 1 2 1 1 2
      // End game: 1 2 2 1 2

      // Choi gold 1K: 1 1 0 1 1
      // High: 1 1 1 1 1
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaoThap.PopupGuide.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Dialog;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "bc0e2Oeta9MK7MgKds/lx/O", "CaoThap.PopupGuide", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CaoThapPopupGuide = exports('default', ccclass(_class = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(CaoThapPopupGuide, _Dialog);
        function CaoThapPopupGuide() {
          return _Dialog.apply(this, arguments) || this;
        }
        return CaoThapPopupGuide;
      }(Dialog)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaoThap.PopupLSC.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Utils.ts', './App.ts', './Http.ts', './Config.ts', './Pagination.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, ToggleContainer, Node, SpriteFrame, instantiate, Label, RichText, Sprite, Dialog, Utils, App, Http, Configs, PaginationUI;
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
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Sprite = module.Sprite;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      PaginationUI = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "786fb16XsRBsa4RgeDFByCW", "CaoThap.PopupLSC", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //Sửa lại lần lượt: Mức đặt, Bước, Kết quả, cửa đặt, Nhận

      var CaoThapPopupLSC = exports('CaoThapPopupLSC', (_dec = property(ToggleContainer), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(PaginationUI), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(PaginationUI), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(CaoThapPopupLSC, _Dialog);
        function CaoThapPopupLSC() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabsContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentTipzo", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowTipzo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationTipzo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentXu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowXu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationXu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowBackground1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowBackground2", _descriptor10, _assertThisInitialized(_this));
          _this._dataTipzoLoaded = null;
          _this._dataXuLoaded = null;
          return _this;
        }
        var _proto = CaoThapPopupLSC.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.tabs.toggleItems.forEach(function (tab, index) {
            tab.node.on("toggle", function () {
              _this2.onTabChanged(index);
            });
          });
          this.paginationTipzo.initListener(function (page) {
            _this2.showTipzoHistory(page);
          });
          this.paginationXu.initListener(function (page) {
            _this2.showXuHistory(page);
          });
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.fetchTipzoHistory();
          this.fetchXuHistory();
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          var betType = App.instance.hiLoMiniGame.betType;
          this.tabs.toggleItems[betType - 1].isChecked = true;
        };
        _proto.onTabChanged = function onTabChanged(index) {
          var _this3 = this,
            _showContentCallback,
            _showContentCallback$;
          if (index < 0 || index >= this.tabsContent.length) return;
          this.tabsContent.forEach(function (tab) {
            return tab.active = false;
          });
          this.tabsContent[index].active = true;
          var showContentCallback = (_showContentCallback = {}, _showContentCallback[0] = function _() {
            return _this3.showTipzoHistory(1);
          }, _showContentCallback[1] = function _() {
            return _this3.showXuHistory(1);
          }, _showContentCallback);
          (_showContentCallback$ = showContentCallback[index]) == null || _showContentCallback$.call(showContentCallback);
        };
        _proto.showTipzoHistory = function showTipzoHistory(page) {
          this.contentTipzo.removeAllChildren();
          this.paginationTipzo.updatePagination(Math.ceil(this._dataTipzoLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataTipzoLoaded.slice((page - 1) * 10, page * 10);
          for (var _iterator = _createForOfIteratorHelperLoose(loaded), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            var itemRow = instantiate(this.rowTipzo);
            itemRow.active = true;
            this.contentTipzo.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = data.TurnID;
            itemRow.children[1].getComponent(Label).string = Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(data.BetValue);
            itemRow.children[3].getComponent(Label).string = data.Step;
            itemRow.children[4].getComponent(RichText).string = data.CardID >= 0 ? convertCardSymbols(data.CardID.toString()) : "";
            if (data.Step == 1) {
              itemRow.children[5].getComponent(Label).string = "";
              itemRow.children[6].getComponent(Label).string = "-" + Utils.formatNumber(data.PrizeValue);
            } else {
              itemRow.children[5].getComponent(Label).string = data.LocationID == 0 ? App.instance.getTextLang('hl14') : App.instance.getTextLang('hl13');
              itemRow.children[6].getComponent(Label).string = "" + Utils.formatNumber(data.PrizeValue);
            }
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? this.rowBackground1 : this.rowBackground2;
            ithRow++;
          }
        };
        _proto.showXuHistory = function showXuHistory(page) {
          this.contentXu.removeAllChildren();
          this.paginationXu.updatePagination(Math.ceil(this._dataXuLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataXuLoaded.slice((page - 1) * 10, page * 10);
          for (var _iterator2 = _createForOfIteratorHelperLoose(loaded), _step2; !(_step2 = _iterator2()).done;) {
            var data = _step2.value;
            var itemRow = instantiate(this.rowXu);
            itemRow.active = true;
            this.contentXu.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = data.TurnID;
            itemRow.children[1].getComponent(Label).string = Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(data.BetValue);
            itemRow.children[3].getComponent(Label).string = data.Step;
            itemRow.children[4].getComponent(RichText).string = data.CardID >= 0 ? convertCardSymbols(data.CardID.toString()) : "";
            if (data.Step == 1) {
              itemRow.children[5].getComponent(Label).string = "";
              itemRow.children[6].getComponent(Label).string = "-" + Utils.formatNumber(data.PrizeValue);
            } else {
              itemRow.children[5].getComponent(Label).string = data.LocationID == 0 ? App.instance.getTextLang('hl14') : App.instance.getTextLang('hl13');
              itemRow.children[6].getComponent(Label).string = "" + Utils.formatNumber(data.PrizeValue);
            }
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? this.rowBackground1 : this.rowBackground2;
            ithRow++;
          }
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto.fetchTipzoHistory = function fetchTipzoHistory() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountHistoryHiLo"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 1,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this4._dataTipzoLoaded = json["d"];
              _this4.showTipzoHistory(1);
            }
          });
        };
        _proto.fetchXuHistory = function fetchXuHistory() {
          var _this5 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountHistoryHiLo"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 2,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this5._dataXuLoaded = json["d"];
              _this5.showXuHistory(1);
            }
          });
        };
        return CaoThapPopupLSC;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabs", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabsContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentTipzo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rowTipzo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "paginationTipzo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentXu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rowXu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paginationXu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rowBackground1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rowBackground2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      function convertCardSymbols(cardIds) {
        if (cardIds === "") return "";
        var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var suits = ["♠", "♣", "♦", "♥"]; // Spades, Clubs, Diamonds, Hearts

        return cardIds.replace(/\d+/g, function (match) {
          var cardId = parseInt(match);
          if (isNaN(cardId) || cardId < 0 || cardId > 51) return match; // Return original if invalid
          var suitIndex = Math.floor(cardId / 13);
          var rankIndex = cardId % 13;
          var suit = suits[suitIndex];
          var rank = ranks[rankIndex];
          return "" + rank + suit;
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaoThap.PopupLSH.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Utils.ts', './App.ts', './Http.ts', './Config.ts', './Pagination.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, ToggleContainer, Node, SpriteFrame, instantiate, Label, Sprite, Dialog, Utils, App, Http, Configs, PaginationUI;
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
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Label = module.Label;
      Sprite = module.Sprite;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      PaginationUI = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "0ae26IAIF5KZ6qO8QyYrJWa", "CaoThap.PopupLSH", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CaoThapPopupLSH = exports('CaoThapPopupLSH', (_dec = property(ToggleContainer), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(PaginationUI), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(PaginationUI), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(CaoThapPopupLSH, _Dialog);
        function CaoThapPopupLSH() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabsContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentTipzo", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowTipzo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationTipzo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentXu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowXu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationXu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowBackground1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowBackground2", _descriptor10, _assertThisInitialized(_this));
          _this._dataTipzoLoaded = null;
          _this._dataXuLoaded = null;
          return _this;
        }
        var _proto = CaoThapPopupLSH.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.tabs.toggleItems.forEach(function (tab, index) {
            tab.node.on("toggle", function () {
              _this2.onTabChanged(index);
            });
          });
          this.paginationTipzo.initListener(function (page) {
            _this2.showTipzoHistory(page);
          });
          this.paginationXu.initListener(function (page) {
            _this2.showXuHistory(page);
          });
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.fetchTipzoHistory();
          this.fetchXuHistory();
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          var betType = App.instance.hiLoMiniGame.betType;
          this.tabs.toggleItems[betType - 1].isChecked = true;
        };
        _proto.onTabChanged = function onTabChanged(index) {
          if (index < 0 || index >= this.tabsContent.length) return;
          this.tabsContent.forEach(function (tab) {
            return tab.active = false;
          });
          this.tabsContent[index].active = true;
        };
        _proto.showTipzoHistory = function showTipzoHistory(page) {
          this.contentTipzo.removeAllChildren();
          this.paginationTipzo.updatePagination(Math.ceil(this._dataTipzoLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataTipzoLoaded.slice((page - 1) * 10, page * 10);
          for (var _iterator = _createForOfIteratorHelperLoose(loaded), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            var itemRow = instantiate(this.rowTipzo);
            itemRow.active = true;
            this.contentTipzo.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[1].getComponent(Label).string = data.Nickname;
            itemRow.children[2].getComponent(Label).string = Utils.formatMoney(this.getRoomValue(1, data.RoomID), true);
            itemRow.children[3].getComponent(Label).string = Utils.formatNumber(data.PrizeValue);
            itemRow.children[4].getComponent(Label).string = data.Type == 0 ? App.instance.getTextLang('sl16') : App.instance.getTextLang('sl15');
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? this.rowBackground1 : this.rowBackground2;
            ithRow++;
          }
        };
        _proto.showXuHistory = function showXuHistory(page) {
          this.contentXu.removeAllChildren();
          this.paginationXu.updatePagination(Math.ceil(this._dataXuLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataXuLoaded.slice((page - 1) * 10, page * 10);
          for (var _iterator2 = _createForOfIteratorHelperLoose(loaded), _step2; !(_step2 = _iterator2()).done;) {
            var data = _step2.value;
            var itemRow = instantiate(this.rowXu);
            itemRow.active = true;
            this.contentXu.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[1].getComponent(Label).string = data.Nickname;
            itemRow.children[2].getComponent(Label).string = Utils.formatMoney(this.getRoomValue(2, data.RoomID), true);
            itemRow.children[3].getComponent(Label).string = Utils.formatNumber(data.PrizeValue);
            itemRow.children[4].getComponent(Label).string = data.Type == 0 ? App.instance.getTextLang('sl16') : App.instance.getTextLang('sl15');
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? this.rowBackground1 : this.rowBackground2;
            ithRow++;
          }
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto.fetchTipzoHistory = function fetchTipzoHistory() {
          var _this3 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopWinnersHiLo"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 1,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this3._dataTipzoLoaded = json["d"];
              _this3.showTipzoHistory(1);
            }
          });
        };
        _proto.fetchXuHistory = function fetchXuHistory() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopWinnersHiLo"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 2,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this4._dataXuLoaded = json["d"];
              _this4.showXuHistory(1);
            }
          });
        };
        _proto.getRoomValue = function getRoomValue(betType, roomID) {
          if (betType === 1) {
            return [0, 1000, 10000, 50000, 100000, 500000][roomID];
          } else if (betType === 2) {
            return [0, 10000, 100000, 500000, 1000000, 5000000][roomID];
          }
        };
        return CaoThapPopupLSH;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabs", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabsContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentTipzo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rowTipzo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "paginationTipzo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentXu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rowXu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paginationXu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rowBackground1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rowBackground2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaoThap.PopupSanbai.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DropdownCalendar.ts', './Dialog.ts', './Config.ts', './App.ts', './Http.ts', './Utils.ts', './DropdownSelector.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ToggleContainer, Node, Toggle, instantiate, Label, DropdownCalendar, Dialog, Configs, App, Http, Utils, DropdownSelector;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      Toggle = module.Toggle;
      instantiate = module.instantiate;
      Label = module.Label;
    }, function (module) {
      DropdownCalendar = module.DropdownCalendar;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      DropdownSelector = module.DropdownSelector;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "6af760vuFlMDYMj6ZaHoeja", "CaoThap.PopupSanbai", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CaoThapPopupSanbai = exports('default', (_dec = property(ToggleContainer), _dec2 = property([Node]), _dec3 = property(DropdownCalendar), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(DropdownSelector), _dec7 = property(Node), _dec8 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(CaoThapPopupSanbai, _Dialog);
        function CaoThapPopupSanbai() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabs", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabsContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dropdownCalendar", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowContainerTab1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowTemplateTab1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dropdownSelector", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowContainerTab2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rowTemplateTab2", _descriptor8, _assertThisInitialized(_this));
          _this.currentDay = null;
          _this.currentMonth = null;
          return _this;
        }
        var _proto = CaoThapPopupSanbai.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.tabs.toggleItems.forEach(function (tab, index) {
            tab.node.on("toggle", function () {
              _this2.onTabChanged(index);
            });
          });
          var self = this;
          this.dropdownCalendar.setListener({
            onChangeDate: function onChangeDate(date) {
              self.currentDay = date;
              self.showDayRanking();
            }
          });
          this.dropdownSelector.setOptions(generateMonthOptions(), function (date) {
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var year = date.getFullYear();
            return month + "/" + year;
          }, {
            onChangeOption: function onChangeOption(option) {
              self.currentMonth = new Date(option.getFullYear(), option.getMonth(), 1);
              self.showMonthRanking();
            }
          });
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.currentDay = new Date();
          this.currentMonth = new Date();
          this.tabs.node.getChildByName('tab1').getComponent(Toggle).isChecked = true;
          this.onTabChanged(0);
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
          this.dropdownCalendar.calendarPanel.active = false;
          this.dropdownSelector.dropdownList.active = false;
        };
        _proto.onTabChanged = function onTabChanged(index) {
          var _this3 = this,
            _showContentCallback,
            _showContentCallback$;
          if (index < 0 || index >= this.tabsContent.length) return;
          this.tabsContent.forEach(function (tab) {
            return tab.active = false;
          });
          this.tabsContent[index].active = true;
          var showContentCallback = (_showContentCallback = {}, _showContentCallback[0] = function _() {
            _this3.showDayRanking(50);
            _this3.dropdownCalendar.calendarPanel.active = false;
          }, _showContentCallback[1] = function _() {
            _this3.showMonthRanking(50);
            _this3.dropdownSelector.dropdownList.active = false;
          }, _showContentCallback[2] = function _() {}, _showContentCallback);
          (_showContentCallback$ = showContentCallback[index]) == null || _showContentCallback$.call(showContentCallback);
        };
        _proto.showDayRanking = function showDayRanking(topCount) {
          var _this4 = this;
          if (topCount === void 0) {
            topCount = 10;
          }
          this.rowContainerTab1.removeAllChildren();
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG['GetTopEventHiLo'], {
            "currencyID": Configs.Login.CurrencyID,
            "eventType": 1,
            "topCount": topCount,
            "eventDate": formatEventDate(this.currentDay)
          }, function (status, response) {
            App.instance.showLoading(false);
            if (status === 200 && response["d"]) {
              for (var i = 0; i < response["d"].length; i++) {
                var result = response["d"][i];
                var itemRow = instantiate(_this4.rowTemplateTab1);
                itemRow.active = true;
                _this4.rowContainerTab1.addChild(itemRow);
                itemRow.children[0].getComponent(Label).string = result.Position.toString();
                itemRow.children[1].getComponent(Label).string = result.Nickname;
                itemRow.children[2].getComponent(Label).string = result.CardWinData;
                itemRow.children[3].getComponent(Label).string = Utils.formatNumber(result.PrizeValue);
                itemRow.children[4].getComponent(Label).string = Utils.formatDatetime(result.FinishedTime, "HH:mm:ss");
                var rank = result.Position;
                if (rank === 1) {
                  itemRow.children[5].getComponent(Label).string = Utils.formatNumber(2000000);
                } else if (rank === 2) {
                  itemRow.children[5].getComponent(Label).string = Utils.formatNumber(1000000);
                } else if (rank === 3) {
                  itemRow.children[5].getComponent(Label).string = Utils.formatNumber(500000);
                } else {
                  itemRow.children[5].getComponent(Label).string = "";
                }
              }
            }
          });
        };
        _proto.showMonthRanking = function showMonthRanking(topCount) {
          var _this5 = this;
          if (topCount === void 0) {
            topCount = 10;
          }
          this.rowContainerTab2.removeAllChildren();
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG['GetTopEventHiLo'], {
            "currencyID": Configs.Login.CurrencyID,
            "eventType": 2,
            "topCount": topCount,
            "eventDate": formatEventDate(this.currentMonth)
          }, function (status, response) {
            App.instance.showLoading(false);
            if (status === 200 && response["d"]) {
              for (var i = 0; i < response["d"].length; i++) {
                var result = response["d"][i];
                var itemRow = instantiate(_this5.rowTemplateTab2);
                itemRow.active = true;
                _this5.rowContainerTab2.addChild(itemRow);
                itemRow.children[0].getComponent(Label).string = result.Position.toString();
                itemRow.children[1].getComponent(Label).string = result.Nickname;
                itemRow.children[2].getComponent(Label).string = result.CardWinData;
                itemRow.children[3].getComponent(Label).string = Utils.formatNumber(result.PrizeValue);
                itemRow.children[4].getComponent(Label).string = Utils.formatDatetime(result.FinishedTime, "dd/MM/yyyy");
                itemRow.children[5].getComponent(Label).string = result.Position === 1 ? "IPhone 16 Pro Max\n256GB" : "";
              }
            }
          });
        };
        return CaoThapPopupSanbai;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabs", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabsContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dropdownCalendar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rowContainerTab1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rowTemplateTab1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dropdownSelector", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rowContainerTab2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rowTemplateTab2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      function formatEventDate(date) {
        return encodeURIComponent(date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        }).replace(',', ''));
      }
      function generateMonthOptions() {
        var months = [];
        var now = new Date();
        for (var i = 0; i < 12; i++) {
          var date = new Date(now);
          date.setMonth(now.getMonth() - i);
          months.push(date);
        }
        return months;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropdownCalendar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, UIOpacity, Toggle, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Toggle = module.Toggle;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "fb0afuhs5FEm4Cw+3Y9mJ6J", "DropdownCalendar", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DropdownCalendar = exports('DropdownCalendar', (_dec = ccclass('DropdownCalendar'), _dec2 = menu("CustomUI/DropdownCalendar"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropdownCalendar, _Component);
        function DropdownCalendar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "calendarPanel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedDateLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dayContainer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headerLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dayTemplate", _descriptor5, _assertThisInitialized(_this));
          _this.currentDate = new Date();
          _this._listener = {};
          _this._firstEmpty = 0;
          return _this;
        }
        var _proto = DropdownCalendar.prototype;
        _proto.start = function start() {
          this.calendarPanel.active = false;
          this.updateCalendar();
          this.selectedDateLabel.string = this.formatDate(this.currentDate);
          this.initCurrentDate();
        };
        _proto.setListener = function setListener(listener) {
          this._listener = listener;
        };
        _proto.toggleCalendar = function toggleCalendar() {
          this.calendarPanel.active = !this.calendarPanel.active;
        };
        _proto.updateCalendar = function updateCalendar() {
          var _this2 = this;
          var year = this.currentDate.getFullYear();
          var month = this.currentDate.getMonth();
          var firstDay = new Date(year, month, 1).getDay();
          var daysInMonth = new Date(year, month + 1, 0).getDate();
          this._firstEmpty = firstDay;
          this.headerLabel.string = this.formatDate(this.currentDate);
          this.dayContainer.removeAllChildren();
          for (var i = 0; i < firstDay; i++) {
            var emptyNode = instantiate(this.dayTemplate);
            emptyNode.active = true;
            emptyNode.getComponent(UIOpacity).opacity = 0;
            this.dayContainer.addChild(emptyNode);
          }
          var _loop = function _loop(day) {
            var dayNode = instantiate(_this2.dayTemplate);
            dayNode.active = true;
            dayNode.getComponent(UIOpacity).opacity = 255;
            dayNode.on(Node.EventType.TOUCH_START, function () {
              _this2.selectDate(day);
            });
            var label = dayNode.getComponentInChildren(Label);
            label.string = day.toString().padStart(2, '0');
            _this2.dayContainer.addChild(dayNode);
          };
          for (var day = 1; day <= daysInMonth; day++) {
            _loop(day);
          }
        };
        _proto.selectDate = function selectDate(day) {
          this.currentDate.setDate(day);
          this.selectedDateLabel.string = this.formatDate(this.currentDate);
          this._listener.onChangeDate && this._listener.onChangeDate(this.currentDate);
        };
        _proto.initCurrentDate = function initCurrentDate() {
          var dayOfMonth = this.currentDate.getDate();
          for (var i = 0; i < this.dayContainer.children.length; i++) {
            if (i == dayOfMonth - 1) {
              this.dayContainer.children[i + this._firstEmpty].getComponent(Toggle).isChecked = true;
              break;
            }
          }
        };
        _proto.changeMonth = function changeMonth(delta) {
          this.currentDate.setMonth(this.currentDate.getMonth() + delta);
          this.updateCalendar();
        };
        _proto.formatDate = function formatDate(date) {
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits
          var day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
          return day + "/" + month + "/" + year;
        };
        _proto.onClickNavigate = function onClickNavigate(button, step) {
          this.changeMonth(parseInt(step));
        };
        return DropdownCalendar;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "calendarPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedDateLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dayContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headerLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dayTemplate", [_dec7], {
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

System.register("chunks:///_virtual/DropdownSelector.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "8d712jFBm1D5IJw9xRBLwFm", "DropdownSelector", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DropdownSelector = exports('DropdownSelector', (_dec = ccclass('DropdownSelector'), _dec2 = menu("CustomUI/DropdownSelector"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropdownSelector, _Component);
        function DropdownSelector() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "dropdownList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionTemplate", _descriptor4, _assertThisInitialized(_this));
          _this.options = [];
          _this.displayFunction = String;
          _this._listener = {};
          return _this;
        }
        var _proto = DropdownSelector.prototype;
        _proto.start = function start() {
          this.dropdownList.active = false;
        };
        _proto.toggleDropdown = function toggleDropdown() {
          this.dropdownList.active = !this.dropdownList.active;
          if (this.dropdownList.active) {
            this.populateOptions();
          }
        };
        _proto.setOptions = function setOptions(options, displayFunc, callback) {
          if (displayFunc === void 0) {
            displayFunc = String;
          }
          this.options = options;
          this.displayFunction = displayFunc;
          this._listener = callback || {};
          this.populateOptions();
          this.selectOption(options[0]);
        };
        _proto.populateOptions = function populateOptions() {
          var _this2 = this;
          this.content.removeAllChildren();
          this.options.forEach(function (option) {
            var item = instantiate(_this2.optionTemplate);
            item.active = true;
            var label = item.getComponentInChildren(Label);
            label.string = _this2.displayFunction(option);
            item.on(Node.EventType.TOUCH_START, function () {
              _this2.selectOption(option);
            });
            _this2.content.addChild(item);
          });
        };
        _proto.selectOption = function selectOption(option) {
          this.selectedText.string = this.displayFunction(option);
          this.dropdownList.active = false; // Hide dropdown
          this._listener.onChangeOption && this._listener.onChangeOption(option);
        };
        return DropdownSelector;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dropdownList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "optionTemplate", [_dec6], {
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
  r('virtual:///prerequisite-imports/Cao_Thap', 'chunks:///_virtual/Cao_Thap'); 
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