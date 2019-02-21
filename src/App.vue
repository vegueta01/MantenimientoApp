<template>
  <div id="app">
   
    <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/" class="hoverable" exact>Home</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <!-- <b-nav-item to="/usuarios">Usuarios</b-nav-item> -->
        <!-- <b-nav-item to="/ingresoAMantenimineto" >ingreso a mantenimiento</b-nav-item> -->
        <b-nav-item-dropdown text="Procesamiento" class="hoverable" extra-toggle-classes="nav-link-custom" right>
          <!-- <b-dropdown-item class="hoverable" to="/ingresoAMantenimineto" >ingreso a mantenimiento</b-dropdown-item>    -->
          <b-dropdown-item class="hoverable" to="/ingresoMantenimineto" >ingreso  mantenimiento</b-dropdown-item>         
          <b-dropdown-item class="hoverable" href="#">Detalle de mantenimiento</b-dropdown-item>
          <b-dropdown-item class="hoverable" href="#">Combustible de equipo</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <!-- <b-nav-item to="/usuarios">Usuarios</b-nav-item> -->
        <!-- <b-nav-item to="/ingresoAMantenimineto" >ingreso a mantenimiento</b-nav-item> -->
        <b-nav-item-dropdown text="Administrador" class="hoverable" extra-toggle-classes="nav-link-custom" right>
          <b-dropdown-item class="hoverable" to="/estados" >Estados</b-dropdown-item>   
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown class="hoverable" text="Lenguaje" right>
          <b-dropdown-item class="hoverable" href="#">EN</b-dropdown-item>
          <b-dropdown-item class="hoverable" href="#">ES</b-dropdown-item>
          <b-dropdown-item class="hoverable" href="#">RU</b-dropdown-item>
          <b-dropdown-item class="hoverable" href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown class="hoverable" right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item class="hoverable" href="#">Profile</b-dropdown-item>
          <b-dropdown-item class="hoverable" href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

    <!-- <mdb-navbar dark position="top" class="default-color" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
        MDB Vue
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item exact to="/" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item to="/about" waves-fixed>about</mdb-nav-item>
          <mdb-nav-item to="/ingresoAMantenimineto" waves-fixed>ingresoAMantenimineto</mdb-nav-item>
          <mdb-nav-item to="/advanced" waves-fixed>Advanced</mdb-nav-item>
          <mdb-nav-item to="/navigation" waves-fixed>Navigation</mdb-nav-item>
          <mdb-nav-item to="/forms" waves-fixed>Forms</mdb-nav-item>
          <mdb-nav-item to="/tables" waves-fixed>Tables</mdb-nav-item>
          <mdb-nav-item to="/modals" waves-fixed>Modals</mdb-nav-item>
          <mdb-nav-item to="/plugins" waves-fixed>Plugins & addons</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar> -->

    <router-view/>
  </div>
</template>

<script>
// import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter,mdbDropdownItem } from 'mdbvue';

// export default {
//   name: 'app',
//   components: {
//     mdbNavbar,
//     mdbNavItem,
//     mdbNavbarNav,
//     mdbNavbarToggler,
//     mdbNavbarBrand,
//     mdbFooter,
//     mdbDropdownItem
//   }
// };

</script>

<style>

/* estilos nav nuevo */
/* .flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
} */
.active{
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
}

/* .demo-section {
  padding: 20px 0;
} */
/* .demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
} */
/* .demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
} */
/* .demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
} */
</style>