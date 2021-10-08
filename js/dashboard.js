export default function DashboardCall() {
  function dashboard() {
    $("#dashboard").html(`
    <!-- BANNER -->
    <div id="banner">
      <div class="banner-text">
        <h1 class="text-center text-wrap">
          Kepiting Kriukk
        </h1>
        <h2 class="text-center text-wrap">
          By:Kia
        </h2>
      </div>
    </div>
    <!-- ABOUT -->
    <div id="about" class="costum-hero-desc-wrapper">
      <div class="container costum-flex">
        <div class="costum-flex-items">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/menu/menuKepitingKriukk_01.png" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/menu/menuKepitingKriukk_02.png" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/menu/menuKepitingKriukk_03.png" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/menu/menuKepitingKriukk_04.png" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/menu/menuKepitingKriukk_05.png" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/menu/menuKepitingKriukk_06.png" class="d-block w-100 rounded">
              </div>
            </div>
          </div>
        </div>
        <div class="costum-flex-items">
          <div>
            <h1>Kepiting Kriukk?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laudantium maiores accusamus reprehenderit mollitia in quis voluptas vel eum laboriosam quibusdam consectetur consequuntur facilis nemo natus amet architecto earum odio.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- OUR WORK -->
    <div id="ourwork" class="costum-hero-desc-wrapper">
      <div class="container costum-flex">
        <div class="costum-flex-items">
          <div>
            <h1>Siapa kami?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laudantium maiores accusamus reprehenderit mollitia in quis voluptas vel eum laboriosam quibusdam consectetur consequuntur facilis nemo natus amet architecto earum odio.
            </p>
          </div>
        </div>
        <div class="costum-flex-items">
          <div id="carouselExampleIndicatorsOurWorks" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicatorsOurWorks" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicatorsOurWorks" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicatorsOurWorks" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/home-siapa-kami/siapa-kami-1.jpg" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/home-siapa-kami/siapa-kami-2.jpg" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/home-siapa-kami/siapa-kami-3.jpg" class="d-block w-100 rounded">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FRANCHISE -->
    <div id="franchise" class="costum-hero-desc-wrapper">
      <div class="container costum-flex">
        <div class="costum-flex-items">
          <div id="carouselExampleIndicatorsFranchise" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicatorsFranchise" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicatorsFranchise" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicatorsFranchise" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/home-siapa-kami/siapa-kami-1.jpg" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/home-siapa-kami/siapa-kami-2.jpg" class="d-block w-100 rounded">
              </div>
              <div class="carousel-item">
                <img src="img/home-siapa-kami/siapa-kami-3.jpg" class="d-block w-100 rounded">
              </div>
            </div>
          </div>
        </div>
        <div class="costum-flex-items">
          <div>
            <h1>Franchise</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laudantium maiores accusamus reprehenderit mollitia in quis voluptas vel eum laboriosam quibusdam consectetur consequuntur facilis nemo natus amet architecto earum odio.
            </p>
          </div>
        </div>
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
          <h1 class="text-center text-wrap">
            Kepiting Kriukk
          </h1>
          <h2 class="text-center text-wrap">
            By:Kia
          </h2>
        </div>
      </div>
      <!-- ABOUT -->
      <div id="about" class="costum-hero-desc-wrapper">
        <div class="container costum-flex">
          <div class="costum-flex-items">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/menu/menuKepitingKriukk_01.png" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/menu/menuKepitingKriukk_02.png" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/menu/menuKepitingKriukk_03.png" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/menu/menuKepitingKriukk_04.png" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/menu/menuKepitingKriukk_05.png" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/menu/menuKepitingKriukk_06.png" class="d-block w-100 rounded">
                </div>
              </div>
            </div>
          </div>
          <div class="costum-flex-items">
            <div>
              <h1>Kepiting Kriukk?</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laudantium maiores accusamus reprehenderit mollitia in quis voluptas vel eum laboriosam quibusdam consectetur consequuntur facilis nemo natus amet architecto earum odio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- OUR WORK -->
      <div id="ourwork" class="costum-hero-desc-wrapper">
        <div class="container costum-flex">
          <div class="costum-flex-items">
            <div>
              <h1>Siapa kami?</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laudantium maiores accusamus reprehenderit mollitia in quis voluptas vel eum laboriosam quibusdam consectetur consequuntur facilis nemo natus amet architecto earum odio.
              </p>
            </div>
          </div>
          <div class="costum-flex-items">
            <div id="carouselExampleIndicatorsOurWorks" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicatorsOurWorks" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsOurWorks" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsOurWorks" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/home-siapa-kami/siapa-kami-1.jpg" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/home-siapa-kami/siapa-kami-2.jpg" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/home-siapa-kami/siapa-kami-3.jpg" class="d-block w-100 rounded">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- FRANCHISE -->
      <div id="franchise" class="costum-hero-desc-wrapper">
        <div class="container costum-flex">
          <div class="costum-flex-items">
            <div id="carouselExampleIndicatorsFranchise" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicatorsFranchise" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsFranchise" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsFranchise" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/home-siapa-kami/siapa-kami-1.jpg" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/home-siapa-kami/siapa-kami-2.jpg" class="d-block w-100 rounded">
                </div>
                <div class="carousel-item">
                  <img src="img/home-siapa-kami/siapa-kami-3.jpg" class="d-block w-100 rounded">
                </div>
              </div>
            </div>
          </div>
          <div class="costum-flex-items">
            <div>
              <h1>Franchise</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laudantium maiores accusamus reprehenderit mollitia in quis voluptas vel eum laboriosam quibusdam consectetur consequuntur facilis nemo natus amet architecto earum odio.
              </p>
            </div>
          </div>
        </div>
      </div>
        `);
    }
  });
}
