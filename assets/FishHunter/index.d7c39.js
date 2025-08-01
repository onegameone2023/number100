System.register("chunks:///_virtual/FishHunter",["./FishHunter.Lobby.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/FishHunter.Lobby.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PhotonClient.ts","./App.ts","./Utils.ts","./FishHunterPhotonClient.ts"],(function(t){var n,e,i,r,o,l,a,s,u,c,p,b,g;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,l=t._decorator,a=t.Label,s=t.Sprite,u=t.Component},function(t){c=t.PhotonClient},function(t){p=t.default},function(t){b=t.Utils},function(t){g=t.FishHunterPhotonClient}],execute:function(){var f,h,d,L,m,y,v,C,F,z,G,H;o._RF.push({},"e007e+aPRJKN4jjDv8cXzzn","FishHunter.Lobby",void 0);var P=l.ccclass,S=l.property,w=l.menu;t("FishHunterLobby",(f=P("FishHunterLobby"),h=w("FishHunter/Lobby"),d=S(a),L=S(a),m=S(a),y=S(s),f(v=h((F=n((C=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),l=0;l<e;l++)o[l]=arguments[l];return n=t.call.apply(t,[this].concat(o))||this,i(n,"lblLoginStatus",F,r(n)),i(n,"lblGoldBalance",z,r(n)),i(n,"lblGemBalance",G,r(n)),i(n,"sprAvatar",H,r(n)),n.photonClient=null,n}e(n,t);var o=n.prototype;return o.start=function(){var t=this;this.photonClient=g.getInstance(),this.photonClient.connect(),this.photonClient.addResponseListener(c.EOperationCodes.Account,(function(n){if(n.errCode<0)return t.lblLoginStatus.string="Login failed",void p.instance.showErrLoading(c.getErrMsg(n.errCode));p.instance.showLoading(!1),t.photonClient.isLoggedIn=!0,t.lblLoginStatus.string="Login successful";var e=JSON.parse(n.vals[g.EParameterCodes.LoginResponse]);t.lblGoldBalance.string="Gold: "+b.formatNumber(e.go),t.lblGemBalance.string="Gem: "+b.formatNumber(e.ge),t.sprAvatar.spriteFrame=p.instance.getAvatarSpriteFrame(e.ai)}))},o.dismiss=function(){p.instance.gotoLobby(),g.getInstance().peer.disconnect()},n}(u)).prototype,"lblLoginStatus",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(C.prototype,"lblGoldBalance",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=n(C.prototype,"lblGemBalance",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=n(C.prototype,"sprAvatar",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=C))||v)||v));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/FishHunter', 'chunks:///_virtual/FishHunter'); 
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