import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LucideAngularModule, Pencil,Plus} from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from "../edit-profile/edit-profile.component";
import { NewVacancyComponent } from '../new-vacancy/new-vacancy.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, EditProfileComponent,NewVacancyComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isEditProfileOpen = false;
  isCreateJobOpen = false;
  activeTab = 'profile';
  Pencil = Pencil;
  Plus = Plus
  showModal = false;
  isCreateJobOpenv = false;

  profileData = {
    name: 'Carlos Antonio Fernández Onofre',
    rank: 'Teniente General, Ejército de República Dominicana, ERD',
    specialization: 'Especialista en Infanteria',
    profileImage: 'multimedia/Image/onofre.png',
    experiences: [
      {
        title: 'Ministro de Defensa',
        organization: 'Ministerio de Defensa',
        period: '2024 - Presente',
        description:
          'Dirigir, coordinar y supervisar las Fuerzas Armadas (Ejército, Armada y Fuerza Aérea) para garantizar la soberanía, la seguridad nacional y el orden institucional. Además, asesora al Presidente en asuntos de defensa, administra los recursos del sector militar, representa al Ministerio ante organismos nacionales e internacionales, y lidera el Estado Mayor General para la toma de decisiones estratégicas, todo conforme a la Ley Orgánica de las Fuerzas Armadas No. 139-13.',
      },
      {
        title: 'Comandante General del Ejército de la República Dominicana',
        organization: 'Ejército de la República Dominicana',
        period: 'Agosto 2022 - Agosto 2024',
        description:
          'Lideró la institución militar, implementando reformas estructurales y fortaleciendo la capacidad operativa y el bienestar del personal militar.',
      },
      {
        title: 'Director de Inteligencia de las Fuerzas Armadas',
        organization: 'Ministerio de Defensa',
        period: 'Año no especificado',
        description:
          'Encabezó las operaciones de inteligencia militar, supervisando la recopilación y análisis de información estratégica para la seguridad nacional.',
      },
      {
        title: 'Director de Logística del Ejército de la República Dominicana',
        organization: 'Ejército de la República Dominicana',
        period: 'Año no especificado',
        description:
          'Gestionó la cadena de suministro y los recursos logísticos, asegurando el soporte eficiente a las operaciones militares.',
      },
      {
        title: 'Director de Personal del Ejército de la República Dominicana',
        organization: 'Ejército de la República Dominicana',
        period: 'Año no especificado',
        description:
          'Supervisó la administración del personal militar, incluyendo procesos de reclutamiento, formación y desarrollo profesional.',
      },
      {
        title: 'Director Administrativo del Ejército de la República Dominicana',
        organization: 'Ejército de la República Dominicana',
        period: 'Año no especificado',
        description:
          'Coordinó las actividades administrativas, optimizando los procesos internos y la gestión de recursos.',
      },
      {
        title: 'Director de Asuntos Internos del Ejército de la República Dominicana',
        organization: 'Ejército de la República Dominicana',
        period: 'Año no especificado',
        description:
          'Supervisó las investigaciones internas y garantizó el cumplimiento de las normativas y la disciplina institucional.',
      },
      {
        title: 'Director de Asuntos Haitianos de las Fuerzas Armadas',
        organization: 'Ministerio de Defensa',
        period: 'Año no especificado',
        description:
          'Gestionó las relaciones y asuntos estratégicos relacionados con Haití, promoviendo la cooperación y la seguridad en la frontera.',
      },
      {
        title: 'Director de la Radioemisora de las Fuerzas Armadas',
        organization: 'Ministerio de Defensa',
        period: 'Año no especificado',
        description:
          'Dirigió las operaciones de la emisora oficial, fortaleciendo la comunicación institucional y la difusión de información relevante.',
      },
      {
        title: 'Director del Plan Social de las Fuerzas Armadas',
        organization: 'Ministerio de Defensa',
        period: 'Año no especificado',
        description:
          'Implementó programas sociales para mejorar la calidad de vida del personal militar y sus familias.',
      },
      {
        title: 'Presidente de la Junta de Retiro y Fondo de Pensiones de las Fuerzas Armadas',
        organization: 'Ministerio de Defensa',
        period: 'Septiembre 2020 - Agosto 2022',
        description:
          'Administró los fondos de pensiones y supervisó los procesos de retiro, asegurando la sostenibilidad y el bienestar de los militares retirados.',
      },
      {
        title: 'Representante del Ejército en la Conferencia de Ejércitos Americanos',
        organization: 'Ejército de la República Dominicana',
        period: 'Años no especificados',
        description:
          'Participó en conferencias internacionales en Brasil, Argentina y Colombia, promoviendo la cooperación y el intercambio de experiencias entre ejércitos del continente.',
      }
    ],
    education: [
      {
        degree: 'Licenciatura en Ciencias Militares',
        institution: 'Academia Militar Batalla de las Carreras',
        year: '1984',
      },
      {
        degree: 'Curso de Infantería',
        institution: 'Academia Militar Batalla de las Carreras',
        year: '1984',
      },
      {
        degree: 'Curso de Artillería y Blindados',
        institution: 'Escuela de Artillería y Blindados del Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Curso de Operaciones en Áreas Urbanas Montero',
        institution: 'Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Curso de Operaciones de Montaña Cazador',
        institution: 'Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Curso de Operaciones Especiales Cimarrón',
        institution: 'Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Curso de Inteligencia Militar',
        institution: 'Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Curso Avanzado de Infantería',
        institution: 'Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Curso de Comando y Estado Mayor',
        institution: 'Ejército de República Dominicana',
        year: 'Año no especificado',
      },
      {
        degree: 'Estudios Militares',
        institution: 'Escuela de las Américas, Panamá',
        year: 'Año no especificado',
      },
      {
        degree: 'Licenciatura en Administración de Empresas y Contabilidad',
        institution: 'Institución no especificada',
        year: 'Año no especificado',
      },
      {
        degree: 'Especialización en Alta Gerencia',
        institution: 'Institución no especificada',
        year: 'Año no especificado',
      }
    ],
    skills: [
      'Liderazgo estratégico',
      'Planificación operativa',
      'Gestión de inteligencia militar',
      'Operaciones especiales',
      'Formación y entrenamiento militar',
      'Gestión administrativa y logística',
      'Relaciones internacionales y diplomacia militar',
      'Modernización y transformación institucional',
      'Cooperación interinstitucional',
      'Manejo de crisis y seguridad nacional'
    ],
 certificates: [
  {
    title: 'Curso de Conducción y Ejecución de Operaciones en Áreas Urbanizadas',
    institution: 'Primera Brigada de Infantería del Ejército de República Dominicana',
    year: '1991',
  },
  {
    title: 'Curso de Comando',
    institution: 'Escuela de las Américas, Panamá',
    year: 'Año no especificado',
  },
  {
    title: 'Curso de Artillería y Blindados',
    institution: 'Escuela de Artillería y Blindados del Ejército de República Dominicana',
    year: 'Año no especificado',
  },
  {
    title: 'Curso de Operaciones en Áreas Urbanas Montero',
    institution: 'Ejército de República Dominicana',
    year: 'Año no especificado',
  },
  {
    title: 'Curso de Operaciones de Montaña Cazador',
    institution: 'Ejército de República Dominicana',
    year: 'Año no especificado',
  },
  {
    title: 'Curso de Operaciones Especiales Cimarrón',
    institution: 'Ejército de República Dominicana',
    year: 'Año no especificado',
  },
  {
    title: 'Curso de Inteligencia Militar',
    institution: 'Ejército de República Dominicana',
    year: 'Año no especificado',
  },
  {
    title: 'Curso Avanzado de Infantería',
    institution: 'Ejército de República Dominicana',
    year: 'Año no especificado',
  },
  {
    title: 'Curso de Comando y Estado Mayor',
    institution: 'Ejército de República Dominicana',
    year: 'Año no especificado',
  }
]
  };



  openCreateJob() {
    this.isCreateJobOpen = true;
  }

  closeCreateJob() {
    this.isCreateJobOpen = false;
  }

  handleCreateJobv(data: any) {
    console.log('Vacante creada:', data);
    this.closeCreateJob();
  }



  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  handleProfileUpdate(data: any) {
    this.profileData = {
      ...this.profileData,
      ...data,
      profileImage: data.profileImage || this.profileData.profileImage,
    };

    // Puedes mostrar un toast aquí si tienes uno
    console.log('Perfil actualizado');
  }

  handleCreateJob(data: any) {
    console.log('Vacante creada:', data);
  }

  openEditProfile() {
    this.showModal = true;
  }

  closeEditProfile() {
    this.showModal = false;
  }

  saveProfile(data: any) {
    console.log('Datos guardados:', data);
    this.closeEditProfile();
  }
}
