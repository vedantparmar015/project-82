import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.iconImage}></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>New Story</Text>
                </View>
              </View>
              <View style={styles.fieldsContainer}>
                <ScrollView>
                  <Image
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}></Image>
                  <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                    <DropDownPicker
                      items={[
                        { label: 'Image 1', value: 'image_1' },
                        { label: 'Image 2', value: 'image_2' },
                        { label: 'Image 3', value: 'image_3' },
                        { label: 'Image 4', value: 'image_4' },
                        { label: 'Image 5', value: 'image_5' },
                      ]}
                      defaultValue={this.state.previewImage}
                      containerStyle={{
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 10,
                      }}
                      onOpen={() => {
                        this.setState({ dropdownHeight: 170 });
                      }}
                      onClose={() => {
                        this.setState({ dropdownHeight: 40 });
                      }}
                      style={{ backgroundColor: 'transparent' }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                      }}
                      dropDownStyle={{ backgroundColor: '#2f345d' }}
                      labelStyle={{
                        color: 'white',
                        fontFamily: 'Bubblegum-Sans',
                      }}
                      arrowStyle={{
                        color: 'white',
                        fontFamily: 'Bubblegum-Sans',
                      }}
                      onChangeItem={(item) =>
                        this.setState({
                          previewImage: item.value,
                        })
                      }
                    />
                  </View>
    
                  <TextInput 
                    style={styles.inputFont}
                    onChangeText = {title=>this.setState({title})}
                    placeholder = {'Title'}
                    placeholderTextColor = 'white'
                   />
    
                   <TextInput 
                    style={[
                      styles.inputFont,
                      styles.inputFontExtra,
                      styles.inputTextBig
                      ]}
                    onChangeText = {description=>this.setState({description})}
                    placeholder = {'Description'}
                    multiline = {true}
                    numberOfLines = {4}
                    placeholderTextColor = 'white'
                   />
                   
                   <TextInput 
                    style={[
                      styles.inputFont,
                      styles.inputFontExtra,
                      styles.inputTextBig
                      ]}
                    onChangeText = {story=>this.setState({story})}
                    placeholder = {'Story'}
                    multiline = {true}
                    numberOfLines = {30}
                    placeholderTextColor = 'white'
                   />
    
                    <TextInput 
                    style={[
                      styles.inputFont,
                      styles.inputFontExtra,
                      styles.inputTextBig
                      ]}
                    onChangeText = {moral=>this.setState({moral})}
                    placeholder = {'Moral'}
                    multiline = {true}
                    numberOfLines = {4}
                    placeholderTextColor = 'white'
                   />
    
                </ScrollView>
              </View>
              <View style={{ flex: 0.08 }} />
            </View>
          );
    }
}

