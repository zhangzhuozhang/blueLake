var colors = ['#5793f3', '#d14a61', '#675bba'];
var myChart = echarts.init(document.getElementById('sortVisits'));
var myChart1 = echarts.init(document.getElementById('mounthVisits'));
var myChart2 = echarts.init(document.getElementById('dash'));
var myChart3 = echarts.init(document.getElementById('dot'));
var myChart4 = echarts.init(document.getElementById('day'));
var myChart5 = echarts.init(document.getElementById('bar'));

option = {
    //
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['当月单位访问', '上月同期值']
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },


    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#8590A8',
                 //这里是为了突出显示加上的
            }
        },
        data: ['长沙', '株洲', '永州', '邵阳', '长沙', '株洲', '永州']
    },
    yAxis: {
        type: 'value',
        splitLine: false,
        axisLabel: {
            formatter: '{value} '
        },
        axisLine: {
            lineStyle: {
                color: '#8590A8',

                //这里是为了突出显示加上的
            }
        }
    },
    series: [
        {
            name: '当月单位访问',
            type: 'line',
            smooth: true,
            symbol:'none',
            itemStyle: {
                normal: {
                    color: '#1FF4D8', // 折线条的颜色
                    borderColor: '#0bb6db', // 拐点边框颜色
                }
            },
                data: [100, 100, 120, 200, 250, 300, 40]

        },
        {
            name: '上月同期值',
            smooth: true,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#065EDF', // 折线条的颜色
                    borderColor: '#0bb6db', // 拐点边框颜色
                }
            },
            data: [300, 200, 204, 205, 320, 250, 300]
        }
    ]
};
option1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        icon:"circle",
        left: 270,
        y:30,
        data: ['营销类应用', '电网类应用', '经营类应用', '对外价值变现类', '抗疫类应用','其他'],
        textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 7
        }
    },

    series: [
        {
            name: '访问',
            type: 'pie',
            radius: ['20%', '40%'],
            center: ['40%', '40%'],
            avoidLabelOverlap: false,
            "label": {
                "normal": {
                    "show": true,
                    "textStyle": {
                        color:"white",
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '10',
                    fontWeight: 'bold'
                },

            },
            labelLine: {
                show: false
            },
            data: [
                {value: 25, name: '营销类应用'},
                {value: 19, name: '电网类应用'},
                {value: 13, name: '经营类应用'},
                {value: 7, name: '对外价值变现类'},
                {value: 31, name: '抗疫类应用'},
                {value: 5, name: '其他'}
            ]
        }
    ]
};
option2 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 5,
        lineStyle: {
            color: 'green',
            width: 2,
            type: 'dashed'
        },
        itemStyle: {
            borderWidth: 2,
            borderColor: 'yellow',
            color: 'blue'
        }
    }]
};
option3 = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 5,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter'
    }]
};
option4 = {
    xAxis: {},
    yAxis: {},
    series: [{
        data: [[20, 120], [50, 200], [40, 50]],
        type: 'line'
    }]
};
option5 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        // formatter(params) {
        //     let list = []
        //     let listItem = '';
        //     let name = '';
        //     params.forEach((item, i) => {
        //         name = item.name;
        //         list.push('<span>' +
        //             item.seriesName +
        //             '转资额</span>: ' +
        //             item.value +' 万元<br/>'
        //         );
        //     });
        //     listItem = list.join('');
        //     return '<div class="showBox">' + listItem +'</div>'
        // }
    },
    color: ['#2376FF','#11F5D9'],
    legend: {
        // y: 'top',
        data: ['本周累计访问量', '上周同期访问量']
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '5',
        containLabel: true
    },
    xAxis: [{
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        axisTick: {
            show: false //隐藏刻度线
        },
        axisLine:{      //隐藏y轴
            show:false
        },
        axisLabel:{     //横坐标全部显示 不隔开显示
            interval: 0
        }
    }],
    yAxis: [{
        name: '个',
        nameTextStyle: {
            padding: [0, 0, 0, 30]    // 四个数字分别为上右下左与原位置距离
        },
        splitArea: {  //隐藏背景网格区域
            show: false
        },
        splitLine: {  //隐藏背景网格线
            show: false
        },
        axisTick: {
            show: false //隐藏刻度线
        },
        axisLine:{      //隐藏y轴
            show:false
        }
    }],
    series: [{
        name: '累计访问量',
        type: 'bar',
        itemStyle:{
            //柱形图圆角，鼠标移上去效果
            emphasis:{
                barBorderRadius:[10,10,0,0]
            },

            normal:{
                //柱形图圆角，初始化效果
                barBorderRadius:[10,10,0,0]
            }
        },
        data: [{
            name: "2020",
            value: 200
            },
            {
                name: "2021",
                value: 90
            },{
                name: "2021",
                value: 100
            },{
                name: "2021",
                value: 90
            },{
                name: "2021",
                value: 100
            },{
                name: "2021",
                value: 200
            },
            {
                name: "2022",
                value: 400
            }
        ]
    },
        {
            name: '同期访问量',
            type: 'bar',
            itemStyle:{
                //柱形图圆角，鼠标移上去效果
                emphasis:{
                    barBorderRadius:[10,10,0,0]
                },

                normal:{
                    //柱形图圆角，初始化效果
                    barBorderRadius:[10,10,0,0]
                }
            },
            data: [{
                name: "2020",
                value: 66
                },
                {
                    name: "2021",
                    value: 88
                },{
                    name: "2021",
                    value: 48
                },{
                    name: "2021",
                    value: 68
                },{
                    name: "2021",
                    value: 78
                },{
                    name: "2021",
                    value: 88
                },
                {
                    name: "2022",
                    value: 99
                }

            ]
        }
    ]
};





myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
myChart5.setOption(option5);
myChart.setOption(option);
