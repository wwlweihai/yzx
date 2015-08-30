/**
 * Created by ww on 2015/3/24.
 */
angular.module('app.core', [
    /*3rd-party modules*/
    //restful request tool
    //'ionic-toast',
    'rockswIonicComp',
    'LocalStorageModule',
    'ionic.rating',
    'restangular'
    //auto grow textarea for chats/chat-detail（信息发送自增长舒适框）
]);
angular.module('app.value', []);
angular.module('app.config', ['ionic','app.value']);
angular.module('app.service', []);
angular.module('app.controller', []);
angular.module('app.directive', []);
angular.module('app', [
    'app.core',
    'app.value',
    'app.config',
    'app.service',
    'app.directive',
    'app.controller'
])
    .run(function(localStorageService,$rootScope,$ionicHistory){
        console.log("run");
        ionic.Platform.ready(function(){
            activited();
        });
        function activited(){
            $rootScope.globals = localStorageService.get('globals') || {};
            if($rootScope.globals.currentUser){
                $rootScope.isLogin = true;
            }else{
                $rootScope.isLogin = false;
            };
        };
        $rootScope.$on('userSignIn', function (event, data) {
            localStorageService.set('globals', data);
            activited();
        });
        $rootScope.$on('userSignOut', function (event, data) {
            localStorageService.remove('globals');
            $ionicHistory.clearCache();
            activited();
        });
    });
