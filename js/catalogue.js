$(function () {
	// var tor_url = // ".link .city .to .cab .glass" #ToDo

	var trackers = "&tr=udp:\/\/open.demonii.com:1337\/announce&tr=http:\/\/tracker.trackerfix.com\/announce&tr=udp:\/\/9.rarbg.to:2710&tr=udp:\/\/9.rarbg.me:2710&tr=udp:\/\/exodus.desync.com:6969&tr=udp:\/\/tracker.coppersurfer.tk:6969&tr=udp:\/\/tracker.leechers-paradise.org:6969&tr=udp:\/\/tracker.openbittorrent.com:80&tr=udp:\/\/glotorrents.pw:6969\/announce&tr=udp:\/\/tracker.opentrackr.org:1337\/announce&tr=udp:\/\/torrent.gresille.org:80\/announce&tr=udp:\/\/p4p.arenabg.com:1337&tr=udp:\/\/tracker.internetwarriors.net:1337&tr=http:\/\/www.siambt.com\/announce.php&tr=http:\/\/bttracker.crunchbanglinux.org:6969\/announce&tr=http:\/\/www.eddie4.nl:6969\/announce&tr=http:\/\/mgtracker.org:2710\/announce&tr=wss:\/\/tracker.btorrent.xyz&tr=wss:\/\/tracker.fastcast.nz&tr=wss:\/\/tracker.openwebtorrent.com";
	
	// #ANIME 	http://open.nyaatorrents.info:6544/announce

	// Pagination | Infinite Scrolling
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
	// Pagination | Infinite Scrolling

	// DATASET
	var hash, imdb, magnet, title, rating, poster, genre, background;	
	// DATASET

	var proxy = "none";

	switch (proxy) {
		case "crossorigin":					proxy = "http://crossorigin.me/"; break;
		case "corsproxy": 					proxy = "http://cors-proxy.htmldriven.com/?url="; break; // necesita parsearse
		case "whateverorigin": 			proxy = "http://www.whateverorigin.org/get?url="; break; // necesita parsearse // &callback=?
		case "none": 								proxy = ""; break;
		case "corsanywhere": 				proxy = "https://cors-anywhere.herokuapp.com/";
		case "corsio": 							proxy = "https://cors.io/?"; break;
		case "drysierra94326": 			proxy = "http://dry-sierra-94326.herokuapp.com/"; break;
		case "thingproxy": 					proxy = "https://thingproxy.freeboard.io/fetch/"; break;
		case "corsnowsh": 					proxy = "https://cors.now.sh/";	break;
		case "freecorsproxy": 			proxy = "https://free-cors-proxy.herokuapp.com"; break;
		case "corsproxyourbuildo": 	proxy = "https://corsproxy.our.buildo.io"; break;
		case "corsifyme": 					proxy = "http://www.corsify.me/"; break;
		case "gobetween": 					proxy = "http://gobetween.oklabs.org/pipe/"; break;
		case "corshyooru": 					proxy = "http://cors.hyoo.ru/"; break;
		case "cors4js": 						proxy = "https://cors4js.appspot.com/?url="; break;
		case "fuckcors": 						proxy = "http://fuck-cors.com/?url="; break;
		case "proxysauce": 					proxy = "https://proxy-sauce.glitch.me/"; break;
		case "corsproxydotcom": 		proxy = "http://www.corsproxy.com/"; break;			
		case "goxcors": 						proxy = "http://goxcors.appspot.com/"; break;
		case "cors-proxy": 					proxy = "https://cors-proxy.taskcluster.net"; break;
		case "jsonp": 							proxy = "http://jsonp.herokuapp.com/"; break;
		case "anyorigin": 					proxy = "http://anyorigin.com/go/?url="; break;
		case "corsy": 							proxy = "http://corsy.rs.af.cm/?get="; break;
		case "crossproxy": 					proxy = "https://crossproxy.me/"; break;
		case "galvanize-cors": 			proxy = "https://galvanize-cors-proxy.herokuapp.com/"; break;
		case "cors-buster": 			proxy = "https://cors-buster.now.sh/?href="; break;
		// https://www.test-cors.org/
		// https://jsfiddle.net/1d8cwqo0/1/
		// https://jsfiddle.net/Ln47kyt2/3/
	}


	$("#movies_navbar").click(function() {
  		provider = "ytsis";
  		$("#movies").html("");
		var page_value = 0;
		var pageToSave = JSON.stringify(page_value);
		localStorage.setItem("pagina", pageToSave);
  		loadMore();
	});	
	$("#tvshow_navbar").click(function() {
  		provider = "eztv_popcorntimews";
  		$("#movies").html("");
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
  		loadMore();
	});
	$("#anime_navbar").click(function() {
  		provider = "animetorrentsapi";
  		$("#movies").html("");
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
  		loadMore();
	});
	$("#porn_navbar").click(function() {
  		provider = "apiprivatetorrents";
  		$("#movies").html("");
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);
  		loadMore();
	});	


	var protocol = "http://";	
	var provider = "ytsag";

	var page_key;

	var sort_key = "&sort_by=";
	var sort_value = "rating";
	var sort = sort_key+sort_value;
	// var sort = "";

	var order_key = "&order_by=";
	var order_value = "desc";
	var order = order_key+order_value;
	// var order = "";

	var quality_key ="&quality=";
	var quality_value ="1080p";
	var quality = quality_key+quality_value;

	var limit_items_key = "&limit=";
	var limit_items_value = 24; // 12, 24, 48 (bootstrap friendly query must be divisible for 1, 2, 3 and 4)
	var limit = limit_items_key+limit_items_value;

	var type_key = "&type=";
	var type_value = "movie";
	var type = type_key+type_value;

	function loadMore() {

		// Pagination | Infinite Scrolling
		page_value = localStorage.getItem("pagina");
		page_value = parseInt(page_value);
		page_value = page_value+1;
		var pageToSave = JSON.stringify(page_value)
		localStorage.setItem("pagina", pageToSave);			
		// Pagination | Infinite Scrolling

		

		switch (provider) {
			case "ytsto":				protocol = "https://"; endpoint = "yts.to/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "torrentsapi":			protocol = "https://"; endpoint = "api.torrentsapi.com/list?"; 					type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsag": 				protocol = "https://"; endpoint = "yts.ag/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytslt": 				protocol = "https://"; endpoint = "yts.lt/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsvc": 				protocol = "https://"; endpoint = "yts.vc/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsam": 				protocol = "https://"; endpoint = "yts.am/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsis": 				protocol = "https://"; endpoint = "yify.is/index.php/api/v2/list_movies.json?";	type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsph": 				protocol = "https://"; endpoint = "yts.ph/api/v2/list_movies.json?";			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsli": 				protocol = "https://"; endpoint = "yts.li/api/v2/list_movies.json?";			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break; // NO CORS LOCAL! // IS DEAD
			case "eztv_popcorntimews":	protocol = "https://"; endpoint = "popcorntime.ws/api/eztv/shows/";				type_value = "";	page_key = "";			parameters = "";					   break;
			// #ToDo case "eztvapi_ml": protocol = "https://"; endpoint = "eztvapi.ml/shows/";
			// #ToDo case "http://api.ysubs.com/"
			case "haruhichan": 			protocol = "http://";  endpoint = "ptp.haruhichan.com/list.php?";				type_value = "all";	page_key = "page=";		parameters = type; 			  	 break;
			case "popcornwvnbg7jev": 	        protocol = "https://"; endpoint = "popcornwvnbg7jev.onion.to/shows/";			type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "animetorrentsapi": 	        protocol = "http://";  endpoint = "api.anime.torrentsapi.com/list?";			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "waifu": 				protocol = "http://";  endpoint = "anime.waifu.ca/tvshows/all?";				type_value = "";	page_key = "page=";		parameters = ""; 				 break;
			case "apiprivatetorrents": 	        protocol = "http://";  endpoint = "api.apiprivatetorrents.com/movies";			type_value = "";	page_key = "page=";		parameters = ""; 				 break;
			case "ptapitsxaabevfvk": 	        protocol = "https://"; endpoint = "ptapitsxaabevfvk.onion.to/shows/";			type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "butter": 				protocol = "http://";  endpoint = "butter.vodo.net/popcorn";					type_value = "";	page_key = "";			parameters = ""; 				 break;
			case "torrentsapishows": 	        protocol = "https://"; endpoint = "api.torrentsapi.com/shows?cb=";				type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			// http://yts.re/api/list.json?sort=seeds&limit=50
		}	

		var page = page_key+page_value;

		var api_url = proxy+protocol+endpoint+page+parameters; // proxy+protocol+endpoint+page+parameters;

		console.log("api_url: ", api_url);

		// #ToDo: Search functions
		
		/*
		$.fn.pressEnter = function(fn) {  

		    return this.each(function() {  
			$(this).bind('enterPress', fn);
			$(this).keyup(function(e){
			    if(e.keyCode == 13)
			    {
			      $(this).trigger("enterPress");
			    }
			})
		    });  
		 }; 


		$('#submit').pressEnter(function(){
			$('#movies').html("");

			var search = $("#submit").val();

			location.href = "?q=" + search;


			return false;
		});
		var search_parameter = getUrlParameter('q');
		$.getJSON(api_url+search_parameter, function (data) {
			$('#movies').html("");
			i = 0;
			// #ToDo: refactoring with switch cases			
			json_data = data.data.movies;
			// JSON DATA
			$.each(json_data, function (i, item) {
				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image; 	content_value = item.id;
				catalogue(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value); // api_url, provider, proxy											
				i++;				
			});	
			// Pagination | Infinite Scrolling
			//page=page++;
			// Pagination | Infinite Scrolling
			//$('#movies').append(html);
		});	
		*/
		
		$.getJSON(api_url, function (data) {
			// GET STATUS DATA
			/*
			#ToDo
			Returned Key	Description	Example
			status	The returned status for the API call, can be either 'ok' or 'error'	ok
			status_message	Either the error message or the successful message	Query was successful
			data	If 'status' is returned as 'ok' the API query results will be inside 'data'	data
			*/
			// GET STATUS DATA

			i = 0;
	
			// JSON DATA
			
			switch (provider) {
				case "torrentsapi": 		json_data = data.MovieList; 	break;
				case "ytsag": 				json_data = data.data.movies; 	break;
				case "ytslt": 				json_data = data.data.movies; 	break;
				case "ytsvc": 				json_data = data.data.movies; 	break;
				case "ytsam": 				json_data = data.data.movies; 	break;
				case "ytsis": 				json_data = data.data.movies; 	break;
				case "ytsph": 				json_data = data.data.movies; 	break;					
				case "ytsli": 				json_data = data.data.movies; 	break;
				case "eztv_popcorntimews": 	json_data = data; 				break;
				case "haruhichan": 			json_data = data; 				break;
				case "popcornwvnbg7jev": 	json_data = data; 				break;
				case "animetorrentsapi": 	json_data = data.MovieList; 	break;
				case "waifu": 				json_data = data.data; 			break;
				case "apiprivatetorrents": 	json_data = data.data.movies; 	break;
				case "ptapitsxaabevfvk": 	json_data = data; 				break;
				case "butter": 				json_data = data.downloads; 	break;
				case "torrentsapishows": 	json_data = data.MovieList; 	break;
			}			
	
			// JSON DATA
			$.each(json_data, function (i, item) {
				switch (provider) {
					case "torrentsapi": 		hash = item.items[0].id; 		imdb = item.imdb; 		magnet = item.items[0].torrent_magnet; 										title = item.title; 			rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			content_value = ""; break;
					case "ytsag": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	background = item.background_image; 	content_value = item.id; break; // genre = item.genres[0];
					case "ytslt": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	background = item.background_image; 	content_value = item.id; break; // genre = item.genres[0];
					case "ytsvc": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	background = item.background_image; 	content_value = item.id; break; // genre = item.genres[0];
					case "ytsam": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	background = item.background_image; 	content_value = item.id; break;	// genre = item.genres[0];					
					case "ytsis": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.medium_cover_image; 	content_value = item.id; break;
					case "ytsli": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image; 	content_value = item.id; break;
					case "eztv_popcorntimews": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		content_value = ""; break;
					case "haruhichan": 			hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.name; 				rating = ""; 				poster = item.malimg; 				genre = ""; 			background = item.malimg; 				content_value = ""; break;
					case "popcornwvnbg7jev": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		content_value = ""; break;
					case "animetorrentsapi": 	hash = item.items[0].id; 		imdb = item.imdb; 		magnet = item.items[0].torrent_magnet; 										title = item.title; 			rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			content_value = ""; break;
					case "waifu": 				hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.tvshow.name; 		rating = ""; 				poster = item.tvshow.covers.medium; genre = ""; 			background = item.tvshow.cover_url; 	content_value = ""; break;
					case "apiprivatetorrents": 	hash = ""; 						imdb = ""; 				magnet = item.torrents[0].magnet; 											title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = item.genres[0]; background = item.images.backdrops[0]; 	content_value = ""; break;
					case "ptapitsxaabevfvk": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		content_value = ""; break;
					case "butter": 				hash = ""; 						imdb = item.ImdbCode; 	magnet = item.TorrentUrl; 													title = item.MovieTitleClean; 	rating = item.MovieRating; 	poster = item.CoverImage; 			genre = ""; 			background = item.CoverImage; 			content_value = ""; break;
					case "torrentsapishows": 	hash = ""; 						imdb = item.imdb; 		magnet = ""; 																title = item.title; 		  	rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			content_value = ""; break;
				}
				catalogue(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value); // api_url, provider, proxy											
				// #ToDo make the numbers by bootstrap columns and document witdh!
				var moviesXrow = 5;
				if (i % moviesXrow == 0 )  {
					$('#movies').append("<div></div>");
				}
				else {}
				i++;				
			});	
			// Pagination | Infinite Scrolling
			page=page++;
			// Pagination | Infinite Scrolling
			//$('#movies').append(html);
		});	
	}; //Eof loadMore()		
	// Pagination | Infinite Scrolling		
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		loadMore();
		}
	});
	$(document).ready(function() {
		loadMore();
	});
	// Pagination | Infinite Scrolling
});

