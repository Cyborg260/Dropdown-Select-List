import React, { useState } from 'react'
import { SafeAreaView,StyleSheet, View } from 'react-native';

import SelectList from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = useState("");
  
  const Data = 
  [
    {key:"You Seleted Islamabad",value:"Islamabad"},
    {key:"You Seleted Lahore",value:"Lahore"},
    {key:"You Seleted Karachi",value:"Karachi"},
    {key:"You Seleted Faislabad",value:"Faislabad"},
    {key:"You Seleted Swat",value:"Swat"},
    {key:"You Seleted Kashmir",value:"Kashmir"},
    {key:"You Seleted Multan",value:"Multan"},
    {key:"You Seleted Nawabshah",value:"Nawabshah"},
  ];

  return(
    <SafeAreaView style={styles.container}>
<View>

    <SelectList 
    setSelected={setSelected} 
    data={Data} 
    onSelect={() => alert(selected)} 
    dropdownStyles={{backgroundColor:"skyblue"}}
    dropdownItemStyles={{marginHorizontal:10}}
    dropdownTextStyles={{color:"#fff",fontWeight:"bold"}}
    maxHeight={250}
    />
    </View>
    </SafeAreaView>
  )

};
const styles = StyleSheet.create({
container:{
  flex :1,
  paddingHorizontal:20,
  paddingVertical:50,
  borderColor:"skyblue"
}
})


export default App;
