import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DynamicSection } from '../../shared/dynamic-comp.model';
import { PlaceHolderDirective } from '../../shared/place-holder.directive';
import { DragDataService } from '../drag-data.service';


@Component({
  selector: 'app-drag-wrapper',
  templateUrl: './drag-wrapper.component.html',
  styleUrls: ['./drag-wrapper.component.css']
})

export class DragWrapperComponent implements OnInit {
  // public dynamicSections: DynamicSection[] = [
  //   { id: 'app-btn', component: BtnComponent,  name: 'Button' },
  //   { id: 'app-txtbox', component: TxtboxComponent,name: 'Text box' },
  // ];
  
  @ViewChild(PlaceHolderDirective) alertHost!: PlaceHolderDirective;
  public dynamicSections: DynamicSection[] = [];
  
  constructor(
    private ComponentFactoryResolver: ComponentFactoryResolver,
    private dragDataService: DragDataService
  ) { 
    this.dynamicSections = this.dragDataService.sections
  }

  ngOnInit(): void {
  }

  /**
   * @description creates dynamic components using component id
   * @param compId 
   */
  createDynamicSection(compId: string) {
    const renderingComp = this.dynamicSections.find(cmp => cmp.id === compId)
    const componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(renderingComp?.component);
    this.alertHost.ViewContainerRef.clear();
    const componentRef = this.alertHost.ViewContainerRef.createComponent(componentFactory);
   }

   /**==============================
    * Drag & drop events callbacks
    ==============================*/
   drop(event: any) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log(data)
    this.createDynamicSection(data)
    }

   drag(event: any, section: DynamicSection) {
    console.log('drageve', section)
    event.dataTransfer.setData("text", section.id);
    }
    
    allowDrop(event: any) {
      event.preventDefault();
    }

   
}
