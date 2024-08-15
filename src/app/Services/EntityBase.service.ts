import { HttpClient } from '@angular/common/http';
import { effect, inject, Inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityBaseService<T> {

private httpClient = inject(HttpClient);

constructor(@Inject('url') private url: string) { }

private data = signal<T[]>([] as T[]);

public get GetAll(){
  
  return this.data.asReadonly()();
}

public Add(user: T){
  let newList = this.data();
  newList.push(user);

  this.httpClient.get<T[]>(this.url).pipe().subscribe(a => {
  this.getDataFromDb(newList);
  });
}

public Delete(idx: number){
  let newList = this.data().filter(a => (a as BaseEntity).Id != idx)

  this.httpClient.get<T[]>(this.url).pipe().subscribe(a => {
    this.getDataFromDb(newList);
  })
  
}

public Refresh(): void{
  this.getDataFromDb(null);
}

protected getDataFromDb(data: any | null){

  console.log("getDataFromDb do url:" + this.url)
  if(!data)
  {
    this.httpClient.get<T[]>(this.url).pipe().subscribe(a => {
        
        this.data.update(v => v = a);
    });
  }
  else{
    this.data.update(v => v = data);
  } 
}

}

export class BaseEntity{
  public Id: number = 0;

  constructor(id: number){
    this.Id = id;
  }

}