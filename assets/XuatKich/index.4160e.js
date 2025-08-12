System.register("chunks:///_virtual/Airplane.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './Play.ts', './XuatKich.SyncTimeControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, AudioClip, AudioSource, instantiate, Animation, Label, tween, v3, easing, UITransform, Vec3, v2, math, Sprite, Tween, Color, Component, Utils, Play, XuatKichSyncTimeControl;
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
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      instantiate = module.instantiate;
      Animation = module.Animation;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      easing = module.easing;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      v2 = module.v2;
      math = module.math;
      Sprite = module.Sprite;
      Tween = module.Tween;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Play = module.default;
    }, function (module) {
      XuatKichSyncTimeControl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class4;
      cclegacy._RF.push({}, "65c0bYcnApEsI7OjX9ukGAl", "Airplane", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PathElement = exports('PathElement', /*#__PURE__*/function () {
        function PathElement(startPath, endPath, radius, duration) {
          this.startPath = void 0;
          this.endPath = void 0;
          this.radius = void 0;
          this.duration = void 0;
          this.controlPoint = void 0;
          this.startPath = startPath.clone();
          this.endPath = endPath.clone();
          this.radius = radius;
          this.duration = duration;
          var midPoint = startPath.clone().lerp(endPath, 0.5);
          var perpendicular = endPath.clone().subtract(startPath).rotate(Math.PI / 2).normalize().multiplyScalar(radius);
          this.controlPoint = midPoint.add(perpendicular);
        }
        var _proto = PathElement.prototype;
        _proto.getCurrentPosition = function getCurrentPosition(time) {
          var t = Math.min(Math.max(time / this.duration, 0), 1);
          var oneMinusT = 1 - t;
          var p0 = this.startPath.clone().multiplyScalar(oneMinusT * oneMinusT);
          var p1 = this.controlPoint.clone().multiplyScalar(2 * oneMinusT * t);
          var p2 = this.endPath.clone().multiplyScalar(t * t);
          return p0.add(p1).add(p2);
        };
        return PathElement;
      }());
      var Airplane = exports('default', (_dec = menu("Sortie/Airplane"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([AudioClip]), _dec5 = property(AudioSource), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), ccclass(_class2 = _dec(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Airplane, _Component);
        function Airplane() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "anim", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "target", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "engineSounds", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "engineAudioSource", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prize", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinEffect", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectDieSmall", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectDieBoss", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectDieSpecial", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectMagnetic", _descriptor10, _assertThisInitialized(_this));
          _this.id = void 0;
          _this.isDie = false;
          _this.radarAffected = false;
          _this.type = -1;
          _this.pathElements = [];
          _this.currentMoveTime = 0;
          _this.startServerTime = 0;
          _this.syncedElapsedTime = 0;
          _this.localElapsedTime = 0;
          _this.syncTimer = 0;
          _this.BOSS_TYPE = 1001;
          return _this;
        }
        var _proto2 = Airplane.prototype;
        _proto2.die = function die(player, prize) {
          if (this.isDie) return;
          this.isDie = true;
          this.stopEngineSound();
          if (!player) {
            this.node.destroy();
            return;
          }
          var effectDieNode;
          effectDieNode = instantiate(this.effectDieBoss);
          if (this.type != this.BOSS_TYPE) {
            effectDieNode.setScale(0.25, 0.25, 0.25);
          }
          effectDieNode.parent = this.node.parent;
          effectDieNode.setPosition(this.node.position);
          effectDieNode.active = true;
          var effectDie = effectDieNode.getComponent(Animation);
          effectDie.play();
          effectDie.once(Animation.EventType.FINISHED, function () {
            effectDieNode.destroy();
          });
          var prizeNode = instantiate(this.prize);
          prizeNode.setPosition(this.node.position);
          this.node.parent.addChild(prizeNode);
          prizeNode.active = true;
          prizeNode.getComponent(Label).string = Utils.formatNumber(prize);
          tween(prizeNode).to(0.5, {
            position: v3(prizeNode.position.x, prizeNode.position.y + 100, 0)
          }, {
            easing: easing.backOut
          }).call(function () {
            prizeNode.destroy();
          }).start();
          var coinEffect = instantiate(this.coinEffect);
          coinEffect.setPosition(this.node.position);
          this.node.parent.addChild(coinEffect);
          coinEffect.active = true;
          coinEffect.children.forEach(function (coin, index) {
            setTimeout(function () {
              var worldPos = player.avatarNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
              var targetLocalPos = coin.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
              tween(coin).to(1, {
                position: v3(targetLocalPos.x, targetLocalPos.y, 0)
              }).call(function () {
                coin.destroy();
                if (index === coinEffect.children.length - 1) {
                  coinEffect.destroy();
                }
              }).start();
            }, index * 50);
          });
          this.node.destroy();
        };
        _proto2.onLoad = function onLoad() {
          if (Airplane._instance == null) {
            Airplane._instance = this;
          }
        };
        _proto2.onDestroy = function onDestroy() {
          if (Airplane._instance === this) {
            Airplane._instance = null;
          }
          this.stopEngineSound();
        };
        _proto2.setData = function setData(data) {
          this.id = data.i;
          this.startServerTime = new Date(data.ct).getTime();
          this.isDie = false;
          this.node.active = true;
          this.type = data.t;
          if (this.type == Airplane.instance.BOSS_TYPE) {
            Play.instance.showBossComing();
          }
          this.anim.removeAllChildren();
          var animNode = instantiate(Play.instance.getAirplaneAnimByType(this.type));
          animNode.parent = this.anim;
          this.anim.active = false;
          this.pathElements = data.p.p.map(function (p, index) {
            if (index < data.p.p.length - 1) {
              return new PathElement(v2(p.x, p.y), v2(data.p.p[index + 1].x, data.p.p[index + 1].y), data.p.r[index], data.p.d[index]);
            }
          }).filter(function (p) {
            return p !== undefined;
          });
          this.currentMoveTime = 0;
          this.startEngineSound();
          this.startServerTime = new Date(data.ct).getTime();
          var serverNow = XuatKichSyncTimeControl.instance.getCurrentServerTime();
          this.syncedElapsedTime = Math.max((serverNow - this.startServerTime) / 1000, 0);
          this.localElapsedTime = this.syncedElapsedTime;
          this.syncTimer = 0;
        };
        _proto2.updateRealTime = function updateRealTime(dt) {
          if (!this.node.active || this.isDie || this.pathElements.length < 1 || this.radarAffected) return;
          var serverNow = XuatKichSyncTimeControl.instance.getCurrentServerTime();
          if (serverNow < this.startServerTime) return;
          this.anim.active = true;
          this.syncTimer += dt;
          this.localElapsedTime += dt;
          if (this.syncTimer >= 5.0) {
            this.syncTimer = 0;
            var _serverNow = XuatKichSyncTimeControl.instance.getCurrentServerTime();
            this.syncedElapsedTime = Math.max((_serverNow - this.startServerTime) / 1000, 0);
            this.localElapsedTime = this.syncedElapsedTime;
          }
          var totalDuration = this.pathElements.reduce(function (sum, p) {
            return sum + p.duration;
          }, 0);
          this.currentMoveTime = this.localElapsedTime % totalDuration;
          var totalTime = 0;
          var currentPath = null;
          for (var i = 0; i < this.pathElements.length; i++) {
            if (this.currentMoveTime < totalTime + this.pathElements[i].duration) {
              currentPath = this.pathElements[i];
              break;
            }
            totalTime += this.pathElements[i].duration;
          }
          if (currentPath) {
            var timeInPath = this.currentMoveTime - totalTime;
            var pos = currentPath.getCurrentPosition(timeInPath);
            this.node.setPosition(pos.x, pos.y, 0);
            var direction = currentPath.endPath.clone().subtract(currentPath.startPath);
            var angle = Math.atan2(direction.y, direction.x);
            var scaleX = 1;
            var scaleY = 1;
            if (direction.x < 0) {
              scaleX = -1;
              angle += Math.PI;
            }
            var posX = this.node.position.x;
            var posY = this.node.position.y;
            var serverPos = Play.instance.mePlayer.serverPos;
            switch (serverPos) {
              case 1:
                this.node.setPosition(posX, posY);
                break;
              case 2:
                this.node.setPosition(-posX, posY);
                scaleX = -scaleX;
                angle = -angle;
                break;
              case 3:
                this.node.setPosition(-posX, -posY);
                scaleY = -scaleY;
                angle += Math.PI;
                break;
              case 4:
                this.node.setPosition(posX, -posY);
                scaleY = -scaleY;
                scaleX = -scaleX;
                angle = -(angle + Math.PI);
                break;
            }
            if ((this.type == 101 || this.type == 102) && (serverPos == 3 || serverPos == 4)) {
              angle = -angle;
            }
            this.node.setRotationFromEuler(0, 0, math.toDegree(angle));
            this.node.setScale(scaleX, scaleY, 1);
          }
        };
        _proto2.hurt = function hurt() {
          if (this.anim.children.length === 0 || this.anim.children[0].children.length === 0) return;
          var targetNode = this.anim.children[0].children[0];
          var sprite = targetNode.getComponent(Sprite);
          if (!sprite) return;
          Tween.stopAllByTarget(sprite);
          tween(sprite).to(0.05, {
            color: new Color(255, 54, 54)
          }).delay(0.1).to(0.05, {
            color: new Color(255, 255, 255)
          }).start();
        };
        _proto2.startEngineSound = function startEngineSound() {
          if (this.engineAudioSource && this.engineSounds.length > 0) {
            if (this.engineAudioSource.playing) {
              this.engineAudioSource.stop();
            }
            var soundIndex = this.type % this.engineSounds.length;
            this.engineAudioSource.clip = this.engineSounds[soundIndex];
            this.engineAudioSource.loop = true;
            this.engineAudioSource.play();
          }
        };
        _proto2.stopEngineSound = function stopEngineSound() {
          if (this.engineAudioSource && this.engineAudioSource.playing) {
            this.engineAudioSource.stop();
          }
        };
        _createClass(Airplane, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);
        return Airplane;
      }(Component), _class4._instance = null, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "engineSounds", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "engineAudioSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "prize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "coinEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "effectDieSmall", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "effectDieBoss", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "effectDieSpecial", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "effectMagnetic", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BgEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, UITransform, Component;
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
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "a16act9hItAlZ7mo9BbSW7Q", "BgEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BgEffect = exports('default', (_dec = property(Node), ccclass(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BgEffect, _Component);
        function BgEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor2, _assertThisInitialized(_this));
          _this.direction = -1;
          _this.limitLeft = void 0;
          _this.limitRight = void 0;
          _this.startX = void 0;
          return _this;
        }
        var _proto = BgEffect.prototype;
        _proto.onLoad = function onLoad() {
          if (BgEffect._instance == null) {
            BgEffect._instance = this;
          }
          this.startX = this.bg.x;
          var scaledWidth = this.bg.getComponent(UITransform).width * this.bg.scale.x;
          this.limitLeft = this.startX - scaledWidth / 5;
          this.limitRight = this.startX;
        };
        _proto.update = function update(dt) {
          var moveDistance = this.speed * dt * this.direction;
          this.bg.x += moveDistance;
          if (this.bg.x <= this.limitLeft) {
            this.direction = 1;
          }
          if (this.bg.x >= this.limitRight) {
            this.direction = -1;
          }
        };
        _proto.resetBackground = function resetBackground() {
          this.bg.x = this.startX;
        };
        _createClass(BgEffect, null, [{
          key: "instance",
          get: function get() {
            return BgEffect._instance;
          }
        }]);
        return BgEffect;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlinkNodeBulletXK.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f4b13uiHgVLkLIKxft3DpmN", "BlinkNodeBulletXK", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlinkNode = exports('BlinkNode', (_dec = ccclass('BlinkNodeBulletXK'), _dec2 = property({
        tooltip: "Time Delay"
      }), _dec3 = property({
        tooltip: "Time Done"
      }), _dec4 = property({
        tooltip: "Opacity lowest"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlinkNode, _Component);
        function BlinkNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "delayStart", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blinkDuration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minOpacity", _descriptor3, _assertThisInitialized(_this));
          _this._uiOpacity = null;
          return _this;
        }
        var _proto = BlinkNode.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this._uiOpacity = this.node.getComponent(UIOpacity);
          if (!this._uiOpacity) {
            this._uiOpacity = this.node.addComponent(UIOpacity);
          }
          this.scheduleOnce(function () {
            _this2.startBlinking();
          }, this.delayStart);
        };
        _proto.startBlinking = function startBlinking() {
          var halfDuration = this.blinkDuration / 2;
          tween(this._uiOpacity).repeatForever(tween().to(halfDuration, {
            opacity: this.minOpacity
          }).to(halfDuration, {
            opacity: 255
          })).start();
        };
        _proto.onDestroy = function onDestroy() {
          tween(this._uiOpacity).stop();
        };
        return BlinkNode;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "delayStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blinkDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minOpacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Bullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Play.ts', './Airplane.ts', './SortiePhotonClient.ts', './PhotonClient.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Size, Collider2D, Contact2DType, Vec3, math, Animation, Component, Play, Airplane, SortiePhotonClient, PhotonClient, Utils;
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
      Size = module.Size;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Vec3 = module.Vec3;
      math = module.math;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      Play = module.default;
    }, function (module) {
      Airplane = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "724cde2mx9CKJctAZQdxDMb", "Bullet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Bullet = exports('default', (_dec = ccclass('Bullet'), _dec2 = menu("Sortie/Bullet"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bullet, _Component);
        function Bullet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bullet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exploreNode", _descriptor2, _assertThisInitialized(_this));
          _this.gunId = -1;
          _this.positionID = -1;
          _this.targetAirplaneId = -1;
          _this.worldSize = new Size(1920, 1080);
          _this.exploreDuration = 0.8;
          _this.vX = 0;
          _this.vY = 0;
          _this.collisionCount = 2;
          _this.isExplored = false;
          _this.isExploring = false;
          _this.curExplore = 0;
          _this.play = void 0;
          return _this;
        }
        var _proto = Bullet.prototype;
        _proto.onLoad = function onLoad() {
          this.play = Play.instance;
        };
        _proto.onEnable = function onEnable() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onDisable = function onDisable() {
          var collider = this.getComponent(Collider2D);
          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };
        _proto.onBeginContact = function onBeginContact(_selfCollider, otherCollider, _contact) {
          var _otherCollider$node$p;
          if (this.isExploring || this.isExplored) return;
          var airplaneComponent = (_otherCollider$node$p = otherCollider.node.parent) == null || (_otherCollider$node$p = _otherCollider$node$p.parent) == null || (_otherCollider$node$p = _otherCollider$node$p.parent) == null ? void 0 : _otherCollider$node$p.getComponent(Airplane);
          if (!airplaneComponent || !airplaneComponent.node.active) return;
          if (this.play.isTargetAirplane && this.play.targetAirplane !== airplaneComponent) return;
          if (airplaneComponent.type == 101 || airplaneComponent.type == 102) {
            this.exploreNode.setPosition(0, this.exploreNode.position.y);
          }
          this.explore();
          airplaneComponent.hurt();
          if (this.positionID !== this.play.mePlayer.serverPos) return;
          var data = {
            ft: airplaneComponent.id,
            si: this.play.shootingId,
            gi: this.play.mePlayer.gunId
          };
          var params = [];
          params.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.PlayerShotFighter);
          params.push(SortiePhotonClient.EParameterCodes.ShotFighterMessage, JSON.stringify(data));
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
        };
        _proto.run = function run() {
          var speed = 3000;
          var dir = Utils.degreesToVec2(this.node.angle);
          this.vX = dir.x * speed;
          this.vY = dir.y * speed;
          this.collisionCount = 2;
          this.isExplored = false;
          this.isExploring = false;
          this.node.active = true;
          this.bullet.active = true;
          this.exploreNode.active = true;
          var paddingMap = {
            1: 20,
            2: 20,
            3: 30,
            4: 25,
            5: 35,
            6: 35,
            7: 40,
            8: 40,
            9: 40,
            10: 45
          };
          this.exploreNode.setPosition(paddingMap[this.gunId] || 0, this.exploreNode.position.y);
        };
        _proto.updateRealTime = function updateRealTime(dt) {
          if (this.isExplored) return;
          if (this.isExploring) {
            this.curExplore -= dt;
            if (this.curExplore <= 0) {
              this.isExplored = true;
              this.node.active = false;
            }
            return;
          }
          var currentPos = this.node.position;
          var newPos = new Vec3(currentPos.x + this.vX * dt, currentPos.y + this.vY * dt, 0);
          var collided = false;
          if (Math.abs(newPos.x) > this.worldSize.width / 2) {
            this.vX *= -1;
            newPos.x = Math.sign(newPos.x) * this.worldSize.width / 2;
            collided = true;
          } else if (Math.abs(newPos.y) > this.worldSize.height / 2) {
            this.vY *= -1;
            newPos.y = Math.sign(newPos.y) * this.worldSize.height / 2;
            collided = true;
          }
          this.node.setPosition(newPos);
          if (collided) {
            this.node.angle = math.toDegree(Math.atan2(this.vY, this.vX));
            this.collisionCount--;
          }
          if (this.collisionCount < 0) {
            this.isExplored = true;
            this.node.active = false;
            return;
          }
        };
        _proto.explore = function explore() {
          var _this2 = this;
          if (this.isExploring) return;
          this.isExploring = true;
          this.curExplore = this.exploreDuration;
          this.bullet.active = false;
          var effectExplore = this.exploreNode.getComponent(Animation);
          effectExplore.play("Ex" + this.gunId);
          effectExplore.once(Animation.EventType.FINISHED, function () {
            _this2.node.destroy();
          });
        };
        return Bullet;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "exploreNode", [_dec4], {
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

System.register("chunks:///_virtual/ButtonSound.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, AudioSource, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9d2dfLIFNRDG6T28rYgky5H", "ButtonSound", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonSound = exports('default', (_dec = ccclass('ButtonSound'), _dec2 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonSound, _Component);
        function ButtonSound() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "clickSound", _descriptor, _assertThisInitialized(_this));
          _this.audioSource = null;
          return _this;
        }
        var _proto = ButtonSound.prototype;
        _proto.onLoad = function onLoad() {
          this.audioSource = this.getComponent(AudioSource);
          if (!this.audioSource) {
            this.audioSource = this.node.addComponent(AudioSource);
          }
          var button = this.getComponent(Button);
          if (button) {
            button.node.on(Button.EventType.CLICK, this.playClickSound, this);
          }
        };
        _proto.playClickSound = function playClickSound() {
          if (this.clickSound && this.audioSource) {
            this.audioSource.clip = this.clickSound;
            this.audioSource.play();
          }
        };
        _proto.onDestroy = function onDestroy() {
          var button = this.getComponent(Button);
          if (button) {
            button.node.off(Button.EventType.CLICK, this.playClickSound, this);
          }
        };
        return ButtonSound;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Lobby.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Play.ts', './SortiePhotonClient.ts', './PhotonClient.ts', './App.ts', './Utils.ts', './Config.ts', './PanelMenu2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, AudioClip, Prefab, log, sys, Tween, instantiate, Component, Play, SortiePhotonClient, PhotonClient, App, Utils, Configs, PanelMenu;
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
      AudioClip = module.AudioClip;
      Prefab = module.Prefab;
      log = module.log;
      sys = module.sys;
      Tween = module.Tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Play = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      PanelMenu = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _class3;
      cclegacy._RF.push({}, "a4186Y5BwNGUrQJJk327a9c", "Lobby", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Lobby = exports('default', (_dec = menu("Sortie/Lobby"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lobby, _Component);
        function Lobby() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGoldBalance", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGemBalance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentJackpot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic2", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exchangeCoinPrefab", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupJackpotPrefab", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupSetting", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconClosePopupSetting", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconOffSoundMusic", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconOnSoundMusic", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconOffSoundEffect", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconOnSoundEffect", _descriptor17, _assertThisInitialized(_this));
          _this.play = null;
          _this.photonClient = null;
          _this.currentMusicIndex = 0;
          _this.listGunConfig = [];
          _this.clientParameterConfig = null;
          _this.currentUserAccumulate = 0;
          return _this;
        }
        var _proto = Lobby.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.photonClient = SortiePhotonClient.getInstance();
          this.photonClient.connect();
          this.photonClient.addResponseListener(PhotonClient.EOperationCodes.Account, function (res) {
            if (res.errCode < 0) {
              App.instance.showErrLoading(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            log("Logged in successfully");
            App.instance.showLoading(false);
            _this2.photonClient.isLoggedIn = true;
            _this2.listGunConfig = JSON.parse(res.vals[SortiePhotonClient.EParameterCodes.GunConfigsResponse]);
            _this2.clientParameterConfig = JSON.parse(res.vals[SortiePhotonClient.EParameterCodes.ClientParameterConfig]);
            var IAccountModel = JSON.parse(res.vals[SortiePhotonClient.EParameterCodes.LoginResponse]);
            _this2.currentUserAccumulate = IAccountModel.ua;
            var goldBalance = IAccountModel.go;
            var gemBalance = IAccountModel.ge;
            _this2.lblGoldBalance.string = Utils.formatNumber(goldBalance);
            _this2.lblGemBalance.string = Utils.formatNumber(gemBalance);
            var data = [];
            data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.GetCurrentJackpot);
            data.push(SortiePhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID);
            _this2.photonClient.sendOperation(PhotonClient.EOperationCodes.Game, data, true);
            _this2.playMusic();
          });
          this.photonClient.addResponseListener(PhotonClient.EOperationCodes.Game, function (res) {
            if (res.errCode < 0) {
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code == SortiePhotonClient.EParameterCodes.CurrentJackpot) ;
            });
          });
          this.updateSoundIcons();
        };
        _proto.updateBalance = function updateBalance(gold, gem) {
          this.lblGemBalance.string = Utils.formatNumber(gem);
          this.lblGoldBalance.string = Utils.formatNumber(gold);
        };
        _proto.playMusic = function playMusic() {
          var visitCount = parseInt(sys.localStorage.getItem("XK_visit_count") || "0", 10);
          visitCount++;
          sys.localStorage.setItem("XK_visit_count", visitCount.toString());
          this.currentMusicIndex = visitCount % 2;
          var musicToPlay = this.currentMusicIndex === 0 ? this.bgMusic1 : this.bgMusic2;
          var isPlaying = JSON.parse(sys.localStorage.getItem("XK_is_playing"));
          this.updateSoundIcons();
        };
        _proto.onLoad = function onLoad() {
          Lobby.instance = this;
          this.play = this.playNode.getComponent(Play);
          this.play.node.active = false;
          this.lblGoldBalance.string = "0";
          this.lblGemBalance.string = "0";
          if (sys.localStorage.getItem("XK_is_playing") === null) {
            sys.localStorage.setItem("XK_is_playing", JSON.stringify(true));
          }
          if (sys.localStorage.getItem("XK_is_effect_on") === null) {
            sys.localStorage.setItem("XK_is_effect_on", JSON.stringify(true));
          }
        };
        _proto.show = function show(isShow) {
          this.node.active = isShow;
          if (isShow) {
            // audioEngine.stopAll();
            this.playMusic();
          }
        };
        _proto.actBack = function actBack() {
          Tween.stopAllByTarget(this.node);
          // audioEngine.stopMusic();
          // audioEngine.stopAll();
          App.instance.gotoLobby();
          SortiePhotonClient.getInstance().peer.disconnect();
        };
        _proto.actPlay = function actPlay() {
          if (!this.photonClient || !this.photonClient.isLoggedIn) {
            return;
          }
          var params = [];
          params.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.JoinRoom);
          this.photonClient.sendOperation(PhotonClient.EOperationCodes.Game, params, true);
          this.playNode.active = true;
          this.show(false);
          // audioEngine.stopMusic();
          PanelMenu.instance.hide();
          PanelMenu.instance.updateSoundEffect();
          Play.instance.updateSoundMusic();
        };
        _proto.actExchangeCoin = function actExchangeCoin() {
          var exchangeCoin = instantiate(this.exchangeCoinPrefab);
          this.popupContainer.addChild(exchangeCoin);
          // @ts-ignore
          exchangeCoin.getComponent("PopupExchangeCoin").show();
        };
        _proto.actShowPopupGuide = function actShowPopupGuide() {
          var popupGuide = instantiate(this.popupGuidePrefab);
          this.popupContainer.addChild(popupGuide);
          // @ts-ignore
          popupGuide.getComponent("PopupGuideXK").show();
        };
        _proto.actShowPopupHistory = function actShowPopupHistory() {
          var popupHistory = instantiate(this.popupHistoryPrefab);
          this.popupContainer.addChild(popupHistory);
          // @ts-ignore
          popupHistory.getComponent("PopupHistory").show();
        };
        _proto.actShowPopupTopJackpot = function actShowPopupTopJackpot() {
          var popupJackpot = instantiate(this.popupJackpotPrefab);
          this.popupContainer.addChild(popupJackpot);
          // @ts-ignore
          popupJackpot.getComponent("PopupJackpot").show();
        };
        _proto.actShowPopupSetting = function actShowPopupSetting() {
          this.popupSetting.active = true;
        };
        _proto.actClosePopupSetting = function actClosePopupSetting() {
          this.popupSetting.active = false;
        };
        _proto.turnOnSoundMusic = function turnOnSoundMusic() {
          // audioEngine.resumeMusic();
          sys.localStorage.setItem("XK_is_playing", JSON.stringify(true));
          this.playMusic();
          this.updateSoundIcons();
        };
        _proto.turnOffSoundMusic = function turnOffSoundMusic() {
          // audioEngine.pauseMusic();
          sys.localStorage.setItem("XK_is_playing", JSON.stringify(false));
          this.updateSoundIcons();
        };
        _proto.turnOnSoundEffect = function turnOnSoundEffect() {
          var isEffectOn = JSON.parse(sys.localStorage.getItem("XK_is_effect_on") || "false");
          if (!isEffectOn) {
            sys.localStorage.setItem("XK_is_effect_on", JSON.stringify(true));
            // audioEngine.setEffectsVolume(1);
          }

          this.iconOnSoundEffect.active = true;
          this.iconOffSoundEffect.active = false;
        };
        _proto.turnOffSoundEffect = function turnOffSoundEffect() {
          var isEffectOn = JSON.parse(sys.localStorage.getItem("XK_is_effect_on") || "true");
          if (isEffectOn) {
            sys.localStorage.setItem("XK_is_effect_on", JSON.stringify(false));
            // audioEngine.setEffectsVolume(0);
          }

          this.iconOnSoundEffect.active = false;
          this.iconOffSoundEffect.active = true;
        };
        _proto.updateSoundIcons = function updateSoundIcons() {
          var isPlaying = JSON.parse(sys.localStorage.getItem("XK_is_playing") || "false");
          this.iconOnSoundMusic.active = isPlaying;
          this.iconOffSoundMusic.active = !isPlaying;
          var isEffectOn = JSON.parse(sys.localStorage.getItem("XK_is_effect_on") || "false");
          this.iconOnSoundEffect.active = isEffectOn;
          this.iconOffSoundEffect.active = !isEffectOn;
        };
        return Lobby;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblGoldBalance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblGemBalance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentJackpot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic2", [_dec7], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "exchangeCoinPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "popupJackpotPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "popupSetting", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "iconClosePopupSetting", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "iconOffSoundMusic", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "iconOnSoundMusic", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "iconOffSoundEffect", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "iconOnSoundEffect", [_dec18], {
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

