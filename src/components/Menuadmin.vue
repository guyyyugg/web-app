<template>
  <nav
    class="navbar navbar-expand-lg navbar-light  "
    style="background-color:#fff;"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand brand-link" href="adminhome11"
        ><img
          src="https://www.flaticon.com/svg/static/icons/svg/26/26799.svg"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: .8"
        />FOOTBALL PLAYER</a
      >
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item ">
          <a class="nav-link" href="#"> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="admindaosunwo2">ดาวซัลโว</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="adminLeaguechamp2"
            >ทำเนียบผู้ชนะเลิศ(แชมป์)</a
          >
        </li>
      </ul>
      <button class="btn btn-danger" @click="logout">LOGOUT</button>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    async logout() {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.replace("/");
        });
      Swal.fire({
        icon: "success",
        title: "LOGOUT สำเร็จ",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        this.$router.replace("/login");
      });
    },
  },
};
</script>

<style></style>
