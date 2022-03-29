import { Component, OnInit } from '@angular/core';


export interface WellData {
  name?: string,
  type?: string,
  sourceKey?: string
}

@Component({
  selector: 'app-well-wrapper',
  templateUrl: './well-wrapper.component.html',
  styleUrls: ['./well-wrapper.component.css']
})
export class WellWrapperComponent implements OnInit {
 
  wells: WellData[] = [
    {name : 'TestRls01', type: 'rls', sourceKey: '129012'},
    {name : 'TestEsp01', type: 'esp', sourceKey: '254672'},
    {name : 'TestRls02', type: 'rls', sourceKey: '128383'},
  ]
  
  wellDetails: WellData = {}
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description adds new item to well list based on `onAddNewItem` emitter
   * @param event 
   */
  onAddNewItem(event: WellData){
    console.log(`got it ${JSON.stringify(event)}`)
    this.wells.push(event)
  }

  /**
   * @description updates well details based on `onViewSelectedItem` emitter
   * @param event 
   */
  onViewSelectedItem(event: WellData){
    this.wellDetails = event
  }

}
