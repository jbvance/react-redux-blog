import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit (values) {
        console.log(values);
    }

    render() {
        // handleSubmit is a property added by redux form when you wire it up
        // at the export at the bottom of the file.
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
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