import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const UserSettingForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.userSetting?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="bio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </Label>
        
          <TextField
            name="bio"
            defaultValue={props.userSetting?.bio}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="bio" className="rw-field-error" />

        <Label
          name="theme"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Theme
        </Label>
        
          <TextField
            name="theme"
            defaultValue={props.userSetting?.theme}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="theme" className="rw-field-error" />

        <Label
          name="languageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Language id
        </Label>
        
          <TextField
            name="languageId"
            defaultValue={props.userSetting?.languageId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="languageId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserSettingForm
