import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const WordForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.word?.id)
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
          name="word"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Word
        </Label>
        
          <TextField
            name="word"
            defaultValue={props.word?.word}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="word" className="rw-field-error" />

        <Label
          name="definition"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Definition
        </Label>
        
          <TextField
            name="definition"
            defaultValue={props.word?.definition}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="definition" className="rw-field-error" />

        <Label
          name="example"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Example
        </Label>
        
          <TextField
            name="example"
            defaultValue={props.word?.example}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="example" className="rw-field-error" />

        <Label
          name="synonym"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Synonym
        </Label>
        
          <TextField
            name="synonym"
            defaultValue={props.word?.synonym}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="synonym" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>
        
          <NumberField
            name="size"
            defaultValue={props.word?.size}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="source"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source
        </Label>
        
          <TextField
            name="source"
            defaultValue={props.word?.source}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="source" className="rw-field-error" />

        <Label
          name="languageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Language id
        </Label>
        
          <TextField
            name="languageId"
            defaultValue={props.word?.languageId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="languageId" className="rw-field-error" />

        <Label
          name="wordBankId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Word bank id
        </Label>
        
          <TextField
            name="wordBankId"
            defaultValue={props.word?.wordBankId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="wordBankId" className="rw-field-error" />

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

export default WordForm
