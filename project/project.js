
var prompt = require("prompt");
prompt.start();

var grid = [
  ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

console.log(grid);
console.log(rover.x,rover.y,rover.direction);

function turnRight(rover) {
    if (rover.direction === "N") {
      rover.direction = "E";
    } else if (rover.direction === "E") {
      rover.direction = "S";
    } else if (rover.direction === "S") {
      rover.direction = "W";
    } else if (rover.direction === "W") {
      rover.direction = "N";
    }
    console.log(rover);
    grid[rover.y][rover.x] = rover.direction;
  }

  function turnLeft(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "S";
        break;
    }
    console.log(rover);
    grid[rover.y][rover.x] = rover.direction;
  }

  function moveForward(rover) {

    var lastX = rover.x;
    var lastY = rover.y;

    if (rover.direction === "N") {
      if (rover.y === 0) {
        console.log("Warning: Deplacement vers le nord impossible");
      } else {
        rover.y = rover.y - 1;
        // rover.y -= 1;
        // rover.y--;
      }
    } else if (rover.direction === "E") {
      if (rover.x === grid.length - 1) {
        if (rover.y === grid.length - 1) {
          rover.y = 0;
          rover.x = 0;
        } else {
          rover.y = rover.y + 1;
          rover.x = 0;
        }
      } else {
        rover.x = rover.x + 1;
      }
    } else if (rover.direction === "S") {
      if (rover.y === grid.length - 1) {
        console.log("Warning: Deplacement vers le sud impossible");
      } else {
        rover.y = rover.y + 1;
      }
    } else if (rover.direction === "W") {
      if (rover.x === 0) {
        console.log("Warning: Deplacement vers l'ouest impossible");
      } else {
        rover.x = rover.x - 1;
      }
    }
    console.log(rover);
    grid[rover.y][rover.x] = grid[lastY][lastX];
    //grid[lastY][lastX] = ' ';
  }
  
  function pilotRover(commands) {
    for (var i = 0; i < commands.length; i++) {
      //rover.travelLog.push(`Mon rover est en position x:${rover.x}, y:${rover.y}`);
      var position = {
        x: rover.x,
        y: rover.y
      }
      rover.travelLog.push(position);
      switch (commands.charAt(i)) {
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        default:
          console.log(`La commande ${commands.charAt(i)} n'est pas prise en compte par le rover`);
          return; 
      }
    }
  }

  
// Prog principal
console.log(grid.join('\\n'));
prompt.get(["commands"], function(error, result) {
  pilotRover(result.commands);
  console.log(grid.join('\n'));
  console.table(grid);
});
