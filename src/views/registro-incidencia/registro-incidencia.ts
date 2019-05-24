import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "RegistroIncidencia"
})
export default class RegistroIncidencia extends Vue {
  titulo = "";

  $vs: any;

  successUpload() {
    this.$vs.notify({
      color: "success",
      title: "Agregado",
      text: "Se agregó el archivo con éxito"
    });
  }
}
