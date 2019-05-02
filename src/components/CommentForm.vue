<template>
  <div class="card-body">
    <div class="alert alert-success" v-if="showSuccess" role="alert">
      Comment Successfully Added. Add another below or
      <router-link :to="{ name: 'AllComments' }">View All Comments</router-link>
    </div>
    <form v-on:submit.prevent="addItem">
      <div class="form-group">
        <label>Your Name:</label>
        <input type="text" class="form-control" v-validate="'required'" name="Name" v-model="comment.name" />
        <span class="error">{{ errors.first('Name') }}</span>
      </div>
      <div class="form-group">
        <label>Your Comment:</label>
        <textarea class="form-control" v-validate="'required'" name="Body" v-model="comment.body"></textarea>
        <span class="error">{{ errors.first('Body') }}</span>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary" value="Add Item" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {},
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      apiUrl: "https://comments-api.azurewebsites.net/api/Comments/",
      showSuccess: false,
      showErrors: false
    };
  },
  methods: {
    addItem: function() {
        this.$validator.validateAll().then((result) => {
        if (result) {
          this.axios
            .post(this.proxyUrl + this.apiUrl, this.comment)
            .then(
                this.showSuccess = true,
                this.comment = {}
            );
        }
        if(!result){ this.showErrors = true }
      })
    },
    pushToCommentList() {
      this.$router.push("/all-comments");
    }
  }
}
</script>

