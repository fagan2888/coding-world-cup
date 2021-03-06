/**
 * PlayerState_Dynamic
 * -------------------
 * Player state - such as position - which changes as the game
 * is played.
 */
var Position = require('./../utils/Position');

/**
 * @constructor
 */
function PlayerState_Dynamic() {
    // The player's position...
    this.position = new Position(0.0, 0.0);

    // Whether the player has the ball or not...
    this.hasBall = false;

    // The direction the player is facing, in degrees.
    // 0.0 is straight up, 90.0 is facing right...
    this.direction = 0.0;
}

// Exports...
module.exports = PlayerState_Dynamic;