import Cliente from './Cliente';
export default class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisarPorCPF(cpf);
        if (clienteARemover) {
            const indiceConta = this._clientes.indexOf(clienteARemover);
            if (indiceConta > -1) {
                this._clientes.splice(indiceConta, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }

    pesquisarPorCPF(cpf: string): Cliente {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }

    pesquisarClientesNegativados(): Array<Cliente> {
        return this._clientes.filter(cliente => cliente.conta.saldo < 0);
    }
}
