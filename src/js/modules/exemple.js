import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        this.events = {
            click: {
                button: 'doSomething'
            }
        }
    }

    doSomething() {
        console.log('Hello world');
    }
}

