<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="fa fa-comment"></i>
          {{ title }}
        </h3>
      </div>
      <comment-form></comment-form>
    </div>
  </div>
</template>

<script>
import CommentForm from "@/components/CommentForm.vue";

export default {
  data() {
    return {
      title: "Add a Comment "
    };
  },
  components: {
    "comment-form": CommentForm
  }
};
</script>
