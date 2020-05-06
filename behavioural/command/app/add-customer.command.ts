import { CustomerService } from './customer-service';
import { Command } from '../framework/command';

// Concrete Command
export class AddCustomer implements Command {
    constructor(private service: CustomerService) { }

    execute() {
        return this.service.addCustomer();
    }
}
