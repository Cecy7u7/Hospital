class Expediente extends Doctor{
    Enfermedad;
    Alergia;

    constructor(reaccion,padecimiento){
        this.Enfermedad = padecimiento;
        this.Alergia = reaccion;
    }

}

decirenfermedad = function(){
    return `La enfermedda es${this.padecimiento}`;
}