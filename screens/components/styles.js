import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
    color: '#000',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
    fontSize: 18,
  },
  resetButton: {
    color: 'blue',
    marginTop: 10,
  },
  checkedItem: {
    //backgroundColor: "#c0c0c0",
    textDecorationLine: 'line-through',
  },
});
