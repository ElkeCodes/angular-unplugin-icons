# Prompts used

```
Add unplugin-icons package. You'll need to use @angular-builders/custom-esbuild to configure unplugin-icons in a custom esbuild config. You cannot use vite. Create a test component in the app that showcases 5 different icons. Do not make it dynamic, literally just use the web components for those 5 icons. Use the full icon set via @iconify/json
```

The result was not showing icons, the issue lied in how the icons were used.
The code contained imports like these:

```
import '~icons/mdi/star';
import '~icons/mdi/heart';
import '~icons/mdi/account-circle';
import '~icons/mdi/settings';
```

Which is the correct way of importing but the template contained:

```
<i-mdi-home></i-mdi-home>
<i-mdi-star></i-mdi-star>
<i-mdi-heart></i-mdi-heart>
<i-mdi-account-circle></i-mdi-account-circle>
<i-mdi-settings></i-mdi-settings>
```