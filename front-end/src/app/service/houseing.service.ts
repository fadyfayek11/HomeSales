import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { property } from '../property/property.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseingService {

constructor(private http: HttpClient) { }
getAllProperties(Seles: number): Observable<property[]>{
  return this.http.get('data/properties.json').pipe(
    map(data => {
      const properties: Array<property> = [];
      for (const id in data)
      {
        if (data.hasOwnProperty(id) && data[id].SelesFalg === Seles)
        {
          properties.push(data[id]);
        }
      }
      return properties;
    })
  );
  }
}
