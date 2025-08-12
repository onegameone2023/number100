System.register("chunks:///_virtual/LongVuong", ['./LongVuong.FishLobby.ts', './LongVuong.Movement.ts', './LongVuong.Wave.ts', './LongVuong.Bullet.ts', './LongVuong.Chat.ts', './LongVuong.Fish.ts', './LongVuong.Lobby.ts', './LongVuong.Play.ts', './LongVuong.Player.ts', './LongVuong.SyncTimeControl.ts', './LongVuong.PopupConfirm.ts', './LongVuong.PopupDialog.ts', './LongVuong.PopupExchangeCoin.ts', './LongVuong.PopupGuide.ts', './LongVuong.PopupHistory.ts', './LongVuong.PopupJackpot.ts', './LongVuong.PopupSetting.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LongVuong.Bullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LongVuong.Play.ts', './LongVuong.Fish.ts', './LongVuongPhotonClient.ts', './PhotonClient.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, AudioClip, size, Sprite, Component, LongVuongPlay, LongVuongFish, LongVuongPhotonClient, PhotonClient, Utils;
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
      AudioClip = module.AudioClip;
      size = module.size;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      LongVuongPlay = module.default;
    }, function (module) {
      LongVuongFish = module.default;
    }, function (module) {
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "38085U64EVBk7PG4GwCg3hA", "LongVuong.Bullet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongBullet = exports('default', (_dec = menu('LongVuong/Bullet'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec5 = property([SpriteFrame]), _dec6 = property([AudioClip]), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LongVuongBullet, _Component);
        function LongVuongBullet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bullet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fire", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bulletSprFrames", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fireSprFrames", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sounds", _descriptor5, _assertThisInitialized(_this));
          _this.gunId = 1;
          _this.positionId = -1;
          _this.worldSize = size(1920, 1080);
          _this.exploreDuration = 0.8;
          _this.vX = 0;
          _this.vY = 0;
          _this.collisionCount = 2;
          _this.curExplore = 0;
          _this.play = null;
          _this.isExplored = false;
          _this.isExploring = false;
          return _this;
        }
        var _proto = LongVuongBullet.prototype;
        _proto.onLoad = function onLoad() {
          // director.getCollisionManager().enabled = true;
          this.play = LongVuongPlay.instance;
        };
        _proto.onCollisionEnter = function onCollisionEnter(other, _self) {
          if (this.isExploring || this.isExplored) return;
          var fish = other.node.parent.parent.parent.getComponent(LongVuongFish) || other.node.parent.parent.parent.parent.getComponent(LongVuongFish);
          if (fish.node.active === false || this.play.isTargetFish && this.play.targetFish !== fish) return;
          this.explore();
          fish.hurt();
          fish.explodeByGun(this.gunId);
          if (this.positionId !== this.play.mePlayer.serverPos) return;
          var data = {
            f: fish.id,
            si: this.play.shootingId,
            gi: this.play.mePlayer.gunId
          };
          var params = [];
          params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.PlayerShotFish);
          params.push(LongVuongPhotonClient.EParameterCodes.FishShotMessage, JSON.stringify(data));
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
        };
        _proto.run = function run() {
          this.node.active = true;
          var speed = 3000;
          var dir = Utils.degreesToVec2(this.node.angle);
          this.vX = dir.x * speed;
          this.vY = dir.y * speed;
          this.collisionCount = 2;
          this.isExplored = false;
          this.isExploring = false;
          this.bullet.active = true;
          this.fire.active = false;
          if ([1, 2, 3].includes(this.gunId)) ;else if ([4, 5, 6].includes(this.gunId)) ;else if (this.gunId == 7) ;else if (this.gunId == 8) ;else ;
        };
        _proto.updateBulletByGunId = function updateBulletByGunId(gunId) {
          this.bullet.getComponent(Sprite).spriteFrame = this.bulletSprFrames[gunId - 1];
          this.fire.getComponent(Sprite).spriteFrame = this.fireSprFrames[gunId - 1];
        };
        _proto.updateRealTime = function updateRealTime(dt) {
          if (this.isExplored) return;
          if (this.isExploring) {
            this.curExplore -= dt;
            if (this.curExplore <= 0) {
              this.isExplored = true;
              this.node.destroy();
            }
            return;
          }
          var stepCount = 3;
          var stepDt = dt / stepCount;
          for (var i = 0; i < stepCount; i++) {
            var newPos = this.node.position.clone();
            newPos.x += this.vX * stepDt;
            newPos.y += this.vY * stepDt;
            this.node.setPosition(newPos);
            if (Math.abs(newPos.x) > this.worldSize.width / 2) {
              this.vX *= -1;
              this.node.angle = Math.atan2(this.vY, this.vX) * Utils.Rad2Deg;
              newPos.x = (newPos.x < 0 ? -1 : 1) * this.worldSize.width / 2;
              this.node.setPosition(newPos);
              this.collisionCount--;
            } else if (Math.abs(newPos.y) > this.worldSize.height / 2) {
              this.vY *= -1;
              this.node.angle = Math.atan2(this.vY, this.vX) * Utils.Rad2Deg;
              newPos.y = (newPos.y < 0 ? -1 : 1) * this.worldSize.height / 2;
              this.node.setPosition(newPos);
              this.collisionCount--;
            }
            if (this.collisionCount < 0) {
              this.node.destroy();
              return;
            }
          }
        };
        _proto.explore = function explore() {
          this.isExploring = true;
          this.curExplore = this.exploreDuration;
          this.bullet.active = false;
        };
        return LongVuongBullet;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fire", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletSprFrames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fireSprFrames", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sounds", [_dec6], {
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

