<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow  @click-left="$router.go(-1)" />

    <van-search v-model="content" show-action placeholder="请输入搜索关键词" clearable @search="goSearch(content)" autofocus=true>
      <template #action>
        <div @click="goSearch(content)">搜索</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clear" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div class="list-item" v-for="ele in history" :key="ele" @click="goSearch(ele)">{{ ele }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHSInfo, setHSInfo } from '@/utils/storage'
export default {
  name: 'SearchIndex',
  data () {
    return {
      history: getHSInfo(),
      content: ''
    }
  },
  methods: {
    goSearch (key) {
      // console.log('搜索了', key)
      // indexOf查询历史中是否存在key并返回下标
      const index = this.history.indexOf(key)
      // 有则删除后添加到前面 没有则直接添加在前面
      if (index !== -1) {
        this.history.splice(index, 1)
      }
      this.history.unshift(key)

      setHSInfo(this.history)
      this.$router.push(`/searchlist?search=${key}`)
    },
    clear () {
      this.history = []
      setHSInfo([])
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
