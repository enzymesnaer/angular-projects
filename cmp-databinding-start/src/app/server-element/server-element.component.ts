import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges
  , DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck , AfterContentInit, AfterContentChecked,
AfterViewInit,AfterViewChecked{
  @Input('srvElement') element : {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading',{static:true }) header: ElementRef ;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');

  }

  ngOnInit() { 
    console.log('ngOnInit called! ');
    console.log('Text Content :' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange called!');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('ng do check called');
  }
  ngAfterContentInit(){
    console.log('ng aftercontent Init');
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ng aftercontent Checked');
  }

  ngAfterViewInit(){
    console.log('ng afterViewInit');
    console.log('Text Content :' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ng afterViewChecked');
  }
  
}
