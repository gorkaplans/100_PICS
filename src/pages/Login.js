import MainLayout from "../components/MainLayout/MainLayout";
import './Home.scss'

const Login= () => {

  return (
   <MainLayout>
    <div className="home-container">
    <form class="login-form">
  <p class="login-text">
    <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-lock fa-stack-1x"></i>
    </span>
  </p>
  <input type="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
  <input type="password" class="login-password" required="true" placeholder="Password" />
  <input type="submit" name="Login" value="Login" class="login-submit" />
</form>
    </div>  
   </MainLayout>
  );
}
 
export default Login;