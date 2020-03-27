class EventEmitter {
	constructor() {
		this.event = {};
	}

	on(eventName, callback) {
		if (this.event[eventName]) {
			this.event[eventName].push(callback);
		} else {
			this.event[eventName] = [ callback ];
		}
	}

	trigger(eventName, ...rest) {
		this.event[eventName].forEach((cb) => {
			// cb(...rest);
			cb.apply(null, rest);
		});
	}
}

const ee = new EventEmitter();
ee.on('hello', (text, text2) => {
	console.log(text, text2);
});
ee.on('hello', () => {
	console.log('123');
});
ee.trigger('hello', [ 'hi!!!', 'hello!' ]);
