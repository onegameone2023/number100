System.register("chunks:///_virtual/ChatBoxController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChatHubSignalRClient.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, EditBox, instantiate, RichText, Component, ChatHubSignalRClient, Configs;
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
      ScrollView = module.ScrollView;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      ChatHubSignalRClient = module.default;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6bcd1OL8TdIBYJavSfUou+0", "ChatBoxController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ChatBoxController = exports('ChatBoxController', (_dec = ccclass('ChatBoxController'), _dec2 = menu("MD5/ChatBox"), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(EditBox), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChatBoxController, _Component);
        function ChatBoxController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.CHAT_CHANNEL = "game_txmd5";
          _initializerDefineProperty(_this, "itemChatTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrMessage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbMessage", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ChatBoxController.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.itemChatTemplate.active = false;
          this.edbMessage.node.on("editing-return", function () {
            _this2.sendChat();
          });
          ChatHubSignalRClient.getInstance().registerChat(this.CHAT_CHANNEL, function (_response) {});
          ChatHubSignalRClient.getInstance().receiveChat(function (response) {
            response.forEach(function (item) {
              if (item.i !== _this2.CHAT_CHANNEL) {
                return;
              }
              _this2.addMessage(item);
            });
          });
        };
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.hide = function hide() {
          this.node.active = false;
        };
        _proto.addMessage = function addMessage(data) {
          var item = null;
          for (var i1 = 0; i1 < this.scrMessage.content.children.length - 1; i1++) {
            var node = this.scrMessage.content.children[i1];
            if (!node.active) {
              item = node;
              break;
            }
          }
          if (item == null) {
            if (this.scrMessage.content.children.length - 1 >= 50) {
              item = this.scrMessage.content.children[0];
            } else {
              item = instantiate(this.itemChatTemplate);
            }
          }
          var zIndex = 0;
          for (var i2 = 0; i2 < this.scrMessage.content.children.length - 1; i2++) {
            var _node = this.scrMessage.content.children[i2];
            if (_node != item) {
              _node.setSiblingIndex(zIndex++);
            }
          }
          item.parent = this.scrMessage.content;
          if (data.v >= 6) {
            item.getComponent(RichText).string = "<color=#ffffff>" + data.c + "</color>";
          } else if (data.a + ":" + data.p === Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
            item.getComponent(RichText).string = "<color=#fff600>" + data.n + ": </c><color=#ffffff>" + data.c + "</color>";
          } else {
            item.getComponent(RichText).string = "<color=#6bfb01>" + data.n + ": </c><color=#ffffff>" + data.c + "</color>";
          }
          item.active = true;
          item.setSiblingIndex(zIndex++);
          this.scrollToBottom();
        };
        _proto.sendChat = function sendChat() {
          var msg = this.edbMessage.string.trim();
          if (msg.length == 0) {
            return;
          }
          this.edbMessage.string = "";
          ChatHubSignalRClient.getInstance().sendChat(this.CHAT_CHANNEL, msg, function (_response) {});
        };
        _proto.scrollToBottom = function scrollToBottom() {
          this.scrMessage.scrollToBottom(0.2);
        };
        return ChatBoxController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemChatTemplate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrMessage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edbMessage", [_dec5], {
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

System.register("chunks:///_virtual/PopupHistoryMD5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, Component, Label, Color, instantiate, Dialog, App, Configs, Http, Utils;
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
      ScrollView = module.ScrollView;
      Component = module.Component;
      Label = module.Label;
      Color = module.Color;
      instantiate = module.instantiate;
    }, function (module) {
      Dialog = module.default;
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
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "95364NJagVI04bOPUjGL5ep", "PopupHistoryMD5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHistoryMD5 = exports('PopupHistoryMD5', (_dec = ccclass('PopupHistoryMD5'), _dec2 = menu("MD5/PopupHistory"), _dec3 = property(Node), _dec4 = property(ScrollView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistoryMD5, _Dialog);
        function PopupHistoryMD5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll", _descriptor2, _assertThisInitialized(_this));
          _this.isGold = true;
          _this.gameID = 123;
          _this.page = 1;
          _this.per_page = 10;
          return _this;
        }
        var _proto = PopupHistoryMD5.prototype;
        _proto.onLoad = function onLoad() {
          var scrollViewEventHandler = new Component.EventHandler();
          scrollViewEventHandler.target = this.node;
          scrollViewEventHandler.component = "PopupHistoryMD5";
          scrollViewEventHandler.handler = "onScrollEvent";
          this.scroll.scrollEvents.push(scrollViewEventHandler);
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
          this.scroll.content.removeAllChildren();
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          this.page = 1;
          this.loadData();
        };
        _proto.onChangeType = function onChangeType(toggle, data) {
          var target = toggle.node;
          if (data == 1) {
            target.getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#FFF000');
            target.parent.getChildByName('xu').getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#CDBEE4');
          } else {
            target.getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#FFF000');
            target.parent.getChildByName('tipzo').getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#CDBEE4');
          }
          if (toggle.isChecked === false) return;
          this.scroll.content.removeAllChildren();
          this.isGold = !this.isGold;
          this.page = 1;
          this.loadData();
        };
        _proto.loadData = function loadData() {
          var _this2 = this;
          App.instance.showLoading(true);
          var params = {
            currencyID: Configs.Login.CurrencyID,
            gameID: this.gameID,
            betType: this.isGold ? 1 : 2,
            topCount: this.per_page * this.page
          };
          Http.get(Configs.App.DOMAIN_CONFIG['LuckyDiceMd5GetAccountHistory'], params, function (status, res) {
            if (status === 200) {
              var data = res.d;
              for (var i = _this2.page - 1; i < data.length; i++) {
                var node = instantiate(_this2.prefab);
                var bg1 = node.getChildByName("bg1");
                var bg2 = node.getChildByName("bg2");
                if (bg1 && bg2) {
                  bg1.active = i % 2 === 0;
                  bg2.active = i % 2 !== 0;
                }
                _this2.setItemData(node.getChildByName('content'), data[i]);
                node.active = true;
                _this2.scroll.content.addChild(node);
              }
            }
            App.instance.showLoading(false);
          });
        };
        _proto.setItemData = function setItemData(item, data) {
          item.getChildByName("lblSession").getComponent(Label).string = "#" + data.gameSessionID;
          item.getChildByName("lblTime").getComponent(Label).string = Utils.formatDatetime(data.startTime, 'dd/MM/yyyy HH:mm:ss');
          item.getChildByName("lblBetDoor").getComponent(Label).string = data.locationName == 1 ? App.instance.getTextLang("tx44") : App.instance.getTextLang("tx43");
          item.getChildByName("lblResult").getComponent(Label).string = data.result;
          item.getChildByName("lblBet").getComponent(Label).string = Utils.formatNumber(data.totalBetValue);
          item.getChildByName("lblRefund").getComponent(Label).string = Utils.formatNumber(data.refundValue);
          item.getChildByName("lblWin").getComponent(Label).string = Utils.formatNumber(data.prizeValue);
        };
        _proto.onScrollEvent = function onScrollEvent(node, type, data) {
          if (type == ScrollView.EventType.SCROLL_TO_BOTTOM) {
            this.page++;
            this.loadData();
          }
        };
        return PopupHistoryMD5;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec4], {
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

System.register("chunks:///_virtual/PopupHonorsMD5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Label, Sprite, Dialog, App, Configs, Http, Utils;
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
      instantiate = module.instantiate;
      Label = module.Label;
      Sprite = module.Sprite;
    }, function (module) {
      Dialog = module.default;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "6807exf3klOb5fhszwC/9az", "PopupHonorsMD5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHonors = exports('PopupHonors', (_dec = ccclass('PopupHonorsMD5'), _dec2 = menu("MD5/PopupHonors"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHonors, _Dialog);
        function PopupHonors() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "item_top1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_top2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item_top3", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameGold", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameCoin", _descriptor7, _assertThisInitialized(_this));
          _this.isBetTypeGold = true;
          _this.gameID = 123;
          return _this;
        }
        var _proto = PopupHonors.prototype;
        _proto.showDetail = function showDetail(betType) {
          this.isBetTypeGold = betType;
          _Dialog.prototype.show.call(this);
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          this.loadData();
        };
        _proto.loadData = function loadData() {
          var _this2 = this;
          App.instance.showLoading(true);
          this.items.removeAllChildren();
          var params = {
            currencyID: Configs.Login.CurrencyID,
            gameID: this.gameID,
            betType: this.isBetTypeGold ? 1 : 2,
            topCount: 50
          };
          Http.get(Configs.App.DOMAIN_CONFIG['LuckyDiceMd5GetTopDailyWinners'], params, function (status, res) {
            if (status === 200) {
              var data = res.d;
              for (var i = 0; i < data.length; i++) {
                var node = instantiate(_this2.item);
                if (i == 0) {
                  node = instantiate(_this2.item_top1);
                } else if (i == 1) {
                  node = instantiate(_this2.item_top2);
                } else if (i == 2) {
                  node = instantiate(_this2.item_top3);
                } else {
                  node.getChildByName("rank").getComponent(Label).string = (i + 1).toString();
                }
                node.getChildByName("label2").getComponent(Label).string = data[i].nickname;
                node.getChildByName("label3").getChildByName("text").getComponent(Label).string = Utils.formatNumber(data[i].prizeValue);
                node.getChildByName("label3").getChildByName("coin").getComponent(Sprite).spriteFrame = _this2.isBetTypeGold ? _this2.sprFrameGold : _this2.sprFrameCoin;
                _this2.items.addChild(node);
              }
            }
            App.instance.showLoading(false);
          });
        };
        return PopupHonors;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_top1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item_top2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item_top3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameGold", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameCoin", [_dec9], {
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

System.register("chunks:///_virtual/PopupSessionMD5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, Sprite, Color, Tween, tween, instantiate, Dialog, App, Configs, Http, Utils;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Color = module.Color;
      Tween = module.Tween;
      tween = module.tween;
      instantiate = module.instantiate;
    }, function (module) {
      Dialog = module.default;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "3ef7c7zDTBIPLgyEX8fTfFa", "PopupSessionMD5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupSessionMD5 = exports('default', (_dec = ccclass('PopupSessionMD5'), _dec2 = menu("MD5/PopupSession"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property([SpriteFrame]), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Sprite), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupSessionMD5, _Dialog);
        function PopupSessionMD5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblSession", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSessionDate", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTai", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalRefundTai", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiu", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalRefundXiu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemsTai", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemsXiu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTai", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemXiu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfDices", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprDice1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprDice2", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprDice3", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelSumDices", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "MD5", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "plainText", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeTai", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeXiu", _descriptor19, _assertThisInitialized(_this));
          _this.betType = 1;
          // 1: Gold, 2: Xu
          _this.sessionID = 0;
          _this.detailSessions = null;
          return _this;
        }
        var _proto = PopupSessionMD5.prototype;
        _proto.showDetail = function showDetail(session, detailSessions) {
          this.sessionID = session;
          this.detailSessions = detailSessions;
          this.show();
        };
        _proto.onChangeBetType = function onChangeBetType(toggle, data) {
          var target = toggle.node;
          if (data == 1) {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#FFF000');
            target.parent.getChildByName('xu').getChildByName('text').getComponent(Label).color = new Color().fromHEX('#CDBEE4');
          } else {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#FFF000');
            target.parent.getChildByName('tipzo').getChildByName('text').getComponent(Label).color = new Color().fromHEX('#CDBEE4');
          }
          if (toggle.isChecked == false) return;
          this.betType = this.betType === 1 ? 2 : 1;
          this.loadData();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.loadData();
        };
        _proto.loadData = function loadData() {
          var _this2 = this;
          this.lblSession.string = App.instance.getTextLang('txt_session') + ": #" + this.sessionID;
          this.itemsTai.removeAllChildren();
          this.itemsXiu.removeAllChildren();
          this.sprDice1.node.active = false;
          this.sprDice2.node.active = false;
          this.sprDice3.node.active = false;
          this.lblTotalBetTai.string = "";
          this.lblTotalRefundTai.string = "";
          this.lblTotalBetXiu.string = "";
          this.lblTotalRefundXiu.string = "";
          App.instance.showLoading(true);
          var totalBetTai = 0;
          var totalRefundTai = 0;
          var totalBetXiu = 0;
          var totalRefundXiu = 0;
          var sessionData = this.detailSessions.find(function (item) {
            return item.GameSessionID == _this2.sessionID;
          });
          this.sprDice1.spriteFrame = this.sfDices[sessionData.Dice1 - 1];
          this.sprDice2.spriteFrame = this.sfDices[sessionData.Dice2 - 1];
          this.sprDice3.spriteFrame = this.sfDices[sessionData.Dice3 - 1];
          this.labelSumDices.string = sessionData.Dice1 + sessionData.Dice2 + sessionData.Dice3 + "";
          this.sprDice1.node.active = true;
          this.sprDice2.node.active = true;
          this.sprDice3.node.active = true;
          this.MD5.string = '';
          this.plainText.string = '';
          this.lblSessionDate.node.active = false;
          Tween.stopAllByTarget(this.nodeTai);
          Tween.stopAllByTarget(this.nodeXiu);
          var nodeResult = sessionData.LocationIDWin === 2 ? this.nodeTai : this.nodeXiu;
          tween(nodeResult).repeatForever(tween().to(0.25, {
            scale: 1.25
          }, {
            easing: "quadOut"
          }).to(0.2, {
            scale: 0.9
          }, {
            easing: "quadIn"
          }).to(0.15, {
            scale: 1.1
          }, {
            easing: "sineOut"
          }).to(0.1, {
            scale: 1.0
          }, {
            easing: "sineInOut"
          })).start();
          var url = Configs.App.DOMAIN_CONFIG['LuckyDiceMd5GetBetDetails'] + "?currencyID=" + Configs.Login.CurrencyID + "&gameID=123&betType=" + this.betType + "&sessionID=" + this.sessionID;
          Http.post(url, {}, function (_status, res) {
            var _res$d, _res$d2;
            if (res.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.code));
              return;
            }
            _this2.MD5.string = res.d.m;
            _this2.plainText.string = res.d.p;
            _this2.lblSessionDate.node.active = true;
            _this2.lblSessionDate.string = Utils.formatDatetime(res == null || (_res$d = res.d) == null ? void 0 : _res$d.t, 'dd/MM/yyyy');
            res == null || (_res$d2 = res.d) == null || _res$d2.l.forEach(function (item, index) {
              var node = instantiate(item.locationID == 2 ? _this2.itemTai : _this2.itemXiu);
              var bg1 = node.getChildByName("bg1");
              var bg2 = node.getChildByName("bg2");
              if (bg1 && bg2) {
                bg1.active = index % 2 === 0;
                bg2.active = index % 2 !== 0;
              }
              var content = node.getChildByName("content");
              content.getChildByName("Time").getComponent(Label).string = Utils.formatDatetime(item.createdTime, 'dd/MM/yyyy HH:mm:ss');
              content.getChildByName("Account").getComponent(Label).string = item.nickname;
              content.getChildByName("Refund").getComponent(Label).string = Utils.formatNumber(item.refundValue);
              content.getChildByName("Bet").getComponent(Label).string = Utils.formatNumber(item.betValue);
              if (item.locationID == 2) {
                totalBetTai += item.betValue;
                totalRefundTai += item.refundValue;
                _this2.itemsTai.addChild(node);
              } else {
                totalBetXiu += item.betValue;
                totalRefundXiu += item.refundValue;
                _this2.itemsXiu.addChild(node);
              }
            });
            _this2.lblTotalBetTai.string = Utils.formatNumber(totalBetTai);
            _this2.lblTotalRefundTai.string = Utils.formatNumber(totalRefundTai);
            _this2.lblTotalBetXiu.string = Utils.formatNumber(totalBetXiu);
            _this2.lblTotalRefundXiu.string = Utils.formatNumber(totalRefundXiu);
          });
          App.instance.showLoading(false);
        };
        _proto.copyTextMD5 = function copyTextMD5() {
          Utils.copy(this.MD5.string);
        };
        _proto.copyTextPlainText = function copyTextPlainText() {
          Utils.copy(this.plainText.string);
        };
        _proto.actNextSession = function actNextSession() {
          var _this3 = this;
          this.sessionID++;
          var data = this.detailSessions.find(function (item) {
            return item.GameSessionID == _this3.sessionID;
          });
          if (!data) {
            this.sessionID--;
            return;
          }
          this.loadData();
        };
        _proto.actPrevSession = function actPrevSession() {
          var _this4 = this;
          this.sessionID--;
          var data = this.detailSessions.find(function (item) {
            return item.GameSessionID == _this4.sessionID;
          });
          if (!data) {
            this.sessionID++;
            return;
          }
          this.loadData();
        };
        return PopupSessionMD5;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionDate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTai", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalRefundTai", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalRefundXiu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemsTai", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itemsXiu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemTai", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemXiu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sfDices", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sprDice1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprDice2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sprDice3", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "labelSumDices", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "MD5", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "plainText", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "nodeTai", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiu", [_dec21], {
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

