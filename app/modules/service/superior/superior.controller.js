angular.module('app.controller')
    .controller('superior',superior);
superior.$inject = [
    'Project',
    'Team',
    'rockswIonicToast',
    'dataService',
    '$timeout',
    '$state',
    '$rootScope',
    '$scope'
];
function superior(Project,Team,rockswIonicToast,dataService,$timeout,$state,$rootScope,$scope) {
    console.log();
    $scope.hasProject = false;
    if($rootScope.isLogin){
        var queryParams = {
            where:{
                "userId":$rootScope.globals.currentUser.id
            }
        };
        dataService.get(Project.name,null,queryParams,function(data){
            console.log(data.results);
            $scope.hasProject = true;
            $scope.project = Project.build(data.results[0]);
            $scope.jzTeam = Team.build($scope.project.jzTeam);
            $scope.sjTeam = Team.build($scope.project.sjTeam);
            $scope.jlTeam = Team.build($scope.project.jlTeam);
        },function(error){
            console.log(error);
        });
    }else{
        rockswIonicToast.show("您尚未登录,无法查看");
        $timeout(function(){
            $state.go("tab.service");
        },1500);
    };
};


