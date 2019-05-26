<template>
  <div class="home">
    <vs-row class="mb-1">
      <vs-alert title="Jhon Whitman respondio a tu comentario" color="rgb(231, 154, 23)" active="true">
        <p>23 de mayo de 2019, 14:45</p>
        <router-link :to="{ name: 'incidencia', params: { id: 1 }}">
          <strong>Incidencia:</strong> Problema en calculo de horas extras
        </router-link>      
      </vs-alert>
    </vs-row>
    <vs-row>
      <vs-alert title="Admin cerro la incidencia" active="true" color="danger">
        <p>22 de mayo de 2019, 09:12</p>
        <router-link :to="{ name: 'incidencia', params: { id: 1 }}">
          <strong>Incidencia:</strong> Problema al registrar un nuevo producto
        </router-link>      
      </vs-alert>
  </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.mb-1 {
  margin-bottom: 1rem;
}
</style>