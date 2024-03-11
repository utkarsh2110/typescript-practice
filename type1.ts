interface Circle{
    radius: number
}

interface Square{
    side: number
}

interface Rectangle{
    length: number;
    width: number;
}

type Shape = Rectangle | Square | Circle;

function area(shape: Shape){
    console.log("rendered")
}

function shapeRender(shape: Rectangle | Square | Circle){
    console.log("rendered")
}