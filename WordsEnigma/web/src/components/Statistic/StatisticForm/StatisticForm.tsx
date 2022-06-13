import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const StatisticForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.statistic?.id)
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
          name="gamePlayed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game played
        </Label>
        
          <NumberField
            name="gamePlayed"
            defaultValue={props.statistic?.gamePlayed}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="gamePlayed" className="rw-field-error" />

        <Label
          name="gameWon"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game won
        </Label>
        
          <NumberField
            name="gameWon"
            defaultValue={props.statistic?.gameWon}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="gameWon" className="rw-field-error" />

        <Label
          name="gameLost"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game lost
        </Label>
        
          <NumberField
            name="gameLost"
            defaultValue={props.statistic?.gameLost}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="gameLost" className="rw-field-error" />

        <Label
          name="streak"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Streak
        </Label>
        
          <NumberField
            name="streak"
            defaultValue={props.statistic?.streak}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="streak" className="rw-field-error" />

        <Label
          name="average"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Average
        </Label>
        
          <NumberField
            name="average"
            defaultValue={props.statistic?.average}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="average" className="rw-field-error" />

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

export default StatisticForm
