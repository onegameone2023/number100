System.register("chunks:///_virtual/Sicbo", ['./Sicbo.Hover.ts', './Sicbo.Play.ts', './Sicbo.PopupJackpot.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Sicbo.Hover.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Lobby.ts', './Sicbo.Play.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, TextAsset, Node, game, sys, Label, UITransform, Vec3, Component, CasinoLobby, SicboPlay, Utils;
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
      SicboPlay = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c7459f1RNlD5pfODd1rWNOn", "Sicbo.Hover", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SicboHover = exports('default', (_dec = menu("Sicbo/Hover"), _dec2 = property(TextAsset), _dec3 = property(Node), _dec4 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SicboHover, _Component);
        function SicboHover() {
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
        var _proto = SicboHover.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.texts = JSON.parse(this.json.text);
          this.betPositions.children.forEach(function (node) {
            var gateId = parseInt(node.name);
            if (isNaN(gateId)) return;
            var item = _this2.texts.find(function (item) {
              return item.id === gateId;
            });
            var hoverChild = CasinoLobby.instance.isTableVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
            node.on(Node.EventType.MOUSE_ENTER, function () {
              var _SicboPlay$instance, _SicboPlay$instance2, _SicboPlay$instance3;
              game.canvas.style.cursor = "pointer";
              if (hoverChild) hoverChild.active = true;
              var me_bet = (_SicboPlay$instance = SicboPlay.instance) == null ? void 0 : _SicboPlay$instance.betAmountLogs.find(function (bet) {
                return bet.gate === gateId;
              });
              var me_bet_amount = me_bet ? me_bet.amount : 0;
              var total_bet = (_SicboPlay$instance2 = SicboPlay.instance) == null ? void 0 : _SicboPlay$instance2.allBetAmountLogs.find(function (bet) {
                return bet.gate === gateId;
              });
              var total_bet_amount = total_bet ? total_bet.amount : 0;
              var lang = sys.localStorage.getItem("locale") || "vi";
              _this2.infoNode.getChildByName("description").getComponent(Label).string = lang === "vi" ? item.description : item["description_" + lang] || item.description;
              _this2.infoNode.getChildByName("fund_rate").getComponent(Label).string = "1:" + item.fund_rate;
              _this2.infoNode.getChildByName("max_factor").getComponent(Label).string = Utils.formatNumber(item.max_factor * (((_SicboPlay$instance3 = SicboPlay.instance) == null ? void 0 : _SicboPlay$instance3.minBet) || 0));
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
            });
          });
        };
        return SicboHover;
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

System.register("chunks:///_virtual/Sicbo.Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Player.ts', './App.ts', './SicboSignalRClient.ts', './Casino.Lobby.ts', './Config.ts', './Utils.ts', './BundleControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, Prefab, EditBox, Toggle, Color, sys, Tween, tween, Animation, UIOpacity, instantiate, UITransform, Vec3, Component, CasinoPlayer, App, SicboSignalRClient, CasinoLobby, Configs, Utils, BundleControl;
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
      Toggle = module.Toggle;
      Color = module.Color;
      sys = module.sys;
      Tween = module.Tween;
      tween = module.tween;
      Animation = module.Animation;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CasinoPlayer = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      SicboSignalRClient = module.default;
    }, function (module) {
      CasinoLobby = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BundleControl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _class3;
      cclegacy._RF.push({}, "22072vS6GFISLkp3V0/4J2/", "Sicbo.Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PHASE = /*#__PURE__*/function (PHASE) {
        PHASE[PHASE["NONE"] = 0] = "NONE";
        PHASE[PHASE["BETTING"] = 1] = "BETTING";
        PHASE[PHASE["RESULT"] = 2] = "RESULT";
        return PHASE;
      }(PHASE || {});
      var SicboPlay = exports('default', (_dec = menu("Sicbo/Play"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property([CasinoPlayer]), _dec7 = property(CasinoPlayer), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Prefab), _dec23 = property(Prefab), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property([SpriteFrame]), _dec30 = property(EditBox), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property([SpriteFrame]), _dec36 = property(Toggle), _dec37 = property(Node), _dec38 = property(Label), _dec39 = property(Label), _dec40 = property(Label), _dec41 = property(Label), _dec42 = property(Node), _dec43 = property(Label), _dec44 = property([Label]), _dec45 = property(Color), _dec46 = property(Color), _dec47 = property(Node), _dec48 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SicboPlay, _Component);
        function SicboPlay() {
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
          _initializerDefineProperty(_this, "listCauDetail", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauDetail", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauSpr", _descriptor28, _assertThisInitialized(_this));
          // SEND MESSAGE
          _initializerDefineProperty(_this, "editBoxChat", _descriptor29, _assertThisInitialized(_this));
          // SHOW RESULT
          _initializerDefineProperty(_this, "dealerNode", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultContainer", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aminResult", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultNode", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listSprDice", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "checkboxAutoShow", _descriptor35, _assertThisInitialized(_this));
          // BOX SETTING
          _initializerDefineProperty(_this, "boxSettingContainer", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTotalBet", _descriptor37, _assertThisInitialized(_this));
          _this.totalBet = 0;
          // JACKPOT
          _initializerDefineProperty(_this, "lblJackpotFund", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotRate", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotValue", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotNode", _descriptor41, _assertThisInitialized(_this));
          //DEALER BOX
          _initializerDefineProperty(_this, "labelDealerNotify", _descriptor42, _assertThisInitialized(_this));
          //LABEL BET
          _initializerDefineProperty(_this, "labels", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vipColor", _descriptor44, _assertThisInitialized(_this));
          // #06BFB6
          _initializerDefineProperty(_this, "normalColor", _descriptor45, _assertThisInitialized(_this));
          // #DEB32C
          _initializerDefineProperty(_this, "guideBG", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guide", _descriptor47, _assertThisInitialized(_this));
          _this.winGates = [];
          _this.betAmountLogs = [];
          _this.allBetAmountLogs = [];
          _this.chatInGame = null;
          return _this;
        }
        var _proto = SicboPlay.prototype;
        _proto.init = function init(roomValue, currency) {
          this.roomValue = roomValue;
          this.currency = currency;
        };
        _proto.start = function start() {
          var _this2 = this;
          SicboPlay.instance = this;
          App.instance.showLoading(true);
          SicboSignalRClient.getInstance().send('EnterRoom', [this.roomValue, this.currency], function (data) {
            App.instance.showLoading(false);
            if (data.c < 0) {
              App.instance.alertDialog.showMsg(SicboSignalRClient.getErrMsg(data.c));
              _this2.node.destroy();
              return;
            }
            _this2.joinRoom(data.r);
            if (sys.localStorage.getItem("CA_SB_first_time") === null) {
              sys.localStorage.setItem("CA_SB_first_time", "1");
              _this2.showGuide();
            }
          });
          this.updateLabelColors();
          this.flagLog = -1;
        };
        _proto.updateLabelColors = function updateLabelColors() {
          var _CasinoLobby$instance, _CasinoLobby$instance2;
          var isVip = (_CasinoLobby$instance = (_CasinoLobby$instance2 = CasinoLobby.instance) == null ? void 0 : _CasinoLobby$instance2.isTableVip) != null ? _CasinoLobby$instance : false;
          var targetColor = isVip ? this.vipColor : this.normalColor;
          this.labels.forEach(function (label) {
            if (label) {
              label.color = targetColor;
            }
          });
        };
        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this.chipNodes.children.forEach(function (button, index) {
            var chip = button.getChildByName("chip");
            var text = button.getChildByName("text");
            chip.on(Node.EventType.TOUCH_END, function () {
              var isSelected = chip["_isSelected"];
              if (isSelected) {
                return;
              }
              _this3.chipNodes.children.forEach(function (otherButton) {
                var otherChip = otherButton.getChildByName("chip");
                var otherText = otherButton.getChildByName("text");
                Tween.stopAllByTarget(otherChip);
                otherChip.y = 0;
                otherText.getComponent(Label).color = new Color().fromHEX("#FFFFFF");
                otherChip["_isSelected"] = false;
              });
              text.getComponent(Label).color = new Color().fromHEX("#FFF000");
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
          SicboSignalRClient.getInstance().receive('roomData', function (data) {
            if (data.c < 0) {
              _this3.showToast(SicboSignalRClient.getErrMsg(data.c));
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
                }, data.r.Session.Phrase == PHASE.RESULT ? 3 : 0);
              }
            });
          });
          SicboSignalRClient.getInstance().receive('joinRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(SicboSignalRClient.getErrMsg(data.c));
              return;
            }
            if (data.r.AccountId != Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              _this3.randomFreePlayer().set(data.r);
            }
          });
          SicboSignalRClient.getInstance().receiveArray('recieveMessage', function (accountId, _nickname, content) {
            var playerRM = _this3.getAllPlayersById(accountId);
            playerRM.showChatMsg(content);
          });
          SicboSignalRClient.getInstance().receive('leaveRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(SicboSignalRClient.getErrMsg(data.c));
              return;
            }
            for (var i = 0; i < data.r.length; i++) {
              var item = data.r[i];
              if (item.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                if (item.reason < 0) {
                  App.instance.alertDialog.showMsg(App.instance.getTextLang("ca" + item.reason));
                }
                _this3.backToLobby();
              } else {
                _this3.getPlayerById(item.id).leave();
              }
            }
          });
          SicboSignalRClient.getInstance().receive('registerLeavingRoom', function (data) {
            var playerRLR = _this3.getAllPlayersById(data.r.id);
            if (data.r.status) {
              playerRLR.showRegisterQuit();
            } else {
              playerRLR.hideRegisterQuit();
            }
          });
          SicboSignalRClient.getInstance().receive('rejectBetting', function (data) {
            var rejectedPlayers = data.map(function (id) {
              return _this3.getPlayerById(id).lblNickname.string;
            }).join(", ");
            _this3.showToast("Reject betting from " + rejectedPlayers);
          });
          SicboSignalRClient.getInstance().receive('clearBetting', function (data) {
            var playerCBId = data.r.id;
            var playerCB = _this3.getPlayerById(playerCBId);
            _this3.chipContainer.children.filter(function (child) {
              return child.name.includes(playerCBId);
            }).forEach(function (chip) {
              _this3.moveChipToPlayer(chip, playerCB);
            });
            playerCB.setCoin(data.r.balance);
            playerCB.hideReady();
          });
          SicboSignalRClient.getInstance().receive('confirmBetting', function (data) {
            var playerCB = _this3.getAllPlayersById(data.r.id);
            playerCB.showReady();
          });
          SicboSignalRClient.getInstance().receive('playerOtherDevice', function (data) {
            _this3.showToast(SicboSignalRClient.getErrMsg(data));
          });
          SicboSignalRClient.getInstance().receive('connectionChanged', function (data) {
            var playerCC = _this3.getAllPlayersById(data.r.id);
            _this3.showToast(playerCC.lblNickname.string + " " + (data.status ? "connected" : "disconnected"));
            if (data.status) {
              playerCC.leave();
            }
          });
          SicboSignalRClient.getInstance().receive('playerBet', function (data) {
            if (data.c < 0) {
              _this3.showToast(SicboSignalRClient.getErrMsg(data.c));
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
          this.betPositions.children.forEach(function (child) {
            child.getChildByName('bg').active = data.Currency == 1;
            child.getChildByName('bgNormal').active = data.Currency == 0;
          });
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
          var dealerNormal = this.dealerNode.getChildByName('NORMAL');
          var dealerBET = this.dealerNode.getChildByName('BET');
          dealerBET.active = false;
          dealerNormal.active = false;
          this.labelDealerNotify.string = 'SICBO';
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
            var messages = [App.instance.getTextLang('ca157'), App.instance.getTextLang('ca150') + (" " + Utils.formatNumber(this.minBet) + " " + currency + " ") + App.instance.getTextLang('ca151'), App.instance.getTextLang('ca168')];
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
            this.countdownSecond.node.active = true;
            this.totalBet = 0;
            this.labelTotalBet.string = App.instance.getTextLang('ca164') + (" " + this.totalBet);
            dealerBET.active = true;
            dealerBET.getComponent(Animation).play();
            this.jackpotNode.active = false;
            this.resultContainer.active = false;
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
            this.betPositions.children.forEach(function (node) {
              var hover = CasinoLobby.instance.isTableVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
              if (hover) {
                hover.active = false;
                Tween.stopAllByTarget(hover.getComponent(UIOpacity));
              }
              var active = node.getChildByName("active");
              if (active) {
                node.getChildByName("active").active = false;
              }
            });
            this.hiddenBoxSoiCau();
          }
          if (session.Phrase == PHASE.RESULT) {
            this.labelDealerNotify.string = App.instance.getTextLang('me18');
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.hideReady();
            });
            this.countdownSecond.node.active = false;
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = true;
            this.nodeDisableBetX2.active = true;
            this.nodeDisableFinishBet.active = true;
            this.resultContainer.active = true;
            this.aminResult.active = true;
            this.resultNode.active = false;
            var dice_1 = this.resultNode.getChildByName('dice_1');
            var dice_2 = this.resultNode.getChildByName('dice_2');
            var dice_3 = this.resultNode.getChildByName('dice_3');
            var dices = session.Result.Dices;
            dice_1.getComponent(Sprite).spriteFrame = this.listSprDice[dices[0] - 1];
            dice_2.getComponent(Sprite).spriteFrame = this.listSprDice[dices[1] - 1];
            dice_3.getComponent(Sprite).spriteFrame = this.listSprDice[dices[2] - 1];
            this.resultNode.getComponentInChildren(Label).string = (dices[0] + dices[1] + dices[2]).toString();
            var anim = this.aminResult.getComponent(Animation);
            anim.once(Animation.EventType.FINISHED, function () {
              _this6.aminResult.active = false;
              _this6.resultNode.active = true;
              _this6.scheduleOnce(function () {
                _this6.winGates = session.Result.WinGates || [];
                _this6.showResultPrize(session.Prizes);
                if (session.JackpotPrizes) {
                  _this6.showResultJackpotPrize(session.JackpotPrizes);
                }
                session.Result.WinGates.forEach(function (gate) {
                  var node = _this6.betPositions.getChildByName(gate.toString());
                  var hover = CasinoLobby.instance.isTableVip ? node.getChildByName("hover") : node.getChildByName("hoverNormal");
                  if (hover) {
                    hover.active = true;
                    tween(hover.getComponent(UIOpacity)).repeatForever(tween().to(0.5, {
                      opacity: 50
                    }).to(0.5, {
                      opacity: 255
                    })).start();
                  }
                  var active = node.getChildByName("active");
                  if (active) {
                    node.getChildByName("active").active = true;
                  }
                });
                _this6.updateStatistic();
                _this6.checkJackpot();
                if (_this6.checkboxAutoShow.isChecked) {
                  _this6.scheduleOnce(function () {
                    _this6.showBoxSoiCau();
                  }, 1);
                }
              }, 2);
            });
            anim.play();
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
            _this7.progressSprite.node.setScale(-1, 1, 1);
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
          SicboSignalRClient.getInstance().send('ClearBetting', [], function (data) {
            if (data.c < 0) {
              _this9.showToast(SicboSignalRClient.getErrMsg(data.c));
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
            _this9.mePlayer.hideReady();
          });
        };
        _proto.finishBetting = function finishBetting() {
          var _this10 = this;
          if (this.nodeDisableFinishBet.active) {
            return;
          }
          SicboSignalRClient.getInstance().send('FinishBetting', [], function (data) {
            if (data.c < 0) {
              _this10.showToast(SicboSignalRClient.getErrMsg(data.c));
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
          SicboSignalRClient.getInstance().send('Bet', [amount, gate], function (data) {
            if (data.c < 0) {
              _this13.showToast(SicboSignalRClient.getErrMsg(data.c));
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
            _this13.mePlayer.hideReady();
          });
        };
        _proto.updateStatistic = function updateStatistic() {
          var _this14 = this;
          this.listCauMini.removeAllChildren();
          SicboSignalRClient.getInstance().send('GetGameHistory', [this.roomId], function (data) {
            if (data.c < 0) {
              _this14.showToast(SicboSignalRClient.getErrMsg(data.c));
              return;
            }
            _this14.drawCau(data.r);
          });
        };
        _proto.closePlay = function closePlay() {
          var _this15 = this;
          SicboSignalRClient.getInstance().send('ExitRoom', [], function (data) {
            if (data.c == 0) {
              _this15.backToLobby();
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
        _proto.backToLobby = function backToLobby() {
          SicboSignalRClient.getInstance().dontReceive();
          App.instance.gotoLobby();
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
              _this18.chatInGame.show(Configs.InGameIds.Sicbo);
            });
          } else {
            this.chatInGame.show(Configs.InGameIds.Sicbo);
          }
        };
        _proto.actShowPopupRank = function actShowPopupRank() {
          var popupRank = instantiate(this.popupRank);
          this.popupContainer.addChild(popupRank);
          // @ts-ignore
          popupRank.getComponent("Casino.PopupRank").showDetail(this.currency, Configs.InGameIds.Sicbo);
        };
        _proto.actShowPopupJackpot = function actShowPopupJackpot() {
          var popupJackpot = instantiate(this.popupJackpot);
          this.popupContainer.addChild(popupJackpot);
          // @ts-ignore
          popupJackpot.getComponent("Sicbo.PopupJackpot").show();
        };
        _proto.drawCau = function drawCau(data) {
          var _this19 = this;
          this.listCauMini.removeAllChildren();
          this.listCauDetail.removeAllChildren();
          data = data.slice(-18);
          data.forEach(function (item) {
            var mini = instantiate(_this19.itemCauMini);
            var detail = instantiate(_this19.itemCauDetail);
            var shouldShowMini = true;
            detail.getChildByName('dice_1').getComponentInChildren(Label).string = item[0].toString();
            detail.getChildByName('dice_2').getComponentInChildren(Label).string = item[1].toString();
            detail.getChildByName('dice_3').getComponentInChildren(Label).string = item[2].toString();
            var sum = item[0] + item[1] + item[2];
            detail.getChildByName('total').getComponentInChildren(Label).string = sum.toString();
            if (item[0] == item[1] && item[1] == item[2]) {
              mini.getComponent(Sprite).spriteFrame = _this19.listCauSpr[0];
              detail.getChildByName('total').getComponentInChildren(Sprite).spriteFrame = _this19.listCauSpr[0];
            } else if (sum >= 4 && sum <= 10) {
              mini.getComponent(Sprite).spriteFrame = _this19.listCauSpr[1]; // XIU
              detail.getChildByName('total').getComponentInChildren(Sprite).spriteFrame = _this19.listCauSpr[1];
            } else if (sum >= 11 && sum <= 17) {
              mini.getComponent(Sprite).spriteFrame = _this19.listCauSpr[2]; // TAI
              detail.getChildByName('total').getComponentInChildren(Sprite).spriteFrame = _this19.listCauSpr[2];
            } else {
              detail.getChildByName('total').getComponentInChildren(Sprite).node.active = false;
              detail.getChildByName('total').getChildByName('text').getComponent(Label).color = Color.BLACK;
              shouldShowMini = false;
            }
            _this19.listCauDetail.addChild(detail);
            if (shouldShowMini) {
              _this19.listCauMini.addChild(mini);
            }
          });
        };
        _proto.checkJackpot = function checkJackpot() {
          var _this20 = this;
          SicboSignalRClient.getInstance().send('GetJackpot', [this.currency, this.roomValue], function (data) {
            if (data.c < 0) {
              _this20.showToast(SicboSignalRClient.getErrMsg(data.c));
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
        return SicboPlay;
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
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "listCauDetail", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "itemCauDetail", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "listCauSpr", [_dec29], {
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
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "dealerNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "resultContainer", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "aminResult", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "resultNode", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "listSprDice", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "checkboxAutoShow", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "boxSettingContainer", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "labelTotalBet", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotFund", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotRate", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotValue", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "jackpotNode", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "labelDealerNotify", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "labels", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "vipColor", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(6, 191, 182);
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "normalColor", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(222, 179, 44);
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "guideBG", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec48], {
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

System.register("chunks:///_virtual/Sicbo.PopupJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './SicboSignalRClient.ts', './Sicbo.Play.ts', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, Dialog, SicboSignalRClient, SicboPlay, App;
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
      SicboSignalRClient = module.default;
    }, function (module) {
      SicboPlay = module.default;
    }, function (module) {
      App = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "15627yCmkpOfrx/Amli+imL", "Sicbo.PopupJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SicboPopupJackpot = exports('default', (_dec = menu("Sicbo/PopupJackpot"), _dec2 = property(Node), _dec3 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(SicboPopupJackpot, _Dialog);
        function SicboPopupJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTemplate", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SicboPopupJackpot.prototype;
        _proto.show = function show() {
          var _this2 = this;
          this.listItem.removeAllChildren();
          SicboSignalRClient.getInstance().send('GetJackpotWinner', [SicboPlay.instance.currency], function (data) {
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
              content.getChildByName("TIME").getComponent(Label).string = new Date(item.createdTime).toLocaleString("en-GB");
              content.getChildByName("ACCOUNT").getComponent(Label).string = item.nickname;
              content.getChildByName("BET").getComponent(Label).string = item.parValue.toLocaleString("vi-VN");
              content.getChildByName("PRIZE").getComponent(Label).string = item.prizeValue.toLocaleString("vi-VN");
              _this2.listItem.addChild(itemNode);
            });
          });
          _Dialog.prototype.show.call(this);
        };
        return SicboPopupJackpot;
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

(function(r) {
  r('virtual:///prerequisite-imports/Sicbo', 'chunks:///_virtual/Sicbo'); 
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