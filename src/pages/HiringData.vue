<template>
  <q-page class="q-pa-lg">

    <div v-if="fetching" class="absolute-center" style="text-align: center">
      <q-spinner-ball
        color="primary"
        size="4em"
      />
    </div>



    <template v-else>


      <h5 class="q-mt-none">Hiring promises / job contracts</h5>

      <div class="row q-gutter-md">

        <q-card flat class="my-card" v-for="(job, idx) in hiringData" :key="idx">
          <q-card-section>
            <div class="text-h6">Job contract</div>
          </q-card-section>
          <q-separator />
          <q-card-section horizontal>
            <q-card-section class="q-pr-none">
              <q-icon name="person" size="sm"/>
            </q-card-section>
            <q-card-section>
            <p class="text-subtitle2">Employee</p>
            <p>{{job.employee}}<br />{{job.jobtitle}}</p>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section horizontal>
            <q-card-section class="q-pr-none">
              <q-icon name="domain" size="sm"/>
            </q-card-section>
            <q-card-section>
            <p class="text-subtitle2">Company</p>
            <p><strong>{{job.company}}</strong><br />{{job.address}}</p>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section horizontal>
            <q-card-section class="q-pr-none">
              <q-icon name="assignment_turned_in" size="sm"/>
            </q-card-section>
            <q-card-section>
              <p class="text-subtitle2">Terms</p>
              <p>Start date: {{job.startdate}}<br />Compensation: {{job.salary}} CHF<br />Trial period: {{job.trialperiod}} months</p>
            </q-card-section>
          </q-card-section>
        </q-card>



      </div>



    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageHiringData',
  data () {
    return {
      fetching: true,
      hiringData: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: async function(event) {
      try {

        let new_workdata = await this.$apiservice.getJobDetails()
        let clean_workdata = this.$datasanitizer.cleanJobs(new_workdata);

        console.log(clean_workdata)

        this.hiringData = clean_workdata

        this.fetching = false

      }
      catch (err) {
        // Show error
      }
    },


    
  }
}

</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 480px
</style>