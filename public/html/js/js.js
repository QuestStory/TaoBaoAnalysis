
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
				data: ['平均值'],
				left: 'right',
				
				textStyle:{
      				color:'rgb(255,255,255,0.6)',
      			
     				}
			},
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
             }
            },
   
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['总金额', '买家实际支付金额', '退款金额'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
		name:'平均值',
        type: 'bar',
        data: [106.95,45.0,71.50],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
var option;

		option = {
		color: [ '#0f78d6','#0f63d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
		  title: {
		   
		    left: 'center'
		  },
		  tooltip: {
		    trigger: 'item'
		  },
		  legend: {
		    orient: ['<100', '100-500', '500-1000', '1000-5000', '>5000'],
		    left: 'left',
		    textStyle:{
      				color:'rgb(255,255,255,0.6)',
      			
     				}
		    
		  },
		  series: [
		    {
		     
		      type: 'pie',
		      radius: '80%',
		      data: [
		       	{value:10576, name:'100-500  '},
                {value:134, name:'500-1000  '},
                {value:47, name:'1000-5000 '},
                {value: 3, name:'>5000  '},
                {value: 17250, name:'<100  '},
               
		      ],
		      label: {
				   normal: {
				   show: true,
				   formatter: '{b}{d}%',
				   //echarts饼图内部显示百分比设置
       
 
			       color: "#ffffff", //颜色
			       fontSize: 12 //字体大小

				  }
				},

		      emphasis: {
		        itemStyle: {
		          shadowBlur: 10,
		          shadowOffsetX: 0,
		          shadowColor: 'rgba(0, 0, 0, 0.05)'
		        }
		      }
		    }
		  ]
		};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

       option = {
       	 tooltip: {},
      visualMap: {     //有下面两种写法
                    show: false,
                    min: 1000,
                    max: 270000,
                    splitNumber: 5,
                    inRange: {     //这种写法才是目前主流的写法
                        color: ['#9ACCFF', '#0091FE', '#0080FF', '#1751B2', '#013998'],
                    },
                },
  series: [
    {
      type: 'treemap',
     
      data: [
        {
          name: '上海',
          value: 264039.78,
          
        },
        {
          name: '云南省',
          value: 53633.84,
         
        },
        {
          name: '内蒙古自治区',
          value: 28863.30,
         
        },
        {
          name: '北京',
          value: 166448.48,
         
        },
        {
          name: '吉林省',
          value:  26723.66,
         
        },
        {
          name: '四川省',
          value:127648.15,
         
        },
        {
          name: '天津',
          value:89990.06,
         
        },
        {
          name: '宁夏回族自治区',
          value: 3716.42,
         
        },
        {
          name: '安徽省',
          value:37710.06,
         
        },
        {
          name: '山东省',
          value:103917.26,
         
        },
        {
          name: '山西省',
          value:32515.40,
         
        },
        {
          name: '广东省',
          value:147822.90,
         
        },
        {
          name: '广西壮族自治区',
          value:23986.69,
         
        },
        {
          name: '新疆维吾尔自治区',
          value:2768.00,
         
        },
        {
          name: '江苏省',
          value:159359.18,
         
        },
        {
          name: '江西省',
          value:23145.05,
         
        },
        {
          name: '河北省',
          value:64374.92,
         
        },
        {
          name: '河南省',
          value:56354.03,
         
        },
        {
          name: '浙江省',
          value:141664.80,
         
        },
        {
          name: '海南省',
          value:11462.58,
         
        },
        {
          name: '湖北省',
          value:1827.80,
         
        },
        {
          name: '湖南省',
          value:70268.68,
         
        },
        {
          name: '甘肃省',
          value:9095.96,
         
        },
        {
          name: '福建省',
          value:23563.27,
         
        },
        {
          name: '西藏自治区',
          value:0.00,
         
        },
        {
          name: '贵州省',
          value:21879.56,
         
        },
        {
          name: '辽宁省 ',
          value:74692.05,
         
        },
        {
          name: '重庆 ',
          value:71514.65,
         
        },
        {
          name: '陕西省',
          value:40484.23,
         
        },
        {
          name: '青海省',
          value:1724.20,
         
        },
        {
          name: '黑龙江省',
          value:21292.19,
         
        },
        

      ]
    }
  ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        },
        formatter: '{c}万'
    },
		    legend: {
    top:'0%',
        data:['安卓','IOS'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25','26','27','28','29']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '安卓',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [123, 344, 123, 554,653, 234, 123, 626, 242,124, 432, 134,343, 134, 763, 324, 323, 214, 123, 126, 432, 874, 322, 214,456,233,345,567,457]

    }, 
{
        name: 'IOS',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [322, 1003, 125, 566, 351, 565, 983, 435, 566, 564, 986, 324, 548, 673, 235, 346, 123, 545, 763, 237, 342, 565, 341, 124,234,456,678,234,890]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));



 option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    legend: {
				data: ["买家实际支付金额",'总金额'],
				left: 'right',
				
				textStyle:{
      				color:'rgb(255,255,255,0.6)',
      			
     				}
			},
    xAxis: [{
        type: 'category',
    
      	data: [ '2020-01', '2020-02', '2020-03', '2020-04'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		
    
		{
      name: '买家实际支付金额',
      type: 'line',
      data:[ 70493.74, 24095.00,32365.74,126850.67],
      itemStyle: {
            normal: {
                color:'#06c8ab',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
   },
		{
       name: '总金额',
        type: 'bar',
        data: [ 149077.89, 44005.00,66804.73,201919.99],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#0091FE',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '年龄分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['10-19岁','20-29岁','30-39岁','40-49岁','50岁以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:168, name:'10-19岁'},
                {value:8564, name:'20-29岁'},
                {value:3768, name:'30-39岁'},
                {value:5423, name:'40-49岁'},
                {value:564, name:'50岁以上'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '职业分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['电子商务','教育','IT/互联网','金融','学生','其他'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'职业分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:564, name:'电子商务'},
                {value:2453, name:'教育'},
                {value:1746, name:'IT/互联网'},
                {value:345, name:'金融'},
                {value:6255, name:'学生'},
                {value:5423, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '兴趣分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['汽车','旅游','财经','教育','软件','跳舞','唱歌','其他'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'兴趣分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:298, name:'汽车'},
                {value:3678, name:'旅游'},
                {value:376, name:'财经'},
                {value:324, name:'教育'},
                {value:234, name:'软件'},
                {value:645, name:'跳舞'},
                {value:354, name:'唱歌'},
                {value:8543, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









