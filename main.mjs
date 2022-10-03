function playVideo(id) {
  const urlSecreta = `https://enlacesecreto.com/${id}`;
  console.log(`Se esta reproduciendo ${urlSecreta}`);
}
function stopVideo(id) {
  const urlSecreta = `https://enlacesecreto.com/${id}`;
  console.log(`Se ha pausado ${urlSecreta}`);
}

export class listClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    playVideo(this.videoID);
  }
  pausar() {
    stopVideo(this.videoID);
  }
}

class Courses {
  constructor ({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }
  
  get name() {
    return this._name;
  }
  
  // set name(nuevoNombre) {
  //   if (nuevoNombre === 'Curso malo') {
  //     console.error("Don't say blowjobs, MaryJane");
  //   } else {
  //     this._name = nuevoNombre;
  //   }
  // }

  	//otra manera de no modificar el nombre por nada
  set name(nuevoNombre) {
    if (nuevoNombre !== this._name) {
      console.error('No puedes cambiar el nombre de este curso');
    }
  }
}


const cursoPrograBasica = new Courses({
  name: 'Curso de Programación Básica'
})
//tratar de cambiar el nombre del curso
// cursoPrograBasica.name = 'Nuevo nombre que se le quiera poner'

const cursoDefinitivoHTML = new Courses({
  name: 'Curso definitivo de HTML y CSS'
})
const cursoPracticoHTML = new Courses({
  name: 'Curso práctico de HTML y CSS'
})
const cursoDataBusiness = new Courses({
  name: 'Curso DataBusiness'
})
const cursoDataviz = new Courses({
  name: 'Curso Dataviz'
})
const cursoUnity = new Courses({
  name: 'Curso Unity'
})
const cursoUnreal = new Courses({
  name: 'Curso Unreal'
})

class LearningPath {
  constructor ({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [
    cursoPrograBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});
const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    cursoDataBusiness,
    cursoDataviz,
  ],
});
const escuelaVgs= new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    cursoUnity,
    cursoUnreal,
  ],
});

class Student {
  constructor({
    name,
    userName,
    email,
    age,
    job,
    aprovedCourses,
    learningPaths,
    facebook,
    twitter,
    instagram,
  }) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.age = age;
    this.job = job;
    this.aprovedCourses = [];
    this.learningPaths = [];
    this.socialMedia = {
      facebook,
      twitter,
      instagram,  
    };
  }
}

const kevin = new Student({
  name: 'Kevin',
  email: 'kevin@gmail.com',
  userName:'K-ser',
  facebook: 'Ke Iv',
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});