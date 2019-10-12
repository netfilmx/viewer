// REQUIRES
require('./renderer.js'); // You can also require other files to run in this process
var OS = require('./node_modules/opensubtitles-api');
var OpenSubtitles = new OS('TemporaryUserAgent');
var srt2vtt = require('./node_modules/srt-to-vtt')
var fs = require('fs')
const vttedit = require('vtt-live-edit');
var WebTorrent = require('./node_modules/webtorrent-hybrid-electron');
var OSDbHash = require('osdb-hash');      

$(document).keyup(function (e){
  if (e.keyCode == 107) {
    vttedit.addOffset('player', 0.5);    // Add 500ms offset
  }
  if (e.keyCode == 109) {
    vttedit.removeOffset('player', 0.5); // Remove 500ms offset
  }
});

function openNewWindow(hash, imdb) {
  $("#preloader").css("display","block");
  var client = new WebTorrent();

  var torrentId = hash
  var movieId = imdb

  client.add(torrentId, function (torrent) { // Torrents can contain many files. Let's use the first.
    var file = torrent.files.find(function (file) {
      return file.name.endsWith('.mp4')
    })

    var osdb = new OSDbHash(file);
    if (osdb) {
      var osdbName = osdb.filename.name;
      var osdbLenght = osdb.filename.length;
    }   

    OpenSubtitles.search({
      sublanguageid: 'es',        // Can be an array.join, 'all', or be omitted.
      extensions: ['srt', 'vtt'],  // Accepted extensions, defaults to 'srt'. {{subtitles.es.utf8}}
      imdbid: movieId,           // 'tt528809' is fine too.
      filename: osdbName,
      filesize: osdbLenght
    }).then(function (subtitles) {
        if(subtitles){
          $('#player-container').css('display','block');
          $("#player-container").html('<video scr="" poster="" id="player" preload="auto" autoplay="autoplay" playsinline controls></video>');
          file.renderTo('video#player');
          $("#player").append('<track id="player-subtitle" kind="subtitles" label="Español" src="'+subtitles.es.vtt+'" srclang="es" default />');
          $("#player").append('<track id="player-subtitle" kind="subtitles" label="English" src="'+subtitles.en.vtt+'" srclang="en" default />');
          $("#preloader").css("display","none");
        } else {
          $('#player-container').css('display','block');
          $("#player-container").html('<video scr="" poster="" id="player" preload="auto" autoplay="autoplay" playsinline controls></video>');
          file.renderTo('video#player');
          $("#preloader").css("display","none");
        }            
    });          
  })
}