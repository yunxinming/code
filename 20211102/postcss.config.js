module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75, // 设计稿宽度 750/10
      propList: ['*'],
    },
  },
}
