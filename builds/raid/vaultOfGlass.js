const { createBuildProfile } = require('../profileBuilder');

// These two variables will display to the user when looking for builds.
const label = 'Vault of Glass Weapons';
const description = 'Suggested weapons for VoG encounters';

module.exports = createBuildProfile(__filename, label, description);
