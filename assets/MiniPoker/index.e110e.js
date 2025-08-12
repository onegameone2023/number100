System.register("chunks:///_virtual/MiniPoker", ['./MiniPoker.ItemSlot.ts', './MiniPoker.MiniPokerController.ts', './MiniPoker.PopupHistory.ts', './MiniPoker.PopupHonors.ts', './MiniPoker.PopupTutorial.ts', './MiniPoker.SlotLayer.ts'], function () {
  return {
    setters: [null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MiniPoker.ItemSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotItem.ts', './MiniPoker.MiniPokerController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SlotItem, MiniPokerController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      SlotItem = module.default;
    }, function (module) {
      MiniPokerController = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "652e5EeFspG2L/rQsaBQYH5", "MiniPoker.ItemSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ItemPK = exports('default', (_dec = ccclass("ItemPK"), _dec2 = property(MiniPokerController), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_SlotItem) {
        _inheritsLoose(ItemPK, _SlotItem);
        function ItemPK() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SlotItem.call.apply(_SlotItem, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mini", _descriptor, _assertThisInitialized(_this));
          _this.isStartAction = false;
          _this.itemWidth = 97;
          _this.disHCell = 137;
          _initializerDefineProperty(_this, "sprite", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ItemPK.prototype;
        _proto.start = function start() {
          _SlotItem.prototype.start.call(this);
        };
        _proto.setWin = function setWin(isWin, isLigth) {
          // this.slot_bg_win.setVisible(isLigth);
          // this.bg.setVisible(isWin);

          console.log("isWin" + isWin);
          console.log("isLigth" + isLigth);
          if (isLigth) {
            this.startAction();
          } else {
            this.isStartAction = false;
          }
        };
        _proto.createItem = function createItem(i, j, lastY) {
          var padding = 0; //18.5;
          this.distance2Item = this.disHCell;
          var xItem = (i + 0.5) * this.itemWidth;
          this.maxY = 3 * this.disHCell + this.disHCell / 2 + padding;
          this.minY = -this.disHCell / 2;
          if (lastY != 0) {
            this.minY = j * this.disHCell + this.disHCell / 2 + padding;
          }
          var yItem = j * this.disHCell + lastY + this.disHCell / 2 + padding;
          if (lastY != 0) {
            yItem = j * this.disHCell + lastY + padding;
          }
          this.node.setPosition(xItem, yItem);
          // console.log(this.node.getPosition());

          this.isRunning = true;
        };
        _proto.startAction = function startAction() {
          // var idItem = this.idItemZ;
          if (this.isStartAction) {
            return;
          }
          this.isStartAction = true;
        };
        _proto.initItemDG = function initItemDG(heightCell, withCell, idItem, indexBet) {
          //  console.log("idItem====" + idItem);

          //  this.ske.node.active = false;
          //   var cardId = Number(idItem);
          //         var rank =  Math.floor(cardId/ 4) + 1;
          //         var suitTemp = cardId%4;
          //        var suit_new = [0,3,2,1];

          //         var suit = suit_new.indexOf(suitTemp);

          this.sprite.spriteFrame = this.mini.getFrameCard(idItem);
          this.sprite.node.active = true;
          return _SlotItem.prototype.initItem.call(this, heightCell, withCell, idItem);

          //   this.ske.skeletonData = ;
        };

        return ItemPK;
      }(SlotItem), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mini", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniPoker.MiniPokerController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BundleControl.ts', './App.ts', './BroadcastListener.ts', './Config.ts', './Http.ts', './MiniGame.ts', './MiniGameSignalRClient.ts', './Utils.ts', './Lobby.PopupGoldTicket.ts', './MiniPoker.PopupHistory.ts', './MiniPoker.PopupHonors.ts', './MiniPoker.SlotLayer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, SpriteFrame, Node, Label, AnimationComponent, Sprite, instantiate, Vec3, tween, log, director, v3, BundleControl, App, BroadcastReceiver, Configs, Http, MiniGame, MiniGameSignalRClient, Utils, PopupGoldTicket, PopupHistory, PopupHonors, SlotLayerPK;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Label = module.Label;
      AnimationComponent = module.AnimationComponent;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      log = module.log;
      director = module.director;
      v3 = module.v3;
    }, function (module) {
      BundleControl = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      MiniGameSignalRClient = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      PopupGoldTicket = module.default;
    }, function (module) {
      PopupHistory = module.default;
    }, function (module) {
      PopupHonors = module.default;
    }, function (module) {
      SlotLayerPK = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;
      cclegacy._RF.push({}, "93f55F36+ZG/4x1s8HLfpyR", "MiniPoker.MiniPokerController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonBet = exports('ButtonBet', (_dec = ccclass("ButtonBet"), _dec2 = property(Button), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function ButtonBet() {
          _initializerDefineProperty(this, "button", _descriptor, this);
          _initializerDefineProperty(this, "sfNormal", _descriptor2, this);
          _initializerDefineProperty(this, "sfActive", _descriptor3, this);
          this._isActive = false;
        }
        var _proto = ButtonBet.prototype;
        _proto.setActive = function setActive(isActive) {
          this._isActive = isActive;
          this.button.getComponent(Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
          this.button.interactable = !isActive;
        };
        return ButtonBet;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfNormal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfActive", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var MiniPokerController = exports('default', (_dec5 = property(Node), _dec6 = property([Node]), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(AnimationComponent), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property([Node]), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(SlotLayerPK), ccclass(_class4 = (_class5 = /*#__PURE__*/function (_MiniGame) {
        _inheritsLoose(MiniPokerController, _MiniGame);
        function MiniPokerController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MiniGame.call.apply(_MiniGame, [this].concat(args)) || this;
          // @property(SpriteAtlas)
          // sprAtlasCards: SpriteAtlas = null;
          _initializerDefineProperty(_this, "bettingNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeResulfReward", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodejacport", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldTicketclone", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGoldTicket", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpot", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPhein", _descriptor11, _assertThisInitialized(_this));
          // @property([ButtonBet])
          // buttonBets: ButtonBet[] = [];
          // @property(Label)
          // lblToast: Label = null;
          _initializerDefineProperty(_this, "btnSpinAnim", _descriptor12, _assertThisInitialized(_this));
          // @property(Button)
          // btnSpin: Button = null;
          // @property(Button)
          // btnClose: Button = null;
          // @property(Toggle)
          // toggleAuto: Toggle = null;
          // @property(Toggle)
          // btnBoost: Toggle = null;
          // @property(sp.Skeleton)
          // sprResult: sp.Skeleton = null;
          _this.mapRewardID = [12, 13, 3, 4, 5, 6, 7, 8, 9];
          _initializerDefineProperty(_this, "lblWinCash", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "x1", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "x2", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popups", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeAuto", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeStop", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "CardNode", _descriptor20, _assertThisInitialized(_this));
          _this.popupGuide = null;
          _this.popupHistory = null;
          _this.popupHonor = null;
          _this.popupGoldTicket = null;
          _this.indexBetting = 1;
          // isSieuToc:boolean = false;
          _this.BetType = 1;
          _this.isAutoRotate = false;
          _this.isSpinning = false;
          _initializerDefineProperty(_this, "slotLayer", _descriptor21, _assertThisInitialized(_this));
          _this.mydata = void 0;
          _this.x = void 0;
          return _this;
        }
        var _proto2 = MiniPokerController.prototype;
        _proto2.getFrameCard = function getFrameCard(id) {
          return this.CardNode.children[Number(id)].getComponent(Sprite).spriteFrame;
        };
        _proto2.start = function start() {
          var _this2 = this;
          this.updateStatusButton();
          this.slotLayer.maxrandom = 51;
          this.slotLayer.initRandom();
          this.lblWinCash.active = false;
          var thiz = this;
          this.slotLayer.finishedHandler = function () {
            thiz.onFinishQuay();
          };
          this.nodeGold.forEach(function (element) {
            element.active = true;
          });
          MiniGameSignalRClient.getInstance().receive('jackpotMiniPoker', function (data) {
            _this2.onJackpot(data);
          });
          MiniGameSignalRClient.getInstance().receive('resultSpinMiniPoker', function (data) {
            _this2.onResuft(data);
          });
          this.initBetting();
          this.getTotalTicket();
        };
        _proto2.getAdjustedDateString = function getAdjustedDateString() {
          var now = new Date();
          if (now.getHours() >= 18) {
            // Tạo bản sao để tránh thay đổi `now`
            now.setDate(now.getDate() + 1);
          }
          return now.toDateString();
        };
        _proto2.getTotalTicket = function getTotalTicket() {
          var _this3 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountTicketMinipoker"], {
            "currencyID": Configs.Login.CurrencyID,
            "eventDate": this.getAdjustedDateString() //formatDateToText(this.selectedDateMyTicket || new Date()).replace(',', '')
          }, function (status, json) {
            App.instance.showLoading(false);
            if (status === 200) {
              if (json["c"] >= 0) {
                var _json$d;
                _this3.lblGoldTicket.string = (_json$d = json['d']) == null ? void 0 : _json$d.MyTicket.length;
              }
            }
          });
        };
        _proto2.onClickX1 = function onClickX1(target, data) {
          //  this.isSieuToc = false;
          this.x1.active = true;
          this.x2.active = false;
          this.slotLayer.setSpeed(2);
        };
        _proto2.onClickX2 = function onClickX2(target, data) {
          this.slotLayer.setSpeed(3.5);
          // this.isSieuToc = true;
          this.x2.active = true;
          this.x1.active = false;
        };
        _proto2.onClickCoin = function onClickCoin(target, data) {
          var _this4 = this;
          if (this.isSpinning) return;
          if (this.BetType == 1) {
            this.BetType = 2;
          } else {
            this.BetType = 1;
          }
          this.nodeGold.forEach(function (element) {
            element.active = _this4.BetType == 1 ? true : false;
          });
          MiniGameSignalRClient.getInstance().send('GetJackpot', [Configs.Login.CurrencyID, this.BetType, this.indexBetting], function (data) {});
        };
        _proto2.onClickAutoRotate = function onClickAutoRotate(target, data) {
          App.instance.addAutoRunningGameIds(Configs.InGameIds.MiniPoker);
          this.isAutoRotate = true;
          this.nodeAuto.active = false;
          this.nodeStop.active = true;
          if (!this.isSpinning) {
            this.actSpin();
          }
        };
        _proto2.updateStatusButton = function updateStatusButton() {
          if (this.isSpinning) {
            this.nodeAuto.active = false;
            this.nodeStop.active = false;
          } else {
            this.nodeAuto.active = this.isAutoRotate ? false : true;
            this.nodeStop.active = !this.nodeAuto.active;
          }
        };
        _proto2.onDestroy = function onDestroy() {
          App.instance.removeAutoRunningGameIds(Configs.InGameIds.MiniPoker);
          MiniGameSignalRClient.getInstance().dontReceive();
        };
        _proto2.onClickStop = function onClickStop(target, data) {
          App.instance.removeAutoRunningGameIds(Configs.InGameIds.MiniPoker);
          this.isAutoRotate = false;
          this.nodeAuto.active = true;
          this.nodeStop.active = false;
          // MiniGameSignalRClient.getInstance().send('HideSlot', [Configs.Login.CurrencyID, this.BetType, this.indexBetting], (data) => {

          // });
        };

        _proto2.initBetting = function initBetting() {
          var _this5 = this;
          var _loop = function _loop(index) {
            _this5.bettingNode.children[index].on("click", function () {
              _this5.onClickBetting(index + 1);
            });
          };
          for (var index = 0; index < this.bettingNode.children.length; index++) {
            _loop(index);
          }
          this.onClickBetting(1);
        };
        _proto2.onClickBetting = function onClickBetting(index1) {
          if (this.isAutoRotate) {
            // App.instance.ShowAlertDialog(App.instance.getTextLang("ps7"));
            return;
          }
          if (this.isSpinning) return;
          this.indexBetting = index1;
          for (var index = 0; index < this.bettingNode.children.length; index++) {
            this.bettingNode.children[index].children[1].active = this.indexBetting - 1 == index ? true : false;
          }
          MiniGameSignalRClient.getInstance().send('GetJackpot', [Configs.Login.CurrencyID, this.BetType, this.indexBetting], function (data) {});
        };
        _proto2.onJackpot = function onJackpot(data) {
          this.lblJackpot.string = Utils.formatNumber(data.JackpotFund);
        };
        _proto2.ConvertResulftPoker = function ConvertResulftPoker(items) {
          var arrItems = [];
          for (var i = 0; i < 5; i++) {
            var tem = [];
            for (var j = 0; j < 3; j++) {
              // var tem:number[]= [];
              tem.push(items[i]);
            }
            arrItems.push(tem);
          }
          return arrItems;
        };
        _proto2.onResuft = function onResuft(data) {
          if (data.ResponseStatus < 0) {
            App.instance.showErrLoading(App.instance.getTextLang("me-999002"));
            return;
          }
          this.lblPhein.string = "#" + data.SpinID;
          this.mydata = data;
          var valuesArray = Object.values(data.Cards).map(String);
          //  if(!this.isSieuToc){
          this.slotLayer.stopSlotWithResuft(this.ConvertResulftPoker(valuesArray));
          //  }else{
          //    this.slotLayer.stopNow(this.ConvertResulftPoker(valuesArray));
          //  }

          // {"PortalID":15,"CurrencyID":1,"AccountID":100053,"BetType":1,"RoomID":1,"SpinID":47083,"BetValue":100,"PrizeValue":0,
          //   "RemainTime":0,"Balance":49999900,"Jackpot":407200,"IsJoker":0,"ResponseStatus":0,"Cards":{"CardID1":3,"CardID2":34,
          //     "CardID3":41,"CardID4":26,"CardID5":37,"CardTypeID":11}}
        };

        _proto2.createEffectTicket = function createEffectTicket() {
          var ticket = instantiate(this.goldTicketclone);
          ticket.active = true;
          ticket.parent = this.goldTicketclone.parent;

          // Thiết lập scale và vị trí ban đầu
          ticket.setScale(new Vec3(1, 1, 1));
          ticket.setPosition(new Vec3(-1.298, -225.622, 0));

          // Vị trí đích là Vec3, không phải Vec2
          var targetPosition = new Vec3(212.371, -62, 0);

          // Tạo hiệu ứng tween
          tween(ticket).delay(1).parallel(tween(ticket).to(1, {
            scale: new Vec3(0.5, 0.5, 0.5)
          }, {
            easing: 'sineOut'
          }), tween(ticket).to(1, {
            position: targetPosition
          }, {
            easing: 'sineOut'
          })).call(function () {
            log("Destroy called");
            console.log("Destroy called");
            ticket.destroy();
          }).start();
        };
        _proto2.onFinishQuay = function onFinishQuay() {
          var _this6 = this;
          var thiz = this;
          this.isSpinning = false;
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          var indexReward = this.mapRewardID.indexOf(this.mydata.Cards.CardTypeID);

          // log("index" + indexReward);
          // indexReward = 9; test
          if (this.mydata.IsJoker > 0) {
            this.createEffectTicket();
            this.getTotalTicket();
          }

          // CardTypeID
          this.lblJackpot.string = Utils.formatNumber(this.mydata.Jackpot);
          this.lblWinCash.active = true;
          this.lblWinCash.getComponent(Label).string = "+" + this.mydata.PrizeValue;
          this.lblWinCash.setPosition(0, 75);
          if (indexReward == -1) {
            this.lblWinCash.active = false;
            if (this.isAutoRotate) {
              tween(this.node).delay(0.5).call(function () {
                _this6.actSpin();
              }).start();
            }
            BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
            return;
          }
          this.nodeResulfReward.active = true;
          log("index" + indexReward);
          for (var index = 0; index < this.nodeResulfReward.children.length; index++) {
            this.nodeResulfReward.children[index].active = index == indexReward ? true : false;
          }
          tween(this.lblWinCash).to(1, {
            position: new Vec3(0, 114, 0)
          }).delay(1).call(function () {
            _this6.nodeResulfReward.active = false;
            _this6.lblWinCash.active = false;
            BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
            if (_this6.isAutoRotate && (indexReward !== 12 || !_this6.node.active)) {
              if (thiz.mydata.PrizeValue && thiz.mydata.PrizeValue > 0) {
                director.getScene().emit('ShowMoneyAuto', {
                  money: thiz.mydata.PrizeValue,
                  game: Configs.InGameIds.MiniPoker
                });
              }
              _this6.actSpin();
            }
            if (indexReward === 12) {
              thiz.nodejacport.active = true;
              setTimeout(function () {
                thiz.nodejacport.active = false;
              }, 5000);
            }
          }).start();
        };
        _proto2.show = function show() {
          if (this.node.active && this.node.position.x != -10000) {
            this.reOrder();
            return;
          }
          // App.instance.showBgMiniGame("MiniPoker");
          _MiniGame.prototype.show.call(this);
          this.node.setPosition(v3(0, 0, 0));
          // this.lblToast.node.parent.active = false;
          // this.sprResult.node.active = false;
          // this.lblWinCash.active = false;

          // this.isSpined = true;
          // this.isCanChangeBet = true;
          // this.betIdx = 0;
          // for (let i = 0; i < this.buttonBets.length; i++) {
          //   this.buttonBets[i].setActive(i == this.betIdx);
          // }
          // MiniGameNetworkClient.getInstance().send(new cmd.SendScribe(this.betIdx));
        };

        _proto2.actSpin = function actSpin() {
          // this.slotLayer.clearAll();

          if (this.isSpinning) {
            return;
          }
          this.btnSpinAnim.play("spin");
          this.nodeResulfReward.active = false;
          this.nodejacport.active = false;
          this.isSpinning = true;
          this.slotLayer.rotate();
          var thiz = this;
          MiniGameSignalRClient.getInstance().send('Spin', [Configs.Login.CurrencyID, this.BetType, this.indexBetting], function (data) {
            log(data);
            if (data < 0) {
              App.instance.ShowAlertDialog(App.instance.getTextLang("me" + data));
              thiz.isSpinning = false;
              thiz.onClickStop(null, null);
              if (thiz.slotLayer.arrItemRandom != undefined && thiz.slotLayer.arrItemRandom.length != 0) {
                thiz.slotLayer.showNotEffect(thiz.slotLayer.arrItemRandom);
              } else {
                thiz.slotLayer.initRandom();
              }
            }
            // handle callback
          });
        };

        _proto2.dismiss = function dismiss() {
          if (this.isAutoRotate) {
            this.node.setPosition(v3(-10000, 0, 0));
          } else {
            _MiniGame.prototype.dismiss.call(this);
            MiniGameSignalRClient.getInstance().send('HideSlot', [], function (data) {
              log(data);

              // handle callback
            });
          }

          for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
          }
          //  App.instance.hideGameMini("MiniPoker");
          // MiniGameNetworkClient.getInstance().send(new cmd.SendUnScribe(this.betIdx));
        };

        _proto2.actPopupGuide = function actPopupGuide() {
          var _this7 = this;
          if (this.popupGuide == null) {
            BundleControl.loadPrefabGame("MiniPoker", "res/prefabs/PopupGuide", function (finish, total) {
              // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
              App.instance.showLoading(false);
              _this7.popupGuide = instantiate(prefab).getComponent("Dialog");
              _this7.popupGuide.node.parent = _this7.popupContainer;
              _this7.popupGuide.show2(_this7);
              _this7.popups.push(_this7.popupGuide.node);
            });
          } else {
            this.popupGuide.show2(this);
          }
        };
        _proto2.actPopupHistory = function actPopupHistory() {
          var _this8 = this;
          //if (this.popupHistory == null) {
          BundleControl.loadPrefabGame("MiniPoker", "res/prefabs/PopupHistory", function (finish, total) {
            // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
          }, function (prefab) {
            App.instance.showLoading(false);
            _this8.popupHistory = instantiate(prefab).getComponent(PopupHistory);
            _this8.popupHistory.node.parent = _this8.popupContainer;
            _this8.popupHistory.show();
            _this8.popups.push(_this8.popupHistory.node);
          });
          // } else {
          //   this.popupHistory.show();
          // }
        };

        _proto2.actPopupHonor = function actPopupHonor() {
          var _this9 = this;
          if (this.popupHonor == null) {
            BundleControl.loadPrefabGame("MiniPoker", "res/prefabs/PopupHonors", function (finish, total) {
              // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
              App.instance.showLoading(false);
              _this9.popupHonor = instantiate(prefab).getComponent(PopupHonors);
              _this9.popupHonor.node.parent = _this9.popupContainer;
              _this9.popupHonor.show();
              _this9.popups.push(_this9.popupHonor.node);
            });
          } else {
            this.popupHonor.show();
          }
        };
        _proto2.actGoldTicket = function actGoldTicket() {
          var _this10 = this;
          // let cb = (prefab) => {
          //   let popupGoldTicket = cc
          //     .instantiate(prefab)
          //     .getComponent("Lobby.PopupGoldTicket");
          //   App.instance.node.addChild(popupGoldTicket.node);
          // };
          // BundleControl.loadPrefabPopup("PrefabPopup/PopupGoldTicket", cb);

          if (this.popupGoldTicket == null) {
            // BundleControl.loadPrefabGame(
            //   "MiniPoker",
            //   "res/prefabs/PopupGoldTicket",
            //   (finish, total) => {
            //     // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            //   },
            //   (prefab) => {
            //     App.instance.showLoading(false);
            //     this.popupHonor = cc
            //       .instantiate(prefab)
            //       .getComponent("MiniPoker.PopupHonors");
            //     this.popupHonor.node.parent = this.popupContainer;
            //     this.popupHonor.show();
            //     this.popups.push(this.popupHonor.node);
            //   }
            // );

            var cb = function cb(prefab) {
              _this10.popupGoldTicket = instantiate(prefab).getComponent("Lobby.PopupGoldTicket");
              App.instance.node.addChild(_this10.popupGoldTicket.node);
            };
            BundleControl.loadPrefabPopup("prefabs/PopupGoldTicket", cb);
          } else {
            this.popupGoldTicket.show();
          }
        };
        _proto2.actMyGoldTicket = function actMyGoldTicket() {
          var _this11 = this;
          if (this.popupGoldTicket == null) {
            var cb = function cb(prefab) {
              _this11.popupGoldTicket = instantiate(prefab).getComponent("Lobby.PopupGoldTicket");
              App.instance.node.addChild(_this11.popupGoldTicket.node);
              _this11.popupGoldTicket.getComponent(PopupGoldTicket).showTag();
            };
            BundleControl.loadPrefabPopup("PrefabPopup/PopupGoldTicket", cb);
          } else {
            this.popupGoldTicket.showTag();
          }
        };
        _proto2.reOrder = function reOrder() {
          _MiniGame.prototype.reOrder.call(this);
        };
        return MiniPokerController;
      }(MiniGame), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "bettingNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "nodeGold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "nodeResulfReward", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "nodejacport", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "goldTicketclone", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "lblGoldTicket", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "lblJackpot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "lblPhein", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "btnSpinAnim", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "lblWinCash", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "popupContainer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "x1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "x2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "popups", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "nodeAuto", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "nodeStop", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "CardNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class5.prototype, "slotLayer", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniPoker.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Http.ts', './App.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, log, Dialog, Http, App, Configs, Utils;
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
      log = module.log;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "cc481gP9AlCILXU1JsBrs7F", "MiniPoker.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupHistory = exports('default', (_dec = property(Node), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([Node]), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistory, _Dialog);
        function PopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemClone", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentScrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCloneXu", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentScrollViewXu", _descriptor4, _assertThisInitialized(_this));
          _this.isEmtyData = false;
          _this.page = 1;
          _this.isEmtyDataXu = false;
          _this.pageXu = 1;
          _initializerDefineProperty(_this, "tabNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabContents", _descriptor6, _assertThisInitialized(_this));
          _this.mapcards = [{
            "id": 0,
            "name": "2♠"
          }, {
            "id": 1,
            "name": "3♠"
          }, {
            "id": 2,
            "name": "4♠"
          }, {
            "id": 3,
            "name": "5♠"
          }, {
            "id": 4,
            "name": "6♠"
          }, {
            "id": 5,
            "name": "7♠"
          }, {
            "id": 6,
            "name": "8♠"
          }, {
            "id": 7,
            "name": "9♠"
          }, {
            "id": 8,
            "name": "10♠"
          }, {
            "id": 9,
            "name": "J♠"
          }, {
            "id": 10,
            "name": "Q♠"
          }, {
            "id": 11,
            "name": "K♠"
          }, {
            "id": 12,
            "name": "A♠"
          }, {
            "id": 13,
            "name": "2♣"
          }, {
            "id": 14,
            "name": "3♣"
          }, {
            "id": 15,
            "name": "4♣"
          }, {
            "id": 16,
            "name": "5♣"
          }, {
            "id": 17,
            "name": "6♣"
          }, {
            "id": 18,
            "name": "7♣"
          }, {
            "id": 19,
            "name": "8♣"
          }, {
            "id": 20,
            "name": "9♣"
          }, {
            "id": 21,
            "name": "10♣"
          }, {
            "id": 22,
            "name": "J♣"
          }, {
            "id": 23,
            "name": "Q♣"
          }, {
            "id": 24,
            "name": "K♣"
          }, {
            "id": 25,
            "name": "A♣"
          }, {
            "id": 26,
            "name": "2♦"
          }, {
            "id": 27,
            "name": "3♦"
          }, {
            "id": 28,
            "name": "4♦"
          }, {
            "id": 29,
            "name": "5♦"
          }, {
            "id": 30,
            "name": "6♦"
          }, {
            "id": 31,
            "name": "7♦"
          }, {
            "id": 32,
            "name": "8♦"
          }, {
            "id": 33,
            "name": "9♦"
          }, {
            "id": 34,
            "name": "10♦"
          }, {
            "id": 35,
            "name": "J♦"
          }, {
            "id": 36,
            "name": "Q♦"
          }, {
            "id": 37,
            "name": "K♦"
          }, {
            "id": 38,
            "name": "A♦"
          }, {
            "id": 39,
            "name": "2♥"
          }, {
            "id": 40,
            "name": "3♥"
          }, {
            "id": 41,
            "name": "4♥"
          }, {
            "id": 42,
            "name": "5♥"
          }, {
            "id": 43,
            "name": "6♥"
          }, {
            "id": 44,
            "name": "7♥"
          }, {
            "id": 45,
            "name": "8♥"
          }, {
            "id": 46,
            "name": "9♥"
          }, {
            "id": 47,
            "name": "10♥"
          }, {
            "id": 48,
            "name": "J♥"
          }, {
            "id": 49,
            "name": "Q♥"
          }, {
            "id": 50,
            "name": "K♥"
          }, {
            "id": 51,
            "name": "A♥"
          }];
          return _this;
        }
        var _proto = PopupHistory.prototype;
        _proto.start = function start() {
          this.initTab();
        };
        _proto.initTab = function initTab() {
          var _this2 = this;
          var _loop = function _loop(index) {
            _this2.tabNode.children[index].on("click", function () {
              _this2.onClickTab(index);
            });
          };
          for (var index = 0; index < this.tabNode.children.length; index++) {
            _loop(index);
          }
          this.onClickTab(0);
        };
        _proto.onClickTab = function onClickTab(index1) {
          for (var index = 0; index < this.tabNode.children.length; index++) {
            this.tabNode.children[index].children[1].active = index1 == index ? true : false;
            this.tabContents[index].active = index1 == index ? true : false;
          }
          if (index1 == 0) {
            this.getTipZo();
          } else {
            this.getXu();
          }
        };
        _proto.getTipZo = function getTipZo() {
          var _this3 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountHistoryMiniPoker"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 1,
            "Page": this.page,
            "topCount": 10
          }, function (status, json) {
            App.instance.showLoading(false);
            if (status === 200) {
              // log(JSON.stringify(json));
              _this3.isEmtyData = false;
              var results = json['d'];
              if (results.length == 0) {
                _this3.isEmtyData = true;
                return;
              } else {
                _this3.page++;
              }
              for (var index = 0; index < results.length; index++) {
                var itemNode = instantiate(_this3.itemClone);
                itemNode.active = true;
                _this3.parentScrollView.addChild(itemNode);
                itemNode.children[0].getComponent(Label).string = results[index]['SpinID'];
                itemNode.children[1].getComponent(Label).string = Utils.formatDatetime(results[index]['CreatedTime'], "dd/MM/yyyy HH:mm:ss");
                itemNode.children[2].getComponent(Label).string = Utils.formatNumber(results[index]['BetValue']);
                itemNode.children[3].getComponent(Label).string = Utils.formatNumber(results[index]['PrizeValue']);
                itemNode.children[4].getComponent(Label).string = results[index]['CardResult'].split(",").map(Number).map(function (id) {
                  return _this3.mapcards[id].name;
                }).join(" ");
              }
            }
          });
        };
        _proto.scrollEvent = function scrollEvent(sender, event) {
          switch (event) {
            case 1:
              log("Scroll to Bottom");
              if (!this.isEmtyData) {
                App.instance.showLoading(true);
                this.getTipZo();
              }
              break;
            case 6:
              log("Bounce bottom");
              break;
          }
        };
        _proto.getXu = function getXu() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetAccountHistoryMiniPoker"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 2,
            "Page": this.pageXu,
            "topCount": 10
          }, function (status, json) {
            App.instance.showLoading(false);
            if (status === 200) {
              // log(JSON.stringify(json));
              _this4.isEmtyDataXu = false;
              var results = json['d'];
              if (results.length == 0) {
                _this4.isEmtyDataXu = true;
                return;
              } else {
                _this4.pageXu++;
              }
              for (var index = 0; index < results.length; index++) {
                var itemNode = instantiate(_this4.itemCloneXu);
                itemNode.active = true;
                _this4.parentScrollViewXu.addChild(itemNode);
                itemNode.children[0].getComponent(Label).string = results[index]['SpinID'];
                itemNode.children[1].getComponent(Label).string = Utils.formatDatetime88(results[index]['CreatedTime']);
                itemNode.children[2].getComponent(Label).string = Utils.formatNumber(results[index]['BetValue']);
                itemNode.children[3].getComponent(Label).string = Utils.formatNumber(results[index]['PrizeValue']);
                itemNode.children[4].getComponent(Label).string = results[index]['CardResult'].split(",").map(Number).map(function (id) {
                  return _this4.mapcards[id].name;
                }).join(" ");
              }
            }
          });
        };
        _proto.scrollEventXu = function scrollEventXu(sender, event) {
          switch (event) {
            case 1:
              log("Scroll to Bottom");
              if (!this.isEmtyDataXu) {
                App.instance.showLoading(true);
                this.getXu();
              }
              break;
            case 6:
              log("Bounce bottom");
              break;
          }
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          // App.instance.showBgMiniGame("MiniPoker");

          this.parentScrollView.removeAllChildren();
          this.parentScrollViewXu.removeAllChildren();
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
        };
        _proto.actNextPage = function actNextPage() {};
        _proto.actPrevPage = function actPrevPage() {};
        _proto.loadData = function loadData() {};
        return PopupHistory;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemClone", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentScrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemCloneXu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "parentScrollViewXu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tabNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tabContents", [_dec6], {
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

