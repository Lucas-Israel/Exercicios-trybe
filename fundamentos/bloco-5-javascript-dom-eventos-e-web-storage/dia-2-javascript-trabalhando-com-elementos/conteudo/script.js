let b1 = document.getElementById('elementoOndeVoceEsta');
console.log(b1);
let parentb1 = b1.parentElement;
parentb1.style.color = 'red';
let pneto = document.getElementById('primeiroFilhoDoFilho');
pneto.innerText = 'adicionando texto';
let pai = document.getElementById('pai');
let pFiPai = pai.firstElementChild;
console.log(pFiPai);
console.log(b1.previousElementSibling);
let atenOnde = b1.nextSibling;
console.log(atenOnde);
let terFiOnde = b1.nextElementSibling;
console.log(terFiOnde);
let terFiPai = pai.lastElementChild.previousElementSibling;
console.log(terFiPai);