// récupération de la page en cours

let url = window.location.href;
console.log(url);

function activeIcon() {
    let icon_home = document.getElementById("icon_home");
    let icon_wallet = document.getElementById("icon_wallet");

    if ((url.indexOf("wallet_all") > -1)
        || (url.indexOf("wallet_analyse") > -1)
        || (url.indexOf("wallet_one") > -1)
        || (url.indexOf("wallet_repartition") > -1)) {
        icon_wallet.classList.add("footer_active");
    }
    else{
        icon_home.classList.add("footer_active");
    }

}

activeIcon();