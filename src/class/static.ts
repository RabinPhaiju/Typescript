class RobotProduct {
    holidaySale : boolean = true;

    static holidayDiscount(): number{
        return 0.2;
    }
}

const robotProduct = new RobotProduct();
console.log(robotProduct.holidaySale); 

console.log(RobotProduct.holidayDiscount());