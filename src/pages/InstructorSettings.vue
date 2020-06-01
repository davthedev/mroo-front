<template>
  <q-page class="q-pa-lg">

    <div v-if="fetching" class="absolute-center" style="text-align: center">
      <q-spinner-ball
        color="primary"
        size="4em"
      />
    </div>

    <template v-else>
      <h4>Settings</h4>

      <div class="row q-gutter-md">
        <q-btn class="col" color="accent" rounded unelevated label="Operation 1"/>
        <q-btn class="col" color="accent" rounded unelevated label="Operation 2"/>
        <q-btn class="col" color="negative" rounded unelevated label="Terminate this curriculum" @click="confirmTerminate"/>
      </div>

    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageInstructorSettings',

  data() {
    return {
      fetching: false
    }
  },

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
        this.actionTerminateCurriculum();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      });
    },

    actionTerminateCurriculum: async function() {
      this.fetching = true;


      try {
        await this.$apiservice.closeUniversity();

        this.fetching = false;

        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `Action complete`
        })
      }
      catch (err) {
        this.fetching = false;

        this.$q.notify({
          type: 'negative',
          position: 'top',
          message: `Error while running this action`
        })
      }
    }
  }
}
</script>
