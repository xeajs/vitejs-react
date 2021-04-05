module.exports = {
  plugins: {
    /** autoprefixer css3 将未来的 CSS 特性带到今天！ 帮你将最新的 CSS 语法转换成大多数浏览器都能理解的语法，并根据你的目标浏览器或运行时环境来确定你需要的 polyfills，此功能基于 cssdb 实现 */
    'postcss-preset-env': {},
    /** @import ''; */
    'postcss-import': {},
    /** sass 语法 */
    precss: {},
    /** css flex 解析，简写和全写 */
    'postcss-flexbugs-fixes': {}
  }
};
