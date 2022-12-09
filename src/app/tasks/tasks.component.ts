import {Component} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  task_title:String = ""
  sub_tasks:String[] = ["See netflix", "take a wash"]
  new_sub_task:String = ""

  adding(){
    if(this.new_sub_task !== "")
    {
      this.sub_tasks.push(this.new_sub_task)
      this.new_sub_task = ""
    }
  }

}
