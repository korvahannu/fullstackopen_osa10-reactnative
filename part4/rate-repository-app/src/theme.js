import Constants from 'expo-constants';
import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    backgroundDefault: '#e1e4e8',
    backgroundItem:'white'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios:'Arial',
      android:'Roboto',
      default:'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBar: {
    height:Constants.statusBarHeight+64,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#24292e',
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-end',
    padding:12
  },
  appBarContainer: {
    display:'flex',
    flexDirection:'column',
    height:32
  },
  appBarText: {
    color:'#FFF',
    fontWeight:'bold',
    height:32,
    fontSize:24,
    marginLeft:32,
    marginRight:32
  },
  repositoryList: {
    display:'flex',
    flexDirection:'column',
  },
  repositoryItem: {
    backgroundColor:'white',
    padding:16,
  },
  repositoryItemAvatar: {
    width:50,
    height:50,
    borderRadius:8,
    marginRight:16
  },
  textField: {
    padding: 16, backgroundColor:'white', height:64, marginTop:8, marginBottom:8, marginLeft:8, marginRight:8, borderRadius:8, fontSize:16,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:'#ccc',
    borderStyle:'solid'
  },
  button: {
    height:64, color:'white', backgroundColor:'#0366d6', fontSize:24, borderRadius:8,
    textAlign:'center'
  },
  buttonText: {
    fontSize:24, color:'white', paddingTop:16, marginLeft:'auto', marginRight:'auto'
  }
};

export default theme;