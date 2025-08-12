System.register("chunks:///_virtual/Roulette", ['./Roulette.Hover.ts', './Roulette.Play.ts', './Roulette.PopupJackpot.ts', './Roulette.Spin.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Roulette.Hover.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Lobby.ts', './Roulette.Play.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, TextAsset, Node, game, sys, Label, UITransform, Vec3, Component, CasinoLobby, RoulettePlay, Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      TextAsset = module.TextAsset;
      Node = module.Node;
      game = module.game;
      sys = module.sys;
      Label = module.Label;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CasinoLobby = module.default;
    }, function (module) {
      RoulettePlay = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "936b5BH9FZHLpj1ESempiTr", "Roulette.Hover", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RouletteHover = exports('default', (_dec = menu("Roulette/Hover"), _dec2 = property(TextAsset), _dec3 = property(Node), _dec4 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteHover, _Component);
        function RouletteHover() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "json", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betPositions", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoNode", _descriptor3, _assertThisInitialized(_this));
          _this.texts = [];
          return _this;
        }
        var _proto = RouletteHover.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          var isVip = CasinoLobby.instance.isTableVip;
          this.texts = JSON.parse(this.json.text);
          this.betPositions.children.forEach(function (node) {
            var gateId = parseInt(node.name);
            if (isNaN(gateId)) return;
            var item = _this2.texts.find(function (item) {
              return item.id === gateId;
            });
            var hoverChild = isVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
            node.on(Node.EventType.MOUSE_ENTER, function () {
              game.canvas.style.cursor = "pointer";
              if (hoverChild) hoverChild.active = true;
              item.values.forEach(function (val) {
                val += 13;
                var node = _this2.betPositions.getChildByName(val.toString());
                if (node) {
                  var hover = isVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
                  if (hover) hover.active = true;
                }
              });
              var me_bet = RoulettePlay.instance.betAmountLogs.find(function (bet) {
                return bet.gate === gateId;
              });
              var me_bet_amount = me_bet ? me_bet.amount : 0;
              var total_bet = RoulettePlay.instance.allBetAmountLogs.find(function (bet) {
                return bet.gate === gateId;
              });
              var total_bet_amount = total_bet ? total_bet.amount : 0;
              var lang = sys.localStorage.getItem("langCode") || "vi";
              _this2.infoNode.getChildByName("description").getComponent(Label).string = lang === "vi" ? item.description : item["description_" + lang] || item.description;
              _this2.infoNode.getChildByName("fund_rate").getComponent(Label).string = "1:" + item.fund_rate;
              _this2.infoNode.getChildByName("max_factor").getComponent(Label).string = Utils.formatNumber(item.max_factor * RoulettePlay.instance.minBet);
              _this2.infoNode.getChildByName("me_bet").getComponent(Label).string = Utils.formatMoney(me_bet_amount, true);
              _this2.infoNode.getChildByName("total_bet").getComponent(Label).string = Utils.formatMoney(total_bet_amount, true);
              var worldPos = node.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
              var localPos = _this2.infoNode.parent.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
              _this2.infoNode.setPosition(localPos.x + 180, localPos.y - 120);
              _this2.infoNode.active = true;
            });
            node.on(Node.EventType.MOUSE_LEAVE, function () {
              if (hoverChild) hoverChild.active = false;
              game.canvas.style.cursor = "default";
              _this2.infoNode.active = false;
              item.values.forEach(function (val) {
                val += 13;
                var node = _this2.betPositions.getChildByName(val.toString());
                if (node) {
                  var hover = isVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
                  if (hover) hover.active = false;
                }
              });
            });
          });
        };
        return RouletteHover;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "json", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betPositions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "infoNode", [_dec4], {
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

System.register("chunks:///_virtual/Roulette.Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Player.ts', './App.ts', './RouletteSignalRClient.ts', './Casino.Lobby.ts', './Config.ts', './BroadcastListener.ts', './Utils.ts', './BundleControl.ts', './Roulette.Spin.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, Prefab, EditBox, sys, Tween, Color, tween, Animation, UIOpacity, v3, instantiate, UITransform, Vec3, Component, CasinoPlayer, App, RouletteSignalRClient, CasinoLobby, Configs, BroadcastReceiver, Utils, BundleControl, RouletteSpin;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      Prefab = module.Prefab;
      EditBox = module.EditBox;
      sys = module.sys;
      Tween = module.Tween;
      Color = module.Color;
      tween = module.tween;
      Animation = module.Animation;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CasinoPlayer = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      RouletteSignalRClient = module.default;
    }, function (module) {
      CasinoLobby = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BundleControl = module.default;
    }, function (module) {
      RouletteSpin = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _class3;
      cclegacy._RF.push({}, "3821dGRxXJL6bmPV0AtmlB0", "Roulette.Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PHASE = /*#__PURE__*/function (PHASE) {
        PHASE[PHASE["NONE"] = 0] = "NONE";
        PHASE[PHASE["BETTING"] = 1] = "BETTING";
        PHASE[PHASE["RESULT"] = 2] = "RESULT";
        return PHASE;
      }(PHASE || {});
      var RoulettePlay = exports('default', (_dec = menu("Roulette/Play"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property([CasinoPlayer]), _dec7 = property(CasinoPlayer), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Prefab), _dec23 = property(Prefab), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property([SpriteFrame]), _dec30 = property(EditBox), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Label), _dec35 = property(Label), _dec36 = property(Label), _dec37 = property(Label), _dec38 = property(Node), _dec39 = property(Label), _dec40 = property(Node), _dec41 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoulettePlay, _Component);
        function RoulettePlay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // JOIN ROOM
          _initializerDefineProperty(_this, "roomDetail", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listTableSpr", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableSpr", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblToast", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "players", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mePlayer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipNodes", _descriptor7, _assertThisInitialized(_this));
          _this.amounts = [];
          _this.amounts_1 = [1, 5, 10, 50, 100];
          _this.amounts_2 = [1, 2, 10, 20, 100];
          _this.minBet = 0;
          _this.sessionId = 0;
          _this.roomId = void 0;
          _this.roomValue = void 0;
          _this.currency = void 0;
          // BET
          _initializerDefineProperty(_this, "chipContainer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betPositions", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countdownSecond", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSprite", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteGreen", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteYellow", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteRed", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableClearBet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableRebet", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableBetX2", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableFinishBet", _descriptor18, _assertThisInitialized(_this));
          _this.amountSelected = 0;
          _this.betLogs = [];
          _this.flagLog = -1;
          // POPUP
          _initializerDefineProperty(_this, "boxChat", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boxSoiCau", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupRank", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupJackpot", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor23, _assertThisInitialized(_this));
          // CAU
          _initializerDefineProperty(_this, "listCauMini", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauMini", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauNumber", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauNumber", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauNumberSpr", _descriptor28, _assertThisInitialized(_this));
          // SEND MESSAGE
          _initializerDefineProperty(_this, "editBoxChat", _descriptor29, _assertThisInitialized(_this));
          // SHOW RESULT
          _initializerDefineProperty(_this, "spinNode", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealerNode", _descriptor31, _assertThisInitialized(_this));
          // BOX SETTING
          _initializerDefineProperty(_this, "boxSettingContainer", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTotalBet", _descriptor33, _assertThisInitialized(_this));
          _this.totalBet = 0;
          // JACKPOT
          _initializerDefineProperty(_this, "lblJackpotFund", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotRate", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotValue", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotNode", _descriptor37, _assertThisInitialized(_this));
          //DEALER BOX
          _initializerDefineProperty(_this, "labelDealerNotify", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guideBG", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guide", _descriptor40, _assertThisInitialized(_this));
          _this.winGates = [];
          _this.betAmountLogs = [];
          _this.allBetAmountLogs = [];
          _this.chatInGame = null;
          return _this;
        }
        var _proto = RoulettePlay.prototype;
        _proto.init = function init(roomValue, currency) {
          this.roomValue = roomValue;
          this.currency = currency;
        };
        _proto.start = function start() {
          var _this2 = this;
          RoulettePlay.instance = this;
          App.instance.showLoading(true);
          RouletteSignalRClient.getInstance().send('EnterRoom', [this.roomValue, this.currency], function (data) {
            App.instance.showLoading(false);
            if (data.c < 0) {
              App.instance.alertDialog.showMsg(RouletteSignalRClient.getErrMsg(data.c));
              _this2.node.destroy();
              return;
            }
            _this2.joinRoom(data.r);
            if (sys.localStorage.getItem("CA_RT_first_time") === null) {
              sys.localStorage.setItem("CA_RT_first_time", "1");
              _this2.showGuide();
            }
          });
          var isVip = CasinoLobby.instance.isTableVip;
          this.betPositions.children.forEach(function (child) {
            var bg = child.getChildByName('bg');
            var bgNormal = child.getChildByName('bgNormal');
            if (bg) {
              bg.active = isVip;
            }
            if (bgNormal) {
              bgNormal.active = !isVip;
            }
          });
          this.flagLog = -1;
        };
        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this.chipNodes.children.forEach(function (button, index) {
            var chip = button.getChildByName("chip");
            var text = button.getChildByName("text");
            chip.on(Node.EventType.TOUCH_END, function () {
              var isSelected = chip["_isSelected"];
              if (isSelected) {
                Tween.stopAllByTarget(chip);
                chip.y = 0;
                text.getComponent(Label).color = Color.WHITE;
                chip["_isSelected"] = false;
                return;
              }
              _this3.chipNodes.children.forEach(function (otherButton) {
                var otherChip = otherButton.getChildByName("chip");
                var otherText = otherButton.getChildByName("text");
                Tween.stopAllByTarget(otherChip);
                otherChip.y = 0;
                otherText.getComponent(Label).color = Color.WHITE;
                otherChip["_isSelected"] = false;
              });
              text.getComponent(Label).color = new Color(252, 255, 0);
              chip["_isSelected"] = true;
              _this3.amountSelected = _this3.amounts[index] * _this3.minBet;
              tween(chip).repeatForever(tween().to(0.3, {
                y: 15
              }).to(0.3, {
                y: 0
              })).start();
            });
          });
          this.betPositions.children.forEach(function (node) {
            var position = parseInt(node.name);
            if (isNaN(position)) return;
            node.on(Node.EventType.TOUCH_END, function () {
              if (_this3.amountSelected == 0) {
                return;
              }
              _this3.actBet(_this3.amountSelected, position);
            });
          });
          RouletteSignalRClient.getInstance().receive('roomData', function (data) {
            if (data.c < 0) {
              _this3.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            _this3.sessionId = data.r.SessionId;
            _this3.roomDetail.getChildByName('RoomSession').getComponent(Label).string = App.instance.getTextLang('txt_session') + (": #" + _this3.sessionId);
            _this3.handleSession(data.r.Session);
            data.r.Players.forEach(function (player) {
              var playerObj = _this3.getAllPlayersById(player.AccountId);
              if (playerObj) {
                _this3.scheduleOnce(function () {
                  playerObj.setCoin(player.Balance);
                }, data.r.Session.Phrase == PHASE.RESULT ? 12 : 0);
              }
            });
          });
          RouletteSignalRClient.getInstance().receive('joinRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            if (data.r.AccountId != Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              _this3.randomFreePlayer().set(data.r);
            }
          });
          RouletteSignalRClient.getInstance().receiveArray('recieveMessage', function (accountId, _nickname, content) {
            var playerRM = _this3.getAllPlayersById(accountId);
            playerRM.showChatMsg(content);
          });
          RouletteSignalRClient.getInstance().receive('leaveRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            for (var i = 0; i < data.r.length; i++) {
              var item = data.r[i];
              if (item.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                if (item.reason < 0) {
                  App.instance.alertDialog.showMsg(App.instance.getTextLang("ca" + item.reason));
                }
                RouletteSignalRClient.getInstance().dontReceive();
                BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
                _this3.node.destroy();
              } else {
                _this3.getPlayerById(item.id).leave();
              }
            }
          });
          RouletteSignalRClient.getInstance().receive('registerLeavingRoom', function (data) {
            var playerRLR = _this3.getAllPlayersById(data.r.id);
            if (data.r.status) {
              playerRLR.showRegisterQuit();
            } else {
              playerRLR.hideRegisterQuit();
            }
          });
          RouletteSignalRClient.getInstance().receive('rejectBetting', function (data) {
            var rejectedPlayers = data.map(function (id) {
              return _this3.getPlayerById(id).lblNickname.string;
            }).join(", ");
            _this3.showToast("Reject betting from " + rejectedPlayers);
          });
          RouletteSignalRClient.getInstance().receive('clearBetting', function (data) {
            var playerCBId = data.r.id;
            var playerCB = _this3.getPlayerById(playerCBId);
            _this3.chipContainer.children.filter(function (child) {
              return child.name.includes(playerCBId);
            }).forEach(function (chip) {
              _this3.moveChipToPlayer(chip, _this3.mePlayer);
            });
            playerCB.setCoin(data.r.balance);
          });
          RouletteSignalRClient.getInstance().receive('confirmBetting', function (data) {
            var playerCB = _this3.getAllPlayersById(data.r.id);
            playerCB.showReady();
          });
          RouletteSignalRClient.getInstance().receive('playerOtherDevice', function (data) {
            _this3.showToast(RouletteSignalRClient.getErrMsg(data));
          });
          RouletteSignalRClient.getInstance().receive('connectionChanged', function (data) {
            var playerCC = _this3.getPlayerById(data.r.id);
            _this3.showToast(playerCC.lblNickname.string + " " + (data.status ? "connected" : "disconnected"));
            if (data.status) {
              playerCC.leave();
            }
          });
          RouletteSignalRClient.getInstance().receive('playerBet', function (data) {
            if (data.c < 0) {
              _this3.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            var player = _this3.getPlayerById(data.r.id);
            player.setCoin(data.r.balance);
            _this3.placeBet(player, data.r.amount, data.r.gate);
          });
        };
        _proto.getChipByAmount = function getChipByAmount(amount) {
          var _this4 = this;
          return this.chipNodes.children.find(function (_chip, index) {
            return _this4.amounts[index] === amount / _this4.minBet;
          }).getChildByName("chip");
        };
        _proto.joinRoom = function joinRoom(data) {
          var _this5 = this;
          this.roomId = data.Id;
          this.sessionId = data.SessionId;
          this.minBet = data.Value;
          this.roomDetail.getChildByName('RoomTable').getComponent(Label).string = (data.Currency == 0 ? App.instance.getTextLang('tb113') : App.instance.getTextLang('tb112')) + (": " + data.Id);
          this.roomDetail.getChildByName('RoomValue').getComponent(Label).string = App.instance.getTextLang('iap38') + ': ' + Utils.formatMoney(data.Value) + ' ' + (data.Currency == 0 ? App.instance.getTextLang('txt_coin') : 'Tipzo');
          this.roomDetail.getChildByName('RoomSession').getComponent(Label).string = App.instance.getTextLang('txt_session') + (": #" + data.SessionId);
          this.tableSpr.spriteFrame = this.listTableSpr[data.Currency];
          if ([500, 5000, 50000].includes(this.minBet)) {
            this.amounts = this.amounts_2;
          } else {
            this.amounts = this.amounts_1;
          }
          this.chipNodes.children.forEach(function (button, index) {
            var text = button.getChildByName("text");
            text.getComponent(Label).string = Utils.formatMoney(_this5.amounts[index] * _this5.minBet, true);
            if (index == 0) {
              button.getChildByName("chip").emit(Node.EventType.TOUCH_END);
            }
          });
          var players = data.Players;
          if (players && players.length > 0) {
            for (var i = 0; i < players.length; i++) {
              if (players[i].AccountId != Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                this.randomFreePlayer().set(players[i]);
              } else {
                this.mePlayer.set(players[i]);
              }
            }
          }
          this.updateStatistic();
          this.checkJackpot();
          if (data.Session) {
            this.handleSession(data.Session);
          }
        };
        _proto.handleSession = function handleSession(session) {
          var _this6 = this;
          this.unscheduleAllCallbacks();
          this.labelDealerNotify.string = 'ROULETTE';
          var dealerNormal = this.dealerNode.getChildByName('NORMAL');
          var dealerBET = this.dealerNode.getChildByName('BET');
          dealerBET.active = false;
          dealerNormal.active = false;
          if (session.Phrase == PHASE.NONE) {
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            return;
          }
          if (session.Timeout) {
            this.updateTimeout(session.Timeout);
          }
          if (session.Phrase == PHASE.BETTING) {
            this.winGates = [];
            this.flagLog++;
            this.betLogs = this.betLogs.filter(function (log) {
              return log.flag == _this6.flagLog - 1;
            });
            this.betAmountLogs = [];
            this.allBetAmountLogs = [];
            var currency = this.currency == 0 ? App.instance.getTextLang('txt_coin') : 'Tipzo';
            var messages = [App.instance.getTextLang('ca157'), App.instance.getTextLang('ca150') + (" " + Utils.formatNumber(this.minBet) + " " + currency + " ") + App.instance.getTextLang('ca151'), App.instance.getTextLang('ca165')];
            var indexMsg = 0;
            this.schedule(function () {
              var parentNode = _this6.labelDealerNotify.node.parent;
              var opacityComp = parentNode.getComponent(UIOpacity) || parentNode.addComponent(UIOpacity);
              tween(opacityComp).to(0.5, {
                opacity: 0
              }).call(function () {
                _this6.labelDealerNotify.string = messages[indexMsg];
                indexMsg++;
                if (indexMsg >= messages.length) indexMsg = 0;
              }).to(0.2, {
                opacity: 255
              }).start();
            }, 2.5);
            dealerBET.active = true;
            dealerBET.getComponent(Animation).play();
            this.jackpotNode.active = false;
            this.spinNode.active = false;
            this.chipContainer.removeAllChildren();
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.boxWin.active = false;
              player.isWin = false;
              player.stopJackpot();
              player.hideReady();
              player.hideRegisterQuit();
              player.hideWinAnimation();
            });
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = this.betLogs.length == 0;
            this.nodeDisableBetX2.active = this.betLogs.length == 0;
            this.nodeDisableFinishBet.active = true;
            var isVip = CasinoLobby.instance.isTableVip;
            this.totalBet = 0;
            this.labelTotalBet.string = App.instance.getTextLang('ca164') + (" " + this.totalBet);
            this.betPositions.children.forEach(function (node) {
              var hover = isVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
              if (hover) {
                hover.active = false;
                Tween.stopAllByTarget(hover.getComponent(UIOpacity));
              }
            });
            this.spinNode.getComponent(RouletteSpin).resultNode.active = false;
          }
          if (session.Phrase == PHASE.RESULT) {
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.hideReady();
            });
            this.labelDealerNotify.string = App.instance.getTextLang('me18');
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = true;
            this.nodeDisableBetX2.active = true;
            this.nodeDisableFinishBet.active = true;
            this.spinNode.active = true;
            this.spinNode.getComponent(RouletteSpin).startSpin(session.Result.Value);
            var _isVip = CasinoLobby.instance.isTableVip;
            this.scheduleOnce(function () {
              _this6.winGates = session.Result.WinGates;
              _this6.showResultPrize(session.Prizes);
              if (session.JackpotPrizes) {
                _this6.showResultJackpotPrize(session.JackpotPrizes);
              }
              session.Result.WinGates.forEach(function (gate) {
                var node = _this6.betPositions.getChildByName(gate.toString());
                var hover = _isVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
                if (hover) {
                  hover.active = true;
                  tween(hover.getComponent(UIOpacity)).repeatForever(tween().to(0.5, {
                    opacity: 50
                  }).to(0.5, {
                    opacity: 255
                  })).start();
                }
              });
              _this6.updateStatistic();
              _this6.checkJackpot();
            }, 10);
          }
        };
        _proto.updateTimeout = function updateTimeout(timeout) {
          var _this7 = this;
          var totalTime = timeout;
          var elapsed = 0;
          this.schedule(function () {
            elapsed += 0.05;
            var percent = Math.min(elapsed / totalTime, 1);
            _this7.progressSprite.fillRange = percent;
            _this7.progressSprite.spriteFrame = percent < 0.5 ? _this7.progressSpriteGreen : percent < 0.8 ? _this7.progressSpriteYellow : _this7.progressSpriteRed;
            _this7.progressSprite.node.setScale(v3(-1, 1, 1));
          }, 0.05);
          this.countdownSecond.string = timeout < 10 ? "0" + timeout : timeout + '';
          this.schedule(function () {
            if (timeout < 0) {
              _this7.unscheduleAllCallbacks();
              return;
            }
            _this7.countdownSecond.string = timeout < 10 ? "0" + timeout : timeout + '';
            timeout--;
          }, 1);
        };
        _proto.showResultPrize = function showResultPrize(prizes) {
          var _this8 = this;
          var uniquePlayers = new Map();
          prizes.forEach(function (item) {
            var player = _this8.getAllPlayersById(item.AccountId);
            if (!uniquePlayers.has(player.id)) {
              uniquePlayers.set(player.id, player);
            }
          });
          uniquePlayers.forEach(function (player) {
            player.isWin = true;
            player.boxWin.active = true;
            player.boxWin.getChildByName('win').active = true;
            player.boxWin.getChildByName('lose').active = false;
            player.showWinAnimation();
            _this8.chipContainer.children.filter(function (child) {
              return child.name.includes(player.id);
            }).forEach(function (chip) {
              var gate = parseInt(chip.name.replace(player.id + "__", ""));
              if (_this8.winGates.includes(gate)) {
                _this8.moveChipToPlayer(chip, player);
              } else {
                _this8.moveChipToDealer(chip);
              }
            });
          });
          var playerPrizeIds = prizes.map(function (item) {
            return item.AccountId;
          });
          [this.mePlayer].concat(this.players).filter(function (player) {
            return player.id !== "" && !playerPrizeIds.includes(player.id);
          }).forEach(function (player) {
            var isPlayerBet = false;
            _this8.chipContainer.children.filter(function (child) {
              return child.name.includes(player.id);
            }).forEach(function (chip) {
              isPlayerBet = true;
              _this8.moveChipToDealer(chip);
            });
            _this8.scheduleOnce(function () {
              if (isPlayerBet) {
                player.boxWin.active = true;
                player.boxWin.getChildByName('win').active = false;
                player.boxWin.getChildByName('lose').active = true;
              }
            }, 0.5);
          });
        };
        _proto.randomFreePlayer = function randomFreePlayer() {
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].id == "") {
              return this.players[i];
            }
          }
          return null;
        };
        _proto.getPlayerById = function getPlayerById(id) {
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].id == id) {
              return this.players[i];
            }
          }
          return null;
        };
        _proto.getAllPlayersById = function getAllPlayersById(id) {
          return [this.mePlayer].concat(this.players).find(function (player) {
            return player.id === id;
          });
        };
        _proto.toggleMenu = function toggleMenu() {
          this.boxSettingContainer.active = !this.boxSettingContainer.active;
        };
        _proto.clearBetting = function clearBetting() {
          var _this9 = this;
          if (this.nodeDisableClearBet.active) {
            return;
          }
          RouletteSignalRClient.getInstance().send('ClearBetting', [], function (data) {
            if (data.c < 0) {
              _this9.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            _this9.chipContainer.children.filter(function (child) {
              return child.name.includes(_this9.mePlayer.id);
            }).forEach(function (chip) {
              _this9.moveChipToPlayer(chip, _this9.mePlayer);
            });
            _this9.nodeDisableClearBet.active = true;
            _this9.nodeDisableRebet.active = true;
            _this9.nodeDisableBetX2.active = true;
            _this9.nodeDisableFinishBet.active = true;
            _this9.betLogs = [];
            _this9.mePlayer.setCoin(data.r.balance);
          });
        };
        _proto.finishBetting = function finishBetting() {
          var _this10 = this;
          if (this.nodeDisableFinishBet.active) {
            return;
          }
          RouletteSignalRClient.getInstance().send('FinishBetting', [], function (data) {
            if (data.c < 0) {
              _this10.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            _this10.mePlayer.showReady();
          });
        };
        _proto.x2Betting = function x2Betting() {
          var _this11 = this;
          if (this.nodeDisableBetX2.active) {
            return;
          }
          this.actBetFromBetLogs();
          setTimeout(function () {
            _this11.actBetFromBetLogs();
          }, 500);
        };
        _proto.reLastBet = function reLastBet() {
          if (this.nodeDisableRebet.active) {
            return;
          }
          this.actBetFromBetLogs();
        };
        _proto.actBetFromBetLogs = function actBetFromBetLogs() {
          var _this12 = this;
          this.betLogs.forEach(function (log) {
            if (log.flag == _this12.flagLog - 1) {
              _this12.actBet(log.amount, log.gate);
            }
          });
        };
        _proto.actBet = function actBet(amount, gate) {
          var _this13 = this;
          RouletteSignalRClient.getInstance().send('Bet', [amount, gate], function (data) {
            if (data.c < 0) {
              _this13.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            _this13.nodeDisableClearBet.active = false;
            _this13.nodeDisableRebet.active = true;
            _this13.nodeDisableBetX2.active = true;
            _this13.nodeDisableFinishBet.active = false;
            _this13.placeBet(_this13.mePlayer, data.r.amount, data.r.gate);
            _this13.mePlayer.setCoin(data.r.balance);
            _this13.betLogs.push({
              amount: data.r.amount,
              gate: data.r.gate,
              flag: _this13.flagLog
            });
          });
        };
        _proto.updateStatistic = function updateStatistic() {
          var _this14 = this;
          this.listCauMini.removeAllChildren();
          RouletteSignalRClient.getInstance().send('GetGameHistory', [this.roomId], function (data) {
            if (data.c < 0) {
              _this14.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            _this14.drawCau(data.r);
          });
        };
        _proto.sendMessage = function sendMessage() {
          this.hiddenBoxChat();
          var content = this.editBoxChat.string;
          if (content == "") {
            return;
          }
          RouletteSignalRClient.getInstance().send('SendMessage', [content], function (_data) {});
        };
        _proto.sendEmotion = function sendEmotion(event, data) {
          this.hiddenBoxChat();
          RouletteSignalRClient.getInstance().send('SendMessage', [data], function (_data) {});
        };
        _proto.closePlay = function closePlay() {
          var _this15 = this;
          RouletteSignalRClient.getInstance().send('ExitRoom', [], function (data) {
            if (data.c == 0) {
              RouletteSignalRClient.getInstance().dontReceive();
              BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
              _this15.node.destroy();
              return;
            }
            if (data.r.status) {
              _this15.mePlayer.showRegisterQuit();
              _this15.showToast(App.instance.getTextLang('me8'));
            } else {
              _this15.mePlayer.hideRegisterQuit();
              _this15.showToast(App.instance.getTextLang('me9'));
            }
          });
        };
        _proto.placeBet = function placeBet(player, amount, position) {
          var _this16 = this;
          var chip = instantiate(this.getChipByAmount(amount));
          chip.setScale(0.5, 0.5, 0.5);
          this.chipContainer.addChild(chip);
          var startPos2D = player.avatarNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          var endPos2D = this.betPositions.getChildByName(position.toString()).getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          var startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(startPos2D.x, startPos2D.y, 0));
          var endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(endPos2D.x, endPos2D.y, 0));
          var tolerance = 10;
          var existingChips = this.chipContainer.children.filter(function (child) {
            return Vec3.distance(child.getPosition(), endPos) <= tolerance;
          });
          if (existingChips.length > 0) {
            var offsetX = 10 * (existingChips.length % 5);
            var offsetY = -10 * Math.floor(existingChips.length / 5);
            endPos.x += offsetX;
            endPos.y += offsetY;
          }
          chip.position = startPos;
          chip.name = player.id + "__" + position;
          tween(chip).to(0.5, {
            position: endPos
          }, {
            easing: "sineOut"
          }).call(function () {
            _this16.totalBet += amount;
            _this16.labelTotalBet.string = App.instance.getTextLang('ca164') + ' ' + Utils.formatNumber(_this16.totalBet);
            if (player.id === _this16.mePlayer.id) {
              var amountGate = _this16.betAmountLogs.find(function (item) {
                return item.gate === position;
              });
              if (amountGate) {
                amountGate.amount += amount;
              } else {
                _this16.betAmountLogs.push({
                  gate: position,
                  amount: amount
                });
              }
            }
            var allAmountGate = _this16.allBetAmountLogs.find(function (item) {
              return item.gate === position;
            });
            if (allAmountGate) {
              allAmountGate.amount += amount;
            } else {
              _this16.allBetAmountLogs.push({
                gate: position,
                amount: amount
              });
            }
          }).start();
        };
        _proto.showToast = function showToast(msg) {
          var _this17 = this;
          this.lblToast.string = msg;
          this.lblToast.node.active = true;
          setTimeout(function () {
            if (_this17.lblToast.node) {
              _this17.lblToast.node.active = false;
            }
          }, 2000);
        };
        _proto.showBoxSoiCau = function showBoxSoiCau() {
          this.boxSoiCau.active = true;
        };
        _proto.hiddenBoxSoiCau = function hiddenBoxSoiCau() {
          this.boxSoiCau.active = false;
        };
        _proto.showBoxChat = function showBoxChat() {
          var _this18 = this;
          App.instance.inactivityTimer = 0;
          if (this.chatInGame == null) {
            BundleControl.loadPrefabPopup("prefabs/ChatInGame", function (prefab) {
              _this18.chatInGame = instantiate(prefab).getComponent("ChatInGame");
              _this18.node.addChild(_this18.chatInGame.node);
              _this18.chatInGame.show(Configs.InGameIds.Roullete);
            });
          } else {
            this.chatInGame.show(Configs.InGameIds.Roullete);
          }
        };
        _proto.hiddenBoxChat = function hiddenBoxChat() {
          this.boxChat.active = false;
        };
        _proto.actShowPopupRank = function actShowPopupRank() {
          var popupRank = instantiate(this.popupRank);
          this.popupContainer.addChild(popupRank);
          // @ts-ignore
          popupRank.getComponent("Casino.PopupRank").showDetail(this.currency, Configs.InGameIds.Roullete);
        };
        _proto.actShowPopupJackpot = function actShowPopupJackpot() {
          var popupJackpot = instantiate(this.popupJackpot);
          this.popupContainer.addChild(popupJackpot);
          // @ts-ignore
          popupJackpot.getComponent("Roulette.PopupJackpot").show();
        };
        _proto.drawCau = function drawCau(data) {
          var _this19 = this;
          this.listCauMini.removeAllChildren();
          this.listCauNumber.removeAllChildren();
          var parseData = data.slice(-10);
          parseData.forEach(function (item, index) {
            var mini = instantiate(_this19.itemCauMini);
            var number = instantiate(_this19.itemCauNumber);
            var spriteIndex;
            if (item == 0) {
              spriteIndex = 0;
            } else if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(item)) {
              spriteIndex = 1;
            } else {
              spriteIndex = 2;
            }
            var sprite = _this19.listCauNumberSpr[spriteIndex];
            mini.getComponent(Sprite).spriteFrame = sprite;
            number.getComponent(Sprite).spriteFrame = sprite;
            var label = number.getComponentInChildren(Label);
            label.string = item < 10 ? "0" + item : item.toString();
            _this19.listCauMini.addChild(mini);
            _this19.listCauNumber.addChild(number);
            if (index === parseData.length - 1) {
              tween(number).repeatForever(tween().to(0.5, {
                position: v3(0, 10, 0)
              }).to(0.5, {
                position: v3(0, 0, 0)
              })).start();
            }
          });
        };
        _proto.checkJackpot = function checkJackpot() {
          var _this20 = this;
          RouletteSignalRClient.getInstance().send('GetJackpot', [this.currency, this.roomValue], function (data) {
            if (data.c < 0) {
              _this20.showToast(RouletteSignalRClient.getErrMsg(data.c));
              return;
            }
            var jackpot = data.r;
            _this20.lblJackpotFund.string = jackpot.jackpotFund.toLocaleString("vi-VN");
            _this20.lblJackpotRate.string = jackpot.rate / 10 + "%";
            _this20.lblJackpotValue.string = jackpot.jackpotValue.toLocaleString("vi-VN");
          });
        };
        _proto.showResultJackpotPrize = function showResultJackpotPrize(prizes) {
          var _this21 = this;
          this.jackpotNode.active = true;
          prizes.Details.forEach(function (detail) {
            var _find;
            (_find = [_this21.mePlayer].concat(_this21.players).find(function (player) {
              return player.id.includes(detail.AccountID);
            })) == null || _find.activeJackpot();
          });
        };
        _proto.moveChipToPlayer = function moveChipToPlayer(chip, player, moveToDealerFirst) {
          if (moveToDealerFirst === void 0) {
            moveToDealerFirst = false;
          }
          var tw = tween(chip);
          if (moveToDealerFirst) {
            tw = tw.to(0.5, {
              position: this.dealerNode.position
            });
          }
          tw.to(0.5, {
            position: player.node.position
          }).call(function () {
            return chip.destroy();
          }).start();
        };
        _proto.moveChipToDealer = function moveChipToDealer(chip) {
          tween(chip).to(0.5, {
            position: this.dealerNode.position
          }).call(function () {
            return chip.destroy();
          }).start();
        };
        _proto.showGuide = function showGuide() {
          var _this22 = this;
          var table = this.guideBG.children[0];
          table.children.forEach(function (child) {
            if (child.getChildByName("hover") == null || child.getChildByName("hoverNormal") == null) return;
            child.getChildByName("hover").active = _this22.currency == 1;
            child.getChildByName("hoverNormal").active = _this22.currency == 0;
          });
          this.guideBG.active = true;
          this.guide.active = true;
        };
        _proto.hideGuide = function hideGuide() {
          this.guideBG.active = false;
          this.guide.active = false;
        };
        return RoulettePlay;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomDetail", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listTableSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tableSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mePlayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "chipNodes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chipContainer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "betPositions", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "countdownSecond", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "progressSprite", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteGreen", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteYellow", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteRed", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableClearBet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableRebet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableBetX2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableFinishBet", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "boxChat", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "boxSoiCau", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "popupRank", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "popupJackpot", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "listCauMini", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "itemCauMini", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "listCauNumber", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "itemCauNumber", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "listCauNumberSpr", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "editBoxChat", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "spinNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "dealerNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "boxSettingContainer", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "labelTotalBet", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotFund", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotRate", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotValue", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "jackpotNode", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "labelDealerNotify", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "guideBG", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec41], {
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

System.register("chunks:///_virtual/Roulette.PopupJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './RouletteSignalRClient.ts', './Roulette.Play.ts', './App.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, Dialog, RouletteSignalRClient, RoulettePlay, App, Utils;
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
      instantiate = module.instantiate;
      Label = module.Label;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      RouletteSignalRClient = module.default;
    }, function (module) {
      RoulettePlay = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a2302CMiIxBjI5Q8xvZbiKl", "Roulette.PopupJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RoulettePopupJackpot = exports('default', (_dec = menu("Roulette/PopupJackpot"), _dec2 = property(Node), _dec3 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(RoulettePopupJackpot, _Dialog);
        function RoulettePopupJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTemplate", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RoulettePopupJackpot.prototype;
        _proto.show = function show() {
          var _this2 = this;
          this.listItem.removeAllChildren();
          RouletteSignalRClient.getInstance().send('GetJackpotWinner', [RoulettePlay.instance.currency], function (data) {
            if (data.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("ca" + data.c));
              return;
            }
            if (data.r.length == 0) {
              return;
            }
            data.r.forEach(function (item, index) {
              var itemNode = instantiate(_this2.itemTemplate);
              itemNode.getChildByName("bg1").active = index % 2 == 0;
              itemNode.getChildByName("bg2").active = index % 2 != 0;
              var content = itemNode.getChildByName('content');
              content.getChildByName("TIME").getComponent(Label).string = Utils.formatDatetime(item.createdTime, 'dd/MM/yyyy HH:mm:ss');
              content.getChildByName("ACCOUNT").getComponent(Label).string = item.nickname;
              content.getChildByName("BET").getComponent(Label).string = Utils.formatNumber(item.parValue);
              content.getChildByName("PRIZE").getComponent(Label).string = Utils.formatNumber(item.prizeValue);
              _this2.listItem.addChild(itemNode);
            });
          });
          _Dialog.prototype.show.call(this);
        };
        return RoulettePopupJackpot;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec3], {
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

System.register("chunks:///_virtual/Roulette.Spin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, tween, v3, Label, Component;
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
      tween = module.tween;
      v3 = module.v3;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "5f3358/JcxFQrqeXRtMymXa", "Roulette.Spin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RouletteSpin = exports('default', (_dec = ccclass('RouletteSpin'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteSpin, _Component);
        function RouletteSpin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ballPivot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ball", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultNode", _descriptor3, _assertThisInitialized(_this));
          _this.isSpinning = false;
          _this.lastResult = 0;
          _this.spinDuration = 4;
          // seconds
          _this.orbitDuration = 4;
          return _this;
        }
        var _proto = RouletteSpin.prototype;
        // seconds
        _proto.startSpin = function startSpin(result) {
          var _this2 = this;
          if (this.isSpinning) return;
          this.isSpinning = true;
          this.ball.active = false;
          this.resultNode.active = false;
          var totalRotation = 360 * 5 + this.getRandomTargetAngle();
          tween(this.node).by(this.spinDuration, {
            eulerAngles: v3(0, 0, -totalRotation)
          }, {
            easing: 'cubicOut'
          }).call(function () {
            _this2.isSpinning = false;
            _this2.startBallOrbit(result);
          }).start();
        };
        _proto.getRandomTargetAngle = function getRandomTargetAngle() {
          var numberOfSlots = 37;
          var randomSlot = Math.floor(Math.random() * numberOfSlots);
          return 360 / numberOfSlots * randomSlot;
        };
        _proto.getTargetAngle = function getTargetAngle(result, from) {
          var rouletteOrder = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
          var totalSlots = rouletteOrder.length;
          var lastIndex = rouletteOrder.indexOf(from);
          var targetIndex = rouletteOrder.indexOf(result);
          if (lastIndex === -1 || targetIndex === -1) return 0;
          var slotDiff = targetIndex - lastIndex;
          if (slotDiff < 0) slotDiff += totalSlots;
          var anglePerSlot = 360 / totalSlots;
          return anglePerSlot * slotDiff;
        };
        _proto.startBallOrbit = function startBallOrbit(result) {
          var _this3 = this;
          if (!this.ballPivot || !this.ball) return;
          this.ball.active = true;
          var angleToTarget = this.getTargetAngle(result, this.lastResult);
          var fullRotations = 3 * 360;
          var finalRotation = fullRotations + angleToTarget;
          tween(this.ballPivot).by(this.orbitDuration, {
            eulerAngles: v3(0, 0, -finalRotation)
          }, {
            easing: 'cubicOut'
          }).call(function () {
            _this3.lastResult = result;
            _this3.resultNode.active = true;
            var label = _this3.resultNode.getComponentInChildren(Label);
            if (label) {
              label.string = result.toString();
            }
            var jackpotNode = _this3.resultNode.getChildByName('jackpot');
            if (jackpotNode) {
              jackpotNode.active = result === 0;
            }
          }).start();
        };
        return RouletteSpin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ballPivot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultNode", [_dec4], {
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

(function(r) {
  r('virtual:///prerequisite-imports/Roulette', 'chunks:///_virtual/Roulette'); 
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