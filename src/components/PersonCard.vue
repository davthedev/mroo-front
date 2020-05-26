<template>
  <q-card bordered class="my-card" flat>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{fullname}}</q-item-label>
        <q-item-label caption>
          {{jobtitle}}
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-card-section class="q-pt-none">&nbsp;<br/>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    fullname: {
      type: String,
      required: true,
    },
    jobtitle: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 360px
</style>