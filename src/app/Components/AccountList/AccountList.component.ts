import { Component, inject, OnInit } from '@angular/core';
import { AccountEntityService } from '../../Services/AccountEntityService.service';

@Component({
  selector: 'app-AccountList',
  standalone: true,
  templateUrl: './AccountList.component.html',
  styleUrls: ['./AccountList.component.css']
})
export class AccountListComponent {

  accountEntityService = inject(AccountEntityService)

  deleteAccount(accountId: number) {
    this.accountEntityService.Delete(accountId);
  }

}
