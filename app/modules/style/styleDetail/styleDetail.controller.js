angular.module('app.controller')
    .controller('styleDetail',styleDetail);
styleDetail.$inject = [
    'dataService',
    '$stateParams',
    'Style',
    '$scope'
];
function styleDetail(dataService,$stateParams,Style,$scope) {
    var styleId = $stateParams.id;
    getStyle();
    function getStyle(){
        dataService.get(Style.name,styleId,null,function(data){
            $scope.style = data;
        });
    }
}


