var gmail_ail_open_mail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_open_mail_windows10'
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
			[Date.UTC(2017, 6, 26), 333.330000],
			[Date.UTC(2017, 6, 26), 455.560000],
			[Date.UTC(2017, 6, 27), 177.780000],
			[Date.UTC(2017, 6, 27), 333.330000],
			[Date.UTC(2017, 6, 27), 288.890000],
			[Date.UTC(2017, 6, 27), 300.000000],
			[Date.UTC(2017, 6, 27), 311.110000],
			[Date.UTC(2017, 6, 27), 388.890000],
			[Date.UTC(2017, 6, 28), 322.220000],
			[Date.UTC(2017, 6, 28), 400.000000],
			[Date.UTC(2017, 6, 28), 266.670000],
			[Date.UTC(2017, 6, 28), 333.330000],
			[Date.UTC(2017, 6, 28), 377.780000],
			[Date.UTC(2017, 6, 28), 166.670000],
			[Date.UTC(2017, 6, 28), 311.110000],
			[Date.UTC(2017, 6, 28), 333.330000],
			[Date.UTC(2017, 6, 28), 333.330000],
			[Date.UTC(2017, 6, 28), 366.670000],
			[Date.UTC(2017, 6, 28), 400.000000],
			[Date.UTC(2017, 6, 30), 200.000000],
			[Date.UTC(2017, 6, 31), 166.670000],
			[Date.UTC(2017, 6, 31), 188.890000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 1), 200.000000],
			[Date.UTC(2017, 7, 1), 333.330000],
			[Date.UTC(2017, 7, 1), 388.890000],
			[Date.UTC(2017, 7, 1), 566.670000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 277.780000],
			[Date.UTC(2017, 7, 2), 288.890000],
			[Date.UTC(2017, 7, 2), 300.000000],
			[Date.UTC(2017, 7, 2), 322.220000],
			[Date.UTC(2017, 7, 2), 344.440000],
			[Date.UTC(2017, 7, 2), 355.560000],
			[Date.UTC(2017, 7, 2), 455.560000],
			[Date.UTC(2017, 7, 3), 188.890000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 244.440000],
			[Date.UTC(2017, 7, 3), 300.000000],
			[Date.UTC(2017, 7, 3), 322.220000],
			[Date.UTC(2017, 7, 3), 333.330000],
			[Date.UTC(2017, 7, 3), 333.330000],
			[Date.UTC(2017, 7, 4), 188.890000],
			[Date.UTC(2017, 7, 4), 188.890000],
			[Date.UTC(2017, 7, 4), 188.890000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 300.000000],
			[Date.UTC(2017, 7, 4), 177.780000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 277.780000],
			[Date.UTC(2017, 7, 4), 277.780000],
			[Date.UTC(2017, 7, 4), 322.220000],
			[Date.UTC(2017, 7, 4), 455.560000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 188.890000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 311.110000],
			[Date.UTC(2017, 7, 4), 333.330000],
			[Date.UTC(2017, 7, 5), 244.440000],
			[Date.UTC(2017, 7, 5), 277.780000],
			[Date.UTC(2017, 7, 5), 355.560000],
			[Date.UTC(2017, 7, 6), 188.890000],
			[Date.UTC(2017, 7, 6), 188.890000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 266.670000],
			[Date.UTC(2017, 7, 6), 288.890000],
			[Date.UTC(2017, 7, 6), 300.000000],
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 322.220000],
			[Date.UTC(2017, 7, 7), 366.670000],
			[Date.UTC(2017, 7, 7), 366.670000],
			[Date.UTC(2017, 7, 7), 400.000000],
			[Date.UTC(2017, 7, 7), 433.330000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 311.110000],
			[Date.UTC(2017, 7, 8), 477.780000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 8), 155.560000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 177.780000],
			[Date.UTC(2017, 7, 8), 177.780000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 333.330000],
			[Date.UTC(2017, 7, 8), 444.440000],
			[Date.UTC(2017, 7, 9), 233.330000],
			[Date.UTC(2017, 7, 9), 233.330000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 10), 155.560000],
			[Date.UTC(2017, 7, 10), 188.890000],
			[Date.UTC(2017, 7, 10), 188.890000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 288.890000],
			[Date.UTC(2017, 7, 10), 411.110000],
			[Date.UTC(2017, 7, 11), 177.780000],
			[Date.UTC(2017, 7, 11), 177.780000],
			[Date.UTC(2017, 7, 11), 200.000000],
			[Date.UTC(2017, 7, 11), 233.330000],
			[Date.UTC(2017, 7, 11), 300.000000],
			[Date.UTC(2017, 7, 11), 366.670000],
			[Date.UTC(2017, 7, 11), 366.670000],
			[Date.UTC(2017, 7, 11), 422.220000],
			[Date.UTC(2017, 7, 11), 433.330000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 366.670000],
			[Date.UTC(2017, 7, 12), 144.440000],
			[Date.UTC(2017, 7, 12), 144.440000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 333.330000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 177.780000],
			[Date.UTC(2017, 7, 13), 222.220000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 188.890000],
			[Date.UTC(2017, 7, 14), 188.890000],
			[Date.UTC(2017, 7, 14), 200.000000],
			[Date.UTC(2017, 7, 14), 333.330000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 16), 144.440000],
			[Date.UTC(2017, 7, 16), 144.440000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 188.890000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 255.560000],
			[Date.UTC(2017, 7, 17), 488.890000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 322.220000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 300.000000],
			[Date.UTC(2017, 7, 19), 322.220000],
			[Date.UTC(2017, 7, 19), 344.440000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 288.890000],
			[Date.UTC(2017, 7, 20), 300.000000],
			[Date.UTC(2017, 7, 20), 322.220000],
			[Date.UTC(2017, 7, 20), 366.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 26), 155.560000],
			[Date.UTC(2017, 6, 26), 355.560000],
			[Date.UTC(2017, 6, 27), 166.670000],
			[Date.UTC(2017, 6, 27), 144.440000],
			[Date.UTC(2017, 6, 27), 266.670000],
			[Date.UTC(2017, 6, 27), 288.890000],
			[Date.UTC(2017, 6, 27), 800.000000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 255.560000],
			[Date.UTC(2017, 6, 28), 655.560000],
			[Date.UTC(2017, 6, 28), 233.330000],
			[Date.UTC(2017, 6, 28), 244.440000],
			[Date.UTC(2017, 6, 28), 633.330000],
			[Date.UTC(2017, 6, 28), 188.890000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 300.000000],
			[Date.UTC(2017, 6, 28), 311.110000],
			[Date.UTC(2017, 6, 30), 155.560000],
			[Date.UTC(2017, 6, 30), 166.670000],
			[Date.UTC(2017, 6, 31), 166.670000],
			[Date.UTC(2017, 6, 31), 188.890000],
			[Date.UTC(2017, 7, 1), 155.560000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 1), 200.000000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 266.670000],
			[Date.UTC(2017, 7, 1), 333.330000],
			[Date.UTC(2017, 7, 2), 133.330000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 177.780000],
			[Date.UTC(2017, 7, 2), 244.440000],
			[Date.UTC(2017, 7, 2), 266.670000],
			[Date.UTC(2017, 7, 2), 277.780000],
			[Date.UTC(2017, 7, 2), 288.890000],
			[Date.UTC(2017, 7, 2), 800.000000],
			[Date.UTC(2017, 7, 2), 800.000000],
			[Date.UTC(2017, 7, 3), 144.440000],
			[Date.UTC(2017, 7, 3), 144.440000],
			[Date.UTC(2017, 7, 3), 188.890000],
			[Date.UTC(2017, 7, 3), 188.890000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 244.440000],
			[Date.UTC(2017, 7, 3), 255.560000],
			[Date.UTC(2017, 7, 3), 311.110000],
			[Date.UTC(2017, 7, 3), 366.670000],
			[Date.UTC(2017, 7, 3), 655.560000],
			[Date.UTC(2017, 7, 4), 155.560000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 4), 300.000000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 255.560000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 800.000000],
			[Date.UTC(2017, 7, 4), 144.440000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 177.780000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 255.560000],
			[Date.UTC(2017, 7, 4), 288.890000],
			[Date.UTC(2017, 7, 5), 244.440000],
			[Date.UTC(2017, 7, 5), 255.560000],
			[Date.UTC(2017, 7, 5), 300.000000],
			[Date.UTC(2017, 7, 6), 155.560000],
			[Date.UTC(2017, 7, 6), 166.670000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 211.110000],
			[Date.UTC(2017, 7, 6), 211.110000],
			[Date.UTC(2017, 7, 6), 244.440000],
			[Date.UTC(2017, 7, 6), 266.670000],
			[Date.UTC(2017, 7, 6), 322.220000],
			[Date.UTC(2017, 7, 6), 633.330000],
			[Date.UTC(2017, 7, 7), 144.440000],
			[Date.UTC(2017, 7, 7), 144.440000],
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 177.780000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 244.440000],
			[Date.UTC(2017, 7, 7), 277.780000],
			[Date.UTC(2017, 7, 7), 300.000000],
			[Date.UTC(2017, 7, 8), 144.440000],
			[Date.UTC(2017, 7, 8), 155.560000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 333.330000],
			[Date.UTC(2017, 7, 8), 433.330000],
			[Date.UTC(2017, 7, 8), 144.440000],
			[Date.UTC(2017, 7, 8), 144.440000],
			[Date.UTC(2017, 7, 8), 144.440000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 177.780000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 277.780000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 9), 833.330000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 155.560000],
			[Date.UTC(2017, 7, 10), 155.560000],
			[Date.UTC(2017, 7, 10), 166.670000],
			[Date.UTC(2017, 7, 10), 177.780000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 211.110000],
			[Date.UTC(2017, 7, 10), 300.000000],
			[Date.UTC(2017, 7, 11), 133.330000],
			[Date.UTC(2017, 7, 11), 133.330000],
			[Date.UTC(2017, 7, 11), 133.330000],
			[Date.UTC(2017, 7, 11), 155.560000],
			[Date.UTC(2017, 7, 11), 166.670000],
			[Date.UTC(2017, 7, 11), 166.670000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 11), 255.560000],
			[Date.UTC(2017, 7, 11), 255.560000],
			[Date.UTC(2017, 7, 11), 277.780000],
			[Date.UTC(2017, 7, 11), 300.000000],
			[Date.UTC(2017, 7, 11), 355.560000],
			[Date.UTC(2017, 7, 12), 144.440000],
			[Date.UTC(2017, 7, 12), 144.440000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 188.890000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 288.890000],
			[Date.UTC(2017, 7, 12), 300.000000],
			[Date.UTC(2017, 7, 12), 311.110000],
			[Date.UTC(2017, 7, 12), 344.440000],
			[Date.UTC(2017, 7, 12), 355.560000],
			[Date.UTC(2017, 7, 12), 433.330000],
			[Date.UTC(2017, 7, 13), 144.440000],
			[Date.UTC(2017, 7, 13), 155.560000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 188.890000],
			[Date.UTC(2017, 7, 14), 144.440000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 255.560000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 15), 155.560000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 177.780000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 266.670000],
			[Date.UTC(2017, 7, 15), 277.780000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 288.890000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 277.780000],
			[Date.UTC(2017, 7, 17), 277.780000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 300.000000],
			[Date.UTC(2017, 7, 19), 311.110000],
			[Date.UTC(2017, 7, 19), 344.440000],
			[Date.UTC(2017, 7, 19), 366.670000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 288.890000],
			[Date.UTC(2017, 7, 20), 300.000000],
			[Date.UTC(2017, 7, 20), 300.000000],
			[Date.UTC(2017, 7, 20), 500.000000],
		]    }]
}