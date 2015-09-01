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

    function subSignIn(formValidated){
        //登录请求(成功)
        if(formValidated){
            signInReq.get($scope.form,null).then(signInSuc(),signInErr());
        }else{
            rockswIonicToast.show("请输入用户名和密码");
        }
        function signInSuc(){
            return function(data){
                console.log(data);
                //if(data.mobilePhoneVerified){
                if(data){
                    rockswIonicToast.show("登录成功");
                    var globals = {
                        currentUser: {
                            id:data.objectId,
                            username:data.username,
                            sessionToken:data.sessionToken
                        }
                    };
                    $state.go('tab.self',null,{reload:true});
                    $rootScope.$broadcast('userSignIn', globals);
                }else{
                    console.log(data.mobilePhoneNumber);
                    rockswIonicToast.show('请验证手机号');
                }
            }
        };
        function signInErr(){
            return function(error){
                console.log(error.data);
                var errorCode = error.data.code;
                if(errorCode == 211){
                    rockswIonicToast.show('用户名不存在');
                }
                if(errorCode == 210){
                    rockswIonicToast.show("用户名和密码不匹配");
                }
            }
        };
    };
}


