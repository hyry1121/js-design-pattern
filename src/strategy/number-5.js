/**
 * 需要一个基数和5发生关系
 */


const _ = require( './../utils' )

/**
 * 策略类
 * 封装各种算法策略
 * @type {Object}
 */
const strategies = {
	plus( baseNum ) {
		return baseNum + 5
	},

	minus( baseNum ) {
		return baseNum - 5
	},

	multiply( baseNum ) {
		return baseNum * 5
	},

	division( baseNum ) {
		return baseNum / 5
	}
}

/**
 * 执行策略的函数
 * @param  {String} type 策略算法名称
 * @param  {Number} num  要执行计算的基数
 * @return {Number}      以基数进行计算之后的数字
 */
function calculateNum( type, num ) {
	const strategy =  strategies[ type ]
	_.assert( typeof strategy === 'function', '策略类中无相应策略算法' )

	return strategy( num )
}

console.log( calculateNum( 'plus', 5 ) )