<template>
  <div class="wrapper text-left">
    <!-- Navbar -->
 <Menu />
    <div class="content-wrapper bg-dark">
    <br>
    <div class="card text-center bg-dark">
      <div class="card-header">
       
      </div>
      <div class="card-body">
                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
                  <div class="col-sm-12">
                  <table id="example1" class="table table-bordered table-striped dataTable dtr-inline table-dark" role="grid" aria-describedby="example1_info">
                  <thead>
                  <tr role="row">
                  <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">POS</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">รูปภาพ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">First Name</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Last Name</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">ชื่อไทย</th>
                  </tr>
                  </thead>
                  <tbody class="text-center" >
                  <tr v-for="i in 5"> 
                    <td style="vertical-align: middle;" scope="row">ST</td>
                    <td><img src="https://images.daznservices.com/di/library/GOAL/80/9c/cristiano-ronaldo-juventus-2019-20_rb0vgy1nfj8o11veyj09m1hn4.jpg?t=2129940223&quality=100" width="180px" height="150" alt=""></td>
                    <td style="vertical-align: middle;">Cristiano</td>
                    <td style="vertical-align: middle;">Ronaldo</td>
                    <td style="vertical-align: middle;">คริสเตียโน โรนัลโด</td>
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
      
      <br>
      

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

<style>
td{
  vertical-align: middle;
}
</style>
