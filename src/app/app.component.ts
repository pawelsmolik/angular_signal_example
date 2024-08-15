import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientEntityService, ClientEntity } from './Services/ClientEntityService.service';
import { CommonModule } from '@angular/common';
import { AccountEntity, AccountEntityService } from './Services/AccountEntityService.service';
import { ClientsListComponent } from './Components/ClientsList/ClientsList.component';
import { AccountListComponent } from "./Components/AccountList/AccountList.component";
import { ClientAccountListComponent } from "./Components/ClientAccountList/ClientAccountList.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ClientsListComponent, 
    AccountListComponent, ClientAccountListComponent],
  providers: [ClientEntityService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularSignalExample';

  userEntityService = inject(ClientEntityService)
  accountEntityService = inject(AccountEntityService)

  public addUser(): void{
    let user = new ClientEntity(Math.round(Math.random() * 1000000), generateGUID(), generateGUID());
    this.userEntityService.Add(user);

    let account = new AccountEntity(Math.round(Math.random() * 1000000), user.Id, Math.round(Math.random() * 1000000))
    this.accountEntityService.Add(account);
  }

  public deleteUser(idx: number)
  {
    this.userEntityService.Delete(idx);
  }
}

function generateGUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0,
  v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
  });
  }