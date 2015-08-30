angular.module('app.controller')
    .controller('signIn',signIn);
signIn.$inject = [
    'rockswIonicToast',
    'Restangular',
    '$state',
    '$rootScope',
    '$scope'
];
function signIn(rockswIonicToast,Restangular,$state,$rootScope,$scope) {
    var signInReq = Restangular.one("login");

    $scope.form = {};
    $scope.subSignIn = subSignIn;

    function subSignIn(){
        //登录请求(成功)
        signInReq.get($scope.form,null).then(function(data){
            console.log(data);
            if(data.mobilePhoneVerified){
                rockswIonicToast.show("登录成功");
                var globals = {
                    currentUser: {
                        id:data.objectId,
                        username:data.username,
                        sessionToken:data.sessionToken
                    }
                };
                $state.go('tab.self');
                $rootScope.$broadcast('userSignIn', globals);
            }else{
                rockswIonicToast.show('请验证手机号');
            }
        },function(error){
            //console.log(error.data);
            var errorCode = error.data.code;
            if(errorCode == 211){
                rockswIonicToast.show('用户名不存在');
            }
            if(errorCode == 210){
                rockswIonicToast.show("用户名和密码不匹配");
            }
        });
    };
}


