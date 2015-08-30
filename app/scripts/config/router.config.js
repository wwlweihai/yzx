/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        routeConfig
]);
function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/self');
    $stateProvider
    .state('tab', {
        cache: false,
        url: "/tab",
        abstract: true,
        templateUrl: "modules/tabs.html",
        controller:'tabs'
    })
    ;
};
