System.config({
   transpiler: 'typescript',
   typescriptOptions: {
       emitDecoratorMetadata: true
   },
   map: {
       'app': 'app',
       'rxjs': 'node_modules/rxjs',
       '@angular': 'node_modules/@angular',
   },
   packages: {
       'app': {
           main: 'main.ts',
           defaultExtension: 'ts'
       },
       'rxjs': {
           defaultExtension: 'js'
       },
       '@angular/core': {
           main: 'core.umd.js',
           defaultExtension: 'js'
       },
       '@angular/common': {
           main: 'common.umd.js',
           defaultExtension: 'js'
       },
       '@angular/compiler': {
           main: 'compiler.umd.js',
           defaultExtension: 'js'
       },
       '@angular/router': {
           main: 'router.umd.js',
           defaultExtension: 'js'
       },
       '@angular/platform-browser': {
           main: 'platform-browser.umd.js',
           defaultExtension: 'js'
       },
       '@angular/platform-browser-dynamic': {
           main: 'platform-browser-dynamic.umd.js',
           defaultExtension: 'js'
       },
       '@angular/http': {
           main: 'http.umd.js',
           defaultExtension: 'js'
       },
   }
});