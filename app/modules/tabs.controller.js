angular.module('app.controller')
    .controller('tabs',tabs);

tabs.$inject = [
    '$rootScope',
    '$state',
    '$scope'
];
function tabs($rootScope,$state) {
    $rootScope.$on('$ionicView.beforeEnter', function () {
        var stateName = $state.current.name;
        if (stateName === 'tab.index' ||
            stateName === 'tab.style' ||
            stateName === 'tab.service' ||
            stateName === 'tab.self') {
            $rootScope.hideTabs = false;
        } else {
            $rootScope.hideTabs = true;
        }
    });
}


