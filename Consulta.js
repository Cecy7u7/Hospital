class Consulta extends Expediente{
    Quienloatendio;
    Fecha;
    Diagnistico;
    Proximaconsulta;

    constructor(date,diagnostico,sigconsult){
        this.Quienloatendio = Doctor;
        this.Fecha = date;
        this.Diagnistico = diagnostico;
        this.Proximaconsulta = sigconsult;
    }

}