System.register("chunks:///_virtual/LongVuong.Chat.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './LongVuong.Play.ts', './Config.ts', './LongVuongPhotonClient.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, instantiate, Label, RichText, Component, App, LongVuongPlay, Configs, LongVuongPhotonClient;
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
      Component = module.Component;
    }, function (module) {
      App = module.default;
    }, function (module) {
      LongVuongPlay = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "79721xzwu9GIYo9zIpzlpX+", "LongVuong.Chat", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongChat = exports('default', (_dec = menu("LongVuong/Chat"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(EditBox), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LongVuongChat, _Component);
        function LongVuongChat() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listMessage", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "templateMessage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listFast", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "templateFast", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbMessage", _descriptor5, _assertThisInitialized(_this));
          _this.fastMessages = ["TLN_BTN_FASTCHAT_1", "TLN_BTN_FASTCHAT_2", "TLN_BTN_FASTCHAT_3", "TLN_BTN_FASTCHAT_4", "TLN_BTN_FASTCHAT_5", "TLN_BTN_FASTCHAT_6"];
          return _this;
        }
        var _proto = LongVuongChat.prototype;
        _proto.onLoad = function onLoad() {
          this.listFast.removeAllChildren();
          LongVuongChat.instance = this;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.fastMessages.forEach(function (msgKey) {
            var item = instantiate(_this2.templateFast);
            item.active = true;
            item.getComponentInChildren(Label).string = App.instance.getTextLang(msgKey);
            item.on("click", function () {
              _this2.edbMessage.string = App.instance.getTextLang(msgKey);
            });
            _this2.listFast.addChild(item);
          });
        };
        _proto.appendMessage = function appendMessage(data) {
          var player = LongVuongPlay.instance.getPlayerById(data.f);
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
          var payload = {
            c: this.edbMessage.string
          };
          this.edbMessage.string = "";
          var data = [];
          data.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.Chat);
          data.push(LongVuongPhotonClient.EParameterCodes.ChatMessage, JSON.stringify(payload));
          LongVuongPhotonClient.getInstance().sendOperation(LongVuongPhotonClient.EOperationCodes.Game, data, true);
        };
        return LongVuongChat;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listMessage", [_dec2], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LongVuong.Fish.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts', './LongVuong.Play.ts', './LongVuong.SyncTimeControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, AudioClip, SpriteFrame, Vec2, instantiate, Label, tween, Vec3, AudioSource, Animation, UITransform, Tween, Sprite, UIOpacity, Color, Component, Utils, LongVuongPlay, LongVuongSyncTimeControl;
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
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Label = module.Label;
      tween = module.tween;
      Vec3 = module.Vec3;
      AudioSource = module.AudioSource;
      Animation = module.Animation;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      LongVuongPlay = module.default;
    }, function (module) {
      LongVuongSyncTimeControl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class4;
      cclegacy._RF.push({}, "301c3mLwDlL+6vbVjN6BQjQ", "LongVuong.Fish", undefined);
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
          var midPoint = new Vec2();
          Vec2.lerp(midPoint, this.startPath, this.endPath, 0.5);
          var direction = this.endPath.clone().subtract(this.startPath);
          var perpendicular = direction.rotate(Math.PI / 2).normalize().multiplyScalar(this.radius);
          this.controlPoint = midPoint.add(perpendicular);
        }
        var _proto = PathElement.prototype;
        _proto.GetCurrentPosition = function GetCurrentPosition(time) {
          var t = Math.min(Math.max(time / this.duration, 0), 1);
          var a = this.startPath.clone().multiplyScalar((1 - t) * (1 - t));
          var b = this.controlPoint.clone().multiplyScalar(2 * (1 - t) * t);
          var c = this.endPath.clone().multiplyScalar(t * t);
          return a.add(b).add(c);
        };
        return PathElement;
      }());
      var LongVuongFish = exports('default', (_dec = ccclass('LongVuongFish'), _dec2 = menu('LongVuong/Fish'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property([AudioClip]), _dec6 = property([SpriteFrame]), _dec7 = property(Node), _dec8 = property(Node), _dec(_class2 = _dec2(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LongVuongFish, _Component);
        function LongVuongFish() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.BOSS_FISH_ID = 1000;
          _this.ELECTRIC_FISH_ID = 101;
          _this.DOUBLE_FISH_ID = 102;
          _initializerDefineProperty(_this, "anim", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "explosion", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "engineSounds", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprFramesExplode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinEffect", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prize", _descriptor6, _assertThisInitialized(_this));
          _this.id = void 0;
          _this.isDie = false;
          _this.type = -1;
          _this.pathElements = [];
          _this.currentMoveTime = 0;
          _this.isExploring = false;
          _this.startServerTime = 0;
          _this.elapsedTime = 0;
          return _this;
        }
        LongVuongFish.getInstance = function getInstance() {
          return this.instance;
        };
        var _proto2 = LongVuongFish.prototype;
        _proto2.onLoad = function onLoad() {
          LongVuongFish.instance = this;
        };
        _proto2.onDestroy = function onDestroy() {
          if (LongVuongFish.instance === this) {
            LongVuongFish.instance = null;
          }
        };
        _proto2.die = function die(player, prize) {
          var _this2 = this;
          if (this.isDie) return;
          this.isDie = true;
          if (!player) {
            this.node.destroy();
            return;
          }
          this.explodeByGun(player.gunId, function () {
            var prizeNode = instantiate(_this2.prize);
            prizeNode.setPosition(_this2.node.getPosition());
            _this2.node.parent.addChild(prizeNode);
            prizeNode.active = true;
            prizeNode.getComponent(Label).string = Utils.formatNumber(prize);
            tween(prizeNode).to(0.5, {
              position: new Vec3(prizeNode.position.x, prizeNode.position.y + 100)
            }).call(function () {
              var _prizeNode$getCompone;
              (_prizeNode$getCompone = prizeNode.getComponentInChildren(AudioSource)) == null || _prizeNode$getCompone.play();
              prizeNode.destroy();
            }).start();
            var coinEffect = instantiate(_this2.coinEffect);
            coinEffect.setPosition(_this2.node.getPosition());
            _this2.node.parent.addChild(coinEffect);
            coinEffect.active = true;
            coinEffect.children.forEach(function (coin) {
              var anim = coin.getComponent(Animation);
              anim.play();
              anim.once(Animation.EventType.FINISHED, function () {
                var worldPos = player.avatarNode.getWorldPosition();
                var localTarget = coin.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
                tween(coin).to(0.5, {
                  position: new Vec3(localTarget.x, localTarget.y, 0)
                }).call(function () {
                  coin.destroy();
                  _this2.node.destroy();
                }).start();
              });
            });
          });
          if (this.type > 12 && this.type !== this.BOSS_FISH_ID && this.type !== this.DOUBLE_FISH_ID) {
            var winEffect = this.type === this.ELECTRIC_FISH_ID ? instantiate(LongVuongPlay.instance.winElectric) : instantiate(LongVuongPlay.instance.bigWinFish);
            this.node.parent.addChild(winEffect);
            winEffect.setPosition(this.node.getPosition());
            winEffect.getComponentInChildren(Label).string = prize.toLocaleString("vi-VN");
            winEffect.active = true;
            setTimeout(function () {
              return winEffect.destroy();
            }, 2000);
          } else if (this.type === this.BOSS_FISH_ID && LongVuongPlay.instance.isMePlayer(player.id)) {
            var jackpotNode = LongVuongPlay.instance.jackpotNode;
            jackpotNode.active = true;
            var labelJP = jackpotNode.getComponentInChildren(Label);
            labelJP.string = '0';
            // Tween.numberTo(labelJP, prize, 0.3);
            tween(jackpotNode).repeatForever(tween().to(0.5, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.5, {
              scale: new Vec3(1, 1, 1)
            })).start();
            setTimeout(function () {
              jackpotNode.active = false;
              Tween.stopAllByTarget(jackpotNode);
            }, 2000);
          } else if (this.type === this.BOSS_FISH_ID) {
            player.showJackpotMini();
            setTimeout(function () {
              return player.hideJackpotMini();
            }, 2000);
          }
        };
        _proto2.explodeByGun = function explodeByGun(gunId, callback) {
          var _this3 = this;
          if (this.isExploring) return callback == null ? void 0 : callback();
          this.isExploring = true;
          var explosionNode = instantiate(this.explosion);
          explosionNode.setPosition(this.node.getPosition());
          this.node.parent.addChild(explosionNode);
          explosionNode.getComponent(Sprite).spriteFrame = this.getExplosionSprite(gunId);
          explosionNode.active = true;
          explosionNode.setScale(new Vec3(0.8, 0.8, 1));
          var opacityComp = explosionNode.getComponent(UIOpacity);
          if (!opacityComp) {
            opacityComp = explosionNode.addComponent(UIOpacity);
          }
          opacityComp.opacity = 0;
          tween(opacityComp).to(0.1, {
            opacity: 255
          }).start();
          tween(explosionNode).delay(0.07).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }).start();
          tween(opacityComp).delay(0.4).to(0.3, {
            opacity: 0
          }).call(function () {
            explosionNode.destroy();
            _this3.isExploring = false;
            callback == null || callback();
          }).start();
        };
        _proto2.getExplosionSprite = function getExplosionSprite(gunId) {
          return this.sprFramesExplode[gunId - 1] || this.sprFramesExplode[0];
        };
        _proto2.setData = function setData(data) {
          this.id = data.i;
          this.isDie = false;
          this.node.active = true;
          this.type = data.t;
          this.anim.removeAllChildren();
          this.isExploring = false;
          var animNode = instantiate(LongVuongPlay.instance.getFishAnimByType(this.type));
          animNode.setPosition(Vec3.ZERO);
          animNode.parent = this.anim;
          this.pathElements = data.p.p.map(function (p, index) {
            if (index < data.p.p.length - 1) {
              return new PathElement(new Vec2(p.x, p.y), new Vec2(data.p.p[index + 1].x, data.p.p[index + 1].y), data.p.r[index], data.p.d[index]);
            }
          }).filter(Boolean);
          this.currentMoveTime = 0;
          this.startServerTime = new Date(data.ct).getTime();
          var serverNow = LongVuongSyncTimeControl.instance.getCurrentServerTime();
          this.elapsedTime = Math.max((serverNow - this.startServerTime) / 1000, 0);
          if (serverNow - this.startServerTime >= 0) {
            this.updateRealTime(0);
          }
        };
        _proto2.updateRealTime = function updateRealTime(dt) {
          if (!this.node.active || this.isDie || this.pathElements.length < 1) return;
          this.elapsedTime += dt;
          var totalDuration = this.pathElements.reduce(function (sum, p) {
            return sum + p.duration;
          }, 0);
          if ([this.BOSS_FISH_ID, this.DOUBLE_FISH_ID, this.ELECTRIC_FISH_ID].includes(this.type) && this.elapsedTime >= totalDuration) {
            this.node.destroy();
            return;
          }
          this.currentMoveTime = [this.BOSS_FISH_ID, this.DOUBLE_FISH_ID, this.ELECTRIC_FISH_ID].includes(this.type) ? this.elapsedTime : this.elapsedTime % totalDuration;
          var totalTime = 0;
          var currentPath = null;
          for (var _iterator = _createForOfIteratorHelperLoose(this.pathElements), _step; !(_step = _iterator()).done;) {
            var path = _step.value;
            if (this.currentMoveTime < totalTime + path.duration) {
              currentPath = path;
              break;
            }
            totalTime += path.duration;
          }
          if (currentPath) {
            var timeInPath = this.currentMoveTime - totalTime;
            var pos = currentPath.GetCurrentPosition(timeInPath);
            var direction = currentPath.endPath.clone().subtract(currentPath.startPath);
            var angle = Math.atan2(direction.y, direction.x);
            var scaleX = 1,
              scaleY = 1;
            if (direction.x < 0) {
              scaleX = -1;
              angle += Math.PI;
            }
            var posX = pos.x,
              posY = pos.y;
            var serverPos = LongVuongPlay.instance.mePlayer.serverPos;
            switch (serverPos) {
              case 2:
                posX = -posX;
                scaleX = -scaleX;
                angle = -angle;
                break;
              case 3:
                posX = -posX;
                posY = -posY;
                scaleY = -scaleY;
                angle += Math.PI;
                break;
              case 4:
                posY = -posY;
                scaleY = -scaleY;
                scaleX = -scaleX;
                angle = -(angle + Math.PI);
                break;
            }
            if ([101, 102].includes(this.type) && [3, 4].includes(serverPos)) {
              angle = -angle;
            }
            angle = angle * 180 / Math.PI;
            this.node.setPosition(new Vec3(posX, posY, 0));
            this.node.setRotationFromEuler(0, 0, angle);
            this.node.setScale(new Vec3(scaleX, scaleY, 1));
          }
        };
        _proto2.hurt = function hurt() {
          var _this$anim$children$;
          var hurtNode = (_this$anim$children$ = this.anim.children[0]) == null ? void 0 : _this$anim$children$.children[0];
          if (!hurtNode) return;
          tween(hurtNode.getComponent(Sprite)).to(0.05, {
            color: new Color(255, 54, 54)
          }).delay(0.1).to(0.05, {
            color: new Color(255, 255, 255)
          }).start();
        };
        _proto2.startEngineSound = function startEngineSound() {
          // Use AudioSource component if applicable
        };
        _proto2.stopEngineSound = function stopEngineSound() {
          // Stop playing sound if using AudioSource
        };
        return LongVuongFish;
      }(Component), _class4.instance = null, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "anim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "explosion", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "engineSounds", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "sprFramesExplode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "coinEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "prize", [_dec8], {
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

