System.register("chunks:///_virtual/Baccarat", ['./Baccarat.Play.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Baccarat.Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Casino.Player.ts', './App.ts', './BaccaratSignalRClient.ts', './Casino.Lobby.ts', './Config.ts', './Utils.ts', './BundleControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Sprite, Label, Prefab, sys, Tween, Color, tween, Animation, UIOpacity, v3, Vec3, instantiate, UITransform, Component, CasinoPlayer, App, BaccaratSignalRClient, CasinoLobby, Configs, Utils, BundleControl;
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
      v3 = module.v3;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      CasinoPlayer = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      BaccaratSignalRClient = module.default;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _class3;
      cclegacy._RF.push({}, "2a984wKJORJj7bv0HehnVZK", "Baccarat.Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PHASE = /*#__PURE__*/function (PHASE) {
        PHASE[PHASE["NONE"] = 0] = "NONE";
        PHASE[PHASE["BET"] = 1] = "BET";
        PHASE[PHASE["CHIA_BAI"] = 2] = "CHIA_BAI";
        PHASE[PHASE["RESULT"] = 3] = "RESULT";
        return PHASE;
      }(PHASE || {});
      var RESULT = /*#__PURE__*/function (RESULT) {
        RESULT[RESULT["NONE"] = 0] = "NONE";
        RESULT[RESULT["BANKER_WIN"] = 1] = "BANKER_WIN";
        RESULT[RESULT["PLAYER_WIN"] = 2] = "PLAYER_WIN";
        RESULT[RESULT["TIE"] = 3] = "TIE";
        return RESULT;
      }(RESULT || {});
      var RESULT_PAIR = /*#__PURE__*/function (RESULT_PAIR) {
        RESULT_PAIR[RESULT_PAIR["NONE"] = 0] = "NONE";
        RESULT_PAIR[RESULT_PAIR["BANKER_PAIR"] = 1] = "BANKER_PAIR";
        RESULT_PAIR[RESULT_PAIR["PLAYER_PAIR"] = 2] = "PLAYER_PAIR";
        RESULT_PAIR[RESULT_PAIR["BOTH"] = 3] = "BOTH";
        return RESULT_PAIR;
      }(RESULT_PAIR || {});
      var GATE = /*#__PURE__*/function (GATE) {
        GATE[GATE["BAKER"] = 1] = "BAKER";
        GATE[GATE["PLAYER"] = 2] = "PLAYER";
        GATE[GATE["TIE"] = 3] = "TIE";
        GATE[GATE["BANKER_PAIR"] = 4] = "BANKER_PAIR";
        GATE[GATE["PLAYER_PAIR"] = 5] = "PLAYER_PAIR";
        return GATE;
      }(GATE || {});
      var BaccaratPlay = exports('default', (_dec = menu("Baccarat/Play"), _dec2 = property(Node), _dec3 = property([SpriteFrame]), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property([CasinoPlayer]), _dec9 = property(CasinoPlayer), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property([Node]), _dec19 = property([Node]), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(SpriteFrame), _dec23 = property([SpriteFrame]), _dec24 = property(Node), _dec25 = property([Node]), _dec26 = property([Label]), _dec27 = property(Label), _dec28 = property(Sprite), _dec29 = property(SpriteFrame), _dec30 = property(SpriteFrame), _dec31 = property(SpriteFrame), _dec32 = property(Node), _dec33 = property(Prefab), _dec34 = property(Node), _dec35 = property(Label), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property([Label]), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property([SpriteFrame]), _dec44 = property([SpriteFrame]), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Label), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(Node), _dec52 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaccaratPlay, _Component);
        function BaccaratPlay() {
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
          _this.flagLog = -1;
          _this.betLogs = [];
          _initializerDefineProperty(_this, "nodeDisableClearBet", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableRebet", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableBetX2", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeDisableFinishBet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baccaratMachine", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerCardSum", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerCardSum", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerCards", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerCards", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerCorner", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerCorner", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardBack", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardFronts", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipContainer", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betPositions", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetPositions", _descriptor25, _assertThisInitialized(_this));
          _this.betValues = [];
          _initializerDefineProperty(_this, "countdownSecond", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSprite", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteGreen", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteYellow", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressSpriteRed", _descriptor30, _assertThisInitialized(_this));
          _this.amounts = [];
          _this.amounts_1 = [1, 5, 10, 50, 100];
          _this.amounts_2 = [1, 2, 10, 20, 100];
          _this.minBet = 0;
          _this.amountSelected = 0;
          _this.sessionId = 0;
          _this.roomId = void 0;
          _this.roomValue = void 0;
          _this.currency = void 0;
          _initializerDefineProperty(_this, "boxSoiCau", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupRank", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor33, _assertThisInitialized(_this));
          // CAU
          _initializerDefineProperty(_this, "lblSessionCau", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauMini", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauMini", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listLabelCau", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauLeft", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauLeft", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listCauRight", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCauRight", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cauSpr", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cauLeftSpr", _descriptor43, _assertThisInitialized(_this));
          _this.LABEL_CAU = ["Banker", "Player", "Tie", "Banker Pair", "Player Pair"];
          // SHOW RESULT
          _initializerDefineProperty(_this, "dealerNode", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerWinText", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bankerWinText", _descriptor46, _assertThisInitialized(_this));
          //BOX DEALER
          _initializerDefineProperty(_this, "labelDealerNotify", _descriptor47, _assertThisInitialized(_this));
          //BET TABLE
          _initializerDefineProperty(_this, "betTableVip", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betTableNormal", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guideBG", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guide", _descriptor51, _assertThisInitialized(_this));
          _this.updateTimeoutFunction = null;
          _this.chatInGame = null;
          return _this;
        }
        var _proto = BaccaratPlay.prototype;
        _proto.init = function init(roomValue, currency) {
          this.roomValue = roomValue;
          this.currency = currency;
        };
        _proto.start = function start() {
          var _this2 = this;
          BaccaratPlay.instance = this;
          App.instance.showLoading(true);
          BaccaratSignalRClient.getInstance().send('EnterRoom', [this.roomValue, this.currency], function (data) {
            App.instance.showLoading(false);
            if (data.c < 0) {
              App.instance.alertDialog.showMsg(BaccaratSignalRClient.getErrMsg(data.c));
              _this2.node.destroy();
              return;
            }
            _this2.joinRoom(data.r);
            if (sys.localStorage.getItem("CA_BA_first_time") === null) {
              sys.localStorage.setItem("CA_BA_first_time", "1");
              _this2.showGuide();
            }
          });
          this.betTableNormal.active = !CasinoLobby.instance.isTableVip;
          this.betTableVip.active = CasinoLobby.instance.isTableVip;
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
          this.betPositions.forEach(function (betNode, p) {
            betNode.on(Node.EventType.TOUCH_END, function () {
              if (_this3.amountSelected == 0) {
                return;
              }
              _this3.actBet(_this3.amountSelected, p + 1);
            });
          });
          BaccaratSignalRClient.getInstance().receive('roomData', function (data) {
            if (data.c < 0) {
              _this3.showToast(BaccaratSignalRClient.getErrMsg(data.c));
              return;
            }
            _this3.sessionId = data.r.SessionId;
            _this3.roomDetail.getChildByName('RoomSession').getComponent(Label).string = App.instance.getTextLang('txt_session') + (": #" + _this3.sessionId);
            _this3.lblSessionCau.string = "#" + _this3.sessionId;
            _this3.handleSession(data.r.Session);
            _this3.scheduleOnce(function () {
              data.r.Players.forEach(function (player) {
                var playerObj = _this3.getAllPlayersById(player.AccountId);
                if (playerObj) {
                  playerObj.setCoin(player.Balance);
                }
              });
            }, data.r.Session.Phrase == PHASE.RESULT ? 2 : 0);
          });
          BaccaratSignalRClient.getInstance().receive('joinRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(BaccaratSignalRClient.getErrMsg(data.c));
              return;
            }
            if (data.r.AccountId != Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              _this3.randomFreePlayer().set(data.r);
            }
          });
          BaccaratSignalRClient.getInstance().receiveArray('recieveMessage', function (accountId, _nickname, content) {
            var playerRM = _this3.getAllPlayersById(accountId);
            playerRM.showChatMsg(content);
          });
          BaccaratSignalRClient.getInstance().receive('leaveRoom', function (data) {
            if (data.c < 0) {
              _this3.showToast(BaccaratSignalRClient.getErrMsg(data.c));
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
          BaccaratSignalRClient.getInstance().receive('registerLeavingRoom', function (data) {
            var playerRLR = _this3.getAllPlayersById(data.r.id);
            if (data.r.status) {
              playerRLR.showRegisterQuit();
            } else {
              playerRLR.hideRegisterQuit();
            }
          });
          BaccaratSignalRClient.getInstance().receive('rejectBetting', function (data) {
            var rejectedPlayers = data.map(function (id) {
              return _this3.getPlayerById(id).lblNickname.string;
            }).join(", ");
            _this3.showToast("Reject betting from " + rejectedPlayers);
          });
          BaccaratSignalRClient.getInstance().receive('clearBetting', function (data) {
            var playerCBId = data.r.id;
            var playerCB = _this3.getPlayerById(playerCBId);
            _this3.chipContainer.children.filter(function (child) {
              return child.name.includes(playerCBId);
            }).forEach(function (chip) {
              _this3.moveChipToPlayer(chip, playerCB);
            });
            _this3.cancelBet(playerCBId);
            playerCB.setCoin(data.r.balance);
            playerCB.hideReady();
          });
          BaccaratSignalRClient.getInstance().receive('confirmBetting', function (data) {
            [_this3.mePlayer].concat(_this3.players).find(function (player) {
              return player.id === data.r.id;
            }).showReady();
          });
          BaccaratSignalRClient.getInstance().receive('playerOtherDevice', function (data) {
            _this3.showToast(BaccaratSignalRClient.getErrMsg(data));
          });
          BaccaratSignalRClient.getInstance().receive('connectionChanged', function (data) {
            var playerCC = _this3.getPlayerById(data.r.id);
            _this3.showToast(playerCC.lblNickname.string + " " + (data.status ? "connected" : "disconnected"));
            if (data.status) {
              playerCC.leave();
            }
          });
          BaccaratSignalRClient.getInstance().receive('playerBet', function (data) {
            if (data.c < 0) {
              _this3.showToast(BaccaratSignalRClient.getErrMsg(data.c));
              return;
            }
            var player = _this3.getPlayerById(data.r.id);
            player.setCoin(data.r.balance);
            _this3.placeBet(player, data.r.amount, data.r.gate);
            _this3.saveBetValues(data.r.id, data.r.amount, data.r.gate);
          });
          BaccaratSignalRClient.getInstance().receive('updateHand', function (data) {
            _this3.moveCardFromMachine(data.IsPlayerHand ? _this3.playerCards[2] : _this3.bankerCards[2], data.Cards[2], true, false, true, data.IsPlayerHand, data.Sum);
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
          this.lblBetPositions[gate - 1].string = Utils.formatNumber(totalBet);
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
              _this4.lblBetPositions[index].string = Utils.formatNumber(totalBet);
              _this4.lblBetPositions[index].node.active = totalBet > 0;
            }
          });
        };
        _proto.joinRoom = function joinRoom(data) {
          var _this5 = this;
          this.roomId = data.Id;
          this.sessionId = data.SessionId;
          this.lblSessionCau.string = "#" + this.sessionId;
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
          this.lblBetPositions.forEach(function (child) {
            child.color = new Color().fromHEX(data.Currency == 1 ? '#00FFEF' : '#FFD498');
          });
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
          if (data.Session) {
            this.handleSession(data.Session, true);
          }
        };
        _proto.handleSession = function handleSession(session, isJoin) {
          var _this6 = this;
          if (isJoin === void 0) {
            isJoin = false;
          }
          this.unschedule(this.updateTimeoutFunction);
          var dealerNormal = this.dealerNode.getChildByName('NORMAL');
          var dealerBET = this.dealerNode.getChildByName('BET');
          dealerNormal.active = false;
          dealerBET.active = false;
          this.labelDealerNotify.string = 'Baccarat';
          if (session.Phrase == PHASE.NONE) {
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            return;
          }
          this.countdownSecond.node.parent.active = false;
          if (session.Phrase == PHASE.BET) {
            this.updateTimeout(session.Timeout);
            this.flagLog++;
            this.betLogs = this.betLogs.filter(function (log) {
              return log.flag == _this6.flagLog - 1;
            });
            dealerBET.active = true;
            dealerBET.getComponent(Animation).play();
            var currency = this.currency == 0 ? App.instance.getTextLang('txt_coin') : 'Tipzo';
            var messages = [App.instance.getTextLang('ca157'), App.instance.getTextLang('ca148') + (" " + Utils.formatNumber(this.minBet * 10) + " " + currency + " ") + App.instance.getTextLang('ca156'), App.instance.getTextLang('ca150') + (" " + Utils.formatNumber(this.minBet) + " " + currency + " ") + App.instance.getTextLang('ca151'), App.instance.getTextLang('ca148') + (" " + Utils.formatNumber(this.minBet * 100) + " " + currency + " ") + App.instance.getTextLang('ca155')];
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
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = this.betLogs.length == 0;
            this.nodeDisableBetX2.active = this.betLogs.length == 0;
            this.nodeDisableFinishBet.active = true;
            this.playerCards[0].active = false;
            this.bankerCards[0].active = false;
            this.playerCards[1].active = false;
            this.bankerCards[1].active = false;
            this.playerCards[2].active = false;
            this.bankerCards[2].active = false;
            this.playerCorner.active = false;
            this.bankerCorner.active = false;
            this.playerCardSum.active = false;
            this.bankerCardSum.active = false;
            this.playerWinText.active = false;
            this.bankerWinText.active = false;
            Tween.stopAllByTarget(this.bankerWinText);
            Tween.stopAllByTarget(this.playerWinText);
            this.playerCardSum.getComponentInChildren(Label).string = '';
            this.bankerCardSum.getComponentInChildren(Label).string = '';
            this.chipContainer.removeAllChildren();
            for (var i = 0; i < this.betPositions.length; i++) {
              var win = this.betPositions[i].getChildByName("WIN");
              win.active = false;
              var p = win.getChildByName('p');
              if (p) {
                Tween.stopAllByTarget(p);
              }
            }
            for (var iLBB = 0; iLBB < this.lblBetPositions.length; iLBB++) {
              this.lblBetPositions[iLBB].string = "0";
              this.lblBetPositions[iLBB].node.active = false;
            }
            this.betValues = [];
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.boxWin.active = false;
              player.isWin = false;
              player.hideReady();
              player.hideRegisterQuit();
              player.hideWinAnimation();
            });
          }
          if (session.Phrase == PHASE.CHIA_BAI) {
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            [this.mePlayer].concat(this.players).forEach(function (player) {
              player.hideReady();
            });
            this.nodeDisableClearBet.active = true;
            this.nodeDisableRebet.active = true;
            this.nodeDisableBetX2.active = true;
            this.nodeDisableFinishBet.active = true;
            // dealerLacBat.active = true;
            // dealerLacBat.getComponent(Animation).play();
            this.labelDealerNotify.string = App.instance.getTextLang('ca110');
            this.moveCardFromMachine(this.playerCards[0]);
            this.scheduleOnce(function () {
              _this6.moveCardFromMachine(_this6.bankerCards[0]);
            }, 0.5);
            this.scheduleOnce(function () {
              _this6.moveCardFromMachine(_this6.playerCards[1], session.PlayerHand.Cards[1]);
            }, 1);
            this.scheduleOnce(function () {
              _this6.moveCardFromMachine(_this6.bankerCards[1], session.BankerHand.Cards[1], false, true);
            }, 1.5);
            this.scheduleOnce(function () {
              _this6.flipCard(_this6.playerCards[0], session.PlayerHand.Cards[0]);
              _this6.playerCardSum.active = true;
              _this6.bankerCardSum.active = true;
            }, 2);
            this.scheduleOnce(function () {
              _this6.flipCard(_this6.bankerCards[0], session.BankerHand.Cards[0], true);
            }, 2.5);
            this.scheduleOnce(function () {
              _this6.flipCorner(_this6.playerCorner, session.PlayerHand.Sum);
            }, 3);
            this.scheduleOnce(function () {
              _this6.flipCorner(_this6.bankerCorner, session.BankerHand.Sum, true);
            }, 4.5);
          }
          if (session.Phrase == PHASE.RESULT) {
            this.labelDealerNotify.string = App.instance.getTextLang('me18');
            dealerNormal.active = true;
            dealerNormal.getComponent(Animation).play();
            this.updateStatistic();
            var result = session.Result;
            this.playerCardSum.getComponentInChildren(Label).string = result.PlayerSum + '';
            this.bankerCardSum.getComponentInChildren(Label).string = result.BankerSum + '';
            switch (result.Winner) {
              case RESULT.NONE:
                break;
              case RESULT.BANKER_WIN:
                this.showResultGate(GATE.BAKER);
                this.bankerWinText.active = true;
                var bankerWinTextOpacity = this.bankerWinText.getComponent(UIOpacity);
                tween(this.bankerWinText).repeatForever(tween().sequence(tween().parallel(tween(bankerWinTextOpacity).to(0.4, {
                  opacity: 255
                }, {
                  easing: 'sineInOut'
                }), tween().to(0.4, {
                  scale: v3(1.2, 1.2, 1.2)
                }, {
                  easing: 'backOut'
                })), tween().parallel(tween(bankerWinTextOpacity).to(0.4, {
                  opacity: 180
                }, {
                  easing: 'sineInOut'
                }), tween().to(0.4, {
                  scale: Vec3.ONE
                }, {
                  easing: 'backIn'
                })))).start();
                break;
              case RESULT.PLAYER_WIN:
                this.showResultGate(GATE.PLAYER);
                this.playerWinText.active = true;
                var playerWinTextOpacity = this.playerWinText.getComponent(UIOpacity);
                tween(this.playerWinText).repeatForever(tween().sequence(tween().parallel(tween(playerWinTextOpacity).to(0.4, {
                  opacity: 255
                }, {
                  easing: 'sineInOut'
                }), tween().to(0.4, {
                  scale: v3(1.2, 1.2, 1.2)
                }, {
                  easing: 'backOut'
                })), tween().parallel(tween(playerWinTextOpacity).to(0.4, {
                  opacity: 180
                }, {
                  easing: 'sineInOut'
                }), tween().to(0.4, {
                  scale: Vec3.ONE
                }, {
                  easing: 'backIn'
                })))).start();
                break;
              case RESULT.TIE:
                this.showResultGate(GATE.TIE);
                break;
            }
            switch (result.Pair) {
              case RESULT_PAIR.NONE:
                break;
              case RESULT_PAIR.BANKER_PAIR:
                this.showResultGate(GATE.BANKER_PAIR);
                break;
              case RESULT_PAIR.PLAYER_PAIR:
                this.showResultGate(GATE.PLAYER_PAIR);
                break;
              case RESULT_PAIR.BOTH:
                this.showResultGate(GATE.BANKER_PAIR);
                this.showResultGate(GATE.PLAYER_PAIR);
                break;
            }
            this.scheduleOnce(function () {
              _this6.showResultPrize(session.Prizes);
            }, 2);
          }
          if (isJoin) {
            session.BetLogs.forEach(function (log) {
              _this6.placeBet(_this6.getPlayerById(log.AccountId), log.Amount, log.Gate);
              _this6.saveBetValues(log.AccountId, log.Amount, log.Gate);
            });
          }
        };
        _proto.showResultGate = function showResultGate(gate) {
          var win = this.betPositions[gate - 1].getChildByName("WIN");
          win.active = true;
          var p = win.getChildByName('p');
          if (p) {
            tween(p).by(1, {
              angle: 360
            }).repeatForever().start();
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
          this.schedule(this.updateTimeoutFunction = function () {
            if (timeout < 0) {
              _this7.unschedule(_this7.updateTimeoutFunction);
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
              if (_this8.isWinGate(gate)) {
                _this8.moveChipToPlayer(chip, player, true);
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
          BaccaratSignalRClient.getInstance().send('ClearBetting', [], function (data) {
            if (data.c < 0) {
              _this9.showToast(BaccaratSignalRClient.getErrMsg(data.c));
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
            _this9.cancelBet(data.r.id);
            _this9.mePlayer.hideReady();
          });
        };
        _proto.x2Betting = function x2Betting() {
          var _this10 = this;
          if (this.nodeDisableBetX2.active) {
            return;
          }
          this.actBetFromBetLogs();
          setTimeout(function () {
            _this10.actBetFromBetLogs();
          }, 500);
        };
        _proto.reLastBet = function reLastBet() {
          if (this.nodeDisableRebet.active) {
            return;
          }
          this.actBetFromBetLogs();
        };
        _proto.actBetFromBetLogs = function actBetFromBetLogs() {
          var _this11 = this;
          this.betLogs.forEach(function (log) {
            if (log.flag == _this11.flagLog - 1) {
              _this11.actBet(log.amount, log.gate);
            }
          });
        };
        _proto.actBet = function actBet(amount, gate) {
          var _this12 = this;
          BaccaratSignalRClient.getInstance().send('Bet', [amount, gate], function (data) {
            if (data.c < 0) {
              _this12.showToast(BaccaratSignalRClient.getErrMsg(data.c));
              return;
            }
            _this12.nodeDisableClearBet.active = false;
            _this12.nodeDisableRebet.active = true;
            _this12.nodeDisableBetX2.active = true;
            _this12.nodeDisableFinishBet.active = false;
            _this12.placeBet(_this12.mePlayer, data.r.amount, data.r.gate);
            _this12.mePlayer.setCoin(data.r.balance);
            _this12.saveBetValues(data.r.id, data.r.amount, data.r.gate);
            _this12.betLogs.push({
              amount: data.r.amount,
              gate: data.r.gate,
              flag: _this12.flagLog
            });
            _this12.mePlayer.hideReady();
          });
        };
        _proto.finishBetting = function finishBetting() {
          var _this13 = this;
          if (this.nodeDisableFinishBet.active) {
            return;
          }
          BaccaratSignalRClient.getInstance().send('FinishBetting', [], function (data) {
            if (data.c < 0) {
              _this13.showToast(BaccaratSignalRClient.getErrMsg(data.c));
              return;
            }
            _this13.mePlayer.showReady();
          });
        };
        _proto.updateStatistic = function updateStatistic() {
          var _this14 = this;
          this.listCauMini.removeAllChildren();
          BaccaratSignalRClient.getInstance().send('GetGameHistory', [this.roomId], function (data) {
            if (data.c < 0) {
              _this14.showToast(BaccaratSignalRClient.getErrMsg(data.c));
              return;
            }
            _this14.drawCau(data.r);
          });
        };
        _proto.closePlay = function closePlay() {
          var _this15 = this;
          BaccaratSignalRClient.getInstance().send('ExitRoom', [], function (data) {
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
          BaccaratSignalRClient.getInstance().dontReceive();
          App.instance.gotoLobby();
        };
        _proto.getChipsFromTotal = function getChipsFromTotal(totalValue) {
          var _this16 = this;
          var result = [];
          var chipValues = this.amounts.map(function (amount) {
            return amount * _this16.minBet;
          });
          var sortedChips = chipValues.slice().sort(function (a, b) {
            return b - a;
          });
          for (var _iterator = _createForOfIteratorHelperLoose(sortedChips), _step; !(_step = _iterator()).done;) {
            var chip = _step.value;
            while (totalValue >= chip) {
              result.push(chip);
              totalValue -= chip;
            }
          }
          return result;
        };
        _proto.getChipByAmount = function getChipByAmount(amount) {
          var chipIdx = amount / this.minBet;
          return this.chipNodes.children[chipIdx].getChildByName("chip");
        };
        _proto.placeBet = function placeBet(player, amount, position) {
          var _this17 = this;
          var amounts = this.getChipsFromTotal(amount);
          if (amounts.length > 1) {
            amounts.forEach(function (amt) {
              _this17.placeBet(player, amt, position);
            });
            return;
          }
          var chip = instantiate(this.getChipByAmount(amounts[0]));
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
            _this18.lblToast.node.active = false;
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
              _this19.chatInGame.show(Configs.InGameIds.Baccarat);
            });
          } else {
            this.chatInGame.show(Configs.InGameIds.Baccarat);
          }
        };
        _proto.actShowPopupRank = function actShowPopupRank() {
          var popupRank = instantiate(this.popupRank);
          this.popupContainer.addChild(popupRank);
          // @ts-ignore
          popupRank.getComponent("Casino.PopupRank").showDetail(this.currency, Configs.InGameIds.Baccarat);
        };
        _proto.drawCau = function drawCau(data) {
          var _this20 = this;
          this.listCauLeft.removeAllChildren();
          this.listCauRight.removeAllChildren();
          this.listCauMini.removeAllChildren();
          var listCau = [0, 0, 0, 0, 0];
          data.forEach(function (resultDTO) {
            var winner = resultDTO.Winner,
              pair = resultDTO.Pair,
              BankerSum = resultDTO.BankerSum,
              PlayerSum = resultDTO.PlayerSum;
            var sumValue = winner === RESULT.BANKER_WIN ? BankerSum : PlayerSum;
            listCau[winner - 1]++;
            var createItem = function createItem(template, spriteFrame, labelValue) {
              var item = instantiate(template);
              item.getComponent(Sprite).spriteFrame = spriteFrame;
              if (winner === RESULT.TIE) {
                item.getComponentInChildren(Label).node.active = false;
              }
              if (labelValue) {
                var label = item.getComponentInChildren(Label);
                label.string = labelValue;
                switch (winner) {
                  case RESULT.BANKER_WIN:
                    label.color = Color.BLACK.fromHEX("#f72373");
                    break;
                  case RESULT.PLAYER_WIN:
                    label.color = Color.BLACK.fromHEX("#1300cb");
                    break;
                }
              }
              return item;
            };
            _this20.listCauMini.addChild(createItem(_this20.itemCauMini, _this20.cauSpr[winner - 1]));
            _this20.listCauRight.addChild(createItem(_this20.itemCauRight, _this20.cauSpr[winner - 1]));
            _this20.listCauLeft.addChild(createItem(_this20.itemCauLeft, _this20.cauLeftSpr[winner - 1], sumValue));
            if (pair === RESULT_PAIR.BANKER_PAIR || pair === RESULT_PAIR.BOTH) {
              listCau[3]++;
              _this20.listCauLeft.addChild(createItem(_this20.itemCauLeft, _this20.cauLeftSpr[3], sumValue));
            }
            if (pair === RESULT_PAIR.PLAYER_PAIR || pair === RESULT_PAIR.BOTH) {
              listCau[4]++;
              _this20.listCauLeft.addChild(createItem(_this20.itemCauLeft, _this20.cauLeftSpr[4], sumValue));
            }
          });
          this.listLabelCau.forEach(function (label, index) {
            label.string = _this20.LABEL_CAU[index] + ": " + listCau[index];
          });
        };
        _proto.moveChipToDealer = function moveChipToDealer(chip) {
          tween(chip).to(0.5, {
            position: this.dealerNode.position
          }).call(function () {
            return chip.destroy();
          }).start();
        };
        _proto.moveChipToPlayer = function moveChipToPlayer(chip, player, moveFromDealerFirst) {
          var _this21 = this;
          if (moveFromDealerFirst === void 0) {
            moveFromDealerFirst = false;
          }
          var targetPos = player.node.position.clone();
          var middlePos = chip.position.clone();
          if (moveFromDealerFirst) {
            var delayStep = 0.1;
            var _loop = function _loop() {
              var cloneChip = instantiate(chip);
              cloneChip.position = _this21.dealerNode.position;
              _this21.chipContainer.addChild(cloneChip);
              tween(cloneChip).delay(i * delayStep).to(0.5, {
                position: middlePos
              }).call(function () {
                return cloneChip.destroy();
              }).start();
            };
            for (var i = 0; i < 10; i++) {
              _loop();
            }
            var totalDelay = 10 * delayStep;
            tween(chip).delay(totalDelay + 0.1).to(0.5, {
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
        _proto.moveCardFromMachine = function moveCardFromMachine(card, cardIndex, isFip, showBankerCorner, isBonusCard, isBonusPlayerHand, sumBonusCard) {
          var _this22 = this;
          if (cardIndex === void 0) {
            cardIndex = -1;
          }
          if (isFip === void 0) {
            isFip = false;
          }
          if (showBankerCorner === void 0) {
            showBankerCorner = false;
          }
          if (isBonusCard === void 0) {
            isBonusCard = false;
          }
          if (isBonusPlayerHand === void 0) {
            isBonusPlayerHand = false;
          }
          if (sumBonusCard === void 0) {
            sumBonusCard = 0;
          }
          var worldPos = this.baccaratMachine.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          var startPos = card.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          var endPos = card.position.clone();
          card.getComponent(Sprite).spriteFrame = this.cardBack;
          card.position = startPos;
          card.active = true;
          var targetAngle = card.eulerAngles.clone();
          this.lblDeck.string = (parseInt(this.lblDeck.string) - 1).toString();
          if (isBonusCard) {
            card.eulerAngles = Vec3.ZERO;
            tween(card).to(0.3, {
              position: endPos
            }).to(0.2, {
              eulerAngles: targetAngle
            }).call(function () {
              if (cardIndex !== -1) {
                if (isFip) {
                  _this22.flipCard(card, cardIndex, !isBonusPlayerHand, sumBonusCard);
                  return;
                }
                _this22.playerCorner.active = true;
                if (showBankerCorner) {
                  _this22.bankerCorner.active = true;
                }
                card.getComponent(Sprite).spriteFrame = _this22.cardFronts[cardIndex];
              }
            }).start();
          } else {
            tween(card).to(0.5, {
              position: endPos
            }).call(function () {
              if (cardIndex !== -1) {
                if (isFip) {
                  _this22.flipCard(card, cardIndex);
                  return;
                }
                _this22.playerCorner.active = true;
                if (showBankerCorner) {
                  _this22.bankerCorner.active = true;
                }
                card.getComponent(Sprite).spriteFrame = _this22.cardFronts[cardIndex];
              }
            }).start();
          }
        };
        _proto.flipCard = function flipCard(card, cardIndex, isBanker, sumBonusCard) {
          var _this23 = this;
          if (isBanker === void 0) {
            isBanker = false;
          }
          if (sumBonusCard === void 0) {
            sumBonusCard = 0;
          }
          tween(card).to(0.2, {
            scale: v3(0, 0.65, 0.65)
          }).call(function () {
            card.getComponent(Sprite).spriteFrame = _this23.cardFronts[cardIndex];
          }).to(0.3, {
            scale: v3(0.65, 0.65, 0.65)
          }).call(function () {
            var cardSumNode = isBanker ? _this23.bankerCardSum : _this23.playerCardSum;
            cardSumNode.getComponentInChildren(Label).string = sumBonusCard > 0 ? sumBonusCard.toString() : _this23.getCardValue(cardIndex).toString();
          }).start();
        };
        _proto.getCardValue = function getCardValue(id) {
          if (id < 0 || id > 51) return -1;
          var cardNumber = id % 13;
          if (cardNumber === 12) return 1;
          if (cardNumber >= 0 && cardNumber <= 7) return cardNumber + 2;
          return 0;
        };
        _proto.flipCorner = function flipCorner(corner, sum, isBanker) {
          var _this24 = this;
          if (isBanker === void 0) {
            isBanker = false;
          }
          var flip = corner.getChildByName('flip');
          tween(flip).to(1.2, {
            x: 30
          }).to(0.3, {
            x: 85
          }).call(function () {
            corner.active = false;
            flip.x = 0;
            if (isBanker) {
              _this24.bankerCardSum.getComponentInChildren(Label).string = sum + '';
              return;
            }
            _this24.playerCardSum.getComponentInChildren(Label).string = sum + '';
          }).start();
        };
        _proto.showGuide = function showGuide() {
          var _this25 = this;
          var table = this.guideBG.children[0];
          table.children.forEach(function (child) {
            if (child.getChildByName("VIP") == null || child.getChildByName("NORMAL") == null) return;
            child.getChildByName("VIP").active = _this25.currency == 1;
            child.getChildByName("NORMAL").active = _this25.currency == 0;
          });
          this.guideBG.active = true;
          this.guide.active = true;
        };
        _proto.hideGuide = function hideGuide() {
          this.guideBG.active = false;
          this.guide.active = false;
        };
        return BaccaratPlay;
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableClearBet", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableRebet", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableBetX2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeDisableFinishBet", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "baccaratMachine", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "playerCardSum", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bankerCardSum", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "playerCards", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bankerCards", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "playerCorner", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bankerCorner", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "cardBack", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "cardFronts", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "chipContainer", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "betPositions", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "lblBetPositions", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "countdownSecond", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "progressSprite", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteGreen", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteYellow", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "progressSpriteRed", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "boxSoiCau", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "popupRank", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionCau", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "listCauMini", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "itemCauMini", [_dec37], {
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
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "listCauLeft", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "itemCauLeft", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "listCauRight", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "itemCauRight", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "cauSpr", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "cauLeftSpr", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "dealerNode", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "playerWinText", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "bankerWinText", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "labelDealerNotify", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "betTableVip", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "betTableNormal", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "guideBG", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec52], {
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
  r('virtual:///prerequisite-imports/Baccarat', 'chunks:///_virtual/Baccarat'); 
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