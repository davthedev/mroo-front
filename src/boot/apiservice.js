import Vue from 'vue'
import ApiService from 'src/services/ApiService'
import DataSanitizer from 'src/services/DataSanitizer'

Vue.prototype.$apiservice = ApiService;
Vue.prototype.$datasanitizer = DataSanitizer;
