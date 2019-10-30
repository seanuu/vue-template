/**
 * ignore: https://prettier.io/docs/en/ignore.html
 */

module.exports = {
    printWidth: 140,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'none',
    bracketSpacing: false,
    jsxBracketSameLine: true,
    arrowParens: 'avoid',
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    endOfLine: 'lf',

    overrides: [
        {
            files: ['*.html'],
            options: {
                singleQuote: false
            }
        }
    ]
};
