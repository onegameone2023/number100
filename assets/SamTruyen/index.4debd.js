System.register("chunks:///_virtual/BigWinController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b6a37y3GaVCZYAlGj8goubK", "BigWinController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BigWinController = exports('BigWinController', (_dec = ccclass('BigWinController'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BigWinController, _Component);
        function BigWinController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BalanceLabel", _descriptor, _assertThisInitialized(_this));
          _this.currentScore = 0;
          _this.targetScore = 0;
          return _this;
        }
        var _proto = BigWinController.prototype;
        _proto.setData = function setData(balance) {
          this.targetScore = balance;
          this.currentScore = 0;
        };
        _proto.updateBalanceDislay = function updateBalanceDislay() {
          if (this.BalanceLabel) {
            this.BalanceLabel.string = Math.floor(this.currentScore).toLocaleString('vi');
          }
        };
        _proto.update = function update(dt) {
          if (this.currentScore !== this.targetScore) {
            var step = 10000 * dt;
            var delta = Math.sign(this.targetScore - this.currentScore) * step;
            if (Math.abs(this.targetScore - this.currentScore) <= step) {
              this.currentScore = this.targetScore;
            } else {
              this.currentScore += delta;
            }
            this.updateBalanceDislay();
          }
        };
        return BigWinController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "BalanceLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyen", ['./BigWinController.ts', './SamTruyen.Utils.ts', './SamTruyen.const.ts', './SamTruyen.schema.ts', './SamTruyenAudioController.ts', './SamTruyenAutoSpinController.ts', './SamTruyenBonusButtonItemController.ts', './SamTruyenBoxItemController.ts', './SamTruyenController.ts', './SamTruyenData.ts', './SamTruyenGuidelineController.ts', './SamTruyenHistoryController.ts', './SamTruyenHistoryItemController.ts', './SamTruyenItemController.ts', './SamTruyenLoadingController.ts', './SamTruyenNetWorkController.ts', './SamTruyenPopUpController.ts', './SamTruyenRankController.ts', './SamTruyenRankItemController.ts', './SamTruyenScatterContrller.ts', './SamTruyenScopionController.ts', './SamTruyenWinPopUp.ts', './SamTruyenX2Controller.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SamTruyen.const.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b016dcs5YRI1IBU9r69m+WM", "SamTruyen.const", undefined);
      var spinData = exports('spinData', [{
        AccumulateItems: 0,
        BonusGameData: null,
        GameStatus: 1,
        IsAccumulate: false,
        IsFreeSpin: false,
        IsJackpot: false,
        IsLastFreeSpin: false,
        Jackpot: 511000,
        JackpotNum: 0,
        PayLinePrizeValue: 0,
        PositionData: "",
        PrizesData: "",
        ResponseStatus: 0,
        SlotsData: "6,10,9,7,11,10,1,11,10,6,8,4,2,11,11",
        SpinID: 77491,
        StartBonus: 0,
        TicketBalance: 0,
        TotalBetValue: 2500,
        TotalFreeSpin: 0,
        TotalLines: 25,
        X2StartValue: 0
      }, {
        AccumulateItems: 0,
        BonusGameData: null,
        GameStatus: 1,
        IsAccumulate: true,
        IsFreeSpin: false,
        IsJackpot: false,
        IsLastFreeSpin: false,
        Jackpot: 511500,
        JackpotNum: 0,
        PayLinePrizeValue: 16500,
        PositionData: "11,12,13,14,15;1,2,8,14,15;11,12,8,4;6,2,8,14;1,2,13,4;1,12,13,14;11,2,13,4,15",
        PrizesData: "3,22,2500;8,22,2500;9,23,1000;11,11,6000;18,23,1000;20,23,1000;25,22,2500",
        ResponseStatus: 0,
        SlotsData: "10,1,11,10,11,6,9,1,11,10,10,10,10,1,1",
        SpinID: 77593,
        StartBonus: 0,
        TicketBalance: 0,
        TotalBetValue: 2500,
        TotalFreeSpin: 0,
        TotalLines: 25,
        X2StartValue: 16500
      }, {
        AccumulateItems: 0,
        BonusGameData: null,
        GameStatus: 1,
        IsAccumulate: true,
        IsFreeSpin: false,
        IsJackpot: false,
        IsLastFreeSpin: false,
        Jackpot: 511500,
        JackpotNum: 0,
        PayLinePrizeValue: 3300,
        PositionData: "1,2,3;11,12,3;11,2;6,2,13;1,12,3;11,2",
        PrizesData: "2,21,500;19,21,500;21,34,800;22,27,200;24,21,500;25,34,800",
        ResponseStatus: 0,
        SlotsData: "9,1,9,10,7,11,10,7,9,3,1,9,11,11,11",
        SpinID: 77575,
        StartBonus: 0,
        TicketBalance: 0,
        TotalBetValue: 0,
        TotalFreeSpin: 4,
        TotalLines: 25,
        X2StartValue: 4700
      }, {
        AccumulateItems: 0,
        BonusGameData: null,
        GameStatus: 1,
        IsAccumulate: false,
        IsFreeSpin: false,
        IsJackpot: false,
        IsLastFreeSpin: false,
        Jackpot: 511500,
        JackpotNum: 0,
        PayLinePrizeValue: 700,
        PositionData: "6,7,8;6,12,8,4",
        PrizesData: "1,27,200;10,26,500",
        ResponseStatus: 0,
        SlotsData: "9,10,7,11,10,11,1,11,6,5,3,11,10,8,11",
        SpinID: 77596,
        StartBonus: 0,
        TicketBalance: 0,
        TotalBetValue: 2500,
        TotalFreeSpin: 0,
        TotalLines: 25,
        X2StartValue: 700
      }, {
        AccumulateItems: 0,
        BonusGameData: null,
        GameStatus: 1,
        IsAccumulate: true,
        IsFreeSpin: false,
        IsJackpot: false,
        IsLastFreeSpin: false,
        Jackpot: 511500,
        JackpotNum: 0,
        PayLinePrizeValue: 8300,
        PositionData: "6,7,8;6,12,8,4;6,7,3;11,12,3,14;1,12,13;6,12,3;1,12,3",
        PrizesData: "1,24,300;10,23,1000;16,24,300;19,11,6000;20,27,200;23,24,300;24,27,200",
        ResponseStatus: 0,
        SlotsData: "11,4,1,10,11,10,10,10,11,9,6,1,11,6,10",
        SpinID: 77599,
        StartBonus: 0,
        TicketBalance: 0,
        TotalBetValue: 2500,
        TotalFreeSpin: 0,
        TotalLines: 25,
        X2StartValue: 8300
      }, {
        AccumulateItems: 0,
        BonusGameData: null,
        GameStatus: 1,
        IsAccumulate: false,
        IsFreeSpin: false,
        IsJackpot: false,
        IsLastFreeSpin: false,
        Jackpot: 511500,
        JackpotNum: 0,
        PayLinePrizeValue: 500,
        PositionData: "6,2,13",
        PrizesData: "22,21,500",
        ResponseStatus: 0,
        SlotsData: "11,1,10,10,8,9,5,8,11,10,7,11,9,6,5",
        SpinID: 77611,
        StartBonus: 0,
        TicketBalance: 0,
        TotalBetValue: 2500,
        TotalFreeSpin: 0,
        TotalLines: 25,
        X2StartValue: 500
      }]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyen.schema.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4f96eKkw95FqonIC7LRv/xD", "SamTruyen.schema", undefined);
      var SOUND_ID = exports('SOUND_ID', /*#__PURE__*/function (SOUND_ID) {
        SOUND_ID[SOUND_ID["BIG_WIN"] = 0] = "BIG_WIN";
        SOUND_ID[SOUND_ID["SCOPION_HIT"] = 1] = "SCOPION_HIT";
        SOUND_ID[SOUND_ID["BONUS"] = 2] = "BONUS";
        SOUND_ID[SOUND_ID["BUTTON_BET"] = 3] = "BUTTON_BET";
        SOUND_ID[SOUND_ID["BUTTON_DOUBLE"] = 4] = "BUTTON_DOUBLE";
        SOUND_ID[SOUND_ID["BUTTON_LINE"] = 5] = "BUTTON_LINE";
        SOUND_ID[SOUND_ID["BUTTON_START"] = 6] = "BUTTON_START";
        SOUND_ID[SOUND_ID["GAME_BONUS_START"] = 7] = "GAME_BONUS_START";
        SOUND_ID[SOUND_ID["GAME_BONUS_END"] = 8] = "GAME_BONUS_END";
        SOUND_ID[SOUND_ID["GAME_TREASURE"] = 9] = "GAME_TREASURE";
        SOUND_ID[SOUND_ID["GAME_TREASURE_END"] = 10] = "GAME_TREASURE_END";
        SOUND_ID[SOUND_ID["JACKPOT"] = 11] = "JACKPOT";
        SOUND_ID[SOUND_ID["TREASURE_COMPLETE"] = 12] = "TREASURE_COMPLETE";
        SOUND_ID[SOUND_ID["SPIN_START"] = 13] = "SPIN_START";
        SOUND_ID[SOUND_ID["SPIN_REEL"] = 14] = "SPIN_REEL";
        SOUND_ID[SOUND_ID["SPIN_END"] = 15] = "SPIN_END";
        SOUND_ID[SOUND_ID["SELECT_DOUBLE"] = 16] = "SELECT_DOUBLE";
        SOUND_ID[SOUND_ID["SELECT_DOUBLE_LOSE"] = 17] = "SELECT_DOUBLE_LOSE";
        SOUND_ID[SOUND_ID["SELECT_DOUBLE_WIN"] = 18] = "SELECT_DOUBLE_WIN";
        SOUND_ID[SOUND_ID["MONEY_UP"] = 19] = "MONEY_UP";
        SOUND_ID[SOUND_ID["FREE_SPIN"] = 20] = "FREE_SPIN";
        SOUND_ID[SOUND_ID["RESULT"] = 21] = "RESULT";
        return SOUND_ID;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyen.Utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        formatDateTime: formatDateTime,
        splitNumberFromString: splitNumberFromString
      });
      cclegacy._RF.push({}, "0c318oyn49DnItEutYmkDEw", "SamTruyen.Utils", undefined);
      function splitNumberFromString(str) {
        if (!str) return [];
        return str.split(/[,;]/).map(function (item) {
          return Number(item.trim());
        }).filter(function (num) {
          return !isNaN(num);
        });
      }
      function formatDateTime(isoString) {
        var date = new Date(isoString);
        var pad = function pad(n) {
          return n.toString().padStart(2, "0");
        };
        var hh = pad(date.getHours());
        var mm = pad(date.getMinutes());
        var ss = pad(date.getSeconds());
        var dd = pad(date.getDate());
        var MM = pad(date.getMonth() + 1);
        var yyyy = date.getFullYear();
        return hh + ":" + mm + ":" + ss + " " + dd + "/" + MM + "/" + yyyy;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenAudioController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, AudioSource, Node, AudioClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Node = module.Node;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "17a10xhYzpG0pO7Npvdalum", "SamTruyenAudioController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenAudioController = exports('SamTruyenAudioController', (_dec = ccclass("SamTruyenAudioController"), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([AudioClip]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenAudioController, _Component);
        function SamTruyenAudioController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgmSource", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxSource", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "muteBGM", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "muteSFX", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxList", _descriptor5, _assertThisInitialized(_this));
          _this.isBgmOn = true;
          _this.isSfxOn = true;
          return _this;
        }
        var _proto = SamTruyenAudioController.prototype;
        _proto.onLoad = function onLoad() {
          if (SamTruyenAudioController._instance) {
            this.destroy();
            return;
          }
          SamTruyenAudioController._instance = this;
          this.isBgmOn = localStorage.getItem("bgmOn") !== "0";
          this.isSfxOn = localStorage.getItem("sfxOn") !== "0";
          this.bgmSource.volume = !this.isBgmOn ? 0 : 1;
          this.sfxSource.volume = !this.isSfxOn ? 0 : 1;
          if (this.muteBGM) {
            this.muteBGM.active = !this.isBgmOn;
          }
          if (this.muteSFX) {
            this.muteSFX.active = !this.isSfxOn;
          }
          if (this.isBgmOn && !this.bgmSource.playing) {
            this.bgmSource.play();
          }
        };
        _proto.toggleBgm = function toggleBgm() {
          this.isBgmOn = !this.isBgmOn;
          localStorage.setItem("bgmOn", this.isBgmOn ? "1" : "0");
          this.bgmSource.volume = !this.isBgmOn ? 0 : 1;
          if (this.isBgmOn && !this.bgmSource.playing) {
            this.bgmSource.play();
          }
          if (this.muteBGM) {
            this.muteBGM.active = !this.isBgmOn;
          }
        };
        _proto.toggleSfx = function toggleSfx() {
          this.isSfxOn = !this.isSfxOn;
          localStorage.setItem("sfxOn", this.isSfxOn ? "1" : "0");
          this.sfxSource.volume = !this.isSfxOn ? 0 : 1;
          if (this.muteSFX) {
            this.muteSFX.active = !this.isSfxOn;
          }
        };
        _proto.playSfx = function playSfx(index) {
          if (this.isSfxOn && this.sfxList[index]) {
            this.sfxSource.playOneShot(this.sfxList[index]);
          }
        };
        _createClass(SamTruyenAudioController, null, [{
          key: "Instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return SamTruyenAudioController;
      }(Component), _class3._instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfxSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "muteBGM", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "muteSFX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sfxList", [_dec6], {
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

System.register("chunks:///_virtual/SamTruyenAutoSpinController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, SamTruyenController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      SamTruyenController = module.SamTruyenController;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0695535fQFJ6KzJrdZBKJtx", "SamTruyenAutoSpinController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenAutoSpinController = exports('SamTruyenAutoSpinController', (_dec = ccclass("SamTruyenAutoSpinController"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenAutoSpinController, _Component);
        function SamTruyenAutoSpinController() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SamTruyenAutoSpinController.prototype;
        _proto.clickBetValue10 = function clickBetValue10() {
          SamTruyenController.Instance.setAutoValue(10);
        };
        _proto.clickBetValue25 = function clickBetValue25() {
          SamTruyenController.Instance.setAutoValue(25);
        };
        _proto.clickBetValue50 = function clickBetValue50() {
          SamTruyenController.Instance.setAutoValue(50);
        };
        _proto.clickBetValue100 = function clickBetValue100() {
          SamTruyenController.Instance.setAutoValue(100);
        };
        _proto.clickBetValue200 = function clickBetValue200() {
          SamTruyenController.Instance.setAutoValue(200);
        };
        _proto.clickBetValue500 = function clickBetValue500() {
          SamTruyenController.Instance.setAutoValue(500);
        };
        _proto.clickBetValue1000 = function clickBetValue1000() {
          SamTruyenController.Instance.setAutoValue(1000);
        };
        _proto.clickBetValue5000 = function clickBetValue5000() {
          SamTruyenController.Instance.setAutoValue(5000);
        };
        _proto.onClickSpin = function onClickSpin() {
          SamTruyenController.Instance.setAutoSpin();
        };
        return SamTruyenAutoSpinController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenBonusButtonItemController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteFrame, Node, Sprite, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Sprite = module.Sprite;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "442d5UYmm9KXJ7JqRRATkPg", "SamTruyenBonusButtonItemController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenBonusButtonItemController = exports('SamTruyenBonusButtonItemController', (_dec = ccclass("SamTruyenBonusButtonItemController"), _dec2 = property(SpriteFrame), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenBonusButtonItemController, _Component);
        function SamTruyenBonusButtonItemController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bonusSprites", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effect", _descriptor2, _assertThisInitialized(_this));
          _this.bonusSprite = void 0;
          _this.isLocking = false;
          _this.isOpened = false;
          _this.bonusId = void 0;
          _this.callback = void 0;
          return _this;
        }
        var _proto = SamTruyenBonusButtonItemController.prototype;
        _proto.onLoad = function onLoad() {
          this.bonusSprite = this.getComponent(Sprite);
        };
        _proto.setData = function setData(id, cb) {
          this.bonusId = id;
          this.isLocking = false;
          this.isOpened = false;
          if (this.bonusSprite && this.bonusSprites[0]) {
            this.bonusSprite.spriteFrame = this.bonusSprites[0];
          }
          if (this.effect) {
            this.effect.active = false;
          }
          this.callback = cb;
        };
        _proto.openBonus = function openBonus(id) {
          var _this2 = this;
          tween(this.node).to(0.5, {
            scale: new Vec3(0, 1, 1)
          }, {
            easing: "bounceIn"
          }).call(function () {
            if (_this2.bonusSprite && _this2.bonusSprites[id]) {
              _this2.bonusSprite.spriteFrame = _this2.bonusSprites[id];
            }
            tween(_this2.node).to(0.5, {
              scale: Vec3.ONE
            }, {
              easing: "bounceOut"
            }).start();
          }).start();
        };
        _proto.setLocking = function setLocking() {
          this.isLocking = true;
        };
        _proto.onClick = function onClick() {
          var _this3 = this;
          if (this.isLocking) return;
          this.isLocking = true;
          this.isOpened = true;
          this.callback && this.callback();
          tween(this.node).to(0.5, {
            scale: new Vec3(0, 1, 1)
          }, {
            easing: "bounceIn"
          }).call(function () {
            if (_this3.bonusSprite && _this3.bonusSprites[_this3.bonusId]) {
              _this3.bonusSprite.spriteFrame = _this3.bonusSprites[_this3.bonusId];
            }
            tween(_this3.node).to(0.5, {
              scale: Vec3.ONE
            }, {
              easing: "bounceOut"
            }).call(function () {
              if (_this3.effect) {
                _this3.effect.active = true;
              }
              _this3.node.setSiblingIndex(0);
            }).start();
          }).start();
        };
        _createClass(SamTruyenBonusButtonItemController, [{
          key: "IsOpened",
          get: function get() {
            return this.isOpened;
          }
        }]);
        return SamTruyenBonusButtonItemController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bonusSprites", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenBoxItemController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Animation, Sprite, Vec3, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Animation = module.Animation;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "21590STwK1IBY6ti8s/ewTu", "SamTruyenBoxItemController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenBoxItemController = exports('SamTruyenBoxItemController', (_dec = ccclass("SamTruyenBoxItemController"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenBoxItemController, _Component);
        function SamTruyenBoxItemController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.anim = void 0;
          _initializerDefineProperty(_this, "Item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Fail", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Hit", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ItemFrames", _descriptor4, _assertThisInitialized(_this));
          _this.isLock = false;
          _this.data = void 0;
          _this.onClickEvent = void 0;
          return _this;
        }
        var _proto = SamTruyenBoxItemController.prototype;
        _proto.start = function start() {
          this.anim = this.getComponent(Animation);
          this.anim.on(Animation.EventType.FINISHED, this.onFinishedAnimation, this);
        };
        _proto.setData = function setData(index, cb) {
          this.isLock = false;
          this.Item.active = false;
          var comp = this.getComponent(Sprite);
          if (comp) {
            comp.enabled = true;
            if (index) {
              if (this.Hit) this.Hit.active = true;
              if (this.Fail) this.Fail.active = false;
            } else {
              if (this.Hit) this.Hit.active = false;
              if (this.Fail) this.Fail.active = true;
            }
          }
          var light = this.node.getChildByName("LightEffect");
          if (light) light.active = false;
          this.onClickEvent = cb;
        };
        _proto.openBox = function openBox(index) {
          this.isLock = true;
          this.getComponent(Sprite).enabled = false;
          if (this.Item) {
            var itemSpr = this.Item.getComponent(Sprite);
            if (itemSpr) {
              itemSpr.spriteFrame = this.ItemFrames[0];
            }
          }
          if (index) {
            if (this.Hit) this.Hit.active = true;
            if (this.Fail) this.Fail.active = false;
          } else {
            if (this.Hit) this.Hit.active = false;
            if (this.Fail) this.Fail.active = true;
          }
          this.onFinishedAnimation();
        };
        _proto.onClick = function onClick() {
          var _this2 = this;
          if (this.isLock) return;
          this.isLock = true;
          if (this.anim) {
            var state = this.anim.getState("ThunderHit");
            if (state) {
              this.anim.play("ThunderHit");
            }
          }
          this.getComponent(Sprite).enabled = false;
          if (this.Item) {
            var itemSpr = this.Item.getComponent(Sprite);
            if (itemSpr) {
              itemSpr.spriteFrame = this.ItemFrames[1];
            }
          }
          this.scheduleOnce(function () {
            _this2.onClickEvent && _this2.onClickEvent();
          }, 1.5);
        };
        _proto.onFinishedAnimation = function onFinishedAnimation() {
          if (!this.anim) return;
          if (!this.Item) return;
          var startY = this.Item.position.clone();
          this.Item.position = Vec3.ZERO;
          this.Item.active = true;
          var uo = this.Item.getComponent(UIOpacity);
          if (uo) {
            uo.opacity = 0;
            tween(uo).to(0.25, {
              opacity: 255
            }, {
              easing: "smooth"
            }).start();
          }
          tween(this.Item).to(0.5, {
            position: startY
          }, {
            easing: "smooth"
          }).start();
        };
        _createClass(SamTruyenBoxItemController, [{
          key: "IsSelected",
          get: function get() {
            return this.isLock;
          }
        }]);
        return SamTruyenBoxItemController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Fail", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Hit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ItemFrames", [_dec5], {
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

System.register("chunks:///_virtual/SamTruyenController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenNetWorkController.ts', './App.ts', './Utils.ts', './Config.ts', './SamTruyen.schema.ts', './SamTruyenData.ts', './SamTruyenItemController.ts', './BundleControl.ts', './SamTruyen.Utils.ts', './SamTruyenPopUpController.ts', './SamTruyenScatterContrller.ts', './SamTruyenX2Controller.ts', './SamTruyenAudioController.ts', './SamTruyen.const.ts', './Http.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Label, Node, Button, Animation, Toggle, tween, Vec3, Component, SamTruyenNetWork, App, Utils, Configs, SOUND_ID, SamTruyenData, SamTruyenItemController, BundleControl, splitNumberFromString, SamTruyenPopUpController, SamTruyenScatterContrller, SamTruyenX2Controller, SamTruyenAudioController, spinData, Http;
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
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      Animation = module.Animation;
      Toggle = module.Toggle;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      SamTruyenNetWork = module.SamTruyenNetWork;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      SOUND_ID = module.SOUND_ID;
    }, function (module) {
      SamTruyenData = module.SamTruyenData;
    }, function (module) {
      SamTruyenItemController = module.SamTruyenItemController;
    }, function (module) {
      BundleControl = module.default;
    }, function (module) {
      splitNumberFromString = module.splitNumberFromString;
    }, function (module) {
      SamTruyenPopUpController = module.SamTruyenPopUpController;
    }, function (module) {
      SamTruyenScatterContrller = module.SamTruyenScatterContrller;
    }, function (module) {
      SamTruyenX2Controller = module.SamTruyenX2Controller;
    }, function (module) {
      SamTruyenAudioController = module.SamTruyenAudioController;
    }, function (module) {
      spinData = module.spinData;
    }, function (module) {
      Http = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _class3;
      cclegacy._RF.push({}, "c2658J2SslF3rSU7MfOZT04", "SamTruyenController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenController = exports('SamTruyenController', (_dec = ccclass("SamTruyenController"), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Button), _dec21 = property(Animation), _dec22 = property(Animation), _dec23 = property(Toggle), _dec24 = property(SamTruyenPopUpController), _dec25 = property(SamTruyenItemController), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenController, _Component);
        function SamTruyenController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "AvatarNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "NameLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "GoldLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BetLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TotalBetLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TotalWinLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "JackpotLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LineLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Content", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Line", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnPlus", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnStopAuto", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LayoutBtns", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Loading", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "GameNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScatterNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X2Node", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SessionLabel", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X2Button", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Hades", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Athena", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "PlayingGameModeToggle", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "PopUp", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Items", _descriptor24, _assertThisInitialized(_this));
          _this._gameData = null;
          _this.roomId = 1;
          _this.delayBetween = 0.2;
          _this.spinDuration = 1;
          _this.columnHeight = 542;
          _this.isSpinning = false;
          _this.isFastSpinMode = false;
          _this.isClickingPlus = false;
          _this.currentJackPot = 0;
          _this.jackpotChange = 0;
          _this.jackpotSpeed = 100000;
          _this.isFreeSpin = false;
          _this.accumulateItemCount = 0;
          _this.isLastFreeSpin = false;
          _this.isPlayingMiniGame = false;
          _this.isLocking = false;
          _this.isAutoSpin = false;
          _this.currentAutoCount = 0;
          _this.currentLine = 0;
          _this.isTryGameMode = false;
          _this.minLine = 1;
          _this.maxLine = 25;
          return _this;
        }
        var _proto = SamTruyenController.prototype;
        _proto.onLoad = function onLoad() {
          SamTruyenController.Instance = this;
          BundleControl.loadBundle("SamTruyen", function () {});
        };
        _proto.start = function start() {
          var _this2 = this;
          if (this.Loading) {
            this.Loading.active = true;
          }
          if (this.GameNode) {
            this.GameNode.active = false;
          }
          this.roomId = 1;
          SamTruyenNetWork.receive("JoinGame", function (data) {
            console.log("Sam Truyen: ", data);
            if (data) {
              _this2._gameData = data;
              _this2.setInfoPlayer();
              _this2.setDataService();
              _this2.switchToMiniGame(_this2._gameData.SpinData.GameStatus);
              if (_this2.SessionLabel) {
                _this2.SessionLabel.string = "#" + _this2._gameData.SpinData.SpinID;
              }
              if (_this2.X2Button) {
                _this2.X2Button.interactable = false;
              }
              _this2.stopX2Game();
            }
          });
          SamTruyenNetWork.receive("UpdateJackPot", function (data) {
            console.log("Update Jackpot: ", data);
            if (data) {
              _this2.jackpotChange = data;
            }
          });
          SamTruyenNetWork.receive("ResultSpin", function (data) {
            console.log("Spin Result: ", data);
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.SPIN_REEL);
            _this2.__onHandleResultSpin(data);
            if (_this2.X2Button) {
              _this2.X2Button.interactable = false;
            }
          });
          SamTruyenNetWork.receive("MessageError", function (code) {
            console.error("Error Sam Truyen: ", code);
          });
          SamTruyenNetWork.receive("resultBonusGame", function (data) {
            console.log("Bonus game: ", data);
            _this2.__onHandleResultBonusGame(data);
          });
          SamTruyenNetWork.receive("ResultX2Game", function (data) {
            console.log("X2 Game: ", data);
            _this2.__onHandleResultX2Game(data);
          });
        };
        _proto.__onHandleResultBonusGame = function __onHandleResultBonusGame(data) {
          if (data) {
            if (data.BonusItemsData && data.BonusItemsData.length) {
              this.__openScatterGame(data);
            } else if (data.BonusPrizeID) {
              if (this.ScatterNode) {
                var comp = this.ScatterNode.getComponent(SamTruyenScatterContrller);
                if (comp) {
                  comp.setPrizeBonusID(data.BonusPrizeID);
                  this.startBonusGame();
                }
              }
            }
          }
        };
        _proto.__onHandleResultX2Game = function __onHandleResultX2Game(data) {
          if (data) {
            if (data.IsStop) {
              if (this.X2Node) this.X2Node.active = false;
            } else {
              this.__openX2Game(data);
            }
          }
        };
        _proto.updateTotalBetValue = function updateTotalBetValue(value) {
          if (this.TotalWinLabel) {
            this.TotalWinLabel.string = value.toLocaleString("vi");
          }
        };
        _proto.__onHandleResultSpin = function __onHandleResultSpin(data) {
          var _this3 = this;
          if (data) {
            this._gameData = data;
            if (this.SessionLabel) {
              this.SessionLabel.string = "#" + this._gameData.SpinData.SpinID;
            }
            this.spinAllColumns();
            if (this._gameData.SpinData.SlotsData) {
              var ids = splitNumberFromString(this._gameData.SpinData.SlotsData);
              for (var i = 0; i <= this.Items.length; i++) {
                if (this.Items[i]) {
                  var id = ids[i];
                  this.Items[i].setData(id);
                }
              }
            }
            if (data.SpinData.PayLinePrizeValue >= data.SpinData.Jackpot) {
              if (this.PopUp) {
                this.PopUp.openJackpot(data.SpinData.PayLinePrizeValue);
              }
            }
            if (data.SpinData.IsFreeSpin) {
              if (!this.isFreeSpin) {
                this.isFreeSpin = true;
                if (this.PopUp) {
                  this.scheduleOnce(function () {
                    _this3.PopUp.openFreeSpin(data.SlotInfo.FreeSpins);
                  }, 1.5);
                }
              }
            }
            if (data.SpinData.PayLinePrizeValue / Number.parseInt(data.BetValue) > 200) {
              if (this.PopUp) {
                this.scheduleOnce(function () {
                  _this3.PopUp.openBigWin(data.SpinData.PayLinePrizeValue);
                }, 1.5);
              }
            }
            if (data.SpinData.AccumulateItems > this.accumulateItemCount) {
              this.accumulateItemCount = data.SpinData.AccumulateItems;
              this.scheduleOnce(function () {
                if (_this3.PopUp) {
                  _this3.PopUp.openTreasureFound();
                }
                _this3.scheduleOnce(function () {
                  _this3.addAccumulateItemOnAthena(data.SpinData.AccumulateItems);
                }, 1);
              }, 1.5);
            }
          }
        };
        _proto.addAccumulateItemOnAthena = function addAccumulateItemOnAthena(itemCount) {
          var _this4 = this;
          if (this.Athena) {
            var items = this.Athena.node.children;
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.GAME_TREASURE_END);
            items.forEach(function (e, i) {
              e.active = i < itemCount;
            });
            if (itemCount == items.length) {
              this.scheduleOnce(function () {
                items.forEach(function (e) {
                  return e.active = false;
                });
                var state = _this4.Athena.getState("Athena");
                if (state) {
                  _this4.Athena.play("Athena");
                  SamTruyenAudioController.Instance.playSfx(SOUND_ID.TREASURE_COMPLETE);
                }
                _this4.scheduleOnce(function () {
                  var state = _this4.Athena.getState("AthenaNormal");
                  if (state) {
                    _this4.Athena.play("AthenaNormal");
                    _this4.accumulateItemCount = 0;
                  }
                }, 10);
              }, 1.5);
            }
          }
        };
        _proto.onStartGame = function onStartGame() {
          if (this.GameNode) {
            this.GameNode.active = true;
          }
          if (this.Loading) {
            this.Loading.active = false;
          }
          SamTruyenNetWork.send("PlayNow", [{
            CurrencyID: Configs.Login.CurrencyID,
            RoomID: this.roomId
          }], function () {});
        };
        _proto.setDataService = function setDataService() {
          var betValue = Number.parseInt(this._gameData.BetValue);
          if (this.BetLabel) {
            this.BetLabel.string = betValue.toLocaleString("vi");
          }
          if (this.TotalBetLabel) {
            this.TotalBetLabel.string = this._gameData.SpinData.TotalBetValue.toLocaleString("vi");
          }
          if (this.TotalWinLabel) {
            this.TotalWinLabel.string = this._gameData.SpinData.PayLinePrizeValue.toLocaleString("vi");
          }
          if (this.LineLabel) {
            this.currentLine = this._gameData.TotalLine == 0 ? 25 : this._gameData.TotalLine;
            this.LineLabel.string = "" + this.currentLine;
          }
        };
        _proto.setAutoValue = function setAutoValue(value) {
          SamTruyenData.CurrentAutoValue = value;
          this.currentAutoCount = value;
        };
        _proto.increaseLine = function increaseLine() {
          if (this.isTryGameMode) {
            App.instance.ShowAlertDialog(App.instance.getTextLang("me35"));
            return;
          }
          if (this.currentLine >= this.maxLine) {
            this.currentLine = this.minLine;
          } else {
            this.currentLine++;
            this.currentLine = Math.min(this.currentLine, this.maxLine);
          }
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.BUTTON_LINE);
          this.updateLineDisplay();
        };
        _proto.decreaseLine = function decreaseLine() {
          if (this.isTryGameMode) {
            App.instance.ShowAlertDialog(App.instance.getTextLang("me35"));
            return;
          }
          if (this.currentLine <= this.minLine) {
            this.currentLine = this.maxLine;
          } else {
            this.currentLine--;
            this.currentLine = Math.max(this.currentLine, this.minLine);
          }
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.BUTTON_LINE);
          this.updateLineDisplay();
        };
        _proto.updateLineDisplay = function updateLineDisplay() {
          if (this.LineLabel) {
            this.LineLabel.string = "" + this.currentLine;
          }
        };
        _proto.setInfoPlayer = function setInfoPlayer() {
          if (this._gameData) {
            var data = this._gameData.Account;
            if (data) {
              if (this.AvatarNode) {
                this.AvatarNode.getComponent(Sprite).spriteFrame = App.instance.sprFrameAvatars[data.Avatar];
              }
              if (this.NameLabel) {
                this.NameLabel.string = data.Username;
              }
              if (this.GoldLabel) {
                var balance = this._gameData.CurrencyID ? Configs.Login.GoldBalance : Configs.Login.CoinBalance;
                this.GoldLabel.string = balance.toLocaleString("vi");
              }
            }
          }
        };
        _proto.goBack = function goBack() {
          SamTruyenNetWork.dontReceive();
          Utils.setStorageValue("last_open_game_id", "");
          App.instance.gotoLobby();
        };
        _proto.spinAllColumns = function spinAllColumns() {
          var _this5 = this;
          if (this.Line) {
            this.Line.active = false;
          }
          var columns = this.Content.children;
          if (columns && columns.length) {
            var _loop = function _loop(i) {
              _this5.scheduleOnce(function () {
                _this5.spinColumn(columns[i], i === 4);
              }, i * _this5.delayBetween);
            };
            for (var i = 0; i < columns.length; i++) {
              _loop(i);
            }
          }
        };
        _proto.spinColumn = function spinColumn(column, isShowLine) {
          var _this6 = this;
          if (!column) return;
          var startY = column.position.y;
          var endY = startY - this.columnHeight * 7;
          tween(column).to(this.spinDuration, {
            position: new Vec3(column.position.x, endY, column.position.z)
          }, {
            easing: "linear"
          }).call(function () {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.SPIN_END);
            tween(column).to(1.5, {
              position: new Vec3(column.position.x, startY, column.position.z)
            }, {
              easing: "elasticOut"
            }).call(function () {
              if (isShowLine) {
                _this6.onFinsishedSpin(_this6._gameData.SpinData.PrizesData, _this6._gameData.SpinData.PositionData);
              }
            }).start();
          }).start();
        };
        _proto.onFinsishedSpin = function onFinsishedSpin(lines, posData) {
          var _this7 = this;
          this.showLine(lines);
          this.showEffect(posData);
          if (!this.isTryGameMode) this.setInfoPlayer();
          this.setDataService();
          this.isSpinning = false;
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.RESULT);
          if (this.isFreeSpin && !this._gameData.SpinData.IsLastFreeSpin) {
            if (this.Hades) {
              var state = this.Hades.getState("FreeSpin");
              if (state) {
                this.Hades.play("FreeSpin");
                this.Hades.once(Animation.EventType.FINISHED, function () {
                  _this7.Hades.play("Hades");
                }, this);
              }
            }
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.FREE_SPIN);
            this.spin();
          }
          if (this._gameData.SpinData.IsLastFreeSpin) {
            this.isFreeSpin = false;
            if (this.PopUp) {
              this.scheduleOnce(function () {
                _this7.PopUp.openWinPopUp(_this7._gameData.SlotInfo.TotalFreeSpinPrizeValue, "Free Spins");
                if (_this7.X2Button) {
                  _this7.X2Button.interactable = true;
                }
              }, 1.5);
            }
          }
          if (this.isAutoSpin) {
            if (this.currentAutoCount > 0) {
              this.currentAutoCount--;
              this.spin();
            } else {
              this.stopAutoSpin();
            }
          }
          this.scheduleOnce(function () {
            _this7.switchToMiniGame(_this7._gameData.SpinData.GameStatus);
          }, 1);
        };
        _proto.showLine = function showLine(lineNum) {
          if (this.Line) {
            this.Line.active = true;
            var lineData = lineNum.split(";");
            var lineIDs = [];
            if (lineData && lineData.length) {
              lineData.forEach(function (e) {
                var id = e.split(",")[0];
                lineIDs.push(Number.parseInt(id));
              });
            }
            var lines = this.Line.children;
            if (lines && lines.length) {
              lines.forEach(function (e, i) {
                lineIDs.forEach(function (index) {
                  var id = index === i + 1;
                  if (id) {
                    e.active = true;
                  }
                });
              });
            }
          }
        };
        _proto.showEffect = function showEffect(posData) {
          var itemsHighlight = splitNumberFromString(posData);
          if (itemsHighlight && itemsHighlight.length) {
            if (this.Items && this.Items.length) {
              this.Items.forEach(function (e, i) {
                var index = i + 1;
                if (index) {
                  if (itemsHighlight.indexOf(index) >= 0) {
                    e.activeEffect();
                  }
                }
              });
            }
          }
        };
        _proto.setFastMode = function setFastMode() {
          this.isFastSpinMode = !this.isFastSpinMode;
          this.delayBetween = this.isFastSpinMode ? 0.1 : 0.2;
          this.spinDuration = this.isFastSpinMode ? 0.5 : 1;
          console.log("Fast mode: ", this.isFastSpinMode);
        };
        _proto.onClickPlus = function onClickPlus() {
          this.isClickingPlus = !this.isClickingPlus;
          if (this.LayoutBtns) {
            this.LayoutBtns.active = this.isClickingPlus;
          }
          if (this.BtnPlus) {
            this.BtnPlus.getChildByName("Add").active = !this.isClickingPlus;
            this.BtnPlus.getChildByName("Close").active = this.isClickingPlus;
          }
        };
        _proto.spin = function spin() {
          var _this8 = this;
          if (this.isSpinning) return;
          if (this.isPlayingMiniGame) return;
          this.isSpinning = true;
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.SPIN_START);
          if (!this.isTryGameMode) {
            SamTruyenNetWork.send("Spin", [{
              CurrencyID: Configs.Login.CurrencyID,
              RoomID: this.roomId,
              TotalLine: this.currentLine
            }], function () {});
          } else {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.SPIN_REEL);
            var index = Math.floor(Math.random() * spinData.length);
            this._gameData.SpinData = spinData[index];
            this.__onHandleResultSpin(this._gameData);
            if (this.X2Button) {
              this.X2Button.interactable = false;
            }
          }
          if (this.Items && this.Items.length) {
            this.Items.forEach(function (e) {
              e.reset();
            });
          }
          this.scheduleOnce(function () {
            if (_this8.Line) {
              var lines = _this8.Line.children;
              lines.forEach(function (e) {
                e.active = false;
              });
            }
          }, 0.5);
        };
        _proto.update = function update(deltaTime) {
          if (this.currentJackPot !== this.jackpotChange) {
            var distance = this.jackpotChange - this.currentJackPot;
            var direction = Math.sign(distance); // +1 hoặc -1
            var step = this.jackpotSpeed * deltaTime * direction;
            if (Math.abs(distance) <= Math.abs(step)) {
              this.currentJackPot = this.jackpotChange;
            } else {
              this.currentJackPot += step;
            }
            this.updateJackpotDisplay();
          }
        };
        _proto.startBonusGame = function startBonusGame() {
          SamTruyenNetWork.send("PlayBonusGameAll", [{
            CurrencyID: Configs.Login.CurrencyID,
            RoomID: this.roomId,
            moneyType: this._gameData.moneyType
          }], function () {});
        };
        _proto.getBonusGamePrizeID = function getBonusGamePrizeID() {
          SamTruyenNetWork.send("PlayBonusGame", [{
            CurrencyID: Configs.Login.CurrencyID,
            RoomID: this.roomId
          }], function () {});
        };
        _proto.startX2Game = function startX2Game() {
          var _this9 = this;
          if (this.isLocking) return;
          this.isLocking = true;
          this.scheduleOnce(function () {
            _this9.isLocking = false;
          }, 1.5);
          SamTruyenNetWork.send("PlayX2Game", [{
            CurrencyID: Configs.Login.CurrencyID,
            RoomID: this.roomId
          }], function () {});
        };
        _proto.stopX2Game = function stopX2Game() {
          var _this10 = this;
          if (this.isLocking) return;
          this.isLocking = true;
          this.scheduleOnce(function () {
            _this10.isLocking = false;
          }, 1.5);
          if (this.X2Node) this.X2Node.active = false;
          SamTruyenNetWork.send("StopX2Game", [{
            CurrencyID: Configs.Login.CurrencyID,
            RoomID: this.roomId
          }], function () {});
        };
        _proto.spinForTicket = function spinForTicket() {
          SamTruyenNetWork.send("SpinForTicket", [{
            CurrencyID: Configs.Login.CurrencyID,
            RoomID: this.roomId
          }], function () {});
        };
        _proto.setAutoSpin = function setAutoSpin() {
          if (this.isTryGameMode) {
            App.instance.ShowAlertDialog(App.instance.getTextLang("me35"));
            return;
          }
          this.isAutoSpin = true;
          this.spin();
          if (this.BtnStopAuto) {
            this.BtnStopAuto.active = true;
          }
        };
        _proto.stopAutoSpin = function stopAutoSpin() {
          this.isAutoSpin = false;
          if (this.BtnStopAuto) {
            this.BtnStopAuto.active = false;
            this.isPlayingMiniGame = false;
          }
        };
        _proto.__openScatterGame = function __openScatterGame(data) {
          var _this11 = this;
          if (this.PopUp) {
            this.PopUp.openBonus();
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.BONUS);
          }
          this.isPlayingMiniGame = true;
          this.scheduleOnce(function () {
            if (_this11.ScatterNode) {
              _this11.ScatterNode.active = true;
              var comp = _this11.ScatterNode.getComponent(SamTruyenScatterContrller);
              if (comp) {
                comp.setData(data, function () {
                  if (_this11.PopUp) {
                    _this11.PopUp.openWinPopUp(data.TotalPrizeValue, "Bonus Game");
                    _this11.isPlayingMiniGame = false;
                    if (_this11.X2Button) {
                      _this11.X2Button.interactable = true;
                    }
                  }
                });
              }
            }
          }, 1.5);
        };
        _proto.__openX2Game = function __openX2Game(data) {
          var _this12 = this;
          this.isPlayingMiniGame = true;
          if (this.X2Node) {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.BUTTON_DOUBLE);
            this.X2Node.active = true;
            var comp = this.X2Node.getComponent(SamTruyenX2Controller);
            if (comp) {
              comp.setData(data, function (val) {
                _this12.updateTotalBetValue(val);
              });
            }
          }
        };
        _proto.updateJackpotDisplay = function updateJackpotDisplay() {
          if (this.JackpotLabel) {
            this.JackpotLabel.string = Math.floor(this.currentJackPot).toLocaleString("vi");
          }
        };
        _proto.switchToMiniGame = function switchToMiniGame(gameStatus) {
          switch (gameStatus) {
            case 1:
              if (this.ScatterNode && !this.isPlayingMiniGame) this.ScatterNode.active = false;
              if (this.X2Node && !this.isPlayingMiniGame) this.X2Node.active = false;
              break;
            case 2:
              if (this.ScatterNode) this.ScatterNode.active = false;
              this.startX2Game();
              break;
            case 3:
              if (this.X2Node) this.X2Node.active = false;
              this.getBonusGamePrizeID();
              break;
            default:
              if (this.ScatterNode) this.ScatterNode.active = false;
              if (this.X2Node) this.X2Node.active = false;
              break;
          }
        };
        _proto.onTogglePlayMode = function onTogglePlayMode() {
          this.isTryGameMode = !this.isTryGameMode;
          if (this.PlayingGameModeToggle) {
            this.PlayingGameModeToggle.isChecked = this.isTryGameMode;
          }
          if (this.isTryGameMode) {
            this.__setTryGameMode();
          } else {
            this.__setRealPlayGameMode();
          }
        };
        _proto.__setTryGameMode = function __setTryGameMode() {
          if (this.GoldLabel) {
            var balance = 500000;
            this.GoldLabel.string = balance.toLocaleString("vi");
            this.currentLine = this.maxLine;
          }
        };
        _proto.__setRealPlayGameMode = function __setRealPlayGameMode() {
          this.onStartGame();
        };
        _proto.openHistory = /*#__PURE__*/function () {
          var _openHistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this13 = this;
            var historyData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.isLocking) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this.isLocking = true;
                  this.scheduleOnce(function () {
                    _this13.isLocking = false;
                  }, 1.5);
                  _context.next = 6;
                  return this.fetchHistory();
                case 6:
                  historyData = _context.sent;
                  console.log("History: ", historyData);
                  if (historyData) {
                    if (this.PopUp) {
                      this.PopUp.openHistoryNode(historyData);
                    }
                  }
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function openHistory() {
            return _openHistory.apply(this, arguments);
          }
          return openHistory;
        }();
        _proto.openTopAccount = /*#__PURE__*/function () {
          var _openTopAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this14 = this;
            var topData;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.isLocking) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this.isLocking = true;
                  this.scheduleOnce(function () {
                    _this14.isLocking = false;
                  }, 1.5);
                  _context2.next = 6;
                  return this.fetchTopAccount();
                case 6:
                  topData = _context2.sent;
                  console.log("Top Account: ", topData);
                  if (topData) {
                    if (this.PopUp) {
                      this.PopUp.openRankNode(topData);
                    }
                  }
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function openTopAccount() {
            return _openTopAccount.apply(this, arguments);
          }
          return openTopAccount;
        }();
        _proto.fetchHistory = function fetchHistory() {
          return new Promise(function (resolve, reject) {
            Http.get(Configs.App.DOMAIN_CONFIG["OLP_GetTransactionLog"], {
              CurrencyID: Configs.Login.CurrencyID,
              type: 4,
              Page: 1,
              PageSize: 10
            }, function (status, response) {
              if (status === 200) {
                resolve(response["d"]);
              } else {
                reject(new Error("Error fetching Jackpot History"));
              }
            });
          });
        };
        _proto.fetchTopAccount = function fetchTopAccount() {
          return new Promise(function (resolve, reject) {
            Http.get(Configs.App.DOMAIN_CONFIG["OLP_GetTransactionLog"], {
              CurrencyID: Configs.Login.CurrencyID,
              Page: 1,
              type: 2,
              PageSize: 10
            }, function (status, response) {
              if (status === 200) {
                resolve(response["d"]);
              } else {
                reject(new Error("Error fetching Top Account"));
              }
            });
          });
        };
        _createClass(SamTruyenController, [{
          key: "GameData",
          get: function get() {
            return this._gameData;
          }
        }, {
          key: "IsTryGameMode",
          get: function get() {
            return this.isTryGameMode;
          }
        }]);
        return SamTruyenController;
      }(Component), _class3.Instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GoldLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "BetLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "TotalBetLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "TotalWinLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "JackpotLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "LineLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Content", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Line", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "BtnPlus", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "BtnStopAuto", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "LayoutBtns", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Loading", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "GameNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "ScatterNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "X2Node", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "SessionLabel", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "X2Button", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Hades", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Athena", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "PlayingGameModeToggle", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "PopUp", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Items", [_dec25], {
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

