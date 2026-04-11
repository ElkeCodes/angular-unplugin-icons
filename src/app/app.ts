import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconShowcase } from './icon-showcase/icon-showcase';

@Component({
  selector: 'app-root',
  imports: [IconShowcase],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
