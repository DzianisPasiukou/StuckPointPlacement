import {StuckPointPlacementConfig} from './../../../Core/StuckPointPlacement.config';

import {PointsStructureService} from './structures/pointsStructure.service';
import {PointsInstancesService} from "./structures/pointsInstances.service";

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.core`, [])
    .service('PointsStructureService', PointsStructureService)
    .service('PointsInstancesService', PointsInstancesService);