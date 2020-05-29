<template>
  <q-page class="q-pa-lg">
    <p class="text-h6">Instructors</p>


    <q-spinner-ball
      v-if="fetching"
      color="primary"
      size="4em"
    />

    <div v-else class="row items-start q-gutter-md">
      <PersonCard v-for="(instructor, idx) in instructors" :key="idx" :fullname="instructor.name" :jobtitle="instructor.title"/>
    </div>

    <p class="text-h6 q-mt-md">Students</p>


    <q-spinner-ball
      v-if="fetching"
      color="primary"
      size="4em"
    />

    <div v-else class="row items-start q-gutter-md">
      <PersonCard v-for="(student, idx) in students" :key="idx" :fullname="student.name" :jobtitle="student.title"/>
    </div>


  </q-page>
</template>

<script>
import PersonCard from 'components/PersonCard'

export default {
  name: 'PageDashboard',

  components: {
    PersonCard
  },

  data() {
    return {

      fetching: true,

      instructors: [
        {
          name: 'John',
          title: 'Maths instructor'
        },
        {
          name: 'Jane',
          title: 'Physics instructor'
        },
        {
          name: 'Tony',
          title: 'Coding instructor'
        },
      ],

      students: [
        {
          name: 'Matt',
          title: 'Student'
        },
        {
          name: 'Josh',
          title: 'Physics student'
        },
        {
          name: 'Frank',
          title: 'Software engineering student'
        },
        {
          name: 'Heidi',
          title: 'Software engineering student'
        },
        {
          name: 'Stefan',
          title: 'Business student'
        },
        {
          name: 'Dave',
          title: 'Mechanical engineering student'
        },
        {
          name: 'Paul',
          title: 'Software engineering student'
        },
      ],



    }
  },

  created() {
    this.fetchData()
  },
  methods: {
    fetchData: async function(event) {
      try {

        let new_instr = await this.$apiservice.getTableProfessors()
        let new_students = await this.$apiservice.getTableStudents() 

        let clean_instr = this.$datasanitizer.cleanInstructors(new_instr);
        let clean_students = this.$datasanitizer.cleanStudents(new_students);

        // Format data
        this.instructors = clean_instr.map(data => {
          return {
            name: data.username,
            title: data.subject,
          }
        });

        this.students = clean_students.map(data => {
          return {
            name: data.username,
            title: `Grade: ${data.grade}`
          }
        });

        this.fetching = false

        
      }
      catch (err) {
        // Show error
      }
    }
  }
}
</script>

<style lang="sass">
</style>