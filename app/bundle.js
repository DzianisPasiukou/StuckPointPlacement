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
	__webpack_require__(5);
	var app_controller_ts_1 = __webpack_require__(9);
	__webpack_require__(11);
	angular
	    .module('myApp', [
	    'myApp.stuckPointPlacement'
	])
	    .controller('AppController', app_controller_ts_1.AppController);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EventEmitter_1 = __webpack_require__(10);
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(12);
	var StuckPointPlacement_config_ts_1 = __webpack_require__(14);
	var stuckPointPlacement_directive_1 = __webpack_require__(22);
	var stuckPointPlacement_controller_1 = __webpack_require__(23);
	angular
	    .module(StuckPointPlacement_config_ts_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement", [
	    (StuckPointPlacement_config_ts_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints")
	])
	    .directive(StuckPointPlacement_config_ts_1.StuckPointPlacementConfig.directivePrefix + "StuckPointPlacement", stuckPointPlacement_directive_1.StuckPointPlacement.create())
	    .controller('StuckPointPlacementController', stuckPointPlacement_controller_1.StuckPointPlacementController);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(13);
	__webpack_require__(17);
	var StuckPointPlacement_config_1 = __webpack_require__(14);
	var stuckPoints_directive_1 = __webpack_require__(20);
	var stuckPoints_controller_1 = __webpack_require__(21);
	angular
	    .module(StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints", [
	    (StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.pointInstance"),
	    (StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.shaft")
	])
	    .directive(StuckPointPlacement_config_1.StuckPointPlacementConfig.directivePrefix + "StuckPoints", stuckPoints_directive_1.StuckPoints.create())
	    .controller('StuckPointsController', stuckPoints_controller_1.StuckPointsController);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StuckPointPlacement_config_1 = __webpack_require__(14);
	var pointInstance_directive_1 = __webpack_require__(15);
	var pointInstance_controller_1 = __webpack_require__(16);
	angular
	    .module(StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.pointInstance", [])
	    .directive(StuckPointPlacement_config_1.StuckPointPlacementConfig.directivePrefix + "PointInstance", pointInstance_directive_1.PointInstance.create())
	    .controller('PointInstanceController', pointInstance_controller_1.PointInstanceController);


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	exports.StuckPointPlacementConfig = {
	    moduleName: 'myApp',
	    directivePrefix: 'jar'
	};


/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StuckPointPlacement_config_1 = __webpack_require__(14);
	var shaft_directive_1 = __webpack_require__(18);
	var shaft_controller_1 = __webpack_require__(19);
	angular
	    .module(StuckPointPlacement_config_1.StuckPointPlacementConfig.moduleName + ".stuckPointPlacement.stuckPoints.shaft", [])
	    .directive(StuckPointPlacement_config_1.StuckPointPlacementConfig.directivePrefix + "Shaft", shaft_directive_1.Shaft.create())
	    .controller('ShaftController', shaft_controller_1.ShaftController);


/***/ },
/* 18 */
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
	    Shaft.prototype.link = function (scope, element, attrs, ctrl) {
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
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var ShaftController = (function () {
	    function ShaftController() {
	        this.config = {
	            width: 3,
	            verticalMargin: 20
	        };
	        this.init();
	    }
	    ShaftController.prototype.init = function () {
	    };
	    ShaftController.$inject = [];
	    return ShaftController;
	}());
	exports.ShaftController = ShaftController;


/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

	"use strict";
	var StuckPointsController = (function () {
	    function StuckPointsController() {
	        this.isLocked = false;
	        this.isShowBin = true;
	        this.shaft = {
	            x: 100,
	            y: 100,
	            width: 100,
	            height: 100
	        };
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
/* 22 */
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
/* 23 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map