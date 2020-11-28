<template>
  <div class="container-fluid" >
   <Menuadmin />
    <div class="row" >
    <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
  <div class="card-header">
    เพิ่มนักฟุตบอล
  </div>
  <div class="card-body" style="background-color:#fff;">
  <div class="card">
  <div class="card-body">
    <div class="row">
        <div class="col-3">
        </div>
        <div class="col-3 text-right">
            <select class="form-control">
                <option>ตำแหน่ง</option>
                <option>ST</option>
                <option>DF</option>
                <option>MF</option>
                <option>GK</option>
            </select>
        </div>
        <div class="col-3 text-left ">
            <select class="form-control">
                <option>สโมสร</option>
                <option>Liverpool Football Club</option>
                <option>Manchester United Football Club</option>
                <option>Chelsea Football Club</option>
                <option>Manchester City Football Club</option>
                <option>Tottenham Hotspur F.C.</option>
            </select>
        </div>
        <div class="col-3">
        </div>
        <div class="col">
        </div>
        <div class="col-3 text-right mt-5">
            <input type="text" class="form-control" id="" placeholder="firstname">
        </div>
        <div class="col-3 text-left mt-5">
            <input type="text" class="form-control" id="" placeholder="lastname">
        </div>
        <div class="col-3">
        </div>
        <div class="col-3">
        </div>
        <div class="col-3 text-right mt-5">
            <input type="text" class="form-control" id="" placeholder="ชื่อไทย">
        </div>
        <div class="col-3 text-left mt-5">
            <textarea class="form-control" id="" placeholder="ประวัติ" rows="3"></textarea>
        </div>
        <div class="col-3">
        </div>
        <div class="col-3">
        </div>
        <div class="col-6 text-left mt-5">
             รูปนักเตะ(ขั้นต่ำ4รูป)
            <input type="file" name="file[]" id="file" multiple>
        </div>
       
    </div>
    <div class="row mt-5">
        <div class="col"> 
            <button type="button" class="btn btn-primary">ยืนยัน</button>
        </div>
    </div>
  </div>
</div>
    
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
    </div>
    </div>
  </div>
</template>

<script>
import Menuadmin from '@/components/Menuadmin'
import firebase from 'firebase'
export default {
  mounted() {
      firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      Swal.fire({
              icon: 'error',
              title: 'กรุณา LOGIN',
              showConfirmButton: false,
              timer: 3000
              })
      this.$router.replace("/login");
    } else {
      
      
    }
  });

  },
    components:{
  Menuadmin
}
};

</script>

<style></style>
