	// TRACKERS
	var trackers = "&tr=udp:\/\/open.demonii.com:1337\/announce&tr=http:\/\/tracker.trackerfix.com\/announce&tr=udp:\/\/9.rarbg.to:2710&tr=udp:\/\/9.rarbg.me:2710&tr=udp:\/\/exodus.desync.com:6969&tr=udp:\/\/tracker.coppersurfer.tk:6969&tr=udp:\/\/tracker.leechers-paradise.org:6969&tr=udp:\/\/tracker.openbittorrent.com:80&tr=udp:\/\/glotorrents.pw:6969\/announce&tr=udp:\/\/tracker.opentrackr.org:1337\/announce&tr=udp:\/\/torrent.gresille.org:80\/announce&tr=udp:\/\/p4p.arenabg.com:1337&tr=udp:\/\/tracker.internetwarriors.net:1337&tr=http:\/\/www.siambt.com\/announce.php&tr=http:\/\/bttracker.crunchbanglinux.org:6969\/announce&tr=http:\/\/www.eddie4.nl:6969\/announce&tr=http:\/\/mgtracker.org:2710\/announce&tr=wss:\/\/tracker.btorrent.xyz&tr=wss:\/\/tracker.fastcast.nz&tr=wss:\/\/tracker.openwebtorrent.com&tr=http:\/\/open.nyaatorrents.info:6544\/announce&tr=http:\/\/9.rarbg.com:2710\/announceUDP&tr=http:\/\/announce.torrentsmd.com:6969\/announceUDP&tr=udp:\/\/castradio.net:6969\/announceUDP&tr=http:\/\/castradio.net:6969\/announceUDP&tr=udp:\/\/tracker.coppersurfer.tk:6969\/announceUDP&tr=http:\/\/tracker.coppersurfer.tk:6969\/announceUDP&tr=udp:\/\/coppersurfer.tk:6969\/announceUDP&tr=http:\/\/coppersurfer.tk:6969\/announceUDP&tr=udp:\/\/open.demonii.com:1337\/announceUDP&tr=udp:\/\/open.demonii.com:6969\/announceUDP&tr=http:\/\/open.demonii.com:1337\/announceUDP&tr=http:\/\/open.demonii.com:6969\/announceUDP&tr=udp:\/\/exodus.desync.com:80\/announceUDP&tr=udp:\/\/exodus.desync.com:6969\/announceUDP&tr=udp:\/\/tracker.glotorrents.com:6969\/announceUDP&tr=http:\/\/tracker.glotorrents.com:6969\/announceUDP&tr=udp:\/\/tracker.leechers-paradise.org:80\/announceUDP&tr=udp:\/\/tracker.leechers-paradise.org:6969\/announceUDP&tr=http:\/\/tracker.leechers-paradise.org:80\/announceUDP&tr=http:\/\/tracker.leechers-paradise.org:6969\/announceUDP&tr=udp:\/\/tracker.openbittorrent.com:80\/announceUDP&tr=udp:\/\/tracker.openbittorrent.com:6969\/announceUDP&tr=http:\/\/tracker.openbittorrent.com:80\/announceUDP&tr=http:\/\/tracker.openbittorrent.com:6969\/announceUDP&tr=udp:\/\/tracker.publicbt.com:80\/announceUDP&tr=udp:\/\/tracker.publicbt.com:6969\/announceUDP&tr=http:\/\/tracker.publicbt.com:80\/announceUDP&tr=http:\/\/tracker.publicbt.com:6969\/announceUDP&tr=udp:\/\/tracker.x4w.co:6969\/announceUDP&tr=http:\/\/tracker.x4w.co:6969\/announceUDP";

	// PAGINATION INIT
	var page_value = 0;
	var pageToSave = JSON.stringify(page_value);
	localStorage.setItem("pagina", pageToSave);

	// DATASET
	var hash, imdb, magnet, title, rating, poster, genre, background;
	var proxy = "none";
	var protocol = "http://";	
	var provider = "ytsag";
	var page_key;
	var sort_key = "&sort_by=";
	var sort_value = "rating";
	var sort = sort_key+sort_value;
	var order_key = "&order_by=";
	var order_value = "desc";
	var order = order_key+order_value;
	var quality_key ="&quality=";
	var quality_value ="1080p";
	var quality = quality_key+quality_value;
	var limit_items_key = "&limit=";
	var limit_items_value = 24; // 12, 24, 48 (bootstrap friendly query must be divisible for 1, 2, 3 and 4)
	var limit = limit_items_key+limit_items_value;
	var type_key = "&type=";
	var type_value = "movie";
	var type = type_key+type_value;	

	switch (proxy) {
		case "none": 						proxy = ""; 											break;
		case "crossorigin":					proxy = "http://crossorigin.me/";						break;
		case "corsproxy": 					proxy = "http://cors-proxy.htmldriven.com/?url=";		break;
		case "whateverorigin": 				proxy = "http://www.whateverorigin.org/get?url=";		break;
		case "corsanywhere": 				proxy = "https://cors-anywhere.herokuapp.com/";			break;
		case "corsio": 						proxy = "https://cors.io/?";							break;
		case "drysierra94326": 				proxy = "http://dry-sierra-94326.herokuapp.com/";		break;
		case "thingproxy": 					proxy = "https://thingproxy.freeboard.io/fetch/";		break;
		case "corsnowsh": 					proxy = "https://cors.now.sh/";							break;
		case "freecorsproxy": 				proxy = "https://free-cors-proxy.herokuapp.com";		break;
		case "corsproxyourbuildo": 			proxy = "https://corsproxy.our.buildo.io";				break;
		case "corsifyme": 					proxy = "http://www.corsify.me/";						break;
		case "gobetween": 					proxy = "http://gobetween.oklabs.org/pipe/";			break;
		case "corshyooru": 					proxy = "http://cors.hyoo.ru/";							break;
		case "cors4js": 					proxy = "https://cors4js.appspot.com/?url=";			break;
		case "fuckcors": 					proxy = "http://fuck-cors.com/?url=";					break;
		case "proxysauce": 					proxy = "https://proxy-sauce.glitch.me/";				break;
		case "corsproxydotcom": 			proxy = "http://www.corsproxy.com/";					break;
		case "goxcors": 					proxy = "http://goxcors.appspot.com/";					break;
		case "cors-proxy": 					proxy = "https://cors-proxy.taskcluster.net";			break;
		case "jsonp": 						proxy = "http://jsonp.herokuapp.com/";					break;
		case "anyorigin": 					proxy = "http://anyorigin.com/go/?url=";				break;
		case "corsy": 						proxy = "http://corsy.rs.af.cm/?get=";					break;
		case "crossproxy": 					proxy = "https://crossproxy.me/";						break;
		case "galvanize-cors": 				proxy = "https://galvanize-cors-proxy.herokuapp.com/";	break;
		case "cors-buster": 				proxy = "https://cors-buster.now.sh/?href="; 			break;
	}

	function catalogue(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value) {
		var html = "";
		html+='<div id="movie-box-'+'" class="movie-box col-lg-2 col-md-3 col-sm-6 col-xs-12" style="position:relative;float:left;">';
		html+='<img id="img-movie-box-'+hash+'" class="hover-luz" title="'+title+'" alt="'+title+'" src="'+poster+'" onclick="openNewWindow(&#39;'+magnet+'&#39;,&#39;'+imdb+'&#39;)"/>';
		html+='<div id="movie-rating-star-'+imdb+'" class="movie_rating_star"></div></div>';
		$('#movies').append(html);
	}	

	function loadMore() {
		// PAGINATION INIT
		page_value = localStorage.getItem("pagina");
		page_value = parseInt(page_value);
		page_value = page_value+1;
		var pageToSave = JSON.stringify(page_value)
		localStorage.setItem("pagina", pageToSave);

		switch (provider) {
			case "ytsto":				protocol = "https://"; endpoint = "yts.to/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "torrentsapi":			protocol = "https://"; endpoint = "api.torrentsapi.com/list?"; 					type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsag": 				protocol = "https://"; endpoint = "yts.ag/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytslt": 				protocol = "https://"; endpoint = "yts.lt/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsvc": 				protocol = "https://"; endpoint = "yts.vc/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsam": 				protocol = "https://"; endpoint = "yts.am/api/v2/list_movies.json?"; 			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsis": 				protocol = "https://"; endpoint = "yify.is/index.php/api/v2/list_movies.json?";	type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsph": 				protocol = "https://"; endpoint = "yts.ph/api/v2/list_movies.json?";			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsli": 				protocol = "https://"; endpoint = "yts.li/api/v2/list_movies.json?";			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "ytsre": 				protocol = "http://";  endpoint = "yts.re/api/list.json?";						type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "eztv_popcorntimews":	protocol = "https://"; endpoint = "popcorntime.ws/api/eztv/shows/";				type_value = "";	page_key = "";			parameters = "";					   break;
			case "eztvapi_ml": 			protocol = "https://"; endpoint = "eztvapi.ml/shows/";							type_value = "";	page_key = "";			parameters = "";					   break;
			case "haruhichan": 			protocol = "http://";  endpoint = "ptp.haruhichan.com/list.php?";				type_value = "all";	page_key = "page=";		parameters = type; 			  	 	   break;
			case "popcornwvnbg7jev": 	protocol = "https://"; endpoint = "popcornwvnbg7jev.onion.to/shows/";			type_value = "";	page_key = "";			parameters = ""; 				 	   break;
			case "animetorrentsapi": 	protocol = "http://";  endpoint = "api.anime.torrentsapi.com/list?";			type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
			case "waifu": 				protocol = "http://";  endpoint = "anime.waifu.ca/tvshows/all?";				type_value = "";	page_key = "page=";		parameters = ""; 				 	   break;
			case "apiprivatetorrents": 	protocol = "http://";  endpoint = "api.apiprivatetorrents.com/movies";			type_value = "";	page_key = "page=";		parameters = ""; 				 	   break;
			case "ptapitsxaabevfvk": 	protocol = "https://"; endpoint = "ptapitsxaabevfvk.onion.to/shows/";			type_value = "";	page_key = "";			parameters = ""; 				 	   break;
			case "butter": 				protocol = "http://";  endpoint = "butter.vodo.net/popcorn";					type_value = "";	page_key = "";			parameters = ""; 				 	   break;
			case "torrentsapishows": 	protocol = "https://"; endpoint = "api.torrentsapi.com/shows?cb=";				type_value = "";	page_key = "&page=";	parameters = sort+order+quality+limit; break;
		}	

		var page = page_key+page_value;
		var api_url = proxy+protocol+endpoint+page+parameters;
		
		$.getJSON(api_url, function (data) {
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
			$.each(json_data, function (i, item) {
				switch (provider) {
					case "torrentsapi": 		hash = item.items[0].id; 		imdb = item.imdb; 		magnet = item.items[0].torrent_magnet; 										title = item.title; 			rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			content_value = "";			break;
					case "ytsag": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image;		content_value = item.id;	break;
					case "ytslt": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image;		content_value = item.id;	break;
					case "ytsvc": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image;		content_value = item.id;	break;
					case "ytsam": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image;		content_value = item.id;	break;
					case "ytsis": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.medium_cover_image; 	content_value = item.id;	break;
					case "ytsli": 				hash = item.torrents[0].hash; 	imdb = item.imdb_code; 	magnet = "magnet:?xt=urn:btih:"+hash+"&dn="+escape(item.title)+trackers; 	title = item.title; 			rating = item.rating; 		poster = item.medium_cover_image; 	genre = item.genres[0]; background = item.background_image; 	content_value = item.id;	break;
					case "eztv_popcorntimews": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		content_value = ""; 		break;
					case "haruhichan": 			hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.name; 				rating = ""; 				poster = item.malimg; 				genre = ""; 			background = item.malimg; 				content_value = "";			break;
					case "popcornwvnbg7jev": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		content_value = "";			break;
					case "animetorrentsapi": 	hash = item.items[0].id; 		imdb = item.imdb; 		magnet = item.items[0].torrent_magnet; 										title = item.title; 			rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			content_value = "";			break;
					case "waifu": 				hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.tvshow.name; 		rating = ""; 				poster = item.tvshow.covers.medium; genre = ""; 			background = item.tvshow.cover_url; 	content_value = "";			break;
					case "apiprivatetorrents": 	hash = ""; 						imdb = ""; 				magnet = item.torrents[0].magnet; 											title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = item.genres[0]; background = item.images.backdrops[0]; 	content_value = "";			break;
					case "ptapitsxaabevfvk": 	hash = ""; 						imdb = item.imdb_id; 	magnet = ""; 																title = item.title; 			rating = ""; 				poster = item.images.poster; 		genre = ""; 			background = item.images.fanart; 		content_value = "";			break;
					case "butter": 				hash = ""; 						imdb = item.ImdbCode; 	magnet = item.TorrentUrl; 													title = item.MovieTitleClean; 	rating = item.MovieRating; 	poster = item.CoverImage; 			genre = ""; 			background = item.CoverImage; 			content_value = "";			break;
					case "torrentsapishows": 	hash = ""; 						imdb = item.imdb; 		magnet = ""; 																title = item.title; 		  	rating = item.rating; 		poster = item.poster_med; 			genre = item.genres[0]; background = item.poster_big; 			content_value = "";			break;
				}
				catalogue(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value);
				var moviesXrow = 5;
				if (i % moviesXrow == 0 )  {
					$('#movies').append("<div></div>");
				}
				else {}
				i++;				
			});	
			// PAGINATION
			page=page++;
		});	
	}; // EOF loadMore()

	// PAGINATION
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		loadMore();
		}
	});
	$(document).ready(function() {
		loadMore();
	});
