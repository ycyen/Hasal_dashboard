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
			[Date.UTC(2017, 8, 4), 155.560000],
			[Date.UTC(2017, 8, 4), 166.670000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 277.780000],
			[Date.UTC(2017, 8, 6), 155.560000],
			[Date.UTC(2017, 8, 6), 155.560000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 266.670000],
			[Date.UTC(2017, 8, 6), 566.670000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 188.890000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 211.110000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 355.560000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 266.670000],
			[Date.UTC(2017, 8, 8), 366.670000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 266.670000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 266.670000],
			[Date.UTC(2017, 8, 11), 188.890000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 11), 311.110000],
			[Date.UTC(2017, 8, 11), 355.560000],
			[Date.UTC(2017, 8, 11), 466.670000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 12), 200.000000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 12), 244.440000],
			[Date.UTC(2017, 8, 12), 255.560000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 244.440000],
			[Date.UTC(2017, 8, 13), 277.780000],
			[Date.UTC(2017, 8, 13), 277.780000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 15), 177.780000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 311.110000],
			[Date.UTC(2017, 8, 15), 400.000000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 277.780000],
			[Date.UTC(2017, 8, 18), 311.110000],
			[Date.UTC(2017, 8, 18), 333.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 188.890000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 233.330000],
			[Date.UTC(2017, 8, 5), 300.000000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 211.110000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 288.890000],
			[Date.UTC(2017, 8, 6), 300.000000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 166.670000],
			[Date.UTC(2017, 8, 7), 177.780000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 211.110000],
			[Date.UTC(2017, 8, 7), 344.440000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 433.330000],
			[Date.UTC(2017, 8, 9), 166.670000],
			[Date.UTC(2017, 8, 9), 166.670000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 300.000000],
			[Date.UTC(2017, 8, 10), 133.330000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 222.220000],
			[Date.UTC(2017, 8, 11), 144.440000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 177.780000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 12), 133.330000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 12), 200.000000],
			[Date.UTC(2017, 8, 12), 200.000000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 12), 388.890000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 211.110000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 255.560000],
			[Date.UTC(2017, 8, 13), 355.560000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 14), 144.440000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 177.780000],
			[Date.UTC(2017, 8, 14), 188.890000],
			[Date.UTC(2017, 8, 14), 188.890000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 211.110000],
			[Date.UTC(2017, 8, 15), 177.780000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 244.440000],
			[Date.UTC(2017, 8, 18), 255.560000],
			[Date.UTC(2017, 8, 18), 300.000000],
		]    }]
}