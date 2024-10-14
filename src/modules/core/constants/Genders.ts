const GENDER = {
    female : {
        content : 'Mujer',
        value : 0
    },
    male : {
        content : "Hombre" ,
        value : 1
    }
}



const SELECT = {
    gender : {
        types :{
            female: GENDER.female.value ,
            male : GENDER.male.value
        },
        content : {
            female : GENDER.female.content,
            male: GENDER.male.content
        }
       
    }
}

const GENDERINFO = [
    {
        text : SELECT.gender.content.female,
        value : SELECT.gender.types.female
    },
    {
        text : SELECT.gender.content.male,
        value : SELECT.gender.types.male
    }
]

export { GENDERINFO }