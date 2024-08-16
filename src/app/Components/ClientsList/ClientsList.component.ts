import { Component, inject, OnInit } from '@angular/core';
import { ClientEntityService, ClientEntity } from '../../Services/ClientEntityService.service';
import { AccountEntityService } from '../../Services/AccountEntityService.service';

@Component({
  selector: 'app-ClientsList',
  standalone: true,
  templateUrl: './ClientsList.component.html',
  styleUrls: ['./ClientsList.component.css']
})
export class ClientsListComponent {

public refresh(): void {
  this.clientEntityService.Refresh();
}

  clientEntityService = inject(ClientEntityService)
  accountEntityService = inject(AccountEntityService)

  public addClient(): void{
    let user = new ClientEntity(Math.round(Math.random() * 1000000), generateGUID(), generateGUID());
    this.clientEntityService.Add(user);
  }

  public deleteClient(idx: number)
  {
    this.clientEntityService.Delete(idx);
  }

}

function generateGUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0,
  v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
  });
  }