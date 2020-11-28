<template>
  <div class="container-fluid " >
  
  <div class="col-12" ></div>
  <br><br>
  <div class="row" >

  <div class="col-12 " >
    <div class="card mx-auto" style="width: 18rem; box-shadow: 0 30px 50px rgba(0,0,0,.4); " >
  <div class="card-body " >
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
           <i class="fas fa-sign-in-alt">   login</i> 
        </div>
        <br>

        <!-- Login Form -->
        <form class="" action="#!" @submit="login">
          <input type="email" class="form-control" id="email" name="login" v-model="email" placeholder="email"> <br><br>
          <input type="password"  class="form-control" id="password"  name="password" v-model="password" placeholder="password">
          <div class="col-12"></div><br>
          <button type="submit" class="btn btn-primary btn-sm">login</button>
        </form>

        <!-- Remind Passowrd -->
        
        
  </div>
  <div class="card-footer text-muted">
          <a class="underlineHover" href="#">forgot password?</a>
        </div>
  </div>
  </div>
</div>
    
    

  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data: function() {
    return { email: "", password: "" };
  },
  methods:{
    login(e){
       firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            var user1 = firebase.auth().currentUser;
            console.log(user1);
            if (user1 != null) {
              Swal.fire({
              icon: 'success',
              title: 'LOGIN สำเร็จ',
              showConfirmButton: false,
              timer: 3000
              })
              this.$router.replace("/adminhome11");
            }
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'LOGIN ไม่สำเร็จ ',
              showConfirmButton: false,
              timer: 3000
              })
          }
        );
      e.preventDefault();
    }
  }

}
</script>

<style scope>
body{
  background-color: #3b5998;
}
</style>