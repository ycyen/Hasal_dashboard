var facebook_ail_click_open_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows8'
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
			[Date.UTC(2017, 7, 27), 100.000000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 77.780000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 77.780000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 2), 144.440000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 55.560000],
			[Date.UTC(2017, 8, 6), 55.560000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 100.000000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 9), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 27), 100.000000],
			[Date.UTC(2017, 7, 27), 122.220000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 133.330000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 88.890000],
			[Date.UTC(2017, 7, 28), 88.890000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 122.220000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 88.890000],
			[Date.UTC(2017, 7, 29), 88.890000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 111.110000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 3), 111.110000],
			[Date.UTC(2017, 8, 3), 155.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 55.560000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 44.440000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 44.440000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 66.670000],
		]    }]
}