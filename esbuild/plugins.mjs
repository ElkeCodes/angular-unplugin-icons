import Icons from 'unplugin-icons/esbuild';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default Icons({
  compiler: 'web-components',
  autoInstall: true,
  customCollections: {
    local: FileSystemIconLoader('./src/icons'),
  },
  webComponents: {
    autoDefine: true,
  },
});
