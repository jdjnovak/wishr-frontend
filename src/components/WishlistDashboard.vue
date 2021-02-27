<template>
  <div class="prose w-full mx-8">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class WishlistDashboard extends Vue {
  @Prop() name!: string;
  @Prop() description!: string;
  @Prop() date_created!: Date;
  @Prop() last_updated!: Date;
}
</script>
