System.register("chunks:///_virtual/SpaceWar", ['./SpaceWar.Lobby.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SpaceWar.Lobby.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PhotonClient.ts', './App.ts', './Utils.ts', './SpaceWarPhotonClient.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Component, PhotonClient, App, Utils, SpaceWarPhotonClient;
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
      Component = module.Component;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      SpaceWarPhotonClient = module.SpaceWarPhotonClient;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "a8cc0XpOrNN7JfHEzsXJkop", "SpaceWar.Lobby", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SpaceWarLobby = exports('SpaceWarLobby', (_dec = ccclass('SpaceWarLobby'), _dec2 = menu('SpaceWar/Lobby'), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpaceWarLobby, _Component);
        function SpaceWarLobby() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblLoginStatus", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGoldBalance", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGemBalance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor4, _assertThisInitialized(_this));
          _this.photonClient = null;
          return _this;
        }
        var _proto = SpaceWarLobby.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.photonClient = SpaceWarPhotonClient.getInstance();
          this.photonClient.connect();
          this.photonClient.addResponseListener(PhotonClient.EOperationCodes.Account, function (res) {
            if (res.errCode < 0) {
              _this2.lblLoginStatus.string = 'Login failed';
              App.instance.showErrLoading(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            App.instance.showLoading(false);
            _this2.photonClient.isLoggedIn = true;
            _this2.lblLoginStatus.string = 'Login successful';
            var IAccountModel = JSON.parse(res.vals[SpaceWarPhotonClient.EParameterCodes.LoginResponse]);
            _this2.lblGoldBalance.string = "Gold: " + Utils.formatNumber(IAccountModel.go);
            _this2.lblGemBalance.string = "Gem: " + Utils.formatNumber(IAccountModel.ge);
            _this2.sprAvatar.spriteFrame = App.instance.getAvatarSpriteFrame(IAccountModel.ai);
          });
        };
        _proto.dismiss = function dismiss() {
          App.instance.gotoLobby();
          SpaceWarPhotonClient.getInstance().peer.disconnect();
        };
        return SpaceWarLobby;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblLoginStatus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblGoldBalance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblGemBalance", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec6], {
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
  r('virtual:///prerequisite-imports/SpaceWar', 'chunks:///_virtual/SpaceWar'); 
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