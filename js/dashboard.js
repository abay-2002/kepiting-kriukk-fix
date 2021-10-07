export default function DashboardCall() {
  function dashboard() {
    $("#dashboard").html(`
    <!-- BANNER -->
      <div id="banner">
        <div class="banner-text">
          <p class="text-center text-wrap">
            
          </p>
        </div>
      </div>
    `);
  }

  dashboard();

  $(".nav-link").on("click", function () {
    
    $("#dashboard").html("");
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    let kategori = $(this).html();

    if (kategori == "Home") {
      $("#kategori").html('');
      $("#dashboard").html(`
      <!-- BANNER -->
      <div id="banner">
        <div class="banner-text">
          <p class="text-center text-wrap">
            
          </p>
        </div>
      </div>
        `);
    }
  });
}
