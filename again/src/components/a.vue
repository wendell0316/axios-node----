<template>
	<div class="send">
		<input type="button" @click="sendMsg" value="send">
	</div>
</template>


<script>
import axios from  'axios'

	export default{
		name: 'send',
		data() {
			return{

			}
		},
		methods:{
			sendMsg: function(){
				axios.get('/api/b')
  					.then(function (response) {
    					console.log(response);
  					})
  					.catch(function (error) {
    					console.log(error);
  					});
			}
		}
	}
</script>


<style scoped>
	
</style>