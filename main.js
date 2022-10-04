function playVideo(id) {
  const urlSecreta = `https://enlacesecreto.com/${id}`;
  console.log(`Se esta reproduciendo ${urlSecreta}`);
}
function stopVideo(id) {
  const urlSecreta = `https://enlacesecreto.com/${id}`;
  console.log(`Se ha pausado ${urlSecreta}`);
}

class listClass {
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
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;

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
  name: 'Curso de Programación Básica',
  isFree: true,
  lang: 'spanish',
})
//tratar de cambiar el nombre del curso
// cursoPrograBasica.name = 'Nuevo nombre que se le quiera poner'

const cursoDefinitivoHTML = new Courses({
  name: 'Curso definitivo de HTML y CSS'
})
const cursoPracticoHTML = new Courses({
  name: 'Curso práctico de HTML y CSS',
  lang: 'english',
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

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  aproveCourse(newCourse) {
    if(newCourse.isFree) {
      this.aprovedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name} solo puedes tomar cursos abiertos`)
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  aproveCourse(newCourse) {
    if(newCourse.lang !== 'english') {
      this.aprovedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name} solo puedes tomar en idioma español`)
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  aproveCourse(newCourse) {
      this.aprovedCourses.push(newCourse);
  }
}


const kevin = new BasicStudent({
  name: 'Kevin',
  email: 'kevin@gmail.com',
  userName:'K-ser',
  facebook: 'Ke Iv',
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const Pau = new FreeStudent({
  name: 'Pua',
  email: 'pau@gmail.com',
  userName:'LaPau',
  facebook: 'Pau Gar',
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
})