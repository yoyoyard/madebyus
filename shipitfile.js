// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)
  require('shipit-npm')(shipit);

  shipit.initConfig({
    default: {
      deployTo: '/var/apps/door',
      repositoryUrl: 'git@github.com:yoyoyard/madebyus.git',
    },
    staging: {
      servers: 'deploy@39.104.104.53',
    },
  })

  shipit.task('start', function() {
    // ...
    shipit.emit('webpack')
  })
  
}