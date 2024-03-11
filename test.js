let imgBX = document.querySelectorAll('.imgBX')
let contentBX = document.querySelectorAll('.contentBX')

for (let i=0; i<imgBX.length; i++){
    imgBX[i].addEventListener('mouseover', function(){
        for(i=0; i<contentBX.length; i++){
            contentBX[i].className = 'contentBX'
        }
        document.getElementById(this.dataset.id).
        className = 'contentBX active'

        for (let i=0; i<imgBX.length; i++){
            imgBX[i].className = 'imgBX'
        }
        this.className = 'imgBX active'
    })
} 