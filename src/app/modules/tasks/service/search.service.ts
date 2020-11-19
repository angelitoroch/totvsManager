import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PoLookupFilter,
  PoLookupFilteredItemsParams,
} from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements PoLookupFilter{
  baseURL = environment.apiURL + '/tasks/';
  
  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.baseURL,{ params })
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${value}`);
  }
}