System.register("chunks:///_virtual/SamTruyenData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5d08fQX5N5HjKSLM9dXAi7u", "SamTruyenData", undefined);
      var SamTruyenDataImp = /*#__PURE__*/function () {
        function SamTruyenDataImp() {
          this._currentAutoValue = 0;
        }
        _createClass(SamTruyenDataImp, [{
          key: "CurrentAutoValue",
          get: function get() {
            return this._currentAutoValue;
          },
          set: function set(val) {
            this._currentAutoValue = val;
          }
        }]);
        return SamTruyenDataImp;
      }();
      var SamTruyenData = exports('SamTruyenData', new SamTruyenDataImp());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenGuidelineController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "59e75RH71ZJg58EuO/BDDKq", "SamTruyenGuidelineController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenGuidelineController = exports('SamTruyenGuidelineController', (_dec = ccclass("SamTruyenGuidelineController"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenGuidelineController, _Component);
        function SamTruyenGuidelineController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Page", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Treasure", _descriptor2, _assertThisInitialized(_this));
          _this.guideLineIndex = 0;
          return _this;
        }
        var _proto = SamTruyenGuidelineController.prototype;
        _proto.onShowGuide = function onShowGuide() {
          var _this2 = this;
          this.node.active = true;
          if (this.Page) {
            this.guideLineIndex = 0;
            var children = this.Page.children;
            children.forEach(function (e, i) {
              e.active = i === _this2.guideLineIndex;
            });
            this.Page.active = true;
          }
          if (this.Treasure) {
            this.Treasure.active = false;
          }
        };
        _proto.onShowTreasure = function onShowTreasure() {
          this.node.active = true;
          if (this.Page) {
            this.Page.active = false;
          }
          if (this.Treasure) {
            this.Treasure.active = true;
          }
        };
        _proto.closeGuideLine = function closeGuideLine() {
          this.node.active = false;
        };
        _proto.increaseLine = function increaseLine() {
          if (this.guideLineIndex >= 3) {
            this.guideLineIndex = 0;
          } else {
            this.guideLineIndex++;
            this.guideLineIndex = Math.min(this.guideLineIndex, 3);
          }
          this.updateGuideLineDisplay();
        };
        _proto.decreaseLine = function decreaseLine() {
          if (this.guideLineIndex <= 0) {
            this.guideLineIndex = 3;
          } else {
            this.guideLineIndex--;
            this.guideLineIndex = Math.max(this.guideLineIndex, 0);
          }
          this.updateGuideLineDisplay();
        };
        _proto.updateGuideLineDisplay = function updateGuideLineDisplay() {
          var _this3 = this;
          var children = this.Page.children;
          children.forEach(function (e, i) {
            e.active = i === _this3.guideLineIndex;
          });
        };
        return SamTruyenGuidelineController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Page", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Treasure", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenHistoryController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenHistoryItemController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Component, SamTruyenHistoryItemController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      SamTruyenHistoryItemController = module.SamTruyenHistoryItemController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "baadbdTFdJPV46X/p6VlJ5f", "SamTruyenHistoryController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenHistoryController = exports('SamTruyenHistoryController', (_dec = ccclass("SamTruyenHistoryController"), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenHistoryController, _Component);
        function SamTruyenHistoryController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "HistoryItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Content", _descriptor2, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = SamTruyenHistoryController.prototype;
        _proto.setData = function setData(data) {
          var _this2 = this;
          if (data && data.length) {
            this._data = data;
            if (this.Content) {
              this.Content.destroyAllChildren();
              this.Content.removeAllChildren();
            }
            data.forEach(function (e) {
              _this2._initHistoryItem(e);
            });
          }
        };
        _proto._initHistoryItem = function _initHistoryItem(data) {
          if (this.HistoryItem) {
            var item = instantiate(this.HistoryItem);
            if (this.Content) {
              this.Content.addChild(item);
            }
            var comp = item.getComponent(SamTruyenHistoryItemController);
            if (comp) {
              comp.setData(data);
            }
          }
        };
        return SamTruyenHistoryController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HistoryItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenHistoryItemController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyen.Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, formatDateTime;
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
      Component = module.Component;
    }, function (module) {
      formatDateTime = module.formatDateTime;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "5f502+VrDJET4Z+x41s52se", "SamTruyenHistoryItemController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenHistoryItemController = exports('SamTruyenHistoryItemController', (_dec = ccclass("SamTruyenHistoryItemController"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenHistoryItemController, _Component);
        function SamTruyenHistoryItemController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "session", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "time", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bet", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lose", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "des", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SamTruyenHistoryItemController.prototype;
        _proto.setData = function setData(data) {
          if (data) {
            if (this.session) this.session.string = "" + data.spinID;
            if (this.time) this.time.string = "" + formatDateTime(data.createTime);
            if (this.bet) this.bet.string = "" + data.betValue;
            if (this.lose) this.lose.string = Number.parseInt(data.totalBetValue).toLocaleString("vi");
            if (this.win) this.win.string = Number.parseInt(data.paylinePrizeValue).toLocaleString("vi");
            if (this.des) this.des.string = "" + (data.totalBetValue ? "PayLine" : "FreeSpin");
          }
        };
        return SamTruyenHistoryItemController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "session", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "des", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenItemController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Sprite, assetManager, SpriteFrame, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6fab9A81BpBmpx5HnxpZxFg", "SamTruyenItemController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenItemController = exports('SamTruyenItemController', (_dec = ccclass("SamTruyenItemController"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenItemController, _Component);
        function SamTruyenItemController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.spr = void 0;
          _this._slotID = void 0;
          return _this;
        }
        var _proto = SamTruyenItemController.prototype;
        _proto.onLoad = function onLoad() {
          this.spr = this.getComponent(Sprite);
        };
        _proto.setData = function setData(id) {
          var _this2 = this;
          if (this.spr) {
            this._slotID = id;
            var bundle = assetManager.getBundle("SamTruyen");
            bundle.load("resource/Item/item-(" + id + ")/spriteFrame", SpriteFrame, function (err, spriteFrames) {
              if (err) {
                console.error("Failed to load atlas:", err);
                return;
              }
              _this2.spr.spriteFrame = spriteFrames;
            });
          }
        };
        _proto.activeEffect = function activeEffect() {
          var effect = this.node.getChildByName("EffectSpecial");
          if (effect) {
            effect.active = true;
          }
        };
        _proto.reset = function reset() {
          var effect = this.node.getChildByName("EffectSpecial");
          if (effect) {
            effect.active = false;
          }
        };
        _createClass(SamTruyenItemController, [{
          key: "SlotID",
          get: function get() {
            return this._slotID;
          }
        }]);
        return SamTruyenItemController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenLoadingController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Label, Component, SamTruyenController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SamTruyenController = module.SamTruyenController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ff04dW01dxLtLhmM5Cg/3id", "SamTruyenLoadingController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenLoadingController = exports('SamTruyenLoadingController', (_dec = ccclass('SamTruyenLoadingController'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenLoadingController, _Component);
        function SamTruyenLoadingController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingBar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingLabel", _descriptor2, _assertThisInitialized(_this));
          _this.maxValue = 0;
          _this.currentValue = 0;
          _this.speed = 200;
          _this.isLoading = false;
          return _this;
        }
        var _proto = SamTruyenLoadingController.prototype;
        _proto.start = function start() {
          if (this.loadingBar) {
            this.maxValue = this.loadingBar.totalLength;
          }
          this.currentValue = 0;
          if (this.loadingLabel) {
            this.loadingLabel.string = this.currentValue + "%";
          }
          this.isLoading = true;
        };
        _proto.update = function update(deltaTime) {
          if (!this.isLoading) return;
          if (this.currentValue < this.maxValue) {
            var progress = this.currentValue / this.maxValue;
            this.currentValue += deltaTime * this.speed;
            if (this.loadingBar) {
              this.loadingBar.progress = progress;
            }
            if (this.loadingLabel) {
              var val = Math.floor(progress * 100);
              this.loadingLabel.string = val + "%";
            }
          } else {
            if (this.loadingLabel) {
              this.isLoading = false;
              this.finishedLoading();
              this.loadingLabel.string = "100%";
            }
          }
        };
        _proto.finishedLoading = function finishedLoading() {
          this.scheduleOnce(function () {
            SamTruyenController.Instance.onStartGame();
          }, 1);
        };
        return SamTruyenLoadingController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenNetWorkController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Network.SignalRClient.ts', './Config.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SignalRClient, Configs;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SignalRClient = module.default;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9d216k86w1N4aclekz7yziR", "SamTruyenNetWorkController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenNetWorkController = exports('SamTruyenNetWorkController', /*#__PURE__*/function (_SignalRClient) {
        _inheritsLoose(SamTruyenNetWorkController, _SignalRClient);
        function SamTruyenNetWorkController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SignalRClient.call.apply(_SignalRClient, [this].concat(args)) || this;
          _this.onSuccess = void 0;
          return _this;
        }
        var _proto = SamTruyenNetWorkController.prototype;
        _proto.onstart = function onstart() {
          this.onSuccess(true);
        };
        _proto.onError = function onError() {
          this.onSuccess(false);
        };
        _proto.connectHub = function connectHub(onSuccess) {
          this.onSuccess = onSuccess;
          _SignalRClient.prototype.connect.call(this, Configs.App.DOMAIN_CONFIG['OlympiaHubUrl']);
        };
        return SamTruyenNetWorkController;
      }(SignalRClient));
      var SamTruyenNetWork = exports('SamTruyenNetWork', new SamTruyenNetWorkController());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenPopUpController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenWinPopUp.ts', './BigWinController.ts', './SamTruyenAudioController.ts', './SamTruyen.schema.ts', './SamTruyenHistoryController.ts', './SamTruyenRankController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, tween, Label, Component, SamTruyenWinPopUp, BigWinController, SamTruyenAudioController, SOUND_ID, SamTruyenHistoryController, SamTruyenRankController;
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
      Vec3 = module.Vec3;
      tween = module.tween;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SamTruyenWinPopUp = module.SamTruyenWinPopUp;
    }, function (module) {
      BigWinController = module.BigWinController;
    }, function (module) {
      SamTruyenAudioController = module.SamTruyenAudioController;
    }, function (module) {
      SOUND_ID = module.SOUND_ID;
    }, function (module) {
      SamTruyenHistoryController = module.SamTruyenHistoryController;
    }, function (module) {
      SamTruyenRankController = module.SamTruyenRankController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "b5349RDPb1Bypx/7FD2EB29", "SamTruyenPopUpController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenPopUpController = exports('SamTruyenPopUpController', (_dec = ccclass("SamTruyenPopUpController"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenPopUpController, _Component);
        function SamTruyenPopUpController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BonusNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "FreeSpinNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "AutoSpinNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "HistoryNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "RankNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BigWinNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "JackpotNode", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TreasureNode", _descriptor9, _assertThisInitialized(_this));
          _this.currentPopUp = void 0;
          return _this;
        }
        var _proto = SamTruyenPopUpController.prototype;
        _proto.__openScreenNode = function __openScreenNode(screen) {
          var child = this.node.children;
          child.forEach(function (e) {
            e.active = false;
          });
          if (screen) {
            this.currentPopUp = screen;
            screen.active = true;
          }
        };
        _proto.__openScreenAndDisappear = function __openScreenAndDisappear(screen, duration) {
          var _this2 = this;
          var child = this.node.children;
          child.forEach(function (e) {
            e.active = false;
          });
          if (screen) {
            this.currentPopUp = screen;
            screen.scale = Vec3.ZERO;
            screen.active = true;
            tween(screen).to(0.5, {
              scale: Vec3.ONE
            }, {
              easing: "elasticOut"
            }).delay(duration).call(function () {
              _this2.closeCurrentPopUp();
            }).start();
          }
        };
        _proto.openAutoSpinNode = function openAutoSpinNode() {
          if (this.AutoSpinNode) {
            this.__openScreenNode(this.AutoSpinNode);
          }
        };
        _proto.openHistoryNode = function openHistoryNode(data) {
          if (this.HistoryNode) {
            this.__openScreenNode(this.HistoryNode);
            var comp = this.HistoryNode.getComponent(SamTruyenHistoryController);
            if (comp) {
              comp.setData(data);
            }
          }
        };
        _proto.openRankNode = function openRankNode(data) {
          if (this.RankNode) {
            this.__openScreenNode(this.RankNode);
            var comp = this.RankNode.getComponent(SamTruyenRankController);
            if (comp) {
              comp.setData(data);
            }
          }
        };
        _proto.openBonus = function openBonus() {
          if (this.BonusNode) {
            this.__openScreenAndDisappear(this.BonusNode, 1);
          }
        };
        _proto.openFreeSpin = function openFreeSpin(count) {
          if (this.FreeSpinNode) {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.BONUS);
            this.__openScreenAndDisappear(this.FreeSpinNode, 2);
            var countLabel = this.FreeSpinNode.getChildByName("WinLabel").getComponent(Label);
            if (countLabel && count > 0) {
              countLabel.string = "" + count;
            }
          }
        };
        _proto.openBigWin = function openBigWin(balance) {
          if (this.BigWinNode) {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.BIG_WIN);
            this.__openScreenAndDisappear(this.BigWinNode, 5);
            var comp = this.BigWinNode.getComponent(BigWinController);
            if (comp) {
              comp.setData(balance);
            }
          }
        };
        _proto.openJackpot = function openJackpot(balance) {
          if (this.JackpotNode) {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.JACKPOT);
            this.scheduleOnce(function () {
              SamTruyenAudioController.Instance.playSfx(SOUND_ID.MONEY_UP);
            }, 1);
            this.__openScreenAndDisappear(this.JackpotNode, 5);
            var comp = this.JackpotNode.getComponent(BigWinController);
            if (comp) {
              comp.setData(balance);
            }
          }
        };
        _proto.openWinPopUp = function openWinPopUp(balance, game) {
          if (this.WinNode) {
            this.__openScreenNode(this.WinNode);
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.BONUS);
            this.scheduleOnce(function () {
              SamTruyenAudioController.Instance.playSfx(SOUND_ID.MONEY_UP);
            }, 1);
            var comp = this.WinNode.getComponent(SamTruyenWinPopUp);
            if (comp) {
              comp.setData(balance, game);
            }
          }
        };
        _proto.openTreasureFound = function openTreasureFound() {
          var _this3 = this;
          if (this.TreasureNode) {
            SamTruyenAudioController.Instance.playSfx(SOUND_ID.GAME_TREASURE);
            if (this.TreasureNode) {
              this.TreasureNode.scale = Vec3.ZERO;
              this.TreasureNode.active = true;
              tween(this.TreasureNode).to(0.5, {
                scale: Vec3.ONE
              }, {
                easing: "elasticOut"
              }).delay(1.0).call(function () {
                _this3.TreasureNode.active = false;
              }).start();
            }
          }
        };
        _proto.closeCurrentPopUp = function closeCurrentPopUp() {
          if (this.currentPopUp) {
            this.currentPopUp.active = false;
            this.currentPopUp = null;
          }
        };
        return SamTruyenPopUpController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BonusNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "FreeSpinNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AutoSpinNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HistoryNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "RankNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "WinNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "BigWinNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "JackpotNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "TreasureNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenRankController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenRankItemController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Component, SamTruyenRankItemController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      SamTruyenRankItemController = module.SamTruyenRankItemController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3cfb2pfNY5K9oDpF9nIQddV", "SamTruyenRankController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenRankController = exports('SamTruyenRankController', (_dec = ccclass("SamTruyenRankController"), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenRankController, _Component);
        function SamTruyenRankController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "RankItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Content", _descriptor2, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = SamTruyenRankController.prototype;
        _proto.setData = function setData(data) {
          var _this2 = this;
          if (data && data.length) {
            this._data = data;
            if (this.Content) {
              this.Content.destroyAllChildren();
              this.Content.removeAllChildren();
            }
            data.forEach(function (e) {
              _this2._initRankItem(e);
            });
          }
        };
        _proto._initRankItem = function _initRankItem(data) {
          if (this.RankItem) {
            var item = instantiate(this.RankItem);
            if (this.Content) {
              this.Content.addChild(item);
            }
            var comp = item.getComponent(SamTruyenRankItemController);
            if (comp) {
              comp.setData(data);
            }
          }
        };
        return SamTruyenRankController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "RankItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenRankItemController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyen.Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, formatDateTime;
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
      Component = module.Component;
    }, function (module) {
      formatDateTime = module.formatDateTime;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b6a53IRbuVDqIAE4iD9HC8n", "SamTruyenRankItemController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenRankItemController = exports('SamTruyenRankItemController', (_dec = ccclass("SamTruyenRankItemController"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenRankItemController, _Component);
        function SamTruyenRankItemController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "time", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bet", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nameLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "des", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SamTruyenRankItemController.prototype;
        _proto.setData = function setData(data) {
          if (data) {
            if (this.nameLabel) this.nameLabel.string = "" + data.nickname;
            if (this.time) this.time.string = "" + formatDateTime(data.createTime);
            if (this.bet) this.bet.string = "" + data.betValue;
            if (this.win) this.win.string = Number.parseInt(data.jackpot).toLocaleString("vi");
            if (this.des) this.des.string = "Jackpot";
          }
        };
        return SamTruyenRankItemController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "des", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenScatterContrller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyenBonusButtonItemController.ts', './SamTruyenScopionController.ts', './SamTruyen.schema.ts', './SamTruyenAudioController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Vec3, tween, Component, SamTruyenBonusButtonItemController, SamTruyenScopionController, SOUND_ID, SamTruyenAudioController;
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
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      SamTruyenBonusButtonItemController = module.SamTruyenBonusButtonItemController;
    }, function (module) {
      SamTruyenScopionController = module.SamTruyenScopionController;
    }, function (module) {
      SOUND_ID = module.SOUND_ID;
    }, function (module) {
      SamTruyenAudioController = module.SamTruyenAudioController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "7090cH0nNVHhZecoJh+Mg8U", "SamTruyenScatterContrller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenScatterContrller = exports('SamTruyenScatterContrller', (_dec = ccclass("SamTruyenScatterContrller"), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SamTruyenScopionController), _dec6 = property(SamTruyenBonusButtonItemController), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenScatterContrller, _Component);
        function SamTruyenScatterContrller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scoreLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusSelect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "DamageLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scopion", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusItems", _descriptor5, _assertThisInitialized(_this));
          _this.data = void 0;
          _this.clickCount = 0;
          _this.clickMax = 0;
          _this.currentScore = 0;
          _this.targetScore = 0;
          _this.prizeBonusID = 0;
          _this.prizeIDs = [];
          _this.multiple = 0;
          _this.onFinishedGame = void 0;
          return _this;
        }
        var _proto = SamTruyenScatterContrller.prototype;
        _proto.setData = function setData(data, onFinished) {
          var _this2 = this;
          if (data) {
            this.data = data;
            this.clickCount = 0;
            this.clickMax = data.BonusItemsData.length - 1;
            this.targetScore = 0;
            this.currentScore = 0;
            this.updateScoreLabel();
            if (this.scopion) {
              this.scopion.setData(function () {
                _this2.onCheckTouchScopion();
              });
            }
            if (this.bonusSelect) {
              this.bonusSelect.active = false;
            }
          }
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.GAME_BONUS_START);
          this.onFinishedGame = onFinished;
        };
        _proto.setPrizeBonusID = function setPrizeBonusID(value) {
          this.prizeBonusID = value;
        };
        _proto.onCheckTouchScopion = function onCheckTouchScopion() {
          if (this.clickCount >= this.clickMax) return;
          this.clickCount++;
          this.targetScore += this.data.BonusItemsData[this.clickCount - 1].PrizeValue;
          this.effectHitScopion(this.data.BonusItemsData[this.clickCount - 1].PrizeValue);
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.SCOPION_HIT);
          if (this.clickCount >= this.clickMax) {
            this.scopion.onFinished();
            this.endGame();
          }
        };
        _proto.effectHitScopion = function effectHitScopion(dame) {
          var _this3 = this;
          if (dame && this.DamageLabel) {
            this.DamageLabel.setPosition(Vec3.ZERO);
            this.DamageLabel.active = true;
            this.DamageLabel.getComponent(Label).string = dame.toLocaleString("vi");
            tween(this.DamageLabel).delay(0.5).to(0.5, {
              position: new Vec3(0, 200, 0)
            }, {
              easing: "smooth"
            }).call(function () {
              _this3.DamageLabel.active = false;
            }).start();
          }
        };
        _proto.endGame = function endGame() {
          var _this4 = this;
          if (this.scopion) this.scopion.onFinished();
          this.scheduleOnce(function () {
            _this4.showBonusSelect();
          }, 1);
        };
        _proto.showBonusSelect = function showBonusSelect() {
          var _this5 = this;
          if (this.bonusSelect) {
            this.bonusSelect.active = true;
            if (this.bonusItems && this.bonusItems.length) {
              var prizes = this.data.BonusItemsData;
              var multipler = prizes[prizes.length - 1].Multiplier;
              this.multiple = multipler;
              this.prizeIDs = [];
              var index = 30 - this.prizeBonusID + 1;
              this.bonusItems.forEach(function (e, i) {
                var id = i + index;
                _this5.prizeIDs.push(id);
                e.setData(multipler, function () {
                  _this5.lockAllBonus();
                });
              });
            }
            this.scheduleOnce(this._randomPickBonus, 10);
          }
        };
        _proto.lockAllBonus = function lockAllBonus() {
          var _this6 = this;
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.GAME_BONUS_END);
          this.unschedule(this._randomPickBonus);
          if (this.bonusItems && this.bonusItems.length) {
            this.bonusItems.forEach(function (e) {
              e.setLocking();
            });
            this.scheduleOnce(function () {
              _this6.endGameSelect();
            }, 2);
          }
        };
        _proto.endGameSelect = function endGameSelect() {
          var _this7 = this;
          var index = this.prizeIDs.indexOf(this.multiple);
          this.prizeIDs.splice(index, 1);
          var indexPrize = 0;
          this.bonusItems.forEach(function (e) {
            if (!e.IsOpened) {
              e.openBonus(_this7.prizeIDs[indexPrize]);
              indexPrize++;
            }
          });
          this.scheduleOnce(function () {
            _this7.onFinishedGame && _this7.onFinishedGame();
            _this7.node.active = false;
          }, 1.5);
        };
        _proto.update = function update(dt) {
          if (this.currentScore !== this.targetScore) {
            var step = 10000 * dt;
            var delta = Math.sign(this.targetScore - this.currentScore) * step;
            if (Math.abs(this.targetScore - this.currentScore) <= step) {
              this.currentScore = this.targetScore;
            } else {
              this.currentScore += delta;
            }
            this.updateScoreLabel();
          }
        };
        _proto.updateScoreLabel = function updateScoreLabel() {
          if (this.scoreLabel) {
            this.scoreLabel.string = Math.floor(this.currentScore).toLocaleString("vi");
          }
        };
        _proto._randomPickBonus = function _randomPickBonus() {
          var item = this.bonusItems[1];
          if (item) {
            item.onClick();
          }
        };
        return SamTruyenScatterContrller;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bonusSelect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DamageLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scopion", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bonusItems", [_dec6], {
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

System.register("chunks:///_virtual/SamTruyenScopionController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Input, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "790ecYyrlxJLbbeTzbCLGJ+", "SamTruyenScopionController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SCOPION_STATE = /*#__PURE__*/function (SCOPION_STATE) {
        SCOPION_STATE["NONE"] = "none";
        SCOPION_STATE["INTRO"] = "ScopionIntro";
        SCOPION_STATE["IDLE"] = "ScopionIdle";
        SCOPION_STATE["HURT"] = "ScopionHurt";
        SCOPION_STATE["ATTACK"] = "ScopionAttack";
        SCOPION_STATE["EXIT"] = "ScopionExit";
        return SCOPION_STATE;
      }(SCOPION_STATE || {});
      var SamTruyenScopionController = exports('SamTruyenScopionController', (_dec = ccclass("SamTruyenScopionController"), _dec2 = property(Animation), _dec3 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenScopionController, _Component);
        function SamTruyenScopionController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Ground", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Blood", _descriptor2, _assertThisInitialized(_this));
          _this.currentState = SCOPION_STATE.NONE;
          _this.anim = void 0;
          _this.isLocking = false;
          _this.isDone = false;
          _this.callback = void 0;
          return _this;
        }
        var _proto = SamTruyenScopionController.prototype;
        _proto.onLoad = function onLoad() {
          this.anim = this.getComponent(Animation);
          this.node.on(Input.EventType.TOUCH_START, this.onTouch, this);
        };
        _proto.onDestroy = function onDestroy() {
          var _this2 = this;
          this.anim.off(Animation.EventType.FINISHED, function () {
            _this2.onFinishStateAnimation();
          }, this);
        };
        _proto.start = function start() {
          this.setState(SCOPION_STATE.INTRO);
        };
        _proto.onFinished = function onFinished() {
          this.setState(SCOPION_STATE.ATTACK);
          this.isDone = true;
        };
        _proto.setData = function setData(cb) {
          this.isDone = false;
          this.setState(SCOPION_STATE.INTRO);
          this.callback = cb;
        };
        _proto.onTouch = function onTouch() {
          var _this3 = this;
          if (this.isDone) return;
          if (this.isLocking) return;
          this.isLocking = true;
          this.scheduleOnce(function () {
            _this3.isLocking = false;
          }, 1);
          this.setState(SCOPION_STATE.HURT);
          this.callback && this.callback();
          if (this.Blood) {
            this.Blood.node.active = true;
            var clip = this.Blood.getState("Blood");
            if (clip) {
              this.Blood.play("Blood");
              this.Blood.once(Animation.EventType.FINISHED, function () {
                _this3.Blood.node.active = false;
              }, this);
            }
          }
        };
        _proto.setState = function setState(state) {
          var _this4 = this;
          if (state && state !== this.currentState) {
            this.currentState = state;
            if (this.anim) {
              var clip = this.anim.getState(this.currentState);
              if (clip) {
                this.anim.play(this.currentState);
                this.anim.once(Animation.EventType.FINISHED, function () {
                  _this4.onFinishStateAnimation();
                }, this);
              }
            }
            if (state === SCOPION_STATE.INTRO || state === SCOPION_STATE.EXIT) {
              if (this.Ground) {
                this.Ground.node.active = true;
                var _clip = this.Ground.getState("Ground");
                if (_clip) {
                  this.Ground.play("Ground");
                  this.Ground.once(Animation.EventType.FINISHED, function () {
                    _this4.Ground.node.active = false;
                  }, this);
                }
              }
            }
          }
        };
        _proto.onFinishStateAnimation = function onFinishStateAnimation() {
          if (this.anim) {
            if (this.currentState == SCOPION_STATE.HURT || this.currentState == SCOPION_STATE.INTRO) {
              this.setState(SCOPION_STATE.IDLE);
            } else if (this.currentState == SCOPION_STATE.ATTACK) {
              this.setState(SCOPION_STATE.EXIT);
            } else if (this.currentState == SCOPION_STATE.EXIT) ;
          }
        };
        return SamTruyenScopionController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Ground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Blood", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenWinPopUp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "75574OixnhPPa+a4U+bShb9", "SamTruyenWinPopUp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenWinPopUp = exports('SamTruyenWinPopUp', (_dec = ccclass('SamTruyenWinPopUp'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenWinPopUp, _Component);
        function SamTruyenWinPopUp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "GameLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BalanceLabel", _descriptor2, _assertThisInitialized(_this));
          _this.currentScore = 0;
          _this.targetScore = 0;
          return _this;
        }
        var _proto = SamTruyenWinPopUp.prototype;
        _proto.setData = function setData(balance, gameId) {
          this.targetScore = balance;
          this.currentScore = 0;
          if (this.GameLabel) {
            this.GameLabel.string = "t\u1EEB " + gameId;
          }
        };
        _proto.updateBalanceDislay = function updateBalanceDislay() {
          if (this.BalanceLabel) {
            this.BalanceLabel.string = Math.floor(this.currentScore).toLocaleString('vi');
          }
        };
        _proto.update = function update(dt) {
          if (this.currentScore !== this.targetScore) {
            var step = 10000 * dt;
            var delta = Math.sign(this.targetScore - this.currentScore) * step;
            if (Math.abs(this.targetScore - this.currentScore) <= step) {
              this.currentScore = this.targetScore;
            } else {
              this.currentScore += delta;
            }
            this.updateBalanceDislay();
          }
        };
        return SamTruyenWinPopUp;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BalanceLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SamTruyenX2Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SamTruyen.schema.ts', './SamTruyenBoxItemController.ts', './SamTruyenAudioController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, SOUND_ID, SamTruyenBoxItemController, SamTruyenAudioController;
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
      Component = module.Component;
    }, function (module) {
      SOUND_ID = module.SOUND_ID;
    }, function (module) {
      SamTruyenBoxItemController = module.SamTruyenBoxItemController;
    }, function (module) {
      SamTruyenAudioController = module.SamTruyenAudioController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "72a96qS5GpNIpDeCFwrwBzD", "SamTruyenX2Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SamTruyenX2Controller = exports('SamTruyenX2Controller', (_dec = ccclass("SamTruyenX2Controller"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SamTruyenBoxItemController), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SamTruyenX2Controller, _Component);
        function SamTruyenX2Controller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BetValue", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ValuePrize", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Title", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "WinBtnGroup", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LoseBtnGroup", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Items", _descriptor6, _assertThisInitialized(_this));
          _this._data = void 0;
          _this.onGetResult = void 0;
          return _this;
        }
        var _proto = SamTruyenX2Controller.prototype;
        _proto.setData = function setData(data, cb) {
          var _this2 = this;
          if (data) {
            this._data = data;
            if (this.BetValue) {
              this.BetValue.string = data.BetValue.toLocaleString("vi");
            }
            if (this.ValuePrize) {
              this.ValuePrize.string = (data.BetValue * 2).toLocaleString("vi");
            }
            if (this.Items && this.Items.length) {
              for (var i = 0; i < 4; i++) {
                if (this.Items[i]) this.Items[i].setData(data.PrizeValue > 0 ? 1 : 0, function () {
                  _this2.__onOpenBoxResult();
                });
              }
            }
          }
          if (this.Title) this.Title.active = true;
          if (this.WinBtnGroup) this.WinBtnGroup.active = false;
          if (this.LoseBtnGroup) this.LoseBtnGroup.active = false;
          this.onGetResult = cb;
        };
        _proto.__onOpenBoxResult = function __onOpenBoxResult() {
          SamTruyenAudioController.Instance.playSfx(SOUND_ID.SELECT_DOUBLE);
          if (this.Title) this.Title.active = false;
          if (this._data) {
            var arrItems = [];
            if (this._data.CurrentStep < 3) {
              if (this._data.PrizeValue > 0) {
                if (this.WinBtnGroup) this.WinBtnGroup.active = true;
                if (this.LoseBtnGroup) this.LoseBtnGroup.active = false;
                this.scheduleOnce(function () {
                  SamTruyenAudioController.Instance.playSfx(SOUND_ID.SELECT_DOUBLE_WIN);
                }, 1);
                arrItems = [0, 0, 1];
              } else {
                if (this.WinBtnGroup) this.WinBtnGroup.active = false;
                if (this.LoseBtnGroup) this.LoseBtnGroup.active = true;
                this.scheduleOnce(function () {
                  SamTruyenAudioController.Instance.playSfx(SOUND_ID.SELECT_DOUBLE_LOSE);
                }, 1);
                arrItems = [1, 1, 0];
              }
            } else {
              if (this.WinBtnGroup) this.WinBtnGroup.active = false;
              if (this.LoseBtnGroup) this.LoseBtnGroup.active = true;
            }
            var index = 0;
            if (this.Items && this.Items.length) {
              this.Items.forEach(function (e) {
                if (!e.IsSelected) {
                  e.openBox(arrItems[index]);
                  index++;
                }
              });
            }
            this.onGetResult && this.onGetResult(this._data.PrizeValue);
          }
        };
        return SamTruyenX2Controller;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BetValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ValuePrize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "WinBtnGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "LoseBtnGroup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Items", [_dec7], {
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

(function(r) {
  r('virtual:///prerequisite-imports/SamTruyen', 'chunks:///_virtual/SamTruyen'); 
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