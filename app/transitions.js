export default function() {
  this.transition(
    this.fromRoute('path.index'),
    this.toRoute('path.place'),
    this.useAndReverse('crossFade')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('path'),
    this.useAndReverse('explode', {
      matchBy: 'data-toolbar',
      use: ['fly-to']
    },
    // {
    //   matchBy: 'data-path-image',
    //   use: ['fly-to']
    // },
    {
      use: ['crossFade']
    })
  );


// this.transition(
//   this.fromRoute('index'),
//   this.toRoute('path'),
//   this.useAndReverse('crossFade')
// );
}
