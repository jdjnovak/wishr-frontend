<template>
  <div class="h-auto flex-1 flex items-center">
    <div class="xs:w-full xs:h-screen sm:w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto text-center bg-gray-200 px-8 py-16 border border-gray-100 sm:rounded-3xl">
      <div class="mx-auto w-2/3"><img src="@/assets/wishr_home_logo.png" class="mx-auto w-64"></div>
      <!-- <div class="text-xl mt-12 font-bold">Log into your Wishr account</div><br> -->
      <div class="text-red-400 mb-4">{{ this.errorString }}</div>
      <form class="mt-16">
        <div class="grid gap-2 grid-cols-2 grid-rows-2 md:w-2/3 md:mx-auto">
          <input :class="this.errorString === this.errors[0] ? 'border-red-400' : ''" class="col-span-2 w-full rounded-full border-none" id="username" type="text" placeholder="Username" v-model="username" autofocus>
          <input :class="this.errorString === this.errors[1] ? 'border-red-400' : ''" class="col-span-2 w-full rounded-full border-none" id="password" type="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="rounded-full xs:text-lg sm:text-lg md:text-xl h-12 border bg-blue-200 w-1/3 mt-12" @click="handleSubmit">
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from 'axios';

@Component({})
export default class Login extends Vue {
  private username = ''
  private password = ''

  private errorString = ''

  private errors: string[] = [
    'A username is required',
    'A password is required',
    'The usename or password entered is incorrect'
  ];

  handleSubmit(e: any) {
    this.errorString = ''

    e.preventDefault();

    if (this.password.length > 0) {
      const formInformation = {
        'username': this.username,
        'password': this.password
      };
      axios.post(`http://localhost:3000/api/v0.1/login`, formInformation).then((response: any) => {
		console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('jwt', response.data.token)

        if (response.data.error) {
          console.log('Got here')
          this.errorString = response.data.error
          return;
        }

        this.$emit('loggedIn')
        if (response.data.user.user_role === 'admin') this.$router.push('admin-panel')
        else this.$router.push('dashboard')
      }).catch((err: any) => {
        console.error(`ERROR: Error occured when logging in. See: ${err}`)
        this.errorString = this.errors[2]
        return;
      });
    }
  }
}
</script>
