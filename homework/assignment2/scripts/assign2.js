$(document).ready(onReady);

function onReady() {
	$('#searchbutton').on('click', onSearchButtonClick);

	
function onSearchButtonClick() {
		$('#results').html(imdbSearch($('#search-box').val()));
		
	}



function imdbSearch(query)	{
		$.get(
			'http://www.omdbapi.com',
			{s: query,
				},
			onSearchResults, 
			'json'
			);
	}


function onSearchResults(data){
console.log(data);
	}

	
	// $('#results').val(imdbSearch($('#search-box').val()));



// 	function imdbSearch(query)	{
// 		$.get(
// 			'http://www.omdbapi.com',
// 			{s: query,
// 				},
// 			onSearchResults, 
// 			'json'
// 			);
// 	}

// 	function tomatoMeter(imdbID)	{
// 		$.get(
// 			'http://www.omdbapi.com',
// 			{
// 				i: imdbID, 
// 				tomatoes: true
// 			},
// 			onTomatoResults,
// 			'json'
// 	);
// 	}


// 	function onSearchResults(data)	{
// 		console.log(data);
// 		console.log(data.Search[0].imdbID);
// 		tomatoMeter(data.Search[0].imdbID);
// 	}
// 	function onTomatoResults(data)	{
// 		console.log(data);
// 	}
// 	var searchTerm = 'Godfather';
// 	var year = 1972;
// 	var type = 'movie';
// 	var tomatoes = true;
// 	imdbSearch(searchTerm, year, type, tomatoes);

}