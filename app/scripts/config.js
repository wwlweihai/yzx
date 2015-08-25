/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$ionicConfigProvider',
        'RestangularProvider',
        config
]);
function config($stateProvider, $urlRouterProvider,$ionicConfigProvider,RestangularProvider) {
    $ionicConfigProvider.views.transition('platform');
    //导航栏置底
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left').previousTitleText(false);
    $urlRouterProvider.otherwise('/tab/index');
    //RestangularProvider.setBaseUrl('/localData');
    $stateProvider
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "modules/tabs.html",
        controller:'tabs'
    })
    ;
};
