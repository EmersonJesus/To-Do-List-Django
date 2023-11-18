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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAqklEQVRIS2NkoDFgpLH5DIQscAA6YD4QK+BwyAOgeCIQH8DlUEIWgAyQJ+BLkBpFci34D9WIyyGE5AkGESEDCMljWADTQGncw32M7nWaWwBzOUGvo3kRp3qyI4/aFqC7kBAfbj+xPiBkIMVBNGoBRr4iNUhG44Bg0URxEBGygWQLPgBN5CdkKpr8Q2w1H66cDKoqFxBRm8HsABmegK3qJFRlkugJTOU0twAAUHk4GewN7TMAAAAASUVORK5CYII="/>
                </button>
            </div>
        `;
    }
}