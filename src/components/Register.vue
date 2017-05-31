<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <ul>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<form role="form">
				<div class="form-group">
					 
					<label for="exampleInputEmail1">
						Email address
					</label>
					<input type="email" class="form-control" id="exampleInputEmail1" />
				</div>
				<div class="form-group">
					 
					<label for="exampleInputPassword1">
						Password
					</label>
					<input type="password" class="form-control" id="exampleInputPassword1" />
				</div>
			 
				 
				<button type="submit" class="btn btn-default" @click.preventdefault="onReg()">
					Register
				</button>
			</form>
		</div>
	</div>
</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'REgsiter'
    }
  },
  methods:{
    onReg()
    {
      if(this.loginPass.length>6) 
    axios.post('http://profile.authlab.io/api/v1/login', {
    email: this.loginId,
    password:this.loginPass
  })

  .then(function (response) {
    console.log('login',response.data);
     this.$router.push('/profile')
  })
  .catch(function (error) {
    console.log(error);
  });
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
