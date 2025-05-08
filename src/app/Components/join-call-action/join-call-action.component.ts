import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-join-call-action',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './join-call-action.component.html',
  styleUrl: './join-call-action.component.css'
})
export class JoinCallActionComponent {
router=inject(Router);

  goToRegister()
  {

    this.router.navigate(['/registro']);
  }
}
