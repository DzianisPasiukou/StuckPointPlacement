import {PointStatesConstant} from './pointStates.constant';
import {PointStatesService} from './pointStates.service';

angular
    .module('jar.common.pointstates', [])
    .service('pointStatesService', PointStatesService)
    .constant('POINT_STATES', PointStatesConstant.create());