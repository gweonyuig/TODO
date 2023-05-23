import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSignUp = () => {
    // 비밀번호 일치 여부 확인
    if (password === confirmPassword) {
      // 회원가입 기능 구현
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      // 회원가입 성공 시 추가 로직 작성
      props.navigation.navigate('Login');
    } else {
      // 비밀번호 불일치 오류 처리
      setPasswordMatchError(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
      />
      {passwordMatchError && (
        <Text style={styles.errorText}>비밀번호가 일치하지 않습니다.</Text>
      )}
      <Button title="회원가입" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default Signup;
