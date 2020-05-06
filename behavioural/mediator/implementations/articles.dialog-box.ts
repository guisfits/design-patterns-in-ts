import { EventHandler } from './../abstractions/event-handler';
import { Button } from "../framework/button.ui-control";
import { ListBox } from "../framework/list-box.ui-control";
import { TextBox } from "../framework/text-box.ui-control";

export class ArticlesDialogBox {
    saveButton = new Button();
    articlesListBox = new ListBox();
    titleTextBox = new TextBox();

    constructor() {
        this.articlesListBox.addEventHandler(<EventHandler>{
            handle: () => this.articleSelected()
        });

        this.titleTextBox.addEventHandler(<EventHandler> {
            handle: () => this.titleChanged()
        })
    }

    private articleSelected() {
        this.titleTextBox.content = this.articlesListBox.selection;
        this.saveButton.enable = true;
    }

    private titleChanged() {
        if (this.titleTextBox.content)
            this.saveButton.enable = true;
        else
            this.saveButton.enable = false;
    }
}
