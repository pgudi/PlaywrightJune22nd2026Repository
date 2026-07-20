class GeometricFigure{
    area(){
        console.log("Calcualting Area of a Geomtric Figure");
    }
}

class Circle extends GeometricFigure{
    area(){
        let radius=4
        let result = Math.PI * radius * radius
        console.log("Area of Circle :"+result);
    }
}

class Square extends GeometricFigure{
    area(){
        let side=5
        let result = side * side
        console.log("Area of Square :"+result);
    }
}

class Reactangle extends GeometricFigure{
    area(){
        let length=5, breadth=10
        let result = length * breadth
        console.log("Area of Reactangle :"+result);
    }
}

let figure = new GeometricFigure()

figure=new Circle()
figure.area()

figure=new Square()
figure.area()

figure=new Reactangle()
figure.area()