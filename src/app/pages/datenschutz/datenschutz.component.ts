import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LamapollComponent } from './lamapoll/lamapoll.component';

@Component({
  selector: 'app-datenschutz',
  imports: [MatTabsModule, LamapollComponent],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss',
})
export class DatenschutzComponent {}
