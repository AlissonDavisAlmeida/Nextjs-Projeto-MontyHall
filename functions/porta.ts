import PortaModel from "../model/porta";

export function criarPortas( quantidade : number, selecionada : number): PortaModel[]{

    return Array.from({length: quantidade},(_,i)=> {
        const numero = i+1
        const isPresente = numero === selecionada
        return new PortaModel(numero, isPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada : PortaModel):PortaModel[]{
   return portas.map(porta =>{
        const igual = porta.numero === portaModificada.numero ? true : false

        if(igual){
            return portaModificada
        }else{
            return portaModificada.aberta? porta : porta.desmarcar() 
        }
    })
}