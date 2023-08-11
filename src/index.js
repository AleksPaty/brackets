module.exports = function check(str, bracketsConfig) {
  let bracketsStak = []
  
  for(let i = 0; i < str.length; i++) {
    for(let b of bracketsConfig) {
      
      if(str[i] == b[0] && str[i] == b[1]) {

        str[i] == bracketsStak[bracketsStak.length-1]
          ? bracketsStak.pop()
          : bracketsStak.push(str[i])

      } else {
      
        if(str[i] == b[0] || str[i] == b[1] && bracketsStak.length == 0) {
          bracketsStak.push(str[i])
        }

        if(str[i] == b[1] && b[0] == bracketsStak[bracketsStak.length-1]) {
          bracketsStak.pop()
        }
      }

    }
  }
  return bracketsStak.length == 0
}