/*

// SHOWS

var url = 'http://api.torrentsapi.com/shows?cb='+Math.random()+'&sort=seeds&page=' + ui.home.catalog.page;

*/
/*

SUBTITLES

fetcher.scrappers.torrentsapi_subs = function(movie_id, season, episode, callback){

    var
    baseUrl	= 'http://sub.torrentsapi.com/list?imdb=' + movie_id.replace('tt','').replace(/^0+/,'') + '&s=' + season + '&e=' + episode;

    $.get(baseUrl, function(json){

		try{

			json = jQuery.type( json ) === "string"? JSON.parse(json): json;
			var subs = json.subs || false;

			if(subs){
				var subs_list = [];
				for(var i in subs){

					var
					lang_code	= i || 'xx',
					lang_name	= locale.iso2lang[i] ? locale.iso2lang[i]  : i.capitalize()
					most_rated = [];


					if(subs[i] instanceof Array){
						for(var x=0;x<subs[i].length;x++)
							if(!most_rated[1] || subs[i][x].rating>most_rated[1]){

								most_rated = [[

									subs[i][x].url,
									lang_code,
									lang_name.capitalize()

								], subs[i][x].rating];
							}

						subs_list.push(most_rated[0]);
					}

				}

				callback(subs_list);
			}
			else
				callback(false);


		}
		catch(e){
			console.log(e.message)
			callback(false);
			logger.log('error_scrap_torrentsapi_' + movie_id)
		}

	},'json')

}

fetcher.scrappers.ysubs = function(movie_id, callback){

    var
    baseUrl	= 'http://api.yifysubtitles.com/subs/',
    prefix 	= 'http://www.yifysubtitles.com';

    utils.url_request(baseUrl + movie_id, function(json){

		try{

			json = jQuery.type( json ) === "string"? JSON.parse(json): json;
			var subs = json.subs && json.subs[movie_id] || false;

			if(subs){
				var subs_list = [];
				for(var i in subs){

					var
					lang_code	= locale.lang2iso[i] ? locale.lang2iso[i] : 'xx',
					lang_name	= locale.langs[lang_code] ? locale.langs[lang_code]  : i.capitalize()
					most_rated = [];

					if(subs[i] instanceof Array){
						for(var x=0;x<subs[i].length;x++)
							if(!most_rated[1] || subs[i][x].rating>most_rated[1]){

								most_rated = [[

									prefix + subs[i][x].url,
									lang_code,
									lang_name.capitalize()

								], subs[i][x].rating];
							}

						subs_list.push(most_rated[0]);
					}

				}

				callback(subs_list);
			}
			else
				callback(false);


		}
		catch(e){
			callback(false);
			logger.log('error_scrap_ysubs_' + movie_id)
		}

	})

}


*/

