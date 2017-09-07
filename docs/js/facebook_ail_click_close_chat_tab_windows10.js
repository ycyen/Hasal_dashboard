var facebook_ail_click_close_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows10'
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
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 111.110000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 166.670000],
			[Date.UTC(2017, 7, 26), 177.780000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 166.670000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 2), 122.220000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 88.890000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 44.440000],
			[Date.UTC(2017, 7, 26), 77.780000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 55.560000],
		]    }]
}