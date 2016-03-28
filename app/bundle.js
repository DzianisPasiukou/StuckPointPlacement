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
	        this.onPointsEntityChanged = new EventEmitter_1.EventEmitter();
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
	        this.onPointsEntityChanged.subscribe(function (emitter) { return _this.onPointsEntitySubscriber(emitter); });
	    }
	    AppController.prototype.onPointsEntitySubscriber = function (emitter) {
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
	        this.scope = {
	            point: '<',
	            onPointChanged: '<'
	        };
	        this.controller = 'PointInstanceController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPoints/pointInstance/pointInstance.html';
	    }
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EventEmitter_1 = __webpack_require__(10);
	var PointInstanceController = (function () {
	    function PointInstanceController() {
	        if (!angular.isDefined(this.onPointChanged)) {
	            this.onPointChanged = new EventEmitter_1.EventEmitter();
	        }
	        this.init();
	    }
	    PointInstanceController.prototype.onChanged = function ($event, point) {
	        this.onPointChanged.emit(point);
	    };
	    PointInstanceController.prototype.formatDepth = function (depth) {
	        return depth.toString();
	    };
	    PointInstanceController.prototype.init = function () {
	        //temprorary mock
	        var states = [
	            {
	                color: 'rgb(255,255,255)',
	                border: 'rgb(170,170,170)',
	                borderWidth: '3',
	                icon: ''
	            },
	            {
	                color: 'rgb(170,170,170)',
	                border: '',
	                borderWidth: '',
	                icon: 'assets/img/point-section-grey-active.png'
	            }
	        ];
	        this.compressions = {
	            line: {
	                x1: this.point.parent.width / 2,
	                x2: this.point.parent.width / 2 - 24,
	                y1: this.point.element.y,
	                y2: this.point.element.y
	            },
	            text: {
	                x: this.point.parent.width / 2 - 28,
	                y: this.point.element.y
	            },
	            circle: {
	                r: this.point.element.radius * (this.isSelected ? 2 : 1),
	                cx: this.point.element.x,
	                cy: this.point.element.y,
	                fill: states[this.point.state].color,
	                stroke: states[this.point.state].border,
	                strokeWidth: states[this.point.state].borderWidth,
	                isVisible: !this.isSelected || !states[this.point.state].icon
	            },
	            image: {
	                x: this.point.parent.width / 2 - 11,
	                y: this.point.element.y - 14,
	                width: 25,
	                height: 27,
	                link: states[this.point.state].icon,
	                isVisible: this.isSelected && states[this.point.state].icon
	            }
	        };
	    };
	    Object.defineProperty(PointInstanceController.prototype, "isSelected", {
	        get: function () {
	            return this.point.isSelected;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        var _this = this;
	        this.scope = {
	            shaft: '<'
	        };
	        this.controller = 'ShaftController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPoints/shaft/shaft.html';
	        this.link = function (scope, element, attrs, ctrl) { return _this.linkFn(scope, element, attrs, ctrl); };
	    }
	    Shaft.prototype.linkFn = function (scope, element, attrs, ctrl) {
	        this.init(ctrl);
	    };
	    Shaft.prototype.init = function (ctrl) {
	        ctrl.compression = {
	            width: ctrl.shaft.width,
	            height: this.calculateHeight(ctrl),
	            x: ctrl.shaft.parentWidth / 2,
	            y: ctrl.shaft.verticalMargin
	        };
	    };
	    Shaft.prototype.calculateHeight = function (ctrl) {
	        return ctrl.shaft.parentHeight - ctrl.shaft.verticalMargin * 2;
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
	    }
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
	        var _this = this;
	        this.scope = {
	            stuckEntity: '<',
	            onStuckEntityChanged: '<'
	        };
	        this.controller = 'StuckPointsController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPoints/stuckPoints.html';
	        this.link = function (scope, element, attrs, ctrl) { return _this.linkFn(scope, element, attrs, ctrl); };
	    }
	    StuckPoints.prototype.linkFn = function (scope, element, attrs, ctrl) {
	        this.init(ctrl);
	    };
	    StuckPoints.prototype.init = function (ctrl) {
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EventEmitter_1 = __webpack_require__(10);
	var StuckPointsController = (function () {
	    function StuckPointsController() {
	        this.isLocked = false;
	        this.isShowBin = true;
	        this.sizes = {
	            width: 180,
	            height: 780,
	            verticalMargin: 20,
	            shaftWidth: 2,
	            pointRadius: 6.25
	        };
	        if (!angular.isDefined(this.onStuckEntityChanged)) {
	            this.onStuckEntityChanged = new EventEmitter_1.EventEmitter();
	        }
	        this.onPointChanged = new EventEmitter_1.EventEmitter();
	        this.init();
	        this.format();
	    }
	    StuckPointsController.prototype.onRemove = function ($event) {
	    };
	    StuckPointsController.prototype.format = function () {
	        var _this = this;
	        this.pointsInstances = [];
	        angular.forEach(this.stuckEntity.points, function (point) {
	            _this.pointsInstances.push({
	                parent: {
	                    height: _this.sizes.height,
	                    width: _this.sizes.width
	                },
	                element: {
	                    radius: _this.sizes.pointRadius,
	                    x: _this.sizes.width / 2 + 1 + _this.sizes.pointRadius * 2 * _this.pointLayer() + (_this.pointLayer() > 0 ? 6 : 0),
	                    y: _this.pointByValue(point.depth)
	                },
	                depth: point.depth,
	                state: point.state,
	                isSelected: true
	            });
	        });
	    };
	    StuckPointsController.prototype.pointLayer = function () {
	        return 0;
	    };
	    StuckPointsController.prototype.pointByValue = function (depth) {
	        var percent = (depth - this.stuckEntity.minDepth) / (this.stuckEntity.maxDepth - this.stuckEntity.minDepth);
	        var height = this.calculateHeight() * percent;
	        var margined = height + this.sizes.verticalMargin;
	        return margined;
	    };
	    StuckPointsController.prototype.valueByPoint = function (point) {
	        var unmargined = point - this.sizes.verticalMargin;
	        var percent = unmargined / this.calculateHeight();
	        var value = percent * (this.stuckEntity.maxDepth - this.stuckEntity.minDepth) + this.stuckEntity.minDepth;
	        return value;
	    };
	    StuckPointsController.prototype.calculateHeight = function () {
	        return this.sizes.height - this.sizes.verticalMargin * 2;
	    };
	    StuckPointsController.prototype.init = function () {
	        this.initConfig();
	        this.initShaft();
	        this.initCompression();
	    };
	    StuckPointsController.prototype.initConfig = function () {
	        this.stuckEntityConfig = {
	            parent: {
	                width: this.sizes.width,
	                height: this.sizes.height
	            },
	            point: {
	                radius: this.sizes.pointRadius
	            }
	        };
	    };
	    StuckPointsController.prototype.initShaft = function () {
	        this.shaft = {
	            parentWidth: this.sizes.width,
	            parentHeight: this.sizes.height,
	            verticalMargin: this.sizes.verticalMargin,
	            width: this.sizes.shaftWidth
	        };
	    };
	    StuckPointsController.prototype.initCompression = function () {
	        this.compression = {
	            width: this.sizes.width,
	            height: this.sizes.height
	        };
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
	        this.scope = {
	            pointsEntity: '<',
	            onPointsEntityChanged: '<'
	        };
	        this.controller = 'StuckPointPlacementController';
	        this.controllerAs = '$ctrl';
	        this.bindToController = true;
	        this.replace = true;
	        this.templateUrl = 'src/StuckPointPlacement/stuckPointPlacement.html';
	    }
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EventEmitter_1 = __webpack_require__(10);
	var StuckPointPlacementController = (function () {
	    function StuckPointPlacementController() {
	        var _this = this;
	        if (!angular.isDefined(this.onPointsEntityChanged)) {
	            this.onPointsEntityChanged = new EventEmitter_1.EventEmitter();
	        }
	        this.onStuckEntityChanged = new EventEmitter_1.EventEmitter();
	        this.onStuckEntityChanged.subscribe(function (stuckEntity) { return _this.onStuckEntityChangedSubscriber(stuckEntity); });
	    }
	    StuckPointPlacementController.prototype.onStuckEntityChangedSubscriber = function (stuckEntity) {
	        this.pointsEntity = stuckEntity;
	        this.onPointsEntityChanged.next(this.pointsEntity);
	    };
	    StuckPointPlacementController.$inject = [];
	    return StuckPointPlacementController;
	}());
	exports.StuckPointPlacementController = StuckPointPlacementController;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map