/*

// TRACKERS


Torrent Tracker	Port	Tracker Name
http://9.rarbg.com:2710/announceUDP	2707	RARBG
http://announce.torrentsmd.com:6969/announceUDP	6969	torrentsmd.com
udp://castradio.net:6969/announceUDP	6969	Cast Radio
http://castradio.net:6969/announceUDP	6969	Cast Radio
udp://tracker.coppersurfer.tk:6969/announceUDP	6969	coppersurfer.tk
http://tracker.coppersurfer.tk:6969/announceUDP	6969	coppersurfer.tk
udp://coppersurfer.tk:6969/announceUDP	6969	coppersurfer.tk
http://coppersurfer.tk:6969/announceUDP	6969	coppersurfer.tk
udp://open.demonii.com:1337/announceUDP	1337	Demonii
udp://open.demonii.com:6969/announceUDP	6969	Demonii
http://open.demonii.com:1337/announceUDP	1337	Demonii
http://open.demonii.com:6969/announceUDP	6969	Demonii
udp://exodus.desync.com:80/announceUDP	80	Exodus
udp://exodus.desync.com:6969/announceUDP	6969	Exodus
udp://tracker.glotorrents.com:6969/announceUDP	6969	glotorrents.com
http://tracker.glotorrents.com:6969/announceUDP	6969	glotorrents.com
udp://tracker.leechers-paradise.org:80/announceUDP	80	Leechers-Paradise
udp://tracker.leechers-paradise.org:6969/announceUDP	6969	Leechers-Paradise
http://tracker.leechers-paradise.org:80/announceUDP	80	Leechers-Paradise
http://tracker.leechers-paradise.org:6969/announceUDP	6969	Leechers-Paradise
udp://tracker.openbittorrent.com:80/announceUDP	80	OpenBitTorrent
udp://tracker.openbittorrent.com:6969/announceUDP	6969	OpenBitTorrent
http://tracker.openbittorrent.com:80/announceUDP	80	OpenBitTorrent
http://tracker.openbittorrent.com:6969/announceUDP	6969	OpenBitTorrent
udp://tracker.publicbt.com:80/announceUDP	80	PublicBitTorrent
udp://tracker.publicbt.com:6969/announceUDP	6969	PublicBitTorrent
http://tracker.publicbt.com:80/announceUDP	80	PublicBitTorrent
http://tracker.publicbt.com:6969/announceUDP	6969	PublicBitTorrent
udp://tracker.x4w.co:6969/announceUDP	6969	x4w.co
http://tracker.x4w.co:6969/announceUDP	6969	x4w.co

*/


/*

 var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'https://yts.am/api/v2/list_movies.json?&page=1&sort_by=seeds&quality=720p&limit=24';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  // Success code goes here.
};

xhr.onerror = function() {
  // Error code goes here.
};

xhr.send();

*/