<template>
  <div>
    Hello {{ this.currentUser ? this.currentUser.username : '' }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Dashboard extends Vue {
  private currentUser = JSON.parse(localStorage.getItem('user') || '{}')
}
</script>
