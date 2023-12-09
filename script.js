function pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";//Создал строку, с которой будут сравниваться предложения
    const regex = /\s/g;//\s - регулярное выражение, нужно для поиска всех пробелов
    //g  нужен для поиска совпадений, без него только первое
    const lowercase = s.toLowerCase().replace(regex, "");//Для простоты делаем все буквы строчными
    //Используя метод replace() с помощью регулярного выражения, все вхождения пробела будут заменены ничем, ""
    
     for(let i = 0; i < alphabet.length; i++){
      if(lowercase.indexOf(alphabet[i]) === -1){
        console.log('Не является панграммой');
      }
     }
    
     console.log('Является панграммой');
  };

pangrams('qwertyui opasd fghj zx cvmnb lk');
  


