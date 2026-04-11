import Icons from 'unplugin-icons/esbuild';

export default Icons({
  compiler: 'web-components',
  autoInstall: true,
  webComponents: {
    autoDefine: true,
  },
});
