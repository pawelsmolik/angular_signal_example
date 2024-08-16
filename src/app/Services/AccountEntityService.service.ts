import { Injectable } from '@angular/core';
import { BaseEntity, EntityBaseService } from './EntityBase.service';

@Injectable({
  providedIn: 'root'
})
export class AccountEntityService extends EntityBaseService<AccountEntity> {

constructor() { 
  super("accounts");
  this.fetchDataFromDb(null);
}

}

export class AccountEntity extends BaseEntity{
  public clientId: number = 0;
  public accountNumber: number = 0;

  constructor(id: number, clientId: number, accountNumber: number){
    super(id)
    this.clientId = clientId;
    this.accountNumber = accountNumber;
  }
}
