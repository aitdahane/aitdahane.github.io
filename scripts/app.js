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
    console.log('mo3', 'email', email);
    console.log('mo3', 'message', message);
}

function openUrl(url) {
    window.open(url, '_blank')
}