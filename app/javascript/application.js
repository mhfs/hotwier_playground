// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

window.Trusted = {};

//import { StreamActions } from "@hotwired/turbo-rails"
import "controllers"

Turbo.config.forms.confirm = (message, element) => {
  let dialog = document.getElementById("turbo-confirm");
  dialog.querySelector("p").textContent = message;
  dialog.showModal();

  return new Promise((resolve, reject) => {
    dialog.addEventListener("close", () => {
      resolve(dialog.returnValue == "confirm");
    }, { once: true });
  });
}

Turbo.StreamActions.closeDrawer = function() {
  Trusted.drawer.forceClose();
}
