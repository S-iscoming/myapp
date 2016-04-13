var obj = {
    "data":/*{
        "biz":"car",
        "couponName":"车车代金券",  // 常规代金券的结构
        //"instruction":"使用说明使用说明使用说明使用说明",//以该形式返回的使用说明，直接平铺展示
        "instructionList":[
            "1.同一订单仅能使用一张车车代金券",
            "2.使用服务类型：送机、接机、时租、火车送站、火车接站、送景区、接景区 、送景区、公社、观澜湖大道景区、雷琼世界地质公园、大雁塔"
        ],//以该形式返回的使用说明，根据每段说明的长度选择是否折叠
        "schema":"aaa",//跳转链接
        "shareConfig": {//该字段为空，表示不需要展示分享按钮；否则，展示分享按钮
            "desc":"分享的文案",
            "imgUrl":"分享的图片地址",
            "link":"分享的链接"
        },
        "startDate":"2014-2-5",
        "endDate":"2015-4-8",
        "ruleDetail":"优惠规则",
        "typeCode": 1,
        "value":"8.5折",
        "couponId":"111111111"
    },*/
    //酒店
    {
        "biz": "hotel",
        "couponId": "111111111",
        "instruction": "酒店的使用说明是html数据",//以该形式返回的使用说明，直接平铺展示

        "subCouponList": [
            {
                "value": "8.5折",
                "validDate": "有效期 2016.02.18至2016.03.18",
                "ruleDetail": "h使用服务类型：送机、接机、时租、火车送站、火车接站、送景区、接景区 、送景区"
            },
            {
                "value": "20元",
                "validDate": "有效期 2016.02.18至2016.03.18",
                "ruleDetail": "h使用服务类型：送机、接机、时租、火车送站、火车接站、送景区、接景区 、送景区"
            },
            {
                "value": "20元",
                "validDate": "有效期 2016.02.18至2016.03.18",
                "ruleDetail": "h使用服务类型：送机、接机、时租、火车送站、火车接站、送景区、接景区 、送景区"
            }

        ],
        "schema": "aaa",//跳转链接
        "shareConfig": {//该字段为空，表示不需要展示分享按钮；否则，展示分享按钮
            "desc": "分享的文案",
            "imgUrl": "分享的图片地址",
            "link": "分享的链接"
        },
        "couponName": "酒店顺序代金券",  // 常规代金券的结构
        "typeCode": 8
    },
    "bstatus":{
        "code": 0,
        "msg":"成功"
    }
}
module.exports = obj;