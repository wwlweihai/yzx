angular.module('app.directive')
.directive('yzxFreeExperience', function() {
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
});

