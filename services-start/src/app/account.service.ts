import {LoggingService} from './logging.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'TestAccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor (private loggingService: LoggingService) {}

  addAccount(newAccount: {name: string, status: string}) {
      this.accounts.push(newAccount);
      this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
      this.accounts[id].status = status;
      this.loggingService.logStatusChange(status);
  }
}
