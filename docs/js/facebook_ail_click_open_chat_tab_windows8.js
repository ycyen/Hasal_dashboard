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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 2, 30), 233.330000],
			[Date.UTC(2017, 3, 27), 155.560000],
			[Date.UTC(2017, 5, 13), 177.780000],
			[Date.UTC(2017, 5, 14), 266.670000],
			[Date.UTC(2017, 5, 14), 444.440000],
			[Date.UTC(2017, 5, 14), 455.560000],
			[Date.UTC(2017, 5, 14), 88.890000],
			[Date.UTC(2017, 5, 16), 111.110000],
			[Date.UTC(2017, 5, 16), 88.890000],
			[Date.UTC(2017, 5, 16), 77.780000],
			[Date.UTC(2017, 5, 17), 66.670000],
			[Date.UTC(2017, 5, 17), 66.670000],
			[Date.UTC(2017, 5, 18), 44.440000],
			[Date.UTC(2017, 5, 18), 44.440000],
			[Date.UTC(2017, 5, 18), 88.890000],
			[Date.UTC(2017, 5, 19), 77.780000],
			[Date.UTC(2017, 5, 19), 88.890000],
			[Date.UTC(2017, 5, 19), 88.890000],
			[Date.UTC(2017, 5, 21), 66.670000],
			[Date.UTC(2017, 5, 21), 111.110000],
			[Date.UTC(2017, 5, 22), 111.110000],
			[Date.UTC(2017, 5, 22), 77.780000],
			[Date.UTC(2017, 5, 22), 88.890000],
			[Date.UTC(2017, 5, 24), 77.780000],
			[Date.UTC(2017, 5, 24), 100.000000],
			[Date.UTC(2017, 5, 24), 155.560000],
			[Date.UTC(2017, 5, 24), 77.780000],
			[Date.UTC(2017, 5, 25), 55.560000],
			[Date.UTC(2017, 5, 25), 55.560000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 25), 77.780000],
			[Date.UTC(2017, 5, 25), 77.780000],
			[Date.UTC(2017, 5, 25), 77.780000],
			[Date.UTC(2017, 5, 25), 88.890000],
			[Date.UTC(2017, 5, 26), 100.000000],
			[Date.UTC(2017, 5, 26), 100.000000],
			[Date.UTC(2017, 5, 26), 66.670000],
			[Date.UTC(2017, 5, 26), 66.670000],
			[Date.UTC(2017, 5, 26), 88.890000],
			[Date.UTC(2017, 5, 28), 111.110000],
			[Date.UTC(2017, 5, 28), 233.330000],
			[Date.UTC(2017, 5, 28), 277.780000],
			[Date.UTC(2017, 5, 28), 44.440000],
			[Date.UTC(2017, 5, 28), 55.560000],
			[Date.UTC(2017, 5, 28), 66.670000],
			[Date.UTC(2017, 5, 29), 66.670000],
			[Date.UTC(2017, 5, 29), 77.780000],
			[Date.UTC(2017, 5, 30), 88.890000],
			[Date.UTC(2017, 6, 1), 66.670000],
			[Date.UTC(2017, 6, 2), 33.330000],
			[Date.UTC(2017, 6, 2), 77.780000],
			[Date.UTC(2017, 6, 2), 88.890000],
			[Date.UTC(2017, 6, 4), 44.440000],
			[Date.UTC(2017, 6, 5), 55.560000],
			[Date.UTC(2017, 6, 5), 77.780000],
			[Date.UTC(2017, 6, 5), 77.780000],
			[Date.UTC(2017, 6, 5), 88.890000],
			[Date.UTC(2017, 6, 5), 88.890000],
			[Date.UTC(2017, 6, 5), 100.000000],
			[Date.UTC(2017, 6, 6), 122.220000],
			[Date.UTC(2017, 6, 6), 44.440000],
			[Date.UTC(2017, 6, 6), 66.670000],
			[Date.UTC(2017, 6, 6), 77.780000],
			[Date.UTC(2017, 6, 6), 88.890000],
			[Date.UTC(2017, 6, 7), 100.000000],
			[Date.UTC(2017, 6, 7), 66.670000],
			[Date.UTC(2017, 6, 7), 88.890000],
			[Date.UTC(2017, 6, 7), 88.890000],
			[Date.UTC(2017, 6, 8), 66.670000],
			[Date.UTC(2017, 6, 8), 88.890000],
			[Date.UTC(2017, 6, 8), 55.560000],
			[Date.UTC(2017, 6, 8), 66.670000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 8), 55.560000],
			[Date.UTC(2017, 6, 8), 77.780000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 77.780000],
			[Date.UTC(2017, 6, 10), 77.780000],
			[Date.UTC(2017, 6, 10), 77.780000],
			[Date.UTC(2017, 6, 11), 55.560000],
			[Date.UTC(2017, 6, 11), 66.670000],
			[Date.UTC(2017, 6, 11), 77.780000],
			[Date.UTC(2017, 6, 11), 77.780000],
			[Date.UTC(2017, 6, 13), 111.110000],
			[Date.UTC(2017, 6, 13), 55.560000],
			[Date.UTC(2017, 6, 13), 66.670000],
			[Date.UTC(2017, 6, 13), 77.780000],
			[Date.UTC(2017, 6, 13), 88.890000],
			[Date.UTC(2017, 6, 13), 100.000000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 455.560000],
			[Date.UTC(2017, 6, 13), 55.560000],
			[Date.UTC(2017, 6, 13), 55.560000],
			[Date.UTC(2017, 6, 14), 100.000000],
			[Date.UTC(2017, 6, 14), 111.110000],
			[Date.UTC(2017, 6, 14), 111.110000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 14), 88.890000],
			[Date.UTC(2017, 6, 15), 100.000000],
			[Date.UTC(2017, 6, 15), 55.560000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 122.220000],
			[Date.UTC(2017, 6, 17), 77.780000],
			[Date.UTC(2017, 6, 17), 77.780000],
			[Date.UTC(2017, 6, 17), 77.780000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 88.890000],
			[Date.UTC(2017, 6, 18), 44.440000],
			[Date.UTC(2017, 6, 18), 55.560000],
			[Date.UTC(2017, 6, 18), 55.560000],
			[Date.UTC(2017, 6, 18), 66.670000],
			[Date.UTC(2017, 6, 19), 100.000000],
			[Date.UTC(2017, 6, 19), 111.110000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 77.780000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 44.440000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 77.780000],
			[Date.UTC(2017, 6, 19), 88.890000],
			[Date.UTC(2017, 6, 21), 44.440000],
			[Date.UTC(2017, 6, 21), 66.670000],
			[Date.UTC(2017, 6, 21), 66.670000],
			[Date.UTC(2017, 6, 22), 122.220000],
			[Date.UTC(2017, 6, 22), 211.110000],
			[Date.UTC(2017, 6, 22), 211.110000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 23), 122.220000],
			[Date.UTC(2017, 6, 23), 244.440000],
			[Date.UTC(2017, 6, 23), 266.670000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 277.780000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 66.670000],
			[Date.UTC(2017, 6, 24), 111.110000],
			[Date.UTC(2017, 6, 24), 111.110000],
			[Date.UTC(2017, 6, 24), 144.440000],
			[Date.UTC(2017, 6, 24), 44.440000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 77.780000],
			[Date.UTC(2017, 6, 24), 100.000000],
			[Date.UTC(2017, 6, 24), 255.560000],
			[Date.UTC(2017, 6, 24), 277.780000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 433.330000],
			[Date.UTC(2017, 6, 24), 44.440000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 66.670000],
			[Date.UTC(2017, 6, 24), 77.780000],
			[Date.UTC(2017, 6, 24), 77.780000],
			[Date.UTC(2017, 6, 26), 122.220000],
			[Date.UTC(2017, 6, 26), 55.560000],
			[Date.UTC(2017, 6, 26), 66.670000],
			[Date.UTC(2017, 6, 26), 77.780000],
			[Date.UTC(2017, 6, 27), 111.110000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 27), 66.670000],
			[Date.UTC(2017, 6, 27), 100.000000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 27), 66.670000],
			[Date.UTC(2017, 6, 27), 66.670000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 77.780000],
			[Date.UTC(2017, 6, 30), 22.220000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 30), 44.440000],
			[Date.UTC(2017, 6, 30), 55.560000],
			[Date.UTC(2017, 6, 31), 22.220000],
			[Date.UTC(2017, 6, 31), 44.440000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 122.220000],
			[Date.UTC(2017, 7, 2), 122.220000],
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
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 111.110000],
			[Date.UTC(2017, 7, 3), 111.110000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
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
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 77.780000],
			[Date.UTC(2017, 7, 3), 77.780000],
			[Date.UTC(2017, 7, 3), 77.780000],
			[Date.UTC(2017, 7, 3), 88.890000],
			[Date.UTC(2017, 7, 3), 88.890000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 88.890000],
			[Date.UTC(2017, 7, 4), 88.890000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 4), 277.780000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 77.780000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 77.780000],
			[Date.UTC(2017, 7, 4), 88.890000],
			[Date.UTC(2017, 7, 4), 88.890000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 6), 111.110000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 6), 77.780000],
			[Date.UTC(2017, 7, 6), 77.780000],
			[Date.UTC(2017, 7, 6), 77.780000],
			[Date.UTC(2017, 7, 6), 77.780000],
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 111.110000],
			[Date.UTC(2017, 7, 7), 122.220000],
			[Date.UTC(2017, 7, 7), 122.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 7), 77.780000],
			[Date.UTC(2017, 7, 7), 77.780000],
			[Date.UTC(2017, 7, 7), 88.890000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 9), 66.670000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 55.560000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 55.560000],
			[Date.UTC(2017, 7, 11), 55.560000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 11), 77.780000],
			[Date.UTC(2017, 7, 11), 77.780000],
			[Date.UTC(2017, 7, 11), 77.780000],
			[Date.UTC(2017, 7, 11), 77.780000],
			[Date.UTC(2017, 7, 11), 88.890000],
			[Date.UTC(2017, 7, 11), 88.890000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 14), 55.560000],
			[Date.UTC(2017, 7, 14), 55.560000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 244.440000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 100.000000],
			[Date.UTC(2017, 7, 21), 100.000000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 111.110000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 155.560000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 25), 88.890000],
			[Date.UTC(2017, 7, 25), 88.890000],
		]    }]
}