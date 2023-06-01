function cambio(a, b) {
  if(verificacion(a,b)){
    if(b > a){
      return b - a;
    }
    else{
      return a - b;
    }
  }
  else{
    return -1;
  }
  
}

function verificacion(a,b){
  if(a === "" || b === "" ){
    return false;
  }
  else{
    return true;
  }
}


module.exports = {cambio,verificacion};
