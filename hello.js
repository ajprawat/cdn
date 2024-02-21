const body = document.querySelector(`body`)
const range = document.createRange()
const content = `<script>console.log("hello world")<\/script>`
const frag = range.createContextualFragment(content)
body.append(frag)
