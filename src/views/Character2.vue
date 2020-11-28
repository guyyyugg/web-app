<template>
<div class="container-fluid" >
   <Menu2 />
    <div class="row" >
    <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
  <div class="card-header" v-for="i in datas">
    <label for="">{{i.first_name}} {{i.last_name}} {{i.thai_name}}</label>
  </div>
  <div class="card-body" style="background-color:#fff;" v-for="i in datas">
    <div class="row">
        <div class="col">
        <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" :src="i.img2" width="400px" height="500px" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="i.img3" width="400px" height="500px" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="i.img4" width="400px" height="500px" alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
    <div class="row">
    <div class="col mt-5">
        <div class="card" style="background-color:#F2F3F5;" >
  <div class="card-body" v-for="i in datas">
    <h5 class="card-title"></h5>
    <p class="card-text">{{i.history}}</p>
   
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
import Menu2 from '@/components/Menu2'
export default {
  data() {
    return {
      datas: [],
    };
  },
   mounted() {
     const axios = require("axios");
     var data = new FormData();
     data.append("name", localStorage.getItem("name90"));
     axios
      .post("http://localhost:80/select_character2.php", data)
      .then((response) => {
         console.log(response);
        response.data.forEach((element) => {
          console.log(element);
          this.datas.push(element);
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      this.datas.forEach((element) =>{
        console.log(element);
    });
      $("#example1").DataTable({
    responsive: true,
    autoWidth: false,
  });
  },
    components:{
  Menu2
  
}
};
</script>

<style>

</style>