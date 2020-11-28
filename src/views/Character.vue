<template>
  <div class="wrapper text-left">
    <!-- Navbar -->
<Menu/>
    <div class="content-wrapper bg-dark ">
      <br />
      <div class="card text-center bg-dark">
        <div class="card-header ">
          ประวัติ Cristiano Ronaldo ( คริสเตียโน่ โรนัลโด้ )
        </div>
        <div class="card-body">
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
                <img class="d-block w-100" src="https://en.as.com/en/imagenes/2019/10/15/football/1571147582_228425_noticia_normal.jpg" width="400px" height="500px" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://en.as.com/en/imagenes/2018/07/08/football/1531039309_136302_noticia_normal.jpg" width="400px" height="500px" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://gmsrp.cachefly.net/images/20/04/08/50432a48aeb2117b6aafeae18e62833d/960.jpg" width="400px" height="500px" alt="Third slide" />
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
        <div class="card-footer  " style="color:white;">
          ประวัติ Cristiano Ronaldo ( คริสเตียโน่ โรนัลโด้ ) ชื่อเต็มคือ
          Cristiano Ronaldo dos Santos Aveiro นักฟุตบอลชาวโปรตุเกส เกิดวันที่ 5
          กุมภาพันธ์ 1985 สูง 185 เซนติเมตร หรือ 6 ฟุต 1 นิ้ว ตำแหน่งที่เล่นคือ
          กองหน้าและปีก ปัจจุบันเป็นผู้เล่นของสโมสร ยูเวนตุส ในกัลโช่ซีเรียอา
          อิตาลี่ สวมเสื้อหมายเลข 7 Cristiano Ronaldo
          เริ่มเล่นฟุตบอลให้กับสโมสรเยาวชนอังดูริญญาในปี 1993-1995
          ต่อมาย้ายไปเล่นให้กับเยาวชนทีมนาซีอองนัลในปี 1995-1997
          และก็เริ่มเล่นให้กับเยาวชนของสปอร์ติ้งลิสบอนเมื่อปี 1997-2002
          จนได้ไต่เต้าเข้ามาเล่นชุดใหญ่ของสปอร์ติ้งลิสบอนในปี 2002-2003
          จากนั้นแมนเชสเตอร์ยูไนเต็ดในยุคเซอร์อเล็กซ์ เฟอร์กูสัน เห็นแววดี
          เลยซื้อตัวดาวยิงชาวโปรตุเกสรายนี้มาร่วมทีมในปี 2003 จนถึงปี 2009
          โรนัลโด้ย้ายไปเล่นให้กับเรียลมาดริด จนถึงปี 2018 และได้ย้ายไปซีเรียอา
          เพื่อเป็นตำนานคนใหม่ให้ม้าลาย ยูเวนตุส คริสเตียโน่ โรนัลโด้
          เล่นให้กับทีมชาติโปรตุเกสตั้งแต่ U15 ปี 2001, U17 ปี 2001-2002 ,
          จากนั้นก็เล่น U20-U21 ในปี 2002-2003 ในปี 2004
          ในให้กับทีมชาติโปรตุเกสชุด U23 และระหว่างปี 2003
          นั้นก็ติดทีมชาติชุดใหญ่ตั้งแต่นั้นเป็นต้นมาอีกด้วย
          ก่อนจะเลิกเล่นให้ทีมชาติหลังจากจบการแข่งขันบอลโลก 2018
        </div>
      </div>
      <br />
    </div>
    <!-- Content Wrapper. Contains page content -->

    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
components:{
  Menu
  
}

};
</script>

<style>
.bordered {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 1px solid darkorange;
  border-radius: 8px;
}
</style>
