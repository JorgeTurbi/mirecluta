import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [ CommonModule,RouterModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {

  @Input() id!: string;
  @Input() title!: string;
  @Input() company!: string;
  @Input() location!: string;
  @Input() type!: string;
  @Input() requirements!: string[];
  @Input() postedDate!: string;
}
