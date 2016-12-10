function generateCar( carCfg ) {
	function start() {
		console.log( `${ this.brand } 启动` )
	}

	const setGPS = carCfg.setGPS || function() {
		throw new Error( '具体子类必须重写 setGPS 方法' )
	}

	const hasSkylight = carCfg.hasSkylight || false

	function openSkylight() {
		console.log( `${ this.brand } 打开天窗` )
	}

	const drive = carCfg.drive || function() {
		throw new Error( '具体子类必须重写 drive 方法' )
	}

	function stop() {
		console.log( `${ this.brand } 停车` )
	}

	class Tmp {
		constructor( brand ) {
			this.brand = brand
		}

		init() {
			start.call( this )
			setGPS.call( this )
			// 如果钩子返回 true，则打开天窗
			if( hasSkylight ) {
				openSkylight.call( this )
			}
			drive.call( this )
			stop.call( this )
		}
	}

	return Tmp
}

const BmwCar = generateCar({
	setGPS() {
		console.log( `${ this.brand } 设置GPS` )
	},
	hasSkylight: true,
	drive() {
		console.log( `${ this.brand } 正在飙车` )
	}
})

const AudiCar = generateCar({
	setGPS() {
		console.log( `${ this.brand } 设置GPS` )
	},
	drive() {
		console.log( `${ this.brand } 正在慢慢开` )
	}
})

const bmw = new BmwCar( 'bmw' )
const audi = new AudiCar( 'audi' )
bmw.init()
audi.init()