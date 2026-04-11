import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';

import '~icons/mono-icons/layers';
import '~icons/ion/logo-web-component';

@Component({
  selector: 'app-icon-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: `
    :host {
      display: flex;
      gap: 1rem;
      padding: 2rem;
      font-size: 3rem;
    }
  `,
  templateUrl: './icon-showcase.html',
})
export class IconShowcase {}
