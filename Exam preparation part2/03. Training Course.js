/**
 * Created by r3v3nan7 on 10.11.16.
 */

class TrainingCourse{
    constructor(title,trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }


    addTopic(title, date){
        let currTopic = {
            title: title,
            date: date
        };

        this.topics.push(currTopic);
        this.topics.sort((a, b) => a['date'] - b['date']);
        return this;
    }


    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic(){
        return this.topics[this.topics.length - 1];
    }


    toString() {
        let output = 'Course "' + this.title + '" by ' + this.trainer + '\n';
        return output + this.topics.map(t => ` * ${t.title} - ${t.date}`).join('\n');
    }
}



// let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
// console.log("" + js);