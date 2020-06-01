<template>
  <q-page class="q-pa-lg">

    <div v-if="fetching" class="absolute-center" style="text-align: center">
      <q-spinner-ball
        color="primary"
        size="4em"
      />
    </div>

    <template v-else>
      <h4 class="q-mt-none">Main instructor operations</h4>

      <div class="row q-gutter-md">

        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6">Terminate curriculum</div>
            <p>This action formally establishes that the curriculum is over. All student rankings are taken into account to assign them to promised work contracts, according to the grades they obtained.</p>
          </q-card-section>

          <q-separator />

          <q-btn color="negative" class="q-ma-md" rounded unelevated label="Terminate this curriculum" @click="confirmTerminate"/>
        </q-card>



      </div>

      <template v-if="showDevFunctions">
        <h4>Dev operations</h4>




        <p class="text-negative">DEVELOPMENT USE ONLY</p>
        <p>These are intended for development needs, and are outside the scope of intended smart contract lifecycle. Do not consider this part as representing the contract agreement. Likewise, relevant functions of the smart contract should be disabled for a production deployment.</p>


        <p>Set grade</p>

        <div class="row q-gutter-md">
          <q-input v-model="setGradeText" label="Student" dense/>
          <q-input v-model.number="setGradeValue" type="number" label="Grade" dense/>
        </div>

        <div class="row q-gutter-md q-mt-sm q-mb-lg">
          <q-btn color="accent" rounded unelevated label="Assign grade" @click="doSetGrade"/>
        </div>

        <q-separator />

        <p class="q-mt-md">Remove persons from class</p>

        <div class="row q-gutter-md">
          <q-input v-model="removePersonText" label="Account" dense/>
        </div>

        <div class="row q-gutter-md q-mt-sm">
          <q-btn color="accent" rounded unelevated label="Remove student" @click="doRemoveStudent"/>
          <q-btn color="accent" rounded unelevated label="Remove instructor" @click="doRemoveInstructor"/>
        </div>

      </template>

    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageInstructorSettings',

  data() {
    return {
      fetching: false,

      removePersonText: '',
      setGradeText: '',
      setGradeValue: '',

      showDevFunctions: true,
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
    },


    doRemoveStudent: async function() {
      let personAccount = this.removePersonText

      this.fetching = true
      try {
        await this.$apiservice.deleteStudent({"user":personAccount});
        this.fetching = false;
        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `Done`
        })
      }
      catch (err) {
        this.fetching = false;

        this.$q.notify({
          type: 'negative',
          position: 'top',
          message: `Error during operation`
        })
      }
    },

    doRemoveInstructor: async function() {
      let personAccount = this.removePersonText

      this.fetching = true
      try {
        await this.$apiservice.deleteInstructor({"user":personAccount});
        this.fetching = false;
        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `Done`
        })
      }
      catch (err) {
        this.fetching = false;

        this.$q.notify({
          type: 'negative',
          position: 'top',
          message: `Error during operation`
        })
      }
    },

    doSetGrade: async function() {
      let gradeStudent = this.setGradeText
      let gradeValue = this.setGradeValue

      this.fetching = true
      try {
        await this.$apiservice.upsertStudent({"user":gradeStudent, "grade":gradeValue});
        this.fetching = false;
        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `Done`
        })
      }
      catch (err) {
        this.fetching = false;

        this.$q.notify({
          type: 'negative',
          position: 'top',
          message: `Error during operation`
        })
      }
    }
  }
}
</script>
