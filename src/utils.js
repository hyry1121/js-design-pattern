exports.assert = ( condition, msg ) => {
  if( !condition ) {
    throw new Error( msg + '' )
  }
}

exports.getFunctionName = fn => fn.name || fn.toString().match( /function\s*([^(]*)\(/ )[ 1 ]

exports.arrayShift = value => Array.prototype.shift.call( value )

exports.isArray = value => Array.isArray( value )