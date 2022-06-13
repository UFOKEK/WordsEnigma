import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const LetterForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.letter?.id)
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
          name="letter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Letter
        </Label>
        
          <TextField
            name="letter"
            defaultValue={props.letter?.letter}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="letter" className="rw-field-error" />

        <Label
          name="tryRowId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Try row id
        </Label>
        
          <TextField
            name="tryRowId"
            defaultValue={props.letter?.tryRowId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="tryRowId" className="rw-field-error" />

        <Label
          name="modifiedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Modified at
        </Label>
        
          <DatetimeLocalField
            name="modifiedAt"
            defaultValue={formatDatetime(props.letter?.modifiedAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="modifiedAt" className="rw-field-error" />

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

export default LetterForm
