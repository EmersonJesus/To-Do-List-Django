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
                    
                </button>
            </div>
        `;
    }
}