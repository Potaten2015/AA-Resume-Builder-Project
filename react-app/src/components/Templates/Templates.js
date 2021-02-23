import React, {useEffect, useState} from 'react';
import './Templates.css';
import {useDispatch, useSelector} from 'react-redux'
import { getTemplates, updateCurrentTemplate } from '../../store/template';
import {NavLink} from 'react-router-dom'
import EditHelper from '../EditHelper';

const Templates = () => {

  const dispatch = useDispatch()
  let templates = useSelector(state => state.template.templates)
  let [loaded, setLoaded] = useState(false)
  const user = useSelector(state => state.user)

  useEffect(()=>{
    dispatch(getTemplates()).then(setLoaded(true));
  },[dispatch])

  return (
  <div className="templates-page">
    <div className="templates-page-outer">
      <div className="template-page-inner">
        <h1>Templates</h1>
        <div className="template-row">
          {loaded && (Object.keys(templates).length > 0) && Object.keys(templates).map(temp_key =>{
            const the_template=templates[temp_key]
            return (
            <div className="template-solo">
              <NavLink to={`/resume/${user.id}/create`} onClick={e => dispatch(updateCurrentTemplate(the_template))}>
                {temp_key}
                {the_template.map(field => <EditHelper field={field} form={false} value={field.placeholder} />)}
              </NavLink>
            </div>
          )
          })}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Templates;
