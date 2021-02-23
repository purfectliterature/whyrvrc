<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This space is intended for Ridge View Residential College e-Open Day 2021 outreach website.<br>
      Thank you for your interest in RVRC. We will be coming very soon.<br>
      e-Open Day 2021 is scheduled on <b>Feb 27, 2021</b> and Master's Talk on <b>Mar 13, 2021</b>.
    </p>
    <h3>Useful links</h3>
    <ul>
      <li><a href="https://rvrc.nus.edu.sg" target="_blank" rel="noopener">RVRC Official Website</a></li>
      <li><a href="https://blog.nus.edu.sg/rvrcoh2020" target="_blank" rel="noopener">e-Open Day 2020 Website</a></li>
      <li><a href="https://nus.edu.sg/e-openhouse/" target="_blank" rel="noopener">NUS e-Open House 2021 Website</a></li>
    </ul>
    
    <br><br>

    <code>P013.P000 C.Phillmont/live</code>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  padding: 3rem;
  height: calc(100vh - 6rem);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
