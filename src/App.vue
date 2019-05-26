<template>
  <div id="app">
    <div id="parentx">
      <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        hidden-background
        v-model="active"
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
          <h4>Jhon Doe</h4>
        </div>
        <vs-sidebar-group title="Aplication" open="open">
          <vs-sidebar-item index="1" :to="{ name: 'home'}">
            <vs-avatar :badge="badge1" text="N"/> Notificaciones
          </vs-sidebar-item>
          <vs-sidebar-group title="Incidencias" open="open">
            <vs-sidebar-item index="2.1" icon="store" :to="{ name: 'registro'}">Registro</vs-sidebar-item>
            <vs-sidebar-item index="2.2" icon="nature_people" :to="{ name: 'historial'}">Historial</vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item index="3" icon="help">FAQS</vs-sidebar-item>
        </vs-sidebar-group>

        <vs-divider icon="person" position="left">Usuario</vs-divider>
        <vs-sidebar-item index="4" icon="account_box">Perfil</vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <vs-button icon="reply" color="danger" type="flat">Salir</vs-button>
          <vs-button icon="settings" color="primary" type="border"></vs-button>
        </div>
      </vs-sidebar>
    </div>
    <div class="main-view">
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component({
  name: "App"
})
export default class App extends Vue {
  active = true;
  open = true;
  badge1 = 2;
}
</script>


<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

body {
  font-family: "Open Sans";
}

.main-view {
  margin-left: 20rem;
  margin-top: 2rem;
  margin-right: 4rem;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    margin-left: 10px;
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}

.con-vs-avatar {
  margin: 0 !important;
      height: 20px;
    width: 20px;
    font-size: 12px;
}
</style>
