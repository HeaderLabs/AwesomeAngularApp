angular.module('AwesomeAngularApp', [])
AwesomeAngularApp.controller('MainCtrl', [
        '$scope',
        function ($scope) {

            var screens = [
                {
                    url: 'screens/_1.html'
                },
                {
                    url: 'screens/_2.html'
                },
                {
                    url: 'screens/_3.html'
                },
                {
                    url: 'screens/_4.html'
                },
                {
                    url: 'screens/_5.html'
                }
            ]

            function setCurrentSlideIndex(index) {
                $scope.currentIndex = index;
            }

            function isCurrentSlideIndex(index) {
                return $scope.currentIndex === index;
            }

            $scope.nextSlide = function () {
                $scope.currentIndex = ($scope.currentIndex < $scope.screens.length - 1) ? ++$scope.currentIndex : 0;
            }

            $scope.backSlide = function () {
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : 0;
            }


            $scope.screens = screens
            $scope.currentIndex = 0;
            $scope.setCurrentSlideIndex = setCurrentSlideIndex;
            $scope.isCurrentSlideIndex = isCurrentSlideIndex;


        }])

