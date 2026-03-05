function conv_to_num(val){
    let v = +val;
    if(isNaN(v)){
        return "null";
    }

    return v;
}


console.log(conv_to_num("a"));
