import { View, Text, TextInput, Button, Switch } from "react-native";
import { useForm, Controller } from "react-hook-form";

const App = (): JSX.Element => {
  const { control, handleSubmit, formState: { errors } } = useForm<Product>({
    defaultValues: {
      discontinued: true,
      name: '',
      supplier: {
        companyName: '',
        contactTitle: '',
        address: {
          street: '',
          postalCode: 0,
        }
      }
    },
    mode: 'onChange'
  });
  console.log("Reload")
  const submit = (data: Product): void => console.log(data); // POST request
  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur, name, ref } }): JSX.Element => {
          return (
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
              }}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )
        }}
      />
      <Controller
        control={control}
        name="discontinued"
        render={({ field: { onChange, value } }): JSX.Element => {
          return (
            <Switch
              value={value}
              onValueChange={onChange}
            />
          )
        }}
      />
      <Button title="send" onPress={handleSubmit(submit)} />
    </>
  );
};

interface Product {
  name: string,
  discontinued?: boolean,
  supplier?: Supplier,
}
interface Supplier {
  companyName: string,
  contactTitle: string,
  address: Address
}
interface Address {
  street: string,
  postalCode: number
}

export default App;
