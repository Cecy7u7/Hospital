class Expediente extends Doctor{
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