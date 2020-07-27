let moviesList = [];

function $(selector) { return document.querySelector(selector) }

let nameInput = $('[name = name]'),
    yearInput = $('[name = year]'),
    producerInput = $('[name = producer]');

let allResults = $('#all-movies');

let yearResults = $('#year-movies'),
    producerResults = $('#producer-movies');

let yearFilterInput = $('[name = year-filter]'),
    producerFilterInput = $('[name = producer-filter]');

$('#add').addEventListener('click', () => {
    moviesList.push({
        name: nameInput.value,
        year: parseInt(yearInput.value) || 1888,
        producer: producerInput.value
    });
    nameInput.value = yearInput.value = producerInput.value = '';
    updateAllLists();
});

$('#filter-year').addEventListener('click', updateYearList);
$('#filter-producer').addEventListener('click', updateProducerList);

function updateAllLists()
{
    updateMainList();
    updateYearList();
    updateProducerList();
}

function updateMainList()
{
    updateList(allResults, moviesList);
}

function updateYearList()
{
    updateList(yearResults, moviesList.filter(
        movie => movie.year === parseInt(yearFilterInput.value)
    ));
}

function updateProducerList()
{
    updateList(producerResults, moviesList.filter(
        movie => movie.producer === producerFilterInput.value
    ));
}

function updateList(list, values)
{
    list.innerHTML = '';
    values.forEach((movie) => {
        let li = document.createElement("li");
        li.textContent = `${movie.name} (${movie.year}) from ${movie.producer}`;
        list.appendChild(li);
    });
}

$('#generate').addEventListener('click', (e) => {
    moviesList = [];
    for (let i = 0; i < 100; i++) {
        moviesList.push({
            name: 'Movie ' + getRandomInt(0, 1000),
            year: getRandomInt(2010, 2020),
            producer: 'Producer ' + getRandomInt(0, 10)
        });
    }
    updateAllLists();
    e.preventDefault();
});

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}