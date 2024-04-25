// Задание 1
// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

function getStudent() {
return new Promise ((r)=> {
   setTimeout(()=>{
    r({name: "Anri", age:32})
   }, 4000)
}
)
}
const student = getStudent()

student.then(data=> console.log(data.name))

// Задание 2 (Дополнительно)
// Сделайте внутри этой функции проверку: если выпадет какое-то число, которое будет > 0.1, то вызовется success со строкой "успех!". В иных случаях вызови failure со строкой "упс, неудача :("// Подсказка: используйте Math.random()
// Ниже, под этой функцией, опишите аргументы success и failure, которые, в свою очередь, тоже являются функциями.
// Функция success принимает в себя аргумент, например result, и выводит в консоль текст "Успешно завершено с результатом (и указать, каким результатом)".
// Функция failure принимает в себя аргумент, например error, и выводит в консоль текст "Завершено с ошибкой(и указать, какой ошибкой)".
// Ниже вызвать функцию getDriverLicense, передав в нее аргументами две другие функции.

let i = Math.random()
function getDriverLicense(success,failure) {
if ( i> 0.1){
   return success(" Успех!") 
}else {
    return failure(" Упс, неудача :(")
}
}

function success(result) {
    console.log(`Успешно завершено с результатом ${i} - ${result}`)
}
function failure(error) {
    console.log(`"Завершено с ошибкой ${i} - ${error}`)
}
getDriverLicense(success, failure);