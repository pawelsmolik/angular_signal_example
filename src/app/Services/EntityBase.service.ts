import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityBaseService<T> {

private httpClient = inject(HttpClient);

constructor(@Inject('url') private url: string) { }

private entityData = signal<T[]>([] as T[]);

public get GetAll(): T[] {
  return this.entityData.asReadonly()();
}

public Add(element: T){
  let newList = this.entityData();
  newList.push(element);
  this.httpClient.get<T[]>(this.url).pipe().subscribe(a => {  
    this.fetchDataFromDb(newList);
  });
}

public Delete(idx: number){
  let newList = this.entityData().filter(a => (a as BaseEntity).Id != idx)
  this.httpClient.get<T[]>(this.url).pipe().subscribe(a => {
    this.fetchDataFromDb(newList);
  })
}

public Refresh(): void{
  this.fetchDataFromDb(null);
}

protected fetchDataFromDb(data: any | null){

  console.log("getDataFromDb do url:" + this.url)
  if(!data)
  {
    this.httpClient.get<T[]>(this.url).pipe().subscribe(a => {
        this.entityData.update(v => v = a);
    });
  }
  else{
    this.entityData.update(v => v = data);
  } 
}

}

export class BaseEntity{
  public Id: number = 0;

  constructor(id: number){
    this.Id = id;
  }

}