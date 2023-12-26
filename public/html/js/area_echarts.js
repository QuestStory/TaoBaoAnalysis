
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
var data = [
     {name: '云南省', value: 978},
     {name: '上海', value: 3003},
     {name: '内蒙古自治区', value: 215},
     {name: '北京 ', value:2053},
     {name: '吉林省 ', value:401 },
     {name: '四川省', value:2019 },
     {name: '天津', value:1153 },
     {name: '宁夏回族自治区', value:42 },
     {name: '安徽省 ', value:609 },
     {name: '山东省', value: 1084},
     {name: '山西省', value: 465},
     {name: '广东省', value: 2463},
     {name: '广西壮族自治区', value: 436},
     {name: '新疆维吾尔自治区', value: 58},
     {name: '江苏省', value: 2126},
     {name: '江西省 ', value: 411},
     {name: '河北省 ', value: 1083},
     {name: '河南省', value: 966},
     {name: '浙江省', value: 2061},
     {name: '海南省 ', value: 178},
     {name: '湖北省', value: 725},
     {name: '湖南省', value: 1099},
     {name: '甘肃省', value: 1627},
     {name: '福建省', value: 449},
     {name: '西藏自治区', value: 300},
     {name: '贵州省', value: 345},
     {name: '辽宁省 ', value: 1187},
     {name: '重庆', value: 1036},
     {name: '陕西省', value: 536},
     {name: '青海省', value: 19},
     {name: '黑龙江省', value: 379},
];
var geoCoordMap = {
	
	'云南省':[102.73,25.04],
    '上海':[121.48,31.22],
    '内蒙古自治区':[111.65,40.82],
    '北京':[116.46,39.92],
    '吉林省':[125.35,43.88],
    '四川省':[104.06,30.67],
    '天津':[117.2,39.13],
    '宁夏回族自治区':[106.27,38.47],
    '安徽省':[117.27,31.86],
    '山东省':[117,36.65],
    '山西省':[112.53,37.87],
    '广东省':[113.23,23.16],
    '广西壮族自治区':[108.33,22.84],
    '新疆维吾尔自治区':[87.68,43.77],
    '江苏省':[118.78,32.04],
    '江西省':[115.89,28.68],
    '河北省':[114.48,38.03],
    '河南省':[113.65,34.76],
    '浙江省':[120.19,30.26],
    '海南省':[110.35,20.02],
    '湖北省':[114.31,30.52],
    '湖南省':[113,28.21],
    '甘肃省':[103.73,36.03],
    '福建省':[119.3,26.08],
    '西藏自治区':[91.11,29.97],
    '贵州省':[106.71,26.57],
    '辽宁省':[123.38,41.8],
    '重庆':[106.54,29.59],
    '陕西省':[108.95,34.27],
    '青海省':[101.74,36.56],
    '黑龙江省':[126.63,45.75],
    
    
    
    
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
    title: {
        text: '各地区的订单总量',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
		formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value+'万';
              }else{
              	return params.name + ' : ' + params.value[2]+'万';
              }
            }
    },
  
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,//禁止其放大缩小
        itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        }
    },
    series : [
        {
            name: '消费金额',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 90;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }
		
		/**
		,
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffd800',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.3)'
                }
            },
            zlevel: 1
        }
		**/
    ]
};
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

