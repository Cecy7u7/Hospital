class Paciente extends Persona {
    Fechanaci;
    Curp;
    Altura;
    Peso;

    constructor(naci,id,alt,kilos){
        this.Fechanaci = naci;
        this.Curp = id;
        this.Altura = alt;
        this.Peso = kilos;
    }

}

Altura = function(){
    return `La altura es${this.alt}`;
}
Peso = function(){
    return `El peso es${this.kilos}`;
}