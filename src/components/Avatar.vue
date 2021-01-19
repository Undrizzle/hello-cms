<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <img class="user-avatar" src="../assets/avatar.gif" alt="" />
      <div class="user-name">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Avatar',
  computed: {
    ...mapGetters({
      username: 'user/username'
    })
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
      }
    },
    logout() {
      this.$baseConfirm(
        '您确定要退出吗？',
        null,
        async () => {
          await this.$store.dispatch('user/logout')
          this.$router.push('/login')
        }
      )
    }
  }
}
</script>

<style scoped>
.avatar-dropdown {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 50px;
  padding: 0;
}

.user-avatar {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
}

.user-name {
  position: relative;
  margin-left: 5px;
  cursor: pointer;
}
</style>