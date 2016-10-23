module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		//pkg: grunt.file.readJSON('package.json'),

		// Check errors into JS code
		jshint: {
		  	all: ['Gruntfile.js', 'assets/script/Twin_Ionic_Engine.js', 'assets/script/*.js']
		  	// sub-directory => 'lib/**/*.js'
		},

  		// Concat JS files
		concat: {
			options: {
			  separator: ';',
			},
			dist: {
			  src: ['assets/script/*.js'],
			  dest: 'assets/min/min.js',
			},
		},

		// Minify JS code
		uglify: {
			options: {
		    	mangle: false
		    	//No variable changements
		    },
		    dist: {
		    	files: {
		      		'assets/min/min.js': ['assets/script/Twin_Ionic_Engine.js', 'assets/script/*.js']
		      		// Be careful with order! First are more important
		    	}
		    }
		},

		cssmin: {
			options: {
		    	mangle: false
		    	//Pas de changement dans les noms de variable
		    },
		    dist: {
		    	files: [{
		    		expand: true,
		    		cwd: 'release/css',
		    		src: ['/assets/style*.css', '!assets/style/*.min.css'],
		    		//dest: 'release/css',
		    		dest: 'assets/style',
		    		ext: '.min.css'
		    	}]
			}
		},

		watch: {
			js: {
		    	files: ['assets/script/*.js', '!assets/min/min.js'],
		    	tasks: ['jshint', 'uglify'],
		    	options: { spawn: false	}
			},
			css: {
		    	files: ['assets/style/*.css', '!assets/min/min.css'],
		    	tasks: ['cssmin'],
		    	options: { spawn: false	}
			}
		},

		imagemin: {                          // Task ,
		    dist: {                         // Another target 
		    	files: [{
		        	expand: true,                  // Enable dynamic expansion 
		        	cwd: 'assets/img/',                   // Src matches are relative to this path 
		        	src: ['*.{png,jpg,gif}'],   // Actual patterns to match 
		        	dest: 'assets/img/min/'                  // Destination path prefix 
		      	}]
		    }
  		},

  		replace: {
			dist: {
			    src: ['assets/style/min.css'],
			    overwrite: true,                 // overwrite matched source files 
			    replacements: [{
				    from: "img/",
			    	to: "img/min"
			    }]
			}
		}

	}); // End of grunt.initConfig
	
	// Default task(s).
	grunt.registerTask('default', ['jshint', 'cssmin', 'uglify', 'concat', 'imagemin', 'replace']);

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-text-replace');
	//grunt.loadNpmTasks('grunt-contrib-watch');


// FROM MODERNIZR - FOR FLEXBOX DETECTION

// To explore later
// grunt-autoprefixer
// grunt-uncss
// grunt-wiredep (formerly known as grunt-bower-install)
// grunt-modernizr
// grunt-concurrent
// grunt-jasmine
// grunt-ftp-deploy
// grunt-phpcs - for PSR-2

};