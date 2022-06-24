import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  get(key: string): any {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '{}') : null;
  }

  set(key: string, value: any): void {
    this.remove(key);
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
