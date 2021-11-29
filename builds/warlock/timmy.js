const { createBuildProfile } = require('../profileBuilder');

const label = 'Timmy';
const description = 'Insert description here';

module.exports = createBuildProfile(__filename, label, description);
