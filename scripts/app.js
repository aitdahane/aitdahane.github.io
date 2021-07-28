(function() {
    emailjs.init("user_WLKz5YYQdsHP8G4EUWHSL");
})();

function navigateToPage(pageId) {
    const allPagesElements = document.getElementsByClassName('section');
    Array.prototype.forEach.call(allPagesElements, (element) => {
        element.classList.add('is-disabled');
    });
    const pageElement = document.getElementById(pageId);
    pageElement.classList.remove('is-disabled');

    const allLinkElements = document.getElementsByClassName('nav-link');
    Array.prototype.forEach.call(allLinkElements, (element) => {
        element.classList.remove('is-active');
    });
    const btnLinkElement = document.getElementById(`${pageId}-nav-link`);
    btnLinkElement.classList.add('is-active');
}

function sendMessage() {
    const formElement = document.getElementById('contactForm');
    const getFormValue = (key) => formElement.elements[key].value;
    const email = getFormValue('email');
    const message = getFormValue('message');
    /*
    emailjs.send('contact_service', 'template_5mk1l0u', { email, message })
        .then(function() {
            displaySuccessToast();
            formElement.reset();
        }, function(error) {
            displayErrorToast(error);
        });
    }
    */
}

function openUrl(url) {
    window.open(url, '_blank')
}

function displaySuccessToast() {
    console.log('SUCCESS!');
}

function displayErrorToast(error) {
    console.log('FAILED...', error);
}
