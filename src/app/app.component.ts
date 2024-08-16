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
}