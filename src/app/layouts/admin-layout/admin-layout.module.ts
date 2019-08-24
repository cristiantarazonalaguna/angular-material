import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,

} from '@angular/material';
import {BarListComponent} from '../../pages/bar-list/bar-list.component';
import {BarFormComponent} from '../../pages/bar-list/bar-form/bar-form.component';
import {ServiceService} from '../../services/service.service';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FooListComponent} from '../../pages/foo-list/foo-list.component';
import {FooFormComponent} from '../../pages/foo-list/foo-form/foo-form.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    NgbDatepickerModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BarListComponent,
    BarFormComponent,
    FooListComponent,
    FooFormComponent
  ],
  providers: [ServiceService,DatePipe],
})

export class AdminLayoutModule {}
