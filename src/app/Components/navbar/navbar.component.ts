import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;
  router =inject(Router);
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;


  }

  closeMenu(): void {
     this.isMenuOpen = false;
  }

  goToRegister()
  {
    // this.isMenuOpen = false;
    this.router.navigate(['/registro']);
  }
}
