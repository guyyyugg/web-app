<template>
  <div class="container-fluid">
    <Menu2 />
     <div class="row" >
    <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
  <div class="card-header">
    <h3>ทำเนียบผู้ชนะเลิศ(แชมป์)</h3>
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
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">แชมป์ทั้งหมด</th>
                  </tr>
                  </thead>
                 <tbody class="text-center" >
                  <tr v-for="(i,index) in datas"> 
                    <th style="vertical-align: middle;" scope="row">{{++index}}</th>
                    <th><img :src="i.img" width="180px" height="150" alt="" /> </th>
                    <td style="vertical-align: middle;">{{i.eng_name}}</td>
                    <td style="vertical-align: middle;">{{i.thai_name}}</td>
                    <td style="vertical-align: middle;">
                    <button type="button" class="btn btn-primary" data-toggle="modal" @click="setid(i.id),select()" data-target="#exampleModalCenter">ดูแชมป์ทั้งหมด</button>
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header" v-for="j in datas12" style="background-color: #3b5998;">
                              <h5 class="modal-title" style="color: white" >แชมป์ของสโมสร {{j.thai_name}} </h5>
                              <h4 id="thainame"> </h4>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body" >
                              <div class="row">
                              <div class="col" >
                                  <textarea name="champsum" id="champsum" cols="50" rows="5"> </textarea>
                              </div>
                              </div>

                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
import Menu2 from "@/components/Menu2";
import firebase from 'firebase'
export default {
  data() {
    return {
      datas: [],
      datas12: [],
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
    
  $("#example1").DataTable({
    responsive: true,
    autoWidth: false,
  });
  },
  methods:{
    select(){
      this.datas12= []
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
         this.datas12.push(element);

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
   setid(id){
      localStorage.setItem("id5",id);
    }
  },
  components: {
    Menu2,
  },
};

</script>

<style >
body{
  background-color: #3b5998;
}
</style>