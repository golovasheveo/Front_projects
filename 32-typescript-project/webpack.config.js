module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    mode: "development"
}