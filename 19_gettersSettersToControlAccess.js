// Use getters adn setters to Control Access to an Object
class Book {
    constructor(author) {
        this._author = author;  // the _ signifies a private variable, but the variable remains public
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }   
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// getters and setters are important to hide implementation details.

