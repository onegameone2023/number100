System.register("chunks:///_virtual/ChatBoxControllerJP.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChatHubSignalRClient.ts', './Config.ts'], function (exports) {
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
      cclegacy._RF.push({}, "42431BuROFN1pIsFb67QKYy", "ChatBoxControllerJP", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ChatBoxControllerJP = exports('ChatBoxControllerJP', (_dec = ccclass('ChatBoxControllerJP'), _dec2 = menu("TaiXiuJP/ChatBox"), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(EditBox), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChatBoxControllerJP, _Component);
        function ChatBoxControllerJP() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.CHAT_CHANNEL = "game_taixiu";
          _initializerDefineProperty(_this, "itemChatTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrMessage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbMessage", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ChatBoxControllerJP.prototype;
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
          var zIndex = 1;
          for (var i = 0; i < this.scrMessage.content.children.length; i++) {
            var _node = this.scrMessage.content.children[i];
            if (_node !== item) {
              _node.setSiblingIndex(zIndex++);
            }
          }
          item.parent = this.scrMessage.content;
          if (data.v >= 6) {
            item.getComponent(RichText).string = "<color=#ffffff>" + data.c + "</color>";
          } else if (data.a + ":" + data.p === Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
            item.getComponent(RichText).string = "<color=#fff600>" + data.n + ": </c><color=#ffffff>" + data.c + "</color>";
          } else {
            item.getComponent(RichText).string = "<color=#3c91e6>" + data.n + ": </c><color=#ffffff>" + data.c + "</color>";
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
        return ChatBoxControllerJP;
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

System.register("chunks:///_virtual/EventSH.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Toggle, SpriteFrame, instantiate, Sprite, Label, Tween, tween, v3, color, EditBox, Dialog, App, Http, Configs, Utils;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Label = module.Label;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      color = module.color;
      EditBox = module.EditBox;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "66036QKeiJH271Imzo1nyOv", "EventSH", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EventSH = exports('EventSH', (_dec = ccclass('EventSH'), _dec2 = menu("TaiXiuJP/EventSH"), _dec3 = property([Node]), _dec4 = property([Toggle]), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(EventSH, _Dialog);
        function EventSH() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabContentsEventSH", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabTogglesEventSH", _descriptor2, _assertThisInitialized(_this));
          _this.currentTabEventSH = 0;
          // Account
          _initializerDefineProperty(_this, "listAccount", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemAccount", _descriptor4, _assertThisInitialized(_this));
          // Top
          _initializerDefineProperty(_this, "listTop", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTop", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBox1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBox2", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBox3", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBox4", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBox5", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BG1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BG2", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedBoxes", _descriptor14, _assertThisInitialized(_this));
          _this.gameID = 0;
          _this.prizeIDTop = 1;
          _this.serverNames = ['HongKong', 'LasVegas', 'Macau'];
          return _this;
        }
        var _proto = EventSH.prototype;
        _proto.showDetail = function showDetail(gameID) {
          this.gameID = gameID;
          this.show();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.loadDataAPIAccount();
          this.loadDataAPITop(null, this.prizeIDTop);
        };
        _proto.onEnable = function onEnable() {
          this.listAccount.removeAllChildren();
          this.listTop.removeAllChildren();
        };
        _proto.selectedToggleTabs = function selectedToggleTabs(toggle, index) {
          var tabIndex = parseInt(index);
          if (this.currentTabEventSH === tabIndex) {
            return;
          }
          this.showTab(tabIndex);
          if (toggle.isChecked == false) return;
          if (tabIndex === 0) {
            this.loadDataAPIAccount();
          } else if (tabIndex === 1) {
            this.loadDataAPITop(null, this.prizeIDTop);
          }
        };
        _proto.showTab = function showTab(tabIndex) {
          var _this2 = this;
          this.currentTabEventSH = tabIndex;
          this.tabContentsEventSH.forEach(function (tab, i) {
            tab.active = i === tabIndex;
          });
          this.tabTogglesEventSH.forEach(function (toggle, i) {
            _this2.updateToggleTextColor(toggle, i === tabIndex);
          });
        };
        _proto.loadDataAPIAccount = function loadDataAPIAccount() {
          var _this3 = this;
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG['GetEventChestAccountInfo'], {
            currencyID: Configs.Login.CurrencyID,
            GameID: this.gameID,
            onlyNew: false
          }, function (_status, res) {
            _this3.listAccount.removeAllChildren();
            if (res.c < 0) {
              App.instance.showLoading(false);
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.c));
              return;
            }
            if (res.d.ListChest.length === 0) {
              App.instance.showLoading(false);
              return;
            }
            res.d.ListChest.forEach(function (item, index) {
              if (item.GameID != _this3.gameID) {
                return;
              }
              var node = instantiate(_this3.itemAccount);
              node.getComponent(Sprite).spriteFrame = index % 2 === 0 ? _this3.BG1 : _this3.BG2;
              var status;
              var award = "";
              if (item.PrizeValue === 0 && item.SpecialGift === 0) {
                if (item.ExpireTimeCount < 0) {
                  status = App.instance.getTextLang('ev45');
                } else {
                  status = App.instance.getTextLang('ev42');
                }
              } else {
                if (item.PrizeValue > 0) {
                  award = Utils.formatNumber(item.PrizeValue) + ' TIPZO';
                } else {
                  if (item.SpecialGift == 1) {
                    award = "SH";
                  } else if (item.SpecialGift == 2) {
                    award = "IPhone";
                  }
                }
                var awardTime = item.AwardTimeCount;
                if (awardTime > 0) {
                  status = App.instance.getTextLang('ev43');
                  var countdownInterval = setInterval(function () {
                    if (awardTime < 0) {
                      clearInterval(countdownInterval);
                      node.getChildByName("award").getComponent(Label).string = award + "\n(00:00)";
                      return;
                    }
                    var minutes = Math.floor(awardTime / 60);
                    var seconds = awardTime % 60;
                    node.getChildByName("award").getComponent(Label).string = award + ("\n(" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ")");
                    awardTime--;
                  }, 1000);
                } else {
                  status = App.instance.getTextLang('ev44');
                }
              }
              node.getChildByName("id").getComponent(Label).string = item.ChestID + "\n" + _this3.serverNames[item.GameID - 1];
              node.getChildByName("session").getComponent(Label).string = item.BetsData.map(function (bet) {
                return "#" + bet.GameSessionID;
              }).join('\n');
              node.getChildByName("betValue").getComponent(Label).string = item.BetsData.map(function (bet) {
                return "" + Utils.formatNumber(bet.BetValue);
              }).join('\n');
              node.getChildByName("time").getComponent(Label).string = item.AwardTimeCount > 0 ? Utils.formatDatetime(item.AwardTime, 'dd/MM/yyyy HH:mm:ss') : Utils.formatDatetime(item.ExpireTime, 'dd/MM/yyyy HH:mm:ss');
              node.getChildByName("gift").getChildByName("prize").getComponent(Sprite).spriteFrame = _this3["sprFrameBox" + item.PrizeID];
              node.getChildByName("status").getComponent(Label).string = status;
              node.getChildByName("award").getComponent(Label).string = award;
              node.active = true;
              _this3.listAccount.addChild(node);
            });
            App.instance.showLoading(false);
          });
        };
        _proto.loadDataAPITop = function loadDataAPITop(_event, prizeID) {
          var _this4 = this;
          if (prizeID === void 0) {
            prizeID = "1";
          }
          App.instance.showLoading(true);
          this.prizeIDTop = parseInt(prizeID);
          this.selectedBoxes.children.forEach(function (box, index) {
            if (index + 1 !== _this4.prizeIDTop) {
              Tween.stopAllByTarget(box);
            } else {
              tween(box).repeatForever(tween().to(0.4, {
                scale: v3(1.15, 1.15, 1.15)
              }, {
                easing: 'sineOut'
              }).to(0.2, {
                scale: v3(0.95, 0.95, 0.95)
              }, {
                easing: 'sineIn'
              }).to(0.3, {
                scale: v3(1.05, 1.05, 1.05)
              }, {
                easing: 'sineOut'
              }).to(0.5, {
                scale: v3(1.0, 1.0, 1.0)
              }, {
                easing: 'sineInOut'
              })).start();
            }
          });
          Http.get(Configs.App.DOMAIN_CONFIG['GetTopEventChest'], {
            currencyID: Configs.Login.CurrencyID,
            GameID: this.gameID,
            prizeID: this.prizeIDTop,
            topCount: 20
          }, function (_status, res) {
            _this4.listTop.removeAllChildren();
            if (res.c < 0) {
              App.instance.showLoading(false);
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.c));
              return;
            }
            res.d.forEach(function (item, index) {
              var node = instantiate(_this4.itemTop);
              var bg1 = node.getChildByName("bg1");
              var bg2 = node.getChildByName("bg2");
              var content = node.getChildByName("content");
              if (bg1 && bg2) {
                bg1.active = index % 2 === 0;
                bg2.active = index % 2 !== 0;
              }
              var award;
              if (item.PrizeValue === 0 && item.SpecialGift === 0) {
                award = "";
              } else {
                if (item.PrizeValue > 0) {
                  award = Utils.formatNumber(item.PrizeValue);
                } else {
                  if (item.SpecialGift == 1) {
                    award = "SH";
                  } else if (item.SpecialGift == 2) {
                    award = "Iphone";
                  } else {
                    award = "";
                  }
                }
              }
              content.getChildByName("time").getComponent(Label).string = Utils.formatDatetime(item.AwardTime, 'dd/MM/yyyy HH:mm:ss');
              content.getChildByName("account").getComponent(Label).string = item.Nickname;
              content.getChildByName("gift").getChildByName("prize").getComponent(Sprite).spriteFrame = _this4["sprFrameBox" + item.PrizeID];
              content.getChildByName("award").getComponent(Label).string = award;
              _this4.listTop.addChild(node);
            });
            App.instance.showLoading(false);
          });
        };
        _proto.updateToggleTextColor = function updateToggleTextColor(toggle, isActive) {
          var textNode = toggle.node.getChildByName("text");
          if (textNode) {
            var label = textNode.getComponent(Label);
            if (label) {
              label.color = isActive ? color(255, 240, 0) : color(255, 255, 255);
            }
          }
        };
        _proto._onDismissed = function _onDismissed() {
          var edits = this.node.getComponentsInChildren(EditBox);
          for (var i = 0; i < edits.length; i++) {
            edits[i].tabIndex = -1;
          }
          this.node.active = false;
        };
        return EventSH;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabContentsEventSH", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabTogglesEventSH", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listAccount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemAccount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listTop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemTop", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox4", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox5", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "BG1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "BG2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "selectedBoxes", [_dec16], {
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

System.register("chunks:///_virtual/EventTienTri.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Utils.ts', './Config.ts', './App.ts', './Http.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, Node, Label, Color, instantiate, EditBox, Sprite, Dialog, Utils, Configs, App, Http;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Node = module.Node;
      Label = module.Label;
      Color = module.Color;
      instantiate = module.instantiate;
      EditBox = module.EditBox;
      Sprite = module.Sprite;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "97c66aW/lFElY4C12cf0/PW", "EventTienTri", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EventTienTri = exports('EventTienTri', (_dec = ccclass('EventTienTri'), _dec2 = menu("TaiXiuJP/EventTienTri"), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property([Node]), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Color), _dec22 = property(Color), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(EventTienTri, _Dialog);
        function EventTienTri() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toggleDay", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleFinal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleRule", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleWin", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleLost", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentData", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentRule", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headerWin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "headerLost", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listContent", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContent", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dropboxSelectDate", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerBoxCalenderResults", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dayItemPrefab", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rows", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTitleTime", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTitleTimeBox", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTabResultTab", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedColor", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalColor", _descriptor20, _assertThisInitialized(_this));
          _this.gameID = 1;
          // 1: HK, 2: LVG, 3: MC
          _this.isDay = true;
          _this.eventType = 1;
          _this.isShowContainerBoxCalenderResult = false;
          _this.currentDate = new Date();
          _this.selectedNode = null;
          _this.selectedDay = new Date().getDate();
          _this.selectedDate = "";
          return _this;
        }
        var _proto = EventTienTri.prototype;
        _proto.start = function start() {
          this.generateCalendar();
          var today = new Date();
          this.labelTitleTime.string = Utils.formatDatetime(today.toString(), "dd/MM/yyyy");
          this.labelTitleTimeBox.string = Utils.formatDatetime(today.toString(), "dd/MM/yyyy");
        };
        _proto.showDetail = function showDetail(gameID) {
          this.gameID = gameID;
          this.show();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.toggleDay.isChecked = true;
          this.isDay = true;
        };
        _proto.selectedToggleTabs = function selectedToggleTabs(toggle, dataStr) {
          var data = parseInt(dataStr);
          if (data == 2) {
            this.contentData.active = false;
            this.contentRule.active = true;
            this.updateToggleTextColor(this.toggleRule, true);
            this.updateToggleTextColor(this.toggleDay, false);
            this.updateToggleTextColor(this.toggleFinal, false);
            return;
          }
          this.updateToggleTextColor(this.toggleRule, false);
          if (data == 0) {
            this.updateToggleTextColor(this.toggleDay, true);
            this.updateToggleTextColor(this.toggleFinal, false);
          } else {
            this.updateToggleTextColor(this.toggleDay, false);
            this.updateToggleTextColor(this.toggleFinal, true);
          }
          if (toggle.isChecked == false) return;
          this.contentData.active = true;
          this.contentRule.active = false;
          this.isDay = data == 0;
          if (this.toggleWin.isChecked) {
            this.loadDataAPI();
          } else {
            this.toggleWin.isChecked = true;
          }
        };
        _proto.onToggleWinLost = function onToggleWinLost(toggle, dataStr) {
          if (dataStr === "0") {
            this.updateToggleTextColor(this.toggleWin, true);
            this.updateToggleTextColor(this.toggleLost, false);
            this.headerWin.active = true;
            this.headerLost.active = false;
          } else {
            this.updateToggleTextColor(this.toggleWin, false);
            this.updateToggleTextColor(this.toggleLost, true);
            this.headerWin.active = false;
            this.headerLost.active = true;
          }
          if (toggle.isChecked) {
            this.loadDataAPI();
          }
        };
        _proto.loadDataAPI = function loadDataAPI() {
          var _this2 = this;
          if (this.isDay) {
            this.eventType = this.toggleWin.isChecked ? 1 : 2;
          } else {
            this.eventType = this.toggleWin.isChecked ? 3 : 4;
          }
          var date = new Date();
          if (this.selectedDate !== "") {
            date = new Date(this.selectedDate);
          }
          var params = {
            currencyID: Configs.Login.CurrencyID,
            GameID: this.gameID,
            eventType: this.eventType,
            eventDate: date.toDateString().replace(/ /g, "%20"),
            topCount: 10
          };
          this.listContent.removeAllChildren();
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG["GetTopEventLuckyDice"], params, function (status, res) {
            if (status !== 200) {
              App.instance.showLoading(false);
              return;
            }
            if (!res.d) {
              App.instance.showLoading(false);
              return;
            }
            var data = res.d;
            for (var i = 0; i < res.d.length; i++) {
              var itemNode = instantiate(_this2.itemContent);
              var content = itemNode.getChildByName("content");
              var giftNode = content.getChildByName("gift");
              if (_this2.isDay) {
                if (data[i].Rank === 1) {
                  giftNode.getComponent(Label).string = "2.000.000";
                }
                if (data[i].Rank === 2) {
                  giftNode.getComponent(Label).string = "1.000.000";
                }
                if (data[i].Rank === 3) {
                  giftNode.getComponent(Label).string = "500.000";
                }
              }
              if (_this2.eventType === 3 && data[i].Rank === 1) {
                giftNode.getComponent(Label).string = "Iphone 16 Pro 256GB";
              }
              if (_this2.eventType === 4 && data[i].Rank === 1) {
                giftNode.getComponent(Label).string = "Iphone 16 Pro Max 256GB";
              }
              var bg1 = itemNode.getChildByName("bg1");
              var bg2 = itemNode.getChildByName("bg2");
              if (bg1 && bg2) {
                bg1.active = i % 2 === 0;
                bg2.active = i % 2 !== 0;
              }
              content.getChildByName("stt").getComponent(Label).string = data[i].Rank;
              content.getChildByName("accountName").getComponent(Label).string = data[i].Nickname;
              content.getChildByName("continual").getComponent(Label).string = data[i].ContinuousCount;
              content.getChildByName("total").getComponent(Label).string = Utils.formatNumber(data[i].TotalBet);
              content.getChildByName("session").getComponent(Label).string = '#' + data[i].GameSessionID;
              itemNode.active = true;
              _this2.listContent.addChild(itemNode);
            }
            App.instance.showLoading(false);
          });
        };
        _proto.updateToggleTextColor = function updateToggleTextColor(toggle, isActive) {
          toggle.node.getChildByName("text").getComponent(Label).color = isActive ? new Color(255, 240, 0) : new Color(255, 255, 255);
        };
        _proto._onDismissed = function _onDismissed() {
          var edits = this.node.getComponentsInChildren(EditBox);
          for (var i = 0; i < edits.length; i++) {
            edits[i].tabIndex = -1;
          }
          this.node.active = false;
        };
        _proto.showBoxCalender = function showBoxCalender() {
          this.isShowContainerBoxCalenderResult = !this.isShowContainerBoxCalenderResult;
          this.containerBoxCalenderResults.active = this.isShowContainerBoxCalenderResult;
          this.generateCalendar();
        };
        _proto.generateCalendar = function generateCalendar() {
          var _this3 = this;
          if (!this.dayItemPrefab || this.rows.length < 5) {
            return;
          }
          this.rows.forEach(function (row) {
            return row.removeAllChildren();
          });
          var year = this.currentDate.getFullYear();
          var month = this.currentDate.getMonth();
          var totalDays = new Date(year, month + 1, 0).getDate();
          var rowIndex = 0;
          this.selectedNode = null;
          var _loop = function _loop(i) {
              var dayItem = instantiate(_this3.dayItemPrefab);
              var label = dayItem.getChildByName("text").getComponent(Label);
              if (!label) {
                return {
                  v: void 0
                };
              }
              label.string = i.toString();
              if (i === _this3.selectedDay) {
                dayItem.getComponent(Sprite).color = _this3.selectedColor;
                _this3.selectedNode = dayItem;
              } else {
                dayItem.getComponent(Sprite).color = _this3.normalColor;
              }
              dayItem.on(Node.EventType.TOUCH_END, function () {
                return _this3.onDaySelected(dayItem, i);
              }, _this3);
              _this3.rows[rowIndex].addChild(dayItem);
              if (i % 7 === 0 && rowIndex < _this3.rows.length - 1) {
                rowIndex++;
              }
            },
            _ret;
          for (var i = 1; i <= totalDays; i++) {
            _ret = _loop(i);
            if (_ret) return _ret.v;
          }
        };
        _proto.onDaySelected = function onDaySelected(dayNode, day) {
          if (this.selectedNode) {
            this.selectedNode.getComponent(Sprite).color = this.normalColor;
          }
          this.selectedDay = day;
          this.selectedNode = dayNode;
          this.selectedNode.getComponent(Sprite).color = this.selectedColor;
          var dayStr = ("0" + day).slice(-2);
          var monthStr = ("0" + (this.currentDate.getMonth() + 1)).slice(-2);
          var yearStr = this.currentDate.getFullYear().toString();
          var currentDate = dayStr + "/" + monthStr + "/" + yearStr;
          this.labelTitleTime.string = currentDate;
          this.labelTitleTimeBox.string = currentDate;
          // this.labelTabResultTab.string = `${dayStr}-${monthStr}-${yearStr}`;
          this.containerBoxCalenderResults.active = false;
          this.isShowContainerBoxCalenderResult = !this.isShowContainerBoxCalenderResult;
          this.selectedDate = yearStr + "-" + monthStr + "-" + dayStr;
          this.loadDataAPI();
        };
        _proto.updateCalendarAfterMonthChange = function updateCalendarAfterMonthChange() {
          var newTotalDays = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
          if (this.selectedDay > newTotalDays) {
            this.selectedDay = newTotalDays;
          }
          this.selectedNode = null;
          this.generateCalendar();
          var dayStr = ('0' + this.selectedDay).slice(-2);
          var monthStr = ('0' + (this.currentDate.getMonth() + 1)).slice(-2);
          var yearStr = this.currentDate.getFullYear().toString();
          this.labelTitleTime.string = dayStr + "/" + monthStr + "/" + yearStr;
          this.labelTitleTimeBox.string = dayStr + "/" + monthStr + "/" + yearStr;
        };
        _proto.onNextMonth = function onNextMonth() {
          var month = this.currentDate.getMonth();
          var year = this.currentDate.getFullYear();
          if (month === 11) {
            this.currentDate.setFullYear(year + 1);
            this.currentDate.setMonth(0);
          } else {
            this.currentDate.setMonth(month + 1);
          }
          this.updateCalendarAfterMonthChange();
        };
        _proto.onPreviousMonth = function onPreviousMonth() {
          var month = this.currentDate.getMonth();
          var year = this.currentDate.getFullYear();
          if (month === 0) {
            this.currentDate.setFullYear(year - 1);
            this.currentDate.setMonth(11);
          } else {
            this.currentDate.setMonth(month - 1);
          }
          this.updateCalendarAfterMonthChange();
        };
        return EventTienTri;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleDay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleFinal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleRule", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggleWin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggleLost", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentData", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contentRule", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "headerWin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "headerLost", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "listContent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "itemContent", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dropboxSelectDate", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "containerBoxCalenderResults", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "dayItemPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "rows", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "labelTitleTime", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "labelTitleTimeBox", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "labelTabResultTab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "selectedColor", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color().fromHEX('#8043DB');
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "normalColor", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color().fromHEX('#cdbee4');
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupHistoryJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, instantiate, Dialog, App, Http, Configs, Utils;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "e4aa0sJ9iVHFKGEY5fLVAWB", "PopupHistoryJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHistoryJackpot = exports('PopupHistoryJackpot', (_dec = ccclass('PopupHistoryJackpot'), _dec2 = menu("TaiXiuJP/PopupHistoryJackpot"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistoryJackpot, _Dialog);
        function PopupHistoryJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblSession", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSessionDate", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalAccounts", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerDetail", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContainer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemPrefab", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalJackpotValue", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTemplate", _descriptor8, _assertThisInitialized(_this));
          _this.gameID = 1;
          _this.sessionList = [];
          _this.currentSessionIndex = 0;
          return _this;
        }
        var _proto = PopupHistoryJackpot.prototype;
        _proto.showDetail = function showDetail(gameID) {
          this.gameID = gameID;
          this.show();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.itemPrefab.active = false;
          this.lblTotalAccounts.string = '0';
          this.lblSession.string = App.instance.getTextLang('txt_session') + ": #0";
          this.lblSessionDate.string = '';
          this.containerDetail.active = false;
          this.lblTotalJackpotValue.string = App.instance.getTextLang('txt_jackpot_prize_jackpot') + ' 0';
          this.getDataSession();
        };
        _proto.getDataSession = function getDataSession() {
          var _this2 = this;
          App.instance.showLoading(true);
          Http.get(Configs.App.DOMAIN_CONFIG['LuckyDiceJackPotHistory'], {
            gameID: this.gameID,
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
          this.lblSession.string = App.instance.getTextLang('txt_session') + (": #" + session.GameSessionID);
          this.lblSessionDate.string = Utils.formatDatetime(session.FinishedTime, 'HH:mm:ss');
          this.lblTotalAccounts.string = session.TotalAccounts.toString();
          this.containerDetail.getChildByName('tx-t').active = session.LocationJackpot === 2;
          // this.containerDetail.getChildByName('t').active = session.GameResults === '6,6,6';
          this.containerDetail.getChildByName('tx-x').active = session.LocationJackpot === 1;
          // this.containerDetail.getChildByName('x').active = session.GameResults === '1,1,1';
          this.lblTotalJackpotValue.string = App.instance.getTextLang('txt_jackpot_prize_jackpot') + ' ' + Utils.formatNumber(session.TotalJackpotAward);
          this.getJackpotAccount(session.GameSessionID);
        };
        _proto.getJackpotAccount = function getJackpotAccount(sessionID) {
          var _this3 = this;
          App.instance.showLoading(true);
          this.itemContainer.removeAllChildren();
          Http.get(Configs.App.DOMAIN_CONFIG['LuckyDiceJackPotAccount'], {
            gameID: this.gameID,
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
              content.getChildByName("account").getComponent(Label).string = item.Nickname;
              content.getChildByName("bet").getComponent(Label).string = Utils.formatNumber(item.BetValue);
              content.getChildByName("prize").getComponent(Label).string = Utils.formatNumber(item.JackpotValue);
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
        return PopupHistoryJackpot;
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec10], {
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

System.register("chunks:///_virtual/PopupSoiCau.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
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
      cclegacy._RF.push({}, "9e449TyINZHjZXuHqLjmtBB", "PopupSoiCau", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupSoiCau = exports('PopupSoiCau', (_dec = ccclass('PopupSoiCau'), _dec2 = menu("TaiXiuJP/PopupSoiCau"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(Label), _dec24 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupSoiCau, _Dialog);
        function PopupSoiCau() {
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
          _this.gameID = 1;
          return _this;
        }
        var _proto = PopupSoiCau.prototype;
        // 1: HK, 2: LVG, 3: MC
        _proto.showDetail = function showDetail(gameID) {
          this.gameID = gameID;
          this.show();
        };
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
          Http.post(Configs.App.DOMAIN_CONFIG['GetStatisticalLuckyDice'] + ("?GameID=" + this.gameID), {}, function (status, res) {
            if (status !== 200) {
              return;
            }
            _this3.drawG88Page1(res.d.Type1, res.d.Type1Location1, res.d.Type1Location2);
            _this3.drawG88Page2(res.d.Type2, res.d.Type2Location1, res.d.Type2Location2);
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
            if (Type1[i].DiceSum > 0) {
              cleanData.push(Type1[i]);
            }
          }
          this.drawG88Page3(cleanData);
          this.drawG88Page4(cleanData);
          var x = 0;
          var xTemp = 0;
          var yCounter = 0;
          var currentLocationIDWin = cleanData.length > 0 ? cleanData[0].LocationIDWin : null;
          cleanData.forEach(function (item) {
            var node = instantiate(item.LocationIDWin === 1 ? _this4.iconXiuPage1 : _this4.iconTaiPage1);
            if (item.LocationIDWin !== currentLocationIDWin) {
              if (yCounter != 0) {
                x++;
              }
              xTemp = x;
              yCounter = 0;
              currentLocationIDWin = item.LocationIDWin;
            }
            var y = (x - xTemp) % 2 === 0 ? yCounter : 5 - yCounter;
            node.setPosition(v3(posX + x * spacingX, posY + y * spacingY, 0));
            node.getChildByName("text").getComponent(Label).string = item.DiceSum;
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
            if (Type2[i].DiceSum > 0) {
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
            if (item.LocationIDWin === 1) {
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
          var sessionText = "(#" + last.GameSessionID + ") - " + (last.LocationIDWin == 1 ? App.instance.getTextLang('tx2') : App.instance.getTextLang('tx1'));
          var diceText = last.DiceSum + " (" + last.Dice1 + " - " + last.Dice2 + " - " + last.Dice3 + ")";
          this.lblLastSession.string = App.instance.getTextLang('txt_taixiu_last_session') + " " + sessionText + "  " + diceText;
          var posX = 35;
          var posY = 0;
          var spacingX = 36;
          var spacingY = 35;
          this.xx123Draw.removeAllChildren();
          data.forEach(function (item, index) {
            var startPosXX123 = v2(posX + index * spacingX, posY + (item.DiceSum - 3) * (spacingY / 3));
            var iconXX123;
            if (item.LocationIDWin === 1) {
              iconXX123 = instantiate(_this6.xx123XiuTemplate);
            } else {
              iconXX123 = instantiate(_this6.xx123TaiTemplate);
            }
            iconXX123.getChildByName("text").getComponent(Label).string = item.DiceSum + "";
            iconXX123.parent = _this6.xx123Draw;
            iconXX123.setPosition(v3(startPosXX123.x, startPosXX123.y, 0));
            if (index === data.length - 1) {
              return;
            }
            var nextItem = data[index + 1];
            var endPosXX123 = v2(posX + (index + 1) * spacingX, posY + (nextItem.DiceSum - 3) * (spacingY / 3));
            var line = instantiate(_this6.lineTemplate);
            line.parent = _this6.xx123Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX123, endPosXX123);
            line.setPosition(v3(startPosXX123.x, startPosXX123.y, 0));
            line.angle = Utils.v2Degrees(startPosXX123, endPosXX123);
            line.getComponent(Sprite).color = Color.BLACK.fromHEX("#ffffff");
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
            var startPosXX1 = v2(posX + index * spacingX, posY + (item.Dice1 - 1) * spacingY);
            var startPosXX2 = v2(posX + index * spacingX, posY + (item.Dice2 - 1) * spacingY);
            var startPosXX3 = v2(posX + index * spacingX, posY + (item.Dice3 - 1) * spacingY);
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
            var endPosXX1 = v2(posX + (index + 1) * spacingX, posY + (nextItem.Dice1 - 1) * spacingY);
            var endPosXX2 = v2(posX + (index + 1) * spacingX, posY + (nextItem.Dice2 - 1) * spacingY);
            var endPosXX3 = v2(posX + (index + 1) * spacingX, posY + (nextItem.Dice3 - 1) * spacingY);
            var line = instantiate(_this7.lineTemplate);
            line.parent = _this7.xx1Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX1, endPosXX1);
            line.setPosition(v3(startPosXX1.x, startPosXX1.y, 0));
            line.angle = Utils.v2Degrees(startPosXX1, endPosXX1);
            line.getComponent(Sprite).color = Color.BLACK.fromHEX("#f0ff00");
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
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
          // this.page1.active = false;
          // this.page2.active = false;
        };

        _proto.toggleLinePage4 = function toggleLinePage4(event, data) {
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
        return PopupSoiCau;
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

System.register("chunks:///_virtual/TaiXiuDouble", ['./ChatBoxControllerJP.ts', './EventSH.ts', './EventTienTri.ts', './PopupHistoryJackpot.ts', './PopupSoiCau.ts', './TaiXiuDouble.Controller.ts', './TaiXiuJP.PopupDetailSession.ts', './TaiXiuJP.PopupHistory.ts', './TaiXiuJP.PopupHonors.ts', './TaiXiuLVGController.ts', './TaiXiuMiniController.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TaiXiuDouble.Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config.ts', './App.ts', './MiniGameTX1SignalRClient.ts', './MiniGameTX2SignalRClient.ts', './MiniGameTX3SignalRClient.ts', './ChatHubSignalRClient.ts', './MiniGame.ts', './TaiXiuMiniController.ts', './TaiXiuLVGController.ts', './PopupSoiCau.ts', './EventTienTri.ts', './EventSH.ts', './TaiXiuJP.PopupHonors.ts', './TaiXiuJP.PopupHistory.ts', './PopupHistoryJackpot.ts', './Dialog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, v3, instantiate, Configs, App, MiniGameTX1SignalRClient, MiniGameTX2SignalRClient, MiniGameTX3SignalRClient, ChatHubSignalRClient, MiniGame, TaiXiuMiniController, TaiXiuLVGController, PopupSoiCau, EventTienTri, EventSH, PopupHonors, PopupHistory, PopupHistoryJackpot, Dialog;
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
      Prefab = module.Prefab;
      v3 = module.v3;
      instantiate = module.instantiate;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      MiniGameTX1SignalRClient = module.default;
    }, function (module) {
      MiniGameTX2SignalRClient = module.default;
    }, function (module) {
      MiniGameTX3SignalRClient = module.default;
    }, function (module) {
      ChatHubSignalRClient = module.default;
    }, function (module) {
      MiniGame = module.MiniGame;
    }, function (module) {
      TaiXiuMiniController = module.default;
    }, function (module) {
      TaiXiuLVGController = module.default;
    }, function (module) {
      PopupSoiCau = module.PopupSoiCau;
    }, function (module) {
      EventTienTri = module.EventTienTri;
    }, function (module) {
      EventSH = module.EventSH;
    }, function (module) {
      PopupHonors = module.PopupHonors;
    }, function (module) {
      PopupHistory = module.PopupHistory;
    }, function (module) {
      PopupHistoryJackpot = module.PopupHistoryJackpot;
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _class3;
      cclegacy._RF.push({}, "6fab78Wrn1BQo1sU67+m3Wp", "TaiXiuDouble.Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TaiXiuDoubleController = exports('default', (_dec = ccclass('TaiXiuDoubleController'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Prefab), _dec21 = property(Prefab), _dec22 = property(Prefab), _dec23 = property(Prefab), _dec24 = property(Prefab), _dec25 = property(Prefab), _dec26 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_MiniGame) {
        _inheritsLoose(TaiXiuDoubleController, _MiniGame);
        function TaiXiuDoubleController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _MiniGame.call.apply(_MiniGame, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "background", _descriptor, _assertThisInitialized(_this));
          // 1: Gold 2: Xu
          _this.isBetTypeGold = true;
          _initializerDefineProperty(_this, "labelHeaderCenterTX1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderCenterTX2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderCenterTX3", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerLeftTX", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderLeftTX1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderLeftTX2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderLeftTX3", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerRightTX", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderRightTX1", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderRightTX2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelHeaderRightTX3", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerCenterMC", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerCenterHK", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerCenterLVG", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backgroundLayoutBet", _descriptor16, _assertThisInitialized(_this));
          // Chat Box
          _initializerDefineProperty(_this, "chatBox", _descriptor17, _assertThisInitialized(_this));
          // Popup Container
          _initializerDefineProperty(_this, "popupContainer", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventTienTriPrefab", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventSoiCauPrefab", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventSHPrefab", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventJackpotPrefab", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventHonorPrefab", _descriptor25, _assertThisInitialized(_this));
          _this.popupEventTienTri = null;
          _this.popupSoiCau = null;
          _this.popupEventSH = null;
          _this.popupEventJackpot = null;
          _this.popupHonor = null;
          _this.popupHistory = null;
          _this.popupGuide = null;
          _this.containerCenterTX = [];
          _this.nameTX = ["HK", "LVG", "MC"];
          _this.offscreenPos = v3(-2000, -2000, 0);
          _this.onscreenPos = v3(0, 0, 0);
          return _this;
        }
        var _proto = TaiXiuDoubleController.prototype;
        _proto.onLoad = function onLoad() {
          _MiniGame.prototype.onLoad.call(this);
          TaiXiuDoubleController.instance = this;
          this.containerCenterTX = [this.containerCenterHK, this.containerCenterLVG, this.containerCenterMC];
          this.setupTouchEvents();
          this.setInitialVisibility();
          this.initializeHubs();
        };
        _proto.setupTouchEvents = function setupTouchEvents() {
          var _this2 = this;
          var centerLabels = [this.labelHeaderCenterTX1, this.labelHeaderCenterTX2, this.labelHeaderCenterTX3];
          var leftLabels = [this.labelHeaderLeftTX1, this.labelHeaderLeftTX2, this.labelHeaderLeftTX3];
          var rightLabels = [this.labelHeaderRightTX1, this.labelHeaderRightTX2, this.labelHeaderRightTX3];
          var updateUI = function updateUI(centerIdx, otherIdx, labels, isLeft) {
            if (isLeft === void 0) {
              isLeft = true;
            }
            centerLabels.forEach(function (label, i) {
              return label.active = i === otherIdx;
            });
            labels.forEach(function (label, i) {
              return label.active = i === centerIdx;
            });
            _this2.containerCenterTX.forEach(function (container, index) {
              container.position = index === otherIdx ? _this2.onscreenPos : _this2.offscreenPos;
              container.getComponent(TaiXiuLVGController).hideLayoutBet();
            });
            var containerMini = isLeft ? _this2.containerLeftTX : _this2.containerRightTX;
            _this2.nameTX.forEach(function (name, index) {
              containerMini.getChildByName(name).position = index === centerIdx ? _this2.onscreenPos : _this2.offscreenPos;
            });
            _this2.backgroundLayoutBet.active = false;
          };
          this.containerLeftTX.on(Node.EventType.TOUCH_END, function () {
            var centerIdx = centerLabels.findIndex(function (label) {
              return label.active;
            });
            var leftIdx = leftLabels.findIndex(function (label) {
              return label.active;
            });
            if (centerIdx !== -1 && leftIdx !== -1) updateUI(centerIdx, leftIdx, leftLabels);
          });
          this.containerRightTX.on(Node.EventType.TOUCH_END, function () {
            var index = centerLabels.findIndex(function (label) {
              return label.active;
            });
            var rightIdx = rightLabels.findIndex(function (label) {
              return label.active;
            });
            if (index !== -1 && rightIdx !== -1) updateUI(index, rightIdx, rightLabels, false);
          });
        };
        _proto.setInitialVisibility = function setInitialVisibility() {
          var _this3 = this;
          this.containerCenterTX.forEach(function (container, index) {
            container.active = true;
            container.position = index === 0 ? _this3.onscreenPos : _this3.offscreenPos;
          });
          this.nameTX.forEach(function (name) {
            _this3.containerLeftTX.getChildByName(name).active = true;
            _this3.containerLeftTX.getChildByName(name).position = name === "MC" ? _this3.onscreenPos : _this3.offscreenPos;
          });
          this.nameTX.forEach(function (name) {
            _this3.containerRightTX.getChildByName(name).active = true;
            _this3.containerRightTX.getChildByName(name).position = name === "LVG" ? _this3.onscreenPos : _this3.offscreenPos;
          });
        };
        _proto.initializeHubs = function initializeHubs() {
          var _this4 = this;
          this.containerCenterTX.forEach(function (container, index) {
            container.getComponent(TaiXiuLVGController).initHubs(index + 1);
          });
          this.nameTX.forEach(function (name, index) {
            _this4.containerLeftTX.getChildByName(name).getComponent(TaiXiuMiniController).initHubs(index + 1);
            _this4.containerRightTX.getChildByName(name).getComponent(TaiXiuMiniController).initHubs(index + 1);
          });
        };
        _proto.show = function show() {
          _MiniGame.prototype.show.call(this);
          this.initHubs();
        };
        _proto.onDestroy = function onDestroy() {
          MiniGameTX1SignalRClient.getInstance().dontReceive();
          MiniGameTX2SignalRClient.getInstance().dontReceive();
          MiniGameTX3SignalRClient.getInstance().dontReceive();
          ChatHubSignalRClient.getInstance().dontReceive();
        };
        _proto.initHubs = function initHubs() {
          MiniGameTX1SignalRClient.getInstance().send("GetCurrentRoomsLD", [{
            GameID: 1,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
          MiniGameTX2SignalRClient.getInstance().send("GetCurrentRoomsLD", [{
            GameID: 2,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
          MiniGameTX3SignalRClient.getInstance().send("GetCurrentRoomsLD", [{
            GameID: 3,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
        };
        _proto.actSwitchCoinXu = function actSwitchCoinXu() {
          this.isBetTypeGold = !this.isBetTypeGold;
          this.initHubs();
          this.containerCenterTX.forEach(function (container) {
            container.getComponent(TaiXiuLVGController).actSwitchCoin();
          });
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
        _proto.getCurrentGameID = function getCurrentGameID() {
          if (this.labelHeaderCenterTX1.active) {
            return 1;
          } else if (this.labelHeaderCenterTX2.active) {
            return 2;
          } else {
            return 3;
          }
        };
        _proto.actPopupEventTienTri = function actPopupEventTienTri() {
          var gameID = this.getCurrentGameID();
          if (this.popupEventTienTri == null) {
            this.popupEventTienTri = instantiate(this.popupEventTienTriPrefab).getComponent(EventTienTri);
            this.popupEventTienTri.node.parent = this.popupContainer;
            this.popupEventTienTri.showDetail(gameID);
            App.instance.showLoading(false);
          } else {
            this.popupEventTienTri.showDetail(gameID);
          }
        };
        _proto.actPopupEventSoiCau = function actPopupEventSoiCau() {
          var gameID = this.getCurrentGameID();
          if (this.popupSoiCau == null) {
            this.popupSoiCau = instantiate(this.popupEventSoiCauPrefab).getComponent(PopupSoiCau);
            this.popupSoiCau.node.parent = this.popupContainer;
            this.popupSoiCau.showDetail(gameID);
            App.instance.showLoading(false);
          } else {
            this.popupSoiCau.showDetail(gameID);
          }
        };
        _proto.actPopupEventSH = function actPopupEventSH() {
          var gameID = this.getCurrentGameID();
          if (this.popupEventSH == null) {
            this.popupEventSH = instantiate(this.popupEventSHPrefab).getComponent(EventSH);
            this.popupEventSH.node.parent = this.popupContainer;
            this.popupEventSH.showDetail(gameID);
            App.instance.showLoading(false);
          } else {
            this.popupEventSH.showDetail(gameID);
          }
        };
        _proto.actPopupEventJackpot = function actPopupEventJackpot() {
          var gameID = this.getCurrentGameID();
          if (this.popupEventJackpot == null) {
            this.popupEventJackpot = instantiate(this.popupEventJackpotPrefab).getComponent(PopupHistoryJackpot);
            this.popupEventJackpot.node.parent = this.popupContainer;
            this.popupEventJackpot.showDetail(gameID);
            App.instance.showLoading(false);
          } else {
            this.popupEventJackpot.showDetail(gameID);
          }
        };
        _proto.actPopupHonor = function actPopupHonor() {
          if (this.popupHonor == null) {
            this.popupHonor = instantiate(this.popupEventHonorPrefab).getComponent(PopupHonors);
            this.popupHonor.node.parent = this.popupContainer;
            this.popupHonor.show();
            App.instance.showLoading(false);
          } else {
            this.popupHonor.show();
          }
        };
        _proto.actPopupHistory = function actPopupHistory() {
          if (this.popupHistory == null) {
            this.popupHistory = instantiate(this.popupHistoryPrefab).getComponent(PopupHistory);
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.showHistory(this.getCurrentGameID());
            App.instance.showLoading(false);
          } else {
            this.popupHistory.showHistory(this.getCurrentGameID());
          }
        };
        _proto.actPopupGuide = function actPopupGuide() {
          if (this.popupGuide == null) {
            this.popupGuide = instantiate(this.popupGuidePrefab).getComponent(Dialog);
            this.popupGuide.node.parent = this.popupContainer;
            this.popupGuide.show();
            App.instance.showLoading(false);
          } else {
            this.popupGuide.show();
          }
        };
        _proto.actGoToTaiXiuJPLive = function actGoToTaiXiuJPLive() {
          App.instance.openGame(Configs.InGameIds.TaiXiuLive);
        };
        return TaiXiuDoubleController;
      }(MiniGame), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderCenterTX1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderCenterTX2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderCenterTX3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "containerLeftTX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderLeftTX1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderLeftTX2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderLeftTX3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "containerRightTX", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderRightTX1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderRightTX2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelHeaderRightTX3", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "containerCenterMC", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "containerCenterHK", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "containerCenterLVG", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "backgroundLayoutBet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "chatBox", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "popupEventTienTriPrefab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "popupEventSoiCauPrefab", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "popupEventSHPrefab", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "popupEventJackpotPrefab", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "popupEventHonorPrefab", [_dec26], {
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

System.register("chunks:///_virtual/TaiXiuJP.PopupDetailSession.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "c7920y2rc9Iz7s88r1UtumS", "TaiXiuJP.PopupDetailSession", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupDetailSession = exports('default', (_dec = ccclass('TaiXiuJPPopupDetailSession'), _dec2 = menu("TaiXiuJP/PopupDetailSession"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property([SpriteFrame]), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Sprite), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupDetailSession, _Dialog);
        function PopupDetailSession() {
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
          _initializerDefineProperty(_this, "nodeTai", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeXiu", _descriptor17, _assertThisInitialized(_this));
          _this.gameID = 1;
          // 1: HK, 2: LVG, 3: MC
          _this.betType = 1;
          // 1: Gold, 2: Xu
          _this.sessionID = 0;
          _this.type = 1;
          // 0: cổng 88, 1: cổng 11, 2: xu
          _this.detailSessions = [];
          return _this;
        }
        var _proto = PopupDetailSession.prototype;
        _proto.showDetail = function showDetail(session, gameID, detailSessions) {
          this.sessionID = session;
          this.gameID = gameID;
          if (!detailSessions || detailSessions.length === 0) {
            return;
          }
          this.detailSessions = detailSessions;
          this.show();
        };
        _proto.onChangeType = function onChangeType() {
          this.type = (this.type + 1) % 3;
          this.loadData();
        };
        _proto.onChangeBetType = function onChangeBetType(toggle, data) {
          var target = toggle.node;
          if (data == 1) {
            target.getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#FFF000');
            target.parent.getChildByName('xu').getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#CDBEE4');
          } else {
            target.getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#FFF000');
            target.parent.getChildByName('tipzo').getChildByName('text').getComponent(Label).color = Color.WHITE.fromHEX('#CDBEE4');
          }
          if (toggle.isChecked === false) return;
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
          var url = Configs.App.DOMAIN_CONFIG['GetBetDetailsLuckyDice'] + "?currencyID=" + Configs.Login.CurrencyID + "&gameID=" + this.gameID + "&betType=" + this.betType + "&sessionID=" + this.sessionID + "&type=" + this.type;
          Http.post(url, {}, function (_status, res) {
            res.d.l.forEach(function (item, index) {
              if (index == 0) {
                _this2.lblSessionDate.node.active = true;
                _this2.lblSessionDate.string = Utils.formatDatetime(item.CreatedTime, 'dd/MM/yyyy');
              }
              var node = instantiate(item.LocationID == 2 ? _this2.itemTai : _this2.itemXiu);
              node.active = true;
              var bg1 = node.getChildByName("bg1");
              var bg2 = node.getChildByName("bg2");
              if (bg1 && bg2) {
                bg1.active = index % 2 === 0;
                bg2.active = index % 2 !== 0;
              }
              var content = node.getChildByName("content");
              content.getChildByName("Time").getComponent(Label).string = Utils.formatDatetime(item.CreatedTime, 'dd/MM/yyyy HH:mm:ss');
              content.getChildByName("Account").getComponent(Label).string = item.Nickname;
              content.getChildByName("Refund").getComponent(Label).string = Utils.formatNumber(item.RefundValue);
              content.getChildByName("Bet").getComponent(Label).string = Utils.formatNumber(item.BetValue);
              if (item.LocationID == 2) {
                totalBetTai += item.BetValue;
                totalRefundTai += item.RefundValue;
                _this2.itemsTai.addChild(node);
              } else {
                totalBetXiu += item.BetValue;
                totalRefundXiu += item.RefundValue;
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
        return PopupDetailSession;
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
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeTai", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiu", [_dec19], {
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

System.register("chunks:///_virtual/TaiXiuJP.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, EventHandler, Toggle, Label, Color, instantiate, Dialog, App, Configs, Http, Utils;
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
      EventHandler = module.EventHandler;
      Toggle = module.Toggle;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f20edhokz5IsIVE9DKqdLs+", "TaiXiuJP.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHistory = exports('PopupHistory', (_dec = ccclass('TaiXiuJPPopupHistory'), _dec2 = menu("TaiXiuJP/PopupHistory"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ScrollView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistory, _Dialog);
        function PopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toggleContainer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll", _descriptor3, _assertThisInitialized(_this));
          _this.isGold = true;
          _this.gameID = 2;
          // 1: HK, 2: LVG, 3: MC
          _this.gameNames = ["HK", "LVG", "MC"];
          _this.page = 1;
          _this.per_page = 10;
          return _this;
        }
        var _proto = PopupHistory.prototype;
        _proto.onLoad = function onLoad() {
          var scrollViewEventHandler = new EventHandler();
          scrollViewEventHandler.target = this.node;
          scrollViewEventHandler.component = 'TaiXiuMini.PopupHistory';
          scrollViewEventHandler.handler = 'onScrollEvent';
          this.scroll.scrollEvents.push(scrollViewEventHandler);
        };
        _proto.showHistory = function showHistory(gameID) {
          this.gameID = gameID;
          _Dialog.prototype.show.call(this);
          this.toggleContainer.getChildByName(this.gameNames[this.gameID - 1]).getComponent(Toggle).isChecked = true;
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
        _proto.onChangeGameID = function onChangeGameID(toggle, data) {
          if (toggle.isChecked === false) return;
          this.gameID = parseInt(data);
          this.page = 1;
          this.scroll.content.removeAllChildren();
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
          Http.get(Configs.App.DOMAIN_CONFIG['GetAccountHistoryLuckyDice'], params, function (status, res) {
            if (status === 200) {
              var data = res.d;
              var useBG1 = true;
              var toggleBG = function toggleBG(node, useBG1) {
                var bg1 = node.getChildByName("bg1");
                var bg2 = node.getChildByName("bg2");
                bg1.active = useBG1;
                bg2.active = !useBG1;
                return !useBG1;
              };
              for (var i = _this2.page - 1; i < data.length; i++) {
                var item = data[i];
                var node = instantiate(_this2.prefab);
                useBG1 = toggleBG(node, useBG1);
                _this2.setItemData(node.getChildByName("content"), item);
                node.active = true;
                _this2.scroll.content.addChild(node);
                if (item.JackPotValue > 0) {
                  var nodeJP = instantiate(node);
                  var nodeContentJP = nodeJP.getChildByName("content");
                  useBG1 = toggleBG(nodeJP, useBG1);
                  nodeContentJP.getChildByName("lblResult").getComponent(Label).string = App.instance.getTextLang("sl33");
                  nodeContentJP.getChildByName("lblWin").getComponent(Label).string = Utils.formatNumber(item.JackPotValue);
                  nodeJP.active = true;
                  _this2.scroll.content.addChild(nodeJP);
                }
              }
            }
            App.instance.showLoading(false);
          });
        };
        _proto.setItemData = function setItemData(item, data) {
          item.getChildByName("lblSession").getComponent(Label).string = "#" + data.GameSessionID;
          item.getChildByName("lblTime").getComponent(Label).string = Utils.formatDatetime(data.StartTime, 'dd/MM/yyyy HH:mm:ss');
          item.getChildByName("lblBetDoor").getComponent(Label).string = data.LocationName == 1 ? App.instance.getTextLang("tx44") : App.instance.getTextLang("tx43");
          item.getChildByName("lblResult").getComponent(Label).string = data.Result;
          item.getChildByName("lblBet").getComponent(Label).string = Utils.formatNumber(data.TotalBetValue);
          item.getChildByName("lblRefund").getComponent(Label).string = Utils.formatNumber(data.RefundValue);
          item.getChildByName("lblWin").getComponent(Label).string = Utils.formatNumber(data.PrizeValue);
        };
        _proto.onScrollEvent = function onScrollEvent(node, type, data) {
          if (type == ScrollView.EventType.SCROLL_TO_BOTTOM) {
            this.page++;
            this.loadData();
          }
        };
        return PopupHistory;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec5], {
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

System.register("chunks:///_virtual/TaiXiuJP.PopupHonors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
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
      cclegacy._RF.push({}, "15c4378/XdDq7lDN/bwJnsr", "TaiXiuJP.PopupHonors", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHonors = exports('PopupHonors', (_dec = ccclass('TaiXiuJPPopupHonors'), _dec2 = menu("TaiXiuJP/PopupHonors"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
          _this.isGold = true;
          _this.gameID = 2;
          // 1: HK, 2: LVG, 3: MC
          _this.page = 1;
          _this.per_page = 10;
          return _this;
        }
        var _proto = PopupHonors.prototype;
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          this.loadData();
        };
        _proto.onChangeGameID = function onChangeGameID(toggle, data) {
          if (toggle.isChecked === false) return;
          this.gameID = parseInt(data);
          this.page = 1;
          this.loadData();
        };
        _proto.onChangeBetType = function onChangeBetType() {
          this.isGold = !this.isGold;
          this.page = 1;
          this.loadData();
        };
        _proto.loadData = function loadData() {
          var _this2 = this;
          App.instance.showLoading(true);
          this.items.removeAllChildren();
          var params = {
            currencyID: Configs.Login.CurrencyID,
            gameID: this.gameID,
            betType: this.isGold ? 1 : 2,
            topCount: 50
          };
          Http.get(Configs.App.DOMAIN_CONFIG['GetTopDailyWinnersLuckyDice'], params, function (status, res) {
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
                node.getChildByName("label2").getComponent(Label).string = data[i].Nickname;
                node.getChildByName("label3").getChildByName("text").getComponent(Label).string = Utils.formatNumber(data[i].PrizeValue);
                node.getChildByName("label3").getChildByName("coin").getComponent(Sprite).spriteFrame = _this2.isGold ? _this2.sprFrameGold : _this2.sprFrameCoin;
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

System.register("chunks:///_virtual/TaiXiuLVGController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Http.ts', './Config.ts', './App.ts', './Utils.ts', './MiniGameTX1SignalRClient.ts', './MiniGameTX2SignalRClient.ts', './MiniGameTX3SignalRClient.ts', './MiniGameSignalRClient.ts', './BroadcastListener.ts', './TaiXiuDouble.Controller.ts', './TaiXiuJP.PopupDetailSession.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Label, Node, Button, BitmapFont, Prefab, EditBox, v2, Sprite, Animation, v3, tween, instantiate, Tween, UIOpacity, Component, Http, Configs, App, Utils, MiniGameTX1SignalRClient, MiniGameTX2SignalRClient, MiniGameTX3SignalRClient, MiniGameSignalRClient, BroadcastReceiver, TaiXiuDoubleController, PopupDetailSession;
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
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      BitmapFont = module.BitmapFont;
      Prefab = module.Prefab;
      EditBox = module.EditBox;
      v2 = module.v2;
      Sprite = module.Sprite;
      Animation = module.Animation;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      MiniGameTX1SignalRClient = module.default;
    }, function (module) {
      MiniGameTX2SignalRClient = module.default;
    }, function (module) {
      MiniGameTX3SignalRClient = module.default;
    }, function (module) {
      MiniGameSignalRClient = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      TaiXiuDoubleController = module.default;
    }, function (module) {
      PopupDetailSession = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _class3;
      cclegacy._RF.push({}, "90debY9hmVExJaZ3pZh8Yea", "TaiXiuLVGController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuLVGController = exports('default', (_dec = ccclass('TaiXiuLVGController'), _dec2 = menu("TaiXiuJP/TaiXiuCenterController"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property([SpriteFrame]), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Button), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Label), _dec27 = property([BitmapFont]), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Prefab), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(EditBox), _dec40 = property(EditBox), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property([Node]), _dec44 = property([SpriteFrame]), _dec45 = property([SpriteFrame]), _dec46 = property(SpriteFrame), _dec47 = property(Label), _dec48 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuLVGController, _Component);
        function TaiXiuLVGController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainWaiting", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSumDices", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTaiAll", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiuAll", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTaiCurrent", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiuCurrent", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetTai", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetXiu", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetTaiXu", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetXiuXu", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserTai", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserXiu", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dicesContainer", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listSprDice", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeTai", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeXiu", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonNan", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bowl", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHistories", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblToast", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontTime", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animationDragonTipzoLVG", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinGold", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinSliver", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelNode", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyList", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItem", _descriptor31, _assertThisInitialized(_this));
          _this.historySessions = [];
          _initializerDefineProperty(_this, "popupDetailHistory", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeWheelSpin", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeJackPot", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackPot", _descriptor36, _assertThisInitialized(_this));
          _this.isCoinGold = true;
          _this.currentTotalBetTai = 0;
          _this.currentTotalBetXiu = 0;
          _this.allTotalBetTai = 0;
          _this.allTotalBetXiu = 0;
          _this.resetLabels = [];
          _this.isBetting = false;
          _this.isNan = false;
          _this.lastLocationIDWin = 0;
          _this.lastScore = 0;
          _this.bowlStartPos = v2(-252, 35);
          _this.arrTimeoutDice = [];
          _this.popupDetailSession = null;
          _initializerDefineProperty(_this, "editBoxBetTai", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBoxBetXiu", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBet1", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBet2", _descriptor40, _assertThisInitialized(_this));
          _this.gameID = void 0;
          _this.hub = null;
          _this.betTypeLocation = 0;
          // 1: Xiu, 2: Tai
          _this.currentBetType = "";
          // EventSH
          _initializerDefineProperty(_this, "boxes", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBoxes", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFramePrizes", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameBoxDefault", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotCoin", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextNode", _descriptor46, _assertThisInitialized(_this));
          _this.countdownRemainTime = null;
          _this.countdownWaitingTime = null;
          _this.isOpenBowl = false;
          _this.isShowWheel = false;
          _this.jackpotInfo = null;
          _this.lastBetAmount = 0;
          _this.lastBetAmountXu = 0;
          return _this;
        }
        var _proto = TaiXiuLVGController.prototype;
        _proto.onLoad = function onLoad() {
          TaiXiuLVGController.instance = this;
          this.resetLabels = [this.lblTotalBetTaiAll, this.lblTotalBetXiuAll, this.lblTotalBetTaiCurrent, this.lblTotalBetXiuCurrent];
        };
        _proto.onDisable = function onDisable() {
          for (var i = 0; i < this.arrTimeoutDice.length; i++) {
            clearTimeout(this.arrTimeoutDice[i]);
          }
          this.arrTimeoutDice = [];
        };
        _proto.start = function start() {
          var _this2 = this;
          this.bowl.on(Node.EventType.TOUCH_MOVE, function (event) {
            var pos = _this2.bowl.getPosition();
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this2.bowl.position = pos;
            var distance = Utils.v2Distance(v2(pos.x, pos.y), _this2.bowlStartPos);
            if (Math.abs(distance) > 300) {
              _this2.showResult();
              _this2.isOpenBowl = true;
              _this2.scheduleOnce(function () {
                _this2.bowl.active = false;
              }, 2);
            }
          }, this);
          this.lblToast.node.parent.active = false;
          this.bowl.active = false;
          this.dicesContainer.active = false;
        };
        _proto.loadEventChestCheck = function loadEventChestCheck() {
          var _this3 = this;
          if (Configs.Login.IsLogin == false) return;
          Http.get(Configs.App.DOMAIN_CONFIG['GetEventChestAccountInfo'], {
            GameID: this.gameID,
            currencyID: Configs.Login.CurrencyID
          }, function (_status, res) {
            if (res.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.c));
              return;
            }
            if (!res.d) {
              return;
            }
            _this3.boxes.forEach(function (box) {
              box.getComponent(Sprite).spriteFrame = _this3.sprFrameBoxDefault;
              box.off(Node.EventType.TOUCH_END);
              box.getChildByName('time').active = false;
            });
            res.d.ListChest.forEach(function (data) {
              if (data.GameID != _this3.gameID) {
                return;
              }
              var awardTime = data.AwardTimeCount;
              if (data.ExpireTimeCount < 0) {
                return;
              }
              var _loop = function _loop() {
                  var box = _this3.boxes[i];
                  if (box.getComponent(Sprite).spriteFrame != _this3.sprFrameBoxDefault) {
                    return 0; // continue
                  }

                  if (awardTime > 0) {
                    var prize = data.PrizeValue > 0 ? data.PrizeValue : data.SpecialGift;
                    if (prize <= 0) return 0; // continue
                    targetFrame = _this3.sprFramePrizes.find(function (sprFrame) {
                      return sprFrame.name === "prize-value-" + Utils.formatMoney(prize, true);
                    });
                    if (targetFrame) {
                      box.getComponent(Sprite).spriteFrame = targetFrame;
                      var timeNode = box.getChildByName('time');
                      timeNode.active = true;
                      var countdownInterval = setInterval(function () {
                        if (awardTime < 0) {
                          clearInterval(countdownInterval);
                          timeNode.getComponentInChildren(Label).string = "00:00";
                          return;
                        }
                        var minutes = Math.floor(awardTime / 60);
                        var seconds = awardTime % 60;
                        timeNode.getComponentInChildren(Label).string = "" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
                        awardTime--;
                      }, 1000);
                    }
                    return 1; // break
                  }

                  box.getComponent(Sprite).spriteFrame = _this3.sprFrameBoxes[data.PrizeID - 1];
                  box.on(Node.EventType.TOUCH_END, function () {
                    if (data.AwardTimeCount > 0) {
                      _this3.showToast(App.instance.getTextLang("ev43"));
                    }
                    _this3.openEventChest(box, data.ChestID);
                  });
                  return 1; // break
                },
                targetFrame,
                _ret;
              for (var i = 0; i < 4; i++) {
                _ret = _loop();
                if (_ret === 0) continue;
                if (_ret === 1) break;
              }
            });
          });
        };
        _proto.openEventChest = function openEventChest(_box, ChestID) {
          var _this4 = this;
          Http.post(Configs.App.DOMAIN_CONFIG['PostEventChestOpen'], {
            GameID: this.gameID,
            CurrencyID: Configs.Login.CurrencyID,
            ChestID: ChestID
          }, function (_status, res) {
            if (res.c < 0) {
              _this4.showToast(App.instance.getTextLang("me" + res.c));
              return;
            }
            var data = res.d;
            var award;
            if (data.PrizeValue === 0 && data.SpecialGift === 0) {
              award = "";
            } else {
              if (data.PrizeValue > 0) {
                award = Utils.formatNumber(data.PrizeValue);
              } else {
                if (data.SpecialGift == 1) {
                  award = "SH";
                } else if (data.SpecialGift == 2) {
                  award = "Iphone";
                } else {
                  award = "";
                }
              }
            }
            _this4.showToast(App.instance.getTextLang("txt_reward") + " " + award);
            _this4.loadEventChestCheck();
          });
        };
        _proto.getLuckyDiceJackPot = function getLuckyDiceJackPot() {
          var _this5 = this;
          if (Configs.Login.IsLogin == false) return;
          Http.get(Configs.App.DOMAIN_CONFIG['LuckyDiceJackPot'], {
            gameID: this.gameID
          }, function (_status, res) {
            if (res.c < 0) {
              return;
            }
            _this5.lblJackpotCoin.string = Utils.formatNumber(res.d);
          });
        };
        _proto.initHubs = function initHubs(gameID) {
          var _this6 = this;
          this.gameID = gameID;
          if (this.gameID == 1) {
            this.hub = MiniGameTX1SignalRClient.getInstance();
          } else if (this.gameID == 2) {
            this.hub = MiniGameTX2SignalRClient.getInstance();
          } else if (this.gameID == 3) {
            this.hub = MiniGameTX3SignalRClient.getInstance();
          }
          this.getLuckyDiceJackPot();
          this.hub.receive("currentSessionLD", function (res) {
            if (res.GameID !== _this6.gameID) return;
            _this6.lblSession.string = "#" + res.GameSessionID;
            _this6.unschedule(_this6.countdownRemainTime);
            _this6.unschedule(_this6.countdownWaitingTime);
            if (res.GameStatus === 1) {
              MiniGameSignalRClient.getInstance().send("GetCurrentRoomsLD", [{
                GameID: _this6.gameID,
                CurrencyID: Configs.Login.CurrencyID,
                BetType: _this6.isCoinGold ? 1 : 2
              }], function () {});
              _this6.handleBettingPhase(res.RemainBetting);
            } else {
              _this6.handleWaitingPhase(res.RemainWaiting);
              _this6.hub.send("GetAccountResultLD", [{
                GameID: _this6.gameID,
                CurrencyID: Configs.Login.CurrencyID,
                GameSessionID: res.GameSessionID
              }], function () {});
            }
            _this6.loadEventChestCheck();
          });
          this.hub.receive("currentResultLD", function (res) {
            if (res.GameID != _this6.gameID) {
              return;
            }
            _this6.buttonNan.enabled = false;
            _this6.editBoxBetTai.enabled = false;
            _this6.editBoxBetXiu.enabled = false;
            _this6.lblRemainTime.node.active = false;
            _this6.lblRemainWaiting.node.parent.active = false;
            _this6.animationDragonTipzoLVG.active = false;
            var aminResult = _this6.dicesContainer.getChildByName('anim');
            var resultNode = _this6.dicesContainer.getChildByName('result');
            resultNode.active = false;
            aminResult.active = true;
            var dice_1 = resultNode.getChildByName('dice_1');
            var dice_2 = resultNode.getChildByName('dice_2');
            var dice_3 = resultNode.getChildByName('dice_3');
            dice_1.getComponent(Sprite).spriteFrame = _this6.listSprDice[res.Dice1 - 1];
            dice_2.getComponent(Sprite).spriteFrame = _this6.listSprDice[res.Dice2 - 1];
            dice_3.getComponent(Sprite).spriteFrame = _this6.listSprDice[res.Dice3 - 1];
            _this6.isShowWheel = res.Dice1 == 1 && res.Dice2 == 1 && res.Dice3 == 1 || res.Dice1 == 6 && res.Dice2 == 6 && res.Dice3 == 6;
            _this6.jackpotInfo = res.JackPotInfo || null;
            _this6.dicesContainer.active = true;
            var anim = aminResult.getComponent(Animation);
            anim.play();
            _this6.scheduleOnce(function () {
              anim.stop();
              aminResult.active = false;
              _this6.lastLocationIDWin = res.LocationIDWin;
              _this6.lastScore = res.Dice1 + res.Dice2 + res.Dice3;
              if (_this6.isNan) {
                _this6.bowl.setPosition(v3(_this6.bowlStartPos.x, _this6.bowlStartPos.y, 0));
                _this6.bowl.active = true;
                _this6.scheduleOnce(function () {
                  if (_this6.isOpenBowl) {
                    return;
                  }
                  _this6.isOpenBowl = true;
                  tween(_this6.bowl).to(0.5, {
                    position: v3(0, -220, 0)
                  }).call(function () {
                    _this6.showResult();
                    _this6.scheduleOnce(function () {
                      _this6.bowl.active = false;
                    }, 2);
                  }).start();
                }, 10);
              } else {
                _this6.showResult();
              }
              resultNode.active = true;
            }, 3);
          });
          this.hub.receive("currentRoomsInfoLD", function (res) {
            _this6.handleRoomInfo(res, true);
          });
          MiniGameSignalRClient.getInstance().receive("currentRoomsInfoLD", function (res) {
            _this6.handleRoomInfo(res, false);
          });
          this.hub.receive("gameHistoryLD", function (res) {
            if (res == null || res.length == 0) {
              return;
            }
            if (res[0].GameID == _this6.gameID) {
              _this6.historyList.removeAllChildren();
            } else {
              return;
            }
            var isReset = false;
            var _loop2 = function _loop2(i) {
              if (res[i].GameID != _this6.gameID) {
                return 1; // continue
              }

              if (!isReset) {
                _this6.historySessions = [];
                isReset = true;
              }
              _this6.historySessions.push(res[i]);
              var item = instantiate(_this6.historyItem);
              item.getComponent(Sprite).spriteFrame = res[i].LocationIDWin == 1 ? _this6.sprFrameXiu : _this6.sprFrameTai;
              item.on(Node.EventType.TOUCH_END, function () {
                _this6.actPopupHistorySession(res[i].GameSessionID, _this6.historySessions);
              });
              _this6.historyList.addChild(item);
              if (i === 0) {
                item.getChildByName("last").active = true;
                Tween.stopAllByTarget(item);
                _this6.scheduleOnce(function () {
                  var posUp = v3(item.position.x, 5, item.position.z);
                  var posDown = v3(item.position.x, -5, item.position.z);
                  tween(item).repeatForever(tween().to(0.3, {
                    position: posUp
                  }).to(0.3, {
                    position: posDown
                  })).start();
                }, 0);
              }
            };
            for (var i = res.length - 1; i >= 0; i--) {
              if (_loop2(i)) continue;
            }
          });
          this.hub.receive("betOfAccountLD", function (res) {
            res.forEach(function (item) {
              if (item.GameID != _this6.gameID) {
                return;
              }
              _this6.editBoxBetTai.string = '';
              _this6.editBoxBetXiu.string = '';
              if (item.BetType == 1) {
                var betLocation = item.LocationID == 1 ? _this6.lblBetXiu : _this6.lblBetTai;
                betLocation.string = Utils.formatMoneyOnlyK(item.BetValue);
              } else if (item.BetType == 2) {
                var _betLocation = item.LocationID == 1 ? _this6.lblBetXiuXu : _this6.lblBetTaiXu;
                _betLocation.string = Utils.formatMoneyOnlyK(item.BetValue);
              }
            });
          });
          this.hub.receive("resultOfAccountLD", function (res) {
            var totalPrize = 0;
            res.forEach(function (item) {
              if (item.GameID === _this6.gameID && item.PrizeValue > 0) {
                totalPrize += item.PrizeValue;
              }
            });
            if (totalPrize <= 0) {
              _this6.winTextNode.active = false;
              return;
            }
            if (_this6.isCoinGold) {
              Configs.Login.GoldBalance += totalPrize;
            } else {
              Configs.Login.CoinBalance += totalPrize;
            }
            _this6.handleWinOrRefundAmount(totalPrize);
          });
        };
        _proto.handleBettingPhase = function handleBettingPhase(remainTime) {
          var _this7 = this;
          if (remainTime === 60) {
            this.showToast(App.instance.getTextLang("txt_taixiu_new_session"));
            this.getLuckyDiceJackPot();
            this.dicesContainer.active = false;
            this.isOpenBowl = false;
            this.arrTimeoutDice = [];
            this.resetSessionLabels();
            this.lblBetTai.string = "0";
            this.lblBetXiu.string = "0";
            this.lblBetTaiXu.string = "0";
            this.lblBetXiuXu.string = "0";
            this.betTypeLocation = 0;
            this.lastScore = 0;
            this.lblSumDices.string = "";
            this.lblRemainTime.string = "60";
            this.lblRemainTime.font = this.fontTime[0];
            this.hideResult();
            BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          }
          if (remainTime < 3) {
            this.isBetting = false;
            return;
          }
          this.isBetting = true;
          this.lblRemainTime.node.active = true;
          this.editBoxBetTai.enabled = true;
          this.editBoxBetXiu.enabled = true;
          this.buttonNan.enabled = true;
          this.lblRemainWaiting.node.parent.active = false;
          this.lblRemainWaiting.node.active = false;
          var secondsLeft = remainTime;
          this.unschedule(this.countdownRemainTime);
          this.schedule(this.countdownRemainTime = function () {
            _this7.hideResult();
            try {
              if (secondsLeft < 0) {
                _this7.animationDragonTipzoLVG.active = false;
                _this7.unschedule(_this7.countdownRemainTime);
                return;
              }
              _this7.animationDragonTipzoLVG.active = secondsLeft <= 30;
              _this7.lblRemainTime.string = secondsLeft < 10 ? "0" + secondsLeft : "" + secondsLeft;
              _this7.lblRemainTime.font = secondsLeft < 10 ? _this7.fontTime[1] : _this7.fontTime[0];
              secondsLeft--;
            } catch (e) {
              _this7.unschedule(_this7.countdownRemainTime);
            }
          }, 1);
        };
        _proto.handleWaitingPhase = function handleWaitingPhase(waitingTime) {
          var _this8 = this;
          if (waitingTime > 0) this.isBetting = false;
          if (waitingTime < 19) {
            this.hub.send("GetCurrentResultLD", [{
              GameID: this.gameID
            }], function () {});
          }
          this.lblRemainTime.node.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          this.animationDragonTipzoLVG.active = false;
          var secondsLeft = waitingTime;
          this.unschedule(this.countdownWaitingTime);
          this.schedule(this.countdownWaitingTime = function () {
            try {
              if (secondsLeft < 0) {
                _this8.unschedule(_this8.countdownWaitingTime);
                return;
              }
              if (secondsLeft < 28) {
                if (_this8.isNan && _this8.isOpenBowl === false && secondsLeft > 17) {
                  var secondsLeftOpenBowl = secondsLeft - 17;
                  _this8.lblRemainWaiting.string = "00:" + (secondsLeftOpenBowl < 10 ? "0" + secondsLeftOpenBowl : secondsLeftOpenBowl);
                  _this8.lblRemainWaiting.node.active = true;
                  _this8.lblRemainWaiting.node.parent.active = true;
                  _this8.lblSumDices.node.active = false;
                } else {
                  _this8.lblSumDices.node.active = secondsLeft > 15;
                  _this8.lblRemainWaiting.node.active = secondsLeft <= 15;
                  _this8.lblRemainWaiting.string = "00:" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
                }
              }
              if (secondsLeft == 3 && Configs.Login.IsLogin) {
                Http.get(Configs.App.DOMAIN_CONFIG['GetAllBalance'], {}, function (status, json) {
                  if (status === 200) {
                    var goldFromApi = json['d'][0]['goldBalance'];
                    var coinFromApi = json['d'][0]['coinBalance'];
                    if (_this8.isCoinGold && goldFromApi > Configs.Login.GoldBalance) {
                      _this8.handleWinOrRefundAmount(goldFromApi - Configs.Login.GoldBalance);
                    } else if (!_this8.isCoinGold && coinFromApi > Configs.Login.CoinBalance) {
                      _this8.handleWinOrRefundAmount(coinFromApi - Configs.Login.CoinBalance);
                    }
                  }
                });
              }
              secondsLeft--;
            } catch (e) {
              _this8.unschedule(_this8.countdownWaitingTime);
            }
          }, 1);
        };
        _proto.handleRoomInfo = function handleRoomInfo(res, isCurrent) {
          for (var _iterator = _createForOfIteratorHelperLoose(res), _step; !(_step = _iterator()).done;) {
            var room = _step.value;
            if (room == null) continue;
            if (room.GameID !== this.gameID) continue;
            var isGoldRoom = room.BetType === 1;
            var isXuRoom = room.BetType === 2;
            if (this.isCoinGold && isXuRoom || !this.isCoinGold && isGoldRoom) {
              continue;
            }

            // Update shared user info
            this.lblUserXiu.string = "(" + Utils.formatNumber(room.TotalAccount1) + ")";
            this.lblUserTai.string = "(" + Utils.formatNumber(room.TotalAccount2) + ")";
            if (isCurrent) {
              this.allTotalBetXiu += room.TotalBetValue1 - this.currentTotalBetXiu;
              this.allTotalBetTai += room.TotalBetValue2 - this.currentTotalBetTai;
              this.currentTotalBetXiu = room.TotalBetValue1;
              this.currentTotalBetTai = room.TotalBetValue2;
            } else {
              this.allTotalBetXiu = room.TotalBetValue1 + this.currentTotalBetXiu;
              this.allTotalBetTai = room.TotalBetValue2 + this.currentTotalBetTai;
            }
            this.lblTotalBetXiuCurrent.string = Utils.formatMoneyOnlyK(this.currentTotalBetXiu);
            this.lblTotalBetTaiCurrent.string = Utils.formatMoneyOnlyK(this.currentTotalBetTai);
            this.lblTotalBetXiuAll.string = Utils.formatMoneyOnlyK(this.allTotalBetXiu);
            this.lblTotalBetTaiAll.string = Utils.formatMoneyOnlyK(this.allTotalBetTai);
          }
        };
        _proto.handleWinOrRefundAmount = function handleWinOrRefundAmount(amount) {
          var _this9 = this;
          this.winTextNode.active = true;
          this.winTextNode.getComponent(Label).string = '+ ' + Utils.formatNumber(amount);
          this.winTextNode.position = v3(this.winTextNode.x, -50);
          tween(this.winTextNode).to(3, {
            position: v3(this.winTextNode.x, 150)
          }).call(function () {
            _this9.winTextNode.active = false;
          }).start();
        };
        _proto.actBet = function actBet(_event, data) {
          var _this10 = this;
          if (!this.isBetting) {
            return;
          }
          var isXiu = data == "1";
          var betValue = isXiu ? this.editBoxBetXiu.string : this.editBoxBetTai.string;
          this.betTypeLocation = isXiu ? 1 : 2;
          this.hub.send("SetBetLD", [{
            GameID: this.gameID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isCoinGold ? 1 : 2,
            Location: isXiu ? 1 : 2,
            Amount: parseInt(betValue)
          }], function (res) {
            if (res < 0) {
              _this10.showToast(App.instance.getTextLang("me" + res));
            }
            if (_this10.isCoinGold) {
              _this10.lastBetAmount = parseInt(betValue);
            } else {
              _this10.lastBetAmountXu = parseInt(betValue);
            }
            _this10.editBoxBetTai.string = "";
            _this10.editBoxBetXiu.string = "";
            BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
            _this10.layoutBet1.active = false;
            _this10.layoutBet2.active = false;
            TaiXiuDoubleController.instance.backgroundLayoutBet.active = false;
          });
        };
        _proto.hideLayoutBet = function hideLayoutBet() {
          this.layoutBet1.active = false;
          this.layoutBet2.active = false;
        };
        _proto.actShowLayOutBet = function actShowLayOutBet() {
          if (!this.editBoxBetTai.enabled || !this.editBoxBetXiu.enabled) {
            return;
          }
          TaiXiuDoubleController.instance.backgroundLayoutBet.active = true;
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
          var lastBetAmount = this.isCoinGold ? this.lastBetAmount : this.lastBetAmountXu;
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
        _proto.actCancel = function actCancel() {
          this.clearBetAmount();
        };
        _proto.clearBetAmount = function clearBetAmount() {
          if (this.currentBetType == "1") {
            this.editBoxBetXiu.string = "";
          } else if (this.currentBetType == "2") {
            this.editBoxBetTai.string = "";
          }
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
        _proto.actClose = function actClose() {
          TaiXiuDoubleController.instance.dismiss();
        };
        _proto.actNan = function actNan(event) {
          var target = event.target;
          var on = target.getChildByName('on');
          var off = target.getChildByName('off');
          on.active = !on.active;
          off.active = !off.active;
          this.isNan = !this.isNan;
        };
        _proto.actSwitchCoin = function actSwitchCoin() {
          this.isCoinGold = !this.isCoinGold;
          this.coinGold.active = this.isCoinGold;
          this.coinSliver.active = !this.isCoinGold;
          this.resetSessionLabels();
          this.lblBetTai.node.active = this.isCoinGold;
          this.lblBetXiu.node.active = this.isCoinGold;
          this.lblBetTaiXu.node.active = !this.isCoinGold;
          this.lblBetXiuXu.node.active = !this.isCoinGold;
        };
        _proto.resetSessionLabels = function resetSessionLabels() {
          this.resetLabels.forEach(function (label) {
            return label.string = "0";
          });
          this.lblUserTai.string = "(0)";
          this.lblUserXiu.string = "(0)";
          this.currentTotalBetTai = 0;
          this.currentTotalBetXiu = 0;
          this.allTotalBetTai = 0;
          this.allTotalBetXiu = 0;
        };
        _proto.actPopupHistorySession = function actPopupHistorySession(sessionId, detailSessions) {
          if (this.popupDetailSession == null) {
            this.popupDetailSession = instantiate(this.popupDetailHistory).getComponent(PopupDetailSession);
            this.popupDetailSession.node.parent = this.popupContainer;
            this.popupDetailSession.showDetail(sessionId, this.gameID, detailSessions);
            App.instance.showLoading(false);
          } else {
            this.popupDetailSession.showDetail(sessionId, this.gameID, detailSessions);
          }
        };
        _proto.showResult = function showResult() {
          var _this11 = this;
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
          if (!this.isShowWheel) {
            return;
          }
          this.scheduleOnce(function () {
            _this11.nodeWheelSpin.active = true;
            _this11.handleJackpotFund(_this11.jackpotInfo ? _this11.jackpotInfo.JackpotLocationID : 0);
            _this11.scheduleOnce(function () {
              _this11.nodeJackPot.active = false;
              _this11.nodeWheelSpin.active = false;
            }, 12);
          }, 3);
        };
        _proto.handleJackpotFund = function handleJackpotFund(locationID) {
          var _this12 = this;
          var baseAngle = 0;
          if (locationID === 1) {
            baseAngle = 120;
          } else if (locationID === 2) {
            baseAngle = 60;
          }
          Tween.stopAllByTarget(this.wheelNode);
          this.wheelNode.angle = this.wheelNode.angle % 360;
          var totalRounds = 8;
          var targetAngle = 360 * totalRounds + baseAngle;
          tween(this.wheelNode).to(4, {
            angle: -targetAngle
          }, {
            easing: "quartOut"
          }).call(function () {
            if (_this12.betTypeLocation === 0 || _this12.betTypeLocation !== locationID) {
              return;
            }
            _this12.nodeJackPot.active = true;
            _this12.lblJackPot.getComponent(Label).string = Utils.formatNumber(_this12.jackpotInfo.JackpotFund);
          }).start();
        };
        _proto.hideResult = function hideResult() {
          this.lblRemainWaiting.node.parent.active = false;
          Tween.stopAllByTarget(this.nodeTai);
          Tween.stopAllByTarget(this.nodeXiu);
          this.nodeTai.setScale(v3(1, 1, 1));
          this.nodeXiu.setScale(v3(1, 1, 1));
        };
        _proto.showToast = function showToast(message) {
          this.lblToast.string = message;
          var parent = this.lblToast.node.parent;
          Tween.stopAllByTarget(parent);
          parent.active = true;
          var uiOpacity = parent.getComponent(UIOpacity);
          if (!uiOpacity) {
            uiOpacity = parent.addComponent(UIOpacity);
          }
          uiOpacity.opacity = 0;
          tween(uiOpacity).to(0.1, {
            opacity: 255
          }) // fadeIn 0.1s
          .delay(2.0) // delay 2s
          .to(0.2, {
            opacity: 0
          }) // fadeOut 0.2s
          .call(function () {
            parent.active = false;
          }).start();
        };
        return TaiXiuLVGController;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainWaiting", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblSumDices", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTaiAll", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiuAll", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTaiCurrent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiuCurrent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblBetTai", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblBetXiu", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblBetTaiXu", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lblBetXiuXu", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblUserTai", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblUserXiu", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "dicesContainer", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "listSprDice", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "nodeTai", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiu", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "buttonNan", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bowl", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "btnHistories", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "fontTime", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "animationDragonTipzoLVG", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "coinGold", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "coinSliver", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "wheelNode", [_dec31], {
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
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "popupDetailHistory", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "nodeWheelSpin", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "nodeJackPot", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "lblJackPot", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetTai", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetXiu", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "layoutBet1", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "layoutBet2", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "boxes", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBoxes", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "sprFramePrizes", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBoxDefault", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotCoin", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "winTextNode", [_dec48], {
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

System.register("chunks:///_virtual/TaiXiuMiniController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MiniGameTX1SignalRClient.ts', './MiniGameTX2SignalRClient.ts', './MiniGameTX3SignalRClient.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, instantiate, Sprite, v3, tween, Component, MiniGameTX1SignalRClient, MiniGameTX2SignalRClient, MiniGameTX3SignalRClient, Utils;
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
      Sprite = module.Sprite;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      MiniGameTX1SignalRClient = module.default;
    }, function (module) {
      MiniGameTX2SignalRClient = module.default;
    }, function (module) {
      MiniGameTX3SignalRClient = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _class3;
      cclegacy._RF.push({}, "9f8948MMINNZJQVBLeGMtfF", "TaiXiuMiniController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuMiniController = exports('default', (_dec = ccclass('TaiXiuMiniController'), _dec2 = menu("TaiXiuJP/TaiXiuMiniController"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuMiniController, _Component);
        function TaiXiuMiniController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "remainTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waitingTime", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTai", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiu", _descriptor4, _assertThisInitialized(_this));
          // @property(sp.Skeleton)
          // bgSpine: sp.Skeleton = null;
          _initializerDefineProperty(_this, "tai", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xiu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "score", _descriptor7, _assertThisInitialized(_this));
          _this.gameID = 1;
          _this.hub = null;
          _initializerDefineProperty(_this, "historyList", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItem", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor11, _assertThisInitialized(_this));
          _this.countdownRemainTime = null;
          _this.countdownWaitingTime = null;
          _initializerDefineProperty(_this, "winTextNode", _descriptor12, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TaiXiuMiniController.prototype;
        _proto.onLoad = function onLoad() {
          TaiXiuMiniController.instance = this;
        };
        _proto.start = function start() {
          this.tai.active = false;
          this.xiu.active = false;
          this.score.active = false;
          this.lblTotalBetTai.string = "0";
          this.lblTotalBetXiu.string = "0";
          this.waitingTime.active = false;
          this.remainTime.active = false;
        };
        _proto.initHubs = function initHubs(gameID) {
          var _this2 = this;
          this.gameID = gameID;
          if (this.gameID == 1) {
            this.hub = MiniGameTX1SignalRClient.getInstance();
          } else if (this.gameID == 2) {
            this.hub = MiniGameTX2SignalRClient.getInstance();
          } else if (this.gameID == 3) {
            this.hub = MiniGameTX3SignalRClient.getInstance();
          }
          this.hub.receive("currentSessionLD", function (res) {
            if (res.GameID != _this2.gameID) {
              return;
            }
            _this2.unschedule(_this2.countdownRemainTime);
            _this2.unschedule(_this2.countdownWaitingTime);
            if (res.GameStatus == 1) {
              if (res.RemainBetting == 60) {
                _this2.tai.active = false;
                _this2.xiu.active = false;
                _this2.score.active = false;
                _this2.lblTotalBetTai.string = "0";
                _this2.lblTotalBetXiu.string = "0";
                _this2.waitingTime.active = false;
              }
              _this2.remainTime.active = true;
              var secondRemainBetting = res.RemainBetting;
              _this2.unschedule(_this2.countdownRemainTime);
              _this2.schedule(_this2.countdownRemainTime = function () {
                try {
                  if (secondRemainBetting < 0) {
                    _this2.unschedule(_this2.countdownRemainTime);
                    return;
                  }
                  _this2.remainTime.getComponent(Label).string = secondRemainBetting < 10 ? "0" + secondRemainBetting : "" + secondRemainBetting;
                  secondRemainBetting--;
                } catch (e) {
                  _this2.unschedule(_this2.countdownRemainTime);
                }
              }, 1);
            } else {
              _this2.remainTime.active = false;
              _this2.waitingTime.active = true;
              var secondRemainWaiting = res.RemainWaiting;
              _this2.unschedule(_this2.countdownWaitingTime);
              _this2.schedule(_this2.countdownWaitingTime = function () {
                try {
                  if (secondRemainWaiting < 0) {
                    _this2.unschedule(_this2.countdownWaitingTime);
                    return;
                  }
                  _this2.waitingTime.getChildByName("time").getComponent(Label).string = secondRemainWaiting < 10 ? "0" + secondRemainWaiting : "" + secondRemainWaiting;
                  secondRemainWaiting--;
                } catch (e) {
                  _this2.unschedule(_this2.countdownWaitingTime);
                }
              }, 1);
            }
          });
          this.hub.receive("currentResultLD", function (res) {
            if (res.GameID != _this2.gameID) {
              return;
            }
            _this2.score.active = true;
            _this2.score.getComponent(Label).string = res.Dice1 + res.Dice2 + res.Dice3 + "";
            if (res.LocationIDWin == 1) {
              _this2.tai.active = false;
              _this2.xiu.active = true;
            } else if (res.LocationIDWin == 2) {
              _this2.tai.active = true;
              _this2.xiu.active = false;
            }
          });
          this.hub.receive("currentRoomsInfoLD", function (res) {
            for (var i = 0; i < res.length; i++) {
              if (res[i].GameID != _this2.gameID) {
                continue;
              }
              _this2.lblTotalBetTai.string = Utils.formatMoney(res[i].TotalBetValue2, true);
              _this2.lblTotalBetXiu.string = Utils.formatMoney(res[i].TotalBetValue1, true);
            }
          });
          this.hub.receive("gameHistoryLD", function (res) {
            if (res == null || res.length == 0) {
              return;
            }
            if (res[0].GameID == _this2.gameID) {
              _this2.historyList.removeAllChildren();
            } else {
              return;
            }
            for (var i = res.length - 1; i >= 0; i--) {
              if (res[i].GameID != _this2.gameID) {
                continue;
              }
              var item = instantiate(_this2.historyItem);
              item.getComponent(Sprite).spriteFrame = res[i].LocationIDWin == 1 ? _this2.sprFrameXiu : _this2.sprFrameTai;
              _this2.historyList.addChild(item);
            }
          });
          this.hub.receive("resultOfAccountLD", function (res) {
            var totalPrize = 0;
            res.forEach(function (item) {
              if (item.GameID === _this2.gameID && item.PrizeValue > 0) {
                totalPrize += item.PrizeValue;
              }
            });
            if (totalPrize <= 0) {
              _this2.winTextNode.active = false;
              return;
            }
            _this2.winTextNode.active = true;
            _this2.winTextNode.getComponent(Label).string = '+ ' + Utils.formatNumber(totalPrize);
            _this2.winTextNode.position = v3(_this2.winTextNode.x, -50);
            tween(_this2.winTextNode).to(1, {
              position: v3(_this2.winTextNode.x, 20)
            }).call(function () {
              _this2.winTextNode.active = false;
            }).start();
          });
        };
        return TaiXiuMiniController;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "remainTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waitingTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTai", [_dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tai", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xiu", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "historyList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "historyItem", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "winTextNode", [_dec15], {
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
  r('virtual:///prerequisite-imports/TaiXiuDouble', 'chunks:///_virtual/TaiXiuDouble'); 
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