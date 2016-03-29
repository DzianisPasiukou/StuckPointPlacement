import {StuckPointPlacementConfig} from './../../../Core/StuckPointPlacement.config';

import {Draggable} from './draggable.directive';
import {DraggableController} from './draggable.controller';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPoints.draggable`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}Draggable`, Draggable.create())
    .controller('DraggableController', DraggableController);


