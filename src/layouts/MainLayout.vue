<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          MROO
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>


        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Other link</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label
          header
          class="text-grey-8"
        >
          Dev Links (remove before publishing)
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Quasar Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev/vue-components'
        },
        {
          title: 'Quasar UI elements',
          caption: 'quasar.dev',
          icon: 'widgets',
          link: 'https://quasar.dev/vue-components'
        },
        {
          title: 'Material Icons',
          caption: 'material.io',
          icon: 'collections',
          link: 'https://material.io/resources/icons/'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
