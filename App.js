import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null)

  const handleButtonPress = (currentValue) => {
    if(displayValue === '0') {
      setDisplayValue(currentValue.toString())
    } else {
      setDisplayValue(displayValue + currentValue.toString())
    }
  }

  const handleOperatorPress = (newOperator) => {
    if(previousValue !== null && newOperator !== '=') {
      const currentValue = parseFloat(displayValue);

      const result = eval(`${previousValue} ${operator} ${currentValue}`)
      console.log(result)
      setDisplayValue(result.toString())
    } else {
      setPreviousValue(parseFloat(displayValue));
    }

    setDisplayValue('0');
    setOperator(newOperator === "=" ? null : newOperator)
  }

  const handleEqualPress = () => {
    const currentValue = parseFloat(displayValue)
    let result = 0;

    switch(operator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
          result = previousValue - currentValue;
          break;
      case "*":
          result = previousValue * currentValue;
          break;
      case "/":
          result = previousValue / currentValue;
          break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setPreviousValue(null);
    setOperator(null)
  }

  const clearAll = () => {
    setDisplayValue('0');
    setOperator(null)
    setPreviousValue(null)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
        backgroundColor: "red"
      }}>
        <Text style={styles.buttonText}>{displayValue}</Text>
        <Text style={styles.buttonText}>{displayValue}</Text>
      </View>
      


      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress(7)} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(8)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(9)} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorPress('/')} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress(4)} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(5)} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(6)} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorPress('*')} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress(1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(2)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress(3)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorPress('-')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress(0)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleEqualPress()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => clearAll()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOperatorPress('+')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 80,
    margin: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24
  }
});
