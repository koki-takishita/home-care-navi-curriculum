<template>
  <v-app-bar location="bottom" elevation="0" height="if(mobile.value) {return 84}">
    <v-container class="px-2">
      <div class="d-flex" :class="toggleClassWrapperLayout()">
        <div class="fotter-icon d-flex justify-space-between">
          <p class="text-button font-weight-black">ホームケアナビ</p>
          <p class="copy-right">&copy;hogehoge</p>
        </div>
        <div class="d-flex fotter-link-wrapper justify-space-between" :class="toggleClassFooterLinks()">
          <p class="mb-0 fotter-link text-red-lighten-2">プライバシーポリシー</p>
          <p class="mb-0 fotter-link text-red-lighten-2">利用規約</p>
          <p class="mb-0 fotter-link text-red-lighten-2">お問い合わせ</p>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts" setup>
  import { useDisplay } from 'vuetify'

  let { mobile } = useDisplay()
  const toggleClassWrapperLayout = () => {
    return mobile.value ? "flex-column-reverse" : "justify-space-between"
  }
  const toggleClassFooterLinks = () => {
    return mobile.value ? "justify-space-around" : "justify-space-between"
  }
</script>
<style scoped>
.fotter-link-wrapper {
  width: 270px;
}

.fotter-icon {
	width: 175px;
}

.fotter-link {
  font-size: 11px;
  height: 100%;
  display: flex;
  align-items: center;
}

@media (max-width: 599px) {
  .fotter-link-wrapper {
    width: 100%;
  }
  .fotter-icon {
    width: 100%;
  }
}

.text-small {
  font-size: 11px;
}

.copy-right {
  font-family: monospace;
  font-size: 10px;
  height: 36px;
  display: flex;
  align-items: center;
  color: #AEB5B2;
}
</style>
