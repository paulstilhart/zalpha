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

//chart profil ado accueil
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('home_chart', {
        chart: {
            type: 'areaspline',
            backgroundColor: '#111125',
            marginTop:0,
            marginBottom:0,
            height: 200,
            spacingLeft: -80,
            spacingRight:-50,
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
            categories: ['Dec','Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui','Jui'],
            color: 'white',
            offset: -30,
            lineWidth: 0,
            labels: {
                style: {
                    color: '#ffffff91',
                    fontSize: 14,
                },
            },

        },
        plotOptions: {
            series: {
                lineWidth: 0,
                marker: {
                    enabled:false,
                    fillColor: '#FFFFFF',
                },
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: '#111125',
        },
        series: [
            {
                name: 'Accueil ado',
                data: [1,2, 3, 8, 2, 3, 2,2],
                color: '#ffffff29',
            }
        ]
    });
});
//chart profil débutant wallet one
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('wallet_one_chart', {
        chart: {
            type: 'areaspline',
            backgroundColor: '#111125',
            marginTop:0,
            marginBottom:0,
            height: 200,
            spacingLeft: -80,
            spacingRight:-50,
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
            categories: ['Dec','Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui','Jui'],
            color: 'white',
            offset: -30,
            lineWidth: 0,
            labels: {
                style: {
                    color: '#ffffff91',
                    fontSize: 14,
                },
            },

        },
        plotOptions: {
            series: {
                lineWidth: 0,
                marker: {
                    enabled:false,
                    fillColor: '#FFFFFF',
                },
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth: 0,
            gridLineColor: '#111125',
        },
        series: [
            {
                name: 'WalletOne débutant',
                data: [1,2, 3, 8, 2, 3, 2,2],
                color: '#ffffff29',
            }
        ]
    });
});

//chart profil ado accueil
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('home_ado_chart', {
        chart: {
            type: 'areaspline',
            backgroundColor: '#5B41B1',
            marginTop:0,
            marginBottom:0,
            height: 200,
            spacingLeft: -80,
            spacingRight:-50,
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
            categories: ['Dec','Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui','Jui'],
            color: 'white',
            offset: -30,
            lineWidth: 0,
            labels: {
                style: {
                    color: '#ffffff91',
                    fontSize: 14,
                },
            },

        },
        plotOptions: {
            series: {
                lineWidth: 0,
                marker: {
                    enabled:false,
                    fillColor: '#FFFFFF',
                },
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: '#5B41B1',
        },
        series: [
            {
                name: 'Accueil ado',
                data: [1,2, 3, 8, 2, 3, 2,2],
                color: '#ffffff29',
            }
        ]
    });
});

//chart profil ado wallet one
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('wallet_one_ado_chart', {
        chart: {
            type: 'areaspline',
            backgroundColor: '#5B41B1',
            marginTop:0,
            marginBottom:0,
            height: 200,
            spacingLeft: -80,
            spacingRight:-50,
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
            categories: ['Dec','Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui','Jui'],
            color: 'white',
            offset: -30,
            lineWidth: 0,
            labels: {
                style: {
                    color: '#ffffff91',
                    fontSize: 14,
                },
            },

        },
        plotOptions: {
            series: {
                lineWidth: 0,
                marker: {
                    enabled:false,
                    fillColor: '#FFFFFF',
                },
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: '#5B41B1',
        },
        series: [
            {
                name: 'WalletOne ado',
                data: [1,2, 3, 8, 2, 3, 2,2],
                color: '#ffffff29',
            }
        ]
    });
});