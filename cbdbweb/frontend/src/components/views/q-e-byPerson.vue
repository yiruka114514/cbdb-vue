<template>
  <div class="hello">
    <b-breadcrumb :items="items" class = "bread-crumb"></b-breadcrumb>
    <b-card header-tag="header" footer-tag="footer">
      <template v-slot:header>
        <h6 class="mb-0">{{$t('globalTerm.queryInput')}}</h6>
      </template>
      <b-card-text class = "card-item-title">{{$t('globalTerm.queryConditionOptions')}}</b-card-text>             
      <div class = "card-item-body">
        <b-row>
          <b-col><select-person></select-person></b-col>
          <b-col><select-place></select-place></b-col>
          <b-col><select-entry></select-entry></b-col>
        </b-row>
        <b-row>
          <b-col><select-office></select-office></b-col>
          <b-col><select-time></select-time></b-col>
          <b-col><select-relationship></select-relationship></b-col>
        </b-row>
      </div>
      <b-card-text class = "card-item-title">{{$t('globalTerm.userInput')}}</b-card-text>             
      <div class  = "card-item-body px-3">
        <b-row class = "px-3 mb-3">
          <b-col>
            <label for="person-en-name" class = "user-input-label">{{$t('entityQueryByPerson.personNameEn')}}:</label>
            <b-form-input id="person-en-name" v-model="formData.personEnName" placeholder="Enter your name"></b-form-input>
            </b-col>
          <b-col>
             <label for="person-ch-name" class = "user-input-label">{{$t('entityQueryByPerson.personNameCh')}}:</label>
             <b-form-input id="person-ch-name" v-model="formData.personChName" placeholder="Enter your name"></b-form-input>
           </b-col>
        </b-row>
        <b-row class = "px-3 mb-3">
          <b-col>
            <label for="start-time" class = "user-input-label">{{$t('globalTerm.startTime')}}:</label>
            <b-form-input id="start-time" v-model="formData.startTime" placeholder="" 
              :state="validation('startTime')"></b-form-input>
              <b-form-invalid-feedback :state="validation('startTime')">
                Invalid year 
              </b-form-invalid-feedback>
            </b-col>
          <b-col>
             <label for="end-time" class = "user-input-label">{{$t('globalTerm.endTime')}}:</label>
             <b-form-input id="end-time" v-model="formData.endTime" placeholder="" :state="validation('endTime')"></b-form-input>
              <b-form-invalid-feedback :state="validation('endTime')">
                Invalid year 
              </b-form-invalid-feedback>
           </b-col>
           <b-col>
            <b-form-checkbox id="checkbox-1" v-model= "formData.indexYear" name="checkbox-1"
              value="t" unchecked-value="f" style = "margin:38px 0;text-align:left">
                {{$t('globalTerm.isIndexYear')}}
            </b-form-checkbox>
           </b-col>
           <b-col></b-col>
        </b-row>
      </div>
      <b-card-text class = "card-item-title">{{$t('entityQueryByPerson.checkAndSearch')}}</b-card-text>
      <b-row class = "px-3 mb-3">
        <b-col cols="10">
          <b-alert show variant="warning" style = "width:66%" class = "px-3 py-2 mb-2">{{$t('entityQueryByPerson.checkRemind')}}</b-alert>
          <b-form-textarea
                id="advanced-search"
                v-model= "queryFormular"
                placeholder=""
                rows="3"
                max-rows="6"
                disabled
              ></b-form-textarea>
        </b-col>
        <b-col cols="2">
            <b-button href="#" variant="primary" style = "width:100%;margin-top:70px" :disabled="isInvalid">Go</b-button>
        </b-col>
      </b-row>    
      <!--
      <template v-slot:footer>
        <em>Footer Slot</em>
      </template>
      -->
    </b-card>
    <query-result></query-result>   
  </div>
</template>

<script>
import queryResult from '../utility/query-result.vue'
import selectPerson from '../utility/select-person.vue'
import selectEntry from '../utility/select-entry.vue'
import selectOffice from '../utility/select-office.vue'
import selectTime from '../utility/select-time.vue'
import selectPlace from '../utility/select-place.vue'
import selectRelationship from '../utility/select-relationship.vue'
export default {
  name: 'entityQueryByPerson',
  components:
  {
      queryResult,
      selectPerson,
      selectEntry,
      selectOffice,
      selectTime,
      selectPlace,
      selectRelationship
  },
  data () {
    return {
      /*表單數據放這裡*/
      formData:{
        personEnName:'',
        personChName:'',
        personEnPlace:'',
        personChPlace:'',
        startTime:'',
        endTime:'',
        indexYear:'f'
      },
      items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
      ]
    }
  },
  methods:{
    //判斷輸入欄是否為空
    isNull(idx){
      return this.formData[idx] == ''
    },
    validation(idx){
      //如果輸入為空，視為有效
      if(this.isNull(idx))return null;
      let year = /^\d{1,4}$/;
      //startTime 一欄只要輸入符合有且僅有1～4位數字的規則，視為有效
      if(idx == 'startTime')return year.test(this.formData[idx])?null:false;
      else if(idx == 'endTime'){
        //先判斷 endTime 一欄是否符合有且僅有1～4位數字的規則，如果不符合，視為無效
        if(year.test(this.formData[idx])){
          //如果 endTime 有輸入數字，同時 startTime 也有輸入數字，判斷 endTime 的數字是否大於 startTime 的數字
          //如果小於，則視為無效
          if(this.validation('startTime') == null && this.isNull('startTime')==false){
            let st = parseInt(this.formData['startTime'], 10);
            let et = parseInt(this.formData['endTime'], 10);
            return et>st?null:false;
          }
          else return null;
        }
        else return false;
      }
    }
  },
  computed:{
    queryFormular(){
      return `person-ch-name:'${this.formData.personChName}',person-en-name:'${this.formData.personEnName}',start-time:'${this.formData.startTime}',end-time:'${this.formData.endTime}'index-year:'${this.formData.indexYear}';`
    },
    isInvalid(){
      return this.validation('startTime')==false || this.validation('endTime')==false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-input-label{
 text-align:left;
 width:100%
}
.query-condition-button{
  width:224px;
  margin:6px 0;
}
.card-item-body{
  text-align:center;
  margin: 6px 0;
}
.bread-crumb{
  width:30%;
  background-color: transparent
}
.hello{
  margin-top:24px;
  text-align: left;
}
.card-item-title{
  font-weight: bold;
}
</style>
