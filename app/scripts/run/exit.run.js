angular.module('app.run')
    .run([
        '$ionicPlatform',
        '$ionicPopup',
        exitRun
    ]);
function exitRun($ionicPlatform,$ionicPopup){
    console.log("exitRun");
    $ionicPlatform.registerBackButtonAction(
        function(){
            var confirmPopup = $ionicPopup.confirm({
                title: '易装修',
                template: '确定要退出程序？',
                cancelText:'取消',
                okText: '确定'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    ionic.Platform.exitApp();
                } else {
                    //console.log('You are not sure');
                }
            });
        }, 100);
}
