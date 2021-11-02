function logError(message) {
  console.log('ERROR:', message);
}

class Piece {
  constructor(name) {
    this.name = name;
  }
}

const perpendicularMover = {
  moveVertical(step) {
    console.log(`${this.name} moving vertically ${step} positions`);
  },

  moveHorizontal(step) {
    console.log(`${this.name} moving vertically ${step} positions`);
  },
}

const diagonalMover = {
  moveForwardDiagonal(step) {
    console.log(`${this.name} moving forward diagonal ${step} positions`);
  },

  moveBackwardDiagonal(step) {
    console.log(`${this.name} moving backward diagonal ${step} positions`);
  },
}

class Bishop extends Piece {
  constructor() {
    super('bishop')
  }
}
Object.assign(Bishop.prototype, diagonalMover);

class Rook extends Piece {
  constructor() {
    super('rook')
  }
}
Object.assign(Rook.prototype, perpendicularMover);

class Queen extends Piece {
  constructor() {
    super('queen')
  }
}
Object.assign(Queen.prototype, perpendicularMover);
Object.assign(Queen.prototype, diagonalMover);

const queen  = new Queen();
const bishop = new Bishop();
const rook   = new Rook();

queen.moveVertical(4);
queen.moveForwardDiagonal(4);
rook.moveVertical(4);
bishop.moveBackwardDiagonal(4);

try {
  bishop.moveVertical(4);
} catch (error) {
  logError(error);
}

try {
  rook.moveForwardDiagonal(3);
} catch (error) {
  logError(error);
}

