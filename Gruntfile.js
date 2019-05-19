"use strict";

const grunt = (grunt) => {
  //hago npm tasts
  /* grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-cssbeautifier');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-json-format');
    grunt.loadNpmTasks('grunt-sonar-runner'); */
  //Esto es quivalente a lo de arriba
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    prettier: {
      options: {
        // Task-specific options go here.
        progress: false // By default, a progress bar is not shown. You can opt into this behavior by passing true.
      },
      files: {
        src: ["./**.js"]
      }
    },
    eslint: {
      options: {
        configFile: "./.eslintrc.json"
      },
      target: ["./services/**.js"]
    }
  });

  //registrando task
  grunt.registerTask("pre-commit", "Poniendo el código bonito", () => {
    let tasks = ["prettier", "eslint"];
    grunt.log.writeln("Beautifying...");
    tasks.forEach(task => {
      grunt.log.writeln("Step " + task);
      grunt.task.run(task);
      grunt.log.writeln("Done");
    });
  });
};

export {grunt};
