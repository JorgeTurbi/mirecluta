import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LucideAngularModule, User, Briefcase, GraduationCap } from 'lucide-angular';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './works.component.html',
})
export class WorksComponent {
  User= User;
  Briefcase= Briefcase;
  GraduationCap= GraduationCap;

}
