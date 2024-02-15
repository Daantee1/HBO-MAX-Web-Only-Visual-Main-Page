import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualService {

  constructor() { }

  isBlur = new BehaviorSubject<boolean>(false);
}
