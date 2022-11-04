var link_contraste_preto = document.querySelector('#contraste_preto')
var todasAsTags = document.querySelectorAll('*')

link_contraste_preto.addEventListener('click', function(){
    for(let i = 0; i < todasAsTags.length; i++) {
        let tag = todasAsTags[i]

        if(tag.nodeName == 'A') {
            tag.style.backgroundColor = 'white'
            tag.style.color = 'black' 
        } else {
            tag.style.backgroundColor = 'black'
            tag.style.color = 'white'
        }
    }
})

tamanho = 16;
function diminuir(){
  tamanho--;
  document.body.style.fontSize=tamanho+"px";
}
function aumentar(){
  tamanho++;
  document.body.style.fontSize=tamanho+"px";
}