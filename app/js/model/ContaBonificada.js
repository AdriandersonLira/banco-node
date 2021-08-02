import Conta from './Conta';
export default class ContaBonificada extends Conta {
    constructor(numero, saldo) {
        super(numero, saldo);
    }
    creditar(valor) {
        super.creditar(valor * 1.1);
    }
}
