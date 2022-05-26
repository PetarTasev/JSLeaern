function town (townList) {
    const result = {};

    for (const town of townList) {
        const details = town.split(' <-> ')
        const name = details[0]
        let pop = Number(details[1])

        if (result[name] != undefined) {
            pop += result[name]
        }
        result[name] = pop
    } 

    for (const ration in result) {
        console.log(`${ration} : ${result[ration]}`)
    }

}
town (['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)