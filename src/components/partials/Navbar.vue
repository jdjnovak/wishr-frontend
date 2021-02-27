<template>
  <nav id="header" class="flex-none w-full z-30 top-10 py-1 bg-white">
    <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
      <!-- LOGO -->
      <img src="@/assets/wishr_logo_6.png" class="h-12"/>
      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg class="fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle">
      
      <!-- NAVIGATION -->
      <div class="hidden md:flex md:items-center md:w-1/2 w-full order-3 md:order-1" id="menu">
        <nav class="w-full">
          <ul class="md:flex w-full items-center pt-4 md:pt-0">
            <li class="mx-4">
              <svg class="inline text-gray-700 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <div class="inline font-bold text-gray-700 ml-2">My Wishlists</div>
            </li>
            <li class="mx-4">
              <svg class="hidden md:inline text-gray-700 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div class="hidden md:inline text-gray-700 font-bold ml-2">Create a New Wishlist</div>
            </li>
            <li class="mx-4 flex-grow">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="inline text-gray-700 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  id="search"
                  class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                  type="search"
                  v-model="this.searchTerm"
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      
      <!-- AUTH STUFF -->
      <div class="hidden md:flex md:items-center md:w-auto w-full order-2 md:order-1" id="profile-content">
        <div v-if="this.currentUser === ''" class="auth flex items-center w-full md:w-full">
          <button class="mx-2 py-1 px-2 border-2 border-black rounded-2xl" @click="login">
            <svg class="w-8 h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <p class="inline font-bold">Login</p>
          </button>
          <button class="mx-2 py-1 px-2 border-2 border-black rounded-2xl" @click="signup">
            <svg class="inline w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <p class="inline font-bold">Sign Up</p>
          </button>
        </div>
        <div v-if="this.currentUser !== ''" class="flex items-center w-full md:w-full">
          <button @click="logout">
            <svg class="inline w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <p class="inline">Logout</p>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  private searchTerm = ''

  get currentUser() {
	const userJSON = JSON.parse(localStorage.getItem('user') || '{}')
    return userJSON !== {} ? userJSON.username : ''
  }

  signup() {
    this.$router.push({ name: 'Register' })
  }

  login() {
    this.$router.push({ name: 'Login' })
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('jwt')
    this.$router.push({ name: 'Login' })
  }
}
</script>
