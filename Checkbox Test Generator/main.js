/**
 * NodeJS Test Generation Module
 */


// Core/NPM Modules
const path    = require('path');


// Local Modules
const constraints       = require('./analyze');
const generateTestCases = require('./testgenerator');


// Polyfills
require('./format-polyfill');



/**
 * Parse an input file and generate test cases for it.
 */
(module.exports.main = function() {

    // Parse file input, defaulting to subject.js if not provided
    let args = process.argv.slice(2);
    if( args.length === 0 ) {
        args = ["study.js"];
    }
    let filePath = path.resolve(args[0]);

    // Initialize constraints based on input file
    let functionConstraints = constraints(filePath);
  //  console.log("Inside main");
    //console.log(functionConstraints);
    // Generate test cases
    generateTestCases(filePath, functionConstraints);

})();