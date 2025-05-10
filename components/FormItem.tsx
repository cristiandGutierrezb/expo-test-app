import { Text, View, TextInput, Button, StyleSheet, SafeAreaView } from "react-native"
import { useForm, Controller } from "react-hook-form"

export default function FormItem() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    },
  })
  const onSubmit = (data: any) => console.log(data)
  // const onSubmit = (data: any) => {
    
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <TextInput
              placeholder="First name"
              style={styles.input}
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}

        <Controller
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <TextInput
              placeholder="Last name"
              style={styles.input}
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} color="#ffffff" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 3, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
  },
  errorText: {
    color: '#e74c3c',
    marginBottom: 10,
    fontSize: 14,
  },
});
