import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, input } from '@angular/core';

import '~icons/mono-icons/layers';
import '~icons/ion/logo-web-component';
import '~icons/mdi/apple-icloud';
import '~icons/local/react-logo';
import '~icons/local/vue-logo';

export type AppIconName =
  | 'mono-layers'
  | 'ion-web-component'
  | 'mdi-apple-icloud'
  | 'local-react-logo'
  | 'local-vue-logo';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @switch (name()) {
      @case ('mono-layers') {
        <icon-mono-icons-layers aria-hidden="true"></icon-mono-icons-layers>
      }
      @case ('ion-web-component') {
        <icon-ion-logo-web-component aria-hidden="true"></icon-ion-logo-web-component>
      }
      @case ('mdi-apple-icloud') {
        <icon-mdi-apple-icloud aria-hidden="true"></icon-mdi-apple-icloud>
      }
      @case ('local-react-logo') {
        <icon-local-react-logo aria-hidden="true"></icon-local-react-logo>
      }
      @case ('local-vue-logo') {
        <icon-local-vue-logo aria-hidden="true"></icon-local-vue-logo>
      }
    }
  `,
})
export class AppIcon {
  readonly name = input.required<AppIconName>();
}
