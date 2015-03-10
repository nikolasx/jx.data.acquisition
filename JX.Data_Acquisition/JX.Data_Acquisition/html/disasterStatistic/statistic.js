

(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/disasterStatistic/statistic.html", {

        ready: function () {


            disasterStatistic.initialize();
        },

        unload: function () { }
    });

    WinJS.Namespace.define("disasterStatistic", {


        //初始化方法
        initialize: function () {

            this.attachEvents();
            this.getData();
            $(".statisheadtitle").eq(0).trigger("click");
        },


        //事件
        attachEvents: function () {

            //返回事件
            $("#statisticWrapper").on("click", ".statisticReturnIcon,.statisticTitle", function () {
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });

            //滚动事件
            $(".statisheadtitle").click(function () {
                $(".statisheadtitle").removeClass("statisheadtitleSelected");
                $(this).addClass("statisheadtitleSelected");
                var index = $(".statisheadtitle").index(this);
                $(".statisticContent").css("left", -$(window).width() * index);
            });
        },

        //获取当前数据
        getData: function () {
            var that = this;
            disasterDb.getAllData("investgation", function (disasters) {
                var types = ["斜坡", "崩塌", "滑坡", "泥石流", "地裂缝", "地面塌陷", "地面沉降"];
                var result = [0, 0, 0, 0, 0, 0, 0];
                disasters.forEach(function (item) {
                    var typeStr = AppUtil.getTypeFromEnumToStr(item.灾害类型);
                    var index = AppUtil.getIndexInArray(typeStr, types);
                    result[index]++;
                });
                that.addStatisticColumn(result.slice(0, 7));
                that.addStatisticBar(result.slice(0, 7));
                that.addStatisticMoon(result.slice(0, 7));
            });
        },

        //添加柱状图的统计图
        addStatisticColumn: function (series) {

            var that = this;
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'statisticColumnContent',
                    type: 'column'
                },
                title: {
                    text: '全县灾害点数据统计'
                },
                subtitle: {
                    //text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: [
                        '斜坡',
                        '崩塌',
                        '滑坡',
                        '泥石流',
                        '地裂缝',
                        '地面塌陷',
                        '地面沉降'
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                legend: {
                    //layout: 'vertical',
                    //backgroundColor: '#FFFFFF',
                    //align: 'left',
                    //verticalAlign: 'top',
                    //x: 100,
                    //y: 70,
                    //floating: true,
                    //shadow: true
                },
                tooltip: {
                    formatter: function () {
                        return '' +
                            this.x + ': ' + this.y + ' 个';
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: '灾害类型',
                    data: series

                }]
            });
        },

        //添加饼图
        addStatisticMoon: function (series) {
            var that = this;
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'statisticMoonContent',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '全县灾害点百分比统计'
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            formatter: function () {
                                return '<b>' + this.point.name + '</b>: ' + this.percentage.toFixed(2) + ' %';
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '灾害类型',
                    data: [

                        ['斜坡', series[0]],
                        ['崩塌', series[1]],
                        {
                            name: '滑坡',
                            y: series[2],
                            sliced: true,
                            selected: true
                        },
                        ['泥石流', series[3]],
                        ['地裂缝', series[4]],
                        ['地面塌陷', series[5]],
                        ['地面沉降', series[6]]
                    ]
                }]
            });
        },

        //添加条形图
        addStatisticBar: function (series) {

            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'statisticBarContent',
                    type: 'bar'
                },
                title: {
                    text: '全县灾害点数据横向对比'
                },
                subtitle: {
                    //text: 'Source: Wikipedia.org'
                },
                xAxis: {
                    categories: ["斜坡", "崩塌", "滑坡", "泥石流", "地裂缝", "地面塌陷", "地面沉降"],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '灾害点 (个)',
                        align: 'high'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '' +
                            this.series.name + ': ' + this.y + ' 个';
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -100,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: '灾害点',
                    data: series
                }]
            });
        }
    });

})();