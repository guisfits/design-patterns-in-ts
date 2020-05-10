import Ebook from "./ebook";
import RealEbook from "./real.ebook";

export default class ProxyEbook implements Ebook {
    private realEbook: Ebook;

    constructor(private filename: string) { }

    show() {
        if (!this.realEbook) this.realEbook = new RealEbook(this.filename);
        return this.realEbook.show();
    }

    get name() {
        return this.filename;
    }
};
