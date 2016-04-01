import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {Draggable} from './draggable.directive';
import {DraggableController} from './draggable.controller';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.draggable`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}Draggable`, Draggable.create())
    .controller('DraggableController', DraggableController);


