import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import{Card} from 'react-native-elements';

import data from './data.json';

const DEVICE = Dimensions.get('window');

const numberFormat = (value) =>
  new Intl.NumberFormat('locales', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
export default class HomeScreen extends React.Component {
  constructor(props) {
    var getName = props.route.params.key.Name;
    super(props);
    this.state = {
      userName: getName,
      data: data.produk,
      searchText: '',
      totalPrice: 0,
    };
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  updatePrice() {
    alert('oke');
    return false;
    price = this.state.totalPrice + parseInt(price);

    this.setState({ totalPrice: price });
    console.log(this.state);
  }

  SavePrice(harga, stok) {
    if (stok <= 0) {
      alert('Out Of Stock')
    } else {
      var price = this.state.totalPrice + parseInt(harga);
      this.setState({ totalPrice: price });

    }

  }

  render() {
    console.log(data);
    return (
      <View style={styles.container}>
        <View
          style={{
            minHeight: 50,
            width: DEVICE.width * 0.88 + 20,
            marginVertical: 8,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>
              Hai,{'\n'}
              {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
                <Text style={styles.headerText}>{this.state.userName}</Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>
              Total Harga{'\n'}
              <Text style={styles.headerText}>
                {this.currencyFormat(this.state.totalPrice)}
              </Text>
            </Text>
          </View>
          <View></View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder="Cari barang.."
            onChangeText={(searchText) => this.setState({ searchText })}
          />
        </View>
        <FlatList
          data={this.state.data}
          style={styles.container}
          numColumns={2}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View>
              <Card containerStyle={[styles.card, { height: 280 }]}>
                <Card.Title>{item.nama}</Card.Title>
                <Card.Divider />
                <Image
                  style={styles.tubnail}
                  source={{
                    uri: `${item.gambaruri}`,
                  }}
                />
                <Text style={styles.name}>{item.kategori}</Text>
                <Text style={styles.name}>{item.vendor}</Text>
                <Text style={styles.itemPrice}>
                {`${(numberFormat(item.harga))}`}
                </Text>
                <Text style={styles.itemStock}>
                  Sisa stok: {item.stock - 1}
                </Text>
                <Button
                  title="Buy"
                  color="blue"
                  onPress={() =>
                    this.SavePrice(item.harga, item.stock)
                  }
                />
              </Card>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />


       
      </View>
    );
  }
}

class ListItem extends React.Component {
  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data.item;
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: data.gambaruri }}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemName}>
          {data.nama}
        </Text>
        <Text style={styles.itemPrice}>
          {this.currencyFormat(Number(data.harga))}
        </Text>
        <Text style={styles.itemStock}>Sisa stok: {data.stock-1 }</Text>
        <Button title="BELI" color="blue" onPress={this.props.updatePrice} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  //? Lanjutkan styling di sini
  card: {
    width: DEVICE.width / 2.3,
    margin: 12,
  },

  itemContainer: {
    width: DEVICE.width * 0.44,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  itemImage: {
    width: DEVICE.width * 0.20,
    height: DEVICE.width * 0.20
  },
  itemName: {
    fontSize: 20
  },
  tubnail: {
    width: 75,
    height: 50,
  },

  itemPrice: {
    fontSize: 14
  },
  itemStock: {
    fontSize: 14
  },
  itemButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: DEVICE.width * 0.04,
    width: DEVICE.width * 0.30,
    height: DEVICE.width * 0.1
  },
  buttonText: {
    color: 'black'
  },
});
