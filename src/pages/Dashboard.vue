<template>
  <q-page class="q-pa-lg">
    <p class="text-h6">Instructors</p>

    <PersonCard v-for="(instructor, idx) in instructors" :key="idx" :fullname="instructor.name" :jobtitle="instructor.title"/>

    <p class="text-h6 q-mt-md">Students</p>

    <PersonCard v-for="(student, idx) in students" :key="idx" :fullname="student.name" :jobtitle="student.title"/>


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