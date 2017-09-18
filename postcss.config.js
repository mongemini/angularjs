module.exports = {
    plugins: {
      'postcss-import': { 
        addModulesDirectories: ['app'],
        resolve: function(id, base) {
          return glob.sync(path.join(base, id));
        } 
      },
    //   precss: { },
      autoprefixer: { browsers: ['> 1%', 'last 5 versions', 'iOS >= 8'] }
    },
  }