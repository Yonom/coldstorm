﻿Controllers.controller("LineAuthorCtrl", ["$scope", function ($scope)
{
    if ($scope.user != null &&
        $scope.channel != null &&
        $scope.user.ranks[$scope.channel.name] != null)
    {
        $scope.rank = $scope.user.ranks[$scope.channel.name][0];
        if ($scope.rank === '%')
        {
            $scope.rank = '#';
        }
    } else
    {
        $scope.rank = '';
    }
}]);