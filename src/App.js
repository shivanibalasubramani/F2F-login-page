import logo from './logo.svg';
import './App.css';

function App() {
  const container = document.getElementById('container');
  function reg (){
    container.classList.add('active');
  }
  function logy(){
    container.classList.remove('active');
  }
  return (
    <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div class="social-icons">
              <a href="#" class="icons"><i class="fa-brands fa-google-plus-g"></i></a>
              <a href="#" class="icons"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="icons"><i class="fa-brands fa-github"></i></a>
              <a href="#" class="icons"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email to registration</span>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Sign Up</button>
            </form>
        </div>
    
          <div class="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div class="social-icons">
                <a href="#" class="icons"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="#" class="icons"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="icons"><i class="fa-brands fa-github"></i></a>
                <a href="#" class="icons"><i class="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email/password</span>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <a href="#">Forget your Password?</a>
              <button>Sign In</button>
            </form>
         </div>
      
    
          <div class="toggle-container">
            <div class="toggle">
              <div class="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your Personal details to use all of site features</p>
                <button class="hidden" onclick={logy}id="login">Sign In</button>
              </div>
              <div class="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your Personal details to use all of site features</p>
                <button class="hidden" onclick={reg}id="register">Sign Up</button>
              </div>
            </div>
          </div>
  </div>
  
  );
}

export default App;
