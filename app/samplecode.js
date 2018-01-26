Vue.component('sample-code-item', {
  props: ['code_snippet', 'code_title', 'code_description'],
  template:
  `
  <div class='column'>
    <div class='css_result'>
      <div class='code' readonly='readonly'>{{code_snippet}}</div>
    </div>
  </div>
  `
})


const sampleCode = {
  template: `
    <div class="column">
     <div class="columns">
      <sample-code-item code_snippet='p1 = 1\np2 = 2' />
      <sample-code-item code_snippet='p3 = 3\np4 = 4' />
     </div>
     <div class="columns">
      <sample-code-item code_snippet='p3 = 3\np4 = 4' />
      <sample-code-item code_snippet='p5 = 5\np6 = 6' />
     </div>
     <div class="columns">
      <sample-code-item code_snippet='p1 = 1\np2 = 2' />
      <sample-code-item code_snippet='p5 = 5\np6 = 6' />
     </div>
    </div>
    `
}
module.exports = sampleCode
