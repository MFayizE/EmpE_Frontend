import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private openSubject = new BehaviorSubject<boolean>(true);
  open$ = this.openSubject.asObservable();

  
  toggleMenu() {
    this.openSubject.next(!this.openSubject.getValue());
  }
  setIsMobile(isMobile: boolean) {
    this.openSubject.next(isMobile);
  }
}
