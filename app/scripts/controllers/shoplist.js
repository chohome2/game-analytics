'use strict';

angular.module('gameAnalyticsApp')
    .controller('ShoplistCtrl', function ($scope) {
        $(function() {
            $.getJSON('/data/dau.json', function(data) {
                // Create the chart
                console.log(data);

                $('#graph1').highcharts('StockChart', {
                    rangeSelector : {
                        selected : 1,
                        inputEnabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    title : {
                        text : 'DAU'
                    },
                    series : [{
                        name : 'DAU',
                        data : data,
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
                });
            });

        });

    });
