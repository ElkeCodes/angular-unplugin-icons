import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

import '~icons/mono-icons/layers';
import '~icons/ion/logo-web-component';
import '~icons/mdi/apple-icloud';
import '~icons/local/react-logo';
import '~icons/local/vue-logo';

import RawMdiAlarmOffIcon from '~icons/mdi/alarm-off?raw&width=4em&height=4em';
import RawBasilLightningOutlineIcon from '~icons/basil/lightning-outline?raw&width=3em&height=3em';
import RawPixelGamingIcon from '~icons/pixel/gaming?raw&width=2em&height=2em';
import { SafeHtmlPipe } from './safe-html.pipe';

@Component({
  selector: 'app-icon-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppIcon, SafeHtmlPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './icon-showcase.html',
  styleUrl: './icon-showcase.css',
})
export class IconShowcase {
  readonly alarmOffIcon = RawMdiAlarmOffIcon as string;
  readonly lightningIcon = RawBasilLightningOutlineIcon as string;
  readonly gamingIcon = RawPixelGamingIcon as string;
}
