System.register("chunks:///_virtual/CasinoLive", ['./CasinoLive.MiniLive.ts', './XocDiaLive.ChatBox.ts', './XocDiaLive.MiniSlot.ts', './XocDiaLive.MiniSlotController.ts', './XocDiaLive.PopupHistory.ts', './XocDiaLive.PopupHistoryJackpot.ts', './XocDiaLive.PopupHonors.ts', './XocDiaLive.Stats.ts', './XocDiaLiveController.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CasinoLive.MiniLive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "8b48eeZE7VG0KvYQ7dKjVx5", "CasinoLive.MiniLive", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CasinoLiveMiniLive = exports('default', (_dec = ccclass('CasinoLiveMiniLive'), _dec2 = menu("CasinoLive/MiniLive"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CasinoLiveMiniLive, _Component);
        function CasinoLiveMiniLive() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "miniLiveNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CasinoLiveMiniLive.prototype;
        _proto.onEnable = function onEnable() {
          this.showMiniLive();
        };
        _proto.showMiniLive = function showMiniLive() {
          this.miniLiveNode.active = true;
        };
        _proto.hideMiniLive = function hideMiniLive() {
          this.miniLiveNode.active = false;
        };
        return CasinoLiveMiniLive;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "miniLiveNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XocDiaLive.ChatBox.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './ChatHubSignalRClient.ts', './Config.ts', './XocDiaLiveController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, EditBox, SpriteFrame, instantiate, Sprite, Label, Toggle, Button, tween, v3, RichText, Component, App, ChatHubSignalRClient, Configs, XocDiaLiveController;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Label = module.Label;
      Toggle = module.Toggle;
      Button = module.Button;
      tween = module.tween;
      v3 = module.v3;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }, function (module) {
      ChatHubSignalRClient = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      XocDiaLiveController = module.XocDiaLiveController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "9b92dEIhx1IQ4DQPBDGWJgG", "XocDiaLive.ChatBox", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XocDiaLiveChatBox = exports('XocDiaLiveChatBox', (_dec = menu("CasinoLive/XocDia/ChatBox"), _dec2 = property(Node), _dec3 = property(ScrollView), _dec4 = property(EditBox), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property([SpriteFrame]), _dec10 = property(Node), _dec11 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XocDiaLiveChatBox, _Component);
        function XocDiaLiveChatBox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.CHAT_CHANNEL = "game_xd_jp_live";
          _this.CHAT_MD5_CHANNEL = "game_xd_md5_live";
          _initializerDefineProperty(_this, "itemChatTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrMessage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbMessage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatBox", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatTipBox", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listGiftNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftTemplate", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftFrames", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedTIP", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipIconTemplate", _descriptor10, _assertThisInitialized(_this));
          _this.giftList = [{
            id: 1,
            value: "1K",
            key: "gift_commission"
          }, {
            id: 2,
            value: "2K",
            key: "gift_lollipop"
          }, {
            id: 3,
            value: "5K",
            key: "gift_icecream"
          }, {
            id: 4,
            value: "10K",
            key: "gift_milk_tea"
          }, {
            id: 5,
            value: "20K",
            key: "gift_beer"
          }, {
            id: 6,
            value: "50K",
            key: "gift_kiss"
          }, {
            id: 7,
            value: "100K",
            key: "gift_heart"
          }, {
            id: 8,
            value: "200K",
            key: "gift_ring"
          }, {
            id: 9,
            value: "500K",
            key: "gift_iphone"
          }, {
            id: 10,
            value: "1M",
            key: "gift_diamond"
          }, {
            id: 11,
            value: "2M",
            key: "gift_crown"
          }, {
            id: 12,
            value: "5M",
            key: "gift_motorbike"
          }, {
            id: 13,
            value: "10M",
            key: "gift_car"
          }];
          _this.giftIdSelected = 0;
          _this.giftNodeSelected = null;
          _this.defaultChatChannel = _this.CHAT_CHANNEL;
          _this.isMD5 = false;
          return _this;
        }
        var _proto = XocDiaLiveChatBox.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.isMD5 = XocDiaLiveController.instance.isMD5;
          if (this.isMD5) {
            this.defaultChatChannel = this.CHAT_MD5_CHANNEL;
          }
          this.itemChatTemplate.active = false;
          if (this.edbMessage) {
            this.edbMessage.node.on("editing-return", function () {
              _this2.sendChat();
            });
            this.chatBox.active = true;
            this.chatTipBox.active = false;
            this.listGiftNode.removeAllChildren();
            var valueStr = App.instance.getTextLang("text_tri_gia");
            this.giftList.forEach(function (item) {
              var giftNode = instantiate(_this2.giftTemplate);
              var key = item.key;
              var value = item.value;
              var name = App.instance.getTextLang(key);
              giftNode.getChildByName('ICON').getComponent(Sprite).spriteFrame = _this2.giftFrames[item.id - 1];
              giftNode.getChildByName('NAME').getComponent(Label).string = name;
              giftNode.getChildByName('VALUE').getComponent(Label).string = value;
              giftNode.on(Node.EventType.TOUCH_END, function () {
                if (_this2.giftIdSelected == item.id) {
                  _this2.giftIdSelected = 0;
                  _this2.selectedTIP.active = false;
                  giftNode.getComponent(Toggle).isChecked = false;
                  _this2.giftNodeSelected = null;
                  return;
                }
                _this2.giftNodeSelected = giftNode;
                _this2.giftIdSelected = item.id;
                _this2.selectedTIP.active = true;
                _this2.selectedTIP.getChildByName('ICON').getComponent(Sprite).spriteFrame = _this2.giftFrames[item.id - 1];
                _this2.selectedTIP.getChildByName('TITLE').getComponent(Label).string = "TIP " + name;
                _this2.selectedTIP.getChildByName('AMOUNT').getComponent(Label).string = valueStr + ": " + value;
              });
              giftNode.active = true;
              giftNode.parent = _this2.listGiftNode;
            });
          }
          ChatHubSignalRClient.getInstance().registerChat(this.defaultChatChannel, function (res) {
            if (_this2.edbMessage == null) return;
            if (res.c < 0) {
              _this2.edbMessage.placeholderLabel.string = App.instance.getTextLang("me" + res.c);
              _this2.edbMessage.placeholderLabel.enableWrapText = true;
              _this2.edbMessage.enabled = false;
              _this2.edbMessage.node.getComponentInChildren(Button).enabled = false;
              return;
            }
            _this2.edbMessage.placeholderLabel.string = App.instance.getTextLang("TLN_ENTER_CHAT");
            _this2.edbMessage.enabled = true;
            _this2.edbMessage.node.getComponentInChildren(Button).enabled = true;
          });
          ChatHubSignalRClient.getInstance().receiveChat(function (response) {
            response.forEach(function (item) {
              if (item.i !== _this2.defaultChatChannel) {
                return;
              }
              _this2.addMessage(item);
            });
          });
          ChatHubSignalRClient.getInstance().receiveTIP(function (response) {
            response.forEach(function (item) {
              if (item.i !== _this2.defaultChatChannel) {
                return;
              }
              var tipId = item.c.split("|")[3] || -1;
              if (tipId <= 0) return;
              _this2.addMessage(item, tipId);
              if (_this2.tipIconTemplate == null) return;
              if (item.a + ":" + item.p !== Configs.Login.AccountID + ":" + Configs.Login.PortalID) return;
              var iconTip = instantiate(_this2.tipIconTemplate);
              iconTip.parent = _this2.chatBox;
              iconTip.getComponent(Sprite).spriteFrame = _this2.giftFrames[tipId - 1];
              iconTip.active = true;
              iconTip.setPosition(_this2.tipIconTemplate.getPosition());
              tween(iconTip).to(0.5, {
                position: v3(-700, 200, 0)
              }, {
                easing: 'cubicOut'
              }).call(function () {
                iconTip.destroy();
              }).start();
            });
          });
        };
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.hide = function hide() {
          this.node.parent.active = false;
        };
        _proto.addMessage = function addMessage(data, tipId) {
          if (tipId === void 0) {
            tipId = -1;
          }
          var item = null;
          for (var i1 = 0; i1 < this.scrMessage.content.children.length; i1++) {
            var node = this.scrMessage.content.children[i1];
            if (!node.active) {
              item = node;
              break;
            }
          }
          if (item == null) {
            if (this.scrMessage.content.children.length >= 50) {
              item = this.scrMessage.content.children[0];
            } else {
              item = instantiate(this.itemChatTemplate);
            }
          }
          var zIndex = 0;
          for (var i2 = 0; i2 < this.scrMessage.content.children.length; i2++) {
            var _node = this.scrMessage.content.children[i2];
            if (_node != item) {
              _node.setSiblingIndex(zIndex++);
            }
          }
          item.parent = this.scrMessage.content;
          var msg = "<color=#ffffff>" + data.c + "</color>";
          if (tipId > 0) {
            msg = "<color=#ffffff>" + App.instance.getTextLang('tipped') + " <img src='" + tipId + "' width=40 height=40 alt=''/></color>";
          }
          if (data.v >= 6) {
            item.getComponent(RichText).string = msg;
          } else if (data.a + ":" + data.p === Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
            item.getComponent(RichText).string = "<color=#fff600>" + data.n + ": " + msg + "</c>";
          } else {
            item.getComponent(RichText).string = "<color=#6bfb01>" + data.n + ": " + msg;
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
          ChatHubSignalRClient.getInstance().sendChat(this.defaultChatChannel, msg, function (_response) {});
        };
        _proto.scrollToBottom = function scrollToBottom() {
          this.scrMessage.scrollToBottom(0.2);
        };
        _proto.toggleChatTip = function toggleChatTip() {
          this.chatTipBox.active = !this.chatTipBox.active;
          this.chatBox.active = !this.chatBox.active;
        };
        _proto.actTIP = function actTIP() {
          var _this3 = this;
          var gameID = this.isMD5 ? Configs.InGameIds.XocdiaMd5Live : Configs.InGameIds.XocDiaLive;
          ChatHubSignalRClient.getInstance().sendTIP(this.defaultChatChannel, gameID + "|" + this.giftIdSelected, function (response) {
            if (response.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + response.c));
            }
            _this3.giftNodeSelected.emit(Node.EventType.TOUCH_END);
            _this3.chatBox.active = true;
            _this3.chatTipBox.active = false;
          });
        };
        return XocDiaLiveChatBox;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemChatTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrMessage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edbMessage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chatBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chatTipBox", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listGiftNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "giftTemplate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "giftFrames", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectedTIP", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tipIconTemplate", [_dec11], {
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

System.register("chunks:///_virtual/XocDiaLive.MiniSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Layout, instantiate, tween, Vec3, Component;
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
      Layout = module.Layout;
      instantiate = module.instantiate;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "4d76bwXD49KC7ubes+aGftN", "XocDiaLive.MiniSlot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XocDiaLiveMiniSlot = exports('XocDiaLiveMiniSlot', (_dec = ccclass('XocDiaLiveMiniSlot'), _dec2 = menu('CasinoLive/XocDia/MiniSlot'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XocDiaLiveMiniSlot, _Component);
        function XocDiaLiveMiniSlot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemRed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemWhite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemHeight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacingY", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalPairs", _descriptor6, _assertThisInitialized(_this));
          _this.isSpinning = false;
          return _this;
        }
        var _proto = XocDiaLiveMiniSlot.prototype;
        _proto.onLoad = function onLoad() {
          this.setupItems();
        };
        _proto.setupItems = function setupItems() {
          this.contentNode.removeAllChildren();
          var layout = this.contentNode.getComponent(Layout);
          if (layout) layout.enabled = false;
          var stepY = this.itemHeight + this.spacingY;
          for (var i = 0; i < this.totalPairs * 2; i++) {
            var prefab = i % 2 === 0 ? this.itemRed : this.itemWhite;
            var item = instantiate(prefab);
            item.setParent(this.contentNode);
            item.setPosition(0, -i * stepY, 0);
          }
          this.contentNode.setPosition(0, 15, 0);
          if (layout) layout.enabled = true;
        };
        _proto.spin = function spin(resultIndex) {
          var _this2 = this;
          if (this.isSpinning) return;
          this.isSpinning = true;
          var totalItems = this.totalPairs * 2;
          var stepY = this.itemHeight + this.spacingY;
          var initialY = 15;
          var targetY = initialY + (totalItems - (resultIndex % 2 + 1)) * stepY;
          var duration = 3.5;
          tween(this.contentNode).to(duration, {
            position: new Vec3(0, targetY, 0)
          }, {
            easing: 'cubicOut'
          }).call(function () {
            _this2.isSpinning = false;
          }).start();
        };
        return XocDiaLiveMiniSlot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemRed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemWhite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "totalPairs", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XocDiaLive.MiniSlotController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './XocDiaLive.MiniSlot.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, XocDiaLiveMiniSlot;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      XocDiaLiveMiniSlot = module.XocDiaLiveMiniSlot;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "daeadFBz3xEs4Y3nUpyxg3Y", "XocDiaLive.MiniSlotController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XocDiaSlotController = exports('XocDiaSlotController', (_dec = ccclass('XocDiaSlotController'), _dec2 = menu('CasinoLive/XocDia/SlotController'), _dec3 = property(XocDiaLiveMiniSlot), _dec4 = property(XocDiaLiveMiniSlot), _dec5 = property(XocDiaLiveMiniSlot), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XocDiaSlotController, _Component);
        function XocDiaSlotController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "slot1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slot2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slot3", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = XocDiaSlotController.prototype;
        _proto.start = function start() {
          XocDiaSlotController.instance = this;
          this.slot1.setupItems();
          this.slot2.setupItems();
          this.slot3.setupItems();
        };
        _proto.startSpinWithResults = function startSpinWithResults(results, callback) {
          var _this2 = this;
          if (callback === void 0) {
            callback = null;
          }
          this.slot1.setupItems();
          this.slot2.setupItems();
          this.slot3.setupItems();
          this.slot1.spin(results[0]);
          this.slot2.spin(results[1]);
          this.slot3.spin(results[2]);
          this.scheduleOnce(function () {
            _this2.slot1.isSpinning = false;
            _this2.slot2.isSpinning = false;
            _this2.slot3.isSpinning = false;
            if (callback) callback();
          }, 4);
        };
        return XocDiaSlotController;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slot1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slot2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "slot3", [_dec5], {
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

System.register("chunks:///_virtual/XocDiaLive.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Config.ts', './Http.ts', './App.ts', './Utils.ts', './XocDiaLiveController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, SpriteFrame, Sprite, Label, instantiate, Layout, Dialog, Configs, Http, App, Utils, XocDiaLiveController;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      instantiate = module.instantiate;
      Layout = module.Layout;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      XocDiaLiveController = module.XocDiaLiveController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "d20c2Gp5ydAQafM6jE84qb0", "XocDiaLive.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RESULT = /*#__PURE__*/function (RESULT) {
        RESULT[RESULT["NONE"] = -1] = "NONE";
        RESULT[RESULT["FOUR_WHITE"] = 0] = "FOUR_WHITE";
        RESULT[RESULT["ONE_RED_THREE_WHITE"] = 1] = "ONE_RED_THREE_WHITE";
        RESULT[RESULT["TWO_RED_TWO_WHITE"] = 2] = "TWO_RED_TWO_WHITE";
        RESULT[RESULT["THREE_RED_ONE_WHITE"] = 3] = "THREE_RED_ONE_WHITE";
        RESULT[RESULT["FOUR_RED"] = 4] = "FOUR_RED";
        return RESULT;
      }(RESULT || {});
      var GATE = /*#__PURE__*/function (GATE) {
        GATE[GATE["EVEN"] = 1] = "EVEN";
        GATE[GATE["ODD"] = 2] = "ODD";
        GATE[GATE["ONE_RED_THREE_WHITE"] = 3] = "ONE_RED_THREE_WHITE";
        GATE[GATE["THREE_RED_ONE_WHITE"] = 4] = "THREE_RED_ONE_WHITE";
        GATE[GATE["FOUR_WHITE"] = 5] = "FOUR_WHITE";
        GATE[GATE["FOUR_RED"] = 6] = "FOUR_RED";
        GATE[GATE["TWO_RED_TWO_WHITE"] = 7] = "TWO_RED_TWO_WHITE";
        return GATE;
      }(GATE || {});
      var XocDiaLivePopupHistory = exports('XocDiaLivePopupHistory', (_dec = ccclass('XocDiaLivePopupHistory'), _dec2 = menu("CasinoLive/XocDia/PopupHistory"), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property([Sprite]), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(XocDiaLivePopupHistory, _Dialog);
        function XocDiaLivePopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prevPage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextPage", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerPage", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listPage", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "activePage", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inactivePage", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailSession", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprRed", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprWhite", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailDots", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblDetailSession", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailItemTemplate", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "md5Node", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "md5ResultNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "md5Label", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "md5PlainText", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyMd5", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyPlainText", _descriptor20, _assertThisInitialized(_this));
          _this.maxPage = 0;
          _this.currentPage = 1;
          _this.page = 1;
          _this.per_page = 10;
          _this.isMD5 = false;
          return _this;
        }
        var _proto = XocDiaLivePopupHistory.prototype;
        _proto.dismiss = function dismiss() {
          this.hideDetail();
          _Dialog.prototype.dismiss.call(this);
          this.scroll.content.removeAllChildren();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.isMD5 = XocDiaLiveController.instance.isMD5;
          this.page = 1;
          this.maxPage = -1;
          this.hideDetail();
          this.loadData();
        };
        _proto.refreshPageList = function refreshPageList() {
          this.listPage.removeAllChildren();
          var startPage = Math.max(1, this.currentPage - 2);
          var endPage = Math.min(this.maxPage, this.currentPage + 2);
          for (var i = startPage; i <= endPage; i++) {
            var pageNode = this.createPageNode(i);
            this.listPage.addChild(pageNode);
          }
        };
        _proto.createPageNode = function createPageNode(pageNumber) {
          var _this2 = this;
          var isActive = this.currentPage === pageNumber;
          var pageTemplate = isActive ? this.activePage : this.inactivePage;
          var pageNode = instantiate(pageTemplate);
          pageNode.getComponentInChildren(Label).string = pageNumber.toString();
          pageNode.on(Node.EventType.TOUCH_END, function () {
            _this2.currentPage = pageNumber;
            _this2.loadData();
          });
          return pageNode;
        };
        _proto.loadData = function loadData() {
          var _this3 = this;
          App.instance.showLoading(true);
          this.scroll.content.removeAllChildren();
          var params = {
            currencyID: Configs.Login.CurrencyID,
            betType: 1,
            page: this.currentPage,
            topCount: 10
          };
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG[this.isMD5 ? 'XocdiaMd5LiveGetAccountHistory' : 'XocdiaLiveGetAccountHistory'], params, function (status, res) {
            App.instance.showLoading(false);
            if (_this3.maxPage < 0) {
              _this3.maxPage = Math.ceil(res.p[0] / _this3.per_page);
              _this3.containerPage.active = _this3.maxPage !== 0;
              if (_this3.maxPage == 0) {
                return;
              }
              if (_this3.currentPage > _this3.maxPage) {
                _this3.currentPage = _this3.maxPage;
              }
              _this3.refreshPageList();
            }
            var data = res.d;
            for (var i = _this3.page - 1; i < data.length; i++) {
              var node = instantiate(_this3.prefab);
              var bg1 = node.getChildByName("bg1");
              var bg2 = node.getChildByName("bg2");
              if (bg1 && bg2) {
                bg1.active = i % 2 === 0;
                bg2.active = i % 2 !== 0;
              }
              _this3.setItemData(node.getChildByName('content'), data[i]);
              _this3.scroll.content.addChild(node);
            }
            if (_this3.currentPage == 1) {
              _this3.prevPage.active = false;
            }
            if (data.length == 0) {
              if (_this3.currentPage > 1) {
                _this3.currentPage--;
              }
              return;
            }
            _this3.prevPage.active = _this3.currentPage > 1;
            _this3.nextPage.active = _this3.currentPage < _this3.maxPage;
            _this3.refreshPageList();
          });
        };
        _proto.onPrevPage = function onPrevPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
            this.loadData();
          }
        };
        _proto.onNextPage = function onNextPage() {
          if (this.currentPage < this.maxPage) {
            this.currentPage++;
            this.loadData();
          }
        };
        _proto.setItemData = function setItemData(item, data) {
          var _data$resultPrizes,
            _data$resultPrizes2,
            _this4 = this;
          var totalBet = ((_data$resultPrizes = data.resultPrizes) == null ? void 0 : _data$resultPrizes.reduce(function (sum, prize) {
            return sum + prize.betValue;
          }, 0)) || 0;
          var totalPrize = ((_data$resultPrizes2 = data.resultPrizes) == null ? void 0 : _data$resultPrizes2.reduce(function (sum, prize) {
            return sum + prize.awardValue;
          }, 0)) || 0;
          if (totalBet <= 0) return;
          item.parent.active = true;
          item.getChildByName("lblSession").getComponent(Label).string = "#" + data.gameSessionID;
          item.getChildByName("lblTime").getComponent(Label).string = Utils.formatDatetime(data.startTime, 'dd/MM/yyyy HH:mm:ss');
          item.getChildByName("lblResult").getComponent(Label).string = this.getResultTextFromResultID(data.resultID);
          item.getChildByName("lblBet").getComponent(Label).string = Utils.formatNumber(totalBet);
          item.getChildByName("lblPrize").getComponent(Label).string = Utils.formatNumber(totalPrize);
          item.getChildByName("detail").on(Node.EventType.TOUCH_END, function () {
            var _data$resultData, _data$resultPrizes3, _data$resultPrizes4;
            if (_this4.isMD5) {
              _this4.md5Node.active = true;
              _this4.md5ResultNode.active = true;
              _this4.md5Label.string = data.mD5 || '';
              _this4.md5PlainText.string = data.plainText || '';
              _this4.copyMd5.on(Node.EventType.TOUCH_END, function () {
                Utils.copy(_this4.md5Label.string);
              });
              _this4.copyPlainText.on(Node.EventType.TOUCH_END, function () {
                Utils.copy(_this4.md5PlainText.string);
              });
            } else {
              _this4.md5Node.active = false;
              _this4.md5ResultNode.active = false;
            }
            _this4.detailSession.children.forEach(function (node) {
              if (node.name == 'note' || node.name == 'header' || node.name == 'close' || node == _this4.detailItemTemplate) return;
              node.destroy();
            });
            var headerNode = _this4.detailSession.getChildByName('header');
            _this4.lblDetailSession.string = App.instance.getTextLang('txt_session') + (" #" + data.gameSessionID);
            (_data$resultData = data.resultData) == null || _data$resultData.split(',').sort(function (a, b) {
              return Number(b) - Number(a);
            }).forEach(function (item, idx) {
              _this4.detailDots[idx].spriteFrame = item === '1' ? _this4.sprRed : _this4.sprWhite;
            });
            _this4.detailSession.getComponent(Layout).enabled = false;
            (_data$resultPrizes3 = data.resultPrizes) == null || _data$resultPrizes3.forEach(function (item, index) {
              var detailNode = instantiate(_this4.detailItemTemplate);
              var content = detailNode.getChildByName("content");
              content.getChildByName("gate").getComponent(Label).string = _this4.getGateTextFromID(item.locationId);
              content.getChildByName("bet").getComponent(Label).string = Utils.formatNumber(item.betValue);
              content.getChildByName("prize").getComponent(Label).string = Utils.formatNumber(item.awardValue);
              detailNode.active = true;
              detailNode.parent = _this4.detailSession;
              _this4.detailSession.insertChild(detailNode, _this4.detailSession.children.indexOf(headerNode) + index + 1);
            });
            var totalItem = ((_data$resultPrizes4 = data.resultPrizes) == null ? void 0 : _data$resultPrizes4.length) || 0;
            if (data.jackpotValue > 0) {
              totalItem += 1;
              var detailNode = instantiate(_this4.detailItemTemplate);
              var content = detailNode.getChildByName("content");
              content.getChildByName("bet").getComponent(Label).string = Utils.formatNumber(totalBet);
              content.getChildByName("prize").getComponent(Label).string = Utils.formatNumber(data.jackpotValue);
              detailNode.active = true;
              detailNode.parent = _this4.detailSession;
              _this4.detailSession.insertChild(detailNode, _this4.detailSession.children.indexOf(headerNode) + totalItem);
            }
            var detailTotalNode = instantiate(_this4.detailItemTemplate);
            var contentTotal = detailTotalNode.getChildByName("content");
            contentTotal.getChildByName("gate").getComponent(Label).string = App.instance.getTextLang('sl4');
            contentTotal.getChildByName("bet").getComponent(Label).string = Utils.formatNumber(totalBet);
            contentTotal.getChildByName("prize").getComponent(Label).string = Utils.formatNumber(totalPrize);
            detailTotalNode.active = true;
            detailTotalNode.parent = _this4.detailSession;
            _this4.detailSession.insertChild(detailTotalNode, _this4.detailSession.children.indexOf(headerNode) + totalItem + 1);
            _this4.detailSession.getComponent(Layout).enabled = true;
            _this4.detailSession.getComponent(Layout).updateLayout();
            _this4.detailSession.active = true;
          });
        };
        _proto.hideDetail = function hideDetail() {
          this.detailSession.active = false;
        };
        _proto.getResultTextFromResultID = function getResultTextFromResultID(resultID) {
          var evenText = App.instance.getTextLang('ca242');
          var oddText = App.instance.getTextLang('ca243');
          var redText = App.instance.getTextLang('ca177');
          var whiteText = App.instance.getTextLang('text_white');
          switch (resultID) {
            case RESULT.FOUR_WHITE:
              return evenText + " (4 " + whiteText + ")";
            case RESULT.ONE_RED_THREE_WHITE:
              return oddText + " (1 " + redText + " 3 " + whiteText + ")";
            case RESULT.TWO_RED_TWO_WHITE:
              return evenText + " (2 " + redText + " 2 " + whiteText + ")";
            case RESULT.THREE_RED_ONE_WHITE:
              return oddText + " (3 " + redText + " 1 " + whiteText + ")";
            case RESULT.FOUR_RED:
              return evenText + " (4 " + redText + ")";
            default:
              return '';
          }
        };
        _proto.getGateTextFromID = function getGateTextFromID(gateID) {
          var evenText = App.instance.getTextLang('ca242');
          var oddText = App.instance.getTextLang('ca243');
          var redText = App.instance.getTextLang('ca177');
          var whiteText = App.instance.getTextLang('text_white');
          switch (gateID) {
            case GATE.EVEN:
              return evenText;
            case GATE.ODD:
              return oddText;
            case GATE.ONE_RED_THREE_WHITE:
              return "1 " + redText + " 3 " + whiteText;
            case GATE.THREE_RED_ONE_WHITE:
              return "3 " + redText + " 1 " + whiteText;
            case GATE.FOUR_RED:
              return "4 " + redText;
            case GATE.FOUR_WHITE:
              return "4 " + whiteText;
            case GATE.TWO_RED_TWO_WHITE:
              return "2 " + redText + " 2 " + whiteText;
            default:
              return '';
          }
        };
        return XocDiaLivePopupHistory;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prevPage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nextPage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "containerPage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listPage", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "activePage", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "inactivePage", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "detailSession", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprRed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sprWhite", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "detailDots", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblDetailSession", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "detailItemTemplate", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "md5Node", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "md5ResultNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "md5Label", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "md5PlainText", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "copyMd5", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "copyPlainText", [_dec22], {
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

