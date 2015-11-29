/**
 * Created by rohitghatol on 11/29/15.
 */

angular.module("todo")
    .controller("TodoCtrl", ["$scope", function ($scope) {
        $scope.todos = [{
            text: "Todo1",
            pending: false
        },
        {
            text: "Todo2",
            pending: true
        }, {
            text: "Todo3",
            pending: false
        }]
    }])