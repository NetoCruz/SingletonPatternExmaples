// POST http://somewebsite.com/config/{userId}

// {
//    "theme": "dark",
//    "locale": "en-US",
//    "timezone": "America/Bogota"
// }


class Config
{
    endpoint = 'https://somewebsite.com/config'

    constructor(userId) {
        this.userId = userId;
    }

    async getValueFor(key) {

        if (this.data) {
            // getting from cache
            return this.data[key]
        }

        return await fetch(`${this.endpoint}/${this.userId}`)
            .then(response => response.json())
            .then(data => {
                this.data = data
                return this.data[key]
            })       
    }
}

const config = new Config(55);    // userId 55
await config.getValueFor('theme');    // dark

//Patrón singleton added

class Config
{
    static instance
    endpoint = 'https://somewebsite.com/config'

    constructor(userId) {
        this.userId = userId;

        if (Config.instance) {
            return Config.instance
        } else {
            Config.instance = this
        }
    }

   
}


const config2 = new Config(55);


typeof config2.data;   // object