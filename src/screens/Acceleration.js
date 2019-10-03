import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

import AccelerationItem from '../components/AccelerationItem';
import moment from 'moment'

const accelerations = [{
  "slug": "reactnative-online-1",
  "name": "React Native",
  "is_disabled": false,
  "subscription_start_at": "2019-07-08T00:00:00-03:00",
  "subscription_finish_at": "2019-07-28T23:59:59-03:00",
  "start_at": "2019-08-17T00:00:00-03:00",
  "finish_at": "2019-11-03T00:00:00-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "7800FF",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-19T00:00:00-03:00",
  "start_at": "2019-08-19T00:00:00-03:00",
  "finish_at": "2019-10-23T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-20T00:00:00-03:00",
  "start_at": "2019-08-20T00:00:00-03:00",
  "finish_at": "2019-10-24T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-23T00:00:00-03:00",
  "start_at": "2019-09-23T00:00:00-03:00",
  "finish_at": "2019-11-27T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-24T00:00:00-03:00",
  "start_at": "2019-09-24T00:00:00-03:00",
  "finish_at": "2019-11-28T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "python-online-1",
  "name": "Python Women",
  "is_disabled": false,
  "subscription_start_at": "2019-07-22T00:00:00-03:00",
  "subscription_finish_at": "2019-08-11T23:59:59-03:00",
  "start_at": "2019-08-24T00:00:00-03:00",
  "finish_at": "2019-11-02T23:59:59-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "212133",
  "company_count": 1
}]

const Acceleration = (props) => {
  const [accelerationSelected, setAccelerationSelected] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  const onPress = (item) => {
    setAccelerationSelected(item)
    setModalOpen(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }}
        />
        <TouchableHighlight className={'user-image-btn'} onPress={() => props.navigation.navigate('Profile')}>
          <Image
            className="profile-image"
            style={styles.profileImage}
            source={{ uri: "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm" }}
          />

        </TouchableHighlight>
      </View>
      <Text style={styles.title}>Acelerações</Text>
      <FlatList
        data={accelerations}
        keyExtractor={item => item.slug}
        renderItem={({ item, index }) => <AccelerationItem onPress={onPress} item={item} />}
      />
      <Modal
        visible={modalOpen}
        onRequestClose={() => {
          setModalOpen(false)
        }}
      >
        <View
          style={styles.modal}
        >

          <Image
            style={styles.imageModal}
            source={{ uri: accelerationSelected.banner_url || 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png' }}
          />
          <Text style={styles.title}>{accelerationSelected.name}</Text>
          <Text style={styles.subTitle}>Local: {accelerationSelected.location}</Text>
          <Text style={styles.subTitle}>Inscrição + desafio enviado até {moment(accelerationSelected.subscription_finish_at).format('DD/MM/YYYY')}</Text>
          <View style={styles.buttonModal}>
          <TouchableOpacity className={'close-modal-btn'} onPress={() => {setModalOpen(false)}}>
            <Text>FECHAR</Text>
          </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  );
}

Acceleration.navigationOptions = {
  header: null
}

export default Acceleration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#7800ff',
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55,
    justifyContent: 'space-between'
  },
  modal: {
    padding: 20
  },
  headerImage: {
    height: 45,
    width: 250
  },
  profileImage: {
    borderRadius: 22,
    height: 45,
    width: 45
  },
  imageModal: {
    width: '100%',
    height: 300,
    padding: 20
  },
  title: {
    color: '#7800ff',
    fontSize: 30,
    padding: 16
  },
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16
  },
  buttonModal:{
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7800ff',
    height: 40
  }
});
