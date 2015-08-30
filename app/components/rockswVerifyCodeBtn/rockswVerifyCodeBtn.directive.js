angular.module('app.directive')
.directive('rockswVerifyCodeBtn',rockswVerifyCodeBtn);
rockswVerifyCodeBtn.$inject = [
    '$interval'
];
function rockswVerifyCodeBtn($interval) {
    var directive = {
        link: link,
        templateUrl: '',
        scope: {
        },
        restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
        var timeAcount = 60;

        element.on("click", function(e){
            console.log(e);
            element.attr('disabled', '');

            //$interval(function(){
            //    element.attr('disabled', '');
            //    element.text(timeAcount-- + "s后重新获取");
            //}, 1000, timeAcount);
        });
    }
}


