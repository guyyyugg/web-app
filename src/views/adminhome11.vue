<template>
  <div class="container-fluid">
    <Menuadmin />
    <div class="row">
      <div class="col">
        <div class="card text-center" style="background-color:#F2F3F5;">
          <div class="card-header">
            ประวัตินักฟุตบอล
          </div>

          <div class="card-body" style="background-color:#fff;">
            <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
              <div class="row">
                <div class="col-sm-12">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                  >
                    เพิ่มนักเตะ
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          เพิ่มนักฟุตบอล
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <div class="modal-body">
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-right">
                                  <span>*</span> <select
                                    name="pos"
                                    id="pos"
                                    class="form-control"
                                    required
                                  >
                                    <option disabled selected>ตำแหน่ง</option>
                                    <option value="ST">ST</option>
                                    <option value="DF">DF</option>
                                    <option value="MF">MF</option>
                                    <option value="GK">GK</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-left ">
                                  <select
                                    class="form-control"
                                    required
                                    name="smoson"
                                    id="smoson"
                                  >
                                    <option disabled selected>สโมสร</option>
                                    <option value="Liverpool"
                                      >Liverpool Football Club</option
                                    >
                                    <option value="Manchester"
                                      >Manchester United Football Club</option
                                    >
                                    <option value="Chelsea"
                                      >Chelsea Football Club</option
                                    >
                                    <option value="Manchestercity"
                                      >Manchester City Football Club</option
                                    >
                                    <option value="Tottenham"
                                      >Tottenham Hotspur F.C.</option
                                    >
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-left ">
                                  <input
                                    type="input"
                                    name="firstname"
                                    class="form-control"
                                    id="firstname"
                                    required
                                    placeholder="firstname"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-left ">
                                  <input
                                    type="input"
                                    name="lastname"
                                    class="form-control"
                                    id="lastname"
                                    required
                                    placeholder="lastname"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-left ">
                                  <input
                                    type="text"
                                    name="thainame"
                                    class="form-control"
                                    id="thainame"
                                    required
                                    placeholder="ชื่อไทย"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-left ">
                                  <textarea
                                    class="form-control"
                                    name="history"
                                    id="history"
                                    placeholder="ประวัติ"
                                    required
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col">
                                <div class=" text-left ">
                                  รูปนักเตะ(ขั้นต่ำ4รูป)
                                  <input
                                    type="file"
                                    id="files"
                                    name="files[]"
                                    multiple
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button @click="add" class="btn btn-primary">
                            ยืนยัน
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <table
                    id="example1"
                    class="table table-bordered table-striped dataTable dtr-inline "
                    role="grid"
                    aria-describedby="example1_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Rendering engine: activate to sort column descending"
                        >
                          POS
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Browser: activate to sort column ascending"
                        >
                          รูปภาพ
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Browser: activate to sort column ascending"
                        >
                          สโมสร
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Platform(s): activate to sort column ascending"
                        >
                          First Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Engine version: activate to sort column ascending"
                        >
                          Last Name
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >
                          ชื่อไทย
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >
                          แก้ไขรูปภาพ
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >
                          แก้ไข
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="CSS grade: activate to sort column ascending"
                        >
                          ลบ
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr v-for="i in select">
                        <td style="vertical-align: middle;" scope="row">
                          {{ i.pos }}
                        </td>
                        <td>
                          <img
                            :src="i.img1"
                            width="180px"
                            height="150"
                            alt=""
                          />
                        </td>
                        <td style="vertical-align: middle;">{{ i.smoson }}</td>
                        <td style="vertical-align: middle;">
                          {{ i.first_name }}
                        </td>
                        <td style="vertical-align: middle;">
                          {{ i.last_name }}
                        </td>
                        <td style="vertical-align: middle;">
                          {{ i.thai_name }}
                        </td>
                        <td style="vertical-align: middle;">
                          <button
                            type="button"
                            class="btn btn-warning"
                            data-toggle="modal"
                            data-target="#exampleModal123"
                            data-whatever="@mdo"
                            @click="set1(i.id)"
                          >
                            แก้ไขข้อมูลรูปภาพ
                          </button>
                        </td>
                        <td style="vertical-align: middle;">
                          <button
                            type="button"
                            class="btn btn-warning"
                            data-toggle="modal"
                            data-target="#exampleModal1"
                            data-whatever="@mdo"
                            @click="setid(i.id) , select_update()"
                          >
                            แก้ไขข้อมูล
                          </button>
                          <div
                            class="modal fade"
                            id="exampleModal1"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  แก้ไขข้อมูล
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col">
                                          <div class=" text-right">
                                            <select
                                              class="form-control"
                                              name="pos1"
                                              id="pos1"
                                            >
                                              <option value="ST">ST</option>
                                              <option value="DF">DF</option>
                                              <option value="MF">MF</option>
                                              <option value="GK">GK</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col">
                                          <div class=" text-left ">
                                            <select
                                              class="form-control"
                                              id="smoson1"
                                              name="smoson1"
                                            >
                                              <option value="liverpool"
                                                >Liverpool Football Club</option
                                              >
                                              <option value="manu"
                                                >Manchester United Football
                                                Club</option
                                              >
                                              <option value="mancity"
                                                >Chelsea Football Club</option
                                              >
                                              <option value="leed"
                                                >Manchester City Football
                                                Club</option
                                              >
                                              <option value="spur"
                                                >Tottenham Hotspur F.C.</option
                                              >
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col">
                                          <div class=" text-left ">
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="firstname"
                                              id="firstname1"
                                              name="firstname1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col">
                                          <div class=" text-left ">
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="lastname"
                                              id="lastname1"
                                              name="lastname1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col">
                                          <div class=" text-left ">
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="ชื่อไทย"
                                              id="thainame1"
                                              name="thainame1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="row">
                                        <div class="col">
                                          <div class=" text-left ">
                                            <textarea
                                              class="form-control"
                                              placeholder="ประวัติ"
                                              rows="3"
                                              id="history1"
                                              name="history1"
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    @click="update()"
                                  >
                                    ยืนยันการแก้ไข
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style="vertical-align: middle;">
                                                    <!-- Button trigger modal -->
                          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal90" @click="setid(i.id)">
                            ลบนักเตะ
                          </button>

                          <!-- Modal -->
                          <div class="modal fade" id="exampleModal90" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel90" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel90">ยืนยันการลบ</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  คุณมั่นใจใช่ไหมที่จะลบ
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" @click="delete1()" class="btn btn-primary">ยืนยัน</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot></tfoot>
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
import firebase from "firebase";
export default {
  data() {
    return {
      select: [],
      insert: [],
    };
  },
  async mounted() {
    const axios = require("axios");

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        Swal.fire({
          icon: "error",
          title: "กรุณา LOGIN",
          showConfirmButton: false,
          timer: 3000,
        });
        this.$router.replace("/login");
      } else {
      }
    });
    await axios
      .get("http://localhost:80/select_home11.php")
      .then((response) => {
        response.data.forEach((element) => {
          // console.log(element.first_name);
          this.select.push(element);
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    $(function() {
      $("#example1").DataTable({
        responsive: true,
        autoWidth: false,
      });
    });
  },
  components: {
    Menuadmin,
  },
  methods: {
    async add() {
      const axios = require("axios").default;
      if (
        document.getElementById("pos").value == "" ||
        document.getElementById("smoson").value == "" ||
        document.getElementById("firstname").value == "" ||
        document.getElementById("lastname").value == "" ||
        document.getElementById("thainame").value == "" ||
        document.getElementById("history").value == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "กรุณา กรอกข้อมูล",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        var storageRef = firebase.storage().ref("img");
        // Get the file from DOM
        var file = document.getElementById("files").files[0];
        var file1 = document.getElementById("files").files[1];
        var file2 = document.getElementById("files").files[2];
        var file3 = document.getElementById("files").files[3];
        console.log(file.name);
        console.log(file1.name);
        console.log(file2.name);
        console.log(file3.name);
        var thisRef = storageRef.child(file.name);
        await thisRef.put(file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });

        thisRef = storageRef.child(file1.name);
        await thisRef.put(file1).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });

        thisRef = storageRef.child(file2.name);
        await thisRef.put(file2).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });

        thisRef = storageRef.child(file3.name);
        await thisRef.put(file3).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });
        const storage = firebase.storage();
        // let linkimg = "";
        // Get metadata properties
        let linkimg;
        let self = this;
        await storage
          .ref("img")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            self.linkimg = url;
            self.insert.push(url);
            storage
              .ref("img")
              .child(file1.name)
              .getDownloadURL()
              .then((url) => {
                self.linkimg = url;
                self.insert.push(url);
                storage
                  .ref("img")
                  .child(file2.name)
                  .getDownloadURL()
                  .then((url) => {
                    self.linkimg = url;
                    self.insert.push(url);
                    storage
                      .ref("img")
                      .child(file3.name)
                      .getDownloadURL()
                      .then((url) => {
                        self.linkimg = url;
                        self.insert.push(url);
                        // this.insert.forEach((element) => {
                        //   console.log(element);
                        // });
                        var data = new FormData();
                        data.append(
                          "pos",
                          document.querySelector("select[name=pos]").value
                        );
                        data.append(
                          "smoson",
                          document.querySelector("select[name=smoson]").value
                        );
                        data.append(
                          "first_name",
                          document.querySelector("input[name=firstname]").value
                        );
                        data.append(
                          "last_name",
                          document.querySelector("input[name=lastname]").value
                        );
                        data.append(
                          "thai_name",
                          document.querySelector("input[name=thainame]").value
                        );
                        data.append(
                          "history",
                          document.querySelector("textarea[name=history]").value
                        );
                        data.append("img1", self.insert[0]);
                        data.append("img2", self.insert[1]);
                        data.append("img3", self.insert[2]);
                        data.append("img4", self.insert[3]);
                        axios
                          .post("http://localhost:80/insert_home11.php", data)
                          .then((response) => {
                            console.log(response.data);
                          });
                        Swal.fire({
                          icon: "success",
                          title: "เพิ่มนักเตะสำเร็จ",
                          showConfirmButton: false,
                          timer: 3000,
                        }).then(() => {
                          setTimeout(function() {
                            window.location.href = "/adminhome11";
                          }, 200);
                        });
                      });
                  });
              });
          });
        // console.log(this.insert[0]);
        // console.log(this.insert[1]);
        // console.log(this.insert[2]);
        // console.log(this.insert[3]);
                
      }
    },
    select_update() {
      
      // console.log(id);
      // localStorage.setItem("id", id);
      const axios = require("axios");
      var data1 = new FormData();
      data1.append("name", localStorage.getItem("delete1"));
      axios
        .post("http://localhost:80/select_update_home11.php", data1)
        .then((response) => {
          console.log(response);
          response.data.forEach((element) => {
            // this.datas1.push(element);
            if (element.pos == "ST") {
              document.getElementById("pos1").value = element.pos;
            }
            if (element.pos == "MF") {
              document.getElementById("pos1").value = element.pos;
            }
            if (element.pos == "DF") {
              document.getElementById("pos1").value = element.pos;
            }
            if (element.pos == "GK") {
              document.getElementById("pos1").value = element.pos;
            }

            if (element.smoson == "liverpool") {
              document.getElementById("smoson1").value = element.smoson;
            }
            if (element.smoson == "manu") {
              document.getElementById("smoson1").value = element.smoson;
            }
            if (element.smoson == "mancity") {
              document.getElementById("smoson1").value = element.smoson;
            }
            if (element.smoson == "leed") {
              document.getElementById("smoson1").value = element.smoson;
            }
            if (element.smoson == "spur") {
              document.getElementById("smoson1").value = element.smoson;
            }
            document.getElementById("firstname1").value = element.first_name;
            document.getElementById("lastname1").value = element.last_name;
            document.getElementById("thainame1").value = element.thai_name;
            document.getElementById("history1").value = element.history;
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    update() {
      // console.log(localStorage.getItem("id"));
      if (
        document.getElementById("pos1").value == "" ||
        document.getElementById("smoson1").value == "" ||
        document.getElementById("firstname1").value == "" ||
        document.getElementById("lastname1").value == "" ||
        document.getElementById("thainame1").value == "" ||
        document.getElementById("history1").value == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "กรุณา กรอกข้อมูล",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        // console.log(id);
        // localStorage.setItem("id", id);
        const axios = require("axios").default;
        var data1 = new FormData();
        data1.append("id", localStorage.getItem("delete1"));
        data1.append("pos", document.querySelector("select[name=pos1]").value);
        data1.append(
          "smoson",
          document.querySelector("select[name=smoson1]").value
        );
        data1.append(
          "first_name",
          document.querySelector("input[name=firstname1]").value
        );
        data1.append(
          "last_name",
          document.querySelector("input[name=lastname1]").value
        );
        data1.append(
          "thai_name",
          document.querySelector("input[name=thainame1]").value
        );
        data1.append(
          "history",
          document.querySelector("textarea[name=history1]").value
        );

        axios
          .post("http://localhost:80/update_home11.php", data1)
          .then((response) => {
            console.log(response);
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
        //   this.datas1.forEach((element) =>{
        //     console.log(element);
        // });
        Swal.fire({
          icon: "success",
          title: "แก้ไขข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          setTimeout(function() {
            window.location.href = "/adminhome11";
          }, 200);
        });
      }
    },
    delete1() {
      
      const axios = require("axios");
      var data = new FormData();
      // localStorage.setItem("delete1",id);
      data.append("id",localStorage.getItem("delete1"));
      axios.post("http://localhost:80/delete_adminhome11.php", data)
          .then((response) => {
            console.log(response.data);
            console.log(count);
          });
          Swal.fire({
          icon: "success",
          title: "ลบสำเร็จ",
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          setTimeout(function() {
            window.location.href = "/adminhome11";
          }, 200);
        });
    },
    setid(id){
      localStorage.setItem("delete1",id);
    },
    set1(id){
      localStorage.setItem("updatepic",id);
      window.location.href = "/updatepic11";
    }
  },
};
</script>
<style></style>
