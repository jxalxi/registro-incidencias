<template>
  <div>
    <vs-row vs-row vs-w="12">
      <vs-col>
        <h1>Problema en calculo de horas extras</h1>
        <vs-chip color="success">
        Abierta
      </vs-chip>
      Publicado el 2 de mayo de 2017, 09:23, 2 comentarios
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-w="8">
<vs-row vs-w="12">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-card class="cardx">
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
      </vs-card>
    </vs-col>
    </vs-row>
    <vs-row vs-w="12">
    <vs-divider>La solicitud ha sido asignada a <strong>Jhon Whitman</strong></vs-divider>
    </vs-row>
    <vs-row vs-w="12">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="1">
        <vs-avatar size="large" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
      </vs-col>
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="11">
        <vs-card class="cardx">
        <div>
          <p><strong>Jhon Whitman</strong> 3 de mayo de 2019, 15:45 </p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
      </vs-card>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col>
        <vs-textarea label="Responder" v-model="comentario" height="200px" />
      </vs-col>
    </vs-row>
      </vs-col>
      <vs-col vs-w="4" class="ml-2" >
        <vs-row>
          <vs-col>
            <vs-switch color="success" v-model="estado">
              <span slot="on">Abierto</span>
              <span slot="off">Cerrado</span>
            </vs-switch>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col>
            <span class="vs-select--label">Etiquetas:</span>
            <div class="centerx">
              <vs-chip color="primary">
                Recursos humanos
              </vs-chip>
            </div>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col>
            <span class="vs-select--label">Compartido con:</span>
            <div class="centerx">
        <vs-chip>
          <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
          Jhon Whitman
        </vs-chip>
          </div>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
    

  </div>
</template>

<script lang="ts" src="./seguimiento-incidencia.ts"></script>
<style scoped lang="scss" src="./seguimiento-incidencia.scss"></style>
