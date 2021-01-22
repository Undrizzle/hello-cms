<template>
  <div class="header-container">
    <div class="header-left">
      <div class="logo-wrap">
        <a href="/" id="logo"></a>
      </div>
      <div class="menu-wrap">
        <el-menu :default-active="activeIndex" mode="horizontal" :router="true" text-color="#303133" active-text-color="#409eff" @select="handleSelect"> 
          <el-menu-item index="documents">文档</el-menu-item>
          <el-menu-item index="editor">创作</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="header-right">
      <Avatar />
      <div class="btn-upload" v-if="uploadShow">
        <el-button type="primary" @click="dialogVisible = true">发布<i class="el-icon-upload el-icon--right"></i></el-button>

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
                <template slot="prepend">localhost:8080/</template>
              </el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'Header',
  components: {
    Avatar
  },
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
      activeIndex: '',
      uploadShow: false,
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
  mounted() {
    if (this.$route.name === 'Documents') {
      this.activeIndex = 'documents'
      this.uploadShow = false
    } else if (this.$route.name === 'Editor') {
      this.activeIndex = 'editor'
      this.uploadShow = true
    }
  },
  methods: {
    handleSelect(key) {
      if (key === 'editor') {
        this.uploadShow = true
      } else {
        this.uploadShow = false
      }
    },
    onSubmit() {
      this.$refs.publishForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
        } else {
          return false
        }
      })    
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 0;
}

.header-left {
  height: 100%;
  display: flex;
  align-items: center;
}

#logo {
  text-align: 101%;
  white-space: nowrap;
  overflow: hidden;
  background: url(../assets/logo.svg);
  width: 50px;
  height: 50px;
  background-size: 50px;
  display: block;
}

.header-right {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center
}

.btn-upload {
  margin-left: 20px;
}
</style>

<style>
.el-menu--horizontal {
  border-bottom: none !important;
}
</style>