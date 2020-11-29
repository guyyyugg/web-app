<template>
  <div class="container-fluid">
    <Menu2 />
    <div class="row">
      <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;" >
        
          <div class="card-header"  v-for="t in datas3">
            สโมสรฟุตบอล {{t.smoson}}
          </div>
          <div class="card-body" style="background-color:#fff;">
            <div class="row">
          <div class="col-2 mx-auto">
            <select class="form-control" name="team" id="team">
              <option disabled selected>เลือกทีม</option>
              <option value="Liverpool">Liverpool Football Club</option>
              <option value="Manchester">Manchester United Football Club</option>
              <option value="Chelsea">Chelsea Football Club</option>
              <option value="Manchestercity">Manchester City Football Club</option>
              <option value="Tottenham">Tottenham Hotspur F.C.</option>
            </select>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <button type="button" @click="open" class="btn btn-primary">
              ค้นหา
            </button>
          </div>
        </div>
        <br>
         <h1> ผู้เล่นชุดปัจจุบัน</h1>
         <br>
            <div class="row">
                <p class="text-left alert alert-warning">ผู้รักษาประตูตำแหน่งผู้รักษาประตู (Goalkeepers)</p>
            </div>
            <div class="row">
              <div class="col-3" v-for="i in datas3">
                <div class="card border border-warning shadow" style="width: 16rem; " >
                  <img
                    class="card-img-top"
                    :src="i.img1"
                    alt="Card image cap"
                    
                  />
                  <h5 class="card-title mt-2">{{i.first_name}} {{i.last_name}}</h5>
                  <div class="card-body">
                    <p class="card-text">{{i.thai_name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
             <p class="text-left alert alert-primary">กองหลังตำแหน่งกองหลัง (Defenders)</p>
            </div>
            <div class="row">
              <div class="col-3" v-for="j in datas2">
                <div class="card border border-primary shadow" style="width: 16rem; "  >
                  <img
                    class="card-img-top"
                    :src="j.img1"
                    alt="Card image cap"
                  />
                  <h5 class="card-title mt-2">{{j.first_name}} {{j.last_name}}</h5>
                  <div class="card-body">
                    <p class="card-text">{{j.thai_name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
                <p class="text-left alert alert-success">กองกลางตำแหน่งกองกลาง (Midfielders)</p>
            </div>
            <div class="row">
              <div class="col-3" v-for="k in datas1">
                <div class="card border border-success shadow" style="width: 16rem;" >
                  <img
                    class="card-img-top"
                    :src="k.img1"
                    alt="Card image cap"
                  />
                  <h5 class="card-title mt-2">{{k.first_name}} {{k.last_name}}</h5>
                  <div class="card-body">
                    <p class="card-text">{{k.thai_name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
            <p class="text-left alert alert-danger">กองหน้าตำแหน่งกองหน้า (Strikers)</p>
            </div>
            <div class="row">
            
              <div class="col-3" v-for="l in datas">
                
                <div class="card border border-danger shadow"  style="width: 16rem;"  >
                  <img
                    class="card-img-top"
                    :src="l.img1"
                    alt="Card image cap"
                  />
                  <h5 class="card-title mt-2 ">{{l.first_name}} {{l.last_name}}</h5>
                  <div class="card-body">
                    <p class="card-text">{{l.thai_name}}</p>
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
import Menu2 from "@/components/Menu2";
export default {
  data() {
    return {
      datas: [],
      datas1: [],
      datas2: [],
      datas3: [],
    };
  },
  methods: {
    open() {
      this.datas= [],this.datas1= [],this.datas2= [],this.datas3= []
      localStorage.setItem("teamst",document.querySelector("select[name=team]").value);
      const axios = require("axios").default;
      var data1 = new FormData();
      data1.append("team", localStorage.getItem("teamst"));
      axios
        .post("http://localhost:80/select_Leaguepage2st.php", data1)
        .then((response) => {
               response.data.forEach((element) => {
                  // console.log(element);
                  this.datas.push(element);
                  
            //   console.log(response);
           });
        //   console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });

        
         localStorage.setItem("teammf",document.querySelector("select[name=team]").value);
      var data2 = new FormData();
      data2.append("team", localStorage.getItem("teammf"));
      axios
        .post("http://localhost:80/select_Leaguepage2mf.php", data2)
        .then((response) => {
               response.data.forEach((element) => {
                  console.log(element);
                  this.datas1.push(element);
              console.log(response);
           });
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });



        localStorage.setItem("teamdf",document.querySelector("select[name=team]").value);
      var data3 = new FormData();
      data3.append("team", localStorage.getItem("teamdf"));
      axios
        .post("http://localhost:80/select_Leaguepage2df.php", data3)
        .then((response) => {
               response.data.forEach((element) => {
                //   console.log(element);
                  this.datas2.push(element);
            //   console.log(response);
           });
        //   console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });



        localStorage.setItem("teamgk",document.querySelector("select[name=team]").value);
      var data4 = new FormData();
      data4.append("team", localStorage.getItem("teamgk"));
      axios
        .post("http://localhost:80/select_Leaguepage2gk.php", data4)
        .then((response) => {
               response.data.forEach((element) => {
                //   console.log(element);
                  this.datas3.push(element);
            //   console.log(response);
           });
        //   console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });

       
        
    },
  },
  components: {
    Menu2,
  },
};
</script>

<style>
.shadow{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

body{
  background-color: #3b5998;
}

</style>