System.register("chunks:///_virtual/LongVuong.FishLobby.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Vec3, Component;
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
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "1e042JJq4xIJJ8u4iRXAB5w", "LongVuong.FishLobby", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishMovement = exports('FishMovement', (_dec = ccclass('FishMovement'), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishMovement, _Component);
        function FishMovement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "baseSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseTime", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveDistance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startFacingRight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initialSpriteFacingRight", _descriptor5, _assertThisInitialized(_this));
          _this.speed = 0;
          _this.direction = 1;
          _this.moving = true;
          _this.distanceMoved = 0;
          _this.shouldFlipNext = false;
          return _this;
        }
        var _proto = FishMovement.prototype;
        _proto.onLoad = function onLoad() {
          this.speed = this.baseSpeed;
          this.direction = this.startFacingRight ? 1 : -1;
          this.updateFishFlip();
          this.moving = true;
        };
        _proto.update = function update(dt) {
          var _this2 = this;
          if (!this.moving) return;
          var moveStep = this.speed * dt * this.direction;
          var currentPos = this.node.getPosition();
          var newX = currentPos.x + moveStep;
          this.node.setPosition(new Vec3(newX, currentPos.y, currentPos.z));
          this.distanceMoved += Math.abs(moveStep);
          if (this.distanceMoved >= this.moveDistance) {
            this.distanceMoved = 0;
            this.moving = false;
            this.scheduleOnce(function () {
              if (_this2.shouldFlipNext) {
                _this2.direction *= -1;
                _this2.updateFishFlip();
                _this2.speed = _this2.baseSpeed;
              } else {
                _this2.speed = _this2.baseSpeed * 3;
              }
              _this2.shouldFlipNext = !_this2.shouldFlipNext;
              _this2.moving = true;
            }, this.pauseTime);
          }
        };
        _proto.updateFishFlip = function updateFishFlip() {
          var faceMultiplier = this.initialSpriteFacingRight ? 1 : -1;
          var currentScale = this.node.getScale();
          var scaleX = Math.abs(currentScale.x) * faceMultiplier * this.direction;
          this.node.setScale(new Vec3(scaleX, currentScale.y, currentScale.z));
        };
        return FishMovement;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pauseTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveDistance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startFacingRight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "initialSpriteFacingRight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LongVuong.Lobby.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LongVuong.Play.ts', './LongVuongPhotonClient.ts', './PhotonClient.ts', './Utils.ts', './App.ts', './Config.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Sprite, AudioSource, Prefab, sys, log, instantiate, Component, LongVuongPlay, LongVuongPhotonClient, PhotonClient, Utils, App, Configs, AudioManager;
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
      Sprite = module.Sprite;
      AudioSource = module.AudioSource;
      Prefab = module.Prefab;
      sys = module.sys;
      log = module.log;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      LongVuongPlay = module.default;
    }, function (module) {
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _class3;
      cclegacy._RF.push({}, "a47a7YnO9hL2bGTTGnN8WY7", "LongVuong.Lobby", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongLobby = exports('default', (_dec = menu("LongVuong/Lobby"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(AudioSource), _dec10 = property(AudioSource), _dec11 = property(Node), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(Prefab), _dec17 = property(Node), _dec18 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LongVuongLobby, _Component);
        function LongVuongLobby() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "playNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblNickname", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatar", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGemBalanceInfo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGoldBalance", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblGemBalance", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurrentJackpot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BGMusic1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BGMusic2", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exchangeCoinPrefab", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupHistoryPrefab", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupJackpotPrefab", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupSettingPrefab", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupDialog", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupConfirm", _descriptor17, _assertThisInitialized(_this));
          _this.play = null;
          _this.photonClient = null;
          _this.currentMusicIndex = 0;
          _this.visitCount = 0;
          _this.listGunConfig = [];
          _this.clientParameterConfig = null;
          _this.doubleConfigs = null;
          _this.currentX2 = 0;
          return _this;
        }
        var _proto = LongVuongLobby.prototype;
        _proto.onLoad = function onLoad() {
          LongVuongLobby.instance = this;
          var visitCount = parseInt(sys.localStorage.getItem("SKILL_LV_visit_count") || "0", 10);
          visitCount++;
          sys.localStorage.setItem("SKILL_LV_visit_count", visitCount.toString());
          this.visitCount = visitCount;
          this.lblGemBalanceInfo.string = "0";
          this.lblGoldBalance.string = "0";
          this.lblGemBalance.string = "0";
          this.lblCurrentJackpot.string = "0";
          this.play = this.playNode.getComponent(LongVuongPlay);
          this.play.node.active = false;
          if (sys.localStorage.getItem("SKILL_LV_is_playing") === null) {
            sys.localStorage.setItem("SKILL_LV_is_playing", "true");
          }
          if (sys.localStorage.getItem("SKILL_LV_is_effect_on") === null) {
            sys.localStorage.setItem("SKILL_LV_is_effect_on", "true");
          }
        };
        _proto.onDestroy = function onDestroy() {
          LongVuongPhotonClient.getInstance().peer.disconnect();
        };
        _proto.start = function start() {
          var _this2 = this;
          this.playMusic();
          this.photonClient = LongVuongPhotonClient.getInstance();
          this.photonClient.connect();
          this.photonClient.addResponseListener(PhotonClient.EOperationCodes.Account, function (res) {
            if (res.errCode < 0) {
              _this2.actShowDialog(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            log("Logged in successfully");
            App.instance.showLoading(false);
            _this2.photonClient.isLoggedIn = true;
            _this2.listGunConfig = JSON.parse(res.vals[LongVuongPhotonClient.EParameterCodes.GunConfigsResponse]);
            _this2.listGunConfig.sort(function (a, b) {
              return a.v - b.v;
            });
            _this2.clientParameterConfig = JSON.parse(res.vals[LongVuongPhotonClient.EParameterCodes.ClientParameterConfig]);
            _this2.doubleConfigs = JSON.parse(res.vals[LongVuongPhotonClient.EParameterCodes.DoubleConfigsResponse]);
            var IAccountModel = JSON.parse(res.vals[LongVuongPhotonClient.EParameterCodes.LoginResponse]);
            _this2.currentX2 = IAccountModel.ua;
            _this2.lblGoldBalance.string = Utils.formatNumber(IAccountModel.go);
            _this2.lblGemBalance.string = Utils.formatNumber(IAccountModel.ge);
            _this2.avatar.spriteFrame = App.instance.getAvatarSpriteFrame(IAccountModel.ai);
            _this2.lblNickname.string = IAccountModel.n;
            _this2.lblGemBalanceInfo.string = Utils.formatNumber(IAccountModel.go);
            var data = [];
            data.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.GetCurrentJackpot);
            data.push(LongVuongPhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID);
            _this2.photonClient.sendOperation(PhotonClient.EOperationCodes.Game, data, true);
          });
          this.photonClient.addResponseListener(PhotonClient.EOperationCodes.Game, function (res) {
            if (res.errCode < 0) {
              _this2.actShowDialog(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code == LongVuongPhotonClient.EParameterCodes.CurrentJackpot) ;
            });
          });
        };
        _proto.actBack = function actBack() {
          this.BGMusic1.stop();
          this.BGMusic2.stop();
          App.instance.gotoLobby();
          LongVuongPhotonClient.getInstance().peer.disconnect();
        };
        _proto.actPlay = function actPlay() {
          if (!this.photonClient || !this.photonClient.isLoggedIn) {
            return;
          }
          var params = [];
          params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.JoinRoom);
          this.photonClient.sendOperation(PhotonClient.EOperationCodes.Game, params, true);
          this.playNode.active = true;
          this.show(false);
          // audioEngine.stopMusic();
        };

        _proto.show = function show(isShow) {
          this.node.active = isShow;
          this.playNode.active = !isShow;
          if (isShow) {
            // audioEngine.stopAll();
            this.playMusic();
          }
        };
        _proto.updateBalance = function updateBalance(gold, gem) {
          this.lblGemBalance.string = Utils.formatNumber(gem);
          this.lblGoldBalance.string = Utils.formatNumber(gold);
          this.lblGemBalanceInfo.string = Utils.formatNumber(gold);
        };
        _proto.playMusic = function playMusic() {
          AudioManager.getInstance().turnOffMusic();
          this.currentMusicIndex = this.visitCount % 2;
          var musicToPlay = this.currentMusicIndex === 0 ? this.BGMusic1 : this.BGMusic2;
          var isPlaying = sys.localStorage.getItem("SKILL_LV_is_playing") === "true";
          if (musicToPlay && isPlaying) {
            musicToPlay.play();
          }
        };
        _proto.turnOffMusic = function turnOffMusic() {
          sys.localStorage.setItem("SKILL_LV_is_playing", "false");

          // if (this.BGMusic1 && this.BGMusic1.isPlaying) {
          //     this.BGMusic1.stop();
          // }
          //
          // if (this.BGMusic2 && this.BGMusic2.isPlaying) {
          //     this.BGMusic2.stop();
          // }
          //
          // audioEngine.pauseMusic();
        };

        _proto.actExchangeCoin = function actExchangeCoin(_event, flagSAO) {
          var exchangeCoin = instantiate(this.exchangeCoinPrefab);
          this.popupContainer.addChild(exchangeCoin);
          if (flagSAO == 'true') {
            // @ts-ignore
            exchangeCoin.getComponent("LongVuong.PopupExchangeCoin").showSAO();
          } else {
            // @ts-ignore
            exchangeCoin.getComponent("LongVuong.PopupExchangeCoin").showSA();
          }
        };
        _proto.actShowDialog = function actShowDialog(message) {
          this.popupDialog.active = true;
          // @ts-ignore
          this.popupDialog.getComponent("LongVuong.PopupDialog").showMessage(message);
        };
        _proto.hideDialog = function hideDialog() {
          if (this.popupDialog.active) {
            this.popupDialog.active = false;
          }
        };
        _proto.actShowConfirm = function actShowConfirm(message, callback) {
          this.popupConfirm.active = true;
          // @ts-ignore
          this.popupConfirm.getComponent("LongVuong.PopupConfirm").showConfirm(message, callback);
        };
        _proto.actShowPopupSetting = function actShowPopupSetting() {
          var popup = instantiate(this.popupSettingPrefab);
          this.popupContainer.addChild(popup);
          // @ts-ignore
          popup.getComponent("LongVuong.PopupSetting").showDialog();
        };
        _proto.actShowPopupGuide = function actShowPopupGuide() {
          var popup = instantiate(this.popupGuidePrefab);
          this.popupContainer.addChild(popup);
          // @ts-ignore
          popup.getComponent("LongVuong.PopupGuide").show();
        };
        _proto.actShowPopupHistory = function actShowPopupHistory() {
          var popup = instantiate(this.popupHistoryPrefab);
          this.popupContainer.addChild(popup);
          // @ts-ignore
          popup.getComponent("LongVuong.PopupHistory").show();
        };
        _proto.actShowPopupJackpot = function actShowPopupJackpot() {
          var popup = instantiate(this.popupJackpotPrefab);
          this.popupContainer.addChild(popup);
          // @ts-ignore
          popup.getComponent("LongVuong.PopupJackpot").show();
        };
        return LongVuongLobby;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblNickname", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblGemBalanceInfo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblGoldBalance", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblGemBalance", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblCurrentJackpot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "BGMusic1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "BGMusic2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "exchangeCoinPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "popupHistoryPrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "popupJackpotPrefab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "popupSettingPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "popupDialog", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "popupConfirm", [_dec18], {
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

System.register("chunks:///_virtual/LongVuong.Movement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Vec3, Component;
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
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "85e20zw+z1IVJ+TsfQZ3hxV", "LongVuong.Movement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var EllipticalMotion = exports('EllipticalMotion', (_dec = ccclass('EllipticalMotion'), _dec2 = menu('Motion/EllipticalMotion'), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EllipticalMotion, _Component);
        function EllipticalMotion() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "radiusX", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radiusY", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speed", _descriptor3, _assertThisInitialized(_this));
          _this.elapsedTime = 0;
          _this.originPos = new Vec3();
          return _this;
        }
        var _proto = EllipticalMotion.prototype;
        _proto.onLoad = function onLoad() {
          this.originPos = this.node.getPosition();
        };
        _proto.update = function update(dt) {
          this.elapsedTime += dt * this.speed;
          var offsetX = Math.cos(this.elapsedTime) * this.radiusX;
          var offsetY = Math.sin(this.elapsedTime) * this.radiusY;
          var newPos = new Vec3(this.originPos.x + offsetX, this.originPos.y + offsetY, this.originPos.z);
          this.node.setPosition(newPos);
        };
        return EllipticalMotion;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "radiusX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "radiusY", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 15;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LongVuong.Play.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LongVuong.Player.ts', './LongVuong.Lobby.ts', './LongVuong.Bullet.ts', './LongVuong.Fish.ts', './LongVuongPhotonClient.ts', './PhotonClient.ts', './LongVuong.SyncTimeControl.ts', './App.ts', './LongVuong.Chat.ts', './Utils.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, Toggle, AudioClip, Prefab, RichText, SpriteFrame, Sprite, sys, instantiate, UITransform, Vec3, Button, v3, v2, PolygonCollider2D, Component, tween, LongVuongPlayer, LongVuongLobby, LongVuongBullet, LongVuongFish, LongVuongPhotonClient, PhotonClient, LongVuongSyncTimeControl, App, LongVuongChat, Utils, Configs;
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
      Toggle = module.Toggle;
      AudioClip = module.AudioClip;
      Prefab = module.Prefab;
      RichText = module.RichText;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      sys = module.sys;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Button = module.Button;
      v3 = module.v3;
      v2 = module.v2;
      PolygonCollider2D = module.PolygonCollider2D;
      Component = module.Component;
      tween = module.tween;
    }, function (module) {
      LongVuongPlayer = module.default;
    }, function (module) {
      LongVuongLobby = module.default;
    }, function (module) {
      LongVuongBullet = module.default;
    }, function (module) {
      LongVuongFish = module.default;
    }, function (module) {
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      LongVuongSyncTimeControl = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      LongVuongChat = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _class3;
      cclegacy._RF.push({}, "5b3c0TIJkBEg7Pn1c/Xc1/8", "LongVuong.Play", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPlay = exports('default', (_dec = menu('LongVuong/Play'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property([LongVuongPlayer]), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Toggle), _dec16 = property(AudioClip), _dec17 = property([AudioClip]), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Prefab), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(RichText), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(SpriteFrame), _dec28 = property(Label), _dec29 = property(Sprite), _dec30 = property(Label), _dec31 = property(Sprite), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), ccclass(_class = _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LongVuongPlay, _Component);
        function LongVuongPlay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BG1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BG2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblRoomId", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lobbyNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpot", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblJackpotPerGun", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblPercentJackpot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchPad", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "players", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerFish", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerFishTemplate", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishTemplate", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bulletTemplate", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleAuto", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "changeGunSound", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playSounds", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chatNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelMenu", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupGuidePrefab", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupSettingPrefab", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupContainer", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toast", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigWinFish", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winElectric", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconTarget", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCountItemTarget", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetTimeCounter", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCurrentX2", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "x2BarSprite", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "containerX2", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listX2Value", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "templateX2Value", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotNode", _descriptor34, _assertThisInitialized(_this));
          _this.lobby = null;
          _this.mePlayer = null;
          _this.bullets = [];
          _this.listFish = [];
          _this.isShoot = false;
          _this.isTargetFish = false;
          _this.targetFish = null;
          _this.intervalFindTargetFish = 2;
          _this.curIntervalFindTargetFish = 0;
          _this.shootCooldown = 0;
          _this.shootInterval = 0.5;
          _this.shootingId = "";
          _this.timeNoAction = 0;
          _this.playCount = 0;
          _this.currentJackpot = 0;
          _this.currentJackpotPercent = 0;
          _this.countItemTarget = 0;
          _this.timeToUseTarget = 0;
          _this.allowUseItemTarget = false;
          _this.currentTimeToUseTarget = 0;
          _this.x2LimitAmount = 1;
          _this.x2CurrentAmount = 0;
          _this.enableX2 = false;
          return _this;
        }
        var _proto = LongVuongPlay.prototype;
        _proto.onLoad = function onLoad() {
          LongVuongPlay.instance = this;
          this.lobby = this.lobbyNode.getComponent(LongVuongLobby);
          this.lblRoomId.string = "#0";
          this.lblCountItemTarget.string = "0";
          this.lblJackpotPerGun.string = "0";
          this.lblJackpot.string = "0";
          this.lblPercentJackpot.string = "0%";
          this.players.forEach(function (player) {
            player.leave();
          });
        };
        _proto.onEnable = function onEnable() {
          this.containerFish.removeAllChildren();
          this.listFish = [];
          this.bullets = [];
          for (var i = 0; i < this.players.length; i++) {
            this.players[i].leave();
          }
          this.mePlayer = this.players[0];
          this.allowUseItemTarget = true;
        };
        _proto.updateX2Object = function updateX2Object(x2Limit) {
          if (x2Limit === void 0) {
            x2Limit = null;
          }
          if (x2Limit != null) {
            this.x2LimitAmount = x2Limit;
          }
          var range = Math.min(100, Math.round(this.x2CurrentAmount / this.x2LimitAmount * 100));
          this.lblCurrentX2.string = range.toString();
          this.x2BarSprite.fillRange = range / 100;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.jackpotNode.active = false;
          this.hidePanel();
          this.containerX2.active = false;
          this.lblCountItemTarget.string = "0";
          this.countItemTarget = 0;
          var playCount = parseInt(sys.localStorage.getItem("SKILL_LV_play_count") || "0", 10);
          playCount++;
          sys.localStorage.setItem("SKILL_LV_play_count", playCount.toString());
          this.playCount = playCount;
          this.toast.node.active = false;
          this.timeNoAction = 0;
          this.panelMenu.x = 120;
          this.panelMenu.getChildByName("MenuArrow").setScale(-1, -1);
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
              _this2.curIntervalFindTargetFish = _this2.intervalFindTargetFish;
              _this2.isShoot = true;
              _this2.findFishInWorld();
            } else {
              _this2.stopAutoShoot();
            }
          });
          LongVuongPhotonClient.getInstance().handleErrorResponse(function () {
            LongVuongSyncTimeControl.instance.resetPingOffline();
            _this2.node.active = false;
            _this2.lobby.show(true);
          });
          LongVuongPhotonClient.getInstance().handleTimeoutResponse(function () {
            LongVuongSyncTimeControl.instance.resetPingOffline();
            _this2.node.active = false;
            _this2.lobby.show(true);
          });
          LongVuongPhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Game, function (res) {
            if (res.errCode < 0) {
              _this2.lobby.actShowDialog(PhotonClient.getErrMsg(res.errCode));
              _this2.back();
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code != LongVuongPhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (e) {}
              }
              if (code == LongVuongPhotonClient.EParameterCodes.PingResponse) {
                LongVuongSyncTimeControl.instance.setReceivePingTime(data);
              }
              if (code == LongVuongPhotonClient.EParameterCodes.LeaveRoomResponse) {
                if (_this2.isMePlayer(data.id)) {
                  for (var i = 0; i < _this2.players.length; i++) {
                    _this2.players[i].leave();
                  }
                  LongVuongSyncTimeControl.instance.resetPingOffline();
                  _this2.node.active = false;
                  _this2.lobby.show(true);
                  _this2.lobby.updateBalance(data.go, data.ge);
                  _this2.unscheduleAllCallbacks();
                } else {
                  var leavePlayer = _this2.getPlayerById(data.id);
                  if (leavePlayer) {
                    _this2.showToast("<color=#ffff00>" + leavePlayer.nickname + "</c><color=#ffffff>" + App.instance.getTextLang('vc19').replace('{0}', '') + "</color>");
                    leavePlayer.leave();
                  }
                }
              }
              if (code == LongVuongPhotonClient.EParameterCodes.JoinRoomResponse) {
                LongVuongSyncTimeControl.instance.startPingServer();
                _this2.lblRoomId.string = "#" + data.r;
                var mePlayerData = data.a.find(function (player) {
                  return _this2.isMePlayer(player.id);
                });
                _this2.mePlayer.setData(mePlayerData);
                _this2.mePlayer.localPos = 1;
                _this2.countItemTarget = mePlayerData.Items[0];
                _this2.lblCountItemTarget.string = _this2.countItemTarget.toString();
                _this2.x2CurrentAmount = _this2.lobby.currentX2;
                _this2.updateX2Object();
                var posMe = mePlayerData.p;
                var playerData;
                var _loop = function _loop(_pos) {
                  if (_pos != posMe && _pos != 1) {
                    playerData = data.a.find(function (player) {
                      return player.p == _pos;
                    });
                    if (playerData) {
                      _this2.players[_pos - 1].setData(playerData);
                      _this2.players[_pos - 1].localPos = _pos;
                    }
                  }
                };
                for (var _pos = 1; _pos <= 4; _pos++) {
                  _loop(_pos);
                }
                if (posMe != 1) {
                  playerData = data.a.find(function (player) {
                    return player.p == 1;
                  });
                  if (playerData) {
                    _this2.players[posMe - 1].setData(playerData);
                    _this2.players[posMe - 1].localPos = posMe;
                  }
                }
                for (var _i = 0; _i < data.f.length; _i++) {
                  var fishNode = instantiate(_this2.fishTemplate);
                  var fish = fishNode.getComponent(LongVuongFish);
                  fish.node.parent = _this2.containerFish;
                  fish.setData(data.f[_i]);
                  _this2.listFish.push(fish);
                }
                _this2.updateJackpotObject(data.j, null);
              }
              if (code == LongVuongPhotonClient.EParameterCodes.OtherJoinRoomResponse) {
                var playerOJR;
                if (data.p === 1) {
                  playerOJR = _this2.players[_this2.mePlayer.serverPos - 1];
                  playerOJR.localPos = _this2.mePlayer.serverPos;
                } else {
                  playerOJR = _this2.players[data.p - 1];
                  playerOJR.localPos = data.p;
                }
                playerOJR.setData(data);
                _this2.showToast("<color=#ffff00>" + data.n + "</c><color=#ffffff>" + App.instance.getTextLang('vc18').replace('{0}', '') + "</color>");
              }
              if (code == LongVuongPhotonClient.EParameterCodes.ChatResponse) {
                LongVuongChat.instance.appendMessage(data);
              }
              if (code == LongVuongPhotonClient.EParameterCodes.ChangeGunResponse) {
                var playerChangeGun = _this2.getPlayerById(data.i);
                if (playerChangeGun) {
                  playerChangeGun.setGun(data.gi);
                  // audioEngine.playEffect(this.changeGunSound, false);
                }
              }

              if (code === LongVuongPhotonClient.EParameterCodes.CreateFishResponse) {
                for (var _i2 = 0; _i2 < data.length; _i2++) {
                  var _fishNode = instantiate(_this2.fishTemplate);
                  var _fish = _fishNode.getComponent(LongVuongFish);
                  _fish.node.parent = _this2.containerFish;
                  _fish.setData(data[_i2]);
                  _this2.listFish.push(_fish);
                }
              }
              if (code === LongVuongPhotonClient.EParameterCodes.RemoveSingleFishResponse) {
                var fishRSF = _this2.getFishById(data);
                if (fishRSF && fishRSF.node) {
                  fishRSF.node.destroy();
                }
              }
              if (code === LongVuongPhotonClient.EParameterCodes.ShootingResponse) {
                if (_this2.isMePlayer(data.i)) {
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
                    var bullet = _this2.getBullet(shootingPos, shootingRes.gi);
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
              if (code === LongVuongPhotonClient.EParameterCodes.TimeToUse) {
                _this2.countItemTarget -= 1;
                _this2.lblCountItemTarget.string = _this2.countItemTarget.toString();
                _this2.isShoot = false;
                var useFireAuto = _this2.toggleAuto.isChecked;
                _this2.toggleAuto.isChecked = false;
                _this2.toggleAuto.enabled = false;
                _this2.touchPad.active = false;
                _this2.mePlayer.node.getChildByName('lock').active = true;
                _this2.listFish.forEach(function (fish) {
                  var fishBtn = fish.getComponentInChildren(Button).node;
                  fishBtn.parent.getChildByName('target').active = false;
                  fishBtn.off("click");
                  fishBtn.on("click", function () {
                    _this2.listFish.forEach(function (fish) {
                      fish.getComponentInChildren(Button).node.parent.getChildByName('target').active = false;
                    });
                    fishBtn.parent.getChildByName('target').active = true;
                    _this2.targetFish = fish;
                    _this2.toggleAuto.isChecked = true;
                    _this2.isShoot = true;
                    _this2.isTargetFish = true;
                  });
                });
                _this2.targetTimeCounter.node.active = true;
                _this2.timeToUseTarget = data;
                _this2.currentTimeToUseTarget = data;
                _this2.scheduleOnce(function () {
                  _this2.allowUseItemTarget = true;
                  _this2.timeToUseTarget = 0;
                  _this2.currentTimeToUseTarget = 0;
                  _this2.targetTimeCounter.node.active = false;
                  _this2.touchPad.active = true;
                  _this2.toggleAuto.enabled = true;
                  _this2.isShoot = false;
                  _this2.isTargetFish = false;
                  _this2.targetFish = null;
                  _this2.listFish.forEach(function (fish) {
                    fish.getComponentInChildren(Button).node.parent.getChildByName('target').active = false;
                  });
                  _this2.mePlayer.node.getChildByName('lock').active = false;
                  _this2.toggleAuto.isChecked = useFireAuto;
                  if (useFireAuto) {
                    _this2.touchPad.active = false;
                    _this2.curIntervalFindTargetFish = _this2.intervalFindTargetFish;
                    _this2.isShoot = true;
                    _this2.findFishInWorld();
                  }
                }, data);
              }
              if (code === LongVuongPhotonClient.EParameterCodes.HeadShotResponse) {
                _this2.headShotResponseHandle(data);
              }
              if (code === LongVuongPhotonClient.EParameterCodes.DoubleValuesCanPlay) {
                _this2.listX2Value.removeAllChildren();
                data.forEach(function (value) {
                  var valueX2Node = instantiate(_this2.templateX2Value);
                  valueX2Node.getComponentInChildren(Label).string = value.toLocaleString("vi-VN");
                  valueX2Node.active = true;
                  valueX2Node.on("click", function () {
                    var params = [];
                    params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.PlayDouble);
                    params.push(LongVuongPhotonClient.EParameterCodes.DoubleMessage, value);
                    LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
                  });
                  _this2.listX2Value.addChild(valueX2Node);
                });
                _this2.containerX2.active = true;
              }
              if (code === LongVuongPhotonClient.EParameterCodes.DoubleMessageResponse) {
                _this2.x2CurrentAmount = data.a;
                _this2.updateX2Object();
                if (data.r > 0) {
                  _this2.showToast(App.instance.getTextLang('txt_reward') + (" " + data.r));
                }
                _this2.mePlayer.updateGold(data.go);
              }
            });
          });
          this.updateSoundMusic();
        };
        _proto.isMePlayer = function isMePlayer(id) {
          return id === Configs.Login.AccountID + ":" + Configs.Login.PortalID;
        };
        _proto.onDestroy = function onDestroy() {
          // audioEngine.stopAll();
        };
        _proto.update = function update(dt) {
          var _this3 = this;
          this.enableX2 = this.x2CurrentAmount >= this.x2LimitAmount;
          this.updateShoot(dt);
          if (this.currentTimeToUseTarget > 0) {
            this.currentTimeToUseTarget -= dt;
            this.targetTimeCounter.fillRange = 1 - this.currentTimeToUseTarget / this.timeToUseTarget;
          }
          this.timeNoAction += dt;
          if (this.timeNoAction > 80) {
            this.timeNoAction = 0;
            this.lobby.actShowDialog(App.instance.getTextLang('fish_pu7'));
            this.scheduleOnce(function () {
              _this3.lobby.hideDialog();
            }, 3);
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
          for (var _i3 = this.listFish.length - 1; _i3 >= 0; _i3--) {
            var fish = this.listFish[_i3];
            if (fish.node == null || !fish.node.active) {
              this.listFish.splice(_i3, 1);
            } else {
              fish.updateRealTime(dt);
            }
          }
        };
        _proto.headShotResponseHandle = function headShotResponseHandle(data) {
          var _this4 = this;
          var playerHSR = this.getPlayerById(data.i);
          if (playerHSR) {
            playerHSR.updateGold(data.go);
          }
          var airplane0 = this.getFishById(data.f[0]);
          var position0 = airplane0 == null ? void 0 : airplane0.node.position;
          var nodeWinText = new Node();
          for (var i = 0; i < data.f.length; i++) {
            var fish = this.getFishById(data.f[i]);
            if (fish && playerHSR) {
              nodeWinText.position = fish.node.position;
              fish.die(playerHSR, data.gor);
            }
          }
          this.updateJackpotObject(data.j, null);
          if (this.isMePlayer(data.i)) {
            if (data.bi && Object.keys(data.bi).length > 0) {
              var _loop2 = function _loop2() {
                if (data.bi.hasOwnProperty(key)) {
                  var bonusItem = data.bi[key];
                  _this4.countItemTarget += bonusItem[0];
                  if (bonusItem[0] > 0) {
                    var endWorldPos = _this4.targetNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
                    var endLocalPos = _this4.containerFish.getComponent(UITransform).convertToNodeSpaceAR(endWorldPos);
                    var bonusNode = new Node();
                    bonusNode.addComponent(Sprite).spriteFrame = _this4.iconTarget;
                    bonusNode.setPosition(position0);
                    _this4.containerFish.addChild(bonusNode);
                    tween(bonusNode).to(1, {
                      position: endLocalPos
                    }).call(function () {
                      bonusNode.destroy();
                      _this4.lblCountItemTarget.string = _this4.countItemTarget.toString();
                    }).start();
                  }
                }
              };
              for (var key in data.bi) {
                _loop2();
              }
            }
            this.x2CurrentAmount = data.a;
            this.updateX2Object();
          }
        };
        _proto.updateSoundMusic = function updateSoundMusic() {
          var playSound = this.playSounds[this.playCount % 3];
          if (this.playCount % 2 === 0) {
            this.BG1.active = false;
            this.BG2.active = true;
          } else {
            this.BG1.active = true;
            this.BG2.active = false;
          }
          var isPlaying = sys.localStorage.getItem("SKILL_LV_is_playing") === "true";
          var isEffectOn = sys.localStorage.getItem("SKILL_LV_is_effect_on") === "true";

          // audioEngine.setEffectsVolume(isEffectOn ? 1 : 0);
        };

        _proto.togglePlayMusic = function togglePlayMusic() {
          var isPlaying = sys.localStorage.getItem("SKILL_LV_is_playing") === "true";
          isPlaying = !isPlaying;
          sys.localStorage.setItem("SKILL_LV_is_playing", isPlaying ? "true" : "false");
          if (isPlaying) {
            var playSound = this.playSounds[this.playCount % 3];
          }
        };
        _proto.updateShoot = function updateShoot(dt) {
          if (this.targetFish != null && this.targetFish.isDie) {
            this.targetFish = null;
            if (this.isTargetFish) {
              this.toggleAuto.isChecked = false;
              this.isShoot = false;
            }
          }
          if (this.toggleAuto.isChecked) {
            if (this.targetFish != null) {
              var gunWorldPos = this.mePlayer.gunContainer.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
              var fishWorldPos = this.targetFish.node.getComponent(UITransform).convertToWorldSpaceAR(v3(this.targetFish.node.getComponent(UITransform).width / 2, 0));
              var distance = Utils.v2Distance(v2(fishWorldPos.x, fishWorldPos.y), v2(gunWorldPos.x, gunWorldPos.y));
              var dAngle = fishWorldPos.subtract(gunWorldPos);
              if (this.isTargetFish) {
                if (Math.abs(this.targetFish.node.x) > 960 || Math.abs(this.targetFish.node.y) > 540) {
                  this.isShoot = false;
                } else {
                  this.isShoot = true;
                  this.mePlayer.gunContainer.angle = Math.atan2(dAngle.y, dAngle.x) * Utils.Rad2Deg;
                }
              } else if (Math.abs(this.targetFish.node.x) > 1920 * 0.8 || Math.abs(this.targetFish.node.y) > 1080 * 0.8 || distance < 200) {
                this.targetFish = null;
                this.curIntervalFindTargetFish = 0;
              } else {
                this.mePlayer.gunContainer.angle = Math.atan2(dAngle.y, dAngle.x) * Utils.Rad2Deg;
                if (this.mePlayer.gunContainer.angle < 0 || this.mePlayer.gunContainer.angle > 180) {
                  this.targetFish = null;
                  this.curIntervalFindTargetFish = 0;
                }
              }
            } else if (!this.isTargetFish) {
              this.curIntervalFindTargetFish = Math.max(0, this.curIntervalFindTargetFish - dt);
              if (this.curIntervalFindTargetFish == 0) {
                this.findFishInWorld();
              }
            }
          }
          if (this.isShoot && this.shootCooldown <= 0) {
            this.shootCooldown = this.shootInterval;
            var velocity = Utils.degreesToVec2(this.mePlayer.gunContainer.angle);
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
            var params = [];
            params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.PlayerShooting);
            params.push(LongVuongPhotonClient.EParameterCodes.ShootingMessage, JSON.stringify(data));
            LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
          }
        };
        _proto.findFishInWorld = function findFishInWorld() {
          this.curIntervalFindTargetFish = this.intervalFindTargetFish;
          var listFishActiveInWorld = [];
          var gunWorldPos = this.mePlayer.gunContainer.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
          for (var i = 0; i < this.listFish.length; i++) {
            var fishNode = this.listFish[i].node;
            if (fishNode == null) continue;
            if (fishNode.active && Math.abs(fishNode.position.x) <= 1920 * 0.8 && Math.abs(fishNode.position.y) <= 1080 * 0.8) {
              var fishWorldPos = fishNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
              var distance = Utils.v2Distance(v2(gunWorldPos.x, gunWorldPos.y), v2(fishWorldPos.x, fishWorldPos.y));
              if (distance >= 200) {
                listFishActiveInWorld.push({
                  fish: this.listFish[i],
                  distance: distance
                });
              }
            }
          }
          if (listFishActiveInWorld.length > 0) {
            this.targetFish = listFishActiveInWorld[Utils.randomRangeInt(0, listFishActiveInWorld.length)]["fish"];
            this.isTargetFish = false;
          }
        };
        _proto.stopAutoShoot = function stopAutoShoot() {
          this.isShoot = false;
          this.toggleAuto.isChecked = false;
          this.touchPad.active = true;
          this.curIntervalFindTargetFish = 0;
          this.targetFish = null;
        };
        _proto.getBullet = function getBullet(pos, gunId) {
          var bullet;
          var node = instantiate(this.bulletTemplate);
          node.parent = this.bulletTemplate.parent;
          var source = node.getChildByName(gunId + "").getComponent(PolygonCollider2D);
          var target = node.getComponent(PolygonCollider2D);
          target.points = source.points.map(function (p) {
            return v2(p.x, p.y);
          });
          bullet = node.getComponent(LongVuongBullet);
          bullet.positionId = pos;
          bullet.gunId = gunId;
          this.bullets.push(bullet);
          bullet.node.active = false;
          bullet.updateBulletByGunId(gunId);
          return bullet;
        };
        _proto.getFishById = function getFishById(id) {
          for (var i = 0; i < this.listFish.length; i++) {
            if (this.listFish[i].id == id) return this.listFish[i];
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
        _proto.getFishAnimByType = function getFishAnimByType(type) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.containerFishTemplate.children), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            if (node.name && node.name === "fish" + type) {
              return node;
            }
          }
          return this.containerFishTemplate.children[0];
        };
        _proto.actBetUp = function actBetUp() {
          var _this5 = this;
          var gcIndex = this.lobby.listGunConfig.findIndex(function (config) {
            return config.i === _this5.mePlayer.gunId;
          });
          if (gcIndex === -1) return;
          var isMax = gcIndex === this.lobby.listGunConfig.length - 1;
          var newIndex = isMax ? 0 : gcIndex + 1;
          if (gcIndex !== newIndex) {
            this.actUpdateGun(this.lobby.listGunConfig[newIndex].i);
          }
        };
        _proto.actBetDown = function actBetDown() {
          var _this6 = this;
          var gcIndex = this.lobby.listGunConfig.findIndex(function (config) {
            return config.i === _this6.mePlayer.gunId;
          });
          if (gcIndex === -1) return;
          var isMin = gcIndex === 0;
          var newIndex = isMin ? this.lobby.listGunConfig.length - 1 : gcIndex - 1;
          if (gcIndex !== newIndex) {
            this.actUpdateGun(this.lobby.listGunConfig[newIndex].i);
          }
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

        _proto.actUpdateGun = function actUpdateGun(gunId) {
          var data = {
            i: gunId
          };
          var params = [];
          params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.ChangeGun);
          params.push(LongVuongPhotonClient.EParameterCodes.ChangeGunMessage, JSON.stringify(data));
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
        };
        _proto.actBack = function actBack() {
          var _this7 = this;
          this.lobby.actShowConfirm(App.instance.getTextLang("fish_pu6"), function (isConfirm) {
            if (isConfirm) {
              // audioEngine.stopAll();
              _this7.back();
              _this7.lobby.playMusic();
            }
          });
        };
        _proto.actUseTarget = function actUseTarget() {
          if (this.countItemTarget <= 0 || !this.allowUseItemTarget) {
            return;
          }
          this.allowUseItemTarget = false;
          var data = [];
          data.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.UseTarget);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
        };
        _proto.back = function back() {
          var _this8 = this;
          this.stopAutoShoot();
          var params = [];
          params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.LeaveRoom);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
          this.scheduleOnce(function () {
            LongVuongSyncTimeControl.instance.resetPingOffline();
            _this8.node.active = false;
            _this8.lobby.show(true);
          }, 5);
        };
        _proto.showToast = function showToast(message) {
          var _this9 = this;
          this.toast.node.active = true;
          this.toast.string = message;
          this.scheduleOnce(function () {
            _this9.toast.node.active = false;
          }, 2);
        };
        _proto.togglePanel = function togglePanel(target) {
          this.panelMenu.x = this.panelMenu.x === 0 ? 120 : 0;
          target.target.parent.scale = target.target.parent.scale * -1;
        };
        _proto.hidePanel = function hidePanel() {
          if (this.panelMenu.x === 0) {
            this.panelMenu.x = 120;
            this.panelMenu.getChildByName("MenuArrow").setScale(-1, -1);
          }
        };
        _proto.actX2 = function actX2() {
          if (!this.enableX2) return;
          var params = [];
          params.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.GetDoubleCanPlay);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, params, true);
        };
        _proto.hideX2 = function hideX2() {
          this.containerX2.active = false;
        };
        _proto.actShowPopupSetting = function actShowPopupSetting() {
          this.popupContainer.removeAllChildren();
          var popup = instantiate(this.popupSettingPrefab);
          this.popupContainer.addChild(popup);
          // @ts-ignore
          popup.getComponent("LongVuong.PopupSetting").showDialog();
        };
        _proto.actShowPopupGuide = function actShowPopupGuide() {
          this.popupContainer.removeAllChildren();
          var popup = instantiate(this.popupGuidePrefab);
          this.popupContainer.addChild(popup);
          // @ts-ignore
          popup.getComponent("LongVuong.PopupGuide").show();
        };
        _proto.toggleChat = function toggleChat() {
          this.chatNode.active = !this.chatNode.active;
        };
        return LongVuongPlay;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BG1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BG2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblRoomId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lobbyNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblJackpotPerGun", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblPercentJackpot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "touchPad", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "containerFish", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "containerFishTemplate", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "fishTemplate", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bulletTemplate", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "toggleAuto", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "changeGunSound", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "playSounds", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "chatNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "panelMenu", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "popupGuidePrefab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "popupSettingPrefab", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "popupContainer", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bigWinFish", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "winElectric", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "iconTarget", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "lblCountItemTarget", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "targetTimeCounter", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "lblCurrentX2", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "x2BarSprite", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "containerX2", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "listX2Value", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "templateX2Value", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "jackpotNode", [_dec35], {
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

