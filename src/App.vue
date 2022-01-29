<template>
  <div id="nav">
    <ul>
      <li v-for="id in 10" :key="id">
        <router-link :to="`/users/${id}`">{{id}} 使用者</router-link>
      </li>
    </ul>
  </div>
  <router-view/>
</template>

