const btnswitch = document.querySelector('#switch');

btnswitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');

    //Guardamos el modo local storage//
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//obtenemos el modo actural en el cual nos encontramos//
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnswitch.classList.add('active');
}else {
    document.body.classList.remove('dark');
    btnswitch.classList.remove('active');
}