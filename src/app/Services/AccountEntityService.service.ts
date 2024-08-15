import { Injectable } from '@angular/core';
import { BaseEntity, EntityBaseService } from './EntityBase.service';

@Injectable({
  providedIn: 'root'
})
export class AccountEntityService extends EntityBaseService<AccountEntity> {

constructor() { 
  super("/accounts.json");
  this.getDataFromDb(null);
}

}

export class AccountEntity extends BaseEntity{
  public ClientId: number = 0;
  public AccountNumber: number = 0;

  constructor(id: number, clientId: number, accountNumber: number){
    super(id)
    this.ClientId = clientId;
    this.AccountNumber = accountNumber;
  }
}
