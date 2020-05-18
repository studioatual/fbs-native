import React, { useState, useEffect } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { Alert, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import BalanceItem from '../../../components/BalanceItem';
import ChartBox from '../../../components/ChartBox';
import Topbar from '../../../components/Topbar';
import api from '../../../services/api';
import { Container, Background } from './styles';
import BgImage from '../../../assets/Background.jpg';
import SelectAccount from '../../../components/SelectAccount';
import { useAuth } from '../../../contexts/auth';

const Dashboard = () => {
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState(null);
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const getBalances = async (id) => {
    setLoading(true);
    let response;
    try {
      if (id) {
        response = await api.get(`balances/${id}`);
        setBalances(response.data);
        setLoading(false);
      } else {
        response = await api.get('balances');
        setBalances(response.data);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(
        `Erro ${err.status}`,
        'Não foi possível conectar ao servidor'
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    const list = user.companies.map((company) => {
      return {
        id: company.id,
        name: String(company.name)
          .toLowerCase()
          .replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
          }),
      };
    });
    setAccountList([{ id: null, name: 'Todas as Contas' }, ...list]);
    setAccount(null);
    getBalances(null);
  }, []);

  function handleSelect(value) {
    setAccount(value);
    getBalances(value);
  }

  return (
    <Container>
      <Background source={BgImage} />
      <Topbar />
      <ModalDropdown
        options={accountList}
        animated
        defaultIndex={0}
        renderButtonText={(rowData) => rowData.name}
        onSelect={(idx, value) => handleSelect(value.id)}
        style={{
          marginHorizontal: 10,
          alignSelf: 'stretch',
          backgroundColor: 'rgba(255,255,255,0.1)',
          paddingHorizontal: 10,
          paddingVertical: 5,
          fontSize: 16,
          borderRadius: 5,
        }}
      />
      {loading ? (
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: 2,
          }}
        >
          <ChartBox />
          <FlatList
            data={balances}
            renderItem={({ item }) => (
              <BalanceItem
                description={item.description}
                total={parseFloat(item.total)}
                type={item.type}
              />
            )}
            keyExtractor={(item, index) => String(index)}
            style={{
              flexDirection: 'column',
              paddingHorizontal: 10,
              paddingBottom: 40,
              zIndex: 0,
            }}
          />
        </SafeAreaView>
      )}
    </Container>
  );
};

export default Dashboard;
