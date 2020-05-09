import { Injectable } from '@angular/core';
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = {}

  constructor() { }

  //put item in cache
  put(url: string, response: HttpResponse<any>) {
    this.requests[url] = response;
  }

  //get item from cache
  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  //remove item cache
  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  //empty whole cache
  invalidateCache(): void {
    this.requests = {};
  }

}


