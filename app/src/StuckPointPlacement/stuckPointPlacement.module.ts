import {StuckPointPlacement} from "./stuckPointPlacement.directive";
import {StuckPointPlacementController} from "./stuckPointPlacement.controller";

angular
    .module('myApp.stuckPointPlacement', [])
    .directive('stuckPointPlacement', StuckPointPlacement.create())
    .controller('StuckPointPlacementController', StuckPointPlacementController);