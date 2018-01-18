
var Sprite  = Laya.Sprite;
var Stage   = Laya.Stage;
var Texture = Laya.Texture;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var WebGL   = Laya.WebGL;
var Event   = Laya.Event;

/**
 * Game 游戏入口
 */
(function() {
    function Game() {
        //微信小游戏适配
        Laya.MiniAdpter.init();
        // 不支持WebGL时自动切换至Canvas
		Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
        // 设置屏幕适配模式 始终竖屏
		Laya.stage.scaleMode = "vertical";
        // 设置背景色
		Laya.stage.bgColor = "#EEEEEE";
        // 调用onLoad方法
        this.onLoad();
    }
    Laya.class(Game, "Game");
    var _proto = Game.prototype;
    _proto.onLoad = function() {
        var _this = this;
        console.log('2333');
    }

})();

var gameInstance = new Game();
