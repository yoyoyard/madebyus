Vue.component('Code', {
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


const Samplecode = {
  template: `
    <div class="column">
     <div class="columns">
      <Code code_snippet='p1 = 1\np2 = 2' />
      <Code code_snippet='p3 = 3\np4 = 4' />
     </div>
     <div class="columns">
      <Code code_snippet='p3 = 3\np4 = 4' />
      <Code code_snippet='p5 = 5\np6 = 6' />
     </div>
     <div class="columns">
      <Code code_snippet='p1 = 1\np2 = 2' />
      <Code code_snippet='p5 = 5\np6 = 6' />
     </div>
    </div>
    `
}
module.exports = Samplecode
