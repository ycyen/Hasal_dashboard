var amazon_ail_hover_related_product_thumbnail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'amazon_ail_hover_related_product_thumbnail_windows10'
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Asynchronize Input latency (ms)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ms'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    // Define the data points. All series have a dummy year
    // of 1970/7/1 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
		name: 'firefox',
		data: [
			[Date.UTC(2017, 7, 31), 388.890000],
			[Date.UTC(2017, 7, 31), 400.000000],
			[Date.UTC(2017, 7, 31), 400.000000],
			[Date.UTC(2017, 7, 31), 400.000000],
			[Date.UTC(2017, 7, 31), 411.110000],
			[Date.UTC(2017, 7, 31), 433.330000],
			[Date.UTC(2017, 7, 31), 455.560000],
			[Date.UTC(2017, 7, 31), 466.670000],
			[Date.UTC(2017, 8, 1), 400.000000],
			[Date.UTC(2017, 8, 1), 411.110000],
			[Date.UTC(2017, 8, 1), 433.330000],
			[Date.UTC(2017, 8, 1), 433.330000],
			[Date.UTC(2017, 8, 1), 466.670000],
			[Date.UTC(2017, 8, 1), 477.780000],
			[Date.UTC(2017, 8, 2), 400.000000],
			[Date.UTC(2017, 8, 2), 400.000000],
			[Date.UTC(2017, 8, 2), 400.000000],
			[Date.UTC(2017, 8, 2), 422.220000],
			[Date.UTC(2017, 8, 2), 466.670000],
			[Date.UTC(2017, 8, 2), 733.330000],
			[Date.UTC(2017, 8, 3), 388.890000],
			[Date.UTC(2017, 8, 3), 388.890000],
			[Date.UTC(2017, 8, 3), 400.000000],
			[Date.UTC(2017, 8, 3), 411.110000],
			[Date.UTC(2017, 8, 3), 422.220000],
			[Date.UTC(2017, 8, 3), 433.330000],
			[Date.UTC(2017, 8, 3), 488.890000],
			[Date.UTC(2017, 8, 4), 388.890000],
			[Date.UTC(2017, 8, 4), 400.000000],
			[Date.UTC(2017, 8, 4), 455.560000],
			[Date.UTC(2017, 8, 4), 400.000000],
			[Date.UTC(2017, 8, 4), 400.000000],
			[Date.UTC(2017, 8, 4), 411.110000],
			[Date.UTC(2017, 8, 5), 388.890000],
			[Date.UTC(2017, 8, 5), 388.890000],
			[Date.UTC(2017, 8, 5), 388.890000],
			[Date.UTC(2017, 8, 5), 411.110000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 566.670000],
			[Date.UTC(2017, 8, 6), 388.890000],
			[Date.UTC(2017, 8, 6), 400.000000],
			[Date.UTC(2017, 8, 6), 400.000000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 488.890000],
			[Date.UTC(2017, 8, 7), 400.000000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 455.560000],
			[Date.UTC(2017, 8, 7), 488.890000],
			[Date.UTC(2017, 8, 8), 377.780000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 8), 600.000000],
			[Date.UTC(2017, 8, 9), 400.000000],
			[Date.UTC(2017, 8, 9), 411.110000],
			[Date.UTC(2017, 8, 9), 411.110000],
			[Date.UTC(2017, 8, 9), 444.440000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 488.890000],
			[Date.UTC(2017, 8, 10), 388.890000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 433.330000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 11), 366.670000],
			[Date.UTC(2017, 8, 11), 400.000000],
			[Date.UTC(2017, 8, 11), 400.000000],
			[Date.UTC(2017, 8, 11), 433.330000],
			[Date.UTC(2017, 8, 11), 466.670000],
			[Date.UTC(2017, 8, 11), 488.890000],
			[Date.UTC(2017, 8, 12), 400.000000],
			[Date.UTC(2017, 8, 12), 422.220000],
			[Date.UTC(2017, 8, 12), 477.780000],
			[Date.UTC(2017, 8, 12), 511.110000],
			[Date.UTC(2017, 8, 12), 577.780000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 522.220000],
			[Date.UTC(2017, 8, 13), 800.000000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 455.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 31), 400.000000],
			[Date.UTC(2017, 7, 31), 422.220000],
			[Date.UTC(2017, 7, 31), 433.330000],
			[Date.UTC(2017, 7, 31), 455.560000],
			[Date.UTC(2017, 7, 31), 477.780000],
			[Date.UTC(2017, 7, 31), 500.000000],
			[Date.UTC(2017, 8, 1), 388.890000],
			[Date.UTC(2017, 8, 1), 455.560000],
			[Date.UTC(2017, 8, 1), 455.560000],
			[Date.UTC(2017, 8, 1), 455.560000],
			[Date.UTC(2017, 8, 1), 488.890000],
			[Date.UTC(2017, 8, 1), 500.000000],
			[Date.UTC(2017, 8, 2), 411.110000],
			[Date.UTC(2017, 8, 2), 455.560000],
			[Date.UTC(2017, 8, 2), 466.670000],
			[Date.UTC(2017, 8, 2), 466.670000],
			[Date.UTC(2017, 8, 2), 488.890000],
			[Date.UTC(2017, 8, 2), 511.110000],
			[Date.UTC(2017, 8, 3), 400.000000],
			[Date.UTC(2017, 8, 3), 444.440000],
			[Date.UTC(2017, 8, 3), 455.560000],
			[Date.UTC(2017, 8, 3), 455.560000],
			[Date.UTC(2017, 8, 3), 466.670000],
			[Date.UTC(2017, 8, 3), 466.670000],
			[Date.UTC(2017, 8, 3), 466.670000],
			[Date.UTC(2017, 8, 3), 511.110000],
			[Date.UTC(2017, 8, 4), 400.000000],
			[Date.UTC(2017, 8, 4), 466.670000],
			[Date.UTC(2017, 8, 4), 477.780000],
			[Date.UTC(2017, 8, 4), 511.110000],
			[Date.UTC(2017, 8, 4), 533.330000],
			[Date.UTC(2017, 8, 4), 544.440000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 466.670000],
			[Date.UTC(2017, 8, 5), 466.670000],
			[Date.UTC(2017, 8, 5), 477.780000],
			[Date.UTC(2017, 8, 5), 500.000000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 444.440000],
			[Date.UTC(2017, 8, 6), 455.560000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 488.890000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 466.670000],
			[Date.UTC(2017, 8, 7), 477.780000],
			[Date.UTC(2017, 8, 7), 488.890000],
			[Date.UTC(2017, 8, 7), 500.000000],
			[Date.UTC(2017, 8, 7), 511.110000],
			[Date.UTC(2017, 8, 8), 377.780000],
			[Date.UTC(2017, 8, 8), 455.560000],
			[Date.UTC(2017, 8, 8), 455.560000],
			[Date.UTC(2017, 8, 8), 466.670000],
			[Date.UTC(2017, 8, 8), 500.000000],
			[Date.UTC(2017, 8, 8), 511.110000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 477.780000],
			[Date.UTC(2017, 8, 9), 477.780000],
			[Date.UTC(2017, 8, 9), 511.110000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 10), 477.780000],
			[Date.UTC(2017, 8, 10), 477.780000],
			[Date.UTC(2017, 8, 10), 488.890000],
			[Date.UTC(2017, 8, 11), 388.890000],
			[Date.UTC(2017, 8, 11), 433.330000],
			[Date.UTC(2017, 8, 11), 444.440000],
			[Date.UTC(2017, 8, 11), 477.780000],
			[Date.UTC(2017, 8, 11), 511.110000],
			[Date.UTC(2017, 8, 11), 522.220000],
			[Date.UTC(2017, 8, 12), 444.440000],
			[Date.UTC(2017, 8, 12), 455.560000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 488.890000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 500.000000],
			[Date.UTC(2017, 8, 13), 500.000000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 533.330000],
			[Date.UTC(2017, 8, 13), 533.330000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 500.000000],
			[Date.UTC(2017, 8, 13), 533.330000],
		]    }]
}