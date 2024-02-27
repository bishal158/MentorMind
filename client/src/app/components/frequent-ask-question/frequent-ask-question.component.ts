import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frequent-ask-question',
  templateUrl: './frequent-ask-question.component.html',
  styleUrls: ['./frequent-ask-question.component.css']
})
export class FrequentAskQuestionComponent {
  public button_rotate = "rotate:180deg";
  public isCollapsed1=true;
  public isCollapsed2=true;
  public isCollapsed3=true;
  public isCollapsed4=true;
  public isCollapsed5=true;
  public isCollapsed6=true;
  public isCollapsed7=true;

  rotate(){
    
  }

}
