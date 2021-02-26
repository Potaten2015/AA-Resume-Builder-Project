import React from 'react';

const EditHelper = ({ field, form, value, setValues, number }) => {
    let returnField;
    if (form) {
        switch (field.name) {
            case 'full_name':
                returnField = (
                    <h1 className="header-name">
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
                    </h1>
                );
                break;
            case 'github':
                returnField = (
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
                );
                break;
            case 'city':
                returnField = (
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
                );
                break;
            case 'phone_number':
                returnField = (
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
                );
                break;
            case 'linkedin':
                returnField = (
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
                );
                break;
            case 'intro_header':
                returnField = (
                    <h2 className="intro-header">
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
            case 'intro_skill':
                returnField = (
                    <div className="intro-skill">
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
                    </div>
                );
                break;
            case 'experience_company':
                returnField = (
                    <h2 className="company-name">
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
            case 'experience_city':
                returnField = (
                    <p className="company-city">
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
            case 'experience_date':
                returnField = (
                    <p className="company-date">
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
            case 'experience_title':
                returnField = (
                    <h2 className="role-title">
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
                    <h2 className="education-facility">
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
                    <p className="education-degree">
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
                    <p className="education-graduation-date">
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
                    <p className="education-gpa">
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
                    <p className="education-minor">
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
                    <input
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
                    <p className="intro-mission">
                        <textarea
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
                    <p className="intro-long">
                        <textarea
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
                    <p className="experience-description">
                        <textarea
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
                    <div className="experience-responsibility">
                        <textarea
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
                returnField = <h1 className="header-name">{value || field.placeholder}</h1>;
                break;
            case 'github':
                returnField = <p>{value || field.placeholder}</p>;
                break;
            case 'city':
                returnField = <p>{value || field.placeholder}</p>;
                break;
            case 'phone_number':
                returnField = <p>{value || field.placeholder}</p>;
                break;
            case 'linkedin':
                returnField = <p>{value || field.placeholder}</p>;
                break;
            case 'intro_header':
                returnField = <h2 className="intro-header">{value || field.placeholder}</h2>;
                break;
            case 'intro_skill':
                returnField = <li className="intro-skill">{value || field.placeholder}</li>;
                break;
            case 'experience_company':
                returnField = <h2 className="company-name">{value || field.placeholder}</h2>;
                break;
            case 'experience_city':
                returnField = <p className="company-city">{value || field.placeholder}</p>;
                break;
            case 'experience_date':
                returnField = <p className="company-date">{value || field.placeholder}</p>;
                break;
            case 'experience_title':
                returnField = <h2 className="role-title">{value || field.placeholder}</h2>;
                break;
            case 'education_facility':
                returnField = <h2 className="education-facility">{value || field.placeholder}</h2>;
                break;
            case 'education_degree':
                returnField = <p className="education-degree"> {value || field.placeholder}</p>;
                break;
            case 'education_graduation_date':
                returnField = <p className="education-graduation-date">{value || field.placeholder}</p>;
                break;
            case 'education_gpa':
                returnField = <p className="education-gpa">{value || field.placeholder}</p>;
                break;
            case 'education_minor':
                returnField = <p className="education-minor">{value || field.placeholder}</p>;
                break;
            case 'email':
                returnField = <p>{value || field.placeholder}</p>;
                break;
            case 'intro_mission':
                returnField = <p className="intro-mission">{value || field.placeholder}</p>;
                break;
            case 'intro_long':
                returnField = <p className="intro-long"> {value || field.placeholder}</p>;
                break;
            case 'experience_description':
                returnField = <p className="experience-description">{value || field.placeholder}</p>;
                break;
            case 'experience_responsibility':
                returnField = <li className="experience-responsibility">{value || field.placeholder}</li>;
                break;
            default:
                returnField = <p>Field Not Found</p>;
                break;
        }
    }

    return returnField;
};

export default EditHelper;