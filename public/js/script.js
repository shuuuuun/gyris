!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[s]={exports:{}};e[s][0].call(h.exports,function(t){var n=e[s][1][t];return i(n?n:t)},h,h.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[[0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0]]},{}],2:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){switch(t){case"left":u.dropDirection="left";break;case"right":u.dropDirection="right";break;case"down":u.dropDirection="down";break;case"rotate":u.moveBlock("rotate")}}var o=t("./modules/Tetris"),s=r(o),a={37:"left",39:"right",40:"down",38:"rotate",32:"rotate"},u=new s.default({disableTouch:!0,disableKey:!0});document.querySelector(".container");document.addEventListener("keydown",function(t){console.log(t.key,t.keyCode,a[t.keyCode]),"undefined"!=typeof a[t.keyCode]&&(t.preventDefault(),i(a[t.keyCode]))},!1),document.addEventListener("touchstart",function(t){t.preventDefault(),u.moveBlock("rotate")},!1),window.addEventListener("devicemotion",function(t){var e=t.accelerationIncludingGravity.x||0,n=t.accelerationIncludingGravity.y||0,r=(t.accelerationIncludingGravity.z||0,Math.abs(e)>Math.abs(n)),o=r?e>0?"right":"left":n>0?null:"down";console.log(r,o),i(o)},!1),u.on("gamestart",function(){}),u.on("newblockcreated",function(){u.dropDirection="down"}),u.on("tick",function(){}),u.on("gameOverEffect",function(){}),u.on("gamequit",function(){u.newGame()}),u.newGame()},{"./modules/Tetris":3}],3:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=t("jquery-deferred"),c=r(u),h=t("events"),l=r(h),f=t("./Util"),d=r(f),v=t("./TouchController"),m=r(v),p=t("../constants/SHAPE_LIST"),_=r(p),y=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),r=n;return n.COLS=13,n.ROWS=13,n.BLOCK_SIZE=25,n.NUMBER_OF_BLOCK=4,n.HIDDEN_ROWS=n.NUMBER_OF_BLOCK,n.LOGICAL_ROWS=n.ROWS+n.HIDDEN_ROWS,n.WIDTH=n.BLOCK_SIZE*n.COLS,n.HEIGHT=n.BLOCK_SIZE*n.ROWS,n.NEXT_WIDTH=n.BLOCK_SIZE*n.NUMBER_OF_BLOCK,n.NEXT_HEIGHT=n.BLOCK_SIZE*n.NUMBER_OF_BLOCK,n.RENDER_INTERVAL=30,n.DEFAULT_TICK_INTERVAL=250,n.SPEEDUP_RATE=10,n.START_X=Math.floor((n.COLS-n.NUMBER_OF_BLOCK)/2),n.START_Y=0,n.CLEARLINE_BLOCK_INDEX=14,n.GAMEOVER_BLOCK_INDEX=15,n.BG_COLOR="#888",n.DEFAULT_DROP_DIRECTION="down",n.COLOR_LIST=["#FF6666","#FFCC66","#FFFF66","#CCFF66","#66FF66","#66FFCC","#66FFFF","#66CCFF","#6666FF","#CC66FF","#FF66FF","#FF6FCF","#FF00FF","#FF8000","#4C4C4C"],n.KEYS={37:"left",39:"right",40:"down",38:"rotate",32:"rotate"},n.cnvs=document.getElementById("game-canvas"),n.ctx=n.cnvs.getContext("2d"),n.cnvsNext=document.getElementById("next-canvas"),n.ctxNext=n.cnvsNext.getContext("2d"),n.cnvs.style.width=n.WIDTH+"px",n.cnvs.style.height=n.HEIGHT+"px",n.cnvs.width=2*n.WIDTH,n.cnvs.height=2*n.HEIGHT,n.ctx.scale(2,2),n.ctx.strokeStyle=n.BG_COLOR,n.cnvsNext.style.width=n.NEXT_WIDTH+"px",n.cnvsNext.style.height=n.NEXT_HEIGHT+"px",n.cnvsNext.width=2*n.NEXT_WIDTH,n.cnvsNext.height=2*n.NEXT_HEIGHT,n.ctxNext.scale(2,2),n.ctxNext.strokeStyle=n.BG_COLOR,n.setBlurEvent(),t.disableKey||n.setKeyEvent(),t.disableTouch||n.setTouchEvent(),n.renderId=setInterval(function(){r.render()},n.RENDER_INTERVAL),n}return s(e,t),a(e,[{key:"setBlurEvent",value:function(){var t=this;window.addEventListener("blur",function(){t.pauseGame()},!1),window.addEventListener("focus",function(){t.resumeGame()},!1)}},{key:"setKeyEvent",value:function(){var t=this;document.addEventListener("keydown",function(e){"undefined"!=typeof t.KEYS[e.keyCode]&&(e.preventDefault(),t.moveBlock(t.KEYS[e.keyCode]))},!1)}},{key:"setTouchEvent",value:function(){var t,e,n=this,r=new m.default({element:this.cnvs}),i=!1,o=!1;r.on("touchstart",function(n){t=n.touchStartX,e=n.touchStartY,i=!0,o=!1}),r.on("touchmove",function(r){var s=r.touchX-t,a=r.touchY-e,u=s/n.BLOCK_SIZE|0,c=a/n.BLOCK_SIZE|0;if(!o){for(;u;){var h=u/Math.abs(u);if(!n.valid(h,0))break;n.currentX+=h,u-=h,t=r.touchX}for(;c>0&&n.valid(0,1);)n.currentY++,c--,e=r.touchY;i=!1}}),r.on("touchend",function(t){i&&n.moveBlock("rotate")}),this.on("freeze",function(){o=!0})}},{key:"newGame",value:function(){this.initGame(),this.startGame()}},{key:"initGame",value:function(){clearTimeout(this.tickId),clearInterval(this.renderId),this.isPlayng=!1,this.lose=!1,this.tickInterval=this.DEFAULT_TICK_INTERVAL,this.dropDirection=this.DEFAULT_DROP_DIRECTION,this.sumOfClearLines=0,this.score=0,this.frameCount=0,this.initBoad(),this.initBlock(),this.createNextBlock(),this.render()}},{key:"startGame",value:function(){var t=this;this.isPlayng=!0,this.createNewBlock(),this.createNextBlock(),this.renderId=setInterval(function(){t.render()},this.RENDER_INTERVAL),this.emit("gamestart"),this.tick()}},{key:"initBoad",value:function(){this.board=[];for(var t=0;t<this.LOGICAL_ROWS;++t){this.board[t]=[];for(var e=0;e<this.COLS;++e)this.board[t][e]=0}}},{key:"initBlock",value:function(){this.currentBlock=[];for(var t=0;t<this.NUMBER_OF_BLOCK;++t){this.currentBlock[t]=[];for(var e=0;e<this.NUMBER_OF_BLOCK;++e)this.currentBlock[t][e]=0}this.currentBlockId=0,this.currentX=this.START_X,this.currentY=this.START_Y}},{key:"createNewBlock",value:function(){this.nextBlock[0]||this.createNextBlock(),this.currentBlock=this.nextBlock,this.currentBlockId=this.nextBlockId,this.currentX=this.START_X,this.currentY=this.START_Y,this.emit("newblockcreated")}},{key:"createNextBlock",value:function(){var t=Math.floor(Math.random()*_.default.length),e=_.default[t];this.nextBlockId=t,this.nextBlock=[];for(var n=0;n<this.NUMBER_OF_BLOCK;++n){this.nextBlock[n]=[];for(var r=0;r<this.NUMBER_OF_BLOCK;++r){var i=this.NUMBER_OF_BLOCK*n+r;this.nextBlock[n][r]=e[i]?t+1:0}}this.emit("nextblockcreated")}},{key:"tick",value:function(){var t=this;if(clearTimeout(this.tickId),!this.moveBlock(this.dropDirection)){if(this.freeze(),this.clearLines(),this.checkGameOver())return this.emit("gameover"),this.quitGame().then(function(){}),!1;this.frameCount++,this.createNewBlock(),this.createNextBlock()}this.tickId=setTimeout(function(){t.tick()},this.tickInterval),this.emit("tick")}},{key:"quitGame",value:function(){var t=this,e=c.default.Deferred();return this.gameOverEffect().then(function(){t.isPlayng=!1,t.emit("gamequit"),e.resolve()}),e.promise()}},{key:"pauseGame",value:function(){clearTimeout(this.tickId)}},{key:"resumeGame",value:function(){var t=this;this.isPlayng&&(this.tickId=setTimeout(function(){t.tick()},this.tickInterval))}},{key:"freeze",value:function(){for(var t=0;t<this.NUMBER_OF_BLOCK;++t)for(var e=0;e<this.NUMBER_OF_BLOCK;++e){var n=e+this.currentX,r=t+this.currentY;!this.currentBlock[t][e]||r<0||(this.board[r][n]=this.currentBlock[t][e])}this.emit("freeze")}},{key:"clearLines",value:function(){function t(t,e){return function(){var r=c.default.Deferred();return n.board[e][t]=n.CLEARLINE_BLOCK_INDEX,r.resolve(),r.promise()}}function e(t,e){return function(){var t=c.default.Deferred();if(i.length)return i.reverse().forEach(function(t){n.board.splice(t,1),n.board.unshift(o)}),t.resolve(),t.promise()}}var n=this,r=0,i=[],o=Array.apply(null,Array(this.COLS)).map(function(){return 0}),s=c.default.Deferred();s.resolve();for(var a=this.LOGICAL_ROWS-1;a>=0;--a){var u=this.board[a].every(function(t){return 0!==t});if(u){i.push(a),r++,this.sumOfClearLines++,this.tickInterval-=this.SPEEDUP_RATE;for(var h=0;h<this.COLS;++h)this.board[a][h]&&(s=s.then(t(h,a)).then(d.default.sleep(10)))}}s.then(e(h,a)),this.score+=r<=1?r:Math.pow(2,r),r>0&&this.emit("clearline",i)}},{key:"gameOverEffect",value:function(){function t(t,n){return function(){var r=c.default.Deferred();return e.board[n][t]=e.GAMEOVER_BLOCK_INDEX,e.emit("gameOverEffectTick"),r.resolve(),r.promise()}}var e=this,n=c.default.Deferred();n.resolve();for(var r=0;r<this.LOGICAL_ROWS;++r)for(var i=0;i<this.COLS;++i)this.board[r][i]&&(n=n.then(t(i,r)).then(d.default.sleep(10)));return this.emit("gameOverEffect"),n.then(d.default.sleep(500)).promise()}},{key:"moveBlock",value:function(t){switch(t){case"left":return!!this.valid(-1,0)&&(--this.currentX,!0);case"right":return!!this.valid(1,0)&&(++this.currentX,!0);case"down":return!!this.valid(0,1)&&(++this.currentY,!0);case"rotate":var e=this.rotate(this.currentBlock);return!!this.valid(0,0,e)&&(this.currentBlock=e,!0)}}},{key:"rotate",value:function(){for(var t=[],e=0;e<this.NUMBER_OF_BLOCK;++e){t[e]=[];for(var n=0;n<this.NUMBER_OF_BLOCK;++n)t[e][n]=this.currentBlock[this.NUMBER_OF_BLOCK-1-n][e]}return t}},{key:"rotateBoard",value:function(t){for(var e=Array.apply(null,Array(this.COLS)).map(function(){return 0}),n=[],r=0;r<this.ROWS;++r){n[r]=[];for(var i=0;i<this.COLS;++i)n[r][i]=this.board[this.COLS-1-i+this.HIDDEN_ROWS][r]}for(var o=0;o<this.HIDDEN_ROWS;++o)n.unshift(e);return this.board=n,n}},{key:"valid",value:function(t,e,n){t=t||0,e=e||0;for(var r=this.currentX+t,i=this.currentY+e,o=n||this.currentBlock,s=0;s<this.NUMBER_OF_BLOCK;++s)for(var a=0;a<this.NUMBER_OF_BLOCK;++a){var u=a+r,c=s+i;if(o[s][a]&&("undefined"==typeof this.board[c]||"undefined"==typeof this.board[c][u]||this.board[c][u]||u<0||u>=this.COLS||c>=this.LOGICAL_ROWS))return!1}return!0}},{key:"checkGameOver",value:function(){for(var t=!0,e=0;e<this.NUMBER_OF_BLOCK;++e)for(var n=0;n<this.NUMBER_OF_BLOCK;++n){var r=(n+this.currentX,e+this.currentY);if(r>=this.HIDDEN_ROWS){t=!1;break}}return t}},{key:"render",value:function(){this.ctx.clearRect(0,0,this.WIDTH,this.HEIGHT),this.ctx.fillStyle=this.BG_COLOR,this.ctx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.renderBoard(),this.renderCurrentBlock(),this.renderNextBlock()}},{key:"renderBoard",value:function(){for(var t=0;t<this.COLS;++t)for(var e=0;e<this.ROWS;++e){var n=t,r=e+this.HIDDEN_ROWS,i=this.board[r][n]-1;!this.board[r][n]||i<0||this.drawBlock(t,e,i)}}},{key:"renderCurrentBlock",value:function(){for(var t=0;t<this.NUMBER_OF_BLOCK;++t)for(var e=0;e<this.NUMBER_OF_BLOCK;++e){var n=this.currentBlock[t][e]-1;if(this.currentBlock[t][e]&&!(n<0)){var r=e+this.currentX,i=t+this.currentY-this.HIDDEN_ROWS;this.drawBlock(r,i,n)}}}},{key:"renderNextBlock",value:function(){this.ctxNext.clearRect(0,0,this.NEXT_WIDTH,this.NEXT_HEIGHT);for(var t=0;t<this.NUMBER_OF_BLOCK;++t)for(var e=0;e<this.NUMBER_OF_BLOCK;++e){var n=this.nextBlock[t][e]-1;!this.nextBlock[t][e]||n<0||this.drawNextBlock(e,t,n)}}},{key:"drawBlock",value:function(t,e,n){var r=this.BLOCK_SIZE*t,i=this.BLOCK_SIZE*e,o=this.BLOCK_SIZE;this.ctx.fillStyle=this.COLOR_LIST[n],this.ctx.fillRect(r,i,o,o),this.ctx.strokeRect(r,i,o,o)}},{key:"drawNextBlock",value:function(t,e,n){var r=this.BLOCK_SIZE*t,i=this.BLOCK_SIZE*e,o=this.BLOCK_SIZE;this.ctxNext.fillStyle=this.COLOR_LIST[n],this.ctxNext.fillRect(r,i,o,o),this.ctxNext.strokeRect(r,i,o,o)}}]),e}(l.default);n.default=y},{"../constants/SHAPE_LIST":1,"./TouchController":4,"./Util":5,events:6,"jquery-deferred":7}],4:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=t("events"),c=r(u),h=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.element=t.element||document,n.touchstartElement=t.touchstartElement||n.element,n.touchmoveElement=t.touchmoveElement||n.element,n.touchendElement=t.touchendElement||n.element,n.doubleTapDelay=t.doubleTapDelay||500,n.holdingDelay=t.holdingDelay||1e3,n.watchInterval=t.watchInterval||100,n.touchSupport="ontouchstart"in window,n.touchstart=n.touchSupport?"touchstart":"mousedown",n.touchmove=n.touchSupport?"touchmove":"mousemove",n.touchend=n.touchSupport?"touchend":"mouseup",n.deltaX=0,n.deltaY=0,n.moveX=0,n.moveY=0,n.defineEventListener(),n.setEvent(),n}return s(e,t),a(e,[{key:"setEvent",value:function(){this.touchstartElement.addEventListener(this.touchstart,this.onTouchStart,!1),this.touchmoveElement.addEventListener(this.touchmove,this.onTouchMove,!1),this.touchendElement.addEventListener(this.touchend,this.onTouchEnd,!1)}},{key:"dispose",value:function(){this.touchstartElement.removeEventListener(this.touchstart,this.onTouchStart,!1),this.touchmoveElement.removeEventListener(this.touchmove,this.onTouchMove,!1),this.touchendElement.removeEventListener(this.touchend,this.onTouchEnd,!1)}},{key:"defineEventListener",value:function(){var t=this,e=void 0,n=void 0,r=function(){clearInterval(e),clearTimeout(n)},i=function(){r(),n=setTimeout(function(){e=setInterval(function(){t.emit("touchholding",t)},t.watchInterval)},t.holdingDelay)};this.onTouchStart=function(e){e.preventDefault(),e.stopPropagation(),t.isDoubleTap=t.isTap,t.isDragging=!0,t.isTap=!0,t.touchStartTime=Date.now(),t.touchStartX=t.touchSupport?e.touches[0].pageX:e.pageX,t.touchStartY=t.touchSupport?e.touches[0].pageY:e.pageY,i(),t.emit("touchstart",{touchStartTime:t.touchStartTime,touchStartX:t.touchStartX,touchStartY:t.touchStartY})},this.onTouchMove=function(e){t.isDragging&&(r(),t.lasttouchX=t.touchX||t.touchStartX,t.lasttouchY=t.touchY||t.touchStartY,t.touchX=t.touchSupport?e.touches[0].pageX:e.pageX,t.touchY=t.touchSupport?e.touches[0].pageY:e.pageY,t.deltaX=t.touchX-t.lasttouchX,t.deltaY=t.touchY-t.lasttouchY,t.moveX=t.touchX-t.touchStartX,t.moveY=t.touchY-t.touchStartY,t.isTap=t.isDoubleTap=!1,i(),t.emit("touchmove",{lasttouchX:t.lasttouchX,lasttouchY:t.lasttouchY,touchX:t.touchX,touchY:t.touchY,deltaX:t.deltaX,deltaY:t.deltaY,moveX:t.moveX,moveY:t.moveY}))},this.onTouchEnd=function(e){t.isDragging=!1,r(),t.elapsedTime=Date.now()-t.touchStartTime,t.touchEndX=t.touchX,t.touchEndY=t.touchY,t.emit("touchend",{elapsedTime:t.elapsedTime,touchEndX:t.touchEndX,touchEndY:t.touchEndY,moveX:t.moveX,moveY:t.moveY,isTap:t.isTap,isDoubleTap:t.isDoubleTap}),t.touchX=t.touchY=null,t.moveX=t.moveY=0,setTimeout(function(){t.isTap=t.isDoubleTap=!1},t.doubleTapDelay)}}}]),e}(c.default);n.default=h},{events:6}],5:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=t("jquery-deferred"),o=r(i);window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){var e=window.setTimeout(t,1e3/60);return e},window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)};var s={TRANSITIONEND:"transitionend webkitTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd",ANIMATIONEND:"animationend webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd",getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},throttle:function(t,e){var n=!1,r=function(r){n||(n=!0,setTimeout(function(){n=!1,t(r)},e))};return r},debounce:function(t,e){var n,r=function(r){clearTimeout(n),n=setTimeout(function(){t(r)},e)};return r},async:function(t){!function e(n){t[n]&&t[n](function(){e(n+1)})}(0)},delay:function(t){return function(e){setTimeout(e,t)}},sleep:function(t){return function(){var e=o.default.Deferred();return setTimeout(function(){e.resolve()},t),e.promise()}},zeroPadding:function(t,e){return(new Array(e).join("0")+t).slice(-e)},getQueryString:function(){var t={},e=window.location.search;if(e.length>1)for(var n=e.substring(1),r=n.split("&"),i=0;i<r.length;i++){var o=r[i].split("="),s=decodeURIComponent(o[0]),a=decodeURIComponent(o[1]);t[s]=a}return t},getUserAgent:function(){return s.ua={},s.ua.name=window.navigator.userAgent.toLowerCase(),s.ua.isSP=/ipod|iphone|ipad|android/i.test(s.ua.name),s.ua.isPC=!s.ua.isSP,s.ua.isIOS=/ipod|iphone|ipad/i.test(s.ua.name),s.ua.isAndroid=/android/.test(s.ua.name),s.ua.isIE=/msie|trident/i.test(s.ua.name),s.ua.isIE8=/msie 8/.test(s.ua.name),s.ua.isIE9=/msie 9/.test(s.ua.name),s.ua.isIE10=/msie 10/.test(s.ua.name),s.ua.isMac=/macintosh/.test(s.ua.name),s.ua.isChrome=/chrome/.test(s.ua.name),s.ua.isFirefox=/firefox/.test(s.ua.name),s.ua.isSafari=/safari/.test(s.ua.name),s.ua.isMacSafari=s.ua.isSafari&&s.ua.isMac&&!s.ua.isChrome,s.ua.isSP&&(document.body.className+=" isSP"),s.ua.isPC&&(document.body.className+=" isPC"),s.ua}};e.exports=s},{"jquery-deferred":7}],6:[function(t,e,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function o(t){return"number"==typeof t}function s(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!o(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,n,r,o,u,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;var h=new Error('Uncaught, unspecified "error" event. ('+e+")");throw h.context=e,h}if(n=this._events[t],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(s(n))for(o=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,o);return!0},r.prototype.addListener=function(t,e){var n;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?s(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,s(this._events[t])&&!this._events[t].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function n(){this.removeListener(t,n),r||(r=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var r=!1;return n.listener=e,this.on(t,n),this},r.prototype.removeListener=function(t,e){var n,r,o,a;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,r=-1,n===e||i(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(s(n)){for(a=o;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){r=a;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],i(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},r.listenerCount=function(t,e){return t.listenerCount(e)}},{}],7:[function(t,e,n){e.exports=t("./lib/jquery-deferred")},{"./lib/jquery-deferred":10}],8:[function(t,e,n){function r(t){var e=s[t]={};return i.each(t.split(o),function(t,n){e[n]=!0}),e}var i=e.exports=t("./jquery-core.js"),o=/\s+/,s={};i.Callbacks=function(t){t="string"==typeof t?s[t]||r(t):i.extend({},t);var e,n,o,a,u,c,h=[],l=!t.once&&[],f=function(r){for(e=t.memory&&r,n=!0,c=a||0,a=0,u=h.length,o=!0;h&&c<u;c++)if(h[c].apply(r[0],r[1])===!1&&t.stopOnFalse){e=!1;break}o=!1,h&&(l?l.length&&f(l.shift()):e?h=[]:d.disable())},d={add:function(){if(h){var n=h.length;!function e(n){i.each(n,function(n,r){var o=i.type(r);"function"===o?t.unique&&d.has(r)||h.push(r):r&&r.length&&"string"!==o&&e(r)})}(arguments),o?u=h.length:e&&(a=n,f(e))}return this},remove:function(){return h&&i.each(arguments,function(t,e){for(var n;(n=i.inArray(e,h,n))>-1;)h.splice(n,1),o&&(n<=u&&u--,n<=c&&c--)}),this},has:function(t){return i.inArray(t,h)>-1},empty:function(){return h=[],this},disable:function(){return h=l=e=void 0,this},disabled:function(){return!h},lock:function(){return l=void 0,e||d.disable(),this},locked:function(){return!l},fireWith:function(t,e){return e=e||[],e=[t,e.slice?e.slice():e],!h||n&&!l||(o?l.push(e):f(e)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}};return d}},{"./jquery-core.js":9}],9:[function(t,e,n){function r(t){return null==t?String(t):l[h.call(t)]||"object"}function i(t){return"function"===c.type(t)}function o(t){return"array"===c.type(t)}function s(t,e,n){var r,o=0,s=t.length,a=void 0===s||i(t);if(n)if(a){for(r in t)if(e.apply(t[r],n)===!1)break}else for(;o<s&&e.apply(t[o++],n)!==!1;);else if(a){for(r in t)if(e.call(t[r],r,t[r])===!1)break}else for(;o<s&&e.call(t[o],o,t[o++])!==!1;);return t}function a(t){return!(!t||"object"!==c.type(t))}function u(){var t,e,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,h=!1;for("boolean"==typeof s&&(h=s,s=arguments[1]||{},a=2),"object"==typeof s||c.isFunction(s)||(s={}),u===a&&(s=this,--a);a<u;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],r=t[e],s!==r&&(h&&r&&(c.isPlainObject(r)||(i=c.isArray(r)))?(i?(i=!1,o=n&&c.isArray(n)?n:[]):o=n&&c.isPlainObject(n)?n:{},s[e]=c.extend(h,o,r)):void 0!==r&&(s[e]=r));return s}var c=e.exports={type:r,isArray:o,isFunction:i,isPlainObject:a,each:s,extend:u,noop:function(){}},h=Object.prototype.toString,l={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(t){l["[object "+t+"]"]=t.toLowerCase()})},{}],10:[function(t,e,n){/*!
* jquery-deferred
* Copyright(c) 2011 Hidden <zzdhidden@gmail.com>
* MIT Licensed
*/
var r=e.exports=t("./jquery-callbacks.js"),i=Array.prototype.slice;r.extend({Deferred:function(t){var e=[["resolve","done",r.Callbacks("once memory"),"resolved"],["reject","fail",r.Callbacks("once memory"),"rejected"],["notify","progress",r.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return r.Deferred(function(n){r.each(e,function(e,i){var s=i[0],a=t[e];o[i[1]](r.isFunction(a)?function(){var t=a.apply(this,arguments);t&&r.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===o?n:this,[t])}:n[s])}),t=null}).promise()},promise:function(t){return null!=t?r.extend(t,i):i}},o={};return i.pipe=i.then,r.each(e,function(t,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=s.fire,o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,o,s=0,a=i.call(arguments),u=a.length,c=1!==u||t&&r.isFunction(t.promise)?u:0,h=1===c?t:r.Deferred(),l=function(t,n,r){return function(o){n[t]=this,r[t]=arguments.length>1?i.call(arguments):o,r===e?h.notifyWith(n,r):--c||h.resolveWith(n,r)}};if(u>1)for(e=new Array(u),n=new Array(u),o=new Array(u);s<u;s++)a[s]&&r.isFunction(a[s].promise)?a[s].promise().done(l(s,o,a)).fail(h.reject).progress(l(s,n,e)):--c;return c||h.resolveWith(o,a),h.promise()}})},{"./jquery-callbacks.js":8}]},{},[2]);