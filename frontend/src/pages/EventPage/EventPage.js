import { View, ScrollView, Image } from "react-native";

export const EventPage = ({ route }) => {
    const { data } = route.params;

    return (
        <View>
            <ScrollView contentContainerStyle={styles.main}>
            <Image
                source={data.image}
                defaultSource={require('../../assets/market_stand.png')}
                style={{ width: 400, height: 250 }}
            />
            </ScrollView>
        </View>
    )
}

const styles = {
    main: {
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '100%',
      },
}