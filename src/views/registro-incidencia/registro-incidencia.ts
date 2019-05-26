import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "RegistroIncidencia"
})
export default class RegistroIncidencia extends Vue {
// tslint:disable-next-line: member-access
  titulo = '';
  descripcion = '';
  prioridad = 1;
  prioridadList = [
    { id: 1, name: 'Baja'},
    { id: 2, name: 'Media'},
    { id: 3, name: 'Alta'},
  ];

  moduloList = [
    { id: 1, name: 'Modulo 1'},
    { id: 2, name: 'Modulo 2'},
    { id: 3, name: 'Modulo 3'},
  ];

  modulo = '';
  implicadoList = [];
  username = '';

  $vs: any;

  successUpload() {
    this.$vs.notify({
      color: 'success',
      title: 'Agregado',
      text: 'Se agregó el archivo con éxito',
    });
  }
}
