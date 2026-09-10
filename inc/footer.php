
  <footer>
    <div class="grid-container">
      <div class="grid-x grid-margin-x align-top">
        <div class="small-10 small-offset-1 medium-6 medium-offset-0 cell">
          <h4>ACHET surge en 2025 ante la necesidad de necesidad de crear un espacio permanente de diálogo y reflexión,
            tras más de una década de colaboración académica de investigadoras e investigadores del trabajo.</h4>
          <a href="page-achet.html" class="button large">Saber más</a>
        </div>
        <div class="small-10 small-offset-1 medium-3 medium-offset-1  cell">
          <h5>Novedades</h5>
          <div id="rss-feeds"></div>
        </div>
      </div>
    </div>
  </footer>








  <script src="node_modules/jquery/dist/jquery.js"></script>
  <script src="node_modules/what-input/dist/what-input.js"></script>
  <script src="node_modules/foundation-sites/dist/js/foundation.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-rss/3.3.0/jquery.rss.min.js"></script>
  <script src="js/app.js"></script>
  <script>
    jQuery(function($) {
    $("#rss-feeds").rss(
        "http://achetchile.cl/blog/rss", // Replace with your RSS feed URL
        {
            limit: 3, // How many entries to display
            layoutTemplate: "<ul class='menu-footer'>{entries}</ul>",
            entryTemplate: "<li><a href='{url}' target='_blank'>{title}</a></li>"
        }
    );
});
  </script>
</body>

</html>