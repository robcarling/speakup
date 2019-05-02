<template>
  <div>
    <h1>{{ title }}</h1>
    <p><router-link :to="{ name: 'AddComment' }">Add a Comment</router-link></p>

    <comments-table></comments-table>
  </div>
</template>

<script>
import CommentsTable from "@/components/CommentsTable.vue";

export default {
  data() {
    return {
      title: "All Comments"
    };
  },
  components: {
    "comments-table": CommentsTable
  }
};
</script>
