import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements AfterViewInit{
  @ViewChild('backdrop',{ static: true}) backdrop!: ElementRef;
  @Input() backdropColor: string = `#00000066`;
  constructor(private _renderer: Renderer2){}
  ngAfterViewInit(): void {
    this._renderer.setStyle(this.backdrop.nativeElement, 'background-color', this.backdropColor);
  }
}
