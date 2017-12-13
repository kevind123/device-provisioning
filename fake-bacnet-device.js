const testDevice = {
	displayName: 'Candi997Demo_997',
	deviceIdentifier: 997,
	address: '10:38:0:235 0xBAC',
	saddress: '0',
	systemStatus: 'operational',
	vendorName: 'Tridium',
	vendorIdentifier: '36',
	modelName: 'NiagaraAX Station',
	standardVersion: '3.8.38.6',
	softwareVersion: 'Tridium 3.8.38.9',
	bacnetNetwork: 0,
	multiread: 1,
	router: 0,
	dataPoints: [
		{
			objectType: 'analog-input', //label for objectTypeId
			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
			objectIdentifier: 0,
			objectName: 'Logic.VAV.BoxFlow',
			value: 1192.55,
			units: 'cubic-feet-per-minute',
			description: 'Box Flow'
		},
		{
			objectType: 'analog-input', //label for objectTypeId
			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
			objectIdentifier: 1,
			objectName: 'Logic.Dummy Points.NumericInput',
			value: 0,
			units: 'no-units',
			description: ''
		},
		{
			objectType: 'analog-input', //label for objectTypeId
			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
			objectIdentifier: 2,
			objectName: 'Logic.AHU.Economizer',
			value: 20,
			units: 'percent',
			description: 'Economizer'
		},
		{
			objectType: 'analog-input', //label for objectTypeId
			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
			objectIdentifier: 6,
			objectName: 'Logic.AHU.Outside Air',
			value: 72.2589,
			units: 'degrees-fahrenheit',
			description: 'Outside Air'
		},
		{
			objectType: 'analog-input', //label for objectTypeId
			objectTypeId: 0, //NOTE: this is the second value of dataPoint id: 997:0:0 (deviceId, objectTypeId, objectId)
			objectIdentifier: 7,
			objectName: 'Logic.AHU.Return Air',
			value: 73.6412,
			units: 'degrees-fahrenheit',
			description: 'Return Air'
		},
	],
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
				values: {
					objectTypeId: 0,
					objectIdentifier: 0
				}
			},
			{
				deviceInfoCd: 'mq3sH51abZLsO1Sh45K4',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Cool Stage-2',
				values: {
					objectTypeId: 0,
					objectIdentifier: 1
				}
			},
			{
				deviceInfoCd: 'YJS4z5R683Ll7m8q1Je5',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Fan',
				values: {
					objectTypeId: 0,
					objectIdentifier: 6
				}
			},
			{
				deviceInfoCd: 'diQYx1UDhB3YA7M8QSrC',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Filter',
				values: {
					objectTypeId: 0,
					objectIdentifier: 2
				}
			},
			{
				deviceInfoCd: 'JAN4BJu1eQCmVcE8z1rA',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Outside',
				values: {
					objectTypeId: 0,
					objectIdentifier: 6
				}
			},
			{
				deviceInfoCd: 'QlkAU46Bf8Cw8hsOb14S',
				infoTypeLcd: 'IT_SUB_ADDRESS_GENERIC',
				text: 'Return',
				values: {
					objectTypeId: 0,
					objectIdentifier: 7
				}
			},
		]
	}
}

exports.testDevice = testDevice;