export default class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisarPorCPF(cpf);
        if (clienteARemover) {
            const indiceConta = this._clientes.indexOf(clienteARemover);
            if (indiceConta > -1) {
                this._clientes.splice(indiceConta, 1);
            }
        }
    }
    listar() {
        return this._clientes;
    }
    pesquisarPorCPF(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    pesquisarClientesNegativados() {
        return this._clientes.filter(cliente => cliente.conta.saldo < 0);
    }
}
