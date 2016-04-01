import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {StuckAnchor} from './stuckAnchor.directive';
import {StuckAnchorController} from './stuckAnchor.controller';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.stuckAnchor`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}StuckAnchor`, StuckAnchor.create())
    .controller('StuckAnchorController', StuckAnchorController);