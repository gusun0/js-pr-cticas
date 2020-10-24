const container = document.querySelector('.container'); 
const seats = document.querySelectorAll('.row .seat:not(.ocuppied)');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


populateUI();


// use + to parse string to number
let ticketPrice = +movieSelect.value;

//console.log(typeof ticketPrice);

// save selected movie index and price

function setMovieData(movieIndex, moviePrice)
{
 localStorage.setItem('selectedMovieIndex',movieIndex);
 localStorage.setItem('selectedMoviePrice',moviePrice);
}



function updateSelectedCount(){
 const selectedSeats = document.querySelectorAll('.row .seat.selected'); 
// console.log(selectedSeats);

//console.log(selectedSeats);

// COPY SELECTED SEATS INTO ARR
// MAP TROUGH ARRAY
// RETURN A NEW ARRAY INDEXES

const seatsIndex = [...selectedSeats].map((seat) => {
	return [...seats].indexOf(seat);
});



localStorage.setItem('selectedSeats',JSON.stringify( seatsIndex));


console.log(seatsIndex);



 const selectedSeatsCount = selectedSeats.length;

// console.log(selectedSeatsCount);
	
 count.innerText = selectedSeatsCount;
 total.innerText = selectedSeatsCount * ticketPrice;
}


// GET DATA FROM LOCALSTORAGE AND POPULATE UI
function populateUI()
{
const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

//console.log(selectedSeats);

if(selectedSeats != null && selectedSeats.length > 0)
{
	seats.forEach((seat,index)=> {
		if(selectedSeats.indexOf(index) > -1){
			seat.classList.add('selected');	
		}
	});
}

	const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

	if(selectedMovieIndex != null)
	{
		movieSelect.selectedIndex = selectedMovieIndex;	
	}
}




// Movie select event
movieSelect.addEventListener('change', e => {
	ticketPrice = +e.target.value;
	setMovieData(e.target.selectedIndex,e.target.value);
	updateSelectedCount();

});



container.addEventListener('click', function(e){
//	console.log(e.target);		

	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
	{
		// podemos usar toggle o add / remove
		e.target.classList.toggle('selected');



		updateSelectedCount();

	}

});


// initial count and total set 

updateSelectedCount();



