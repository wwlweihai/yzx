angular.module('rockswIonicComp', ['ionic'])
.run(['$templateCache', function ($templateCache) {
//$templateCache.put('ionic-toast/templates/ionic-toast.html', toastTemplate);
}])
.provider('rockswIonicToast', function () {
    this.$get = ['$compile', '$document', '$interval', '$rootScope', '$templateCache', '$timeout',
      function ($compile, $document, $interval, $rootScope, $templateCache, $timeout) {
          var toastTemplate = '<div class="ionic_toast" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle" ng-click="hide()">' +
              '<span class="ionic_toast_close" ng-click="hide()"><i class="ion-close-round toast_close_icon"></i></span>' +
              '<span ng-bind-html="ionicToast.toastMessage"></span>' +
              '</div>';

        var defaultScope = {
          toastClass: '',
          toastMessage: '',
          toastStyle: {
            display: 'none',
            opacity: 0
          }
        };

        var toastTimeout;

        var toastPosition = {
          top: 'ionic_toast_top',
          middle: 'ionic_toast_middle',
          bottom: 'ionic_toast_bottom'
        };

        var toastScope = $rootScope.$new();
        var toastTemplate = $compile(toastTemplate)(toastScope);

        toastScope.ionicToast = defaultScope;


        $document.find('body').append(toastTemplate);

        var toggleDisplayOfToast = function (display, opacity, callback) {
          toastScope.ionicToast.toastStyle = {
            display: display,
            opacity: opacity
          };
          toastScope.ionicToast.toastStyle.opacity = opacity;
          callback();
        };

        toastScope.hide = function () {
          toggleDisplayOfToast('none', 0, function () {
            //console.log('toast hidden');
          });
        };

        return {

          show: function (message, position, closeBtn, duration) {
            $timeout.cancel(toastTimeout);

            if (!message) return;
            if(!duration) duration = 1800;
            if(!position) position = "bottom";
            if(duration > 5000) duration = 5000;
            angular.extend(toastScope.ionicToast, {
              toastClass: toastPosition[position] + ' ' + (closeBtn ? 'ionic_toast_sticky' : ''),
              toastMessage: message
            });
            toggleDisplayOfToast('block', 1, function () {
              if (closeBtn)  return;
              toastTimeout = $timeout(function () {
                toastScope.hide();
              }, duration);
            });
          },

          hide: function () {
            toastScope.hide();
          }
        };

      }
    ];
});



