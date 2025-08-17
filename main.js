// No dynamic logic required for this minimalist design.
// You may expand this file for interactive effects if needed in future.
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Depeche Mode - Enjoy The Silence (Loop)</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    #player {
      width: 100vw;
      max-width: 1280px;
      height: 720px;
      max-height: 80vh;
      box-shadow: 0 0 32px #000;
    }
  </style>
</head>
<body>
  <!-- YouTube player container -->
  <div id="player"></div>
  <script>
    // Carga la API de YouTube
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    let player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: 'aGSKrC7dGcY',
        playerVars: {
          'autoplay': 1,
          'controls': 1,
          'loop': 1,
          'playlist': 'aGSKrC7dGcY', // Necesario para loop en embed
          'fs': 1,
          'modestbranding': 1,
          'rel': 0,
          'showinfo': 0
        },
        events: {
          'onReady': function(e) { e.target.playVideo(); }
        }
      });
    }
  </script>
</body>
</html>
