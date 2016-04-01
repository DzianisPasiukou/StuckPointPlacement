import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {PointsStructureService} from './structures/pointsStructure.service';
import {PointsInstancesService} from "./structures/pointsInstances.service";
import {DepthSynchronizerService} from './structures/depthSynchronizer.service';
import {StuckStatesService} from './structures/stuckStates.service.ts'

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.core`, [
        'jar.common.pointstates'
    ])
    .service('pointsStructureService', PointsStructureService)
    .service('pointsInstancesService', PointsInstancesService)
    .service('depthSynchronizerService', DepthSynchronizerService)
    .service('stuckStatesService', StuckStatesService);