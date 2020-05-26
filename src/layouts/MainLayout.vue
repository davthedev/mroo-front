<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
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


          <q-btn to="/" flat rounded dense icon="lock_open" label="Logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-dark"
    >
      <q-list>


        <q-item to="/dashboard/main" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/dashboard/students" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Students</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/dashboard/instructors" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Instructors</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-expansion-item
          label="Dev Links" dense
        >
          <q-item-label
            header
            class="text-grey-8"
          >
            (remove before publishing)
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />


        </q-expansion-item>
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
          icon: 'description',
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
