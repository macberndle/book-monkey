import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly isAuthenticated$: Observable<boolean>;
  private _isAuthenticated$: BehaviorSubject<boolean> ;

  constructor() {
    this._isAuthenticated$ = new BehaviorSubject(false);
    this.isAuthenticated$ = this._isAuthenticated$.asObservable();
  }

  get isAuthenticated() {
    return this._isAuthenticated$.value;
  }

  login() {
    this._isAuthenticated$.next(true);
  }

  logout() {
    this._isAuthenticated$.next(false);
  }
}
