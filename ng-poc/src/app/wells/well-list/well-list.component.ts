import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WellData } from '../well-wrapper/well-wrapper.component';



@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})

export class WellListComponent implements OnInit {
 @Input() wells: WellData[] = []
 @Output() selectedItem = new EventEmitter<WellData>();
  
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description emits value based on selected well index 
   * @param idx 
   */
  viewSelected(idx: number) {
    const selectedWell = this.wells[idx]
    console.log(selectedWell)
    this.selectedItem.emit(selectedWell)
  }
}
