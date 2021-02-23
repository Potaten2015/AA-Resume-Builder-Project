import React from 'react'

const EditHelper = ({field, form, value, setValues, number}) => {

    let returnField;
    if(form){
        switch(field.name) {
            case "full_name": case "github": case "city": case "phone_number": case "linkedin": case "intro_header": case "intro_skill": case "experience_company": case "experience_city": case "experience_date": case "experience_title": case "education_facility": case "education_degree": case "education_graduation_date": case "education_gpa": case "education_minor":
                returnField = <input type="text" value={value} onChange={e => setValues(prev => prev[number] = e.target.value)} placeholder={field.placeholder}/>
                break;
            case "email":
                returnField = <input type="email" value={value} onChange={e => setValues(prev => prev[number] = e.target.value)} placeholder={field.placeholder}/>
                break;
            case "intro_mission" : case "intro_long": case "experience_description": case "experience_responsibility":
                returnField = <textarea value={value} onChange={e => setValues(prev => prev[number] = e.target.value)} placeholder={field.placeholder}></textarea>
                break;
            default:
                returnField =<p>Field Not Found</p>
        }
    } else {
        switch(field.name) {
            case "full_name": case "github": case "city": case "phone_number": case "linkedin": case "intro_header": case "intro_skill": case "experience_company": case "experience_city": case "experience_date": case "experience_title": case "education_facility": case "education_degree": case "education_graduation_date": case "education_gpa": case "education_minor": case "email": case "intro_mission" : case "intro_long": case "experience_description": case "experience_responsibility":
                returnField = <h1 value={value || field.placeholder}></h1>
                default:
                    returnField =<p>Field Not Found</p>
        }
    }


    return returnField
}

export default EditHelper;