System.register("chunks:///_virtual/LongVuong.Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config.ts', './App.ts', './Utils.ts', './LongVuong.Play.ts', './LongVuong.Lobby.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Sprite, Tween, Vec3, UIOpacity, tween, Vec2, Component, Configs, App, Utils, LongVuongPlay, LongVuongLobby;
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
      Tween = module.Tween;
      Vec3 = module.Vec3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }, function (module) {
      LongVuongPlay = module.default;
    }, function (module) {
      LongVuongLobby = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "17803L0o/9HNpWeLytYGsTE", "LongVuong.Player", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPlayer = exports('default', (_dec = ccclass('LongVuongPlayer'), _dec2 = menu('LongVuong/Player'), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LongVuongPlayer, _Component);
        function LongVuongPlayer() {
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
          _initializerDefineProperty(_this, "circle", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gunContainer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fireEffect", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotMiniNode", _descriptor9, _assertThisInitialized(_this));
          _this.id = '';
          _this.username = '';
          _this.nickname = '';
          _this.coin = 0;
          _this.avatar = '';
          _this.serverPos = -1;
          _this.localPos = -1;
          _this.gunId = 1;
          return _this;
        }
        var _proto = LongVuongPlayer.prototype;
        _proto.isMePlayer = function isMePlayer() {
          return this.id === Configs.Login.AccountID + ":" + Configs.Login.PortalID;
        };
        _proto.setData = function setData(data) {
          this.id = data.id;
          this.nickname = data.n;
          this.coin = data.go;
          this.avatar = data.a;
          this.gunContainer.setRotationFromEuler(0, 0, 90); // replaces angle = 90
          this.node.active = true;
          this.serverPos = data.p;
          this.gunId = data.gi;
          this.lblNickname.string = this.nickname;
          this.avatarSprite.spriteFrame = App.instance.getAvatarSpriteFrame(this.avatar);
          // Tween.numberTo(this.lblCoin, this.coin, 0.2);
          this.setGun(this.gunId);
          if (!this.circle) return;
          Tween.stopAllByTarget(this.circle);
          this.circle.setScale(new Vec3(1, 1, 1));
          this.circle.getComponent(UIOpacity).opacity = 255;
          var tweenSequence;
          if (this.isMePlayer()) {
            tweenSequence = tween().to(0.5, {
              scale: new Vec3(0.9, 0.9, 1)
            }).to(0.5, {
              scale: new Vec3(1, 1, 1)
            });
          } else {
            tweenSequence = tween().to(0.5, {
              opacity: 150
            }).to(0.5, {
              opacity: 255
            });
          }
          tween(this.circle).repeatForever(tweenSequence).start();
        };
        _proto.updateGold = function updateGold(coin) {
          this.coin = coin;
          // Tween.numberTo(this.lblCoin, this.coin, 0.2);
        };

        _proto.leave = function leave() {
          this.id = '';
          this.nickname = '';
          this.coin = 0;
          this.avatar = '';
          this.node.active = false;
          this.serverPos = -1;
          this.localPos = -1;
          this.gunId = 0;
          if (this.circle) {
            Tween.stopAllByTarget(this.circle);
          }
        };
        _proto.setGun = function setGun(gunId) {
          var gunChildren = this.gunContainer.children[0].children;
          gunChildren.forEach(function (gun, index) {
            gun.active = index === gunId - 1;
          });
          this.gunId = gunId;
          var obj = LongVuongLobby.instance.doubleConfigs.find(function (config) {
            return config.Limit === gunId;
          });
          if (obj) {
            LongVuongPlay.instance.updateX2Object(obj.Amount);
          }
          var configGun = LongVuongLobby.instance.listGunConfig.find(function (gun) {
            return gun.i === gunId;
          });
          if (configGun) {
            this.lblBet.string = Utils.formatNumber(configGun.v);
            if (this.id === Configs.Login.AccountID + ":" + Configs.Login.PortalID) {
              LongVuongPlay.instance.updateJackpotObject(null, configGun.j);
            }
          }
        };
        _proto.rotateGun = function rotateGun(touchPos) {
          var gunWorldPos = this.gunContainer.getWorldPosition();
          var diff = new Vec2(touchPos.x - gunWorldPos.x, touchPos.y - gunWorldPos.y);
          var angle = Math.atan2(diff.y, diff.x) * Utils.Rad2Deg;
          if (angle < -90) {
            angle = 180;
          } else if (angle < 0 && angle > -90) {
            angle = 0;
          }
          this.gunContainer.setRotationFromEuler(0, 0, angle);
        };
        _proto.rotateGunByAngle = function rotateGunByAngle(angle) {
          this.gunContainer.setRotationFromEuler(0, 0, angle);
        };
        _proto.startAnimFireGun = function startAnimFireGun() {
          var originalPos = this.gunContainer.getPosition();
          var upY = originalPos.y + 6;
          var downY = originalPos.y - 8;
          tween(this.gunContainer).to(0.06, {
            position: new Vec3(originalPos.x, upY, originalPos.z),
            scale: new Vec3(1.05, 1.05, 1)
          }, {
            easing: 'quadOut'
          }).to(0.08, {
            position: new Vec3(originalPos.x, downY, originalPos.z),
            scale: new Vec3(1.2, 1.2, 1)
          }, {
            easing: 'quadIn'
          }).to(0.12, {
            position: originalPos,
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut'
          }).start();
        };
        _proto.showJackpotMini = function showJackpotMini() {
          if (this.jackpotMiniNode) {
            this.jackpotMiniNode.active = true;
            tween(this.jackpotMiniNode).repeatForever(tween().to(0.5, {
              scale: new Vec3(1.2, 1.2, 1),
              opacity: 150
            }).to(0.5, {
              scale: new Vec3(1, 1, 1),
              opacity: 255
            })).start();
          }
        };
        _proto.hideJackpotMini = function hideJackpotMini() {
          if (this.jackpotMiniNode) {
            Tween.stopAllByTarget(this.jackpotMiniNode);
            this.jackpotMiniNode.active = false;
          }
        };
        return LongVuongPlayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblNickname", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblCoin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblBet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "avatarNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "avatarSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "circle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gunContainer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fireEffect", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "jackpotMiniNode", [_dec11], {
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

System.register("chunks:///_virtual/LongVuong.PopupConfirm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Dialog;
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
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cf7b6Grd0RG6KkwC3Q564VR", "LongVuong.PopupConfirm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupConfirm = exports('default', (_dec = menu("LongVuong/PopupConfirm"), _dec2 = property(Label), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupConfirm, _Dialog);
        function LongVuongPopupConfirm() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "message", _descriptor, _assertThisInitialized(_this));
          _this.onDismissed = null;
          _this.isClickedConfirm = false;
          return _this;
        }
        var _proto = LongVuongPopupConfirm.prototype;
        _proto.showConfirm = function showConfirm(message, onDismissed) {
          this.message.string = message;
          this.onDismissed = onDismissed;
          this.isClickedConfirm = false;
          _Dialog.prototype.show.call(this);
        };
        _proto.actConfirm = function actConfirm() {
          this.isClickedConfirm = true;
          this.dismiss();
        };
        _proto._onShowed = function _onShowed() {
          _Dialog.prototype._onShowed.call(this);
        };
        _proto._onDismissed = function _onDismissed() {
          _Dialog.prototype._onDismissed.call(this);
          if (typeof this.onDismissed === "function") {
            this.onDismissed(this.isClickedConfirm);
          }
        };
        return LongVuongPopupConfirm;
      }(Dialog), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "message", [_dec2], {
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

System.register("chunks:///_virtual/LongVuong.PopupDialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Dialog;
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
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cfe61iQMJpNZYxnK3Gz/KFd", "LongVuong.PopupDialog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupDialog = exports('default', (_dec = menu("LongVuong/PopupDialog"), _dec2 = property(Label), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupDialog, _Dialog);
        function LongVuongPopupDialog() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "message", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LongVuongPopupDialog.prototype;
        _proto.showMessage = function showMessage(message) {
          this.message.string = message;
          this.show();
        };
        return LongVuongPopupDialog;
      }(Dialog), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "message", [_dec2], {
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

System.register("chunks:///_virtual/LongVuong.PopupExchangeCoin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './LongVuongPhotonClient.ts', './Config.ts', './LongVuong.Lobby.ts', './PhotonClient.ts', './App.ts', './Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, Label, instantiate, UIOpacity, Dialog, LongVuongPhotonClient, Configs, LongVuongLobby, PhotonClient, App, Utils;
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
      Label = module.Label;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      LongVuongLobby = module.default;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      App = module.default;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "8f14em2r5hF84e+e7+ylgzN", "LongVuong.PopupExchangeCoin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupExchangeCoin = exports('default', (_dec = menu("LongVuong/PopupExchangeCoin"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(EditBox), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupExchangeCoin, _Dialog);
        function LongVuongPopupExchangeCoin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listItems", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTemplate", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "edbAmount", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSA", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSAO", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblNotification", _descriptor6, _assertThisInitialized(_this));
          _this.isCashOut = false;
          _this.verifyCode = "";
          _this.cashOutMin = 0;
          _this.cashInMin = 0;
          return _this;
        }
        var _proto = LongVuongPopupExchangeCoin.prototype;
        _proto.start = function start() {
          var _this2 = this;
          var data = [LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.CashoutMin, LongVuongPhotonClient.EParameterCodes.PortalId, Configs.Login.PortalID];
          LongVuongPhotonClient.getInstance().sendOperation(LongVuongPhotonClient.EOperationCodes.Shop, data, true);
          LongVuongPhotonClient.getInstance().addResponseListener(LongVuongPhotonClient.EOperationCodes.Shop, function (res) {
            if (res.errCode < 0) {
              LongVuongLobby.instance.actShowDialog(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code != LongVuongPhotonClient.EParameterCodes.OperationSubCode) {
                try {
                  data = JSON.parse(data);
                } catch (e) {}
              }
              if (code == LongVuongPhotonClient.EParameterCodes.CashInResponse) {
                LongVuongLobby.instance.actShowDialog(App.instance.getTextLang('fish_pu14'));
                LongVuongLobby.instance.updateBalance(data.go, data.ge);
                _this2.dismiss();
              }
              if (code == LongVuongPhotonClient.EParameterCodes.CashOutResponse) {
                LongVuongLobby.instance.actShowDialog(App.instance.getTextLang('fish_pu14'));
                LongVuongLobby.instance.updateBalance(data.go, data.ge);
                _this2.dismiss();
              }
              if (code == LongVuongPhotonClient.EParameterCodes.CashoutMinResponse) {
                _this2.cashOutMin = JSON.parse(data.value);
                if (_this2.isCashOut) {
                  _this2.updateSAO();
                }
              }
            });
          });
        };
        _proto.showSAO = function showSAO() {
          this.updateSAO();
          _Dialog.prototype.show.call(this);
        };
        _proto.showSA = function showSA() {
          this.updateSA();
          _Dialog.prototype.show.call(this);
        };
        _proto.clearEdb = function clearEdb() {
          this.edbAmount.string = "";
        };
        _proto.updateSA = function updateSA() {
          var _dataSA$,
            _this3 = this;
          this.btnSA.active = true;
          this.btnSAO.active = false;
          this.isCashOut = false;
          this.listItems.removeAllChildren();
          var dataSA = LongVuongLobby.instance.clientParameterConfig.sa;
          this.cashInMin = (_dataSA$ = dataSA[0]) != null ? _dataSA$ : 1000;
          var _loop = function _loop(i) {
            var item = instantiate(_this3.itemTemplate);
            item.active = true;
            item.getComponentsInChildren(Label).forEach(function (label) {
              label.string = Utils.formatNumber(dataSA[i]);
            });
            item.parent = _this3.listItems;
            item.on(Node.EventType.TOUCH_END, function () {
              _this3.edbAmount.string = dataSA[i].toString();
            });
          };
          for (var i = 0; i < dataSA.length; i++) {
            _loop(i);
          }
          this.edbAmount.string = "";
          this.lblNotification.string = App.instance.getTextLang('TLN_MIN_GOLD_TO_CHANGE').replace("{0}", Utils.formatNumber(this.cashInMin));
        };
        _proto.updateSAO = function updateSAO() {
          var _this4 = this;
          this.btnSA.active = false;
          this.btnSAO.active = true;
          this.isCashOut = true;
          this.listItems.removeAllChildren();
          var dataSAO = LongVuongLobby.instance.clientParameterConfig.sao;
          var _loop2 = function _loop2(i) {
            var item = instantiate(_this4.itemTemplate);
            item.active = true;
            item.getComponentsInChildren(Label).forEach(function (label) {
              label.string = Utils.formatNumber(dataSAO[i]);
            });
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
          this.lblNotification.string = App.instance.getTextLang('fish_err999001').replace("{0}", Utils.formatNumber(this.cashOutMin));
        };
        _proto.actSubmit = function actSubmit() {
          var amount = parseInt(this.edbAmount.string);
          if (this.isCashOut && amount < this.cashOutMin) {
            return;
          } else if (amount < this.cashInMin) {
            return;
          }
          var payload = {
            a: amount
          };
          var data = [];
          data.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, this.isCashOut ? LongVuongPhotonClient.EOperationSubCodes.CashOutGold : LongVuongPhotonClient.EOperationSubCodes.CashInGold);
          data.push(LongVuongPhotonClient.EParameterCodes.ExchangeMessage, JSON.stringify(payload));
          LongVuongPhotonClient.getInstance().sendOperation(LongVuongPhotonClient.EOperationCodes.Shop, data, true);
        };
        return LongVuongPopupExchangeCoin;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listItems", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edbAmount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnSA", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSAO", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblNotification", [_dec7], {
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

System.register("chunks:///_virtual/LongVuong.PopupGuide.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LongVuong.Lobby.ts', './Dialog.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, LongVuongLobby, Dialog;
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
      LongVuongLobby = module.default;
    }, function (module) {
      Dialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "a01e7vOV4VBfayU0K8YDA49", "LongVuong.PopupGuide", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupGuide = exports('default', (_dec = menu("LongVuong/PopupGuide"), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property(Node), _dec5 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupGuide, _Dialog);
        function LongVuongPopupGuide() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contents", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pages", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content2List", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content2Template", _descriptor4, _assertThisInitialized(_this));
          _this.currentPage = 1;
          return _this;
        }
        var _proto = LongVuongPopupGuide.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.content2List.removeAllChildren();
          LongVuongLobby.instance.listGunConfig.forEach(function (gunConfig) {
            var itemNode = instantiate(_this2.content2Template);
            itemNode.getChildByName('BET').getComponent(Label).string = gunConfig.v.toLocaleString("vi-VN");
            itemNode.getChildByName('PERCENT').getComponent(Label).string = gunConfig.j * 100 + "%";
            _this2.content2List.addChild(itemNode);
          });
          this.togglePage(null, this.currentPage);
        };
        _proto.togglePage = function togglePage(target, index) {
          this.currentPage = index;
          for (var i = 0; i < this.contents.length; i++) {
            this.contents[i].active = i == index - 1;
            this.pages[i].getChildByName('active').active = i == index - 1;
          }
        };
        _proto.nextPage = function nextPage() {
          if (this.currentPage == 5) return;
          this.currentPage++;
          this.togglePage(null, this.currentPage);
        };
        _proto.prevPage = function prevPage() {
          if (this.currentPage == 1) return;
          this.currentPage--;
          this.togglePage(null, this.currentPage);
        };
        return LongVuongPopupGuide;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pages", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content2List", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "content2Template", [_dec5], {
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

System.register("chunks:///_virtual/LongVuong.PopupHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './LongVuongPhotonClient.ts', './PhotonClient.ts', './LongVuong.Lobby.ts', './Config.ts', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, Dialog, LongVuongPhotonClient, PhotonClient, LongVuongLobby, Configs, App;
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
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      LongVuongLobby = module.default;
    }, function (module) {
      Configs = module.default;
    }, function (module) {
      App = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "03f10sDB/NLhJEWtE5Egnku", "LongVuong.PopupHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupHistory = exports('default', (_dec = menu("LongVuong/PopupHistory"), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupHistory, _Dialog);
        function LongVuongPopupHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "activeButtons", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listContentNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContentNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listPageNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemPageNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "header3Play", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "header3Exchange", _descriptor7, _assertThisInitialized(_this));
          _this.currentPage = 1;
          _this.totalPages = 1;
          _this.historyData = [];
          _this.pageSize = 8;
          _this.isPlayTab = false;
          _this.isCashOutTab = false;
          _this.playTypes = ['CK_HISTORY_SHOT', 'fish_pu27', 'TLN_REWARD_ELECTRIC_FISH', 'TLN_WIN_GOD_OF_WEALTH', 'TLN_REWARD_JACKPOT', 'TLN_LOSE_GOD_OF_WEALTH'];
          return _this;
        }
        var _proto = LongVuongPopupHistory.prototype;
        _proto.start = function start() {
          var _this2 = this;
          LongVuongPhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Statistic, function (res) {
            if (res.errCode < 0) {
              LongVuongLobby.instance.actShowDialog(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code === LongVuongPhotonClient.EParameterCodes.PlayHistoryResponse || code === LongVuongPhotonClient.EParameterCodes.ExChangeHistoryResponse) {
                _this2.historyData = JSON.parse(data);
                _this2.listPageNode.removeAllChildren();
                _this2.currentPage = 1;
                _this2.totalPages = 1;
                if (_this2.historyData.length === 0) return;
                _this2.totalPages = Math.min(10, Math.ceil(_this2.historyData.length / _this2.pageSize));
                var _loop = function _loop(idx) {
                    pageNode = instantiate(_this2.itemPageNode);
                    pageNode.getComponentInChildren(Label).string = idx.toString();
                    pageNode.parent = _this2.listPageNode;
                    pageNode.on("click", function () {
                      _this2.currentPage = idx;
                      _this2.showContent(_this2.currentPage);
                    }, _this2);
                  },
                  pageNode;
                for (var idx = 1; idx <= _this2.totalPages; idx++) {
                  _loop(idx);
                }
                _this2.showContent(_this2.currentPage);
              }
            });
          });
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.toggleTab(null, "0");
        };
        _proto.toggleTab = function toggleTab(_event, index) {
          this.activeButtons.forEach(function (button, i) {
            button.active = i == parseInt(index);
          });
          this.isPlayTab = false;
          this.isCashOutTab = false;
          var data = [LongVuongPhotonClient.EParameterCodes.OperationSubCode];
          switch (index) {
            case "0":
              this.isPlayTab = true;
              this.header3Play.active = true;
              this.header3Exchange.active = false;
              data.push(LongVuongPhotonClient.EOperationSubCodes.PlayGameHistory);
              break;
            case "1":
              this.header3Play.active = false;
              this.header3Exchange.active = true;
              data.push(LongVuongPhotonClient.EOperationSubCodes.CashInHistory);
              break;
            case "2":
              this.isCashOutTab = true;
              this.header3Play.active = false;
              this.header3Exchange.active = true;
              data.push(LongVuongPhotonClient.EOperationSubCodes.CashOutHistory);
              break;
          }
          this.listContentNode.removeAllChildren();
          data.push(LongVuongPhotonClient.EParameterCodes.AccountId, Configs.Login.AccountID);
          data.push(LongVuongPhotonClient.EParameterCodes.PortalId, Configs.Login.PortalID);
          data.push(LongVuongPhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.nextPage = function nextPage() {
          if (this.currentPage == this.totalPages) return;
          this.currentPage++;
          this.showContent(this.currentPage);
        };
        _proto.prevPage = function prevPage() {
          if (this.currentPage == 1) return;
          this.currentPage--;
          this.showContent(this.currentPage);
        };
        _proto.showContent = function showContent(page) {
          var _this3 = this;
          this.listPageNode.children.forEach(function (node, index) {
            node.getChildByName('active').active = index + 1 == page;
          });
          this.listContentNode.removeAllChildren();
          var startIdx = (page - 1) * this.pageSize;
          var endIdx = startIdx + this.pageSize;
          var paginatedData = this.historyData.slice(startIdx, endIdx);
          paginatedData.forEach(function (data) {
            var _Date, _data$Balance;
            var itemNode = instantiate(_this3.itemContentNode);
            itemNode.parent = _this3.listContentNode;
            itemNode.active = true;
            var item1 = itemNode.getChildByName("1").getComponent(Label);
            var item2 = itemNode.getChildByName("2").getComponent(Label);
            var item3 = itemNode.getChildByName("3").getComponent(Label);
            var item4 = itemNode.getChildByName("4").getComponent(Label);
            item1.string = ((_Date = new Date(data.CreatedTime || data.ct)) == null ? void 0 : _Date.toLocaleString("en-GB")) || "Unknown";
            item3.string = _this3.isPlayTab ? "#" + data.ri : ((_data$Balance = data.Balance) == null ? void 0 : _data$Balance.toLocaleString("vi-VN")) || "Unknown";
            item4.string = _this3.isPlayTab ? App.instance.getTextLang(_this3.playTypes[data.t]) : _this3.isCashOutTab ? App.instance.getTextLang('BUY_GAM') : App.instance.getTextLang('BUY_GEM');
            if (_this3.isPlayTab) {
              var amount = data.cr - data.b;
              var amountText = amount.toLocaleString("vi-VN");
              if (amount > 0) {
                amountText = "+" + amountText;
              }
              item2.string = amountText;
            } else {
              item2.string = parseInt(data.Amount).toLocaleString("vi-VN");
            }
          });
        };
        return LongVuongPopupHistory;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activeButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listContentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemContentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listPageNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemPageNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "header3Play", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "header3Exchange", [_dec8], {
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

System.register("chunks:///_virtual/LongVuong.PopupJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './LongVuongPhotonClient.ts', './PhotonClient.ts', './LongVuong.Lobby.ts', './Config.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Label, Dialog, LongVuongPhotonClient, PhotonClient, LongVuongLobby, Configs;
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
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }, function (module) {
      LongVuongLobby = module.default;
    }, function (module) {
      Configs = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "68451/Ka7JAqo6aXQeAxZxg", "LongVuong.PopupJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupJackpot = exports('default', (_dec = menu("LongVuong/PopupJackpot"), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupJackpot, _Dialog);
        function LongVuongPopupJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "activeButtons", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listContentNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemContentNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listPageNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemPageNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "header1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "header2", _descriptor7, _assertThisInitialized(_this));
          _this.currentPage = 1;
          _this.totalPages = 1;
          _this.historyData = [];
          _this.pageSize = 8;
          _this.isTopPlayer = false;
          return _this;
        }
        var _proto = LongVuongPopupJackpot.prototype;
        _proto.start = function start() {
          var _this2 = this;
          LongVuongPhotonClient.getInstance().addResponseListener(PhotonClient.EOperationCodes.Statistic, function (res) {
            if (res.errCode < 0) {
              LongVuongLobby.instance.actShowDialog(PhotonClient.getErrMsg(res.errCode));
              return;
            }
            var keys = Object.keys(res.vals);
            keys.forEach(function (key) {
              var code = parseInt(key);
              var data = res.vals[key];
              if (code === LongVuongPhotonClient.EParameterCodes.TopJackpotResponse) {
                _this2.historyData = JSON.parse(data);
                _this2.listPageNode.removeAllChildren();
                _this2.currentPage = 1;
                _this2.totalPages = 1;
                if (_this2.historyData.length === 0) return;
                _this2.totalPages = Math.min(10, Math.ceil(_this2.historyData.length / _this2.pageSize));
                _this2.listPageNode.removeAllChildren();
                var _loop = function _loop(idx) {
                    pageNode = instantiate(_this2.itemPageNode);
                    pageNode.getComponentInChildren(Label).string = idx.toString();
                    pageNode.parent = _this2.listPageNode;
                    pageNode.on("click", function () {
                      _this2.currentPage = idx;
                      _this2.showContent(_this2.currentPage);
                    }, _this2);
                  },
                  pageNode;
                for (var idx = 1; idx <= _this2.totalPages; idx++) {
                  _loop(idx);
                }
                _this2.showContent(_this2.currentPage);
              }
            });
          });
        };
        _proto.show = function show() {
          _Dialog.prototype.show.call(this);
          this.toggleTab(null, "0");
        };
        _proto.toggleTab = function toggleTab(_event, index) {
          this.activeButtons.forEach(function (button, i) {
            button.active = i == parseInt(index);
          });
          this.isTopPlayer = false;
          var data = [LongVuongPhotonClient.EParameterCodes.OperationSubCode];
          switch (index) {
            case "0":
              this.isTopPlayer = true;
              this.header1.active = true;
              this.header2.active = false;
              data.push(LongVuongPhotonClient.EOperationSubCodes.GetTopPlayer);
              break;
            case "1":
              this.header1.active = false;
              this.header2.active = true;
              data.push(LongVuongPhotonClient.EOperationSubCodes.GetTopJackpot);
              break;
          }
          this.listContentNode.removeAllChildren();
          data.push(LongVuongPhotonClient.EParameterCodes.CurrencyId, Configs.Login.CurrencyID);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Statistic, data, true);
        };
        _proto.nextPage = function nextPage() {
          if (this.currentPage == this.totalPages) return;
          this.currentPage++;
          this.showContent(this.currentPage);
        };
        _proto.prevPage = function prevPage() {
          if (this.currentPage == 1) return;
          this.currentPage--;
          this.showContent(this.currentPage);
        };
        _proto.showContent = function showContent(page) {
          var _this3 = this;
          this.listPageNode.children.forEach(function (node, index) {
            node.getChildByName('active').active = index + 1 == page;
          });
          this.listContentNode.removeAllChildren();
          var startIdx = (page - 1) * this.pageSize;
          var endIdx = startIdx + this.pageSize;
          var paginatedData = this.historyData.slice(startIdx, endIdx);
          paginatedData.forEach(function (data, index) {
            var item = instantiate(_this3.itemContentNode);
            item.parent = _this3.listContentNode;
            item.active = true;
            var item1 = item.getChildByName("1").getComponent(Label);
            var item2 = item.getChildByName("2").getComponent(Label);
            var item3 = item.getChildByName("3").getComponent(Label);
            var item4 = item.getChildByName("4");
            item4.active = !_this3.isTopPlayer;
            var amount = parseFloat(data.PrizeValue);
            item1.string = _this3.isTopPlayer ? "" + (startIdx + index + 1) : new Date(data.CreatedTime).toLocaleString("en-GB");
            item2.string = data.Username || data.Nickname || "Unknown";
            item3.string = isNaN(amount) ? "0" : amount.toLocaleString("vi-VN");
            item4.getComponent(Label).string = "Jackpot";
          });
        };
        return LongVuongPopupJackpot;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activeButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listContentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemContentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listPageNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemPageNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "header1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "header2", [_dec8], {
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

System.register("chunks:///_virtual/LongVuong.PopupSetting.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Dialog.ts', './LongVuong.Lobby.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sys, Dialog, LongVuongLobby;
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
      sys = module.sys;
    }, function (module) {
      Dialog = module.default;
    }, function (module) {
      LongVuongLobby = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "e38e53QoUhOs56o8QRP8kQl", "LongVuong.PopupSetting", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LongVuongPopupSetting = exports('default', (_dec = menu("LongVuong/PopupSetting"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Dialog) {
        _inheritsLoose(LongVuongPopupSetting, _Dialog);
        function LongVuongPopupSetting() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Dialog.call.apply(_Dialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconEffect", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconMusic", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMusic", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LongVuongPopupSetting.prototype;
        _proto.showDialog = function showDialog() {
          var onMusic = sys.localStorage.getItem("SKILL_LV_is_playing") === "true";
          var onEffect = sys.localStorage.getItem("SKILL_LV_is_effect_on") === "true";
          this.iconMusic.getChildByName('on').active = onMusic;
          this.iconMusic.getChildByName('off').active = !onMusic;
          this.btnMusic.getChildByName('on').active = onMusic;
          this.btnMusic.getChildByName('off').active = !onMusic;
          this.iconEffect.getChildByName('on').active = onEffect;
          this.iconEffect.getChildByName('off').active = !onEffect;
          this.btnEffect.getChildByName('on').active = onEffect;
          this.btnEffect.getChildByName('off').active = !onEffect;
        };
        _proto.toggleMusic = function toggleMusic() {
          var isOn = sys.localStorage.getItem("SKILL_LV_is_playing") === "true";
          isOn = !isOn;
          sys.localStorage.setItem("SKILL_LV_is_playing", isOn.toString());
          this.iconMusic.getChildByName('on').active = isOn;
          this.iconMusic.getChildByName('off').active = !isOn;
          this.btnMusic.getChildByName('on').active = isOn;
          this.btnMusic.getChildByName('off').active = !isOn;
          if (isOn) {
            LongVuongLobby.instance.playMusic();
          } else {
            LongVuongLobby.instance.turnOffMusic();
          }
        };
        _proto.toggleEffect = function toggleEffect() {
          var isOn = sys.localStorage.getItem("SKILL_LV_is_effect_on") === "true";
          isOn = !isOn;
          sys.localStorage.setItem("SKILL_LV_is_effect_on", isOn);
          this.iconEffect.getChildByName('on').active = isOn;
          this.iconEffect.getChildByName('off').active = !isOn;
          this.btnEffect.getChildByName('on').active = isOn;
          this.btnEffect.getChildByName('off').active = !isOn;
          // audioEngine.setEffectsVolume(!isOn ? 1 : 0);
        };

        return LongVuongPopupSetting;
      }(Dialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconEffect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconMusic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnMusic", [_dec5], {
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

System.register("chunks:///_virtual/LongVuong.SyncTimeControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LongVuongPhotonClient.ts', './PhotonClient.ts'], function (exports) {
  var _createClass, cclegacy, LongVuongPhotonClient, PhotonClient;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LongVuongPhotonClient = module.LongVuongPhotonClient;
    }, function (module) {
      PhotonClient = module.PhotonClient;
    }],
    execute: function () {
      cclegacy._RF.push({}, "be4dbn1rEtBmpcYoTK6PNCb", "LongVuong.SyncTimeControl", undefined);
      var LongVuongSyncTimeControl = exports('default', /*#__PURE__*/function () {
        function LongVuongSyncTimeControl() {
          this._differenceTimeClientServer = 0;
          this._deltaPingTime = 0;
          this._pingIntervalId = null;
          this._sendPingTime = 0;
        }
        var _proto = LongVuongSyncTimeControl.prototype;
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
          data.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.Ping);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
          this._sendPingTime = Date.now();
        };
        _proto.sendPong = function sendPong(pingTime) {
          var data = [];
          data.push(LongVuongPhotonClient.EParameterCodes.OperationSubCode, LongVuongPhotonClient.EOperationSubCodes.Pong);
          data.push(LongVuongPhotonClient.EParameterCodes.PongMessage, pingTime);
          LongVuongPhotonClient.getInstance().sendOperation(PhotonClient.EOperationCodes.Game, data, true);
        };
        _createClass(LongVuongSyncTimeControl, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new LongVuongSyncTimeControl();
            }
            return this._instance;
          }
        }]);
        return LongVuongSyncTimeControl;
      }());
      LongVuongSyncTimeControl._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LongVuong.Wave.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "fcfe7em7O1ATLgiZV5LvTQN", "LongVuong.Wave", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FloatingWave = exports('default', (_dec = property(CCInteger), _dec2 = property(CCInteger), _dec3 = property(CCInteger), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FloatingWave, _Component);
        function FloatingWave() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "amplitudeY", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "amplitudeRotation", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveSpeed", _descriptor3, _assertThisInitialized(_this));
          _this.startY = 0;
          _this.time = 0;
          return _this;
        }
        var _proto = FloatingWave.prototype;
        _proto.onLoad = function onLoad() {
          this.startY = this.node.y;
        };
        _proto.update = function update(dt) {
          this.time += dt;
          var sinVal = Math.sin(this.time * this.waveSpeed * Math.PI * 2);
          this.node.y = this.startY + sinVal * this.amplitudeY;
          this.node.angle = sinVal * this.amplitudeRotation;
        };
        return FloatingWave;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "amplitudeY", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amplitudeRotation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "waveSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/LongVuong', 'chunks:///_virtual/LongVuong'); 
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