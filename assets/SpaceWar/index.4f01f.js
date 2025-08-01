System.register("chunks:///_virtual/SpaceWar",["./SpaceWar.Lobby.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SpaceWar.Lobby.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PhotonClient.ts","./App.ts","./Utils.ts","./SpaceWarPhotonClient.ts"],(function(e){var t,n,r,o,i,a,l,s,c,u,p,b,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Label,s=e.Sprite,c=e.Component},function(e){u=e.PhotonClient},function(e){p=e.default},function(e){b=e.Utils},function(e){g=e.SpaceWarPhotonClient}],execute:function(){var f,d,h,L,m,y,v,S,C,G,w,z;i._RF.push({},"a8cc0XpOrNN7JfHEzsXJkop","SpaceWar.Lobby",void 0);var A=a.ccclass,B=a.property,P=a.menu;e("SpaceWarLobby",(f=A("SpaceWarLobby"),d=P("SpaceWar/Lobby"),h=B(l),L=B(l),m=B(l),y=B(s),f(v=d((C=t((S=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(t,"lblLoginStatus",C,o(t)),r(t,"lblGoldBalance",G,o(t)),r(t,"lblGemBalance",w,o(t)),r(t,"sprAvatar",z,o(t)),t.photonClient=null,t}n(t,e);var i=t.prototype;return i.start=function(){var e=this;this.photonClient=g.getInstance(),this.photonClient.connect(),this.photonClient.addResponseListener(u.EOperationCodes.Account,(function(t){if(t.errCode<0)return e.lblLoginStatus.string="Login failed",void p.instance.showErrLoading(u.getErrMsg(t.errCode));p.instance.showLoading(!1),e.photonClient.isLoggedIn=!0,e.lblLoginStatus.string="Login successful";var n=JSON.parse(t.vals[g.EParameterCodes.LoginResponse]);e.lblGoldBalance.string="Gold: "+b.formatNumber(n.go),e.lblGemBalance.string="Gem: "+b.formatNumber(n.ge),e.sprAvatar.spriteFrame=p.instance.getAvatarSpriteFrame(n.ai)}))},i.dismiss=function(){p.instance.gotoLobby(),g.getInstance().peer.disconnect()},t}(c)).prototype,"lblLoginStatus",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(S.prototype,"lblGoldBalance",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(S.prototype,"lblGemBalance",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(S.prototype,"sprAvatar",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=S))||v)||v));i._RF.pop()}}}));

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