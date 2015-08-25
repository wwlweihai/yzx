/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
    .config([
        '$stateProvider',
        indexConfig
    ]);
function indexConfig($stateProvider) {
    $stateProvider
    .state('tab.index', {
        url: '/index',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/index.html'
            }
        }
    })
    .state('tab.msg', {
        url: '/msg',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/msg/msg.html'
            }
        }
    })
    .state('tab.msgDetail', {
        url: '/msgDetail',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/msgDetail/msgDetail.html'
            }
        }
    })
    .state('tab.8+n', {
        url: '/8+n',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/8+n/8+n.html'
            }
        }
    })
    .state('tab.46xbz', {
        url: '/46xbz',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/46xbz/46xbz.html'
            }
        }
    })
    .state('tab.djsj', {
        url: '/djsj',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/djsj/djsj.html'
            }
        }
    })
    .state('tab.dxjg', {
        url: '/dxjg',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/dxjg/dxjg.html'
            }
        }
    })
    .state('tab.jpgj', {
        url: '/jpgj',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/jpgj/jpgj.html'
            }
        }
    })
    .state('tab.yxpp', {
        url: '/yxpp',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/yxpp/yxpp.html'
            }
        }
    })
    .state('tab.yzjq', {
        url: '/yzjq',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/yzjq/yzjq.html'
            }
        }
    })
    .state('tab.zygr', {
        url: '/zygr',
        views: {
            'tab-index': {
                templateUrl: 'modules/index/zygr/zygr.html'
            }
        }
    })

    ;
};
