var darbai = document.getElementsByClassName('darbas');

console.log(darbai);

a=0;
while (darbai.length>a){

    if(a % 2 == 0) {
        darbai[a].style.backgroundColor = 'green';
    }
    a++
}
