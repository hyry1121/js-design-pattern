/**
 * 统计车主拥有的车辆信息
 * 以车辆为元对象
 * 车辆的拥有者是车辆的外部状态
 */


/**
 * 共享的元（基本）对象
 * 相同的元对象具有相同的内部状态
 * 内部状态就是 brand, model
 */
class Car {
	constructor( {brand, model} ) {
		this.brand = brand
		this.model = model
	}
}

/**
 * 创造实例对象的工厂
 * 确保相同的元对象只有一个
 * @return {Car}   new Car()
 */
const carFactory = ( () => {
	const existCarObjs = {}

	return {
		addCar( {brand, model} ) {
			const carInof = '' + brand + model
			const existCarObj = existCarObjs[ carInof ]

			if( existCarObj ) {
				return existCarObj
			}

			return existCarObjs[ carInof ] = new Car( {brand, model} )
		}
	}
})()

/**
 * 管理器封装外部状态
 */
const carManager = ( () => {
	const carDatabase = {}

	return {
		addCar( owner, {brand, model} ) {
			carDatabase[ owner ] = carFactory.addCar( {brand, model} )
		},
		getCarDatabase() {
			return carDatabase
		}
	}
})()


carManager.addCar( 'xiaoming', {
	brand: 'BMW',
	model: '525Li'
})
carManager.addCar( 'xiaoli', {
	brand: 'BMW',
	model: '525Li'
})