<template>
  <div>
    <vs-row vs-w="12">
     <input type="text" class="input-line" v-model="titulo" placeholder="Titulo" />
    </vs-row>
    <vs-row vs-w="12">
      <vs-textarea label="Descripcion de la incidencia" v-model="descripcion" />
    </vs-row>
    <vs-row vs-w="12">
      <vs-select
      class="selectExample"
      label="Prioridad"
      v-model="prioridad"
      >
      <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in prioridadList" />
    </vs-select>
    </vs-row>
    <vs-row vs-w="12">
      <vs-select
      class="selectExample"
      label="Modulo"
      v-model="modulo"
      >
      <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in moduloList" />
    </vs-select>
    </vs-row>
    <vs-row vs-w="12">
      <p class="vs-select--label">Arrastre y suelte archivos o busque un archivo con el explorador</p>
      <vs-col vs-w="12" vs-justify="center" vs-align="left">
        <div class="centerx">
          <vs-upload
            multiple
            text="Subir"
            automatic
            action="https://jsonplaceholder.typicode.com/posts/"
            @on-success="successUpload"
          />
        </div>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12">
      <vs-row vs-w="12">
      <div class="centerx labelx">
        <vs-input label="Compartir con" placeholder="Nombre de usuario" v-model="username"/>
      </div>
    </vs-row>
      
    </vs-row>
    <vs-row vs-w="12" vs-type="flex" vs-justify="flex-end">
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    <vs-button color="primary" type="filled">Publicar</vs-button>
  </vs-col>
</vs-row>
  </div>
</template>

<script lang="ts" src="./registro-incidencia.ts"></script>
<style scoped lang="scss" src="./registro-incidencia.scss"></style>
