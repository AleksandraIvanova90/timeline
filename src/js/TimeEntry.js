import Coordinates from "./Coordinates";
import Geolocation from "./Geolocation";
import getDate from "./getDate";

export default class TimeEntry {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;
    this.geolocation = new Geolocation();
    this.coordinates = new Coordinates(this.element);
    this.addNewEntry = this.addNewEntry.bind(this);
    this.element.addEventListener("keydown", this.addNewEntry);
  }

  addNewEntry(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      const entries = e.target.closest(".container").querySelector(".line");
      const dateEntry = getDate();
      const content = e.target.value;
      const promise = this.geolocation.getLocation();
      promise.then((data) => {
        if (data.success) {
          console.log(data);
          entries.insertAdjacentHTML(
            "afterbegin",
            ` <div class="text-entry">
                  <div class="text-entry__date">${dateEntry}</div>
                  <div class="text-entry__content">${content}</div>
                  <div class="text-entry__coordinates">[${data.latitude}, ${data.longitude}]</div>
                </div>`,
          );
        } else {
          console.log(data);
          this.coordinates.addNotification(dateEntry, content);
        }
      });

      e.target.value = "";
      console.log(e.target.value);
    }
  }
}
