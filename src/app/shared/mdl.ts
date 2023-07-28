/**
 * Created by vadimdez on 15/07/16.
 */
import { Directive, AfterViewChecked } from '@angular/core';
let componentHandler: any;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mdl]'
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class MDL implements AfterViewChecked {
  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
