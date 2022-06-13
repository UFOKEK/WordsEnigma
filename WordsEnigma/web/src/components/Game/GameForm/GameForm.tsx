import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const GameForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.game?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.game?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="tries"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tries
        </Label>
        
          <NumberField
            name="tries"
            defaultValue={props.game?.tries}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="tries" className="rw-field-error" />

        <Label
          name="startedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Started at
        </Label>
        
          <DatetimeLocalField
            name="startedAt"
            defaultValue={formatDatetime(props.game?.startedAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="startedAt" className="rw-field-error" />

        <Label
          name="finishedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Finished at
        </Label>
        
          <DatetimeLocalField
            name="finishedAt"
            defaultValue={formatDatetime(props.game?.finishedAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="finishedAt" className="rw-field-error" />

        <Label
          name="correct"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Correct
        </Label>
        
          <CheckboxField
            name="correct"
            defaultChecked={props.game?.correct}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="correct" className="rw-field-error" />

        <Label
          name="duration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duration
        </Label>
        
          <NumberField
            name="duration"
            defaultValue={props.game?.duration}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="duration" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <TextField
            name="userId"
            defaultValue={props.game?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="wordId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Word id
        </Label>
        
          <TextField
            name="wordId"
            defaultValue={props.game?.wordId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="wordId" className="rw-field-error" />

        <Label
          name="wordsBankId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Words bank id
        </Label>
        
          <TextField
            name="wordsBankId"
            defaultValue={props.game?.wordsBankId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="wordsBankId" className="rw-field-error" />

        <Label
          name="statisticsId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Statistics id
        </Label>
        
          <TextField
            name="statisticsId"
            defaultValue={props.game?.statisticsId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="statisticsId" className="rw-field-error" />

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

export default GameForm
