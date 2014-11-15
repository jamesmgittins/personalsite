
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
    this.top = false;
    this.bottom = false;
    this.left = false;
    this.right = false;
    this.connections = "";
}

angular.module('squaresgame', [])
    .controller('Squares', ['$scope', '$document', '$interval', function ($scope, $document, $interval) {

        function refreshConnectionClass(gridCell) {
            gridCell.connections = "";
            if (gridCell.top)
                gridCell.connections = gridCell.connections + "top";
            if (gridCell.bottom)
                gridCell.connections = gridCell.connections + " bottom";
            if (gridCell.left)
                gridCell.connections = gridCell.connections + " left";
            if (gridCell.right)
                gridCell.connections = gridCell.connections + " right";
        }

        function testEdges(gridCell) {

            if (gridCell.row > 0 && $scope.gameModel.grid[gridCell.row - 1][gridCell.column].ownedBy == gridCell.ownedBy) {
                gridCell.top = true;
                $scope.gameModel.grid[gridCell.row - 1][gridCell.column].bottom = true;
                refreshConnectionClass($scope.gameModel.grid[gridCell.row - 1][gridCell.column]);
            }

            if (gridCell.row < $scope.gameModel.grid.length - 1 && $scope.gameModel.grid[gridCell.row + 1][gridCell.column].ownedBy == gridCell.ownedBy) {
                gridCell.bottom = true;
                $scope.gameModel.grid[gridCell.row + 1][gridCell.column].top = true;
                refreshConnectionClass($scope.gameModel.grid[gridCell.row + 1][gridCell.column]);
            }

            if (gridCell.column > 0 && $scope.gameModel.grid[gridCell.row][gridCell.column - 1].ownedBy == gridCell.ownedBy) {
                gridCell.left = true;
                $scope.gameModel.grid[gridCell.row][gridCell.column - 1].right = true;
                refreshConnectionClass($scope.gameModel.grid[gridCell.row][gridCell.column - 1]);
            }

            if (gridCell.column < $scope.gameModel.grid[0].length - 1 && $scope.gameModel.grid[gridCell.row][gridCell.column + 1].ownedBy == gridCell.ownedBy) {
                gridCell.right = true;
                $scope.gameModel.grid[gridCell.row][gridCell.column + 1].left = true;
                refreshConnectionClass($scope.gameModel.grid[gridCell.row][gridCell.column + 1]);
            }
            
            refreshConnectionClass(gridCell);
        }

        var playerSquares = 250;
        var cpuSquares = 0;
        
        $scope.gameModel = new GameModel(30, 30);

        $scope.clickSquare = function (gridCell) {
            if (gridCell.ownedBy == "") {
                gridCell.ownedBy = "player-1";
                testEdges(gridCell);
                playerSquares++;
            }
        }

        function update() {
            if (cpuSquares < playerSquares) {
                var i = Math.floor(Math.random() * $scope.gameModel.grid.length);
                var j = Math.floor(Math.random() * $scope.gameModel.grid[i].length);
                if ($scope.gameModel.grid[i][j].ownedBy == "") {
                    $scope.gameModel.grid[i][j].ownedBy = "player-2";
                    testEdges($scope.gameModel.grid[i][j]);
                    cpuSquares++;
                }
            }
            
        }

        $document.ready(function () {
            $interval(update, 1000);
        });

    }]);