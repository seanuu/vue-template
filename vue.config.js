const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    publicPath: '/',
    outputDir: 'dist',
    productionSourceMap: false,
    runtimeCompiler: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/theme/index.scss";`
            }
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            distCompression(config);

            imageOptimize(config);

            config.plugins.has('copy') &&
                config.plugin('copy').tap(([args]) => {
                    args[0].ignore.push('mock-data/**/*');
                    return [args];
                });
        }
        svgOptimize(config);

        svgSpriteConfig(config);
    },
    configureWebpack: {
        resolve: {
            alias: {
                '~mock-data': path.resolve(__dirname, 'public/mock-data'),
                '@components': '@/common/components',
                '@const': '@/common/const',
                '@directives': '@/common/directives',
                '@filters': '@/common/filters',
                '@mixins': '@/common/mixins',
                '@services': '@/common/services',
                '@utils': '@/common/utils',
                '@store': 'src/app/store'
            }
        },
        plugins: [new webpack.ProvidePlugin({})]
    },
    transpileDependencies: []
};

function svgSpriteConfig(config) {
    let svgDir = path.resolve(__dirname, './src/assets/svg-icons');

    config.module.rule('svg').exclude.add(svgDir);

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(svgDir)
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: '[name]'
        });
}

function distCompression(config) {
    config.plugin('compression').use(CompressionWebpackPlugin, [
        {
            test: /\.js$|\.css$/,
            algorithm: 'gzip',
            threshold: 1024 * 10
        }
    ]);
}

function imageOptimize(config) {
    config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .tap(options => ({
            mozjpeg: {
                progressive: true,
                quality: 65
            },
            optipng: {
                enabled: true
            },
            pngquant: {
                quality: [0.65, 0.9],
                speed: 4
            },
            gifsicle: {
                interlaced: false
            }
        }));
}

function svgOptimize(config) {
    config.module
        .rule('svg')
        .use('svgo-loader')
        .loader('svgo-loader')
        .tap(options => ({
            plugins: [
                {cleanupAttrs: true},
                {cleanupEnableBackground: true},
                {cleanupIDs: true},
                {cleanupListOfValues: true},
                {cleanupNumericValues: true},
                {collapseGroups: true},
                {convertColors: true},
                {convertPathData: true},
                {convertShapeToPath: true},
                {convertStyleToAttrs: true},
                {convertTransform: true},
                {mergePaths: true},
                {removeComments: true},
                {removeDesc: true},
                {removeDimensions: true},
                {removeDoctype: true},
                {removeEditorsNSData: true},
                {removeEmptyAttrs: true},
                {removeEmptyContainers: true},
                {removeEmptyText: true},
                {removeHiddenElems: true},
                {removeMetadata: true},
                {removeNonInheritableGroupAttrs: true},
                {removeRasterImages: true},
                {removeTitle: true},
                {removeUnknownsAndDefaults: true},
                {removeUselessDefs: true},
                {removeUnusedNS: true},
                {removeUselessStrokeAndFill: true},
                {removeXMLProcInst: true},
                {removeStyleElement: true},
                {removeUnknownsAndDefaults: true},
                {sortAttrs: true}
            ]
        }));
}
