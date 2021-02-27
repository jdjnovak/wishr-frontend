<template>
  <div class="mt-16 mx-auto w-full">
    <img src="@/assets/wishr_angry.png" class="mx-auto h-64 my-16" />
    <div class="text-3xl text-center font-bold">Oh <i>CHIRP</i>!</div><br>
    <div class="text-3xl text-center">We cannot find that page!</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FourOhFour extends Vue {
}
</script>
