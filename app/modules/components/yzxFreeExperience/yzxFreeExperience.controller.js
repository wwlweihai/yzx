angular.module('app.controller')
.controller('yzxFreeExperience',yzxFreeExperience);

yzxFreeExperience.$inject = [
    'rockswIonicToast',
    '$scope'
];

function yzxFreeExperience(rockswIonicToast,$scope) {
    $scope.experience = experience;
    function experience(){
        rockswIonicToast.show("报名体验成功");
    }
}


