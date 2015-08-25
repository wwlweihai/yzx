/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
    .config([
        '$stateProvider',
        serviceConfig
    ]);
function serviceConfig($stateProvider) {
    $stateProvider
    .state('tab.service', {
        url: '/service',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/service.html'
            }
        }
    })
    .state('tab.checkOut', {
        url: '/checkOut',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/checkOut/checkOut.html'
            }
        }
    })
    .state('tab.superior', {
        url: '/superior',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/superior/superior.html'
            }
        }
    })
    .state('tab.team', {
        url: '/team',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/team/team.html'
            }
        }
    })
    .state('tab.quote', {
        url: '/quote',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/quote/quote.html'
            }
        }
    })


    ;
};
