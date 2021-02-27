<template>
  <div class="h-auto flex-1 flex items-center">
    <div class="xs:w-full xs:h-screen sm:w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto text-center bg-gray-200 px-8 py-8 md:rounded-3xl">
      <div class="mx-auto w-2/3 bg-primary py-4 rounded-t-full"><img src="@/assets/wishr_logo_5.png" class="object-fill mx-auto h-16"></div>
      <div class="text-2xl mt-4">Create a new account</div><br>
      <div v-if="this.errorString !== ''" class="text-red-400 mb-4">{{ this.errorString }}</div>
      <form>
        <div class="grid gap-2 grid-cols-2 grid-rows-5">
          <input :class="this.errorString === this.errors[0] ? 'border-red-400' : ''" class="col-span-2 w-full rounded-full border-none" id="username" type="text" placeholder="Username" v-model="username" required autofocus>
          <input :class="this.errorString === this.errors[1] ? 'border-red-400' : ''" class="col-span-1 w-full rounded-full border-none" id="first_name" type="text" placeholder="First name" v-model="first_name" required>
          <input :class="this.errorString === this.errors[1] ? 'border-red-400' : ''" class="col-span-1 w-full rounded-full border-none" id="last_name" type="text" placeholder="Last name" v-model="last_name" required>
          <input :class="this.errorString === this.errors[2] || this.errorString === this.errors[3] ? 'border-red-400' : ''" class="col-span-2 w-full rounded-full border-none" id="email" type="email" placeholder="Email" v-model="email" required>
          <input :class="this.errorString === this.errors[4] ? 'border-red-400' : ''" class="col-span-2 w-full rounded-full border-none" id="password" type="password" placeholder="Password" v-model="password" required>
          <input :class="this.errorString === this.errors[5] ? 'border-red-400' : ''" class="col-span-2 w-full rounded-full border-none" id="password-confirm" type="password" placeholder="Confirm password" v-model="password_confirm" required>
        </div>
        <button type="submit" class="rounded-full xs:text-lg sm:text-lg md:text-xl h-12 border bg-blue-200 w-1/3 mt-4" @click="handleSubmit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class Register extends Vue {
  @Prop() nextUrl!: string
  private username = ''
  private first_name = ''
  private last_name = ''
  private email = ''
  private password = ''
  private password_confirm = ''

  private errorString = ''
  private errors: string[] = [
    'A username is required',
    'A first and last name is required',
    'An email is required',
    'A valid email is required',
    'Passwords must be 8 characters or longer',
    'Passwords must match'
  ]

  handleSubmit(e: any) {
    this.errorString = ''

    e.preventDefault()

    if (this.username.length === 0) {
      this.errorString = this.errors[0]
      return;
    }

    if (this.first_name.length === 0 || this.last_name.length === 0) {
      this.errorString = this.errors[1]
      return;
    }

    if (this.email.length === 0) {
      this.errorString = this.errors[2]
      return;
    } else {
      // Stack Overflow to the rescue on this one: https://stackoverflow.com/questions/46370725/how-to-do-email-validation-using-regular-expression-in-typescript
      // This regex requires the format of: string + @ + string + . + string
      // Hence, a@a.a is 'valid' but eventually I'll have email response set up and such.
      const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      if (this.email.match(regexp) === null) {
        this.errorString = this.errors[3]
        return;
      }
    }

    if (this.password.length < 8) {
      this.errorString = this.errors[4]
      return;
    }

    if (this.password === this.password_confirm) {
      const newUser = {
        'username': this.username,
        'first_name': this.first_name,
        'last_name': this.last_name,
        'password': this.password,
        'email': this.email
      }
      axios.post(`http://localhost:3000/api/v0.1/register`, newUser).then(resp => {
        localStorage.setItem('user', JSON.stringify(resp.data.user))
        localStorage.setItem('jwt', resp.data.token)
        if (localStorage.getItem('jwt') !== null) {
          this.$emit('registered')
          this.$router.push({ path: 'login' })
        } else {
          this.errorString = resp.data.reason
        }
      }).catch(err => {
		console.error(err)
        this.errorString = 'An error has occured.'
      });
    } else {
      this.errorString = this.errors[5]
    }
  }
}
</script>