System.register("chunks:///_virtual/MiniPoker.PopupHonors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Http.ts', './Config.ts', './App.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, log, Dialog, Http, Configs, App, Utils;
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
      log = module.log;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "5c964IwGZFIxJXkH/FCDSI0", "MiniPoker.PopupHonors", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupHonors = exports('default', (_dec = property(Node), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([Node]), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHonors, _Dialog);
        function PopupHonors() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemClone", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentScrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCloneXu", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentScrollViewXu", _descriptor4, _assertThisInitialized(_this));
          _this.isEmtyData = false;
          _this.page = 1;
          _this.isEmtyDataXu = false;
          _this.pageXu = 1;
          _initializerDefineProperty(_this, "tabNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabContents", _descriptor6, _assertThisInitialized(_this));
          _this.mapcards = {
            "12": "ca22",
            "13": "ca21",
            "3": "ca20",
            "4": "ca19",
            "5": "ca140",
            "6": "ca17",
            "7": "ca16",
            "8": "ca27",
            "9": "mnpk9"
          };
          return _this;
        }
        var _proto = PopupHonors.prototype;
        _proto.start = function start() {
          this.initTab();
        };
        _proto.initTab = function initTab() {
          var _this2 = this;
          var _loop = function _loop(index) {
            _this2.tabNode.children[index].on("click", function () {
              _this2.onClickTab(index);
            });
          };
          for (var index = 0; index < this.tabNode.children.length; index++) {
            _loop(index);
          }
          this.onClickTab(0);
        };
        _proto.onClickTab = function onClickTab(index1) {
          for (var index = 0; index < this.tabNode.children.length; index++) {
            this.tabNode.children[index].children[1].active = index1 == index ? true : false;
            this.tabContents[index].active = index1 == index ? true : false;
          }
          if (index1 == 0) {
            this.getTipZo();
          } else {
            this.getXu();
          }
        };
        _proto.getTipZo = function getTipZo() {
          var _this3 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopWinnersMiniPoker"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 1,
            "Page": this.page,
            "topCount": 10
          }, function (status, json) {
            App.instance.showLoading(false);
            if (status === 200) {
              // log(JSON.stringify(json));
              _this3.isEmtyData = false;
              var results = json['d'];
              if (results.length == 0) {
                _this3.isEmtyData = true;
                return;
              } else {
                _this3.page++;
              }
              for (var index = 0; index < results.length; index++) {
                var itemNode = instantiate(_this3.itemClone);
                itemNode.active = true;
                _this3.parentScrollView.addChild(itemNode);
                itemNode.children[1].getComponent(Label).string = results[index]['Nickname'];
                itemNode.children[0].getComponent(Label).string = Utils.formatDatetime88(results[index]['CreatedTime']);
                itemNode.children[2].getComponent(Label).string = Utils.formatNumber(results[index]['BetValue']);
                itemNode.children[3].getComponent(Label).string = Utils.formatNumber(results[index]['PrizeValue']);
                if (results[index]['CardTypeID'] == undefined) {
                  itemNode.children[4].getComponent(Label).string = "";
                } else {
                  itemNode.children[4].getComponent(Label).string = App.instance.getTextLang(_this3.mapcards[results[index]['CardTypeID'].toString()]);
                }
              }
            }
          });
        };
        _proto.scrollEvent = function scrollEvent(sender, event) {
          switch (event) {
            case 1:
              log("Scroll to Bottom");
              if (!this.isEmtyData) {
                App.instance.showLoading(true);
                this.getTipZo();
              }
              break;
            case 6:
              log("Bounce bottom");
              break;
          }
        };
        _proto.getXu = function getXu() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopWinnersMiniPoker"], {
            "currencyID": Configs.Login.CurrencyID,
            "betType": 2,
            "Page": this.page,
            "topCount": 10
          }, function (status, json) {
            App.instance.showLoading(false);
            if (status === 200) {
              // log(JSON.stringify(json));
              _this4.isEmtyDataXu = false;
              var results = json['d'];
              if (results.length == 0) {
                _this4.isEmtyDataXu = true;
                return;
              } else {
                _this4.pageXu++;
              }
              for (var index = 0; index < results.length; index++) {
                var itemNode = instantiate(_this4.itemCloneXu);
                itemNode.active = true;
                _this4.parentScrollViewXu.addChild(itemNode);
                itemNode.children[1].getComponent(Label).string = results[index]['Nickname'];
                itemNode.children[0].getComponent(Label).string = Utils.formatDatetime88(results[index]['CreatedTime']);
                itemNode.children[2].getComponent(Label).string = Utils.formatNumber(results[index]['BetValue']);
                itemNode.children[3].getComponent(Label).string = Utils.formatNumber(results[index]['PrizeValue']);
                if (results[index]['CardTypeID'] == undefined) {
                  itemNode.children[4].getComponent(Label).string = "";
                } else {
                  itemNode.children[4].getComponent(Label).string = App.instance.getTextLang(_this4.mapcards[results[index]['CardTypeID'].toString()]);
                }
              }
            }
          });
        };
        _proto.scrollEventXu = function scrollEventXu(sender, event) {
          switch (event) {
            case 1:
              log("Scroll to Bottom");
              if (!this.isEmtyDataXu) {
                App.instance.showLoading(true);
                this.getXu();
              }
              break;
            case 6:
              log("Bounce bottom");
              break;
          }
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          // App.instance.showBgMiniGame("MiniPoker");

          this.parentScrollView.removeAllChildren();
          this.parentScrollViewXu.removeAllChildren();
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
        };
        _proto.actNextPage = function actNextPage() {};
        _proto.actPrevPage = function actPrevPage() {};
        _proto.loadData = function loadData() {};
        return PopupHonors;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemClone", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentScrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemCloneXu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "parentScrollViewXu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tabNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tabContents", [_dec6], {
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

