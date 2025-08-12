System.register("chunks:///_virtual/RongHo", ['./RongHo.Play.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RongHo.Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Player.ts', './App.ts', './DragonTigerSignalRClient.ts', './Casino.Lobby.ts', './Config.ts', './BroadcastListener.ts', './Utils.ts', './BundleControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, Prefab, sys, Tween, Color, tween, Animation, UIOpacity, size, v3, UITransform, instantiate, Vec3, Component, CasinoPlayer, App, DragonTigerSignalRClient, CasinoLobby, Configs, BroadcastReceiver, Utils, BundleControl;
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
      sys = module.sys;
      Tween = module.Tween;
      Color = module.Color;
      tween = module.tween;
      Animation = module.Animation;
      UIOpacity = module.UIOpacity;
      size = module.size;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CasinoPlayer = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      DragonTigerSignalRClient = module.default;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _class3;
      cclegacy._RF.push({}, "349fbvreCpKhqN0KiO30n14", "RongHo.Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PHASE = /*#__PURE__*/function (PHASE) {
        PHASE[PHASE["NONE"] = 0] = "NONE";
        PHASE[PHASE["BET"] = 1] = "BET";
        PHASE[PHASE["DEAL"] = 2] = "DEAL";
        PHASE[PHASE["RESULT"] = 3] = "RESULT";
        return PHASE;
      }(PHASE || {});
      var RongHoPlay = exports('default', (_dec = menu("RongHo/Play"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property([Sprite]), _dec8 = property(SpriteFrame), _dec9 = property([SpriteFrame]), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property([CasinoPlayer]), _dec14 = property(CasinoPlayer), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property([Node]), _dec21 = property([Label]), _dec22 = property(Label), _dec23 = property(Sprite), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(Node), _dec28 = property(Prefab), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property([SpriteFrame]), _dec37 = property(Label), _dec38 = property([Label]), _dec39 = property(Node), _dec40 = property(Label), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RongHoPlay, _Component);
        function RongHoPlay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roomDetail", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listTableSpr", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tableSpr", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipNodes", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeMenu", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteCards", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardBack", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardFronts", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragonTigerMachine", _descriptor9, _assertThisInitialized(_this));
          // JOIN ROOM
          _initializerDefineProperty(_this, "lblDeck", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblToast", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "players", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mePlayer", _descriptor13, _assertThisInitialized(_this));
          // BET
          _this.flagLog = -1;
          _this.betLogs = [];
          _initializerDefineProperty(_this, "nodeDisableClearBet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableRebet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableBetX2", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableFinishBet", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipContainer", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betPositions", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetPositions", _descriptor20, _assertThisInitialized(_this));
          _this.betValues = [];
          _initializerDefineProperty(_this, "countdownSecond", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSprite", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteGreen", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteYellow", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteRed", _descriptor25, _assertThisInitialized(_this));
          _this.amounts = [];
          _this.amounts_1 = [1, 5, 10, 50, 100];
          _this.amounts_2 = [1, 2, 10, 20, 100];
          _this.minBet = 0;
          _this.amountSelected = 0;
          _this.sessionId = 0;
          _this.roomId = void 0;
          _this.roomValue = void 0;
          _this.currency = void 0;
          _initializerDefineProperty(_this, "boxSoiCau", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupRank", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor28, _assertThisInitialized(_this));
          // CAU
          _initializerDefineProperty(_this, "listCauMini", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauMini", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauBig", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauBig", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauBigDetail", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauBigDetail", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cauSpr", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSessionCau", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listLabelCau", _descriptor37, _assertThisInitialized(_this));
          _this.LABEL_CAU = ["ca226", "ca227", "ca42", "ca228", "ca229", "ca230", "ca231"];
          //BOX DEALER
          _initializerDefineProperty(_this, "dealerNode", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelDealerNotify", _descriptor39, _assertThisInitialized(_this));
          //BET TABLE
          _initializerDefineProperty(_this, "betTableVip", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betTableNormal", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guideBG", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guide", _descriptor43, _assertThisInitialized(_this));
          _this.chatInGame = null;
          return _this;
        }
        var _proto = RongHoPlay.prototype;
        _proto.init = function init(roomValue, currency) {
          this.roomValue = roomValue;
          this.currency = currency;
        };
        _proto.start = function start() {
          var _this2 = this;
          RongHoPlay.instance = this;
          App.instance.showLoading(true);
          DragonTigerSignalRClient.getInstance().send('EnterRoom', [this.roomValue, this.currency], function (data) {
            if (data.c < 0) {
              App.instance.alertDialog.showMsg(DragonTigerSignalRClient.getErrMsg(data.c));
              _this2.node.destroy();
              return;
            }
            _this2.joinRoom(data.r);
            App.instance.showLoading(false);
            if (sys.localStorage.getItem("CA_RH_first_time") === null) {
              sys.localStorage.setItem("CA_RH_first_time", "1");
              _this2.showGuide();
            }
          });
          this.betTableNormal.active = !CasinoLobby.instance.isTableVip;
          this.betTableVip.active = CasinoLobby.instance.isTableVip;
          this.flagLog = -1;
        };
        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this.spriteCards.forEach(function (card) {
            card.spriteFrame = _this3.cardBack;
          });
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
          this.spriteCards.forEach(function (card) {
            card.spriteFrame = _this3.cardBack;
          });
          this.betPositions.forEach(function (betNode, p) {
            betNode.on(Node.EventType.TOUCH_END, function () {
              if (_this3.amountSelected == 0) {
                return;
              }
              _this3.actBet(_this3.amountSelected, p + 1);
            });
          });
          DragonTigerSignalRClient.getInstance().receive('roomData', function (data) {
            if (data.c < 0) {
              _this3.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            _this3.lblDeck.string = data.r.Deck + "";
            _this3.sessionId = data.r.SessionId;
            _this3.roomDetail.getChildByName('RoomSession').getComponent(Label).string = App.instance.getTextLang('txt_session') + (": #" + _this3.sessionId);
            _this3.lblSessionCau.string = "#" + _this3.sessionId;
            _this3.handleSession(data.r.Session);
            data.r.Players.forEach(function (player) {
              var playerObj = _this3.getAllPlayersById(player.AccountId);
              if (playerObj) {
                playerObj.setCoin(player.Balance);
              }
            });
          });
          DragonTigerSignalRClient.getInstance().receive('joinRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            if (data.r.AccountId != Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              _this3.randomFreePlayer().set(data.r);
            }
          });
          DragonTigerSignalRClient.getInstance().receiveArray('recieveMessage', function (accountId, _nickname, content) {
            var playerRM = _this3.getAllPlayersById(accountId);
            playerRM.showChatMsg(content);
          });
          DragonTigerSignalRClient.getInstance().receive('leaveRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            for (var i = 0; i < data.r.length; i++) {
              var item = data.r[i];
              if (item.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                if (item.reason < 0) {
                  App.instance.alertDialog.showMsg(App.instance.getTextLang("ca" + item.reason));
                }
                DragonTigerSignalRClient.getInstance().dontReceive();
                BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
                _this3.node.destroy();
              } else {
                _this3.getPlayerById(item.id).leave();
              }
            }
          });
          DragonTigerSignalRClient.getInstance().receive('registerLeavingRoom', function (data) {
            var playerRLR = _this3.getAllPlayersById(data.r.id);
            if (data.r.status) {
              playerRLR.showRegisterQuit();
            } else {
              playerRLR.hideRegisterQuit();
            }
          });
          DragonTigerSignalRClient.getInstance().receive('rejectBetting', function (data) {
            var rejectedPlayers = data.map(function (id) {
              return _this3.getPlayerById(id).lblNickname.string;
            }).join(", ");
            _this3.showToast("Reject betting from " + rejectedPlayers);
          });
          DragonTigerSignalRClient.getInstance().receive('clearBetting', function (data) {
            var playerCC_Id = data.r.id;
            var playerCC = _this3.getPlayerById(playerCC_Id);
            _this3.chipContainer.children.filter(function (child) {
              return child.name.includes(playerCC_Id);
            }).forEach(function (chip) {
              _this3.moveChipToPlayer(chip, playerCC);
            });
            _this3.cancelBet(playerCC_Id);
            _this3.getPlayerById(playerCC_Id).setCoin(data.r.balance);
          });
          DragonTigerSignalRClient.getInstance().receive('confirmBetting', function (data) {
            _this3.getAllPlayersById(data.r.id).showReady();
          });
          DragonTigerSignalRClient.getInstance().receive('playerOtherDevice', function (data) {
            _this3.showToast(DragonTigerSignalRClient.getErrMsg(data));
          });
          DragonTigerSignalRClient.getInstance().receive('connectionChanged', function (data) {
            var playerCC = _this3.getPlayerById(data.r.id);
            _this3.showToast(playerCC.lblNickname.string + " " + (data.status ? "connected" : "disconnected"));
            if (data.status) {
              playerCC.leave();
            }
          });
          DragonTigerSignalRClient.getInstance().receive('playerBet', function (data) {
            if (data.c < 0) {
              _this3.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            var player = _this3.getPlayerById(data.r.id);
            player.setCoin(data.r.balance);
            _this3.placeBet(player, data.r.amount, data.r.gate);
            _this3.saveBetValues(data.r.id, data.r.amount, data.r.gate);
          });
        };
        _proto.saveBetValues = function saveBetValues(id, amount, gate) {
          if (!Array.isArray(this.betValues[gate - 1])) {
            this.betValues[gate - 1] = [];
          }
          this.betValues[gate - 1].push({
            id: id,
            amount: amount
          });
          var totalBet = this.betValues[gate - 1].reduce(function (sum, bet) {
            return sum + bet.amount;
          }, 0);
          this.lblBetPositions[gate - 1].string = Utils.formatMoney(totalBet, true);
          this.lblBetPositions[gate - 1].node.active = totalBet > 0;
        };
        _proto.cancelBet = function cancelBet(accountId) {
          var _this4 = this;
          this.betValues.forEach(function (bets, index) {
            if (Array.isArray(bets)) {
              _this4.betValues[index] = bets.filter(function (bet) {
                return bet.id !== accountId;
              });
              var totalBet = _this4.betValues[index].reduce(function (sum, bet) {
                return sum + bet.amount;
              }, 0);
              _this4.lblBetPositions[index].string = Utils.formatMoney(totalBet, true);
              _this4.lblBetPositions[index].node.active = totalBet > 0;
            }
          });
        };
        _proto.joinRoom = function joinRoom(data) {
          var _this5 = this;
          this.roomId = data.Id;
          this.sessionId = data.SessionId;
          this.lblDeck.string = data.Deck + "";
          this.minBet = data.Value;
          this.tableSpr.spriteFrame = this.listTableSpr[data.Currency];
          this.lblSessionCau.string = "#" + this.sessionId;
          this.roomDetail.getChildByName('RoomTable').getComponent(Label).string = (data.Currency == 0 ? App.instance.getTextLang('tb113') : App.instance.getTextLang('tb112')) + (": " + data.Id);
          this.roomDetail.getChildByName('RoomValue').getComponent(Label).string = App.instance.getTextLang('iap38') + ': ' + Utils.formatMoney(data.Value) + ' ' + (data.Currency == 0 ? App.instance.getTextLang('txt_coin') : 'Tipzo');
          this.roomDetail.getChildByName('RoomSession').getComponent(Label).string = App.instance.getTextLang('txt_session') + (": #" + data.SessionId);
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
          this.betValues = [];
          for (var iBet = 0; iBet < this.lblBetPositions.length; iBet++) {
            this.lblBetPositions[iBet].node.active = false;
            this.lblBetPositions[iBet].string = '0';
          }
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
          this.countdownSecond.node.parent.active = false;
          if (session.Phrase == PHASE.NONE) {
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            return;
          }
          if (session.Phrase == PHASE.BET) {
            this.spriteCards.forEach(function (card) {
              return card.node.active = false;
            });
            this.flagLog++;
            this.betLogs = this.betLogs.filter(function (log) {
              return log.flag == _this6.flagLog - 1;
            });
            dealerBET.active = true;
            dealerBET.getComponent(Animation).play();
            var currency = this.currency == 0 ? App.instance.getTextLang('txt_coin') : 'Tipzo';
            var messages = [App.instance.getTextLang('ca157'), App.instance.getTextLang('ca150') + (" " + Utils.formatNumber(this.minBet) + " " + currency), App.instance.getTextLang('ca161'), App.instance.getTextLang('ca162')];
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
            this.updateTimeout(session.Timeout);
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = this.betLogs.length == 0;
            this.nodeDisableBetX2.active = this.betLogs.length == 0;
            this.nodeDisableFinishBet.active = true;
            for (var i = 0; i < this.betPositions.length; i++) {
              this.betPositions[i].getChildByName("WIN").active = false;
            }
            for (var iBet = 0; iBet < this.lblBetPositions.length; iBet++) {
              this.lblBetPositions[iBet].node.active = false;
            }
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.boxWin.active = false;
              player.hideReady();
              player.hideRegisterQuit();
              player.hideWinAnimation();
            });
            this.chipContainer.removeAllChildren();
            return;
          }
          if (session.Phrase == PHASE.DEAL) {
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.hideReady();
            });
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            this.labelDealerNotify.string = App.instance.getTextLang('ca110');
            // this.updateTimeout(session.Timeout);
            this.hideCards();
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = true;
            this.nodeDisableBetX2.active = true;
            this.nodeDisableFinishBet.active = true;
          }
          if (session.Phrase == PHASE.RESULT) {
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            this.labelDealerNotify.string = App.instance.getTextLang('me18');
            // this.updateTimeout(session.Timeout);
            this.betValues = [0, 0, 0, 0, 0, 0, 0];
            for (var iBetR = 0; iBetR < this.lblBetPositions.length; iBetR++) {
              this.lblBetPositions[iBetR].node.active = false;
              this.lblBetPositions[iBetR].string = '0';
            }
            this.revealCards(session.DragonHand.Cards[0], session.TigerHand.Cards[0]);
            this.scheduleOnce(function () {
              _this6.showResult(session.Result);
              session.Prizes.forEach(function (item) {
                var player = _this6.getAllPlayersById(item.AccountId);
                player.boxWin.active = true;
                player.boxWin.getChildByName('win').active = true;
                player.boxWin.getChildByName('lose').active = false;
                player.isWin = true;
                player.showWinAnimation();
                _this6.chipContainer.children.filter(function (child) {
                  return child.name.includes(item.AccountId);
                }).forEach(function (chip) {
                  var gate = parseInt(chip.name.replace(item.AccountId + "__", ""));
                  if (_this6.isWinGate(gate)) {
                    _this6.moveChipToPlayer(chip, player, true);
                  } else {
                    _this6.moveChipToDealer(chip);
                  }
                });
              });
              var playerPrizeIds = session.Prizes.map(function (item) {
                return item.AccountId;
              });
              [_this6.mePlayer].concat(_this6.players).filter(function (player) {
                return player.id !== "" && !playerPrizeIds.includes(player.id);
              }).forEach(function (player) {
                var isBet = false;
                _this6.chipContainer.children.filter(function (child) {
                  return child.name.includes(player.id);
                }).forEach(function (chip) {
                  isBet = true;
                  _this6.moveChipToDealer(chip);
                });
                _this6.scheduleOnce(function () {
                  if (isBet) {
                    player.boxWin.active = true;
                    player.boxWin.getChildByName('win').active = false;
                    player.boxWin.getChildByName('lose').active = true;
                  }
                }, 0.5);
              });
              _this6.updateStatistic();
            }, 1);
          }
        };
        _proto.showResult = function showResult(result) {
          for (var iR = 0; iR < this.betPositions.length; iR++) {
            if (result.WinGates.includes(iR + 1)) {
              this.betPositions[iR].getChildByName("WIN").active = true;
            }
          }
        };
        _proto.isWinGate = function isWinGate(gate) {
          return this.betPositions[gate - 1].getChildByName("WIN").active;
        };
        _proto.updateTimeout = function updateTimeout(timeout) {
          var _this7 = this;
          var totalTime = timeout;
          var elapsed = 0;
          this.countdownSecond.node.parent.active = true;
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
        _proto.getChipByAmount = function getChipByAmount(amount) {
          var _this8 = this;
          return this.chipNodes.children.find(function (_chip, index) {
            return _this8.amounts[index] === amount / _this8.minBet;
          }).getChildByName("chip");
        };
        _proto.getAllPlayersById = function getAllPlayersById(id) {
          return [this.mePlayer].concat(this.players).find(function (player) {
            return player.id === id;
          });
        };
        _proto.toggleMenu = function toggleMenu() {
          this.nodeMenu.active = !this.nodeMenu.active;
        };
        _proto.revealCards = function revealCards(dragonIdx, tigerIdx) {
          if (dragonIdx === void 0) {
            dragonIdx = -1;
          }
          if (tigerIdx === void 0) {
            tigerIdx = -1;
          }
          this.flipCard(this.spriteCards[0], dragonIdx);
          this.flipCard(this.spriteCards[1], tigerIdx);
        };
        _proto.hideCards = function hideCards() {
          var _this9 = this;
          this.spriteCards[0].node.active = true;
          this.moveCardFromMachine(this.spriteCards[0].node);
          this.scheduleOnce(function () {
            _this9.spriteCards[1].node.active = true;
            _this9.moveCardFromMachine(_this9.spriteCards[1].node);
          }, 1);
        };
        _proto.flipCard = function flipCard(card, cardIndex) {
          var _this10 = this;
          var newSize = size(78, 110);
          tween(card.node).to(0.3, {
            scale: v3(0, 1, 1)
          }).call(function () {
            card.spriteFrame = _this10.cardFronts[cardIndex];
            card.node.getComponent(UITransform).setContentSize(newSize);
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.clearBetting = function clearBetting() {
          var _this11 = this;
          if (this.nodeDisableClearBet.active) {
            return;
          }
          DragonTigerSignalRClient.getInstance().send('ClearBetting', [], function (data) {
            if (data.c < 0) {
              _this11.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            _this11.chipContainer.children.filter(function (child) {
              return child.name.includes(_this11.mePlayer.id);
            }).forEach(function (chip) {
              _this11.moveChipToPlayer(chip, _this11.mePlayer);
            });
            _this11.nodeDisableClearBet.active = true;
            _this11.nodeDisableRebet.active = true;
            _this11.nodeDisableBetX2.active = true;
            _this11.nodeDisableFinishBet.active = true;
            _this11.betLogs = [];
            _this11.mePlayer.setCoin(data.r.balance);
            _this11.cancelBet(data.r.id);
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
              _this13.actBet(log.amount, log.gate);
            }
          });
        };
        _proto.actBet = function actBet(amount, gate) {
          var _this14 = this;
          DragonTigerSignalRClient.getInstance().send('Bet', [amount, gate], function (data) {
            if (data.c < 0) {
              _this14.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            _this14.nodeDisableClearBet.active = false;
            _this14.nodeDisableRebet.active = true;
            _this14.nodeDisableBetX2.active = true;
            _this14.nodeDisableFinishBet.active = false;
            _this14.placeBet(_this14.mePlayer, data.r.amount, data.r.gate);
            _this14.mePlayer.setCoin(data.r.balance);
            _this14.saveBetValues(data.r.id, data.r.amount, data.r.gate);
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
          DragonTigerSignalRClient.getInstance().send('FinishBetting', [], function (data) {
            if (data.c < 0) {
              _this15.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            _this15.mePlayer.showReady();
          });
        };
        _proto.updateStatistic = function updateStatistic() {
          var _this16 = this;
          this.listCauMini.removeAllChildren();
          DragonTigerSignalRClient.getInstance().send('GetGameHistory', [this.roomId], function (data) {
            if (data.c < 0) {
              _this16.showToast(DragonTigerSignalRClient.getErrMsg(data.c));
              return;
            }
            _this16.drawCau(data.r);
          });
        };
        _proto.closePlay = function closePlay() {
          var _this17 = this;
          DragonTigerSignalRClient.getInstance().send('ExitRoom', [], function (data) {
            if (data.c == 0) {
              DragonTigerSignalRClient.getInstance().dontReceive();
              BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
              _this17.node.destroy();
              return;
            }
            if (data.r.status) {
              _this17.mePlayer.showRegisterQuit();
              _this17.showToast(App.instance.getTextLang('me8'));
            } else {
              _this17.mePlayer.hideRegisterQuit();
              _this17.showToast(App.instance.getTextLang('me9'));
            }
          });
        };
        _proto.placeBet = function placeBet(player, amount, position) {
          var chip = instantiate(this.getChipByAmount(amount));
          chip.setScale(0.5, 0.5, 0.5);
          this.chipContainer.addChild(chip);
          var startPos2D = player.avatarNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          var endPos2D = this.betPositions[position - 1].getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
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
          }).start();
        };
        _proto.showToast = function showToast(msg) {
          var _this18 = this;
          this.lblToast.string = msg;
          this.lblToast.node.active = true;
          setTimeout(function () {
            if (_this18.lblToast.node) {
              _this18.lblToast.node.active = false;
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
          var _this19 = this;
          App.instance.inactivityTimer = 0;
          if (this.chatInGame == null) {
            BundleControl.loadPrefabPopup("prefabs/ChatInGame", function (prefab) {
              _this19.chatInGame = instantiate(prefab).getComponent("ChatInGame");
              _this19.node.addChild(_this19.chatInGame.node);
              _this19.chatInGame.show(Configs.InGameIds.RongHo);
            });
          } else {
            this.chatInGame.show(Configs.InGameIds.RongHo);
          }
        };
        _proto.actShowPopupRank = function actShowPopupRank() {
          var popupRank = instantiate(this.popupRank);
          this.popupContainer.addChild(popupRank);
          // @ts-ignore
          popupRank.getComponent("Casino.PopupRank").showDetail(this.currency, Configs.InGameIds.RongHo);
        };
        _proto.drawCau = function drawCau(data) {
          this.listCauBig.removeAllChildren();
          this.listCauBigDetail.removeAllChildren();
          this.listCauMini.removeAllChildren();
          var listCau = [0, 0, 0, 0, 0, 0, 0];
          for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].WinGates.length; j++) {
              var winGate = data[i].WinGates[j];
              listCau[winGate - 1]++;
              var itemBigDetail = instantiate(this.itemCauBigDetail);
              itemBigDetail.getComponent(Sprite).spriteFrame = this.cauSpr[winGate - 1];
              this.listCauBigDetail.addChild(itemBigDetail);
            }
            var result = data[i];
            var itemMini = instantiate(this.itemCauMini);
            var itemBig = instantiate(this.itemCauBig);
            if (result.Dragon > result.Tiger) {
              itemMini.getComponent(Sprite).spriteFrame = this.cauSpr[0];
              itemBig.getComponent(Sprite).spriteFrame = this.cauSpr[0];
            } else if (result.Dragon < result.Tiger) {
              itemMini.getComponent(Sprite).spriteFrame = this.cauSpr[1];
              itemBig.getComponent(Sprite).spriteFrame = this.cauSpr[1];
            } else {
              itemMini.getComponent(Sprite).spriteFrame = this.cauSpr[2];
              itemBig.getComponent(Sprite).spriteFrame = this.cauSpr[2];
            }
            this.listCauMini.addChild(itemMini);
            this.listCauBig.addChild(itemBig);
          }
          for (var iCau = 0; iCau < this.listLabelCau.length; iCau++) {
            this.listLabelCau[iCau].string = App.instance.getTextLang(this.LABEL_CAU[iCau]) + " " + listCau[iCau];
          }
        };
        _proto.moveChipToPlayer = function moveChipToPlayer(chip, player, moveFromDealerFirst) {
          var _this20 = this;
          if (moveFromDealerFirst === void 0) {
            moveFromDealerFirst = false;
          }
          var targetPos = player.node.position.clone();
          var middlePos = chip.position.clone();
          if (moveFromDealerFirst) {
            var delayStep = 0.05;
            var _loop = function _loop() {
              var cloneChip = instantiate(chip);
              cloneChip.position = _this20.dealerNode.position;
              _this20.chipContainer.addChild(cloneChip);
              tween(cloneChip).delay(i * delayStep).to(0.3, {
                position: middlePos
              }).call(function () {
                return cloneChip.destroy();
              }).start();
            };
            for (var i = 0; i < 10; i++) {
              _loop();
            }
            var totalDelay = 10 * delayStep;
            tween(chip).delay(totalDelay + 0.1).to(0.4, {
              position: targetPos
            }).call(function () {
              return chip.destroy();
            }).start();
            return;
          }
          tween(chip).to(0.5, {
            position: targetPos
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
          var _this21 = this;
          var table = this.guideBG.children[0];
          table.getChildByName("VIP").active = this.currency == 1;
          table.getChildByName("NORMAL").active = this.currency == 0;
          table.children.forEach(function (child) {
            if (child.getChildByName("VIP") == null || child.getChildByName("NORMAL") == null) return;
            child.getChildByName("VIP").active = _this21.currency == 1;
            child.getChildByName("NORMAL").active = _this21.currency == 0;
          });
          this.guideBG.active = true;
          this.guide.active = true;
        };
        _proto.hideGuide = function hideGuide() {
          this.guideBG.active = false;
          this.guide.active = false;
        };
        _proto.moveCardFromMachine = function moveCardFromMachine(card) {
          var worldPos = this.dragonTigerMachine.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          var startPos = card.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          var endPos = card.position;
          card.getComponent(Sprite).spriteFrame = this.cardBack;
          card.position = startPos;
          card.active = true;
          tween(card).to(0.5, {
            position: endPos
          }).start();
        };
        return RongHoPlay;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeMenu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteCards", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cardBack", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cardFronts", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "dragonTigerMachine", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lblDeck", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "mePlayer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableClearBet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableRebet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableBetX2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableFinishBet", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "chipContainer", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "betPositions", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lblBetPositions", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "countdownSecond", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "progressSprite", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteGreen", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteYellow", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteRed", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "boxSoiCau", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "popupRank", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "listCauMini", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "itemCauMini", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "listCauBig", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "itemCauBig", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "listCauBigDetail", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "itemCauBigDetail", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "cauSpr", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionCau", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "listLabelCau", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "dealerNode", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "labelDealerNotify", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "betTableVip", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "betTableNormal", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "guideBG", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec44], {
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
  r('virtual:///prerequisite-imports/RongHo', 'chunks:///_virtual/RongHo'); 
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