class Courses {
  constructor ({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoPrograBasica = new Courses({
  name: 'Curso de Programación Básica'

})
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