/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
    .config([
        '$stateProvider',
        styleConfig
    ]);
function styleConfig($stateProvider) {
    $stateProvider
    .state('tab.style', {
        url: '/style',
        views: {
            'tab-style': {
                templateUrl: 'modules/style/style.html',
                controller:'style'
            }
        }
    })
    .state('tab.styleDetail', {
        url: '/styleDetail',
        params:{
            id:1
        },
        views: {
            'tab-style': {
                templateUrl: 'modules/style/styleDetail/styleDetail.html',
                controller:'styleDetail'
            }
        }
    })
    .state('tab.experience', {
        url: '/experience',
        views: {
            'tab-style': {
                templateUrl: 'modules/style/experience/experience.html'
            }
        }
    })
    ;
};
