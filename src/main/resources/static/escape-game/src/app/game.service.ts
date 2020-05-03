import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentItems = {};
  usedItems = {};
  selectedItemName;
  constructor() { }

  getCurrentItems() {
    return this.currentItems;
  }

  addToItem(name) {
    this.currentItems[name] = true;
  }

  hasItemBeenTaken(name) {
    return this.currentItems[name] || this.usedItems[name];
  }
  isInCurrentItems(name) {
    return this.currentItems[name];
  }
  hasItemBeenUsed(name) {
    return this.usedItems[name];
  }

  selectItem(name) {
    this.selectedItemName = this.isItemSelected(name) ? undefined : name;
  }
  isItemSelected(name) {
    return this.selectedItemName == name
  }

  useItem(KEY_DRAWER1: string) {
    this.usedItems[KEY_DRAWER1] = this.currentItems[KEY_DRAWER1];
    delete this.currentItems[KEY_DRAWER1];
  }
}
