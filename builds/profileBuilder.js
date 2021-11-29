const path = require('path');

/**
 * Create a build option to display in the find-build command.
 * @param {string} fileName Path to the file to parse for the build profile.
 * @param {*} label Name of the profile. This will appear in the profile menu options.
 * @param {*} description Short description of the profile. This will appear in the profile menu options.
 * @returns
 */
 function createBuildProfile(fileName, label, description) {
  const buildType = path.basename(path.dirname(fileName));
  const buildName = path.parse(fileName).name;

  return {
    label,
    description,
    value: `${buildType}/${buildName}`,
  };
}

module.exports = {
  createBuildProfile,
};
