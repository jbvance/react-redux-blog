import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }


    render() {
        return (
            <form>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
// values contains all form entries in javascript object 
// (ex) {title: 'This is the title', categories: 'New Category', content: 'This is the post content' }
    const errors = {};

    //validate inputs from 'values'
    if (!values.title) {
        errors.title = "Please enter a title.";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }

    if (!values.content) {
        errors.content = "Enter some content!";
    }

    // if errors is empty, redux-form assumes form is valid.
    // if errors has ANY properties, redux-form assumes form is invalid.
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);