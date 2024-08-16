import { effect, inject, Injectable } from '@angular/core';
import { BaseEntity, EntityBaseService } from './EntityBase.service';
import { AccountEntityService } from './AccountEntityService.service';

@Injectable({
  providedIn: 'root'
})
export class ClientEntityService extends EntityBaseService<ClientEntity> {

accountService = inject(AccountEntityService)

constructor(){
  super("/clients.json");
  this.fetchDataFromDb(null);

  effect(() => {
    console.log(`ClientEntityService Effect: ${this.GetAll}`);
    this.accountService.Refresh();
  });
  
}
}

export class ClientEntity extends BaseEntity{
  public FirstName: string = "";
  public LastName: string = "";

  constructor(id: number, firstName: string, lastName: string){
    super(id)
    this.FirstName = firstName;
    this.LastName = lastName;
  }
}