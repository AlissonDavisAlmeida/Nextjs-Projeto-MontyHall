export default class Porta{
    #numero
    #isPresente
    #selecionada
    #aberta
    
    constructor(numero, isPresente= false, selecionada = false, aberta = false) {
        
        this.#numero = numero
        this.#isPresente = isPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(){
        return this.#numero
    }

    get isPresente(){
        return this.#isPresente
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }

    desmarcar(){
        const selecionada = false
        return new Porta(this.numero, this.isPresente, selecionada, this.aberta)
    }
    alternarSelecao(){
        const selecionada = !this.selecionada
        return new Porta(this.numero, this.isPresente, selecionada, this.aberta)
    }
    abrir(){
        const aberta = true
        return new Porta(this.numero, this.isPresente, selecionada, aberta)
    }
}