<template>
    <button class="my-button">{{ buttonText }}</button>
</template>

<script>
    export default{
        name: 'MyButton',
        props: {
            buttonText: String
        }
    }
</script>
<style scoped>
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  padding: 0.5rem 2rem;
  border-radius: 12px;
  max-width: 20rem;
  margin: 1rem 1rem;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.my-button:focus {
    outline: none;
}
  .my-button:hover,
  .my-button:active {
    background-color: #af0a78;
    border-color: #af0a78;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
  }
  .my-button:disabled {
    background-color: #ccc;
    border-color: #ccc;
    box-shadow: none;
    color: #3f3f3f;
    cursor: not-allowed;
  }
</style>