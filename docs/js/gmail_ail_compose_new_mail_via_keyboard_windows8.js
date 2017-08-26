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
			[Date.UTC(2017, 2, 16), 233.330000],
			[Date.UTC(2017, 2, 16), 233.330000],
			[Date.UTC(2017, 2, 16), 244.440000],
			[Date.UTC(2017, 2, 16), 244.440000],
			[Date.UTC(2017, 2, 16), 244.440000],
			[Date.UTC(2017, 2, 16), 255.560000],
			[Date.UTC(2017, 2, 16), 266.670000],
			[Date.UTC(2017, 2, 16), 277.780000],
			[Date.UTC(2017, 2, 30), 211.110000],
			[Date.UTC(2017, 2, 30), 233.330000],
			[Date.UTC(2017, 2, 30), 244.440000],
			[Date.UTC(2017, 2, 30), 255.560000],
			[Date.UTC(2017, 2, 30), 288.890000],
			[Date.UTC(2017, 2, 30), 322.220000],
			[Date.UTC(2017, 3, 14), 200.000000],
			[Date.UTC(2017, 3, 14), 233.330000],
			[Date.UTC(2017, 3, 14), 244.440000],
			[Date.UTC(2017, 3, 14), 266.670000],
			[Date.UTC(2017, 3, 14), 266.670000],
			[Date.UTC(2017, 3, 14), 277.780000],
			[Date.UTC(2017, 3, 14), 277.780000],
			[Date.UTC(2017, 3, 27), 222.220000],
			[Date.UTC(2017, 3, 27), 222.220000],
			[Date.UTC(2017, 3, 27), 233.330000],
			[Date.UTC(2017, 3, 27), 244.440000],
			[Date.UTC(2017, 3, 27), 255.560000],
			[Date.UTC(2017, 3, 27), 277.780000],
			[Date.UTC(2017, 4, 11), 200.000000],
			[Date.UTC(2017, 4, 11), 233.330000],
			[Date.UTC(2017, 4, 11), 244.440000],
			[Date.UTC(2017, 4, 11), 255.560000],
			[Date.UTC(2017, 4, 11), 266.670000],
			[Date.UTC(2017, 4, 11), 277.780000],
			[Date.UTC(2017, 4, 26), 222.220000],
			[Date.UTC(2017, 4, 26), 233.330000],
			[Date.UTC(2017, 4, 26), 233.330000],
			[Date.UTC(2017, 4, 26), 233.330000],
			[Date.UTC(2017, 4, 26), 233.330000],
			[Date.UTC(2017, 4, 26), 233.330000],
			[Date.UTC(2017, 4, 26), 266.670000],
			[Date.UTC(2017, 4, 26), 266.670000],
			[Date.UTC(2017, 4, 26), 277.780000],
			[Date.UTC(2017, 4, 26), 288.890000],
			[Date.UTC(2017, 5, 1), 211.110000],
			[Date.UTC(2017, 5, 1), 222.220000],
			[Date.UTC(2017, 5, 1), 233.330000],
			[Date.UTC(2017, 5, 1), 233.330000],
			[Date.UTC(2017, 5, 1), 233.330000],
			[Date.UTC(2017, 5, 1), 233.330000],
			[Date.UTC(2017, 5, 1), 233.330000],
			[Date.UTC(2017, 5, 1), 233.330000],
			[Date.UTC(2017, 5, 1), 244.440000],
			[Date.UTC(2017, 5, 1), 244.440000],
			[Date.UTC(2017, 5, 1), 244.440000],
			[Date.UTC(2017, 5, 1), 244.440000],
			[Date.UTC(2017, 5, 1), 244.440000],
			[Date.UTC(2017, 5, 1), 288.890000],
			[Date.UTC(2017, 5, 2), 200.000000],
			[Date.UTC(2017, 5, 2), 200.000000],
			[Date.UTC(2017, 5, 2), 222.220000],
			[Date.UTC(2017, 5, 2), 233.330000],
			[Date.UTC(2017, 5, 2), 233.330000],
			[Date.UTC(2017, 5, 2), 244.440000],
			[Date.UTC(2017, 5, 2), 255.560000],
			[Date.UTC(2017, 5, 2), 266.670000],
			[Date.UTC(2017, 5, 2), 266.670000],
			[Date.UTC(2017, 5, 2), 333.330000],
			[Date.UTC(2017, 5, 3), 200.000000],
			[Date.UTC(2017, 5, 3), 200.000000],
			[Date.UTC(2017, 5, 3), 222.220000],
			[Date.UTC(2017, 5, 3), 233.330000],
			[Date.UTC(2017, 5, 3), 244.440000],
			[Date.UTC(2017, 5, 3), 277.780000],
			[Date.UTC(2017, 5, 3), 288.890000],
			[Date.UTC(2017, 5, 4), 222.220000],
			[Date.UTC(2017, 5, 4), 244.440000],
			[Date.UTC(2017, 5, 4), 255.560000],
			[Date.UTC(2017, 5, 4), 255.560000],
			[Date.UTC(2017, 5, 4), 300.000000],
			[Date.UTC(2017, 5, 4), 300.000000],
			[Date.UTC(2017, 5, 6), 200.000000],
			[Date.UTC(2017, 5, 6), 200.000000],
			[Date.UTC(2017, 5, 6), 211.110000],
			[Date.UTC(2017, 5, 6), 211.110000],
			[Date.UTC(2017, 5, 6), 222.220000],
			[Date.UTC(2017, 5, 6), 244.440000],
			[Date.UTC(2017, 5, 6), 244.440000],
			[Date.UTC(2017, 5, 6), 255.560000],
			[Date.UTC(2017, 5, 7), 188.890000],
			[Date.UTC(2017, 5, 7), 200.000000],
			[Date.UTC(2017, 5, 7), 211.110000],
			[Date.UTC(2017, 5, 7), 222.220000],
			[Date.UTC(2017, 5, 7), 222.220000],
			[Date.UTC(2017, 5, 7), 233.330000],
			[Date.UTC(2017, 5, 7), 255.560000],
			[Date.UTC(2017, 5, 7), 266.670000],
			[Date.UTC(2017, 5, 7), 188.890000],
			[Date.UTC(2017, 5, 7), 200.000000],
			[Date.UTC(2017, 5, 7), 222.220000],
			[Date.UTC(2017, 5, 7), 222.220000],
			[Date.UTC(2017, 5, 7), 233.330000],
			[Date.UTC(2017, 5, 7), 233.330000],
			[Date.UTC(2017, 5, 7), 244.440000],
			[Date.UTC(2017, 5, 7), 255.560000],
			[Date.UTC(2017, 5, 7), 277.780000],
			[Date.UTC(2017, 5, 8), 222.220000],
			[Date.UTC(2017, 5, 8), 222.220000],
			[Date.UTC(2017, 5, 8), 233.330000],
			[Date.UTC(2017, 5, 8), 233.330000],
			[Date.UTC(2017, 5, 8), 244.440000],
			[Date.UTC(2017, 5, 8), 255.560000],
			[Date.UTC(2017, 5, 9), 222.220000],
			[Date.UTC(2017, 5, 9), 222.220000],
			[Date.UTC(2017, 5, 9), 244.440000],
			[Date.UTC(2017, 5, 9), 244.440000],
			[Date.UTC(2017, 5, 9), 244.440000],
			[Date.UTC(2017, 5, 9), 266.670000],
			[Date.UTC(2017, 5, 11), 211.110000],
			[Date.UTC(2017, 5, 11), 211.110000],
			[Date.UTC(2017, 5, 11), 222.220000],
			[Date.UTC(2017, 5, 11), 222.220000],
			[Date.UTC(2017, 5, 11), 244.440000],
			[Date.UTC(2017, 5, 11), 244.440000],
			[Date.UTC(2017, 5, 11), 255.560000],
			[Date.UTC(2017, 5, 11), 266.670000],
			[Date.UTC(2017, 5, 12), 211.110000],
			[Date.UTC(2017, 5, 12), 211.110000],
			[Date.UTC(2017, 5, 12), 222.220000],
			[Date.UTC(2017, 5, 12), 233.330000],
			[Date.UTC(2017, 5, 12), 244.440000],
			[Date.UTC(2017, 5, 12), 244.440000],
			[Date.UTC(2017, 5, 12), 244.440000],
			[Date.UTC(2017, 5, 12), 255.560000],
			[Date.UTC(2017, 5, 12), 200.000000],
			[Date.UTC(2017, 5, 12), 211.110000],
			[Date.UTC(2017, 5, 12), 233.330000],
			[Date.UTC(2017, 5, 12), 233.330000],
			[Date.UTC(2017, 5, 12), 244.440000],
			[Date.UTC(2017, 5, 12), 244.440000],
			[Date.UTC(2017, 5, 12), 255.560000],
			[Date.UTC(2017, 5, 14), 200.000000],
			[Date.UTC(2017, 5, 14), 211.110000],
			[Date.UTC(2017, 5, 14), 211.110000],
			[Date.UTC(2017, 5, 14), 211.110000],
			[Date.UTC(2017, 5, 14), 211.110000],
			[Date.UTC(2017, 5, 14), 233.330000],
			[Date.UTC(2017, 5, 14), 233.330000],
			[Date.UTC(2017, 5, 14), 244.440000],
			[Date.UTC(2017, 5, 14), 266.670000],
			[Date.UTC(2017, 5, 14), 200.000000],
			[Date.UTC(2017, 5, 14), 200.000000],
			[Date.UTC(2017, 5, 14), 200.000000],
			[Date.UTC(2017, 5, 14), 211.110000],
			[Date.UTC(2017, 5, 14), 222.220000],
			[Date.UTC(2017, 5, 14), 233.330000],
			[Date.UTC(2017, 5, 16), 177.780000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 211.110000],
			[Date.UTC(2017, 5, 16), 211.110000],
			[Date.UTC(2017, 5, 16), 222.220000],
			[Date.UTC(2017, 5, 16), 222.220000],
			[Date.UTC(2017, 5, 16), 188.890000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 211.110000],
			[Date.UTC(2017, 5, 16), 222.220000],
			[Date.UTC(2017, 5, 16), 222.220000],
			[Date.UTC(2017, 5, 16), 222.220000],
			[Date.UTC(2017, 5, 16), 233.330000],
			[Date.UTC(2017, 5, 16), 266.670000],
			[Date.UTC(2017, 5, 17), 188.890000],
			[Date.UTC(2017, 5, 17), 188.890000],
			[Date.UTC(2017, 5, 17), 188.890000],
			[Date.UTC(2017, 5, 17), 200.000000],
			[Date.UTC(2017, 5, 17), 200.000000],
			[Date.UTC(2017, 5, 17), 211.110000],
			[Date.UTC(2017, 5, 17), 233.330000],
			[Date.UTC(2017, 5, 17), 233.330000],
			[Date.UTC(2017, 5, 18), 188.890000],
			[Date.UTC(2017, 5, 18), 188.890000],
			[Date.UTC(2017, 5, 18), 200.000000],
			[Date.UTC(2017, 5, 18), 200.000000],
			[Date.UTC(2017, 5, 18), 200.000000],
			[Date.UTC(2017, 5, 18), 211.110000],
			[Date.UTC(2017, 5, 18), 222.220000],
			[Date.UTC(2017, 5, 18), 222.220000],
			[Date.UTC(2017, 5, 18), 255.560000],
			[Date.UTC(2017, 5, 18), 288.890000],
			[Date.UTC(2017, 5, 19), 188.890000],
			[Date.UTC(2017, 5, 19), 188.890000],
			[Date.UTC(2017, 5, 19), 200.000000],
			[Date.UTC(2017, 5, 19), 211.110000],
			[Date.UTC(2017, 5, 19), 222.220000],
			[Date.UTC(2017, 5, 19), 244.440000],
			[Date.UTC(2017, 5, 19), 255.560000],
			[Date.UTC(2017, 5, 21), 188.890000],
			[Date.UTC(2017, 5, 21), 200.000000],
			[Date.UTC(2017, 5, 21), 200.000000],
			[Date.UTC(2017, 5, 21), 211.110000],
			[Date.UTC(2017, 5, 21), 222.220000],
			[Date.UTC(2017, 5, 21), 222.220000],
			[Date.UTC(2017, 5, 21), 200.000000],
			[Date.UTC(2017, 5, 21), 200.000000],
			[Date.UTC(2017, 5, 21), 211.110000],
			[Date.UTC(2017, 5, 21), 211.110000],
			[Date.UTC(2017, 5, 21), 211.110000],
			[Date.UTC(2017, 5, 21), 244.440000],
			[Date.UTC(2017, 5, 22), 200.000000],
			[Date.UTC(2017, 5, 22), 200.000000],
			[Date.UTC(2017, 5, 22), 211.110000],
			[Date.UTC(2017, 5, 22), 211.110000],
			[Date.UTC(2017, 5, 22), 222.220000],
			[Date.UTC(2017, 5, 22), 222.220000],
			[Date.UTC(2017, 5, 22), 233.330000],
			[Date.UTC(2017, 5, 24), 200.000000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 222.220000],
			[Date.UTC(2017, 5, 24), 244.440000],
			[Date.UTC(2017, 5, 24), 255.560000],
			[Date.UTC(2017, 5, 24), 200.000000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 233.330000],
			[Date.UTC(2017, 5, 25), 177.780000],
			[Date.UTC(2017, 5, 25), 188.890000],
			[Date.UTC(2017, 5, 25), 200.000000],
			[Date.UTC(2017, 5, 25), 200.000000],
			[Date.UTC(2017, 5, 25), 200.000000],
			[Date.UTC(2017, 5, 25), 211.110000],
			[Date.UTC(2017, 5, 25), 211.110000],
			[Date.UTC(2017, 5, 25), 211.110000],
			[Date.UTC(2017, 5, 25), 211.110000],
			[Date.UTC(2017, 5, 25), 222.220000],
			[Date.UTC(2017, 5, 25), 222.220000],
			[Date.UTC(2017, 5, 25), 222.220000],
			[Date.UTC(2017, 5, 25), 233.330000],
			[Date.UTC(2017, 5, 26), 177.780000],
			[Date.UTC(2017, 5, 26), 188.890000],
			[Date.UTC(2017, 5, 26), 200.000000],
			[Date.UTC(2017, 5, 26), 200.000000],
			[Date.UTC(2017, 5, 26), 211.110000],
			[Date.UTC(2017, 5, 26), 211.110000],
			[Date.UTC(2017, 5, 26), 222.220000],
			[Date.UTC(2017, 5, 26), 233.330000],
			[Date.UTC(2017, 5, 26), 244.440000],
			[Date.UTC(2017, 5, 28), 188.890000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 211.110000],
			[Date.UTC(2017, 5, 28), 211.110000],
			[Date.UTC(2017, 5, 28), 211.110000],
			[Date.UTC(2017, 5, 28), 222.220000],
			[Date.UTC(2017, 5, 28), 222.220000],
			[Date.UTC(2017, 5, 28), 277.780000],
			[Date.UTC(2017, 5, 28), 177.780000],
			[Date.UTC(2017, 5, 28), 188.890000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 211.110000],
			[Date.UTC(2017, 5, 28), 222.220000],
			[Date.UTC(2017, 5, 28), 233.330000],
			[Date.UTC(2017, 5, 29), 200.000000],
			[Date.UTC(2017, 5, 29), 200.000000],
			[Date.UTC(2017, 5, 29), 200.000000],
			[Date.UTC(2017, 5, 29), 211.110000],
			[Date.UTC(2017, 5, 29), 233.330000],
			[Date.UTC(2017, 5, 29), 233.330000],
			[Date.UTC(2017, 5, 29), 255.560000],
			[Date.UTC(2017, 5, 29), 288.890000],
			[Date.UTC(2017, 5, 30), 188.890000],
			[Date.UTC(2017, 5, 30), 200.000000],
			[Date.UTC(2017, 5, 30), 200.000000],
			[Date.UTC(2017, 5, 30), 211.110000],
			[Date.UTC(2017, 5, 30), 211.110000],
			[Date.UTC(2017, 5, 30), 211.110000],
			[Date.UTC(2017, 5, 30), 222.220000],
			[Date.UTC(2017, 6, 1), 166.670000],
			[Date.UTC(2017, 6, 1), 177.780000],
			[Date.UTC(2017, 6, 1), 188.890000],
			[Date.UTC(2017, 6, 1), 200.000000],
			[Date.UTC(2017, 6, 1), 200.000000],
			[Date.UTC(2017, 6, 1), 211.110000],
			[Date.UTC(2017, 6, 1), 211.110000],
			[Date.UTC(2017, 6, 1), 211.110000],
			[Date.UTC(2017, 6, 1), 244.440000],
			[Date.UTC(2017, 6, 2), 188.890000],
			[Date.UTC(2017, 6, 2), 200.000000],
			[Date.UTC(2017, 6, 2), 200.000000],
			[Date.UTC(2017, 6, 2), 211.110000],
			[Date.UTC(2017, 6, 2), 222.220000],
			[Date.UTC(2017, 6, 2), 233.330000],
			[Date.UTC(2017, 6, 2), 244.440000],
			[Date.UTC(2017, 6, 2), 255.560000],
			[Date.UTC(2017, 6, 2), 255.560000],
			[Date.UTC(2017, 6, 2), 266.670000],
			[Date.UTC(2017, 6, 2), 277.780000],
			[Date.UTC(2017, 6, 4), 200.000000],
			[Date.UTC(2017, 6, 4), 200.000000],
			[Date.UTC(2017, 6, 4), 222.220000],
			[Date.UTC(2017, 6, 4), 233.330000],
			[Date.UTC(2017, 6, 5), 222.220000],
			[Date.UTC(2017, 6, 5), 255.560000],
			[Date.UTC(2017, 6, 5), 266.670000],
			[Date.UTC(2017, 6, 5), 333.330000],
			[Date.UTC(2017, 6, 5), 222.220000],
			[Date.UTC(2017, 6, 6), 166.670000],
			[Date.UTC(2017, 6, 6), 177.780000],
			[Date.UTC(2017, 6, 6), 200.000000],
			[Date.UTC(2017, 6, 6), 200.000000],
			[Date.UTC(2017, 6, 6), 211.110000],
			[Date.UTC(2017, 6, 6), 222.220000],
			[Date.UTC(2017, 6, 7), 200.000000],
			[Date.UTC(2017, 6, 7), 188.890000],
			[Date.UTC(2017, 6, 7), 200.000000],
			[Date.UTC(2017, 6, 7), 211.110000],
			[Date.UTC(2017, 6, 7), 222.220000],
			[Date.UTC(2017, 6, 8), 222.220000],
			[Date.UTC(2017, 6, 8), 200.000000],
			[Date.UTC(2017, 6, 8), 211.110000],
			[Date.UTC(2017, 6, 8), 222.220000],
			[Date.UTC(2017, 6, 8), 177.780000],
			[Date.UTC(2017, 6, 8), 200.000000],
			[Date.UTC(2017, 6, 10), 211.110000],
			[Date.UTC(2017, 6, 10), 233.330000],
			[Date.UTC(2017, 6, 10), 211.110000],
			[Date.UTC(2017, 6, 10), 266.670000],
			[Date.UTC(2017, 6, 11), 200.000000],
			[Date.UTC(2017, 6, 11), 200.000000],
			[Date.UTC(2017, 6, 11), 244.440000],
			[Date.UTC(2017, 6, 13), 200.000000],
			[Date.UTC(2017, 6, 13), 211.110000],
			[Date.UTC(2017, 6, 13), 222.220000],
			[Date.UTC(2017, 6, 13), 222.220000],
			[Date.UTC(2017, 6, 13), 166.670000],
			[Date.UTC(2017, 6, 13), 188.890000],
			[Date.UTC(2017, 6, 13), 211.110000],
			[Date.UTC(2017, 6, 13), 211.110000],
			[Date.UTC(2017, 6, 13), 244.440000],
			[Date.UTC(2017, 6, 13), 255.560000],
			[Date.UTC(2017, 6, 14), 166.670000],
			[Date.UTC(2017, 6, 14), 200.000000],
			[Date.UTC(2017, 6, 14), 211.110000],
			[Date.UTC(2017, 6, 14), 222.220000],
			[Date.UTC(2017, 6, 14), 222.220000],
			[Date.UTC(2017, 6, 14), 222.220000],
			[Date.UTC(2017, 6, 14), 233.330000],
			[Date.UTC(2017, 6, 14), 244.440000],
			[Date.UTC(2017, 6, 14), 244.440000],
			[Date.UTC(2017, 6, 15), 166.670000],
			[Date.UTC(2017, 6, 15), 188.890000],
			[Date.UTC(2017, 6, 15), 188.890000],
			[Date.UTC(2017, 6, 15), 211.110000],
			[Date.UTC(2017, 6, 15), 211.110000],
			[Date.UTC(2017, 6, 15), 222.220000],
			[Date.UTC(2017, 6, 17), 233.330000],
			[Date.UTC(2017, 6, 17), 177.780000],
			[Date.UTC(2017, 6, 17), 177.780000],
			[Date.UTC(2017, 6, 17), 188.890000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 233.330000],
			[Date.UTC(2017, 6, 17), 266.670000],
			[Date.UTC(2017, 6, 18), 211.110000],
			[Date.UTC(2017, 6, 19), 177.780000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 222.220000],
			[Date.UTC(2017, 6, 19), 222.220000],
			[Date.UTC(2017, 6, 19), 222.220000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 188.890000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 211.110000],
			[Date.UTC(2017, 6, 19), 244.440000],
			[Date.UTC(2017, 6, 19), 288.890000],
			[Date.UTC(2017, 6, 21), 166.670000],
			[Date.UTC(2017, 6, 21), 177.780000],
			[Date.UTC(2017, 6, 21), 177.780000],
			[Date.UTC(2017, 6, 21), 200.000000],
			[Date.UTC(2017, 6, 22), 166.670000],
			[Date.UTC(2017, 6, 22), 200.000000],
			[Date.UTC(2017, 6, 22), 200.000000],
			[Date.UTC(2017, 6, 22), 222.220000],
			[Date.UTC(2017, 6, 22), 222.220000],
			[Date.UTC(2017, 6, 22), 244.440000],
			[Date.UTC(2017, 6, 22), 255.560000],
			[Date.UTC(2017, 6, 23), 211.110000],
			[Date.UTC(2017, 6, 23), 233.330000],
			[Date.UTC(2017, 6, 23), 188.890000],
			[Date.UTC(2017, 6, 23), 200.000000],
			[Date.UTC(2017, 6, 23), 222.220000],
			[Date.UTC(2017, 6, 23), 233.330000],
			[Date.UTC(2017, 6, 24), 166.670000],
			[Date.UTC(2017, 6, 24), 166.670000],
			[Date.UTC(2017, 6, 24), 188.890000],
			[Date.UTC(2017, 6, 24), 200.000000],
			[Date.UTC(2017, 6, 24), 211.110000],
			[Date.UTC(2017, 6, 24), 211.110000],
			[Date.UTC(2017, 6, 24), 211.110000],
			[Date.UTC(2017, 6, 24), 233.330000],
			[Date.UTC(2017, 6, 24), 188.890000],
			[Date.UTC(2017, 6, 24), 200.000000],
			[Date.UTC(2017, 6, 24), 211.110000],
			[Date.UTC(2017, 6, 24), 222.220000],
			[Date.UTC(2017, 6, 24), 233.330000],
			[Date.UTC(2017, 6, 24), 233.330000],
			[Date.UTC(2017, 6, 24), 244.440000],
			[Date.UTC(2017, 6, 26), 188.890000],
			[Date.UTC(2017, 6, 26), 200.000000],
			[Date.UTC(2017, 6, 26), 211.110000],
			[Date.UTC(2017, 6, 27), 233.330000],
			[Date.UTC(2017, 6, 27), 211.110000],
			[Date.UTC(2017, 6, 27), 222.220000],
			[Date.UTC(2017, 6, 27), 233.330000],
			[Date.UTC(2017, 6, 27), 244.440000],
			[Date.UTC(2017, 6, 27), 244.440000],
			[Date.UTC(2017, 6, 28), 222.220000],
			[Date.UTC(2017, 6, 28), 222.220000],
			[Date.UTC(2017, 6, 28), 222.220000],
			[Date.UTC(2017, 6, 28), 255.560000],
			[Date.UTC(2017, 6, 28), 300.000000],
			[Date.UTC(2017, 6, 28), 344.440000],
			[Date.UTC(2017, 6, 28), 266.670000],
			[Date.UTC(2017, 6, 28), 266.670000],
			[Date.UTC(2017, 6, 28), 266.670000],
			[Date.UTC(2017, 6, 28), 288.890000],
			[Date.UTC(2017, 6, 30), 222.220000],
			[Date.UTC(2017, 6, 30), 233.330000],
			[Date.UTC(2017, 6, 30), 244.440000],
			[Date.UTC(2017, 6, 30), 244.440000],
			[Date.UTC(2017, 6, 30), 300.000000],
			[Date.UTC(2017, 6, 30), 300.000000],
			[Date.UTC(2017, 6, 31), 200.000000],
			[Date.UTC(2017, 6, 31), 222.220000],
			[Date.UTC(2017, 6, 31), 233.330000],
			[Date.UTC(2017, 6, 31), 233.330000],
			[Date.UTC(2017, 7, 1), 200.000000],
			[Date.UTC(2017, 7, 1), 211.110000],
			[Date.UTC(2017, 7, 1), 222.220000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 244.440000],
			[Date.UTC(2017, 7, 1), 277.780000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 255.560000],
			[Date.UTC(2017, 7, 2), 266.670000],
			[Date.UTC(2017, 7, 2), 266.670000],
			[Date.UTC(2017, 7, 2), 266.670000],
			[Date.UTC(2017, 7, 2), 288.890000],
			[Date.UTC(2017, 7, 2), 300.000000],
			[Date.UTC(2017, 7, 2), 311.110000],
			[Date.UTC(2017, 7, 2), 333.330000],
			[Date.UTC(2017, 7, 2), 588.890000],
			[Date.UTC(2017, 7, 3), 177.780000],
			[Date.UTC(2017, 7, 3), 188.890000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 244.440000],
			[Date.UTC(2017, 7, 3), 244.440000],
			[Date.UTC(2017, 7, 3), 255.560000],
			[Date.UTC(2017, 7, 3), 255.560000],
			[Date.UTC(2017, 7, 3), 255.560000],
			[Date.UTC(2017, 7, 3), 266.670000],
			[Date.UTC(2017, 7, 3), 288.890000],
			[Date.UTC(2017, 7, 3), 311.110000],
			[Date.UTC(2017, 7, 3), 322.220000],
			[Date.UTC(2017, 7, 3), 322.220000],
			[Date.UTC(2017, 7, 3), 344.440000],
			[Date.UTC(2017, 7, 3), 400.000000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 211.110000],
			[Date.UTC(2017, 7, 4), 211.110000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 277.780000],
			[Date.UTC(2017, 7, 4), 288.890000],
			[Date.UTC(2017, 7, 4), 288.890000],
			[Date.UTC(2017, 7, 4), 300.000000],
			[Date.UTC(2017, 7, 4), 388.890000],
			[Date.UTC(2017, 7, 4), 400.000000],
			[Date.UTC(2017, 7, 4), 177.780000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 255.560000],
			[Date.UTC(2017, 7, 4), 211.110000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 222.220000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 277.780000],
			[Date.UTC(2017, 7, 4), 277.780000],
			[Date.UTC(2017, 7, 4), 288.890000],
			[Date.UTC(2017, 7, 4), 288.890000],
			[Date.UTC(2017, 7, 4), 300.000000],
			[Date.UTC(2017, 7, 4), 522.220000],
			[Date.UTC(2017, 7, 4), 588.890000],
			[Date.UTC(2017, 7, 4), 733.330000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 222.220000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 244.440000],
			[Date.UTC(2017, 7, 6), 255.560000],
			[Date.UTC(2017, 7, 6), 255.560000],
			[Date.UTC(2017, 7, 6), 266.670000],
			[Date.UTC(2017, 7, 6), 266.670000],
			[Date.UTC(2017, 7, 6), 288.890000],
			[Date.UTC(2017, 7, 6), 666.670000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 244.440000],
			[Date.UTC(2017, 7, 7), 255.560000],
			[Date.UTC(2017, 7, 7), 277.780000],
			[Date.UTC(2017, 7, 7), 288.890000],
			[Date.UTC(2017, 7, 7), 300.000000],
			[Date.UTC(2017, 7, 7), 311.110000],
			[Date.UTC(2017, 7, 7), 333.330000],
			[Date.UTC(2017, 7, 7), 355.560000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 277.780000],
			[Date.UTC(2017, 7, 8), 300.000000],
			[Date.UTC(2017, 7, 8), 433.330000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 255.560000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 277.780000],
			[Date.UTC(2017, 7, 8), 277.780000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 8), 300.000000],
			[Date.UTC(2017, 7, 8), 300.000000],
			[Date.UTC(2017, 7, 8), 322.220000],
			[Date.UTC(2017, 7, 8), 333.330000],
			[Date.UTC(2017, 7, 8), 333.330000],
			[Date.UTC(2017, 7, 8), 366.670000],
			[Date.UTC(2017, 7, 8), 377.780000],
			[Date.UTC(2017, 7, 8), 388.890000],
			[Date.UTC(2017, 7, 8), 522.220000],
			[Date.UTC(2017, 7, 8), 633.330000],
			[Date.UTC(2017, 7, 8), 666.670000],
			[Date.UTC(2017, 7, 8), 666.670000],
			[Date.UTC(2017, 7, 8), 677.780000],
			[Date.UTC(2017, 7, 8), 677.780000],
			[Date.UTC(2017, 7, 9), 233.330000],
			[Date.UTC(2017, 7, 9), 255.560000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 211.110000],
			[Date.UTC(2017, 7, 10), 222.220000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 244.440000],
			[Date.UTC(2017, 7, 10), 255.560000],
			[Date.UTC(2017, 7, 10), 266.670000],
			[Date.UTC(2017, 7, 10), 266.670000],
			[Date.UTC(2017, 7, 11), 200.000000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 11), 233.330000],
			[Date.UTC(2017, 7, 11), 233.330000],
			[Date.UTC(2017, 7, 11), 255.560000],
			[Date.UTC(2017, 7, 11), 255.560000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 11), 300.000000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 277.780000],
			[Date.UTC(2017, 7, 12), 288.890000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 200.000000],
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
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 266.670000],
			[Date.UTC(2017, 7, 12), 277.780000],
			[Date.UTC(2017, 7, 12), 288.890000],
			[Date.UTC(2017, 7, 12), 288.890000],
			[Date.UTC(2017, 7, 13), 200.000000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 266.670000],
			[Date.UTC(2017, 7, 13), 266.670000],
			[Date.UTC(2017, 7, 13), 355.560000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 255.560000],
			[Date.UTC(2017, 7, 14), 277.780000],
			[Date.UTC(2017, 7, 14), 311.110000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 244.440000],
			[Date.UTC(2017, 7, 15), 255.560000],
			[Date.UTC(2017, 7, 15), 266.670000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 255.560000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 366.670000],
			[Date.UTC(2017, 7, 17), 533.330000],
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
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 266.670000],
			[Date.UTC(2017, 7, 23), 266.670000],
			[Date.UTC(2017, 7, 23), 266.670000],
			[Date.UTC(2017, 7, 23), 288.890000],
			[Date.UTC(2017, 7, 23), 500.000000],
			[Date.UTC(2017, 7, 24), 188.890000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 466.670000],
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
			[Date.UTC(2017, 7, 25), 266.670000],
		]    }, {
		name: 'chrome',
		data: [
		]    }]
}