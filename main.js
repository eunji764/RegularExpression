let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi') // 생성자방식
// const regexp = /the/gi // 리터럴방식

// const regexp = /HEROPY/gi
// console.log(regexp.test(str))  // false

// const regexp = /fox/gi
// str = str.replace(regexp, 'AAA')
// console.log(str) // 원본 자체를 바꾸려면 재할당해줘야한다.

// console.log(str.match(/the/g))
// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gim))
// const h = `  the  hello   world  !
// `

// console.log(
//   h.replace(/\s/g, '')
// )

console.log(str.match(/.{1,}(?=@)/g))  
console.log(str.match(/(?<=@).{1,}/g))
