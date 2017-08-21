var facebook_ail_type_composerbox_1_txt_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_composerbox_1_txt_windows8'
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
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 27), 33.330000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 77.780000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 30), 55.560000],
			[Date.UTC(2017, 6, 30), 77.780000],
			[Date.UTC(2017, 6, 31), 33.330000],
			[Date.UTC(2017, 6, 31), 44.440000],
			[Date.UTC(2017, 6, 31), 44.440000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 9), 66.670000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 55.560000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 55.560000],
			[Date.UTC(2017, 7, 11), 55.560000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 55.560000],
			[Date.UTC(2017, 7, 13), 55.560000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 27), 33.330000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 30), 22.220000],
			[Date.UTC(2017, 6, 30), 22.220000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 31), 22.220000],
			[Date.UTC(2017, 6, 31), 22.220000],
			[Date.UTC(2017, 6, 31), 33.330000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 2), 133.330000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 88.890000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 9), 22.220000],
			[Date.UTC(2017, 7, 9), 22.220000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 55.560000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 55.560000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
		]    }]
}