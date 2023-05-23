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
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    flex: 1,
    color: 'black',
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
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
