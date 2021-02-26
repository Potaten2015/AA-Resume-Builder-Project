import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentTemplate } from '../../store/template'
import ResumeSection from '../ResumeSection'

const Preview = ({ template_name, template, values, preview, form, setValues }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const sections = {};
    const templateValues = {};
    let sectionCount = 1;
    let currentSection;
    let previousSection = null;
    let totalSectionCount = 0;

    for (let i = 0; i < template.length; i++) {

        previousSection = currentSection;

        const field = template[i]
        switch (field.name) {
            case "full_name":
                currentSection = "header"
                break;
            case "github":
                currentSection = "header"
                break;
            case "city":
                currentSection = "contact"
                break;
            case "phone_number":
                currentSection = "contact"
                break;
            case "linkedin":
                currentSection = "contact"
                break;
            case "intro_header":
                currentSection = "intro"
                break;
            case "intro_skill":
                currentSection = "introSkill"
                break;
            case "experience_company":
                if (currentSection.includes('experience')) {
                    sectionCount++;
                    currentSection = "experienceHeader" + sectionCount.toString()
                } else {
                    sectionCount = 1;
                    currentSection = "experienceHeader" + sectionCount.toString()
                }
                break;
            case "experience_city":
                currentSection = "experienceHeader" + sectionCount.toString()
                break;
            case "experience_date":
                currentSection = "experienceHeader" + sectionCount.toString()
                break;
            case "experience_title":
                currentSection = "experience" + sectionCount.toString()
                break;
            case "education_facility":
                if (currentSection.includes('education')) {
                    sectionCount++;
                    currentSection = "education" + sectionCount.toString()
                } else {
                    sectionCount = 1;
                    currentSection = "education" + sectionCount.toString()
                }
                break;
            case "education_degree":
                currentSection = "education" + sectionCount.toString()
                break;
            case "education_graduation_date":
                currentSection = "education" + sectionCount.toString()
                break;
            case "education_gpa":
                currentSection = "education" + sectionCount.toString()
                break;
            case "education_minor":
                currentSection = "education" + sectionCount.toString()
                break;
            case "email":
                currentSection = "contact"
                break;
            case "intro_mission":
                currentSection = "intro"
                break;
            case "intro_long":
                currentSection = "intro"
                break;
            case "experience_description":
                currentSection = "experience" + sectionCount.toString()
                break;
            case "experience_responsibility":
                currentSection = "experience" + sectionCount.toString()
                break;
            default: currentSection = "text"
        }

        field.order = i

        if (preview && !form) templateValues[i] = null;

        if (previousSection == currentSection) {
            sections[totalSectionCount].fields.push(field)
        } else {
            totalSectionCount++;
            sections[totalSectionCount] = {}
            sections[totalSectionCount].name = currentSection;
            sections[totalSectionCount].fields = [field]
        }
    }

    if (preview && !form) {
        return (
            <>
                <div className="template-solo">
                    {Object.keys(sections).map(section => {
                        return <ResumeSection section={sections[section]} values={values} form={form} setValues={setValues} />
                    })}
                </div>
            </>
        )
    } else if (preview && form) {
        return (
            <>
                <div className="template-solo-form">
                    {Object.keys(sections).map(section => {
                        return <ResumeSection section={sections[section]} values={values} form={form} setValues={setValues} />
                    })}
                </div>
            </>
        )
    } else {
        return (
            <div>
                {template_name}
                <div className="template-solo">
                    <NavLink to={`/resume/${user.id}/create`} onClick={e => dispatch(updateCurrentTemplate({ name: template_name, fields: template }))}>
                        {Object.keys(sections).map(section => {
                            return <ResumeSection section={sections[section]} values={templateValues} form={form} setValues={setValues} />
                        })}
                    </NavLink>
                </div>
            </div>
        )
    }

}

export default Preview;