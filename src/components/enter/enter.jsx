import React, { useState }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import { Form, Field } from 'react-final-form';
import { useHistory } from "react-router-dom";

// onChange={e => dispatch(ActionCreator.setLogin(e.target.value))}

function Enter(props){
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const avatar = useSelector((state) => state.User.avatar);

  
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/;
    
    const onSubmit = async values => {
      await(300)
      dispatch(ActionCreator.setLogin(values.username))
      dispatch(ActionCreator.getUserAvatar())

    }
    
    const dispatch = useDispatch();
    return (
        <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Необходимое поле'
          }
          // if (!regexPass.test(values.password)) {
          //   errors.password = 'Слабый пароль'
          // }
          if (!values.password) {
            errors.password = 'Необходимое поле'
          }
          if (!values.confirm) {
            errors.confirm = 'Необходимое поле'
          } else if (values.confirm !== values.password) {
            errors.confirm = 'Пароли не совпадают'
          }
          return errors
        }}
        
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div>
                  <label>Username</label>
                  <input {...input} type="text" placeholder="Username"/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="confirm">
              {({ input, meta }) => (
                <div>
                  <label>Confirm</label>
                  <input {...input} type="password" placeholder="Confirm" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button 
              type="submit"
              disabled={submitting || pristine} 
             >
                Войти
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Сбросить
              </button>
            </div>
            <img src={avatar}></img>

          </form>
        )}
      />
      
    );
}


export default Enter;