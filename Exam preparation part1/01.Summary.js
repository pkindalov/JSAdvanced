/**
 * Created by r3v3nan7 on 04.11.16.
 */


function solve(selector)
{
    let button = $(selector);


    button.on('click', function () {


        let summDiv =  $('<div id="summary"></div>');
        let h2 = $('<h2>Summary</h2>');
        let p = $('<p></p>');
        let hightlight = $('#content strong').text();

        p.append(hightlight);

        summDiv.append(h2);
        summDiv.append(p);

        $('#content').parent().append(summDiv);



    });



};