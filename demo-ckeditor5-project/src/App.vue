<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
    import { Essentials } from '@ckeditor/ckeditor5-essentials';
    import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
    import { Link } from '@ckeditor/ckeditor5-link';
    import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
    import { Indent } from '@ckeditor/ckeditor5-indent';
    import { List } from '@ckeditor/ckeditor5-list';
    import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
    import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
    import { TextTransformation } from '@ckeditor/ckeditor5-typing';
    import { Alignment } from '@ckeditor/ckeditor5-alignment';
    import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
    import {
        Image,
        ImageCaption,
        ImageStyle,
        ImageToolbar,
        ImageUpload
    } from '@ckeditor/ckeditor5-image';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Hey, write your content here</p>',
                editorConfig: {
                    plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Link,
                        Paragraph,
                        Indent,
                        List,
                        PasteFromOffice,
                        Table,
                        TableToolbar,
                        TextTransformation,
                        Alignment,
                        Autoformat,
                        Image,
                        ImageCaption,
                        ImageStyle,
                        ImageToolbar,
                        ImageUpload
                    ],
                    toolbar: {
                        items: [
                            'bold',
                            'italic',
                            'link',
                            'undo',
                            'redo',
                            'imageUpload',  // <-- Added image upload button
                            'indent',
                            'outdent',
                            'numberedList',
                            'bulletedList',
                            'pasteFromOffice',
                            'table',
                            'alignment',
                            'autoformat'
                        ]
                    },
                    image: {  // <-- Image configuration
                        toolbar: [
                            'imageTextAlternative',
                            '|',
                            'imageStyle:full',
                            'imageStyle:side'
                        ],
                        styles: [
                            'full',
                            'side'
                        ]
                    }
                }
            };
        }
    };
</script>
