import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';

import '~icons/mono-icons/layers';
import '~icons/ion/logo-web-component';
import '~icons/mdi/apple-icloud';
import '~icons/local/react-logo';
import '~icons/local/vue-logo';

@Component({
  selector: 'app-icon-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './icon-showcase.html',
  styleUrl: './icon-showcase.css',
})
export class IconShowcase {}
