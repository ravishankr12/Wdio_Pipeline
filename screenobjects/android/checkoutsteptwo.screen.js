class CheckoutStepTwoScreen {
    // Getter for FINISH button
    get finishBtn() {
      return $('~test-FINISH');
    }
  
    // Method to tap FINISH
    async tapFinish() {
      const maxScrollAttempts = 5;
      let isDisplayed = await this.finishBtn.isDisplayed();

      for (let attempt = 0; attempt < maxScrollAttempts && !isDisplayed; attempt++) {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1);'); // Scroll down
        isDisplayed = await this.finishBtn.isDisplayed();
      }

      if (!isDisplayed) {
        throw new Error('FINISH button not found after scrolling');
      }

      await this.finishBtn.waitForDisplayed();
      await this.finishBtn.click();
    }

    // New method to wait for the FINISH button
    async waitForFinishButton() {
      await this.finishBtn.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
    }
  }
  
  export default new CheckoutStepTwoScreen();
  