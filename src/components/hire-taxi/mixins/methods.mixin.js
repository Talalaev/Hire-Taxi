import TAXI_ORDER from '../../../graphql/TaxiOrder.gql'

export const methodsMixin = {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    orderTaxi() {
      this.$refs['form'].validate((valid) => {
        if (valid === false) {
          return;
        }

        this.loading = true;
        localStorage.setItem('taxiOrder', this.hireForm);

        this.$apollo
          .mutate({
            mutation: TAXI_ORDER,
            variables: {
              input: this.hireForm
            }
          })
          .then(() => this.$confirm('You will be redirected to unbiased.co.uk'))
          .then(() => window.open('https://www.unbiased.co.uk/', '_blank'))
          .finally(() => this.loading = false);
      });
    },
  }
};
