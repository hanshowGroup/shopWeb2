Mock.mock('getGoodsList', {
    'goods|1-50':[{
    'id'	   : '11',
    'shop': 'No.001',
    'name': '11',
    'category'	   : '11',
    'price|0.1-100':100 ,
    'originPrice|0.1-100':100 ,
    'origin':'@city' ,
    'stock|10-1000':1000 ,
    'binding|0-10':10 ,
    'temp': 'temp_normal',
    'status|0-4': 0,
    'updateTime':'2015/11/1 08:00:00' 
    }]
});
Mock.mock('getTest', {
    'records|1-50':[{
    'Name'	   : '11',
    'country': 'No.001'
    }]
});