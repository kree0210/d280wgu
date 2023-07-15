import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgApiService {
  constructor(private http: HttpClient) {}

  getCountryData(countryId: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }




}
