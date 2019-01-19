import { CanDeactivate, Router } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Injectable } from '@angular/core';


@Injectable()

export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {
    
    canDeactivate(component: ProductDetailComponent) {
        if (component.name.dirty) {
            return window.confirm('Your changes are not saved. Still want to leave?');
        }
        else {
            return true;
        }
    }
}
