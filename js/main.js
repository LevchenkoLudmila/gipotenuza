const input1 = document.querySelector ('.kat1');
console.log (input1);
input1.addEventListener('chenge', () =>{
    const a = Number(document.querySelector('.kat1').value);
    document.querySelector('.gipotenuza1').innerHTML = a;
});

const input2 = document.querySelector('.kat2');
console.log (input2);
input2.addEventListener('change', () => {
   const b = Number(document.querySelector('.kat2').value);
   document.querySelector('.gipotenuza1').innerHTML = b;
});
const gipotenuzaDiv = document.querySelector('.gipotenuza1');
console.log (gipotenuzaDiv);
gipotenuzaDiv.addEventListener('chenge', () => {
    const result = Math.sqrt(a*a + b*b);
    return result;
});

