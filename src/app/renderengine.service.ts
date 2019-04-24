import { ComponentFactory, ComponentFactoryResolver, ViewContainerRef, Injectable } from '@angular/core';
@Injectable()
export class RenderengineService {
  private rootViewContainer: ViewContainerRef;
  private componentFactory: ComponentFactory<any>;
  private componentReference;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(view: ViewContainerRef): void {    this.rootViewContainer = view;
  }

  public createDynamicComponent(content, type: any) {
    console.log(content);
    console.log(type);
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
    this.componentReference = this.rootViewContainer.createComponent(this.componentFactory);
    this.componentReference.instance.contentOnCreate(content);

        // this.componentReference.instance.color = 'green';        this.componentReference.instance.isItalic = true;
        // this.componentReference.instance.isBold = true;
  }

}
