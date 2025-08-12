System.register("chunks:///_virtual/CardItemController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CatteController.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Button, Sprite, Color, Component, CatteController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Sprite = module.Sprite;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      CatteController = module.CatteController;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c8d57L55P9JmJOS7QKAmKlk", "CardItemController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CardItemController = exports('CardItemController', (_dec = ccclass("CardItemController"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardItemController, _Component);
        function CardItemController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.cardId = void 0;
          _this.callBack = void 0;
          return _this;
        }
        var _proto = CardItemController.prototype;
        _proto.onLoad = function onLoad() {
          this.node.addComponent(Button);
          this.node.on("click", this.onCardClicked, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off("click", this.onCardClicked, this);
        };
        _proto.onCardClicked = function onCardClicked() {
          CatteController.Instance.HUD.blurButton(false);
          if (this.cardId) {
            this.callBack && this.callBack(this.cardId);
          }
        };
        _proto.show = function show(id, isDark, cb) {
          if (isDark === void 0) {
            isDark = false;
          }
          this.cardId = id;
          var spr = this.getComponent(Sprite);
          if (spr) {
            spr.color = isDark ? new Color(255, 255, 255) : new Color(211, 211, 211);
            spr.spriteFrame = CatteController.Instance.getCardInfo(id);
          }
          if (cb) {
            this.callBack = cb;
          }
        };
        _createClass(CardItemController, [{
          key: "CardID",
          get: function get() {
            return this.cardId;
          }
        }]);
        return CardItemController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Catte", ['./CardItemController.ts', './Catte.HUD.ts', './Catte.Utils.ts', './Catte.const.ts', './CatteController.ts', './CattePlayerController.ts'], function () {
  return {
    setters: [null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Catte.const.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "31c07wxYOZIUpgVZfkV0ODm", "Catte.const", undefined);
      var CatteDataServiceImp = /*#__PURE__*/function () {
        function CatteDataServiceImp() {
          this.isVip = false;
        }
        _createClass(CatteDataServiceImp, [{
          key: "IsVip",
          get: function get() {
            return this.isVip;
          },
          set: function set(v) {
            this.isVip = v;
          }
        }]);
        return CatteDataServiceImp;
      }();
      var CatteConst = exports('CatteConst', new CatteDataServiceImp());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Catte.HUD.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './CardItemController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, UIOpacity, Vec3, tween, Component, App, CardItemController;
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
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }, function (module) {
      CardItemController = module.CardItemController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "0873c4ISlxNYIF/p5zupACP", "Catte.HUD", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CatteHUDController = exports('CatteHUDController', (_dec = ccclass("CatteHUDController"), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CatteHUDController, _Component);
        function CatteHUDController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "InfoLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BackgroundNormal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BackgroundVip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "GroupButtons", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinPopUp", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CatteHUDController.prototype;
        _proto.setInfoLabel = function setInfoLabel(data, session) {
          var isVip = data.Currency;
          var price = data.Value;
          var currency = isVip ? "Tipzo" : "Coin";
          var name = data.Id;
          if (this.InfoLabel) {
            this.InfoLabel.string = (isVip ? "" + App.instance.getTextLang("tb112") : "" + App.instance.getTextLang("tb113")) + " " + (name != null ? name : "") + "\n" + ("" + App.instance.getTextLang("iap38")) + ": " + price.toLocaleString("vi") + " " + currency + "\n" + ("" + App.instance.getTextLang("ca95")) + ": #" + (session === 0 ? "" : session);
          }
          if (isVip) {
            if (this.BackgroundNormal) this.BackgroundNormal.active = false;
            if (this.BackgroundVip) this.BackgroundVip.active = true;
          } else {
            if (this.BackgroundNormal) this.BackgroundNormal.active = true;
            if (this.BackgroundVip) this.BackgroundVip.active = false;
          }
        };
        _proto.blurButton = function blurButton(isBlur) {
          if (this.GroupButtons) {
            var uo = this.GroupButtons.getComponent(UIOpacity);
            if (uo) {
              uo.opacity = isBlur ? 150 : 255;
            }
          }
        };
        _proto.activeGroupButton = function activeGroupButton(active) {
          if (this.GroupButtons) {
            this.GroupButtons.active = active;
            if (active) {
              this.blurButton(true);
            }
          }
        };
        _proto.showWinPopUp = function showWinPopUp(isSpecialWin, cards, value) {
          var _this2 = this;
          if (cards === void 0) {
            cards = [];
          }
          if (this.WinPopUp) {
            this.WinPopUp.scale = Vec3.ZERO;
            var special = this.WinPopUp.children[0];
            if (special) {
              special.active = isSpecialWin;
              //Check has 4 card same kind
              var CardLayoutNode = special.children[0];
              if (cards && cards.length && CardLayoutNode) {
                for (var i = 0; i < 6; i++) {
                  var cardNode = CardLayoutNode.children[i];
                  if (cards[i]) {
                    cardNode.active = true;
                    var comp = cardNode.getComponent(CardItemController);
                    if (comp) {
                      comp.show(cards[i], cards[i] % 13 === value);
                    }
                  } else {
                    cardNode.active = false;
                  }
                }
              }
            }
            var win = this.WinPopUp.children[1];
            if (win) {
              win.active = !isSpecialWin;
            }
            tween(this.WinPopUp).to(0.5, {
              scale: Vec3.ONE
            }, {
              easing: "elasticOut"
            }).delay(1).call(function () {
              tween(_this2.WinPopUp).to(0.5, {
                scale: Vec3.ZERO
              }, {
                easing: "elasticOut"
              }).start();
            }).start();
          }
        };
        return CatteHUDController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "InfoLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BackgroundNormal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BackgroundVip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GroupButtons", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WinPopUp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Catte.Utils.ts", ['cc', './BundleControl.ts'], function (exports) {
  var cclegacy, BundleControl;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BundleControl = module.default;
    }],
    execute: function () {
      exports({
        convertObjectToArray: convertObjectToArray,
        loadBundleCatte: loadBundleCatte
      });
      cclegacy._RF.push({}, "32b21HzeFJCmqwceUYo5e3N", "Catte.Utils", undefined);
      function loadBundleCatte(cb) {
        BundleControl.loadBundle("Catte", function () {
          cb && cb();
        });
      }
      function convertObjectToArray(obj) {
        if (!obj) return [];
        var result = [];
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result.push(obj[key]);
          }
        }
        return result;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CatteController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattePlayerController.ts', './App.ts', './Config.ts', './Catte.HUD.ts', './Catte.Utils.ts', './CardGameSignalRClient.ts', './Utils.ts', './ChatInGame.ts', './BundleControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Node, ParticleSystem2D, assetManager, SpriteFrame, Label, Animation, Component, instantiate, CattePlayerController, App, Configs, CatteHUDController, loadBundleCatte, CardGameSignalRClient, Utils, ChatInGame, BundleControl;
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
      Sprite = module.Sprite;
      Node = module.Node;
      ParticleSystem2D = module.ParticleSystem2D;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Animation = module.Animation;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      CattePlayerController = module.CattePlayerController;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      CatteHUDController = module.CatteHUDController;
    }, function (module) {
      loadBundleCatte = module.loadBundleCatte;
    }, function (module) {
      CardGameSignalRClient = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      ChatInGame = module.default;
    }, function (module) {
      BundleControl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;
      cclegacy._RF.push({}, "8eaa0litndK2LZGqpdr4g8Z", "CatteController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CatteController = exports('CatteController', (_dec = ccclass("CatteController"), _dec2 = property(CatteHUDController), _dec3 = property(CattePlayerController), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(ParticleSystem2D), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CatteController, _Component);
        function CatteController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "HUD", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "PlayerList", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinPopUp", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Detail", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NoityPlayerCount", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Effect", _descriptor7, _assertThisInitialized(_this));
          _this.spriteFramesDe = [];
          _this.spriteFramesNo = [];
          _this.Player = void 0;
          _this.chatIngame = null;
          _this.cards = [];
          _this.currentPlayersList = [];
          _this.currentPlayerData = void 0;
          _this.playerCount = 0;
          _this.isQuitting = false;
          _this.session = 0;
          _this.countDown = 60;
          _this._flagCheckOnline = false;
          _this.isPlaying = false;
          return _this;
        }
        var _proto = CatteController.prototype;
        _proto.onLoad = function onLoad() {
          CatteController.Instance = this;
        };
        _proto.start = function start() {
          var _this2 = this;
          loadBundleCatte(function () {
            var bundle = assetManager.getBundle("Catte");
            bundle.loadDir("res/Card/", SpriteFrame, function (err, spriteFrames) {
              if (err) {
                console.error("Failed to load atlas:", err);
                return;
              }
              _this2.cards = spriteFrames;
            });
          });
          this.playAnimationnormal();
          var data = App.instance.DataPass[0];
          this._flagCheckOnline = true;
          if (this.HUD) this.HUD.setInfoLabel(data, this.session);
          this.scheduleOnce(function () {
            _this2.playerJoin(App.instance.DataPass[0]);
          }, 1);
          if (this.Detail) {
            this.Detail.active = true;
            var label = this.Detail.getChildByName("Label").getComponent(Label);
            if (label) {
              label.string = App.instance.getTextLang("me6");
            }
          }
          CardGameSignalRClient.getInstance().receive("joinRoom", function (data) {
            if (data.r) {
              App.instance.showToast(App.instance.getTextLang("me6"));
              _this2.playerJoin(data.r);
            }
          });
          CardGameSignalRClient.getInstance().receive("roomData", function (data) {
            if (data.r) {
              _this2.onHandleRoom(data.r);
            }
          });
          CardGameSignalRClient.getInstance().receive("showCard", function (data) {
            if (data.r) {
              console.log("showCard", data.r);
            }
          });
          CardGameSignalRClient.getInstance().receive("registerLeavingRoom", function (data) {
            if (!data.r) return;
            _this2.countDown = 60;
            _this2.PlayerList.forEach(function (e) {
              if (e.Data && e.Data.AccountId === data.r.id) {
                if (e.Data.AccountId != _this2.currentPlayerData.AccountId) {
                  App.instance.showToast(App.instance.getTextLang("me11004").replace("{0}", e.Data.Nickname));
                } else {
                  if (data && data.code == 11007) {
                    var stringaler = App.instance.getTextLang("me11007");
                    App.instance.ShowAlertDialog(Utils.formatString(stringaler, Utils.formatNumber(data.prms[0]), data.prms[0] == 1 ? App.instance.getTextLang("hi25") : App.instance.getTextLang("TLN_COIN")));
                  }
                  _this2.isQuitting = true;
                }
              }
            });
          });
          CardGameSignalRClient.getInstance().receiveArray("recieveMessage", function (accountId, _nickname, content) {
            _this2.PlayerList.forEach(function (e) {
              if (e.Data && e.Data.AccountId === accountId) {
                e.showChatMsg(content);
              }
            });
          });
        };
        _proto.actChat = function actChat() {
          var _this3 = this;
          this.countDown = 60;
          App.instance.inactivityTimer = 0;
          if (this.chatIngame == null) {
            var cb = function cb(prefab) {
              var chat = instantiate(prefab);
              _this3.HUD.node.addChild(chat);
              _this3.chatIngame = chat.getComponent(ChatInGame);
              _this3.chatIngame.show(Configs.InGameIds.Catte);
            };
            BundleControl.loadPrefabPopup("prefabs/ChatInGame", cb);
          } else {
            this.chatIngame.show(Configs.InGameIds.Catte);
          }
        };
        _proto.backToLobby = function backToLobby() {
          if (this.isQuitting) return;
          this.isQuitting = true;
          this.sendExit();
          if (!this.isPlaying) {
            App.instance.gotoLobby();
            Utils.setStorageValue("last_open_game_id", "");
          }
          if (this.playerCount <= 1) {
            App.instance.gotoLobby();
            Utils.setStorageValue("last_open_game_id", "");
          }
        };
        _proto.sendExit = function sendExit() {
          CardGameSignalRClient.getInstance().send("ExitRoom", [], null);
        };
        _proto.playAnimationDealer = function playAnimationDealer() {
          if (this.dealer) {
            var anim = this.dealer.getComponent(Animation);
            if (anim) {
              anim.stop();
              var stateName = "chia";
              var state = anim.getState(stateName);
              if (state) {
                anim.play(stateName);
              }
            }
          }
        };
        _proto.playAnimationnormal = function playAnimationnormal() {
          if (this.dealer) {
            var anim = this.dealer.getComponent(Animation);
            if (anim) {
              anim.stop();
              var stateName = "dealer";
              var state = anim.getState(stateName);
              if (state) {
                anim.play(stateName);
              }
            }
          }
        };
        _proto.getCardByName = function getCardByName(cardNum) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.cards), _step; !(_step = _iterator()).done;) {
            var spr = _step.value;
            if (spr.name === cardNum) {
              return spr;
            }
          }
          return null;
        };
        _proto.playerJoin = function playerJoin(data) {
          var newArr = [].concat(data.Players.filter(function (item) {
            return item.Nickname.split("[X]")[1] === Configs.Login.Nickname;
          }), data.Players.filter(function (item) {
            return item.Nickname.split("[X]")[1] !== Configs.Login.Nickname;
          }));
          this.currentPlayersList = newArr;
          this.updatePlayerList(this.currentPlayersList);
        };
        _proto.updatePlayerList = function updatePlayerList(players) {
          var _this4 = this;
          if (this.NoityPlayerCount) {
            this.NoityPlayerCount.active = players.length <= 1;
            this.playerCount = players.length;
          }
          if (players && players.length) {
            this.PlayerList.forEach(function (e, i) {
              if (players[i]) {
                if (players[i].Nickname.split("[X]")[1] === Configs.Login.Nickname) {
                  _this4.Player = e;
                  _this4.currentPlayerData = players[i];
                  e.setInfo(players[i], true);
                } else {
                  e.setInfo(players[i], false);
                }
              } else {
                e.setEmpty();
              }
            });
          }
        };
        _proto.onHandleRoom = function onHandleRoom(data) {
          var _this5 = this;
          console.log("Update: ", data);
          var newArr = [].concat(data.Players.filter(function (item) {
            return item.Nickname.split("[X]")[1] === Configs.Login.Nickname;
          }), data.Players.filter(function (item) {
            return item.Nickname.split("[X]")[1] !== Configs.Login.Nickname;
          }));
          this.currentPlayersList = newArr;
          this.updatePlayerList(this.currentPlayersList);
          var session = data.Session;
          if (session) {
            if (session.Phrase === 1) {
              this.session++;
              this.isPlaying = true;
              this.HUD.setInfoLabel(data, this.session);
              if (this.Detail) {
                this.Detail.active = true;
              }
              this.playAnimationDealer();
              this.scheduleOnce(function () {
                _this5.playAnimationnormal();
              }, 1.5);
            } else if (session.Phrase === 4) {
              var _this$currentPlayerDa;
              if (this.Detail) {
                this.Detail.active = false;
              }
              var specialWinData = this.hasFourOfAKind((_this$currentPlayerDa = this.currentPlayerData.Hand) == null ? void 0 : _this$currentPlayerDa.HandCards);
              this.PlayerList.forEach(function (e) {
                if (e.Data) {
                  if (e.Data.AccountId === session.Winner) {
                    e.showCardEndGame(e.Data, true, session.Timeout, specialWinData.hasFour);
                  } else {
                    e.showCardEndGame(e.Data, false, session.Timeout);
                  }
                  if (session.Prizes && session.Prizes.length) {
                    session.Prizes.forEach(function (prize) {
                      if (prize.id === e.Data.AccountId) {
                        e.showPrize(prize.prize);
                      }
                    });
                  }
                }
              });
              if (session.Winner === this.currentPlayerData.AccountId) {
                var _this$currentPlayerDa2;
                this.showWinPopUp(specialWinData.hasFour, (_this$currentPlayerDa2 = this.currentPlayerData.Hand) == null ? void 0 : _this$currentPlayerDa2.HandCards, specialWinData.card);
                if (this.Effect) {
                  this.Effect.node.active = true;
                  this.Effect.resetSystem();
                  this.scheduleOnce(function () {
                    _this5.Effect.node.active = false;
                    if (_this5.isQuitting) {
                      App.instance.gotoLobby();
                      Utils.setStorageValue("last_open_game_id", "");
                    }
                  }, 6);
                }
              }
              this.isPlaying = false;
            } else if (session.Phrase === 3) {
              if (this.Detail) {
                this.Detail.active = false;
              }
              this.PlayerList.forEach(function (e) {
                if (e.Data) {
                  e.stopTimeMiming();
                  if (e.Data.AccountId === session.Role) {
                    e.showTimming(session.Timeout);
                  }
                }
              });
              if (this.HUD) {
                if (session.Role === this.currentPlayerData.AccountId) {
                  this.HUD.activeGroupButton(true);
                } else {
                  this.HUD.activeGroupButton(false);
                }
              }
            }
          }
        };
        _proto.getCardInfo = function getCardInfo(id) {
          if (id < 0 || id > 51) {
            return this.getCardByName("Flip");
          }
          var cardNumber = id % 13;
          var cardSuite = id - cardNumber;
          var cardNumberTextMap = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
          var cardSuiteTextMap = {
            0: "club",
            13: "heart",
            26: "spade",
            39: "diamond"
          };
          var text = cardSuiteTextMap[cardSuite] + "-" + cardNumberTextMap[cardNumber];
          return this.getCardByName(text);
        };
        _proto.hasFourOfAKind = function hasFourOfAKind(cards) {
          var countMap = {};
          for (var _iterator2 = _createForOfIteratorHelperLoose(cards), _step2; !(_step2 = _iterator2()).done;) {
            var id = _step2.value;
            if (id < 0 || id > 51) continue;
            var cardNumber = id % 13;
            if (!countMap[cardNumber]) {
              countMap[cardNumber] = 1;
            } else {
              countMap[cardNumber]++;
            }
            if (countMap[cardNumber] >= 4) {
              return {
                card: cardNumber,
                hasFour: true
              };
            }
          }
          return {
            card: null,
            hasFour: false
          };
        };
        _proto.showWinPopUp = function showWinPopUp(isSpecialWin, cards, value) {
          if (cards === void 0) {
            cards = [];
          }
          if (this.HUD) {
            this.HUD.showWinPopUp(isSpecialWin, cards, value);
          }
        };
        _proto.faceDownCard = function faceDownCard() {
          this.sendShowCard(true);
        };
        _proto.playCard = function playCard() {
          this.sendShowCard(false);
        };
        _proto.sendShowCard = function sendShowCard(faceDown) {
          var _this6 = this;
          this.countDown = 60;
          if (this.Player.CurrentCardSelecting) {
            App.instance.showLoading(true);
            CardGameSignalRClient.getInstance().send("ShowCard", [this.Player.CurrentCardSelecting, faceDown], function (data) {
              App.instance.showLoading(false);
              if (data.r) {
                _this6.Player.stopTimeMiming();
              } else {
                App.instance.showToast(App.instance.getTextLang("ca-27000"));
              }
            });
          } else {
            App.instance.showToast(App.instance.getTextLang("ca-27000"));
          }
        };
        _proto.update = function update(dt) {
          if (this._flagCheckOnline) {
            this.countDown -= dt;
            if (this.countDown <= 0) {
              this._flagCheckOnline = false;
              App.instance.ShowAlertDialog(App.instance.getTextLang("ca247"));
              App.instance.gotoLobby();
              Utils.setStorageValue("last_open_game_id", "");
              this.sendExit();
            }
          }
        };
        return CatteController;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HUD", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PlayerList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dealer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "WinPopUp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Detail", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "NoityPlayerCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Effect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CattePlayerController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './CardItemController.ts', './Language.LanguageManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, Sprite, SpriteFrame, Color, Vec3, assetManager, UIOpacity, tween, Component, App, CardItemController, LanguageManager;
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
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Color = module.Color;
      Vec3 = module.Vec3;
      assetManager = module.assetManager;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }, function (module) {
      CardItemController = module.CardItemController;
    }, function (module) {
      LanguageManager = module.LanguageManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "0dcffMDHu9MlqajFNmxgBkW", "CattePlayerController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CattePlayerController = exports('CattePlayerController', (_dec = ccclass("CattePlayerController"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Sprite), _dec14 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CattePlayerController, _Component);
        function CattePlayerController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.Data = void 0;
          _initializerDefineProperty(_this, "NonePlayer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "PlayerNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CardLayoutNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "MyCard", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Name", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Amount", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteChat", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatMsg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CardCount", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLabel", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Price", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Cover", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CoverSprites", _descriptor13, _assertThisInitialized(_this));
          _this.isCounting = void 0;
          _this.timeCount = void 0;
          _this.timeDuration = void 0;
          _this.currentCardSelect = void 0;
          _this.isLoseTung = false;
          return _this;
        }
        var _proto = CattePlayerController.prototype;
        _proto.setInfo = function setInfo(data, isMe) {
          var _this2 = this;
          if (data) {
            var _data$Hand, _data$Hand2;
            this.Data = data;
            var name = data.Nickname;
            var price = data.Balance;
            var cards = ((_data$Hand = data.Hand) == null ? void 0 : _data$Hand.HandCards) || [];
            var shown = ((_data$Hand2 = data.Hand) == null ? void 0 : _data$Hand2.ShownCards) || [];
            if (this.Name && name && name.length) this.Name.string = name;
            if (this.Amount) this.Amount.string = price.toLocaleString("vi");
            if (this.PlayerNode) {
              this.PlayerNode.getComponent(Sprite).spriteFrame = App.instance.sprFrameAvatars[data.AvatarId];
              this.PlayerNode.active = true;
            }
            this.PlayerNode.getComponent(Sprite).color = cards && cards.length ? new Color(255, 255, 255) : new Color(100, 100, 100);
            if (this.NonePlayer) this.NonePlayer.active = false;
            if (this.winLabel) this.winLabel.node.active = false;
            if (data.Hand) {
              if (this.CardLayoutNode) {
                this.CardLayoutNode.active = true;
                this.CardLayoutNode.scale = new Vec3(0.8, 0.8, 0.8);
              }
              var cardCount = 6;
              cardCount = cards && cards.length ? cards.length : 6;
              if (this.CardCount) this.CardCount.string = "" + cardCount;
              if (shown && shown.length) {
                for (var i = 0; i < 6; i++) {
                  var cardNode = this.CardLayoutNode.children[i];
                  if (shown[i]) {
                    cardNode.active = true;
                    var comp = cardNode.getComponent(CardItemController);
                    if (comp) {
                      comp.show(shown[i].OrdinalValue, shown[i].Status == 2);
                    }
                  } else {
                    cardNode.active = false;
                  }
                }
              }
            } else {
              if (this.CardLayoutNode) this.CardLayoutNode.active = false;
            }
            if (isMe) {
              if (this.MyCard) {
                if (this.CardCount.node.parent) this.CardCount.node.parent.active = false;
                this.MyCard.active = true;
              }
              if (cards && cards.length) {
                for (var _i = 0; _i < 6; _i++) {
                  var _cardNode = this.MyCard.children[_i];
                  if (cards[_i]) {
                    _cardNode.active = true;
                    _cardNode.setPosition(new Vec3(_cardNode.position.x, 0, _cardNode.position.z));
                    var _comp = _cardNode.getComponent(CardItemController);
                    if (_comp) {
                      _comp.show(cards[_i], false, function (id) {
                        _this2.setCurrentSelecting(id);
                      });
                    }
                  } else {
                    _cardNode.active = false;
                  }
                }
              }
            } else {
              if (this.MyCard) this.MyCard.active = false;
              if (this.CardCount.node.parent && cards.length) this.CardCount.node.parent.active = true;else this.CardCount.node.parent.active = false;
            }
          }
        };
        _proto.showCardEndGame = function showCardEndGame(data, win, timeReset, isSpecial) {
          var _data$Hand3;
          if (isSpecial === void 0) {
            isSpecial = false;
          }
          var shown = ((_data$Hand3 = data.Hand) == null ? void 0 : _data$Hand3.ShownCards) || [];
          if (shown && shown.length) {
            var foldCount = 0;
            for (var i = 0; i < 6; i++) {
              var cardNode = this.CardLayoutNode.children[i];
              if (shown[i]) {
                cardNode.active = true;
                var comp = cardNode.getComponent(CardItemController);
                if (comp) {
                  comp.show(shown[i].OrdinalValue, shown[i].Status == 2);
                }
                if (shown[i].OrdinalValue === -1) {
                  foldCount++;
                  this.isLoseTung = foldCount >= 4;
                }
              } else {
                cardNode.active = false;
              }
            }
          }
          this.showWin(win, timeReset, isSpecial);
        };
        _proto.setCurrentSelecting = function setCurrentSelecting(id) {
          if (this.MyCard) {
            for (var i = 0; i < 6; i++) {
              var cardNode = this.MyCard.children[i];
              var comp = cardNode.getComponent(CardItemController);
              if (comp) {
                cardNode.setPosition(comp.CardID === id ? new Vec3(cardNode.position.x, 15, cardNode.position.z) : new Vec3(cardNode.position.x, 0, cardNode.position.z));
              }
            }
          }
          this.currentCardSelect = id;
        };
        _proto.setEmpty = function setEmpty() {
          this.Data = null;
          if (this.PlayerNode) this.PlayerNode.active = false;
          if (this.NonePlayer) this.NonePlayer.active = true;
          if (this.winLabel) this.winLabel.node.active = false;
        };
        _proto.showWin = function showWin(win, Timeout, isSpecial) {
          var _this3 = this;
          var bundle = assetManager.getBundle("Catte");
          var languageCode = LanguageManager.instance.locale;
          var pathLose = this.isLoseTung ? "thua-tung-" + languageCode + ".png/spriteFrame" : "thua-" + languageCode + ".png/spriteFrame";
          var pathWin = isSpecial ? "catte-toitrang-" + languageCode + ".png/spriteFrame" : "thang-" + languageCode + ".png/spriteFrame";
          bundle.load("res/textures/" + (win ? pathWin : pathLose), SpriteFrame, function (err, spr) {
            if (err) {
              console.error("Lỗi khi tải ảnh:", err);
              return;
            }
            if (win) {
              var cover = _this3.node.getChildByName("Win");
              if (cover) cover.active = true;
            }
            if (_this3.winLabel) _this3.winLabel.node.active = true;
            if (_this3.winLabel) _this3.winLabel.node.scale = isSpecial ? new Vec3(0.5, 0.5, 0.5) : Vec3.ONE;
            if (_this3.winLabel) _this3.winLabel.spriteFrame = spr;
            _this3.scheduleOnce(function () {
              _this3.reset();
            }, Timeout != null ? Timeout : 4);
          });
        };
        _proto.reset = function reset() {
          this.currentCardSelect = 0;
          this.isLoseTung = false;
          if (this.CardCount) this.CardCount.string = "6";
          this.CardCount.node.parent.active = false;
          if (this.CardLayoutNode) {
            this.CardLayoutNode.active = false;
            this.CardLayoutNode.children.forEach(function (e) {
              var comp = e.getComponent(Sprite);
              if (comp) {
                comp.spriteFrame = null;
              }
            });
          }
          if (this.MyCard) {
            this.MyCard.active = false;
            this.MyCard.children.forEach(function (e) {
              var comp = e.getComponent(Sprite);
              if (comp) {
                comp.spriteFrame = null;
              }
            });
          }
          if (this.winLabel) this.winLabel.node.active = false;
          if (this.Price) {
            this.Price.node.scale = Vec3.ZERO;
          }
          var cover = this.node.getChildByName("Win");
          if (cover) cover.active = false;
        };
        _proto.displayEmotion = function displayEmotion(id) {
          var node = new Node();
          var sprite = node.addComponent(Sprite);
          var uo = node.addComponent(UIOpacity);
          sprite.spriteFrame = App.instance.listEmotionSpr[id] || App.instance.listEmotionSpr[0];
          node.position = new Vec3(0, -15, 0);
          node.active = true;
          this.node.addChild(node);
          tween(uo).delay(0.5).to(1.5, {
            opacity: 0
          }, {
            easing: "smooth"
          }).start();
          tween(node).delay(0.5).to(1.5, {
            position: new Vec3(0, 60, 0)
          }, {
            easing: "sineOut"
          }).call(function () {
            return node.destroy();
          }).start();
        };
        _proto.showChatMsg = function showChatMsg(content) {
          var _this4 = this;
          if (content.indexOf("E__") === 0) {
            var id = parseInt(content.replace("E__", ""));
            this.displayEmotion(id);
            this.spriteChat.node.active = true;
            this.scheduleOnce(function () {
              _this4.spriteChat.node.active = false;
            }, 2);
            return;
          }
          this.chatMsg.string = content;
          this.chatMsg.node.parent.active = true;
          this.scheduleOnce(function () {
            _this4.chatMsg.node.parent.active = false;
            _this4.chatMsg.string = "";
          }, 5);
        };
        _proto.showPrize = function showPrize(price) {
          var str = price > 0 ? "+" + price : "" + price;
          if (this.Price) {
            this.Price.string = str;
            this.Price.node.scale;
            tween(this.Price.node).to(0.25, {
              scale: Vec3.ONE
            }).start();
          }
        };
        _proto.showTimming = function showTimming(time) {
          this.timeCount = time;
          this.timeDuration = time;
          this.isCounting = true;
          if (this.Cover) {
            this.Cover.spriteFrame = this.CoverSprites[0];
          }
        };
        _proto.stopTimeMiming = function stopTimeMiming() {
          this.isCounting = false;
          if (this.Cover) {
            this.Cover.spriteFrame = null;
          }
        };
        _proto.update = function update(dt) {
          if (this.isCounting) {
            this.timeDuration -= dt;
            this.Cover.fillRange = this.timeDuration / this.timeCount;
            if (this.timeDuration < 6 && this.timeDuration > 3) {
              this.Cover.spriteFrame = this.CoverSprites[1];
            } else if (this.timeDuration < 3) {
              this.Cover.spriteFrame = this.CoverSprites[2];
            }
            if (this.timeDuration < 0) {
              this.isCounting = false;
            }
          }
        };
        _createClass(CattePlayerController, [{
          key: "CurrentCardSelecting",
          get: function get() {
            return this.currentCardSelect;
          }
        }]);
        return CattePlayerController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NonePlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PlayerNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CardLayoutNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "MyCard", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Name", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Amount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spriteChat", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chatMsg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CardCount", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Price", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Cover", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "CoverSprites", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Catte', 'chunks:///_virtual/Catte'); 
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