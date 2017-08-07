var gmail_ail_open_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_open_mail_windows8'
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
			[Date.UTC(2017, 7, 6), 233.330000],
			[Date.UTC(2017, 7, 6), 411.110000],
			[Date.UTC(2017, 7, 6), 500.000000],
			[Date.UTC(2017, 7, 6), 544.440000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 5), 188.890000],
			[Date.UTC(2017, 7, 5), 188.890000],
			[Date.UTC(2017, 7, 5), 166.670000],
			[Date.UTC(2017, 7, 5), 166.670000],
			[Date.UTC(2017, 7, 5), 166.670000],
			[Date.UTC(2017, 7, 5), 255.560000],
			[Date.UTC(2017, 7, 6), 177.780000],
			[Date.UTC(2017, 7, 6), 188.890000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 211.110000],
			[Date.UTC(2017, 7, 6), 244.440000],
			[Date.UTC(2017, 7, 6), 755.560000],
		]    }]
}