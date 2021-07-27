function navigateToPage(pageId) {
    const pageElement = document.getElementById(pageId);
    const allPagesElements = document.getElementsByClassName('section');
    Array.prototype.forEach.call(allPagesElements, (element) => {
        element.classList.add('is-disabled');
    });
    pageElement.classList.remove('is-disabled');
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
