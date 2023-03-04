import * as SecureStore from "expo-secure-store";
import * as Crypto from "expo-crypto";

export default async function StoreCredentials(username, password) {
  await SecureStore.setItemAsync("username", username.toString());
  const salt = await Crypto.getRandomBytesAsync(16);
  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    salt + password
  );

  let stretchedPassword = hashedPassword;

  for (let i = 0; i < 1000; i++) {
    stretchedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      stretchedPassword
    );
  }
  await SecureStore.setItemAsync("salt", salt);
  await SecureStore.setItemAsync("password", stretchedPassword);
}
