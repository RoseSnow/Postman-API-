var api = {
	"info": {
		"_postman_id": "f51db094-1571-457d-a6f8-70099f672805",
		"name": "武博会mp-2.8",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "我的",
			"item": [
				{
					"name": "金币充值",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"platform\":\"wechatmp\",\n  \"amount\":100\n}"
						},
						"url": {
							"raw": "{{url}}/user/order",
							"host": [
								"{{url}}"
							],
							"path": [
								"user",
								"order"
							]
						}
					},
					"response": [
						{
							"name": "支付宝充值",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"platform\":\"wechat | ali\",\n\t\"amount\":100\n}"
								},
								"url": {
									"raw": "/user/order",
									"path": [
										"user",
										"order"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\":\"下单成功\",\n    \"data\": {\n        \"body\": \"091k2304k10923k4091k23094k01923k4091324\",\n        \"id\": \"12j903j120j30129j3\"\n    }\n}"
						},
						{
							"name": "微信充值",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"platform\":\"wechat | ali\",\n\t\"amount\":100\n}"
								},
								"url": {
									"raw": "/user/recharge",
									"path": [
										"user",
										"recharge"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"data\": {\n        \"appid\": \"wxd475c62247c9349f\",\n        \"id\": \"27PHviSqjYaGD8dzLxJ6M0aXhuahnyoF\",\n        \"noncestr\": \"5oH1ZON\",\n        \"package\": \"Sign=WXPay\",\n        \"partnerid\": \"1509794011\",\n        \"prepayid\": \"wx041741437911222c33d672a14155500102\",\n        \"sign\": \"372FB093133AF9F7265C9BABC60FA04B\",\n        \"timestamp\": 1533375703,\n        \"number\":\"1238419234912j3491j2\"\n    },\n    \"msg\": \"OK\",\n    \"status\": 0\n}"
						}
					]
				},
				{
					"name": "充值/交易/提现记录",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"url": {
							"raw": "{{mock}}/user/order?_page=1&_count=20&scene=ALL",
							"host": [
								"{{mock}}"
							],
							"path": [
								"user",
								"order"
							],
							"query": [
								{
									"key": "_page",
									"value": "1"
								},
								{
									"key": "_count",
									"value": "20"
								},
								{
									"key": "scene",
									"value": "ALL",
									"description": "WITHDRAW-提现    RECHARGE-\b充值   ALL-全部记录"
								}
							]
						},
						"description": "1-购买商品 2-金币充值 3-购买直播  4-提现  5-分享  6-邀请新用户 7-竞猜 8-竞猜成功"
					},
					"response": [
						{
							"name": "充值记录",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:wx-mini:user"
									}
								],
								"url": {
									"raw": "/user/order?_page=1&_count=20",
									"path": [
										"user",
										"order"
									],
									"query": [
										{
											"key": "_page",
											"value": "1"
										},
										{
											"key": "_count",
											"value": "20"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": [\n        {\n            \"id\": \"123j012j3\",\n            \"price\": 100,\n            \"amount\": 1000,\n            \"tag\":\"金币充值\",\n            \"type\":0,\n            \"time\": \"2018-09-19 19:00:00\",\n            \"platform\": \"wechat\",\n            \"balance\": 1200,\n            \"state\": \"\",\n            \"desc\":\"\",\n            \"handlingFee\":100,\n            \"transState\":\"IN_CERTIFICATION-提现中,CERTIFICATION_PASS-已提现,CERTIFICATION_FAIL-已拒绝\"\n        },\n        {\n            \"id\": \"123j0232j3\",\n            \"price\": 100,\n            \"amount\": 99999,\n            \"tag\":\"iphone7 256gb\",\n            \"type\":1,\n            \"time\": \"2018-09-19 19:00:00\",\n            \"platform\": \"ali\",\n            \"balance\": 1200,\n            \"state\": \"\",\n            \"desc\":\"\",\n            \"handlingFee\":100,\n            \"transState\":\"IN_CERTIFICATION-提现中,CERTIFICATION_PASS-已提现,CERTIFICATION_FAIL-已拒绝\"\n        },\n        {\n            \"id\": \"123j04563\",\n            \"price\": 100,\n            \"amount\": 1000,\n            \"time\": \"2018-09-19 19:00:00\",\n            \"platform\": \"wechat\",\n            \"balance\": 1200,\n            \"state\": \"\",\n            \"desc\":\"\",\n            \"transState\":\"IN_CERTIFICATION-提现中,CERTIFICATION_PASS-已提现,CERTIFICATION_FAIL-已拒绝\"\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "提现",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n\t\"coins\":11\n}"
						},
						"url": {
							"raw": "{{mock}}/wallet/trans",
							"host": [
								"{{mock}}"
							],
							"path": [
								"wallet",
								"trans"
							]
						}
					},
					"response": [
						{
							"name": "提现（/wallet/trans）",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"price\":0.12,\n\t\"aliAccount\":\"6123@qq.com\"\n}"
								},
								"url": {
									"raw": "{{mock}}/wallet/trans",
									"host": [
										"{{mock}}"
									],
									"path": [
										"wallet",
										"trans"
									]
								}
							},
							"_postman_previewlanguage": "json",
							"header": null,
							"cookie": [],
							"body": "{\n\t\"status\":0,\n\t\"data\":{\n\t\t\"aliAccount\":\"632151466@qq.com\",\n\t\t\"balance\":12.01\n\t}\n}"
						}
					]
				},
				{
					"name": "我的竞猜",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{dev}}/user/bet?status=0 | 1",
							"host": [
								"{{dev}}"
							],
							"path": [
								"user",
								"bet"
							],
							"query": [
								{
									"key": "status",
									"value": "0 | 1",
									"description": "待开奖 | 已开奖"
								}
							]
						}
					},
					"response": [
						{
							"name": "我的竞猜",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "/user/bet?state=0&_page=1&_count=20",
									"path": [
										"user",
										"bet"
									],
									"query": [
										{
											"key": "state",
											"value": "0"
										},
										{
											"key": "_page",
											"value": "1"
										},
										{
											"key": "_count",
											"value": "20"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": [\n        {\n            \"id\": \"123\",\n            \"name\": \"武林风\",\n            \"startTime\": \"2018-08-01 09:09:00\",\n            \"red\": \"小龙\",\n            \"guess\": \"red\",\n            \"blue\": \"小红\",\n            \"winner\": \"red\",\n            \"amount\": 100,\n            \"createTime\": \"2018-08-01 09:09:00\",\n            \"state\": 0\n        },\n        {\n            \"id\": \"124\",\n            \"name\": \"武林风\",\n            \"startTime\": \"2018-08-01 09:09:00\",\n            \"red\": \"小龙\",\n            \"guess\": \"red\",\n            \"blue\": \"小红\",\n            \"winner\": \"blue\",\n            \"amount\": 510,\n            \"createTime\": \"2018-08-01 09:09:00\",\n            \"state\": 1\n        },\n        {\n            \"id\": \"126\",\n            \"name\": \"武林风\",\n            \"startTime\": \"2018-08-01 09:09:00\",\n            \"red\": \"小龙\",\n            \"guess\": \"red\",\n            \"blue\": \"小红\",\n            \"winner\": \"red\",\n            \"amount\": 190,\n            \"createTime\": \"2018-08-01 09:09:00\",\n            \"state\": 1\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "获取客服微信",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"url": {
							"raw": "{{mock}}/customerService",
							"host": [
								"{{mock}}"
							],
							"path": [
								"customerService"
							]
						}
					},
					"response": [
						{
							"name": "获取客服",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{mock}}/customerService",
									"host": [
										"{{mock}}"
									],
									"path": [
										"customerService"
									]
								}
							},
							"_postman_previewlanguage": "json",
							"header": null,
							"cookie": [],
							"body": "{\n\t\"status\":0,\n\t\"data\":{\n\t\t\"wechat\":\"777777777\"\n\t}\n}"
						}
					]
				},
				{
					"name": "分享",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "{{mock}}/share",
							"host": [
								"{{mock}}"
							],
							"path": [
								"share"
							]
						}
					},
					"response": []
				},
				{
					"name": "修改用户信息",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:android:DEFAULT"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:android"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"avatar\": \"123j9j9fj192jfsdf1o3j4oi234oi123oij\",\n    \"nickname\": \"小明\",\n    \"gender\": \"women | man\"\n}"
						},
						"url": {
							"raw": "{{url}}/user",
							"host": [
								"{{url}}"
							],
							"path": [
								"user"
							]
						}
					},
					"response": [
						{
							"name": "修改用户信息",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"avatar\": \"123j9j9fj192jfsdf1o3j4oi234oi123oij\",\n    \"nickname\": \"小明\",\n    \"gender\": \"women | man | unkonw\"\n}"
								},
								"url": {
									"raw": "/user/info",
									"path": [
										"user",
										"info"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n  \"status\":0,\n  \"msg\":\"成功\",\n  \"data\":{\n    \"phonenum\":\"18911195538\",\n    \"nickname\":\"小明\",\n    \"avatarPath\":\"http://这里是默认头像的地址\",\n    \"session\":\"asdjifj1i23j4ijqdiuf\"\n  }\n}"
						}
					]
				},
				{
					"name": "获取用户信息",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{mock}}/user",
							"host": [
								"{{mock}}"
							],
							"path": [
								"user"
							]
						}
					},
					"response": [
						{
							"name": "获取用户信息",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "/user",
									"path": [
										"user"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": {\n        \"session\": \"DJIEJOIj1o2i3j\",\n        \"avatar\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n        \"phone\": \"18911195538\",\n        \"coins\": 1100,\n        \"userTicket\": 10,\n        \"coinPrice\": 10,\n        \"nickname\": \"小明\",\n        \"gender\": \"man\"\n    }\n}"
						}
					]
				}
			]
		},
		{
			"name": "直播",
			"item": [
				{
					"name": "获取直播列表",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"url": {
							"raw": "{{url}}/mob/live?_page=1&_count=20&state=0 | -1 | 1",
							"host": [
								"{{url}}"
							],
							"path": [
								"mob",
								"live"
							],
							"query": [
								{
									"key": "_page",
									"value": "1"
								},
								{
									"key": "_count",
									"value": "20"
								},
								{
									"key": "state",
									"value": "0 | -1 | 1",
									"description": "正在直播 | 直播预告 | 精彩回放"
								}
							]
						}
					},
					"response": [
						{
							"name": "直播列表",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									}
								],
								"url": {
									"raw": "{{mock}}/mob/live?_page=1&_count=20",
									"host": [
										"{{mock}}"
									],
									"path": [
										"mob",
										"live"
									],
									"query": [
										{
											"key": "_page",
											"value": "1"
										},
										{
											"key": "_count",
											"value": "20"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": [\n        {\n            \"id\": \"1237812318927382787382\",\n            \"reversed\": true,\n            \"name\": \"武林风\",\n            \"title\": \"哈哈哈哈哈哈哈哈哈\",\n            \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n            \"startTime\": 123648712367846\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "赛事详情",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							}
						],
						"url": {
							"raw": "{{mock}}/mob/live/1",
							"host": [
								"{{mock}}"
							],
							"path": [
								"mob",
								"live",
								"1"
							]
						}
					},
					"response": [
						{
							"name": "赛事详情",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "X-Client-Token",
										"value": ""
									},
									{
										"key": "session",
										"value": ""
									}
								],
								"url": {
									"raw": "{{mock}}/mob/live/1",
									"host": [
										"{{mock}}"
									],
									"path": [
										"mob",
										"live",
										"1"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"OK\",\n    \"msg\": \"OK\",\n    \"data\": {\n        \"id\": \"12312u3123\",\n        \"end\": false,\n        \"name\": \"武林1风\",\n        \"hasQuiz\": true,\n        \"needPay\": 1,\n        \"urls\": {\n            \"protocol\": \"m3u8\",\n            \"hd\": \"http://3891.liveplay.myqcloud.com/live/3891_user_4edd2f81_47e7.flv\",\n            \"sd\": \"http://3891.liveplay.myqcloud.com/live/3891_user_4edd2f81_47e7.flv\",\n            \"op\": \"http://3891.liveplay.myqcloud.com/live/3891_user_b28bd47c_03e9.m3u8\"\n        },\n        \"title\": \"武林风第二届12强第3场\",\n        \"cover\": \"https://img.pc841.com/2018/0815/20180815101229911.jpg\",\n        \"point\": \"看点\",\n        \"startTime\": 144444224,\n        \"fight\": [\n            {\n                \"id\": 123,\n                \"group\": 1,\n                \"winner\": \"red\",\n                \"red\": {\n                    \"id\": \"1\",\n                    \"nickname\": \"小明小明小明小明小明小明\",\n                    \"avatar\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                    \"birthday\": \"2017-08-08\",\n                    \"gender\": \"man\",\n                    \"kg\": 128.1,\n                    \"cm\": 128.1,\n                    \"odds\": 1.34,\n                    \"intro\": \"我是一个小蜜蜂\",\n                    \"country\": \"cn\",\n                    \"fintType\": \"\",\n                    \"rate\": \"\",\n                    \"ticket\": \"\"\n                },\n                \"blue\": {\n                    \"id\": \"2\",\n                    \"nickname\": \"小黄\",\n                    \"avatar\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                    \"birthday\": \"2017-08-08\",\n                    \"gender\": \"man\",\n                    \"kg\": 128.1,\n                    \"cm\": 128.1,\n                    \"odds\": 0.76,\n                    \"intro\": \"我是一个小蜜蜂\",\n                    \"country\": \"cn\",\n                    \"fintType\": \"\",\n                    \"rate\": \"\",\n                    \"ticket\": \"\"\n                }\n            },\n            {\n                \"id\": 123,\n                \"group\": 1,\n                \"winner\": \"red\",\n                \"red\": {\n                    \"id\": \"1\",\n                    \"nickname\": \"小明小明小明小明小明小明\",\n                    \"avatar\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                    \"birthday\": \"2017-08-08\",\n                    \"gender\": \"man\",\n                    \"kg\": 128.1,\n                    \"cm\": 128.1,\n                    \"odds\": 1.34,\n                    \"intro\": \"我是一个小蜜蜂\",\n                    \"country\": \"cn\",\n                    \"fintType\": \"\",\n                    \"rate\": \"\",\n                    \"ticket\": \"\"\n                },\n                \"blue\": {\n                    \"id\": \"2\",\n                    \"nickname\": \"小黄\",\n                    \"avatar\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                    \"birthday\": \"2017-08-08\",\n                    \"gender\": \"man\",\n                    \"kg\": 128.1,\n                    \"cm\": 128.1,\n                    \"odds\": 0.76,\n                    \"intro\": \"我是一个小蜜蜂\",\n                    \"country\": \"cn\",\n                    \"fintType\": \"\",\n                    \"rate\": \"\",\n                    \"ticket\": \"\"\n                }\n            }\n        ]\n    }\n}"
						}
					]
				},
				{
					"name": "互动消息记录列表",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"url": {
							"raw": "{{url}}/mob/live/1/chat",
							"host": [
								"{{url}}"
							],
							"path": [
								"mob",
								"live",
								"1",
								"chat"
							]
						}
					},
					"response": [
						{
							"name": "\b弹幕",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									}
								],
								"url": {
									"raw": "/mob/live/1/chats",
									"path": [
										"mob",
										"live",
										"1",
										"chats"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n\t\"status\":0,\n\t\"notice\":\"成功\",\n\t\"data\":[{\n\t\t\"nickname\":\"小明\",\n\t\t\"avatar\":\"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n\t\t\"time\":\"2018-09-09 09:12:00\",\n\t\t\"chat\":\"红方必胜红方必胜,红方必胜红方必胜红方必胜,红方必胜红方必胜红方必胜红方必胜红方必胜红方必胜红方必胜,红方必胜红方必胜红方必胜红方必胜红方,红方必胜红方必胜,红方必胜红方必胜红方！\"\n\t},{\n\t\t\"nickname\":\"小明\",\n\t\t\"avatar\":\"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n\t\t\"time\":\"2018-09-10 09:12:00\",\n\t\t\"chat\":\"红方必胜！！！！\"\n\t},{\n\t\t\"nickname\":\"小明\",\n\t\t\"avatar\":\"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n\t\t\"time\":\"2018-09-11 09:12:00\",\n\t\t\"chat\":\"红方必胜！！！！\"\n\t}]\n}"
						}
					]
				},
				{
					"name": "积分兑换直播",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"type": "text",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"type": "text",
								"value": "wubohui:wx-mini:user"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n\t\"competitionId\":\"WBHjioqwjeoiqwjeoqwjeoi\"\n}"
						},
						"url": {
							"raw": "{{mock}}/mob/order/competition",
							"host": [
								"{{mock}}"
							],
							"path": [
								"mob",
								"order",
								"competition"
							]
						}
					},
					"response": [
						{
							"name": "积分兑换",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"competitionId\": 1\n}"
								},
								"url": {
									"raw": "{{mock}}/mob/order/competition",
									"host": [
										"{{mock}}"
									],
									"path": [
										"mob",
										"order",
										"competition"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n\t\"status\": 0,\n\t\"notice\": \"成功\",\n\t\"data\": {\n\t\t\"coin\": 1000,\n\t\t\"number\": \"12311234\"\n\t}\n}"
						}
					]
				},
				{
					"name": "首页列表",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{mock}}/mini/live/home",
							"host": [
								"{{mock}}"
							],
							"path": [
								"mini",
								"live",
								"home"
							]
						}
					},
					"response": [
						{
							"name": "首页列表",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{mock}}/mini/live/home",
									"host": [
										"{{mock}}"
									],
									"path": [
										"mini",
										"live",
										"home"
									]
								}
							},
							"_postman_previewlanguage": "json",
							"header": null,
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"data\": {\n        \"living\": [\n            {\n                \"id\": 1,\n                \"name\": \"武林风\",\n                \"title\": \"哈哈哈哈\",\n                \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"views\": 1000,\n                \"startTime\": 21412412412\n            },\n            {\n                \"id\": 2,\n                \"name\": \"正在直播的赛事1\",\n                \"title\": \"哈哈哈哈\",\n                \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"views\": 1000,\n                \"startTime\": 21390712310\n            }\n        ],\n        \"notice\": [\n            {\n                \"id\": 1,\n                \"name\": \"武林风\",\n                \"title\": \"哈哈哈哈\",\n                \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"startTime\": 21412412412\n            },\n            {\n                \"id\": 2,\n                \"name\": \"武林风\",\n                \"title\": \"哈哈哈哈\",\n                \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"startTime\": 21412412412\n            }\n        ],\n        \"playback\": [\n            {\n                \"id\": \"1237812318927382787382\",\n                \"name\": \"武林风\",\n                \"title\": \"哈哈哈哈哈哈哈哈哈\",\n                \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"startTime\": 123648712367846\n            },\n            {\n                \"id\": \"1237812318927382787382\",\n                \"name\": \"武林风\",\n                \"title\": \"哈哈哈哈哈哈哈哈哈\",\n                \"cover\": \"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"startTime\": 123648712367846\n            }\n        ]\n    }\n}"
						}
					]
				},
				{
					"name": "轮播图",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{mock}}/mob/carousel",
							"host": [
								"{{mock}}"
							],
							"path": [
								"mob",
								"carousel"
							]
						}
					},
					"response": [
						{
							"name": "轮播图",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{mock}}/mob/carousel",
									"host": [
										"{{mock}}"
									],
									"path": [
										"mob",
										"carousel"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n\t\"status\":0,\n\t\"data\":[{\n\t\t\"id\":1,\n\t\t\"carousel\":\"https://dev.dayukeji.xin/static/test/dayu_logo.png\",\n\t\t\"refType\":\"competition | quiz\",\n\t\t\"refId\":1\n\t}]\n}"
						}
					]
				}
			]
		},
		{
			"name": "竞猜",
			"item": [
				{
					"name": "竞猜列表",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							}
						],
						"url": {
							"raw": "{{url}}/mob/quiz?_page=1&_count=20",
							"host": [
								"{{url}}"
							],
							"path": [
								"mob",
								"quiz"
							],
							"query": [
								{
									"key": "_page",
									"value": "1"
								},
								{
									"key": "_count",
									"value": "20"
								}
							]
						}
					},
					"response": [
						{
							"name": "竞猜列表",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									},
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									}
								],
								"url": {
									"raw": "/mob/quiz?_page=1&_count=20",
									"path": [
										"mob",
										"quiz"
									],
									"query": [
										{
											"key": "_page",
											"value": "1"
										},
										{
											"key": "_count",
											"value": "20"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"武林风\",\n            \"startTime\": \"2018-09-09 10:10:10\",\n            \"betCount\": 100,\n            \"red\": {\n                \"id\": 1,\n                \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"odds\": 1,\n                \"country\": \"cn\",\n                \"nickname\": \"校长\",\n                \"ticket\": 100\n            },\n            \"blue\": {\n                \"id\": 1,\n                \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"country\": \"cn\",\n                \"odds\": 1,\n                \"nickname\": \"小红\",\n                \"ticket\": 100\n            }\n        },\n        {\n            \"id\": 1,\n            \"name\": \"武林风\",\n            \"time\": \"2018-09-09 10:10:10\",\n            \"betCount\": 100,\n            \"red\": {\n                \"id\": 1,\n                \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"odds\": 1,\n                \"country\": \"cn\",\n                \"nickname\": \"校长\",\n                \"ticket\": 100000000\n            },\n            \"blue\": {\n                \"id\": 1,\n                \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"country\": \"cn\",\n                \"odds\": 1,\n                \"nickname\": \"小红\",\n                \"ticket\": 10000\n            }\n        },\n        {\n            \"id\": 1,\n            \"name\": \"武林风\",\n            \"time\": \"2018-09-09 10:10:10\",\n            \"betCount\": 100,\n            \"red\": {\n                \"id\": 1,\n                \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"odds\": 1,\n                \"country\": \"cn\",\n                \"nickname\": \"校长\",\n                \"ticket\": 100\n            },\n            \"blue\": {\n                \"id\": 1,\n                \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n                \"country\": \"cn\",\n                \"odds\": 1,\n                \"nickname\": \"小红\",\n                \"ticket\": 100\n            }\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "竞猜详情",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{dev}}/mob/quiz/1",
							"host": [
								"{{dev}}"
							],
							"path": [
								"mob",
								"quiz",
								"1"
							]
						}
					},
					"response": [
						{
							"name": "竞猜详情",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{url}}/mob/quiz/1",
									"host": [
										"{{url}}"
									],
									"path": [
										"mob",
										"quiz",
										"1"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": {\n        \"id\": \"jj492j9\",\n        \"name\": \"武林风\",\n        \"startTime\": \"2018-09-09 10:10:10\",\n        \"betCount\": 100,\n        \"red\": {\n            \"id\": 1,\n            \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n            \"age\": 27,\n            \"kg\": 87.9,\n            \"cm\": 178,\n            \"odds\": 1.23,\n            \"country\": \"cn\",\n            \"nickname\": \"校长\",\n            \"ticket\": 232\n        },\n        \"blue\": {\n            \"id\": 1,\n            \"avatar\": \"http://dev.dayukeji.xin/static/test/dayu_logo.png\",\n            \"age\": 28,\n            \"kg\": 83.9,\n            \"cm\": 177,\n            \"country\": \"cn\",\n            \"odds\": 0.94,\n            \"nickname\": \"小红\",\n            \"ticket\": 140\n        }\n    }\n}"
						}
					]
				},
				{
					"name": "竞猜",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"winner\":1,\n  \"amount\":100\n}"
						},
						"url": {
							"raw": "{{url}}/mob/quiz/1/bet",
							"host": [
								"{{url}}"
							],
							"path": [
								"mob",
								"quiz",
								"1",
								"bet"
							]
						}
					},
					"response": [
						{
							"name": "竞猜",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									},
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"winner\":1,\n\t\"amount\":100\n}"
								},
								"url": {
									"raw": "/mob/quiz/1/bet",
									"path": [
										"mob",
										"quiz",
										"1",
										"bet"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"成功\",\n    \"data\": {\n        \"coins\": 1000\n    }\n}"
						}
					]
				},
				{
					"name": "投票",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "session",
								"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7"
							},
							{
								"key": "X-Client-Token",
								"value": "wubohui:wx-mini:user"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"id\":\"123467126478\"\n}"
						},
						"url": {
							"raw": "{{url}}/mob/athlete/1/ticket",
							"host": [
								"{{url}}"
							],
							"path": [
								"mob",
								"athlete",
								"1",
								"ticket"
							]
						}
					},
					"response": [
						{
							"name": "投票",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "session",
										"value": "wubohui:android:DEFAULT"
									},
									{
										"key": "X-Client-Token",
										"value": "wubohui:android"
									},
									{
										"key": "Content-Type",
										"type": "text",
										"name": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":\"1234712y38hu\"\n}"
								},
								"url": {
									"raw": "/mob/athlete/1/ticket",
									"path": [
										"mob",
										"athlete",
										"1",
										"ticket"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"status\": 0,\n    \"notice\": \"\",\n    \"data\": {\n        \"userTicket\": 8\n    }\n}"
						}
					]
				}
			]
		},
		{
			"name": "登录",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "session",
						"value": "wubohui:wx-mini:user:45b6e040c1314167a3d1fb1c31d475b7",
						"type": "text"
					},
					{
						"key": "X-Client-Token",
						"value": "wubohui:wx-mini:user",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"wechatmp\":{\n  \t\"code\":\"\",\n  \t\"auth\":{\n  \t\t\n  \t},\n  \t\"inviterId\":1\n  }\n}"
				},
				"url": {
					"raw": "{{mock}}/user/auth/wechatmp",
					"host": [
						"{{mock}}"
					],
					"path": [
						"user",
						"auth",
						"wechatmp"
					]
				}
			},
			"response": []
		}
	]
}