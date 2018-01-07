<template>
	<div class="message">{{msg}}</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello from vue-loader'
			}
		}
	}
</script>

<style>
	.message{
		color:blue;
	}
</style>