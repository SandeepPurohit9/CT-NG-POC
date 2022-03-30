import { Injectable } from '@angular/core';
import { BtnComponent } from '../shared/btn/btn.component';
import { DynamicSection } from '../shared/dynamic-comp.model';
import { TxtboxComponent } from '../shared/txtbox/txtbox.component';

@Injectable({
  providedIn: 'root'
})
export class DragDataService {

  public sections: DynamicSection[] = [
    { id: 'app-btn', component: BtnComponent,  name: 'Button' },
    { id: 'app-txtbox', component: TxtboxComponent,name: 'Text box' },
  ];
  constructor() { }
}
