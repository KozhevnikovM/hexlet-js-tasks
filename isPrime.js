function isPrime (num) {
  if (num < 2){
    return(false);
  }
  else{
    for (let div = 2; div < num; div++){
      if(num%div === 0){
        console.log(div);
        return(false);
      }
    }
    return(true);
  }
}