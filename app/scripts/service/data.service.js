/**
 * Created by jyh on 15/8/29.
 */
angular.module('app.service')
.factory('dataService',dataService);
dataService.$inject = [
    'Restangular',
    'rockswIonicToast',
];
function dataService(Restangular,rockswIonicToast){
    var header = {"Content-Type":"application/json"};
    var baseRouter = Restangular.one("classes");

    var service = {
        getAll:getAll,
        get:get,
        save:save,
        subVerifyCode:subVerifyCode,
        deleteUser:deleteUser
    };
    return service;

    function getAll(subRouter,queryParams,successCall,errorCall){
        var getRouter = baseRouter.one(subRouter);
        getRouter.get(queryParams).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                rockswIonicToast.show("请求数据失败,请检查网络!");
            }
        });
    };
    function get(subRouter,objectId,queryParams,successCall,errorCall){
        var getRouter = baseRouter.one(subRouter);
        getRouter.customGET(objectId,queryParams,header).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                rockswIonicToast.show("请求数据失败,请检查网络!");
            }
        });
    };
    function save(subRouter,subObejct){
        console.log("save object");
        baseRouter.post(subRouter,subObejct,null,header).then(function(data){
            console.log(data);
        },function(error){
            console.log(error);
        });
    };

    function subSignUp(elementToPost,successCall,errorCall){
        signUpReq.post(null,elementToPost,null,header).then(function(data){
            successCall(data);
        },function(error){
            errorCall(error);
            //console.log(error.data);
            //var errorCode = error.data.code;
            //if(errorCode == 214){
            //    rockswIonicToast.show('手机号码已经注册!');
            //}
        });
    };
    function subVerifyCode(phoneCode,successCall,errorCall){
        verifyPhoneCodeReq.post(phoneCode,null,null,header).then(function(data){
            successCall(data)
        },function(error){
            errorCall(error);
        });
    };
    function deleteUser(userId,sessionHeader,successCall,errorCall){
        var deleteReq = Restangular.one("users",userId);
        //deleteReq.post(null,null,null,sessionHeader).then(function(data){
        //    successCall(data)
        //},function(error){
        //    errorCall(error);
        //});
        deleteReq.remove(null,sessionHeader).then(function(data){
            successCall(data)
        },function(error){
            errorCall(error);
        });
    };
};
