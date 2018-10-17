class Cookie {
	constructor() {
		this.form = '';
		this.size = '';
		this.filling = '';
		this.timing = 0;
	}

	static makeDoughCookies(cookiesNumber) {
		let cookies = [];
		if(cookiesNumber <= 50) {
			for (let i = 0; i <= cookiesNumber; i++) {
				cookies.push(new this());
			}
		} else {
			throw Error('Too many cookies! The number of cookies should be under 50');
		}
		return cookies;
	}
}

class ChocolateCookie extends Cookie {
	constructor() {
		this.form = 'round';
		this.size = 'medium'
		this.filling = 'chocolate';
		this.timing = 30;
	}
}

class AlmondCookie extends Cookie {
	constructor() {
		this.form = 'square';
		this.size = 'big'
		this.filling = 'almond';
		this.timing = 40;
	}
}

class kurabieCookie extends Cookie {
	constructor() {
		this.form = 'star';
		this.size = 'small'
		this.filling = 'jam';
		this.timing = 50;
	}
}


class Oven {

makeCookies(cookies) {
		//status
	}

}


let oven = new Oven()
oven.makeCookies();


