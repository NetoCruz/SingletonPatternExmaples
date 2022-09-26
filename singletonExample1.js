const alumnos = {
    // Todos los alumnos
    listaAlumnos : [],

    // Obtener un alumno
    get: function(id) {
         return this.listaAlumnos[id]
    }, 

    // Crear un alumno
    crear: function(datos) {       
         this.listaAlumnos.push(datos);
    }, 

    // Listar todos los alumnos
    listado: function() {
         return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Jesus', 
    edad: 30
}
const infoAlumno2 = {
    nombre: 'Juan',
    edad: 20
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();
console.log(listado);
//(2) [{…}, {…}]
//0: {nombre: "Jesus", edad: 30}
//1: {nombre: "Juan", edad: 20}

const alumno = alumnos.get(0);
console.log(alumno);
//{nombre: "Jesus", edad: 30}