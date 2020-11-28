<template>
  <div class="container-fluid">
    <Menuadmin />
     <div class="row" >
    <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
  <div class="card-header">
    ทำเนียบผู้ชนะเลิศ(แชมป์)
  </div>
  <div class="card-body" style="background-color:#fff;">
                
                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
                  <div class="col-sm-12" >
                  <table id="example1" class="table table-bordered table-striped dataTable dtr-inline " role="grid" aria-describedby="example1_info">
                  <thead>
                  <tr role="row" >
                  <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">รูปภาพ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">ชื่อภาษาอังกฤษ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">ชื่อภาษาไทย</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">แก้ไช</th>
                  
                  </tr>
                  </thead>
                 <tbody class="text-center" >
                  <tr v-for="(i,index) in datas"> 
                    <th style="vertical-align: middle;" scope="row">{{++index}}</th>
                    <th><img :src="i.img" width="180px" height="150" alt="" /> </th>
                    <td style="vertical-align: middle;">{{i.eng_name}}</td>
                    <td style="vertical-align: middle;">{{i.thai_name}}</td>
                    <td style="vertical-align: middle;">
                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal1" @click="setid(i.id),select()" data-whatever="@mdo">แก้ไข</button>

                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel1">เพิ่มประวัติ</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                         <div class="row">
                              <div class="col">
                                  
                              </div>
                              </div>
                            <div class="row">
                              <div class="col">
                                    <label for="message-text" class="col-form-label">เพิ่มปีที่ได้แชมป์</label>
                                    <textarea class="form-control" id="champsum" name="champsum" rows="3"></textarea>
                                </div>
                              </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" @click="update()" class="btn btn-primary">ยืนยัน</button>
                        </div>
                        </div>
                    </div>
                    </div></td>
                   
                  </tr>
                  </tbody>
                  <tfoot>

                  </tfoot>
                </table>
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
import Menuadmin from "@/components/Menuadmin";
import firebase from 'firebase'
export default {
  data() {
    return {
      datas: [],
      
    };
    },
  async mounted() {
    const axios = require("axios");
    await axios
    .get("http://localhost:80/select_Leaguechamp2.php")
      .then((response) => {
        response.data.forEach((element) => {
          // console.log(element.first_name);
          this.datas.push(element);
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
  $("#example1").DataTable({
    responsive: true,
    autoWidth: false,
  });
  },
  methods:{
    select(){
      
      // localStorage.setItem("id5", id);
      const axios = require("axios");
      var data1 = new FormData()
      data1.append("id", localStorage.getItem("id5"));
      axios
      .post("http://localhost:80/select_popup_adminLeaguechamp2.php", data1)
      .then((response) => {
         console.log(response);
        response.data.forEach((element) => {
          // this.datas1.push(element);
          console.log(element);
          document.getElementById("champsum").value = element.champsum;

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
    // console.log(localStorage.getItem("id5"));
    if (document.getElementById("champsum").value == "" ) 
    {
        Swal.fire({
          icon: "error",
          title: "กรุณา กรอกข้อมูล",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
    
      // alert(id);
      // localStorage.setItem("id6", id);
      const axios = require("axios").default;
      var data1 = new FormData()
        data1.append("id", localStorage.getItem("id5"));
        data1.append("champsum", document.querySelector("textarea[name=champsum]").value);
      axios
      .post("http://localhost:80/update_adminLeaguechamp2.php", data1)
      .then((response) => {
         console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      
    Swal.fire({
          icon: "success",
          title: "แก้ไขข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          setTimeout(function() {
            window.location.href = "/adminLeaguechamp2";
          }, 200);
        });
  }
  },
   setid(id){
      localStorage.setItem("id5",id);
    }
  },
  components: {
    Menuadmin,
  },
};

</script>

<style>

</style>