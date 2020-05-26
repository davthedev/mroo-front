<template>
  <q-page class="q-pa-lg">
    <h4>Settings</h4>

    <div class="row q-gutter-md">
      <q-btn class="col" color="accent" rounded unelevated label="Operation 1"/>
      <q-btn class="col" color="accent" rounded unelevated label="Operation 2"/>
      <q-btn class="col" color="negative" rounded unelevated label="Terminate this curriculum" @click="confirmTerminate"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageInstructorSettings',

  methods: {
    confirmTerminate: function(event) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to terminate this curriculum? This action is final and cannot be reverted',
        cancel: true,
        persistent: true,
        ok: {
          flat: true,
          label: "Confirm termination"
        },
        cancel: {
          flat: true,
          label: "Cancel"
        }
      }).onOk(() => {
        // console.log('>>>> Ok')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      });
    }
  }
}
</script>
