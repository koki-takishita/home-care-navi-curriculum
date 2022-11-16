<template>
  <v-layout>
    <v-main>
      <v-container class="wrapper" order=-2>
        <TheHeader />
        <slot />
        <TheFooter />
      </v-container>
    </v-main>
  </v-layout>
</template>
<style>
main {
	background: #F5F7F7;
	height: 100vh;
}
</style>
