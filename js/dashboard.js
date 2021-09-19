

export default function DashboardCall(){
        
    
function dashboard(){
    $('#dashboard').html(`
    <div class="col-sm-4 mx-auto my-4">
    <div class="card">
        <img src="img/menu/" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">tes</h5>
        <h6 class="card-subtitle text-muted mt-2">tes</h6>
        <h6 class="card-subtitle text-muted mt-2">id:tes</h6>
        <h6 class="card-subtitle text-muted fs-6 mt-2">Harga:tes</h6>
        <p class="card-text mt-2">tes</p>
        <a href="" class="btn btn-primary my-auto mx-auto tambah">+</a>
        <a href="" class="btn btn-primary my-auto mx-auto kurang">-</a>
        </div>
    </div>
    </div> 
    `);
}

dashboard();       


    $('.nav-link').on('click',function(){
        $('#dashboard').html('');
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        let kategori = $(this).html();
        $("#kategori").html(kategori);

        if(kategori == 'Home'){
            $('#dashboard').html(`
            <div class="col-sm-4 mx-auto my-4">
            <div class="card">
                <img src="img/menu/" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">tes</h5>
                <h6 class="card-subtitle text-muted mt-2">tes</h6>
                <h6 class="card-subtitle text-muted mt-2">id:tes</h6>
                <h6 class="card-subtitle text-muted fs-6 mt-2">Harga:tes</h6>
                <p class="card-text mt-2">tes</p>
                <a href="" class="btn btn-primary my-auto mx-auto tambah">+</a>
                <a href="" class="btn btn-primary my-auto mx-auto kurang">-</a>
                </div>
            </div>
            </div> 
            `);
        }
    })




}