function devide(lst, middle){

    
    let left = lst.slice(0, middle);
    let right = lst.slice(middle);

    devide(left, Math.trunc(left.size / 2));
    devide(right, Math.trunc(right.size / 2));


    if(left.lenght == 1){
        return left;
    }

    if(right.lenght == 1){
        return right;
    }

    return devide(left);
    return devide(right);
    
}