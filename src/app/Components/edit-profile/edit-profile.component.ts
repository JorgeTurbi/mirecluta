import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule,Plus, Trash } from 'lucide-angular';
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,LucideAngularModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() open: boolean = false;
  @Input() profileData: any;
  @Output() onOpenChange = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<any>();
  Plus = Plus;
  Trash = Trash;
  form: FormGroup;
  certificates = signal<Array<{ name: string; file: File | null }>>([]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      rank: ['', Validators.required],
      specialization: ['', Validators.required],
      profileImage: ['']
    });
  }

  ngOnChanges() {
    if (this.profileData) {
      this.form.patchValue({
        name: this.profileData.name,
        rank: this.profileData.rank,
        specialization: this.profileData.specialization,
        profileImage: this.profileData.profileImage
      });
    }
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'miltimedia/image/noimage.png';
  }

  handleAddCertificate() {
    this.certificates.set([...this.certificates(), { name: '', file: null }]);
  }

  handleCertificateNameChange(index: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const name = target.value;

    const updated = [...this.certificates()];
    updated[index].name = name;
    this.certificates.set(updated);
  }


  handleCertificateFileChange(index: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] || null;

    const updated = [...this.certificates()];
    updated[index].file = file;
    this.certificates.set(updated);
  }

  handleRemoveCertificate(index: number) {
    const updated = [...this.certificates()];
    updated.splice(index, 1);
    this.certificates.set(updated);
  }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.form.patchValue({ profileImage: URL.createObjectURL(file) });
    }
  }

  submit() {
    const updatedData = {
      ...this.form.value,
      certificates: this.certificates()
    };
    this.onSave.emit(updatedData);
    this.onOpenChange.emit(false);
  }

  cancel() {
    this.onOpenChange.emit(false);
  }
}
