/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        'localStorageServiceProvider',
        '$ionicConfigProvider',
        'RestangularProvider',
        config
]);
function config(localStorageServiceProvider,$ionicConfigProvider,RestangularProvider) {
    //本地信息存储
    localStorageServiceProvider
        .setPrefix('cn.rocksw.yzx')
        .setStorageType('localStorage')
        .setNotify(true, true);
    //数据交互
    RestangularProvider.setBaseUrl('https://leancloud.cn/1.1');
    RestangularProvider.setDefaultHeaders({
        "X-AVOSCloud-Application-Id":"zXmsYkXYionV4s9pHc3IKghD",
        "X-AVOSCloud-Application-Key":"gHmRen4R5I3ziAE7wcP7vKw1"
    });
    //样式强制设置
    $ionicConfigProvider.views.transition('platform');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left').previousTitleText(false);

    //缓存设置
    $ionicConfigProvider.views.maxCache(0);
};
