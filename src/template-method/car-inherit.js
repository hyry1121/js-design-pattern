/**
 * 抽象父类
 * 汽车类
 */
class Car {
	constructor( brand ) {
		this.brand = brand
		this.hasSkylight = false
	}
	// 每辆汽车都能启动
	start() {
		console.log( `${ this.brand } 启动` )
	}
	// 设置GPS导航
	setGPS() {
		throw new Error( '具体子类必须重写 setGPS 方法' )
	}
	// 打开天窗
	openSkylight() {
		console.log( `${ this.brand } 打开天窗` )
	}
	// 开车
	drive() {
		throw new Error( '具体子类必须重写 drive 方法' )
	}
	// 每辆汽车都能熄火
	stop() {
		console.log( `${ this.brand } 停车` )
	}
	// 初始化
	init() {
		this.start()
		this.setGPS()
		// 如果钩子返回 true，则打开天窗
		if( this.hasSkylight ) {
			this.openSkylight()
		}
		this.drive()
		this.stop()
	}
}

/**
 * 具体子类
 * 重写父类方法
 * 宝马汽车
 */
class BmwCar extends Car {
	constructor( brand ) {
		super( brand )
		this.hasSkylight = true
	}
	setGPS() {
		console.log( `${ this.brand } 设置GPS` )
	}
	drive() {
		console.log( `${ this.brand } 正在飙车` )
	}
}

/**
 * 具体子类
 * 重写父类方法
 * 奥迪汽车
 */
class AudiCar extends Car {
	constructor( brand ) {
		super( brand )
	}
	setGPS() {
		console.log( `${ this.brand } 设置GPS` )
	}
	drive() {
		console.log( `${ this.brand } 正在慢慢开` )
	}
}

const bmw = new BmwCar( 'bmw' )
const audi = new AudiCar( 'audi' )
bmw.init()
audi.init()