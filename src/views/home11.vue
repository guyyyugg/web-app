<template>
  <div class="container-fluid" >
   <Menu2 />
    <div class="row" >
    <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
  <div class="card-header">
    <h3>ประวัตินักฟุตบอล</h3>
  </div>
  <div class="card-body" style="background-color:#fff ;">
    <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
                  <div class="col-sm-12" >
                  <table id="example1" class="table table-bordered table-striped dataTable dtr-inline " role="grid" aria-describedby="example1_info">
                  <thead>
                  <tr role="row"  >
                  <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">POS</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Image</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Team</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">First Name</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Last Name</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">Thai name</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">History</th>
                  </tr>
                  </thead>
                  <tbody class="text-center" >
                  <tr v-for="i in datas"> 
                    <td style="vertical-align: middle;" scope="row">{{i.pos}}</td>
                    <td><img :src="i.img1" width="180px" height="150" alt=""></td>
                    <td style="vertical-align: middle;">{{i.smoson}}</td>
                    <td style="vertical-align: middle;">{{i.first_name}}</td>
                    <td style="vertical-align: middle;">{{i.last_name}}</td>
                    <td style="vertical-align: middle;">{{i.thai_name}}</td>
                    <td style="vertical-align: middle;"><button type="button" @click="nextpage(i.id)" class="btn btn-primary">ดูประวัติ</button></td>
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
import Menu2 from '@/components/Menu2'
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
      .get("http://localhost:80/select_home11.php")
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
    components:{
  Menu2
},
methods:{
  nextpage(name){
    localStorage.setItem("name90", name);
      console.log(name);
      window.location.href = "/Character2";
  }
}
};

</script>

<style >
body{
  background-color: #3b5998;
}
</style>
