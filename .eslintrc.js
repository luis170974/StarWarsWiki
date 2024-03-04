module.exports = {
    root: true,
    extends: '@react-native-community',
    plugin: ['react', 'react-hooks', 'import'],
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
    rules: {
        semi: [2, 'never'],
        'no-extra-boolean-cast': 'off',
    },
}