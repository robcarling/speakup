<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>
          {{ title }} 
          <i class="fa fa-comment"></i>
        </h3>
      </div>
      <comment-form></comment-form>
    </div>
  </div>
</template>

<script>
import CommentForm from '@/components/CommentForm.vue'

export default {
  data() {
    return {
      title: 'Add a Comment '
    };
  },
  components: {
    'comment-form': CommentForm
  }
};
</script>
