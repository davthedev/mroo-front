<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square class="q-pa-lg">
          <q-card-section>
            <img src="statics/logo/mroologo.png"/>
            <p class="q-mt-md q-mb-none">Welcome! Please enter your credentials</p>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="text" label="Account Name" />
              <q-input square filled clearable v-model="password" type="password" label="Password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn to="/dashboard/main" unelevated outline rounded color="primary" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <!-- <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section> -->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>