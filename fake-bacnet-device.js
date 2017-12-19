const testDevice = {
	// discovered: {
	// 	'display-name': 'Candi997Demo_997',
	// 	'device-identifier': 997,
	// 	address: '10:38:0:235 0xBAC',
	// 	saddress: '0',
	// 	'system-status': 'operational',
	// 	'vendor-name': 'Tridium',
	// 	'vendor-identifier': '36',
	// 	'model-name': 'NiagaraAX Station',
	// 	'standard-version': '3.8.38.6',
	// 	'software-version': 'Tridium 3.8.38.9',
	// 	'bacnet-network': 0,
	// 	multiread: 1,
	// 	router: 0,
	// 	objects: [
	// 		{
	// 			'object-type': 'analog-input', //label for objectTypeId
	// 			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
	// 			'object-identifier': 0,
	// 			'object-name': 'Logic.VAV.BoxFlow',
	// 			value: 1192.55,
	// 			units: 'cubic-feet-per-minute',
	// 			description: 'Box Flow'
	// 		},
	// 		{
	// 			'object-type': 'analog-input', //label for objectTypeId
	// 			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
	// 			'object-identifier': 1,
	// 			'object-name': 'Logic.Dummy Points.NumericInput',
	// 			value: 0,
	// 			units: 'no-units',
	// 			description: ''
	// 		},
	// 		{
	// 			'object-type': 'analog-input', //label for objectTypeId
	// 			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
	// 			'object-identifier': 2,
	// 			'object-name': 'Logic.AHU.Economizer',
	// 			value: 20,
	// 			units: 'percent',
	// 			description: 'Economizer'
	// 		},
	// 		{
	// 			'object-type': 'analog-input', //label for objectTypeId
	// 			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
	// 			'object-identifier': 6,
	// 			'object-name': 'Logic.AHU.Outside Air',
	// 			value: 72.2589,
	// 			units: 'degrees-fahrenheit',
	// 			description: 'Outside Air'
	// 		},
	// 		{
	// 			'object-type': 'analog-input', //label for objectTypeId
	// 			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
	// 			'object-identifier': 7,
	// 			'object-name': 'Logic.AHU.Return Air',
	// 			value: 73.6412,
	// 			units: 'degrees-fahrenheit',
	// 			description: 'Return Air'
	// 		},
	// 	]
	// },
	// product: {
	// 	productCd: 'u1lq0isN3tv70HIy6L4G',
	// 	name: 'BACnet AHU',
	// 	make: 'Candi Controls',
	// 	model: 'Generic BACnet AHU',
	// 	imageLink: '/Factory/images/products/u1lq0isN3tv70HIy6L4G.jpg',
	// 	baseProtocol: 'BACnet'
	// },
	device: {
		siteCd: 'sc0130Y8wN4hpg2h64wd',
		deviceCd: 'Y7gd0iq7siPxVr6xmf8o',
		userCd: 'cs51wENaviYuuc0fnses',
		deviceInfos: [
			{
				deviceInfoCd: 'W6cPa12X5geoc0Yn3GZd',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Cool Stage-1',
				values: [0, "0"]
			},
			{
				deviceInfoCd: 'mq3sH51abZLsO1Sh45K4',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Cool Stage-2',
				values: [0, "1"]
			},
			{
				deviceInfoCd: 'YJS4z5R683Ll7m8q1Je5',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Fan',
				values: [0, "6"]
			},
			{
				deviceInfoCd: 'diQYx1UDhB3YA7M8QSrC',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Filter',
				values: [0, "2"]
			},
			{
				deviceInfoCd: 'JAN4BJu1eQCmVcE8z1rA',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Outside',
				values: [0, "8"]
			},
			{
				deviceInfoCd: 'QlkAU46Bf8Cw8hsOb14S',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Return',
				values: [0, "7"]
			}
		]
	}
}

