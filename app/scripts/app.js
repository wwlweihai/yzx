/**
 * Created by ww on 2015/3/24.
 */
angular.module('app', [
    'app.run',
    'app.core',
    'app.value',
    'app.config',
    'app.service',
    'app.object',
    'app.directive',
    'app.controller'
]);
angular.module('app.core', [
    'ionic',
    /*3rd-party modules*/
    //restful request tool
    'rockswIonicComp',
    'LocalStorageModule',
    //'ionic.rating',
    'restangular'
    //auto grow textarea for chats/chat-detail（信息发送自增长舒适框）
]);
angular.module('app.run', []);
angular.module('app.value', []);
angular.module('app.config', ['ionic','app.value']);
angular.module('app.service', []);
angular.module('app.object', []);
angular.module('app.controller', []);
angular.module('app.directive', []);

