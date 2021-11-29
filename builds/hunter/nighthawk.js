const { createBuildProfile } = require('../profileBuilder');

// These two variables will display to the user when looking for builds.
const label = 'Celestial Nighthawk';
const description = 'PvE build with Celestial Nighthawk.';

module.exports = createBuildProfile(__filename, label, description);
