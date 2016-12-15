/**
 * 公司需要找歌手开演唱会
 * 公司不方便直接接触歌手
 * 转而找到经纪人作为代理
 * 演唱会是公司-经纪人-歌手之间传递的对象
 */


/**
 * 演唱会
 */
class Concert {
	constructor() {
		// 歌单
		this.singList = [ 'a', 'b', 'c' ]
	}
}

/**
 * 发出请求的对象，一个公司在年会上需要举办演唱会
 * 不方便直接访问 singer 对象，不方便直接联系歌手
 * 那就通过 agent 对象代理发出请求，联系经纪人
 * @type {Object}
 */
const company = {
	sendConcert( target ) {
		const concert = new Concert()
		target.receiveConcert( concert )
	}
}

/**
 * 代理对象，代理外界的事物对 singer 对象的访问
 * 经纪人，代理公司对歌手的访问
 * @type {Object}
 */
const agent = {
	receiveConcert( concert ) {
		singer.sing( concert )
	}
}

/**
 * 被代理的对象
 * @type {Object}
 */
const singer = {
	sing( concert ) {
		const singList = concert.singList
		for( let i = 0, len = singList.length; i < len; i++ ) {
			console.log( singList[i] )
		}
	}
}


// 公司发送演唱会请求给经纪人
company.sendConcert( agent )  // a b c