<template>
  <q-layout view="lHh Lpr lFf" style="height: 100%">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Work Board </q-toolbar-title>

        <div>Using Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <div style="width: 100%; height: 100vh">
      <q-page-container style="height: 100%">
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {},
});
</script>
