angular.module('app.controller')
    .controller('style',style);
style.$inject = [
    'dataService',
    '$state',
    'Style',
    '$scope'
];
function style(dataService,$state,Style,$scope) {
    getAllStyle();
    function getAllStyle(){
        dataService.getAll(Style.name,null,function(data){
            console.log(data);
            $scope.styleList = data.results;
        });
    };
}


