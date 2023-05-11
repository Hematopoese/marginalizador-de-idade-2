function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('ano')
    var res = document.getElementById('res')

    if(year.value.length == 0 || year.value > ano){
        alert('Preencha todos os campos')
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(year.value)
        var genero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 14){

                img.setAttribute('src', 'img/kidH.jpg')
            }else if(idade < 21){

                img.setAttribute('src', 'img/jovem-homem.jpg')
            }else if(idade < 50){

                img.setAttribute('src', 'img/jovem-homem.jpg')
            }else{
                
                img.setAttribute('src', 'img/manV.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'img/kidM.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'img/womanV.jpg')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos a presença de ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}