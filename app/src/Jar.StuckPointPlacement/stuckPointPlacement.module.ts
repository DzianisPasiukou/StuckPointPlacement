import './StuckPoints/stuckPoints.module';

import {StuckPointPlacementConfig} from './../Jar.Common/Core/StuckPointPlacement.config.ts'

import {StuckPointPlacement} from "./stuckPointPlacement.directive";
import {StuckPointPlacementController} from "./stuckPointPlacement.controller";

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement`, [
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints`
    ])
    .directive(`${StuckPointPlacementConfig.directivePrefix}StuckPointPlacement`, StuckPointPlacement.create())
    .controller('StuckPointPlacementController', StuckPointPlacementController);