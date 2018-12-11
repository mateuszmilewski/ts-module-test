# ts-module-test

### To jest prosty przykład jak działają moduły w TypeScript. Stworzyłem prostą klasę Point.


- [x] TypeScript

```
export class Point {
    constructor(private x?: number, private y?: number) {} // automatycznie generuja sie pola tutaj
    getX() { /*...*/ }
    getY() { /*...*/ }
    simpleDraw() { /*...*/  }
}
```

- [x] JavaScript

```
"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () { /* ... */ };
    Point.prototype.getY = function () { /* ... */ };
    Point.prototype.simpleDraw = function () { /* ... */ };
    return Point;
}());
exports.Point = Point;
```
