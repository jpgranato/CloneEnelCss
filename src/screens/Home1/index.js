import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from './styles';
import ImgProfile from '../../assets/images/enel.png'

export const Home1 = () => {
    return (
        <View style={Styles.Container}>
           
            <View>
                <Image source={ImgProfile} style={Styles.ImgProfile} />
            </View>

            <ScrollView>
            
                <View style={Styles.View1}>
                    <Text style={Styles.Text1View1}>Acesso Rápido Código de Barras e Pagamento</Text>
                    <Text style={Styles.Text2View1}>Aproveite os serviços online da Enel</Text>
                </View>
           
                <View style={Styles.View2}>
                    <Text>Número de Cliente (sem o dígito)</Text>
                    <TextInput style={Styles.Input1} />

                    <Text>CPF / CNPJ</Text>
                    <TextInput style={Styles.Input2} />
                    <TextInput />
                </View>

            
                <View style={{
                    marginTop: 80,
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginLeft: 3,
                    marginRight: 3
                }}>

                    <TouchableOpacity style={Styles.CANCELAR}>
                        <Text style={Styles.TextoBotaoCANCELAR}>CANCELAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.ACESSAR}>
                        <Text style={Styles.TextoBotaoACESSAR}>ACESSAR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>

    )
}