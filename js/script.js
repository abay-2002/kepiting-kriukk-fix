function semuaMenu(){
    $.getJSON("data/menu.json", function (data) {
    let menu = data.menu;
        $.each(menu, function (i, element) {
            $("#list-menu").append(`
                <div class="col-sm-4 mx-auto my-4">
                    <div class="card">
                        <img src="img/menu/`+element.gambar+`" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">`+element.nama+`</h5>
                        <h6 class="card-subtitle text-muted mt-2">Rasa: `+element.rasa+`</h6>
                        <h6 class="card-subtitle text-muted fs-6 mt-2">Harga: `+element.harga+`</h6>
                        <p class="card-text mt-2">`+element.deskripsi+`</p>
                        <a href="" class="btn btn-primary my-auto mx-auto tambah">+</a>
                        <a href="" class="btn btn-primary my-auto mx-auto kurang">-</a>
                        </div>
                    </div>
                </div>`
            );
        });
        // pengulangan dan event untuk class tambah untuk dijadikan cart
        let tambah = $('.tambah');
        let nilaiAwal = 0;
        for(i=0; i<tambah.length; i++){
            let tambahItem = $('.tambah')[i];
            $(tambahItem).on('click',function(event){
                event.preventDefault();
                nilaiAwal += 1;
                console.log(nilaiAwal);
            });
        }
    });
}


semuaMenu();

function backup(){
$("#backup").html(`
                <form class="mt-6">
                    <div class="mb-3">
                    <h3 class="text-center mt-6">Akan segera tersedia :D</h3>
                    <h4 class="text-center">Berikan saranmu :)</h4>
                    <label for="exampleInputEmail" class="form-label">Alamat email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail" required>
                    <label for="exampleInputText" class="form-label mt-4">Saran:</label>
                    <input type="text" class="form-control" id="exampleInputText" required>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Kirim</button>
                </form>
                `);
};

// navbar
$('.nav-link').on('click',function(){
    $('#backup').html("");
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    let kategori = $(this).html();
    $("#kategori").html(kategori);

    if (kategori == "Semua menu") {
        $("#list-menu").html("");
        semuaMenu();
        return;
    }
    
    $.getJSON("data/menu.json", function(data){
        let menu = data.menu;
        let content = "";

        $.each(menu, function(i, element){
            console.log(element.kategori);
            if(element.kategori == (kategori.toLowerCase())){
                content += `
                <div class="col-sm-4 mx-auto my-4">
                    <div class="card">
                        <img src="img/menu/`+element.gambar+`" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">`+element.nama+`</h5>
                        <h6 class="card-subtitle text-muted mt-2">Rasa: `+element.rasa+`</h6>
                        <h6 class="card-subtitle text-muted fs-6 mt-2">Harga: `+element.harga+`</h6>
                        <p class="card-text mt-2">`+element.deskripsi+`</p>
                        <a href="" class="btn btn-primary my-auto mx-auto tambah">+</a>
                        <a href="" class="btn btn-primary my-auto mx-auto kurang">-</a>
                        </div>
                    </div>
                </div>
                `;
            }else{
                backup();
            };
        });
        $("#list-menu").html(content);
    });

    // fetch JSON data element object JSON
    // apabila element == kategori
    // replace element child dari id="kategori"
});// event listener
