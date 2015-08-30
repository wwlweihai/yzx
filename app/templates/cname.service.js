/**
 * Created by jyh on 15/8/29.
 */
angular.module('app.service')
.factory('cname',cname);
cname.$inject = [
    'Restangular',
];
function cname(Restangular){
    var service = {

    };
    return service;
};
