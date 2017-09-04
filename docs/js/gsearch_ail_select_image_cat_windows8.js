var gsearch_ail_select_image_cat_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows8'
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
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 25), 88.890000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 77.780000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 27), 100.000000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 111.110000],
			[Date.UTC(2017, 7, 28), 88.890000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 88.890000],
			[Date.UTC(2017, 7, 29), 88.890000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 111.110000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 111.110000],
			[Date.UTC(2017, 7, 22), 111.110000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 200.000000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 111.110000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 266.670000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 188.890000],
			[Date.UTC(2017, 7, 29), 222.220000],
			[Date.UTC(2017, 7, 29), 244.440000],
			[Date.UTC(2017, 7, 29), 88.890000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 31), 111.110000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 211.110000],
			[Date.UTC(2017, 7, 31), 222.220000],
			[Date.UTC(2017, 7, 31), 244.440000],
			[Date.UTC(2017, 7, 31), 244.440000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 244.440000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 111.110000],
			[Date.UTC(2017, 8, 3), 122.220000],
			[Date.UTC(2017, 8, 3), 200.000000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 111.110000],
			[Date.UTC(2017, 8, 4), 200.000000],
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 88.890000],
		]    }]
}