import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#00ADEF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",   
        padding: 10,
    },
    header: {
        flexDirection: "row",    
        alignItems: "center",
        justifyContent: "flex-start",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    accountContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#A4A4A4"
    },
    iconContainer: {
        padding: 13,
        marginRight: 10,
        backgroundColor: "#00adef",
        borderRadius: 5,
    }
})

export default styles;