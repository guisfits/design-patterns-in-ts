import Ebook from "./ebook";

export default class RealEbook implements Ebook {
    constructor(private fileName: string) {
        this.load();
    }

    get name() {
        return this.fileName;
    }

    show() {
        return "showing the ebook " + this.fileName;
    }

    private load() {
        return "loading the ebook " + this.fileName;
    }
};
