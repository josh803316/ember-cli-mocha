module.exports = {
  description: 'Generates a model unit test.',

  locals: function() {
    var packages = Object.keys(this.project.addonPackages);
    var jshintExists = packages.indexOf('ember-cli-jshint') !== -1;

    return {
      jshintExists: jshintExists
    };
  }
};
