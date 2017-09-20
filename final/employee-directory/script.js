var API_DATA;
var mainContainer = document.getElementById('container');
var overlay = document.getElementById('overlay');

var bigCard = document.createElement('div');
bigCard.className = 'big-card';

var exitButton = document.createElement('span');
exitButton.className = 'big-card__exit';
exitButton.innerHTML = 'x';

var bigProfilePicture = document.createElement('img');
bigProfilePicture.className = 'big-card__picture';

var bigName = document.createElement('h2');
bigName.className = 'big-card__name';

var pContainer = document.createElement('div');
pContainer.className = 'p-container';

var bigUsername = document.createElement('p');
bigUsername.className = 'big-card__username';

var bigEmail = document.createElement('p');
bigEmail.className = 'big-card__email';

var bigCity = document.createElement('p');
bigCity.className = 'big-card__city';

var horizontalRule = document.createElement('div');
horizontalRule.className = 'big-card__horizontal-rule';

var bigNumber = document.createElement('p');
bigNumber.className = 'big-card__number';

var bigAddress = document.createElement('p');
bigAddress.className = 'big-card__address';

var bigDOB = document.createElement('p');
bigDOB.className = 'big-card__dob';

var nextButton = document.createElement('span');
nextButton.className = 'next-button';
var prevButton = document.createElement('span');
prevButton.className = 'prev-button';
var searchInput = document.getElementById('search');


pContainer.appendChild(bigEmail);
pContainer.appendChild(bigUsername);
pContainer.appendChild(bigCity);
pContainer.appendChild(horizontalRule);
pContainer.appendChild(bigNumber);
pContainer.appendChild(bigAddress);
pContainer.appendChild(bigDOB);

bigCard.appendChild(exitButton);
bigCard.appendChild(bigProfilePicture);
bigCard.appendChild(bigName);
bigCard.appendChild(pContainer);


var previous = document.getElementById('prev');
var next = document.getElementById('next');

$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us,gb,nz,au',
    dataType: 'json',
    success: function(data) {
        API_DATA = data.results;
        console.log(API_DATA);

        searchInput.addEventListener('input', function() {
            var filter = searchInput.value;
            console.log(filter);
            if (filter) {
                $('#container').find('h2:contains('+ filter +')').parent().parent().fadeIn('slow');
                $('#container').find('h2:not(:contains('+ filter +'))').parent().parent().fadeOut('slow');
            } else {
                $('#container').find('.person-container').slideDown();
            }
        });

        API_DATA.forEach(function(person, index) {
            var personContainer = document.createElement('div');
            var personPicture = document.createElement('img');
            var personName = document.createElement('h2');
            var userName = document.createElement('p');
            var personEmail = document.createElement('p');
            var personLocation = document.createElement('p');
            personLocation.className = 'location-card';
            var textContainer = document.createElement('div');
            var pictureContainer = document.createElement('div');


            personPicture.setAttribute('src', person.picture.large);
            personPicture.className = 'person-picture';

            personName.innerHTML = person.name.first + ' ' + person.name.last;
            userName.innerHTML = person.login.username;
            personEmail.innerHTML = person.email;
            personLocation.innerHTML = person.location.city;

            pictureContainer.appendChild(personPicture);
            textContainer.appendChild(personName);
            textContainer.appendChild(userName);
            textContainer.appendChild(personEmail);
            textContainer.appendChild(personLocation);
            personContainer.appendChild(pictureContainer);
            personContainer.appendChild(textContainer);
            personContainer.className = 'person-container';
            personContainer.addEventListener('click', function() {
                getCurrentPerson(person, index);

            });



            mainContainer.appendChild(personContainer);
        });



    }
});

overlay.addEventListener('click', function() {
    hideOverlay();
});

nextButton.addEventListener('click', function() {
    getNextPerson();
});

prevButton.addEventListener('click', function() {
    getPrevPerson();
});

exitButton.addEventListener('click', function() {
    overlay.style.display = 'none';
    $(bigCard).remove();
    bigCard.style.display = 'none';
});

function hideOverlay() {
    overlay.style.display = 'none';
    $(bigCard).remove();
    bigCard.style.display = 'none';
}

function getCurrentPerson(currentPerson, index) {
    thisPerson = currentPerson;
    thisIndex = index;

    $(bigCard).insertAfter(overlay);

    overlay.style.display = 'block';
    bigCard.style.display = 'block';

    bigProfilePicture.setAttribute('src', currentPerson.picture.large);
    bigName.innerHTML = currentPerson.name.first + ' ' + currentPerson.name.last;
    bigEmail.innerHTML = currentPerson.email;
    bigUsername.innerHTML = currentPerson.login.username;
    bigCity.innerHTML = currentPerson.location.city;
    bigNumber.innerHTML = currentPerson.cell;
    bigAddress.innerHTML = currentPerson.location.street + ', ' + currentPerson.location.city + ', ' + currentPerson.nat + ' ' + currentPerson.location.postcode;
    var date = new Date(currentPerson.dob);
    bigDOB.innerHTML = 'Birthday: ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

    prevButton.innerHTML = 'Prev';
    bigCard.appendChild(prevButton);

    nextButton.innerHTML = 'Next';
    bigCard.appendChild(nextButton);


}

function getNextPerson() {
    if (API_DATA[thisIndex + 1]) {
        thisPerson = API_DATA[thisIndex + 1];
        getCurrentPerson(thisPerson, thisIndex + 1);
    }
}

function getPrevPerson() {
    if (API_DATA[thisIndex - 1]) {
        thisPerson = API_DATA[thisIndex - 1];
        getCurrentPerson(thisPerson, thisIndex - 1);
    }
}








