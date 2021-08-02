import Cliente from './Cliente';
class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = new Array();
    }
    adicionarDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removerDependente(dependente) {
        this.dependentes.splice(this.dependentes.indexOf(dependente), 1);
    }
}
