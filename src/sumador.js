function cambio(a, b) {
  if(b > a){
    return b - a;
  }
  else{
    return a - b;
  }
}

function verificacion(a,b){
  if(a == "" || b == "" || a == "NaN" || b == "NaN" ){
    return false;
  }
  else{
    return true;
  }
}


module.exports = {cambio,verificacion};
