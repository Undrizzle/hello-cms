<template>
  <div class="editor-container">
    <mavon-editor class="editor-content" v-model="handbook" />
  </div>
</template>

<script>
export default {
  name: 'MarkdownEditor',
  data() {
    return {
      handbook: ''
    }
  }
}
</script>

<style scoped>
.editor-content {
  height: calc(100vh - 80px);
}
</style>

