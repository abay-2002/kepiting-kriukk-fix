// var tempNamespace = {};
// var myString = "myVarProperty";

// tempNamespace[myString] = 5;
// console.log(tempNamespace);


let totalHarga = 0;
let totalQuantity = 0;

let totalHarga1 = 0;
let totalQuantity1 = 0;

let totalHarga2 = 0;
let totalQuantity2 = 0;

let totalHarga3 = 0;
let totalQuantity3 = 0;

let totalHarga4 = 0;
let totalQuantity4 = 0;

let totalHarga5 = 0;
let totalQuantity5 = 0;

let totalHarga6 = 0;
let totalQuantity6 = 0;



$.getJSON('data/menu.json', function(data){      
    // let menu = data.menu;
    // $.each(menu, function(i,element){
    //     harga = parseInt(element.harga);
    // }); 

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
                            <h6 class="card-subtitle text-muted mt-2">id: `+element.addId+`</h6>
                            <h6 class="card-subtitle text-muted fs-6 mt-2">Harga: Rp.`+element.harga+`.000,00</h6>
                            <p class="card-text mt-2">`+element.deskripsi+`</p>
                            <a href="" class="btn btn-primary btn-khusus my-auto mx-auto tambah" id="`+element.addId+`">+</a>
                            <a href="" class="btn btn-primary btn-khusus my-auto mx-auto kurang" id="R`+element.removeId+`">-</a>
                            </div>
                        </div>
                    </div>`
                );
                // pengulangan dan event untuk button tambah dan kurang produk

                let hargaFix = parseInt(element.harga);
                
                let idTambah = element.addId;
                let idTambahPilih = $(`#`+idTambah+``);
                idTambahPilih.on('click',function(event){
                    event.preventDefault();
                    
                    console.log(hargaFix);

                    fixTambah = idTambahPilih[0].id;
                    console.log("id terpilih tambah"+fixTambah);

                    if(fixTambah == 0){
                        return 0;
                    }else if(fixTambah == 1){
                        totalHarga1 += hargaFix;
                        totalQuantity1 += 1;
                        console.log(totalHarga1);
                    }
                    else if(fixTambah == 2){
                        totalHarga2 += hargaFix;
                        totalQuantity2 += 1;
                        console.log(totalHarga2);
                    }
                    else if(fixTambah == 3){
                        totalHarga3 += hargaFix;
                        totalQuantity3 += 1;
                        console.log(totalHarga3);
                    }
                    else if(fixTambah == 4){
                        totalHarga4 += hargaFix;
                        totalQuantity4 += 1;
                        console.log(totalHarga4);
                    }
                    else if(fixTambah == 5){
                        totalHarga5 += hargaFix;
                        totalQuantity5 += 1;
                        console.log(totalHarga5);
                    }
                    else if(fixTambah == 6){
                        totalHarga6 += hargaFix;
                        totalQuantity6 += 1;
                        console.log(totalHarga6);
                    }
                    popUpCheckout();
                });




                
                let idKurang = element.removeId;
                let idKurangPilih = $(`#R`+idKurang+``);
                idKurangPilih.on('click', function(event){
                    event.preventDefault();

                    console.log(hargaFix);
                
                    fixKurang = idKurangPilih[0].id;
                    console.log("id terpilih"+fixKurang);

                    if(fixKurang == `R`+0+``){
                        return 0;
                    }else if(fixKurang == `R`+1+``){
                        if(totalHarga1 >= hargaFix){
                        totalHarga1 -= hargaFix;
                        totalQuantity1 -= 1;
                        console.log(totalHarga1);
                        }else{
                            return 0;
                        }
                    }
                    else if(fixKurang == `R`+2+``){
                        if(totalHarga2 >= hargaFix){
                            totalHarga2 -= hargaFix;
                            totalQuantity2 -= 1;
                            console.log(totalHarga2);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+3+``){
                        if(totalHarga3 >= hargaFix){
                            totalHarga3 -= hargaFix;
                            totalQuantity3 -= 1;
                            console.log(totalHarga3);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+4+``){
                        if(totalHarga4 >= hargaFix){
                            totalHarga4 -= hargaFix;
                            totalQuantity4 -= 1;
                            console.log(totalHarga4);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+5+``){
                        if(totalHarga5 >= hargaFix){
                            totalHarga5 -= hargaFix;
                            totalQuantity5 -= 1;
                            console.log(totalHarga5);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+6+``){
                        if(totalHarga6 >= hargaFix){
                            totalHarga6 -= hargaFix;
                            totalQuantity6 -= 1;
                            console.log(totalHarga6);
                            }else{
                                return 0;
                            }
                    }
                    popUpCheckoutRemove();
                });
            });
        });
    }

    semuaMenu();





    // navbar
    $('.nav-link').on('click',function(){
        $('#list-menu').html('');
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
                if(element.kategori == kategori.toLowerCase()){
                    content += `
                    <div class="col-sm-4 mx-auto my-4">
                        <div class="card">
                            <img src="img/menu/`+element.gambar+`" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">`+element.nama+`</h5>
                            <h6 class="card-subtitle text-muted mt-2">Rasa: `+element.rasa+`</h6>
                            <h6 class="card-subtitle text-muted mt-2">id: `+element.addId+`</h6>
                            <h6 class="card-subtitle text-muted fs-6 mt-2">Harga: `+element.harga+`</h6>
                            <p class="card-text mt-2">`+element.deskripsi+`</p>
                            <a href="" class="btn btn-primary btn-khusus my-auto mx-auto tambah" id="`+element.addId+`">+</a>
                            <a href="" class="btn btn-primary btn-khusus  my-auto mx-auto kurang" id="R`+element.removeId+`">-</a>
                            </div>
                        </div>
                    </div>
                    `;
                }
                $("#list-menu").html(content);
            });
            // pengulangan untuk button tambah dan kurang produk
            $.each(menu, function(i, element){
                let hargaFix = parseInt(element.harga);

                let idTambah = element.addId;
                let idTambahPilih = $(`#`+idTambah+``);
                idTambahPilih.on('click',function(event){
                    event.preventDefault();
                    
                    console.log(hargaFix);

                    fixTambah = idTambahPilih[0].id;
                    console.log("id terpilih tambah"+fixTambah);

                    if(fixTambah == 0){
                        return 0;
                    }else if(fixTambah == 1){
                        totalHarga1 += hargaFix;
                        totalQuantity1 += 1;
                        console.log(totalHarga1);
                    }
                    else if(fixTambah == 2){
                        totalHarga2 += hargaFix;
                        totalQuantity2 += 1;
                        console.log(totalHarga2);
                    }
                    else if(fixTambah == 3){
                        totalHarga3 += hargaFix;
                        totalQuantity3 += 1;
                        console.log(totalHarga3);
                    }
                    else if(fixTambah == 4){
                        totalHarga4 += hargaFix;
                        totalQuantity4 += 1;
                        console.log(totalHarga4);
                    }
                    else if(fixTambah == 5){
                        totalHarga5 += hargaFix;
                        totalQuantity5 += 1;
                        console.log(totalHarga5);
                    }
                    else if(fixTambah == 6){
                        totalHarga6 += hargaFix;
                        totalQuantity6 += 1;
                        console.log(totalHarga6);
                    }
                    popUpCheckout();
                });

                
                let idKurang = element.removeId;
                let idKurangPilih = $(`#R`+idKurang+``);
                idKurangPilih.on('click', function(event){
                    event.preventDefault();

                    console.log(hargaFix);

                    fixKurang = idKurangPilih[0].id;
                    console.log("id terpilih"+fixKurang);
                    
                    if(fixKurang == `R`+0+``){
                        return 0;
                    }else if(fixKurang == `R`+1+``){
                        if(totalHarga1 >= hargaFix){
                        totalHarga1 -= hargaFix;
                        totalQuantity1 -= 1;
                        console.log(totalHarga1);
                        }else{
                            return 0;
                        }
                    }
                    else if(fixKurang == `R`+2+``){
                        if(totalHarga2 >= hargaFix){
                            totalHarga2 -= hargaFix;
                            totalQuantity2 -= 1;
                            console.log(totalHarga2);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+3+``){
                        if(totalHarga3 >= hargaFix){
                            totalHarga3 -= hargaFix;
                            totalQuantity3 -= 1;
                            console.log(totalHarga3);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+4+``){
                        if(totalHarga4 >= hargaFix){
                            totalHarga4 -= hargaFix;
                            totalQuantity4 -= 1;
                            console.log(totalHarga4);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+5+``){
                        if(totalHarga5 >= hargaFix){
                            totalHarga5 -= hargaFix;
                            totalQuantity5 -= 1;
                            console.log(totalHarga5);
                            }else{
                                return 0;
                            }
                    }
                    else if(fixKurang == `R`+6+``){
                        if(totalHarga6 >= hargaFix){
                            totalHarga6 -= hargaFix;
                            totalQuantity6 -= 1;
                            console.log(totalHarga6);
                            }else{
                                return 0;
                            }
                    }
                    popUpCheckoutRemove();
                    
                });
            });
        });
    });

    



    function popUpCheckout(){
        totalHarga = totalHarga1+totalHarga2+totalHarga3+totalHarga4+totalHarga5+totalHarga6;
        totalQuantity = totalQuantity1+totalQuantity2+totalQuantity3+totalQuantity4+totalQuantity5+totalQuantity6;
        
        if(totalHarga > 0){
        $('#total-container').html(`
            <div class="container">
                <div class="row">
                    <button type="button" class="col-3 mx-auto my-2 btn btn-primary fw-bold" id="checkout">Checkout</button>
                    <p class="text-center col-3 mx-auto my-auto fw-bold text-white" id="total">Total: Rp.`+totalHarga+`.000,00</p>
                    <p class="text-center col-3 mx-auto my-auto fw-bold text-white" id="totalQuantity">Qty:`+totalQuantity+`</p>
                </div>
            </div>
            `);
        }
        else if(totalHarga == 0){
            popUpCheckoutRemovedFix();
        }
    }
    // popUpCheckout();

    function popUpCheckoutRemove(){
        totalHarga = totalHarga1+totalHarga2+totalHarga3+totalHarga4+totalHarga5+totalHarga6;
        totalQuantity = totalQuantity1+totalQuantity2+totalQuantity3+totalQuantity4+totalQuantity5+totalQuantity6;
        if(totalHarga > 0){
            $('#total-container').html(`
                <div class="container">
                    <div class="row">
                        <button type="button" class="col-3 mx-auto my-2 btn btn-primary fw-bold" id="checkout">Checkout</button>
                        <p class="text-center col-3 mx-auto my-auto fw-bold text-white" id="total">Total: Rp.`+totalHarga+`.000,00</p>
                        <p class="text-center col-3 mx-auto my-auto fw-bold text-white" id="totalQuantity">Qty:`+totalQuantity+`</p>
                    </div>
                </div>
                `);
        }
        else if(totalHarga == 0){
            popUpCheckoutRemovedFix();
        }

        
    function popUpCheckoutRemovedFix(){
        $('#total-container').empty();
    }
    }
    // popUpCheckoutRemovedFix();
});







    // pengulangan dan pengecekan kondisi dari global variable untuk kemudian akan dilakukan pengecekan kondisi.

    // let harga = "totalHarga";
    // let banyak = "totalBanyak";


    // let menu = data.menu;
    // $.each(menu, function(i, element){
    //     globalAddId = element.addId;
    //     globalRemoveId = element.removeId;

    //     console.log(globalAddId);
    //     console.log(globalRemoveId);
    // });


    // $.each(menu, function(i, element){
    //     let loopAdd = element.addId;
    //     for(i=0; i<loopAdd.length; i++){
    //         if(globalAddId === fixTambah){
    //             console.log(eval(harga+ ``+fixTambah+``));
    //         }
    //     };
    // });       

    