System.register("chunks:///_virtual/XocDiaLive.PopupHistoryJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, RichText, instantiate, Dialog, App, Http, Configs, Utils;
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
      RichText = module.RichText;
      instantiate = module.instantiate;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "8a5d9ax1+FO3rtQZNK2UsrC", "XocDiaLive.PopupHistoryJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XocDiaLivePopupHistoryJackpot = exports('XocDiaLivePopupHistoryJackpot', (_dec = ccclass('XocDiaLivePopupHistoryJackpot'), _dec2 = menu('CasinoLive/XocDia/PopupHistoryJackpot'), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(RichText), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(XocDiaLivePopupHistoryJackpot, _Dialog);
        function XocDiaLivePopupHistoryJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblSession", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSessionDatetime", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalAccounts", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerDetail", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContainer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemPrefab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalJackpotValue", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultChan", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultLe", _descriptor9, _assertThisInitialized(_this));
          _this.sessionList = [];
          _this.currentSessionIndex = 0;
          return _this;
        }
        var _proto = XocDiaLivePopupHistoryJackpot.prototype;
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.itemPrefab.active = false;
          this.lblTotalAccounts.string = '0';
          this.lblSession.string = App.instance.getTextLang('txt_session') + " #0";
          this.lblSessionDatetime.string = '';
          this.containerDetail.active = false;
          this.lblTotalJackpotValue.string = App.instance.getTextLang('txt_jackpot_prize_jackpot') + ' 0';
          this.getDataSession();
        };
        _proto.getDataSession = function getDataSession() {
          var _this2 = this;
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG['XocdiaLiveGetJackPotHistory'], {
            topCount: 50
          }, function (_status, res) {
            App.instance.showLoading(false);
            if (res.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.c));
              return;
            }
            _this2.sessionList = res.d;
            _this2.currentSessionIndex = 0;
            _this2.populateSession();
          });
        };
        _proto.populateSession = function populateSession() {
          if (!this.sessionList || this.sessionList.length === 0) {
            return;
          }
          this.containerDetail.active = true;
          var session = this.sessionList[this.currentSessionIndex];
          this.lblSession.string = App.instance.getTextLang('txt_session') + (" #" + session.gameSessionID);
          this.lblSessionDatetime.string = Utils.formatDatetime(session.createdTime, 'dd/MM/yyyy HH:mm:ss');
          this.lblTotalAccounts.string = "(" + session.totalAccounts + ")";
          this.resultChan.active = session.locationJackpot === 1;
          this.resultLe.active = session.locationJackpot === 2;
          this.lblTotalJackpotValue.string = App.instance.getTextLang('txt_jackpot_prize_jackpot') + (" <color=#fff000>" + Utils.formatNumber(session.jackpotFund) + "</color>");
          this.getJackpotAccount(session.gameSessionID);
        };
        _proto.getJackpotAccount = function getJackpotAccount(sessionID) {
          var _this3 = this;
          App.instance.showLoading(true);
          this.itemContainer.removeAllChildren();
          Http.get(Configs.App.DOMAIN_CONFIG['XocdiaLiveGetJackpotAward'], {
            GameSessionID: sessionID
          }, function (_status, res) {
            App.instance.showLoading(false);
            if (res.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.c));
              return;
            }
            res.d.forEach(function (item, index) {
              var itemNode = instantiate(_this3.itemPrefab);
              var bg1 = itemNode.getChildByName("bg1");
              var bg2 = itemNode.getChildByName("bg2");
              var content = itemNode.getChildByName("content");
              if (bg1 && bg2) {
                bg1.active = index % 2 === 0;
                bg2.active = index % 2 !== 0;
              }
              content.getChildByName("account").getComponent(Label).string = item.Nickname || item.nickname;
              content.getChildByName("bet").getComponent(Label).string = Utils.formatNumber(item.BetValue || item.betValue);
              content.getChildByName("prize").getComponent(Label).string = Utils.formatNumber(item.JackpotValue || item.jackpotValue);
              itemNode.active = true;
              itemNode.parent = _this3.itemContainer;
            });
          });
        };
        _proto.nextSession = function nextSession() {
          this.currentSessionIndex = Math.max(this.currentSessionIndex - 1, 0);
          this.populateSession();
        };
        _proto.prevSession = function prevSession() {
          this.currentSessionIndex = Math.min(this.currentSessionIndex + 1, this.sessionList.length - 1);
          this.populateSession();
        };
        return XocDiaLivePopupHistoryJackpot;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionDatetime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalAccounts", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "containerDetail", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalJackpotValue", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "resultChan", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "resultLe", [_dec11], {
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

System.register("chunks:///_virtual/XocDiaLive.PopupHonors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts', './XocDiaLiveController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Sprite, Label, Dialog, App, Configs, Http, Utils, XocDiaLiveController;
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
      Sprite = module.Sprite;
      Label = module.Label;
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
    }, function (module) {
      XocDiaLiveController = module.XocDiaLiveController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "8928aoWRrZN8IZ19gZvuYaG", "XocDiaLive.PopupHonors", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XocDiaLivePopupHonors = exports('XocDiaLivePopupHonors', (_dec = ccclass('XocDiaLivePopupHonors'), _dec2 = menu("CasinoLive/XocDia/PopupHonors"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property([SpriteFrame]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(XocDiaLivePopupHonors, _Dialog);
        function XocDiaLivePopupHonors() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NoDataNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dataNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rankBg1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rankBg2", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconRanks", _descriptor7, _assertThisInitialized(_this));
          _this.isMD5 = false;
          return _this;
        }
        var _proto = XocDiaLivePopupHonors.prototype;
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.isMD5 = XocDiaLiveController.instance.isMD5;
          this.loadData();
        };
        _proto.loadData = function loadData() {
          var _this2 = this;
          App.instance.showLoading(true);
          this.items.removeAllChildren();
          this.dataNode.active = false;
          this.NoDataNode.active = true;
          Http.get(Configs.App.DOMAIN_CONFIG[this.isMD5 ? 'XocdiaMd5LiveGetTopWinner' : 'XocdiaLiveGetTopWinner'], {
            currencyID: Configs.Login.CurrencyID,
            topCount: 50
          }, function (_status, res) {
            App.instance.showLoading(false);
            if (res.d.length === 0) return;
            _this2.dataNode.active = true;
            _this2.NoDataNode.active = false;
            res.d.forEach(function (item, index) {
              var node = instantiate(_this2.item);
              node.getComponent(Sprite).spriteFrame = index < 3 ? _this2.rankBg1 : _this2.rankBg2;
              var rankNode = node.getChildByName("rank");
              rankNode.getChildByName("text").active = index >= 3;
              rankNode.getChildByName("rank").active = index < 3;
              if (index < 3) {
                rankNode.getComponentInChildren(Sprite).spriteFrame = _this2.iconRanks[index];
              } else {
                rankNode.getComponentInChildren(Label).string = (index + 1).toString();
              }
              node.getChildByName("label2").getComponent(Label).string = item.Nickname;
              node.getChildByName("label3").getChildByName("text").getComponent(Label).string = Utils.formatNumber(item.PrizeValue);
              _this2.items.addChild(node);
            });
          });
        };
        return XocDiaLivePopupHonors;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NoDataNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dataNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rankBg1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rankBg2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconRanks", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XocDiaLive.Stats.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './XocDiaLiveController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Label, Sprite, instantiate, Color, v3, Component, XocDiaLiveController;
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
      Label = module.Label;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Color = module.Color;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      XocDiaLiveController = module.XocDiaLiveController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class3;
      cclegacy._RF.push({}, "5be3bKPMNhMP5QHvToIXn1V", "XocDiaLive.Stats", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XocDiaLiveStats = exports('XocDiaLiveStats', (_dec = menu("CasinoLive/XocDia/Stats"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Sprite), _dec14 = property(Sprite), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XocDiaLiveStats, _Component);
        function XocDiaLiveStats() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "container1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "container2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "template", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconRed", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconWhite", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemPage1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemPage2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "percentRed1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "percentWhite1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "percentRed2", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "percentWhite2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprPercentRed1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprPercentRed2", _descriptor13, _assertThisInitialized(_this));
          _this.data = null;
          return _this;
        }
        var _proto = XocDiaLiveStats.prototype;
        _proto.onLoad = function onLoad() {
          XocDiaLiveStats.instance = this;
          this.container1.active = true;
          this.container2.active = false;
          this.listItemPage1.removeAllChildren();
          this.listItemPage2.removeAllChildren();
        };
        _proto.start = function start() {
          this.updateData(XocDiaLiveController.instance.statsData);
          this.container1.active = true;
          this.container2.active = false;
        };
        _proto.updateData = function updateData(data) {
          this.data = data;
          var total = this.data.length;
          var totalRed = this.data.filter(function (item) {
            return item.ResultID % 2 === 0;
          }).length;
          var totalWhite = total - totalRed;
          var percent = function percent(count) {
            return total > 0 ? (count / total * 100).toFixed(0) + "%" : "0%";
          };
          var percentRed = percent(totalRed);
          var percentWhite = percent(totalWhite);
          this.sprPercentRed1.fillRange = totalRed / total;
          this.sprPercentRed2.fillRange = totalRed / total;
          this.percentRed1.string = percentRed;
          this.percentWhite1.string = percentWhite;
          this.percentRed2.string = percentRed;
          this.percentWhite2.string = percentWhite;
          this.drawContainer1();
          this.drawContainer2();
        };
        _proto.toggleContainer = function toggleContainer(toggle) {
          if (toggle.isChecked === false) return;
          this.container1.active = !this.container1.active;
          this.container2.active = !this.container2.active;
        };
        _proto.drawContainer1 = function drawContainer1() {
          var _this2 = this;
          this.listItemPage1.removeAllChildren();
          var posX = 17;
          var posY = -17;
          var spacingX = 33;
          var spacingY = -33;
          var x = 0;
          var xTemp = 0;
          var yCounter = 0;
          var currentResultIDParity = this.data.length > 0 ? this.data[0].ResultID % 2 : null;
          this.data.forEach(function (item) {
            var node = instantiate(_this2.template);
            var resultIDParity = item.ResultID % 2;
            node.getComponent(Sprite).spriteFrame = resultIDParity === 0 ? _this2.iconRed : _this2.iconWhite;
            node.getComponentInChildren(Label).color = resultIDParity === 0 ? new Color("#FFFFFF") : new Color("#000000");
            node.getComponentInChildren(Label).string = item.ResultID;
            if (resultIDParity !== currentResultIDParity) {
              if (yCounter != 0) {
                x++;
              }
              xTemp = x;
              yCounter = 0;
              currentResultIDParity = resultIDParity;
            }
            var y = (x - xTemp) % 2 === 0 ? yCounter : 5 - yCounter;
            node.setPosition(v3(posX + x * spacingX, posY + y * spacingY));
            _this2.listItemPage1.addChild(node);
            if (++yCounter === 6) {
              x++;
              yCounter = 0;
            }
          });
        };
        _proto.drawContainer2 = function drawContainer2() {
          var _this3 = this;
          this.listItemPage2.removeAllChildren();
          var posX = 54;
          var posY = -50;
          var spacingX = 49;
          var spacingY = -35;
          this.data.forEach(function (item, index) {
            var node = instantiate(_this3.template);
            var x = Math.floor(index / 6);
            var y;
            if (x % 2 === 0) {
              y = index % 6;
            } else {
              y = 5 - index % 6;
            }
            node.setPosition(v3(posX + x * spacingX, posY + y * spacingY));
            node.getComponent(Sprite).spriteFrame = item.ResultID % 2 === 0 ? _this3.iconRed : _this3.iconWhite;
            node.getComponentInChildren(Label).color = item.ResultID % 2 === 0 ? new Color("#FFFFFF") : new Color("#000000");
            node.getComponentInChildren(Label).string = item.ResultID;
            _this3.listItemPage2.addChild(node);
          });
        };
        return XocDiaLiveStats;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "container1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "container2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "template", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconRed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconWhite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listItemPage1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "listItemPage2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "percentRed1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "percentWhite1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "percentRed2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "percentWhite2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sprPercentRed1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprPercentRed2", [_dec14], {
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

System.register("chunks:///_virtual/XocDiaLiveController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config.ts', './XocDiaLiveSignalRClient.ts', './Utils.ts', './App.ts', './XocDiaLive.Stats.ts', './XocDiaLive.MiniSlotController.ts', './ButtonMiniGame.ts', './Http.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Label, Node, Button, SpriteFrame, WebView, Prefab, Vec3, Vec2, instantiate, tween, Animation, UIOpacity, UITransform, Tween, Component, Configs, XocDiaLiveSignalRClient, Utils, App, XocDiaLiveStats, XocDiaSlotController, ButtonMiniGame, Http;
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
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      WebView = module.WebView;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      tween = module.tween;
      Animation = module.Animation;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      XocDiaLiveSignalRClient = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      App = module.default;
    }, function (module) {
      XocDiaLiveStats = module.XocDiaLiveStats;
    }, function (module) {
      XocDiaSlotController = module.XocDiaSlotController;
    }, function (module) {
      ButtonMiniGame = module.default;
    }, function (module) {
      Http = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _class3;
      cclegacy._RF.push({}, "ce5c9Hrb/5NArsw6ZQbi36e", "XocDiaLiveController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RESULT = /*#__PURE__*/function (RESULT) {
        RESULT[RESULT["NONE"] = -1] = "NONE";
        RESULT[RESULT["FOUR_WHITE"] = 0] = "FOUR_WHITE";
        RESULT[RESULT["ONE_RED_THREE_WHITE"] = 1] = "ONE_RED_THREE_WHITE";
        RESULT[RESULT["TWO_RED_TWO_WHITE"] = 2] = "TWO_RED_TWO_WHITE";
        RESULT[RESULT["THREE_RED_ONE_WHITE"] = 3] = "THREE_RED_ONE_WHITE";
        RESULT[RESULT["FOUR_RED"] = 4] = "FOUR_RED";
        return RESULT;
      }(RESULT || {});
      var chipValues = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 10000000];
      var XocDiaLiveController = exports('XocDiaLiveController', (_dec = ccclass('XocDiaLiveController'), _dec2 = menu('CasinoLive/XocDia/Controller'), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Button), _dec18 = property([Node]), _dec19 = property(Node), _dec20 = property([SpriteFrame]), _dec21 = property(Node), _dec22 = property([Sprite]), _dec23 = property([SpriteFrame]), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Button), _dec30 = property(Button), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(WebView), _dec34 = property(Node), _dec35 = property(WebView), _dec36 = property(Node), _dec37 = property(Prefab), _dec38 = property(Prefab), _dec39 = property(Prefab), _dec40 = property(Prefab), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Label), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XocDiaLiveController, _Component);
        function XocDiaLiveController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "avatar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelBalance", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelNickname", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeBalanceChange", _descriptor4, _assertThisInitialized(_this));
          // Box
          _initializerDefineProperty(_this, "chatBox", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingBox", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "statisticalBox", _descriptor7, _assertThisInitialized(_this));
          // Game
          _initializerDefineProperty(_this, "lblToast", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSessionNote", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurrentJackpot", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserOnline", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainTimer", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bowl", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonHide", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gates", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipTemp", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "smallChips", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prizeBalance", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultDices", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultSpr", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openBowlNode", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shakeBowlNode", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotFoundNode", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "confirmBetButton", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancelBetButton", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rebetButton", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "x2betButton", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipContainer", _descriptor29, _assertThisInitialized(_this));
          // LIVE
          _initializerDefineProperty(_this, "liveNode", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "webView", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "liveNodeMini", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "webViewMini", _descriptor33, _assertThisInitialized(_this));
          _this.streamURL = "";
          // Popups
          _initializerDefineProperty(_this, "popupContainer", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryJackpotPrefab", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHonorsPrefab", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor38, _assertThisInitialized(_this));
          // JACKPOT OR MD5
          _initializerDefineProperty(_this, "jackpotSlotNode", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "md5ContainerNode", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTextMD5", _descriptor41, _assertThisInitialized(_this));
          _this.hub = null;
          _this.isMD5 = false;
          _this.plainTextMD5 = "";
          _this.countdownTimer = null;
          _this.isOpenBowl = false;
          _this.isBetting = false;
          _this.isHide = false;
          _this.selectedChipId = -1;
          _this.balance = 0;
          _this.currentBetId = 0;
          _this.bettingLogs = [];
          _this.isBowlMovable = false;
          _this.sessionId = -1;
          _this.bowlStartPos = new Vec3(0, 80);
          _this.bowlEndPos = new Vec3(-200, -50);
          _this.gateWins = [];
          _this.isHandleJackpotAction = false;
          _this.jackpotInfo = null;
          _this.totalBetAmountLabels = [];
          _this.pendingBetAmount = [];
          _this.pendingBetAmountLabels = [];
          _this.successBetAmountLabels = [];
          _this.statsData = [];
          _this.popupHistoryJackpot = null;
          _this.popupHonorsJackpot = null;
          _this.popupGuide = null;
          _this.popupHistory = null;
          _this.STREAM_TEMPLATE = "https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=STREAM_ID&group.security.jwtoken=JWT_TOKEN";
          _this.currentStreamID = -1;
          return _this;
        }
        var _proto = XocDiaLiveController.prototype;
        _proto.setupController = function setupController(isMD5) {
          if (isMD5 === void 0) {
            isMD5 = false;
          }
          this.isMD5 = isMD5;
          this.jackpotSlotNode.active = this.isMD5 === false;
          this.md5ContainerNode.active = this.isMD5 === true;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.hub = XocDiaLiveSignalRClient.getInstance();
          this.labelNickname.string = Configs.Login.Nickname;
          this.balance = Configs.Login.GoldBalance;
          this.labelBalance.string = Utils.formatNumber(Configs.Login.GoldBalance);
          this.avatar.spriteFrame = App.instance.getAvatarSpriteFrame(Configs.Login.Avatar);
          this.confirmBetButton.active = false;
          this.cancelBetButton.active = false;
          this.resetGameUI();
          this.bowl.on(Node.EventType.TOUCH_MOVE, function (event) {
            if (_this2.isBowlMovable === false) {
              return;
            }
            var pos = _this2.bowl.getPosition();
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this2.bowl.position = pos;
            var distance = Utils.v2Distance(new Vec2(pos.x, pos.y), new Vec2(_this2.bowlStartPos.x, _this2.bowlStartPos.y));
            if (Math.abs(distance) > 250) {
              _this2.showResult();
              _this2.isOpenBowl = true;
              _this2.scheduleOnce(function () {
                _this2.bowl.active = false;
              }, 2);
            }
          }, this);
          this.bowl.active = true;
          this.gates.forEach(function (gate) {
            _this2.totalBetAmountLabels.push(gate.getChildByName('bet_total').getComponent(Label));
            _this2.pendingBetAmountLabels.push(gate.getChildByName('pending_amount').getComponent(Label));
            _this2.successBetAmountLabels.push(gate.getChildByName('success_amount').getComponent(Label));
          });
        };
        _proto.start = function start() {
          var _this3 = this;
          XocDiaLiveController.instance = this;
          this.hub.send("GetCurrentRoom", [{
            CurrencyID: Configs.Login.CurrencyID
          }], function (_response) {});
          this.initHubs();
          this.gates.forEach(function (gate) {
            gate.on(Node.EventType.TOUCH_END, function () {
              if (_this3.isBetting === false || _this3.selectedChipId < 0) return;
              var gateId = parseInt(gate.name);
              _this3.bettingLogs.push({
                id: _this3.currentBetId,
                gateId: gateId,
                chipId: _this3.selectedChipId,
                success: false,
                sessionId: _this3.sessionId,
                gateType: [1, 5, 6, 7].includes(gateId) ? 1 : 2
              });
              _this3.moveChipToGate(gateId, _this3.selectedChipId, true, _this3.currentBetId);
              _this3.currentBetId++;
              _this3.pendingBetAmount[gateId - 1] = (_this3.pendingBetAmount[gateId - 1] || 0) + chipValues[_this3.selectedChipId - 1];
              _this3.pendingBetAmountLabels[gateId - 1].string = Utils.formatMoney(_this3.pendingBetAmount[gateId - 1], true);
            });
          });
          this.chipContainer.children.forEach(function (chip) {
            chip.on(Node.EventType.TOUCH_END, function () {
              if (_this3.isBetting === false) return;
              var chipId = parseInt(chip.name);
              if (chipId == _this3.selectedChipId) {
                _this3.selectedChipId = -1;
                chip.getChildByName('checkmark').active = false;
                _this3.confirmBetButton.active = false;
                _this3.cancelBetButton.active = false;
                return;
              }
              _this3.selectedChipId = chipId;
              _this3.chipContainer.children.forEach(function (c) {
                c.getChildByName('checkmark').active = c.name === chip.name;
              });
              _this3.confirmBetButton.active = true;
              _this3.cancelBetButton.active = true;
            });
          });
        };
        _proto.update = function update(_dt) {
          if (this.streamURL === "") {
            this.liveNode.active = false;
            this.liveNodeMini.active = false;
            return;
          }
          if (this.webView.url !== this.streamURL) {
            this.webView.url = this.streamURL;
            this.webViewMini.url = this.streamURL;
          }
          var isShowWebView = true;
          var isShowMiniWebView = false;
          for (var _iterator = _createForOfIteratorHelperLoose(this.popupContainer.children), _step; !(_step = _iterator()).done;) {
            var _child = _step.value;
            if (_child.active) {
              isShowWebView = false;
              break;
            }
          }
          if (isShowWebView) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(App.instance.miniGameNode.children), _step2; !(_step2 = _iterator2()).done;) {
              var child = _step2.value;
              if (child.active) {
                isShowWebView = false;
                isShowMiniWebView = true;
                break;
              }
            }
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(App.instance.tipzoJackpotEventX2X6Node.children), _step3; !(_step3 = _iterator3()).done;) {
            var _child2 = _step3.value;
            if (_child2.active) {
              isShowWebView = false;
              break;
            }
          }
          if (ButtonMiniGame.instance.panel.active) {
            isShowWebView = false;
          }
          this.liveNode.active = isShowWebView;
          if (isShowMiniWebView) {
            if (App.instance.tipzoMiniLiveNode.children.length == 0) {
              var mini = instantiate(this.liveNodeMini);
              mini.active = true;
              App.instance.tipzoMiniLiveNode.addChild(mini);
            }
          } else {
            App.instance.tipzoMiniLiveNode.removeAllChildren();
          }
        };
        _proto.getStreamURL = function getStreamURL() {
          var _this4 = this;
          Http.get(Configs.App.DOMAIN_CONFIG['GetLiveStreamInfo'], {
            gameId: this.isMD5 ? Configs.InGameIds.XocdiaMd5Live : Configs.InGameIds.XocDiaLive
          }, function (status, res) {
            if (res.c < 0 || status !== 200) {
              return;
            }
            var streamObj = res.d.find(function (item) {
              return item.gameID === _this4.isMD5 ? Configs.InGameIds.XocdiaMd5Live : Configs.InGameIds.XocDiaLive;
            });
            if (streamObj && streamObj.streamID && streamObj.tokenPlayBack) {
              if (_this4.currentStreamID !== streamObj.streamID) {
                _this4.currentStreamID = streamObj.streamID;
                _this4.streamURL = _this4.STREAM_TEMPLATE.replace("STREAM_ID", streamObj.streamID).replace("JWT_TOKEN", streamObj.tokenPlayBack);
              }
            } else {
              _this4.streamURL = "";
            }
          });
        };
        _proto.initHubs = function initHubs() {
          var _this5 = this;
          this.hub.receive('currentSession', function (res) {
            _this5.sessionId = res.GameSessionID;
            _this5.lblSession.string = "#" + res.GameSessionID;
            _this5.unschedule(_this5.countdownTimer);
            _this5.unschedule(_this5.countdownTimer);
            _this5.lblSessionNote.node.active = true;
            if (res.GameStatus === 1) {
              _this5.lblSessionNote.string = App.instance.getTextLang('new_round');
              _this5.getStreamURL();
              _this5.resetGameUI();
              _this5.handleBettingPhase(res.RemainBetting);
              if (_this5.isMD5) {
                _this5.labelTextMD5.string = res.MD5;
              }
            } else {
              _this5.lblSessionNote.string = App.instance.getTextLang('waiting_new_round');
              _this5.handleWaitingPhase(res.RemainWaiting);
            }
            _this5.scheduleOnce(function () {
              _this5.lblSessionNote.node.active = false;
            }, 3);
          });
          this.hub.receive('updateJackpot', function (res) {
            _this5.lblCurrentJackpot.string = Utils.formatNumber(res);
          });
          this.hub.receive('currentResult', function (res) {
            _this5.isBowlMovable = true;
            _this5.handleResult(res);
            var hasBet = _this5.bettingLogs.some(function (log) {
              return log.sessionId === _this5.sessionId && log.success === true;
            });
            if (hasBet == false) return;
            _this5.scheduleOnce(function () {
              _this5.hub.send("AccountResult", [{
                CurrencyID: Configs.Login.CurrencyID,
                GameSessionID: _this5.sessionId
              }], function () {});
            }, 15 + Math.floor(Math.random() * 6));
          });
          this.hub.receive('currentRoom', function (res) {
            var totalAccount = 0;
            res.LocationInfos.forEach(function (info) {
              _this5.totalBetAmountLabels[info.LocationId - 1].string = Utils.formatMoney(info.TotalBet, true);
              totalAccount += info.TotalAccount;
            });
            _this5.lblUserOnline.string = "(" + totalAccount + ")";
          });
          this.hub.receiveArray('betOfAccount', function (res, balance) {
            _this5.setBalance(balance);
            _this5.gates.forEach(function (gate) {
              gate.getChildByName('bet_chips').removeAllChildren();
            });
            res.BetLoctions.forEach(function (info) {
              _this5.successBetAmountLabels[info.LocationId - 1].string = Utils.formatMoney(info.BetValue, true);
            });
            _this5.pendingBetAmount = [];
            _this5.pendingBetAmountLabels.forEach(function (label) {
              label.string = "";
            });
          });
          this.hub.receive('playerBet', function (res) {
            var data = res[0];
            var isMe = data.PortalID == Configs.Login.PortalID && data.AccountId == Configs.Login.AccountID;
            if (isMe == true) return;
            _this5.parseChipString(data.BettingData).forEach(function (betLocation) {
              _this5.getChipsFromTotal(betLocation.value).forEach(function (chipId) {
                _this5.moveChipToGate(betLocation.locationId, chipId);
              });
            });
          });
          this.hub.receive('resultOfAccount', function (res) {
            if (res == null || !res.ResultPrizes) return;
            var totalPrize = res.ResultPrizes.reduce(function (sum, prize) {
              return sum + prize.AwardValue;
            }, 0);
            if (totalPrize === 0) return;
            _this5.prizeBalance.active = true;
            _this5.prizeBalance.getComponent(Label).string = '+ ' + Utils.formatNumber(totalPrize);
            _this5.prizeBalance.position = new Vec3(0, 50);
            tween(_this5.prizeBalance).to(3, {
              position: new Vec3(0, 150)
            }).call(function () {
              _this5.prizeBalance.active = false;
              _this5.setBalance(_this5.balance + totalPrize);
            }).start();
          });
          this.hub.receive('gameHistory', function (res) {
            var _XocDiaLiveStats$inst;
            _this5.statsData = res;
            (_XocDiaLiveStats$inst = XocDiaLiveStats.instance) == null || _XocDiaLiveStats$inst.updateData(res);
          });
        };
        _proto.resetGameUI = function resetGameUI() {
          this.actResetBet();
          this.bowl.active = true;
          this.bowl.setPosition(this.bowlStartPos);
          this.totalBetAmountLabels.forEach(function (label) {
            label.string = "0";
          });
          this.resultDices.forEach(function (dice) {
            dice.node.active = false;
          });
          this.gates.forEach(function (gate, idx) {
            gate.getChildByName('bet_chips').removeAllChildren();
            gate.getChildByName('active').active = false;
            gate.getChildByName('bet_total').getComponent(Label).string = "0";
            gate.getChildByName('pending_amount').getComponent(Label).string = "";
            gate.getChildByName('success_amount').getComponent(Label).string = "";
            if ([0, 1].includes(idx)) {
              gate.getChildByName('text_active').active = false;
              gate.getChildByName('light_active').active = false;
              gate.getChildByName('text').active = true;
            }
          });
          this.pendingBetAmount = [];
          this.gateWins = [];
          this.isHandleJackpotAction = false;
          this.jackpotInfo = null;
          this.lblUserOnline.string = "(0)";
          this.plainTextMD5 = "";
        };
        _proto.handleBettingPhase = function handleBettingPhase(remainTime) {
          var _this6 = this;
          this.isBetting = remainTime >= 3;
          this.isBowlMovable = false;
          this.buttonHide.enabled = this.isBetting;
          this.isOpenBowl = false;
          this.bettingLogs = this.bettingLogs.filter(function (log) {
            return log.sessionId === _this6.sessionId || log.sessionId === _this6.sessionId - 1;
          });
          this.rebetButton.enabled = this.bettingLogs.length > 0;
          this.x2betButton.enabled = this.bettingLogs.length > 0;
          this.confirmBetButton.getComponent(Button).enabled = true;
          this.cancelBetButton.getComponent(Button).enabled = true;
          this.openBowlNode.active = false;
          this.shakeBowlNode.active = true;
          var shakeAnim = this.shakeBowlNode.getComponent(Animation);
          if (shakeAnim) {
            shakeAnim.play();
            shakeAnim.on(Animation.EventType.FINISHED, function () {
              _this6.shakeBowlNode.active = false;
              _this6.openBowlNode.active = true;
            }, this);
          }
          var secondsLeft = remainTime;
          this.unschedule(this.countdownTimer);
          this.schedule(this.countdownTimer = function () {
            try {
              if (secondsLeft < 0) {
                _this6.unschedule(_this6.countdownTimer);
                return;
              }
              if (secondsLeft <= 5) {
                _this6.isBetting = false;
              }
              _this6.lblRemainTimer.string = secondsLeft < 10 ? "0" + secondsLeft : "" + secondsLeft;
              secondsLeft--;
            } catch (e) {
              _this6.unschedule(_this6.countdownTimer);
            }
          }, 1);
        };
        _proto.handleWaitingPhase = function handleWaitingPhase(waitingTime) {
          var _this7 = this;
          this.isBetting = false;
          this.rebetButton.enabled = false;
          this.x2betButton.enabled = false;
          this.confirmBetButton.getComponent(Button).enabled = false;
          this.cancelBetButton.getComponent(Button).enabled = false;
          this.openBowlNode.active = true;
          this.shakeBowlNode.active = false;
          var secondsLeft = waitingTime;
          this.unschedule(this.countdownTimer);
          this.schedule(this.countdownTimer = function () {
            try {
              if (secondsLeft < 0) {
                _this7.unschedule(_this7.countdownTimer);
                return;
              }
              if (_this7.isHide && _this7.isOpenBowl === false && secondsLeft > 15) {
                var secondsLeftOpenBowl = secondsLeft - 15;
                _this7.lblRemainTimer.string = "" + (secondsLeftOpenBowl < 10 ? "0" + secondsLeftOpenBowl : secondsLeftOpenBowl);
              } else {
                _this7.lblRemainTimer.string = "" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
              }
              secondsLeft--;
            } catch (e) {
              _this7.unschedule(_this7.countdownTimer);
            }
          }, 1);
        };
        _proto.handleResult = function handleResult(res) {
          var _this8 = this;
          if (this.isMD5) {
            this.plainTextMD5 = res.PlainText;
          }
          this.bowl.active = true;
          var dots = [];
          switch (res.ResultID) {
            case RESULT.NONE:
              break;
            case RESULT.FOUR_WHITE:
              dots = [0, 0, 0, 0];
              this.gateWins = [1, 5];
              break;
            case RESULT.ONE_RED_THREE_WHITE:
              dots = [1, 0, 0, 0];
              this.gateWins = [2, 3];
              break;
            case RESULT.TWO_RED_TWO_WHITE:
              dots = [1, 1, 0, 0];
              this.gateWins = [1, 7];
              break;
            case RESULT.THREE_RED_ONE_WHITE:
              dots = [1, 1, 1, 0];
              this.gateWins = [2, 4];
              break;
            case RESULT.FOUR_RED:
              dots = [1, 1, 1, 1];
              this.gateWins = [1, 6];
              this.isHandleJackpotAction = true;
              this.jackpotInfo = res.JackPotInfo;
              break;
          }
          for (var i = 0; i < dots.length; i++) {
            var dice = this.resultDices[i];
            dice.spriteFrame = this.resultSpr[dots[i]];
            dice.node.active = true;
          }
          if (this.isHide) {
            this.bowl.setPosition(this.bowlStartPos);
            this.bowl.active = true;
            this.scheduleOnce(function () {
              if (_this8.isOpenBowl) {
                return;
              }
              _this8.handleOpenBowl();
            }, 12);
          } else {
            this.handleOpenBowl();
          }
        };
        _proto.handleOpenBowl = function handleOpenBowl() {
          var _this9 = this;
          if (this.isBetting) return;
          this.isOpenBowl = true;
          tween(this.bowl).to(0.5, {
            position: this.bowlEndPos
          }).call(function () {
            _this9.showResult();
            _this9.scheduleOnce(function () {
              _this9.bowl.active = false;
            }, 2);
          }).start();
        };
        _proto.showResult = function showResult() {
          var _this10 = this;
          [0, 1].forEach(function (idx) {
            var gate = _this10.gates[idx];
            gate.getChildByName('text_active').active = true;
            gate.getChildByName('text').active = false;
            if (_this10.gateWins.includes(idx + 1)) {
              var light = gate.getChildByName('light_active');
              light.active = true;
              var lightOpacity = light.getComponent(UIOpacity) || light.addComponent(UIOpacity);
              tween(lightOpacity).repeatForever(tween().to(0.2, {
                opacity: 100
              }).to(0.2, {
                opacity: 255
              })).start();
            }
          });
          this.gateWins.forEach(function (win) {
            var gateActive = _this10.gates[win - 1].getChildByName('active');
            gateActive.active = true;
            var opacity = gateActive.getComponent(UIOpacity) || gateActive.addComponent(UIOpacity);
            tween(opacity).repeatForever(tween().to(0.2, {
              opacity: 100
            }).to(0.2, {
              opacity: 255
            })).start();
          });
          if (this.isMD5) {
            this.labelTextMD5.string = this.plainTextMD5;
            return;
          }
          if (this.isHandleJackpotAction == false) return;
          this.scheduleOnce(function () {
            if (_this10.jackpotInfo == null) return;
            XocDiaSlotController.instance.startSpinWithResults(_this10.jackpotInfo.JackpotData.split(','), function () {
              var locationJackpot = _this10.jackpotInfo.LocationJackpot;
              if (locationJackpot <= 0) return;
              var hasJackpot = _this10.bettingLogs.filter(function (log) {
                return log.success === true && log.sessionId === _this10.jackpotInfo.GameSessionID && log.gateType === locationJackpot;
              }).length > 0;
              if (hasJackpot == false) return;
              _this10.jackpotFoundNode.getComponentInChildren(Label).string = Utils.formatNumber(_this10.jackpotInfo.JackpotFund);
              _this10.jackpotFoundNode.active = true;
              _this10.scheduleOnce(function () {
                _this10.jackpotFoundNode.active = false;
              }, 8);
            });
          }, 3);
        };
        _proto.actConfirmBet = function actConfirmBet() {
          var _this11 = this;
          if (this.isBetting === false) {
            this.showToast(App.instance.getTextLang("me-207"));
            this.actResetBet();
            return;
          }
          if (this.selectedChipId < 0 || this.selectedChipId > chipValues.length) {
            this.showToast(App.instance.getTextLang("me-60212"));
            return;
          }
          var betMap = new Map();
          this.bettingLogs.filter(function (log) {
            return log.success === false;
          }).forEach(function (log) {
            var gateId = log.gateId;
            var chipValue = chipValues[log.chipId - 1] || 0;
            betMap.set(gateId, (betMap.get(gateId) || 0) + chipValue);
          });
          var betData = Array.from(betMap.entries()).map(function (_ref) {
            var gateId = _ref[0],
              totalValue = _ref[1];
            return gateId + "," + totalValue;
          }).join(';');
          if (betData.length === 0) {
            this.showToast(App.instance.getTextLang("txt_please_select_bet"));
            return;
          }
          this.hub.send("SetBet", [{
            CurrencyID: Configs.Login.CurrencyID,
            BetData: betData
          }], function (res) {
            if (res < 0) {
              _this11.actResetBet();
              _this11.showToast(App.instance.getTextLang("ca" + res));
              return;
            }
            _this11.bettingLogs.filter(function (log) {
              return log.success == false;
            }).forEach(function (log) {
              log.success = true;
            });
          });
        };
        _proto.actResetBet = function actResetBet() {
          var _this12 = this;
          this.chipContainer.children.forEach(function (chip) {
            chip.getChildByName('checkmark').active = false;
            _this12.confirmBetButton.active = false;
            _this12.cancelBetButton.active = false;
            _this12.selectedChipId = -1;
          });
          var betIds = this.bettingLogs.filter(function (log) {
            return log.success == false;
          }).map(function (log) {
            return log.id;
          });
          this.gates.forEach(function (gate) {
            var betChips = gate.getChildByName('bet_chips');
            betChips.children.forEach(function (chip) {
              if (betIds.includes(parseInt(chip.name))) {
                chip.destroy();
              }
            });
            gate.getChildByName('pending_amount').getComponent(Label).string = "";
          });
          this.bettingLogs = this.bettingLogs.filter(function (log) {
            return log.success === true;
          });
          this.pendingBetAmount = [];
        };
        _proto.actReBet = function actReBet() {
          var _this13 = this;
          this.bettingLogs.filter(function (log) {
            return log.success === true && log.sessionId === _this13.sessionId - 1;
          }).forEach(function (log) {
            _this13.selectedChipId = log.chipId;
            _this13.gates[log.gateId - 1].emit(Node.EventType.TOUCH_END);
          });
          this.confirmBetButton.active = true;
          this.cancelBetButton.active = true;
        };
        _proto.actX2Bet = function actX2Bet() {
          var _this14 = this;
          this.actReBet();
          setTimeout(function () {
            _this14.actReBet();
          }, 500);
        };
        _proto.moveChipToGate = function moveChipToGate(gateId, chipId, isMe, betId) {
          if (gateId === void 0) {
            gateId = -1;
          }
          if (chipId === void 0) {
            chipId = -1;
          }
          if (isMe === void 0) {
            isMe = false;
          }
          if (betId === void 0) {
            betId = -1;
          }
          if (gateId < 0 || chipId < 0) {
            return;
          }
          var chip = instantiate(this.chipTemp);
          if (betId >= 0) {
            chip.name = betId.toString();
          }
          chip.getComponent(Sprite).spriteFrame = this.smallChips[chipId - 1];
          var gate = this.gates[gateId - 1];
          var betChips = gate.getChildByName('bet_chips');
          var chipCount = betChips.children.length;
          var maxPerStack = 10;
          var spacingX = 60;
          var spacingY = 5;
          var col = Math.floor(chipCount / maxPerStack);
          var row = chipCount % maxPerStack;
          var offsetX = col * spacingX;
          var offsetY = row * spacingY;
          var nodeStart = isMe ? this.avatar.node : this.lblUserOnline.node.parent.getChildByName('icon');
          var worldStartPos = nodeStart.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          this.node.addChild(chip);
          var localStartPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(worldStartPos);
          chip.setPosition(localStartPos);
          var worldEndPosNode = isMe ? betChips : gate;
          var worldEndPos = worldEndPosNode.getComponent(UITransform).convertToWorldSpaceAR(isMe ? new Vec3(offsetX, offsetY) : Vec3.ZERO);
          var localEndPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(worldEndPos);
          tween(chip).to(0.5, {
            position: localEndPos
          }, {
            easing: "sineOut"
          }).call(function () {
            chip.removeFromParent();
            if (isMe) {
              betChips.addChild(chip);
              chip.setPosition(offsetX, offsetY);
            } else {
              chip.destroy();
            }
          }).start();
        };
        _proto.setBalance = function setBalance(balance) {
          if (balance < 0) return;
          if (this.balance !== 0 && this.balance !== balance) {
            var diff = Math.abs(balance - this.balance);
            this.displayCoinChange("" + (balance > this.balance ? "+" : "-") + Utils.formatMoney(diff, true));
          }
          this.balance = balance;
          this.labelBalance.string = Utils.formatNumber(this.balance);
        };
        _proto.displayCoinChange = function displayCoinChange(text) {
          var node = instantiate(this.nodeBalanceChange);
          node.parent = this.nodeBalanceChange.parent;
          node.active = true;
          node.getComponent(Label).string = text;
          node.setScale(Vec3.ZERO);
          node.setPosition(new Vec3(0, 60, 0));
          var opacityComp = node.getComponent(UIOpacity) || node.addComponent(UIOpacity);
          opacityComp.opacity = 255;
          tween(node).to(0.3, {
            scale: Vec3.ONE
          }, {
            easing: 'backOut'
          }).to(1.2, {
            position: new Vec3(0, 120, 0)
          }, {
            easing: 'sineOut'
          }).call(function () {
            tween(opacityComp).to(0.4, {
              opacity: 0
            }, {
              easing: 'fade'
            }).call(function () {
              return node.destroy();
            }).start();
          }).start();
        };
        _proto.showToast = function showToast(message) {
          this.lblToast.string = message;
          var parent = this.lblToast.node.parent;
          var uiOpacity = parent.getComponent(UIOpacity) || parent.addComponent(UIOpacity);
          Tween.stopAllByTarget(uiOpacity);
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
        _proto.leaveRoom = function leaveRoom() {
          XocDiaLiveController.instance = null;
          XocDiaLiveSignalRClient.getInstance().close();
          App.instance.gotoLobby();
        };
        _proto.toggleChatBox = function toggleChatBox() {
          this.chatBox.active = !this.chatBox.active;
        };
        _proto.toggleSettingBox = function toggleSettingBox() {
          this.settingBox.active = !this.settingBox.active;
        };
        _proto.toggleStatisticalBox = function toggleStatisticalBox() {
          this.statisticalBox.active = !this.statisticalBox.active;
        };
        _proto.toggleHide = function toggleHide(event) {
          var target = event.target;
          var on = target.getChildByName('on');
          var off = target.getChildByName('off');
          on.active = !on.active;
          off.active = !off.active;
          this.isHide = !this.isHide;
        };
        _proto.getChipsFromTotal = function getChipsFromTotal(totalValue) {
          var result = [];
          var sortedChips = chipValues.slice().sort(function (a, b) {
            return b - a;
          });
          for (var _iterator4 = _createForOfIteratorHelperLoose(sortedChips), _step4; !(_step4 = _iterator4()).done;) {
            var chip = _step4.value;
            while (totalValue >= chip) {
              result.push(chipValues.indexOf(chip) + 1);
              totalValue -= chip;
            }
          }
          return result;
        };
        _proto.parseChipString = function parseChipString(str) {
          return str.split(";").map(function (item) {
            var _item$split = item.split(","),
              id = _item$split[0],
              value = _item$split[1];
            return {
              locationId: parseInt(id),
              value: parseInt(value)
            };
          });
        };
        _proto.actPopupJackpotHistory = function actPopupJackpotHistory() {
          if (this.popupHistoryJackpot == null) {
            this.popupHistoryJackpot = instantiate(this.popupHistoryJackpotPrefab).getComponent("XocDiaLivePopupHistoryJackpot");
            this.popupHistoryJackpot.node.parent = this.popupContainer;
            this.popupHistoryJackpot.show();
            App.instance.showLoading(false);
          } else {
            this.popupHistoryJackpot.show();
          }
        };
        _proto.actPopupHonors = function actPopupHonors() {
          if (this.popupHonorsJackpot == null) {
            this.popupHonorsJackpot = instantiate(this.popupHonorsPrefab).getComponent("XocDiaLivePopupHonors");
            this.popupHonorsJackpot.node.parent = this.popupContainer;
            this.popupHonorsJackpot.show();
            App.instance.showLoading(false);
          } else {
            this.popupHonorsJackpot.show();
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
        _proto.actPopupHistory = function actPopupHistory() {
          if (this.popupHistory == null) {
            this.popupHistory = instantiate(this.popupHistoryPrefab).getComponent("XocDiaLivePopupHistory");
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.show();
            App.instance.showLoading(false);
          } else {
            this.popupHistory.show();
          }
        };
        _proto.actCopy = function actCopy() {
          Utils.copy(this.labelTextMD5.string);
          this.showToast(App.instance.getTextLang('txt_copied'));
        };
        return XocDiaLiveController;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelBalance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelNickname", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeBalanceChange", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chatBox", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "settingBox", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "statisticalBox", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionNote", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblCurrentJackpot", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblUserOnline", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainTimer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bowl", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "buttonHide", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "gates", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "chipTemp", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "smallChips", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "prizeBalance", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "resultDices", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "resultSpr", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "openBowlNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "shakeBowlNode", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "jackpotFoundNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "confirmBetButton", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "cancelBetButton", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "rebetButton", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "x2betButton", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "chipContainer", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "liveNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "webView", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "liveNodeMini", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "webViewMini", [_dec35], {
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
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryJackpotPrefab", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "popupHonorsPrefab", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "jackpotSlotNode", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "md5ContainerNode", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "labelTextMD5", [_dec43], {
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
  r('virtual:///prerequisite-imports/CasinoLive', 'chunks:///_virtual/CasinoLive'); 
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