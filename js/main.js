const btn = document.querySelector('input[type="button"]'),
      input = document.querySelector('input[type="text"]'),
      result = document.querySelector('h1'),
      resultDeco = document.querySelector('span'),
      thisYear = new Date().getFullYear()

btn.addEventListener('click',function(){
  const birthYear = input.value
  if(!isNaN(birthYear) && birthYear.toString().length === 4){
    
    americanAge = thisYear - birthYear
    koreanAge = americanAge + 1
    
    result.innerText = koreanAge
    resultDeco.style.display = 'block'
    
  } else {
    alert('4자리 숫자로 입력해주십시오.')
  }
})

input.addEventListener('onkeypress', )
