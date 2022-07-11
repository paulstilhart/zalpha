// récupération de l'url de la page en cours
let url = window.location.href;
console.log(url);

//Fonction qui permet de mettre en surbrillance les icones
function activeIcon() {
    let icon_home = document.getElementById("icon_home");
    let icon_wallet = document.getElementById("icon_wallet");

    //icone wallet en surbrillance
    if ((url.indexOf("wallet_all") > -1)
        || (url.indexOf("wallet_analyse") > -1)
        || (url.indexOf("wallet_one") > -1)
        || (url.indexOf("wallet_repartition") > -1)) {
        icon_wallet.classList.add("footer_active");
    }

    //Icone home en surbrillance
    else {
        icon_home.classList.add("footer_active");
    }
}

activeIcon();


//chart
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('chart_container', {
        chart: {
            type: 'areaspline',
            backgroundColor: '#111125',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            height: 200,
        },
        credits: {
            enabled: false,
        },
        legend: {
            enabled: false
        },
        title: {
            text: '',
            floating: true,
        },

        xAxis: {
            categories: ['Jan', 'Fev', 'Mars', 'Avril', 'Mai', 'Juin'],
            color: 'white',
            offset: -30,
            lineWidth: 0,
            labels: {
                style: {
                    color: 'white',
                    fontSize: 14,
                },
            },

        },
        plotOptions: {
            series: {
                lineWidth: 0,
            },
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            },
            gridLineColor: '#111125',
        },
        series: [
            {
                name: 'Portefeuille',
                data: [1, 2, 4, 2, 1, 0],
                color: 'white',
            }
        ]
    });
});