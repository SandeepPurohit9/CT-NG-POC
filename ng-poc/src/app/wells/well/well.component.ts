import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WellData } from '../well-wrapper/well-wrapper.component';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit, OnChanges {
  
  @Output() newItemEvent = new EventEmitter<WellData>();
  @Input() wellDetails: WellData = {name: '', type: '', sourceKey: ''};

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    this.createWellForm.patchValue(changes.wellDetails.currentValue)
  }

  /**
   * @description creates form for adding well && details
   */
  createWellForm = this._formBuilder.group({
    name: [this.wellDetails.name],
    type: [this.wellDetails.type],
    sourceKey: [{value: this.wellDetails.sourceKey, disabled: true}],
  });

  /**
   * @description emits updated form value for well details
   */
  onSubmit(): void
  {
    let toSend = this.createWellForm.getRawValue()
    console.log(toSend)
    if(toSend.name === '')
    {
      return
    }

    toSend.sourceKey = (toSend.sourceKey === '') ? '217635' : toSend.sourceKey

    this.newItemEvent.emit(toSend)
  }

}
