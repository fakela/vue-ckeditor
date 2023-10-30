<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

export default {
  name: 'CKEditorComponent',
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Welcome to CKEditor!</p>',
      editorConfig: {
        toolbar: ['bold', 'italic', 'underline', '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        },
        language: 'en',
        placeholder: 'Start typing...'
      }
    };
  }
};
</script>

<style scoped>
/* Any custom styles for this component */
</style>
