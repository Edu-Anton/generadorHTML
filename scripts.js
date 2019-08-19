let nuevaEtiqueta = document.querySelector('#crearEtiqueta').value

document.getElementById('btnCrearEtiqueta').addEventListener('click', function(){
    var node = document.createElement('option')
    var text = document.createTextNode(nuevaEtiqueta)
    node.appendChild(text)
    document.getElementById('selectCrearEtiqueta').appendChild(node)
})