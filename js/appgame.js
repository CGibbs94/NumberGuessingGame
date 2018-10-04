/* global angular */
var app = angular.module("myApp", []);
app.controller("myCtrl",
	function ($scope) {

		$scope.newGame = function () {
			$scope.guessNum = null;
			$scope.randomNumber = Math.floor((Math.random() * 100) + 1);
			$scope.deviation = null;
			$scope.startGuessing = true;
			$scope.showAnswer = false;
		};

		$scope.checkGuess = function () {
			$scope.startGuessing = false;
			$scope.showAnswer = false;
			$scope.deviation = $scope.randomNumber - $scope.guessNum;
		};

		$scope.giveUp = function () {
			$scope.showAnswer = true;
			$scope.startGuessing = false;
			$scope.previousAnswer = angular.copy($scope.randomNumber);
		};

		$scope.newGame();
	});
