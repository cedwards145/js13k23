const WINDOW_BACKGROUND_COLOR = "white";
const WINDOW_TEXT_COLOR = "black";
const WINDOW_RADIUS = 25;
const WINDOW_PADDING = 25;
const WINDOW_FONT = "24px sans-serif";

function drawWindow(context, x, y, width, height) {
    context.fillStyle = WINDOW_BACKGROUND_COLOR;
    context.beginPath();
    context.roundRect(x, y, width, height, WINDOW_RADIUS);
    context.fill();

    context.textBaseline = "top";
    context.font = WINDOW_FONT;
    context.fillStyle = WINDOW_TEXT_COLOR;
    context.fillText("Test Message", x + WINDOW_PADDING, y + WINDOW_PADDING);
}

export { drawWindow };
