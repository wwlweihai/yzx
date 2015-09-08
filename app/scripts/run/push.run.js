angular.module('app.run')
.run([
    'localStorageService',
    '$rootScope',
    '$ionicHistory',
    '$ionicPlatform',
    '$ionicPopup',
    pushRun
]);
function pushRun(localStorageService,$rootScope,$ionicHistory,$ionicPlatform,$ionicPopup){
    console.log("pushRun");
}
