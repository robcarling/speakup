<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Comment</h3>
      </div>
      <div class="card-body">
        <p v-if="showSuccess">
          Comment Successfully Added. Add another below or
          <router-link :to="{ name: 'AllComments' }">View All Comments</router-link>
        </p>
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Your Name:</label>
            <input type="text" class="form-control" v-model="comment.name" />
          </div>
          <div class="form-group">
            <label>Your Comment:</label>
            <textarea class="form-control" v-model="comment.body"></textarea>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Item" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {},
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      apiUrl: "https://comments-api.azurewebsites.net/api/Comments/",
      showSuccess: false
    };
  },
  methods: {
    addItem: function() {
      this.axios
        .post(this.proxyUrl + this.apiUrl, this.comment)
        .then(
            this.showSuccess = true,
            this.comment = {}
        );

    },
    pushToCommentList() {
      this.$router.push("/all-comments");
    }
  }
};
</script>
