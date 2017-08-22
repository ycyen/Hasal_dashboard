var facebook_ail_click_open_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows10'
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
			[Date.UTC(2017, 2, 16), 200.000000],
			[Date.UTC(2017, 2, 16), 266.670000],
			[Date.UTC(2017, 2, 16), 466.670000],
			[Date.UTC(2017, 2, 16), 555.560000],
			[Date.UTC(2017, 2, 16), 633.330000],
			[Date.UTC(2017, 2, 16), 77.780000],
			[Date.UTC(2017, 2, 30), 255.560000],
			[Date.UTC(2017, 2, 30), 266.670000],
			[Date.UTC(2017, 2, 30), 577.780000],
			[Date.UTC(2017, 2, 30), 588.890000],
			[Date.UTC(2017, 2, 30), 600.000000],
			[Date.UTC(2017, 2, 30), 66.670000],
			[Date.UTC(2017, 3, 14), 100.000000],
			[Date.UTC(2017, 3, 14), 255.560000],
			[Date.UTC(2017, 3, 14), 266.670000],
			[Date.UTC(2017, 3, 14), 288.890000],
			[Date.UTC(2017, 3, 14), 500.000000],
			[Date.UTC(2017, 3, 14), 55.560000],
			[Date.UTC(2017, 3, 14), 588.890000],
			[Date.UTC(2017, 3, 14), 633.330000],
			[Date.UTC(2017, 3, 14), 66.670000],
			[Date.UTC(2017, 3, 27), 200.000000],
			[Date.UTC(2017, 3, 27), 255.560000],
			[Date.UTC(2017, 3, 27), 266.670000],
			[Date.UTC(2017, 3, 27), 288.890000],
			[Date.UTC(2017, 3, 27), 311.110000],
			[Date.UTC(2017, 3, 27), 566.670000],
			[Date.UTC(2017, 3, 27), 66.670000],
			[Date.UTC(2017, 3, 27), 66.670000],
			[Date.UTC(2017, 4, 11), 111.110000],
			[Date.UTC(2017, 4, 11), 244.440000],
			[Date.UTC(2017, 4, 11), 266.670000],
			[Date.UTC(2017, 4, 11), 266.670000],
			[Date.UTC(2017, 4, 11), 477.780000],
			[Date.UTC(2017, 4, 11), 500.000000],
			[Date.UTC(2017, 4, 11), 600.000000],
			[Date.UTC(2017, 4, 26), 100.000000],
			[Date.UTC(2017, 4, 26), 133.330000],
			[Date.UTC(2017, 4, 26), 244.440000],
			[Date.UTC(2017, 4, 26), 288.890000],
			[Date.UTC(2017, 4, 26), 366.670000],
			[Date.UTC(2017, 4, 26), 466.670000],
			[Date.UTC(2017, 4, 26), 544.440000],
			[Date.UTC(2017, 4, 26), 55.560000],
			[Date.UTC(2017, 5, 1), 200.000000],
			[Date.UTC(2017, 5, 1), 266.670000],
			[Date.UTC(2017, 5, 1), 266.670000],
			[Date.UTC(2017, 5, 1), 277.780000],
			[Date.UTC(2017, 5, 1), 311.110000],
			[Date.UTC(2017, 5, 1), 322.220000],
			[Date.UTC(2017, 5, 1), 477.780000],
			[Date.UTC(2017, 5, 2), 133.330000],
			[Date.UTC(2017, 5, 2), 1488.890000],
			[Date.UTC(2017, 5, 2), 188.890000],
			[Date.UTC(2017, 5, 2), 233.330000],
			[Date.UTC(2017, 5, 2), 244.440000],
			[Date.UTC(2017, 5, 2), 255.560000],
			[Date.UTC(2017, 5, 2), 266.670000],
			[Date.UTC(2017, 5, 3), 244.440000],
			[Date.UTC(2017, 5, 3), 266.670000],
			[Date.UTC(2017, 5, 3), 266.670000],
			[Date.UTC(2017, 5, 3), 266.670000],
			[Date.UTC(2017, 5, 3), 300.000000],
			[Date.UTC(2017, 5, 3), 377.780000],
			[Date.UTC(2017, 5, 4), 233.330000],
			[Date.UTC(2017, 5, 4), 255.560000],
			[Date.UTC(2017, 5, 4), 266.670000],
			[Date.UTC(2017, 5, 4), 577.780000],
			[Date.UTC(2017, 5, 4), 66.670000],
			[Date.UTC(2017, 5, 4), 66.670000],
			[Date.UTC(2017, 5, 6), 211.110000],
			[Date.UTC(2017, 5, 6), 222.220000],
			[Date.UTC(2017, 5, 6), 244.440000],
			[Date.UTC(2017, 5, 6), 244.440000],
			[Date.UTC(2017, 5, 6), 255.560000],
			[Date.UTC(2017, 5, 6), 266.670000],
			[Date.UTC(2017, 5, 6), 566.670000],
			[Date.UTC(2017, 5, 7), 233.330000],
			[Date.UTC(2017, 5, 7), 255.560000],
			[Date.UTC(2017, 5, 7), 255.560000],
			[Date.UTC(2017, 5, 7), 266.670000],
			[Date.UTC(2017, 5, 7), 266.670000],
			[Date.UTC(2017, 5, 7), 333.330000],
			[Date.UTC(2017, 5, 7), 633.330000],
			[Date.UTC(2017, 5, 7), 255.560000],
			[Date.UTC(2017, 5, 7), 266.670000],
			[Date.UTC(2017, 5, 7), 266.670000],
			[Date.UTC(2017, 5, 7), 277.780000],
			[Date.UTC(2017, 5, 7), 300.000000],
			[Date.UTC(2017, 5, 7), 300.000000],
			[Date.UTC(2017, 5, 7), 355.560000],
			[Date.UTC(2017, 5, 7), 77.780000],
			[Date.UTC(2017, 5, 8), 177.780000],
			[Date.UTC(2017, 5, 8), 255.560000],
			[Date.UTC(2017, 5, 8), 277.780000],
			[Date.UTC(2017, 5, 8), 277.780000],
			[Date.UTC(2017, 5, 8), 300.000000],
			[Date.UTC(2017, 5, 8), 300.000000],
			[Date.UTC(2017, 5, 8), 333.330000],
			[Date.UTC(2017, 5, 8), 377.780000],
			[Date.UTC(2017, 5, 8), 66.670000],
			[Date.UTC(2017, 5, 9), 1244.440000],
			[Date.UTC(2017, 5, 9), 166.670000],
			[Date.UTC(2017, 5, 9), 244.440000],
			[Date.UTC(2017, 5, 9), 255.560000],
			[Date.UTC(2017, 5, 9), 266.670000],
			[Date.UTC(2017, 5, 9), 266.670000],
			[Date.UTC(2017, 5, 9), 266.670000],
			[Date.UTC(2017, 5, 9), 288.890000],
			[Date.UTC(2017, 5, 9), 311.110000],
			[Date.UTC(2017, 5, 9), 333.330000],
			[Date.UTC(2017, 5, 11), 233.330000],
			[Date.UTC(2017, 5, 11), 244.440000],
			[Date.UTC(2017, 5, 11), 244.440000],
			[Date.UTC(2017, 5, 11), 255.560000],
			[Date.UTC(2017, 5, 11), 266.670000],
			[Date.UTC(2017, 5, 11), 266.670000],
			[Date.UTC(2017, 5, 11), 266.670000],
			[Date.UTC(2017, 5, 11), 277.780000],
			[Date.UTC(2017, 5, 11), 288.890000],
			[Date.UTC(2017, 5, 12), 200.000000],
			[Date.UTC(2017, 5, 12), 233.330000],
			[Date.UTC(2017, 5, 12), 277.780000],
			[Date.UTC(2017, 5, 12), 288.890000],
			[Date.UTC(2017, 5, 12), 300.000000],
			[Date.UTC(2017, 5, 12), 300.000000],
			[Date.UTC(2017, 5, 12), 311.110000],
			[Date.UTC(2017, 5, 12), 544.440000],
			[Date.UTC(2017, 5, 12), 200.000000],
			[Date.UTC(2017, 5, 12), 233.330000],
			[Date.UTC(2017, 5, 12), 244.440000],
			[Date.UTC(2017, 5, 12), 255.560000],
			[Date.UTC(2017, 5, 12), 277.780000],
			[Date.UTC(2017, 5, 12), 288.890000],
			[Date.UTC(2017, 5, 12), 300.000000],
			[Date.UTC(2017, 5, 14), 244.440000],
			[Date.UTC(2017, 5, 14), 266.670000],
			[Date.UTC(2017, 5, 14), 277.780000],
			[Date.UTC(2017, 5, 14), 288.890000],
			[Date.UTC(2017, 5, 14), 300.000000],
			[Date.UTC(2017, 5, 14), 311.110000],
			[Date.UTC(2017, 5, 14), 588.890000],
			[Date.UTC(2017, 5, 14), 600.000000],
			[Date.UTC(2017, 5, 14), 200.000000],
			[Date.UTC(2017, 5, 14), 233.330000],
			[Date.UTC(2017, 5, 14), 255.560000],
			[Date.UTC(2017, 5, 14), 255.560000],
			[Date.UTC(2017, 5, 14), 300.000000],
			[Date.UTC(2017, 5, 14), 300.000000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 255.560000],
			[Date.UTC(2017, 5, 16), 266.670000],
			[Date.UTC(2017, 5, 16), 266.670000],
			[Date.UTC(2017, 5, 16), 288.890000],
			[Date.UTC(2017, 5, 16), 300.000000],
			[Date.UTC(2017, 5, 16), 200.000000],
			[Date.UTC(2017, 5, 16), 222.220000],
			[Date.UTC(2017, 5, 16), 244.440000],
			[Date.UTC(2017, 5, 16), 266.670000],
			[Date.UTC(2017, 5, 16), 300.000000],
			[Date.UTC(2017, 5, 16), 66.670000],
			[Date.UTC(2017, 5, 17), 233.330000],
			[Date.UTC(2017, 5, 17), 244.440000],
			[Date.UTC(2017, 5, 17), 266.670000],
			[Date.UTC(2017, 5, 17), 266.670000],
			[Date.UTC(2017, 5, 17), 300.000000],
			[Date.UTC(2017, 5, 17), 55.560000],
			[Date.UTC(2017, 5, 17), 55.560000],
			[Date.UTC(2017, 5, 18), 100.000000],
			[Date.UTC(2017, 5, 18), 200.000000],
			[Date.UTC(2017, 5, 18), 222.220000],
			[Date.UTC(2017, 5, 18), 244.440000],
			[Date.UTC(2017, 5, 18), 255.560000],
			[Date.UTC(2017, 5, 18), 266.670000],
			[Date.UTC(2017, 5, 18), 266.670000],
			[Date.UTC(2017, 5, 18), 266.670000],
			[Date.UTC(2017, 5, 18), 333.330000],
			[Date.UTC(2017, 5, 19), 244.440000],
			[Date.UTC(2017, 5, 19), 266.670000],
			[Date.UTC(2017, 5, 19), 266.670000],
			[Date.UTC(2017, 5, 19), 277.780000],
			[Date.UTC(2017, 5, 19), 288.890000],
			[Date.UTC(2017, 5, 19), 366.670000],
			[Date.UTC(2017, 5, 21), 177.780000],
			[Date.UTC(2017, 5, 21), 188.890000],
			[Date.UTC(2017, 5, 21), 277.780000],
			[Date.UTC(2017, 5, 21), 311.110000],
			[Date.UTC(2017, 5, 21), 322.220000],
			[Date.UTC(2017, 5, 21), 322.220000],
			[Date.UTC(2017, 5, 21), 44.440000],
			[Date.UTC(2017, 5, 21), 88.890000],
			[Date.UTC(2017, 5, 21), 244.440000],
			[Date.UTC(2017, 5, 21), 266.670000],
			[Date.UTC(2017, 5, 21), 277.780000],
			[Date.UTC(2017, 5, 21), 288.890000],
			[Date.UTC(2017, 5, 21), 333.330000],
			[Date.UTC(2017, 5, 21), 44.440000],
			[Date.UTC(2017, 5, 21), 55.560000],
			[Date.UTC(2017, 5, 22), 211.110000],
			[Date.UTC(2017, 5, 22), 244.440000],
			[Date.UTC(2017, 5, 22), 244.440000],
			[Date.UTC(2017, 5, 22), 244.440000],
			[Date.UTC(2017, 5, 22), 277.780000],
			[Date.UTC(2017, 5, 22), 311.110000],
			[Date.UTC(2017, 5, 22), 388.890000],
			[Date.UTC(2017, 5, 22), 588.890000],
			[Date.UTC(2017, 5, 24), 244.440000],
			[Date.UTC(2017, 5, 24), 255.560000],
			[Date.UTC(2017, 5, 24), 266.670000],
			[Date.UTC(2017, 5, 24), 266.670000],
			[Date.UTC(2017, 5, 24), 266.670000],
			[Date.UTC(2017, 5, 24), 288.890000],
			[Date.UTC(2017, 5, 24), 188.890000],
			[Date.UTC(2017, 5, 24), 188.890000],
			[Date.UTC(2017, 5, 24), 266.670000],
			[Date.UTC(2017, 5, 24), 266.670000],
			[Date.UTC(2017, 5, 25), 188.890000],
			[Date.UTC(2017, 5, 25), 200.000000],
			[Date.UTC(2017, 5, 25), 200.000000],
			[Date.UTC(2017, 5, 25), 233.330000],
			[Date.UTC(2017, 5, 25), 255.560000],
			[Date.UTC(2017, 5, 25), 266.670000],
			[Date.UTC(2017, 5, 25), 266.670000],
			[Date.UTC(2017, 5, 25), 266.670000],
			[Date.UTC(2017, 5, 25), 300.000000],
			[Date.UTC(2017, 5, 25), 300.000000],
			[Date.UTC(2017, 5, 25), 311.110000],
			[Date.UTC(2017, 5, 26), 244.440000],
			[Date.UTC(2017, 5, 26), 244.440000],
			[Date.UTC(2017, 5, 26), 255.560000],
			[Date.UTC(2017, 5, 26), 255.560000],
			[Date.UTC(2017, 5, 26), 277.780000],
			[Date.UTC(2017, 5, 26), 277.780000],
			[Date.UTC(2017, 5, 26), 333.330000],
			[Date.UTC(2017, 5, 26), 333.330000],
			[Date.UTC(2017, 5, 26), 411.110000],
			[Date.UTC(2017, 5, 28), 200.000000],
			[Date.UTC(2017, 5, 28), 244.440000],
			[Date.UTC(2017, 5, 28), 266.670000],
			[Date.UTC(2017, 5, 28), 266.670000],
			[Date.UTC(2017, 5, 28), 188.890000],
			[Date.UTC(2017, 5, 28), 188.890000],
			[Date.UTC(2017, 5, 28), 244.440000],
			[Date.UTC(2017, 5, 28), 455.560000],
			[Date.UTC(2017, 5, 29), 177.780000],
			[Date.UTC(2017, 5, 29), 222.220000],
			[Date.UTC(2017, 5, 29), 233.330000],
			[Date.UTC(2017, 5, 30), 244.440000],
			[Date.UTC(2017, 5, 30), 400.000000],
			[Date.UTC(2017, 6, 1), 200.000000],
			[Date.UTC(2017, 6, 1), 544.440000],
			[Date.UTC(2017, 6, 2), 266.670000],
			[Date.UTC(2017, 6, 4), 244.440000],
			[Date.UTC(2017, 6, 4), 288.890000],
			[Date.UTC(2017, 6, 4), 300.000000],
			[Date.UTC(2017, 6, 5), 222.220000],
			[Date.UTC(2017, 6, 5), 233.330000],
			[Date.UTC(2017, 6, 5), 266.670000],
			[Date.UTC(2017, 6, 5), 277.780000],
			[Date.UTC(2017, 6, 5), 277.780000],
			[Date.UTC(2017, 6, 5), 288.890000],
			[Date.UTC(2017, 6, 5), 322.220000],
			[Date.UTC(2017, 6, 5), 344.440000],
			[Date.UTC(2017, 6, 5), 266.670000],
			[Date.UTC(2017, 6, 5), 277.780000],
			[Date.UTC(2017, 6, 6), 222.220000],
			[Date.UTC(2017, 6, 6), 266.670000],
			[Date.UTC(2017, 6, 6), 266.670000],
			[Date.UTC(2017, 6, 6), 300.000000],
			[Date.UTC(2017, 6, 6), 300.000000],
			[Date.UTC(2017, 6, 7), 88.890000],
			[Date.UTC(2017, 6, 7), 266.670000],
			[Date.UTC(2017, 6, 7), 288.890000],
			[Date.UTC(2017, 6, 8), 266.670000],
			[Date.UTC(2017, 6, 8), 188.890000],
			[Date.UTC(2017, 6, 8), 233.330000],
			[Date.UTC(2017, 6, 8), 255.560000],
			[Date.UTC(2017, 6, 8), 288.890000],
			[Date.UTC(2017, 6, 8), 344.440000],
			[Date.UTC(2017, 6, 10), 177.780000],
			[Date.UTC(2017, 6, 10), 211.110000],
			[Date.UTC(2017, 6, 10), 322.220000],
			[Date.UTC(2017, 6, 10), 333.330000],
			[Date.UTC(2017, 6, 10), 200.000000],
			[Date.UTC(2017, 6, 10), 222.220000],
			[Date.UTC(2017, 6, 10), 222.220000],
			[Date.UTC(2017, 6, 10), 266.670000],
			[Date.UTC(2017, 6, 10), 277.780000],
			[Date.UTC(2017, 6, 10), 300.000000],
			[Date.UTC(2017, 6, 10), 344.440000],
			[Date.UTC(2017, 6, 11), 211.110000],
			[Date.UTC(2017, 6, 11), 55.560000],
			[Date.UTC(2017, 6, 13), 233.330000],
			[Date.UTC(2017, 6, 13), 266.670000],
			[Date.UTC(2017, 6, 13), 200.000000],
			[Date.UTC(2017, 6, 13), 222.220000],
			[Date.UTC(2017, 6, 13), 300.000000],
			[Date.UTC(2017, 6, 13), 333.330000],
			[Date.UTC(2017, 6, 14), 200.000000],
			[Date.UTC(2017, 6, 14), 233.330000],
			[Date.UTC(2017, 6, 14), 255.560000],
			[Date.UTC(2017, 6, 14), 255.560000],
			[Date.UTC(2017, 6, 14), 300.000000],
			[Date.UTC(2017, 6, 14), 300.000000],
			[Date.UTC(2017, 6, 14), 311.110000],
			[Date.UTC(2017, 6, 15), 233.330000],
			[Date.UTC(2017, 6, 15), 277.780000],
			[Date.UTC(2017, 6, 15), 322.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 44.440000],
			[Date.UTC(2017, 6, 17), 188.890000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 233.330000],
			[Date.UTC(2017, 6, 17), 255.560000],
			[Date.UTC(2017, 6, 17), 266.670000],
			[Date.UTC(2017, 6, 17), 277.780000],
			[Date.UTC(2017, 6, 17), 288.890000],
			[Date.UTC(2017, 6, 17), 300.000000],
			[Date.UTC(2017, 6, 17), 177.780000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 222.220000],
			[Date.UTC(2017, 6, 17), 288.890000],
			[Date.UTC(2017, 6, 17), 300.000000],
			[Date.UTC(2017, 6, 17), 344.440000],
			[Date.UTC(2017, 6, 19), 211.110000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 300.000000],
			[Date.UTC(2017, 6, 19), 300.000000],
			[Date.UTC(2017, 6, 19), 311.110000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 21), 233.330000],
			[Date.UTC(2017, 6, 21), 300.000000],
			[Date.UTC(2017, 6, 21), 566.670000],
			[Date.UTC(2017, 6, 22), 11.110000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 26), 311.110000],
			[Date.UTC(2017, 6, 26), 88.890000],
			[Date.UTC(2017, 6, 27), 300.000000],
			[Date.UTC(2017, 6, 27), 388.890000],
			[Date.UTC(2017, 6, 27), 600.000000],
			[Date.UTC(2017, 6, 27), 211.110000],
			[Date.UTC(2017, 6, 27), 300.000000],
			[Date.UTC(2017, 6, 27), 311.110000],
			[Date.UTC(2017, 6, 27), 333.330000],
			[Date.UTC(2017, 6, 28), 211.110000],
			[Date.UTC(2017, 6, 28), 266.670000],
			[Date.UTC(2017, 6, 28), 333.330000],
			[Date.UTC(2017, 6, 28), 344.440000],
			[Date.UTC(2017, 6, 28), 366.670000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 388.890000],
			[Date.UTC(2017, 6, 28), 444.440000],
			[Date.UTC(2017, 6, 28), 455.560000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 30), 44.440000],
			[Date.UTC(2017, 6, 31), 33.330000],
			[Date.UTC(2017, 6, 31), 33.330000],
			[Date.UTC(2017, 6, 31), 66.670000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 300.000000],
			[Date.UTC(2017, 7, 1), 311.110000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 366.670000],
			[Date.UTC(2017, 7, 1), 366.670000],
			[Date.UTC(2017, 7, 2), 133.330000],
			[Date.UTC(2017, 7, 2), 155.560000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 222.220000],
			[Date.UTC(2017, 7, 2), 288.890000],
			[Date.UTC(2017, 7, 2), 333.330000],
			[Date.UTC(2017, 7, 2), 333.330000],
			[Date.UTC(2017, 7, 2), 400.000000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 266.670000],
			[Date.UTC(2017, 7, 3), 277.780000],
			[Date.UTC(2017, 7, 3), 288.890000],
			[Date.UTC(2017, 7, 3), 300.000000],
			[Date.UTC(2017, 7, 3), 311.110000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 333.330000],
			[Date.UTC(2017, 7, 3), 355.560000],
			[Date.UTC(2017, 7, 4), 133.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 255.560000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 300.000000],
			[Date.UTC(2017, 7, 4), 133.330000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 133.330000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 7), 111.110000],
			[Date.UTC(2017, 7, 7), 133.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
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
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 55.560000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 14), 66.670000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 111.110000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 5, 12), 355.560000],
			[Date.UTC(2017, 5, 13), 155.560000],
			[Date.UTC(2017, 5, 14), 255.560000],
			[Date.UTC(2017, 5, 14), 400.000000],
			[Date.UTC(2017, 5, 14), 422.220000],
			[Date.UTC(2017, 5, 14), 433.330000],
			[Date.UTC(2017, 5, 14), 155.560000],
			[Date.UTC(2017, 5, 14), 166.670000],
			[Date.UTC(2017, 5, 14), 55.560000],
			[Date.UTC(2017, 5, 16), 155.560000],
			[Date.UTC(2017, 5, 16), 55.560000],
			[Date.UTC(2017, 5, 16), 111.110000],
			[Date.UTC(2017, 5, 16), 88.890000],
			[Date.UTC(2017, 5, 17), 100.000000],
			[Date.UTC(2017, 5, 17), 100.000000],
			[Date.UTC(2017, 5, 18), 166.670000],
			[Date.UTC(2017, 5, 18), 88.890000],
			[Date.UTC(2017, 5, 19), 166.670000],
			[Date.UTC(2017, 5, 19), 288.890000],
			[Date.UTC(2017, 5, 19), 55.560000],
			[Date.UTC(2017, 5, 19), 55.560000],
			[Date.UTC(2017, 5, 19), 66.670000],
			[Date.UTC(2017, 5, 21), 155.560000],
			[Date.UTC(2017, 5, 21), 166.670000],
			[Date.UTC(2017, 5, 21), 222.220000],
			[Date.UTC(2017, 5, 21), 66.670000],
			[Date.UTC(2017, 5, 21), 88.890000],
			[Date.UTC(2017, 5, 22), 166.670000],
			[Date.UTC(2017, 5, 22), 300.000000],
			[Date.UTC(2017, 5, 22), 33.330000],
			[Date.UTC(2017, 5, 22), 44.440000],
			[Date.UTC(2017, 5, 22), 55.560000],
			[Date.UTC(2017, 5, 22), 66.670000],
			[Date.UTC(2017, 5, 22), 88.890000],
			[Date.UTC(2017, 5, 24), 166.670000],
			[Date.UTC(2017, 5, 24), 44.440000],
			[Date.UTC(2017, 5, 24), 44.440000],
			[Date.UTC(2017, 5, 24), 66.670000],
			[Date.UTC(2017, 5, 24), 77.780000],
			[Date.UTC(2017, 5, 24), 100.000000],
			[Date.UTC(2017, 5, 24), 122.220000],
			[Date.UTC(2017, 5, 24), 77.780000],
			[Date.UTC(2017, 5, 24), 77.780000],
			[Date.UTC(2017, 5, 24), 88.890000],
			[Date.UTC(2017, 5, 25), 100.000000],
			[Date.UTC(2017, 5, 25), 100.000000],
			[Date.UTC(2017, 5, 25), 177.780000],
			[Date.UTC(2017, 5, 25), 188.890000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 44.440000],
			[Date.UTC(2017, 5, 25), 55.560000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 26), 122.220000],
			[Date.UTC(2017, 5, 26), 166.670000],
			[Date.UTC(2017, 5, 26), 266.670000],
			[Date.UTC(2017, 5, 26), 55.560000],
			[Date.UTC(2017, 5, 26), 55.560000],
			[Date.UTC(2017, 5, 26), 66.670000],
			[Date.UTC(2017, 5, 26), 77.780000],
			[Date.UTC(2017, 5, 26), 77.780000],
			[Date.UTC(2017, 5, 26), 88.890000],
			[Date.UTC(2017, 5, 28), 188.890000],
			[Date.UTC(2017, 5, 28), 55.560000],
			[Date.UTC(2017, 5, 28), 66.670000],
			[Date.UTC(2017, 5, 28), 77.780000],
			[Date.UTC(2017, 5, 28), 100.000000],
			[Date.UTC(2017, 5, 28), 55.560000],
			[Date.UTC(2017, 5, 28), 55.560000],
			[Date.UTC(2017, 5, 28), 66.670000],
			[Date.UTC(2017, 5, 29), 100.000000],
			[Date.UTC(2017, 5, 29), 100.000000],
			[Date.UTC(2017, 5, 29), 66.670000],
			[Date.UTC(2017, 5, 30), 100.000000],
			[Date.UTC(2017, 5, 30), 66.670000],
			[Date.UTC(2017, 6, 1), 77.780000],
			[Date.UTC(2017, 6, 1), 77.780000],
			[Date.UTC(2017, 6, 2), 77.780000],
			[Date.UTC(2017, 6, 4), 177.780000],
			[Date.UTC(2017, 6, 4), 55.560000],
			[Date.UTC(2017, 6, 4), 88.890000],
			[Date.UTC(2017, 6, 4), 88.890000],
			[Date.UTC(2017, 6, 5), 144.440000],
			[Date.UTC(2017, 6, 5), 188.890000],
			[Date.UTC(2017, 6, 5), 233.330000],
			[Date.UTC(2017, 6, 5), 44.440000],
			[Date.UTC(2017, 6, 5), 55.560000],
			[Date.UTC(2017, 6, 5), 66.670000],
			[Date.UTC(2017, 6, 5), 66.670000],
			[Date.UTC(2017, 6, 5), 66.670000],
			[Date.UTC(2017, 6, 5), 77.780000],
			[Date.UTC(2017, 6, 5), 55.560000],
			[Date.UTC(2017, 6, 5), 77.780000],
			[Date.UTC(2017, 6, 6), 100.000000],
			[Date.UTC(2017, 6, 6), 144.440000],
			[Date.UTC(2017, 6, 6), 44.440000],
			[Date.UTC(2017, 6, 6), 66.670000],
			[Date.UTC(2017, 6, 6), 77.780000],
			[Date.UTC(2017, 6, 7), 44.440000],
			[Date.UTC(2017, 6, 7), 66.670000],
			[Date.UTC(2017, 6, 8), 77.780000],
			[Date.UTC(2017, 6, 8), 166.670000],
			[Date.UTC(2017, 6, 8), 44.440000],
			[Date.UTC(2017, 6, 8), 88.890000],
			[Date.UTC(2017, 6, 8), 88.890000],
			[Date.UTC(2017, 6, 8), 88.890000],
			[Date.UTC(2017, 6, 10), 177.780000],
			[Date.UTC(2017, 6, 10), 44.440000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 88.890000],
			[Date.UTC(2017, 6, 10), 122.220000],
			[Date.UTC(2017, 6, 10), 122.220000],
			[Date.UTC(2017, 6, 10), 188.890000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 88.890000],
			[Date.UTC(2017, 6, 11), 188.890000],
			[Date.UTC(2017, 6, 11), 66.670000],
			[Date.UTC(2017, 6, 13), 100.000000],
			[Date.UTC(2017, 6, 13), 100.000000],
			[Date.UTC(2017, 6, 13), 522.220000],
			[Date.UTC(2017, 6, 13), 533.330000],
			[Date.UTC(2017, 6, 13), 77.780000],
			[Date.UTC(2017, 6, 13), 77.780000],
			[Date.UTC(2017, 6, 13), 77.780000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 133.330000],
			[Date.UTC(2017, 6, 14), 144.440000],
			[Date.UTC(2017, 6, 14), 166.670000],
			[Date.UTC(2017, 6, 14), 188.890000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 14), 77.780000],
			[Date.UTC(2017, 6, 15), 100.000000],
			[Date.UTC(2017, 6, 15), 155.560000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 122.220000],
			[Date.UTC(2017, 6, 17), 122.220000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 44.440000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 77.780000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 88.890000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 255.560000],
			[Date.UTC(2017, 6, 19), 44.440000],
			[Date.UTC(2017, 6, 21), 166.670000],
			[Date.UTC(2017, 6, 21), 333.330000],
			[Date.UTC(2017, 6, 21), 77.780000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 23), 11.110000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 26), 166.670000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 27), 155.560000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 27), 177.780000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 188.890000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 88.890000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 30), 33.330000],
			[Date.UTC(2017, 6, 30), 66.670000],
			[Date.UTC(2017, 6, 31), 11.110000],
			[Date.UTC(2017, 6, 31), 55.560000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 1), 88.890000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 188.890000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 422.220000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 3), 155.560000],
			[Date.UTC(2017, 7, 3), 166.670000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 3), 77.780000],
			[Date.UTC(2017, 7, 3), 88.890000],
			[Date.UTC(2017, 7, 3), 88.890000],
			[Date.UTC(2017, 7, 4), 122.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 188.890000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 5), 166.670000],
			[Date.UTC(2017, 7, 5), 355.560000],
			[Date.UTC(2017, 7, 5), 44.440000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 7), 111.110000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 88.890000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 9), 133.330000],
			[Date.UTC(2017, 7, 9), 333.330000],
			[Date.UTC(2017, 7, 9), 66.670000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 55.560000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 100.000000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 66.670000],
		]    }]
}