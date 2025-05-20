export default class Coordinates {
  constructor(element) {
    this.element = element;
    this.content = null;
    this.date = null;
    this.addNotification = this.addNotification.bind(this);
    this.addCoordinates = this.addCoordinates.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
    this.element.addEventListener("click", this.deleteNotification);
    this.element.addEventListener("click", this.addCoordinates);
  }

  addNotification(date, content) {
    const notification = this.element.querySelector(".notification");
    notification.classList.remove("plug");
    this.content = content;
    this.date = date;
  }

  addCoordinates(e) {
    e.preventDefault();
    if (!e.target.classList.contains("notification__buttons__ok")) return;
    const coord = this.element.querySelector(".notification__input").value;
    if (Coordinates.validInput(coord)) {
      const line = this.element.querySelector(".line");
      line.insertAdjacentHTML(
        "afterbegin",
        ` <div class="text-entry">
        <div class="text-entry__date">${this.date}</div>
        <div class="text-entry__content">${this.content}</div>
        <div class="text-entry__coordinates">[${coord}]</div>
      </div>`,
      );
      this.element.querySelector(".notification").classList.add("plug");
      this.element.querySelector(".notification__input").value = "";
    } else {
      alert("Неверный формат!");
      this.element.querySelector(".notification__input").value = "";
    }
  }

  static validInput(string) {
    const regex = /^\[?-?\d{1,2}(\.\d{1,5})?,\s?-?\d{1,2}(\.\d{1,5})?\]?$/;
    return regex.test(string);
  }

  deleteNotification(e) {
    e.preventDefault();
    if (!e.target.classList.contains("notification__buttons__cancel")) return;
    const form = this.element.querySelector(".notification");
    form.remove();
    return;
  }
}
