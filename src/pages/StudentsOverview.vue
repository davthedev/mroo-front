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
        <q-btn color="accent" rounded unelevated icon="person_add" label="Enroll new student" @click="promptAddData"/>
      </div>
      <q-table
        dense
        title="Students"
        :data="data"
        :columns="columns"
        row-key="name"
        :pagination="initialPagination"
      />


    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageStudentsOverview',
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
        { name: 'grade', label: 'Grade', field: 'grade', sortable: true },
      ],
      initialPagination: {
        rowsPerPage: 10
      },
      data: [
        {
          fullname: 'John',
          grade: 15,
        },
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: async function(event) {
      try {

        let new_students = await this.$apiservice.getTableStudents() 
        let clean_students = this.$datasanitizer.cleanStudents(new_students);

        this.data = clean_students.map(data => {
          return {
            fullname: data.username,
            grade: data.grade
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
        title: 'Enroll new student',
        message: 'Enter new student account name: (min. 8 characters)',
        prompt: {
          model: '',
          isValid: val => val.length > 8,
          type: 'text'
        },
        cancel: true,
        persistent: true,
        ok: {
          flat: true,
          label: "Enroll now"
        },
        cancel: {
          flat: true,
          label: "Cancel"
        }
      }).onOk(data => {
        this.addData(data);
      }).onCancel(() => {
      });
    },

    addData: async function(dataStudentAccount) {
      this.fetching = true;
      try {
        await this.$apiservice.upsertStudent({"user":dataStudentAccount, "grade":1});

        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `New student sucessfully enrolled`
        })

        this.fetchData();
      }
      catch (err) {

        this.$q.notify({
          type: 'negative',
          position: 'top',
          message: `Error while attempting to enroll new student. Pleas check and try again.`
        })

        this.fetching = false;
      }
    }
  }
}

</script>

