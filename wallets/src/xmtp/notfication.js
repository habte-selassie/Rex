import { Client } from "@XMTP"; // XMTP JavaScript client

// Alix initializes their wallet on the Frontend
const XMTPClient = await Client.create(alicdeSigner, {env: "dev"});

// Get token from firebase
// Get token from Firebase
const deviceToken = await messaging().getToken();
// Get unique ID for the device
const installationId = await installations().getId();
// Assume this function sets up your notification client
const client = createNotificationClient();
 
await client.registerInstallation({
  installationId,
  deliveryMechanism: {
    deliveryMechanismType: {
      value: deviceToken,
      case: "FirebaseDeviceToken",
    },
  },
});

let subscriptionDetails = [];
 
// Filter conversations to only include those with user consent, to respect privacy and avoid SPAM.
const consentedConversations = conversations.filter(
  (conversation) => conversation.consentState === "allowed",
);
 
// Compile the subscription info, attaching the HMAC key when available.
consentedConversations.forEach((conversation) => {
  subscriptionDetails.push({
    topic: conversation.topic,
    hmacKey: conversation.hmacKey || null,
  });
});
 
// Special topics without HMAC keys
subscriptionDetails.push({
  topic: buildUserInviteTopic(userAddress),
  hmacKey: null,
});
subscriptionDetails.push({
  topic: buildUserIntroTopic(userAddress),
  hmacKey: null,
});
 
// This operation sends the subscription details to the notification service.
await notificationClient.subscribeWithMetadata({
  installationId,
  subscriptions: subscriptionDetails,
});


// Listener for incoming Firebase notifications
messaging().onMessage(async (remoteMessage) => {
    console.log("A new message arrived!", remoteMessage);
  });


  const bobClient = await Client.create(bobSigner, { env: "dev" });
const conversation = await bobClient.conversations.newConversation(aliceWallet);
await conversation.send("Hello Alix!");

// Pseudo-code for XMTP network sending encrypted message
const messageTopic = "XMTP/0/dm-alice-XMTP-topic-id";
sendToNotificationServer(encryptedMessage, messageTopic);


const message = {
    data: {
      topic: messageTopic,
      message: encryptedMessage,
    },
    topic: messageTopic,
  };
  firebase_admin.messaging().send(message);


  // Decrypting the message when a notification is received from Firebase
Firebase.messaging().onMessage((payload) => {
    const decryptedMessage = decryptMessage(payload.data.message, encryptionKey);
    console.log("Decrypted message:", decryptedMessage);
  });

  