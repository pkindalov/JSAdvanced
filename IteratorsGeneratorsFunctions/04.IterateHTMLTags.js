/**
 * Created by r3v3nan7 on 09.11.16.
 */

function* extractTags(html) {
    let regex = /<[^>]+>/g;
    let match;

    while (match = regex.exec(html)){
        let tag = match[0];
        yield tag;
    }
}




let html = "<!doctype><html><head><title></title></head><body></body></html>";

console.log(extractTags(html));