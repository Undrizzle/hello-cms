<template>
  <div class="editor-container">
    <mavon-editor class="editor-content" v-model="handbook" @save="handleSave" />
  </div>
</template>

<script>
import { writeHtmlToFile } from '../utils/write'

export default {
  name: 'MarkdownEditor',
  data() {
    return {
      handbook: ''
    }
  },
  methods: {
    handleSave(value, render) {
      writeHtmlToFile('my', render)
    }
  }
}
</script>

<style scoped>
.editor-content {
  height: calc(100vh - 80px);
}
</style>

