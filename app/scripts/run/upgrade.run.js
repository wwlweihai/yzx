angular.module('app.run')
.run([
    '$ionicPlatform',
    'rockswIonicToast',
    '$timeout',
    '$ionicLoading',
    '$ionicPopup',
    'rockswIonicToast',
    upgradeRun
]);
function upgradeRun($ionicPlatform,rockswIonicToast,$timeout,$ionicLoading,$ionicPopup,rockswIonicToast){
    console.log("upgradeRun");
    ionic.Platform.ready(function(){
        $ionicPlatform.ready(function ($rootScope) {
            var platform = ionic.Platform.platform();
            //rockswIonicToast.show(platform);
            ////检测更新
            //checkUpdate();
            showUpdateConfirm();

            //document.addEventListener("menubutton", onHardwareMenuKeyDown, false);
        });
    });
    function checkUpdate() {
        var serverAppVersion = "1.0.0"; //从服务端获取最新版本
        //获取版本
        $cordovaAppVersion.getAppVersion().then(function (version) {
            //如果本地与服务端的APP版本不符合
            if (version != serverAppVersion) {
                showUpdateConfirm();
            }
        });
    }

    function showUpdateConfirm() {
        var confirmPopup = $ionicPopup.confirm({
            title: '版本升级',
            cancelText: '取消',
            okText: '升级'
        });
        confirmPopup.then(function (res) {
            if (res) {
                $ionicLoading.show({
                    template: "已经下载：0%"
                });
                var url = "http://192.168.1.50/1.apk"; //可以从服务端获取更新APP的路径
                var targetPath = "file:///storage/sdcard0/Download/yzx.apk"; //APP下载存放的路径，可以使用cordova file插件进行相关配置
                var trustHosts = true
                var options = {};
                $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
                    // 打开下载下来的APP
                    $cordovaFileOpener2.open(targetPath, 'application/vnd.android.package-archive'
                    ).then(function () {
                            // 成功
                        }, function (err) {
                            // 错误
                        });
                    $ionicLoading.hide();
                }, function (err) {
                    rockswIonicToast.show('下载失败');
                }, function (progress) {
                    //进度，这里使用文字显示下载百分比
                    $timeout(function () {
                        var downloadProgress = (progress.loaded / progress.total) * 100;
                        $ionicLoading.show({
                            template: "已经下载：" + Math.floor(downloadProgress) + "%"
                        });
                        if (downloadProgress > 99) {
                            $ionicLoading.hide();
                        }
                    })
                });
            } else {
                // 取消更新
            }
        });
    }
}
