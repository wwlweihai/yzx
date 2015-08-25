/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
    .config([
        '$stateProvider',
        selfConfig
    ]);
function selfConfig($stateProvider) {
    $stateProvider
    .state('tab.self', {
        url: '/self',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/self.html',
                controller:'self'
            }
        }
    })
    .state('tab.signIn', {
        url: '/signIn',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/signIn/signIn.html'
            }
        }
    })
    .state('tab.signUp', {
        url: '/signUp',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/signUp/signUp.html'
            }
        }
    })
    .state('tab.information', {
        url: '/information',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/information/information.html'
            }
        }
    })
    .state('tab.collection', {
        url: '/collection',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/collection/collection.html'
            }
        }
    })
    .state('tab.jifen', {
        url: '/jifen',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/jifen/jifen.html'
            }
        }
    })
    .state('tab.feedback', {
        url: '/feedback',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/feedback/feedback.html'
            }
        }
    })
    .state('tab.recommendation', {
        url: '/recommendation',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/recommendation/recommendation.html'
            }
        }
    })
    .state('tab.setting', {
        url: '/setting',
        views: {
            'tab-self': {
                templateUrl: 'modules/self/setting/setting.html'
            }
        }
    })
    ;
};
