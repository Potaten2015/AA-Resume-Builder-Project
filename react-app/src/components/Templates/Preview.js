import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateCurrentTemplate} from '../../store/template'
import EditHelper from '../EditHelper'
import ResumeSection from '../ResumeSection'

const Preview = ({template_name, template}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const sections = {};
    let sectionCount = 1;
    let currentSection;
    let previousSection = null;
    let totalSectionCount = 0;

    for (let i = 0; i < template.length; i++) {

        previousSection = currentSection;

        const field = template[i]
        switch(field.name) {
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
                if(currentSection.includes('experience')) {
                    sectionCount ++;
                    currentSection = "experience" + sectionCount.toString()
                } else {
                    sectionCount = 1;
                    currentSection = "experience" + sectionCount.toString()
                }
                break;
            case "experience_city":
                currentSection = "experience" + sectionCount.toString()
                break;
            case "experience_date":
                currentSection = "experience" + sectionCount.toString()
                break;
            case "experience_title":
                currentSection = "experience" + sectionCount.toString()
                break;
            case "education_facility":
                if(currentSection.includes('education')) {
                    sectionCount ++;
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

        if(previousSection == currentSection) {
            sections[totalSectionCount].fields.push(field)
        } else {
            totalSectionCount++;
            sections[totalSectionCount] = {}
            sections[totalSectionCount].name = currentSection;
            sections[totalSectionCount].fields = [field]
        }
    }

    return (
        <div className="template-solo">
          <NavLink to={`/resume/${user.id}/create`} onClick={e => dispatch(updateCurrentTemplate(template))}>
            {template_name}
            {Object.keys(sections).map(section => {
                return <ResumeSection section={sections[section]} />
            })}
          </NavLink>
        </div>
      )
}

export default Preview;
