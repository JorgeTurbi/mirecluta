import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule,Briefcase } from 'lucide-angular';

@Component({
  selector: 'app-new-vacancy',
  standalone: true,
  imports: [LucideAngularModule,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './new-vacancy.component.html',
  styleUrl: './new-vacancy.component.css'
})
export class NewVacancyComponent implements OnInit {

  @Input() open: boolean = false;
  @Output() onOpenChange = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<any>();

  Briefcase = Briefcase;
 form:FormGroup=null!;



  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
   this.form = this.fb.group({
      title: ['', Validators.required],
      organization: ['', Validators.required],
      location: ['', Validators.required],
      type: ['full-time', Validators.required],
      branch: ['ejercito', Validators.required],
      description: [''],
      requirements: [''],
      salary: [''],
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
      this.onOpenChange.emit(false);
    }
  }

  cancel() {
    this.onOpenChange.emit(false);
  }
}
