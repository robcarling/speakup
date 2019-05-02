<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Comment</td>
        <td align="right"></td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="comment in orderedComments" :key="comment.id">
        <td>{{ comment.id }}</td>
        <td>{{ comment.name }}</td>
        <td>{{ comment.body }}</td>
        <td align="right">
          <button class="btn btn-danger" v-on:click="deleteComment(comment.id)">
            <i class="fa fa-trash"></i> 
            Delete
          </button>
        </td>
      </tr>
      <tr v-if="comments.length == 0">
          <td colspan="4">Comments Loading...</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      apiUrl: "https://comments-api.azurewebsites.net/api/Comments/"
    };
  },

  created: function() {
    this.fetchComments();
  },

  computed: {
    orderedComments: function() {
      return _.orderBy(this.comments, "id", "desc");
    }
  },

  methods: {
    fetchComments() {
      this.axios.get(this.proxyUrl + this.apiUrl).then(response => {
        this.comments = response.data;
      });
    },
    deleteComment(id) {
      let uri = this.proxyUrl + this.apiUrl + id;

      var i = this.comments.map(function(el) {
        return el.id;
      }).indexOf(id);

      if (confirm('Are you sure you want to delete this comment?')) {
        this.comments.splice(i, 1);
        this.axios.delete(uri);
      }
    
    }
  }
}
</script>

