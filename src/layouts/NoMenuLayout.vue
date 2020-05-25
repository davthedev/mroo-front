<template>
  <q-layout view="hHh LpR fFf">

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
