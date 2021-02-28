import React from 'react';

const EditHelper = ({ field, form, value, setValues, number }) => {
  let returnField;
  if (form) {
    switch (field.name) {
      case 'full_name':
        returnField = (
          <h1 className="w-full">
            <input className="m-1 placeholder-gray-400"
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </h1>
        );
        break;
      case 'github':
        returnField = (
          <input className="m-1 placeholder-gray-400"
            type="text"
            value={value}
            onChange={(e) => {
              e.persist();
              setValues((prev) => {
                let newState = Object.assign({}, prev);
                newState[number] = e.target.value;
                return newState;
              });
            }}
            placeholder={field.placeholder}
          />
        );
        break;
      case 'city':
        returnField = (
          <input className="m-1 placeholder-gray-400"
            type="text"
            value={value}
            onChange={(e) => {
              e.persist();
              setValues((prev) => {
                let newState = Object.assign({}, prev);
                newState[number] = e.target.value;
                return newState;
              });
            }}
            placeholder={field.placeholder}
          />
        );
        break;
      case 'phone_number':
        returnField = (
          <input className="m-1 placeholder-gray-400"
            type="text"
            value={value}
            onChange={(e) => {
              e.persist();
              setValues((prev) => {
                let newState = Object.assign({}, prev);
                newState[number] = e.target.value;
                return newState;
              });
            }}
            placeholder={field.placeholder}
          />
        );
        break;
      case 'linkedin':
        returnField = (
          <input className="m-1 placeholder-gray-400"
            type="text"
            value={value}
            onChange={(e) => {
              e.persist();
              setValues((prev) => {
                let newState = Object.assign({}, prev);
                newState[number] = e.target.value;
                return newState;
              });
            }}
            placeholder={field.placeholder}
          />
        );
        break;
      case 'intro_header':
        returnField = (
          <h2 className="w-full">
            <input className="m-1 placeholder-gray-400 w-8/12"
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </h2>
        );
        break;
      case 'intro_skill':
        returnField = (
          <div className="w-full">
            <input className="w-11/12 m-1 placeholder-gray-400"
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </div>
        );
        break;
      case 'experience_company':
        returnField = (
          <h2 className="w-full">
            <input className="w-8/12 m-1 placeholder-gray-400"
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </h2>
        );
        break;
      case 'experience_city':
        returnField = (
          <p className="w-full">
            <input className="m-1 w-11/12 placeholder-gray-400"
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </p>
        );
        break;
      case 'experience_date':
        returnField = (
          <p className="w-6/12">
            <input className="m-1 placeholder-gray-400"
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </p>
        );
        break;
      case 'experience_title':
        returnField = (
          <h2 className="m-1 placeholder-gray-400">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </h2>
        );
        break;
      case 'education_facility':
        returnField = (
          <h2 className="m-1 placeholder-gray-400">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </h2>
        );
        break;
      case 'education_degree':
        returnField = (
          <p className="m-1 placeholder-gray-400">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </p>
        );
        break;
      case 'education_graduation_date':
        returnField = (
          <p className="m-1 placeholder-gray-400">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </p>
        );
        break;
      case 'education_gpa':
        returnField = (
          <p className="m-1 placeholder-gray-400">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </p>
        );
        break;
      case 'education_minor':
        returnField = (
          <p className="m-1 placeholder-gray-400">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            />
          </p>
        );
        break;
      case 'email':
        returnField = (
          <input className="m-1 placeholder-gray-400"
            type="email"
            value={value}
            onChange={(e) => {
              e.persist();
              setValues((prev) => {
                let newState = Object.assign({}, prev);
                newState[number] = e.target.value;
                return newState;
              });
            }}
            placeholder={field.placeholder}
          />
        );
        break;
      case 'intro_mission':
        returnField = (
          <p className="w-full">
            <textarea className="w-full m-1 placeholder-gray-400"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            ></textarea>
          </p>
        );
        break;
      case 'intro_long':
        returnField = (
          <p className="w-full">
            <textarea className="w-full m-1 placeholder-gray-400"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            ></textarea>
          </p>
        );
        break;
      case 'experience_description':
        returnField = (
          <p className="w-full">
            <textarea className="w-full m-1 placeholder-gray-400"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            ></textarea>
          </p>
        );
        break;
      case 'experience_responsibility':
        returnField = (
          <div className="w-full">
            <textarea className="w-full m-1 placeholder-gray-400"
              value={value}
              onChange={(e) => {
                e.persist();
                setValues((prev) => {
                  let newState = Object.assign({}, prev);
                  newState[number] = e.target.value;
                  return newState;
                });
              }}
              placeholder={field.placeholder}
            ></textarea>
          </div>
        );
        break;
      default:
        returnField = <p>Field Not Found</p>;
        break;
    }
  } else {
    switch (field.name) {
      case 'full_name':
        returnField = <h1 className="w-full text-xl">{value || field.placeholder}</h1>;
        break;
      case 'github':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'city':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'phone_number':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'linkedin':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'intro_header':
        returnField = <h2 className="text-base font-semibold">{value || field.placeholder}</h2>;
        break;
      case 'intro_skill':
        returnField = <li className="text-sm">{value || field.placeholder}</li>;
        break;
      case 'experience_company':
        returnField = <h2 className="text-base">{value || field.placeholder}</h2>;
        break;
      case 'experience_city':
        returnField = <p className="text-base">{value || field.placeholder}</p>;
        break;
      case 'experience_date':
        returnField = <p className="w-full text-small">{value || field.placeholder}</p>;
        break;
      case 'experience_title':
        returnField = <h2 className="text-base">{value || field.placeholder}</h2>;
        break;
      case 'education_facility':
        returnField = <h2 className="text-base">{value || field.placeholder}</h2>;
        break;
      case 'education_degree':
        returnField = <p className="text-base"> {value || field.placeholder}</p>;
        break;
      case 'education_graduation_date':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'education_gpa':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'education_minor':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'email':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'intro_mission':
        returnField = <p className="text-base font-semibold">{value || field.placeholder}</p>;
        break;
      case 'intro_long':
        returnField = <p className="text-sm"> {value || field.placeholder}</p>;
        break;
      case 'experience_description':
        returnField = <p className="text-sm">{value || field.placeholder}</p>;
        break;
      case 'experience_responsibility':
        returnField = <li className="text-sm">{value || field.placeholder}</li>;
        break;
      default:
        returnField = <p>Field Not Found</p>;
        break;
    }
  }

  return returnField;
};

export default EditHelper;
