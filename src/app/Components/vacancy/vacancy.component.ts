import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from "../vacancy-list/vacancy-list.component";
import { IVacancy } from './IVcancy';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule,Search  } from 'lucide-angular';


@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule ,VacancyListComponent,FormsModule,LucideAngularModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
Search =Search ;
searchTerm: string = '';


filteredJobs(): IVacancy[] {
  const term = this.searchTerm.toLowerCase();
  return this.jobsData.filter(job =>
    job.title.toLowerCase().includes(term) ||
    job.company.toLowerCase().includes(term) ||
    job.location.toLowerCase().includes(term)
  );
}

  public jobsData :IVacancy[] = [
    {
      id: '1',
      title: 'Oficial de Operaciones Especiales',
      company: 'Ejército Nacional',
      location: 'Autopista Duarte Km. 25 , Campamento Militar 16 de agosto, Municipio Pedro Brand , R.D.',
      type: 'Tiempo Completo',
      requirements: [
        'Grado militar mínimo: Teniente',
        '5 años de experiencia en operaciones tácticas',
        'Formación en paracaidismo militar'
      ],
      postedDate: '14/05/2025'
    },
    {
      id: '2',
      title: 'Instructor de Entrenamiento Táctico',
      company: 'Fuerza Aérea',
      location: 'Santo Domingo Este, RD',
      type: 'Contrato',
      requirements: [
        'Experiencia en instrucción militar',
        'Conocimientos avanzados en tácticas de combate',
        'Certificación como instructor militar'
      ],
      postedDate: '12/05/2025'
    },
    {
      id: '3',
      title: 'Especialista en Comunicaciones',
      company: 'Armada de República Dominicana, A.R.D.',
      location: 'Base Naval, Santo Domingo Este, RD',
      type: 'Tiempo Completo',
      requirements: [
        'Título en ingeniería de telecomunicaciones',
        '3 años de experiencia en sistemas de comunicación militar',
        'Conocimientos en seguridad informática'
      ],
      postedDate: '10/05/2025'
    }
  ];
}
