import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

 //@Input() public parentData: any;
 @Input('parentData') public name: any;
 @Output() public childEvent = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('hello');
  }

}