System.register("chunks:///_virtual/OscillateX.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8c796GF6OZLQK2XZObDnhPn", "OscillateX", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var OscillateX = exports('default', (_dec = ccclass('OscillateX'), _dec2 = menu('Sortie/OscillateX'), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OscillateX, _Component);
        function OscillateX() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "minX", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxX", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor3, _assertThisInitialized(_this));
          _this.direction = 1;
          return _this;
        }
        var _proto = OscillateX.prototype;
        _proto.update = function update(dt) {
          var pos = this.node.position;
          var newX = pos.x + this.speed * dt * this.direction;
          if (newX >= this.maxX) {
            newX = this.maxX;
            this.direction = -1;
          } else if (newX <= this.minX) {
            newX = this.minX;
            this.direction = 1;
          }
          this.node.setPosition(newX, pos.y, pos.z);
        };
        return OscillateX;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "minX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -110;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxX", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 110;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PanelMenu2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Play.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, tween, Vec3, sys, Component, Play;
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
      Sprite = module.Sprite;
      tween = module.tween;
      Vec3 = module.Vec3;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      Play = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "ce5acSFErNKKYFsQ3p9oiUr", "PanelMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PanelMenu = exports('default', (_dec = ccclass('PanelMenu'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PanelMenu, _Component);
        function PanelMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "arrow", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprSoundMusicOn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprSoundMusicOff", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprSoundBgOn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprSoundBgOff", _descriptor5, _assertThisInitialized(_this));
          _this.isShow = false;
          _this.soundState = 1;
          _this.musicState = 1;
          return _this;
        }
        var _proto = PanelMenu.prototype;
        _proto.onLoad = function onLoad() {
          PanelMenu.instance = this;
        };
        _proto.show = function show(isShow) {
          this.isShow = isShow;
          if (this.isShow) {
            tween(this.node).to(0.3, {
              position: new Vec3(-150, 0, 0)
            }).start();
            tween(this.arrow).to(0.3, {
              angle: 180
            }).start();
          } else {
            tween(this.node).to(0.3, {
              position: new Vec3(300, 0, 0)
            }).start();
            tween(this.arrow).to(0.3, {
              angle: 0
            }).start();
          }
        };
        _proto.hide = function hide() {
          this.isShow = false;
          this.node.setPosition(new Vec3(300, 0, 0));
          this.arrow.angle = 0;
        };
        _proto.toggleShow = function toggleShow() {
          this.show(!this.isShow);
        };
        _proto.getSound = function getSound() {
          var soundSave = sys.localStorage.getItem("XK_sound_fish_shot");
          if (soundSave != null) {
            this.soundState = parseInt(soundSave);
          }
          return this.soundState;
        };
        _proto.getMusic = function getMusic() {
          var musicSave = sys.localStorage.getItem("XK_music_fish_shot");
          if (musicSave != null) {
            this.musicState = parseInt(musicSave);
          }
          return this.musicState;
        };
        _proto.toggleSoundMusic = function toggleSoundMusic() {
          Play.instance.togglePlayMusic();
          var isPlaying = JSON.parse(sys.localStorage.getItem("XK_is_playing") || "false");
          this.sprSoundBgOn.node.active = isPlaying;
          this.sprSoundBgOff.node.active = !isPlaying;
        };
        _proto.toggleSoundEffect = function toggleSoundEffect() {
          var isEffectOn = JSON.parse(sys.localStorage.getItem("XK_is_effect_on") || "true");
          isEffectOn = !isEffectOn;
          sys.localStorage.setItem("XK_is_effect_on", JSON.stringify(isEffectOn));
          // You may want to call a central method like:
          // AudioManager.setEffectVolume(volume);

          this.sprSoundMusicOn.node.active = isEffectOn;
          this.sprSoundMusicOff.node.active = !isEffectOn;
        };
        _proto.updateSoundEffect = function updateSoundEffect() {
          var isEffectOn = JSON.parse(sys.localStorage.getItem("XK_is_effect_on") || "true");
          var isPlaying = JSON.parse(sys.localStorage.getItem("XK_is_playing") || "false");
          this.sprSoundBgOn.node.active = isPlaying;
          this.sprSoundBgOff.node.active = !isPlaying;
          this.sprSoundMusicOn.node.active = isEffectOn;
          this.sprSoundMusicOff.node.active = !isEffectOn;
        };
        return PanelMenu;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprSoundMusicOn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprSoundMusicOff", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprSoundBgOn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sprSoundBgOff", [_dec6], {
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

System.register("chunks:///_virtual/Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Player.ts', './Bullet.ts', './Airplane.ts', './SortiePhotonClient.ts', './Lobby.ts', './XuatKich.SyncTimeControl.ts', './PhotonClient.ts', './App.ts', './Config.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, Toggle, AudioClip, Prefab, Sprite, RichText, Tween, UIOpacity, tween, instantiate, UITransform, Vec3, Button, Animation, v3, sys, v2, PolygonCollider2D, sp, Component, Player, Bullet, Airplane, SortiePhotonClient, Lobby, XuatKichSyncTimeControl, PhotonClient, App, Configs, Utils;
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
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Toggle = module.Toggle;
      AudioClip = module.AudioClip;
      Prefab = module.Prefab;
      Sprite = module.Sprite;
      RichText = module.RichText;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Button = module.Button;
      Animation = module.Animation;
      v3 = module.v3;
      sys = module.sys;
      v2 = module.v2;
      PolygonCollider2D = module.PolygonCollider2D;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      Player = module.default;
    }, function (module) {
      Bullet = module.default;
    }, function (module) {
      Airplane = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      Lobby = module.default;
    }, function (module) {
      XuatKichSyncTimeControl = module.default;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _class3;
      cclegacy._RF.push({}, "48de4SpiARKwLhLWI5U6cR/", "Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Play = exports('default', (_dec = menu("Sortie/Play"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([SpriteFrame]), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property([Player]), _dec10 = property([Node]), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Toggle), _dec14 = property({
        type: AudioClip
      }), _dec15 = property({
        type: AudioClip
      }), _dec16 = property({
        type: AudioClip
      }), _dec17 = property({
        type: AudioClip
      }), _dec18 = property({
        type: AudioClip
      }), _dec19 = property({
        type: AudioClip
      }), _dec20 = property(AudioClip), _dec21 = property(AudioClip), _dec22 = property(Node), _dec23 = property([Node]), _dec24 = property([SpriteFrame]), _dec25 = property([SpriteFrame]), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Label), _dec29 = property(Node), _dec30 = property(Prefab), _dec31 = property(Prefab), _dec32 = property(Node), _dec33 = property(Label), _dec34 = property(Label), _dec35 = property(Label), _dec36 = property(Sprite), _dec37 = property(Node), _dec38 = property(Sprite), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(SpriteFrame), _dec42 = property(Node), _dec43 = property(SpriteFrame), _dec44 = property(Node), _dec45 = property(SpriteFrame), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(Node), _dec52 = property(Node), _dec53 = property(Node), _dec54 = property(RichText), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property([Node]), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Play, _Component);
        function Play() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lobby", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRoomId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loading", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchPad", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFramesBullet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bulletTemplate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombTemplate", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "players", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listAirplaneAnim", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listAirplaneNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "airplaneTemplate", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleAuto", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundShootGun1", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundShootGun2", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundShootGun3", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundShootGun4", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundShootGunUp", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundShootGunSpecial", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playSound1", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playSound2", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gun", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backgrounds", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprEmotions", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprEmotionInGames", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpot", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotPerGun", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPercentJackpot", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bossComing", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupChatPrefab", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCountRadar", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCountTarget", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCountMagnetic", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetTimeCounter", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radarStatusSprite", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "processAccumulate", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "processArrowNode", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconTarget", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radarNode", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconRadar", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "magneticNode", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconMagnetic", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineTemplate", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radarClickNode", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectRadar", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "magneticClickNode", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectMagnetic", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombClickNode", _descriptor50, _assertThisInitialized(_this));
          // BIG WIN
          _initializerDefineProperty(_this, "effectBigWinXK", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectJackpotXK", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toast", _descriptor53, _assertThisInitialized(_this));
          _this.mePlayer = null;
          _this.bullets = [];
          _this.listAirplane = [];
          _this.isShoot = false;
          _this.isTargetAirplane = false;
          _this.targetAirplane = null;
          _this.intervalFindTargetAirplane = 2;
          _this.curIntervalFindTargetAirplane = 0;
          _this.shootCooldown = 0;
          _this.shootInterval = 0.5;
          _this.shootingId = "";
          _this.timeNoAction = 0;
          _this.currentJackpot = 0;
          _this.currentJackpotPercent = 0;
          _this.countItemTarget = 0;
          _this.countItemRadar = 0;
          _this.countItemMagnetic = 0;
          _this.timeToUseTarget = 0;
          _this.currentTimeToUseTarget = 0;
          _this.dataChat = [];
          _this.allowUseItemTarget = true;
          _this.allowUseItemRadar = true;
          _this.allowUseItemMagnetic = true;
          _this.allowUseItemBomb = false;
          _this.lineSegments = [];
          _this.bombClickPath = void 0;
          _initializerDefineProperty(_this, "autoBtnNode", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatBtnNode", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emotionInGames", _descriptor56, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Play.prototype;
        _proto.onLoad = function onLoad() {
          Play.instance = this;
        };
        _proto.onEnable = function onEnable() {
          this.listAirplaneNode.removeAllChildren();
          this.listAirplane = [];
          this.bullets = [];
          for (var i = 0; i < this.players.length; i++) {
            this.players[i].leave();
          }
          this.mePlayer = this.players[0];
          this.radarClickNode.active = false;
          this.magneticClickNode.active = false;
          this.bombClickNode.active = false;
          this.mePlayer.magneticEffect.active = false;
          this.dataChat = [];
          this.allowUseItemTarget = true;
          this.allowUseItemRadar = true;
          this.allowUseItemMagnetic = true;
          this.allowUseItemBomb = false;
          this.updateProcessAccumulate();
          this.timeNoAction = 0;
          this.toast.node.active = false;
          this.lblCountTarget.string = "0";
          this.lblCountRadar.string = "0";
          this.lblCountMagnetic.string = "0";
          this.countItemTarget = 0;
          this.countItemRadar = 0;
          this.countItemMagnetic = 0;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.touchPad.on(Node.EventType.TOUCH_START, function (event) {
            var touchPos = event.getLocation();
            _this2.mePlayer.rotateGun(touchPos);
            _this2.isShoot = true;
          }, this.touchPad);
          this.touchPad.on(Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = event.getLocation();
            _this2.mePlayer.rotateGun(touchPos);
          }, this.touchPad);
          this.touchPad.on(Node.EventType.TOUCH_END, function (_event) {
            _this2.isShoot = false;
          }, this.touchPad);
          this.touchPad.on(Node.EventType.TOUCH_CANCEL, function (_event) {
            _this2.isShoot = false;
          }, this.touchPad);
          this.toggleAuto.node.on("toggle", function () {
            if (_this2.toggleAuto.isChecked) {
              _this2.touchPad.active = false;
              _this2.curIntervalFindTargetAirplane = _this2.intervalFindTargetAirplane;
              _this2.isShoot = true;
              _this2.findAirplaneInWorld();
            } else {
              _this2.stopAutoShoot();
            }
            _this2.toggleBtnChatAndAuto();
          });
          SortiePhotonClient.getInstance().handleErrorResponse(function () {
            XuatKichSyncTimeControl.instance.resetPingOffline();
            _this2.node.active = false;
            _this2.lobby.getComponent(Lobby).show(true);
          });
          SortiePhotonClient.getInstance().handleTimeoutResponse(function () {
            XuatKichSyncTimeControl.instance.resetPingOffline();
            _this2.node.active = false;
            _this2.lobby.getComponent(Lobby).show(true);
          });
          SortiePhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Game, function (res) {
            if (res.errCode < 0) {
              _this2.stopAutoShoot();
              if (res.errCode == -7) {
                App.instance.alertDialog.showMsg(PhotonClient.getErrMsg(res.errCode), function () {
                  _this2.back();
                });
              } else {
                App.instance.alertDialog.showMsg(PhotonClient.getErrMsg(res.errCode));
                _this2.back();
              }
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code != SortiePhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (e) {}
              }
              if (code == SortiePhotonClient.EParameterCodes.PingResponse) {
                XuatKichSyncTimeControl.instance.setReceivePingTime(data);
              }
              if (code == SortiePhotonClient.EParameterCodes.LeaveRoomResponse) {
                if (data.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                  for (var i = 0; i < _this2.players.length; i++) {
                    _this2.players[i].leave();
                  }
                  XuatKichSyncTimeControl.instance.resetPingOffline();
                  _this2.node.active = false;
                  _this2.lobby.getComponent(Lobby).show(true);
                  _this2.lobby.getComponent(Lobby).updateBalance(data.go, data.ge);
                  App.instance.alertDialog.dismiss();
                  _this2.unscheduleAllCallbacks();
                } else {
                  var leavePlayer = _this2.getPlayerById(data.id);
                  if (leavePlayer) {
                    _this2.showToast("<color=#ffff00>" + leavePlayer.nickname + "</c><color=#ffffff>" + App.instance.getTextLang('vc19').replace('{0}', '') + "</color>");
                    leavePlayer.leave();
                  }
                }
              }
              if (code == SortiePhotonClient.EParameterCodes.JoinRoomResponse) {
                XuatKichSyncTimeControl.instance.startPingServer();
                _this2.lblRoomId.string = "#" + data.r;
                var mePlayerData = data.a.find(function (player) {
                  return player.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID;
                });
                _this2.mePlayer.set(mePlayerData);
                _this2.mePlayer.localPos = 1;
                var circle_1 = _this2.mePlayer.node.getChildByName('circle_1');
                var circle_2 = _this2.mePlayer.node.getChildByName('circle_2');
                if (circle_1 && circle_2) {
                  Tween.stopAllByTarget(circle_1);
                  Tween.stopAllByTarget(circle_2);
                  circle_1.getComponent(UIOpacity).opacity = 255;
                  circle_2.getComponent(UIOpacity).opacity = 255;
                  tween(circle_1.getComponent(UIOpacity)).repeatForever(tween().to(0.5, {
                    opacity: 50
                  }).to(0.5, {
                    opacity: 255
                  })).start();
                  tween(circle_2.getComponent(UIOpacity)).repeatForever(tween().to(0.5, {
                    opacity: 255
                  }).to(0.5, {
                    opacity: 50
                  })).start();
                }
                var posMe = mePlayerData.p;
                var playerData;
                var _loop = function _loop(_pos) {
                  if (_pos != posMe && _pos != 1) {
                    playerData = data.a.find(function (player) {
                      return player.p == _pos;
                    });
                    if (playerData) {
                      _this2.players[_pos - 1].set(playerData);
                      _this2.players[_pos - 1].localPos = _pos;
                    }
                  }
                };
                for (var _pos = 1; _pos <= 4; _pos++) {
                  _loop(_pos);
                }

                // swap player posMe to pos 1
                if (posMe != 1) {
                  playerData = data.a.find(function (player) {
                    return player.p == 1;
                  });
                  if (playerData) {
                    _this2.players[posMe - 1].set(playerData);
                    _this2.players[posMe - 1].localPos = posMe;
                  }
                }
                for (var _i = 0; _i < data.f.length; _i++) {
                  var airplaneNode = instantiate(_this2.airplaneTemplate);
                  var airplane = airplaneNode.getComponent(Airplane);
                  airplane.node.parent = _this2.listAirplaneNode;
                  airplane.setData(data.f[_i]);
                  _this2.listAirplane.push(airplane);
                }
                _this2.updateJackpotObject(data.j, null);
              }
              if (code == SortiePhotonClient.EParameterCodes.OtherJoinRoomResponse) {
                var playerOJR;
                if (data.p === 1) {
                  playerOJR = _this2.players[_this2.mePlayer.serverPos - 1];
                  playerOJR.localPos = _this2.mePlayer.serverPos;
                } else {
                  playerOJR = _this2.players[data.p - 1];
                  playerOJR.localPos = data.p;
                }
                playerOJR.set(data);
                _this2.showToast("<color=#4ac7f7>" + data.n + "</c><color=#ffffff>" + App.instance.getTextLang('vc18').replace('{0}', '') + "</color>");
              }
              if (code == SortiePhotonClient.EParameterCodes.ChangeGunResponse) {
                var playerChangeGun = _this2.getPlayerById(data.i);
                if (playerChangeGun) {
                  playerChangeGun.setGun(data.gi);
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.CreateFighterResponse) {
                for (var _i2 = 0; _i2 < data.length; _i2++) {
                  var _airplaneNode = instantiate(_this2.airplaneTemplate);
                  var _airplane = _airplaneNode.getComponent(Airplane);
                  _airplane.node.parent = _this2.listAirplaneNode;
                  _airplane.setData(data[_i2]);
                  _this2.listAirplane.push(_airplane);
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.RemoveSingleFighterResponse) {
                for (var _i3 = 0; _i3 < _this2.listAirplane.length; _i3++) {
                  var airplaneRSF = _this2.listAirplane[_i3];
                  if (airplaneRSF.type == data && airplaneRSF.node != null && airplaneRSF.node.active) {
                    airplaneRSF.die(null, null);
                  }
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.ShootingResponse) {
                if (data.i == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                  _this2.timeNoAction = 0;
                }
                var playerSR = _this2.getPlayerById(data.i);
                if (playerSR) {
                  playerSR.updateGold(data.g);

                  // update bullet
                  var shootingRes = data.s;
                  var shootingPos = parseInt(shootingRes.id.charAt(0));
                  var shootingPlayer = _this2.getPlayerByPos(shootingPos);
                  if (shootingPlayer) {
                    var bullet = _this2.getBullet(shootingPos, shootingRes.gi, shootingPlayer.id == _this2.mePlayer.id);
                    var vx = shootingRes.vx;
                    var vy = shootingRes.vy;
                    var magnitude = Math.sqrt(vx * vx + vy * vy);
                    if (magnitude > 1.5) {
                      vx /= magnitude;
                      vy /= magnitude;
                    }
                    var rad = Math.atan2(vy, vx);
                    var radByMe = rad;
                    bullet.node.angle = radByMe * Utils.Rad2Deg;
                    switch (shootingPlayer.localPos) {
                      case 1:
                        radByMe = rad;
                        break;
                      case 2:
                        radByMe = Math.PI - rad;
                        bullet.node.angle = radByMe * Utils.Rad2Deg;
                        break;
                      case 3:
                        radByMe = rad;
                        bullet.node.angle = (radByMe + Math.PI) * Utils.Rad2Deg;
                        break;
                      case 4:
                        radByMe = Math.PI - rad;
                        bullet.node.angle = (radByMe + Math.PI) * Utils.Rad2Deg;
                        break;
                    }
                    shootingPlayer.rotateGunByAngle(radByMe * Utils.Rad2Deg);
                    var pos = bullet.node.parent.getComponent(UITransform).convertToNodeSpaceAR(shootingPlayer.fireEffect.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO));
                    bullet.node.setPosition(pos);
                    bullet.run();
                    shootingPlayer.startAnimFireGun();
                  }
                }
                _this2.updateJackpotObject(data.j, null);
              }
              if (code === SortiePhotonClient.EParameterCodes.HeadShotResponse) {
                _this2.headShotResponseHandle(data);
              }
              if (code === SortiePhotonClient.EParameterCodes.ChatResponse) {
                if (data.c.includes("__EIG__")) {
                  var _data$c$replace$split = data.c.replace("__EIG__", "").split("__"),
                    t = _data$c$replace$split[0],
                    emotionId = _data$c$replace$split[1];
                  _this2.displayEmotion(data.f, t, parseInt(emotionId));
                  return;
                }
                _this2.dataChat.push(data);
                var playerCR = _this2.getPlayerById(data.f);
                if (playerCR) {
                  playerCR.receiveMessage(data.c);
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.TimeToUse) {
                _this2.countItemTarget -= 1;
                _this2.lblCountTarget.string = _this2.countItemTarget.toString();
                _this2.isShoot = false;
                _this2.toggleAuto.isChecked = false;
                _this2.toggleAuto.enabled = false;
                _this2.touchPad.active = false;
                _this2.listAirplane.forEach(function (airplane) {
                  var airplaneAnim = airplane.anim.children[0].children[0];
                  airplaneAnim.addComponent(Button).enabled = true;
                  airplane.target.active = false;
                  airplaneAnim.off("click");
                  airplaneAnim.on("click", function () {
                    if (_this2.targetAirplane != null) {
                      _this2.targetAirplane.target.active = false;
                    }
                    airplane.target.active = true;
                    _this2.targetAirplane = airplane;
                    _this2.toggleAuto.isChecked = true;
                    _this2.isShoot = true;
                    _this2.isTargetAirplane = true;
                  });
                });
                _this2.targetTimeCounter.node.active = true;
                _this2.timeToUseTarget = data;
                _this2.currentTimeToUseTarget = data;
                _this2.scheduleOnce(function () {
                  _this2.timeToUseTarget = 0;
                  _this2.currentTimeToUseTarget = 0;
                  _this2.targetTimeCounter.node.active = false;
                  _this2.touchPad.active = true;
                  _this2.toggleAuto.enabled = true;
                  _this2.isShoot = false;
                  _this2.toggleAuto.isChecked = false;
                  _this2.isTargetAirplane = false;
                  _this2.targetAirplane = null;
                  _this2.listAirplane.forEach(function (airplane) {
                    var fishAnim = airplane.anim.children[0].children[0];
                    fishAnim.removeComponent(Button);
                    airplane.target.active = false;
                  });
                  _this2.allowUseItemTarget = true;
                }, data);
              }
              if (code == SortiePhotonClient.EParameterCodes.ReleaseRadarResponse) {
                _this2.allowUseItemRadar = false;
                _this2.effectRadar.active = true;
                _this2.radarStatusSprite.active = true;
                for (var _i4 = 0; _i4 < data.length; _i4++) {
                  var _airplane2 = _this2.getAirplaneById(data[_i4]);
                  if (_airplane2) {
                    _airplane2.radarAffected = true;
                  }
                }
              }
              if (code == SortiePhotonClient.EParameterCodes.CancelRadarResponse) {
                _this2.allowUseItemRadar = true;
                _this2.effectRadar.active = false;
                _this2.radarStatusSprite.active = false;
                _this2.listAirplane.forEach(function (x) {
                  x.radarAffected = false;
                });
              }
              if (code == SortiePhotonClient.EParameterCodes.ShotMagneticMessage) {
                var playerSMM = _this2.getPlayerById(data.i);
                if (playerSMM) {
                  playerSMM.setGun(12);
                  var vxSMM = data.vx;
                  var vySMM = data.vy;
                  var _magnitude = Math.sqrt(vxSMM * vxSMM + vySMM * vySMM);
                  if (_magnitude > 1.5) {
                    vxSMM /= _magnitude;
                    vySMM /= _magnitude;
                  }
                  var radSMM = Math.atan2(vySMM, vxSMM);
                  if ([2, 4].includes(playerSMM.localPos)) {
                    radSMM = Math.PI - radSMM;
                  }
                  playerSMM.rotateGunByAngle(radSMM * Utils.Rad2Deg);
                  playerSMM.magneticEffect.active = true;
                  setTimeout(function () {
                    playerSMM.magneticEffect.active = false;
                    if (playerSMM.id == _this2.mePlayer.id) {
                      _this2.allowUseItemMagnetic = true;
                      var data = [];
                      data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.ReleaseMagnetic);
                      SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
                    }
                  }, 1000);
                }
              }
              if (code == SortiePhotonClient.EParameterCodes.ReleaseMagneticResponse) {
                var playerRMR = _this2.getPlayerById(data.i);
                if (data.i == _this2.mePlayer.id) {
                  _this2.countItemMagnetic = data.ri;
                  _this2.lblCountMagnetic.string = _this2.countItemMagnetic.toString();
                }
                if (playerRMR) {
                  playerRMR.setGun(data.g.gi);
                  data.r.f.forEach(function (f_id) {
                    var airplaneRMR = _this2.getAirplaneById(f_id);
                    if (airplaneRMR) {
                      airplaneRMR.effectMagnetic.active = true;
                      airplaneRMR.effectMagnetic.getComponent(Animation).play();
                    }
                  });
                  setTimeout(function () {
                    _this2.headShotResponseHandle(data.r);
                    _this2.allowUseItemMagnetic = true;
                  }, 2000);
                }
              }
              if (code == SortiePhotonClient.EParameterCodes.DropBombMessage) {
                var playerDBM = _this2.getPlayerById(data.i);
                if (playerDBM) {
                  var originalGunId = playerDBM.gunId;
                  playerDBM.setGun(11);
                  _this2.scheduleOnce(function () {
                    playerDBM.lblBet.string = "0";
                    var vxDBM = data.vx;
                    var vyDBM = data.vy;
                    var magnitude = Math.sqrt(vxDBM * vxDBM + vyDBM * vyDBM);
                    if (magnitude > 1.5) {
                      vxDBM /= magnitude;
                      vyDBM /= magnitude;
                    }
                    var radDBM = Math.atan2(vyDBM, vxDBM);
                    var bomb = instantiate(_this2.bombTemplate);
                    _this2.bombTemplate.parent.addChild(bomb);
                    bomb.active = true;
                    bomb.angle = radDBM * Utils.Rad2Deg;
                    switch (playerDBM.localPos) {
                      case 2:
                        bomb.angle = (Math.PI - radDBM) * Utils.Rad2Deg;
                        break;
                      case 3:
                        bomb.angle = (radDBM + Math.PI) * Utils.Rad2Deg;
                        break;
                      case 4:
                        bomb.angle = -radDBM * Utils.Rad2Deg;
                        break;
                    }
                    if ([2, 4].includes(playerDBM.localPos)) {
                      radDBM = Math.PI - radDBM;
                    }
                    playerDBM.rotateGunByAngle(radDBM * Utils.Rad2Deg);
                    var startPos = bomb.parent.getComponent(UITransform).convertToNodeSpaceAR(playerDBM.fireEffect.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO));
                    bomb.setPosition(startPos);
                    var dy = 0 - startPos.y;
                    var dx = dy / Math.tan(radDBM);
                    var endX = startPos.x + dx;
                    var endPos = v3(endX, 0);
                    tween(bomb).to(1, {
                      position: endPos
                    }, {
                      easing: "quadIn"
                    }).call(function () {
                      bomb.destroy();
                      setTimeout(function () {
                        playerDBM.setGun(originalGunId);
                      }, 500);
                      if (_this2.mePlayer.id == data.i) {
                        _this2.updateProcessAccumulate();
                        var payload = {
                          x: _this2.bombClickPath.x,
                          y: _this2.bombClickPath.y
                        };
                        var dataRB = [];
                        dataRB.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.ReleaseBomb);
                        dataRB.push(SortiePhotonClient.EParameterCodes.ReleaseBombMessage, JSON.stringify(payload));
                        SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, dataRB, true);
                      }
                    }).start();
                  }, _this2.mePlayer.id == data.i ? 0 : 1);
                }
              }
              if (code == SortiePhotonClient.EParameterCodes.ReleaseBombResponse) {
                var playerRBR = _this2.getPlayerById(data.i);
                if (playerRBR) {
                  playerRBR.setGun(data.g.gi);
                  _this2.headShotResponseHandle(data.r);
                }
              }
            });
          });
          this.updateSoundMusic();
        };
        _proto.headShotResponseHandle = function headShotResponseHandle(data) {
          var _this3 = this;
          var playerHSR = this.getPlayerById(data.i);
          if (playerHSR) {
            playerHSR.updateGold(data.go);
          }
          var airplane0 = this.getAirplaneById(data.f[0]);
          var position0 = airplane0 == null ? void 0 : airplane0.node.position;
          var _loop2 = function _loop2() {
              var airplane = _this3.getAirplaneById(data.f[i]);
              if (!airplane || airplane.node == null || airplane.node.active == false) return 1; // continue
              if (airplane && playerHSR) {
                airplane.die(playerHSR, data.gor);
              }
              if ((airplane == null ? void 0 : airplane.type) == Airplane.instance.BOSS_TYPE) {
                if (data.i == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
                  _this3.effectJackpotXK.active = true;
                  _this3.effectJackpotXK.getComponentInChildren(Label).string = '0';
                  // Tween.numberTo(this.effectJackpotXK.getComponentInChildren(Label), data.gor, 0.3, (value: number) => {
                  //     return value.toLocaleString("VN");
                  // });
                  var jackpotSpriteNode = _this3.effectJackpotXK.getChildByName('sprite_jp');
                  tween(jackpotSpriteNode).repeatForever(tween().to(0.5, {
                    scale: 1.2
                  }).to(0.5, {
                    scale: 1
                  })).start();
                  _this3.scheduleOnce(function () {
                    _this3.effectJackpotXK.active = false;
                    Tween.stopAllByTarget(jackpotSpriteNode);
                  }, 3);
                } else {
                  playerHSR.showMiniJackpot(data.gor);
                }
              }
              if (airplane.type >= 17 && (airplane == null ? void 0 : airplane.type) !== Airplane.instance.BOSS_TYPE) {
                var effectBigWinXK = instantiate(_this3.effectBigWinXK);
                effectBigWinXK.parent = _this3.mePlayer.node.parent;
                subY = playerHSR.serverPos == _this3.players[0].serverPos || playerHSR.serverPos == _this3.players[1].serverPos ? -135 : 200;
                effectBigWinXK.setPosition(playerHSR.node.x, subY);
                effectBigWinXK.active = true;
                effectBigWinXK.getChildByName('text').getComponent(Label).string = Utils.formatNumber(data.gor);
                effectBigWinXK.getChildByName('anim').getComponent(Animation).play();
                _this3.scheduleOnce(function () {
                  effectBigWinXK.getChildByName('anim').getComponent(Animation).stop();
                  effectBigWinXK.destroy();
                }, 3);
              }
            },
            subY;
          for (var i = 0; i < data.f.length; i++) {
            if (_loop2()) continue;
          }
          this.updateJackpotObject(data.j, null);
          if (data.i == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
            if (data.bi && Object.keys(data.bi).length > 0) {
              for (var key in data.bi) {
                if (data.bi.hasOwnProperty(key)) {
                  var bonusItem = data.bi[key]; // Array of numbers
                  this.updateDataBonusItem(bonusItem[0], bonusItem[1], bonusItem[2], position0);
                }
              }
            }
            this.updateProcessAccumulate(data.a);
          }
        };
        _proto.updateSoundMusic = function updateSoundMusic() {
          var playCount = parseInt(sys.localStorage.getItem("XK_play_count") || "0", 10);
          playCount++;
          sys.localStorage.setItem("XK_play_count", playCount.toString());
          var playSound = playCount % 2 === 0 ? this.playSound1 : this.playSound2;
          this.backgrounds.forEach(function (bg, index) {
            bg.active = playCount % 5 == index;
          });
          var isPlaying = JSON.parse(sys.localStorage.getItem("XK_is_playing"));
          var isEffectOn = JSON.parse(sys.localStorage.getItem("XK_is_effect_on"));

          // // audioEngine.setEffectsVolume(isEffectOn ? 1 : 0);
        };

        _proto.togglePlayMusic = function togglePlayMusic() {
          var isPlaying = JSON.parse(sys.localStorage.getItem("XK_is_playing") || "false");
          isPlaying = !isPlaying;
          sys.localStorage.setItem("XK_is_playing", JSON.stringify(isPlaying));
          if (isPlaying) {
            var playSound = Math.random() < 0.5 ? this.playSound1 : this.playSound2;
          }
        };
        _proto.onDestroy = function onDestroy() {
          // audioEngine.stopAll();
        };
        _proto.updateProcessAccumulate = function updateProcessAccumulate(value) {
          if (value === void 0) {
            value = null;
          }
          if (value !== null) {
            Lobby.instance.currentUserAccumulate = value;
          }
          this.processAccumulate.fillRange = Lobby.instance.currentUserAccumulate / Lobby.instance.clientParameterConfig.al;
          Tween.stopAllByTarget(this.processArrowNode);
          this.processArrowNode.active = this.processAccumulate.fillRange >= 1;
          if (this.processArrowNode.active) {
            this.allowUseItemBomb = true;
            tween(this.processArrowNode).repeatForever(tween().to(0.5, {
              y: 70
            }).to(0.5, {
              y: 50
            })).start();
          }
        };
        _proto.update = function update(dt) {
          this.updateShoot(dt);
          if (this.currentTimeToUseTarget > 0) {
            this.currentTimeToUseTarget -= dt;
            this.targetTimeCounter.fillRange = 1 - this.currentTimeToUseTarget / this.timeToUseTarget;
          }
          this.timeNoAction += dt;
          if (this.timeNoAction > 80) {
            this.timeNoAction = 0;
            App.instance.alertDialog.showMsg(App.instance.getTextLang('TLN_ONLINE_CONFIRM'));
          }
          if (this.shootCooldown > 0) {
            this.shootCooldown -= dt;
          }
          for (var i = this.bullets.length - 1; i >= 0; i--) {
            var bullet = this.bullets[i];
            if (bullet.node == null || !bullet.node.active) {
              this.bullets.splice(i, 1);
            } else {
              bullet.updateRealTime(dt);
            }
          }
          for (var _i5 = this.listAirplane.length - 1; _i5 >= 0; _i5--) {
            var airplane = this.listAirplane[_i5];
            if (airplane.node == null || !airplane.node.active) {
              this.listAirplane.splice(_i5, 1);
            } else {
              airplane.updateRealTime(dt);
            }
          }
          if (this.isTargetAirplane && this.targetAirplane && this.targetAirplane.node.activeInHierarchy) {
            var worldPosA = this.mePlayer.fireEffect.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
            var worldPosB = this.targetAirplane.node.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
            var start = this.node.getComponent(UITransform).convertToNodeSpaceAR(worldPosA);
            var end = this.node.getComponent(UITransform).convertToNodeSpaceAR(worldPosB);
            var direction = end.subtract(start);
            var distance = direction.length();
            var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
            var segmentSpacing = 14;
            var segmentCount = Math.floor(distance / segmentSpacing);
            while (this.lineSegments.length < segmentCount) {
              var segment = instantiate(this.lineTemplate);
              this.node.addChild(segment);
              this.lineSegments.push(segment);
            }
            for (var _i6 = 0; _i6 < this.lineSegments.length; _i6++) {
              var _segment = this.lineSegments[_i6];
              if (_i6 < segmentCount) {
                if (_i6 % 2 === 0) {
                  _segment.active = true;
                  var t = _i6 * segmentSpacing / distance;
                  var pos = start.lerp(end, t);
                  _segment.setPosition(pos);
                  _segment.angle = angle;
                } else {
                  _segment.active = false;
                }
              } else {
                _segment.active = false;
              }
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.lineSegments), _step; !(_step = _iterator()).done;) {
              var _segment2 = _step.value;
              _segment2.active = false;
            }
          }
        };
        _proto.updateShoot = function updateShoot(dt) {
          if (this.targetAirplane != null && this.targetAirplane.isDie) {
            this.targetAirplane = null;
            if (this.isTargetAirplane) {
              this.toggleAuto.isChecked = false;
              this.isShoot = false;
              this.isTargetAirplane = false;
            }
          }
          if (this.toggleAuto.isChecked) {
            if (this.targetAirplane != null) {
              var gunWorldPos = this.mePlayer.gunRotate.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
              var airplaneWorldPos = this.targetAirplane.node.getComponent(UITransform).convertToWorldSpaceAR(v3(this.targetAirplane.node.getComponent(UITransform).width / 2, 0));
              var distance = Utils.v2Distance(v2(airplaneWorldPos.x, airplaneWorldPos.y), v2(gunWorldPos.x, gunWorldPos.y));
              var dAngle = airplaneWorldPos.subtract(gunWorldPos);
              if (this.isTargetAirplane) {
                if (Math.abs(this.targetAirplane.node.x) > 960 || Math.abs(this.targetAirplane.node.y) > 540) {
                  this.isShoot = false;
                } else {
                  this.isShoot = true;
                  this.mePlayer.gunRotate.angle = Math.atan2(dAngle.y, dAngle.x) * Utils.Rad2Deg;
                }
              } else if (Math.abs(this.targetAirplane.node.x) > 960 * 0.8 || Math.abs(this.targetAirplane.node.y) > 540 * 0.8 || distance < 200) {
                this.targetAirplane = null;
                this.curIntervalFindTargetAirplane = 0;
              } else {
                this.mePlayer.gunRotate.angle = Math.atan2(dAngle.y, dAngle.x) * Utils.Rad2Deg;
              }
            } else if (!this.isTargetAirplane) {
              this.curIntervalFindTargetAirplane = Math.max(0, this.curIntervalFindTargetAirplane - dt);
              if (this.curIntervalFindTargetAirplane == 0) {
                this.findAirplaneInWorld();
              }
            }
          }
          if (this.isShoot && this.shootCooldown <= 0) {
            this.shootCooldown = this.shootInterval;
            var velocity = Utils.degreesToVec2(this.mePlayer.gunRotate.angle);
            this.shootingId = this.mePlayer.serverPos + "" + new Date().getTime() % 10000000;
            var data = {
              "id": this.shootingId,
              "gi": this.mePlayer.gunId,
              "p": this.mePlayer.serverPos,
              "vx": velocity.x,
              "vy": velocity.y,
              "t": new Date().toISOString(),
              "iu": 0
            };

            // audioEngine.playEffect(this.soundShootGun1, false);

            var params = [];
            params.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.PlayerShooting);
            params.push(SortiePhotonClient.EParameterCodes.ShootingMessage, JSON.stringify(data));
            SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
          }
        };
        _proto.findAirplaneInWorld = function findAirplaneInWorld() {
          this.curIntervalFindTargetAirplane = this.intervalFindTargetAirplane;
          var listAirplaneActiveInWorld = [];
          var gunWorldPos = this.mePlayer.gunRotate.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          for (var i = 0; i < this.listAirplane.length; i++) {
            var airplaneNode = this.listAirplane[i].node;
            if (airplaneNode.active && Math.abs(airplaneNode.position.x) <= 960 * 0.8 && Math.abs(airplaneNode.position.y) <= 540 * 0.8) {
              var fishWorldPos = airplaneNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
              var distance = Utils.v2Distance(v2(gunWorldPos.x, gunWorldPos.y), v2(fishWorldPos.x, fishWorldPos.y));
              if (distance >= 135) {
                listAirplaneActiveInWorld.push({
                  airplane: this.listAirplane[i],
                  distance: distance
                });
              }
            }
          }
          if (listAirplaneActiveInWorld.length > 0) {
            this.targetAirplane = listAirplaneActiveInWorld[Utils.randomRangeInt(0, listAirplaneActiveInWorld.length)]["airplane"];
          }
        };
        _proto.stopAutoShoot = function stopAutoShoot() {
          this.isShoot = false;
          this.toggleAuto.isChecked = false;
          // this.target.active = false;
          this.touchPad.active = true;
          this.curIntervalFindTargetAirplane = 0;
          this.targetAirplane = null;
        };
        _proto.getBullet = function getBullet(pos, gunId, isMe) {
          var bullet;
          var node = instantiate(this.bulletTemplate);
          node.parent = this.bulletTemplate.parent;
          var source = node.getChildByName(gunId + "").getComponent(PolygonCollider2D);
          var target = node.getComponent(PolygonCollider2D);
          target.points = source.points.map(function (p) {
            return v2(p.x, p.y);
          });
          bullet = node.getComponent(Bullet);
          bullet.positionID = pos;
          bullet.gunId = gunId;
          this.bullets.push(bullet);
          bullet.node.active = false;
          // if (isMe && this.isTargetAirplane) {
          //     bullet.bullet.active = false;
          //     bullet.bulletAim.active = true;
          // } else {
          bullet.bullet.getComponent(Sprite).spriteFrame = this.sprFramesBullet[gunId - 1];
          // }

          return bullet;
        };
        _proto.getAirplaneById = function getAirplaneById(id) {
          for (var i = 0; i < this.listAirplane.length; i++) {
            if (this.listAirplane[i].id == id) return this.listAirplane[i];
          }
          return null;
        };
        _proto.getPlayerById = function getPlayerById(id) {
          if (id <= "") return null;
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].id != "" && this.players[i].id == id) return this.players[i];
          }
          return null;
        };
        _proto.getPlayerByPos = function getPlayerByPos(pos) {
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].serverPos == pos) return this.players[i];
          }
          return null;
        };
        _proto.getPlayerByLocalPos = function getPlayerByLocalPos(pos) {
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].localPos == pos) return this.players[i];
          }
          return null;
        };
        _proto.showBossComing = function showBossComing() {
          var _this4 = this;
          this.bossComing.active = true;
          this.bossComing.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
          this.scheduleOnce(function () {
            _this4.bossComing.getComponent(sp.Skeleton).clearTrack(0);
            _this4.bossComing.active = false;
          }, 3);
        };
        _proto.getAirplaneAnimByType = function getAirplaneAnimByType(type) {
          var name = "air" + type;
          for (var i = 0; i < this.listAirplaneAnim.length; i++) {
            if (this.listAirplaneAnim[i].name != null && this.listAirplaneAnim[i].name != "" && this.listAirplaneAnim[i].name == name) {
              return this.listAirplaneAnim[i];
            }
          }
          return this.listAirplaneAnim[0];
        };
        _proto.actBetUp = function actBetUp() {
          var currentId = this.mePlayer.gunId;
          var newId = currentId >= 10 ? 1 : currentId + 1;
          this.actUpdateGun(newId);
        };
        _proto.actBetDown = function actBetDown() {
          var currentId = this.mePlayer.gunId;
          var newId = currentId <= 1 ? 10 : currentId - 1;
          this.actUpdateGun(newId);
        };
        _proto.actUpdateGun = function actUpdateGun(gunId) {
          var data = {
            i: gunId
          };
          var params = [];
          params.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.ChangeGun);
          params.push(SortiePhotonClient.EParameterCodes.ChangeGunMessage, JSON.stringify(data));
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
        };
        _proto.actBack = function actBack() {
          var _this5 = this;
          App.instance.confirmDialog.showMsg(App.instance.getTextLang("fish_pu6"), function (isConfirm) {
            if (isConfirm) {
              _this5.back();
              Lobby.instance.playMusic();
            }
          });
        };
        _proto.back = function back() {
          var _this6 = this;
          this.stopAutoShoot();
          this.scheduleOnce(function () {
            XuatKichSyncTimeControl.instance.resetPingOffline();
            _this6.node.active = false;
            _this6.lobby.getComponent(Lobby).show(true);
          }, 5);
          var params = [];
          params.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.LeaveRoom);
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
        };
        _proto.actShowPopupGuide = function actShowPopupGuide() {
          var popupGuide = instantiate(this.popupGuidePrefab);
          this.popupContainer.addChild(popupGuide);
          // @ts-ignore
          popupGuide.getComponent("PopupGuideXK").show();
        };
        _proto.setDataBonusItem = function setDataBonusItem(target, radar, magnetic) {
          this.countItemTarget = target;
          this.countItemRadar = radar;
          this.countItemMagnetic = magnetic;
          this.lblCountTarget.string = target.toString();
          this.lblCountRadar.string = radar.toString();
          this.lblCountMagnetic.string = magnetic.toString();
        };
        _proto.updateDataBonusItem = function updateDataBonusItem(target, radar, magnetic, position0) {
          var _this7 = this;
          if (target < 0 || radar < 0 || magnetic < 0) {
            return;
          }
          var createBonusNode = function createBonusNode(spriteFrame, targetNode) {
            var endWorldPos = targetNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
            var endLocalPos = _this7.listAirplaneNode.getComponent(UITransform).convertToNodeSpaceAR(endWorldPos);
            var bonusNode = new Node();
            bonusNode.addComponent(Sprite).spriteFrame = spriteFrame;
            bonusNode.setPosition(position0);
            _this7.listAirplaneNode.addChild(bonusNode);
            tween(bonusNode).to(2, {
              position: endLocalPos
            }).call(function () {
              return bonusNode.destroy();
            }).start();
          };
          if (target > 0) {
            createBonusNode(this.iconTarget, this.targetNode);
          }
          if (radar > 0) {
            createBonusNode(this.iconRadar, this.radarNode);
          }
          if (magnetic > 0) {
            createBonusNode(this.iconMagnetic, this.magneticNode);
          }
          this.setDataBonusItem(this.countItemTarget + target, this.countItemRadar + radar, this.countItemMagnetic + magnetic);
        };
        _proto.actUseTarget = function actUseTarget() {
          if (this.countItemTarget <= 0 || !this.allowUseItemTarget) {
            return;
          }
          this.allowUseItemTarget = false;
          this.stopAutoShoot();
          var data = [];
          data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.UseTarget);
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
        };
        _proto.actUseRadar = function actUseRadar() {
          var _this8 = this;
          if (this.countItemRadar <= 0 || !this.allowUseItemRadar) {
            return;
          }
          this.allowUseItemRadar = false;
          this.showToast(App.instance.getTextLang("xk_no7"), false);
          this.radarClickNode.active = true;
          this.radarClickNode.on(Node.EventType.TOUCH_END, function (event) {
            var touchPos = event.getLocation();
            var uiTransform = _this8.radarClickNode.getComponent(UITransform);
            var localPos = uiTransform.convertToNodeSpaceAR(new Vec3(touchPos.x, touchPos.y, 0));
            _this8.effectRadar.setPosition(localPos);
            var targetNode = _this8.radarClickNode.getChildByName('radar_target');
            targetNode.setPosition(localPos);
            targetNode.active = true;
            var payload = {
              i: Configs.Login.AccountID + ":" + Configs.Login.PortalID,
              x: touchPos.x,
              y: touchPos.y
            };
            var data = [];
            data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.UseRadar);
            data.push(SortiePhotonClient.EParameterCodes.DropRadarMessage, JSON.stringify(payload));
            SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
            _this8.toast.node.active = false;
            _this8.countItemRadar -= 1;
            _this8.lblCountRadar.string = _this8.countItemRadar.toString();
            _this8.radarClickNode.active = false;
            _this8.scheduleOnce(function () {
              targetNode.active = false;
            }, 2);
          }, this.radarClickNode);
        };
        _proto.actUseMagnetic = function actUseMagnetic() {
          var _this9 = this;
          if (this.countItemMagnetic <= 0 || !this.allowUseItemMagnetic) {
            return;
          }
          this.allowUseItemMagnetic = false;
          this.mePlayer.setGun(12);
          this.magneticClickNode.active = true;
          this.magneticClickNode.on(Node.EventType.TOUCH_END, function (event) {
            var touchPos = event.getLocation();
            _this9.mePlayer.rotateGun(touchPos);
            var velocity = Utils.degreesToVec2(_this9.mePlayer.gunRotate.angle);
            var payload = {
              i: Configs.Login.AccountID + ":" + Configs.Login.PortalID,
              gx: _this9.mePlayer.gunRotate.x,
              gy: _this9.mePlayer.gunRotate.y,
              vx: velocity.x,
              vy: velocity.y,
              a: _this9.mePlayer.gunRotate.angle
            };
            var data = [];
            data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.ShotMagnetic);
            data.push(SortiePhotonClient.EParameterCodes.ShotMagneticMessage, JSON.stringify(payload));
            SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
            _this9.magneticClickNode.active = false;
          }, this.magneticClickNode);
        };
        _proto.actDropBomb = function actDropBomb() {
          var _this10 = this;
          if (!this.allowUseItemBomb) return;
          this.allowUseItemBomb = false;
          this.mePlayer.setGun(11);
          this.mePlayer.lblBet.string = "0";
          Tween.stopAllByTarget(this.processArrowNode);
          this.processArrowNode.active = false;
          this.bombClickNode.active = true;
          this.bombClickNode.on(Node.EventType.TOUCH_START, function (event) {
            var touchPos = event.getLocation();
            _this10.mePlayer.rotateGun(touchPos);
          }, this.bombClickNode);
          this.bombClickNode.on(Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = event.getLocation();
            _this10.mePlayer.rotateGun(touchPos);
          }, this.bombClickNode);
          this.bombClickNode.on(Node.EventType.TOUCH_END, function (event) {
            var touchPos = event.getLocation();
            _this10.bombClickPath = touchPos;
            _this10.mePlayer.rotateGun(touchPos);
            var velocity = Utils.degreesToVec2(_this10.mePlayer.gunRotate.angle);
            var payload = {
              i: Configs.Login.AccountID + ":" + Configs.Login.PortalID,
              gi: 101,
              vx: velocity.x,
              vy: velocity.y
            };
            var data = [];
            data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.DropBomb);
            data.push(SortiePhotonClient.EParameterCodes.DropBombMessage, JSON.stringify(payload));
            SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
            _this10.bombClickNode.active = false;
          }, this.bombClickNode);
        };
        _proto.showToast = function showToast(message, autoHide) {
          var _this11 = this;
          if (autoHide === void 0) {
            autoHide = true;
          }
          this.toast.node.active = true;
          this.toast.string = message;
          if (autoHide) {
            this.scheduleOnce(function () {
              _this11.toast.node.active = false;
            }, 2);
          }
        };
        _proto.moveNodeToPlayer = function moveNodeToPlayer(node, player) {
          var worldPos = player.avatarNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          var parent = node.parent;
          var localPos = parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          tween(node).to(1, {
            position: new Vec3(localPos.x, localPos.y, 0)
          }).call(function () {
            node.destroy();
          }).start();
        };
        _proto.toggleAutoPlay = function toggleAutoPlay(event) {
          var target = event.target;
          target.getChildByName('on').active = !target.getChildByName('on').active;
          target.getChildByName('off').active = !target.getChildByName('off').active;
        };
        _proto.updateJackpotObject = function updateJackpotObject(jackpot, percent) {
          if (typeof jackpot === "number" && !isNaN(jackpot)) {
            this.currentJackpot = jackpot;
          }
          if (typeof percent === "number" && !isNaN(percent)) {
            this.currentJackpotPercent = percent;
          }

          // Tween.numberTo(this.lblJackpot, this.currentJackpot, 0.3);
          this.lblPercentJackpot.string = this.currentJackpotPercent * 100 + "%";
          var jackpotValue = Math.floor(this.currentJackpot * this.currentJackpotPercent);
          // Tween.numberTo(this.lblJackpotPerGun, jackpotValue, 0.3);
        };

        _proto.actChat = function actChat() {
          var popupChat = instantiate(this.popupChatPrefab);
          this.popupContainer.addChild(popupChat);
          // @ts-ignore
          popupChat.getComponent("XuatKich.PopupChat").showDetail(this.dataChat);
        };
        _proto.toggleBtnChatAndAuto = function toggleBtnChatAndAuto() {
          var duration = 0.5;
          var hideTween = function hideTween(node) {
            var uiOpacity = node.getComponent(UIOpacity);
            if (!uiOpacity) return;
            tween(node).to(duration, {
              position: v3(0, 0)
            }).to(0, {}, {
              onUpdate: function onUpdate() {
                uiOpacity.opacity = 0;
              }
            }).call(function () {
              node.active = false;
            }).start();
          };
          var showTween = function showTween(node, pos) {
            var uiOpacity = node.getComponent(UIOpacity);
            if (!uiOpacity) return;
            node.setPosition(v3(0, 0));
            uiOpacity.opacity = 0;
            node.active = true;
            tween(node).to(duration, {
              position: pos
            }, {
              onUpdate: function onUpdate() {
                uiOpacity.opacity = Math.min(uiOpacity.opacity + 10, 255);
              }
            }).call(function () {
              uiOpacity.opacity = 255;
            }).start();
          };
          var isActive = this.autoBtnNode.active && this.chatBtnNode.active;
          if (isActive) {
            hideTween(this.autoBtnNode);
            hideTween(this.chatBtnNode);
          } else {
            showTween(this.autoBtnNode, v3(-140, 190, 0));
            showTween(this.chatBtnNode, v3(140, 190, 0));
          }
        };
        _proto.toggleEmotionInGame = function toggleEmotionInGame(_event, data) {
          this.emotionInGames[data - 1].active = !this.emotionInGames[data - 1].active;
        };
        _proto.sendEmotionInGame = function sendEmotionInGame(_event, dataStr) {
          var _dataStr$split = dataStr.split("__"),
            localPos = _dataStr$split[0],
            emotion = _dataStr$split[1];
          var player = this.getPlayerByLocalPos(parseInt(localPos) + 1);
          var payload = {
            c: "__EIG__" + player.id + "__" + emotion
          };
          var data = [];
          data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.Chat);
          data.push(SortiePhotonClient.EParameterCodes.ChatMessage, JSON.stringify(payload));
          SortiePhotonClient.getInstance().sendOperation(SortiePhotonClient.EOperationCodes.Game, data, true);
        };
        _proto.displayEmotion = function displayEmotion(formId, toId, emotionId) {
          var player = this.getPlayerById(formId);
          var toPlayer = this.getPlayerById(toId);
          if (!player || !toPlayer) return;
          var node = new Node();
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.sprEmotionInGames[emotionId - 1];
          node.position = v3(0, 0, 0);
          node.setScale(2, 2, 2);
          node.active = true;
          player.avatarNode.addChild(node);
          this.moveNodeToPlayer(node, toPlayer);
        };
        return Play;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lobby", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblRoomId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "touchPad", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sprFramesBullet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bulletTemplate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bombTemplate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "listAirplaneAnim", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "listAirplaneNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "airplaneTemplate", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "toggleAuto", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "soundShootGun1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "soundShootGun2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "soundShootGun3", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "soundShootGun4", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "soundShootGunUp", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "soundShootGunSpecial", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "playSound1", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "playSound2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "gun", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "backgrounds", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "sprEmotions", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "sprEmotionInGames", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpot", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotPerGun", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "lblPercentJackpot", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bossComing", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "popupChatPrefab", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "lblCountRadar", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "lblCountTarget", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "lblCountMagnetic", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "targetTimeCounter", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "radarStatusSprite", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "processAccumulate", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "processArrowNode", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "iconTarget", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "radarNode", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "iconRadar", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "magneticNode", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "iconMagnetic", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "lineTemplate", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "radarClickNode", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "effectRadar", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "magneticClickNode", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "effectMagnetic", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "bombClickNode", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "effectBigWinXK", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "effectJackpotXK", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnNode", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "chatBtnNode", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "emotionInGames", [_dec57], {
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

