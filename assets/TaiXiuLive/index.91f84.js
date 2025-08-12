System.register("chunks:///_virtual/TaiXiuLive", ['./TaiXiuLive.ChatBox.ts', './TaiXiuLive.EventSH.ts', './TaiXiuLive.EventTienTri.ts', './TaiXiuLive.MiniLive.ts', './TaiXiuLive.PopupDetailSession.ts', './TaiXiuLive.PopupHistory.ts', './TaiXiuLive.PopupHistoryJackpot.ts', './TaiXiuLive.PopupHonors.ts', './TaiXiuLive.SoiCauJP.ts', './TaiXiuLiveJP.Controller.ts', './TaiXiuLiveMD5.Controller.ts', './TaiXiuLiveMD5.PopupDetailSession.ts', './TaiXiuLiveMD5.PopupHistory.ts', './TaiXiuLiveMD5.PopupHonors.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TaiXiuLive.ChatBox.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TaiXiuLiveJP.Controller.ts', './App.ts', './ChatHubSignalRClient.ts', './Config.ts', './TaiXiuLiveMD5.Controller.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, EditBox, SpriteFrame, instantiate, Sprite, Label, RichText, Component, TaiXiuLiveJPController, App, ChatHubSignalRClient, Configs, TaiXiuLiveMD5Controller;
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
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      TaiXiuLiveJPController = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      ChatHubSignalRClient = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      TaiXiuLiveMD5Controller = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "3f1e8yFTIBDerS1WhAijBLX", "TaiXiuLive.ChatBox", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuLiveChatBox = exports('TaiXiuLiveChatBox', (_dec = menu("TaiXiuLiveJP/ChatBox"), _dec2 = property(Node), _dec3 = property(ScrollView), _dec4 = property(EditBox), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property([SpriteFrame]), _dec10 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuLiveChatBox, _Component);
        function TaiXiuLiveChatBox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.CHAT_CHANNEL = "game_taixiu_jp_live";
          _this.CHAT_MD5_CHANNEL = "game_taixiu_md5_live";
          _initializerDefineProperty(_this, "itemChatTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrMessage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbMessage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatBox", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatTipBox", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listGiftNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftTemplate", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giftFrames", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectedTIP", _descriptor9, _assertThisInitialized(_this));
          _this.giftList = [{
            id: 1,
            name: "Hoa hồng",
            value: "1K",
            key: "gift_commission"
          }, {
            id: 2,
            name: "Kẹo mút",
            value: "2K",
            key: "gift_lollipop"
          }, {
            id: 3,
            name: "Que kem",
            value: "5K",
            key: "gift_icecream"
          }, {
            id: 4,
            name: "Trà sữa",
            value: "10K",
            key: "gift_milk_tea"
          }, {
            id: 5,
            name: "Ly Bia",
            value: "20K",
            key: "gift_beer"
          }, {
            id: 6,
            name: "Nụ hôn",
            value: "50K",
            key: "gift_kiss"
          }, {
            id: 7,
            name: "Trái tim",
            value: "100K",
            key: "gift_heart"
          }, {
            id: 8,
            name: "Nhẫn",
            value: "200K",
            key: "gift_ring"
          }, {
            id: 9,
            name: "Iphone",
            value: "500K",
            key: "gift_iphone"
          }, {
            id: 10,
            name: "Kim Cương",
            value: "1M",
            key: "gift_diamond"
          }, {
            id: 11,
            name: "Vương miện",
            value: "2M",
            key: "gift_crown"
          }, {
            id: 12,
            name: "Xe máy",
            value: "5M",
            key: "gift_motorbike"
          }, {
            id: 13,
            name: "ô tô",
            value: "10M",
            key: "gift_car"
          }];
          _this.giftIdSelected = 0;
          _this.giftNodeSelected = null;
          _this.chatChannel = _this.CHAT_CHANNEL;
          return _this;
        }
        var _proto = TaiXiuLiveChatBox.prototype;
        _proto.start = function start() {
          var _this2 = this;
          if (!TaiXiuLiveJPController.instance) {
            this.chatChannel = this.CHAT_MD5_CHANNEL;
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
          ChatHubSignalRClient.getInstance().registerChat(this.chatChannel, function (_response) {});
          ChatHubSignalRClient.getInstance().receiveChat(function (response) {
            response.forEach(function (item) {
              if (item.i !== _this2.chatChannel) {
                return;
              }
              _this2.addMessage(item);
            });
          });
          ChatHubSignalRClient.getInstance().receiveTIP(function (_response) {});
        };
        _proto.show = function show() {
          this.node.active = true;
        };
        _proto.hide = function hide() {
          this.node.active = false;
        };
        _proto.addMessage = function addMessage(data) {
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
          ChatHubSignalRClient.getInstance().sendChat(this.chatChannel, msg, function (_response) {});
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
          var gameID = this.chatChannel == this.CHAT_CHANNEL ? 117 : 123;
          ChatHubSignalRClient.getInstance().sendTIP(this.chatChannel, gameID + "|" + this.giftIdSelected, function (response) {
            if (response.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + response.c));
            }
            _this3.hide();
            if (TaiXiuLiveJPController.instance) {
              TaiXiuLiveJPController.instance.showToast(App.instance.getTextLang('iap192'));
            } else if (TaiXiuLiveMD5Controller.instance) {
              TaiXiuLiveMD5Controller.instance.showToast(App.instance.getTextLang('iap192'));
            }
            _this3.giftNodeSelected.emit(Node.EventType.TOUCH_END);
          });
        };
        return TaiXiuLiveChatBox;
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaiXiuLive.EventSH.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Toggle, SpriteFrame, instantiate, Sprite, Label, Tween, tween, v3, Color, EditBox, Dialog, App, Http, Configs, Utils;
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
      Color = module.Color;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "a46d7It3d5Al4PRi5I0aOU+", "TaiXiuLive.EventSH", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EventSH = exports('EventSH', (_dec = menu("TaiXiuLiveJP/EventSH"), _dec2 = property([Node]), _dec3 = property([Toggle]), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
              label.color = isActive ? new Color(255, 240, 0) : new Color(255, 255, 255);
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabContentsEventSH", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabTogglesEventSH", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listAccount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemAccount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listTop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemTop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox4", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameBox5", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "BG1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "BG2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "selectedBoxes", [_dec15], {
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

System.register("chunks:///_virtual/TaiXiuLive.EventTienTri.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Utils.ts', './Config.ts', './App.ts', './Http.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "a6475a7pJVIloVNRfGaKLRG", "TaiXiuLive.EventTienTri", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EventTienTri = exports('EventTienTri', (_dec = menu("TaiXiuLiveJP/EventTienTri"), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property([Node]), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Color), _dec21 = property(Color), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleDay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleFinal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleRule", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggleWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggleLost", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentData", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contentRule", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "headerWin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "headerLost", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "listContent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "itemContent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dropboxSelectDate", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "containerBoxCalenderResults", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "dayItemPrefab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "rows", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "labelTitleTime", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "labelTitleTimeBox", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "labelTabResultTab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "selectedColor", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color().fromHEX('#8043DB');
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "normalColor", [_dec21], {
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

System.register("chunks:///_virtual/TaiXiuLive.MiniLive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "5168806dS9DJaC9VGYJj7Yh", "TaiXiuLive.MiniLive", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuLiveMiniLive = exports('default', (_dec = ccclass('TaiXiuLiveMiniLive'), _dec2 = menu("TaiXiuLiveJP/MiniLive"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuLiveMiniLive, _Component);
        function TaiXiuLiveMiniLive() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "miniLiveNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TaiXiuLiveMiniLive.prototype;
        _proto.onEnable = function onEnable() {
          this.showMiniLive();
        };
        _proto.showMiniLive = function showMiniLive() {
          this.miniLiveNode.active = true;
        };
        _proto.hideMiniLive = function hideMiniLive() {
          this.miniLiveNode.active = false;
        };
        return TaiXiuLiveMiniLive;
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

System.register("chunks:///_virtual/TaiXiuLive.PopupDetailSession.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, Sprite, Tween, tween, v3, instantiate, Dialog, App, Configs, Http, Utils;
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
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "f2b4aP0tlFM/ov9/CIW2ITU", "TaiXiuLive.PopupDetailSession", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupDetailSession = exports('default', (_dec = menu("TaiXiuLiveJP/PopupDetailSession"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property([SpriteFrame]), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
        _proto.onChangeBetType = function onChangeBetType() {
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
          var url = Configs.App.DOMAIN_CONFIG['GetBetDetailsLuckyDice'] + "?currencyID=" + Configs.Login.CurrencyID + "&gameID=" + this.gameID + "&betType=" + this.betType + "&sessionID=" + this.sessionID + "&type=" + this.type;
          Http.post(url, {}, function (_status, res) {
            res.d.l.forEach(function (item, index) {
              if (index == 0) {
                _this2.lblSessionDate.node.active = true;
                _this2.lblSessionDate.string = Utils.formatDatetime(item.CreatedTime, "dd/MM/yyyy");
              }
              var node = instantiate(item.LocationID == 2 ? _this2.itemTai : _this2.itemXiu);
              var bg1 = node.getChildByName("bg1");
              var bg2 = node.getChildByName("bg2");
              if (bg1 && bg2) {
                bg1.active = index % 2 === 0;
                bg2.active = index % 2 !== 0;
              }
              var content = node.getChildByName("content");
              content.getChildByName("Time").getComponent(Label).string = Utils.formatDatetime(item.CreatedTime, 'dd/MM/yyyy HH:mm:ss');
              content.getChildByName("Account").getComponent(Label).string = item.Nickname;
              content.getChildByName("Refund").getComponent(Label).string = Utils.formatNumber(item.refundValue);
              content.getChildByName("Bet").getComponent(Label).string = Utils.formatNumber(item.betValue);
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionDate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTai", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalRefundTai", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalRefundXiu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemsTai", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itemsXiu", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemTai", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemXiu", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sfDices", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sprDice1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprDice2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sprDice3", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "labelSumDices", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeTai", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiu", [_dec18], {
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

System.register("chunks:///_virtual/TaiXiuLive.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './Config.ts', './Http.ts', './App.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Color, Dialog, Configs, Http, App, Utils;
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
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "e7c25jo7VFDea3x2RuIa56p", "TaiXiuLive.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHistory = exports('PopupHistory', (_dec = menu("TaiXiuLiveJP/PopupHistory"), _dec2 = property(Node), _dec3 = property(ScrollView), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistory, _Dialog);
        function PopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll", _descriptor2, _assertThisInitialized(_this));
          _this.isGold = true;
          _this.gameID = 1;
          // 1: HK, 2: LVG, 3: MC
          _this.page = 1;
          _this.per_page = 10;
          _initializerDefineProperty(_this, "prevPage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextPage", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerPage", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listPage", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "activePage", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inactivePage", _descriptor8, _assertThisInitialized(_this));
          _this.maxPage = 0;
          _this.currentPage = 1;
          return _this;
        }
        var _proto = PopupHistory.prototype;
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
          this.scroll.content.removeAllChildren();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.page = 1;
          this.getMaxHistoryLog();
          // this.loadData();
        };

        _proto.getMaxHistoryLog = function getMaxHistoryLog() {
          var _this2 = this;
          var url = Configs.App.DOMAIN_CONFIG['GetAccountHistoryLuckyDice'];
          var params = {
            currencyID: Configs.Login.CurrencyID,
            gameID: this.gameID,
            betType: this.isGold ? 1 : 2,
            Page: this.currentPage,
            PageSize: 200
          };
          this.listPage.removeAllChildren();
          Http.get(url, params, function (_status, res) {
            if (res.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.c));
              return;
            }
            _this2.maxPage = Math.ceil(res.d.length / _this2.per_page);
            _this2.containerPage.active = _this2.maxPage !== 0;
            if (_this2.maxPage == 0) {
              return;
            }
            if (_this2.currentPage > _this2.maxPage) {
              _this2.currentPage = _this2.maxPage;
            }
            _this2.refreshPageList();
            _this2.loadData();
          });
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
          var _this3 = this;
          var isActive = this.currentPage === pageNumber;
          var pageTemplate = isActive ? this.activePage : this.inactivePage;
          var pageNode = instantiate(pageTemplate);
          pageNode.getComponentInChildren(Label).string = pageNumber.toString();
          pageNode.on(Node.EventType.TOUCH_END, function () {
            _this3.currentPage = pageNumber;
            _this3.loadData();
          });
          return pageNode;
        };
        _proto.onChangeType = function onChangeType(toggle, data) {
          var target = toggle.node;
          if (data == 1) {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#FFF000');
            target.parent.getChildByName('xu').getChildByName('text').getComponent(Label).color = new Color().fromHEX('#CDBEE4');
          } else {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#FFF000');
            target.parent.getChildByName('tipzo').getChildByName('text').getComponent(Label).color = new Color().fromHEX('#CDBEE4');
          }
          if (toggle.isChecked === false) return;
          this.isGold = !this.isGold;
          this.page = 1;
          this.scroll.content.removeAllChildren();
          this.loadData();
        };
        _proto.onChangeGameID = function onChangeGameID(toggle, data) {
          this.gameID = data;
          this.page = 1;
          this.currentPage = 1;
          this.scroll.content.removeAllChildren();
          if (toggle.isChecked === false) return;
          this.getMaxHistoryLog();
        };
        _proto.loadData = function loadData() {
          var _this4 = this;
          App.instance.showLoading(true);
          this.scroll.content.removeAllChildren();
          var params = {
            currencyID: Configs.Login.CurrencyID,
            gameID: this.gameID,
            betType: this.isGold ? 1 : 2,
            Page: this.currentPage,
            PageSize: 10
          };
          Http.get(Configs.App.DOMAIN_CONFIG['GetAccountHistoryLuckyDice'], params, function (status, res) {
            if (status === 200) {
              var data = res.d;
              for (var i = _this4.page - 1; i < data.length; i++) {
                var node = instantiate(_this4.prefab);
                var bg1 = node.getChildByName("bg1");
                var bg2 = node.getChildByName("bg2");
                if (bg1 && bg2) {
                  bg1.active = i % 2 === 0;
                  bg2.active = i % 2 !== 0;
                }
                _this4.setItemData(node.getChildByName('content'), data[i]);
                node.active = true;
                _this4.scroll.content.addChild(node);
              }
              if (_this4.currentPage == 1) {
                _this4.prevPage.active = false;
              }
              if (data.length == 0) {
                if (_this4.currentPage > 1) {
                  _this4.currentPage--;
                }
                return;
              }
              _this4.prevPage.active = _this4.currentPage > 1;
              _this4.nextPage.active = _this4.currentPage < _this4.maxPage;
              _this4.refreshPageList();
            }
            App.instance.showLoading(false);
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
          item.getChildByName("lblSession").getComponent(Label).string = "#" + data.GameSessionID;
          item.getChildByName("lblTime").getComponent(Label).string = Utils.formatDatetime(data.StartTime, 'dd/MM/yyyy HH:mm:ss');
          item.getChildByName("lblBetDoor").getComponent(Label).string = data.LocationName == 1 ? App.instance.getTextLang("tx44") : App.instance.getTextLang("tx43");
          item.getChildByName("lblResult").getComponent(Label).string = data.Result;
          item.getChildByName("lblBet").getComponent(Label).string = Utils.formatNumber(data.TotalBetValue);
          item.getChildByName("lblRefund").getComponent(Label).string = Utils.formatNumber(data.RefundValue);
          item.getChildByName("lblWin").getComponent(Label).string = Utils.formatNumber(data.PrizeValue);
        };
        return PopupHistory;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prevPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nextPage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "containerPage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listPage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "activePage", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "inactivePage", [_dec9], {
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

System.register("chunks:///_virtual/TaiXiuLive.PopupHistoryJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Http.ts', './Config.ts', './Utils.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "72353EKXEZOU5p5UbdPUXhm", "TaiXiuLive.PopupHistoryJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHistoryJackpot = exports('PopupHistoryJackpot', (_dec = menu("TaiXiuLiveJP/PopupHistoryJackpot"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
          this.lblSession.string = App.instance.getTextLang('txt_session') + "# 0";
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
          this.lblSession.string = App.instance.getTextLang('txt_session') + ("#" + session.GameSessionID);
          this.lblSessionDate.string = Utils.formatDatetime(session.FinishedTime, 'HH:mm:ss');
          this.lblTotalAccounts.string = session.TotalAccounts.toString();
          this.containerDetail.getChildByName('tx-t').active = session.LocationJackpot === 2;
          this.containerDetail.getChildByName('tx-x').active = session.LocationJackpot === 1;
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionDate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalAccounts", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "containerDetail", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalJackpotValue", [_dec8], {
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

System.register("chunks:///_virtual/TaiXiuLive.PopupHonors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './TaiXiuLiveJP.Controller.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, Dialog, TaiXiuLiveJPController, App, Configs, Http, Utils;
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
      TaiXiuLiveJPController = module.default;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "fcce6uzY2hNp6j+cxjOKL9C", "TaiXiuLive.PopupHonors", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHonors = exports('PopupHonors', (_dec = menu("TaiXiuLiveJP/PopupHonors"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
          _this.isGold = true;
          _this.gameID = 2;
          // 1: HK, 2: LVG, 3: MC
          _this.page = 1;
          _this.per_page = 10;
          return _this;
        }
        var _proto = PopupHonors.prototype;
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.gameID = TaiXiuLiveJPController.instance.getCurrentGameID();
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
          this.loadData();
        };
        _proto.onChangeBetType = function onChangeBetType(toggle) {
          this.isGold = !this.isGold;
          this.page = 1;
          if (toggle.isChecked === false) return;
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
                _this2.items.addChild(node);
              }
            }
            App.instance.showLoading(false);
          });
        };
        return PopupHonors;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_top1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item_top2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item_top3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec6], {
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

System.register("chunks:///_virtual/TaiXiuLive.SoiCauJP.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TaiXiuLiveJP.Controller.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, instantiate, v3, Sprite, v2, UITransform, Color, Component, TaiXiuLiveJPController, App, Configs, Http, Utils;
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
      Component = module.Component;
    }, function (module) {
      TaiXiuLiveJPController = module.default;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "3a766rR4tpJNqBcXuppszeT", "TaiXiuLive.SoiCauJP", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuLiveSoiCauJP = exports('TaiXiuLiveSoiCauJP', (_dec = menu("TaiXiuLiveJP/SoiCau"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuLiveSoiCauJP, _Component);
        function TaiXiuLiveSoiCauJP() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lineTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXX1Template", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXX2Template", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXX3Template", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx123TaiTemplate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx123XiuTemplate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx1Draw", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx2Draw", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx3Draw", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xx123Draw", _descriptor10, _assertThisInitialized(_this));
          // Page1
          _initializerDefineProperty(_this, "containerPage1", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconTaiPage1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconXiuPage1", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTaiPage1", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblXiuPage1", _descriptor15, _assertThisInitialized(_this));
          // Page2
          _initializerDefineProperty(_this, "containerPage2", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconPage2", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTaiPage2", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblXiuPage2", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerCenterPage2", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCenterPage2", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "container1", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "container2", _descriptor25, _assertThisInitialized(_this));
          _this.gameID = 0;
          _this.isMd5 = false;
          return _this;
        }
        var _proto = TaiXiuLiveSoiCauJP.prototype;
        _proto.start = function start() {
          var _this2 = this;
          if (TaiXiuLiveJPController.instance) {
            this.gameID = TaiXiuLiveJPController.instance.getCurrentGameID();
          } else {
            this.isMd5 = true;
            this.gameID = 123;
          }
          this.loadData();
          this.scheduleOnce(function () {
            _this2.loadData();
          }, 60);
        };
        _proto.onEnable = function onEnable() {
          if (this.gameID == 0) return;
          this.loadData();
        };
        _proto.toggleContainer = function toggleContainer(toggle) {
          if (toggle.isChecked === false) return;
          this.container1.active = !this.container1.active;
          this.container2.active = !this.container2.active;
        };
        _proto.loadData = function loadData() {
          var _this3 = this;
          App.instance.showLoading(true);
          var url = Configs.App.DOMAIN_CONFIG['GetStatisticalLuckyDice'] + ("?GameID=" + this.gameID);
          if (this.isMd5) {
            url = Configs.App.DOMAIN_CONFIG['LuckyDiceMd5GetStatistical'];
          }
          Http.post(url, {}, function (status, res) {
            if (status !== 200) {
              return;
            }
            _this3.drawG88Page1(res.d.Type1 || res.d.type1, res.d.Type1Location1 || res.d.type1Location1, res.d.Type1Location2 || res.d.type1Location2);
            _this3.drawG88Page2(res.d.Type2 || res.d.type2, res.d.Type2Location1 || res.d.type2Location1, res.d.Type2Location2 || res.d.type2Location2);
            App.instance.showLoading(false);
          });
        };
        _proto.drawG88Page1 = function drawG88Page1(Type1, Type1Location1, Type1Location2) {
          var _this4 = this;
          this.containerPage1.removeAllChildren();
          var posX = 15;
          var posY = -15;
          var spacingX = 29;
          var spacingY = -29;
          this.lblXiuPage1.string = App.instance.getTextLang('tx44') + ": " + (Type1Location1 != null ? Type1Location1 : 0);
          this.lblTaiPage1.string = App.instance.getTextLang('tx43') + ": " + (Type1Location2 != null ? Type1Location2 : 0);
          var cleanData = [];
          for (var i = 0; i < Type1.length; i++) {
            if ((Type1[i].DiceSum || Type1[i].diceSum) > 0) {
              cleanData.push(Type1[i]);
            }
          }
          this.drawG88Page3(cleanData);
          this.drawG88Page4(cleanData);
          var x = 0;
          var xTemp = 0;
          var yCounter = 0;
          var currentLocationIDWin = cleanData.length > 0 ? cleanData[0].LocationIDWin || cleanData[0].locationIDWin : null;
          cleanData.forEach(function (item) {
            var node = instantiate((item.LocationIDWin || item.locationIDWin) === 1 ? _this4.iconXiuPage1 : _this4.iconTaiPage1);
            if ((item.LocationIDWin || item.locationIDWin) !== currentLocationIDWin) {
              if (yCounter != 0) {
                x++;
              }
              xTemp = x;
              yCounter = 0;
              currentLocationIDWin = item.LocationIDWin || item.locationIDWin;
            }
            var y = (x - xTemp) % 2 === 0 ? yCounter : 5 - yCounter;
            node.setPosition(v3(posX + x * spacingX, posY + y * spacingY));
            node.getChildByName("text").getComponent(Label).string = item.DiceSum || item.diceSum;
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
          var posX = 25;
          var posY = -20;
          var spacingX = 34;
          var spacingY = -30;
          this.lblXiuPage2.string = App.instance.getTextLang('tx44') + ": " + (Type2Location1 != null ? Type2Location1 : 0);
          this.lblTaiPage2.string = App.instance.getTextLang('tx43') + ": " + (Type2Location2 != null ? Type2Location2 : 0);
          var cleanData = [];
          for (var i = 0; i < Type2.length; i++) {
            if ((Type2[i].DiceSum || Type2[i].diceSum) > 0) {
              cleanData.push(Type2[i]);
            }
          }
          var last19Items = cleanData.length > 19 ? cleanData.slice(cleanData.length - 19) : cleanData;
          this.containerCenterPage2.removeAllChildren();
          last19Items.forEach(function (item) {
            var node = instantiate(_this5.itemCenterPage2);
            if ((item.LocationIDWin || item.locationIDWin) === 1) {
              node.getComponent(Sprite).spriteFrame = _this5.sprFrameXiu;
            } else {
              node.getComponent(Sprite).spriteFrame = _this5.sprFrameTai;
            }
            _this5.containerCenterPage2.addChild(node);
          });
          cleanData = cleanData.length > 96 ? cleanData.slice(cleanData.length - 96) : cleanData;
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
            if ((item.LocationIDWin || item.locationIDWin) === 1) {
              node.getComponent(Sprite).spriteFrame = _this5.sprFrameXiu;
            } else {
              node.getComponent(Sprite).spriteFrame = _this5.sprFrameTai;
            }
            _this5.containerPage2.addChild(node);
          });
        };
        _proto.drawG88Page3 = function drawG88Page3(data) {
          var _this6 = this;
          if (data.length > 19) {
            data.splice(0, data.length - 19);
          }
          if (data.length === 0) {
            return;
          }
          var posX = 20.5;
          var posY = 19.5;
          var spacingX = 29;
          var spacingY = 29;
          this.xx123Draw.removeAllChildren();
          data.forEach(function (item, index) {
            var startPosXX123 = v2(posX + index * spacingX, posY + ((item.DiceSum || item.diceSum) - 3) * (spacingY / 3));
            var iconXX123;
            if ((item.LocationIDWin || item.locationIDWin) === 1) {
              iconXX123 = instantiate(_this6.xx123XiuTemplate);
            } else {
              iconXX123 = instantiate(_this6.xx123TaiTemplate);
            }
            iconXX123.active = true;
            iconXX123.parent = _this6.xx123Draw;
            iconXX123.setPosition(v3(startPosXX123.x, startPosXX123.y, 0));
            if (index === data.length - 1) {
              return;
            }
            var nextItem = data[index + 1];
            var endPosXX123 = v2(posX + (index + 1) * spacingX, posY + ((nextItem.DiceSum || nextItem.diceSum) - 3) * (spacingY / 3));
            var line = instantiate(_this6.lineTemplate);
            line.parent = _this6.xx123Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX123, endPosXX123);
            line.setPosition(v3(startPosXX123.x, startPosXX123.y, 0));
            line.angle = Utils.v2Degrees(startPosXX123, endPosXX123);
            line.getComponent(Sprite).color = new Color().fromHEX("#ff5400");
            line.setSiblingIndex(-50);
          });
        };
        _proto.drawG88Page4 = function drawG88Page4(data) {
          var _this7 = this;
          var posX = 20.5;
          var posY = 19.5;
          this.xx1Draw.removeAllChildren();
          this.xx2Draw.removeAllChildren();
          this.xx3Draw.removeAllChildren();

          // get 19 items last of data
          if (data.length > 19) {
            data.splice(0, data.length - 19);
          }
          if (data.length === 0) {
            return;
          }
          var spacingX = 29;
          var spacingY = 29;
          data.forEach(function (item, index) {
            var startPosXX1 = v2(posX + index * spacingX, posY + ((item.Dice1 || item.dice1) - 1) * spacingY);
            var startPosXX2 = v2(posX + index * spacingX, posY + ((item.Dice2 || item.dice2) - 1) * spacingY);
            var startPosXX3 = v2(posX + index * spacingX, posY + ((item.Dice3 || item.dice3) - 1) * spacingY);
            var iconXX1 = instantiate(_this7.iconXX1Template);
            iconXX1.parent = _this7.xx1Draw;
            iconXX1.setPosition(v3(startPosXX1.x, startPosXX1.y));
            var iconXX2 = instantiate(_this7.iconXX2Template);
            iconXX2.parent = _this7.xx2Draw;
            iconXX2.setPosition(v3(startPosXX2.x, startPosXX2.y));
            var iconXX3 = instantiate(_this7.iconXX3Template);
            iconXX3.parent = _this7.xx3Draw;
            iconXX3.setPosition(v3(startPosXX3.x, startPosXX3.y));
            if (index === data.length - 1) {
              return;
            }
            var nextItem = data[index + 1];
            var endPosXX1 = v2(posX + (index + 1) * spacingX, posY + ((nextItem.Dice1 || nextItem.dice1) - 1) * spacingY);
            var endPosXX2 = v2(posX + (index + 1) * spacingX, posY + ((nextItem.Dice2 || nextItem.dice2) - 1) * spacingY);
            var endPosXX3 = v2(posX + (index + 1) * spacingX, posY + ((nextItem.Dice3 || nextItem.dice3) - 1) * spacingY);
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
            line.getComponent(Sprite).color = new Color().fromHEX("#ff0096");
            line.setSiblingIndex(0);
            line = instantiate(_this7.lineTemplate);
            line.parent = _this7.xx3Draw;
            line.getComponent(UITransform).width = Utils.v2Distance(startPosXX3, endPosXX3);
            line.setPosition(v3(startPosXX3.x, startPosXX3.y));
            line.angle = Utils.v2Degrees(startPosXX3, endPosXX3);
            line.getComponent(Sprite).color = new Color().fromHEX("#00f0ff");
            line.setSiblingIndex(0);
          });
        };
        _proto.toggleLinePage4 = function toggleLinePage4(_event, data) {
          if (data == 1) {
            this.xx1Draw.active = !this.xx1Draw.active;
          }
          if (data == 2) {
            this.xx2Draw.active = !this.xx2Draw.active;
          }
          if (data == 3) {
            this.xx3Draw.active = !this.xx3Draw.active;
          }
          if (data == 0) {
            this.xx123Draw.active = !this.xx123Draw.active;
          }
        };
        return TaiXiuLiveSoiCauJP;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconXX1Template", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconXX2Template", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconXX3Template", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xx123TaiTemplate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xx123XiuTemplate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xx1Draw", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "xx2Draw", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xx3Draw", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "xx123Draw", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "containerPage1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "iconTaiPage1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "iconXiuPage1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lblTaiPage1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblXiuPage1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "containerPage2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "iconPage2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lblTaiPage2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "lblXiuPage2", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "containerCenterPage2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "itemCenterPage2", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "container1", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "container2", [_dec26], {
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

System.register("chunks:///_virtual/TaiXiuLiveJP.Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config.ts', './Utils.ts', './App.ts', './Http.ts', './MiniGameTX1SignalRClient.ts', './MiniGameTX3SignalRClient.ts', './ChatHubSignalRClient.ts', './MiniGameTX2SignalRClient.ts', './BroadcastListener.ts', './ButtonMiniGame.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Label, Node, Prefab, SpriteFrame, Button, WebView, EditBox, ToggleContainer, v2, Vec2, instantiate, Animation, v3, tween, UIOpacity, Tween, Component, Configs, Utils, App, Http, MiniGameTX1SignalRClient, MiniGameTX3SignalRClient, ChatHubSignalRClient, MiniGameTX2SignalRClient, BroadcastReceiver, ButtonMiniGame;
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
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      WebView = module.WebView;
      EditBox = module.EditBox;
      ToggleContainer = module.ToggleContainer;
      v2 = module.v2;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Animation = module.Animation;
      v3 = module.v3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      MiniGameTX1SignalRClient = module.default;
    }, function (module) {
      MiniGameTX3SignalRClient = module.default;
    }, function (module) {
      ChatHubSignalRClient = module.default;
    }, function (module) {
      MiniGameTX2SignalRClient = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      ButtonMiniGame = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _class3;
      cclegacy._RF.push({}, "a0273AJAfRHworQvwCmq1vR", "TaiXiuLiveJP.Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuLiveJPController = exports('default', (_dec = menu("TaiXiuLiveJP/Controller"), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Label), _dec29 = property(Label), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(Node), _dec33 = property([SpriteFrame]), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Button), _dec40 = property(Label), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(WebView), _dec49 = property(Node), _dec50 = property(WebView), _dec51 = property(EditBox), _dec52 = property(EditBox), _dec53 = property(Node), _dec54 = property(Node), _dec55 = property(ToggleContainer), _dec56 = property(Label), _dec57 = property(Node), _dec58 = property(Node), _dec59 = property(Node), _dec60 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuLiveJPController, _Component);
        function TaiXiuLiveJPController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "avatar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelBalance", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelNickname", _descriptor3, _assertThisInitialized(_this));
          // 1: Gold 2: Xu
          _this.isBetTypeGold = true;
          // Box
          _initializerDefineProperty(_this, "chatBox", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingBox", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "statisticalBox", _descriptor6, _assertThisInitialized(_this));
          // Popup Container
          _initializerDefineProperty(_this, "popupContainer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventTienTriPrefab", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventSHPrefab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventJackpotPrefab", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupEventHonorPrefab", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupDetailSessionPrefab", _descriptor14, _assertThisInitialized(_this));
          _this.popupEventTienTri = null;
          _this.popupEventSH = null;
          _this.popupEventJackpot = null;
          _this.popupHonor = null;
          _this.popupHistory = null;
          _this.popupGuide = null;
          _this.popupDetailSession = null;
          _this.currentGameIds = [1, 2, 3];
          // center, left, right
          _this.nameTX = ["HK", "LVG", "MC"];
          _initializerDefineProperty(_this, "leftContainer", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightContainer", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerLabels", _descriptor17, _assertThisInitialized(_this));
          // GAME FIELDS
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerTimer", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainTime", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainWaiting", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSumDices", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTaiCurrent", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiuCurrent", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetTai", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetXiu", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserTai", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserXiu", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dicesContainer", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listSprDice", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gateTaiWin", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeTaiWin", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gateXiuWin", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeXiuWin", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bowl", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonNan", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblToast", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyList", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItem", _descriptor41, _assertThisInitialized(_this));
          _this.detailSessions = [];
          // JACKPOT
          _initializerDefineProperty(_this, "nodeWheelSpin", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeJackPot", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackPot", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelNode", _descriptor45, _assertThisInitialized(_this));
          // LIVE
          _initializerDefineProperty(_this, "liveNode", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "webView", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "liveNodeMini", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "webViewMini", _descriptor49, _assertThisInitialized(_this));
          _this.streamURL = "";
          _this.isCoinGold = true;
          _this.lastBetAmount = 0;
          _this.isBetting = false;
          _this.isNan = false;
          _this.lastLocationIDWin = 0;
          _this.lastScore = 0;
          _this.bowlStartPos = v2(0, 25);
          _initializerDefineProperty(_this, "editBoxBetTai", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBoxBetXiu", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "confirmBetButton", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancelBetButton", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipToggleContainer", _descriptor54, _assertThisInitialized(_this));
          _this.gameID = void 0;
          _this.hub = null;
          _this.betTypeLocation = 0;
          _this.selectedChipValue = 0;
          _initializerDefineProperty(_this, "labelJackpotBalance", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextTaiNode", _descriptor56, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextXiuNode", _descriptor57, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBetChip", _descriptor58, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBetNumber", _descriptor59, _assertThisInitialized(_this));
          _this.countdownRemainTime = null;
          _this.countdownWaitingTime = null;
          _this.isOpenBowl = false;
          _this.isShowWheel = false;
          _this.jackpotInfo = null;
          _this.STREAM_TEMPLATE = "https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=STREAM_ID&group.security.jwtoken=JWT_TOKEN";
          _this.currentStreamID = -1;
          return _this;
        }
        var _proto = TaiXiuLiveJPController.prototype;
        _proto.onEnable = function onEnable() {
          TaiXiuLiveJPController.instance = this;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.settingBox.active = false;
          this.statisticalBox.active = false;
          this.chatBox.active = false;
          this.labelNickname.string = Configs.Login.Nickname;
          this.labelBalance.string = Utils.formatNumber(Configs.Login.GoldBalance);
          this.avatar.spriteFrame = App.instance.getAvatarSpriteFrame(Configs.Login.Avatar);
          this.gameID = this.getCurrentGameID();
          this.changeServer();
          this.bowl.on(Node.EventType.TOUCH_MOVE, function (event) {
            var pos = _this2.bowl.getPosition();
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this2.bowl.position = pos;
            var distance = Utils.v2Distance(new Vec2(pos.x, pos.y), _this2.bowlStartPos);
            if (Math.abs(distance) > 200) {
              _this2.showResult();
              _this2.isOpenBowl = true;
              _this2.scheduleOnce(function () {
                _this2.bowl.active = false;
              }, 2);
            }
          }, this);
          this.bowl.active = false;
        };
        _proto.getStreamURL = function getStreamURL() {
          var _this3 = this;
          Http.get('https://gameapi-alpha.bavenoth.com/api/v1/global/livestreaminfo', {
            gameId: 117
          }, function (status, res) {
            if (res.c < 0 || status !== 200) {
              return;
            }
            var streamObj = res.d.find(function (item) {
              return item.gameID === 117 && item.roomID === _this3.getCurrentGameID();
            });
            if (streamObj && streamObj.streamID && streamObj.tokenPlayBack) {
              if (_this3.currentStreamID !== streamObj.streamID) {
                _this3.currentStreamID = streamObj.streamID;
                _this3.streamURL = _this3.STREAM_TEMPLATE.replace("STREAM_ID", streamObj.streamID).replace("JWT_TOKEN", streamObj.tokenPlayBack);
              }
            } else {
              _this3.streamURL = "";
            }
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
        _proto.onDestroy = function onDestroy() {
          MiniGameTX1SignalRClient.getInstance().dontReceive();
          MiniGameTX2SignalRClient.getInstance().dontReceive();
          MiniGameTX3SignalRClient.getInstance().dontReceive();
          ChatHubSignalRClient.getInstance().dontReceive();
          App.instance.tipzoMiniLiveNode.removeAllChildren();
          Utils.setStorageValue("last_open_game_id", "");
        };
        _proto.leaveRoom = function leaveRoom() {
          TaiXiuLiveJPController.instance = null;
          this.node.destroy();
        };
        _proto.getCurrentGameID = function getCurrentGameID() {
          return this.currentGameIds[0];
        };
        _proto.changeServer = function changeServer() {
          if (this.hub) {
            this.hub.send("HideLD", [{
              GameID: this.gameID
            }], function () {});
          }
          this.resetForNew();
          this.unscheduleAllCallbacks();
          this.getStreamURL();
          this.gameID = this.getCurrentGameID();
          if (this.gameID == 1) {
            this.hub = MiniGameTX1SignalRClient.getInstance();
          } else if (this.gameID == 2) {
            this.hub = MiniGameTX2SignalRClient.getInstance();
          } else if (this.gameID == 3) {
            this.hub = MiniGameTX3SignalRClient.getInstance();
          }
          this.hub.send("GetCurrentRoomsLD", [{
            GameID: this.gameID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
          this.initHubs();
        };
        _proto.onClickLeft = function onClickLeft() {
          var _this4 = this;
          this.currentGameIds = [this.currentGameIds[1], this.currentGameIds[0], this.currentGameIds[2]];
          var leftGameID = this.currentGameIds[1];
          var centerGameID = this.currentGameIds[0];
          this.nameTX.forEach(function (name, index) {
            _this4.leftContainer.getChildByName(name).active = index === leftGameID - 1;
            _this4.centerLabels.getChildByName(name).active = index === centerGameID - 1;
          });
          this.changeServer();
        };
        _proto.onClickRight = function onClickRight() {
          var _this5 = this;
          this.currentGameIds = [this.currentGameIds[2], this.currentGameIds[1], this.currentGameIds[0]];
          var rightGameID = this.currentGameIds[2];
          var centerGameID = this.currentGameIds[0];
          this.nameTX.forEach(function (name, index) {
            _this5.rightContainer.getChildByName(name).active = index === rightGameID - 1;
            _this5.centerLabels.getChildByName(name).active = index === centerGameID - 1;
          });
          this.changeServer();
        };
        _proto.getLuckyDiceJackPot = function getLuckyDiceJackPot() {
          var _this6 = this;
          this.labelJackpotBalance.string = "0";
          Http.get(Configs.App.DOMAIN_CONFIG['LuckyDiceJackPot'], {
            gameID: this.gameID
          }, function (status, res) {
            if (res.c < 0) {
              return;
            }
            _this6.labelJackpotBalance.string = Utils.formatNumber(res.d);
          });
        };
        _proto.initHubs = function initHubs() {
          var _this7 = this;
          this.getLuckyDiceJackPot();
          this.hub.receive("currentSessionLD", function (res) {
            if (res.GameID !== _this7.gameID) return;
            _this7.lblSession.string = "#" + res.GameSessionID;
            _this7.unschedule(_this7.countdownRemainTime);
            _this7.unschedule(_this7.countdownWaitingTime);
            _this7.confirmBetButton.active = false;
            _this7.cancelBetButton.active = false;
            if (res.GameStatus === 1) {
              _this7.getStreamURL();
              _this7.handleBettingPhase(res.RemainBetting);
            } else {
              _this7.handleWaitingPhase(res.RemainWaiting);
              _this7.hub.send("GetAccountResultLD", [{
                GameID: _this7.gameID,
                CurrencyID: Configs.Login.CurrencyID,
                GameSessionID: res.GameSessionID
              }], function () {});
            }
          });
          this.hub.receive("currentResultLD", function (res) {
            if (res.GameID != _this7.gameID) {
              return;
            }
            _this7.confirmBetButton.active = false;
            _this7.cancelBetButton.active = false;
            _this7.editBoxBetTai.enabled = false;
            _this7.editBoxBetXiu.enabled = false;
            _this7.buttonNan.enabled = false;
            var aminResult = _this7.dicesContainer.getChildByName('anim');
            var resultNode = _this7.dicesContainer.getChildByName('result');
            resultNode.active = false;
            aminResult.active = true;
            var dice_1 = resultNode.getChildByName('dice_1');
            var dice_2 = resultNode.getChildByName('dice_2');
            var dice_3 = resultNode.getChildByName('dice_3');
            dice_1.getComponent(Sprite).spriteFrame = _this7.listSprDice[res.Dice1 - 1];
            dice_2.getComponent(Sprite).spriteFrame = _this7.listSprDice[res.Dice2 - 1];
            dice_3.getComponent(Sprite).spriteFrame = _this7.listSprDice[res.Dice3 - 1];
            _this7.isShowWheel = res.Dice1 == 1 && res.Dice2 == 1 && res.Dice3 == 1 || res.Dice1 == 6 && res.Dice2 == 6 && res.Dice3 == 6;
            _this7.jackpotInfo = res.JackPotInfo || null;
            _this7.dicesContainer.active = true;
            // const anim = aminResult.getComponent(Animation);
            // anim.play();
            var anim1 = aminResult.getChildByName('animDice1').getComponent(Animation);
            var anim2 = aminResult.getChildByName('animDice2').getComponent(Animation);
            var anim3 = aminResult.getChildByName('animDice3').getComponent(Animation);
            anim1.play();
            anim2.play();
            anim3.play();
            _this7.scheduleOnce(function () {
              anim1.stop();
              anim2.stop();
              anim3.stop();
              aminResult.active = false;
              _this7.lastLocationIDWin = res.LocationIDWin;
              _this7.lastScore = res.Dice1 + res.Dice2 + res.Dice3;
              if (_this7.isNan) {
                _this7.bowl.setPosition(v3(_this7.bowlStartPos.x, _this7.bowlStartPos.y, 0));
                _this7.bowl.active = true;
                _this7.scheduleOnce(function () {
                  if (_this7.isOpenBowl) {
                    return;
                  }
                  _this7.isOpenBowl = true;
                  tween(_this7.bowl).to(0.5, {
                    position: v3(250, 150, 0)
                  }).call(function () {
                    _this7.showResult();
                    _this7.scheduleOnce(function () {
                      _this7.bowl.active = false;
                    }, 2);
                  }).start();
                }, 12);
              } else {
                _this7.showResult();
              }
              resultNode.active = true;
            }, 3);
          });
          this.hub.receive("currentRoomsInfoLD", function (res) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(res), _step4; !(_step4 = _iterator4()).done;) {
              var room = _step4.value;
              if (room == null) continue;
              if (room.GameID !== _this7.gameID) continue;
              var isGoldRoom = room.BetType === 1;
              var isXuRoom = room.BetType === 2;
              if (_this7.isCoinGold && isXuRoom || !_this7.isCoinGold && isGoldRoom) {
                continue;
              }
              _this7.lblUserXiu.string = "(" + Utils.formatNumber(room.TotalAccount1) + ")";
              _this7.lblUserTai.string = "(" + Utils.formatNumber(room.TotalAccount2) + ")";
              _this7.lblTotalBetXiuCurrent.string = Utils.formatNumber(room.TotalBetValue1);
              _this7.lblTotalBetTaiCurrent.string = Utils.formatNumber(room.TotalBetValue2);
            }
          });
          this.hub.receive("gameHistoryLD", function (res) {
            if (res == null || res.length == 0) {
              return;
            }
            _this7.detailSessions = [];
            _this7.historyList.removeAllChildren();
            var _loop = function _loop(i) {
              _this7.detailSessions.push(res[i]);
              var item = instantiate(_this7.historyItem);
              item.getComponent(Sprite).spriteFrame = res[i].LocationIDWin == 1 ? _this7.sprFrameXiu : _this7.sprFrameTai;
              item.getChildByName("last").active = i === 0;
              item.on(Node.EventType.TOUCH_END, function () {
                _this7.actPopupDetailSession(res[i].GameSessionID);
              });
              if (i === 0) {
                Tween.stopAllByTarget(item);
                _this7.scheduleOnce(function () {
                  var posUp = v3(item.position.x, 5, item.position.z);
                  var posDown = v3(item.position.x, -5, item.position.z);
                  tween(item).repeatForever(tween().to(0.3, {
                    position: posUp
                  }).to(0.3, {
                    position: posDown
                  })).start();
                }, 0);
              }
              _this7.historyList.addChild(item);
            };
            for (var i = res.length - 1; i >= 0; i--) {
              _loop(i);
            }
          });
          this.hub.receive("betOfAccountLD", function (res) {
            res.forEach(function (item) {
              if (item.GameID != _this7.gameID) {
                return;
              }
              _this7.editBoxBetTai.string = '';
              _this7.editBoxBetXiu.string = '';
              if (item.BetType == 1) {
                var betLocation = item.LocationID == 1 ? _this7.lblBetXiu : _this7.lblBetTai;
                betLocation.string = Utils.formatNumber(item.BetValue);
              }
            });
          });
          this.hub.receive("resultOfAccountLD", function (res) {
            if (_this7.betTypeLocation === 0) return;
            var totalPrize = 0;
            res.forEach(function (item) {
              if (item.GameID === _this7.gameID && item.PrizeValue > 0) {
                totalPrize += item.PrizeValue;
              }
            });
            var winTextNode = _this7.betTypeLocation === 1 ? _this7.winTextXiuNode : _this7.winTextTaiNode;
            if (totalPrize <= 0) {
              winTextNode.active = false;
              return;
            }
            winTextNode.active = true;
            winTextNode.getComponentInChildren(Label).string = '+ ' + Utils.formatNumber(totalPrize);
            winTextNode.position = v3(winTextNode.x, -60);
            tween(winTextNode).to(3, {
              position: v3(winTextNode.x, 60)
            }).call(function () {
              winTextNode.active = false;
            }).start();
            _this7.updateBalanceTaiXiu();
          });
        };
        _proto.resetForNew = function resetForNew() {
          this.getLuckyDiceJackPot();
          this.dicesContainer.active = false;
          this.isOpenBowl = false;
          this.lblBetTai.string = "0";
          this.lblBetXiu.string = "0";
          this.betTypeLocation = 0;
          this.lastScore = 0;
          this.lblSumDices.string = "";
          this.lblRemainTime.string = "";
          this.confirmBetButton.active = false;
          this.cancelBetButton.active = false;
          this.bowl.active = false;
          this.clearChipToggle();
          this.hideResult();
          this.actCancelBet();
        };
        _proto.handleBettingPhase = function handleBettingPhase(remainTime) {
          var _this8 = this;
          this.containerTimer.active = true;
          if (remainTime === 60) {
            this.showToast(App.instance.getTextLang("txt_taixiu_new_session"));
            this.resetForNew();
          }
          if (remainTime < 3) {
            this.isBetting = false;
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
            try {
              if (secondsLeft < 0) {
                _this8.unschedule(_this8.countdownRemainTime);
                return;
              }
              if (secondsLeft <= 5) {
                _this8.isBetting = false;
              }
              _this8.lblRemainTime.string = secondsLeft < 10 ? "0" + secondsLeft : "" + secondsLeft;
              secondsLeft--;
            } catch (e) {
              _this8.unschedule(_this8.countdownRemainTime);
            }
          }, 1);
        };
        _proto.handleWaitingPhase = function handleWaitingPhase(waitingTime) {
          var _this9 = this;
          if (waitingTime > 0) this.isBetting = false;
          if (waitingTime < 19) {
            this.hub.send("GetCurrentResultLD", [{
              GameID: this.gameID
            }], function () {});
          }
          this.containerTimer.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          var secondsLeft = waitingTime;
          this.unschedule(this.countdownWaitingTime);
          this.schedule(this.countdownWaitingTime = function () {
            try {
              if (secondsLeft < 0) {
                _this9.unschedule(_this9.countdownWaitingTime);
                return;
              }
              if (_this9.isNan && _this9.isOpenBowl === false && secondsLeft > 15) {
                var secondsLeftOpenBowl = secondsLeft - 15;
                _this9.lblRemainWaiting.string = "" + (secondsLeftOpenBowl < 10 ? "0" + secondsLeftOpenBowl : secondsLeftOpenBowl);
                _this9.lblRemainWaiting.node.active = true;
                _this9.lblRemainWaiting.node.parent.active = true;
                _this9.lblSumDices.node.active = false;
              } else {
                _this9.lblSumDices.node.active = secondsLeft > 12;
                _this9.lblRemainWaiting.node.active = secondsLeft <= 12;
                _this9.lblRemainWaiting.string = "" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
              }
              secondsLeft--;
            } catch (e) {
              _this9.unschedule(_this9.countdownWaitingTime);
            }
          }, 1);
        };
        _proto.actBet = function actBet() {
          var _this10 = this;
          if (!this.isBetting) {
            this.showToast(App.instance.getTextLang("me-207"));
            this.actCancelBet();
            return;
          }
          if (this.betTypeLocation == 0) {
            return;
          }
          var betValue = this.betTypeLocation == 1 ? this.editBoxBetXiu.string : this.editBoxBetTai.string;
          if (parseInt(betValue) <= 0) {
            this.showToast(App.instance.getTextLang("txt_taixiu_enter_bet_value")); //@TODO
            return;
          }
          this.hub.send("SetBetLD", [{
            GameID: this.gameID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isCoinGold ? 1 : 2,
            Location: this.betTypeLocation,
            Amount: parseInt(betValue)
          }], function (res) {
            if (res < 0) {
              _this10.showToast(App.instance.getTextLang("me" + res));
              _this10.actCancelBet();
              return;
            }
            _this10.showToast(App.instance.getTextLang("tx3_live").replace('{0}', _this10.betTypeLocation === 1 ? App.instance.getTextLang("tx44") : App.instance.getTextLang("tx43")));
            _this10.lastBetAmount = parseInt(betValue);
            _this10.editBoxBetTai.string = "";
            _this10.editBoxBetXiu.string = "";
            _this10.gateXiuWin.active = false;
            _this10.gateTaiWin.active = false;
            _this10.clearChipToggle();
            _this10.updateBalanceTaiXiu();
          });
        };
        _proto.x2Bet = function x2Bet() {
          var lastBetAmount = this.lastBetAmount;
          var currentBetAmountXiu = parseInt(this.editBoxBetXiu.string) || 0;
          var currentBetAmountTai = parseInt(this.editBoxBetTai.string) || 0;
          if (!this.isBetting || lastBetAmount == 0 && currentBetAmountTai == 0 && currentBetAmountXiu == 0) return;
          if (this.betTypeLocation == 1) {
            if (currentBetAmountXiu > 0) {
              this.editBoxBetXiu.string = (currentBetAmountXiu * 2).toString();
            } else {
              this.editBoxBetXiu.string = (lastBetAmount * 2).toString();
            }
          } else if (this.betTypeLocation == 2) {
            if (currentBetAmountTai > 0) {
              this.editBoxBetTai.string = (currentBetAmountTai * 2).toString();
            } else {
              this.editBoxBetTai.string = (lastBetAmount * 2).toString();
            }
          }
          this.confirmBetButton.active = true;
          this.cancelBetButton.active = true;
        };
        _proto.updateBalanceTaiXiu = function updateBalanceTaiXiu() {
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          this.labelBalance.string = Utils.formatNumber(Configs.Login.GoldBalance);
        };
        _proto.updateCurrentBetType = function updateCurrentBetType(_event, type) {
          if (!this.isBetting) return;
          this.betTypeLocation = parseInt(type);
          this.gateXiuWin.active = type == "1";
          this.gateTaiWin.active = type == "2";
          this.confirmBetButton.active = true;
          this.cancelBetButton.active = true;
        };
        _proto.selectedChip = function selectedChip(_event, value) {
          if (!this.isBetting) return;
          if (this.betTypeLocation == 0) {
            this.clearChipToggle();
            return; //@TODO
          } else if (this.betTypeLocation == 1) {
            this.editBoxBetXiu.string = value.toString();
          } else if (this.betTypeLocation == 2) {
            this.editBoxBetTai.string = value.toString();
          }
        };
        _proto.clearChipToggle = function clearChipToggle() {
          for (var i = 0; i < this.chipToggleContainer.toggleItems.length; i++) {
            this.chipToggleContainer.toggleItems[i].isChecked = false;
          }
        };
        _proto.actConfirmBet = function actConfirmBet() {
          this.actBet();
          this.confirmBetButton.active = false;
          this.cancelBetButton.active = false;
        };
        _proto.actCancelBet = function actCancelBet() {
          this.editBoxBetTai.string = "";
          this.editBoxBetXiu.string = "";
        };
        _proto.showResult = function showResult() {
          var _this11 = this;
          var nodeResult;
          this.hideResult();
          if (this.lastLocationIDWin === 1) {
            nodeResult = this.nodeXiuWin;
            this.gateXiuWin.active = true;
            this.gateTaiWin.active = false;
            this.nodeTaiWin.active = false;
          } else if (this.lastLocationIDWin === 2) {
            nodeResult = this.nodeTaiWin;
            this.gateTaiWin.active = true;
            this.gateXiuWin.active = false;
            this.nodeXiuWin.active = false;
          } else {
            return;
          }
          nodeResult.active = true;
          var nodeResultOpacity = nodeResult.getComponent(UIOpacity);
          tween(nodeResultOpacity).repeatForever(tween().to(0.2, {
            opacity: 100
          }).to(0.2, {
            opacity: 255
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
        _proto.hideResult = function hideResult() {
          Tween.stopAllByTarget(this.nodeTaiWin);
          Tween.stopAllByTarget(this.nodeXiuWin);
          Tween.stopAllByTarget(this.wheelNode);
          this.nodeTaiWin.active = false;
          this.nodeXiuWin.active = false;
          this.gateTaiWin.active = false;
          this.gateXiuWin.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          this.nodeJackPot.active = false;
          this.nodeWheelSpin.active = false;
        };
        _proto.handleJackpotFund = function handleJackpotFund(locationID) {
          var _this12 = this;
          var baseAngle = 0;
          if (locationID === 1) {
            baseAngle = 120;
          } else if (locationID === 2) {
            baseAngle = 240;
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
        _proto.toggleLayoutBet = function toggleLayoutBet(event) {
          var target = event.target;
          var textOther = target.getChildByName('text');
          var betFast = target.getChildByName('betFast');
          this.layoutBetChip.active = !this.layoutBetChip.active;
          this.layoutBetNumber.active = !this.layoutBetNumber.active;
          betFast.active = !this.layoutBetChip.active;
          textOther.active = !this.layoutBetNumber.active;
        };
        _proto.updateBetAmountCustom = function updateBetAmountCustom(_event, amount) {
          if (this.betTypeLocation == 1) {
            this.editBoxBetXiu.string += amount;
          } else if (this.betTypeLocation == 2) {
            this.editBoxBetTai.string += amount;
          }
        };
        _proto.deleteBetAmount = function deleteBetAmount() {
          if (this.betTypeLocation == 1) {
            this.editBoxBetXiu.string = this.editBoxBetXiu.string.slice(0, -1);
          } else if (this.betTypeLocation == 2) {
            this.editBoxBetTai.string = this.editBoxBetTai.string.slice(0, -1);
          }
        };
        _proto.toggleNan = function toggleNan(event) {
          var target = event.target;
          var on = target.getChildByName('on');
          var off = target.getChildByName('off');
          on.active = !on.active;
          off.active = !off.active;
          this.isNan = !this.isNan;
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
        _proto.actPopupEventTienTri = function actPopupEventTienTri() {
          var gameID = this.getCurrentGameID();
          if (this.popupEventTienTri == null) {
            this.popupEventTienTri = instantiate(this.popupEventTienTriPrefab).getComponent("TaiXiuLive.EventTienTri");
            this.popupEventTienTri.node.parent = this.popupContainer;
            this.popupEventTienTri.showDetail(gameID);
            App.instance.showLoading(false);
          } else {
            this.popupEventTienTri.showDetail(gameID);
          }
        };
        _proto.actPopupDetailSession = function actPopupDetailSession(session) {
          if (this.popupDetailSession == null) {
            this.popupDetailSession = instantiate(this.popupDetailSessionPrefab).getComponent("TaiXiuLive.PopupDetailSession");
            this.popupDetailSession.node.parent = this.popupContainer;
            this.popupDetailSession.showDetail(session, this.getCurrentGameID(), this.detailSessions);
            App.instance.showLoading(false);
          } else {
            this.popupDetailSession.showDetail(session, this.getCurrentGameID(), this.detailSessions);
          }
        };
        _proto.actPopupEventSH = function actPopupEventSH() {
          var gameID = this.getCurrentGameID();
          if (this.popupEventSH == null) {
            this.popupEventSH = instantiate(this.popupEventSHPrefab).getComponent("TaiXiuLive.EventSH");
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
            this.popupEventJackpot = instantiate(this.popupEventJackpotPrefab).getComponent("TaiXiuLive.PopupHistoryJackpot");
            this.popupEventJackpot.node.parent = this.popupContainer;
            this.popupEventJackpot.showDetail(gameID);
            App.instance.showLoading(false);
          } else {
            this.popupEventJackpot.showDetail(gameID);
          }
        };
        _proto.actPopupHonor = function actPopupHonor() {
          if (this.popupHonor == null) {
            this.popupHonor = instantiate(this.popupEventHonorPrefab).getComponent("TaiXiuLive.PopupHonors");
            this.popupHonor.node.parent = this.popupContainer;
            this.popupHonor.show();
            App.instance.showLoading(false);
          } else {
            this.popupHonor.show();
          }
        };
        _proto.actPopupHistory = function actPopupHistory() {
          if (this.popupHistory == null) {
            this.popupHistory = instantiate(this.popupHistoryPrefab).getComponent("TaiXiuLive.PopupHistory");
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.show();
          } else {
            this.popupHistory.show();
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
        return TaiXiuLiveJPController;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelBalance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelNickname", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "settingBox", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "statisticalBox", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "popupEventTienTriPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "popupEventSHPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "popupEventJackpotPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "popupEventHonorPrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "popupDetailSessionPrefab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "leftContainer", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "rightContainer", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "centerLabels", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "containerTimer", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainTime", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainWaiting", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "lblSumDices", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTaiCurrent", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiuCurrent", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "lblBetTai", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "lblBetXiu", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "lblUserTai", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "lblUserXiu", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "dicesContainer", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "listSprDice", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "gateTaiWin", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "nodeTaiWin", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "gateXiuWin", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiuWin", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "bowl", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "buttonNan", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "historyList", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "historyItem", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "nodeWheelSpin", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "nodeJackPot", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "lblJackPot", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "wheelNode", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "liveNode", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "webView", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "liveNodeMini", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "webViewMini", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetTai", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetXiu", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "confirmBetButton", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "cancelBetButton", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "chipToggleContainer", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "labelJackpotBalance", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "winTextTaiNode", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "winTextXiuNode", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "layoutBetChip", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "layoutBetNumber", [_dec60], {
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

System.register("chunks:///_virtual/TaiXiuLiveMD5.Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config.ts', './Utils.ts', './App.ts', './Http.ts', './MiniGameTXMD5SignalRClient.ts', './BroadcastListener.ts', './ButtonMiniGame.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Label, Node, SpriteFrame, EditBox, ToggleContainer, Button, Prefab, WebView, v2, Vec2, instantiate, Animation, v3, tween, UIOpacity, Tween, Component, Configs, Utils, App, Http, MiniGameTXMD5SignalRClient, BroadcastReceiver, ButtonMiniGame;
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
      SpriteFrame = module.SpriteFrame;
      EditBox = module.EditBox;
      ToggleContainer = module.ToggleContainer;
      Button = module.Button;
      Prefab = module.Prefab;
      WebView = module.WebView;
      v2 = module.v2;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Animation = module.Animation;
      v3 = module.v3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Http = module.default;
    }, function (module) {
      MiniGameTXMD5SignalRClient = module.default;
    }, function (module) {
      BroadcastReceiver = module.BroadcastReceiver;
    }, function (module) {
      ButtonMiniGame = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _class3;
      cclegacy._RF.push({}, "fbcd8EnQ5hEcokWhRXzxmtp", "TaiXiuLiveMD5.Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var TaiXiuLiveMD5Controller = exports('default', (_dec = menu("TaiXiuLiveMD5/Controller"), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(EditBox), _dec27 = property(EditBox), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(ToggleContainer), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Label), _dec34 = property(Node), _dec35 = property([SpriteFrame]), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Button), _dec42 = property(Label), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Prefab), _dec50 = property(Prefab), _dec51 = property(Prefab), _dec52 = property(Prefab), _dec53 = property(Node), _dec54 = property(WebView), _dec55 = property(Node), _dec56 = property(WebView), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaiXiuLiveMD5Controller, _Component);
        function TaiXiuLiveMD5Controller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.GAME_ID = 123;
          _initializerDefineProperty(_this, "avatar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelBalance", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelNickname", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftContainer", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightContainer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerLabels", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "JackpotNode", _descriptor7, _assertThisInitialized(_this));
          // will hide for MD5
          _initializerDefineProperty(_this, "MD5ContainerNode", _descriptor8, _assertThisInitialized(_this));
          // will show for MD5
          _initializerDefineProperty(_this, "EventButtonLiveJP", _descriptor9, _assertThisInitialized(_this));
          // will hide for MD5
          _initializerDefineProperty(_this, "sprFrameTai", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFrameXiu", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerTimer", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSession", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainTime", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRemainWaiting", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblSumDices", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetTaiCurrent", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblTotalBetXiuCurrent", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetTai", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBetXiu", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserTai", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserXiu", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextTaiNode", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winTextXiuNode", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBoxBetTai", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBoxBetXiu", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "confirmBetButton", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancelBetButton", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipToggleContainer", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBetChip", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBetNumber", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelTextMD5", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dicesContainer", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listSprDice", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gateTaiWin", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeTaiWin", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gateXiuWin", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeXiuWin", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bowl", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonNan", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblToast", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyList", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItem", _descriptor43, _assertThisInitialized(_this));
          // Box
          _initializerDefineProperty(_this, "chatBox", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingBox", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "statisticalBox", _descriptor46, _assertThisInitialized(_this));
          // Popup Container
          _initializerDefineProperty(_this, "popupContainer", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupDetailSessionPrefab", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHonorsPrefab", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor51, _assertThisInitialized(_this));
          // LIVE
          _initializerDefineProperty(_this, "liveNode", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "webView", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "liveNodeMini", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "webViewMini", _descriptor55, _assertThisInitialized(_this));
          _this.streamURL = "";
          _this.currentStreamID = -1;
          _this.popupDetailSession = null;
          _this.popupHistory = null;
          _this.popupHonors = null;
          _this.popupGuide = null;
          _this.countdownRemainTime = null;
          _this.countdownWaitingTime = null;
          _this.isBetting = false;
          _this.betTypeLocation = 0;
          _this.resetLabels = [];
          _this.lastLocationIDWin = 0;
          _this.bowlStartPos = v2(0, 25);
          _this.isOpenBowl = false;
          _this.lastScore = 0;
          _this.isNan = false;
          _this.plainTextMD5 = "";
          _this.detailSessions = [];
          _this.isBowlMovable = false;
          _this.isBetTypeGold = true;
          // ALWAYS true for LIVE
          _this.lastBetAmount = 0;
          _this.STREAM_TEMPLATE = "https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=STREAM_ID&group.security.jwtoken=JWT_TOKEN";
          return _this;
        }
        var _proto = TaiXiuLiveMD5Controller.prototype;
        _proto.onLoad = function onLoad() {
          this.resetLabels = [this.lblTotalBetTaiCurrent, this.lblTotalBetXiuCurrent];
          this.lblToast.node.parent.active = false;
          this.bowl.active = true;
          this.labelTextMD5.string = "";
          this.dicesContainer.getChildByName('result').active = false;
          this.leftContainer.active = false;
          this.rightContainer.active = false;
          this.centerLabels.active = false;
          this.JackpotNode.active = false;
          this.EventButtonLiveJP.active = false;
          this.MD5ContainerNode.active = true;
        };
        _proto.onEnable = function onEnable() {
          TaiXiuLiveMD5Controller.instance = this;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.bowl.on(Node.EventType.TOUCH_MOVE, function (event) {
            if (_this2.isBowlMovable === false) {
              return;
            }
            var pos = _this2.bowl.getPosition();
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this2.bowl.position = pos;
            var distance = Utils.v2Distance(new Vec2(pos.x, pos.y), _this2.bowlStartPos);
            if (Math.abs(distance) > 200) {
              _this2.showResult();
              _this2.isOpenBowl = true;
              _this2.scheduleOnce(function () {
                _this2.bowl.active = false;
              }, 2);
            }
          }, this);
          this.getStreamURL();
          this.settingBox.active = false;
          this.statisticalBox.active = false;
          this.chatBox.active = false;
          this.labelNickname.string = Configs.Login.Nickname;
          this.labelBalance.string = Utils.formatNumber(Configs.Login.GoldBalance);
          this.avatar.spriteFrame = App.instance.getAvatarSpriteFrame(Configs.Login.Avatar);
          MiniGameTXMD5SignalRClient.getInstance().send("GetCurrentRoomsMD5", [{
            GameID: this.GAME_ID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: this.isBetTypeGold ? 1 : 2
          }], function (_response) {});
          this.initHubs();
        };
        _proto.getStreamURL = function getStreamURL() {
          var _this3 = this;
          Http.get('https://gameapi-alpha.bavenoth.com/api/v1/global/livestreaminfo', {
            gameId: 123
          }, function (status, res) {
            if (res.c < 0 || status !== 200) {
              return;
            }
            var streamObj = res.d.find(function (item) {
              return item.gameID === _this3.GAME_ID;
            });
            if (streamObj && streamObj.streamID && streamObj.tokenPlayBack) {
              if (_this3.currentStreamID !== streamObj.streamID) {
                _this3.currentStreamID = streamObj.streamID;
                _this3.streamURL = _this3.STREAM_TEMPLATE.replace("STREAM_ID", streamObj.streamID).replace("JWT_TOKEN", streamObj.tokenPlayBack);
              }
            } else {
              _this3.streamURL = "";
            }
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
        _proto.leaveRoom = function leaveRoom() {
          TaiXiuLiveMD5Controller.instance = null;
          this.node.destroy();
        };
        _proto.onDestroy = function onDestroy() {
          MiniGameTXMD5SignalRClient.getInstance().send("HideDiceMD5", [], function (_response) {});
          MiniGameTXMD5SignalRClient.getInstance().dontReceive();
          App.instance.tipzoMiniLiveNode.removeAllChildren();
          Utils.setStorageValue("last_open_game_id", "");
        };
        _proto.handleDicesAnimationBetting = function handleDicesAnimationBetting() {
          var _this4 = this;
          this.lblRemainTime.node.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          this.bowl.active = false;
          var animNode = this.dicesContainer.getChildByName('anim');
          animNode.active = true;
          this.dicesContainer.getChildByName('result').active = false;
          var anim1 = animNode.getChildByName('animDice1').getComponent(Animation);
          var anim2 = animNode.getChildByName('animDice2').getComponent(Animation);
          var anim3 = animNode.getChildByName('animDice3').getComponent(Animation);
          anim1.play();
          anim2.play();
          anim3.play();
          this.scheduleOnce(function () {
            anim1.stop();
            anim2.stop();
            anim3.stop();
            animNode.active = false;
            _this4.bowl.active = true;
            _this4.bowl.setPosition(v3(_this4.bowlStartPos.x, _this4.bowlStartPos.y, 0));
            _this4.isBowlMovable = false;
            _this4.lblRemainTime.node.active = true;
          }, 3);
        };
        _proto.handleOpenBowl = function handleOpenBowl() {
          var _this5 = this;
          this.isOpenBowl = true;
          tween(this.bowl).to(0.5, {
            position: v3(250, 150, 0)
          }).call(function () {
            _this5.showResult();
            _this5.scheduleOnce(function () {
              _this5.bowl.active = false;
            }, 2);
          }).start();
        };
        _proto.initHubs = function initHubs() {
          var _this6 = this;
          MiniGameTXMD5SignalRClient.getInstance().receive("currentSessionMD5", function (res) {
            _this6.lblSession.string = "#" + res.GameSessionID;
            _this6.unschedule(_this6.countdownRemainTime);
            _this6.unschedule(_this6.countdownWaitingTime);
            _this6.confirmBetButton.active = false;
            _this6.cancelBetButton.active = false;
            if (res.GameStatus === 1) {
              _this6.getStreamURL();
              _this6.handleDicesAnimationBetting();
              _this6.labelTextMD5.string = res.MD5;
              _this6.handleBettingPhase(res.RemainBetting);
            } else {
              var remainWaiting = res.RemainWaiting;
              _this6.handleWaitingPhase(remainWaiting);
              if (remainWaiting > 15) {
                _this6.scheduleOnce(function () {
                  MiniGameTXMD5SignalRClient.getInstance().send("GetAccountResultMD5", [{
                    GameID: _this6.GAME_ID,
                    CurrencyID: Configs.Login.CurrencyID,
                    GameSessionID: res.GameSessionID
                  }], function () {});
                }, remainWaiting - 15);
              }
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("currentResultMD5", function (res) {
            _this6.isBowlMovable = true;
            _this6.plainTextMD5 = res.PlainText;
            _this6.editBoxBetTai.enabled = false;
            _this6.editBoxBetXiu.enabled = false;
            _this6.buttonNan.enabled = false;
            _this6.lblRemainWaiting.node.parent.active = false;
            var resultNode = _this6.dicesContainer.getChildByName('result');
            resultNode.active = true;
            var dice_1 = resultNode.getChildByName('dice_1');
            var dice_2 = resultNode.getChildByName('dice_2');
            var dice_3 = resultNode.getChildByName('dice_3');
            dice_1.getComponent(Sprite).spriteFrame = _this6.listSprDice[res.Dice1 - 1];
            dice_2.getComponent(Sprite).spriteFrame = _this6.listSprDice[res.Dice2 - 1];
            dice_3.getComponent(Sprite).spriteFrame = _this6.listSprDice[res.Dice3 - 1];
            _this6.lastLocationIDWin = res.LocationIDWin;
            _this6.lastScore = res.Dice1 + res.Dice2 + res.Dice3;
            if (_this6.isNan) {
              _this6.scheduleOnce(function () {
                if (_this6.isOpenBowl) {
                  return;
                }
                _this6.handleOpenBowl();
              }, 15);
            } else {
              _this6.handleOpenBowl();
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("currentRoomsInfoMD5", function (res) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(res), _step4; !(_step4 = _iterator4()).done;) {
              var room = _step4.value;
              if (room == null) continue;
              var isGoldRoom = room.BetType === 1;
              var isXuRoom = room.BetType === 2;
              if (_this6.isBetTypeGold && isXuRoom || !_this6.isBetTypeGold && isGoldRoom) {
                continue;
              }
              var betInfo = room.BetInfo;
              _this6.lblTotalBetXiuCurrent.string = Utils.formatNumber(betInfo[11].TotalBetValue1);
              _this6.lblTotalBetTaiCurrent.string = Utils.formatNumber(betInfo[11].TotalBetValue2);
              _this6.lblUserXiu.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount1) + ")";
              _this6.lblUserTai.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount2) + ")";
              if (Configs.Login.PortalID > 10) {
                // this.lblTotalBetXiuAll.string = Utils.formatMoney(betInfo[88].TotalBetValue1, true);
                // this.lblTotalBetTaiAll.string = Utils.formatMoney(betInfo[88].TotalBetValue2, true);
                _this6.lblUserXiu.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount1 + betInfo[88].TotalAccount1) + ")";
                _this6.lblUserTai.string = "(" + Utils.formatNumber(betInfo[11].TotalAccount2 + betInfo[88].TotalAccount2) + ")";
              }
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("gameHistoryMD5", function (res) {
            _this6.historyList.removeAllChildren();
            if (res == null || res.length == 0) {
              return;
            }
            _this6.detailSessions = [];
            var _loop = function _loop(i) {
              _this6.detailSessions.push(res[i]);
              var item = instantiate(_this6.historyItem);
              item.getComponent(Sprite).spriteFrame = res[i].LocationIDWin == 1 ? _this6.sprFrameXiu : _this6.sprFrameTai;
              item.getChildByName("last").active = i === 0;
              item.on(Node.EventType.TOUCH_END, function () {
                _this6.actPopupDetailSession(res[i].GameSessionID);
              });
              if (i === 0) {
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
              _this6.historyList.addChild(item);
            };
            for (var i = res.length - 1; i >= 0; i--) {
              _loop(i);
            }
          });
          MiniGameTXMD5SignalRClient.getInstance().receive("betOfAccountMD5", function (res) {
            res.forEach(function (item) {
              _this6.editBoxBetTai.string = '';
              _this6.editBoxBetXiu.string = '';
              if (item.BetType == 1) {
                var betLocation = item.LocationID == 1 ? _this6.lblBetXiu : _this6.lblBetTai;
                betLocation.string = Utils.formatNumber(item.BetValue);
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
            var winTextNode = _this6.betTypeLocation === 1 ? _this6.winTextXiuNode : _this6.winTextTaiNode;
            if (totalPrize <= 0) {
              winTextNode.active = false;
              return;
            }
            winTextNode.active = true;
            winTextNode.getComponentInChildren(Label).string = '+ ' + Utils.formatNumber(totalPrize);
            winTextNode.position = v3(winTextNode.x, -60);
            tween(winTextNode).to(3, {
              position: v3(winTextNode.x, 60)
            }).call(function () {
              winTextNode.active = false;
            }).start();
            _this6.updateBalanceTaiXiu();
          });
        };
        _proto.handleBettingPhase = function handleBettingPhase(remainTime) {
          var _this7 = this;
          if (remainTime === 60) {
            this.showToast(App.instance.getTextLang("txt_taixiu_new_session"));
            this.isOpenBowl = false;
            this.resetSessionLabels();
            this.lblBetTai.string = "0";
            this.lblBetXiu.string = "0";
            this.lastScore = 0;
            this.lblSumDices.string = "";
            this.lblRemainTime.string = "";
            this.confirmBetButton.active = false;
            this.cancelBetButton.active = false;
            this.clearChipToggle();
            this.hideResult();
            this.plainTextMD5 = "";
            this.actCancelBet();
          }
          if (remainTime < 3) {
            this.isBetting = false;
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
            try {
              if (secondsLeft < 0) {
                _this7.unschedule(_this7.countdownRemainTime);
                return;
              }
              if (secondsLeft <= 5) {
                _this7.isBetting = false;
              }
              _this7.containerTimer.active = true;
              _this7.lblRemainTime.string = secondsLeft < 10 ? "0" + secondsLeft : "" + secondsLeft;
              secondsLeft--;
            } catch (e) {
              _this7.unschedule(_this7.countdownRemainTime);
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
          var _this8 = this;
          if (waitingTime > 0) this.isBetting = false;
          if (waitingTime < 19) {
            MiniGameTXMD5SignalRClient.getInstance().send("GetCurrentResultMD5", [{
              GameID: this.GAME_ID
            }], function () {});
          }
          this.containerTimer.active = false;
          this.lblRemainWaiting.node.parent.active = false;
          var secondsLeft = waitingTime;
          this.unschedule(this.countdownWaitingTime);
          this.schedule(this.countdownWaitingTime = function () {
            try {
              if (secondsLeft < 0) {
                _this8.unschedule(_this8.countdownWaitingTime);
                return;
              }
              if (_this8.isOpenBowl === false && secondsLeft > 15) {
                var secondsLeftOpenBowl = secondsLeft - 15;
                _this8.lblRemainWaiting.string = "" + (secondsLeftOpenBowl < 10 ? "0" + secondsLeftOpenBowl : secondsLeftOpenBowl);
                _this8.lblRemainWaiting.node.active = true;
                _this8.lblRemainWaiting.node.parent.active = true;
                _this8.lblSumDices.node.active = false;
              } else {
                _this8.lblSumDices.node.active = secondsLeft > 12;
                _this8.lblRemainWaiting.node.active = secondsLeft <= 12;
                _this8.lblRemainWaiting.string = "" + (secondsLeft < 10 ? "0" + secondsLeft : secondsLeft);
              }
              secondsLeft--;
            } catch (e) {
              _this8.unschedule(_this8.countdownWaitingTime);
            }
          }, 1);
        };
        _proto.actBet = function actBet() {
          var _this9 = this;
          if (!this.isBetting) {
            this.showToast(App.instance.getTextLang("me-207"));
            this.actCancelBet();
            return;
          }
          if (this.betTypeLocation == 0) {
            return;
          }
          var betValue = this.betTypeLocation == 1 ? this.editBoxBetXiu.string : this.editBoxBetTai.string;
          if (parseInt(betValue) <= 0) {
            this.showToast(App.instance.getTextLang("txt_taixiu_enter_bet_value")); //@TODO
            return;
          }
          MiniGameTXMD5SignalRClient.getInstance().send("SetBetMd5", [{
            GameID: this.GAME_ID,
            CurrencyID: Configs.Login.CurrencyID,
            BetType: 1,
            // always gold
            Location: this.betTypeLocation,
            Amount: parseInt(betValue)
          }], function (res) {
            if (res < 0) {
              _this9.showToast(App.instance.getTextLang("me" + res));
              _this9.actCancelBet();
              return;
            }
            _this9.showToast(App.instance.getTextLang("tx3_live").replace('{0}', _this9.betTypeLocation === 1 ? App.instance.getTextLang("tx44") : App.instance.getTextLang("tx43")));
            _this9.lastBetAmount = parseInt(betValue);
            _this9.editBoxBetTai.string = "";
            _this9.editBoxBetXiu.string = "";
            _this9.gateXiuWin.active = false;
            _this9.gateTaiWin.active = false;
            _this9.clearChipToggle();
            _this9.updateBalanceTaiXiu();
          });
        };
        _proto.x2Bet = function x2Bet() {
          var lastBetAmount = this.lastBetAmount;
          var currentBetAmountXiu = parseInt(this.editBoxBetXiu.string) || 0;
          var currentBetAmountTai = parseInt(this.editBoxBetTai.string) || 0;
          if (!this.isBetting || lastBetAmount == 0 && currentBetAmountTai == 0 && currentBetAmountXiu == 0) return;
          if (this.betTypeLocation == 1) {
            if (currentBetAmountXiu > 0) {
              this.editBoxBetXiu.string = (currentBetAmountXiu * 2).toString();
            } else {
              this.editBoxBetXiu.string = (lastBetAmount * 2).toString();
            }
          } else if (this.betTypeLocation == 2) {
            if (currentBetAmountTai > 0) {
              this.editBoxBetTai.string = (currentBetAmountTai * 2).toString();
            } else {
              this.editBoxBetTai.string = (lastBetAmount * 2).toString();
            }
          }
          this.confirmBetButton.active = true;
          this.cancelBetButton.active = true;
        };
        _proto.updateBalanceTaiXiu = function updateBalanceTaiXiu() {
          BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
          this.labelBalance.string = Utils.formatNumber(Configs.Login.GoldBalance);
        };
        _proto.updateCurrentBetType = function updateCurrentBetType(_event, type) {
          if (!this.isBetting) return;
          this.betTypeLocation = parseInt(type);
          this.gateXiuWin.active = this.betTypeLocation === 1;
          this.gateTaiWin.active = this.betTypeLocation === 2;
          this.confirmBetButton.active = true;
          this.cancelBetButton.active = true;
        };
        _proto.selectedChip = function selectedChip(_event, value) {
          if (!this.isBetting) return;
          if (this.betTypeLocation == 0) {
            this.clearChipToggle();
            return; //@TODO
          } else if (this.betTypeLocation == 1) {
            this.editBoxBetXiu.string = value.toString();
          } else if (this.betTypeLocation == 2) {
            this.editBoxBetTai.string = value.toString();
          }
        };
        _proto.clearChipToggle = function clearChipToggle() {
          for (var i = 0; i < this.chipToggleContainer.toggleItems.length; i++) {
            this.chipToggleContainer.toggleItems[i].isChecked = false;
          }
        };
        _proto.actConfirmBet = function actConfirmBet() {
          this.actBet();
          this.confirmBetButton.active = false;
          this.cancelBetButton.active = false;
        };
        _proto.actCancelBet = function actCancelBet() {
          this.editBoxBetTai.string = "";
          this.editBoxBetXiu.string = "";
        };
        _proto.showResult = function showResult() {
          var nodeResult;
          this.hideResult();
          if (this.lastLocationIDWin === 1) {
            nodeResult = this.nodeXiuWin;
            this.gateXiuWin.active = true;
            this.gateTaiWin.active = false;
            this.nodeTaiWin.active = false;
          } else if (this.lastLocationIDWin === 2) {
            nodeResult = this.nodeTaiWin;
            this.gateTaiWin.active = true;
            this.gateXiuWin.active = false;
            this.nodeXiuWin.active = false;
          } else {
            return;
          }
          nodeResult.active = true;
          var nodeResultOpacity = nodeResult.getComponent(UIOpacity);
          tween(nodeResultOpacity).repeatForever(tween().to(0.2, {
            opacity: 100
          }).to(0.2, {
            opacity: 255
          })).start();
          this.lblRemainWaiting.node.parent.active = true;
          this.lblRemainWaiting.node.active = false;
          this.lblSumDices.string = this.lastScore.toString();
          this.labelTextMD5.string = this.plainTextMD5;
        };
        _proto.hideResult = function hideResult() {
          Tween.stopAllByTarget(this.nodeTaiWin);
          Tween.stopAllByTarget(this.nodeXiuWin);
          this.nodeTaiWin.active = false;
          this.nodeXiuWin.active = false;
          this.gateTaiWin.active = false;
          this.gateXiuWin.active = false;
          this.lblRemainWaiting.node.parent.active = false;
        };
        _proto.toggleLayoutBet = function toggleLayoutBet(event) {
          var target = event.target;
          var textOther = target.getChildByName('text');
          var betFast = target.getChildByName('betFast');
          this.layoutBetChip.active = !this.layoutBetChip.active;
          this.layoutBetNumber.active = !this.layoutBetNumber.active;
          betFast.active = !this.layoutBetChip.active;
          textOther.active = !this.layoutBetNumber.active;
          if (this.isBetting) {
            this.confirmBetButton.active = true;
            this.cancelBetButton.active = true;
          }
        };
        _proto.updateBetAmountCustom = function updateBetAmountCustom(_event, amount) {
          if (this.betTypeLocation == 1) {
            this.editBoxBetXiu.string += amount;
          } else if (this.betTypeLocation == 2) {
            this.editBoxBetTai.string += amount;
          }
        };
        _proto.deleteBetAmount = function deleteBetAmount() {
          if (this.betTypeLocation == 1) {
            this.editBoxBetXiu.string = this.editBoxBetXiu.string.slice(0, -1);
          } else if (this.betTypeLocation == 2) {
            this.editBoxBetTai.string = this.editBoxBetTai.string.slice(0, -1);
          }
        };
        _proto.copyTextMD5 = function copyTextMD5() {
          Utils.copy(this.labelTextMD5.string);
          this.showToast("Copied");
        };
        _proto.toggleNan = function toggleNan(event) {
          var target = event.target;
          var on = target.getChildByName('on');
          var off = target.getChildByName('off');
          on.active = !on.active;
          off.active = !off.active;
          this.isNan = !this.isNan;
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
        _proto.actPopupDetailSession = function actPopupDetailSession(session) {
          if (this.popupDetailSession == null) {
            this.popupDetailSession = instantiate(this.popupDetailSessionPrefab).getComponent("TaiXiuLiveMD5.PopupDetailSession");
            this.popupDetailSession.node.parent = this.popupContainer;
            this.popupDetailSession.showDetail(session, this.detailSessions);
            App.instance.showLoading(false);
          } else {
            this.popupDetailSession.showDetail(session, this.detailSessions);
          }
        };
        _proto.actPopupHistory = function actPopupHistory() {
          if (this.popupHistory == null) {
            this.popupHistory = instantiate(this.popupHistoryPrefab).getComponent("TaiXiuLiveMD5.PopupHistory");
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.show();
            App.instance.showLoading(false);
          } else {
            this.popupHistory.show();
          }
        };
        _proto.actPopupHonors = function actPopupHonors() {
          if (this.popupHonors == null) {
            this.popupHonors = instantiate(this.popupHonorsPrefab).getComponent("TaiXiuLiveMD5.PopupHonors");
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
        return TaiXiuLiveMD5Controller;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelBalance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelNickname", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "leftContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "centerLabels", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "JackpotNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "MD5ContainerNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "EventButtonLiveJP", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameTai", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameXiu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "containerTimer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainTime", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lblRemainWaiting", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lblSumDices", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTaiCurrent", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiuCurrent", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "lblBetTai", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "lblBetXiu", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "lblUserTai", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "lblUserXiu", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "winTextTaiNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "winTextXiuNode", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetTai", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "editBoxBetXiu", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "confirmBetButton", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "cancelBetButton", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "chipToggleContainer", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "layoutBetChip", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "layoutBetNumber", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "labelTextMD5", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "dicesContainer", [_dec34], {
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
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "gateTaiWin", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "nodeTaiWin", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "gateXiuWin", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiuWin", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "bowl", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "buttonNan", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "lblToast", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "historyList", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "historyItem", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "chatBox", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "settingBox", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "statisticalBox", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "popupDetailSessionPrefab", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "popupHonorsPrefab", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "liveNode", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "webView", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "liveNodeMini", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "webViewMini", [_dec56], {
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

System.register("chunks:///_virtual/TaiXiuLiveMD5.PopupDetailSession.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SpriteFrame, Sprite, Color, Tween, tween, v3, instantiate, Dialog, App, Configs, Http, Utils;
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
      v3 = module.v3;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "237ebErLcxBZbioFAK8k8mz", "TaiXiuLiveMD5.PopupDetailSession", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupSessionMD5 = exports('default', (_dec = menu("TaiXiuLiveMD5/PopupSession"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property([SpriteFrame]), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
        _proto.onChangeBetType = function onChangeBetType(toggle) {
          var target = toggle.node;
          if (toggle.isChecked) {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#FFF000');
          } else {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#CDBEE4');
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
          this.MD5.string = '';
          this.plainText.string = '';
          this.lblSessionDate.node.active = false;
          Tween.stopAllByTarget(this.nodeTai);
          Tween.stopAllByTarget(this.nodeXiu);
          var nodeResult = sessionData.LocationIDWin === 2 ? this.nodeTai : this.nodeXiu;
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
          var url = Configs.App.DOMAIN_CONFIG['LuckyDiceMd5GetBetDetails'] + "?currencyID=" + Configs.Login.CurrencyID + "&gameID=123&betType=" + this.betType + "&sessionID=" + this.sessionID;
          Http.post(url, {}, function (_status, res) {
            var _res$d;
            if (res.c < 0) {
              App.instance.alertDialog.showMsg(App.instance.getTextLang("me" + res.code));
              return;
            }
            _this2.MD5.string = res.d.m;
            _this2.plainText.string = res.d.p;
            res == null || (_res$d = res.d) == null || _res$d.l.forEach(function (item, index) {
              if (index == 0) {
                _this2.lblSessionDate.node.active = true;
                _this2.lblSessionDate.string = Utils.formatDatetime(item.createdTime, 'dd/MM/yyyy');
              }
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblSession", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblSessionDate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetTai", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalRefundTai", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalBetXiu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalRefundXiu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemsTai", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itemsXiu", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemTai", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemXiu", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sfDices", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sprDice1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprDice2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sprDice3", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "labelSumDices", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "MD5", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "plainText", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "nodeTai", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "nodeXiu", [_dec20], {
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

System.register("chunks:///_virtual/TaiXiuLiveMD5.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "78a79R8QORB8o4gLTB5i2IG", "TaiXiuLiveMD5.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHistoryMD5 = exports('PopupHistoryMD5', (_dec = menu("TaiXiuLiveMD5/PopupHistory"), _dec2 = property(Node), _dec3 = property(ScrollView), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
          this.scroll.content.removeAllChildren();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.page = 1;
          this.loadData();
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
          this.scroll.content.removeAllChildren();
        };
        _proto.onChangeType = function onChangeType(toggle, data) {
          var target = toggle.node;
          if (toggle.isChecked) {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#FFF000');
          } else {
            target.getChildByName('text').getComponent(Label).color = new Color().fromHEX('#CDBEE4');
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
          item.getChildByName("lblBetDoor").getComponent(Label).string = data.locationName == 1 ? App.instance.getTextLang("tx2") : App.instance.getTextLang("tx1");
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec3], {
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

System.register("chunks:///_virtual/TaiXiuLiveMD5.PopupHonors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './Config.ts', './Http.ts', './Utils.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "5676cCKlk1N55mx88h8uW56", "TaiXiuLiveMD5.PopupHonors", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupHonors = exports('PopupHonors', (_dec = menu("TaiXiuLiveMD5/PopupHonors"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
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
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_top1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item_top2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item_top3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameGold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprFrameCoin", [_dec8], {
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
  r('virtual:///prerequisite-imports/TaiXiuLive', 'chunks:///_virtual/TaiXiuLive'); 
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