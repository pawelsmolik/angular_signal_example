import { Component, inject, OnInit } from '@angular/core';
import { ClientEntityService, ClientEntity } from '../../Services/ClientEntityService.service';
import { AccountEntityService } from '../../Services/AccountEntityService.service';
import { every } from 'rxjs';

@Component({
  selector: 'app-ClientAccountList',
  standalone: true,
  templateUrl: './ClientAccountList.component.html',
  styleUrls: ['./ClientAccountList.component.css']
})
export class ClientAccountListComponent {

  clientService = inject(ClientEntityService)
  accountService = inject(AccountEntityService)

  getAccountNumber(_client: ClientEntity): number | undefined {
    return this.accountService.GetAll.find(a => a.ClientId == _client.Id)?.AccountNumber;
  }

  getClientAccounts(_client: ClientEntity) {
    return this.accountService.GetAll.filter(a => a.ClientId == _client.Id);
  }

  public delete(_client: ClientEntity)
  {
    this.clientService.Delete(_client.Id);

    let accountForClient = this.getClientAccounts(_client);

    accountForClient.forEach(element => {
      this.accountService.Delete(element.Id)
    });
  }

}
