      // You can also require other files to run in this process
      require('./renderer.js');
      var OS = require('./node_modules/opensubtitles-api');
      var OpenSubtitles = new OS('TemporaryUserAgent');

      var srt2vtt = require('./node_modules/srt-to-vtt')
      var fs = require('fs')

      const vttedit = require('vtt-live-edit');

      var WebTorrent = require('./node_modules/webtorrent-hybrid-electron');
      var client = new WebTorrent();


      var OSDbHash = require('osdb-hash');

      $(document).keyup(function (e){
        if (e.keyCode == 107) {
          console.log("+ sub", );
          vttedit.addOffset('player', 0.5);    // Add 500ms offset
        }
        if (e.keyCode == 109) {
          console.log("- sub", );
          vttedit.removeOffset('player', 0.5); // Remove 500ms offset
       }
      });     

      function openNewWindow(hash, imdb) {
        $('#player-container').css('display','block');
        var torrentId = hash
        var movieId = imdb

        client.add(torrentId, function (torrent) {
        // Torrents can contain many files. Let's use the first.
        var file = torrent.files.find(function (file) {
          return file.name.endsWith('.mp4')
        })

        osdb = new OSDbHash(file);            

        var osdbName = osdb.filename.name;
        var osdbLenght = osdb.filename.length;
        

        console.log("osdb: ", osdb);
        
        // var file = torrent.files[0]
        // var file2 = torrent.files[1]

        // Display the file by adding it to the DOM.
        // Supports video, audio, image files, and more!
        // file.appendTo('#player')
        // file2.appendTo('#player')
        // $('video#player').videoSub();

        OpenSubtitles.search({
            sublanguageid: 'es',        // Can be an array.join, 'all', or be omitted.
            extensions: ['srt', 'vtt'],  // Accepted extensions, defaults to 'srt'. {{subtitles.es.utf8}}
            imdbid: movieId,           // 'tt528809' is fine too.
            filename: osdbName,
            filesize: osdbLenght,
        }).then(function (subtitles) {
            console.log("subtitles: ", subtitles);
            // $('video#player').videoSub();
            if(subtitles){
              $("#player-container").html('<video scr="" poster="" id="player" preload="auto" autoplay="autoplay" playsinline controls></video>');
              file.renderTo('video#player');
              $("#player").append('<track id="player-subtitle" kind="subtitles" label="Español" src="'+subtitles.es.vtt+'" srclang="es" default />');
              $("#player").append('<track id="player-subtitle" kind="subtitles" label="English" src="'+subtitles.en.vtt+'" srclang="en" default />');
              // const player = new Plyr('#player');
            } else{
              $("#player-container").html('<video scr="" poster="" id="player" preload="auto" autoplay="autoplay" playsinline controls></video>');
              file.renderTo('video#player');
              // const player = new Plyr('#player');
            }            
        });          
      })
      }