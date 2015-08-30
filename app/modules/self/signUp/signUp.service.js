/**
 * Created by jyh on 15/8/29.
 */
angular.module('app.service')
.factory('signUpService',signUpService);
signUpService.$inject = [
    'Restangular',
];
function signUpService(Restangular){
    var header = {"Content-Type":"application/json"};
    var signUpReq = Restangular.one("users");

    var service = {
        subSignUp:subSignUp
    };
    return service;

    function subSignUp(elementToPost,successCall,errorCall){
        signUpReq.post(null,elementToPost,null,header).then(function(data){
            successCall(data)
        },function(error){
            errorCall(error);
            //console.log(error.data);
            //var errorCode = error.data.code;
            //if(errorCode == 214){
            //    rockswIonicToast.show('手机号码已经注册!');
            //}
        });
    }
};
