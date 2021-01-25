function cs142MakeMultiFilter (originalArray){
    let currentArray = Array.from(originalArray);

    function arrayFilterer (filterCriteria, callback){
        let counter = 0

        if (typeof filterCriteria !== 'function'){
            return currentArray;
        }

        while(counter !== currentArray.length){
            if(!filterCriteria(currentArray[counter])){
                currentArray.splice(counter, 1);
                continue;
            }
            counter++;
        }
        if(typeof callback === 'function') {
            callback.call(originalArray, currentArray)
        }
        return arrayFilterer;
    }
    return arrayFilterer;
}