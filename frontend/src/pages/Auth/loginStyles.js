import { StyleSheet } from 'react-native';
import { Colors } from '../../Styles.js';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16%',
    backgroundColor: Colors.LOGIN_BACKGROUND,
    fontSize: 16.5,
  },
  field: {
    marginTop: '8%',
    height: '15%',
  },
  label: {
    color: 'white',
    fontSize: 16.5,
    fontWeight: '500',
    paddingLeft: '8%',
  },
  container: {
    padding: '5%',
    width: '100%',
    position: 'relative',
    flex: 1,
  },
  brandName: {
    fontSize: 48,
    marginTop: '10%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: '8%',
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 20,
    textAlign: 'center',
    color: '#071930',
    marginBottom: '10%',
    fontWeight: 600,
    bottom: '6%',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#071930',
    backgroundColor: 'white',
    color: 'black',
    padding: '0%',
    marginVertical: '3%',
    borderRadius: 100,
    height: '55%',
    fontSize: 16.5,
    fontWeight: '400',
    paddingLeft: '7%',
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '36%',
    height: '68%',
    backgroundColor: Colors.LOGIN_BUTTON,
    borderRadius: 50,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  forgotPassText: {
    color: '#071930',
    fontWeight: 'bold',
    marginTop: '0%',
    textDecorationLine: 'underline',
    paddingLeft: '8%',
    marginTop: '5%',
    color: 'white',
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: '3%',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '10%',
    width: '110%',
  },
  footerText: {
    color: '#071930',
    fontWeight: 'bold',
  },
  signupBtn: {
    color: '#E5B07A',
    fontWeight: 'bold',
    paddingLeft: '8%',
    marginTop: '5%',
    textDecorationLine: 'underline',
  },
  // utils
  wFull: {
    width: '100%',
    paddingBottom: '40%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: '10%',
  },
  mr7: {
    marginRight: '7%',
  },
});
