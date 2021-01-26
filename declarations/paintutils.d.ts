declare namespace paintutils{
    type ImageData = any;

    function parseImage(image:string): ImageData;

    function loadImage(path:string): ImageData | null;

    function drawPixel(xPos:number, yPos:number, colour?:number): void;

    function drawLine(startX:number, startY:number, endX:number, endY:number, colour?:number): void;

    function drawBox(startX:number, startY:number, endX: number, endY:number, colour?:number): void;

    function drawFilledBox(startX:number, startY:number, endX:number, endY:number, colour?:number): void;

    function drawImage(image: ImageData, xPos:number, yPos:number): void;
}