System.register("chunks:///_virtual/PopupSoiCauMD5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, instantiate, v3, Sprite, v2, UITransform, Color, Dialog, App, Http, Configs, Utils;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      v3 = module.v3;
      Sprite = module.Sprite;
      v2 = module.v2;
      UITransform = module.UITransform;
      Color = module.Color;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "0f2c9lwM3FKo68bAa7XdWyC", "PopupSoiCauMD5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupSoiCauMD5 = exports('PopupSoiCauMD5', (_dec = ccclass('PopupSoiCauMD5'), _dec2 = menu("MD5/SoiCau"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(Label), _dec24 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupSoiCauMD5, _Dialog);
        function PopupSoiCauMD5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lineTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXX1Template", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXX2Template", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXX3Template", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx123TaiTemplate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx123XiuTemplate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblLastSession", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx1Draw", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx2Draw", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx3Draw", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx123Draw", _descriptor11, _assertThisInitialized(_this));
          // Page1
          _initializerDefineProperty(_this, "containerPage1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconTaiPage1", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXiuPage1", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTaiPage1", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblXiuPage1", _descriptor16, _assertThisInitialized(_this));
          // Page2
          _initializerDefineProperty(_this, "containerPage2", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconPage2", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTaiPage2", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblXiuPage2", _descriptor22, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopupSoiCauMD5.prototype;
        _proto.show = function show() {
          var _this2 = this;
          _Dialog.prototype.show.call(this);
          this.loadData();
          this.scheduleOnce(function () {
            _this2.loadData();
          }, 60);
        };
        _proto.loadData = function loadData() {
          var _this3 = this;
          App.instance.showLoading(true);
          Http.post(Configs.App.DOMAIN_CONFIG['LuckyDiceMd5GetStatistical'], {}, function (status, res) {
            if (status !== 200) {
              return;
            }
            _this3.drawG88Page1(res.d.type1, res.d.type1Location1, res.d.type1Location2);
            _this3.drawG88Page2(res.d.type2, res.d.type2Location1, res.d.type2Location2);
            App.instance.showLoading(false);
          });
        };
        _proto.drawG88Page1 = function drawG88Page1(Type1, Type1Location1, Type1Location2) {
          var _this4 = this;
          this.containerPage1.removeAllChildren();
          var posX = 18;
          var posY = -18;
          var spacingX = 35;
          var spacingY = -35;
          this.lblXiuPage1.string = App.instance.getTextLang('tx44') + ": " + Type1Location1;
          this.lblTaiPage1.string = App.instance.getTextLang('tx43') + ": " + Type1Location2;
          var cleanData = [];
          for (var i = 0; i < Type1.length; i++) {
            if (Type1[i].diceSum > 0) {
              cleanData.push(Type1[i]);
            }
          }
          this.drawG88Page3(cleanData);
          this.drawG88Page4(cleanData);
          var x = 0;
          var xTemp = 0;
          var yCounter = 0;
          var currentLocationIDWin = cleanData.length > 0 ? cleanData[0].locationIDWin : null;
          cleanData.forEach(function (item) {
            var node = instantiate(item.locationIDWin === 1 ? _this4.iconXiuPage1 : _this4.iconTaiPage1);
            if (item.locationIDWin !== currentLocationIDWin) {
              if (yCounter != 0) {
                x++;
              }
              xTemp = x;
              yCounter = 0;
              currentLocationIDWin = item.locationIDWin;
            }
            var y = (x - xTemp) % 2 === 0 ? yCounter : 5 - yCounter;
            node.setPosition(v3(posX + x * spacingX, posY + y * spacingY));
            node.getChildByName("text").getComponent(Label).string = item.diceSum;
            _this4.containerPage1.addChild(node);
            if (++yCounter === 6) {
              x++;
              yCounter = 0;
            }
          });
        };
        _proto.drawG88Page2 = function drawG88Page2(Type2, Type2Location1, Type2Location2) {
          var _this5 = this;
          this.containerPage2.removeAllChildren();
          var posX = 23;
          var posY = -7;
          var spacingX = 35;
          var spacingY = -35;
          this.lblXiuPage2.string = App.instance.getTextLang('tx44') + ": " + Type2Location1;
          this.lblTaiPage2.string = App.instance.getTextLang('tx43') + ": " + Type2Location2;
          var cleanData = [];
          for (var i = 0; i < Type2.length; i++) {
            if (Type2[i].diceSum > 0) {
              cleanData.push(Type2[i]);
            }
          }
          cleanData.forEach(function (item, index) {
            var node = instantiate(_this5.iconPage2);
            var x = Math.floor(index / 6);
            var y;
            if (x % 2 === 0) {
              y = index % 6;
            } else {
              y = 5 - index % 6;
            }
            node.setPosition(v3(posX + x * spacingX, posY + y * spacingY));
            if (item.locationIDWin === 1) {
              node.getComponent(Sprite).spriteFrame = _this5.sprFrameXiu;
            } else {
              node.getComponent(Sprite).spriteFrame = _this5.sprFrameTai;
            }
            _this5.containerPage2.addChild(node);
          });
        };
        _proto.drawG88Page3 = function drawG88Page3(data) {
          var _this6 = this;
          if (data.length > 20) {
            data.splice(0, data.length - 20);
          }
          if (data.length === 0) {
            this.lblLastSession.string = App.instance.getTextLang('NO_DATA');
            return;
          }
          var last = data[data.length - 1];
          var sessionText = "(#" + last.gameSessionID + ") - " + (last.locationIDWin == 1 ? App.instance.getTextLang('tx2') : App.instance.getTextLang('tx1'));
          var diceText = last.diceSum + " (" + last.dice1 + " - " + last.dice2 + " - " + last.dice3 + ")";
          this.lblLastSession.string = App.instance.getTextLang('txt_taixiu_last_session') + " " + sessionText + "  " + diceText;
          var posX = 35;
          var posY = 0;
          var spacingX = 36;
          var spacingY = 35;
          this.xx123Draw.removeAllChildren();
          data.forEach(function (item, index) {
            var startPosXX123 = v2(posX + index * spacingX, posY + (item.diceSum - 3) * (spacingY / 3));
            var iconXX123;
            if (item.locationIDWin === 1) {
              iconXX123 = instantiate(_this6.xx123XiuTemplate);
            } else {
              iconXX123 = instantiate(_this6.xx123TaiTemplate);
            }
            iconXX123.getChildByName("text").getComponent(Label).string = item.diceSum + "";
            iconXX123.parent = _this6.xx123Draw;
            iconXX123.setPosition(v3(startPosXX123.x, startPosXX123.y, 0));
            if (index === data.length - 1) {
              return;
            }
            var nextItem = data[index + 1];
            var endPosXX123 = v2(posX + (index + 1) * spacingX, posY + (nextItem.diceSum - 3) * (spacingY / 3));
            var line = instantiate(_this6.lineTemplate);
            line.parent = _this6.xx123Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX123, endPosXX123);
            line.setPosition(v3(startPosXX123.x, startPosXX123.y, 0));
            line.angle = Utils.v2Degrees(startPosXX123, endPosXX123);
            line.getComponent(Sprite).color = new Color().fromHEX("#ffffff");
            line.setSiblingIndex(-50);
          });
        };
        _proto.drawG88Page4 = function drawG88Page4(data) {
          var _this7 = this;
          var posX = 22;
          var posY = 25;
          this.xx1Draw.removeAllChildren();
          this.xx2Draw.removeAllChildren();
          this.xx3Draw.removeAllChildren();

          // get 20 items last of data
          if (data.length > 20) {
            data.splice(0, data.length - 20);
          }
          if (data.length === 0) {
            return;
          }
          var spacingX = 36;
          var spacingY = 25;
          data.forEach(function (item, index) {
            var startPosXX1 = v2(posX + index * spacingX, posY + (item.dice1 - 1) * spacingY);
            var startPosXX2 = v2(posX + index * spacingX, posY + (item.dice2 - 1) * spacingY);
            var startPosXX3 = v2(posX + index * spacingX, posY + (item.dice3 - 1) * spacingY);
            var iconXX1 = instantiate(_this7.iconXX1Template);
            iconXX1.parent = _this7.xx1Draw;
            iconXX1.setPosition(v3(startPosXX1.x, startPosXX1.y, 0));
            var iconXX2 = instantiate(_this7.iconXX2Template);
            iconXX2.parent = _this7.xx2Draw;
            iconXX2.setPosition(v3(startPosXX2.x, startPosXX2.y, 0));
            var iconXX3 = instantiate(_this7.iconXX3Template);
            iconXX3.parent = _this7.xx3Draw;
            iconXX3.setPosition(v3(startPosXX3.x, startPosXX3.y, 0));
            if (index === data.length - 1) {
              return;
            }
            var nextItem = data[index + 1];
            var endPosXX1 = v2(posX + (index + 1) * spacingX, posY + (nextItem.dice1 - 1) * spacingY);
            var endPosXX2 = v2(posX + (index + 1) * spacingX, posY + (nextItem.dice2 - 1) * spacingY);
            var endPosXX3 = v2(posX + (index + 1) * spacingX, posY + (nextItem.dice3 - 1) * spacingY);
            var line = instantiate(_this7.lineTemplate);
            line.parent = _this7.xx1Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX1, endPosXX1);
            line.setPosition(v3(startPosXX1.x, startPosXX1.y, 0));
            line.angle = Utils.v2Degrees(startPosXX1, endPosXX1);
            line.getComponent(Sprite).color = new Color().fromHEX("#f0ff00");
            line.setSiblingIndex(0);
            line = instantiate(_this7.lineTemplate);
            line.parent = _this7.xx2Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX2, endPosXX2);
            line.setPosition(v3(startPosXX2.x, startPosXX2.y, 0));
            line.angle = Utils.v2Degrees(startPosXX2, endPosXX2);
            line.getComponent(Sprite).color = Color.BLACK.fromHEX("#ff0096");
            line.setSiblingIndex(0);
            line = instantiate(_this7.lineTemplate);
            line.parent = _this7.xx3Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX3, endPosXX3);
            line.setPosition(v3(startPosXX3.x, startPosXX3.y, 0));
            line.angle = Utils.v2Degrees(startPosXX3, endPosXX3);
            line.getComponent(Sprite).color = Color.BLACK.fromHEX("#00f0ff");
            line.setSiblingIndex(0);
          });
        };
        _proto.toggleLinePage4 = function toggleLinePage4(_event, data) {
          if (data == "1") {
            this.xx1Draw.active = !this.xx1Draw.active;
          }
          if (data == "2") {
            this.xx2Draw.active = !this.xx2Draw.active;
          }
          if (data == "3") {
            this.xx3Draw.active = !this.xx3Draw.active;
          }
        };
        return PopupSoiCauMD5;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineTemplate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconXX1Template", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconXX2Template", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconXX3Template", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xx123TaiTemplate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xx123XiuTemplate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblLastSession", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "xx1Draw", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xx2Draw", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "xx3Draw", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "xx123Draw", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "containerPage1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "iconTaiPage1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "iconXiuPage1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblTaiPage1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblXiuPage1", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "containerPage2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "iconPage2", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "lblTaiPage2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "lblXiuPage2", [_dec24], {
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

