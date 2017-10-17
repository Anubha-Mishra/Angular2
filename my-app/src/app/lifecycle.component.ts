import { Component, OnInit,OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `<h2>Life Cycle hook concepts</h2>`
})
export class LifecycleComponent implements OnInit ,OnChanges{

  constructor() { }

  ngOnInit() {
      var i=20;
     console.log("on init called angular started"+i);
  }
  

  ngOnChanges(){
    console.log("test");
  }

}
