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

        <img src="statics/logo/mroologo.png" class="q-ml-md"/>
        <q-toolbar-title>
        </q-toolbar-title>


          <q-btn to="/" flat rounded dense icon="lock_open" label="Logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-dark"
    >

      <p class="text-h6 q-pa-md q-mb-none">University Name</p>

      <q-linear-progress :value="0.3" color="white" class="q-mx-md q-mb-lg" style="width: 90%"/>


      <q-list class="q-mb-lg">

        <q-item dense>
          <q-item-section side>
            <q-badge class="stat-badge" color="primary" text-color="white" label="11" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Students</q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section side>
            <q-badge class="stat-badge" color="primary" text-color="white" label="3" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Instructors</q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section side>
            <q-badge class="stat-badge" color="primary" text-color="white" label="5" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Evaluations</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>


      <q-separator spaced/>

      <q-item dense>
          <q-item-section avatar>
            <q-item-label class="text-accent">Main Instructor Menu</q-item-label>
          </q-item-section>
      </q-item>

      <q-list>


        <q-item to="/dashboard/main" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="group_work" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Classroom</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/dashboard/students" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="group" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Students</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/dashboard/instructors" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="people_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Instructors</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/dashboard/evaluations" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="bar_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Evaluations</q-item-label>
          </q-item-section>
        </q-item>


        <q-item to="/dashboard/hiringdata" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="work" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Hiring</q-item-label>
          </q-item-section>
        </q-item>


        <q-item to="/dashboard/instructorsettings" clickable tag="a">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>

        <template v-if="showDevLinks">
          <q-separator spaced/>

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
        </template>
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
      showDevLinks: false,
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

<style lang="sass">

.stat-badge
  padding: 4px
  min-width: 30px
  text-align: center
  border-radius: 10px
  display: inline

.flex.stat-badge
  display: inline

</style>