System.register("chunks:///_virtual/BundleControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, director, Prefab, sys, assetManager, log, instantiate;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Prefab = module.Prefab;
      sys = module.sys;
      assetManager = module.assetManager;
      log = module.log;
      instantiate = module.instantiate;
    }],
    execute: function () {
      cclegacy._RF.push({}, "042a81rvuJLIYsEHYhfH5Th", "BundleControl", undefined);
      var BundleControl = exports('default', /*#__PURE__*/function () {
        function BundleControl() {}
        BundleControl.init = function init(data) {
          this.serverVersion = data;
        };
        BundleControl.loadSceneGame = function loadSceneGame(bundleName, sceneName, callbackProgress, bundleCallback) {
          this.loadBundle(bundleName, function (bundle) {
            bundle.loadScene(sceneName, function (finish, total) {
              return callbackProgress(finish, total);
            }, function (err, scene) {
              director.preloadScene(sceneName, function (c, t) {
                return callbackProgress(c, t);
              }, function () {
                director.loadScene(sceneName);
                bundleCallback();
              });
            });
          });
        };
        BundleControl.loadPrefabGame = function loadPrefabGame(bundleName, prefabName, callbackProgress, bundleCallback) {
          this.loadBundle(bundleName, function (bundle) {
            bundle.load(prefabName, Prefab, function (finish, total) {
              return callbackProgress(finish, total);
            }, function (err, prefab) {
              bundleCallback(prefab, bundle);
            });
          });
        };
        BundleControl.loadPrefabFromBundle = function loadPrefabFromBundle(bundle, prefabName, callbackProgress, bundleCallback) {
          bundle.load(prefabName, Prefab, function (finish, total) {
            return callbackProgress(finish, total);
          }, function (err, prefab) {
            bundleCallback(prefab, bundle);
          });
        };
        BundleControl.removeBundle = function removeBundle(bundle) {
          // Uncomment if needed
          // bundle.releaseAll();
          // assetManager.removeBundle(bundle);
        };
        BundleControl.loadBundle = function loadBundle(bundleName, bundleCallback) {
          var bundleVersion = this.serverVersion[bundleName];
          var url = bundleName;
          if (sys.isBrowser) {
            assetManager.loadBundle(url, function (err, bundle) {
              if (err) {
                log("Error Download bundle: " + JSON.stringify(err));
                return;
              }
              bundleCallback(bundle);
            });
          } else {
            if (sys.isNative && bundleVersion != null && bundleVersion.url) {
              url = bundleVersion.url;
            }
            assetManager.loadBundle(url, {
              version: bundleVersion == null ? void 0 : bundleVersion.hash
            }, function (err, bundle) {
              if (err) {
                log("Error Download native bundle: " + JSON.stringify(err));
                return;
              }
              bundleCallback(bundle);
            });
          }
        };
        BundleControl.loadPrefabPopup = function loadPrefabPopup(prefabPath, cb) {
          if (!this.BundleLobby) {
            log("BundleLobby is not set.");
            return;
          }
          this.BundleLobby.load(prefabPath, function (err, prefab) {
            if (err) {
              log("Error loading popup prefab: " + err.message);
              return;
            }
            cb(prefab);
          });
        };
        BundleControl.createPrefab = /*#__PURE__*/function () {
          var _createPrefab = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type, path) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this.BundleLobby.load(path, function (err, prefab) {
                      if (err) {
                        reject(err);
                        return;
                      }
                      var node = instantiate(prefab);
                      var component = node.getComponent(type);
                      resolve(component);
                    });
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function createPrefab(_x, _x2) {
            return _createPrefab.apply(this, arguments);
          }
          return createPrefab;
        }();
        return BundleControl;
      }());
      BundleControl.serverVersion = {};
      BundleControl.BundleLobby = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropDown.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DropDownOptionData.ts', './DropDownItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Sprite, js, UITransform, error, Toggle, instantiate, Component, DropDownOptionData, DropDownItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      js = module.js;
      UITransform = module.UITransform;
      error = module.error;
      Toggle = module.Toggle;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      DropDownOptionData = module.default;
    }, function (module) {
      DropDownItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "4c73768DrRIEpBrhG+kF/zC", "DropDown", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DropDown = exports('default', (_dec = ccclass("DropDown"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property([DropDownOptionData]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropDown, _Component);
        function DropDown() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "template", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelCaption", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteCaption", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelItem", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteItem", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionDatas", _descriptor6, _assertThisInitialized(_this));
          _this._dropDown = null;
          _this._items = [];
          _this._isShow = false;
          _this._validTemplate = false;
          _this._selectedIndex = -1;
          _this._callback = null;
          return _this;
        }
        var _proto = DropDown.prototype;
        _proto.setCallBack = function setCallBack(fn) {
          this._callback = fn;
        };
        _proto.getCallBack = function getCallBack() {
          return this._callback;
        };
        _proto.addOptionDatas = function addOptionDatas(datas) {
          if (datas != null && datas.length) {
            var _this$optionDatas;
            (_this$optionDatas = this.optionDatas).push.apply(_this$optionDatas, datas);
            this.refreshShownValue();
          }
        };
        _proto.clearOptionDatas = function clearOptionDatas() {
          js.clear(this.optionDatas);
          this.optionDatas = [];
          this.refreshShownValue();
        };
        _proto.show = function show() {
          var _this2 = this;
          if (!this._validTemplate) {
            this.setUpTemplate();
            if (!this._validTemplate) return;
          }
          this.isShow = true;
          this._dropDown = this.createDropDownList(this.template);
          this._dropDown.name = "DropDown List";
          this._dropDown.active = true;
          this._dropDown.setParent(this.template.parent);
          var itemTemplate = this._dropDown.getComponentInChildren(DropDownItem);
          var content = itemTemplate.node.parent;
          itemTemplate.node.active = true;
          js.clear(this._items);
          this.optionDatas.forEach(function (data, index) {
            var isSelected = index === _this2.selectedIndex;
            var item = _this2.addItem(data, isSelected, itemTemplate);
            if (!item) return;
            item.toggle.isChecked = isSelected;
            item.toggle.node.on("toggle", _this2.onSelectedItem, _this2);
          });
          itemTemplate.node.active = false;
          content.getComponent(UITransform).height = itemTemplate.node.getComponent(UITransform).contentSize.height * this.optionDatas.length;
        };
        _proto.addItem = function addItem(data, selected, itemTemplate) {
          var _data$optionString;
          var item = this.createItem(itemTemplate);
          var parent = itemTemplate.node.parent;
          item.node.setParent(parent);
          item.node.active = true;
          var label = (_data$optionString = data.optionString) != null ? _data$optionString : "";
          item.node.name = "item_" + this._items.length + "_" + label;
          if (item.toggle) item.toggle.isChecked = false;
          if (item.label) item.label.string = label;
          if (item.sprite) {
            item.sprite.spriteFrame = data.optionSf;
            item.sprite.enabled = !!data.optionSf;
          }
          this._items.push(item);
          return item;
        };
        _proto.hide = function hide() {
          this.isShow = false;
          if (this._dropDown) {
            this.delayedDestroyDropdownList(0.15);
          }
        };
        _proto.delayedDestroyDropdownList = /*#__PURE__*/function () {
          var _delayedDestroyDropdownList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delay) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // await WaitUtil.waitForSeconds(delay); // if using coroutine-like wait

                  this._items.forEach(function (item) {
                    return _this3.destroyItem(item);
                  });
                  js.clear(this._items);
                  if (this._dropDown) {
                    this.destroyDropDownList(this._dropDown);
                    this._dropDown = null;
                  }
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function delayedDestroyDropdownList(_x) {
            return _delayedDestroyDropdownList.apply(this, arguments);
          }
          return delayedDestroyDropdownList;
        }();
        _proto.destroyItem = function destroyItem(item) {
          item.node.destroy();
        };
        _proto.setUpTemplate = function setUpTemplate() {
          this._validTemplate = false;
          if (!this.template) {
            error("DropDown template is missing.");
            return;
          }
          this.template.active = true;
          var itemToggle = this.template.getComponentInChildren(Toggle);
          if (!itemToggle || itemToggle.node === this.template) {
            error("DropDown template must contain a child Toggle.");
            return;
          }
          if (this.labelItem && !this.labelItem.node.isChildOf(itemToggle.node)) {
            error("Item Label must be inside the Toggle node.");
            return;
          }
          if (this.spriteItem && !this.spriteItem.node.isChildOf(itemToggle.node)) {
            error("Item Sprite must be inside the Toggle node.");
            return;
          }
          var item = itemToggle.node.addComponent(DropDownItem);
          item.label = this.labelItem;
          item.sprite = this.spriteItem;
          item.toggle = itemToggle;
          item.node = itemToggle.node;
          this.template.active = false;
          this._validTemplate = true;
        };
        _proto.refreshShownValue = function refreshShownValue() {
          if (!this.optionDatas.length) return;
          var clampedIndex = this.clamp(this.selectedIndex, 0, this.optionDatas.length - 1);
          var data = this.optionDatas[clampedIndex];
          if (this.labelCaption) {
            this.labelCaption.string = (data == null ? void 0 : data.optionString) || "";
          }
          if (this.spriteCaption) {
            this.spriteCaption.spriteFrame = data == null ? void 0 : data.optionSf;
            this.spriteCaption.enabled = !!this.spriteCaption.spriteFrame;
          }
        };
        _proto.createDropDownList = function createDropDownList(template) {
          return instantiate(template);
        };
        _proto.destroyDropDownList = function destroyDropDownList(dropDown) {
          dropDown.destroy();
        };
        _proto.createItem = function createItem(template) {
          var node = instantiate(template.node);
          return node.getComponent(DropDownItem);
        };
        _proto.onSelectedItem = function onSelectedItem(toggle) {
          var parent = toggle.node.parent;
          this.selectedIndex = parent.children.indexOf(toggle.node) - 1;
          this.hide();
          if (this._callback) {
            this._callback(this.selectedIndex);
          }
        };
        _proto.onClick = function onClick() {
          this.isShow ? this.hide() : this.show();
        };
        _proto.start = function start() {
          this.template.active = false;
          this.refreshShownValue();
        };
        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.clamp = function clamp(value, min, max) {
          return Math.min(Math.max(value, min), max);
        };
        _createClass(DropDown, [{
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex === -1 ? 0 : this._selectedIndex;
          },
          set: function set(value) {
            this._selectedIndex = value;
            this.refreshShownValue();
          }
        }, {
          key: "isShow",
          get: function get() {
            return this._isShow;
          },
          set: function set(value) {
            this._isShow = value;
          }
        }]);
        return DropDown;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "template", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelCaption", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteCaption", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "optionDatas", [_dec7], {
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

System.register("chunks:///_virtual/DropDownItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Toggle, Component;
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
      Sprite = module.Sprite;
      Toggle = module.Toggle;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "0e0c1OzYPVOfpEPKQp433tu", "DropDownItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DropDownItem = exports('default', (_dec = ccclass(), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropDownItem, _Component);
        function DropDownItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggle", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        return DropDownItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropDownOptionData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, CCString, SpriteFrame;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      SpriteFrame = module.SpriteFrame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fd5cfBXVIZC4Ks6evy9ygnF", "DropDownOptionData", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DropDownOptionData = exports('default', (_dec = ccclass("DropDownOptionData"), _dec2 = property(CCString), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = function DropDownOptionData() {
        _initializerDefineProperty(this, "optionString", _descriptor, this);
        _initializerDefineProperty(this, "optionSf", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "optionString", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "optionSf", [_dec3], {
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

System.register("chunks:///_virtual/HotUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SuperConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Asset, Node, SpriteFrame, Sprite, Label, sys, game, Component, SuperConfig;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Asset = module.Asset;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      sys = module.sys;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      SuperConfig = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "2ffa0G2dXNOEK/nOzR1EEZB", "HotUpdate", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var jsb = window.jsb;
      var HotUpdate = exports('default', (_dec = ccclass("HotUpdate"), _dec2 = property({
        type: Asset
      }), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec5 = property(Sprite), _dec6 = property([SpriteFrame]), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HotUpdate, _Component);
        function HotUpdate() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // @property(cc.Asset)
          //    // manifestUrl: cc.Asset = null;
          _initializerDefineProperty(_this2, "manifestUrl", _descriptor, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "loadingNode", _descriptor2, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "bgSplash", _descriptor3, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "loadingBar", _descriptor4, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "listSprBg", _descriptor5, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "lb_Info", _descriptor6, _assertThisInitialized(_this2));
          _this2.loadingGameComp = null;
          _this2._updating = false;
          _this2._failCount = 0;
          _this2._canRetry = false;
          _this2._storagePath = "";
          _this2._updateListener = null;
          _this2._am = null;
          _this2._checkListener = null;
          _this2.versionCompareHandle = null;
          _this2.gameSceneName = "main";
          return _this2;
        }
        var _proto = HotUpdate.prototype;
        _proto.httpGetConfig = function httpGetConfig(url, params, onFinished, isShowError) {
          if (isShowError === void 0) {
            isShowError = true;
          }
          var xhr = new XMLHttpRequest();
          url = url.split("?")[0];
          for (var key in params) {
            if (params.hasOwnProperty(key)) {
              if (url.indexOf("?") === -1) {
                url += "?" + key + "=" + params[key];
              } else {
                url += "&" + key + "=" + params[key];
              }
            }
          }
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              try {
                var data = JSON.parse(xhr.responseText);
                if (isShowError && data['c'] < 0 && data['r']) {}
                onFinished(xhr.status, data);
              } catch (e) {
                // log("Error parsing JSON response: ", e);
              }
            }
          };
          xhr.open("GET", url, true);
          this.setHeaders(xhr);
          xhr.send();
        };
        _proto.setHeaders = function setHeaders(xhr) {
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.setRequestHeader("client-deviceid", this.getDeviceId());
          xhr.setRequestHeader("checksum", "");
          xhr.setRequestHeader("client-bundleid", this.getBundle());
          xhr.setRequestHeader("client-ostype", 'WEB');
        };
        _proto.getDeviceId = function getDeviceId() {
          var deviceID;
          if (localStorage.getItem("deviceID")) {
            deviceID = localStorage.getItem("deviceID");
          } else {
            deviceID = 'web-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem("deviceID", deviceID);
          }
          return deviceID;
        };
        _proto.startHotUpdate = function startHotUpdate() {};
        _proto.getBundle = function getBundle() {
          var deviceID = "";
          return deviceID;
        };
        _proto.fetchAndDecryptMessage = function fetchAndDecryptMessage() {
          var _this3 = this;
          try {
            var key = SuperConfig.G88_KEY_DECRYPT_CONFIG;
            var nonSecretPayloadLength = 0;
            this.httpGetConfig(SuperConfig.G88_DOMAIN_GET_CONFIG, {}, function (status, res) {
              if (status != 200) {
                _this3.startHotUpdate();
                // this.fetchAndDecryptMessage();
                return;
              }
              var encryptedMessage = res.replace(/[^A-Za-z0-9+/=]/g, '');
              var decodedKey = forge.util.decode64(key);
              var cipherText = forge.util.decode64(encryptedMessage);
              var offset = 0;
              offset += nonSecretPayloadLength;
              var nonce = cipherText.slice(offset, offset + 16);
              offset += 16;
              var authTag = cipherText.slice(cipherText.length - 16);
              var encryptedMessagePart = cipherText.slice(offset, cipherText.length - 16);
              var decipher = forge.cipher.createDecipher('AES-GCM', decodedKey);
              decipher.start({
                iv: nonce,
                tagLength: 128,
                tag: forge.util.createBuffer(authTag)
              });
              decipher.update(forge.util.createBuffer(encryptedMessagePart));
              var success = decipher.finish();
              if (!success) {
                throw new Error('Decryption failed');
              }
              var data = JSON.parse(decipher.output.toString());
              SuperConfig.SuperData = data;
              console.log("encryptedMessagePart ===");
              _this3.startHotUpdate();
            }, false);
          } catch (error) {
            this.startHotUpdate();
          }
        };
        _proto.checkCb = function checkCb(event) {
          console.log("Code CheckCb: " + event.getEventCode());
          switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              this.loadGame();
              console.log("No local manifest!");
              break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
              console.log("Error Parse/Download manifest!");
              this.loadGame();
              break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
              console.log("Up To Date!");
              this.loadGame();
              break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
              this.lb_Info.node.active = true;
              this.lb_Info.string = "Đang tải bản cập nhật...";
              console.log("new version found");
              this.loadingBar.fillRange = 0;
              this.hotUpdate();
              break;
            default:
              console.log("Code: " + event.getEventCode());
              return;
          }
          this._am.setEventCallback(null);
          this._checkListener = null;
          this._updating = false;
        };
        _proto.updateCb = function updateCb(event) {
          var needRestart = false;
          var failed = false;
          switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              //  cc.log("============Update CB===============ERROR_NO_LOCAL_MANIFEST")
              failed = true;
              break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
              var msg = event.getMessage();
              var a = Math.floor(event.getPercent() * 100);
              if (a > 100) a = 100;
              this.lb_Info.string = "Updating: " + a + "%";
              this.loadingBar.fillRange = event.getPercent();
              break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
              //  cc.log("============Update CB===============ERROR_PARSE_MANIFEST,ERROR_DOWNLOAD_MANIFEST")
              failed = true;
              break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
              //  cc.log("============Update CB===============ALREADY_UP_TO_DATE")
              failed = true;
              break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
              //  cc.log("============Update CB===============UPDATE_FINISHED")
              needRestart = true;
              break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
              //  cc.log("============Update CB===============UPDATE_FAILED")
              this._am.downloadFailedAssets();
              this._updating = false;
              this._canRetry = true;
              break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
              //  cc.log("============Update CB===============UPDATE_FAILED" + "Asset update error:" + event.getAssetId() + ', ' + event.getMessage());
              break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
              //  cc.log("============Update CB===============ERROR_DECOMPRESS");
              break;
          }
          if (failed) {
            //  cc.log("Update Failed");
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
            this.loadGame();
          }
          if (needRestart) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            //  cc.log("newPaths==" + JSON.stringify(newPaths));
            //  cc.log("searchPaths==" + JSON.stringify(searchPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            //       s.audioEngine.stopAll();
            game.restart();
          }
        };
        _proto.checkUpdate = function checkUpdate() {
          console.log("Chay vao hot update");
          if (this._updating) {
            this.lb_Info.string = "Checking or updating ...";
            return;
          }
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var url = this.manifestUrl.nativeUrl;
            this._am.loadLocalManifest(url);
          }
          if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.lb_Info.string = "Failed to load local manifest ...";
            return;
          }
          this._am.setEventCallback(this.checkCb.bind(this));
          this._am.checkUpdate();
          this._updating = true;
        };
        _proto.hotUpdate = function hotUpdate() {
          if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
              var url = this.manifestUrl.nativeUrl;
              this._am.loadLocalManifest(url);
            }
            this._failCount = 0;
            this._am.update();
            // this.panel.updateBtn.active = false;
            this._updating = true;
          } else {
            var _this = this;
            this.scheduleOnce(function () {
              _this.hotUpdate();
            }, 0.5);
          }
        };
        _proto.onLoad = function onLoad() {
          this.fetchAndDecryptMessage();
          this.loadingGameComp = this.loadingNode.getComponent("Loading");
          // Hot update is only available in Native build
          if (!sys.isNative && sys.isBrowser || sys.os === sys.OS.OSX) {
            this.loadGame();
            return;
          }
          this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
          //  cc.log('Storage path for remote asset : ' + this._storagePath);
          // Setup your own version compare handler, versionA and B is versions in string
          // if the return value greater than 0, versionA is greater than B,
          // if the return value equals 0, versionA equals to B,
          // if the return value smaller than 0, versionA is smaller than B.
          this.versionCompareHandle = function (versionA, versionB) {
            // cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split(".");
            var vB = versionB.split(".");
            for (var i = 0; i < vA.length; ++i) {
              var a = parseInt(vA[i]);
              var b = parseInt(vB[i] || 0);
              if (a === b) {
                continue;
              } else {
                return a - b;
              }
            }
            if (vB.length > vA.length) {
              return -1;
            } else {
              return 0;
            }
          };
          // Init with empty manifest url for testing custom manifest
          this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
          // Setup the verification callback, but we don't have md5 check function yet, so only print some message
          // Return true if the verification passed, otherwise return false
          this._am.setVerifyCallback(function (path, asset) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
              //  cc.log("Verification passed : " + relativePath);
              return true;
            } else {
              //  cc.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
              return true;
            }
          });
          if (sys.os === sys.OS.ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(10);
          }
          this.checkUpdate();
        };
        _proto.start = function start() {
          console.log("HotUpdate start");
          // Utils.getGetDeviceId();
          if (sys.isBrowser) ;
        };
        _proto.loadGame = function loadGame() {
          this.loadingGameComp.startGame();
        };
        _proto.onDestroy = function onDestroy() {
          if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
          }
        };
        return HotUpdate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "manifestUrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgSplash", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listSprBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lb_Info", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
       */
      // const { ccclass, property } = cc._decorator;
      // @ccclass
      // export default class HotUpdate extends cc.Component {
      //
      //     // @property(cc.Asset)
      //     // manifestUrl: cc.Asset = null;
      //
      //     @property({
      //         type: cc.Asset,
      //     })
      //     manifestUrl = null;
      //
      //     @property(cc.Node)
      //     loadingNode: cc.Node = null;
      //
      //     @property([cc.SpriteFrame])
      //     bgSplash: cc.SpriteFrame[] = [];
      //
      //     @property(cc.Sprite)
      //     loadingBar: cc.Sprite = null;
      //
      //     @property([cc.SpriteFrame])
      //     listSprBg: cc.SpriteFrame[] = [];
      //
      //     @property(cc.Label)
      //     lb_Info: cc.Label = null;
      //     _updating: Boolean = false;
      //     _failCount = 0;
      //     _canRetry: Boolean = false;
      //     _storagePath: string = '';
      //     _updateListener = null;
      //     _am = null;
      //     _checkListener = null;
      //     versionCompareHandle = null;
      //     gameSceneName = "main";
      //     loadingGameComp: any = null;
      //
      //
      //
      //
      //
      //     checkCb(event) {
      //         //  cc.log('Code CheckCb: ' + event.getEventCode());
      //         switch (event.getEventCode()) {
      //             case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
      //                 this.loadGame();
      //                 //  cc.log("No local manifest!");
      //                 break;
      //             case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
      //             case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
      //                 //  cc.log("Error Parse/Download manifest!");
      //                 this.loadGame();
      //                 break;
      //             case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
      //                 //  cc.log("Up To Date!");
      //                 this.loadGame();
      //                 break;
      //             case jsb.EventAssetsManager.NEW_VERSION_FOUND:
      //                 this.lb_Info.node.active = true;
      //                 this.lb_Info.string = "Đang tải bản cập nhật..."
      //                 //  cc.log("new version found");
      //                 this.loadingBar.fillRange = 0;
      //                 this.hotUpdate();
      //
      //                 break;
      //             default:
      //                 //  cc.log('Code: ' + event.getEventCode());
      //                 return;
      //         }
      //
      //         this._am.setEventCallback(null);
      //         //  cc.log("CheckCB:setEventCallback=null");
      //         this._checkListener = null;
      //         this._updating = false;
      //     }
      //     updateCb(event) {
      //         var needRestart = false;
      //         var failed = false;
      //         switch (event.getEventCode()) {
      //             case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
      //                 //  cc.log("============Update CB===============ERROR_NO_LOCAL_MANIFEST")
      //                 failed = true;
      //                 break;
      //             case jsb.EventAssetsManager.UPDATE_PROGRESSION:
      //                 var msg = event.getMessage();
      //                 //  cc.log("UPDATE_PROGRESSION:", JSON.stringify(msg));
      //                 if (msg) {
      //                     //  cc.log("Progress" + event.getPercent() / 100 + '% : ' + msg);
      //                 }
      //                 let a = Math.floor(event.getPercent() * 100)
      //                 if(a > 100) a = 100
      //                 this.lb_Info.string = "Updating: " + a + '%';
      //                 this.loadingBar.fillRange = event.getPercent();
      //                 break;
      //             case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
      //             case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
      //                 //  cc.log("============Update CB===============ERROR_PARSE_MANIFEST,ERROR_DOWNLOAD_MANIFEST")
      //                 failed = true;
      //                 break;
      //             case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
      //                 //  cc.log("============Update CB===============ALREADY_UP_TO_DATE")
      //                 failed = true;
      //                 break;
      //             case jsb.EventAssetsManager.UPDATE_FINISHED:
      //                 //  cc.log("============Update CB===============UPDATE_FINISHED")
      //                 needRestart = true;
      //                 break;
      //             case jsb.EventAssetsManager.UPDATE_FAILED:
      //                 //  cc.log("============Update CB===============UPDATE_FAILED")
      //                 this._am.downloadFailedAssets();
      //                 this._updating = false;
      //                 this._canRetry = true;
      //                 break;
      //             case jsb.EventAssetsManager.ERROR_UPDATING:
      //                 //  cc.log("============Update CB===============UPDATE_FAILED" + "Asset update error:" + event.getAssetId() + ', ' + event.getMessage());
      //                 break;
      //             case jsb.EventAssetsManager.ERROR_DECOMPRESS:
      //                 //  cc.log("============Update CB===============ERROR_DECOMPRESS");
      //                 break;
      //             default:
      //                 //  cc.log('Code: ' + event.getEventCode());
      //                 //  cc.log("============Update CB===============default hotupdate ");
      //                 break;
      //         }
      //
      //         if (failed) {
      //             //  cc.log("Update Failed");
      //             this._am.setEventCallback(null);
      //             this._updateListener = null;
      //             this._updating = false;
      //             this.loadGame();
      //
      //         }
      //
      //         if (needRestart) {
      //             this._am.setEventCallback(null);
      //             this._updateListener = null;
      //             // Prepend the manifest's search path
      //             var searchPaths = jsb.fileUtils.getSearchPaths();
      //             var newPaths = this._am.getLocalManifest().getSearchPaths();
      //             //  cc.log("newPaths==" + JSON.stringify(newPaths));
      //             //  cc.log("searchPaths==" + JSON.stringify(searchPaths));
      //             Array.prototype.unshift.apply(searchPaths, newPaths);
      //             // This value will be retrieved and appended to the default search path during game startup,
      //             // please refer to samples/js-tests/main.js for detailed usage.
      //             // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
      //             cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
      //             jsb.fileUtils.setSearchPaths(searchPaths);
      //             cc.audioEngine.stopAll();
      //             cc.game.restart();
      //         }
      //
      //     }
      //     checkUpdate() {
      //         //  cc.log("Chay vao hot update");
      //         if (this._updating) {
      //             this.lb_Info.string = 'Checking or updating ...';
      //             return;
      //         }
      //         if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
      //             // Resolve md5 url
      //             var url = this.manifestUrl.nativeUrl;
      //             if (cc.loader.md5Pipe) {
      //                 url = cc.loader.md5Pipe.transformURL(url);
      //             }
      //             this._am.loadLocalManifest(url);
      //         }
      //         if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
      //             //this.panel.info.string = 'Failed to load local manifest ...';
      //             return;
      //         }
      //         this._am.setEventCallback(this.checkCb.bind(this));
      //         // cc.log("Check Update");
      //         this._am.checkUpdate();
      //         this._updating = true;
      //     }
      //     hotUpdate() {
      //         if (this._am && !this._updating) {
      //             //  cc.log("setEventCallback updateCB");
      //             this._am.setEventCallback(this.updateCb.bind(this));
      //
      //             if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
      //                 // Resolve md5 url
      //                 var url = this.manifestUrl.nativeUrl;
      //                 if (cc.loader.md5Pipe) {
      //                     url = cc.loader.md5Pipe.transformURL(url);
      //                 }
      //                 this._am.loadLocalManifest(url);
      //             }
      //
      //             this._failCount = 0;
      //             this._am.update();
      //             //  cc.log("HotUpdate deee");
      //             this._updating = true;
      //         }
      //         else {
      //             var _this = this;
      //             this.scheduleOnce(function () {
      //                 _this.hotUpdate();
      //             }, 0.5)
      //         }
      //     }
      //     onLoad() {
      //         console.log(" HotUpdate onLoad")
      //         this.loadingGameComp = this.loadingNode.getComponent("Loading");
      //
      //         // Hot update is only available in Native build
      //         if (!cc.sys.isNative && cc.sys.isBrowser || cc.sys.os === cc.sys.OS_OSX) {
      //             this.loadGame();
      //             return;
      //         }
      //         this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'remote-asset');
      //         //  cc.log('Storage path for remote asset : ' + this._storagePath);
      //         // Setup your own version compare handler, versionA and B is versions in string
      //         // if the return value greater than 0, versionA is greater than B,
      //         // if the return value equals 0, versionA equals to B,
      //         // if the return value smaller than 0, versionA is smaller than B.
      //         this.versionCompareHandle = function (versionA, versionB) {
      //             // cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
      //             var vA = versionA.split('.');
      //             var vB = versionB.split('.');
      //             for (var i = 0; i < vA.length; ++i) {
      //                 var a = parseInt(vA[i]);
      //                 var b = parseInt(vB[i] || 0);
      //                 if (a === b) {
      //                     continue;
      //                 }
      //                 else {
      //                     return a - b;
      //                 }
      //             }
      //             if (vB.length > vA.length) {
      //                 return -1;
      //             }
      //             else {
      //                 return 0;
      //             }
      //         };
      //
      //         // Init with empty manifest url for testing custom manifest
      //         this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
      //
      //         // Setup the verification callback, but we don't have md5 check function yet, so only print some message
      //         // Return true if the verification passed, otherwise return false
      //         this._am.setVerifyCallback(function (path, asset) {
      //             // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
      //             var compressed = asset.compressed;
      //             // Retrieve the correct md5 value.
      //             var expectedMD5 = asset.md5;
      //             // asset.path is relative path and path is absolute.
      //             var relativePath = asset.path;
      //             // The size of asset file, but this value could be absent.
      //             var size = asset.size;
      //             if (compressed) {
      //                 //  cc.log("Verification passed : " + relativePath);
      //                 return true;
      //             }
      //             else {
      //                 //  cc.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
      //                 return true;
      //             }
      //         });
      //         if (cc.sys.os === cc.sys.OS_ANDROID) {
      //             // Some Android device may slow down the download process when concurrent tasks is too much.
      //             // The value may not be accurate, please do more test and find what's most suitable for your game.
      //             this._am.setMaxConcurrentTask(10);
      //         }
      //         this.checkUpdate();
      //
      //     }
      //     start() {
      //         console.log(" HotUpdate start")
      //         // Utils.getGetDeviceId();
      //         if (cc.sys.isBrowser) {
      //
      //             // Global.loadTextConfig();
      //             // LoadConfig.getInstance().pushDataEco();
      //         }
      //
      //     }
      //     loadGame() {
      //         this.loadingGameComp.startGame();
      //
      //     }
      //
      //     onDestroy() {
      //         if (this._updateListener) {
      //             this._am.setEventCallback(null);
      //             this._updateListener = null;
      //         }
      //     }
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BundleControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, assetManager, director, macro, sys, Component, BundleControl;
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
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      director = module.director;
      macro = module.macro;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      BundleControl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "06c935DvwpCJ5nCCvhzAwFf", "Loading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Loading = exports('default', (_dec = ccclass("Loading"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Loading, _Component);
        function Loading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblStatus", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbTips", _descriptor2, _assertThisInitialized(_this));
          //    // @property(cc.Slider)
          //    // nodeSlider: cc.Slider = null;
          //    // @property(cc.Slider)
          //    // slider :cc.Slider = null;
          _initializerDefineProperty(_this, "spriteProgress", _descriptor3, _assertThisInitialized(_this));
          _this.listSkeData = [];
          _this.listTips = [{
            vi: "Đừng quên đăng nhập hàng ngày để nhận thưởng Điểm Danh bạn nhé!",
            en: "Dont forget login every day to get free attendance bonus!"
          }, {
            vi: "Tiến Lên Miền Nam: Chống gian lận,an toàn tuyệt đối",
            en: "Killer 13: Anti cheating,absolute safety"
          }, {
            vi: "Nạp đầu nhận thưởng lên tới 790K",
            en: "First cash-in can receive bonus up to 790K"
          }, {
            vi: "Bộ phận chăm sóc khách hàng luôn online 24/24 bạn nhé!",
            en: "Customer care team support online 24/24!"
          }, {
            vi: "SUVIP nạp rút nhanh chóng và an toàn!",
            en: "SUVIP quick cashin,cashout and alway safety!"
          }];
          return _this;
        }
        var _proto = Loading.prototype;
        _proto.start = function start() {
          assetManager.downloader.maxConcurrency = 24;
          assetManager.downloader.maxRequestsPerFrame = 8;
        };
        _proto.startGame = function startGame() {
          this.lblStatus.string = "Tải tài nguyên từ máy chủ...";
          this.spriteProgress.fillRange = 0;
          // this.nodeSlider.progress = 0;

          this.loadLobby();
        };
        _proto.loadScriptCore = function loadScriptCore() {
          var _this2 = this;
          BundleControl.loadBundle("ScriptCore", function (bundle) {
            _this2.loadLobby();
          });
        };
        _proto.loadLobby = function loadLobby() {
          var self = this;
          var time = new Date().getTime();
          BundleControl.loadBundle("Lobby", function (bundle) {
            BundleControl.BundleLobby = bundle;
            bundle.loadScene("Lobby", function (finish, total, item) {
              self.lblStatus.string = "Loading: " + Math.round(finish / total * 100) + "%";
              self.spriteProgress.fillRange = finish / total * 1;
              // self.nodeSlider.progress = self.spriteProgress.fillRange;
            }, function (err1, scene) {
              //
              //   if (err1 != null) {
              //     log("Error Load Scene Lobby:", JSON.stringify(err1));
              //   }
              //   Global.BundleLobby.loadDir("prefabs",(finish, total) => {
              //     self.lblStatus.string =
              //     "Loading: " + (90+ Math.round((finish / total) * 10)) + "%";
              //   self.spriteProgress.fillRange = 0.9+ finish / total* 0.10;
              //     console.log( "loadDir: "  + 90+ Math.round((finish / total) * 10) + "%");
              //            },
              //  (err, arrPrefab) => {
              // console.log( "loadDir Loading: Complete" );

              director.runScene(scene);
            });
            // console.log("load PopupLogin=======");
            // bundle.load("prefabs/PopupLogin", (err, prefab) => {
            //   if (err) {
            //     director.runScene(scene);
            //     return;
            //   } else {
            //     console.log("load PopupRegister=======");
            //     bundle.load("prefabs/PopupRegister", (err2, prefab2) => {

            //     });
            //   }
            // });
            // let time2 = new Date().getTime();
            // log("Time Delta=" + (time2 - time) / 1000);
          });
          // });
        };

        _proto.showTips = function showTips() {
          var _this3 = this;
          var self = this;
          this.schedule(function () {
            self.lbTips.string = _this3.getStrTips();
          }, 3.0, macro.REPEAT_FOREVER, 0.1);
        };
        _proto.getStrTips = function getStrTips() {
          var langCode = sys.localStorage.getItem("langCode");
          if (langCode == null) {
            langCode = "vi";
          }
          var strTip = this.listTips[this.randomRangeInt(0, this.listTips.length)];
          return strTip[langCode];
        };
        _proto.randomRangeInt = function randomRangeInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        };
        return Loading;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblStatus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteProgress", [_dec4], {
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

System.register("chunks:///_virtual/main", ['./DropDown.ts', './DropDownItem.ts', './DropDownOptionData.ts', './BundleControl.ts', './HotUpdate.ts', './Loading.ts', './SuperConfig.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SuperConfig.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b055gx/21CZaLQ69b4eRmg", "SuperConfig", undefined);
      var SuperConfig = exports('default', function SuperConfig() {});
      SuperConfig.G88_KEY_DECRYPT_CONFIG = sys.isBrowser ? "YeJqQu2yr1E4kWY1G1QpZyj0ZkPYJJSgNI5nUouA4Pw=" : "StA/zuCaB9aqqrUQd85rtw8/3933wQa28zhSxCUMWTg=";
      SuperConfig.G88_DOMAIN_GET_CONFIG = sys.isBrowser ? 'https://gameapi-alpha.bavenoth.com/api/v1/global/cfinfo' : 'https://config-alpha.bavenoth.com/api/v1/app/info';
      SuperConfig.SuperData = {};
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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