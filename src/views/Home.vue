<template>
  <div>
    <div class="w-full bg-gray-300 py-24">
      <img src="@/assets/wishr_home_logo.png" class="mx-auto h-64">
    </div>
    <article class="mt-16 prose md:prose-lg w-1/2 mx-auto">
      <h1 class="text-center">Welcome to Wishr</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus orci a ex euismod, sed sollicitudin orci efficitur. Pellentesque luctus malesuada lorem at tempor. Aliquam facilisis vel lorem eu accumsan. Vestibulum placerat sit amet risus in volutpat. Maecenas pulvinar vel tellus et ornare. Phasellus ac tortor vitae arcu pharetra suscipit. Nam nec est et enim ultricies ullamcorper eu ac tellus. Pellentesque in mauris euismod, iaculis ligula eget, mollis dolor. Maecenas orci lacus, placerat in odio at, scelerisque accumsan tortor. Etiam ultricies vel odio eu aliquet. Nam sodales imperdiet hendrerit. Donec iaculis arcu et felis feugiat, id dictum elit feugiat. Praesent nunc sem, varius eget tellus molestie, euismod porttitor odio.</p><br>
    </article>
    <div class="w-full py-16 bg-gray-300">
      <article class="prose md:prose-lg w-1/2 mx-auto">
        <p>
          Nunc aliquam dui vitae justo laoreet, quis cursus arcu pellentesque. Ut metus leo, dignissim ut erat volutpat, sagittis mollis ipsum. Etiam mattis, ipsum a malesuada lobortis, augue nisi pellentesque dui, in tempor arcu arcu eu tellus. Proin nec vulputate nulla. Fusce sit amet posuere massa. Fusce nec eleifend ante, ut elementum nibh. Nulla facilisis libero dui, ut condimentum ligula ornare in. Suspendisse quis elementum nunc. Nulla venenatis metus et massa efficitur, id tempor justo porttitor. Aliquam eu sapien lectus.
        </p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
