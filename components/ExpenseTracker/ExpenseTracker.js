import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ant from "react-native-vector-icons/AntDesign";
import * as math from "mathjs";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changeRecords, chooseType } from "../../store/Actions";
import { useEffect } from "react";
import { format } from "date-fns";

export default function ExpenseTracker({ navigation }) {
  const [result, setResult] = useState("0");
  const [background, setBackground] = useState("");
  const {
    expenseType,
    expenseCategory,
    expenseAccount,
    expenseReceiverAccount,
    records,
  } = useSelector((state) => state?.expense);
  const dispatch = useDispatch();
  const Accounts = [
    {
      name: "CASH",
    },
    {
      name: "ACCOUNT 1",
    },
    {
      name: "ACCOUNT 2",
    },
  ];

  let newRecords;
  let record;
  useEffect(() => {
    record = {
      category: expenseCategory,
      name: expenseAccount,
      balance: parseInt(result ? result : 0),
      type: expenseType,
      date: format(new Date(), "dd-MM-yyyy"),
    };
    newRecords = records ? [...records, record] : [record];
    dispatch(changeRecords(newRecords));
  }, [expenseAccount, expenseCategory, expenseType, result]);

  const handleSubmit = () => {
    alert(JSON.stringify(records));
  };

  function handlePress(button) {
    if (button === "=") {
      if (background) {
        setResult(math.evaluate(background).toString());
        setBackground(math.evaluate(background).toString());
      }
    } else if (button === "C") {
      setResult("");
    } else if (button === "⌫") {
      setResult(result.slice(0, -1));
      setBackground(background.slice(0, -1));
    } else if (["+", "-", "*", "/"].includes(button)) {
      setResult("");
      setBackground(background + button);
    } else {
      setResult(result !== "0" ? result + button : button);
      setBackground(background + button);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ant name="close" color={"#fff"} size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit}>
          <Ant name="check" color={"#fff"} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => dispatch(chooseType("INCOME"))}
          style={
            expenseType === "INCOME"
              ? [styles.category, styles.selectedCategory]
              : styles.category
          }
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>INCOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => dispatch(chooseType("EXPENSE"))}
          style={
            expenseType === "EXPENSE"
              ? [styles.category, styles.selectedCategory]
              : styles.category
          }
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>EXPENSE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => dispatch(chooseType("TRANSFER"))}
          style={
            expenseType === "TRANSFER"
              ? [styles.category, styles.selectedCategory]
              : styles.category
          }
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>TRANSFER</Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          expenseType !== "TRANSFER"
            ? styles.resultContainer
            : styles.transferContainer
        }
      >
        {expenseType === "EXPENSE" && (
          <Ant name="minus" color={"#fff"} size={50} />
        )}
        {expenseType === "INCOME" && (
          <Ant name="plus" color={"#fff"} size={45} />
        )}
        {result ? (
          <View style={styles.amountContainer}>
            <Text style={{ fontSize: 100, color: "#fff", marginRight: 15 }}>
              {result}
            </Text>
            <Text style={styles.result}> ETB</Text>
          </View>
        ) : (
          <View style={styles.amountContainer}>
            <Text
              style={{ fontSize: 100, color: "#fff", marginRight: 15 }}
            ></Text>
            <Text style={styles.result}> ETB</Text>
          </View>
        )}
      </View>
      <View style={styles.actionContainer}>
        {expenseType !== "TRANSFER" ? (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AccountChooser", {
                  Accounts,
                  type: "normal",
                })
              }
              style={{ alignItems: "center", width: "50%" }}
            >
              <Text style={styles.actionTitle}>Account</Text>
              <Text style={styles.action}>
                {expenseAccount ? expenseAccount : "SELECT ACCOUNT"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Category")}
              style={{ alignItems: "center", width: "50%" }}
            >
              <Text style={styles.actionTitle}>Category</Text>
              <Text style={styles.action}>
                {expenseCategory ? expenseCategory : "SELECT CATEGORY"}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AccountChooser", {
                  Accounts,
                  type: "normal",
                })
              }
              style={{ alignItems: "center", width: "50%" }}
            >
              <Text style={styles.actionTitle}>From account</Text>
              <Text style={styles.action}>
                {expenseAccount ? expenseAccount : "SELECT ACCOUNT"}
              </Text>
            </TouchableOpacity>
            <Ant name="arrowright" color="#fff" size={23} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AccountChooser", {
                  Accounts,
                  type: "transfer",
                })
              }
              style={{ alignItems: "center", width: "50%" }}
            >
              <Text style={styles.actionTitle}>To account</Text>
              <Text style={styles.action}>
                {expenseReceiverAccount
                  ? expenseReceiverAccount
                  : "SELECT ACCOUNT"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.numberpadContainer}>
          <View style={styles.numberpadRowContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("7")}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("8")}
            >
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("9")}
            >
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numberpadRowContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("4")}
            >
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("5")}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("6")}
            >
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numberpadRowContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("1")}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("2")}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("3")}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numberpadRowContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("0")}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress(".")}
            >
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("⌫")}
            >
              <Text style={styles.buttonText}>⌫</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.characterContainer}>
          <TouchableOpacity
            style={styles.characterButton}
            onPress={() => handlePress("/")}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.characterButton}
            onPress={() => handlePress("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.characterButton}
            onPress={() => handlePress("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.characterButton}
            onPress={() => handlePress("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.characterButton}
            onPress={() => handlePress("=")}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
