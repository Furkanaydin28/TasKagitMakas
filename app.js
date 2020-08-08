document.getElementById("basla").addEventListener("click", () => {
    var pscore = 0;
    var cscore = 0;
    var name = document.getElementById("name");
    var html = `
    <div class="container mt-5">
            <div class="row">
                <div id="cscr" class="col text-center mt-5">
                <h5>Bilgisayar'ın Puan'ı</h5>
                <div id="cscore" style="font-size:26px">${cscore}</div>  
                </div>
                <div class="col text-center mt-5">
                    <h4 id="headergame" class="text-center">Taş Kağıt Makas Oyununa Hoşgeldin ${name.value}!</h4>
                    <div class="row mt-5">
                    <div class="col" id="tas"><i class="fas fa-hand-rock fa-5x"></i></div>
                    <div class="col" id="kagit"><i class="fas fa-hand-paper fa-5x"></i></div>
                    <div class="col" id="makas"><i class="fas fa-hand-scissors fa-5x"></i></div>
                    </div>
                </div>
                <div id="pscr" class="col text-center mt-5">
                    <h5>${name.value} Adlı Oyuncunun Puan'ı</h5>
                    <div id="pscore" style="font-size:26px">${pscore}</div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col text-center mt-5"></div>
                <div id="sonuc" class="col text-center mt-5">
                <h5></h5>    
                </div>
                <div class="col text-center mt-5"></div>
            </div>
        </div>
    `;
    document.getElementById("info").innerHTML = html;
    var com = document.getElementById("cscr");
    var pla = document.getElementById("pscr");
    document.getElementById("tas").addEventListener("click", () => {
        var secim = Math.floor(Math.random() * 3 + 1);
        document.getElementById("sonuc").innerHTML = "";
        var sonuc = document.getElementById("sonuc");
        switch (secim) {
            case 1:
                sonuc.innerHTML = `<h5 class="text-secondary">Berabere</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-secondary").remove();
                },1000);
                break;
            case 2:
                cscore++;
                com.innerHTML = `
                <h5>Bilgisayar'ın Puan'ı</h5> 
                <div id="cscore" style="font-size:26px">${cscore}</div>
                `;
                sonuc.innerHTML = `<h5 class="text-danger">Kaybettiniz</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-danger").remove();
                },1000);
                break;
            case 3:
                pscore++;
                pla.innerHTML = `
                <h5>${name.value} Adlı Oyuncunun Puan'ı</h5>
                <div id="pscore" style="font-size:26px">${pscore}</div>
                `;
                sonuc.innerHTML = `<h5 class="text-success">Kazandınız</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-success").remove();
                },1000);
                break;
        }
    });
    document.getElementById("kagit").addEventListener("click", () => {
        var secim = Math.floor(Math.random() * 3 + 1);
        switch (secim) {
            case 1:
                pscore++;
                pla.innerHTML = `
                <h5>${name.value} Adlı Oyuncunun Puan'ı</h5>
                <div id="pscore" style="font-size:26px">${pscore}</div>
                `;
                sonuc.innerHTML = `<h5 class="text-success">Kazandınız</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-success").remove();
                },1000);
                break;
            case 2:
                sonuc.innerHTML = `<h5 class="text-secondary">Berabere</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-secondary").remove();
                },1000);
                break;
            case 3:
                cscore++;
                com.innerHTML = `
                <h5>Bilgisayar'ın Puan'ı</h5> 
                <div id="cscore" style="font-size:26px">${cscore}</div>
                `;
                sonuc.innerHTML = `<h5 class="text-danger">Kaybettiniz</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-danger").remove();
                },1000);
                break;
        }
    });
    document.getElementById("makas").addEventListener("click", () => {
        var secim = Math.floor(Math.random() * 3 + 1);
        switch (secim) {
            case 1:
                cscore++;
                com.innerHTML = `
                <h5>Bilgisayar'ın Puan'ı</h5> 
                <div id="cscore" style="font-size:26px">${cscore}</div>
                `;
                sonuc.innerHTML = `<h5 class="text-danger">Kaybettiniz</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-danger").remove();
                },1000);
                break;
            case 2:
                pscore++;
                pla.innerHTML = `
                <h5>${name.value} Adlı Oyuncunun Puan'ı</h5>
                <div id="pscore" style="font-size:26px">${pscore}</div>
                `;
                sonuc.innerHTML = `<h5 class="text-success">Kazandınız</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-success").remove();
                },1000);
                break;
            case 3:
                sonuc.innerHTML = `<h5 class="text-secondary">Berabere</h5>`;
                setTimeout(()=>{
                    document.querySelector(".text-secondary").remove();
                },1000);
                break;
        }
    });
});