System.register("chunks:///_virtual/Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config.ts', './Play.ts', './App.ts', './Lobby.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Sprite, SpriteFrame, Layout, tween, v3, UIOpacity, Vec2, Tween, Vec3, Component, Configs, Play, App, Lobby, Utils;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Layout = module.Layout;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Vec2 = module.Vec2;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      Play = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Lobby = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "38c41I6hn9C3YVc9C5XkPoS", "Player", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Player = exports('default', (_dec = menu("Sortie/Player"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property([SpriteFrame]), _dec9 = property(Sprite), _dec10 = property([Node]), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);
        function Player() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lblNickname", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCoin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBet", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarSprite", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunRotate", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprGunBars", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunBar", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guns", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageLabel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniJackpotNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniJackpotLabel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fireEffect", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "magneticEffect", _descriptor15, _assertThisInitialized(_this));
          _this.id = "";
          _this.username = "";
          _this.nickname = "";
          _this.coin = 0;
          _this.avatar = "";
          _this.serverPos = -1;
          _this.localPos = -1;
          _this.gunId = 1;
          return _this;
        }
        var _proto = Player.prototype;
        _proto.set = function set(data) {
          this.id = data.id;
          this.nickname = data.n;
          this.coin = data.go;
          this.avatar = data.a;
          this.gunRotate.angle = 90;
          this.node.active = true;
          this.serverPos = data.p;
          this.messageNode.active = false;
          if (this.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
            Play.instance.setDataBonusItem(data.Items[0], data.Items[1], data.Items[2]);
          }
          this.lblNickname.string = this.nickname;
          this.avatarSprite.spriteFrame = App.instance.getAvatarSpriteFrame(this.avatar);
          this.setGun(data.gi);
        };
        _proto.updateGold = function updateGold(coin) {
          this.coin = coin;
        };
        _proto.leave = function leave() {
          this.id = "";
          this.nickname = "";
          this.coin = 0;
          this.avatar = "";
          this.node.active = false;
          this.serverPos = -1;
          this.localPos = -1;
          this.gunId = 1;
          this.messageNode.active = false;
        };
        _proto.setGun = function setGun(gunId) {
          var _this2 = this;
          if (this.gunId === gunId) return;
          var currentGun = this.guns[this.gunId - 1];
          var newGun = this.guns[gunId - 1];
          var layout = this.gunRotate.children[0].getComponent(Layout);
          layout.enabled = false;
          layout.updateLayout();
          this.guns.forEach(function (gun, idx) {
            gun.active = idx === _this2.gunId - 1;
          });
          tween(currentGun).parallel(tween().to(0.2, {
            position: v3(0, -100, 0)
          }, {
            easing: "quadIn"
          }), tween(currentGun.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }, {
            easing: "fade"
          })).call(function () {
            currentGun.active = false;
            currentGun.getComponent(UIOpacity).opacity = 255;
            _this2.gunBar.spriteFrame = _this2.sprGunBars[gunId - 1];
            newGun.getComponent(UIOpacity).opacity = 0;
            newGun.setPosition(v3(0, -50, 0));
            newGun.active = true;
            tween(newGun).parallel(tween().to(0.25, {
              position: v3(0, 0, 0)
            }, {
              easing: "quadOut"
            }), tween(newGun.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }, {
              easing: "fade"
            })).call(function () {
              var _paddingMap$gunId;
              var paddingMap = {
                1: -50,
                2: -100,
                3: -120,
                4: -100,
                5: -100,
                6: -120,
                7: -80,
                8: -150,
                9: -150,
                10: -150,
                11: -150,
                12: -150
              };
              layout.paddingBottom = (_paddingMap$gunId = paddingMap[gunId]) != null ? _paddingMap$gunId : 0;
              layout.enabled = true;
              layout.updateLayout();
              _this2.gunId = gunId;
              _this2.guns.forEach(function (gun, idx) {
                gun.active = idx === _this2.gunId - 1;
              });
            }).start();
          }).start();
          if (gunId > 10) return;
          var configGun = Lobby.instance.listGunConfig.find(function (gun) {
            return gun.i === gunId;
          });
          if (configGun) {
            this.lblBet.string = Utils.formatNumber(configGun.v);
            if (this.id == Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              Play.instance.updateJackpotObject(null, configGun.j);
            }
          }
        };
        _proto.rotateGun = function rotateGun(touchPos) {
          var gunWorldPos = this.gunRotate.getWorldPosition();
          var d = new Vec2(touchPos.x - gunWorldPos.x, touchPos.y - gunWorldPos.y);
          var angle = Math.atan2(d.y, d.x) * Utils.Rad2Deg;
          this.rotateGunByAngle(angle);
        };
        _proto.rotateGunByAngle = function rotateGunByAngle(angle) {
          if (angle < -90) {
            angle = 180;
          } else if (angle < 0 && angle > -90) {
            angle = 0;
          }
          this.gunRotate.angle = angle;
          this.gunRotate.setPosition(v3(0, [1, 2].includes(this.localPos) ? -15 : 15, 0));
        };
        _proto.receiveMessage = function receiveMessage(message) {
          var _this3 = this;
          if (message.includes("__EIG__")) return;
          if (message.includes("__E__")) {
            this.displayEmotion(parseInt(message.replace("__E__", "")));
            return;
          }
          tween(this.messageNode).call(function () {
            _this3.messageNode.active = true;
            _this3.messageLabel.string = message;
          }).delay(3).call(function () {
            _this3.messageNode.active = false;
          }).start();
        };
        _proto.displayEmotion = function displayEmotion(id) {
          var spriteFrame = Play.instance.sprEmotions[id - 1];
          if (!spriteFrame) return;
          var node = new Node();
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = spriteFrame;
          node.setPosition(v3(0, -15, 0));
          node.setScale(v3(1.5, 1.5, 1.5));
          node.active = true;
          var opacityComp = node.getComponent(UIOpacity);
          if (!opacityComp) {
            opacityComp = node.addComponent(UIOpacity);
          }
          opacityComp.opacity = 255;
          this.avatarNode.addChild(node);
          Tween.stopAllByTarget(node);
          Tween.stopAllByTarget(opacityComp);
          tween(node).to(0.3, {
            scale: v3(2, 2, 2)
          }, {
            easing: 'backOut'
          }).to(1.2, {
            position: v3(0, [1, 2].includes(this.localPos) ? 60 : -60, 0)
          }, {
            easing: 'sineOut'
          }).start();
          tween(opacityComp).delay(1.5).to(0.4, {
            opacity: 0
          }, {
            easing: 'fade'
          }).call(function () {
            return node.destroy();
          }).start();
        };
        _proto.startAnimFireGun = function startAnimFireGun() {
          Tween.stopAllByTarget(this.gunRotate);
          var originalPos = this.gunRotate.getPosition().clone();
          var recoilDistance = 10;
          var scaleUp = 1.1;
          var angleRad = this.gunRotate.angle * (Math.PI / 180);
          var offsetX = -Math.cos(angleRad) * recoilDistance;
          var offsetY = -Math.sin(angleRad) * recoilDistance;
          var recoilPos = v3(originalPos.x + offsetX, originalPos.y + offsetY);
          tween(this.gunRotate).to(0.05, {
            position: recoilPos
          }, {
            easing: 'sineOut'
          }).to(0.08, {
            position: originalPos
          }, {
            easing: 'sineIn'
          }).start();
          tween(this.gunRotate).to(0.05, {
            scale: v3(scaleUp, scaleUp, scaleUp)
          }, {
            easing: 'sineOut'
          }).to(0.08, {
            scale: Vec3.ONE
          }, {
            easing: 'sineIn'
          }).start();
        };
        _proto.showMiniJackpot = function showMiniJackpot(gor) {
          var _this4 = this;
          if (!this.miniJackpotNode) return;
          this.miniJackpotNode.active = true;
          this.miniJackpotLabel.string = gor.toLocaleString("VN");
          tween(this.miniJackpotNode).repeatForever(tween().to(0.5, {
            scale: 1.2
          }).to(0.5, {
            scale: 1
          })).start();
          this.scheduleOnce(function () {
            Tween.stopAllByTarget(_this4.miniJackpotNode);
            _this4.miniJackpotNode.active = false;
          }, 3);
        };
        return Player;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblNickname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblCoin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblBet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "avatarNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "avatarSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gunRotate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprGunBars", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gunBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "guns", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "messageNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "messageLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "miniJackpotNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "miniJackpotLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "fireEffect", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "magneticEffect", [_dec16], {
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

