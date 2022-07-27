const butnRezult = document.querySelector('.btn');
const gipotenuzaDiv = document.querySelector('.gipotenuza1');
console.log (gipotenuzaDiv);
console.log(butnRezult);
butnRezult.addEventListener('click', () =>{
    let a = Number(document.querySelector ('.katet1').value);
    let b = Number(document.querySelector ('.katet2').value);
    const gip = Math.sqrt((a*a) + (b*b));
    document.querySelector('.gipotenuza1').innerHTML = gip;
});

