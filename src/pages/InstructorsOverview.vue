<template>
  <q-page class="q-pa-lg">

    <div v-if="fetching" class="absolute-center" style="text-align: center">
      <q-spinner-ball
        color="primary"
        size="4em"
      />
    </div>



    <template v-else>


      <div class="row q-gutter-md q-mb-md">
        <q-btn color="accent" rounded unelevated icon="person_add" label="Enroll new instructor" @click="promptAddData"/>
      </div>
      <q-table
        title="Instructor"
        :data="data"
        :columns="columns"
        row-key="name"
      />


    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageInstructorsOverview',
  data () {
    return {
      fetching: true,
      columns: [
        {
          name: 'fullname',
          required: true,
          label: 'Name',
          align: 'left',
          field: 'fullname',
          sortable: true
        },
        { name: 'subject', label: 'Subject', field: 'subject', sortable: true },
      ],
      data: [
        {
          fullname: 'John',
          subject: 'Math',
        },
      ],

      enroll_name: '',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: async function(event) {
      try {

        let new_instr = await this.$apiservice.getTableProfessors()
        let clean_instr = this.$datasanitizer.cleanInstructors(new_instr);

        //Format data
        this.data = clean_instr.map(data => {
          return {
            fullname: data.username,
            subject: data.subject,
          }
        });

        this.fetching = false

      }
      catch (err) {
        // Show error
      }
    },


    promptAddData: function(event) {
      this.$q.dialog({
        title: 'Enroll new instructor',
        message: 'Enter new instructor account name: (min. 8 characters)',
        prompt: {
          model: '',
          isValid: val => val.length > 8,
          type: 'text'
        },
        cancel: true,
        persistent: true,
        ok: {
          flat: true,
          label: "Continue"
        },
        cancel: {
          flat: true,
          label: "Cancel"
        }
      }).onOk(data => {
        this.enroll_name = data;
        this.promptAddDataTwo();
      }).onCancel(() => {
      });
    },

    promptAddDataTwo: function(event) {
      this.$q.dialog({
        title: 'Enroll new instructor',
        message: 'Enter instructor\'s main subject: (minimum 3 characters)',
        prompt: {
          model: '',
          isValid: val => val.length > 3,
          type: 'text'
        },
        cancel: true,
        persistent: true,
        ok: {
          flat: true,
          label: "Finish"
        },
        cancel: {
          flat: true,
          label: "Cancel"
        }
      }).onOk(data => {
        this.addData(this.enroll_name, data);
      }).onCancel(() => {
      });
    },



    addData: async function(dataInstructorAccount, subject) {
      this.fetching = true;
      try {
        await this.$apiservice.upsertProf({"user":dataInstructorAccount, "subject":subject});

        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `New instructor sucessfully enrolled`
        })

        this.fetchData();
      }
      catch (err) {

        this.$q.notify({
          type: 'negative',
          position: 'top',
          message: `Error while attempting to enroll new instructor. Pleas check and try again.`
        })

        this.fetching = false;
      }
    }
  }
}

</script>
