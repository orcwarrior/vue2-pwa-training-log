<template>
    <div>
        There it is, index view. ({{someVar}})
        <br/>
        <router-link to="/test">Goto test view</router-link>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          someVar: 'index here'
        }
      }
    }
</script>