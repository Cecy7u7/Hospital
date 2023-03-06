class Enfermedad extends Consulta{
    Tratamiento;
    Padecimiento;
    Duracion;

    constructor(medicina,Enfermedad,tiempo){
        this.Tratamiento = medicina;
        this.Padecimiento = Enfermedad;
        this.Duracion = tiempo;
    } 

}
