// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(len, width, height) {
        this.len = len;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.len * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.len * this.width + this.len * this.height + this.width * this.height);
    }
}

const cuboid2 = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid2.volume()); // 100
// console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(len, width, height) {
        super(len, width, height);
    }

    volume() {
        return this.len ** 3;
    }

    surfaceArea() {
        return 6 * this.len ** 2;
    }
}

const cube = new CubeMaker(5, 5, 5);

// console.log(cube.volume()); // 125
// console.log(cube.surfaceArea()); // 150