<template>
  <div class="page-wrapper">
    <header>Broccoli & Co</header>
    <section>
      <div class="content">
        <h2>A better way<br/>to enjoy every day.</h2>
        <p>Be the first to know when we launch.</p>
        <div class="btn-box"><button class="btn" @click="clickRequest">Request an invite</button></div>
      </div>
    </section>
    <footer>@Broccoli & Co. All rights reserved.</footer>
    <div class="pop-box" v-show="showPop && !showResult">
      <form action="">
      <div class="pop-box-content">
        <div class="pop-title">Request an invite</div>
        <div class="input-box"><input type="text" class="input_text" placeholder="Full name" v-model="sdata.name"></div>
        <div class="input-box"><input type="email" class="input_text" placeholder="Email" v-model="sdata.email"></div>
        <div class="input-box"><input type="email" class="input_text" placeholder="Confirm email" v-model="sdata.email2"></div>
        <div class="pop-btn-box"><button type="button" class="btn" @click="send">{{btnTxt}}</button></div>
        <div class="error-msg" v-show="errMsg">{{errMsg}}</div>
      </div>
      </form>
    </div>
    <div class="pop-box" v-show="showPop && showResult">
      <div class="pop-box-content">
        <div class="pop-title">All done!</div>
        <div class="">You will be one of the first to experience Broccoli & Co when we launch.</div>
        <div class="pop-btn-box"><button type="button" class="btn" @click="clickOk">OK</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import  util from '../util.js'
export default {
  name: 'test',
  props: {
    msg: String
  },
  data:function(){
    return{
      showPop:false,
      showResult:false,
      sending:false,
      errMsg:'',
      sdata:{
        name:'',
        email:'',
        email2:''
      }
    }
  },
  computed:{
    btnTxt(){
      return this.sending?'Sending, please wait...':'Send'
    }
  },
  methods:{
    send(){
      let error=''
      if(this.sdata.name===''){
        error='"name" is required!';
      }
      else if(this.sdata.email===''){
        error='"email" is required!'
      }
      else if(this.sdata.email!==this.sdata.email2){
        error='please confirm "email"'
      }
      else if(!util.isEmail(this.sdata.email)){
        error='email format is not correct'
      }
      if(error){
        alert(error);
        return;
      }
      this.doFetch();
    },
    clickRequest(){
      this.showPop=true;
    },
    resetPage(){
      this.sdata.name='';
      this.sdata.email='';
      this.sdata.email2='';
      this.showPop=false;
      this.showResult=false;
    },
    clickOk(){
      this.resetPage();
      
    },
    doFetch(){
      let me=this;

      let param={
          ...this.sdata  
      }
      let url = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth'; 
      this.sending=true;
      // var loadingEl=this.$loading();
      axios({
          method: 'post',
          url:url,
          data:param
      }).then(function(response){
          // loadingEl.close();
          let data=response.data;
          me.sending=false;
          if(data==='Registered'){
            me.showResult=true;
          }
          else{
            // me.errMsg=data.errorMessage;
          }
      })
      .catch(function (error) {
          // loadingEl.close();
          me.sending=false;
          me.errMsg=error.response.data.errorMessage;
          // me.showToast({'text':'系统开小差了！'});
      });
    }
  }
}
</script>

<style lang="scss">
  @import 'test.scss';
</style>
