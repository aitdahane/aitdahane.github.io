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

function openUrl(url) {
    window.open(url, '_blank')
}

