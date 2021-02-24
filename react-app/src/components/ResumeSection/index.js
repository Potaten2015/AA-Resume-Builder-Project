import React from 'react'
import EditHelper from '../EditHelper';

const ResumeSection = ({section}) => {

    console.log(section)

    if(section.name.includes("header")){
        return (
            <div className="template-header-flex">
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else if(section.name.includes("contact")){
        return (
            <div className="template-contact-info">
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else if(section.name.includes("introSkill")){
        return (
            <div className="introSkill-grid">
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else if(section.name.includes("intro")){
        return (
            <div>
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    }  else if(section.name.includes("experience") && section.name.includes("1")){
        return (
            <div>
                <h1>EXPERIENCE</h1>
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else if(section.name.includes("experience")){
        return (
            <div>
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else if(section.name.includes("education") && section.name.includes("1")){
        return (
            <div>
                <h1>EDUCATION</h1>
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else if(section.name.includes("education")){
        return (
            <div>
                {section.fields.map( field => <EditHelper field={field} form={false} /> )}
            </div>
        )
    } else {
        return (
            <div>
                {section.fields.map( field => <p>{field.placeholder}</p>)}
            </div>
        )
    }

}

export default ResumeSection;
