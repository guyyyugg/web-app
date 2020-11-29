<template>
  <div class="container-fluid">
    <Menuadmin />
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-2 mx-auto"></div>
        </div>
        <br />
        <div class="row">
          <div class="col"></div>
        </div>

        <br />
        <div class="card text-center" style="background-color:#F2F3F5;">
          <div class="card-header">
            แก้ไขรูปภาพ
          </div>
          <div class="card-body" style="background-color:#fff;">
            <label for="exampleFormControlFile1">แก้ไขรูป (ใส่ 4 รูป)</label
            ><br />
            <input type="file" id="files" name="files[]" multiple /> <br />
            <br />
            <button type="button" @click="open" class="btn btn-primary">
              อัพเดท
            </button>
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
import firebase from "firebase";
export default {
  data() {
    return {
      serial: "",
      datas: [],
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
},

  methods: {
    async open() {
      const axios = require("axios").default;
      var storageRef = firebase.storage().ref("img");
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
      var file1 = document.getElementById("files").files[1];
      var file2 = document.getElementById("files").files[2];
      var file3 = document.getElementById("files").files[3];
      //       console.log(file.name);
      //       console.log(file1.name);
      //       console.log(file2.name);
      //       // console.log(file2.name);
      //       //dynamically s1et reference to the file name
      var thisRef = storageRef.child(file.name);
      //       //put request upload file to firebase storage
      await thisRef.put(file).then((snapshot) => {
        //         // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      thisRef = storageRef.child(file1.name);
      //       //put request upload file to firebase storage
      await thisRef.put(file1).then((snapshot) => {
        //         // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      thisRef = storageRef.child(file2.name);
      //       //put request upload file to firebase storage
      await thisRef.put(file2).then((snapshot) => {
        //         // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      thisRef = storageRef.child(file3.name);
      //       //put request upload file to firebase storage
      await thisRef.put(file3).then((snapshot) => {
        //         // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      const storage = firebase.storage();
      // let linkimg = "";
      // Get metadata properties
      let linkimg;
      let self = this;
      await storage
        .ref("img")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          // console.log(typeof url);
          // console.log(url);
          self.linkimg = url;
          self.datas.push(url);

          storage
            .ref("img")
            .child(file1.name)
            .getDownloadURL()
            .then((url) => {
              // console.log(typeof url);
              // console.log(url);
              self.linkimg = url;
              self.datas.push(url);

              storage
                .ref("img")
                .child(file2.name)
                .getDownloadURL()
                .then((url) => {
                  // console.log(typeof url);
                  // console.log(url);
                  self.linkimg = url;
                  self.datas.push(url);

                  storage
                    .ref("img")
                    .child(file3.name)
                    .getDownloadURL()
                    .then((url) => {
                      // console.log(typeof url);
                      // console.log(url);
                      self.linkimg = url;
                      self.datas.push(url);

                      var data = new FormData();
                      var count = 0;
                      console.log(localStorage.getItem("updatepic"));
                      data.append(
                        "updatepicc",
                        localStorage.getItem("updatepic")
                      );
                      data.append("Pic1", self.datas[0]);
                      data.append("Pic2", self.datas[1]);
                      data.append("Pic3", self.datas[2]);
                      data.append("Pic4", self.datas[3]);
                      console.log(data);
                      if (1) {
                        data.forEach((element) => {
                          console.log(element);
                          console.log(count);
                        });
                      }
                      axios
                        .post("http://localhost:80/updatepic_adminhome11.php", data)
                        .then((response) => {
                          console.log(response.data);
                          console.log(count);
                        });
                        Swal.fire({
                          icon: "success",
                          title: "แก้ไขรูปภาพสำเร็จ",
                          showConfirmButton: false,
                          timer: 3000,
                        }).then(() => {
                          setTimeout(function() {
                            window.location.href = "/adminhome11";
                          }, 200);
                        });
                    });
                });
            });
        });
    },
  },
  components: { Menuadmin },
};
</script>

<style></style>
