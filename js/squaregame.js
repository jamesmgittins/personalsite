
function GameModel(rows, columns) {
    this.grid = [];

    for (var i = 0; i < rows; i++) {
        this.grid[i] = [];
        for (var j = 0; j < columns; j++) {
            this.grid[i][j] = new GridCell(i,j);
        }
    }
}

function GridCell(row, column) {
    this.row = row;
    this.column = column;
    this.ownedBy = "";
}

angular.module('squaresgame', [])
    .controller('Squares',['$scope','$document','$interval',function($scope,$document,$interval) {
        
        $scope.gameModel = new GameModel(30, 30);

        $scope.clickSquare = function (gridCell) {
            gridCell.ownedBy = "player-1";
        }

        function update() {
            var i = Math.floor(Math.random() * $scope.gameModel.grid.length);
            var j = Math.floor(Math.random() * $scope.gameModel.grid[i].length);
            $scope.clickSquare($scope.gameModel.grid[i][j]);
        }

        $document.ready(function () {
            $interval(update, 500);
        });

    }]);