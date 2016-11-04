/**
 * Created by r3v3nan7 on 30.10.16.
 */

(function createBook() {

    let id = 1;

    return function (selector, title, author, isbn) {


        let container = selector;
        let fragment = document.createDocumentFragment();

        let createBookDiv = $(`<div id="book${id}" style="border: medium none;"></div>`);
        let pTitle = $(`<p class=${title}>${title}</p>`);
        let pAuthor = $(`<p class=${author}>${author}</p>`);
        let pISBN = $(`<p class=${isbn}>${isbn}</p>`);
        let btnSelect = $('<button>Select</button>');
        let btnDeselect = $('<button>Deselect</button>');
        id++;


        createBookDiv.append(pTitle,pAuthor, pISBN,btnSelect, btnDeselect);
        $(container).append(createBookDiv);
        fragment.append($(container));
        //$('body').append($(container));

    };




}());