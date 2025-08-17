// No dynamic logic required for this minimalist design.
// You may expand this file for interactive effects if needed in future.
<!-- Reproduce en loop el video de Depeche Mode al abrir la página -->
<div id="player"></div>
<script>
  // Carga la API de YouTube
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'aGSKrC7dGcY',
      playerVars: {
        'autoplay': 1,
        'controls': 1,
        'loop': 1,
        'playlist': 'aGSKrC7dGcY' // Necesario para el loop
      },
      events: {
        'onReady': function(event) { event.target.playVideo(); }
      }
    });
  }
</script>