System.register("chunks:///_virtual/TaiXiuMD5", ['./ChatBoxController.ts', './PopupHistoryMD5.ts', './PopupHonorsMD5.ts', './PopupSessionMD5.ts', './PopupSoiCauMD5.ts', './TaiXiuMD5Controller.ts'], function () {
  return {
    setters: [null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TaiXiuMD5Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './Config.ts', './MiniGameTXMD5SignalRClient.ts', './MiniGame.ts', './App.ts', './BroadcastListener.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Label, EditBox, Button, Prefab, v2, Vec2, Animation, v3, tween, Sprite, Tween, UIOpacity, instantiate, Utils, Configs, MiniGameTXMD5SignalRClient, MiniGame, App, BroadcastReceiver;
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
      Label = module.Label;
      EditBox = module.EditBox;
      Button = module.Button;
      Prefab = module.Prefab;
      v2 = module.v2;
      Vec2 = module.Vec2;
      Animation = module.Animation;
      v3 = module.v3;
      tween = module.tween;
      Sprite = module.Sprite;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      MiniGameTXMD5SignalRClient = module.default;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      App = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _class3;
      cclegacy._RF.push({}, "43d81I3iABKUbulFqNBADNb", "TaiXiuMD5Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuMD5Controller = exports('default', (_dec = ccclass('TaiXiuMD5Controller'), _dec2 = menu("MD5/Play"), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(EditBox), _dec22 = property(EditBox), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property([SpriteFrame]), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Button), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Label), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Prefab), _dec38 = property(Prefab), _dec39 = property(Prefab), _dec40 = property(Prefab), _dec41 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_MiniGame) {
        _inheritsLoose(TaiXiuMD5Controller, _MiniGame);
        function TaiXiuMD5Controller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MiniGame.call.apply(_MiniGame, [this].concat(args)) || this;
          _this.GAME_ID = 123;
          _initializerDefineProperty(_this, "background", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainTime", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainWaiting", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSumDices", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTaiAll", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiuAll", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTaiCurrent", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiuCurrent", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetTai", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetXiu", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetTaiXu", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetXiuXu", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserTai", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserXiu", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBoxBetTai", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBoxBetXiu", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBet1", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBet2", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTextMD5", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dicesContainer", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listSprDice", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeTai", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeXiu", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bowl", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonNan", _descriptor29, _assertThisInitialized(_this));
          // HISTORY
          _initializerDefineProperty(_this, "historyList", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItem", _descriptor31, _assertThisInitialized(_this));
          // NOTIFICATION
          _initializerDefineProperty(_this, "lblToast", _descriptor32, _assertThisInitialized(_this));
          // 1: Gold 2: Xu
          _this.isBetTypeGold = true;
          // CHAT
          _initializerDefineProperty(_this, "chatBox", _descriptor33, _assertThisInitialized(_this));
          // Popup Container
          _initializerDefineProperty(_this, "popupContainer", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventSoiCauPrefab", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupDetailSessionPrefab", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHonorsPrefab", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor39, _assertThisInitialized(_this));
          _this.popupSoiCau = null;
          _this.popupDetailSession = null;
          _this.popupHistory = null;
          _this.popupHonors = null;
          _this.popupGuide = null;
          _this.countdownRemainTime = null;
          _this.countdownWaitingTime = null;
          _this.isBetting = false;
          _this.resetLabels = [];
          _this.lastLocationIDWin = 0;
          _this.bowlStartPos = v2(-252, 35);
          _this.isOpenBowl = false;
          _this.lastScore = 0;
          _this.isNan = false;
          _this.plainTextMD5 = "";
          _this.detailSessions = [];
          _this.isBowlMovable = false;
          _this.lastBetAmount = 0;
          _this.lastBetAmountXu = 0;
          _this.currentBetType = "";
          return _this;
        }
        var _proto = TaiXiuMD5Controller.prototype;
        _proto.onLoad = function onLoad() {
          _MiniGame.prototype.onLoad.call(this);
          TaiXiuMD5Controller.instance = this;
          this.resetLabels = [this.lblTotalBetTaiAll, this.lblTotalBetXiuAll, this.lblTotalBetTaiCurrent, this.lblTotalBetXiuCurrent];
          this.lblToast.node.parent.active = false;
          this.bowl.active = true;
          this.labelTextMD5.string = "";
          this.dicesContainer.getChildByName('result').active = false;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.lblTotalBetXiuAll.node.active = Configs.Login.PortalID > 10;
          this.lblTotalBetTaiAll.node.active = Configs.Login.PortalID > 10;
          this.bowl.on(Node.EventType.TOUCH_MOVE, function (event) {
            if (_this2.isBowlMovable === false) {
              return;
            }
            var pos = _this2.bowl.getPosition();
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this2.bowl.position = pos;
            var distance = Utils.v2Distance(new Vec2(pos.x, pos.y), _this2.bowlStartPos);
            if (Math.abs(distance) > 300) {
              _this2.showResult();
              _this2.isOpenBowl = true;
              _this2.scheduleOnce(function () {
                _this2.bowl.active = false;
              }, 2);
            }
          }, this);
        };
        _proto.show = function show() {
          _MiniGame.prototype.show.call(this);
          MiniGameTXMD5SignalRClient.getInstance().send("GetCurrentRoomsMD5", [{
            GameID: this.GAME_ID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
          this.initHubs();
        };
        _proto.dismiss = function dismiss() {
          _MiniGame.prototype.dismiss.call(this);
          // App.instance.hideGameMini("TaiXiuMD5");
        };

        _proto.onDestroy = function onDestroy() {
          MiniGameTXMD5SignalRClient.getInstance().dontReceive();
        };
        _proto.handleDicesAnimationBetting = function handleDicesAnimationBetting() {
          var _this3 = this;
          this.lblRemainTime.node.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          this.bowl.active = false;
          var animNode = this.dicesContainer.getChildByName('anim');
          animNode.active = true;
          this.dicesContainer.getChildByName('result').active = false;
          var anim = animNode.getComponent(Animation);
          anim.play();
          this.scheduleOnce(function () {
            anim.stop();
            _this3.bowl.active = true;
            _this3.bowl.setPosition(v3(_this3.bowlStartPos.x, _this3.bowlStartPos.y));
            _this3.isBowlMovable = false;
            animNode.active = false;
            _this3.lblRemainTime.node.active = true;
          }, 1);
        };
        _proto.handleOpenBowl = function handleOpenBowl() {
          var _this4 = this;
          this.isOpenBowl = true;
          tween(this.bowl).to(0.5, {
            position: v3(0, -220, 0)
          }).call(function () {
            _this4.showResult();
            _this4.scheduleOnce(function () {
              _this4.bowl.active = false;
            }, 2);
          }).start();
        };
        _proto.initHubs = function initHubs() {
          var _this5 = this;
          MiniGameTXMD5SignalRClient.getInstance().receive("currentSessionMD5", function (res) {
            _this5.lblSession.string = "#" + res.GameSessionID;
            _this5.unschedule(_this5.countdownRemainTime);
            _this5.unschedule(_this5.countdownWaitingTime);
            if (res.GameStatus === 1) {
              _this5.handleDicesAnimationBetting();
              _this5.labelTextMD5.string = res.MD5;
              _this5.handleBettingPhase(res.RemainBetting);
            } else {
              var remainWaiting = res.RemainWaiting;
              _this5.handleWaitingPhase(remainWaiting);
              if (remainWaiting > 15) {
                _this5.scheduleOnce(function () {
                  MiniGameTXMD5SignalRClient.getInstance().send("GetAccountResultMD5", [{
                    GameID: _this5.GAME_ID,
                    CurrencyID: Configs.Login.CurrencyID,
                    GameSessionID: res.GameSessionID
                  }], function () {});
                }, remainWaiting - 15);
              }
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("currentResultMD5", function (res) {
            _this5.buttonNan.enabled = false;
            _this5.isBowlMovable = true;
            _this5.plainTextMD5 = res.PlainText;
            _this5.editBoxBetTai.enabled = false;
            _this5.editBoxBetXiu.enabled = false;
            _this5.lblRemainWaiting.node.parent.active = false;
            var resultNode = _this5.dicesContainer.getChildByName('result');
            resultNode.active = true;
            var dice_1 = resultNode.getChildByName('dice_1');
            var dice_2 = resultNode.getChildByName('dice_2');
            var dice_3 = resultNode.getChildByName('dice_3');
            dice_1.getComponent(Sprite).spriteFrame = _this5.listSprDice[res.Dice1 - 1];
            dice_2.getComponent(Sprite).spriteFrame = _this5.listSprDice[res.Dice2 - 1];
            dice_3.getComponent(Sprite).spriteFrame = _this5.listSprDice[res.Dice3 - 1];
            _this5.lastLocationIDWin = res.LocationIDWin;
            _this5.lastScore = res.Dice1 + res.Dice2 + res.Dice3;
            if (_this5.isNan) {
              _this5.scheduleOnce(function () {
                if (_this5.isOpenBowl) {
                  return;
                }
                _this5.handleOpenBowl();
              }, 15);
            } else {
              _this5.handleOpenBowl();
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("currentRoomsInfoMD5", function (res) {
            for (var _iterator = _createForOfIteratorHelperLoose(res), _step; !(_step = _iterator()).done;) {
              var room = _step.value;
              if (room == null) continue;
              var isGoldRoom = room.BetType === 1;
              var isXuRoom = room.BetType === 2;
              if (_this5.isBetTypeGold && isXuRoom || !_this5.isBetTypeGold && isGoldRoom) {
                continue;
              }
              var betInfo = room.BetInfo;
              _this5.lblTotalBetXiuCurrent.string = Utils.formatMoneyOnlyK(betInfo[11].TotalBetValue1);
              _this5.lblTotalBetTaiCurrent.string = Utils.formatMoneyOnlyK(betInfo[11].TotalBetValue2);
              _this5.lblUserXiu.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount1) + ")";
              _this5.lblUserTai.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount2) + ")";
              if (Configs.Login.PortalID > 10) {
                _this5.lblTotalBetXiuAll.string = Utils.formatMoneyOnlyK(betInfo[88].TotalBetValue1);
                _this5.lblTotalBetTaiAll.string = Utils.formatMoneyOnlyK(betInfo[88].TotalBetValue2);
                _this5.lblUserXiu.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount1 + betInfo[88].TotalAccount1) + ")";
                _this5.lblUserTai.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount2 + betInfo[88].TotalAccount2) + ")";
              }
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("gameHistoryMD5", function (res) {
            _this5.historyList.removeAllChildren();
            if (res == null || res.length == 0) {
              return;
            }
            _this5.detailSessions = [];
            var _loop = function _loop(i) {
              _this5.detailSessions.push(res[i]);
              var item = instantiate(_this5.historyItem);
              item.getComponent(Sprite).spriteFrame = res[i].LocationIDWin == 1 ? _this5.sprFrameXiu : _this5.sprFrameTai;
              item.getChildByName("last").active = i === 0;
              item.on(Node.EventType.TOUCH_END, function () {
                _this5.actPopupDetailSession(res[i].GameSessionID);
              });
              if (i === 0) {
                Tween.stopAllByTarget(item);
                _this5.scheduleOnce(function () {
                  var posUp = v3(item.position.x, 5, item.position.z);
                  var posDown = v3(item.position.x, -5, item.position.z);
                  tween(item).repeatForever(tween().to(0.3, {
                    position: posUp
                  }).to(0.3, {
                    position: posDown
                  })).start();
                }, 0);
              }
              _this5.historyList.addChild(item);
            };
            for (var i = res.length - 1; i >= 0; i--) {
              _loop(i);
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("betOfAccountMD5", function (res) {
            res.forEach(function (item) {
              _this5.layoutBet1.active = false;
              _this5.layoutBet2.active = false;
              _this5.editBoxBetTai.string = '';
              _this5.editBoxBetXiu.string = '';
              if (item.BetType == 1) {
                var betLocation = item.LocationID == 1 ? _this5.lblBetXiu : _this5.lblBetTai;
                betLocation.string = Utils.formatMoneyOnlyK(item.BetValue);
              } else if (item.BetType == 2) {
                var _betLocation = item.LocationID == 1 ? _this5.lblBetXiuXu : _this5.lblBetTaiXu;
                _betLocation.string = Utils.formatMoneyOnlyK(item.BetValue);
              }
            });
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("resultOfAccountMD5", function (res) {
            var totalPrize = 0;
            res.forEach(function (item) {
              if (item.AccountID === Configs.Login.AccountID && item.PortalID === Configs.Login.PortalID && item.PrizeValue > 0) {
                totalPrize += item.PrizeValue;
              }
            });
            if (totalPrize <= 0) {
              _this5.winTextNode.active = false;
              return;
            }
            _this5.winTextNode.active = true;
            _this5.winTextNode.getComponent(Label).string = '+ ' + Utils.formatNumber(totalPrize);
            _this5.winTextNode.position = v3(_this5.winTextNode.x, -50);
            tween(_this5.winTextNode).to(3, {
              position: v3(_this5.winTextNode.x, 150)
            }).call(function () {
              _this5.winTextNode.active = false;
            }).start();
            BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          });
        };
        _proto.handleBettingPhase = function handleBettingPhase(remainTime) {
          var _this6 = this;
          if (remainTime === 60) {
            this.showToast(App.instance.getTextLang("txt_taixiu_new_session"));
            this.isOpenBowl = false;
            this.resetSessionLabels();
            this.lblBetTai.string = "0";
            this.lblBetXiu.string = "0";
            this.lblBetTaiXu.string = "0";
            this.lblBetXiuXu.string = "0";
            this.lastScore = 0;
            this.lblSumDices.string = "";
            this.lblRemainTime.string = "01:00";
            this.plainTextMD5 = "";
          }
          if (remainTime < 3) {
            this.isBetting = false;
            return;
          }
          this.isBetting = true;
          this.editBoxBetTai.enabled = true;
          this.editBoxBetXiu.enabled = true;
          this.buttonNan.enabled = true;
          this.lblRemainWaiting.node.parent.active = false;
          this.lblRemainWaiting.node.active = false;
          var secondsLeft = remainTime;
          this.unschedule(this.countdownRemainTime);
          this.schedule(this.countdownRemainTime = function () {
            _this6.hideResult();
            try {
              if (secondsLeft < 0) {
                _this6.unschedule(_this6.countdownRemainTime);
                return;
              }
              var minutes = Math.floor(secondsLeft / 60);
              var seconds = secondsLeft % 60;
              _this6.lblRemainTime.string = (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
              secondsLeft--;
            } catch (e) {
              _this6.unschedule(_this6.countdownRemainTime);
            }
          }, 1);
        };
        _proto.resetSessionLabels = function resetSessionLabels() {
          this.resetLabels.forEach(function (label) {
            return label.string = "0";
          });
          this.lblUserTai.string = "(0)";
          this.lblUserXiu.string = "(0)";
        };
        _proto.handleWaitingPhase = function handleWaitingPhase(waitingTime) {
          var _this7 = this;
          if (waitingTime > 0) this.isBetting = false;
          if (waitingTime < 19) {
            MiniGameTXMD5SignalRClient.getInstance().send("GetCurrentResultMD5", [{
              GameID: this.GAME_ID
            }], function () {});
          }
          this.lblRemainTime.node.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          var secondsLeft = waitingTime;
          this.unschedule(this.countdownWaitingTime);
          this.schedule(this.countdownWaitingTime = function () {
            try {
              if (secondsLeft < 0) {
                _this7.unschedule(_this7.countdownWaitingTime);
                return;
              }
              if (_this7.isOpenBowl === false && secondsLeft > 15) {
                var secondsLeftOpenBowl = secondsLeft - 15;
                _this7.lblRemainWaiting.string = "00:" + (secondsLeftOpenBowl < 10 ? "0" + secondsLeftOpenBowl : secondsLeftOpenBowl);
                _this7.lblRemainWaiting.node.active = true;
                _this7.lblRemainWaiting.node.parent.active = true;
                _this7.lblSumDices.node.active = false;
              } else {
                _this7.lblSumDices.node.active = secondsLeft > 12;
                _this7.lblRemainWaiting.node.active = secondsLeft <= 12;
                _this7.lblRemainWaiting.string = "00:" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
              }
              secondsLeft--;
            } catch (e) {
              _this7.unschedule(_this7.countdownWaitingTime);
            }
          }, 1);
        };
        _proto.actBet = function actBet(_event, data) {
          var _this8 = this;
          if (!this.isBetting) {
            return;
          }
          var isXiu = data == "1";
          var betValue = isXiu ? this.editBoxBetXiu.string : this.editBoxBetTai.string;
          if (betValue.length == 0) {
            return;
          }
          MiniGameTXMD5SignalRClient.getInstance().send("SetBetMd5", [{
            GameID: this.GAME_ID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2,
            Location: isXiu ? 1 : 2,
            Amount: parseInt(betValue)
          }], function (res) {
            if (res < 0) {
              _this8.showToast(App.instance.getTextLang("me" + res));
            }
            if (_this8.isBetTypeGold) {
              _this8.lastBetAmount = parseInt(betValue);
            } else {
              _this8.lastBetAmountXu = parseInt(betValue);
            }
            _this8.editBoxBetTai.string = "";
            _this8.editBoxBetXiu.string = "";
            _this8.layoutBet1.active = false;
            _this8.layoutBet2.active = false;
            BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          });
        };
        _proto.actShowLayOutBet = function actShowLayOutBet() {
          if (!this.editBoxBetTai.enabled || !this.editBoxBetXiu.enabled) {
            return;
          }
          this.layoutBet1.active = true;
          this.layoutBet2.active = false;
        };
        _proto.actShowLayoutBetCustom = function actShowLayoutBetCustom() {
          this.layoutBet1.active = false;
          this.layoutBet2.active = true;
        };
        _proto.updateCurrentBetType = function updateCurrentBetType(_event, type) {
          this.currentBetType = type;
        };
        _proto.updateBetAmount = function updateBetAmount(_event, amount) {
          var currentAmount = 0;
          if (this.currentBetType == "1") {
            currentAmount = parseInt(this.editBoxBetXiu.string) || 0;
            this.editBoxBetXiu.string = (currentAmount + parseInt(amount)).toString();
          } else if (this.currentBetType == "2") {
            currentAmount = parseInt(this.editBoxBetTai.string) || 0;
            this.editBoxBetTai.string = (currentAmount + parseInt(amount)).toString();
          }
        };
        _proto.updateBetAmountCustom = function updateBetAmountCustom(_event, amount) {
          if (this.currentBetType == "1") {
            this.editBoxBetXiu.string += amount;
          } else if (this.currentBetType == "2") {
            this.editBoxBetTai.string += amount;
          }
        };
        _proto.deleteBetAmount = function deleteBetAmount() {
          if (this.currentBetType == "1") {
            this.editBoxBetXiu.string = this.editBoxBetXiu.string.slice(0, -1);
          } else if (this.currentBetType == "2") {
            this.editBoxBetTai.string = this.editBoxBetTai.string.slice(0, -1);
          }
        };
        _proto.x2Bet = function x2Bet() {
          var lastBetAmount = this.isBetTypeGold ? this.lastBetAmount : this.lastBetAmountXu;
          var currentBetAmountXiu = parseInt(this.editBoxBetXiu.string) || 0;
          var currentBetAmountTai = parseInt(this.editBoxBetTai.string) || 0;
          if (!this.isBetting || lastBetAmount == 0 && currentBetAmountTai == 0 && currentBetAmountXiu == 0) return;
          if (this.currentBetType == "1") {
            if (currentBetAmountXiu > 0) {
              this.editBoxBetXiu.string = (currentBetAmountXiu * 2).toString();
            } else {
              this.editBoxBetXiu.string = (lastBetAmount * 2).toString();
            }
          } else if (this.currentBetType == "2") {
            if (currentBetAmountTai > 0) {
              this.editBoxBetTai.string = (currentBetAmountTai * 2).toString();
            } else {
              this.editBoxBetTai.string = (lastBetAmount * 2).toString();
            }
          }
        };
        _proto.clearBetAmount = function clearBetAmount() {
          this.editBoxBetXiu.string = "";
          this.editBoxBetTai.string = "";
        };
        _proto.actAgree = function actAgree() {
          if (!this.isBetting) {
            return;
          }
          var betValue = "";
          if (this.currentBetType == "1") {
            betValue = this.editBoxBetXiu.string;
          } else if (this.currentBetType == "2") {
            betValue = this.editBoxBetTai.string;
          }
          if (!betValue || parseInt(betValue) <= 0) {
            return;
          }
          if (this.currentBetType == "1") {
            this.actBet(null, "1");
          } else if (this.currentBetType == "2") {
            this.actBet(null, "2");
          }
        };
        _proto.copyTextMD5 = function copyTextMD5() {
          Utils.copy(this.labelTextMD5.string);
          this.showToast("Copied");
        };
        _proto.actSwitchCoinXu = function actSwitchCoinXu() {
          this.isBetTypeGold = !this.isBetTypeGold;
          this.resetSessionLabels();
          this.lblBetTai.node.active = this.isBetTypeGold;
          this.lblBetXiu.node.active = this.isBetTypeGold;
          this.lblBetTaiXu.node.active = !this.isBetTypeGold;
          this.lblBetXiuXu.node.active = !this.isBetTypeGold;
          MiniGameTXMD5SignalRClient.getInstance().send("GetCurrentRoomsMD5", [{
            GameID: this.GAME_ID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
        };
        _proto.toggleChatBox = function toggleChatBox() {
          this.chatBox.active = !this.chatBox.active;
        };
        _proto.toggleLight = function toggleLight(event) {
          var target = event.target;
          var on = target.getChildByName('on');
          var off = target.getChildByName('off');
          on.active = !on.active;
          off.active = !off.active;
          this.background.active = off.active;
        };
        _proto.toggleNan = function toggleNan(event) {
          var target = event.target;
          var on = target.getChildByName('on');
          var off = target.getChildByName('off');
          on.active = !on.active;
          off.active = !off.active;
          this.isNan = !this.isNan;
        };
        _proto.showResult = function showResult() {
          var nodeResult;
          if (this.lastLocationIDWin === 1) {
            nodeResult = this.nodeXiu;
          } else if (this.lastLocationIDWin === 2) {
            nodeResult = this.nodeTai;
          } else {
            return;
          }
          this.hideResult();
          tween(nodeResult).repeatForever(tween().to(0.25, {
            scale: v3(1.25, 1.25, 1.25)
          }, {
            easing: "quadOut"
          }).to(0.2, {
            scale: v3(0.9, 0.9, 0.9)
          }, {
            easing: "quadIn"
          }).to(0.15, {
            scale: v3(1.1, 1.1, 1.1)
          }, {
            easing: "sineOut"
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }, {
            easing: "sineInOut"
          })).start();
          this.lblRemainWaiting.node.parent.active = true;
          this.lblRemainWaiting.node.active = false;
          this.lblSumDices.string = this.lastScore.toString();
          this.labelTextMD5.string = this.plainTextMD5;
        };
        _proto.hideResult = function hideResult() {
          this.lblRemainWaiting.node.parent.active = false;
          Tween.stopAllByTarget(this.nodeTai);
          Tween.stopAllByTarget(this.nodeXiu);
          this.nodeTai.scale = v3(1, 1, 1);
          this.nodeXiu.scale = v3(1, 1, 1);
        };
        _proto.showToast = function showToast(message) {
          this.lblToast.string = message;
          var parent = this.lblToast.node.parent;
          var uiOpacity = parent.getComponent(UIOpacity);
          if (!uiOpacity) {
            uiOpacity = parent.addComponent(UIOpacity);
          }
          Tween.stopAllByTarget(parent);
          parent.active = true;
          uiOpacity.opacity = 0;
          tween(uiOpacity).to(0.1, {
            opacity: 255
          }).delay(2).to(0.2, {
            opacity: 0
          }).call(function () {
            parent.active = false;
          }).start();
        };
        _proto.actPopupEventSoiCau = function actPopupEventSoiCau() {
          if (this.popupSoiCau == null) {
            this.popupSoiCau = instantiate(this.popupEventSoiCauPrefab).getComponent("PopupSoiCauMD5");
            this.popupSoiCau.node.parent = this.popupContainer;
            this.popupSoiCau.show();
            App.instance.showLoading(false);
          } else {
            this.popupSoiCau.show();
          }
        };
        _proto.actPopupDetailSession = function actPopupDetailSession(session) {
          if (this.popupDetailSession == null) {
            this.popupDetailSession = instantiate(this.popupDetailSessionPrefab).getComponent("PopupSessionMD5");
            this.popupDetailSession.node.parent = this.popupContainer;
            this.popupDetailSession.showDetail(session, this.detailSessions);
            App.instance.showLoading(false);
          } else {
            this.popupDetailSession.showDetail(session, this.detailSessions);
          }
        };
        _proto.actPopupHistory = function actPopupHistory() {
          if (this.popupHistory == null) {
            this.popupHistory = instantiate(this.popupHistoryPrefab).getComponent("PopupHistoryMD5");
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.show();
            App.instance.showLoading(false);
          } else {
            this.popupHistory.show();
          }
        };
        _proto.actPopupHonors = function actPopupHonors() {
          if (this.popupHonors == null) {
            this.popupHonors = instantiate(this.popupHonorsPrefab).getComponent("PopupHonorsMD5");
            this.popupHonors.node.parent = this.popupContainer;
            this.popupHonors.showDetail(this.isBetTypeGold);
            App.instance.showLoading(false);
          } else {
            this.popupHonors.showDetail(this.isBetTypeGold);
          }
        };
        _proto.actPopupGuide = function actPopupGuide() {
          if (this.popupGuide == null) {
            this.popupGuide = instantiate(this.popupGuidePrefab).getComponent("Dialog");
            this.popupGuide.node.parent = this.popupContainer;
            this.popupGuide.show();
            App.instance.showLoading(false);
          } else {
            this.popupGuide.show();
          }
        };
        _proto.actGoToTaiXiuMD5Live = function actGoToTaiXiuMD5Live() {
          App.instance.openGame(Configs.InGameIds.TaiXiuMD5Live);
        };
        return TaiXiuMD5Controller;
      }(MiniGame), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainWaiting", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblSumDices", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTaiAll", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiuAll", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTaiCurrent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiuCurrent", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblBetTai", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblBetXiu", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lblBetTaiXu", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblBetXiuXu", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblUserTai", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lblUserXiu", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "winTextNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetTai", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetXiu", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "layoutBet1", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "layoutBet2", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "labelTextMD5", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "dicesContainer", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "listSprDice", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "nodeTai", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiu", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bowl", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "buttonNan", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "historyList", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "historyItem", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "chatBox", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "popupEventSoiCauPrefab", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "popupDetailSessionPrefab", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "popupHonorsPrefab", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec41], {
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
  r('virtual:///prerequisite-imports/TaiXiuMD5', 'chunks:///_virtual/TaiXiuMD5'); 
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