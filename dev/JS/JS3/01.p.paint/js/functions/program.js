

class Program {

  constructor() {
    this.pen = new Pen();
    this.slate = new Slate(this.pen);
  }

  start() {
    this.slate.initSlate();
    document.querySelector("#clear").addEventListener("click", () => this.slate.clear());
    document.querySelectorAll(".pen-color").forEach((btn) => {
      btn.addEventListener("click", this.onClickPenColor.bind(this));
    });
    document.querySelectorAll(".pen-size").forEach((btn) => {
      btn.addEventListener("click", this.onClickPenSize.bind(this));
    });
  }

  onClickPenColor(event) {
    this.pen.color = event.target.dataset.color;
  }

  onClickPenSize(event) {
    this.pen.size = event.target.dataset.size;
  }
}