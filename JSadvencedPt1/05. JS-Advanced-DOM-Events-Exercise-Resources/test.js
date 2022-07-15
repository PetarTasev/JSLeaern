let name = [{name: 'hello', number: 123}]

for (let element of name) {
    const maybe = Object.keys(element)
    console.log(element)

    console.log(maybe)
    console.log(element['name'])
}