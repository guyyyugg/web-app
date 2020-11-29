<template>
  <div class="container-fluid">
    <Menu2 />
    <div class="row">
      <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
          <div class="card-header">
            <h3>ดาวซัลโว พรีเมียร์ลีก อังกฤษ 2020 - 2021</h3>
          </div>
          <div class="card-body" style="background-color:#fff;">
            
            <br />
            <div class="row">
              <div class="col-12">
                <table class="table table-hover">
                  <thead style="background-color:#F2F3F5;">
                    <tr>
                      <th scope="col">อันดับ</th>
                      <th scope="col">นักเตะ</th>
                      <th scope="col">ชื่อ/สโมสร</th>
                      <th scope="col">จำนวนประตู</th>
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
import Menu2 from "@/components/Menu2";
import firebase from 'firebase'
export default {
  data() {
    return {
      datas: [],
    };
  },
  components: {
    Menu2,
  },
   async mounted() {
     const axios = require("axios");
     await axios
      .get("http://localhost:80/select_daosunwo2.php")
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
   }
};


</script>
<style >
body{
  background-color: #3b5998;
}
</style>
