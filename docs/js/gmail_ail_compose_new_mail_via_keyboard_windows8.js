var gmail_ail_compose_new_mail_via_keyboard_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows8'
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
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 322.220000],
			[Date.UTC(2017, 7, 18), 322.220000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 366.670000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 433.330000],
			[Date.UTC(2017, 7, 18), 433.330000],
			[Date.UTC(2017, 7, 18), 466.670000],
			[Date.UTC(2017, 7, 18), 466.670000],
			[Date.UTC(2017, 7, 18), 466.670000],
			[Date.UTC(2017, 7, 18), 477.780000],
			[Date.UTC(2017, 7, 18), 488.890000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 522.220000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 544.440000],
			[Date.UTC(2017, 7, 18), 544.440000],
			[Date.UTC(2017, 7, 18), 566.670000],
			[Date.UTC(2017, 7, 18), 566.670000],
			[Date.UTC(2017, 7, 18), 577.780000],
			[Date.UTC(2017, 7, 18), 588.890000],
			[Date.UTC(2017, 7, 18), 588.890000],
			[Date.UTC(2017, 7, 18), 600.000000],
			[Date.UTC(2017, 7, 18), 644.440000],
			[Date.UTC(2017, 7, 18), 655.560000],
			[Date.UTC(2017, 7, 18), 677.780000],
			[Date.UTC(2017, 7, 18), 711.110000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 288.890000],
			[Date.UTC(2017, 7, 20), 333.330000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 288.890000],
			[Date.UTC(2017, 7, 22), 500.000000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 466.670000],
			[Date.UTC(2017, 7, 24), 200.000000],
			[Date.UTC(2017, 7, 24), 211.110000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 24), 288.890000],
			[Date.UTC(2017, 7, 25), 200.000000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 300.000000],
			[Date.UTC(2017, 7, 26), 322.220000],
			[Date.UTC(2017, 7, 26), 344.440000],
			[Date.UTC(2017, 7, 26), 377.780000],
			[Date.UTC(2017, 7, 26), 400.000000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 222.220000],
			[Date.UTC(2017, 7, 27), 222.220000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 300.000000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 233.330000],
			[Date.UTC(2017, 7, 29), 255.560000],
			[Date.UTC(2017, 7, 29), 266.670000],
			[Date.UTC(2017, 7, 29), 333.330000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 233.330000],
			[Date.UTC(2017, 7, 30), 244.440000],
			[Date.UTC(2017, 7, 30), 244.440000],
			[Date.UTC(2017, 7, 30), 333.330000],
			[Date.UTC(2017, 7, 30), 333.330000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 211.110000],
			[Date.UTC(2017, 7, 31), 222.220000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 333.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
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
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 144.440000],
			[Date.UTC(2017, 7, 21), 144.440000],
			[Date.UTC(2017, 7, 21), 144.440000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 166.670000],
			[Date.UTC(2017, 7, 21), 166.670000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 23), 122.220000],
			[Date.UTC(2017, 7, 23), 122.220000],
			[Date.UTC(2017, 7, 23), 133.330000],
			[Date.UTC(2017, 7, 23), 133.330000],
			[Date.UTC(2017, 7, 23), 144.440000],
			[Date.UTC(2017, 7, 23), 166.670000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 155.560000],
			[Date.UTC(2017, 7, 24), 166.670000],
			[Date.UTC(2017, 7, 24), 188.890000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 155.560000],
			[Date.UTC(2017, 7, 25), 155.560000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 166.670000],
			[Date.UTC(2017, 7, 26), 166.670000],
			[Date.UTC(2017, 7, 26), 166.670000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 133.330000],
			[Date.UTC(2017, 7, 28), 133.330000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 166.670000],
			[Date.UTC(2017, 7, 28), 177.780000],
			[Date.UTC(2017, 7, 29), 133.330000],
			[Date.UTC(2017, 7, 29), 144.440000],
			[Date.UTC(2017, 7, 29), 144.440000],
			[Date.UTC(2017, 7, 29), 155.560000],
			[Date.UTC(2017, 7, 29), 155.560000],
			[Date.UTC(2017, 7, 29), 166.670000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 144.440000],
			[Date.UTC(2017, 7, 30), 144.440000],
			[Date.UTC(2017, 7, 30), 155.560000],
			[Date.UTC(2017, 7, 30), 155.560000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 133.330000],
			[Date.UTC(2017, 7, 31), 155.560000],
			[Date.UTC(2017, 7, 31), 166.670000],
			[Date.UTC(2017, 7, 31), 166.670000],
		]    }]
}