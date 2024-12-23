let a = 'hello'
let b = '반가워요'
let c = ['사과', '배','수박']
console.log(c[1])

let person = {'name':'bob', 'age':30, 'height':180}
console.log(person['name'])

let person2 = {'name2':'bobby', 'age2':20, 'height2':160}
let name = person['name']
let age = person ['age']
console.log(name2, age2)

//조건문
let age3 =15;
if(age3 < 20) {
    console.log('청소년입니다.')
} else {
    console.log('성인입니다.')
}

//반복문
let ages = [14,35,65,64,37,25,37];

ages.forEach(a => {
    if (a < 20) {
        console.log('청소년입니다.')
    } else {
        console.log('성인입니다.')
    }
});