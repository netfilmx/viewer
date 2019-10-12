$(document).ready(function() {
	setTimeout(function() {
		$("#preloader").css("display","none")
	}, 5000);
});
function catalogue(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value) {
	var html = "";
	html+='<div id="movie-box-'+'" class="movie-box col-lg-2 col-md-3 col-sm-6 col-xs-12" style="position:relative;float:left;">';
	// html+='<a href="'+magnet+'" target="_blank">';
	html+='<img id="img-movie-box-'+hash+'" class="hover-luz" title="'+title+'" alt="'+title+'" src="'+poster+'" onclick="openNewWindow(&#39;'+magnet+'&#39;,&#39;'+imdb+'&#39;)"/>';
	html+='<div id="movie-rating-star-'+imdb+'" class="movie_rating_star"></div></div>';
	// html+='</a>';
	$('#movies').append(html);
}