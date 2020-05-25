<template>
  <q-page class="q-pa-lg">

    <q-table
      title="Students"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageStudentsOverview',
  data () {
    return {
      columns: [
        {
          name: 'firstname',
          required: true,
          label: 'First name',
          align: 'left',
          field: 'firstname',
          sortable: true
        },
        { name: 'lastname', align: 'left', label: 'Last name', field: 'lastname', sortable: true },
        { name: 'grade', label: 'Grade', field: 'grade', sortable: true },
      ],
      data: [
        {
          firstname: 'John',
          lastname: 'Doey',
          grade: 15,
        },
        {
          firstname: 'Edward',
          lastname: 'Skinsy',
          grade: 20,
        },
        {
          firstname: 'Julian',
          lastname: 'Derek',
          grade: 17,
        },
        {
          firstname: 'Trevor',
          lastname: 'Nik',
          grade: 12,
        },
        {
          firstname: 'Dave',
          lastname: 'Koppf',
          grade: 8,
        },
        {
          firstname: 'Lorenz',
          lastname: 'Ipsomus',
          grade: 19,
        },
        {
          firstname: 'Frank',
          lastname: 'Herris',
          grade: 5,
        },
      ]
    }
  }
}

</script>
