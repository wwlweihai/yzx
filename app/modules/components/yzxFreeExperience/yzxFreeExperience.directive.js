angular.module('app.directive')
.directive('yzxFreeExperience',yzxFreeExperience);

function yzxFreeExperience() {
    var directive = {
        link: link,
        templateUrl: 'modules/components/yzxFreeExperience/yzxFreeExperience.html',
        controller:"yzxFreeExperience",
        scope: {

        },
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {

    }
}


