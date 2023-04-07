const getTheTitles = function(books) {
    names=new Array()
    for(book of books){
        console.log(book)
        names.push(book['title'])
        console.log(names)
    }
    return names
};

// Do not edit below this line
module.exports = getTheTitles;
