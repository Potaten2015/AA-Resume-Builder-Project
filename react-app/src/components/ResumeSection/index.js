import React from 'react'
import EditHelper from '../EditHelper';

const ResumeSection = ({section, values, form, setValues}) => {

    if(section.name.includes("header")){
        return (
            <div className="template-header-flex">
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("contact")){
        return (
            <div className="template-contact-info">
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("introSkill")){
        return (
            <div className="introSkill-grid">
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("intro")){
        return (
            <div>
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("experienceHeader") && section.name.includes("1")){
        return (
            <div>
                <h2 className="experience-header">Work Experience</h2>
                <div className="experience-top-flex-outer">
                    <div className="experience-top-flex-left">
                        {section.fields.filter(field => {
                            return field.name.includes("company") || field.name.includes("city")
                        }).map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} />  )}
                    </div>
                    <div className="experience-top-flex-right">
                        {section.fields.filter(field => {
                            return field.name.includes("date")
                        }).map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
                    </div>
                </div>
            </div>
        )
    } else if(section.name.includes("experienceHeader")){
        return (
            <div>
                <div className="experience-top-flex-outer">
                    <div className="experience-top-flex-left">
                        {section.fields.filter(field => {
                            return field.name.includes("company") || field.name.includes("city")
                        }).map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
                    </div>
                    <div className="experience-top-flex-right">
                        {section.fields.filter(field => {
                            return field.name.includes("date")
                        }).map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
                    </div>
                </div>
            </div>
        )
    } else if(section.name.includes("experience") && section.name.includes("1")){
        return (
            <div>
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("experience")){
        return (
            <div>
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("education") && section.name.includes("1")){
        return (
            <div>
                <h2 className="education-header">Education</h2>
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
            </div>
        )
    } else if(section.name.includes("education")){
        return (
            <div>
                {section.fields.map( field => <EditHelper key={field.order} field={field} form={form} value={values[field.order]} setValues={setValues} number={field.order} /> )}
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
