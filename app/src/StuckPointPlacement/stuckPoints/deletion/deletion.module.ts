import {StuckPointPlacementConfig} from './../../../Core/StuckPointPlacement.config';

import {Deletion} from './deletion.component';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPoints.deletion`, [])
    .component(`${StuckPointPlacementConfig.directivePrefix}Deletion`, new Deletion());