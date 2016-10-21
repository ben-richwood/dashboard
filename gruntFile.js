module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Default task(s).
  grunt.registerTask('default', []);

};

// FROM MODERNIZR - FOR FLEXBOX DETECTION
// {
//   "crawl": false,
//   "customTests": [],
//   "dest": "/PATH/TO/modernizr-output.js",
//   "tests": [
//     "flexbox"
//   ],
//   "options": [
//     "setClasses"
//   ],
//   "uglify": true
// }