import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {Legend} from './legend.directive';
import {LegendController} from './legend.controller';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.legend`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}Legend`, Legend.create())
    .controller('LegendController', LegendController);