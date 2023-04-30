function countdown(n){
    if (n < 1){
      return [];
    }else {
      const countArry = countdown(n - 1);
      countArry.push(n);
      return countArry;

    }
  }

  console.log(countdown(5));