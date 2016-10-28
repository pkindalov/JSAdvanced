/**
 * Created by r3v3nan7 on 28.10.16.
 */


class Requester{
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}