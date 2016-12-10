const _ = require( './../utils' )
/**
 * 人才市场
 * @type {Object}
 */
const jobMarket = {
	// 订阅者的回调函数
	clientList: {},

	// 传入的 cb 为具名函数，如果传入的是匿名函数，无法移除。如果要实现，参照 jQuery 中设置标识符
	listen( type, cb ) {
		const hasFunctionName = !!_.getFunctionName( cb )
		_.assert( hasFunctionName, 'listen方法需要传入的是具名函数，匿名函数无法取消订阅' )
		// 如果还没有订阅过该工作类型，就创建一个列表
		if( !this.clientList[ type ] ) {
			this.clientList[ type ] = []
		}
		// 将订阅者的回调函数加入订阅列表
		this.clientList[ type ].push( cb )
	},

	// 发布消息
	trigger( type, condition ) {
		const cbs = this.clientList[ type ]
		_.assert( _.isArray(cbs) && cbs.length !== 0, `订阅列表中无 ${ type } 类型的回调函数` )

		for( let i = 0, len = cbs.length; i < len; i++ ) {
			cbs[ i ]( condition )
		}
	},

	// 取消订阅，依赖 listen 方法中传入的具名函数的名字
	remove( type, cb ) {
		const cbs = this.clientList[ type ]
		// 如果没有该类型的回调函数，直接忽略
		const hasCbs = _.isArray( cbs ) && cbs.length !== 0
		if( !hasCbs ) {
			return
		}
		// 如果不传入具体的回调函数名，则意图取消该类型下的所有回调函数
		if( !cb ) {
			delete this.clientList[ type ]
		}

		// 倒序遍历，方便使用 splice
		for( let l = cbs.length; l >= 0; l-- ) {
			if( cb === cbs[l] ) {
				cbs.splice( l, 1 )
			}
		}
	}
}

function xiaoming( condition ) {
	condition.price > 8000
	? console.log( '小明要应聘' )
	: console.log( '小明觉得工资太低，不去' )
}

function xiaohua( condition ) {
	condition.price > 8000
	? console.log( '小华要应聘' )
	: console.log( '小华觉得工资太低，不去' )
}

function xiaoliang( condition ) {
	condition.price > 8000
	? console.log( '小亮要应聘' )
	: console.log( '小亮觉得工资太低，不去' )
}

jobMarket.listen( '前端', xiaoming )
jobMarket.listen( '前端', xiaohua )
jobMarket.listen( '后端', xiaoliang )

jobMarket.trigger( '前端', { price: 9000 } )
jobMarket.trigger( '后端', { price: 2000 } )