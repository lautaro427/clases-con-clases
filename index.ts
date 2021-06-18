class Departamento{
    nombreDepto: string;
    constructor(nombreDepto:string){
        this.nombreDepto = nombreDepto;
    }
    getName (){
        return this.nombreDepto;
    }
}

class Piso{
    nombre: string;
    departamentos: Departamento[];
    constructor(nombre: string){
        this.nombre = nombre;
        this.departamentos = [];
    }
    pushDepartamento (departamento: Departamento){
        return this.departamentos.push(departamento);
    }
    getDepartamentos(): Departamento[]{
        return this.departamentos;
    }
}

class Edificio{
    pisos: Piso[];
    constructor(pisos: Piso[],){
        this.pisos = pisos;
    }
    addDepartamentoToPiso(nombreDePiso: string, departamento:Departamento){
        const pisoEncontrado =  this.pisos.find(p=>p.nombre == nombreDePiso);
        pisoEncontrado.pushDepartamento(departamento);
        

    }
    getDepartamentosByPiso(nombreDelPiso:string):Departamento[]{
        const pisoEncontrado =  this.pisos.find((p)=>p.nombre == nombreDelPiso);
        return pisoEncontrado.getDepartamentos(); 
    }
}

function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();
