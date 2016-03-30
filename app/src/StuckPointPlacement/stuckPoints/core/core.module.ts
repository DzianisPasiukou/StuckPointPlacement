import {StuckPointPlacementConfig} from './../../../Core/StuckPointPlacement.config';

import {PointsStructureService} from './structures/pointsStructure.service';
import {PointsInstancesService} from "./structures/pointsInstances.service";
import {DepthSynchronizerService} from './structures/depthSynchronizer.service';

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.core`, [])
    .service('pointsStructureService', PointsStructureService)
    .service('pointsInstancesService', PointsInstancesService)
    .service('depthSynchronizerService', DepthSynchronizerService);