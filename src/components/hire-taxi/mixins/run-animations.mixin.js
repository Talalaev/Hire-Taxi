export const runAnimationsMixin = {
  data() {
    return {
      isTaxiFarAway: true,
    };
  },
  mounted() {
    setTimeout(() => this.isTaxiFarAway = false, 500);
  },
};
