var gmail_ail_compose_new_mail_via_keyboard_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows10'
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
			[Date.UTC(2017, 6, 26), 188.890000],
			[Date.UTC(2017, 6, 27), 400.000000],
			[Date.UTC(2017, 6, 27), 177.780000],
			[Date.UTC(2017, 6, 27), 244.440000],
			[Date.UTC(2017, 6, 27), 266.670000],
			[Date.UTC(2017, 6, 27), 344.440000],
			[Date.UTC(2017, 6, 27), 444.440000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 211.110000],
			[Date.UTC(2017, 6, 28), 233.330000],
			[Date.UTC(2017, 6, 28), 255.560000],
			[Date.UTC(2017, 6, 28), 333.330000],
			[Date.UTC(2017, 6, 28), 355.560000],
			[Date.UTC(2017, 6, 28), 177.780000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 222.220000],
			[Date.UTC(2017, 6, 28), 233.330000],
			[Date.UTC(2017, 6, 28), 233.330000],
			[Date.UTC(2017, 6, 28), 366.670000],
			[Date.UTC(2017, 6, 30), 233.330000],
			[Date.UTC(2017, 6, 31), 177.780000],
			[Date.UTC(2017, 6, 31), 233.330000],
			[Date.UTC(2017, 7, 1), 211.110000],
			[Date.UTC(2017, 7, 1), 255.560000],
			[Date.UTC(2017, 7, 1), 344.440000],
			[Date.UTC(2017, 7, 1), 555.560000],
			[Date.UTC(2017, 7, 2), 177.780000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 255.560000],
			[Date.UTC(2017, 7, 2), 255.560000],
			[Date.UTC(2017, 7, 2), 266.670000],
			[Date.UTC(2017, 7, 2), 322.220000],
			[Date.UTC(2017, 7, 2), 333.330000],
			[Date.UTC(2017, 7, 2), 333.330000],
			[Date.UTC(2017, 7, 2), 355.560000],
			[Date.UTC(2017, 7, 3), 177.780000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 266.670000],
			[Date.UTC(2017, 7, 3), 288.890000],
			[Date.UTC(2017, 7, 3), 322.220000],
			[Date.UTC(2017, 7, 3), 366.670000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 211.110000],
			[Date.UTC(2017, 7, 4), 211.110000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 377.780000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 211.110000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 322.220000],
			[Date.UTC(2017, 7, 4), 333.330000],
			[Date.UTC(2017, 7, 4), 388.890000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 344.440000],
			[Date.UTC(2017, 7, 4), 355.560000],
			[Date.UTC(2017, 7, 5), 222.220000],
			[Date.UTC(2017, 7, 5), 277.780000],
			[Date.UTC(2017, 7, 5), 366.670000],
			[Date.UTC(2017, 7, 6), 188.890000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 222.220000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 255.560000],
			[Date.UTC(2017, 7, 6), 400.000000],
			[Date.UTC(2017, 7, 7), 222.220000],
			[Date.UTC(2017, 7, 7), 222.220000],
			[Date.UTC(2017, 7, 7), 233.330000],
			[Date.UTC(2017, 7, 7), 244.440000],
			[Date.UTC(2017, 7, 7), 266.670000],
			[Date.UTC(2017, 7, 7), 344.440000],
			[Date.UTC(2017, 7, 7), 355.560000],
			[Date.UTC(2017, 7, 7), 355.560000],
			[Date.UTC(2017, 7, 7), 377.780000],
			[Date.UTC(2017, 7, 8), 177.780000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 311.110000],
			[Date.UTC(2017, 7, 8), 355.560000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 322.220000],
			[Date.UTC(2017, 7, 8), 333.330000],
			[Date.UTC(2017, 7, 8), 366.670000],
			[Date.UTC(2017, 7, 9), 255.560000],
			[Date.UTC(2017, 7, 9), 311.110000],
			[Date.UTC(2017, 7, 9), 366.670000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 222.220000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 255.560000],
			[Date.UTC(2017, 7, 10), 255.560000],
			[Date.UTC(2017, 7, 10), 322.220000],
			[Date.UTC(2017, 7, 11), 211.110000],
			[Date.UTC(2017, 7, 11), 211.110000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 11), 233.330000],
			[Date.UTC(2017, 7, 11), 233.330000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 11), 333.330000],
			[Date.UTC(2017, 7, 11), 366.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 333.330000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 244.440000],
			[Date.UTC(2017, 7, 12), 244.440000],
			[Date.UTC(2017, 7, 12), 244.440000],
			[Date.UTC(2017, 7, 12), 244.440000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 300.000000],
			[Date.UTC(2017, 7, 12), 322.220000],
			[Date.UTC(2017, 7, 12), 355.560000],
			[Date.UTC(2017, 7, 12), 400.000000],
			[Date.UTC(2017, 7, 12), 411.110000],
			[Date.UTC(2017, 7, 12), 533.330000],
			[Date.UTC(2017, 7, 13), 177.780000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 188.890000],
			[Date.UTC(2017, 7, 14), 200.000000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 466.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 266.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 333.330000],
			[Date.UTC(2017, 7, 17), 388.890000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 322.220000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 344.440000],
			[Date.UTC(2017, 7, 18), 344.440000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 300.000000],
			[Date.UTC(2017, 7, 19), 322.220000],
			[Date.UTC(2017, 7, 19), 455.560000],
			[Date.UTC(2017, 7, 19), 733.330000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 300.000000],
			[Date.UTC(2017, 7, 20), 300.000000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 26), 111.110000],
			[Date.UTC(2017, 6, 26), 122.220000],
			[Date.UTC(2017, 6, 27), 155.560000],
			[Date.UTC(2017, 6, 27), 100.000000],
			[Date.UTC(2017, 6, 27), 100.000000],
			[Date.UTC(2017, 6, 27), 122.220000],
			[Date.UTC(2017, 6, 27), 166.670000],
			[Date.UTC(2017, 6, 27), 200.000000],
			[Date.UTC(2017, 6, 28), 100.000000],
			[Date.UTC(2017, 6, 28), 100.000000],
			[Date.UTC(2017, 6, 28), 122.220000],
			[Date.UTC(2017, 6, 28), 122.220000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 177.780000],
			[Date.UTC(2017, 6, 30), 122.220000],
			[Date.UTC(2017, 6, 30), 77.780000],
			[Date.UTC(2017, 6, 31), 100.000000],
			[Date.UTC(2017, 6, 31), 111.110000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 122.220000],
			[Date.UTC(2017, 7, 1), 155.560000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 111.110000],
			[Date.UTC(2017, 7, 2), 111.110000],
			[Date.UTC(2017, 7, 2), 122.220000],
			[Date.UTC(2017, 7, 2), 144.440000],
			[Date.UTC(2017, 7, 2), 155.560000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 111.110000],
			[Date.UTC(2017, 7, 3), 122.220000],
			[Date.UTC(2017, 7, 3), 155.560000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 88.890000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 122.220000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 155.560000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 122.220000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 5), 100.000000],
			[Date.UTC(2017, 7, 5), 111.110000],
			[Date.UTC(2017, 7, 5), 155.560000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 155.560000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 111.110000],
			[Date.UTC(2017, 7, 7), 111.110000],
			[Date.UTC(2017, 7, 7), 122.220000],
			[Date.UTC(2017, 7, 7), 133.330000],
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 111.110000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 177.780000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 111.110000],
			[Date.UTC(2017, 7, 8), 111.110000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 9), 111.110000],
			[Date.UTC(2017, 7, 9), 111.110000],
			[Date.UTC(2017, 7, 9), 122.220000],
			[Date.UTC(2017, 7, 9), 122.220000],
			[Date.UTC(2017, 7, 9), 133.330000],
			[Date.UTC(2017, 7, 9), 155.560000],
			[Date.UTC(2017, 7, 9), 155.560000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 10), 111.110000],
			[Date.UTC(2017, 7, 10), 111.110000],
			[Date.UTC(2017, 7, 10), 111.110000],
			[Date.UTC(2017, 7, 10), 122.220000],
			[Date.UTC(2017, 7, 10), 122.220000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 111.110000],
			[Date.UTC(2017, 7, 11), 111.110000],
			[Date.UTC(2017, 7, 11), 111.110000],
			[Date.UTC(2017, 7, 11), 111.110000],
			[Date.UTC(2017, 7, 11), 111.110000],
			[Date.UTC(2017, 7, 11), 122.220000],
			[Date.UTC(2017, 7, 11), 133.330000],
			[Date.UTC(2017, 7, 11), 166.670000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 111.110000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 111.110000],
			[Date.UTC(2017, 7, 14), 111.110000],
			[Date.UTC(2017, 7, 14), 122.220000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 122.220000],
			[Date.UTC(2017, 7, 15), 122.220000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 122.220000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
		]    }]
}