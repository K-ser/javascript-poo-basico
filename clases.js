class Student {
	//este metodo debe estar para poder asignarle propiedades al objeto
	constructor(name, age, cursosAprobados) {
		this.name = name;
		this.age = age;
		this.cursosAprobados = cursosAprobados;
	}
	//este es uno de los muchos metodos adicionales que podemos crear, todos con la misma sintaxis
	aprobarCursos(cursoNuevo) {
		this.cursosAprobados.push(cursoNuevo);
		}
};
//creamos un objeto a partir de la clase, una instancia
const Kevin = new Student('Kevin', 25, ['Curso 1']);

// PASAMOS LOS PARAMETROS COMO UN OBJETO PARA NO PASARLOS POR ORDEN
class Student2 {
  constructor({
    name,
    age,
    cursosAprobados = [],
    email,
    facebook,
    job,
  }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
    this.job = job;
    this.facebook = facebook;
  }

  aprobarCursos(cursoNuevo) {
		this.cursosAprobados.push(cursoNuevo);
		}
}

//creamos una instancia de la clase Student2
const ivan = new Student2({
  name: 'Ivan',
  email: 'mexis@gmail.com',
  facebook: 'El Ivan',
  job: 'NINI',
  age: 30,
});