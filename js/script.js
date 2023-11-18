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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAuElEQVRIS2NkoDFgpLH5DHgt+P//vwPQAfOBWAGHQx4AxRMZGRkP4HIoIQtABsgT8OUDoAWK5FrwH6QRaABWhwB9iFcerBef6wgZQEgewwKYBkojHtnHKD6guQUwlxPjdWRf4lNPduRR1QJ0FxLiI1tOlA8IGUhxEI1agJGvSA2S0TggWDRRHESEbCDHgg9AQ/kJGYwm/xBYimLUfLhyMqiqXEBEbQaz4yGQkYCt6hzYSp/EIMKqHADevM4Z3dg9agAAAABJRU5ErkJggg=="/>
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