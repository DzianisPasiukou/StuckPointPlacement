/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(3);
	var app_controller_ts_1 = __webpack_require__(7);
	__webpack_require__(9);
	angular
	    .module('myApp', [
	    'myApp.stuckPointPlacement'
	])
	    .controller('AppController', app_controller_ts_1.AppController);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./app.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EventEmitter_1 = __webpack_require__(8);
	var AppController = (function () {
	    function AppController() {
	        var _this = this;
	        this.pointsEntityEmitter = new EventEmitter_1.EventEmitter();
	        this.pointsEntity = {
	            maxDepth: 5600,
	            minDepth: 2550,
	            points: [{
	                    depth: 3291.89,
	                    state: 0,
	                    type: 'Differential',
	                    uuid: 'dcfbbf45-cded-5003-26bc-85cbede299cd',
	                    isValid: false,
	                    analysis: {}
	                }]
	        };
	        this.pointsEntityEmitter.subscribe(function (emitter) { return _this.onPointsEntityChanged(emitter); });
	    }
	    AppController.prototype.onPointsEntityChanged = function (emitter) {
	        console.log("emmiter called in app controller...");
	        console.log("points changed...\nneed to do something...\npoints length = " + emitter.points.length);
	    };
	    AppController.$inject = [];
	    return AppController;
	}());
	exports.AppController = AppController;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) {
	        _super.prototype.onNext.call(this, value);
	    };
	    EventEmitter.prototype.next = function (value) { _super.prototype.onNext.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Rx.Subject));
	exports.EventEmitter = EventEmitter;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(10);
	var StuckPointPlacement_config_ts_1 = __webpack_require__(16);
	var stuckPointPlacement_directive_1 = __webpack_require__(13);
	var stuckPointPlacement_controller_1 = __webpack_require__(14);
	angular
	    .module(StuckPointPlacement_config_ts_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement", [
	    (StuckPointPlacement_config_ts_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints")
	])
	    .directive(StuckPointPlacement_config_ts_1.StuckPointPlacementConfig.directivePrefix + "StuckPointPlacement", stuckPointPlacement_directive_1.StuckPointPlacement.create())
	    .controller('StuckPointPlacementController', stuckPointPlacement_controller_1.StuckPointPlacementController);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(17);
	__webpack_require__(20);
	var StuckPointPlacement_config_1 = __webpack_require__(16);
	var stuckPoints_directive_1 = __webpack_require__(11);
	var stuckPoints_controller_1 = __webpack_require__(12);
	angular
	    .module(StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints", [
	    (StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.pointInstance"),
	    (StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.shaft")
	])
	    .directive(StuckPointPlacement_config_1.StuckPointPlacementConfig.directivePrefix + "StuckPoints", stuckPoints_directive_1.StuckPoints.create())
	    .controller('StuckPointsController', stuckPoints_controller_1.StuckPointsController);


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var StuckPoints = (function () {
	    function StuckPoints() {
	        this.restrict = 'AE';
	        this.scope = {
	            stuckEntity: '=',
	            onStuckEntityChanged: '&'
	        };
	        this.controller = 'StuckPointsController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPoints/stuckPoints.html';
	    }
	    StuckPoints.prototype.link = function (scope, element, attrs) {
	    };
	    StuckPoints.create = function () {
	        var directive = function () { return new StuckPoints(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return StuckPoints;
	}());
	exports.StuckPoints = StuckPoints;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var StuckPointsController = (function () {
	    function StuckPointsController() {
	        this.isLocked = false;
	        this.isShowBin = true;
	        this.tjFeedbackBoxService = {};
	    }
	    /**
	     bind to controller
	    */
	    StuckPointsController.prototype.onStuckEntityChanged = function (event) {
	    };
	    StuckPointsController.prototype.onChanged = function ($event, stuckEntity) {
	        console.log("stuck points changed...\ncall callback from parent...");
	        this.onStuckEntityChanged({
	            $event: $event,
	            stuckEntity: stuckEntity
	        });
	    };
	    StuckPointsController.prototype.onRemove = function ($event) {
	        console.log('removed ' + $event);
	    };
	    StuckPointsController.$inject = [];
	    return StuckPointsController;
	}());
	exports.StuckPointsController = StuckPointsController;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var StuckPointPlacement = (function () {
	    function StuckPointPlacement() {
	        this.restrict = 'AE';
	        this.scope = {
	            pointsEntity: '=',
	            pointsEntityEmitter: '=pointsEntityEmitter'
	        };
	        this.controller = 'StuckPointPlacementController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPointPlacement.html';
	    }
	    StuckPointPlacement.prototype.link = function (scope, element, attrs) {
	    };
	    StuckPointPlacement.create = function () {
	        var directive = function () { return new StuckPointPlacement(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return StuckPointPlacement;
	}());
	exports.StuckPointPlacement = StuckPointPlacement;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var StuckPointPlacementController = (function () {
	    function StuckPointPlacementController() {
	    }
	    StuckPointPlacementController.prototype.onStuckEntityChanged = function ($event, stuckEntity) {
	        console.log("stuck points placement...\ncall emmiter");
	        this.pointsEntity = stuckEntity;
	        this.pointsEntityEmitter.next(this.pointsEntity);
	    };
	    StuckPointPlacementController.$inject = [];
	    return StuckPointPlacementController;
	}());
	exports.StuckPointPlacementController = StuckPointPlacementController;


/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.StuckPointPlacementConfig = {
	    moduleName: 'myApp',
	    directivePrefix: 'jar'
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StuckPointPlacement_config_1 = __webpack_require__(16);
	var pointInstance_directive_1 = __webpack_require__(18);
	var pointInstance_controller_1 = __webpack_require__(19);
	angular
	    .module(StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.pointInstance", [])
	    .directive(StuckPointPlacement_config_1.StuckPointPlacementConfig.directivePrefix + "PointInstance", pointInstance_directive_1.PointInstance.create())
	    .controller('PointInstanceController', pointInstance_controller_1.PointInstanceController);


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var PointInstance = (function () {
	    function PointInstance() {
	        this.restrict = 'AE';
	        this.scope = {
	            point: '=',
	            onPointChanged: '&'
	        };
	        this.controller = 'PointInstanceController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPoints/pointInstance/pointInstance.html';
	    }
	    PointInstance.prototype.link = function (scope, element, attrs) {
	    };
	    PointInstance.create = function () {
	        var directive = function () { return new PointInstance(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return PointInstance;
	}());
	exports.PointInstance = PointInstance;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var PointInstanceController = (function () {
	    function PointInstanceController() {
	    }
	    PointInstanceController.$inject = [];
	    return PointInstanceController;
	}());
	exports.PointInstanceController = PointInstanceController;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StuckPointPlacement_config_1 = __webpack_require__(16);
	var shaft_directive_1 = __webpack_require__(21);
	var shaft_controller_1 = __webpack_require__(22);
	angular
	    .module(StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.shaft", [])
	    .directive(StuckPointPlacement_config_1.StuckPointPlacementConfig.directivePrefix + "Shaft", shaft_directive_1.Shaft.create())
	    .controller('ShaftController', shaft_controller_1.ShaftController);


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	var Shaft = (function () {
	    function Shaft() {
	        this.restrict = 'AE';
	        this.scope = {
	            shaft: '='
	        };
	        this.controller = 'ShaftController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPoints/shaft/shaft.html';
	    }
	    Shaft.prototype.link = function (scope, element, attrs) {
	    };
	    Shaft.create = function () {
	        var directive = function () { return new Shaft(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return Shaft;
	}());
	exports.Shaft = Shaft;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var ShaftController = (function () {
	    function ShaftController() {
	    }
	    ShaftController.$inject = [];
	    return ShaftController;
	}());
	exports.ShaftController = ShaftController;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map