import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ListView,TouchableHighlight } from 'react-native';
import {AppConfig} from '../services/AppConfig';

export class HomeScreen extends React.Component {
    static navigationOptions = { title: 'SP' };
    
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Exam', 'Tutorial']),
        };
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        console.log("AppConfig.END_POINT_URL"+AppConfig.END_POINT_URL);
        /*var data = {
            "query":
            [
                {
                    "$match":{
                            "type":"tutorial"
                        }
                },
                {
                    "$group":{
                            "_id": "$class",
                            "id": { "$first": "$_id" },
                            "class": { "$first": "$class" },
                            "class_title": { "$first": "$class_title" },
                            "subject": { "$first": "$subject" },
                            "lesson": { "$first": "$lesson" },
                            "topic": { "$first": "$topic" }
                        }
                },
                {
                  "$project":{
                      "_id":"$id",
                      "class":"$class",
                      "class_title":"$class_title",
                      "subject":"$subject",
                      "lesson":"$lesson",
                      "topic":"$topic"
                      }
                  } ,
                {
                  "$sort":{
                            "class":1
                      }
                  }  
            ]
            
        };

        fetch(AppConfig.END_POINT_URL+'/getDataAggregate',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:data
          })
          .then((response) => response.json())
          .then((responseData) => {
            conssole.log(response);
           // this.setState({
             // movies: responseData.movies,
           // });
          })
          .done();
          */
      }

    _onPressRow(rowID, rowData) {
        /* rowData.isSelect = !rowData.isSelect;
         var dataClone = this.state.data;
         dataClone[rowID] = rowData;
         this.setState({
             data: dataClone
         });*/
        // console.log(rowData);
        navigate('Standard', { name: 'Jane' });
     }
   
    render() {
        const { navigate } = this.props.navigation;
        return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow = {this._renderRow.bind(this)}
            />
        );
    }

    _renderRow(rowData, rowID) {
        const { navigate } = this.props.navigation;
        return (
            /*<TouchableHighlight onPress={this._onPressRow.bind(rowID, rowData)}>*/

            <TouchableHighlight 
            underlayColor='transparent'
            style = {styles.container} 
            onPress={ ()=>  navigate('Standard', { name: rowData})}>    
                <View>
                    <Text style={styles.text}>{rowData}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
    },
    text: {
        marginLeft: 12,
        fontSize: 22      
    },
});
