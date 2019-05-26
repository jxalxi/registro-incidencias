<template>
  <div>
     <vs-list>
    <vs-list-header icon="supervisor_account" title="Incidencias activas" color="success"></vs-list-header>
    <vs-list-item icon="check" title="Problema en calculo de horas extras" subtitle="Las horas extras registradas en el sistema no coinciden con el total de mes">
        <vs-button color="success" to="incidencia/1">Ver</vs-button>
    </vs-list-item>
    <vs-list-item icon="check" title="Problema al actualizar producto" subtitle="El sistema no permite actualizar el producto despues de cerrado el inventario">
      <vs-button color="success" to="incidencia/2">Ver</vs-button>
    </vs-list-item>
    <vs-list-header icon="how_to_reg" title="Incidencias cerradas" color="danger"></vs-list-header>
    <vs-list-item icon="verified_user" title="Problema al registrar un nuevo producto" subtitle="El sistema no me permite registrar un producto">
      <vs-button color="success" to="incidencia/3">Ver</vs-button>
    </vs-list-item>
  </vs-list>
  </div>
</template>

<script lang="ts" src="./historial-incidencia.ts"></script>
<style scoped lang="scss" src="./historial-incidencia.scss"></style>
