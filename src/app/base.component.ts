import { AfterViewChecked, Component, Directive, DoCheck, ElementRef, HostBinding, NgZone, OnInit } from "@angular/core";

@Directive({})
export abstract class BaseComponent implements OnInit, DoCheck {

    constructor(protected zone: NgZone, protected elRef: ElementRef) {}

    ngOnInit(): void {}

    ngDoCheck(): void {
        console.log('Do check: '+ this.constructor.name);
    }

    protected cdTriggered(): void {
        this.zone.runOutsideAngular(() => {
            this.elRef.nativeElement.style.backgroundColor = '#eb5490';
            setTimeout(() => {this.elRef.nativeElement.style.backgroundColor = 'white';}, 1000)
        })
    }
}
