class Slate {

    constructor(pen) {
      this.pen = pen;
      this.canvas = document.getElementById("slate");
      this.context = this.canvas.getContext("2d");
      this.currentLocation = { x: 0, y: 0 };
      this.isDrawing = false;
  }
  
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getMouseLocation(event) {
    let rect = this.canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  onMouseDown(event) {
    this.isDrawing = true;
    this.currentLocation = this.getMouseLocation(event);
  }

  onMouseMove(event) {
    if (this.isDrawing) {
      let newLocation = this.getMouseLocation(event);
      this.context.beginPath();
      this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
      this.context.lineTo(newLocation.x, newLocation.y);
      this.context.strokeStyle = this.pen.color;
      this.context.lineWidth = this.pen.size;
      this.context.stroke();
      this.currentLocation = newLocation
      this.context.closePath();
    }
  }

  onMouseUp() {
    this.isDrawing = false;
  }

  onMouseLeave() {
    this.isDrawing = false;
  }

  initSlate() {
    this.canvas.addEventListener("mousedown", (event) => this.onMouseDown(event));
    this.canvas.addEventListener("mousemove", (event) => this.onMouseMove(event));
    this.canvas.addEventListener("mouseup", (event) => this.onMouseUp(event));
    this.canvas.addEventListener("mouseleave", (event) => this.onMouseLeave(event));
  }
}