const appliances = {
	tv: {
		open() {
			console.log( 'tv is opened' )
		},
		close() {
			console.log( 'tv is closed' )
		}
	},

	light: {
		open() {
			console.log( 'light is opened' )
		},
		close() {
			console.log( 'light is closed' )
		}
	}
}

class TvCmd {
	constructor( receiver ) {
		this.receiver = receiver
	}

	execute( cmd ) {
		this.receiver[ cmd ]()
	}
}

function setCmd( receiver, cmd ) {
	receiver.execute( cmd )
}

const tvCmd = new TvCmd( appliances.tv )

setCmd( tvCmd, 'open' )
setCmd( tvCmd, 'close' )