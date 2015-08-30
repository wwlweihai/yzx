angular.module('app.controller')
    .controller('signUp',signUp);
signUp.$inject = [
    'signUpService',
    'rockswIonicToast',
    'Restangular',
    '$ionicModal',
    '$timeout',
    '$state',
    '$scope'
];
function signUp(signUpService,rockswIonicToast,Restangular,$ionicModal,$timeout,$state,$scope) {
    var header = {"Content-Type":"application/json"};
    var verifyPhoneReq = Restangular.one("requestMobilePhoneVerify");
    var verifyPhoneCodeReq = Restangular.one("verifyMobilePhone");
    var verifyCodeBtnTout;
    var timeInterval = 60 * 1000;
    $scope.form = {};
    $scope.form.mobilePhoneNumber = "15216311980";
    $scope.data = {};
    $scope.isSendVerifyCode = false;
    $scope.getVerifyPhoneCode = getVerifyPhoneCode;
    //提交注册
    $scope.subSignUp = subSignUp;
    //提交验证码
    $scope.subVerifyCode = subVerifyCode;
    $scope.closeModal = closeModal;
    //验证码框
    $ionicModal.fromTemplateUrl('verifyPhoneCodeModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.verifyPhoneCodeModal = modal;
    });

    function subSignUp(){
        $scope.verifyPhoneCodeModal.show();
        $scope.isSendVerifyCode = true;
        verifyCodeBtnTout = $timeout(function(){
            $scope.isSendVerifyCode = false;
        }, timeInterval);
        //注册请求
        //signUpService.subSignUp($scope.form,signUpSuc(),signUpErr());

        //登录成功处理方法
        function signUpSuc(){
            return function(data){
                console.log(data);
                if(data){
                    rockswIonicToast.show('注册成功');
                    var globals = {
                        currentUser: {
                            id:data.objectId,
                            username:data.username,
                            sessionToken:data.sessionToken
                        }
                    };
                    $state.go('tab.self');
                    $rootScope.$broadcast('userSignIn', globals);
                }
            }
        };
        //登录失败处理方法
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
    function closeModal(){
        cancelVerifyCodeBtnTout();
        $scope.verifyPhoneCodeModal.hide();
    }
    function subVerifyCode(){
        var phoneCode = $scope.data.verifyCode;
        console.log(phoneCode);
        closeModal();
        //verifyPhoneCodeReq.post(phoneCode,null,null,header).then(function(data){
        //    console.log(data);
        //});
    }
    function getVerifyPhoneCode(phoneNum){
        var phoneNum = $scope.form.mobilePhoneNumber;
        console.log(phoneNum);
        //verifyPhoneReq.post(null,{"mobilePhoneNumber": phoneNum},null,header).then(function(data){
        //    if(data){
        //        console.log("验证成功");
        //    }
        //});
    };
    //function reqVerifyPhoneCode(){
    //    var phoneNum = $scope.form.mobilePhoneNumber;
    //    console.log(phoneNum);
    //    if(phoneNum){
    //        getVerifyPhoneCode(phoneNum);
    //    }else{
    //        rockswIonicToast.show("请输入一个正确的手机号码");
    //    }
    //};
    function cancelVerifyCodeBtnTout(){
        console.log("cancelVerifyCodeBtnTout    ");
        $timeout.cancel(verifyCodeBtnTout);
    };
}


