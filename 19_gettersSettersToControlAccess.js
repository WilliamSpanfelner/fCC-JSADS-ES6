// Use getters adn setters to Control Access to an Object
class Book {
    constructor(author) {
        this.author = author;
    }
    // getter
    get writer() {
        return this.author;
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