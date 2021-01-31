class Cs142TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary){
        let tempTemplate = this.template;
        for(const [key, value] of Object.entries(dictionary)){
            const tempKey = "{{" + key + "}}";
            if (tempTemplate.includes(tempKey)){
                tempTemplate = tempTemplate.replace(tempKey, value)
            }
        }

        let non_matches = tempTemplate.match(/({{.*?}})/g);
        if (non_matches !== null){
            for(const match of non_matches){
                tempTemplate = tempTemplate.replace(match, "");
            }
        }

        return tempTemplate;
    }
}
//
//
// var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
// var dateTemplate = new Cs142TemplateProcessor(template);
//
// var dictionary = {month: 'July', day: '1', year: '2016'};
// var str = dateTemplate.fillIn(dictionary);
//
// console.log(str === 'My favorite month is July but not the day 1 or the year 2016');
//
// //Case: property doesn't exist in dictionary
// var dictionary2 = {day: '1', year: '2016'};
// var str = dateTemplate.fillIn(dictionary2);
//
// console.log(str === 'My favorite month is  but not the day 1 or the year 2016');