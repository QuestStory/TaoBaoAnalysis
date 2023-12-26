<template>
  <div>
    <div class="header">
      <h3>淘宝彩妆数据分析平台</h3>
    </div>
    <div class="body">
      <div class="liner">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link to="/manage/screen">
            <el-menu-item index="1"><i class="el-icon-s-promotion"></i><span>首页</span></el-menu-item>
          </router-link>

          <router-link to="/manage/sale">
            <el-menu-item index="2"><i class="el-icon-s-shop"></i><span>销售数据分析</span></el-menu-item>
          </router-link>

          <el-submenu index="100">
            <template slot="title">
              <i class="el-icon-s-check"></i>
              <span>用户分析</span>
            </template>

            <el-menu-item-group>
              <router-link to="/manage/basic">
                <el-menu-item index="4">&ensp;&emsp;用户基本属性分析</el-menu-item>
              </router-link>

              <router-link to="/manage/action">
                <el-menu-item index="5">&ensp;&emsp;用户行为分析</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="101">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>平台分析</span>
            </template>

            <el-menu-item-group>
              <router-link to="/manage/taobao">
                <el-menu-item index="6">&ensp;&emsp;淘宝平台</el-menu-item>
              </router-link>

              <router-link to="/manage/tmall">
                <el-menu-item index="7">&ensp;&emsp;天猫平台</el-menu-item>
              </router-link>

              <router-link to="/manage/live">
                <el-menu-item index="8">&ensp;&emsp;直播平台</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
a:link,
a:hover,
a:visited {
  color: #ffffff;
  text-decoration: none;
}
a:active {
  color: #ffd04b;
  text-decoration: none;
}
.header {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  font-size: 25px;
  font-weight: 800;
  background-color: #e3e3e3;
}

.header h3 {
  margin: 0;
  padding: 0;
  margin-left: 30px;
}
.body {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
}

.liner {
  width: 15%;
  height: 100%;
  background-color: #545c64;
}

.main {
  width: 85%;
  height: 90vh;
  background-color: #f2f2f2;
  overflow: hidden;
}
</style>