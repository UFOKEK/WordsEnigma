import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'



const TryRowForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.tryRow?.id)
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
          name="gameId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game id
        </Label>
        
          <TextField
            name="gameId"
            defaultValue={props.tryRow?.gameId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="gameId" className="rw-field-error" />

        <Label
          name="tries"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tries
        </Label>
        
          <NumberField
            name="tries"
            defaultValue={props.tryRow?.tries}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="tries" className="rw-field-error" />

        <Label
          name="rowSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Row size
        </Label>
        
          <NumberField
            name="rowSize"
            defaultValue={props.tryRow?.rowSize}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="rowSize" className="rw-field-error" />

        <Label
          name="correct"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Correct
        </Label>
        
          <CheckboxField
            name="correct"
            defaultChecked={props.tryRow?.correct}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="correct" className="rw-field-error" />

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

export default TryRowForm
