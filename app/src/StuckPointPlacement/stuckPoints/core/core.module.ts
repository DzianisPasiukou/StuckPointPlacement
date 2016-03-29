import {StuckPointPlacementConfig} from './../../../Core/StuckPointPlacement.config';

import {PointsStructureService} from './structures/pointsStructureService';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.core`, [])
    .service('PointsStructureService', PointsStructureService);