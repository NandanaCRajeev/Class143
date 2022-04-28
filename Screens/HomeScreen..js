import React,{Component} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {RFValue} from 'react-native-responsive-fondsize';
import { Header } from "react-native/Libraries/NewAppScreen";
import axios from 'axios'

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            movieDetails:{}
        }
    }

    getMovie=()=>{
        const url='http://127.0.0.1:5000/get-movie';
        axios
        .get(url)
        .then(response=>{
            let details=response.data.data;
            details['duration']=this.timeConvert(details.duration);
            this.setState({movieDetails:details})

        })      
        .catch(error=>{
            console.log(error.message)
})
    }

    likedMovie=()=>{
        const url='http://127.0.0.1:5000/liked-movie';
        axios
        .post(url)
        .then(response=>{
            this.getMovie();

        })      
        .catch(error=>{
            console.log(error.message)
})
    }

    unlikedMovie=()=>{
        const url='http://127.0.0.1:5000/unliked-movie';
        axios
        .post(url)
        .then(response=>{
            this.getMovie();

        })      
        .catch(error=>{
            console.log(error.message)
})
    }

    notWatched=()=>{
        const url='http://127.0.0.1:5000/did-not-watch';
        axios
        .post(url)
        .then(response=>{
            this.getMovie();

        })      
        .catch(error=>{
            console.log(error.message)
})
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header
                    centerComponent={{
                        text:"movie recomended",
                        style:styles.headerTitle,

                    }}
                    rightComponent={{icon:"search",color:'#fff'}}
                    backgroundColor={'#d500f9'}
                    containerStyle={{flex:1}}
                    />
                </View>
                 <View style={styles.subContainer}>

                 </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})