System.register("chunks:///_virtual/PopupExchangeCoin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './SortiePhotonClient.ts', './Config.ts', './App.ts', './PhotonClient.ts', './Utils.ts', './Lobby.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, EditBox, instantiate, Label, UIOpacity, Dialog, SortiePhotonClient, Configs, App, PhotonClient, Utils, Lobby;
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
      Node = module.Node;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Lobby = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "c8be4wHHydLBbrYw4j4IPGj", "PopupExchangeCoin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupExchangeCoin = exports('default', (_dec = menu("Sortie/PopupExchangeCoin"), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(EditBox), _dec6 = property(EditBox), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupExchangeCoin, _Dialog);
        function PopupExchangeCoin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprCaptcha", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItems", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTemplate", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbCaptcha", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbAmount", _descriptor5, _assertThisInitialized(_this));
          _this.isCashOut = false;
          _this.verifyCode = "";
          _this.cashOutMin = 0;
          _this.cashInMin = 0;
          return _this;
        }
        var _proto = PopupExchangeCoin.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var data = [SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.CashoutMin, SortiePhotonClient.EParameterCodes.PortalId, Configs.Login.PortalID];
          SortiePhotonClient.getInstance().sendOperation(SortiePhotonClient.EOperationCodes.Shop, data, true);
          SortiePhotonClient.getInstance().addResponseListener(SortiePhotonClient.EOperationCodes.Shop, function (res) {
            if (res.errCode < 0) {
              App.instance.alertDialog.showMsg(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code != SortiePhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (e) {}
              }
              if (code == SortiePhotonClient.EParameterCodes.CaptchaResponse) {
                _this2.verifyCode = data[0];
                Utils.loadSpriteFrameFromBase64(data[1], function (sprFrame) {
                  _this2.sprCaptcha.spriteFrame = sprFrame;
                });
              }
              if (code == SortiePhotonClient.EParameterCodes.CashInResponse) {
                App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_success'));
                Lobby.instance.updateBalance(data.go, data.ge);
                _this2.dismiss();
              }
              if (code == SortiePhotonClient.EParameterCodes.CashOutResponse) {
                App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_success'));
                Lobby.instance.updateBalance(data.go, data.ge);
                _this2.dismiss();
              }
              if (code == SortiePhotonClient.EParameterCodes.CashoutMinResponse) {
                _this2.cashOutMin = JSON.parse(data.value);
              }
            });
          });
        };
        _proto.show = function show() {
          this.updateSA();
        };
        _proto.clearEdb = function clearEdb() {
          this.edbAmount.string = "";
          this.edbCaptcha.string = "";
        };
        _proto.updateSA = function updateSA() {
          var _this3 = this;
          this.isCashOut = false;
          var dataSA = Lobby.instance.clientParameterConfig.sa;
          this.cashInMin = dataSA[0];
          this.listItems.removeAllChildren();
          var _loop = function _loop(i) {
            var item = instantiate(_this3.itemTemplate);
            item.active = true;
            item.getChildByName('text').getComponent(Label).string = Utils.formatNumber(dataSA[i]);
            item.parent = _this3.listItems;
            item.on(Node.EventType.TOUCH_END, function () {
              _this3.edbAmount.string = dataSA[i].toString();
            });
          };
          for (var i = 0; i < dataSA.length; i++) {
            _loop(i);
          }
          this.edbAmount.string = "";
          this.edbCaptcha.string = "";
        };
        _proto.updateSAO = function updateSAO() {
          var _this4 = this;
          this.isCashOut = true;
          this.listItems.removeAllChildren();
          var dataSAO = Lobby.instance.clientParameterConfig.sao;
          var _loop2 = function _loop2(i) {
            var item = instantiate(_this4.itemTemplate);
            item.active = true;
            item.getChildByName('text').getComponent(Label).string = Utils.formatNumber(dataSAO[i]);
            item.parent = _this4.listItems;
            if (dataSAO[i] < _this4.cashOutMin) {
              item.getComponent(UIOpacity).opacity = 100;
            } else {
              item.on(Node.EventType.TOUCH_END, function () {
                _this4.edbAmount.string = dataSAO[i].toString();
              });
            }
          };
          for (var i = 0; i < dataSAO.length; i++) {
            _loop2(i);
          }
          this.edbAmount.string = "";
          this.edbCaptcha.string = "";
        };
        _proto.actSubmit = function actSubmit() {
          var amount = parseInt(this.edbAmount.string);
          if (this.isCashOut && amount < this.cashOutMin) {
            App.instance.alertDialog.showMsg(App.instance.getTextLang('fish_err999001').replace("{0}", Utils.formatNumber(this.cashOutMin)));
            return;
          } else if (amount < this.cashInMin) {
            App.instance.alertDialog.showMsg(App.instance.getTextLang('TLN_MIN_GOLD_TO_CHANGE').replace("{0}", Utils.formatNumber(this.cashInMin)));
            return;
          }
          var payload = {
            a: amount,
            c: this.edbCaptcha.string,
            v: this.verifyCode
          };
          var data = [];
          data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, this.isCashOut ? SortiePhotonClient.EOperationSubCodes.CashOutGold : SortiePhotonClient.EOperationSubCodes.CashInGold);
          data.push(SortiePhotonClient.EParameterCodes.ExchangeMessage, JSON.stringify(payload));
          SortiePhotonClient.getInstance().sendOperation(SortiePhotonClient.EOperationCodes.Shop, data, true);
        };
        return PopupExchangeCoin;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprCaptcha", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listItems", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "edbCaptcha", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "edbAmount", [_dec6], {
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

System.register("chunks:///_virtual/PopupGuideXK.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Dialog;
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
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a1119VQ3FJAm4KGSDTwkxpw", "PopupGuideXK", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PopupGuideXK = exports('default', (_dec = menu("Sortie/PopupGuide"), _dec2 = property([Node]), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupGuideXK, _Dialog);
        function PopupGuideXK() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contents", _descriptor, _assertThisInitialized(_this));
          _this.currentPage = 1;
          return _this;
        }
        var _proto = PopupGuideXK.prototype;
        _proto.start = function start() {
          this.togglePage(this.currentPage);
        };
        _proto.togglePage = function togglePage(index) {
          this.currentPage = index;
          for (var i = 0; i < this.contents.length; i++) {
            this.contents[i].active = i == index - 1;
          }
        };
        _proto.nextPage = function nextPage() {
          if (this.currentPage == 6) return;
          this.currentPage++;
          this.togglePage(this.currentPage);
        };
        _proto.prevPage = function prevPage() {
          if (this.currentPage == 1) return;
          this.currentPage--;
          this.togglePage(this.currentPage);
        };
        return PopupGuideXK;
      }(Dialog), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "contents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './App.ts', './SortiePhotonClient.ts', './PhotonClient.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, sys, Button, Color, Dialog, App, SortiePhotonClient, PhotonClient, Configs;
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
      instantiate = module.instantiate;
      sys = module.sys;
      Button = module.Button;
      Color = module.Color;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _EHistoryTypeText, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "887eeFQ/OxN/parv0YdYZPV", "PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EHistoryType = /*#__PURE__*/function (EHistoryType) {
        EHistoryType[EHistoryType["Shooting"] = 0] = "Shooting";
        EHistoryType[EHistoryType["FighterDead"] = 1] = "FighterDead";
        EHistoryType[EHistoryType["SupplyChestDead"] = 2] = "SupplyChestDead";
        EHistoryType[EHistoryType["AmmunitionChestDead"] = 3] = "AmmunitionChestDead";
        EHistoryType[EHistoryType["BossDead"] = 4] = "BossDead";
        EHistoryType[EHistoryType["Magnetic"] = 5] = "Magnetic";
        EHistoryType[EHistoryType["Bomb"] = 6] = "Bomb";
        return EHistoryType;
      }(EHistoryType || {});
      var EHistoryTypeText = (_EHistoryTypeText = {}, _EHistoryTypeText[EHistoryType.Shooting] = {
        vi: "Bắn súng",
        en: "Shooting",
        id: "Menembak",
        km: "បាញ់ប្រហារ",
        th: "ยิงปืน",
        zh: "射击"
      }, _EHistoryTypeText[EHistoryType.FighterDead] = {
        vi: "Máy bay bị tiêu diệt",
        en: "Fighter destroyed",
        id: "Pesawat tempur dihancurkan",
        km: "យន្តហោះត្រូវបានផ្ដាច់ជីវិត",
        th: "เครื่องบินถูกทำลาย",
        zh: "战斗机被摧毁"
      }, _EHistoryTypeText[EHistoryType.SupplyChestDead] = {
        vi: "Hòm tiếp tế bị phá hủy",
        en: "Supply chest destroyed",
        id: "Peti suplai dihancurkan",
        km: "ប្រអប់បញ្ជូនត្រូវបានបំផ្លាញ",
        th: "กล่องเสบียงถูกทำลาย",
        zh: "补给箱被摧毁"
      }, _EHistoryTypeText[EHistoryType.AmmunitionChestDead] = {
        vi: "Hòm đạn bị phá hủy",
        en: "Ammunition chest destroyed",
        id: "Peti amunisi dihancurkan",
        km: "ប្រអប់កាំជ្រួចត្រូវបានបំផ្លាញ",
        th: "กล่องกระสุนถูกทำลาย",
        zh: "弹药箱被摧毁"
      }, _EHistoryTypeText[EHistoryType.BossDead] = {
        vi: "Boss bị tiêu diệt",
        en: "Boss defeated",
        id: "Boss dikalahkan",
        km: "មេឃ្លាំងត្រូវបានផ្ដាច់ជីវិត",
        th: "บอสถูกกำจัด",
        zh: "Boss 被击败"
      }, _EHistoryTypeText[EHistoryType.Magnetic] = {
        vi: "Hút từ tính",
        en: "Magnet",
        id: "Magnet",
        km: "ម៉ាញេទិច",
        th: "แม่เหล็ก",
        zh: "磁力吸取"
      }, _EHistoryTypeText[EHistoryType.Bomb] = {
        vi: "Nổ bom",
        en: "Bomb explosion",
        id: "Ledakan bom",
        km: "ផ្ទុះគ្រាប់បូម",
        th: "ระเบิด",
        zh: "炸弹爆炸"
      }, _EHistoryTypeText);
      var EHistoryTab = /*#__PURE__*/function (EHistoryTab) {
        EHistoryTab[EHistoryTab["GamePlayHistory"] = 0] = "GamePlayHistory";
        EHistoryTab[EHistoryTab["CashInHistory"] = 1] = "CashInHistory";
        EHistoryTab[EHistoryTab["CashOutHistory"] = 2] = "CashOutHistory";
        return EHistoryTab;
      }(EHistoryTab || {});
      var EPaginationType = /*#__PURE__*/function (EPaginationType) {
        EPaginationType[EPaginationType["GamePlayHistory"] = 0] = "GamePlayHistory";
        EPaginationType[EPaginationType["CashInHistory"] = 1] = "CashInHistory";
        EPaginationType[EPaginationType["CashOutHistory"] = 2] = "CashOutHistory";
        return EPaginationType;
      }(EPaginationType || {});
      var PopupHistory = exports('default', (_dec = menu("Sortie/PopupHistory"), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property([Node]), _dec5 = property([Label]), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupHistory, _Dialog);
        function PopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabActiveIcons", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabInactiveIcons", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabContents", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabLabels", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemGamePlayHistory", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemGamePlayHistory", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageButtonPrefab", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationContainer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemCashInHistory", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCashInHistory", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageButtonPrefabCashIn", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationContainerCashIn", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemCashOutHistory", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCashOutHistory", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageButtonPrefabCashOut", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationContainerCashOut", _descriptor16, _assertThisInitialized(_this));
          _this.currentIndex = 0;
          _this.currentPage = 1;
          _this.totalPages = 1;
          _this.historyData = [];
          _this.pageSize = 8;
          _this.currentPageCashIn = 1;
          _this.totalPagesCashIn = 1;
          _this.historyDataCashIn = [];
          _this.currentPageCashOut = 1;
          _this.totalPagesCashOut = 1;
          _this.historyDataCashOut = [];
          return _this;
        }
        var _proto = PopupHistory.prototype;
        _proto.start = function start() {
          this.listenerDataGamePlayHistory();
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.sendDataGamePlayHistory();
        };
        _proto.showHistory = function showHistory(data, page, listItem, itemPrefab, paginationContainer, currentPageRef, totalPagesRef, updatePaginationFunc, historyType) {
          var _this2 = this;
          var startIdx = (page - 1) * this.pageSize;
          var endIdx = startIdx + this.pageSize;
          var paginatedData = data.slice(startIdx, endIdx);
          listItem.removeAllChildren();
          paginatedData.forEach(function (itemData) {
            var _item$getChildByName, _item$getChildByName2, _item$getChildByName3, _item$getChildByName4, _EHistoryTypeText$ite, _item$getChildByName5, _item$getChildByName6, _item$getChildByName7;
            var item = instantiate(itemPrefab);
            item.parent = listItem;
            item.active = true;
            var lblTime = (_item$getChildByName = item.getChildByName("time")) == null ? void 0 : _item$getChildByName.getComponent(Label);
            if (lblTime) lblTime.string = _this2.formatDateTime(itemData.CreatedTime || itemData.ct);
            var langCode = sys.localStorage.getItem("langCode") || "vi";
            switch (historyType) {
              case EHistoryTab.GamePlayHistory:
                var lblRoomId = (_item$getChildByName2 = item.getChildByName("room")) == null ? void 0 : _item$getChildByName2.getComponent(Label);
                var lblBetAmount = (_item$getChildByName3 = item.getChildByName("b")) == null ? void 0 : _item$getChildByName3.getComponent(Label);
                var lblDes = (_item$getChildByName4 = item.getChildByName("des")) == null ? void 0 : _item$getChildByName4.getComponent(Label);
                var amount = itemData.cr - itemData.b;
                var amountText = amount.toLocaleString("vi-VN");
                if (amount > 0) {
                  amountText = "+" + amountText;
                }
                if (lblRoomId) lblRoomId.string = itemData.ri.toString();
                if (lblBetAmount) lblBetAmount.string = amountText;
                if (lblDes) lblDes.string = (_EHistoryTypeText$ite = EHistoryTypeText[itemData.t][langCode]) != null ? _EHistoryTypeText$ite : "";
                break;
              case EHistoryTab.CashInHistory:
              case EHistoryTab.CashOutHistory:
                var lblAmount = (_item$getChildByName5 = item.getChildByName("amount")) == null ? void 0 : _item$getChildByName5.getComponent(Label);
                var lblBalance = (_item$getChildByName6 = item.getChildByName("balance")) == null ? void 0 : _item$getChildByName6.getComponent(Label);
                var lblDesCash = (_item$getChildByName7 = item.getChildByName("des")) == null ? void 0 : _item$getChildByName7.getComponent(Label);
                if (lblAmount) lblAmount.string = parseInt(itemData.Amount).toLocaleString("vi-VN");
                if (lblBalance) lblBalance.string = itemData.Balance.toLocaleString("vi-VN");
                if (lblDesCash) lblDesCash.string = historyType == EHistoryTab.CashInHistory ? App.instance.getTextLang('BUY_GEM') : App.instance.getTextLang('BUY_GAM');
                break;
            }
          });
          updatePaginationFunc.call(this);
        };
        _proto.showGamePlayHistory = function showGamePlayHistory(data, page) {
          if (page === void 0) {
            page = 1;
          }
          this.historyData = data;
          this.totalPages = Math.min(10, Math.ceil(data.length / this.pageSize));
          this.currentPage = page;
          this.showHistory(data, page, this.listItemGamePlayHistory, this.itemGamePlayHistory, this.paginationContainer, this.currentPage, this.totalPages, this.updatePaginationButtonsGamePlay.bind(this), EHistoryTab.GamePlayHistory);
        };
        _proto.showCashInHistory = function showCashInHistory(data, page) {
          if (page === void 0) {
            page = 1;
          }
          this.historyDataCashIn = data;
          this.totalPagesCashIn = Math.min(10, Math.ceil(data.length / this.pageSize));
          this.currentPageCashIn = page;
          this.showHistory(data, page, this.listItemCashInHistory, this.itemCashInHistory, this.paginationContainerCashIn, this.currentPageCashIn, this.totalPagesCashIn, this.updatePaginationButtonsCashIn.bind(this), EHistoryTab.CashInHistory);
        };
        _proto.showCashOutHistory = function showCashOutHistory(data, page) {
          if (page === void 0) {
            page = 1;
          }
          this.historyDataCashOut = data;
          this.totalPagesCashOut = Math.min(10, Math.ceil(data.length / this.pageSize));
          this.currentPageCashOut = page;
          this.showHistory(data, page, this.listItemCashOutHistory, this.itemCashOutHistory, this.paginationContainerCashOut, this.currentPageCashOut, this.totalPagesCashOut, this.updatePaginationButtonsCashOut.bind(this), EHistoryTab.CashOutHistory);
        };
        _proto.formatDateTime = function formatDateTime(dateTimeStr) {
          var date = new Date(dateTimeStr);
          var year = date.getFullYear();
          var month = ("0" + (date.getMonth() + 1)).slice(-2);
          var day = ("0" + date.getDate()).slice(-2);
          var hours = ("0" + date.getHours()).slice(-2);
          var minutes = ("0" + date.getMinutes()).slice(-2);
          var seconds = ("0" + date.getSeconds()).slice(-2);
          return day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
        };
        _proto.updatePaginationButtons = function updatePaginationButtons(paginationContainer, currentPage, totalPages, goToPageFunc, paginationType) {
          paginationContainer.removeAllChildren();
          var startPage = Math.max(1, currentPage - 2);
          var endPage = Math.min(totalPages, currentPage + 2);
          if (startPage > 1) {
            this.createPageButton(paginationContainer, 1, currentPage, goToPageFunc, paginationType);
            if (startPage > 2) this.createDots(paginationContainer);
          }
          for (var i = startPage; i <= endPage; i++) {
            this.createPageButton(paginationContainer, i, currentPage, goToPageFunc, paginationType);
          }
          if (endPage < totalPages) {
            if (endPage < totalPages - 1) this.createDots(paginationContainer);
            this.createPageButton(paginationContainer, totalPages, currentPage, goToPageFunc, paginationType);
          }
        };
        _proto.updatePaginationButtonsGamePlay = function updatePaginationButtonsGamePlay() {
          this.updatePaginationButtons(this.paginationContainer, this.currentPage, this.totalPages, this.goToPage.bind(this), EPaginationType.GamePlayHistory);
        };
        _proto.updatePaginationButtonsCashIn = function updatePaginationButtonsCashIn() {
          this.updatePaginationButtons(this.paginationContainerCashIn, this.currentPageCashIn, this.totalPagesCashIn, this.goToPageCashIn.bind(this), EPaginationType.CashInHistory);
        };
        _proto.updatePaginationButtonsCashOut = function updatePaginationButtonsCashOut() {
          this.updatePaginationButtons(this.paginationContainerCashOut, this.currentPageCashOut, this.totalPagesCashOut, this.goToPageCashOut.bind(this), EPaginationType.CashOutHistory);
        };
        _proto.createPageButton = function createPageButton(paginationContainer, page, currentPage, goToPageFunc, paginationType) {
          var _pageButton$getChildB;
          var pageButtonPrefab;
          switch (paginationType) {
            case EPaginationType.GamePlayHistory:
              pageButtonPrefab = this.pageButtonPrefab;
              break;
            case EPaginationType.CashInHistory:
              pageButtonPrefab = this.pageButtonPrefabCashIn;
              break;
            case EPaginationType.CashOutHistory:
              pageButtonPrefab = this.pageButtonPrefabCashOut;
              break;
            default:
              return;
          }
          var pageButton = instantiate(pageButtonPrefab);
          if (!pageButton) return;
          pageButton.parent = paginationContainer;
          var label = (_pageButton$getChildB = pageButton.getChildByName("text")) == null ? void 0 : _pageButton$getChildB.getComponent(Label);
          if (label) label.string = page.toString();
          var bgActive = pageButton.getChildByName("ButtonPageActive");
          var bgNotActive = pageButton.getChildByName("ButtonPageNotActive");
          var isActive = page === currentPage;
          if (bgActive) bgActive.active = isActive;
          if (bgNotActive) bgNotActive.active = !isActive;
          if (!pageButton.getComponent(Button)) {
            pageButton.addComponent(Button);
          }
          pageButton.on("click", function () {
            return goToPageFunc(page);
          }, this);
        };
        _proto.createDots = function createDots(paginationContainer) {
          var dots = new Node("Dots");
          var label = dots.addComponent(Label);
          label.string = "...";
          dots.parent = paginationContainer;
        };
        _proto.goToPage = function goToPage(page) {
          if (page < 1 || page > this.totalPages || page === this.currentPage) return;
          this.currentPage = page;
          this.showGamePlayHistory(this.historyData, this.currentPage);
        };
        _proto.goToPageCashIn = function goToPageCashIn(page) {
          if (page < 1 || page > this.totalPagesCashIn || page === this.currentPageCashIn) return;
          this.currentPageCashIn = page;
          this.showCashInHistory(this.historyDataCashIn, this.currentPageCashIn);
        };
        _proto.goToPageCashOut = function goToPageCashOut(page) {
          if (page < 1 || page > this.totalPagesCashOut || page === this.currentPageCashOut) return;
          this.currentPageCashOut = page;
          this.showCashOutHistory(this.historyDataCashOut, this.currentPageCashOut);
        };
        _proto.listenerDataGamePlayHistory = function listenerDataGamePlayHistory() {
          var _this3 = this;
          SortiePhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Statistic, function (res) {
            if (res.errCode < 0) {
              App.instance.showErrLoading(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code !== SortiePhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (error) {
                  return;
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.PlayHistoryResponse) {
                _this3.currentPage = 1;
                _this3.showGamePlayHistory(data, _this3.currentPage);
              }
              if (code === SortiePhotonClient.EParameterCodes.ExChangeHistoryResponse) {
                _this3.showCashInHistory(data, _this3.currentPageCashIn);
              }
            });
          });
        };
        _proto.listenerDataCashOutHistory = function listenerDataCashOutHistory() {
          var _this4 = this;
          SortiePhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Statistic, function (res) {
            if (res.errCode < 0) {
              App.instance.showErrLoading(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code !== SortiePhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (error) {
                  return;
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.ExChangeHistoryResponse) {
                _this4.showCashOutHistory(data, _this4.currentPageCashOut);
              }
            });
          });
        };
        _proto.sendDataCashOutHistory = function sendDataCashOutHistory() {
          this.listItemCashOutHistory.removeAllChildren();
          this.paginationContainerCashOut.removeAllChildren();
          var data = [SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.CashOutHistory, SortiePhotonClient.EParameterCodes.AccountId, Configs.Login.AccountID, SortiePhotonClient.EParameterCodes.PortalId, Configs.Login.PortalID, SortiePhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID];
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.sendDataCashInHistory = function sendDataCashInHistory() {
          this.listItemCashInHistory.removeAllChildren();
          this.paginationContainerCashIn.removeAllChildren();
          var data = [SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.CashInHistory, SortiePhotonClient.EParameterCodes.AccountId, Configs.Login.AccountID, SortiePhotonClient.EParameterCodes.PortalId, Configs.Login.PortalID, SortiePhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID];
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.sendDataGamePlayHistory = function sendDataGamePlayHistory() {
          this.listItemGamePlayHistory.removeAllChildren();
          this.paginationContainer.removeAllChildren();
          var data = [SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.PlayGameHistory, SortiePhotonClient.EParameterCodes.AccountId, Configs.Login.AccountID, SortiePhotonClient.EParameterCodes.PortalId, Configs.Login.PortalID, SortiePhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID];
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.onTabSelected = function onTabSelected(event, customIndex) {
          var index = parseInt(customIndex);
          if (this.currentIndex === index) return;
          if (index === EHistoryTab.CashInHistory) {
            this.sendDataCashInHistory();
            this.listenerDataGamePlayHistory();
          } else if (index === EHistoryTab.CashOutHistory) {
            this.sendDataCashOutHistory();
            this.listenerDataCashOutHistory();
          }
          this.updateTabState(index);
        };
        _proto.updateTabState = function updateTabState(selectedIndex) {
          this.tabActiveIcons.forEach(function (icon, index) {
            return icon.active = index === selectedIndex;
          });
          this.tabInactiveIcons.forEach(function (icon, index) {
            return icon.active = index !== selectedIndex;
          });
          this.tabContents.forEach(function (content, index) {
            return content.active = index === selectedIndex;
          });
          this.tabLabels.forEach(function (label, index) {
            return label.color = index === selectedIndex ? Color.WHITE : new Color(144, 141, 190);
          });
          this.currentIndex = selectedIndex;
        };
        return PopupHistory;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabActiveIcons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabInactiveIcons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tabContents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tabLabels", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listItemGamePlayHistory", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemGamePlayHistory", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pageButtonPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paginationContainer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "listItemCashInHistory", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemCashInHistory", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pageButtonPrefabCashIn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "paginationContainerCashIn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "listItemCashOutHistory", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "itemCashOutHistory", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "pageButtonPrefabCashOut", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "paginationContainerCashOut", [_dec17], {
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

System.register("chunks:///_virtual/PopupJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './SortiePhotonClient.ts', './PhotonClient.ts', './App.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, Button, Color, Dialog, SortiePhotonClient, PhotonClient, App, Configs;
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
      instantiate = module.instantiate;
      Button = module.Button;
      Color = module.Color;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "8e4d6Qz1hhEoJZqLuzoQlbo", "PopupJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EHistoryTab = /*#__PURE__*/function (EHistoryTab) {
        EHistoryTab[EHistoryTab["TopPlayer"] = 0] = "TopPlayer";
        EHistoryTab[EHistoryTab["TopJackpot"] = 1] = "TopJackpot";
        return EHistoryTab;
      }(EHistoryTab || {});
      var EPaginationType = /*#__PURE__*/function (EPaginationType) {
        EPaginationType[EPaginationType["TopPlayer"] = 0] = "TopPlayer";
        EPaginationType[EPaginationType["TopJackpot"] = 1] = "TopJackpot";
        return EPaginationType;
      }(EPaginationType || {});
      var PopupJackpot = exports('default', (_dec = property([Node]), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property([Label]), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(PopupJackpot, _Dialog);
        function PopupJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tabActiveIcons", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabInactiveIcons", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabContents", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabLabels", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemTopPlayer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTopPlayer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageButtonPrefabTopPlayer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationContainerTopPlayer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listItemTopJackpot", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTopJackpot", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pageButtonPrefabTopJackpot", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paginationContainerTopJackpot", _descriptor12, _assertThisInitialized(_this));
          _this.currentIndex = 0;
          _this.currentPage = 1;
          _this.totalPages = 1;
          _this.topPlayerData = [];
          _this.currentPageTopJackpot = 1;
          _this.totalPagesTopJackpot = 1;
          _this.topJackpotData = [];
          _this.pageSize = 8;
          return _this;
        }
        var _proto = PopupJackpot.prototype;
        _proto.start = function start() {
          this.listenerDataTopPlayer();
          this.listenerDataTopJackpot();
        };
        _proto.listenerDataTopPlayer = function listenerDataTopPlayer() {
          var _this2 = this;
          SortiePhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Statistic, function (res) {
            if (res.errCode < 0) {
              App.instance.showErrLoading(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code !== SortiePhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (error) {
                  return;
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.TopJackpotResponse) {
                _this2.currentPage = 1;
                _this2.showTopPlayer(data, _this2.currentPage);
              }
            });
          });
        };
        _proto.listenerDataTopJackpot = function listenerDataTopJackpot() {
          var _this3 = this;
          SortiePhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Statistic, function (res) {
            if (res.errCode < 0) {
              App.instance.showErrLoading(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code !== SortiePhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (error) {
                  return;
                }
              }
              if (code === SortiePhotonClient.EParameterCodes.TopJackpotResponse) {
                _this3.currentPageTopJackpot = 1;
                _this3.showTopJackpot(data, _this3.currentPageTopJackpot);
              }
            });
          });
        };
        _proto.showHistory = function showHistory(data, page, listItem, itemPrefab, paginationContainer, currentPageRef, totalPagesRef, updatePaginationFunc, historyType) {
          var _this4 = this;
          var startIdx = (page - 1) * this.pageSize;
          var endIdx = startIdx + this.pageSize;
          var paginatedData = data.slice(startIdx, endIdx);
          listItem.removeAllChildren();
          paginatedData.forEach(function (itemData, index) {
            var _item$getChildByName, _item$getChildByName2, _item$getChildByName3, _item$getChildByName4, _item$getChildByName5, _item$getChildByName6, _item$getChildByName7;
            var item = instantiate(itemPrefab);
            item.parent = listItem;
            item.active = true;
            switch (historyType) {
              case EHistoryTab.TopPlayer:
                var lblRank = (_item$getChildByName = item.getChildByName("rank")) == null ? void 0 : _item$getChildByName.getComponent(Label);
                var lblName = (_item$getChildByName2 = item.getChildByName("userName")) == null ? void 0 : _item$getChildByName2.getComponent(Label);
                var lblAmount = (_item$getChildByName3 = item.getChildByName("win")) == null ? void 0 : _item$getChildByName3.getComponent(Label);
                if (lblRank) lblRank.string = "" + (startIdx + index + 1);
                if (lblName) lblName.string = itemData.Username || "Unknown";
                if (lblAmount) {
                  var amount = parseFloat(itemData.PrizeValue);
                  if (!isNaN(amount)) {
                    lblAmount.string = amount.toLocaleString("vi-VN");
                  } else {
                    lblAmount.string = "0";
                  }
                }
                break;
              case EHistoryTab.TopJackpot:
                var lblTime = (_item$getChildByName4 = item.getChildByName("time")) == null ? void 0 : _item$getChildByName4.getComponent(Label);
                var lblJackpotName = (_item$getChildByName5 = item.getChildByName("userName")) == null ? void 0 : _item$getChildByName5.getComponent(Label);
                var lblJackpotAmount = (_item$getChildByName6 = item.getChildByName("win")) == null ? void 0 : _item$getChildByName6.getComponent(Label);
                var lblJackpotDes = (_item$getChildByName7 = item.getChildByName("des")) == null ? void 0 : _item$getChildByName7.getComponent(Label);
                if (lblTime) lblTime.string = _this4.formatDateTime(itemData.CreatedTime);
                if (lblJackpotName) lblJackpotName.string = itemData.Nickname || "Unknown";
                if (lblJackpotAmount) {
                  var _amount = parseFloat(itemData.PrizeValue);
                  if (!isNaN(_amount)) {
                    lblJackpotAmount.string = _amount.toLocaleString("vi-VN");
                  } else {
                    lblJackpotAmount.string = "0";
                  }
                }
                if (lblJackpotDes) lblJackpotDes.string = "Jackpot";
                break;
            }
          });
          updatePaginationFunc.call(this);
        };
        _proto.formatDateTime = function formatDateTime(dateTimeStr) {
          var date = new Date(dateTimeStr);
          var year = date.getFullYear();
          var month = ("0" + (date.getMonth() + 1)).slice(-2);
          var day = ("0" + date.getDate()).slice(-2);
          var hours = ("0" + date.getHours()).slice(-2);
          var minutes = ("0" + date.getMinutes()).slice(-2);
          var seconds = ("0" + date.getSeconds()).slice(-2);
          return day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
        };
        _proto.showTopPlayer = function showTopPlayer(data, page) {
          if (page === void 0) {
            page = 1;
          }
          this.topPlayerData = data;
          this.totalPages = Math.min(10, Math.ceil(data.length / this.pageSize));
          this.currentPage = page;
          this.showHistory(data, page, this.listItemTopPlayer, this.itemTopPlayer, this.paginationContainerTopPlayer, this.currentPage, this.totalPages, this.updatePaginationButtonsTopPlayer.bind(this), EHistoryTab.TopPlayer);
        };
        _proto.showTopJackpot = function showTopJackpot(data, page) {
          if (page === void 0) {
            page = 1;
          }
          this.topJackpotData = data;
          this.totalPagesTopJackpot = Math.min(10, Math.ceil(data.length / this.pageSize));
          this.currentPageTopJackpot = page;
          this.showHistory(data, page, this.listItemTopJackpot, this.itemTopJackpot, this.paginationContainerTopJackpot, this.currentPageTopJackpot, this.totalPagesTopJackpot, this.updatePaginationButtonsTopJackpot.bind(this), EHistoryTab.TopJackpot);
        };
        _proto.updatePaginationButtonsTopPlayer = function updatePaginationButtonsTopPlayer() {
          this.updatePaginationButtons(this.paginationContainerTopPlayer, this.currentPage, this.totalPages, this.goToPage.bind(this), EPaginationType.TopPlayer);
        };
        _proto.updatePaginationButtonsTopJackpot = function updatePaginationButtonsTopJackpot() {
          this.updatePaginationButtons(this.paginationContainerTopJackpot, this.currentPageTopJackpot, this.totalPagesTopJackpot, this.goToPageTopJackpot.bind(this), EPaginationType.TopJackpot);
        };
        _proto.updatePaginationButtons = function updatePaginationButtons(paginationContainer, currentPage, totalPages, goToPageFunc, paginationType) {
          paginationContainer.removeAllChildren();
          var startPage = Math.max(1, currentPage - 2);
          var endPage = Math.min(totalPages, currentPage + 2);
          if (startPage > 1) {
            this.createPageButton(paginationContainer, 1, currentPage, goToPageFunc, paginationType);
            if (startPage > 2) this.createDots(paginationContainer);
          }
          for (var i = startPage; i <= endPage; i++) {
            this.createPageButton(paginationContainer, i, currentPage, goToPageFunc, paginationType);
          }
          if (endPage < totalPages) {
            if (endPage < totalPages - 1) this.createDots(paginationContainer);
            this.createPageButton(paginationContainer, totalPages, currentPage, goToPageFunc, paginationType);
          }
        };
        _proto.goToPage = function goToPage(page) {
          if (page < 1 || page > this.totalPages || page === this.currentPage) return;
          this.currentPage = page;
          this.showTopPlayer(this.topPlayerData, this.currentPage);
        };
        _proto.goToPageTopJackpot = function goToPageTopJackpot(page) {
          if (page < 1 || page > this.totalPagesTopJackpot || page === this.currentPageTopJackpot) return;
          this.currentPageTopJackpot = page;
          this.showTopJackpot(this.topJackpotData, this.currentPageTopJackpot);
        };
        _proto.createPageButton = function createPageButton(paginationContainer, page, currentPage, goToPageFunc, paginationType) {
          var _pageButton$getChildB;
          var pageButtonPrefab;
          switch (paginationType) {
            case EPaginationType.TopPlayer:
              pageButtonPrefab = this.pageButtonPrefabTopPlayer;
              break;
            case EPaginationType.TopJackpot:
              pageButtonPrefab = this.pageButtonPrefabTopJackpot;
              break;
            default:
              return;
          }
          var pageButton = instantiate(pageButtonPrefab);
          if (!pageButton) return;
          pageButton.parent = paginationContainer;
          var label = (_pageButton$getChildB = pageButton.getChildByName("text")) == null ? void 0 : _pageButton$getChildB.getComponent(Label);
          if (label) label.string = page.toString();
          var bgActive = pageButton.getChildByName("ButtonPageActive");
          var bgNotActive = pageButton.getChildByName("ButtonPageNotActive");
          var isActive = page === currentPage;
          if (bgActive) bgActive.active = isActive;
          if (bgNotActive) bgNotActive.active = !isActive;
          if (!pageButton.getComponent(Button)) {
            pageButton.addComponent(Button);
          }
          pageButton.on("click", function () {
            return goToPageFunc(page);
          }, this);
        };
        _proto.createDots = function createDots(paginationContainer) {
          var dots = new Node("Dots");
          var label = dots.addComponent(Label);
          label.string = "...";
          dots.parent = paginationContainer;
        };
        _proto.sendDataTopPlayer = function sendDataTopPlayer() {
          this.listItemTopPlayer.removeAllChildren();
          this.paginationContainerTopPlayer.removeAllChildren();
          var data = [SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.GetTopPlayer, SortiePhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID];
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.sendDataTopJackpot = function sendDataTopJackpot() {
          this.listItemTopJackpot.removeAllChildren();
          this.paginationContainerTopJackpot.removeAllChildren();
          var data = [SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.GetTopJackpot, SortiePhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID];
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.onTabSelected = function onTabSelected(event, customIndex) {
          var index = parseInt(customIndex);
          if (this.currentIndex === index) return;
          if (index === EHistoryTab.TopPlayer) {
            this.sendDataTopPlayer();
          } else if (index === EHistoryTab.TopJackpot) {
            this.sendDataTopJackpot();
          }
          this.updateTabState(index);
        };
        _proto.updateTabState = function updateTabState(selectedIndex) {
          this.tabActiveIcons.forEach(function (icon, index) {
            return icon.active = index === selectedIndex;
          });
          this.tabInactiveIcons.forEach(function (icon, index) {
            return icon.active = index !== selectedIndex;
          });
          this.tabContents.forEach(function (content, index) {
            return content.active = index === selectedIndex;
          });
          this.tabLabels.forEach(function (label, index) {
            return label.color = index === selectedIndex ? Color.WHITE : new Color(144, 141, 190);
          });
          this.currentIndex = selectedIndex;
        };
        _proto.dismiss = function dismiss() {
          _Dialog.prototype.dismiss.call(this);
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.sendDataTopPlayer();
        };
        return PopupJackpot;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabActiveIcons", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabInactiveIcons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tabContents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tabLabels", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listItemTopPlayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemTopPlayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pageButtonPrefabTopPlayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paginationContainerTopPlayer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "listItemTopJackpot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemTopJackpot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pageButtonPrefabTopJackpot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "paginationContainerTopJackpot", [_dec12], {
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

System.register("chunks:///_virtual/XuatKich", ['./Airplane.ts', './BgEffect.ts', './BlinkNodeBulletXK.ts', './Bullet.ts', './ButtonSound.ts', './Lobby.ts', './OscillateX.ts', './PanelMenu2.ts', './Play.ts', './Player.ts', './PopupExchangeCoin.ts', './PopupGuideXK.ts', './PopupHistory.ts', './PopupJackpot.ts', './XuatKich.PopupChat.ts', './XuatKich.SyncTimeControl.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/XuatKich.PopupChat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './SortiePhotonClient.ts', './App.ts', './PhotonClient.ts', './Play.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, instantiate, Label, RichText, Dialog, SortiePhotonClient, App, PhotonClient, Play, Configs;
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
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      App = module.default;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      Play = module.default;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "11ac8QA5ZJEfbgjb039Ffcf", "XuatKich.PopupChat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XuatKichPopupChat = exports('default', (_dec = menu("Sortie/PopupChat"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(EditBox), _dec7 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(XuatKichPopupChat, _Dialog);
        function XuatKichPopupChat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listMessage", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "templateMessage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listFast", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "templateFast", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbMessage", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listEmotion", _descriptor6, _assertThisInitialized(_this));
          _this.fastMessages = ["TLN_BTN_FASTCHAT_1", "TLN_BTN_FASTCHAT_2", "TLN_BTN_FASTCHAT_3", "TLN_BTN_FASTCHAT_4", "TLN_BTN_FASTCHAT_5", "TLN_BTN_FASTCHAT_6"];
          return _this;
        }
        var _proto = XuatKichPopupChat.prototype;
        _proto.start = function start() {
          var _this2 = this;
          SortiePhotonClient.getInstance().addResponseListener(SortiePhotonClient.EOperationCodes.Game, function (res) {
            if (res.errCode < 0) {
              App.instance.alertDialog.showMsg(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code != SortiePhotonClient.EParameterCodes.OperationSubCode) {
                data = JSON.parse(data);
              }
              if (code == SortiePhotonClient.EParameterCodes.ChatResponse) {
                _this2.handleData(data);
              }
            });
          });
          this.listFast.removeAllChildren();
          this.fastMessages.forEach(function (msgKey) {
            var item = instantiate(_this2.templateFast);
            item.active = true;
            item.getComponentInChildren(Label).string = App.instance.getTextLang(msgKey);
            item.on(Node.EventType.TOUCH_END, function () {
              _this2.edbMessage.string = App.instance.getTextLang(msgKey);
            });
            _this2.listFast.addChild(item);
          });
        };
        _proto.handleData = function handleData(data) {
          if (data.c.includes("__E__") || data.c.includes("__EIG__")) return;
          var player = Play.instance.getPlayerById(data.f);
          if (player) {
            var msgNode = instantiate(this.templateMessage);
            msgNode.active = true;
            if (data.f === Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              msgNode.getComponent(RichText).string = "<color=#fff600>" + player.nickname + ": </c><color=#ffffff>" + data.c + "</color>";
            } else {
              msgNode.getComponent(RichText).string = "<color=#3c91e6>" + player.nickname + ": </c><color=#ffffff>" + data.c + "</color>";
            }
            msgNode.parent = this.listMessage;
          }
        };
        _proto.actSubmit = function actSubmit() {
          if (this.edbMessage.string.trim() === "") return;
          this.sendMessage(this.edbMessage.string);
          this.edbMessage.string = "";
        };
        _proto.sendMessage = function sendMessage(message) {
          var payload = {
            c: message
          };
          var data = [];
          data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.Chat);
          data.push(SortiePhotonClient.EParameterCodes.ChatMessage, JSON.stringify(payload));
          SortiePhotonClient.getInstance().sendOperation(SortiePhotonClient.EOperationCodes.Game, data, true);
        };
        _proto.showDetail = function showDetail(data) {
          var _this3 = this;
          data.forEach(function (item) {
            _this3.handleData(item);
          });
          _Dialog.prototype.show.call(this);
        };
        _proto.toggleListEmotion = function toggleListEmotion() {
          this.listEmotion.active = !this.listEmotion.active;
        };
        _proto.sendEmotion = function sendEmotion(_event, data) {
          this.sendMessage(data);
          this.listEmotion.active = false;
          this.dismiss();
        };
        return XuatKichPopupChat;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listMessage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "templateMessage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listFast", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "templateFast", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "edbMessage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listEmotion", [_dec7], {
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

System.register("chunks:///_virtual/XuatKich.SyncTimeControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SortiePhotonClient.ts', './PhotonClient.ts'], function (exports) {
  var _createClass, cclegacy, SortiePhotonClient, PhotonClient;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SortiePhotonClient = module.SortiePhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }],
    execute: function () {
      cclegacy._RF.push({}, "131e7A9a9VC4ZHfIiVccN01", "XuatKich.SyncTimeControl", undefined);
      var XuatKichSyncTimeControl = exports('default', /*#__PURE__*/function () {
        function XuatKichSyncTimeControl() {
          this._differenceTimeClientServer = 0;
          this._deltaPingTime = 0;
          this._pingIntervalId = null;
          this._sendPingTime = 0;
        }
        var _proto = XuatKichSyncTimeControl.prototype;
        _proto.setReceivePingTime = function setReceivePingTime(receiveServerTime) {
          var nowClient = Date.now();
          var serverTime = new Date(receiveServerTime).getTime();
          this._deltaPingTime = (nowClient - this._sendPingTime) / 2;
          this._differenceTimeClientServer = serverTime - nowClient - this._deltaPingTime;
          this.sendPong(this._deltaPingTime);
        };
        _proto.getCurrentServerTime = function getCurrentServerTime() {
          return Date.now() + this._differenceTimeClientServer;
        };
        _proto.resetPingOffline = function resetPingOffline() {
          this._differenceTimeClientServer = 0;
          if (this._pingIntervalId !== null) {
            clearInterval(this._pingIntervalId);
            this._pingIntervalId = null;
          }
        };
        _proto.startPingServer = function startPingServer() {
          var _this = this;
          this.sendPing();
          this._pingIntervalId = setInterval(function () {
            return _this.sendPing();
          }, 1000);
        };
        _proto.sendPing = function sendPing() {
          var data = [];
          data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.Ping);
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
          this._sendPingTime = Date.now();
        };
        _proto.sendPong = function sendPong(pingTime) {
          var data = [];
          data.push(SortiePhotonClient.EParameterCodes.OperationSubCode, SortiePhotonClient.EOperationSubCodes.Pong);
          data.push(SortiePhotonClient.EParameterCodes.PongMessage, pingTime);
          SortiePhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
        };
        _createClass(XuatKichSyncTimeControl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new XuatKichSyncTimeControl();
            }
            return this._instance;
          }
        }]);
        return XuatKichSyncTimeControl;
      }());
      XuatKichSyncTimeControl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/XuatKich', 'chunks:///_virtual/XuatKich'); 
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