export default {
  input: 'dist/packages/marker-spiderfier/index.js',
  output: {
    file: 'dist/packages/marker-spiderfier/marker-spiderfier.umd.js',
    name: 'ngmaps.spiderfier',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      '@angular/compiler': 'ng.compiler',
      '@angular/platform-browser': 'ng.platformBrowser',
      '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
      'rxjs/Subject': 'Rx',
      'rxjs/observable/PromiseObservable': 'Rx',
      'rxjs/operator/toPromise': 'Rx.Observable.prototype',
      'rxjs/Observable': 'Rx',
      'rxjs/Rx': 'Rx',
      '@agm/core': 'ngmaps.core',
      'ts-overlapping-marker-spiderfier': 'OMS'
    },
    sourceMap: true,
    format: 'umd',
  },
  experimentalDynamicImport: true,
  context: 'window',
  external: ['rxjs', '@angular/core', '@agm/core', 'ts-overlapping-marker-spiderfier']
}
