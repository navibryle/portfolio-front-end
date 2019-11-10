//This is an implementation of modulo the modulo operator since the built in 
//javascript modulo operator does not work properly
function modulo(x,y){
    //x is the operand
    //y is the mod
    console.log("input"+x)
    if (x<y && x>=0) {
        return x;
    }
    else if (x>=y && x>=0){
        let mutable_x = [x];
        while (mutable_x[0] >= y) {
            mutable_x[0] = mutable_x[0]-y
        };
        return parseInt(mutable_x[0])
        
    }
    else{
        let mutable_x = [x];
        while (mutable_x[0] < 0) {
            mutable_x[0] = mutable_x[0]+y
        };
        return parseInt(mutable_x[0])
        
    };
}
export default modulo;