System.register("chunks:///_virtual/MiniPoker.PopupTutorial.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './MiniPoker.MiniPokerController.ts', './App.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, Sprite, Dialog, MiniPokerController, App, Utils;
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
      Sprite = module.Sprite;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      MiniPokerController = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "db345co58pBnqDCpB6+Fm6y", "MiniPoker.PopupTutorial", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupTutorial = exports('default', (_dec = property(Node), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(MiniPokerController), _dec6 = property(Node), _dec7 = property([Node]), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupTutorial, _Dialog);
        function PopupTutorial() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemClone", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentScrollView", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCloneXu", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "parentScrollViewXu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mini", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabContents", _descriptor7, _assertThisInitialized(_this));
          _this.datacard = [[44, 45, 46, 47, 48], [28, 29, 30, 31, 32], [25, 38, 51, 12, 32], [25, 38, 51, 8, 21], [28, 29, 34, 31, 26], [17, 31, 32, 20, 47], [25, 38, 51, 33, 44], [25, 38, 27, 1, 32], [0, 1, 9, 22, 50]];
          _this.dataGold = [[0, 100000, 15000, 5000, 2000, 1300, 800, 500, 250], [0, 1000000, 150000, 50000, 20000, 13000, 8000, 5000, 2500], [0, 10000000, 1500000, 500000, 200000, 130000, 80000, 50000, 25000]];
          _this.dataXu = [[0, 1000000, 120000, 40000, 18000, 12000, 8000, 5000, 2500], [0, 10000000, 1200000, 400000, 180000, 120000, 80000, 50000, 25000], [0, 100000000, 12000000, 4000000, 1800000, 1200000, 800000, 500000, 250000]];
          _this.mapcards_values = ["ca22", "ca21", "ca20", "ca19", "ca18", "ca17", "ca16", "ca27", "mnpk9"];
          return _this;
        }
        var _proto = PopupTutorial.prototype;
        _proto.start = function start() {
          this.initTab();
          for (var index = 0; index < this.datacard.length; index++) {
            var itemNode = instantiate(this.itemClone);
            itemNode.active = true;
            this.parentScrollView.addChild(itemNode);
            itemNode.children[0].getComponent(Label).string = App.instance.getTextLang(this.mapcards_values[index]);
            for (var icard = 0; icard < itemNode.children[1].children.length; icard++) {
              var element = itemNode.children[1].children[icard];
              element.getComponent(Sprite).spriteFrame = this.mini.getFrameCard(this.datacard[index][icard]);
            }

            // itemNode.children[1].getComponent(Label).string = Utils.formatDatetime88( results[index]['CreatedTime']);
            itemNode.children[2].getComponent(Label).string = this.dataGold[0][index] == 0 ? App.instance.getTextLang("ott34") : Utils.formatNumber(this.dataGold[0][index]);
            itemNode.children[3].getComponent(Label).string = this.dataGold[1][index] == 0 ? App.instance.getTextLang("ott34") : Utils.formatNumber(this.dataGold[1][index]);
            itemNode.children[4].getComponent(Label).string = this.dataGold[2][index] == 0 ? App.instance.getTextLang("ott34") : Utils.formatNumber(this.dataGold[2][index]);
          }
          for (var _index = 0; _index < this.datacard.length; _index++) {
            var itemNode = instantiate(this.itemCloneXu);
            itemNode.active = true;
            this.parentScrollViewXu.addChild(itemNode);
            itemNode.children[0].getComponent(Label).string = App.instance.getTextLang(this.mapcards_values[_index]);
            for (var _icard = 0; _icard < itemNode.children[1].children.length; _icard++) {
              var _element = itemNode.children[1].children[_icard];
              _element.getComponent(Sprite).spriteFrame = this.mini.getFrameCard(this.datacard[_index][_icard]);
            }

            // itemNode.children[1].getComponent(Label).string = Utils.formatDatetime88( results[index]['CreatedTime']);
            itemNode.children[2].getComponent(Label).string = this.dataXu[0][_index] == 0 ? App.instance.getTextLang("ott34") : Utils.formatNumber(this.dataXu[0][_index]);
            itemNode.children[3].getComponent(Label).string = this.dataXu[1][_index] == 0 ? App.instance.getTextLang("ott34") : Utils.formatNumber(this.dataXu[1][_index]);
            itemNode.children[4].getComponent(Label).string = this.dataXu[2][_index] == 0 ? App.instance.getTextLang("ott34") : Utils.formatNumber(this.dataXu[2][_index]);
          }
        };
        _proto.initTab = function initTab() {
          var _this2 = this;
          var _loop = function _loop(index) {
            _this2.tabNode.children[index].on("click", function () {
              _this2.onClickTab(index);
            });
          };
          for (var index = 0; index < this.tabNode.children.length; index++) {
            _loop(index);
          }
          this.onClickTab(0);
        };
        _proto.onClickTab = function onClickTab(index1) {
          for (var index = 0; index < this.tabNode.children.length; index++) {
            this.tabNode.children[index].children[1].active = index1 == index ? true : false;
            this.tabContents[index].active = index1 == index ? true : false;
          }
        };
        _proto.show2 = function show2(minipoer) {
          this.mini = minipoer;
          _Dialog.prototype.show.call(this);
          // App.instance.showBgMiniGame("MiniPoker");
        };

        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
        };
        _proto.loadData = function loadData() {};
        return PopupTutorial;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemClone", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentScrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemCloneXu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "parentScrollViewXu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mini", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tabNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tabContents", [_dec7], {
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

System.register("chunks:///_virtual/MiniPoker.SlotLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotLayer.ts', './MiniPoker.ItemSlot.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, instantiate, SlotLayer, ItemPK;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
    }, function (module) {
      SlotLayer = module.default;
    }, function (module) {
      ItemPK = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "62c5aekeZlAL4VtbeCtXj2Z", "MiniPoker.SlotLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotLayerPK = exports('default', (_dec = ccclass("SlotLayerPK"), _dec(_class = /*#__PURE__*/function (_SlotLayer) {
        _inheritsLoose(SlotLayerPK, _SlotLayer);
        function SlotLayerPK() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SlotLayer.call.apply(_SlotLayer, [this].concat(args)) || this;
          _this.indexBet = 1;
          _this.arrItemRandom = [];
          return _this;
        }
        var _proto = SlotLayerPK.prototype;
        _proto.newItem = function newItem(idItem) {
          var newNode = instantiate(this.itemPrefab);
          newNode.active = true;
          newNode.getComponent(ItemPK).initItemDG(137, 107, idItem, this.indexBet);
          newNode.getComponent(ItemPK).soCot = this.soCot;
          return newNode;
        };
        _proto.initRandom = function initRandom() {
          this.clearAll();
          this.arrItemRandom = [];
          for (var i = 0; i < this.soCot; i++) {
            // cot

            var subItem = [];
            var subItemRan = [];
            for (var j = 0; j < 4; j++) {
              // hang
              var randomItem = Math.floor(Math.random() * 52);
              var item = this.newItem(randomItem.toString());
              var itemTemp = item.getComponent(ItemPK);
              itemTemp.createItem(i, j, 0);
              this.nodeSlot.addChild(item);
              subItemRan.push(randomItem);
              subItem.push(item);
              itemTemp.isRunning = false;
            }
            this.arrItemRandom.push(subItemRan);
            this.arrItems.push(subItem);
          }
        };
        _proto.showWild = function showWild(arrItemWild) {
          console.log("showWild");
          for (var i = 0; i < arrItemWild.length; i++) {}
        };
        _proto.showLineWin = function showLineWin(line, mask) {};
        _proto.clearAllItemInLine = function clearAllItemInLine() {
          for (var i = 0; i < this.arrResuft.length; i++) {
            this.arrResuft[i].getComponent(ItemPK).setWin(false, false);
            // this.arrResuft[i].spriteHoaQua.setOpacity(255);
          }
        };

        return SlotLayerPK;
      }(SlotLayer)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MiniPoker', 'chunks:///_virtual/MiniPoker'); 
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