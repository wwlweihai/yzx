angular.module('app.controller')
    .controller('quote',quote);
quote.$inject = [
    'rockswIonicToast',
    'Restangular',
    '$state',
    '$rootScope',
    '$scope'
];
function quote(rockswIonicToast,Restangular,$state,$rootScope,$scope) {
    $scope.form = {};
    $scope.subquote = subquote;
    $scope.taocanList = [
        {
            name:"实惠型",
            price:368
        },
        {
            name:"时尚型",
            price:568
        },
        {
            name:"豪华型",
            price:698
        }
    ];
    $scope.form.taocan = $scope.taocanList[0];
    function subquote(formValidated){
        if(formValidated){
            var quotePrice = $scope.form.area * Number($scope.form.taocan.price) * 1.5;
            $scope.form.area = "";
            $state.go("tab.quoteResult",{quotePrice:quotePrice});
        }else{
            rockswIonicToast.show("请正确输入房屋面积");
        }

    };
}


