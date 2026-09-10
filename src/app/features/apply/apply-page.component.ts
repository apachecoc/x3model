import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApplicationService } from '@core/services/application.service';
import { ProfileCategory, ProfileTier } from '@core/models/talent-profile.model';

@Component({
  selector: 'x3-apply-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './apply-page.component.html',
  styleUrl: './apply-page.component.scss',
})
export class ApplyPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly applications = inject(ApplicationService);

  readonly categories: ProfileCategory[] = ['Presencial', 'Virtual', 'Eventos', 'Masajes', 'Contenido'];
  readonly tiers: ProfileTier[] = ['VIP', 'Premium', 'Gold', 'Silver', 'Iniciadas'];
  readonly cities = ['Santiago', 'Vina del Mar', 'Concepcion', 'Valparaiso'];
  readonly status = signal('');
  readonly workflow = [
    {
      title: '1. Creas tu solicitud',
      text: 'La persona completa su alias, ciudad, categoria, nivel solicitado y contacto de revision.',
    },
    {
      title: '2. Sube y edita su borrador',
      text: 'Luego podra cargar fotos, videos cortos y texto, pero todo queda como borrador pendiente.',
    },
    {
      title: '3. Administracion aprueba',
      text: 'El equipo revisa edad, consentimiento, calidad de imagen, nivel, categoria y publicacion final.',
    },
  ];
  readonly tierDescriptions: Array<{ name: ProfileTier; idealFor: string; control: string }> = [
    {
      name: 'VIP',
      idealFor: 'Perfiles con produccion cuidada, rostro o identidad visual fuerte y prioridad comercial.',
      control: 'Requiere revision completa, galeria premium y aprobacion manual de portada.',
    },
    {
      name: 'Premium',
      idealFor: 'Publicaciones destacadas con buena galeria, disponibilidad clara y perfil trabajado.',
      control: 'Requiere fotos consistentes, descripcion validada y medios aprobados.',
    },
    {
      name: 'Gold',
      idealFor: 'Perfiles confiables que necesitan visibilidad sin estar en el nivel superior.',
      control: 'Requiere identidad verificada y material suficiente para publicacion.',
    },
    {
      name: 'Silver',
      idealFor: 'Perfiles iniciales o discretos con presencia simple y controlada.',
      control: 'Requiere datos minimos, consentimiento y revision de fotos.',
    },
    {
      name: 'Iniciadas',
      idealFor: 'Talentos nuevos que quieren probar recepcion antes de invertir en un perfil mayor.',
      control: 'Ideal para empezar con pocas fotos, reglas claras y upgrade posterior.',
    },
  ];

  readonly form = this.fb.nonNullable.group({
    alias: ['', [Validators.required, Validators.minLength(2)]],
    city: ['', Validators.required],
    category: ['', Validators.required],
    tier: ['', Validators.required],
    contact: ['', Validators.required],
    message: [''],
    ageConfirmed: [false, Validators.requiredTrue],
    consentConfirmed: [false, Validators.requiredTrue],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('Faltan datos obligatorios para enviar la postulacion.');
      return;
    }

    const value = this.form.getRawValue();
    const created = this.applications.createApplication({
      alias: value.alias,
      city: value.city,
      category: value.category as ProfileCategory,
      desiredTier: value.tier as ProfileTier,
      contact: value.contact,
      message: value.message,
      ageConfirmed: value.ageConfirmed,
      consentConfirmed: value.consentConfirmed,
    });

    this.status.set(`${created.alias} quedo en la bandeja editorial demo. Luego se conecta a Firestore.`);
    this.form.reset();
  }
}
