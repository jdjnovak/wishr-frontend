<template>
  <div id="app" class="h-screen flex flex-col" >
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/partials/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
}
</script>
