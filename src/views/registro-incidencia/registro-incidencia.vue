<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-w="12" vs-justify="left" vs-align="left">
        <div class="centerx default-input">
          <vs-input class="inputx" placeholder="Título" v-model="titulo"/>
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
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
  </div>
</template>

<script lang="ts" src="./registro-incidencia.ts"></script>
<style scoped lang="scss" src="./registro-incidencia.scss"></style>
