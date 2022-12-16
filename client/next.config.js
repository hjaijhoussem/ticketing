module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300;
        return config
    }
}

//  this config file is only for watching change and
// updating it automaticly, Next have this ability by
//  default but sometimes he stop doing it 