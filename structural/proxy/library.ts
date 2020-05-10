import Ebook from "./ebook";

export default class Library {
    private ebooks = {};

    add(ebook: Ebook) {
        this.ebooks[ebook.name] = ebook;
    }

    open(name: string): Ebook {
        return this.ebooks[name];
    }
};
