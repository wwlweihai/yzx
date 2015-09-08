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
                templateUrl: 'modules/service/superior/superior.html',
                controller:"superior"
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
    .state('tab.housekeeper', {
        url: '/housekeeper',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/housekeeper/housekeeper.html'
            }
        }
    })
    .state('tab.quote', {
        url: '/quote',
        views: {
            'tab-service': {
                templateUrl: 'modules/service/quote/quote.html',
                controller:'quote'
            }
        }
    })
    .state('tab.quoteResult', {
        url: '/quoteResult',
        params:{
            quotePrice:"10000"
        },
        views: {
            'tab-service': {
                templateUrl: 'modules/service/quote/quoteResult/quoteResult.html',
                controller:'quoteResult'
            }
        }
    })
    ;
};
