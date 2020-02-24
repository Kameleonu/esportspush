self.addEventListener('activate', async () => {
    try {
      const options = {}
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log(JSON.stringify(subscription))
    } catch (err) {
      console.log('Error', err)
    }
  })

  setInterval(
    function displayNotification() {
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          reg.showNotification('Hello world!');
        });
      }
    }, 5000)