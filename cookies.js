
    class Cookie {
        constructor() {
            this.form = '';
            this.size = '';
            this.filling = '';
            this.timing = 0;
            this.status = 'doughy'
        }

        static makeDoughCookies(cookiesNumber) {
            let doughCookies = [];
            if(cookiesNumber <= 50) {
                for (let i = 1; i <= cookiesNumber; i++) {
                    doughCookies.push(new this());
                }
            } else {
                throw Error('Too many cookies! The number of cookies should be under 50');
            }
            return doughCookies;
        }
    }

    class ChocolateCookie extends Cookie {
        constructor() {
            super()
            this.form = 'round';
            this.size = 'medium'
            this.filling = 'chocolate';
            this.timing = 30;
        }
    }

    class AlmondCookie extends Cookie {
        constructor() {
            super()
            this.form = 'square';
            this.size = 'big'
            this.filling = 'almond';
            this.timing = 40;
        }
    }

    class kurabieCookie extends Cookie {
        constructor() {
            super()

            this.form = 'star';
            this.size = 'small'
            this.filling = 'jam';
            this.timing = 50;
        }
    }


    class Oven {
        makeCookies(cookies, timing) {


                for (let i = 0; i <= timing; i++) {
                    console.log(cookies[i].timing)
                    if (cookies[i].timing === timing) {
                        return cookies[i].status = 'ready'
                    }
                    if (cookies[i].timing > timing) {
                        return cookies[i].status = 'doughy'
                    }
                    if (cookies[i].timing < timing) {
                        return cookies[i].status = 'burned'
                    }
                }
        }
    }


    let oven = new Oven();
    let cookies = AlmondCookie.makeDoughCookies(30);
    console.log(cookies);
    console.log(oven.makeCookies(cookies, 40));


