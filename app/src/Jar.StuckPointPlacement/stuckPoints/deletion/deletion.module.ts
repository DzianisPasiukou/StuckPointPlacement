import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {Deletion} from './deletion.component';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.deletion`, [])
    .component(`${StuckPointPlacementConfig.directivePrefix}Deletion`, new Deletion());