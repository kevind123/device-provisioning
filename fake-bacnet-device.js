const testDevice = {
	discovered: {
		'display-name': 'Candi997Demo_997',
		'device-identifier': 997,
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
		objects: [
			{
				'object-type': 'analog-input', //label for objectTypeId
				objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
				'object-identifier': 0,
				'object-name': 'Logic.VAV.BoxFlow',
				value: 1192.55,
				units: 'cubic-feet-per-minute',
				description: 'Box Flow'
			},
			{
				'object-type': 'analog-input', //label for objectTypeId
				objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
				'object-identifier': 1,
				'object-name': 'Logic.Dummy Points.NumericInput',
				value: 0,
				units: 'no-units',
				description: ''
			},
			{
				'object-type': 'analog-input', //label for objectTypeId
				objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
				'object-identifier': 2,
				'object-name': 'Logic.AHU.Economizer',
				value: 20,
				units: 'percent',
				description: 'Economizer'
			},
			{
				'object-type': 'analog-input', //label for objectTypeId
				objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
				'object-identifier': 6,
				'object-name': 'Logic.AHU.Outside Air',
				value: 72.2589,
				units: 'degrees-fahrenheit',
				description: 'Outside Air'
			},
			{
				'object-type': 'analog-input', //label for objectTypeId
				objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
				'object-identifier': 7,
				'object-name': 'Logic.AHU.Return Air',
				value: 73.6412,
				units: 'degrees-fahrenheit',
				description: 'Return Air'
			},
		]
	},
	product: {
		productCd: 'u1lq0isN3tv70HIy6L4G',
		name: 'BACnet AHU',
		make: 'Candi Controls',
		model: 'Generic BACnet AHU',
		imageLink: '/Factory/images/products/u1lq0isN3tv70HIy6L4G.jpg',
		baseProtocol: 'BACnet'
	},
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

const testDeviceJSON = JSON.stringify(testDevice);

exports.testDevice = testDevice;
exports.testDeviceJSON = testDeviceJSON;
