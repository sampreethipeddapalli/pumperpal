import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {

  constructor() { }
  name: string = "";
  count: number = 0;
  showtext: Boolean = true;
  list: Array<any> = [{
    id:1,
    name:"sam",
    class:1
  },{id:2,
    name:"rak",
    class:2},
  {id:3,
    name:"pav",
    class:3},
  {id:4,
    name:"priya",
    class:4}
  ,{id:5,
    name:"ssi",
    class:5} 
]
s1:Array<any>=[];
s2:Array<any>=[];
obj:Object={
data1:{company:"capgemini",experience:1,skills:"angular"},
data2:{company:"tcs",experience:1,skills:"angular"},
data3:{company:"ms",experience:1,skills:"angular"}}

  ngOnInit(): void {
  }

  show() {
    this.name ="priyanth";


  }
  increment() {
    this.count = +this.count + 1;
  }
  decrement() {
    this.count = +this.count - 1;
  }
  change() {
    this.showtext = !this.showtext;
  }
fun(){
 this.s1=Object.keys(this.obj);
 this.s2=Object.values(this.obj);
}
}
