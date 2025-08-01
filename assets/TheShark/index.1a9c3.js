System.register("chunks:///_virtual/TheShark",["./TheShark.Lobby.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TheShark.Lobby.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PhotonClient.ts","./App.ts","./Utils.ts","./TheSharkPhotonClient.ts"],(function(e){var t,n,r,i,o,a,l,s,c,u,p,b,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Label,s=e.Sprite,c=e.Component},function(e){u=e.PhotonClient},function(e){p=e.default},function(e){b=e.Utils},function(e){h=e.TheSharkPhotonClient}],execute:function(){var g,f,d,L,m,y,v,C,S,k,G,T;o._RF.push({},"e9937amkyJJCZLacD5kg27Y","TheShark.Lobby",void 0);var w=a.ccclass,A=a.property,B=a.menu;e("TheSharkLobby",(g=w("TheSharkLobby"),f=B("TheShark/Lobby"),d=A(l),L=A(l),m=A(l),y=A(s),g(v=f((S=t((C=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"lblLoginStatus",S,i(t)),r(t,"lblGoldBalance",k,i(t)),r(t,"lblGemBalance",G,i(t)),r(t,"sprAvatar",T,i(t)),t.photonClient=null,t}n(t,e);var o=t.prototype;return o.start=function(){var e=this;this.photonClient=h.getInstance(),this.photonClient.connect(),this.photonClient.addResponseListener(u.EOperationCodes.Account,(function(t){if(t.errCode<0)return e.lblLoginStatus.string="Login failed",void p.instance.showErrLoading(u.getErrMsg(t.errCode));p.instance.showLoading(!1),e.photonClient.isLoggedIn=!0,e.lblLoginStatus.string="Login successful";var n=JSON.parse(t.vals[h.EParameterCodes.LoginResponse]);e.lblGoldBalance.string="Gold: "+b.formatNumber(n.go),e.lblGemBalance.string="Gem: "+b.formatNumber(n.ge),e.sprAvatar.spriteFrame=p.instance.getAvatarSpriteFrame(n.ai)}))},o.dismiss=function(){p.instance.gotoLobby(),h.getInstance().peer.disconnect()},t}(c)).prototype,"lblLoginStatus",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(C.prototype,"lblGoldBalance",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(C.prototype,"lblGemBalance",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(C.prototype,"sprAvatar",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=C))||v)||v));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/TheShark', 'chunks:///_virtual/TheShark'); 
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