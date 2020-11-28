<template>
  <div class="wrapper text-left">
    <!-- Navbar -->
  <Menu/>
    <div class="content-wrapper bg-dark ">
      <br />
      <div class="card text-center bg-dark">
        <div class="card-header ">
          <h2>ทำเนียบแชมป์แต่ละลีก</h2>
        </div>
        <div class="card-body">
         <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
                  <div class="col-sm-12">
                  <table id="example1" class="table table-bordered table-striped dataTable dtr-inline table-dark" role="grid" aria-describedby="example1_info">
                  <thead>
                  <tr role="row">
                  <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">รูปภาพ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">ชื่อภาษาอังกฤษ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">ชื่อภาษาไทย</th>
                  </tr>
                  </thead>
                  <tbody class="text-center" >
                  <tr v-for="i in 5"> 
                    <th style="vertical-align: middle;" scope="row">1</th>
                    <th><img src="https://kaolud.com/wp-content/uploads/2020/03/Premier_League_new_logo-202003300045-300x225.jpg" width="180px" height="150" alt="" /> </th>
                    <td style="vertical-align: middle;">premier league</td>
                    <td style="vertical-align: middle;">พรีเมียร์ ลีก</td>
                  </tr>
                  </tbody>
                  <tfoot>

                  </tfoot>
                </table>
                </div>
                </div>
                </div>
        </div>
        <div class="card-footer  " style="color:white;"></div>
      </div>
      <br />
    </div>
    <!-- Content Wrapper. Contains page content -->

    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <strong
        >Copyright &copy; 2014-2019
        <a href="http://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.5
      </div>
    </footer>

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
$(function () {
    $("#example1").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
</script>

<style></style>
