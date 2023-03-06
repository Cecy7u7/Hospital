class Expediente extends Persona{
    Enfermedad;
    Alergia;

    constructor(reaccion,padecimiento){
        this.Enfermedad = padecimiento;
        this.Alergia = reaccion;
    }

}

deirenfermedad = function(){
    return `La enfermedda es${this.consult}`;
}