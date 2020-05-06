import { DialogBox } from "../framework/dialog-box.mediator";
import { UiControl } from "../framework/ui-control";
import { Button } from "../framework/button.ui-control";
import { ListBox } from "../framework/list-box.ui-control";
import { TextBox } from "../framework/text-box.ui-control";

export class ArticlesDialogBox extends DialogBox {
    saveButton: Button;
    articlesListBox: ListBox;
    titleTextBox: TextBox;

    constructor() {
        super();

        this.saveButton = new Button(this);
        this.articlesListBox = new ListBox(this);
        this.titleTextBox = new TextBox(this);
    }

    changed(state: UiControl) {
        if(state === this.articlesListBox)
            this.articleSelected();

        else if(state === this.titleTextBox)
            this.titleChanged();
    }

    private articleSelected() {
        this.titleTextBox.content = this.articlesListBox.selection;
        this.saveButton.enable = true;
    }

    private titleChanged() {
        if(this.titleTextBox.content)
            this.saveButton.enable = true;
        else
            this.saveButton.enable = false;
    }
}
