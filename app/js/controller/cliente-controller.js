import Clientes from '../model/Clientes';
import Cliente from '../model/Cliente';
import Conta from '../model/Conta';
export default class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputCpf =
            document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputConta.value);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        this.clientes.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    inserirContaNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
