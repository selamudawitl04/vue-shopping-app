<template>
    <header>
       <h1>{{ headerText }}</h1> 
    </header>
</template>
<script>
export default{
    name:'Header',
    props:{
        headerText: String
    }
}
</script>
<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 60rem;
}

</style>