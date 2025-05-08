import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorksComponent } from "../works/works.component";
import { VacancyComponent } from "../vacancy/vacancy.component";


import { JoinCallActionComponent } from "../join-call-action/join-call-action.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [WorksComponent, VacancyComponent,JoinCallActionComponent, RouterModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
