import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentItems = {};
  usedItems = {};
  trophies = {};
  selectedItemName;
  selectedTrophyName;
  // Hello Hacker friend, this is top Secret "encryption" ;-)
  stc = "SSBBTSBKVVBJVEVS";
  topSecret = "NzM0NUI=";
  theJukebokMusic = "It's a small World";

  constructor() {
    this.loadGame();
    this.launchAutoSave();
  }

  addTrophy(name) {
    this.trophies[name] = {
      taken : true,
      onPainting : false
    };
  }

  hasTrophy(name) {
    return this.trophies[name];
  }

  getCurrentItems() {
    return this.currentItems;
  }

  addItem(name, opt?) {
    this.currentItems[name] = opt ? opt : true;
  }

  hasItemBeenTaken(name) {
    return this.currentItems[name] || this.usedItems[name];
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
    this.selectedItemName = undefined;
    this.addToUsedItem(KEY_DRAWER1, this.currentItems[KEY_DRAWER1])
    delete this.currentItems[KEY_DRAWER1];
  }

  addToUsedItem(key, obj) {
    this.usedItems[key] = obj;
  }

  isInCurrentItem(item: string) {
    return this.currentItems[item];
  }

  getSelectTrophy() {
    return this.selectedTrophyName;
  }

  isTrophyOnPainting(trophyName) {
    return this.trophies[trophyName] && this.trophies[trophyName].onPainting;
  }

  // ************************
  // Specific
  // ************************

  getInvaderLetters() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
  }

  inInvaderLetter(el: string) {
    return this.getInvaderLetters().indexOf(el.toUpperCase()) != -1;
  }

  getStc() {
    return atob(this.stc);
  }

  getTopSecretCode() {
    return atob(this.topSecret)
  }


  // ************************
  // LocalStorage
  // ************************
  localStorageKey = "Saved";

  loadGame() {
    let game = localStorage.getItem(this.localStorageKey);
    if (game) {
      this.loadData(game);
    }
  }

  saveGame() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.getData()));
  }

  loadData(game: string) {
    let gameJson = JSON.parse(game);
    this.currentItems = gameJson['currentItems'];
    this.usedItems = gameJson['usedItems'];
    this.trophies = gameJson['trophees'];
  }

  getData() {
    return {
      "currentItems": this.currentItems,
      "usedItems": this.usedItems,
      "trophees": this.trophies
    };
  }

  // ************************
  // Utils
  // ************************

  playSound(sound) {
    let audio = new Audio();
    audio.src = "assets/sounds/" + sound;
    audio.load();
    audio.play();
  }

  getTheJukeBoxMusic() {
    return this.theJukebokMusic;
  }

  currentMusic;
  playMusic(musicName) {
    if (this.currentMusic) {
      this.currentMusic.pause();
    }
    this.currentMusic = new Audio();
    this.currentMusic.src = "assets/sounds/music/" + musicName;
    this.currentMusic.load();
    this.currentMusic.play();
  }

  stopCurrentMusic() {
    if (this.currentMusic) {
      this.currentMusic.pause();
    }
  }

  resetGame() {
    this.currentItems = {};
    this.usedItems = {};
    this.trophies = {};
    this.saveGame();
  }

  private launchAutoSave() {
    this.saveGame()
    setTimeout(this.launchAutoSave.bind(this), 5000);
  }
}
