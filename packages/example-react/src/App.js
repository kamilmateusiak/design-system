import {
  Button,
  Form,
  RadioButton,
} from '@livechat/design-system-react-components';

function App() {
  return (
    <div>
      <Form
        formFooter={
          <Button kind="primary" type="button">
            Save changes
          </Button>
        }
        helperText="Use form layout to arrange fields within a form using standard spacing. We recomme stacking fields vertically for easier scanning and faster completion, but you can also arrange them vertically."
        labelText="Settings"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <RadioButton checked id="gender-radio">
            Male
          </RadioButton>
          <RadioButton id="gender-radio">Female</RadioButton>
        </div>
      </Form>
      <Button>Simple button component</Button>
    </div>
  );
}

export default App;
