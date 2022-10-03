import { listClass } from "./main.mjs"

const nuevaClase = new listClass({
  name: 'Primera clase',
  videoID: 'Este es el ID de la clase',
})

nuevaClase.reproducir();
nuevaClase.pausar();

nuevaClase.reproducir();
nuevaClase.pausar();

nuevaClase.reproducir();
nuevaClase.pausar();