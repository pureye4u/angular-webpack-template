'use strict';

const webpackConfig = require('./config/webpack.test');
const os = require('os');

console.log(`Starting Karma with isCI=${!!isCI()}`);

function isCI() {
    return process.env.CI || process.env.APPVEYOR || process.env.TRAVIS;
}

function getBrowsers() {
    if (process.env.CI) {
        // variable defined by APPVEYOR itself
        if(process.env.APPVEYOR) {
            // only for AppVeyor
            return ['Chrome', 'Firefox', 'IE'];
        } else {
            // Travis CI
            return ['PhantomJS', 'Firefox'];
        }
    } else {
        switch(os.platform()) {
            // Windows
            case 'win32':
            // TODO add 'PhantomJS' - at the moment isn't working on Windows10 (only for test in ProfileComponent, WTF!!!)
            return ['Chrome', 'Firefox', 'IE'];
            break;
            // macOS
            case 'darwin':
            return ['PhantomJS', 'Chrome', 'Firefox'/*, 'Safari'*/];
            break;
            // other (linux, freebsd, openbsd, sunos, aix)
            default:
            return ['PhantomJS', 'Chrome', 'Firefox'];
            break;
        }
    }
}

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            "./config/karma-test-runner.js"
        ],
        exclude: [],
        preprocessors: {
            './config/karma-test-runner.js': ['coverage', 'webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: {
                chunks: false
            }
        },
        reporters: ['progress', 'mocha', 'kjhtml', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: getBrowsers(),
        singleRun: !!isCI(),
        coverageReporter: {
            type: 'in-memory'
        },
        remapCoverageReporter: {
            'text-summary': null,
            'json': './coverage/coverage.json',
            'html': './coverage/html',
            'lcovonly': './coverage/lcov.info'
        },
        jasmineDiffReporter: {
            multiline: true
        },
        browserNoActivityTimeout: 60000
    });
};
