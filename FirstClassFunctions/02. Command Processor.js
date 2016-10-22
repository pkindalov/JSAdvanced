/**
 * Created by r3v3nan7 on 22.10.16.
 */

function processCommands(commands) {
    let commandProcessor = (function () {
        let text = '';

        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)

        }

    })();

    for(let cmd of commands){
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}


processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']); // 34

// commandProcessor.append('pesho ');
// commandProcessor.append('gosho');
// commandProcessor.removeStart(2);
// commandProcessor.removeEnd(2);
// commandProcessor.print();
