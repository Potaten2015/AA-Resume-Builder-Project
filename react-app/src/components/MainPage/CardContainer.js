import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentTemplate } from '../../store/template';

const CardContainer = ({ templates, resumes, loaded }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        {templates ? 'Featured Templates' : 'Recent Resumes'}
      </h1>
      <div className="flex overflow-x-hidden pb-10">
        {templates && loaded && (
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            {Object.keys(templates).map((template_name) => (
              <a
                href={`/resume/${user.id}/create`}
                onClick={(e) =>
                  dispatch(
                    updateCurrentTemplate({
                      name: template_name,
                      fields: templates[template_name]['field_data'],
                    })
                  )
                }
              >
                >
                <Card title={template_name} />
              </a>
            ))}
          </div>
        )}
        {resumes && loaded && (
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {Object.values(resumes).map((resume) => (
              <a href={`resumes/${resume.id}`}>
                <Card title={resume['user_tags'][0]} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
