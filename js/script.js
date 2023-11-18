document.querySelector('#entrada').onclick = function() {
    if (document.querySelector('#nova-tarefa input').value.length == 0){
        alert('Por favor insira uma tarefa!');
    }
    else {
        document.querySelector('#lista-tarefas').innerHTML 
        += `
            <div class="tarefa">
                <span id="tarefa-nome">
                    ${document.querySelector('#nova-tarefa input').value}
                </span>
                <button class="deletar">
                    <i class='bx bx-trash-alt'></i>
                </button>
            </div>
        `;

        var tarefaAtual = document.querySelectorAll(".deletar");
        for(var i=0; i<tarefaAtual.length; i++){
            tarefaAtual[i].onclick = function() {
                this.parentNode.remove();
            };
        }

        var tarefas = document.querySelectorAll(".tarefa");
        for(var i=0; i<tarefas.length; i++){
            tarefas[i].onclick = function () {
                this.classList.toggle('completada');
            }
        }

        document.querySelector("#nova-tarefa input").value = '';
    }
}