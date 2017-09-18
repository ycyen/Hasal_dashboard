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
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 4), 255.560000],
			[Date.UTC(2017, 8, 4), 266.670000],
			[Date.UTC(2017, 8, 4), 288.890000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 7), 188.890000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 244.440000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 10), 222.220000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 11), 222.220000],
			[Date.UTC(2017, 8, 11), 222.220000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 244.440000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 266.670000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 244.440000],
			[Date.UTC(2017, 8, 13), 244.440000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 244.440000],
			[Date.UTC(2017, 8, 14), 244.440000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 233.330000],
			[Date.UTC(2017, 8, 15), 233.330000],
			[Date.UTC(2017, 8, 15), 244.440000],
			[Date.UTC(2017, 8, 15), 244.440000],
			[Date.UTC(2017, 8, 15), 255.560000],
			[Date.UTC(2017, 8, 15), 255.560000],
			[Date.UTC(2017, 8, 15), 266.670000],
			[Date.UTC(2017, 8, 15), 277.780000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 244.440000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 155.560000],
			[Date.UTC(2017, 8, 4), 155.560000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 133.330000],
			[Date.UTC(2017, 8, 5), 144.440000],
			[Date.UTC(2017, 8, 5), 155.560000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 155.560000],
			[Date.UTC(2017, 8, 7), 122.220000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 144.440000],
			[Date.UTC(2017, 8, 7), 155.560000],
			[Date.UTC(2017, 8, 7), 177.780000],
			[Date.UTC(2017, 8, 7), 177.780000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 133.330000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 155.560000],
			[Date.UTC(2017, 8, 8), 155.560000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 177.780000],
			[Date.UTC(2017, 8, 10), 122.220000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 155.560000],
			[Date.UTC(2017, 8, 10), 155.560000],
			[Date.UTC(2017, 8, 10), 166.670000],
			[Date.UTC(2017, 8, 11), 122.220000],
			[Date.UTC(2017, 8, 11), 122.220000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 144.440000],
			[Date.UTC(2017, 8, 11), 144.440000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 177.780000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 133.330000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 177.780000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 13), 111.110000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 144.440000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 14), 122.220000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 144.440000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 15), 155.560000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 166.670000],
		]    }]
}