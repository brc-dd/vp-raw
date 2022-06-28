module.exports = {
  plugins: {
    'postcss-prefix-selector': {
      prefix: ':not(:where(.vp-raw *))',
      includeFiles: [/vp-doc\.css/],
      transform(prefix, selector) {
        return selector + prefix
      }
    }
  }
}
