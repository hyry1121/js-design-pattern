/**
 * 申请经费的过程
 * 某实验室需要申请一笔经费
 * 审批申请手续的有 经理 -> 主管 -> CEO
 * 经理能处理10元以内的经费，
 * 主管能处理20元以内的经费，
 * 只有经费大于20元的才上交给CEO处理
 */

const OK = 'OK',
			NO = 'NO'

// 经理
function manager( funds ) {
	if( funds >= 10 ) {
		return NO
	} else {
		console.log( 'manager handler' )
		return OK
	}
}

// 主管
function charge( funds ) {
	if( funds >= 20 ) {
		return NO
	} else {
		console.log( 'charge handler' )
		return OK
	}
}

// CEO
function ceo( funds ) {
	console.log( 'ceo handler' )
	return OK
}

// 职责链中每一个节点的对象
class Chain {
	constructor( handler ) {
		// 该节点的处理函数
		this.handler = handler
		// 下一个节点
		this.next = null
	}
	setNext( next ) {
		this.next = next
	}
	// 类似链表循环next，“移动指针”
	passRequest( funds ) {
		let tempChain = this,
				tempResult = ''
		// 循环每一个Chain对象的next，检测是否能够处理funds
		while( tempChain !== null  ) {
			tempResult = tempChain.handler( funds )
			// 如果能够处理，则将处理结果返回
			if( tempResult === OK ) {
				return tempResult
			} else {
				// 否则继续循环next
				tempChain = tempChain.next
			}
		}

		return tempResult
	}
}

const chainManager = new Chain( manager )
const chainCharge = new Chain( charge )
const chainCeo = new Chain( ceo )

chainManager.setNext( chainCharge )
chainCharge.setNext( chainCeo )

chainManager.passRequest( 5 )
