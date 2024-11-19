<template>
  <div class="auth-page">
    <AppNavbar />
    <div class="auth-container">
      <div v-if="showLogin">
        <LoginForm @login="handleLogin" />
        <p>
          Don't have an account? 
          <button @click="showLogin = false">Register</button>
        </p>
      </div>
      <div v-else>
        <RegisterForm @register="handleRegister" />
        <p>
          Already have an account? 
          <button @click="showLogin = true">Login</button>
        </p>
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/Shared/AppNavbar.vue";
import LoginForm from "@/components/Auth/LoginForm.vue";
import RegisterForm from "@/components/Auth/RegisterForm.vue";

export default {
  components: { AppNavbar, LoginForm, RegisterForm },
  data() {
    return {
      showLogin: true,
      errorMessage: "",
    };
  },
  methods: {
    handleLogin(credentials) {
      if (!credentials.email || !credentials.password) {
        this.errorMessage = "Email and password are required.";
        return;
      }
      if (credentials.email === "test@example.com" && credentials.password === "password") {
        localStorage.setItem("token", "mockToken");
        this.errorMessage = "";
        this.$router.push("/dashboard");
      } else {
        this.errorMessage = "Invalid credentials!";
      }
    },
    handleRegister(userDetails) {
      if (userDetails.name && userDetails.email && userDetails.password) {
        console.log("User registered:", userDetails);
        alert("Registration successful! Redirecting to login.");
        this.showLogin = true; 
        this.errorMessage = ""; 
      } else {
        this.errorMessage = "All fields are required to register.";
      }
    },
  },
};
</script>

<style>
.auth-page {
  text-align: center;
  padding: 20px;
}

.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  position: relative;
}

button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 5px;
  font-size: 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

button:hover {
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 3px;
  padding: 5px 10px;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
}
</style>
