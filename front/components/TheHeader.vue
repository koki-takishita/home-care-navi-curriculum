<template>
  <v-app-bar elevation="2" class="px-2">
    <v-container class="d-flex align-center">
      <img
        class="mr-auto"
        src="/img/drawer_icon.svg"
        alt="Drawer Icon"
        height="28" />
      <v-app-bar-nav-icon color="#AEB5B2" @click.stop="drawer = !drawer" />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    order="-1"
    v-model="drawer"
    temporary
    location="right"
    width=300
    >
    <v-card
      variant="flat"
      class="pa-6 text-center"
      color="#F5F7F7"
      >
      <v-img
        src="/img/drawer_icon.svg"
        alt="Drawer Icon"
        height=28 />
      <p class="py-3 mb-0 text-caption text-grey-darken-2 font-weight-bold">ゲストさん</p>
      <div class="d-flex justify-space-around py-3">
        <v-btn
          variant="flat"
          class="bg-white text-grey-darken-2 font-weight-bold"
          width="120"
          height="40"
          border
        >ログイン</v-btn>
        <v-btn
          variant="flat"
          color="#F06364"
          class="text-white font-weight-bold"
          width="120"
          height="40"
        >新規登録</v-btn>
      </div>
      <p class="mb-0 text-caption text-red-lighten-2 font-weight-bold">ケアマネージャーの方はこちら</p>
    </v-card>

    <v-list class="text-subtitle-2 py-0">
      <div v-for="(item, i) in items" :key="item.id">
        <v-list-item :value=item height="52">
          <v-list-item-title class="font-weight-bold text-subtitle-2" v-text="item.text"></v-list-item-title>
          <template v-slot:append>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
  const drawer = ref(false)
  const items = ([
    { id: 1, text: "閲覧履歴", icon: "mdi-chevron-right" },
    { id: 2, text: "ブックマーク", icon: "mdi-chevron-right" },
    { id: 1, text: "予約状況", icon: "mdi-chevron-right" }
  ])
</script>
