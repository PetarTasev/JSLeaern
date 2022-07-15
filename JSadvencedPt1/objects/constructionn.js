function waterBby (object) {

    let neededWata = Number(object.weight * object.experience) / 10;
    console.log(neededWata)
    if (object.dizziness) {
        object.levelOfHydrated += neededWata;
        object.dizziness = false;
    }
    return object
}

waterBby (
    { weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  )
  console.log('-------------')
  waterBby (
    { weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true }
  )
  
  console.log('-------------')
  waterBby (
    { weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true }      
      
  )
