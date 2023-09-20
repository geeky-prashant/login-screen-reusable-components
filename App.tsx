import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MainContainer from './components/Containers/MainContainer';
import BigText from './components/Texts/BigText';
import RegularText from './components/Texts/RegularText';
import SmallText from './components/Texts/SmallText';
import StyledTextInput from './components/Inputs/StyledTextInput';
import RegularButton from './components/Buttons/RegularButton';

export default function App() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MainContainer>
      <BigText>Login to your Account</BigText>
      <RegularText>Enter your credentials</RegularText>
      <SmallText style={{ marginBottom: 20 }}>Grab 20% Coupon</SmallText>
      <StyledTextInput
        label="Email Address"
        icon='email'
        value={email}
        onChangeText={setEmail}
        placeholder='prashant@gmail.com'
        keyboardType='email-address'
        style={{ marginBottom: 20, marginTop: 8 }}
      />

      <StyledTextInput
        label="Full Name"
        icon='account-circle'
        value={fullName}
        onChangeText={setFullName}
        placeholder='Prashant Bhardwaj'
        style={{ marginBottom: 20, marginTop: 8 }}
      />

      <StyledTextInput
        label="Password"
        icon='lock-open'
        value={password}
        onChangeText={setPassword}
        placeholder='************'
        isPassword={true}
        style={{ marginBottom: 20, marginTop: 8 }}
      />

      <RegularButton onPress={() => alert("Ouch! You pressed me!")} style={{ marginTop: 20 }}>Login Now</RegularButton>
      <StatusBar style="auto" />
    </MainContainer>
  );
}
