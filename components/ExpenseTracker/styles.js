// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#0077CC",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    elevation: 5,
  },
  categoryContainer: {
    flexDirection: "row",
  },
  category: {
    width: "34%",
    alignItems: "center",
    backgroundColor: "#0077EFF0",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#2E2E2E",
  },
  selectedCategory: {
    backgroundColor: "#2E9AFE",
  },
  resultContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0077EFF0",
    justifyContent: 'space-between',
    paddingRight: 40,
    alignItems: 'center',
    padding: 20,
  },
  transferContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0077EFF0",
    justifyContent: 'flex-end',
    paddingRight: 40,
    alignItems: 'center',
    padding: 20,
  },
  amountContainer: {
        flexDirection: "row",
        alignItems: "center"
  },
  actionContainer: {
        backgroundColor: "#0077EFF0",
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 20,
        paddingVertical: 10,
  },   
  actionTitle: {
        color: "#ddd",
        fontSize: 14
  },
  action: {
    color: "#fff",
    fontWeight: '500',
    fontSize: 15
  }, 
  result: {
    alignItems: "center",
    justifyContent:"center",
    color: "#fff",
    fontSize: 38,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  numberpadContainer: {
    width: '80%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  numberpadRowContainer: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
  },
  characterContainer: {
    width: "90%",
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: "#E6E6E6"
  },
  button: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  characterButton: {
    width: '25%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#848484',
    fontSize: 32,
  },
});

export default styles;
