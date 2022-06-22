function validation (input) {

    //method
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
        if (validMethods.indexOf(input.method) == -1 || input.method == undefined) {
            throw Error('Invalid request header: Invalid Method')
        }
    

    //URI
    const reg = /^(([A-z]|\.|[0-9])+)$|^\*$/g
    const word = input.uri
    if (!reg.test(word) || input.uri == undefined) {
        throw Error('Invalid request header: Invalid URI')
    }
    

    //version
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
        if (validVersion.indexOf(input.version) == -1 || input.version == undefined) {
            throw Error('Invalid request header: Invalid Version')
        }


    //message
    const reggex = /^[^<>\\&'"]+$|^$/g
    const test = input.message
    
    if (!reggex.test(test) || input.message == undefined) {
        throw Error('Invalid request header: Invalid Message')
    }

    return input
}
validation({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})