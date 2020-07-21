var detailImage = document.querySelector('.detail-image');
var thumbnails = document.querySelectorAll('a');
var detailTitle = document.querySelector('.detail-title');
var detailFrame = document.querySelector('.detail-frame');

function setDetails(thumbnail) {
    detailImage.setAttribute('src', thumbnail.getAttribute('href'));
    detailTitle.textContent = thumbnail.getAttribute('data-detail-title');
}

function showDetails() {
    detailFrame.classList.add('is-tiny');
    setTimeout(function () {
        detailFrame.classList.remove('is-tiny');
    }, 0 )
}

function addListener(thumbnail) {
    thumbnail.addEventListener('click', function(event) {
        console.log(event)
        event.preventDefault()// cancel default behavior of another page loading
        setDetails(thumbnail);
        showDetails();
    })
}
// thumbnails.forEach(addListener);
for (var i = 0; i < thumbnails.length; i++) {
    addListener(thumbnails[i]);
}
