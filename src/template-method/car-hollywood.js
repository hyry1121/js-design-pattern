// 设置抽象方法
function MakeCar( carCfg ) {
	function start( brand ) {
		console.log( `${ brand } 启动` )
	}

	const setGPS = carCfg.setGPS || function() {
		throw new Error( '具体子类必须重写 setGPS 方法' )
	}

	const hasSkylight = carCfg.hasSkylight === true ? true : false

	function openSkylight( brand ) {
		console.log( `${ brand } 打开天窗` )
	}

	const drive = carCfg.drive || function() {
		throw new Error( '具体子类必须重写 drive 方法' )
	}

	function stop( brand ) {
		console.log( `${ brand } 停车` )
	}

	// 返回抽象父类
	class Car {
		constructor( brand ) {
			this.brand = brand
		}
		init() {
			const brand = this.brand
			start( brand )
			setGPS( brand )
			// 如果钩子返回 true，则打开天窗
			if( hasSkylight ) {
				openSkylight( brand )
			}
			drive( brand )
			stop( brand )
		}
	}

	return Car
}

// 重写抽象方法
const BmwCar = MakeCar({
	setGPS( brand ) {
		console.log( `${ brand } 设置GPS` )
	},
	hasSkylight: true,
	drive( brand ) {
		console.log( `${ brand } 正在飙车` )
	}
})

// 重写抽象方法
const AudiCar = MakeCar({
	setGPS( brand ) {
		console.log( `${ brand } 设置GPS` )
	},
	drive( brand ) {
		console.log( `${ brand } 正在慢慢开` )
	}
})

// new具体子类
const bmw = new BmwCar( 'bmw' )
const audi = new AudiCar( 'audi' )

bmw.init()
audi.init()