class LoginScreen {
    // Keep locators as getters — lazy evaluated
    get usernameInput() {
      return $('~test-Username');
    }
  
    get passwordInput() {
      return $('~test-Password');
    }
  
    get loginButton() {
      return $('//android.widget.TextView[@text="LOGIN"]');
    }
  
    /**
     * Enter username in the input field
     * @param {string} username
     */
    async enterUsername(username) {
      await this.usernameInput.setValue(username);
    }
  
    /**
     * Enter password in the input field
     * @param {string} password
     */
    async enterPassword(password) {
      await this.passwordInput.setValue(password);
    }
  
    /**
     * Click on the login button
     */
    async tapLoginButton() {
      await this.loginButton.click();
    }
  
    /**
     * Perform login with username and password
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.tapLoginButton();
    }
  }
  
  export default new LoginScreen();
  