<template>
  <q-page class="q-pa-lg">
    <p class="text-h6">Instructors</p>

    <div class="row items-start q-gutter-md">
      <PersonCard v-for="(instructor, idx) in instructors" :key="idx" :fullname="instructor.name" :jobtitle="instructor.title"/>
    </div>

    <p class="text-h6 q-mt-md">Students</p>

    <div class="row items-start q-gutter-md">
      <PersonCard v-for="(student, idx) in students" :key="idx" :fullname="student.name" :jobtitle="student.title"/>
    </div>

    <p class="text-h6 q-mt-md">Students in EOS jungle testnet</p>

    <div class="row items-start q-gutter-md">
      <PersonCard v-for="(student, idx) in studentsEos" :key="idx" :fullname="student.username" :jobtitle="student.grade"/>
    </div>

  </q-page>
</template>

<script>
  import PersonCard from 'components/PersonCard'
  import ApiService from '../services/ApiService'

export default {
  name: 'PageDashboard',

  components: {
    PersonCard
  },

  mounted(){
      ApiService.getTableStudents()
              .then((res) => {
                console.log(res);
                this.studentsEos = res.rows;
              })
              .catch(err => {
                console.log('err: ',err)
              });
  },
  data() {
    return {
      studentsEos: null,
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
  }
}
</script>

<style lang="sass">
</style>