// var myString = "number";
// eval(myString +" = 9");
// // console.log(number);






// var markers = [];
// var coords = 10;
// for (var i = 0; i < coords.length; i++) {
//     console.log(markers[i] = "some stuff");
// }


// for (var i = 0; i < coords.length; ++i) {
//     var str ="marker"+ i+" = undefined";
//     console.log(eval(str));
// }

// let totalHarga1;
// let jumlahProduk1;
// let elhTotalHarga;

// let addProduk2 = document.getElementById('addProduk2');
// addProduk2.addEventListener('click',function(){
// 	totalHarga2 += 20000;
// 	jumlahProduk2 += 2;
// 	elhTotalHarga += 20000;
// 	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
// });

// let removeProduk2 = document.getElementById('removeProduk2');
// removeProduk2.addEventListener('click',function(){
// 	if(totalHarga2 >= 20000){
// 	totalHarga2 -= 20000;
// 	jumlahProduk2 -= 2;
// 	elhTotalHarga -= 20000;
// 	elhPDivTotal.innerHTML = "Total belanja: Rp." + elhTotalHarga;
// 	};
// });



// // eval("angka = abay");
// // console.log(angka);

// eval("distance = 10000");
// console.log(distance);

// var myString = "number";
// eval(myString +" = 9");
// console.log(number);
// In this example, the eval() function is doing the same task. Now running the above JavaScript code will give the result 9 which proves that we were able to create a variable name with our string.































