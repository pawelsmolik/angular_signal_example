import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityBaseService<T> {

private httpClient = inject(HttpClient);

constructor(@Inject('url') private url: string) { }

private getBaseUrl(): string{
  return "https://localhost:7235/";
}

private entityData = signal<T[]>([] as T[]);

public get GetAll(): T[] {
  return this.entityData.asReadonly()();
}

public Add(element: T){
  this.httpClient.post<T[]>(this.getBaseUrl() + this.url, element).pipe().subscribe(a => {  
    this.fetchDataFromDb(null);
  });
}

public Delete(idx: number){
  this.httpClient.delete<T[]>(this.getBaseUrl() + this.url, {
    params: {"id": idx}
  }).pipe().subscribe(a => {
    this.fetchDataFromDb(null);
  })
}

public Refresh(): void{
  this.fetchDataFromDb(null);
}

protected fetchDataFromDb(data: any | null){

  console.log("getDataFromDb do url:" + this.url)
  this.httpClient.get<T[]>(this.getBaseUrl() + this.url).pipe().subscribe(a => {
    this.entityData.update(v => v = a);
  });
}

}

export class BaseEntity{
  public id: number = 0;

  constructor(id: number){
    this.id = id;
  }

}