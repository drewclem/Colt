import { extend } from 'vee-validate'
import { required, email, } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Hey! We need this info to move forward.'
});

extend('email', {
  ...email,
  message: "Oops! Looks like this isn't a valid email."
})