const testBACnetPrediction = {
	'display-name': 'Candi997Demo_997',
  'device-identifier': '997',
  address: '10:38:0:235 0xBAC',
  saddress: '0',
  'system-status': 'operational',
  'vendor-name': 'Tridium',
  'vendor-identifier': '36',
  'model-name': 'NiagaraAX Station',
  'standard-version': '3.8.38.6',
  'software-version': 'Tridium 3.8.38.9',
  'bacnet-network': 0,
  multiread: 1,
  router: 0,
  objects: {
    '997:0:0': {
      'object-type': 'analog-input',
      'object-identifier': 0,
      'object-name': 'Logic.VAV.BoxFlow',
      value: 1192.55,
      units: 'cubic-feet-per-minute',
      description: 'Box Flow'
    },
    '997:0:1': {
      'object-type': 'analog-input',
      'object-identifier': 1,
      'object-name': 'Logic.Dummy Points.NumericInput',
      value: 0,
      units: 'no-units',
      description: ''
    },
    '997:0:10': {
      'object-type': 'analog-input',
      'object-identifier': 10,
      'object-name': 'Logic.Dummy Points.NumericValueFB',
      value: 0,
      units: 'no-units',
      description: 'NumValueFB'
    },
    '997:0:11': {
      'object-type': 'analog-input',
      'object-identifier': 11,
      'object-name': 'Logic.Dummy Points.Ramp',
      value: 87.2667,
      units: 'no-units',
      description: 'Ramp'
    },
    '997:0:12': {
      'object-type': 'analog-input',
      'object-identifier': 12,
      'object-name': 'Logic.Dummy Points.Random',
      value: 50.9834,
      units: 'no-units',
      description: 'Random'
    },
    '997:0:13': {
      'object-type': 'analog-input',
      'object-identifier': 13,
      'object-name': 'Logic.Dummy Points.SineWave',
      value: 59.6261,
      units: 'no-units',
      description: 'SineWave'
    },
    '997:0:14': {
      'object-type': 'analog-input',
      'object-identifier': 14,
      'object-name': 'Logic.CH.CHW Loop DP',
      value: 12.0252,
      units: 'pounds-force-per-square-inch',
      description: ''
    },
    '997:0:15': {
      'object-type': 'analog-input',
      'object-identifier': 15,
      'object-name': 'Logic.VAV.DuctTemp',
      value: 51.1434,
      units: 'degrees-fahrenheit',
      description: 'Duct Temp'
    },
    '997:0:16': {
      'object-type': 'analog-input',
      'object-identifier': 16,
      'object-name': 'Logic.HPU.Cool SP',
      value: 74,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:17': {
      'object-type': 'analog-input',
      'object-identifier': 17,
      'object-name': 'Logic.VAV.Heat SP',
      value: 48,
      units: 'degrees-fahrenheit',
      description: 'Heat SP (Derived)'
    },
    '997:0:19': {
      'object-type': 'analog-input',
      'object-identifier': 19,
      'object-name': 'Logic.RTU.Economizer',
      value: 20,
      units: 'percent',
      description: ''
    },
    '997:0:2': {
      'object-type': 'analog-input',
      'object-identifier': 2,
      'object-name': 'Logic.AHU.Economizer',
      value: 20,
      units: 'percent',
      description: 'Economizer'
    },
    '997:0:20': {
      'object-type': 'analog-input',
      'object-identifier': 20,
      'object-name': 'Logic.VAV.SpaceTemp',
      value: 71.2541,
      units: 'degrees-fahrenheit',
      description: 'Space Temp'
    },
    '997:0:21': {
      'object-type': 'analog-input',
      'object-identifier': 21,
      'object-name': 'Logic.VAV.Supply Air',
      value: 52.9793,
      units: 'degrees-fahrenheit',
      description: 'Supply Temp'
    },
    '997:0:22': {
      'object-type': 'analog-input',
      'object-identifier': 22,
      'object-name': 'Logic.VAV.TerminalLoad',
      value: 100,
      units: 'percent',
      description: 'Terminal Load'
    },
    '997:0:23': {
      'object-type': 'analog-input',
      'object-identifier': 23,
      'object-name': 'Logic.CH.CHW Return',
      value: 70.65,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:24': {
      'object-type': 'analog-input',
      'object-identifier': 24,
      'object-name': 'Logic.RTU.Heat SP',
      value: 63,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:25': {
      'object-type': 'analog-input',
      'object-identifier': 25,
      'object-name': 'Logic.HPU.Heat SP',
      value: 70,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:26': {
      'object-type': 'analog-input',
      'object-identifier': 26,
      'object-name': 'Logic.RTU.Return Air',
      value: 74.2838,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:27': {
      'object-type': 'analog-input',
      'object-identifier': 27,
      'object-name': 'Logic.CH.CHW Supply',
      value: 55.1427,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:28': {
      'object-type': 'analog-input',
      'object-identifier': 28,
      'object-name': 'Logic.RTU.Space Temp',
      value: 73.437,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:29': {
      'object-type': 'analog-input',
      'object-identifier': 29,
      'object-name': 'Logic.RTU.Supply Air',
      value: 61.3218,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:3': {
      'object-type': 'analog-input',
      'object-identifier': 3,
      'object-name': 'Logic.AHU.Gas Heat',
      value: 0,
      units: 'percent',
      description: 'Gas Heat'
    },
    '997:0:30': {
      'object-type': 'analog-input',
      'object-identifier': 30,
      'object-name': 'Logic.VAV1.BoxFlow',
      value: 1196.73,
      units: 'cubic-feet-per-minute',
      description: ''
    },
    '997:0:31': {
      'object-type': 'analog-input',
      'object-identifier': 31,
      'object-name': 'Logic.HPU.Space Temp',
      value: 73.7485,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:32': {
      'object-type': 'analog-input',
      'object-identifier': 32,
      'object-name': 'Logic.HPU.Supply Air',
      value: 77.8235,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:33': {
      'object-type': 'analog-input',
      'object-identifier': 33,
      'object-name': 'Logic.HPU.Changeover Time',
      value: 120,
      units: 'seconds',
      description: ''
    },
    '997:0:34': {
      'object-type': 'analog-input',
      'object-identifier': 34,
      'object-name': 'Logic.HPU.CDW Supply',
      value: 57.3459,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:36': {
      'object-type': 'analog-input',
      'object-identifier': 36,
      'object-name': 'Logic.VAV2.BoxFlow',
      value: 1205.41,
      units: 'cubic-feet-per-minute',
      description: ''
    },
    '997:0:39': {
      'object-type': 'analog-input',
      'object-identifier': 39,
      'object-name': 'Logic.VAV1.DuctTemp',
      value: 52.1555,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:4': {
      'object-type': 'analog-input',
      'object-identifier': 4,
      'object-name': 'Logic.VAV.Cool SP',
      value: 52,
      units: 'degrees-fahrenheit',
      description: 'Cool SP (Derived)'
    },
    '997:0:46': {
      'object-type': 'analog-input',
      'object-identifier': 46,
      'object-name': 'Logic.VAV1.SpaceTemp',
      value: 71.6549,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:47': {
      'object-type': 'analog-input',
      'object-identifier': 47,
      'object-name': 'Logic.VAV1.Supply Air',
      value: 53.7631,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:48': {
      'object-type': 'analog-input',
      'object-identifier': 48,
      'object-name': 'Logic.VAV2.Damper',
      value: 100,
      units: 'percent',
      description: ''
    },
    '997:0:49': {
      'object-type': 'analog-input',
      'object-identifier': 49,
      'object-name': 'Logic.VAV2.DuctTemp',
      value: 51.0049,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:5': {
      'object-type': 'analog-input',
      'object-identifier': 5,
      'object-name': 'Logic.RTU.Cool SP',
      value: 67,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:56': {
      'object-type': 'analog-input',
      'object-identifier': 56,
      'object-name': 'Logic.VAV2.SpaceTemp',
      value: 70.0219,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:57': {
      'object-type': 'analog-input',
      'object-identifier': 57,
      'object-name': 'Logic.VAV2.Supply Air',
      value: 48.8369,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:0:6': {
      'object-type': 'analog-input',
      'object-identifier': 6,
      'object-name': 'Logic.AHU.Outside Air',
      value: 72.2589,
      units: 'degrees-fahrenheit',
      description: 'Outside Air'
    },
    '997:0:7': {
      'object-type': 'analog-input',
      'object-identifier': 7,
      'object-name': 'Logic.AHU.Return Air',
      value: 73.6412,
      units: 'degrees-fahrenheit',
      description: 'Return Air'
    },
    '997:0:8': {
      'object-type': 'analog-input',
      'object-identifier': 8,
      'object-name': 'Logic.AHU.Space Temp',
      value: 74.0785,
      units: 'degrees-fahrenheit',
      description: 'Space Temp'
    },
    '997:0:9': {
      'object-type': 'analog-input',
      'object-identifier': 9,
      'object-name': 'Logic.AHU.Supply Air',
      value: 51.9348,
      units: 'degrees-fahrenheit',
      description: 'Supply Air'
    },
    '997:19:1': {
      'object-type': 'multi-state-value',
      'object-identifier': 1,
      'object-name': 'Logic.Dummy Points.EnumValue',
      value: 0,
      units: '',
      description: ''
    },
    '997:1:1': {
      'object-type': 'analog-output',
      'object-identifier': 1,
      'object-name': 'Logic.Dummy Points.NumericOutput',
      value: 0,
      units: 'no-units',
      description: ''
    },
    '997:1:2': {
      'object-type': 'analog-output',
      'object-identifier': 2,
      'object-name': 'Logic.Dummy Points.CycleTime',
      value: 30,
      units: 'seconds',
      description: 'CycleTime (sec)'
    },
    '997:1:3': {
      'object-type': 'analog-output',
      'object-identifier': 3,
      'object-name': 'Logic.CH.Pump VFD Speed',
      value: 81.3418,
      units: 'percent',
      description: ''
    },
    '997:2:0': {
      'object-type': 'analog-value',
      'object-identifier': 0,
      'object-name': 'Logic.VAV.SpaceSP',
      value: 50,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:1': {
      'object-type': 'analog-value',
      'object-identifier': 1,
      'object-name': 'Logic.AHU.Cool SP',
      value: 67,
      units: 'degrees-fahrenheit',
      description: 'Cool SP (Derived)'
    },
    '997:2:10': {
      'object-type': 'analog-value',
      'object-identifier': 10,
      'object-name': 'Logic.VAV.Damper',
      value: 100,
      units: 'percent',
      description: ''
    },
    '997:2:101': {
      'object-type': 'analog-value',
      'object-identifier': 101,
      'object-name': 'Lucid.PowerMeter01.Output',
      value: 9281000,
      units: 'watt-hours',
      description: ''
    },
    '997:2:102': {
      'object-type': 'analog-value',
      'object-identifier': 102,
      'object-name': 'Lucid.PowerMeter02.Output',
      value: 9281000,
      units: 'watt-hours',
      description: ''
    },
    '997:2:103': {
      'object-type': 'analog-value',
      'object-identifier': 103,
      'object-name': 'Lucid.PowerMeter03.Output',
      value: 9281000,
      units: 'watt-hours',
      description: ''
    },
    '997:2:104': {
      'object-type': 'analog-value',
      'object-identifier': 104,
      'object-name': 'Lucid.PowerMeter04.Output',
      value: 9281000,
      units: 'watt-hours',
      description: ''
    },
    '997:2:105': {
      'object-type': 'analog-value',
      'object-identifier': 105,
      'object-name': 'Lucid.PowerMeter05.Output',
      value: 9281000,
      units: 'watt-hours',
      description: ''
    },
    '997:2:106': {
      'object-type': 'analog-value',
      'object-identifier': 106,
      'object-name': 'Lucid.PowerMeter06.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:107': {
      'object-type': 'analog-value',
      'object-identifier': 107,
      'object-name': 'Lucid.PowerMeter07.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:108': {
      'object-type': 'analog-value',
      'object-identifier': 108,
      'object-name': 'Lucid.PowerMeter08.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:109': {
      'object-type': 'analog-value',
      'object-identifier': 109,
      'object-name': 'Lucid.PowerMeter09.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:11': {
      'object-type': 'analog-value',
      'object-identifier': 11,
      'object-name': 'Logic.HPU.Space SP',
      value: 72,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:110': {
      'object-type': 'analog-value',
      'object-identifier': 110,
      'object-name': 'Lucid.PowerMeter10.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:111': {
      'object-type': 'analog-value',
      'object-identifier': 111,
      'object-name': 'Lucid.PowerMeter11.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:112': {
      'object-type': 'analog-value',
      'object-identifier': 112,
      'object-name': 'Lucid.PowerMeter12.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:113': {
      'object-type': 'analog-value',
      'object-identifier': 113,
      'object-name': 'Lucid.PowerMeter13.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:114': {
      'object-type': 'analog-value',
      'object-identifier': 114,
      'object-name': 'Lucid.PowerMeter14.Output',
      value: 9281010,
      units: 'watt-hours',
      description: ''
    },
    '997:2:115': {
      'object-type': 'analog-value',
      'object-identifier': 115,
      'object-name': 'Lucid.PowerMeter15.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:116': {
      'object-type': 'analog-value',
      'object-identifier': 116,
      'object-name': 'Lucid.PowerMeter16.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:117': {
      'object-type': 'analog-value',
      'object-identifier': 117,
      'object-name': 'Lucid.PowerMeter17.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:118': {
      'object-type': 'analog-value',
      'object-identifier': 118,
      'object-name': 'Lucid.PowerMeter18.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:119': {
      'object-type': 'analog-value',
      'object-identifier': 119,
      'object-name': 'Lucid.PowerMeter19.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:12': {
      'object-type': 'analog-value',
      'object-identifier': 12,
      'object-name': 'Logic.AHU.Space SP',
      value: 65,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:120': {
      'object-type': 'analog-value',
      'object-identifier': 120,
      'object-name': 'Lucid.PowerMeter20.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:121': {
      'object-type': 'analog-value',
      'object-identifier': 121,
      'object-name': 'Lucid.PowerMeter21.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:122': {
      'object-type': 'analog-value',
      'object-identifier': 122,
      'object-name': 'Lucid.PowerMeter22.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:123': {
      'object-type': 'analog-value',
      'object-identifier': 123,
      'object-name': 'Lucid.PowerMeter23.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:124': {
      'object-type': 'analog-value',
      'object-identifier': 124,
      'object-name': 'Lucid.PowerMeter24.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:125': {
      'object-type': 'analog-value',
      'object-identifier': 125,
      'object-name': 'Lucid.PowerMeter25.Output',
      value: 9281020,
      units: 'watt-hours',
      description: ''
    },
    '997:2:126': {
      'object-type': 'analog-value',
      'object-identifier': 126,
      'object-name': 'Lucid.PowerMeter26.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:127': {
      'object-type': 'analog-value',
      'object-identifier': 127,
      'object-name': 'Lucid.PowerMeter27.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:128': {
      'object-type': 'analog-value',
      'object-identifier': 128,
      'object-name': 'Lucid.PowerMeter28.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:129': {
      'object-type': 'analog-value',
      'object-identifier': 129,
      'object-name': 'Lucid.PowerMeter29.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:13': {
      'object-type': 'analog-value',
      'object-identifier': 13,
      'object-name': 'Logic.HPU.CDW Valve',
      value: 53.6261,
      units: 'percent',
      description: ''
    },
    '997:2:130': {
      'object-type': 'analog-value',
      'object-identifier': 130,
      'object-name': 'Lucid.PowerMeter30.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:131': {
      'object-type': 'analog-value',
      'object-identifier': 131,
      'object-name': 'Lucid.PowerMeter31.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:132': {
      'object-type': 'analog-value',
      'object-identifier': 132,
      'object-name': 'Lucid.PowerMeter32.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:133': {
      'object-type': 'analog-value',
      'object-identifier': 133,
      'object-name': 'Lucid.PowerMeter33.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:134': {
      'object-type': 'analog-value',
      'object-identifier': 134,
      'object-name': 'Lucid.PowerMeter34.Output',
      value: 9281030,
      units: 'watt-hours',
      description: ''
    },
    '997:2:135': {
      'object-type': 'analog-value',
      'object-identifier': 135,
      'object-name': 'Lucid.PowerMeter35.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:136': {
      'object-type': 'analog-value',
      'object-identifier': 136,
      'object-name': 'Lucid.PowerMeter36.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:137': {
      'object-type': 'analog-value',
      'object-identifier': 137,
      'object-name': 'Lucid.PowerMeter37.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:138': {
      'object-type': 'analog-value',
      'object-identifier': 138,
      'object-name': 'Lucid.PowerMeter38.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:139': {
      'object-type': 'analog-value',
      'object-identifier': 139,
      'object-name': 'Lucid.PowerMeter39.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:14': {
      'object-type': 'analog-value',
      'object-identifier': 14,
      'object-name': 'Logic.VAV2.SpaceSP',
      value: 50,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:140': {
      'object-type': 'analog-value',
      'object-identifier': 140,
      'object-name': 'Lucid.PowerMeter40.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:141': {
      'object-type': 'analog-value',
      'object-identifier': 141,
      'object-name': 'Lucid.PowerMeter41.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:142': {
      'object-type': 'analog-value',
      'object-identifier': 142,
      'object-name': 'Lucid.PowerMeter42.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:143': {
      'object-type': 'analog-value',
      'object-identifier': 143,
      'object-name': 'Lucid.PowerMeter43.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:144': {
      'object-type': 'analog-value',
      'object-identifier': 144,
      'object-name': 'Lucid.PowerMeter44.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:145': {
      'object-type': 'analog-value',
      'object-identifier': 145,
      'object-name': 'Lucid.PowerMeter45.Output',
      value: 9281040,
      units: 'watt-hours',
      description: ''
    },
    '997:2:146': {
      'object-type': 'analog-value',
      'object-identifier': 146,
      'object-name': 'Lucid.PowerMeter46.Output',
      value: 9281050,
      units: 'watt-hours',
      description: ''
    },
    '997:2:147': {
      'object-type': 'analog-value',
      'object-identifier': 147,
      'object-name': 'Lucid.PowerMeter47.Output',
      value: 9281050,
      units: 'watt-hours',
      description: ''
    },
    '997:2:148': {
      'object-type': 'analog-value',
      'object-identifier': 148,
      'object-name': 'Lucid.PowerMeter48.Output',
      value: 9281050,
      units: 'watt-hours',
      description: ''
    },
    '997:2:149': {
      'object-type': 'analog-value',
      'object-identifier': 149,
      'object-name': 'Lucid.PowerMeter49.Output',
      value: 9281050,
      units: 'watt-hours',
      description: ''
    },
    '997:2:15': {
      'object-type': 'analog-value',
      'object-identifier': 15,
      'object-name': 'Logic.CH.CHW Pressure SP',
      value: 12,
      units: 'pounds-force-per-square-inch',
      description: ''
    },
    '997:2:150': {
      'object-type': 'analog-value',
      'object-identifier': 150,
      'object-name': 'Lucid.PowerMeter50.Output',
      value: 9281050,
      units: 'watt-hours',
      description: ''
    },
    '997:2:151': {
      'object-type': 'analog-value',
      'object-identifier': 151,
      'object-name': 'Lucid.GasMeter01.Output',
      value: 3581250,
      units: 'btus',
      description: ''
    },
    '997:2:152': {
      'object-type': 'analog-value',
      'object-identifier': 152,
      'object-name': 'Lucid.GasMeter02.Output',
      value: 3484740,
      units: 'therms',
      description: ''
    },
    '997:2:16': {
      'object-type': 'analog-value',
      'object-identifier': 16,
      'object-name': 'Logic.CH.CHW Supply SP',
      value: 55,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:161': {
      'object-type': 'analog-value',
      'object-identifier': 161,
      'object-name': 'Lucid.WaterMeter01.Output',
      value: 9455740,
      units: 'us-gallons',
      description: ''
    },
    '997:2:162': {
      'object-type': 'analog-value',
      'object-identifier': 162,
      'object-name': 'Lucid.WaterMeter02.Output',
      value: 9128400,
      units: 'us-gallons',
      description: ''
    },
    '997:2:17': {
      'object-type': 'analog-value',
      'object-identifier': 17,
      'object-name': 'Logic.CH.Compressor Stage',
      value: 5,
      units: 'no-units',
      description: ''
    },
    '997:2:18': {
      'object-type': 'analog-value',
      'object-identifier': 18,
      'object-name': 'Logic.CH.Cooling Load',
      value: 52.0653,
      units: 'percent',
      description: ''
    },
    '997:2:19': {
      'object-type': 'analog-value',
      'object-identifier': 19,
      'object-name': 'Logic.CH.Min Pump Speed',
      value: 35,
      units: 'percent',
      description: ''
    },
    '997:2:2': {
      'object-type': 'analog-value',
      'object-identifier': 2,
      'object-name': 'Logic.AHU.Heat SP',
      value: 63,
      units: 'degrees-fahrenheit',
      description: 'Heat SP (Derived)'
    },
    '997:2:20': {
      'object-type': 'analog-value',
      'object-identifier': 20,
      'object-name': 'Logic.VAV1.SpaceSP',
      value: 50,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:21': {
      'object-type': 'analog-value',
      'object-identifier': 21,
      'object-name': 'Lucid.WaterMeter04.Output',
      value: 9413820,
      units: 'us-gallons',
      description: ''
    },
    '997:2:22': {
      'object-type': 'analog-value',
      'object-identifier': 22,
      'object-name': 'Lucid.WaterMeter03.Output',
      value: 9131890,
      units: 'us-gallons',
      description: ''
    },
    '997:2:23': {
      'object-type': 'analog-value',
      'object-identifier': 23,
      'object-name': 'Lucid.GasMeter03.Output',
      value: 5235350,
      units: 'therms',
      description: ''
    },
    '997:2:24': {
      'object-type': 'analog-value',
      'object-identifier': 24,
      'object-name': 'Logic.VAV1.TerminalLoad',
      value: 100,
      units: 'percent',
      description: ''
    },
    '997:2:25': {
      'object-type': 'analog-value',
      'object-identifier': 25,
      'object-name': 'Logic.VAV1.CFMSetpoint',
      value: 1200,
      units: 'cubic-feet-per-minute',
      description: ''
    },
    '997:2:26': {
      'object-type': 'analog-value',
      'object-identifier': 26,
      'object-name': 'Logic.VAV1.Cool SP',
      value: 52,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:27': {
      'object-type': 'analog-value',
      'object-identifier': 27,
      'object-name': 'Logic.VAV1.Heat SP',
      value: 48,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:28': {
      'object-type': 'analog-value',
      'object-identifier': 28,
      'object-name': 'Lucid.GasMeter04.Output',
      value: 3622760,
      units: 'therms',
      description: ''
    },
    '997:2:3': {
      'object-type': 'analog-value',
      'object-identifier': 3,
      'object-name': 'Logic.AHU.Econ Minimum',
      value: 20,
      units: 'percent',
      description: 'Econ Minimum'
    },
    '997:2:3001451': {
      'object-type': 'analog-value',
      'object-identifier': 3001451,
      'object-name': 'Total Electricity',
      value: 9282450,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-2'
    },
    '997:2:3001455': {
      'object-type': 'analog-value',
      'object-identifier': 3001455,
      'object-name': 'Building HVAC Total',
      value: 9282460,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-6'
    },
    '997:2:3001459': {
      'object-type': 'analog-value',
      'object-identifier': 3001459,
      'object-name': 'HVAC Rooftop',
      value: 9282460,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-10'
    },
    '997:2:3001463': {
      'object-type': 'analog-value',
      'object-identifier': 3001463,
      'object-name': 'HVAC Heat Pumps',
      value: 9282460,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-9'
    },
    '997:2:3001467': {
      'object-type': 'analog-value',
      'object-identifier': 3001467,
      'object-name': 'Building Lighting Total',
      value: 9282470,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-7'
    },
    '997:2:3001471': {
      'object-type': 'analog-value',
      'object-identifier': 3001471,
      'object-name': 'Process',
      value: 9282470,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-11'
    },
    '997:2:3001500': {
      'object-type': 'analog-value',
      'object-identifier': 3001500,
      'object-name': 'Lighting 1st Floor',
      value: 9282500,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-3'
    },
    '997:2:3001504': {
      'object-type': 'analog-value',
      'object-identifier': 3001504,
      'object-name': 'Lighting 2nd Floor',
      value: 9282500,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-4'
    },
    '997:2:3001508': {
      'object-type': 'analog-value',
      'object-identifier': 3001508,
      'object-name': 'Lighting 3rd Floor',
      value: 9282510,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-5'
    },
    '997:2:3002521': {
      'object-type': 'analog-value',
      'object-identifier': 3002521,
      'object-name': 'Lighting C',
      value: 9282520,
      units: 'kilowatts',
      description: 'AD-111MAC-NAE-13'
    },
    '997:2:34': {
      'object-type': 'analog-value',
      'object-identifier': 34,
      'object-name': 'Logic.VAV2.TerminalLoad',
      value: 100,
      units: 'percent',
      description: ''
    },
    '997:2:35': {
      'object-type': 'analog-value',
      'object-identifier': 35,
      'object-name': 'Logic.VAV2.Cool SP',
      value: 52,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:36': {
      'object-type': 'analog-value',
      'object-identifier': 36,
      'object-name': 'Logic.VAV2.Heat SP',
      value: 48,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:37': {
      'object-type': 'analog-value',
      'object-identifier': 37,
      'object-name': 'Logic.VAV2.CFMSetpoint',
      value: 1200,
      units: 'cubic-feet-per-minute',
      description: ''
    },
    '997:2:4': {
      'object-type': 'analog-value',
      'object-identifier': 4,
      'object-name': 'Logic.RTU.CHW Valve',
      value: 100,
      units: 'percent',
      description: ''
    },
    '997:2:5': {
      'object-type': 'analog-value',
      'object-identifier': 5,
      'object-name': 'Logic.Dummy Points.NumericValue',
      value: 0,
      units: 'no-units',
      description: ''
    },
    '997:2:6': {
      'object-type': 'analog-value',
      'object-identifier': 6,
      'object-name': 'Logic.RTU.Space SP',
      value: 65,
      units: 'degrees-fahrenheit',
      description: ''
    },
    '997:2:7': {
      'object-type': 'analog-value',
      'object-identifier': 7,
      'object-name': 'Logic.VAV.CFMSetpoint',
      value: 1200,
      units: 'cubic-feet-per-minute',
      description: 'CFM Setpoint'
    },
    '997:2:8': {
      'object-type': 'analog-value',
      'object-identifier': 8,
      'object-name': 'Logic.RTU.Econ Minimum',
      value: 20,
      units: 'percent',
      description: ''
    },
    '997:2:9': {
      'object-type': 'analog-value',
      'object-identifier': 9,
      'object-name': 'Logic.RTU.HHW Valve',
      value: 0,
      units: 'percent',
      description: ''
    },
    '997:3:0': {
      'object-type': 'binary-input',
      'object-identifier': 0,
      'object-name': 'Logic.AHU.Cool Stage-1',
      value: 0,
      units: '',
      description: 'Cool Stage-1'
    },
    '997:3:1': {
      'object-type': 'binary-input',
      'object-identifier': 1,
      'object-name': 'Logic.AHU.Cool Stage-2',
      value: 0,
      units: '',
      description: 'Cool Stage-2'
    },
    '997:3:10': {
      'object-type': 'binary-input',
      'object-identifier': 10,
      'object-name': 'Logic.Dummy Points.MultiVibrator',
      value: 0,
      units: '',
      description: 'Multivibrator'
    },
    '997:3:11': {
      'object-type': 'binary-input',
      'object-identifier': 11,
      'object-name': 'Logic.CH.CD Fan-1',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:12': {
      'object-type': 'binary-input',
      'object-identifier': 12,
      'object-name': 'Logic.CH.CD Fan-2',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:13': {
      'object-type': 'binary-input',
      'object-identifier': 13,
      'object-name': 'Logic.RTU.Supply Fan Status',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:14': {
      'object-type': 'binary-input',
      'object-identifier': 14,
      'object-name': 'Logic.HPU.Supply Fan Status',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:15': {
      'object-type': 'binary-input',
      'object-identifier': 15,
      'object-name': 'Logic.HPU.Reversing Valve',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:16': {
      'object-type': 'binary-input',
      'object-identifier': 16,
      'object-name': 'Logic.HPU.Compressor',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:17': {
      'object-type': 'binary-input',
      'object-identifier': 17,
      'object-name': 'Logic.CH.CD Fan-3',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:18': {
      'object-type': 'binary-input',
      'object-identifier': 18,
      'object-name': 'Logic.CH.CD Fan-4',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:19': {
      'object-type': 'binary-input',
      'object-identifier': 19,
      'object-name': 'Logic.CH.CD Fan-5',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:2': {
      'object-type': 'binary-input',
      'object-identifier': 2,
      'object-name': 'Logic.AHU.Filter Status',
      value: 0,
      units: '',
      description: 'Filter Status'
    },
    '997:3:20': {
      'object-type': 'binary-input',
      'object-identifier': 20,
      'object-name': 'Logic.CH.CD Fan-6',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:21': {
      'object-type': 'binary-input',
      'object-identifier': 21,
      'object-name': 'Logic.CH.CD Fan-7',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:22': {
      'object-type': 'binary-input',
      'object-identifier': 22,
      'object-name': 'Logic.CH.CD Fan-8',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:24': {
      'object-type': 'binary-input',
      'object-identifier': 24,
      'object-name': 'Logic.VAV1.Reheat',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:27': {
      'object-type': 'binary-input',
      'object-identifier': 27,
      'object-name': 'Logic.CH.Pump-1 Status',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:3': {
      'object-type': 'binary-input',
      'object-identifier': 3,
      'object-name': 'Logic.AHU.OSA Lockout',
      value: 0,
      units: '',
      description: 'OSA Lockout'
    },
    '997:3:30': {
      'object-type': 'binary-input',
      'object-identifier': 30,
      'object-name': 'Logic.CH.Pump-2 Status',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:4': {
      'object-type': 'binary-input',
      'object-identifier': 4,
      'object-name': 'Logic.AHU.Blower Enable',
      value: 0,
      units: '',
      description: 'Blower Enable'
    },
    '997:3:5': {
      'object-type': 'binary-input',
      'object-identifier': 5,
      'object-name': 'Logic.Dummy Points.BooleanInput',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:6': {
      'object-type': 'binary-input',
      'object-identifier': 6,
      'object-name': 'Logic.AHU.Supply Fan Status',
      value: 0,
      units: '',
      description: 'Supply Fan Status'
    },
    '997:3:7': {
      'object-type': 'binary-input',
      'object-identifier': 7,
      'object-name': 'Logic.RTU.OSA Lockout',
      value: 0,
      units: '',
      description: ''
    },
    '997:3:8': {
      'object-type': 'binary-input',
      'object-identifier': 8,
      'object-name': 'Logic.VAV.Reheat',
      value: 0,
      units: '',
      description: 'Reheat'
    },
    '997:3:9': {
      'object-type': 'binary-input',
      'object-identifier': 9,
      'object-name': 'Logic.Dummy Points.BooleanValueFB',
      value: 0,
      units: '',
      description: 'BoolValueFB'
    },
    '997:4:1': {
      'object-type': 'binary-output',
      'object-identifier': 1,
      'object-name': 'Logic.CH.Pump-1 Command',
      value: 0,
      units: '',
      description: ''
    },
    '997:4:2': {
      'object-type': 'binary-output',
      'object-identifier': 2,
      'object-name': 'Logic.Dummy Points.BooleanOutput',
      value: 0,
      units: '',
      description: ''
    },
    '997:4:3': {
      'object-type': 'binary-output',
      'object-identifier': 3,
      'object-name': 'Logic.CH.Pump-2 Command',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:0': {
      'object-type': 'binary-value',
      'object-identifier': 0,
      'object-name': 'Logic.HPU.Supply Fan Command',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:1': {
      'object-type': 'binary-value',
      'object-identifier': 1,
      'object-name': 'Logic.AHU.Supply Fan Command',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:10': {
      'object-type': 'binary-value',
      'object-identifier': 10,
      'object-name': 'Logic.CH.Occupancy',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:11': {
      'object-type': 'binary-value',
      'object-identifier': 11,
      'object-name': 'Logic.CH.Pump-1 Alarm Latch',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:12': {
      'object-type': 'binary-value',
      'object-identifier': 12,
      'object-name': 'Logic.CH.Pump-2 Alarm Latch',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:2': {
      'object-type': 'binary-value',
      'object-identifier': 2,
      'object-name': 'Logic.Dummy Points.BooleanValue',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:3': {
      'object-type': 'binary-value',
      'object-identifier': 3,
      'object-name': 'Logic.RTU.Supply Fan Command',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:4': {
      'object-type': 'binary-value',
      'object-identifier': 4,
      'object-name': 'Logic.RTU.Occupancy',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:5': {
      'object-type': 'binary-value',
      'object-identifier': 5,
      'object-name': 'Logic.VAV2.Occupancy',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:6': {
      'object-type': 'binary-value',
      'object-identifier': 6,
      'object-name': 'Logic.HPU.Occupancy',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:7': {
      'object-type': 'binary-value',
      'object-identifier': 7,
      'object-name': 'Logic.AHU.Occupancy',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:8': {
      'object-type': 'binary-value',
      'object-identifier': 8,
      'object-name': 'Logic.VAV.Occupancy',
      value: 0,
      units: '',
      description: ''
    },
    '997:5:9': {
      'object-type': 'binary-value',
      'object-identifier': 9,
      'object-name': 'Logic.CH.Lead Pump',
      value: 0,
      units: '',
      description: ''
    }
  }
}

const testDeviceJSON = JSON.stringify(testDevice);

exports.testDevice = testDevice;
exports.testDeviceJSON = testDeviceJSON;
