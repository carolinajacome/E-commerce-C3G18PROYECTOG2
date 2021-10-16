<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import header from "../components/dashboard/header";

  export default {
    name: 'Home',
    name: 'header',

    components: {
    header,
    HelloWorld,
    },
  }
</script>
