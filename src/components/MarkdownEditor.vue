<template>
  <div class="editor-container">
    <mavon-editor ref="md" class="editor-content" v-model="handbook" @save="handleSave" @imgAdd="handleImgAdd" @imgDel="handleImgDel" />

    <el-dialog
          title="发布信息"
          :visible.sync="dialogVisible"
          width="30%">
          <el-form ref="publishForm" :model="publishForm" status-icon :rules="publishRules" label-width="80px">
            <el-form-item label="标题" prop="title">
              <el-input v-model="publishForm.title"></el-input>
            </el-form-item>
            <el-form-item label="路径" prop="path">
              <el-input v-model="publishForm.path">
                <template slot="prepend">localhost:3000/</template>
              </el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </span>
        </el-dialog>
  </div>
</template>

<script>
import { uploadImg, deleteImg } from '../api/publish'

export default {
  name: 'MarkdownEditor',
  data() {
    const validateTitle = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('标题不能为空'))
      } else {
        callback()
      }
    }

    const validatePath = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('路径不能为空'))
      } else {
        callback()
      }
    }

    return {
      handbook: '',
      dialogVisible: false,
      publishForm: {
        title: '',
        path: ''
      },
      publishRules: {
        title: [
          { validator: validateTitle, trigger: 'blur' }
        ],
        path: [
          { validator: validatePath, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSave(value, render) {
      if (this.handbook != '') {
        this.dialogVisible = true
        const saveInfo = {
          raw: value,
          render: render
        }
        this.$store.dispatch('editor/save', saveInfo)
      }
    },
    onSubmit() {
      this.$refs.publishForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$store.dispatch('editor/publish', this.publishForm)
        } else {
          return false
        }
      })    
    },
    async handleImgAdd(pos, $file) {
      let formData = new FormData()
      formData.append('image', $file)
      const { data } = await uploadImg(formData)
      this.$refs.md.$img2Url(pos, data.url)
    },
    handleImgDel($file) {
      const data = {
        name: $file[1].name
      }
      deleteImg(data)
    }
  }
}
</script>

<style scoped>
.editor-content {
  height: calc(100vh - 80px);
}
</style>

