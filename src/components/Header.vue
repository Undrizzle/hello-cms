<template>
  <div class="header-container">
    <div class="header-left">
      <div class="logo-wrap">
        <a href="/" id="logo"></a>
      </div>
      <div class="menu-wrap">
        <el-menu mode="horizontal">
          <el-menu-item index="1">文档</el-menu-item>
          <el-menu-item index="2">创作</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="header-right">
      <Avatar />
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'Header',
  components: {
    Avatar
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
</style>