'use strict';

angular.module('gameAnalyticsApp')
    .controller('ShoplistCtrl', function ($scope) {
        $(function() {
            $.getJSON('/data/dau.json', function(data) {
                // Create the chart
                console.log(data);
                $('#graph-dau').highcharts('StockChart', {
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

            $.getJSON('/data/newuser.json', function(data) {
                // Create the chart
                console.log(data);
                $('#graph-newuser').highcharts('StockChart', {
                    rangeSelector : {
                        selected : 1,
                        inputEnabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    title : {
                        text : 'New User'
                    },
                    series : [{
                        name : 'New User',
                        data : data,
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
                });
            });

        });

    });
