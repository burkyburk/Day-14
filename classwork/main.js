$(document).ready(onReady);

function onReady() {
	console.log();
	$('#searchbutton').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		console.log($('#search-box').val());
	}


	var x = blah
	var y = blah
	$('#results').html(var);



	// function imdbSearch(query, year, type, tomatoes)	{
	// 	$.get(
	// 		'http://www.omdbapi.com',
	// 		{s: query,
	// 			y: year,
	// 			type: type,
	// 			tomatoes: tomatoes 
	// 		},
	// 		onSearchResults, 
	// 		'json'
	// 		);
	// }

	// function tomatoMeter(imdbID)	{
	// 	$.get(
	// 		'http://www.omdbapi.com',
	// 		{
	// 			i: imdbID, 
	// 			tomatoes: true
	// 		},
	// 		onTomatoResults,
	// 		'json'
	// );
	// }

	// function onSearchResults(data)	{
	// 	console.log(data);
	// 	console.log(data.Search[0].imdbID);
	// 	tomatoMeter(data.Search[0].imdbID);
	// }
	// function onTomatoResults(data)	{
	// 	console.log(data);
	// }
	// var searchTerm = 'Godfather';
	// var year = 1972;
	// var type = 'movie';
	// var tomatoes = true;
	// imdbSearch(searchTerm, year, type, tomatoes);

}