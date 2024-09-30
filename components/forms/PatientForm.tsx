"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h2 className="header">Hi there!</h2>
          <p className="text-dark-700">
            We're excited to have you join us! Please fill out the form below to
            schedule your first appointment.
          </p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="User"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@mail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;

/*  In this example, we have a form that takes a single field,  username . We define a schema for the form using  zod , and then use  zodResolver  from  @hookform/resolvers/zod  
to validate the form. We then use  useForm  from  react-hook-form  to create a form instance. We pass the schema to the form instance, and also provide default values for the form fields. 
We then define a function,  onSubmit , that will be called when the form is submitted. This function will receive the form values as an argument. */

/* Finally, we render the form using the  Form  component from our UI library. We pass the form instance to the  Form  component, and then render the form fields using the  FormField  component. 
The  FormField  component takes a  control  prop, which is the form instance, a  name  prop, which is the name of the field, and a  render  prop, which is a function that renders the form field. 
In this case, we render an input field with a label, description, and message. 
When the form is submitted, the  onSubmit  function will be called with the form values. */

/* Conclusion 
In this article, we looked at how to create forms in React using the  react-hook-form  library. We saw how to create a form instance, define form fields, validate the form, and handle form submission. 
We also looked at how to integrate the form with a UI library to create a consistent and reusable form component. 
react-hook-form  is a powerful library that makes it easy to work with forms in React. It provides a flexible and efficient way to manage form state, validate form data, and handle form submission. 
You can create robust and user-friendly forms in your React applications. 
*/
