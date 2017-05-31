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
					<input type="email" class="form-control" id="exampleInputEmail1" v-model="loginId"/>
				</div>
				<div class="form-group">
					 
					<label for="exampleInputPassword1">
						Password
					</label>
					<input type="password" class="form-control" id="exampleInputPassword1" v-model="loginPass"/>
				</div>
			 
				 
				<button type="submit" class="btn btn-default" @click.preventdefault = "onlogin">
					Login
				</button>
			</form>
		</div>
	</div>
</div>
    </ul>
      
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Login',
      loginId:'',
      loginPass:'',
      resp:null
    }
 
  },
  methods:{
    onlogin()
    {
     
   
    axios.post('http://profile.authlab.io/api/v1/login', {
    email: this.loginId,
    password:this.loginPass
  })

  .then( (response) =>{
      this.resp = response
    
  })
  .catch(function (error) {
    console.log(error);
  });


     if(this.resp !=null){
        this.$router.push({path:'/profile/:id' })
      }
     
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
