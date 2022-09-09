module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/default/_var.scss";
          @import "@/assets/scss/default/_mixin.scss";
        `,
      },
    },
  },
};
