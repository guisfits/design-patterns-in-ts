import { Component } from './component';

export class Group implements Component {
    components: Component[] = [];

    add(component: Component) {
        this.components.push(component);
    }

    render(): void {
        this.components.forEach(x => x.render());
    }
}
