const btn = document.querySelector('input[type="button"]'),
      input = document.querySelector('input[type="text"]'),
      result = document.querySelector('h1'),
      thisYear = new Date().getFullYear()

btn.addEventListener('click',function(){
  const birthYear = input.value,
        americanAge = thisYear - birthYear

  if(!isNaN(birthYear) && birthYear.toString().length === 4){
    if(americanAge>=0){
      koreanAge = americanAge + 1
      result.innerText = koreanAge  
    } else {
      alert(`${thisYear} 보다 작은 수를 입력해주십시오.`)
    }
  } else {
    alert('4자리 숫자로 입력해주십시오.')
  }
})

input.addEventListener('keypress',function(e){
  if (e.keyCode === 13){
    const birthYear = input.value,
    americanAge = thisYear - birthYear
    if(!isNaN(birthYear) && birthYear.toString().length === 4){
      if(americanAge>=0){
        koreanAge = americanAge + 1
        result.innerText = koreanAge  
      } else {
          alert(`${thisYear}보다 작은 수를 입력해주십시오.`)
      }    
    } else {
      alert('4자리 숫자로 입력해주십시오.')
    }
  }
})
