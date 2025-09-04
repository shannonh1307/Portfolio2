// email ID:   template_cs75bhk
// Service ID:   service_dxah7h7
//  my public key:  vuqne6zv0ClzSecAl
let isModalOpen = false;
let contrastToggle = false; 
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    // console.log(x, y)

    for (let i=0; i<shapes.length; ++i) {
        const idOdd = i % 2 !==0;
        const dirMultiplier = idOdd ? -1 : 1 ;
        shapes[i].style.transform = `translate(${x * dirMultiplier}px, ${y * dirMultiplier}px)`
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_dxah7h7',
            'template_cs75bhk',
            event.target,
            'vuqne6zv0ClzSecAl'
        ) .then (() => {
            // throw new Error('error');    <<=tests error catch line
            loading.classList.remove ("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            console.log ('worked!')
        }).catch (() =>{
            loading.classList.remove ("modal__overlay--visible");
            alert('The email service is temporarily unavailable. Please contact me directly at ShannonH1307@gmail.com')
        })
}


function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove ("modal__open");        
    }
    else {
        isModalOpen=true;
        return document.body.classList += " modal__open"
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle; 
    if (contrastToggle){
    document.body.classList += " dark-theme"
    }
    else {
    document.body.classList.remove ("dark-theme")
    }
}