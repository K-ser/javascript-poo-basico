const obj = {
  name: 'Kevin',
  age: 25,
  job: 'Barista',
  favDrink: 'Beer',
}

function Students(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // this.aprobarCurso = function(nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // }
};

Students.prototype.aprobarCurso = function(nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const Kevin = new Students('Kev', 25, ['Curso 1', 'Curso 2']);