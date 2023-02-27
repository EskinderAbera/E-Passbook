import React from 'react';
import { useState } from 'react';
import {
    View, Text, Image,
    Modal,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from "./styles";

const Donation = ({ imageSource, title, percent, donationRaised, hoursLeft }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [donationAmount, setDonationAmount] = useState('');

    const handleDonate = () => {
        console.log(username, password, donationAmount);
        setModalVisible(false);
        // Reset form
        setUsername('');
        setPassword('');
        setDonationAmount('');
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <Image source={{ uri: imageSource }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.progressBarContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progress, { width: percent * 100 + "%" }]} />
                        </View>
                        <Text style={styles.progressText}>{`${(percent * 100).toFixed(2)}%`}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View>
                            <Text style={styles.donationText}>Donation Raised</Text>
                            <Text style={styles.donationRaised}>{`$${donationRaised} raised`}</Text>
                        </View>
                        <Text style={styles.hoursLeft}>{`🕔 ${hoursLeft} hours left`}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity style={styles.centeredView} activeOpacity={1} onPress={() => setModalVisible(false)}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
                        <View style={styles.formContainer}>
                            <Text style={styles.donateText}>Donate</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                value={username}
                                onChangeText={setUsername}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Donation amount"
                                keyboardType="numeric"
                                value={donationAmount}
                                onChangeText={setDonationAmount}
                            />
                            <TouchableOpacity style={styles.donateButton} onPress={handleDonate}>
                                <Text style={styles.donateButtonText}>Donate</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
    );
};



export default Donation;
