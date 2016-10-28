/**
 * Created by r3v3nan7 on 26.10.16.
 */


function domHighlight(selector) {
    let start = $(selector);
    let maxDepht = 0;
    let maxDephtElement = "";

    function setDepht(depht, element) {
        if(depht > maxDepht){
            maxDepht = depht;
            maxDephtElement = element;
        }
        let children = $(element).children();
        children.each((index, element) => setDepht(depht + 1, element));
    }



    setDepht(1, start);
    let jqueryElement  = $(maxDephtElement);
    jqueryElement.addClass('highlight');

    while (maxDepht){
        maxDepht--;
        jqueryElement.addClass('highlight');
        jqueryElement = jqueryElement.parent();

    }

}






domHighlight("#wrapper");