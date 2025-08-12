System.register("chunks:///_virtual/PhucSinh", ['./PhucSinh.Controller.ts', './PhucSinh.Detail.ts', './PhucSinh.GoldEvent.ts', './PhucSinh.PopupGuide.ts', './PhucSinh.PopupHistory.ts', './PhucSinh.PopupHonors.ts', './PhucSinh.PopupSelectLine.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PhucSinh.Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniGame.ts', './PhucSinh.PopupGuide.ts', './PhucSinh.PopupHistory.ts', './PhucSinh.PopupHonors.ts', './PhucSinh.PopupSelectLine.ts', './App.ts', './MiniGameSignalRClient.ts', './Config.ts', './Utils.ts', './BroadcastListener.ts', './TweenUtils.ts', './PhucSinh.GoldEvent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Prefab, Button, Toggle, Animation, SpriteFrame, UITransform, instantiate, v3, Sprite, Tween, director, tween, UIOpacity, MiniGame, PopupGuide, PopupHistory, PopupHonors, PopupSelectLine, App, MiniGameSignalRClient, Configs, Utils, BroadcastReceiver, TweenUtils, GoldEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      Button = module.Button;
      Toggle = module.Toggle;
      Animation = module.Animation;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      v3 = module.v3;
      Sprite = module.Sprite;
      Tween = module.Tween;
      director = module.director;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      PopupGuide = module.PopupGuide;
    }, function (module) {
      PopupHistory = module.PopupHistory;
    }, function (module) {
      PopupHonors = module.PopupHonors;
    }, function (module) {
      PopupSelectLine = module.PopupSelectLine;
    }, function (module) {
      App = module.default;
    }, function (module) {
      MiniGameSignalRClient = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      TweenUtils = module.TweenUtils;
    }, function (module) {
      GoldEvent = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "80788013SRKJKZ32rIKKFxP", "PhucSinh.Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LineReview = (_dec = property(Node), _dec2 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function () {
        function LineReview() {
          _initializerDefineProperty(this, "dot", _descriptor, this);
          _initializerDefineProperty(this, "line", _descriptor2, this);
        }
        var _proto = LineReview.prototype;
        _proto.start = function start() {
          var _this = this;
          this.dot.on(Node.EventType.MOUSE_ENTER, function () {
            _this.line.active = true;
          });
          this.dot.on(Node.EventType.MOUSE_LEAVE, function () {
            _this.line.active = false;
          });
        };
        return LineReview;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dot", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);
      var PhucSinhController = exports('default', (_dec3 = ccclass('PhucSinhController'), _dec4 = property(Label), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Node), _dec11 = property(GoldEvent), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property([Button]), _dec15 = property(Toggle), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Toggle), _dec19 = property(Button), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Animation), _dec24 = property(Node), _dec25 = property(Animation), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property([SpriteFrame]), _dec3(_class4 = (_class5 = /*#__PURE__*/function (_MiniGame) {
        _inheritsLoose(PhucSinhController, _MiniGame);
        function PhucSinhController() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _MiniGame.call.apply(_MiniGame, [this].concat(args)) || this;
          _initializerDefineProperty(_this2, "lblJackpotValue", _descriptor3, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "popupGuidePrefab", _descriptor4, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "popupHistoryPrefab", _descriptor5, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "popupHonorPrefab", _descriptor6, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "popupSelectLinePrefab", _descriptor7, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "popupGoldHourPrefab", _descriptor8, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "popupContainer", _descriptor9, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "goldEvent", _descriptor10, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "dots", _descriptor11, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "lines", _descriptor12, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "betButtons", _descriptor13, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "currencyButton", _descriptor14, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "btnSelectLine", _descriptor15, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "btnAutoSpin", _descriptor16, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "btnTurbo", _descriptor17, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "btnSpin", _descriptor18, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "lblTotalLine", _descriptor19, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "effectNormalWin", _descriptor20, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "effectBigWin", _descriptor21, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "bigWinAnim", _descriptor22, _assertThisInitialized(_this2));
          // @property(Label) 
          // bigWinLabel: Label = null;
          _initializerDefineProperty(_this2, "effectJackpot", _descriptor23, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "jackpotAnim", _descriptor24, _assertThisInitialized(_this2));
          // @property(Label) 
          // jackpotLabel: Label = null;
          _initializerDefineProperty(_this2, "lblWinCash", _descriptor25, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "lblSession", _descriptor26, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "reels", _descriptor27, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "symbolTemplate", _descriptor28, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "symbol", _descriptor29, _assertThisInitialized(_this2));
          _this2.popupGuide = null;
          _this2.popupGoldHour = null;
          _this2.popupHistory = null;
          _this2.popupHonor = null;
          _this2.popupSelectLine = null;
          /**
           * 1-Gold, 2-Xu
           * @private
           */
          _this2._betType = 1;
          // from 1 to 20
          _this2.currentSelectedLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
          _this2.itemHeight = void 0;
          _this2._isAuto = false;
          _this2._roomID = 1;
          _this2._isSpinning = false;
          _this2._isTurbo = false;
          _this2.latestSpinResponse = null;
          _this2._jackpotFund = 0;
          _this2._X2Info = null;
          return _this2;
        }
        var _proto2 = PhucSinhController.prototype;
        _proto2.onLoad = function onLoad() {
          _MiniGame.prototype.onLoad.call(this);
          this.itemHeight = this.symbolTemplate.getComponent(UITransform).height;
          this.tableInit();
          this.registedListeners();
          this.registedHub();
        };
        _proto2.start = function start() {
          this.updateButtonUI();
          this.resetAllEffect();
          this.roomID = 1;
          this.betType = 1;
          this.isAuto = false;
        };
        _proto2.registedListeners = function registedListeners() {
          var _this3 = this;
          this.betButtons[0].node.on('click', function () {
            _this3.roomID = 1;
          });
          this.betButtons[1].node.on('click', function () {
            _this3.roomID = 2;
          });
          this.betButtons[2].node.on('click', function () {
            _this3.roomID = 3;
          });
          this.btnTurbo.node.on('toggle', function () {
            _this3.isTurbo = _this3.btnTurbo.isChecked;
          });
          this.currencyButton.node.on('toggle', function () {
            //* 1-Gold, 2-Xu
            _this3.betType = _this3.currencyButton.isChecked ? 1 : 2;
          });
          var dotChild = this.dots.children;
          var lineChild = this.lines.children;
          var _loop = function _loop(i) {
            dotChild[i].on(Node.EventType.MOUSE_ENTER, function () {
              lineChild[i].active = true;
            });
            dotChild[i].on(Node.EventType.MOUSE_LEAVE, function () {
              lineChild[i].active = false;
            });
          };
          for (var i = 0; i < dotChild.length; i++) {
            _loop(i);
          }
        };
        _proto2.registedHub = function registedHub() {
          var _this4 = this;
          MiniGameSignalRClient.getInstance().receive('jackpotGod', function (data) {
            console.log("jackpotGod", data);
            _this4._jackpotFund = data.JackpotFund;
            TweenUtils.numberTo(_this4.lblJackpotValue, data.JackpotFund, 0.3);
            if (data.X2Info) {
              _this4.goldEvent.node.active = true;
              _this4.X2Info = data.X2Info;
            } else {
              _this4.goldEvent.node.active = false;
            }
          });
          MiniGameSignalRClient.getInstance().receive('resultISpin', function (data) {
            console.log("resultISpin", data);
            _this4.onSpinResult(data);
          });
        };
        _proto2.activePopupSelectLine = function activePopupSelectLine() {
          var _this5 = this;
          if (this.popupSelectLine) {
            this.popupSelectLine.show();
          } else {
            this.popupSelectLine = instantiate(this.popupSelectLinePrefab).getComponent(PopupSelectLine);
            this.popupSelectLine.node.parent = this.popupContainer;
            this.popupSelectLine.show();
            this.popupSelectLine.setOnSelectedChanged(function (selected) {
              _this5.currentSelectedLine = selected;
              _this5.lblTotalLine.string = selected.length.toString();
            });
            this.popupSelectLine.activeAllLines();
          }
        };
        _proto2.activePopupHonor = function activePopupHonor() {
          if (this.popupHonor) {
            this.popupHonor.show();
          } else {
            this.popupHonor = instantiate(this.popupHonorPrefab).getComponent(PopupHonors);
            this.popupHonor.node.parent = this.popupContainer;
            this.popupHonor.show();
          }
        };
        _proto2.activePopupGuide = function activePopupGuide() {
          if (this.popupGuide) {
            this.popupGuide.show();
          } else {
            this.popupGuide = instantiate(this.popupGuidePrefab).getComponent(PopupGuide);
            this.popupGuide.node.parent = this.popupContainer;
            this.popupGuide.show();
          }
        };
        _proto2.activePopupGoldHour = function activePopupGoldHour() {
          if (this.popupGoldHour) {
            this.popupGoldHour.show();
          } else {
            this.popupGoldHour = instantiate(this.popupGoldHourPrefab).getComponent(PopupGuide);
            this.popupGoldHour.node.parent = this.popupContainer;
            this.popupGoldHour.show();
          }
        };
        _proto2.activePopupHistory = function activePopupHistory() {
          if (this.popupHistory) {
            this.popupHistory.show();
          } else {
            this.popupHistory = instantiate(this.popupHistoryPrefab).getComponent(PopupHistory);
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.show();
          }
        };
        _proto2.show = function show() {
          if (this.node.active && this.node.position.x != -10000) {
            this.reOrder();
            return;
          }
          _MiniGame.prototype.show.call(this);
          this.stopAllLines();
          _MiniGame.prototype.show.call(this);
          this.node.setPosition(v3(0, 0, 0));
        };
        _proto2.dismiss = function dismiss() {
          if (this.isAuto) {
            this.node.setPosition(v3(-10000, 0, 0));
          } else {
            _MiniGame.prototype.dismiss.call(this);
            this.invokeHideSlot();
            this.stopAllLines();
            this.closeAllPopup();
          }
          // App.instance.hideGameMini("PhucSinh");
        };

        _proto2.onClickAutoSpin = function onClickAutoSpin() {
          this.isAuto = !this.isAuto;
          if (!this.isAuto) return;
          this.onClickSpin();
        };
        _proto2.onClickSpin = function onClickSpin() {
          var _this6 = this;
          if (this.isSpinning) return;
          this.isSpinning = true;
          this.stopAllLines();
          MiniGameSignalRClient.getInstance().send('ISpin', [Configs.Login.CurrencyID, this.betType, this.roomID, this.currentSelectedLine.join(",")], function (data) {
            if (data < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang('me' + data));
              _this6.isAuto = false;
              _this6.scheduleOnce(function () {
                _this6.isSpinning = false;
              }, 0.5);
            }
          });
        };
        _proto2.invokeGetJackpot = function invokeGetJackpot() {
          MiniGameSignalRClient.getInstance().send('GetGodJackpot', [Configs.Login.CurrencyID, this.betType, this.roomID], function (data) {});
        };
        _proto2.invokeHideSlot = function invokeHideSlot() {
          MiniGameSignalRClient.getInstance().send('HideGodSlot', [], function (data) {
            console.log("HideGodSlot", data);
          });
        };
        _proto2.tableInit = function tableInit() {
          this.reels.children.forEach(function (reel) {
            return reel.removeAllChildren();
          });
          for (var i = 0; i < this.reels.children.length; i++) {
            var column = this.reels.children[i];
            for (var j = 0; j < 30; j++) {
              var row = instantiate(this.symbolTemplate);
              row.parent = column;
              row.getComponentInChildren(Sprite).spriteFrame = this.symbol[Utils.randomRangeInt(0, 6)];
            }
          }
          this.symbolTemplate.removeFromParent();
          this.symbolTemplate = null;
        };
        _proto2.onSpinResult = /*#__PURE__*/function () {
          var _onSpinResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(res.ResponseStatus < 0)) {
                    _context.next = 3;
                    break;
                  }
                  this.isSpinning = false;
                  return _context.abrupt("return");
                case 3:
                  // Store response and update UI
                  this.latestSpinResponse = res;
                  this.lblSession.string = '#' + res.SpinID;
                  this.updateBalance();
                  BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);

                  // Start spin animation
                  _context.next = 9;
                  return this.startSpinAnimation(res.SlotData);
                case 9:
                  _context.next = 11;
                  return this.receiveRewards();
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onSpinResult(_x) {
            return _onSpinResult.apply(this, arguments);
          }
          return onSpinResult;
        }();
        _proto2.startSpinAnimation = /*#__PURE__*/function () {
          var _startSpinAnimation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(slotData) {
            var _this7 = this;
            var matrix, reelCount, spinPromises, spinDuration, delayReel, distance, _loop2, i;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  matrix = slotData.split(",");
                  reelCount = this.reels.children.length;
                  spinPromises = [];
                  spinDuration = 0;
                  delayReel = 0;
                  if (this.isTurbo) {
                    spinDuration = 1.5;
                    delayReel = 0.05;
                  } else {
                    spinDuration = 2.5;
                    delayReel = 0.3;
                  }
                  distance = this.itemHeight * (27 + 0.3);
                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2(i) {
                    var column, j, id, symbol, spinPromise;
                    return _regeneratorRuntime().wrap(function _loop2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          column = _this7.reels.children[i];
                          for (j = 0; j < 3; j++) {
                            id = parseInt(matrix[i + j * reelCount]);
                            symbol = column.children[column.children.length - 1 - j];
                            symbol.getComponentInChildren(Sprite).spriteFrame = _this7.symbol[id - 1];
                          }
                          spinPromise = new Promise(function (resolve) {
                            tween(column).delay(i * delayReel).to(spinDuration, {
                              y: -distance
                            }, {
                              easing: "quadOut"
                            }).by(0.2, {
                              y: _this7.itemHeight * 0.3
                            }, {
                              easing: "quadInOut"
                            }).call(function () {
                              for (var _j = 0; _j < 3; _j++) {
                                var _id = parseInt(matrix[i + _j * 3]);
                                var _symbol = column.children[3 - 1 - _j];
                                _symbol.getComponentInChildren(Sprite).spriteFrame = _this7.symbol[_id - 1];
                              }
                              column.y = 0;
                              resolve();
                            }).start();
                          });
                          spinPromises.push(spinPromise);
                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop2);
                  });
                  i = 0;
                case 9:
                  if (!(i < reelCount)) {
                    _context3.next = 14;
                    break;
                  }
                  return _context3.delegateYield(_loop2(i), "t0", 11);
                case 11:
                  i++;
                  _context3.next = 9;
                  break;
                case 14:
                  _context3.next = 16;
                  return Promise.all(spinPromises);
                case 16:
                case "end":
                  return _context3.stop();
              }
            }, _callee2, this);
          }));
          function startSpinAnimation(_x2) {
            return _startSpinAnimation.apply(this, arguments);
          }
          return startSpinAnimation;
        }();
        _proto2.receiveRewards = /*#__PURE__*/function () {
          var _receiveRewards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this8 = this;
            var hasReward, rewardLines;
            return _regeneratorRuntime().wrap(function _callee3$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  hasReward = this.latestSpinResponse.TotalPrizeValue > 0; // Nếu có dòng thắng, xử lý tách dòng
                  rewardLines = [];
                  if (hasReward) {
                    rewardLines = this.latestSpinResponse.PrizeData.split(";").map(function (segment) {
                      return parseInt(segment.split(",")[0]);
                    }).map(function (num) {
                      return _this8.lines.children[num - 1];
                    });

                    // Bước 1: Hiện tất cả các dòng thắng ngay lập tức
                    rewardLines.forEach(function (node) {
                      return node.active = true;
                    });
                  }
                  _context4.next = 5;
                  return this.showWin();
                case 5:
                  this.isSpinning = false;
                  this.resetAllEffect();
                  this.lines.children.forEach(function (node) {
                    return node.active = false;
                  });
                  if (this.isAuto) {
                    if (hasReward) {
                      director.getScene().emit('ShowMoneyAuto', {
                        money: this.latestSpinResponse.TotalPrizeValue,
                        game: "phucsinh"
                      });
                    }
                    this.onClickSpin();
                  } else {
                    // Bước 3: Nếu có dòng thắng, chạy hiệu ứng từng dòng
                    if (hasReward) {
                      rewardLines.forEach(function (node, i) {
                        tween(node).delay(i).call(function () {
                          return node.active = true;
                        }).delay(0.3).call(function () {
                          return node.active = false;
                        }).start();
                      });
                    }
                  }
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee3, this);
          }));
          function receiveRewards() {
            return _receiveRewards.apply(this, arguments);
          }
          return receiveRewards;
        }();
        _proto2.resetAllEffect = function resetAllEffect() {
          this.effectJackpot.active = false;
          this.effectNormalWin.active = false;
          this.effectBigWin.active = false;
          Tween.stopAllByTarget(this.effectJackpot);
          Tween.stopAllByTarget(this.effectNormalWin);
          Tween.stopAllByTarget(this.effectBigWin);
        };
        _proto2.stopAllLines = function stopAllLines() {
          this.lines.children.forEach(function (line) {
            line.active = false;
            Tween.stopAllByTarget(line);
          });
        };
        _proto2.closeAllPopup = function closeAllPopup() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.popupContainer.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.active = false;
          }
        }

        /*
        * If currency is 1: update GoldCoin
        * If currency is 2: update Coin
        */;
        _proto2.updateBalance = function updateBalance() {
          if (this.betType === 1) {
            Configs.Login.GoldBalance = this.latestSpinResponse.Balance;
          } else {
            Configs.Login.CoinBalance = this.latestSpinResponse.Balance;
          }
        };
        _proto2.showWin = /*#__PURE__*/function () {
          var _showWin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this9 = this;
            var payLinePrize, betValue, iconX2, jackpotValue, jackpotWin, lblWinJackpot, lblBigWin;
            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  payLinePrize = this.latestSpinResponse.TotalPrizeValue;
                  betValue = this.getBetValue();
                  this.lblWinCash.string = '0';
                  this.resetAllEffect();
                  // this.effectNormalWin.active = payLinePrize > 0;
                  if (!(this.latestSpinResponse.IsJackpot > 0)) {
                    _context5.next = 19;
                    break;
                  }
                  this.isAuto = false;
                  this.effectJackpot.active = true;
                  this.jackpotAnim.play('jp');
                  iconX2 = this.effectJackpot.getChildByName('iconX2');
                  jackpotValue = this.latestSpinResponse.Jackpot;
                  jackpotWin = payLinePrize;
                  if (this.latestSpinResponse.IsX2) {
                    iconX2.active = true;
                    jackpotWin += jackpotValue * 2;
                  } else {
                    iconX2.active = false;
                    jackpotWin += jackpotValue;
                  }
                  lblWinJackpot = this.effectJackpot.getComponentInChildren(Label);
                  lblWinJackpot.string = '';
                  TweenUtils.numberTo(lblWinJackpot, jackpotWin, 3);
                  tween(this.effectJackpot.getComponent(UIOpacity)).to(0.3, {
                    opacity: 255
                  }).delay(4).to(0.3, {
                    opacity: 0
                  }).start();
                  return _context5.abrupt("return", new Promise(function (resolve) {
                    tween(_this9.effectJackpot).to(0.3, {
                      scale: v3(1, 1, 1)
                    }, {
                      easing: 'backOut'
                    }).delay(4).call(function () {
                      _this9.effectJackpot.active = false;
                      _this9.jackpotAnim.stop();
                      resolve();
                    }).start();
                  }));
                case 19:
                  if (!(payLinePrize >= 70 * betValue)) {
                    _context5.next = 29;
                    break;
                  }
                  this.effectBigWin.active = true;
                  this.bigWinAnim.play('bigwin');
                  lblBigWin = this.effectBigWin.getComponentInChildren(Label);
                  lblBigWin.string = '';
                  TweenUtils.numberTo(lblBigWin, payLinePrize, 3);
                  tween(this.effectBigWin.getComponent(UIOpacity)).to(0.3, {
                    opacity: 255
                  }).delay(5).to(0.3, {
                    opacity: 0
                  }).start();
                  return _context5.abrupt("return", new Promise(function (resolve) {
                    tween(_this9.effectBigWin).to(0.3, {
                      scale: v3(1, 1, 1)
                    }, {
                      easing: 'backOut'
                    }).delay(5).call(function () {
                      _this9.effectBigWin.active = false;
                      _this9.bigWinAnim.stop();
                      resolve();
                    }).start();
                  }));
                case 29:
                  if (!(payLinePrize > 0)) {
                    _context5.next = 32;
                    break;
                  }
                  this.effectNormalWin.active = true;
                  return _context5.abrupt("return", new Promise(function (resolve) {
                    TweenUtils.numberTo(_this9.lblWinCash, payLinePrize, 0.5);
                    setTimeout(function () {
                      _this9.effectNormalWin.active = false;
                      resolve();
                    }, 1500);
                  }));
                case 32:
                case "end":
                  return _context5.stop();
              }
            }, _callee4, this);
          }));
          function showWin() {
            return _showWin.apply(this, arguments);
          }
          return showWin;
        }();
        _proto2.getBetValue = function getBetValue() {
          if (this.betType === 1) {
            if (this.roomID === 1) return 100;
            if (this.roomID === 2) return 1000;
            if (this.roomID === 3) return 10000;
          } else if (this.betType === 2) {
            if (this.roomID === 1) return 1000;
            if (this.roomID === 2) return 10000;
            if (this.roomID === 3) return 100000;
          }
          return 0;
        };
        _proto2.updateButtonUI = function updateButtonUI() {
          this.setButtonInteractable(this.betButtons[0], !this.isSpinning && !this.isAuto);
          this.setButtonInteractable(this.betButtons[1], !this.isSpinning && !this.isAuto);
          this.setButtonInteractable(this.betButtons[2], !this.isSpinning && !this.isAuto);
          this.setButtonInteractable(this.btnSelectLine, !this.isSpinning && !this.isAuto);
          this.setButtonInteractable(this.btnTurbo, !this.isSpinning && !this.isAuto);
          this.setButtonInteractable(this.btnSpin, !this.isSpinning && !this.isAuto);
          this.setButtonInteractable(this.currencyButton, !this.isSpinning && !this.isAuto);
          if (!this.isAuto) {
            this.setButtonInteractable(this.btnAutoSpin, !this.isSpinning);
          }
        };
        _proto2.setBetValue = function setBetValue(btn, betValue) {
          btn.node.getChildByName("Background").getComponentInChildren(Label).string = Utils.formatMoney(betValue, true);
          btn.node.getChildByName("checkmark").getComponentInChildren(Label).string = Utils.formatMoney(betValue, true);
        };
        _proto2.setButtonInteractable = function setButtonInteractable(button, active) {
          Utils.setInteractableWithGrayScale(button, active);
          button.interactable = active;
        };
        _proto2.onDestroy = function onDestroy() {
          MiniGameSignalRClient.getInstance().dontReceive();
        };
        _createClass(PhucSinhController, [{
          key: "betType",
          get: function get() {
            return this._betType;
          },
          set: function set(value) {
            this._betType = value;
            this.invokeGetJackpot();
            switch (this._betType) {
              case 1:
                this.setBetValue(this.betButtons[0], 100);
                this.setBetValue(this.betButtons[1], 1000);
                this.setBetValue(this.betButtons[2], 10000);
                break;
              case 2:
                this.setBetValue(this.betButtons[0], 1000);
                this.setBetValue(this.betButtons[1], 10000);
                this.setBetValue(this.betButtons[2], 100000);
                break;
            }
          }
        }, {
          key: "isAuto",
          get: function get() {
            return this._isAuto;
          },
          set: function set(value) {
            this._isAuto = value;
            this.btnAutoSpin.node.getChildByName("Dung").active = value;
            this.btnAutoSpin.node.getChildByName("TuQuay").active = !value;
            director.getScene().emit('activeBlinkAuto', {
              game: "phucsinh",
              active: value
            });
          }
        }, {
          key: "roomID",
          get: function get() {
            return this._roomID;
          },
          set: function set(value) {
            this._roomID = value;
            this.invokeGetJackpot();
            this.betButtons.forEach(function (btn, i) {
              btn.node.getChildByName("checkmark").active = i === value - 1;
            });
          }
        }, {
          key: "isSpinning",
          get: function get() {
            return this._isSpinning;
          },
          set: function set(value) {
            this._isSpinning = value;
            this.updateButtonUI();
          }
        }, {
          key: "isTurbo",
          get: function get() {
            return this._isTurbo;
          },
          set: function set(value) {
            this._isTurbo = value;
          }
        }, {
          key: "X2Info",
          get: function get() {
            return this._X2Info;
          },
          set: function set(value) {
            this._X2Info = value;
            this.goldEvent.updateJackpotEvent(value);
          }
        }]);
        return PhucSinhController;
      }(MiniGame), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "lblJackpotValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "popupGuidePrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "popupHistoryPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "popupHonorPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "popupSelectLinePrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "popupGoldHourPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "popupContainer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "goldEvent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "dots", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "lines", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "betButtons", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "currencyButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "btnSelectLine", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "btnAutoSpin", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "btnTurbo", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "btnSpin", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "lblTotalLine", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "effectNormalWin", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class5.prototype, "effectBigWin", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class5.prototype, "bigWinAnim", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class5.prototype, "effectJackpot", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class5.prototype, "jackpotAnim", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class5.prototype, "lblWinCash", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class5.prototype, "lblSession", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class5.prototype, "reels", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class5.prototype, "symbolTemplate", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class5.prototype, "symbol", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PhucSinh.Detail.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, ScrollView, instantiate, Component, App, Utils;
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
      Label = module.Label;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "12793yTBPhF2ayHs5nIjmix", "PhucSinh.Detail", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HistoryDetail = exports('HistoryDetail', (_dec = ccclass('HistoryDetail'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(ScrollView), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HistoryDetail, _Component);
        function HistoryDetail() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblTopTitle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDateTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRoomValue", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "row", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalWin", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HistoryDetail.prototype;
        _proto.showDetail = function showDetail(spinData) {
          this.node.active = true;
          this.historyNode.active = false;
          this.lblSession.string = '#' + spinData.SpinID.toString();
          this.lblDateTime.string = Utils.formatDatetime(spinData.CreatedTime, "dd/MM/yyyy HH:mm:ss");
          this.lblRoomValue.string = Utils.formatNumber(spinData.BetValue);
          this.lblTotalBet.string = Utils.formatNumber(spinData.TotalBetValue);
          this.lblTotalWin.string = Utils.formatNumber(spinData.TotalPrizeValue);
          var prizeMap = new Map();
          if (spinData.PrizeData) {
            var prizeEntries = spinData.PrizeData.split(";");
            for (var _iterator = _createForOfIteratorHelperLoose(prizeEntries), _step; !(_step = _iterator()).done;) {
              var entry = _step.value;
              var _entry$split$map = entry.split(",").map(Number),
                lineId = _entry$split$map[0],
                _ = _entry$split$map[1],
                prize = _entry$split$map[2];
              prizeMap.set(lineId, prize);
            }
          }
          this.scrollView.content.removeAllChildren();
          var lineData = spinData.LineData.split(",");
          for (var i = 0; i < lineData.length; i++) {
            var _lineId = parseInt(lineData[i]);
            var itemRow = instantiate(this.row);
            itemRow.active = true;
            this.scrollView.content.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = _lineId.toString();
            itemRow.children[1].getComponent(Label).string = Utils.formatNumber(spinData.BetValue);
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(prizeMap.get(_lineId) || 0);
          }
          this.lblTopTitle.string = App.instance.getTextLang("sl43").toUpperCase();
        };
        _proto.close = function close() {
          this.historyNode.active = true;
          this.node.active = false;
          this.lblTopTitle.string = App.instance.getTextLang("sl34").toUpperCase();
        };
        return HistoryDetail;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTopTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "historyNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblDateTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblRoomValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "row", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalWin", [_dec10], {
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

System.register("chunks:///_virtual/PhucSinh.GoldEvent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RichText, Node, Component, App;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1a720eKnaNE2JSzhkVJTHrP", "PhucSinh.GoldEvent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GoldEvent = exports('default', (_dec = ccclass('GoldEvent'), _dec2 = property(RichText), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldEvent, _Component);
        function GoldEvent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblContent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconX2", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GoldEvent.prototype;
        _proto.updateJackpotEvent = function updateJackpotEvent(X2Info) {
          this.node.active = X2Info.Status !== -1;
          if (!this.node.active) return;
          var lbl1 = '';
          var lbl2 = '';
          var lbl3 = '';
          this.iconX2.active = false;
          if (X2Info.Status == 1) {
            if (X2Info.Jackpot_Waiting > 0) {
              lbl1 = App.instance.getTextLang("ev26");
              lbl2 = X2Info.Jackpot_Waiting.toString();
              lbl3 = 'Jackpot';
            } else {
              lbl1 = App.instance.getTextLang("ev25");
              lbl2 = X2Info.JackpotX2_Remain.toString();
              lbl3 = '(X2)';
              this.iconX2.active = true;
            }
          }
          if (X2Info.Status == 0) {
            lbl1 = App.instance.getTextLang("ev24");
            lbl2 = this.getTime(X2Info.NextEventDateTime);
            lbl3 = this.getDay(X2Info.NextEventDateTime);
          }
          this.lblContent.string = "<color=#C30000>" + lbl1 + "</c>\n<color=#000000>" + lbl2 + "</c>\n<color=#1400FF>" + lbl3 + "</c>";
        };
        _proto.getTime = function getTime(z) {
          var date = new Date(z);
          var time = date.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
          });
          return time;
        };
        _proto.getDay = function getDay(z) {
          var date = new Date(z);
          var formattedDate = date.toLocaleDateString("en-GB");
          return formattedDate;
        };
        return GoldEvent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconX2", [_dec3], {
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

System.register("chunks:///_virtual/PhucSinh.PopupGuide.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts'], function (exports) {
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
      var _dec, _class;
      cclegacy._RF.push({}, "ce8e524HiJKqrOSEb3jkefd", "PhucSinh.PopupGuide", undefined);
      var ccclass = _decorator.ccclass;
      var PopupGuide = exports('PopupGuide', (_dec = ccclass('PopupGuide'), _dec(_class = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupGuide, _Dialog);
        function PopupGuide() {
          return _Dialog.apply(this, arguments) || this;
        }
        return PopupGuide;
      }(Dialog)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PhucSinh.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Config.ts', './App.ts', './Http.ts', './Utils.ts', './Pagination.ts', './PhucSinh.Detail.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, ToggleContainer, Node, SpriteFrame, instantiate, Label, Sprite, Dialog, Configs, App, Http, Utils, PaginationUI, HistoryDetail;
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
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      PaginationUI = module.default;
    }, function (module) {
      HistoryDetail = module.HistoryDetail;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "50c4dQLBjdAJaeC1Vj5E0Df", "PhucSinh.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupHistory = exports('PopupHistory', (_dec = ccclass('PopupHistory'), _dec2 = property(ToggleContainer), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(PaginationUI), _dec12 = property(PaginationUI), _dec13 = property(HistoryDetail), _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistory, _Dialog);
        function PopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toggleTitle", _descriptor, _assertThisInitialized(_this));
          // Tipzo
          _initializerDefineProperty(_this, "tipzoNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoContainer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoRowTemplate", _descriptor4, _assertThisInitialized(_this));
          // Xu
          _initializerDefineProperty(_this, "xuNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuContainer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuRowTemplate", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfRow1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfRow2", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoPagination", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuPagination", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailNode", _descriptor12, _assertThisInitialized(_this));
          _this._dataTipzoLoaded = void 0;
          _this._dataXuLoaded = void 0;
          return _this;
        }
        var _proto = PopupHistory.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          var _loop = function _loop(i) {
            _this2.toggleTitle.node.children[i].on("toggle", function () {
              _this2.onClickTab(i);
            });
          };
          for (var i = 0; i < this.toggleTitle.node.children.length; i++) {
            _loop(i);
          }
          this.tipzoPagination.initListener(function (page) {
            _this2.showTipzo(page);
          });
          this.xuPagination.initListener(function (page) {
            _this2.showXu(page);
          });
        };
        _proto.onClickTab = function onClickTab(i) {
          if (i === 0) {
            //this.showTipzo(1);//
            this.tipzoNode.active = true;
            this.xuNode.active = false;
          } else {
            //this.showXu();
            this.xuNode.active = true;
            this.tipzoNode.active = false;
          }
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.fetchTipzoHistory();
          this.fetchXuHistory();
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          var isTipZo = App.instance.phucSinhMiniGame.betType === 1;
          this.toggleTitle.toggleItems[isTipZo ? 0 : 1].isChecked = true;
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        }

        // Fetch API to get latest 10 rows of Tipzo
        ;

        _proto.fetchTipzoHistory = function fetchTipzoHistory() {
          var _this3 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountHistoryPhucSinh"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 1,
            "Page": 1,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this3._dataTipzoLoaded = json["d"];
              _this3.showTipzo(1);
            }
          });
        };
        _proto.fetchXuHistory = function fetchXuHistory() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountHistoryPhucSinh"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 2,
            "Page": 1,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this4._dataXuLoaded = json["d"];
              _this4.showXu(1);
            }
          });
        };
        _proto.showTipzo = function showTipzo(page) {
          var _this5 = this;
          this.tipzoContainer.removeAllChildren();
          this.tipzoPagination.updatePagination(Math.ceil(this._dataTipzoLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataTipzoLoaded.slice((page - 1) * 10, page * 10);
          var _loop2 = function _loop2() {
            var data = _step.value;
            var itemRow = instantiate(_this5.tipzoRowTemplate);
            itemRow.active = true;
            _this5.tipzoContainer.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = data.SpinID.toString();
            itemRow.children[1].getComponent(Label).string = Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(data.BetValue);
            itemRow.children[3].getComponent(Label).string = data.LineData.split(",").length.toString();
            itemRow.children[4].getComponent(Label).string = Utils.formatNumber(data.TotalBetValue);
            itemRow.children[5].getComponent(Label).string = truncateStringFixedLength(parsePrizeData(data.PrizeData));
            itemRow.children[6].getComponent(Label).string = Utils.formatNumber(data.TotalPrizeValue);
            itemRow.children[7].getComponent(Label).string = App.instance.getTextLang("sl43");
            itemRow.children[7].on("click", function () {
              _this5.detailNode.showDetail(data);
            });
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? _this5.sfRow1 : _this5.sfRow2;
            ithRow++;
          };
          for (var _iterator = _createForOfIteratorHelperLoose(loaded), _step; !(_step = _iterator()).done;) {
            _loop2();
          }
        };
        _proto.showXu = function showXu(page) {
          var _this6 = this;
          this.xuContainer.removeAllChildren();
          this.xuPagination.updatePagination(Math.ceil(this._dataXuLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataXuLoaded.slice((page - 1) * 10, page * 10);
          var _loop3 = function _loop3() {
            var data = _step2.value;
            var itemRow = instantiate(_this6.xuRowTemplate);
            itemRow.active = true;
            _this6.xuContainer.addChild(itemRow);
            itemRow.children[0].getComponent(Label).string = data.SpinID.toString();
            itemRow.children[1].getComponent(Label).string = Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss");
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(data.BetValue);
            itemRow.children[3].getComponent(Label).string = data.LineData.split(",").length.toString();
            itemRow.children[4].getComponent(Label).string = Utils.formatNumber(data.TotalBetValue);
            itemRow.children[5].getComponent(Label).string = truncateStringFixedLength(parsePrizeData(data.PrizeData));
            itemRow.children[6].getComponent(Label).string = Utils.formatNumber(data.TotalPrizeValue);
            itemRow.children[7].getComponent(Label).string = App.instance.getTextLang("sl43");
            itemRow.children[7].on("click", function () {
              _this6.detailNode.showDetail(data);
            });
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? _this6.sfRow1 : _this6.sfRow2;
            ithRow++;
          };
          for (var _iterator2 = _createForOfIteratorHelperLoose(loaded), _step2; !(_step2 = _iterator2()).done;) {
            _loop3();
          }
        };
        _proto._onDismissed = function _onDismissed() {
          _Dialog.prototype._onDismissed.call(this);
          this.detailNode.close();
        };
        return PopupHistory;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipzoNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipzoContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipzoRowTemplate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xuNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xuContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xuRowTemplate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sfRow1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sfRow2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tipzoPagination", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "xuPagination", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "detailNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * Truncate a comma-separated string to a fixed length while ensuring
       * the last visible number before "..." is fully displayed.
       *
       * @param {string} input - The input string
       * @param {number} [maxLength=20] - The fixed length to truncate the string to (default is 20).
       * @returns {string} - The truncated string with "..." appended.
       */
      function truncateStringFixedLength(input, maxLength) {
        if (maxLength === void 0) {
          maxLength = 12;
        }
        if (input.length <= maxLength) return input;
        var parts = input.split(",");
        var result = "";
        var lastFullNumber = "";
        for (var i = 0; i < parts.length; i++) {
          var temp = result.length > 0 ? result + "," + parts[i] : parts[i];
          if (temp.length + 3 > maxLength) {
            // +3 for "..."
            return lastFullNumber.padEnd(maxLength - 3, ".") + "...";
          }
          result = temp;
          lastFullNumber = result;
        }
        return result;
      }
      function parsePrizeData(input) {
        return input.split(';') // Tách thành mảng các chuỗi con "20,7,300", "4,8,40", ...
        .map(function (group) {
          return group.split(',')[0];
        }) // Lấy phần tử đầu tiên của mỗi nhóm
        .join(','); // Nối lại thành chuỗi với dấu phẩy
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PhucSinh.PopupHonors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Http.ts', './Config.ts', './App.ts', './Utils.ts', './Pagination.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, ToggleContainer, Node, SpriteFrame, instantiate, Label, RichText, Sprite, Dialog, Http, Configs, App, Utils, PaginationUI;
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
      Http = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      PaginationUI = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "4c6284jvy1JZ7l7PDBuFs+/", "PhucSinh.PopupHonors", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupHonors = exports('PopupHonors', (_dec = ccclass('PopupHonors'), _dec2 = property(ToggleContainer), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(PaginationUI), _dec12 = property(PaginationUI), _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHonors, _Dialog);
        function PopupHonors() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toggleTitle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoContainer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoRowTemplate", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuContainer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuRowTemplate", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfRow1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfRow2", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipzoPagination", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xuPagination", _descriptor11, _assertThisInitialized(_this));
          _this._dataTipzoLoaded = void 0;
          _this._dataXuLoaded = void 0;
          return _this;
        }
        var _proto = PopupHonors.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          var _loop = function _loop(i) {
            _this2.toggleTitle.node.children[i].on("toggle", function () {
              _this2.onClickTab(i);
            });
          };
          for (var i = 0; i < this.toggleTitle.node.children.length; i++) {
            _loop(i);
          }
          this.tipzoPagination.initListener(function (page) {
            _this2.showTipzo(page);
          });
          this.xuPagination.initListener(function (page) {
            _this2.showXu(page);
          });
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.fetchTipzoHistory();
          this.fetchXuHistory();
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          var isTipZo = App.instance.phucSinhMiniGame.betType === 1;
          this.toggleTitle.toggleItems[isTipZo ? 0 : 1].isChecked = true;
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto.onClickTab = function onClickTab(i) {
          if (i === 0) {
            this.tipzoNode.active = true;
            this.xuNode.active = false;
          } else {
            this.xuNode.active = true;
            this.tipzoNode.active = false;
          }
        };
        _proto.fetchTipzoHistory = function fetchTipzoHistory() {
          var _this3 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopWinnerPhucSinh"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 1,
            "Page": 1,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this3._dataTipzoLoaded = json["d"];
              _this3.showTipzo(1);
            }
          });
        };
        _proto.fetchXuHistory = function fetchXuHistory() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopWinnerPhucSinh"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 2,
            "Page": 1,
            "topCount": 100
          }, function (status, json) {
            if (json["c"] >= 0) {
              _this4._dataXuLoaded = json["d"];
              _this4.showXu(1);
            }
          });
        };
        _proto.showTipzo = function showTipzo(page) {
          this.tipzoContainer.removeAllChildren();
          this.tipzoPagination.updatePagination(Math.ceil(this._dataTipzoLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataTipzoLoaded.slice((page - 1) * 10, page * 10);
          for (var _iterator = _createForOfIteratorHelperLoose(loaded), _step; !(_step = _iterator()).done;) {
            var data = _step.value;
            var itemRow = instantiate(this.tipzoRowTemplate);
            itemRow.active = true;
            this.tipzoContainer.addChild(itemRow);
            var dataParsed = this.dataParser(data);
            itemRow.children[0].getComponent(Label).string = dataParsed.dateTime;
            itemRow.children[1].getComponent(RichText).string = dataParsed.nickName;
            var betValue = 0;
            switch (parseInt(dataParsed.roomID)) {
              case 1:
                betValue = 100;
                break;
              case 2:
                betValue = 1000;
                break;
              case 3:
                betValue = 10000;
                break;
            }
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(betValue);
            itemRow.children[3].getComponent(Label).string = dataParsed.win;
            itemRow.children[4].getComponent(Label).string = dataParsed.winType;
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? this.sfRow1 : this.sfRow2;
            ithRow++;
          }
        };
        _proto.showXu = function showXu(page) {
          this.xuContainer.removeAllChildren();
          this.xuPagination.updatePagination(Math.ceil(this._dataXuLoaded.length / 10), page);
          var ithRow = 0;
          var loaded = this._dataXuLoaded.slice((page - 1) * 10, page * 10);
          for (var _iterator2 = _createForOfIteratorHelperLoose(loaded), _step2; !(_step2 = _iterator2()).done;) {
            var data = _step2.value;
            var itemRow = instantiate(this.xuRowTemplate);
            itemRow.active = true;
            this.xuContainer.addChild(itemRow);
            var dataParsed = this.dataParser(data);
            itemRow.children[0].getComponent(Label).string = dataParsed.dateTime;
            itemRow.children[1].getComponent(RichText).string = dataParsed.nickName;
            var betValue = 0;
            switch (parseInt(dataParsed.roomID)) {
              case 1:
                betValue = 1000;
                break;
              case 2:
                betValue = 10000;
                break;
              case 3:
                betValue = 100000;
                break;
            }
            itemRow.children[2].getComponent(Label).string = Utils.formatNumber(betValue);
            itemRow.children[3].getComponent(Label).string = dataParsed.win;
            itemRow.children[4].getComponent(Label).string = dataParsed.winType;
            itemRow.getComponent(Sprite).spriteFrame = ithRow % 2 === 0 ? this.sfRow1 : this.sfRow2;
            ithRow++;
          }
        };
        _proto.dataParser = function dataParser(data) {
          return {
            dateTime: Utils.formatDatetime(data.CreatedTime, "dd/MM/yyyy HH:mm:ss"),
            nickName: data.Nickname.replace(/\[(.*?)\]/, '<color=#41d802>[$1]</color>'),
            roomID: data.RoomID,
            win: Utils.formatNumber(data.PrizeValue),
            winType: App.instance.getTextLang("sl33") + (data.IsX2 ? " X2" : "")
          };
        };
        return PopupHonors;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipzoNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipzoContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipzoRowTemplate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xuNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xuContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xuRowTemplate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sfRow1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sfRow2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tipzoPagination", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "xuPagination", [_dec12], {
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

System.register("chunks:///_virtual/PhucSinh.PopupSelectLine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Toggle, Dialog;
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
      Toggle = module.Toggle;
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f77b7tu23dAo67yplsZvenu", "PhucSinh.PopupSelectLine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupSelectLine = exports('PopupSelectLine', (_dec = ccclass('PopupSelectLine'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupSelectLine, _Dialog);
        function PopupSelectLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonLines", _descriptor, _assertThisInitialized(_this));
          _this._onSelectedChanged = null;
          return _this;
        }
        var _proto = PopupSelectLine.prototype;
        _proto.setOnSelectedChanged = function setOnSelectedChanged(fn) {
          this._onSelectedChanged = fn;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.buttonLines.children.forEach(function (btn, index) {
            btn.on("toggle", function () {
              return _this2.updateSelectedLines();
            });
          });
          this.updateSelectedLines();
        };
        _proto.updateSelectedLines = function updateSelectedLines() {
          var _this$_onSelectedChan;
          var selectedLines = this.getSelectedLines();
          (_this$_onSelectedChan = this._onSelectedChanged) == null || _this$_onSelectedChan.call(this, selectedLines);
        };
        _proto.toggleLines = function toggleLines(condition) {
          this.buttonLines.children.forEach(function (btn, index) {
            btn.getComponent(Toggle).isChecked = condition(index);
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
        _proto.getSelectedLines = function getSelectedLines() {
          var selectedLines = [];
          for (var i = 0; i < this.buttonLines.children.length; i++) {
            if (this.buttonLines.children[i].getComponent(Toggle).isChecked) {
              selectedLines.push(i + 1);
            }
          }
          return selectedLines;
        };
        _proto.hide = function hide() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
        };
        return PopupSelectLine;
      }(Dialog), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonLines", [_dec2], {
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

(function(r) {
  r('virtual:///prerequisite-imports/PhucSinh', 'chunks:///_virtual/PhucSinh'); 
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