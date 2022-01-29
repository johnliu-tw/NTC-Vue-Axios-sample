<template>
  <h1>UserId: {{ $route.params.userId }}</h1>
  <div>Name: {{userInfo.name}}</div>
  <div>Email: {{userInfo.email}}</div>
  <hr>

  <router-link :to="`/users/${userId}/todos`"> {{ userInfo.username }} 的 todo </router-link>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      userInfo: {}
    }
  },
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  watch:{
    userId: function(val){
      this.fetchUserInfo(val)
    }
  },
  methods: {
    fetchUserInfo(id){
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
           .then(res => this.userInfo = res.data)
    }
  },
  mounted() {
    this.userInfo = this.fetchUserInfo(this.userId)
  }
}
</script>