import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[autoFocus]'
})
export class AutofocusDirective implements AfterContentInit {

    @Input() public appAutoFocus: boolean = true;

    public constructor(private el: ElementRef) {

    }

    public ngAfterContentInit() {
        setTimeout(() => {
          console.log(this.el.nativeElement);
            this.el.nativeElement.focus();

        }, 2000);

    }

}
