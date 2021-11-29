const { createBuildProfile } = require('../profileBuilder');

// These two variables will display to the user when looking for builds.
const label = 'Revenant add and champion control';
const description = 'PvE build for endgame content.';

module.exports = createBuildProfile(__filename, label, description);
