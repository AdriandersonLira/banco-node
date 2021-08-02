import Cliente from './Cliente';
import Conta from './Conta';

class ClienteEspecial extends Cliente {
  private dependentes: Array<Cliente>;

  constructor(nome: string, cpf: string, conta: Conta) {
    super(nome, cpf, conta);

    this.dependentes = new Array<Cliente>();
  }

  adicionarDependente(dependente: Cliente) {
    this.dependentes.push(dependente);
  }

  removerDependente(dependente: Cliente) {
    this.dependentes.splice(this.dependentes.indexOf(dependente), 1);
  }
}