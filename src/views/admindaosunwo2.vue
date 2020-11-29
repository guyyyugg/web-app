<template>
  <div class="container-fluid">
    <Menuadmin />
    <div class="row">
      <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
          <div class="card-header">
            ดาวซัลโว พรีเมียร์ลีก อังกฤษ 2020 - 2021
          </div>
          <div class="card-body" style="background-color:#fff;">
            <div class="row">
              <div class="col-6">
                เลือกลีค
                <select class="form-control">
                  <option disabled selected>พรีเมียร์ลีก อังกฤษ</option>
                </select>
              </div>
              <div class="col-6">
                เลือกปี ค.ศ.
                <select class="form-control">
                  <option>2020-2021</option>
                </select>
              </div>
            </div>
            <br />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@add">เพิ่มนักเตะ</button>
           

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">เพิ่มนักเตะ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">รูปนักเตะ</label>
                        รูปนักเตะ(1รูป)
                        <input type="file" id="files" name="files[]" multiple="multiple">
                    </div>
                    <div class="form-group">
                        <label for="message-text" name="name" class="col-form-label">ชื่อ</label>
                        <input class="form-control" id="name" name="name">
                    </div>
                     <div class="form-group">
                        <label for="message-text" name="smoson" class="col-form-label">สโมสร</label>
                        <input class="form-control" id="smoson" name="smoson">
                    </div>
                    <div class="form-group">
                        <label for="message-text" name="goal" class="col-form-label">จำนวนประตู</label>
                        <input class="form-control" id="goal" name="goal">
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" @click="add" class="btn btn-primary">บันทึก</button>
                </div>
                </div>
            </div>
            </div>
            
            <div class="row mt-4">
              <div class="col-12">
                <table class="table table-hover">
                  <thead style="background-color:#F2F3F5;">
                    <tr >
                      <th scope="col">อันดับ</th>
                      <th scope="col">นักเตะ</th>
                      <th scope="col">ชื่อ/สโมสร</th>
                      <th scope="col">จำนวนประตู</th>
                      <th scope="col">แก้ไข</th>
                      <th scope="col">ลบ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i, index) in datas">
                      <th>{{++index}}</th>
                      <td>
                        <img
                            :src="i.img"
                          alt="ซอง ฮึง-มิน"
                          width="60"
                          height="69"
                          class="archive-tablescore__img"
                        />
                      </td>
                      <td><b>{{i.name}}</b> / {{i.smoson}}</td>
                      <td>{{i.goal}}</td>
                      <td><button type="button" @click=" setid(i.id),select_update()" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal1" data-whatever="@add">แก้ไขข้อมูล</button>
                            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel1">แก้ไขนักเตะ</h5>
                                <button type="button  " class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">ชื่อ</label>
                                    <input class="form-control" name="name1" id="name1">
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">สโมสร</label>
                                    <input class="form-control" name="team1" id="team1">
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">จำนวนประตู</label>
                                    <input class="form-control" name="goal1" id="goal1">
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" @click="update()" class="btn btn-primary">แก้ไขเสร็จสิ้น</button>
                            </div>
                            </div>
                        </div>
                        </div></td>
                        <td>
                        <button type="button"  class="btn btn-danger" data-toggle="modal"  @click="setid(i.id)" data-target="#exampleModal2" data-whatever="@add">ลบ</button>
                            <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel1">คุณแน่ใจที่จะลบ?</h5>
                                <button type="button  " class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" @click="delete1()" class="btn btn-primary">ลบเสร็จสิ้น</button>
                            </div>
                            </div>
                        </div>
                        </div></td>
                                </tr>
                            </tbody>
                            </table>
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
import Menuadmin from "@/components/Menuadmin";
import firebase from 'firebase'
export default {
  data() {
    return {
      datas: [],
      insert: [],
    };
  },
  async mounted() {
      const axios = require("axios");
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
    await axios
      .get("http://localhost:80/select_admindaosunwo2.php")
      .then((response) => {
        response.data.forEach((element) => {  
          this.datas.push(element);
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(this.datas[0]);
  },
  
  components: {
    Menuadmin,
  },
  methods:{
   async add(){
      if (
        document.getElementById("name").value == "" ||
        document.getElementById("smoson").value == "" ||
        document.getElementById("goal").value == "" 
      ) {
        Swal.fire({
          icon: "error",
          title: "กรุณา กรอกข้อมูล",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        var storageRef = firebase.storage().ref("img");
        var file = document.getElementById("files").files[0];
        var thisRef = storageRef.child(file.name);
        await thisRef.put(file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });
        const storage = firebase.storage();
        let linkimg;
        let self = this;
        await storage
          .ref("img")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            self.linkimg = url;
            self.insert.push(url);
              const axios = require("axios").default
              var data = new FormData();
              data.append("img", self.insert[0]);
              data.append("name", document.querySelector("input[name=name]").value);
              data.append("smoson", document.querySelector("input[name=smoson]").value);
              data.append("goal", document.querySelector("input[name=goal]").value);
              data.forEach((element) => {
                console.log(element);
              });

              axios.post("http://localhost:80/insert_admindaosunwo2.php", data).then((response) => {
                console.log(response.data);
              });
              Swal.fire({
                  icon: "success",
                  title: "เพิ่มนักเตะสำเร็จ",
                  showConfirmButton: false,
                  timer: 3000,
                }).then(() => {
                  setTimeout(function() {
                    window.location.href = "/admindaosunwo2";
                  }, 200);
               });
      }); 
    }
    },
    select_update(){
      // console.log(localStorage.getItem("id2"));
      // localStorage.setItem("id2", id);
      const axios = require("axios");
      var data1 = new FormData()
      data1.append("id", localStorage.getItem("id2"));
      axios
      .post("http://localhost:80/select_update_admindaosunwo2.php", data1)
      .then((response) => {
         console.log(response);
        response.data.forEach((element) => {
          // this.datas1.push(element);
          console.log(element);
          document.getElementById("name1").value = element.name;
          document.getElementById("team1").value = element.smoson;
          document.getElementById("goal1").value = element.goal;
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    //   this.datas1.forEach((element) =>{
    //     console.log(element);
    // });
  },
  update(){
    if (
        document.getElementById("name1").value == "" ||
        document.getElementById("team1").value == "" ||
        document.getElementById("goal1").value == "" 
      ) {
        Swal.fire({
          icon: "error",
          title: "กรุณา กรอกข้อมูล",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
    
      // alert(id);
      // localStorage.setItem("id3", id);
      const axios = require("axios").default;
      var data1 = new FormData()
        data1.append("id", localStorage.getItem("id2"));
        data1.append("name", document.querySelector("input[name=name1]").value);
        data1.append("smoson",document.querySelector("input[name=team1]").value); 
        data1.append("goal",document.querySelector("input[name=goal1]").value);
      axios
      .post("http://localhost:80/update_admindaosunwo2.php", data1)
      .then((response) => {
         console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    //   this.datas1.forEach((element) =>{
    //     console.log(element);
    // });
              Swal.fire({
                  icon: "success",
                  title: "แก้ไขข้อมูลสำเร็จ",
                  showConfirmButton: false,
                  timer: 3000,
                }).then(() => {
                  setTimeout(function() {
                    window.location.href = "/admindaosunwo2";
                  }, 200);
               });
  }
  },
  setid(id){
      localStorage.setItem("id2",id);
    },
    delete1() {
      
      const axios = require("axios");
      var data = new FormData();
      // localStorage.setItem("delete1",id);
      data.append("id",localStorage.getItem("id2"));
      axios.post("http://localhost:80/delete_admindaosunwo2.php", data)
          .then((response) => {
            console.log(response.data);
            console.log(count);
          });
          Swal.fire({
          icon: "success",
          title: "ลบสำเร็จ",
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          setTimeout(function() {
            window.location.href = "/admindaosunwo2";
          }, 200);
        });
    }
  }
};


</script>
<style></style>
