System.register("chunks:///_virtual/BlackJack", ['./BlackJack.OpacityTween.ts', './BlackJack.Play.ts', './BlackJack.Player.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BlackJack.OpacityTween.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9d640tkuFFD+LA07eM4yRza", "BlackJack.OpacityTween", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu;
      var OpacityTween = exports('default', (_dec = menu("BlackJack/OpacityTween"), ccclass(_class = _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OpacityTween, _Component);
        function OpacityTween() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = OpacityTween.prototype;
        _proto.start = function start() {
          var opacityComp = this.node.getComponent(UIOpacity) || this.node.addComponent(UIOpacity);
          opacityComp.opacity = 255;
          tween(opacityComp).repeatForever(tween().to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 120
          })).start();
        };
        return OpacityTween;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlackJack.Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJack.Player.ts', './App.ts', './BlackjackSignalRClient.ts', './Casino.Lobby.ts', './Config.ts', './Utils.ts', './BundleControl.ts', './Casino.PopupRank.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, Prefab, EditBox, sys, Tween, Color, tween, Animation, UIOpacity, v3, instantiate, Vec3, UITransform, Layout, Component, BlackJackPlayer, App, BlackjackSignalRClient, CasinoLobby, Configs, Utils, BundleControl, CasinoPopupRank;
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
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      BlackJackPlayer = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      BlackjackSignalRClient = module.default;
    }, function (module) {
      CasinoLobby = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      BundleControl = module.default;
    }, function (module) {
      CasinoPopupRank = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _class3;
      cclegacy._RF.push({}, "9e9ecMCGGdHzZ6AS1LDbvZd", "BlackJack.Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PHASE = /*#__PURE__*/function (PHASE) {
        PHASE[PHASE["None"] = 0] = "None";
        PHASE[PHASE["Betting"] = 1] = "Betting";
        PHASE[PHASE["Dealing"] = 2] = "Dealing";
        PHASE[PHASE["InsurancePhrase"] = 3] = "InsurancePhrase";
        PHASE[PHASE["PlayerActions"] = 4] = "PlayerActions";
        PHASE[PHASE["DealerActions"] = 5] = "DealerActions";
        PHASE[PHASE["Result"] = 6] = "Result";
        return PHASE;
      }(PHASE || {});
      var ACTION = /*#__PURE__*/function (ACTION) {
        ACTION[ACTION["None"] = 0] = "None";
        ACTION[ACTION["Bet"] = 1] = "Bet";
        ACTION[ACTION["Stand"] = 2] = "Stand";
        ACTION[ACTION["Hit"] = 3] = "Hit";
        ACTION[ACTION["DoubleDown"] = 4] = "DoubleDown";
        ACTION[ACTION["Split"] = 5] = "Split";
        ACTION[ACTION["Surrender"] = 6] = "Surrender";
        ACTION[ACTION["Insurance"] = 7] = "Insurance";
        ACTION[ACTION["EvenMoney"] = 8] = "EvenMoney";
        ACTION[ACTION["Clear"] = 9] = "Clear";
        return ACTION;
      }(ACTION || {});
      var BlackJackPlay = exports('default', (_dec = menu("BlackJack/Play"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property([BlackJackPlayer]), _dec9 = property(BlackJackPlayer), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property([SpriteFrame]), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Sprite), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(Node), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(EditBox), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Label), _dec29 = property(Node), _dec30 = property(Label), _dec31 = property([Node]), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(SpriteFrame), _dec42 = property(SpriteFrame), _dec43 = property(SpriteFrame), _dec44 = property(SpriteFrame), _dec45 = property([Node]), _dec46 = property(Node), _dec47 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackPlay, _Component);
        function BlackJackPlay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roomDetail", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listTableSpr", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableSpr", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipNodes", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boxSettingContainer", _descriptor5, _assertThisInitialized(_this));
          // JOIN ROOM
          _initializerDefineProperty(_this, "lblToast", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "players", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mePlayer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDeck", _descriptor9, _assertThisInitialized(_this));
          // BET
          _initializerDefineProperty(_this, "blackjackMachine", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardBack", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardFronts", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipContainer", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countdownSecond", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSprite", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteGreen", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteYellow", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteRed", _descriptor18, _assertThisInitialized(_this));
          _this.amounts = [];
          _this.amounts_1 = [1, 5, 10, 50, 100];
          _this.amounts_2 = [1, 2, 10, 20, 100];
          _this.minBet = 0;
          _this.amountSelected = 0;
          _this.betLogs = [];
          _this.flagLog = -1;
          _this.flagIsPhaseBetting = false;
          _this.originalChipContainerIndex = 0;
          _this.meBetPosition = 0;
          _this.sessionId = 0;
          _this.roomId = void 0;
          _this.roomValue = void 0;
          _this.currency = void 0;
          _initializerDefineProperty(_this, "boxChat", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupRank", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor21, _assertThisInitialized(_this));
          // SEND MESSAGE
          _initializerDefineProperty(_this, "editBoxChat", _descriptor22, _assertThisInitialized(_this));
          // DEALER
          _initializerDefineProperty(_this, "dealerNode", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealerCardContainer", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealerCards", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealerCard", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDealerSum", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dealerCardBlackjack", _descriptor28, _assertThisInitialized(_this));
          _this.lastCardIdx = 0;
          //BOX DEALER
          _initializerDefineProperty(_this, "labelDealerNotify", _descriptor29, _assertThisInitialized(_this));
          // BUTTON IN_GAME
          _initializerDefineProperty(_this, "inGameButtons", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomBarBet", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableRebet", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableBetX2", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableClearBet", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableFinishBet", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomBarDeal", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeInsurance", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeEvenMoney", _descriptor38, _assertThisInitialized(_this));
          //Help
          _initializerDefineProperty(_this, "boxHelp", _descriptor39, _assertThisInitialized(_this));
          //TABLE VIP NORMAL
          _initializerDefineProperty(_this, "spriteFrameBetVip", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameBetNormal", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameActiveBetVip", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrameActiveBetNormal", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrayNodesBet", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guideBG", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guide", _descriptor46, _assertThisInitialized(_this));
          _this.chatInGame = null;
          _this.cardActionQueue = Promise.resolve();
          return _this;
        }
        var _proto = BlackJackPlay.prototype;
        _proto.init = function init(roomValue, currency) {
          this.roomValue = roomValue;
          this.currency = currency;
        };
        _proto.start = function start() {
          var _this2 = this;
          BlackJackPlay.instance = this;
          App.instance.showLoading(true);
          BlackjackSignalRClient.getInstance().send('EnterRoom', [this.roomValue, this.currency], function (data) {
            App.instance.showLoading(false);
            if (data.c < 0) {
              App.instance.alertDialog.showMsg(BlackjackSignalRClient.getErrMsg(data.c));
              _this2.node.destroy();
              return;
            }
            _this2.joinRoom(data.r);
            if (sys.localStorage.getItem("CA_BJ_first_time") === null) {
              sys.localStorage.setItem("CA_BJ_first_time", "1");
              _this2.showGuide();
            }
          });
          var isVip = CasinoLobby.instance.isTableVip;
          var _ref = isVip ? [this.spriteFrameBetVip, this.spriteFrameActiveBetVip] : [this.spriteFrameBetNormal, this.spriteFrameActiveBetNormal],
            frameBet = _ref[0],
            frameActive = _ref[1];
          this.arrayNodesBet.forEach(function (node) {
            var spriteBet = node.getChildByName("Status");
            var spriteBetActive = spriteBet.getChildByName("checkmark");
            spriteBet.getComponent(Sprite).spriteFrame = frameBet;
            spriteBetActive.getComponent(Sprite).spriteFrame = frameActive;
          });
          this.flagLog = -1;
        };
        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this.originalChipContainerIndex = this.chipContainer.getSiblingIndex();
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
          this.mePlayer.statusNode.on(Node.EventType.TOUCH_END, function () {
            if (_this3.amountSelected == 0) {
              return;
            }
            _this3.actBet(_this3.amountSelected);
          });
          this.inGameButtons.forEach(function (button) {
            button.on(Node.EventType.TOUCH_END, function () {
              if (button.getChildByName('disable').active) {
                return;
              }
              _this3.sendRequestAction(ACTION[button.name]);
            });
          });
          BlackjackSignalRClient.getInstance().receive('roomData', function (data) {
            if (data.c < 0) {
              _this3.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            _this3.sessionId = data.r.SessionId;
            _this3.roomDetail.getChildByName('RoomSession').getComponent(Label).string = App.instance.getTextLang('txt_session') + (": #" + _this3.sessionId);
            _this3.handleSession(data.r.Session);
            data.r.Players.forEach(function (player) {
              var playerObj = _this3.getAllPlayersById(player.AccountId);
              if (playerObj) {
                playerObj.setCoin(player.Balance);
              }
            });
          });
          BlackjackSignalRClient.getInstance().receive('joinRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            if (data.r.AccountId != Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              var playerRFP = _this3.randomFreePlayer();
              playerRFP.set(data.r);
              if (_this3.flagIsPhaseBetting) {
                playerRFP.statusNode.getChildByName('checkmark').active = false;
              }
            }
          });
          BlackjackSignalRClient.getInstance().receiveArray('recieveMessage', function (accountId, _nickname, content) {
            var playerRM = _this3.getAllPlayersById(accountId);
            playerRM.showChatMsg(content);
          });
          BlackjackSignalRClient.getInstance().receive('leaveRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(BlackjackSignalRClient.getErrMsg(data.c));
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
          BlackjackSignalRClient.getInstance().receive('registerLeavingRoom', function (data) {
            var playerRLR = _this3.getAllPlayersById(data.r.id);
            if (data.r.status) {
              playerRLR.showRegisterQuit();
            } else {
              playerRLR.hideRegisterQuit();
            }
          });
          BlackjackSignalRClient.getInstance().receive('rejectBetting', function (data) {
            var rejectedPlayers = data.map(function (id) {
              return _this3.getPlayerById(id).lblNickname.string;
            }).join(", ");
            _this3.showToast("Reject betting from " + rejectedPlayers);
          });
          BlackjackSignalRClient.getInstance().receive('clearBetting', function (data) {
            var playerCBId = data.r.id;
            var playerCB = _this3.getPlayerById(playerCBId);
            _this3.chipContainer.children.filter(function (child) {
              return child.name === playerCBId;
            }).forEach(function (chip) {
              _this3.moveChipToPlayer(chip, playerCB);
            });
            playerCB.setCoin(data.r.balance);
            playerCB.clearBetAmount();
            playerCB.hideReady();
          });
          BlackjackSignalRClient.getInstance().receive('confirmBetting', function (data) {
            var playerCB = _this3.getAllPlayersById(data.r.id);
            playerCB.showReady();
          });
          BlackjackSignalRClient.getInstance().receive('playerOtherDevice', function (data) {
            _this3.showToast(BlackjackSignalRClient.getErrMsg(data));
          });
          BlackjackSignalRClient.getInstance().receive('connectionChanged', function (data) {
            var playerCC = _this3.getPlayerById(data.r.id);
            _this3.showToast(playerCC.lblNickname.string + " " + (data.status ? "connected" : "disconnected"));
            if (data.status) {
              playerCC.leave();
            }
          });
          BlackjackSignalRClient.getInstance().receive('playerBet', function (data) {
            if (data.c < 0) {
              _this3.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            var player = _this3.getPlayerById(data.r.id);
            player.setCoin(data.r.balance);
            _this3.placeBet(player, data.r.amount);
          });
          BlackjackSignalRClient.getInstance().receive('playerAction', function (data) {
            _this3.handlePlayerAction(data.r);
          });
          BlackjackSignalRClient.getInstance().receive('updateHand', function (data) {
            _this3.updateHandDealer(data.Cards, data.BestSum);
          });
          BlackjackSignalRClient.getInstance().receive('updatePrizes', function (data) {
            _this3.handleResultPrizes(data);
          });
        };
        _proto.sendRequestAction = function sendRequestAction(action, confirmed) {
          var _this4 = this;
          if (confirmed === void 0) {
            confirmed = true;
          }
          BlackjackSignalRClient.getInstance().send('Request', [action, confirmed], function (data) {
            if (data.c < 0) {
              _this4.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            _this4.handlePlayerAction(data.r);
          });
        };
        _proto.sendRequestActionInsurance = function sendRequestActionInsurance(_event, data) {
          this.sendRequestAction(ACTION.Insurance, data == "true");
          this.nodeInsurance.active = false;
        };
        _proto.sendRequestActionEvenMoney = function sendRequestActionEvenMoney(_event, data) {
          this.sendRequestAction(ACTION.EvenMoney, data == "true");
          this.nodeEvenMoney.active = false;
        };
        _proto.handlePlayerAction = function handlePlayerAction(data) {
          var playerPA = this.getAllPlayersById(data.accountId);
          [this.mePlayer].concat(this.players).forEach(function (player) {
            player.meTurn = false;
            player.hideTurnSplit();
            player.hideTurnMain();
          });
          playerPA.meTurn = true;
          switch (data.action) {
            case ACTION.Hit:
            case ACTION.Stand:
            case ACTION.DoubleDown:
              var handNormal = data.hand;
              if (handNormal.Index == 0) {
                playerPA.handleCardMain(handNormal.Cards, handNormal.Sum, handNormal.BestSum, true);
              } else if (handNormal.Index == 1) {
                playerPA.handleCardSplit(handNormal.Cards, handNormal.Sum, handNormal.BestSum, true);
              }
              if (data.action == ACTION.Hit) {
                playerPA.updateStatus(BlackJackPlayer.instance.STATUS.Hit);
              }
              if (data.action == ACTION.Stand) {
                playerPA.updateStatus(BlackJackPlayer.instance.STATUS.Stand);
              }
              if (data.action == ACTION.DoubleDown) {
                playerPA.updateStatus(BlackJackPlayer.instance.STATUS.DoubleDown);
                this.placeBet(playerPA, this.betLogs[0].amount);
              }
              break;
            case ACTION.Insurance:
              if (data.confirmed && data.accountId == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                var amount = this.mePlayer.totalBetAmount / 2;
                var amountNode = this.mePlayer.createCoinNode(Utils.formatMoney(amount, true));
                this.moveChipToDealer(amountNode);
              }
              break;
            case ACTION.EvenMoney:
              if (data.confirmed && data.accountId == Configs.Login.AccountID + ":" + Configs.Login.PortalID) ;
              break;
            case ACTION.Split:
              playerPA.updateStatus(BlackJackPlayer.instance.STATUS.Split);
              break;
          }
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
          this.lblDeck.string = data.Deck;
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
                this.meBetPosition = players[i].Position;
              }
            }
          }
          if (data.Session) {
            this.handleSession(data.Session, true);
          }
        };
        _proto.handleSession = function handleSession(session, isJoin) {
          var _this6 = this;
          if (isJoin === void 0) {
            isJoin = false;
          }
          this.unscheduleAllCallbacks();
          var dealerBET = this.dealerNode.getChildByName('BET');
          var dealerNormal = this.dealerNode.getChildByName('NORMAL');
          dealerNormal.active = true;
          dealerBET.active = false;
          this.labelDealerNotify.string = 'BLACKJACK';
          if (session.Phrase == PHASE.None) {
            dealerNormal.active = true;
            return;
          }
          [this.mePlayer].concat(this.players).forEach(function (player) {
            player.resetTimeout();
          });
          this.inGameButtons.forEach(function (button) {
            button.getChildByName('disable').active = true;
          });
          this.countdownSecond.node.parent.active = session.Phrase == PHASE.Betting;
          if (session.Phrase == PHASE.Betting) {
            this.updateTimeout(session.Timeout);
          } else if (session.Phrase == PHASE.PlayerActions) {
            var _session$Roles;
            (_session$Roles = session.Roles) == null || _session$Roles.forEach(function (rol) {
              var playerPAR = _this6.getAllPlayersById(rol.AccountId);
              playerPAR.updateTimeout(session.Timeout);
            });
          }
          if (session.Timeout) {
            this.updateTimeout(session.Timeout);
          }
          [this.mePlayer].concat(this.players).forEach(function (player) {
            player.statusNode.getChildByName('checkmark').active = false;
          });
          this.flagIsPhaseBetting = false;
          if (session.Phrase == PHASE.Betting) {
            this.flagIsPhaseBetting = true;
            this.flagLog++;
            this.betLogs = this.betLogs.filter(function (log) {
              return log.flag == _this6.flagLog - 1;
            });
            this.nodeInsurance.active = false;
            this.nodeEvenMoney.active = false;
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.resetTable();
            });
            this.dealerCardContainer.active = false;
            this.chipContainer.removeAllChildren();
            this.bottomBarDeal.active = false;
            this.bottomBarBet.active = true;
            this.nodeDisableRebet.active = this.betLogs.length == 0;
            this.nodeDisableBetX2.active = this.betLogs.length == 0;
            this.nodeDisableClearBet.active = true;
            this.nodeDisableFinishBet.active = true;
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.statusNode.getChildByName('checkmark').active = player.id == _this6.mePlayer.id;
            });
            dealerNormal.active = false;
            dealerBET.active = true;
            dealerBET.getComponent(Animation).play();
            var currency = this.currency == 0 ? App.instance.getTextLang('txt_coin') : 'Tipzo';
            var messages = [App.instance.getTextLang('ca157'), App.instance.getTextLang('ca150') + (" " + Utils.formatNumber(this.minBet) + " " + currency)];
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
          } else {
            this.bottomBarBet.active = false;
            this.bottomBarDeal.active = true;
          }
          if (session.Phrase == PHASE.Dealing) {
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.hideReady();
            });
            dealerNormal.active = true;
            this.labelDealerNotify.string = App.instance.getTextLang('ca110');
            this.setupHandDealer(session.DealerHand.Cards);
            this.handlePlayerBoxes(session.Boxes, isJoin);
            this.inGameButtons.forEach(function (button) {
              button.getChildByName('disable').active = true;
            });
          }
          if (session.Phrase == PHASE.InsurancePhrase || session.Phrase == PHASE.PlayerActions) {
            var _session$Roles2, _session$Roles3;
            var meRole = (_session$Roles2 = session.Roles) == null ? void 0 : _session$Roles2.find(function (rol) {
              return rol.AccountId == Configs.Login.AccountID + ":" + Configs.Login.PortalID;
            });
            (_session$Roles3 = session.Roles) == null || _session$Roles3.forEach(function (rol) {
              var playerPA = _this6.getAllPlayersById(rol.AccountId);
              playerPA.meTurn = true;
              if (!playerPA.isShowedTurnMain) {
                playerPA.showTurnMain();
              }
            });
          }
          if (session.Phrase == PHASE.InsurancePhrase) {
            this.labelDealerNotify.string = App.instance.getTextLang('ca160');
            if (meRole != null && meRole.Actions.includes(ACTION.Insurance)) {
              this.nodeInsurance.active = true;
            }
            if (meRole != null && meRole.Actions.includes(ACTION.EvenMoney)) {
              this.nodeEvenMoney.active = true;
            }
          }
          if (session.Phrase == PHASE.PlayerActions) {
            this.labelDealerNotify.string = App.instance.getTextLang('ca158');
            this.nodeInsurance.active = false;
            this.nodeEvenMoney.active = false;
            if (meRole) {
              this.inGameButtons.forEach(function (button) {
                button.getChildByName('disable').active = !meRole.Actions.includes(ACTION[button.name]);
              });
            }
            if (isJoin) {
              this.handlePlayerBoxes(session.Boxes, true, false);
            } else {
              this.handlePlayerBoxes(session.Boxes, false, true);
            }
          }
          if (isJoin && session.Phrase > PHASE.Betting) {
            this.inGameButtons.forEach(function (button) {
              button.getChildByName('disable').active = true;
            });
            this.setupHandDealer([session.DealerHand.Cards[0], -1]);
            if (session.Phrase >= PHASE.DealerActions) {
              this.updateHandDealer(session.DealerHand.Cards, session.DealerHand.BestSum);
            }
          }
          if (session.Phrase == PHASE.DealerActions && !isJoin) {
            this.labelDealerNotify.string = App.instance.getTextLang('ca159');
            this.updateHandDealer(session.DealerHand.Cards, session.DealerHand.BestSum);
          }
          if (session.Phrase == PHASE.Result) {
            this.labelDealerNotify.string = App.instance.getTextLang('me18');
            dealerNormal.active = true;
            if (session.Prizes) {
              this.handleResultPrizes(session.Prizes);
            }
            if (session.EventPrizes) {
              session.EventPrizes.forEach(function (_prize) {});
            }
            [this.mePlayer].concat(this.players).filter(function (player) {
              return !player.isWin;
            }).forEach(function (player) {
              var isPlayerBet = false;
              _this6.chipContainer.children.filter(function (child) {
                return child.name === player.id;
              }).forEach(function (chip) {
                isPlayerBet = true;
                _this6.moveChipToDealer(chip, player);
              });
              _this6.scheduleOnce(function () {
                if (isPlayerBet) {
                  player.showResult(BlackJackPlayer.instance.RESULT_STATUS.LOSE);
                }
              }, 0.5);
            });
          }
          if (session.Phrase != PHASE.Dealing && session.Phrase != PHASE.PlayerActions && isJoin) {
            this.handlePlayerBoxes(session.Boxes, true);
          }
        };
        _proto.handlePlayerBoxes = function handlePlayerBoxes(boxes, isJoin, checkCaseSplitOnly) {
          var _this7 = this;
          if (isJoin === void 0) {
            isJoin = false;
          }
          if (checkCaseSplitOnly === void 0) {
            checkCaseSplitOnly = false;
          }
          boxes.forEach(function (box) {
            var mainHand = box.Hands[0];
            var splitHand = box.Hands.length > 1 ? box.Hands[1] : null;
            var playerB = _this7.getAllPlayersById(box.Owner);
            if (!playerB) return;
            var isValidSplitCase = box.Hands.length == 2 && (mainHand == null ? void 0 : mainHand.Cards.length) === 1 && (splitHand == null ? void 0 : splitHand.Cards.length) === 1 && playerB.mainCards.children.length === 2;
            if (checkCaseSplitOnly && !isValidSplitCase) {
              return;
            }
            if (mainHand.Cards) {
              if (checkCaseSplitOnly) {
                playerB.handleCardMain(mainHand.Cards, mainHand.Sum, 0, true, true);
              } else {
                playerB.handleCardMain(mainHand.Cards, mainHand.Sum);
              }
            }
            if (isJoin && mainHand.BettingLogs) {
              mainHand.BettingLogs.forEach(function (log) {
                _this7.placeBet(playerB, log.Amount);
              });
            }
            if (splitHand && splitHand.Cards) {
              if (checkCaseSplitOnly) {
                playerB.handleCardSplit(splitHand.Cards, splitHand.Sum, 0, false, true);
              } else {
                playerB.handleCardSplit(splitHand.Cards, splitHand.Sum);
              }
              if (isJoin && splitHand.BettingLogs) {
                splitHand.BettingLogs.forEach(function (log) {
                  _this7.placeBet(playerB, log.Amount);
                });
              }
            }
          });
        };
        _proto.handleResultPrizes = function handleResultPrizes(prizes) {
          var _this8 = this;
          prizes.forEach(function (prize) {
            var _ref2, _prize$TotalPrize, _ref3, _prize$TotalBet, _prize$Type;
            var accountId = prize.AccountId || prize.accountId;
            var player = _this8.getAllPlayersById(accountId);
            if (!player) return;
            player.isWin = true;
            _this8.chipContainer.children.filter(function (child) {
              return child.name === player.id;
            }).forEach(function (chip) {
              return _this8.moveChipToPlayer(chip, player, true);
            });
            var totalPrize = (_ref2 = (_prize$TotalPrize = prize.TotalPrize) != null ? _prize$TotalPrize : prize.totalPrize) != null ? _ref2 : 0;
            var totalBet = (_ref3 = (_prize$TotalBet = prize.TotalBet) != null ? _prize$TotalBet : prize.totalBet) != null ? _ref3 : 0;
            var type = (_prize$Type = prize.Type) != null ? _prize$Type : prize.type;
            switch (type) {
              case 1:
                // player.showResult(BlackJackPlayer.instance.RESULT_STATUS.BLACKJACK);
                player.showWinAnimation();
                break;
              case 0:
                if (totalPrize > totalBet) {
                  player.showResult(BlackJackPlayer.instance.RESULT_STATUS.WIN);
                  player.showWinAnimation();
                } else if (totalPrize === totalBet) {
                  player.showResult(BlackJackPlayer.instance.RESULT_STATUS.DRAW);
                }
                break;
            }
          });
        };
        _proto.updateTimeout = function updateTimeout(timeout) {
          var _this9 = this;
          var totalTime = timeout;
          var elapsed = 0;
          this.schedule(function () {
            elapsed += 0.05;
            var percent = Math.min(elapsed / totalTime, 1);
            _this9.progressSprite.fillRange = percent;
            _this9.progressSprite.spriteFrame = percent < 0.5 ? _this9.progressSpriteGreen : percent < 0.8 ? _this9.progressSpriteYellow : _this9.progressSpriteRed;
            _this9.progressSprite.node.setScale(v3(-1, 1, 1));
          }, 0.05);
          this.countdownSecond.string = timeout < 10 ? "0" + timeout : timeout + '';
          this.schedule(function () {
            if (timeout < 0) {
              _this9.unscheduleAllCallbacks();
              return;
            }
            _this9.countdownSecond.string = timeout < 10 ? "0" + timeout : timeout + '';
            timeout--;
          }, 1);
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
        _proto.getChipByAmount = function getChipByAmount(amount) {
          var _this$chipNodes$child,
            _this10 = this;
          return (_this$chipNodes$child = this.chipNodes.children.find(function (_chip, index) {
            return _this10.amounts[index] === amount / _this10.minBet;
          })) == null ? void 0 : _this$chipNodes$child.getChildByName("chip");
        };
        _proto.toggleMenu = function toggleMenu() {
          this.boxSettingContainer.active = !this.boxSettingContainer.active;
        };
        _proto.clearBetting = function clearBetting() {
          var _this11 = this;
          if (this.nodeDisableClearBet.active) {
            return;
          }
          BlackjackSignalRClient.getInstance().send('ClearBetting', [], function (data) {
            if (data.c < 0) {
              _this11.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            _this11.chipContainer.children.filter(function (child) {
              return child.name === _this11.mePlayer.id;
            }).forEach(function (chip) {
              _this11.moveChipToPlayer(chip, _this11.mePlayer);
            });
            _this11.nodeDisableClearBet.active = true;
            _this11.nodeDisableRebet.active = true;
            _this11.nodeDisableBetX2.active = true;
            _this11.nodeDisableFinishBet.active = true;
            _this11.betLogs = [];
            _this11.mePlayer.setCoin(data.r.balance);
            _this11.mePlayer.clearBetAmount();
            _this11.mePlayer.hideReady();
          });
        };
        _proto.x2Betting = function x2Betting() {
          var _this12 = this;
          if (this.nodeDisableBetX2.active) {
            return;
          }
          this.actBetFromBetLogs();
          setTimeout(function () {
            _this12.actBetFromBetLogs();
          }, 500);
        };
        _proto.reLastBet = function reLastBet() {
          if (this.nodeDisableRebet.active) {
            return;
          }
          this.actBetFromBetLogs();
        };
        _proto.actBetFromBetLogs = function actBetFromBetLogs() {
          var _this13 = this;
          this.betLogs.forEach(function (log) {
            if (log.flag == _this13.flagLog - 1) {
              _this13.actBet(log.amount);
            }
          });
        };
        _proto.actBet = function actBet(amount) {
          var _this14 = this;
          BlackjackSignalRClient.getInstance().send('Bet', [amount, this.meBetPosition], function (data) {
            if (data.c < 0) {
              _this14.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            _this14.nodeDisableClearBet.active = false;
            _this14.nodeDisableRebet.active = true;
            _this14.nodeDisableBetX2.active = true;
            _this14.nodeDisableFinishBet.active = false;
            var dataBet = data.r;
            _this14.placeBet(_this14.mePlayer, dataBet.amount);
            _this14.mePlayer.setCoin(dataBet.balance);
            _this14.mePlayer.hideReady();
            _this14.betLogs.push({
              amount: data.r.amount,
              gate: data.r.gate,
              flag: _this14.flagLog
            });
          });
        };
        _proto.finishBetting = function finishBetting() {
          var _this15 = this;
          if (this.nodeDisableFinishBet.active) {
            return;
          }
          BlackjackSignalRClient.getInstance().send('FinishBetting', [], function (data) {
            if (data.c < 0) {
              _this15.showToast(BlackjackSignalRClient.getErrMsg(data.c));
              return;
            }
            _this15.mePlayer.showReady();
          });
        };
        _proto.closePlay = function closePlay() {
          var _this16 = this;
          BlackjackSignalRClient.getInstance().send('ExitRoom', [], function (data) {
            if (data.c == 0) {
              _this16.backToLobby();
              return;
            }
            if (data.r.status) {
              _this16.mePlayer.showRegisterQuit();
              _this16.showToast(App.instance.getTextLang('me8'));
            } else {
              _this16.mePlayer.hideRegisterQuit();
              _this16.showToast(App.instance.getTextLang('me9'));
            }
          });
        };
        _proto.backToLobby = function backToLobby() {
          BlackjackSignalRClient.getInstance().dontReceive();
          App.instance.gotoLobby();
        };
        _proto.placeBet = function placeBet(player, amount) {
          player.updateBetAmount(amount);
          var chipPrefab = this.getChipByAmount(amount) || this.getChipByAmount(this.minBet);
          var chip = instantiate(chipPrefab);
          chip.setScale(new Vec3(0.5, 0.5, 0.5));
          this.chipContainer.addChild(chip);
          var avatarWorldPos = player.avatarNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
          var statusWorldPos = player.statusNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
          var startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(avatarWorldPos);
          var endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(statusWorldPos);
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
          chip.setPosition(startPos);
          chip.name = player.id;
          tween(chip).to(0.5, {
            position: endPos
          }, {
            easing: 'sineOut'
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
        _proto.showBoxChat = function showBoxChat() {
          var _this18 = this;
          App.instance.inactivityTimer = 0;
          if (this.chatInGame == null) {
            BundleControl.loadPrefabPopup("prefabs/ChatInGame", function (prefab) {
              _this18.chatInGame = instantiate(prefab).getComponent("ChatInGame");
              _this18.node.addChild(_this18.chatInGame.node);
              _this18.chatInGame.show(Configs.InGameIds.BlackJack);
            });
          } else {
            this.chatInGame.show(Configs.InGameIds.BlackJack);
          }
        };
        _proto.actShowPopupRank = function actShowPopupRank() {
          var popupRank = instantiate(this.popupRank);
          this.popupContainer.addChild(popupRank);
          popupRank.getComponent(CasinoPopupRank).showDetail(this.currency, Configs.InGameIds.BlackJack);
        };
        _proto.moveChipToPlayer = function moveChipToPlayer(chip, player, moveFromDealerFirst) {
          var _this19 = this;
          if (moveFromDealerFirst === void 0) {
            moveFromDealerFirst = false;
          }
          var targetPos = player.node.getPosition().clone();
          var middlePos = chip.getPosition().clone();
          this.chipContainer.setSiblingIndex(this.originalChipContainerIndex + 3);
          if (moveFromDealerFirst) {
            var delayStep = 0.1;
            var _loop = function _loop() {
              var cloneChip = instantiate(chip);
              cloneChip.setPosition(_this19.dealerNode.getPosition());
              _this19.chipContainer.addChild(cloneChip);
              tween(cloneChip).delay(i * delayStep).to(0.5, {
                position: middlePos
              }, {
                easing: 'sineOut'
              }).call(function () {
                return cloneChip.destroy();
              }).start();
            };
            for (var i = 0; i < 10; i++) {
              _loop();
            }
            var totalDelay = 10 * delayStep;
            var originalBetNode = player.betAmount.children[0];
            var betAmountNode = instantiate(originalBetNode);
            var worldPos = originalBetNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
            var localPos = this.chipContainer.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            betAmountNode.setPosition(localPos);
            this.chipContainer.addChild(betAmountNode);
            tween(betAmountNode).delay(totalDelay).call(function () {
              player.betAmount.active = false;
            }).to(0.3, {
              position: targetPos
            }, {
              easing: 'sineOut'
            }).call(function () {
              betAmountNode.destroy();
            }).start();
            tween(chip).delay(totalDelay + 0.1).to(0.4, {
              position: targetPos
            }, {
              easing: 'sineOut'
            }).call(function () {
              chip.destroy();
              _this19.chipContainer.setSiblingIndex(_this19.originalChipContainerIndex);
            }).start();
            return;
          }
          tween(chip).to(0.5, {
            position: targetPos
          }, {
            easing: 'sineOut'
          }).call(function () {
            chip.destroy();
            _this19.chipContainer.setSiblingIndex(_this19.originalChipContainerIndex);
          }).start();
        };
        _proto.moveChipToDealer = function moveChipToDealer(chip, player) {
          var _this20 = this;
          if (player === void 0) {
            player = null;
          }
          var dealerPos = this.dealerNode.getPosition();
          this.chipContainer.setSiblingIndex(this.originalChipContainerIndex + 3);
          if (player) {
            var originalBetNode = player.betAmount.children[0];
            var betAmountNode = instantiate(originalBetNode);
            var worldPos = originalBetNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
            var localPos = this.chipContainer.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            betAmountNode.setPosition(localPos);
            this.chipContainer.addChild(betAmountNode);
            tween(betAmountNode).call(function () {
              player.betAmount.active = false;
            }).to(0.3, {
              position: dealerPos
            }, {
              easing: 'sineOut'
            }).call(function () {
              betAmountNode.destroy();
            }).start();
          }
          tween(chip).to(0.5, {
            position: dealerPos
          }, {
            easing: 'sineOut'
          }).call(function () {
            chip.destroy();
            _this20.chipContainer.setSiblingIndex(_this20.originalChipContainerIndex);
          }).start();
        };
        _proto.showDealerCardsAsync = function showDealerCardsAsync(startIndex, cards) {
          var _this21 = this;
          return new Promise(function (resolve) {
            var count = cards.length - startIndex;
            if (count === 0) {
              resolve();
              return;
            }
            var _loop2 = function _loop2(i) {
              var cardNode = instantiate(_this21.dealerCard);
              cardNode.name = i.toString();
              cardNode.active = false;
              cardNode.getChildByName('arrow').active = false;
              _this21.scheduleOnce(function () {
                _this21.dealerCards.addChild(cardNode);
                _this21.moveCardFromMachine(cardNode, cards[i]);
                count--;
                if (count === 0) {
                  resolve();
                }
              }, i - startIndex);
            };
            for (var i = startIndex; i < cards.length; i++) {
              _loop2(i);
            }
          });
        };
        _proto.setupHandDealer = function setupHandDealer(cards) {
          var _this22 = this;
          this.cardActionQueue = this.cardActionQueue.then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _this22.dealerCardContainer.active = true;
                  _this22.dealerCards.removeAllChildren();
                  _this22.lblDealerSum.node.parent.active = false;
                  _this22.dealerCardBlackjack.active = false;
                  _context.next = 6;
                  return _this22.showDealerCardsAsync(0, cards);
                case 6:
                  _this22.lastCardIdx = cards.length - 1;
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        _proto.updateHandDealer = function updateHandDealer(cards, bestSum) {
          var _this23 = this;
          this.cardActionQueue = this.cardActionQueue.then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this23$dealerCards$g, revealTime;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (_this23.dealerCards.children.length > 0) {
                    _this23.dealerCards.children[0].getChildByName('arrow').active = true;
                  }
                  if (_this23.lastCardIdx === 1) {
                    (_this23$dealerCards$g = _this23.dealerCards.getChildByName('1')) == null || _this23$dealerCards$g.destroy();
                  }
                  revealTime = cards.length - _this23.lastCardIdx;
                  _context2.next = 5;
                  return _this23.showDealerCardsAsync(_this23.lastCardIdx, cards);
                case 5:
                  _this23.lastCardIdx = cards.length;
                  setTimeout(function () {
                    _this23.lblDealerSum.node.parent.active = true;
                    _this23.lblDealerSum.string = bestSum.toString();
                    if (bestSum > 21) {
                      _this23.dealerCards.children.forEach(function (cardNode) {
                        cardNode.getChildByName('mask').active = true;
                      });
                      _this23.lblDealerSum.string = App.instance.getTextLang('ca221');
                    }
                    if (bestSum === 21 && _this23.dealerCards.children.length === 2) {
                      _this23.dealerCardBlackjack.active = true;
                    }
                  }, revealTime * 1000);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        };
        _proto.moveCardFromMachine = function moveCardFromMachine(card, cardIndex, player, isSplit, shouldUpdateDeckCount) {
          var _player,
            _player2,
            _this24 = this;
          if (cardIndex === void 0) {
            cardIndex = -1;
          }
          if (player === void 0) {
            player = null;
          }
          if (isSplit === void 0) {
            isSplit = false;
          }
          if (shouldUpdateDeckCount === void 0) {
            shouldUpdateDeckCount = true;
          }
          var cardParent = card.parent;
          var layout = cardParent == null ? void 0 : cardParent.getComponent(Layout);
          if (layout) {
            layout.enabled = false;
            layout.updateLayout();
          }
          (_player = player) == null || _player.hideTurnMain();
          (_player2 = player) == null || _player2.hideTurnSplit();
          var worldPos = this.blackjackMachine.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
          var startPos = cardParent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          var endPos = card.getPosition().clone();
          var sprite = card.getChildByName('sprite');
          if (sprite) {
            var spriteComp = sprite.getComponent(Sprite);
            if (spriteComp) spriteComp.spriteFrame = this.cardBack;
          } else {
            var _spriteComp = card.getComponent(Sprite);
            if (_spriteComp) _spriteComp.spriteFrame = this.cardBack;
          }
          card.setPosition(startPos);
          card.active = true;
          tween(card).to(0.5, {
            position: endPos
          }, {
            easing: 'sineOut'
          }).call(function () {
            if (cardIndex !== -1) {
              _this24.flipCard(card, cardIndex);
              if (player && player.meTurn) {
                if (isSplit) {
                  if (cardParent.children.length > 1) {
                    player.showTurnSplit();
                  }
                } else {
                  player.showTurnMain();
                }
              }
            }
            if (layout) {
              layout.enabled = true;
              layout.updateLayout();
            }
            if (shouldUpdateDeckCount && cardIndex != -1) {
              _this24.lblDeck.string = (parseInt(_this24.lblDeck.string) - 1).toString();
            }
          }).start();
        };
        _proto.flipCard = function flipCard(card, cardIndex) {
          var _this25 = this;
          tween(card).to(0.2, {
            scale: new Vec3(0, 1, 1)
          }).call(function () {
            var sprite = card.getChildByName('sprite');
            var spriteComp = sprite ? sprite.getComponent(Sprite) : card.getComponent(Sprite);
            if (spriteComp) {
              spriteComp.spriteFrame = _this25.cardFronts[cardIndex];
            }
          }).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.showGuide = function showGuide() {
          this.guideBG.active = true;
          this.guide.active = true;
        };
        _proto.hideGuide = function hideGuide() {
          this.guideBG.active = false;
          this.guide.active = false;
        };
        return BlackJackPlay;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chipNodes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "boxSettingContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mePlayer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblDeck", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "blackjackMachine", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "cardBack", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cardFronts", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "chipContainer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "countdownSecond", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "progressSprite", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteGreen", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteYellow", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteRed", [_dec19], {
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
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "popupRank", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "editBoxChat", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "dealerNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "dealerCardContainer", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "dealerCards", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "dealerCard", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "lblDealerSum", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "dealerCardBlackjack", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "labelDealerNotify", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "inGameButtons", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "bottomBarBet", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableRebet", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableBetX2", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableClearBet", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableFinishBet", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "bottomBarDeal", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "nodeInsurance", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "nodeEvenMoney", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "boxHelp", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameBetVip", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameBetNormal", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameActiveBetVip", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameActiveBetNormal", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "arrayNodesBet", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "guideBG", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec47], {
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

System.register("chunks:///_virtual/BlackJack.Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Player.ts', './BlackJack.Play.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Sprite, SpriteFrame, Tween, tween, v3, UIOpacity, UITransform, instantiate, CasinoPlayer, BlackJackPlay, Utils;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
    }, function (module) {
      CasinoPlayer = module.default;
    }, function (module) {
      BlackJackPlay = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _class3;
      cclegacy._RF.push({}, "8562a3mJwtCTokAGXFqZIWU", "BlackJack.Player", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BlackJackPlayer = exports('default', (_dec = menu("BlackJack/Player"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([Node]), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property([Node]), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Sprite), _dec16 = property(SpriteFrame), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_CasinoPlayer) {
        _inheritsLoose(BlackJackPlayer, _CasinoPlayer);
        function BlackJackPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CasinoPlayer.call.apply(_CasinoPlayer, [this].concat(args)) || this;
          _this.STATUS = {
            Bust: 0,
            DoubleDown: 1,
            Stand: 2,
            Split: 3,
            Hit: 4
          };
          _this.RESULT_STATUS = {
            WIN: 0,
            LOSE: 1,
            DRAW: 2,
            BLACKJACK: 3,
            BUST: 4
          };
          _initializerDefineProperty(_this, "statusNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betAmount", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "status", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCardContainer", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCards", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCard", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblMainSum", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultStatus", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectAvatarWin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "splitCardContainer", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "splitCards", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "splitCard", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSplitSum", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSprite", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteGreen", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteYellow", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteRed", _descriptor17, _assertThisInitialized(_this));
          _this.totalBetAmount = 0;
          _this.lastMainCardIdx = 0;
          _this.lastSplitCardIdx = 0;
          _this.betLogs = [];
          _this.meTurn = false;
          _this.isShowedTurnMain = false;
          _this.hasSplit = false;
          _this.playerTimeoutFunction = null;
          return _this;
        }
        var _proto = BlackJackPlayer.prototype;
        _proto.start = function start() {
          BlackJackPlayer.instance = this;
        };
        _proto.leave = function leave() {
          _CasinoPlayer.prototype.leave.call(this);
          this.resetTable();
        };
        _proto.set = function set(data) {
          _CasinoPlayer.prototype.set.call(this, data);
          this.resetTable();
        };
        _proto.resetTable = function resetTable() {
          this.totalBetAmount = 0;
          this.isWin = false;
          this.betLogs = [];
          this.mainCardContainer.active = false;
          this.splitCardContainer.active = false;
          this.statusNode.getChildByName('checkmark').active = false;
          this.betAmount.active = false;
          this.effectAvatarWin.active = false;
          for (var i = 0; i < this.resultStatus.length; i++) {
            this.resultStatus[i].active = false;
          }
          for (var _i = 0; _i < this.status.length; _i++) {
            this.status[_i].active = false;
          }
          this.hideReady();
          this.hideRegisterQuit();
          this.hideWinAnimation();
          this.progressSprite.node.active = false;
          this.hideTurnMain();
          this.hideTurnSplit();
          this.meTurn = false;
          this.hasSplit = false;
          this.isShowedTurnMain = false;
        };
        _proto.handleCardMain = function handleCardMain(cards, sum, bestSum, isUpdate, initialSplit) {
          if (bestSum === void 0) {
            bestSum = 0;
          }
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          if (initialSplit === void 0) {
            initialSplit = false;
          }
          this.showTurnMain();
          this.handleCards(this.mainCardContainer, this.mainCards, this.lblMainSum, this.mainCard, cards, sum, bestSum, isUpdate, false, initialSplit);
        };
        _proto.handleCardSplit = function handleCardSplit(cards, sum, bestSum, isUpdate, initialSplit) {
          if (bestSum === void 0) {
            bestSum = 0;
          }
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          if (initialSplit === void 0) {
            initialSplit = false;
          }
          this.showTurnSplit();
          this.hasSplit = true;
          this.handleCards(this.splitCardContainer, this.splitCards, this.lblSplitSum, this.splitCard, cards, sum, bestSum, isUpdate, true, initialSplit);
        };
        _proto.handleCards = function handleCards(container, cardsNode, label, prefab, cards, sum, bestSum, isUpdate, isSplit, initialSplit) {
          var _this2 = this;
          if (bestSum === void 0) {
            bestSum = 0;
          }
          if (isUpdate === void 0) {
            isUpdate = false;
          }
          if (isSplit === void 0) {
            isSplit = false;
          }
          if (initialSplit === void 0) {
            initialSplit = false;
          }
          if (!isUpdate) {
            container.active = true;
            cardsNode.removeAllChildren();
            label.node.parent.active = false;
            label.string = "";
          }
          if (isUpdate && initialSplit && !isSplit) {
            this.lastMainCardIdx = 1;
            label.string = sum.join("/");
            cardsNode.children.forEach(function (child, idx) {
              if (idx !== 0) {
                child.removeFromParent();
              }
            });
            return;
          }
          var lastIdxProp = isSplit ? 'lastSplitCardIdx' : 'lastMainCardIdx';
          var fromIdx = isUpdate ? this[lastIdxProp] : 0;
          var _loop = function _loop(i) {
            var cardNode = instantiate(prefab);
            cardNode.getChildByName('arrow').active = false;
            cardNode.parent = cardsNode;
            cardNode.active = false;
            _this2.scheduleOnce(function () {
              BlackJackPlay.instance.moveCardFromMachine(cardNode, cards[i], _this2, isSplit, !initialSplit);
            }, i - fromIdx);
          };
          for (var i = fromIdx; i < cards.length; i++) {
            _loop(i);
          }
          this.scheduleOnce(function () {
            if (isUpdate) {
              label.string = bestSum.toString();
              if (bestSum > 21) {
                _this2.updateStatus(_this2.STATUS.Bust);
                cardsNode.children.forEach(function (cardNode) {
                  cardNode.getChildByName('mask').active = true;
                });
              }
              if (bestSum >= 21 && _this2.id === BlackJackPlay.instance.mePlayer.id && (!_this2.hasSplit || isSplit)) {
                _this2.resetTimeout();
                BlackJackPlay.instance.inGameButtons.forEach(function (button) {
                  button.getChildByName('disable').active = true;
                });
              }
            } else {
              label.node.parent.active = true;
              label.string = sum.join("/");
              if (sum.includes(21)) {
                _this2.showResult(BlackJackPlayer.instance.RESULT_STATUS.BLACKJACK);
              }
            }
          }, cards.length - fromIdx);
          this[lastIdxProp] = cards.length;
        };
        _proto.updateBetAmount = function updateBetAmount(coin) {
          this.betLogs.push(coin);
          this.totalBetAmount += coin;
          this.betAmount.active = true;
          this.betAmount.getComponentInChildren(Label).string = Utils.formatNumber(this.totalBetAmount);
        };
        _proto.clearBetAmount = function clearBetAmount() {
          this.totalBetAmount = 0;
          this.betLogs = [];
          this.betAmount.active = false;
          this.betAmount.getComponentInChildren(Label).string = "0";
        };
        _proto.updateStatus = function updateStatus(status) {
          for (var i = 0; i < this.status.length; i++) {
            this.status[i].active = i === status;
          }
        };
        _proto.showResult = function showResult(status) {
          for (var i = 0; i < this.resultStatus.length; i++) {
            this.resultStatus[i].active = i === status;
          }
          for (var _i2 = 0; _i2 < this.status.length; _i2++) {
            this.status[_i2].active = false;
          }
          if (status === this.RESULT_STATUS.WIN) {
            this.effectAvatarWin.active = true;
          }
          if (status === this.RESULT_STATUS.BLACKJACK) {
            var nodeBlackJack = this.resultStatus[this.RESULT_STATUS.BLACKJACK].getChildByName('blackjack');
            if (nodeBlackJack) {
              Tween.stopAllByTarget(nodeBlackJack);
              tween(nodeBlackJack).repeatForever(tween().to(0.5, {
                scale: v3(1.1, 1.1, 1.1)
              }).to(0.5, {
                scale: v3(1.0, 1.0, 1.0)
              })).start();
            }
          }
        };
        _proto.resetTimeout = function resetTimeout() {
          this.unschedule(this.playerTimeoutFunction);
          this.progressSprite.node.active = false;
          this.progressSprite.fillRange = 0;
          this.progressSprite.spriteFrame = this.progressSpriteGreen;
          this.progressSprite.node.setScale(v3(-1, 1, 1));
          this.hideTurnMain();
          this.hideTurnSplit();
        };
        _proto.updateTimeout = function updateTimeout(timeout) {
          var _this3 = this;
          this.progressSprite.node.active = true;
          var totalTime = timeout;
          var elapsed = 0;
          this.schedule(this.playerTimeoutFunction = function () {
            timeout -= 0.05;
            if (timeout <= 0) {
              _this3.unschedule(_this3.playerTimeoutFunction);
              _this3.progressSprite.node.active = false;
              if (_this3.id === BlackJackPlay.instance.mePlayer.id) {
                BlackJackPlay.instance.inGameButtons.forEach(function (button) {
                  button.getChildByName('disable').active = true;
                });
              }
              return;
            }
            elapsed += 0.05;
            var percent = Math.min(elapsed / totalTime, 1);
            _this3.progressSprite.fillRange = percent;
            _this3.progressSprite.spriteFrame = percent < 0.5 ? _this3.progressSpriteGreen : percent < 0.8 ? _this3.progressSpriteYellow : _this3.progressSpriteRed;
            _this3.progressSprite.node.setScale(v3(-1, 1, 1));
          }, 0.05);
        };
        _proto.blinkSprite = function blinkSprite(spriteNode) {
          if (!spriteNode) return;
          var spriteOpacity = spriteNode.getComponent(UIOpacity);
          spriteOpacity.opacity = 255;
          Tween.stopAllByTarget(spriteNode);
          tween(spriteOpacity).repeatForever(tween().to(0.4, {
            opacity: 100
          }).to(0.4, {
            opacity: 255
          })).start();
        };
        _proto.stopBlinkSprite = function stopBlinkSprite(spriteNode) {
          if (!spriteNode) return;
          Tween.stopAllByTarget(spriteNode);
          spriteNode.getComponent(UIOpacity).opacity = 255;
        };
        _proto.showTurnMain = function showTurnMain() {
          var _this4 = this;
          if (!this.meTurn) return;
          this.isShowedTurnMain = true;
          this.mainCards.children.forEach(function (cardNode, index) {
            var turnSprite = cardNode.getChildByName('turn');
            var sprite = turnSprite == null ? void 0 : turnSprite.getChildByName('sprite');
            if (sprite) {
              sprite.getComponent(UITransform).anchorX = index === 0 ? 0.5 : 0;
              turnSprite.active = true;
              _this4.blinkSprite(sprite);
            }
            cardNode.getChildByName('arrow').active = index === 0;
          });
        };
        _proto.hideTurnMain = function hideTurnMain() {
          var _this5 = this;
          this.mainCards.children.forEach(function (cardNode) {
            var turnSprite = cardNode.getChildByName('turn');
            var sprite = turnSprite == null ? void 0 : turnSprite.getChildByName('sprite');
            if (sprite) {
              _this5.stopBlinkSprite(sprite);
            }
            if (turnSprite) {
              turnSprite.active = false;
            }
            cardNode.getChildByName('arrow').active = false;
          });
        };
        _proto.showTurnSplit = function showTurnSplit() {
          var _this6 = this;
          if (!this.meTurn) return;
          this.splitCards.children.forEach(function (cardNode, index) {
            var turnSprite = cardNode.getChildByName('turn');
            var sprite = turnSprite == null ? void 0 : turnSprite.getChildByName('sprite');
            if (sprite) {
              sprite.getComponent(UITransform).anchorX = index === 0 ? 0.5 : 0;
              turnSprite.active = true;
              _this6.blinkSprite(sprite);
            }
            cardNode.getChildByName('arrow').active = index === 0;
          });
        };
        _proto.hideTurnSplit = function hideTurnSplit() {
          var _this7 = this;
          this.splitCards.children.forEach(function (cardNode) {
            var turnSprite = cardNode.getChildByName('turn');
            var sprite = turnSprite == null ? void 0 : turnSprite.getChildByName('sprite');
            if (sprite) {
              _this7.stopBlinkSprite(sprite);
            }
            if (turnSprite) {
              turnSprite.active = false;
            }
            cardNode.getChildByName('arrow').active = false;
          });
        };
        return BlackJackPlayer;
      }(CasinoPlayer), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "statusNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betAmount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mainCardContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainCards", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainCard", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblMainSum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "resultStatus", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effectAvatarWin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "splitCardContainer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "splitCards", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "splitCard", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblSplitSum", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "progressSprite", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteGreen", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteYellow", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteRed", [_dec18], {
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
  r('virtual:///prerequisite-imports/BlackJack', 'chunks:///_virtual/BlackJack'); 
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