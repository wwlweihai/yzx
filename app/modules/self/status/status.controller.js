angular.module('app.controller')
    .controller('status',status);
status.$inject = [
    'UserInfo',
    'dataService',
    '$state',
    '$rootScope',
    '$scope'
];
function status(UserInfo,dataService,$state,$rootScope,$scope) {
    var currentUser = $rootScope.globals.currentUser;
    var userInfo = new UserInfo(currentUser.id,"",0,0);
    $scope.updateRoomStatus = updateRoomStatus;

    function updateRoomStatus(value){
        userInfo.setRoomStatus(value);
        //保存用户信息
        dataService.save(userInfo.toString(),userInfo);
        console.log(JSON.stringify(userInfo));
        console.log("change room " + value);
        $state.go('tab.index',null,{reload:true});
    };
};

