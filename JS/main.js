let el = document.querySelector('.try');


const el1 = document.querySelector('input[name="try2"]');
console.log(el1);
el1.addEventListener('change', (ev) => {
    const text = ev.target.value;

    el.innerHTML =(text);
    console.log(text);


});

