angular.module('app.controller')
    .controller('signUp',signUp);
signUp.$inject = [
    'signUpService',
    'rockswIonicToast',
    'Restangular',
    '$ionicModal',
    '$timeout',
    '$rootScope',
    '$state',
    '$scope'
];
function signUp(signUpService,rockswIonicToast,Restangular,$ionicModal,$timeout,$rootScope,$state,$scope) {
    var globals;
    var verifyCodeBtnTout;
    var timeInterval = 60 * 1000;

    $scope.form = {};
    $scope.form.mobilePhoneNumber = "";
    $scope.data = {};
    $scope.isSendVerifyCode = false;
    //提交注册
    $scope.subSignUp = subSignUp;
    //提交验证码
    $scope.subVerifyCode = subVerifyCode;
    $scope.closeModal = closeModal;
    //取消验证
    $scope.cancelVerifyPhone = cancelVerifyPhone;
    //验证码框
    $ionicModal.fromTemplateUrl('modules/self/signUp/verifyPhoneCodeModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.verifyPhoneCodeModal = modal;
    });

    function subSignUp(){
        //signUpSuc()("123");
        //注册请求
        signUpService.subSignUp($scope.form,signUpSuc(),signUpErr());

        //注册成功处理方法
        function signUpSuc(){
            return function(data){
                console.log(data);
                if(data){
                    //rockswIonicToast.show('注册成功');
                    globals = {
                        currentUser: {
                            id:data.objectId,
                            username:data.username,
                            sessionToken:data.sessionToken
                        }
                    };
                    $scope.isSendVerifyCode = true;
                    $scope.verifyPhoneCodeModal.show();
                    verifyCodeBtnTout = $timeout(function(){
                        $scope.isSendVerifyCode = false;
                    }, timeInterval);

                }
            }
        };
        //注册失败处理方法
        function signUpErr(){
            return function(error){
                console.log(error.data);
                var errorCode = error.data.code;
                if(errorCode == 214){
                    rockswIonicToast.show('手机号码已经注册!');
                }
            }
        };
    }
    function subVerifyCode(){
        var phoneCode = $scope.data.verifyCode;
        console.log(phoneCode);
        signUpService.subVerifyCode(phoneCode,verifyCodeSuc(),verifyCodeErr());
        //verifyCodeSuc()("123");
        function verifyCodeSuc(){
            return function(data){
                console.log("subVerifyCode return"+data);
                if(data){
                    rockswIonicToast.show('注册成功');
                    $rootScope.$broadcast('userSignIn', globals);
                    closeModal();
                    $state.go('tab.status');
                }
            }
        };
        function verifyCodeErr(){
            return function(error){
                if(errorCode == 603){
                    rockswIonicToast.show('验证码错误!');
                }
            }
        };
    }
    function cancelVerifyPhone(){
        //closeModal();
        var sessionHeader = {
            "X-AVOSCloud-Session-Token":globals.currentUser.sessionToken
        };
        //取消验证成功处理方法
        signUpService.deleteUser(globals.currentUser.id,sessionHeader,cancelSuc(),cancelErr());
        function cancelSuc(){
            return function(data){
                rockswIonicToast.show('取消验证成功,请重新注册!');
                closeModal();
            }
        };
        //取消验证失败处理方法
        function cancelErr(){
            return function(error){
                rockswIonicToast.show('取消验证失败,请联系管理员注册!');
            }
        };
    };
    function closeModal(){
        cancelVerifyCodeBtnTout();
        $scope.verifyPhoneCodeModal.hide();
    };
    function cancelVerifyCodeBtnTout(){
        console.log("cancelVerifyCodeBtnTout");
        $timeout.cancel(verifyCodeBtnTout);
    };
}


