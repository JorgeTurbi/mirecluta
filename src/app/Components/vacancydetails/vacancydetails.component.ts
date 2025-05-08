import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule, Award, Building, Calendar, Clock, DollarSign, FileText, MapPin, User,ChevronDown, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'app-vacancydetails',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './vacancydetails.component.html',
  styleUrl: './vacancydetails.component.css'
})
export class VacancydetailsComponent {
 @Input() jobId!: string;
route = inject(ActivatedRoute);
  loading = signal(true);
  job = signal<JobDetail | null>(null);
accordionItems = [
  { key: 'item1', title: 'Proceso de selección' },
  { key: 'item2', title: 'Requisitos documentales' },
  { key: 'item3', title: 'Preguntas frecuentes' }
];

accordionState: Record<string, boolean> = {
  item1: false,
  item2: false,
  item3: false
};

  icons = {
    MapPin, Calendar, Clock, Award, FileText, User, DollarSign, Building,ChevronDown,ChevronUp
  };

  ngOnInit(): void {
     const jobId = this.route.snapshot.paramMap.get('id');

    this.jobId=jobId!;
    setTimeout(() => {
      const data = this.mockJobDetails[this.jobId];
      if (data) {
        this.job.set(data);
      }
      this.loading.set(false);
    }, 500);
  }



toggleAccordion(item: string) {
  this.accordionState[item] = !this.accordionState[item];
}

  handleApply() {
    alert('Tu postulación ha sido recibida correctamente.');
  }

  getBranchBadgeColor(branch: string): string {
    switch (branch.toLowerCase()) {
      case 'ejército': return 'bg-[#3A5311] text-white';
      case 'fuerza-aérea': return 'bg-[#0047AB] text-white';
      case 'marina': return 'bg-[#000080] text-white';
      default: return 'bg-[#001F3F] text-white';
    }
  }

  mockJobDetails: Record<string, JobDetail> = {
    // Pega aquí el mismo contenido de tus mockJobDetails del código React original
    "1": {
    id: "1",
    title: "Oficial de Operaciones Especiales",
    company: "Ejército Nacional",
    location: "Autopista Duarte Km. 25 , Campamento Militar 16 de agosto, Municipio Pedro Brand , R.D.",
    type: "Tiempo Completo",
    requirements: [
      "Grado militar mínimo: Teniente",
      "5 años de experiencia en operaciones tácticas",
      "Formación en paracaidismo militar",
      "Certificación en manejo de crisis y toma de decisiones bajo presión",
      "Excelente condición física y mental"
    ],
    description: "Buscamos un oficial experimentado para liderar operaciones especiales en terrenos complejos. El candidato ideal debe tener experiencia en planificación estratégica, liderazgo de equipos tácticos y capacidad para tomar decisiones en situaciones de alto riesgo.",
    responsibilities: [
      "Planificar y ejecutar operaciones tácticas especiales",
      "Liderar equipos de hasta 20 efectivos en misiones complejas",
      "Desarrollar estrategias de intervención en diversas situaciones",
      "Capacitar al personal en técnicas avanzadas de combate",
      "Realizar informes detallados post-operación"
    ],
    benefits: [
      "Bonificación por riesgo",
      "Seguro médico y de vida superior",
      "Programa de desarrollo profesional avanzado",
      "Posibilidad de ascenso acelerado",
      "30 días de vacaciones anuales"
    ],
    postedDate: "14/05/2025",
    salary: "$4,500,000 - $5,500,000 RD$/mes",
    branch: "ejército",
    applicationDeadline: "28/06/2025"
  },
  "2": {
    id: "2",
    title: "Instructor de Entrenamiento Táctico",
    company: "Fuerza Aérea",
    location: "Santo Domingo Este, R.D.",
    type: "Contrato",
    requirements: [
      "Experiencia en instrucción militar",
      "Conocimientos avanzados en tácticas de combate",
      "Certificación como instructor militar",
      "Mínimo 3 años como formador en entornos militares",
      "Capacidad para desarrollar programas de entrenamiento"
    ],
    description: "La Fuerza Aérea busca un instructor experimentado para desarrollar e implementar programas de entrenamiento táctico para nuevos reclutas y personal en servicio. Se requiere experiencia comprobada en formación militar y excelentes habilidades comunicativas.",
    responsibilities: [
      "Diseñar programas de entrenamiento táctico adaptados",
      "Impartir formación teórica y práctica",
      "Evaluar el desempeño de los participantes",
      "Actualizar continuamente los contenidos formativos",
      "Coordinar con otros instructores para garantizar coherencia"
    ],
    benefits: [
      "Contrato renovable anualmente",
      "Compensación competitiva",
      "Acceso a instalaciones militares para desarrollo profesional",
      "Posibilidad de evolución a contrato permanente",
      "Flexibilidad horaria parcial"
    ],
    postedDate: "12/05/2025",
    salary: "$3,800,000 - $4,500,000 RD$/mes",
    branch: "fuerza-aérea",
    applicationDeadline: "15/06/2025"
  },
  "3": {
    id: "3",
    title: "Especialista en Comunicaciones",
    company: "Armada de Republica Dominicana A.R.D.",
    location: "Base Naval de Santo Domingo Este, R.D.",
    type: "Tiempo Completo",
    requirements: [
      "Título en ingeniería de telecomunicaciones",
      "3 años de experiencia en sistemas de comunicación militar",
      "Conocimientos en seguridad informática",
      "Experiencia con sistemas de comunicación satelital",
      "Nivel de inglés avanzado"
    ],
    description: "Responsable de mantener, optimizar y garantizar la seguridad de los sistemas de comunicación navales. El candidato trabajará en entornos operativos diversos, asegurando la integridad y confidencialidad de las comunicaciones militares.",
    responsibilities: [
      "Gestionar los sistemas de comunicación tácticos y estratégicos",
      "Implementar protocolos de seguridad para comunicaciones sensibles",
      "Solucionar problemas técnicos en tiempo real",
      "Capacitar al personal en el uso adecuado de equipos de comunicación",
      "Mantenerse actualizado sobre nuevas tecnologías y amenazas"
    ],
    benefits: [
      "Estabilidad laboral",
      "Plan de carrera definido",
      "Acceso a tecnología de punta",
      "Oportunidades de especialización internacional",
      "Bonificaciones por rendimiento"
    ],
    postedDate: "10/05/2025",
    salary: "$4,200,000 - $5,000,000 RD$/mes",
    branch: "marina",
    applicationDeadline: "20/06/2025"
  }
  };
}

interface JobDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  requirements: string[];
  postedDate: string;
  description: string;
  responsibilities: string[];
  benefits: string[];
  salary: string;
  branch: string;
  applicationDeadline: string;
}
