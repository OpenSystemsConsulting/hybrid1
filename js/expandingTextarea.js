// see http://stackoverflow.com/questions/24480224/auto-growing-textarea-in-ionic
// see https://codepen.io/benshope/pen/xOPvpm
angular.module('expandingTextarea', [])
.directive('expandingTextarea', function () {
    return {
        restrict: 'A',
        controller: function ($scope, $element, $attrs, $timeout) {
            $element.css('min-height', '40px');
            $element.css('resize', 'none');
            $element.css('overflow-y', 'hidden');
            setHeight(40);
            $timeout(setHeightToScrollHeight);

            function setHeight(height) {
                $element.css('height', height + 'px');
                $element.css('max-height', height + 'px');
            }

            function setHeightToScrollHeight() {
                setHeight(40);
                var scrollHeight = angular.element($element)[0]
                  .scrollHeight;
                if (scrollHeight !== undefined) {
                    setHeight(scrollHeight);
                }
            }

            $scope.$watch(function () {
                return angular.element($element)[0].value;
            }, setHeightToScrollHeight);
        }
    };
});
