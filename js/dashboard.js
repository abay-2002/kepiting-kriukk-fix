export default function DashboardCall() {
  function dashboard() {
    $("#dashboard").html(`
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="img/carousel/first-carousel.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="img/carousel/second-carousel.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="img/carousel/first-carousel.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="img/carousel/second-carousel.jpg" class="d-block w-100">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        
        <div class="container mt-4" id="about">
        <div class="row">
            <div class="col sm-6 mx-auto about-img dashboard-img-pc">
            <img src="img/miscellaneous/crab.png" class="img-fluid" alt="crab">
            </div>
            <div class="col sm-6 mx-auto costum-pad">
            <h1 class="extra-bold">Siapa kami?</h1>
            <p class="semi-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, debitis autem id expedita cum ullam adipisci ipsa quo sint beatae recusandae asperiores, eius, esse deserunt eligendi nesciunt porro libero quod.
            </p>
            </div>
        </div>
        <div class="row dashboard-img-web">
            <img src="img/miscellaneous/crab.png" class="img-fluid" alt="crab">
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
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="img/carousel/first-carousel.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="img/carousel/second-carousel.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="img/carousel/first-carousel.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="img/carousel/second-carousel.jpg" class="d-block w-100">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        
        <div class="container mt-4" id="about">
        <div class="row">
            <div class="col sm-6 mx-auto about-img dashboard-img-pc">
            <img src="img/miscellaneous/crab.png" class="img-fluid" alt="crab">
            </div>
            <div class="col sm-6 mx-auto costum-pad">
            <h1 class="extra-bold">Siapa kami?</h1>
            <p class="semi-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, debitis autem id expedita cum ullam adipisci ipsa quo sint beatae recusandae asperiores, eius, esse deserunt eligendi nesciunt porro libero quod.
            </p>
            </div>
        </div>
        <div class="row dashboard-img-web">
            <img src="img/miscellaneous/crab.png" class="img-fluid" alt="crab">
      </div>
    </div>
            `);
    }
  });
}
