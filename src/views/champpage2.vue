<template>
  <div class="container-fluid" >
   <Menu2 />
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
                  <table id="example1" class="table table-bordered table-striped dataTable dtr-inline table-hover " role="grid" aria-describedby="example1_info">
                  <thead>
                  <tr role="row" >
                  <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">ตราสโมสร</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">ชื่อภาษาอังกฤษ</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">ชื่อภาษาไทย</th>
                  <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">จำนวนถ้วยทั้งหมด</th>
                  </tr>
                  </thead>
                  <tbody class="text-center" >
                  <tr v-for="i in 5"> 
                    <td style="vertical-align: middle;" scope="row">1</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/th/thumb/d/d1/Liverpool_FC_Logo.svg/180px-Liverpool_FC_Logo.svg.png" width="180px" height="150" alt=""></td>
                    <td style="vertical-align: middle;">Liverpool Football Club</td>
                    <td style="vertical-align: middle;">สโมสรฟุตบอลลิเวอร์พูล</td>
                    <td style="vertical-align: middle;">30</td>
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
export default {
    components:{
  Menu2
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
